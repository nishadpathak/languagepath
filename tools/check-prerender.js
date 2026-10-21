#!/usr/bin/env node
/* Guard for the prerendered build (run after tools/prerender.js):
   - every sitemap route has dist/<route>/index.html
   - titles + meta descriptions are unique; canonical === the page's own URL
   - real content in the HTML (active view has text), dist/404.html exists and is noindex
   - netlify.toml has no "/* -> /index.html 200" catch-all (which would turn 404s into soft 404s) */
"use strict";
const fs = require("fs"), path = require("path");
const root = path.join(__dirname, ".."), dist = path.join(root, "dist");
const errs = [];
if (!fs.existsSync(dist)) { console.log("PRERENDER CHECK SKIPPED — no dist/ (run node tools/prerender.js first)"); process.exit(0); }
const nt = fs.readFileSync(path.join(root, "netlify.toml"), "utf8");
if (/from\s*=\s*"\/\*"[\s\S]{0,80}to\s*=\s*"\/index\.html"[\s\S]{0,40}status\s*=\s*200/.test(nt)) errs.push("netlify.toml still has the SPA catch-all");
const red = fs.existsSync(path.join(dist, "_redirects")) ? fs.readFileSync(path.join(dist, "_redirects"), "utf8") : "";
if (/^\/\*\s+\/index\.html\s+200/m.test(red)) errs.push("_redirects has a catch-all");
const nf = path.join(dist, "404.html");
if (!fs.existsSync(nf) || !/noindex/.test(fs.readFileSync(nf, "utf8"))) errs.push("dist/404.html missing or not noindex");
const urls = [...fs.readFileSync(path.join(root, "sitemap.xml"), "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => new URL(m[1].trim()).pathname);
const titles = {}, descs = {};
let n = 0;
for (const r of urls) {
  const f = r.endsWith("/") && r !== "/" ? path.join(dist, r, "index.html") : /\.[a-z]+$/i.test(r) ? path.join(dist, r) : (r === "/" ? path.join(dist, "index.html") : path.join(dist, r + ".html"));
  if (!fs.existsSync(f)) { errs.push("missing " + r); continue; }
  if (/\.[a-z]+$/i.test(r)) continue; n++;
  const h = fs.readFileSync(f, "utf8");
  const t = (h.match(/<title>([^<]*)<\/title>/) || [])[1], d = (h.match(/<meta name="description" content="([^"]*)"/) || [])[1];
  const c = (h.match(/<link rel="canonical" href="([^"]*)"/) || [])[1];
  if (!t) errs.push("no title " + r); else (titles[t] = titles[t] || []).push(r);
  if (!d) errs.push("no description " + r); else (descs[d] = descs[d] || []).push(r);
  if (c !== "https://languagepath.org" + r) errs.push("canonical " + r + " -> " + c);
  const act = (r.startsWith("/events/") || r.startsWith("/learn-english/") || r === "/business-travel-kit/" || r === "/tef-grader/") ? h.match(/<main>([\s\S]*?)<\/main>/) : h.match(/<section class="view active" id="view-[a-z]+">([\s\S]*?)<\/section>/);
  const txt = act ? act[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim() : "";
  if (txt.length < 80) errs.push("thin/empty content " + r + " (" + txt.length + ")");
}
for (const [t, rs] of Object.entries(titles)) if (rs.length > 1) errs.push("duplicate title '" + t + "': " + rs.join(", "));
for (const [d, rs] of Object.entries(descs)) if (rs.length > 1) errs.push("duplicate description: " + rs.join(", "));
if (errs.length) { console.log("PRERENDER CHECK FAILED (" + errs.length + "):"); errs.slice(0, 30).forEach(e => console.log("  " + e)); process.exit(1); }
console.log("PRERENDER CHECK PASS — " + n + " prerendered routes, unique titles/descriptions, self-canonicals, real content, real 404, no catch-all.");
{ // Home guard: dist/index.html must be the prerendered home, not the raw ~800 KB app shell.
  const h = fs.readFileSync(path.join(dist, "index.html"), "utf8"), kb = Buffer.byteLength(h) / 1024;
  const bad = []; if (kb > 150) bad.push("dist/index.html is " + kb.toFixed(0) + " KB (> 150 KB)"); if (!/data-prerendered="\/"/.test(h)) bad.push('dist/index.html lacks data-prerendered="/"');
  if (!/<link rel="canonical" href="https:\/\/languagepath\.org\/">/.test(h)) bad.push("dist/index.html canonical is not /");
  if (bad.length) { console.error("HOME GUARD FAIL — " + bad.join("; ")); process.exit(1); } else console.log("HOME GUARD PASS — dist/index.html " + kb.toFixed(0) + " KB, prerendered /");
}
{ // One h1 per HTML page in dist.
  const walk = d => fs.readdirSync(d, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(path.join(d, e.name)) : e.name.endsWith(".html") ? [path.join(d, e.name)] : []);
  const bad = walk(dist).filter(f => (fs.readFileSync(f, "utf8").match(/<h1[\s>]/g) || []).length !== 1).map(f => path.relative(dist, f));
  if (bad.length) { console.error("H1 GUARD FAIL — not exactly one <h1>: " + bad.slice(0, 15).join(", ")); process.exit(1); } else console.log("H1 GUARD PASS — every page has exactly one <h1>");
}
