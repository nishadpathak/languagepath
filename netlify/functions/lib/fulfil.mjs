// Turns verified webhook events into licence records.
import { SKUS, EXTRA_PACKS } from "./catalog.mjs";
import { PLINKS } from "./links.mjs";
import { issueLicense, issueDownload } from "./license.mjs";
import { getSession, putSession, getSubLink, putSubLink } from "./store.mjs";
const GRACE = 3 * 86400, now = () => Math.floor(Date.now() / 1000);
const PERIOD = { month: 31 * 86400, year: 366 * 86400 };
export const downloadsFor = packs => (packs || []).map(c => ({ city: c.replace(/-/g, " ").replace(/\b\w/g, m => m.toUpperCase()), title: EXTRA_PACKS[c] || (c.replace(/-/g, " ").replace(/\b\w/g, m => m.toUpperCase()) + " Phrase Pack"), url: "/.netlify/functions/download?t=" + encodeURIComponent(issueDownload(c)) }));
const mint = r => issueLicense({ kind: r.kind, skus: [r.product], packs: r.packs, sid: r.session_id, ...(r.kind === "pro" ? { exp: r.expiry } : {}), iat: now() });
export async function onCheckout(s) {
  const product = PLINKS[s.payment_link];
  if (!product || !SKUS[product]) return { skipped: "not a LanguagePath payment link" };
  if (!(s.status === "complete" && (s.payment_status === "paid" || s.payment_status === "no_payment_required"))) return { skipped: "payment not completed yet" };
  const prev = await getSession(s.id); if (prev && prev.license) return { ok: true, dup: true };   // idempotent on retries
  const sku = SKUS[product];
  const rec = { session_id: s.id, product, kind: sku.kind, packs: sku.packs || [], city: (sku.packs || []).length === 1 ? sku.packs[0] : (sku.packs ? "all" : null),
    expiry: sku.kind === "pro" ? now() + PERIOD[sku.recurring] + GRACE : null, status: "active",
    email: (s.customer_details && s.customer_details.email) || s.customer_email || null, subscription: s.subscription || null };
  rec.license = mint(rec);
  await putSession(rec); if (rec.subscription) await putSubLink(rec.subscription, rec.session_id);
  return { ok: true };
}
async function bySub(subId) { const l = subId && await getSubLink(subId); return l ? getSession(l.session_id) : null; }
export async function onInvoicePaid(inv) {
  const subId = inv.subscription || (inv.parent && inv.parent.subscription_details && inv.parent.subscription_details.subscription);
  const rec = await bySub(subId); if (!rec) return { skipped: "unknown subscription" };   // first invoice can precede checkout; checkout sets the initial expiry
  const end = Math.max(...((inv.lines && inv.lines.data) || []).map(l => (l.period && l.period.end) || 0), 0);
  if (end && end + GRACE > (rec.expiry || 0)) { rec.expiry = end + GRACE; rec.status = "active"; rec.license = mint(rec); await putSession(rec); }
  return { ok: true };
}
export async function onSubscriptionDeleted(sub) {
  const rec = await bySub(sub.id); if (!rec) return { skipped: "unknown subscription" };
  const end = sub.ended_at || sub.canceled_at || now();
  rec.status = "canceled"; rec.expiry = Math.min(rec.expiry || end, end + GRACE); rec.license = mint(rec); await putSession(rec);
  return { ok: true };
}
export const publicView = r => ({ license: r.license, kind: r.kind, product: r.product, packs: r.packs, exp: r.expiry, status: r.status, email: r.email, downloads: downloadsFor(r.packs) });
