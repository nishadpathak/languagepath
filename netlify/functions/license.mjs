// GET /.netlify/functions/license?session_id=cs_... — /pro-success.html polls this right after checkout.
// 202 while the webhook hasn't landed yet (the page retries), 200 with the licence once it has.
import { getSession } from "./lib/store.mjs";
import { publicView } from "./lib/fulfil.mjs";
export default async function handler(req) {
  if (req.method !== "GET") return new Response("Method Not Allowed", { status: 405 });
  const sid = new URL(req.url).searchParams.get("session_id") || "";
  if (!/^cs_(test|live)_[A-Za-z0-9]{10,200}$/.test(sid)) return Response.json({ error: "bad session id" }, { status: 400 });
  try {
    const r = await getSession(sid);
    if (!r) return Response.json({ pending: true, error: "We're still confirming your payment with Stripe…" }, { status: 202, headers: { "cache-control": "no-store", "retry-after": "3" } });
    return Response.json(publicView(r), { headers: { "cache-control": "no-store" } });
  } catch (e) { console.error("[license]", e.message); return Response.json({ error: "Could not look up this purchase yet. Please retry in a minute." }, { status: 502 }); }
}
