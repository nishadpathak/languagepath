#!/usr/bin/env node
/* Brand guard: LanguagePath is an independent company — no personal names, company aliases or personal emails
   may appear anywhere public. Scans dist/ (all text files) and the paid phrase-pack PDFs (text + metadata). */
"use strict";
const fs = require("fs"), path = require("path"), { execFileSync } = require("child_process");
const root = path.join(__dirname, ".."), RX = /nishad|pathak|\bNMP\b|nmp[\s-]?dmcc|\bDMCC\b|nishadpathak|87636132/i;
const hits = [];
function walk(d) { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const f = path.join(d, e.name); if (e.isDirectory()) walk(f); else check(f); } }
function check(f) {
  if (/\.(html|js|css|json|xml|txt|svg|webmanifest|md)$|_redirects$|_headers$/.test(f)) { const t = fs.readFileSync(f, "utf8"); const m = t.match(RX); if (m) hits.push(path.relative(root, f) + ": " + m[0]);
    if (f.includes("dist") && (/\.html$/.test(f) && /<!--(?!\[if)/.test(t) || /\.(js|css)$/.test(f) && /\/\*\s*[A-Za-z]{2}|(^|[;{}\s])\/\/ [A-Z][a-z]+ [a-z]+ [a-z]+/m.test(t))) hits.push(path.relative(root, f) + ": unstripped comment"); }
  else if (f.endsWith(".pdf")) pdf(f);
}
function pdf(f) {
  let txt = "";
  try { txt = execFileSync("pdftotext", [f, "-"], { encoding: "utf8" }) + "\n" + execFileSync("pdfinfo", [f], { encoding: "utf8" }); }
  catch (e) { hits.push(path.relative(root, f) + ": pdftotext/pdfinfo unavailable — cannot verify"); return; }
  const raw = fs.readFileSync(f).toString("latin1"); const m = (txt.match(RX) || raw.match(RX)); if (m) hits.push(path.relative(root, f) + ": " + m[0]);
}
for (const d of ["dist", "private/packs"]) if (fs.existsSync(path.join(root, d))) walk(path.join(root, d));
if (hits.length) { console.error("BRAND GUARD FAIL — personal names/aliases found:\n - " + hits.join("\n - ")); process.exit(1); }
console.log("BRAND GUARD PASS — no personal names, aliases or personal emails in dist/ or phrase-pack PDFs");
