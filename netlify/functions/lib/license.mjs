// Signed, stateless license keys and download tokens (HMAC-SHA256 with LICENSE_SECRET).
// Format: LP1.<base64url(JSON payload)>.<base64url(HMAC)>   — nothing is stored server-side.
import crypto from "node:crypto";
const b64u = b => Buffer.from(b).toString("base64url");
function secret() { const s = process.env.LICENSE_SECRET; if (!s || s.length < 32) throw new Error("LICENSE_SECRET missing or too short"); return s; }
function sign(prefix, payload) { const body = prefix + "." + b64u(JSON.stringify(payload)); return body + "." + crypto.createHmac("sha256", secret()).update(body).digest("base64url"); }
function open(prefix, token) {
  if (typeof token !== "string" || token.length > 4000) return null;
  const parts = token.trim().split("."); if (parts.length !== 3 || parts[0] !== prefix) return null;
  const want = crypto.createHmac("sha256", secret()).update(parts[0] + "." + parts[1]).digest();
  const got = Buffer.from(parts[2], "base64url");
  if (got.length !== want.length || !crypto.timingSafeEqual(got, want)) return null;
  try { return JSON.parse(Buffer.from(parts[1], "base64url").toString("utf8")); } catch (e) { return null; }
}
// payload: { v, kind:"pro"|"pack", skus:[...], packs:[city slugs], sid, sub?, iat, exp? (seconds; pro only) }
export const issueLicense = p => sign("LP1", { v: 1, ...p });
export const readLicense = k => open("LP1", k);
export const issueDownload = (city, ttlSec = 48 * 3600) => sign("LPD", { city, exp: Math.floor(Date.now() / 1000) + ttlSec });
export const readDownload = t => { const p = open("LPD", t); return p && p.exp > Date.now() / 1000 ? p : null; };
