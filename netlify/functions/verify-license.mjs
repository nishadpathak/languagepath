// POST /.netlify/functions/verify-license {key} — restore purchase + daily refresh. The signed key names its
// checkout session; the Blobs record holds the latest state (renewals extend, cancellations end Pro).
import { readLicense } from "./lib/license.mjs";
import { getSession } from "./lib/store.mjs";
import { publicView, downloadsFor } from "./lib/fulfil.mjs";
export default async function handler(req) {
  if (req.method !== "POST") return new Response("Method Not Allowed", { status: 405 });
  let key = ""; try { key = ((await req.json()) || {}).key || ""; } catch (e) {}
  const p = readLicense(key);
  if (!p) return Response.json({ valid: false, error: "This key isn't valid. Check it was copied completely." }, { status: 400 });
  let rec = null; try { rec = p.sid && await getSession(p.sid); } catch (e) {}
  const view = rec ? publicView(rec) : { license: key, kind: p.kind, packs: p.packs || [], exp: p.exp || null, downloads: downloadsFor(p.packs) };
  if (view.kind === "pro" && !(view.exp > Date.now() / 1000) && !(view.packs || []).length) return Response.json({ valid: false, error: "This Pro subscription has ended. You can renew at languagepath.org/pro." }, { status: 410 });
  return Response.json({ valid: true, ...view }, { headers: { "cache-control": "no-store" } });
}
