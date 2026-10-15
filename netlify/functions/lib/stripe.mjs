// Stripe webhook signature verification (no SDK, no API key needed).
// Header: "t=<unix>,v1=<hex hmac-sha256(secret, t + '.' + rawBody)>"; constant-time compare, 300 s tolerance.
import crypto from "node:crypto";
export function verifyWebhook(rawBody, header, secret, toleranceSec = 300) {
  if (!secret || !header) return false;
  let t = null; const v1 = [];
  for (const part of String(header).split(",")) { const [k, v] = part.split("="); if (k === "t") t = v; else if (k === "v1") v1.push(v); }
  if (!t || !v1.length) return false;
  if (Math.abs(Date.now() / 1000 - Number(t)) > toleranceSec) return false;
  const want = crypto.createHmac("sha256", secret).update(`${t}.${rawBody}`, "utf8").digest();
  return v1.some(sig => { const got = Buffer.from(sig, "hex"); return got.length === want.length && crypto.timingSafeEqual(got, want); });
}
