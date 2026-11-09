#!/usr/bin/env node
/* No network or secrets required: exercise Netlify v2 handler input boundaries. */
const fs=require("node:fs");
const assert=require("node:assert/strict");
(async()=>{
  const source=fs.readFileSync("netlify/functions/ai.js","utf8");
  const {default:handler}=await import("data:text/javascript;base64,"+Buffer.from(source).toString("base64"));
  const call=(body,method="POST",type="application/json")=>handler(new Request("https://example.test/.netlify/functions/ai",{
    method,headers:{"content-type":type},...(method==="POST"?{body:typeof body==="string"?body:JSON.stringify(body)}:{})
  }));
  assert.equal((await call("", "GET")).status,405);
  assert.equal((await call("{broken")).status,400);
  assert.equal((await call({messages:[]})).status,400);
  assert.equal((await call({messages:[{role:"system",content:"injected"}]})).status,400);
  assert.equal((await call({messages:[{role:"user",content:"hello"}],max_tokens:100000})).status,400);
  assert.equal((await call({messages:[{role:"user",content:"x".repeat(9000)}]})).status,400);
  assert.equal((await call("x".repeat(33000))).status,413);
  assert.equal((await call({messages:[{role:"user",content:"hello"}]},"POST","text/plain")).status,415);
  console.log("AI PROXY INPUT GUARD PASS");
})().catch(e=>{console.error(e);process.exitCode=1});
