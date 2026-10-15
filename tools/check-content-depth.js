#!/usr/bin/env node
/* CONTENT-DEPTH GUARD (AdSense "low value content" / "ads on screens without publisher content").
   For every prerendered page in dist/: counts the words of its unique written content (the
   <article id="lpGuide"> plus, on topic pages, the curated topic text), measures how much of it is
   unique across the site (8-word shingles), and writes dist/word-counts.json.
   FAILS if any page carrying data-ads="1" is under MIN_WORDS / MIN_UNIQUE, is not a language,
   topic or travel page, or if the runtime ad loader is not gated. */
"use strict";
const fs = require("fs"), path = require("path");
const { score, MIN_WORDS, MIN_UNIQUE } = require("./content-quality.js");
const { activeViewHTML, textOf } = require("./wordcount.js");
const dist = path.join(__dirname, "..", "dist");
if (!fs.existsSync(dist)) { console.log("CONTENT-DEPTH: dist/ missing — run node tools/prerender.js first"); process.exit(1); }
const files = []; (function walk(d) { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); if (e.isDirectory()) walk(p); else if (e.name.endsWith(".html")) files.push(p); } })(dist);
const pages = [], meta = {}, errs = [];
for (const f of files) {
  const h = fs.readFileSync(f, "utf8"), rel = "/" + path.relative(dist, f).replace(/\.html$/, "").replace(/(^|\/)index$/, "");
  const route = rel === "/" ? "/" : rel.replace(/\/$/, "");
  const ads = /<html [^>]*data-ads="1"/.test(h), av = activeViewHTML(h);
  const g = h.match(/<article id="lpGuide"[^>]*data-kind="([a-z]+)"[^>]*>([\s\S]*?)<\/article>/);
  const kind = g ? g[1] : (av.view || "static");
  meta[route] = { ads, view: av.view };
  pages.push({ route, kind, text: (g ? textOf(g[2]) : "") + (av.view === "topic" ? " " + textOf(av.html) : "") });
  if (ads && !/function lpAdsAllowed\(\)/.test(h)) errs.push("ad loader not gated: " + route);
}
const sc = score(pages), rows = [];
for (const p of pages) {
  const s = sc[p.route], m = meta[p.route]; rows.push({ route: p.route, kind: p.kind, view: m.view, words: s.words, unique: s.unique, ads: m.ads });
  if (m.ads && !s.eligible) errs.push(`ad page under threshold: ${p.route} (${s.words} words, ${Math.round(s.unique * 100)}% unique)`);
  if (m.ads && !["home", "topic", "travel"].includes(m.view)) errs.push(`ads on app screen view=${m.view}: ${p.route}`);
}
rows.sort((a, b) => a.route.localeCompare(b.route));
fs.writeFileSync(path.join(dist, "word-counts.json"), JSON.stringify(rows, null, 1));
const ad = rows.filter(r => r.ads).map(r => r.words).sort((a, b) => a - b);
const med = ad.length ? ad[ad.length >> 1] : 0;
console.log(`CONTENT-DEPTH: ${rows.length} pages counted; ${ad.length} ad-eligible (min ${ad[0] || 0}, median ${med} words; threshold ${MIN_WORDS} words, ${MIN_UNIQUE * 100}% unique); report dist/word-counts.json`);
if (process.argv.includes("--list")) for (const r of rows) console.log(`  ${r.ads ? "AD " : "   "} ${String(r.words).padStart(5)}w ${String(Math.round(r.unique * 100)).padStart(3)}%u  ${r.route}`);
if (errs.length) { errs.slice(0, 30).forEach(e => console.log("  FAIL " + e)); console.log("CONTENT-DEPTH GUARD FAIL"); process.exit(1); }
console.log("CONTENT-DEPTH GUARD PASS");
