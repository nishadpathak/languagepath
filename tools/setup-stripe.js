#!/usr/bin/env node
/* Idempotently creates the LanguagePath Stripe catalogue: products, prices, Payment Links and the webhook endpoint,
   then writes the public Payment Link URLs into pro-config.js. Safe to re-run: it finds existing objects by
   metadata.lp_sku (products / links), lookup_key (prices) and URL (webhook) before creating anything.
   Usage:  STRIPE_SECRET_KEY=sk_test_... node tools/setup-stripe.js [--site https://languagepath.org] [--dry-run]
   The key is read from the environment only and is never printed or written to disk. */
"use strict";
const fs = require("fs"), path = require("path");
const args = process.argv.slice(2), opt = n => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : null; };
const SITE = (opt("--site") || "https://languagepath.org").replace(/\/+$/, ""), DRY = args.includes("--dry-run");
const KEY = process.env.STRIPE_SECRET_KEY || "";
if (!/^(sk|rk)_(test|live)_/.test(KEY)) { console.error("Set STRIPE_SECRET_KEY (sk_test_… or sk_live_…) in the environment."); process.exit(1); }
const MODE = KEY.includes("_live_") ? "live" : "test";
const enc = (o, p = "", out = []) => { for (const [k, v] of Object.entries(o)) { if (v == null) continue; const key = p ? `${p}[${k}]` : k;
  if (typeof v === "object") enc(v, key, out); else out.push(encodeURIComponent(key) + "=" + encodeURIComponent(v)); } return out.join("&"); };
async function api(method, p, params, idem) {
  if (DRY && method !== "GET") { console.log("  [dry-run]", method, p); return { id: "dry_" + p, url: "" }; }
  const q = params && method === "GET" ? "?" + enc(params) : "";
  const r = await fetch("https://api.stripe.com/v1" + p + q, { method, headers: { authorization: "Bearer " + KEY, "stripe-version": "2024-06-20",
    "content-type": "application/x-www-form-urlencoded", ...(idem ? { "idempotency-key": idem } : {}) }, body: method === "GET" ? undefined : enc(params || {}) });
  const j = await r.json(); if (!r.ok) throw new Error(`${method} ${p}: ${(j.error && j.error.message) || r.status}`); return j;
}
async function all(p, params = {}) { let out = [], after; for (;;) { const j = await api("GET", p, { limit: 100, ...params, ...(after ? { starting_after: after } : {}) }); out = out.concat(j.data); if (!j.has_more) return out; after = j.data[j.data.length - 1].id; } }
(async () => {
  const { SKUS, LOOKUP } = await import(path.join(__dirname, "..", "netlify", "functions", "lib", "catalog.mjs"));
  console.log(`Stripe ${MODE} mode · site ${SITE}${DRY ? " · DRY RUN" : ""}`);
  const products = await all("/products", { active: true }), links = await all("/payment_links", { active: true });
  const prices = await all("/prices", { active: true });
  const config = {}, plinks = {};
  for (const [sku, s] of Object.entries(SKUS)) {
    let prod = products.find(p => p.metadata && p.metadata.lp_sku === sku);
    if (!prod) { prod = await api("POST", "/products", { name: s.name, metadata: { lp_sku: sku }, tax_code: s.kind === "pro" ? "txcd_10103001" : "txcd_10302000" }, `lp-prod-${sku}`); console.log("+ product", sku); }
    let price = prices.find(p => p.lookup_key === LOOKUP(sku));
    if (price && (price.unit_amount !== s.amount || (price.recurring && price.recurring.interval) !== (s.recurring || undefined))) {
      // amount changed in catalog.mjs: make a new price and move the lookup_key to it
      price = null; console.log("~ price changed for", sku);
    }
    if (!price) { price = await api("POST", "/prices", { product: prod.id, currency: "usd", unit_amount: s.amount, lookup_key: LOOKUP(sku), transfer_lookup_key: true, tax_behavior: "exclusive",
      ...(s.recurring ? { recurring: { interval: s.recurring } } : {}), metadata: { lp_sku: sku } }, `lp-price-${sku}-${s.amount}-${s.recurring || "once"}`); console.log("+ price", sku); }
    let link = links.find(l => l.metadata && l.metadata.lp_sku === sku && l.metadata.lp_price === price.id);
    if (!link) {
      for (const old of links.filter(l => l.metadata && l.metadata.lp_sku === sku)) await api("POST", "/payment_links/" + old.id, { active: false });
      link = await api("POST", "/payment_links", { "line_items[0][price]": price.id, "line_items[0][quantity]": 1, metadata: { lp_sku: sku, lp_price: price.id },
        after_completion: { type: "redirect", redirect: { url: SITE + "/pro-success.html?session_id={CHECKOUT_SESSION_ID}" } },
        allow_promotion_codes: true, automatic_tax: { enabled: false }, ...(s.recurring ? {} : { customer_creation: "always" }) }, `lp-link-${sku}-${price.id}`);
      console.log("+ payment link", sku);
    }
    config[sku] = link.url; plinks[link.id] = sku;
  }
  const hookUrl = SITE + "/.netlify/functions/stripe-webhook";
  const hooks = await all("/webhook_endpoints"), hook = hooks.find(h => h.url === hookUrl);
  const events = ["checkout.session.completed", "checkout.session.async_payment_succeeded", "customer.subscription.deleted", "invoice.paid"];
  if (!hook) { const h = await api("POST", "/webhook_endpoints", { url: hookUrl, enabled_events: events, api_version: "2024-06-20", description: "LanguagePath licence fulfilment" });
    console.log("+ webhook", hookUrl, "\n  ⚠ Copy its signing secret ONCE from the Stripe Dashboard (Developers → Webhooks) into Netlify env STRIPE_WEBHOOK_SECRET.", h.secret ? "(secret returned by API but not printed)" : ""); }
  else { if (events.some(e => !hook.enabled_events.includes(e))) await api("POST", "/webhook_endpoints/" + hook.id, { enabled_events: events }); console.log("= webhook exists", hookUrl); }
  const file = path.join(__dirname, "..", "pro-config.js"); let src = fs.readFileSync(file, "utf8");
  for (const [sku, url] of Object.entries(config)) if (url) src = src.replace(new RegExp(`(\\b${sku}: )"[^"]*"`), `$1"${url}"`);
  if (!DRY) { fs.writeFileSync(file, src);
    const lf = path.join(__dirname, "..", "netlify", "functions", "lib", "links.mjs");
    fs.writeFileSync(lf, fs.readFileSync(lf, "utf8").replace(/export const PLINKS = \{[\s\S]*?\};/, "export const PLINKS = " + JSON.stringify(plinks, null, 2) + ";")); }
  console.log(DRY ? "Dry run: pro-config.js not changed." : "pro-config.js updated — commit it and deploy.");
})().catch(e => { console.error("setup-stripe failed:", e.message); process.exit(1); });
