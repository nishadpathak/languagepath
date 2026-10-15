// POST /.netlify/functions/verify-license {key} — restore purchase + periodic re-check.
// Returns a refreshed key for active Pro subscriptions and fresh signed download links for packs.
import { readLicense, issueLicense } from "./lib/license.mjs";
import { refreshPro, downloadsFor } from "./lib/fulfil.mjs";
export default async function handler(req) {
  if (req.method !== "POST") return new Response("Method Not Allowed", { status: 405 });
  let key = ""; try { key = ((await req.json()) || {}).key || ""; } catch (e) {}
  const p = readLicense(key);
  if (!p) return Response.json({ valid: false, error: "This key isn't valid. Check it was copied completely." }, { status: 400 });
  let out = p;
  if (p.kind === "pro") { try { out = await refreshPro(p); } catch (e) { out = p.exp > Date.now() / 1000 ? p : null; } }
  if (!out) return Response.json({ valid: false, error: "This Pro subscription is no longer active." }, { status: 410 });
  return Response.json({ valid: true, license: out === p ? key : issueLicense(out), kind: out.kind, packs: out.packs || [], exp: out.exp || null, downloads: downloadsFor(out.packs) }, { headers: { "cache-control": "no-store" } });
}
