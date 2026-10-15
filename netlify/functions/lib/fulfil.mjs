// Turns a completed Checkout Session into a license (deterministic: same session -> same key).
import { stripe } from "./stripe.mjs";
import { SKUS, skuFromLookup } from "./catalog.mjs";
import { issueLicense, issueDownload } from "./license.mjs";
const GRACE = 3 * 86400;
export async function licenseForSession(sessionId) {
  if (!/^cs_(test|live)_[A-Za-z0-9]+$/.test(sessionId || "")) return { error: "bad session id", status: 400 };
  const s = await stripe("GET", "/checkout/sessions/" + encodeURIComponent(sessionId), { expand: ["line_items.data.price", "subscription"] });
  const paid = s.status === "complete" && (s.payment_status === "paid" || s.payment_status === "no_payment_required");
  if (!paid) return { error: "payment not completed", status: 402 };
  const skus = (s.line_items && s.line_items.data || []).map(li => skuFromLookup(li.price && li.price.lookup_key)).filter(Boolean);
  if (!skus.length) return { error: "no LanguagePath product in this order", status: 404 };
  const pro = skus.some(k => SKUS[k].kind === "pro");
  const packs = [...new Set(skus.flatMap(k => SKUS[k].packs || []))];
  const sub = s.subscription && typeof s.subscription === "object" ? s.subscription : null;
  const payload = { kind: pro ? "pro" : "pack", skus, packs, sid: s.id, iat: s.created };
  if (pro) { payload.sub = sub ? sub.id : null; payload.exp = (sub && sub.current_period_end ? sub.current_period_end : s.created + 31 * 86400) + GRACE; }
  return { license: issueLicense(payload), payload, email: (s.customer_details && s.customer_details.email) || null, downloads: downloadsFor(packs) };
}
export function downloadsFor(packs) { return (packs || []).map(c => ({ city: c, url: "/.netlify/functions/download?t=" + encodeURIComponent(issueDownload(c)) })); }
// refresh a Pro license from the live subscription (renewals / cancellations)
export async function refreshPro(p) {
  if (!p.sub) return p.exp > Date.now() / 1000 ? p : null;
  const sub = await stripe("GET", "/subscriptions/" + encodeURIComponent(p.sub));
  if (!["active", "trialing", "past_due"].includes(sub.status)) return null;
  return { ...p, exp: sub.current_period_end + GRACE };
}
