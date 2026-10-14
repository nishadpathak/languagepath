#!/usr/bin/env node
/* Guard: Travelpayouts integration stays on marker 736890 and safe.
   - the wrong marker 570982 and the malicious emrldtp.* loader never appear in shipped files
   - TP_MARKER is 736890; every program link is "" (placeholder) or https from a Travelpayouts/partner short domain
   - affiliate disclosure exists in index.html, terms.html (#affiliates) and privacy.html
   - widget loader is consent-gated and host-allow-listed */
"use strict";
const fs = require("fs"), path = require("path"); const root = path.join(__dirname, ".."); const errs = [];
const files = ["index.html", "data.js", "courses.js", "sw.js", "terms.html", "privacy.html", "about.html", "404.html"].filter(f => fs.existsSync(path.join(root, f)));
for (const f of files) { const t = fs.readFileSync(path.join(root, f), "utf8"); if (/emrldtp\./i.test(t.replace(/\/\*[\s\S]*?\*\/|\/\/[^\n]*/g, "")) ) errs.push(f + ": emrldtp loader reference outside comments"); const code = t.replace(/\/\*[\s\S]*?\*\/|\/\/[^\n]*/g, ""); if (/570982/.test(code.replace(/\/570982\|/g, "").replace(/570982\/\.test/g, ""))) errs.push(f + ": marker 570982 used"); }
const h = fs.readFileSync(path.join(root, "index.html"), "utf8");
if (!/const TP_MARKER="736890";/.test(h)) errs.push("TP_MARKER is not 736890");
const prog = (h.match(/const TP_PROGRAMS=\{([\s\S]*?)\n\};/) || [])[1] || ""; if (!prog) errs.push("TP_PROGRAMS missing");
for (const m of prog.matchAll(/link:"([^"]*)"/g)) if (m[1] && !/^https:\/\/([a-z0-9-]+\.)*(tp\.st|tpk\.ro|tp\.media|travelpayouts\.com)\//.test(m[1])) errs.push("non-Travelpayouts link: " + m[1]);
const cta = (h.match(/const TRAVEL_CTA=\{flights:"([^"]*)"/) || [])[1]; if (cta && !/^https:\/\/([a-z0-9-]+\.)*(tp\.st|tpk\.ro|tp\.media)\//.test(cta)) errs.push("TRAVEL_CTA.flights not a Travelpayouts short link");
if (!/function tpLoadWidget[\s\S]{0,400}tp\.media/.test(h) || !/function tpObserveWidgets\(\)\{\s*if\(!tpConsented\(\)\) return;/.test(h)) errs.push("widget loader not consent-gated/allow-listed");
if (!/Partner links: LanguagePath may earn a commission/.test(h)) errs.push("disclosure missing in index.html");
if (!/id="affiliates"/.test(fs.readFileSync(path.join(root, "terms.html"), "utf8"))) errs.push("terms.html #affiliates missing");
if (!/Travelpayouts/.test(fs.readFileSync(path.join(root, "privacy.html"), "utf8"))) errs.push("privacy.html affiliate section missing");
if (/rel="noopener nofollow"[^>]*tpClick/.test(h)) errs.push("affiliate link without rel=sponsored");
if (errs.length) { console.log("AFFILIATE GUARD FAILED:"); errs.forEach(e => console.log("  " + e)); process.exit(1); }
console.log("AFFILIATE GUARD PASS — marker 736890 only, no 570982/emrldtp, links Travelpayouts-only, consent-gated widgets, disclosures present.");
