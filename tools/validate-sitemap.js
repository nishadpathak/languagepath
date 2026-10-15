#!/usr/bin/env node
/* LanguagePath — sitemap + language-code validator.
   Guards against the recurring bug of using TTS codes (es/zh/ar/...) or wrong slugs
   as routing identifiers. Exits non-zero if the sitemap is inconsistent.

   Usage: node tools/validate-sitemap.js
*/
const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..");

const sitemap = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
const idx = fs.readFileSync(path.join(root, "index.html"), "utf8");

const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
const langCodes = new Set(require(path.join(root, "lan-codes.json")));

// the 9 flagship + 60 authored codes come from lan-codes.json (generated from the app registry)
const VIEWS = new Set(["lessons","dialog","pocket","culture","resources","sound","listen"]);
const SPECIAL = new Set(["about.html","pro.html","contact.html","privacy.html","terms.html","learn","map","voyage","path"]);

// Travel destination pages are /travel/{country-slug}/{city-slug}, driven by the TRAVEL array in
// index.html — not a language hub, so they don't fit the /{lang}/{topic} shape below. Validate
// them as real (country, city) pairs from that array rather than blanket-allowing anything under
// /travel/*, so a typo'd or stale destination URL still gets caught.
const travelCityPairs = new Set(
  [...idx.matchAll(/\{country:"[^"]+",slug:"([a-z-]+)"[^}]*cities:\[([^\]]+)\]/gs)]
    .flatMap(m => [...m[2].matchAll(/slug:"([a-z-]+)"/g)].map(c => m[1] + "/" + c[1]))
);
// Wrong TTS codes that must never be routing slugs.
const BAD_TTS = { es:"spanish", zh:"mandarin", ar:"arabic", fr:"french", de:"german", pt:"portuguese", te:"telugu", fa:"farsi" };
const NOINDEX = new Set(["join","request","admin"]);

const errs = [];
const seen = new Set();

// curated topic pages (lang/slug) from the content registry
const curated = new Set(
  [...idx.matchAll(/"([a-z-]+)\|([a-z-]+)":\{/g)].map(m => m[1] + "/" + m[2])
);

for (const u of urls) {
  if (seen.has(u)) errs.push("DUPLICATE: " + u);
  seen.add(u);
  const parts = u.replace("https://languagepath.org/", "").split("/").filter(Boolean);
  if (!parts.length) continue;
  const [lang, seg] = parts;
  if (SPECIAL.has(lang)) continue;
  if (lang === "business-travel-kit" && parts.length === 1) { if (!require("fs").existsSync(require("path").join(__dirname, "..", "dist", "business-travel-kit", "index.html"))) errs.push("missing kit page"); continue; }
  if (lang === "learn-english") { if (parts.length > 2 || !require("fs").existsSync(require("path").join(__dirname, "..", "dist", ...parts, "index.html"))) errs.push("missing learn-english page: " + u); continue; }
  if (lang === "events") { // static trade-show pages: must exist in dist as /events/visiting/<slug>/index.html
    const f = require("path").join(__dirname, "..", "dist", ...parts, "index.html");
    if (parts[1] !== "visiting" || parts.length > 3 || !require("fs").existsSync(f)) errs.push("BAD EVENTS URL or missing page: " + u);
    continue;
  }
  if (lang === "travel") {
    if (parts.length === 1) continue; // /travel landing page
    if (parts.length === 3 && travelCityPairs.has(parts[1] + "/" + parts[2])) continue;
    errs.push("UNKNOWN TRAVEL DESTINATION: " + u);
    continue;
  }
  if (BAD_TTS[lang]) errs.push("WRONG TTS CODE " + lang + " -> " + BAD_TTS[lang] + "  (" + u + ")");
  if (NOINDEX.has(lang)) errs.push("NOINDEX route in sitemap: " + u);
  if (!langCodes.has(lang)) errs.push("UNKNOWN LANGUAGE SLUG " + lang + "  (" + u + ")");
  if (parts.length === 1) continue; // hub
  if (parts.length === 2) {
    if (VIEWS.has(seg)) continue;
    if (curated.has(lang + "/" + seg)) continue;
    errs.push("NO CONTENT for route: " + u);
  } else {
    errs.push("UNEXPECTED DEPTH: " + u);
  }
}

// ensure every language hub exists in sitemap
const hubPaths = new Set(urls.map(u => u.replace("https://languagepath.org/", "").replace(/\/.*/, "")));
for (const c of langCodes) {
  if (!hubPaths.has(c)) errs.push("MISSING LANGUAGE HUB: /" + c);
}

if (errs.length) {
  console.error("SITEMAP VALIDATION FAILED (" + errs.length + " issues):");
  errs.slice(0, 30).forEach(e => console.error("  " + e));
  process.exit(1);
}
console.log("SITEMAP VALIDATION PASS — " + urlCount() + " URLs, " + langCodes.size + " languages, all slugs valid, no wrong TTS codes, no noindex routes.");
function urlCount(){ return urls.length; }
