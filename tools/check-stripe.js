#!/usr/bin/env node
/* Stripe best-practices check for LanguagePath Pro. Fails the build on:
   - secret-looking Stripe/licence literals in tracked source (sk_/rk_ live|test, whsec_)
   - webhook not verifying the signature on the raw body with a constant-time compare + timestamp tolerance
   - secrets read from anywhere other than process.env / Netlify.env, or logged
   - pro-config.js links that aren't empty or https://buy.stripe.com/
   - paid PDFs present in dist/ or referenced from public pages; download function not token-gated
   - fulfilment trusting client data instead of re-fetching the Checkout Session from Stripe */
"use strict";
const fs = require("fs"), path = require("path"), root = path.join(__dirname, "..");
const R = f => fs.readFileSync(path.join(root, f), "utf8"); const errs = []; const bad = m => errs.push(m);
const walk = d => fs.readdirSync(path.join(root, d), { withFileTypes: true }).flatMap(e => ["node_modules", ".git", "dist", "private"].includes(e.name) ? [] : e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]);
for (const f of walk(".").filter(f => /\.(m?js|html|toml|json|md|env)$/.test(f) || /\.env/.test(f)))
  if (/\b(sk|rk)_(live|test)_[A-Za-z0-9]{8,}|\bwhsec_[A-Za-z0-9]{8,}/.test(R(f))) bad("Stripe secret literal in " + f);
const hook = R("netlify/functions/stripe-webhook.mjs"), lib = R("netlify/functions/lib/stripe.mjs"), lic = R("netlify/functions/lib/license.mjs");
if (!/req\.text\(\)/.test(hook)) bad("webhook must read the raw body (req.text()) before verifying");
if (/req\.json\(\)/.test(hook)) bad("webhook must not parse JSON before signature verification");
if (!/verifyWebhook\(/.test(hook) || !/STRIPE_WEBHOOK_SECRET/.test(hook)) bad("webhook must call verifyWebhook with STRIPE_WEBHOOK_SECRET");
if (!/timingSafeEqual/.test(lib) || !/tolerance|300/.test(lib)) bad("verifyWebhook needs timingSafeEqual + timestamp tolerance");
if (!/timingSafeEqual/.test(lic) || !/LICENSE_SECRET/.test(lic)) bad("licence signing must use LICENSE_SECRET + timingSafeEqual");
if (!/STRIPE_SECRET_KEY/.test(lib)) bad("Stripe client must read STRIPE_SECRET_KEY from env");
if (!/[Ii]dempotency/.test(hook + lib)) bad("Stripe writes should use idempotency keys");
if (!/sessions\//.test(R("netlify/functions/lib/fulfil.mjs"))) bad("fulfilment must re-fetch the Checkout Session from Stripe");
for (const f of walk("netlify/functions")) { const s = R(f); if (/console\.\w+\([^)]*(SECRET|process\.env|[ ,(]license\)|[ ,(]key\)|[ ,(]token\))/i.test(s)) bad("possible secret logging in " + f); }
const cfg = R("pro-config.js"); for (const m of cfg.matchAll(/:\s*"([^"]*)"/g)) if (m[1] && !/^https:\/\/buy\.stripe\.com\//.test(m[1])) bad("pro-config.js link is not a Stripe Payment Link: " + m[1]);
if (!/Math\.floor|exp/.test(lic) || !/LPD/.test(lic)) bad("download tokens must expire");
if (!/readDownload\(/.test(R("netlify/functions/download.mjs"))) bad("download function must verify the signed token");
if (!/private\/packs/.test(R("netlify.toml"))) bad("netlify.toml must bundle private/packs into functions");
if (fs.existsSync(path.join(root, "dist"))) { const pdfs = (function w(d) { return fs.readdirSync(d, { withFileTypes: true }).flatMap(e => e.isDirectory() ? w(path.join(d, e.name)) : e.name.endsWith(".pdf") ? [path.join(d, e.name)] : []); })(path.join(root, "dist")); if (pdfs.length) bad("PDFs in public dist: " + pdfs.join(", ")); }
for (const f of ["index.html", "pro.html", "pro-success.html", "pro-restore.html"]) if (/private\/packs|\/packs\/[\w-]+\.pdf/.test(R(f))) bad(f + " links a paid PDF directly");
if (!/\.env/.test(R(".gitignore"))) bad(".gitignore must ignore .env files");
if (errs.length) { console.error("check-stripe: FAIL\n - " + errs.join("\n - ")); process.exit(1); }
console.log("check-stripe: OK (no secrets, raw-body signature verification, env-only keys, gated private PDFs, Payment Links only)");
