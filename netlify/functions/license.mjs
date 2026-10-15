// GET /.netlify/functions/license?session_id=cs_...  — used by /pro-success.html right after checkout.
import { licenseForSession } from "./lib/fulfil.mjs";
export default async function handler(req) {
  if (req.method !== "GET") return new Response("Method Not Allowed", { status: 405 });
  const sid = new URL(req.url).searchParams.get("session_id");
  try {
    const r = await licenseForSession(sid);
    if (r.error) return Response.json({ error: r.error }, { status: r.status || 400 });
    return Response.json({ license: r.license, kind: r.payload.kind, packs: r.payload.packs, exp: r.payload.exp || null, email: r.email, downloads: r.downloads }, { headers: { "cache-control": "no-store" } });
  } catch (e) { console.error("[license]", e.message); return Response.json({ error: "Could not look up this purchase yet. Please retry in a minute." }, { status: 502 }); }
}
