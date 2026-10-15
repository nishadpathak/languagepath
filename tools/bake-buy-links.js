#!/usr/bin/env node
/* Writes the real Stripe Payment Link URLs from pro-config.js into every static data-sku button (pro.html,
   business-travel-kit/, ...), so buy buttons work without JS and are visible to crawlers. Empty link = left disabled. */
"use strict";
const fs = require("fs"), path = require("path"), root = path.join(__dirname, "..");
global.window = {}; require(path.join(root, "pro-config.js")); const L = window.LP_PRO_CONFIG.links;
const files = ["pro.html", "business-travel-kit/index.html"].map(f => path.join(root, f)).filter(fs.existsSync);
let n = 0, miss = [];
for (const f of files) {
  const s = fs.readFileSync(f, "utf8").replace(/(<a\b[^>]*?data-sku="([a-z_]+)"[^>]*?)href="[^"]*"/g, (m, pre, sku) => {
    const u = L[sku]; if (!u || !/^https:\/\/buy\.stripe\.com\//.test(u)) { miss.push(sku); return pre + 'href="#"'; } n++; return pre + 'href="' + u + '"'; });
  fs.writeFileSync(f, s);
}
console.log("BAKE BUY LINKS: " + n + " buttons wired" + (miss.length ? "; no link yet: " + miss.join(", ") : ""));
if (process.argv.includes("--check") && miss.length) process.exit(1);
