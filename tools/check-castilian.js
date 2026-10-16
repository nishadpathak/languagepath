#!/usr/bin/env node
/* Guard: every Spanish row shown on the Spain travel pages / Madrid & Barcelona packs that contains
   z / ce / ci must have a Castilian ("th") pronunciation in tools/es-castilian.js. */
"use strict";
const vm = require("vm"), fs = require("fs"), path = require("path");
const { ES_CASTILIAN, needsTh } = require("./es-castilian.js");
const ctx = { window: {}, console }; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(__dirname, "..", "data.js"), "utf8") + ";this.L=ES_COURSE.lessons;this.D=ES_DIALOGUES;this.K=ES_POCKET;", ctx);
const rx = /greet|polite|survival|want|like|number|money|price|food|restaurant|getting around|direction|transport|ticket|hotel|shop|time|doctor|ill/i;
const rows = []; const add = o => { if (o && o.tr && o.pr && needsTh(o.tr)) rows.push(o.tr); };
ctx.K.forEach(add); ctx.L.filter(l => rx.test(l.title)).forEach(l => (l.steps || []).forEach(add)); ctx.D.forEach(d => (d.turns || []).forEach(add));
const missing = [...new Set(rows)].filter(t => !ES_CASTILIAN[t]);
if (missing.length) { console.error("check-castilian: missing Castilian pronunciation for:\n  " + missing.join("\n  ")); process.exit(1); }
console.log("check-castilian: OK (" + new Set(rows).size + " rows)");
