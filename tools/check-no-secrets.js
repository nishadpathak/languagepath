#!/usr/bin/env node
/* Trust guard: prevents client-side API-key storage from returning.
   The AI path uses a server-side proxy (/.netlify/functions/ai); no API key should ever be
   persisted client-side. Matches only high-confidence secret storage/values — NOT server
   env-var names referenced in copy (e.g. OPENROUTER_API_KEY) or generic local keys. */
const fs=require("fs");
const h=fs.readFileSync("index.html","utf8");
const patterns=[
  ["client-side API-key constant/name", /(?:const|let|var)\s+\w*(?:api_?key|anthropic|openai)\w*\s*=/gi],
  ["client-side API-key storage", /localStorage\.(?:set|get|remove)Item\(\s*["'][^"']*(?:api_?key|anthropic|openai)[^"']*["']/gi],
  ["inline secret value", /\b(sk-[A-Za-z0-9_-]{16,}|AIza[0-9A-Za-z]{20,}|Bearer [A-Za-z0-9._-]{20,})\b/g],
];
let errs=[];
for(const [name,re] of patterns){ const m=h.match(re); if(m&&m.length) errs.push(name+" ("+m[0].slice(0,28)+"…)"); }
if(errs.length){ console.log("NO-SECRETS GUARD FAILED:"); errs.forEach(e=>console.log("  "+e)); process.exit(1); }
console.log("NO-SECRETS GUARD PASS — no client-side API-key storage or inline secret values.");
