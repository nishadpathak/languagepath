// GET /.netlify/functions/download?t=<signed token> — streams a phrase-pack PDF. Tokens expire after 48h;
// fresh ones come from verify-license. PDFs live in private/packs (bundled with this function via
// netlify.toml included_files) and are NOT part of the public site.
import fs from "node:fs"; import path from "node:path";
import { readDownload } from "./lib/license.mjs";
import { PACK_IDS, PACK_FILE } from "./lib/catalog.mjs";
export default async function handler(req) {
  const p = readDownload(new URL(req.url).searchParams.get("t"));
  if (!p || !PACK_IDS.includes(p.city)) return new Response("This download link is invalid or has expired. Restore your purchase at https://languagepath.org/pro-restore.html for a new link.", { status: 403 });
  const candidates = [path.join(process.cwd(), "private/packs", PACK_FILE(p.city)), path.join(process.env.LAMBDA_TASK_ROOT || "", "private/packs", PACK_FILE(p.city))];
  const f = candidates.find(x => { try { return fs.statSync(x).isFile(); } catch (e) { return false; } });
  if (!f) return new Response("File temporarily unavailable", { status: 503 });
  return new Response(fs.readFileSync(f), { headers: { "content-type": "application/pdf", "content-disposition": `attachment; filename="LanguagePath-${p.city}${p.city === "business-kit" ? "" : "-phrase-pack"}.pdf"`, "cache-control": "private, no-store", "x-robots-tag": "noindex" } });
}
