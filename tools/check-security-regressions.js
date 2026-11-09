#!/usr/bin/env node
/* Security regression guard for public SPA and progress import. */
const fs=require("node:fs");
const assert=require("node:assert/strict");
const html=fs.readFileSync("index.html","utf8");
assert(!/value\s*===\s*["']languagepath["']/.test(html),"Public admin password must not return");
assert(!/localStorage\.setItem\(["']lp_admin["']/.test(html),"Client-side admin unlock must not return");
assert(html.includes("function validProgressImport(obj)"),"Progress import schema check missing");
assert(html.includes("if(!validProgressImport(obj))"),"Import must validate before updating state");
assert(html.includes("f.size>2*1024*1024"),"Import size limit missing");
assert(html.includes("Review submitted records in the authenticated Netlify Forms dashboard"),"Admin access guidance missing");
const start=html.indexOf("function renderChunks(){"),end=html.indexOf("function addChunk(){",start);
assert(start>=0&&end>start,"Chunk renderer missing");
const chunk=html.slice(start,end);
for(const key of ["c.tr","c.en","c.pr"])assert(chunk.includes("escHtml("+key+")"),"Chunk HTML escape missing for "+key);
console.log("SECURITY REGRESSION PASS — public admin disabled, imports guarded, chunk text escaped");
