#!/usr/bin/env node
/* Post-build: strip all comments from shipped JS, CSS and HTML in dist/ (esbuild minify, legal comments dropped). */
"use strict";
const fs = require("fs"), path = require("path"), esbuild = require("esbuild");
const dist = path.join(__dirname, "..", "dist");
const js = c => esbuild.transformSync(c, { loader: "js", minify: true, legalComments: "none", charset: "utf8" }).code;
const css = c => esbuild.transformSync(c, { loader: "css", minify: true, legalComments: "none", charset: "utf8" }).code;
let n = 0;
function html(s) {
  s = s.replace(/<!--(?!\[if)[\s\S]*?-->/g, "");
  s = s.replace(/(<script\b([^>]*)>)([\s\S]*?)(<\/script>)/gi, (m, o, attrs, body, c) => {
    if (/\bsrc=/.test(attrs) || !body.trim()) return m;
    if (/type=["']?application\/(ld\+)?json/i.test(attrs)) { try { return o + JSON.stringify(JSON.parse(body)) + c; } catch { return m; } }
    if (/type=["']?(?!text\/javascript|module)/i.test(attrs) && /type=/i.test(attrs)) return m;
    return o + js(body).trim().replace(/<\/script/gi, "<\\/script") + c;
  });
  return s.replace(/(<style\b[^>]*>)([\s\S]*?)(<\/style>)/gi, (m, o, b, c) => o + css(b).trim() + c);
}
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const f = path.join(d, e.name);
    if (e.isDirectory()) { walk(f); continue; }
    const s = fs.readFileSync(f, "utf8"); let o = null;
    if (f.endsWith(".js") || f.endsWith(".mjs")) o = js(s); else if (f.endsWith(".css")) o = css(s); else if (f.endsWith(".html")) o = html(s);
    if (o !== null && o !== s) { fs.writeFileSync(f, o); n++; }
  }
})(dist);
console.log("STRIP: comments removed/minified in " + n + " files");
