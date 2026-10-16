#!/usr/bin/env node
/* Guard: /admin, /join, /request must be server noindex (X-Robots-Tag) AND client noindex
   (robots meta set before any language-dependent early return in updateMeta). */
const fs=require("fs");
const nt=fs.readFileSync("netlify.toml","utf8");
const h=fs.readFileSync("index.html","utf8");
const errs=[];
for(const r of ["/admin","/join","/request"]){
  if(!nt.includes('for = "'+r+'"') || !/X-Robots-Tag\s*=\s*"noindex, nofollow"/.test(nt)) errs.push("netlify.toml missing X-Robots-Tag for "+r);
}
// robots meta must be set before the `if(!lang) return;` inside updateMeta
const um=h.indexOf("function updateMeta(view){");
const robots=h.indexOf('meta[name=robots]', um);
const langReturn=h.indexOf("if(!lang) return;", um);
if(um<0 || robots<0 || langReturn<0 || robots>langReturn) errs.push("updateMeta sets robots AFTER the lang early-return (or missing)");
// normal routes must remain indexable: _noindex covers only the three routes
if(!/const _noindex=\(view==="join"\|\|view==="request"\|\|view==="admin"\);/.test(h)) errs.push("_noindex logic missing in updateMeta");
if(errs.length){ console.log("NOINDEX-ROUTES GUARD FAILED:"); errs.forEach(e=>console.log("  "+e)); process.exit(1); }
console.log("NOINDEX-ROUTES GUARD PASS — /admin /join /request are server+client noindex; public routes stay indexable.");
