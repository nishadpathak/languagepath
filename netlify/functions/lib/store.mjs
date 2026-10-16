// Purchase records in Netlify Blobs (store "lp-purchases"). No Stripe API key is needed: everything is written by
// the signature-verified webhook and read back by session id.
//   sess/<cs_...>  -> { session_id, license, product, city, packs, kind, expiry, status, email, subscription, updated }
//   sub/<sub_...>  -> { session_id }
import { getStore } from "@netlify/blobs";
const store = () => getStore({ name: "lp-purchases", consistency: "strong" });
export const getSession = id => store().get("sess/" + id, { type: "json" });
export const putSession = rec => store().setJSON("sess/" + rec.session_id, { ...rec, updated: Math.floor(Date.now() / 1000) });
export const getSubLink = id => store().get("sub/" + id, { type: "json" });
export const putSubLink = (id, session_id) => store().setJSON("sub/" + id, { session_id });
