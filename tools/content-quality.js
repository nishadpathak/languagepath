// Shared by tools/prerender.js (decides data-ads) and tools/check-content-depth.js (enforces it).
"use strict";
const { words, textOf } = require("./wordcount.js");
const MIN_WORDS = 600, MIN_UNIQUE = 0.6;
const AD_KINDS = new Set(["language", "topic", "travel"]);
function shingles(t) { const w = t.toLowerCase().match(/[\p{L}\p{N}']+/gu) || []; const s = new Set(); for (let i = 0; i + 8 <= w.length; i++) s.add(w.slice(i, i + 8).join(" ")); return s; }
// pages: [{route, kind, text}]  ->  route -> {words, unique, eligible}
function score(pages) {
  const sh = pages.map(p => shingles(p.text)), cnt = new Map();
  for (const s of sh) for (const x of s) cnt.set(x, (cnt.get(x) || 0) + 1);
  const out = {};
  pages.forEach((p, i) => {
    const s = sh[i]; let u = 0; for (const x of s) if (cnt.get(x) === 1) u++;
    const unique = s.size ? u / s.size : 0, w = words(p.text);
    out[p.route] = { kind: p.kind, words: w, unique: Math.round(unique * 100) / 100, eligible: AD_KINDS.has(p.kind) && w >= MIN_WORDS && unique >= MIN_UNIQUE };
  });
  return out;
}
module.exports = { score, MIN_WORDS, MIN_UNIQUE, AD_KINDS, textOf };
