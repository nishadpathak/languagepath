#!/usr/bin/env node
/* LanguagePath — Visual Path content QA guard.
   Verifies every "See It" object has the required fields + tone-marked pinyin.
   NOTE: structure/consistency only (implementation-verified). NOT a native linguistic
   review — pinyin/tone accuracy still needs a competent human reviewer. */
const fs=require("fs");
const h=fs.readFileSync("index.html","utf8");
const parts=h.split('{concept:"').slice(1);
const TONE=/[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]/;
const errs=[]; const seen=new Set();
for(const chunk of parts){
  const obj=chunk.slice(0, chunk.indexOf('}')>=0?chunk.indexOf('}'):chunk.length);
  const g=(k)=>{const m=obj.match(new RegExp(k+':"([^"]+)"')); return m?m[1]:null;};
  const concept=g("concept"), target=g("target"), pinyin=g("pinyin"), meaning=g("meaning"), build=g("build"), buildTr=g("buildTr");
  if(!target||!pinyin||!meaning||!build||!buildTr) errs.push("missing field: "+concept+" ("+target+")");
  if(pinyin && !TONE.test(pinyin)) errs.push("no tone mark: "+target+" ("+pinyin+")");
  if(target && seen.has(target)) errs.push("duplicate: "+target);
  if(target) seen.add(target);
}
console.log("objects verified:", parts.length);
if(errs.length){ console.log("DISCREPANCIES ("+errs.length+"):"); errs.slice(0,20).forEach(e=>console.log("  "+e)); process.exit(1); }
console.log("VISUAL PATH QA PASS ("+parts.length+" objects all have pinyin tone-mark + build) — implementation-verified; NATIVE LINGUISTIC REVIEW STILL PENDING.");
