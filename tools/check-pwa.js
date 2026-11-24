"use strict";
const fs=require("node:fs"), vm=require("node:vm"), assert=require("node:assert/strict");
const origin="https://languagepath.org", h={};
const shell='<link href="/assets/v/css.123.css"><script src="/assets/v/app.456.js"></script><script src="/assets/v/data.789.js"></script>';
const entries=new Map([["/",new Response(shell)]]), added=[], deleted=[], posted=[];
let offline=false, answer;
const key=u=>typeof u==="string"?u:new URL(u.url).pathname;
const cache={
  add:async u=>{added.push(u);if(u!=="/")entries.set(u,new Response("fresh"));},
  match:async u=>entries.get(key(u))?.clone(), put:async(u,v)=>entries.set(key(u),v),
};
vm.runInNewContext(fs.readFileSync("sw.js","utf8"),{
  URL,Response,fetch:async()=>{if(offline)throw Error("offline");return answer;},
  caches:{open:async()=>cache,keys:async()=>["languagepath-v26","languagepath-v27","another-app"],delete:async k=>deleted.push(k)},
  self:{location:{origin},addEventListener:(e,f)=>h[e]=f,skipWaiting:async()=>{},clients:{claim:async()=>{}}}
});
async function trigger(name,event={}){
  const waits=[];let result;
  h[name]({...event,waitUntil:p=>waits.push(p),respondWith:p=>{result=p;}});
  await Promise.all(waits);return result;
}
const req=(x,mode="cors")=>({method:"GET",url:new URL(x,origin).href,mode});
(async()=>{
  const blocks=fs.readFileSync("netlify.toml","utf8").split("[[headers]]");
  for(const route of ["admin","join","request","pro-success","pro-restore"])for(const suffix of ["",".html"]){
    const b=blocks.find(x=>x.includes('for = "/'+route+suffix+'"'));
    assert.match(b||"",/X-Robots-Tag = "noindex, nofollow"/);
    if(route==="pro-success")assert.match(b,/Cache-Control = "no-store"/);
  }
  await trigger("install");
  assert.deepEqual(added.filter(x=>x.startsWith("/assets/v/")).sort(),["/assets/v/app.456.js","/assets/v/css.123.css","/assets/v/data.789.js"]);
  await trigger("activate");assert.deepEqual(deleted,["languagepath-v26"]);
  answer=new Response("unavailable",{status:503});
  assert.equal((await trigger("fetch",{request:req("/assets/v/app.456.js")})).status,503);
  assert.equal(await entries.get("/assets/v/app.456.js").clone().text(),"fresh");
  answer=new Response("dynamic",{headers:{"Cache-Control":"no-store"}});
  await trigger("fetch",{request:req("/dynamic")});assert.equal(entries.has("/dynamic"),false);
  for(const p of ["https://example.org/a","/.netlify/functions/ai","/pro-success?session=mock","/pro-restore.html"]){
    assert.equal(await trigger("fetch",{request:req(p)}),undefined);
  }
  offline=true;
  assert.equal((await trigger("fetch",{request:req("/assets/missing.js")})).type,"error");
  assert.equal(await (await trigger("fetch",{request:req("/assets/v/app.456.js")})).text(),"fresh");
  assert.equal(await (await trigger("fetch",{request:req("/tr/lesson-1","navigate")})).text(),"fresh");
  offline=false;answer=new Response("course");
  await trigger("message",{data:{type:"lp-offline",urls:["/tr/lesson-1","//example.org/a","/pro-success.html"]},source:{postMessage:x=>posted.push(x)}});
  assert.equal(posted[0].n,1);assert.equal(await entries.get("/tr/lesson-1").clone().text(),"course");
  console.log("PWA and private-header checks passed.");
})().catch(e=>{console.error(e);process.exit(1);});
