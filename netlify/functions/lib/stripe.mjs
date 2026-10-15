// Minimal Stripe REST client (no SDK dependency). Secret key comes ONLY from the STRIPE_SECRET_KEY env var.
import crypto from "node:crypto";
export const API_VERSION = "2024-06-20";
function form(obj, pre = "", out = []) {
  for (const [k, v] of Object.entries(obj || {})) { const key = pre ? `${pre}[${k}]` : k;
    if (v === undefined || v === null) continue;
    if (Array.isArray(v)) v.forEach((x, i) => (typeof x === "object" ? form(x, `${key}[${i}]`, out) : out.push([`${key}[${i}]`, String(x)])));
    else if (typeof v === "object") form(v, key, out); else out.push([key, String(v)]); }
  return out;
}
export async function stripe(method, path, params, opts = {}) {
  const key = process.env.STRIPE_SECRET_KEY; if (!key) throw new Error("STRIPE_SECRET_KEY not set");
  let url = "https://api.stripe.com/v1" + path, body;
  const enc = new URLSearchParams(form(params)).toString();
  if (method === "GET") { if (enc) url += "?" + enc; } else body = enc;
  const headers = { authorization: "Bearer " + key, "stripe-version": API_VERSION, "content-type": "application/x-www-form-urlencoded" };
  if (opts.idempotencyKey) headers["idempotency-key"] = opts.idempotencyKey;
  const r = await fetch(url, { method, headers, body });
  const j = await r.json().catch(() => ({}));
  if (!r.ok) { const e = new Error((j.error && j.error.message) || "Stripe error " + r.status); e.status = r.status; throw e; }
  return j;
}
// Stripe webhook signature verification (https://docs.stripe.com/webhooks#verify-manually):
// HMAC-SHA256 of "<t>.<raw body>" with the endpoint secret, constant-time compare, 5-minute tolerance.
export function verifyWebhook(rawBody, header, secret, toleranceSec = 300) {
  if (!secret || !header) return false;
  let t = null; const v1 = [];
  for (const part of String(header).split(",")) { const [k, v] = part.split("="); if (k === "t") t = v; else if (k === "v1") v1.push(v); }
  if (!t || !v1.length) return false;
  if (Math.abs(Date.now() / 1000 - Number(t)) > toleranceSec) return false;
  const want = crypto.createHmac("sha256", secret).update(`${t}.${rawBody}`, "utf8").digest();
  return v1.some(sig => { const got = Buffer.from(sig, "hex"); return got.length === want.length && crypto.timingSafeEqual(got, want); });
}
