#!/usr/bin/env node
/* Split courses.js into courses/<code>.js and optionally rebuild. */
const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..");
const src = path.join(root, "courses.js");
const dir = path.join(root, "courses");
const text = fs.readFileSync(src, "utf8");
const re = /\/\* ---- ([a-z0-9-]+) ---- \*\/\nwindow\.LP_COURSES = window\.LP_COURSES \|\| \{\};\nwindow\.LP_COURSES\["\1"\] = /g;
const matches = [...text.matchAll(/\/\* ---- ([a-z0-9-]+) ---- \*\//g)];
if (!matches.length) {
  console.error("No pack markers found");
  process.exit(1);
}
if (process.argv[2] === "rebuild") {
  const files = fs.readdirSync(dir).filter(f => f.endsWith(".js")).sort();
  const header = `/* LanguagePath language course packs.
   Generated bundle: concatenates courses/<code>.js (one pack per language).
   Each block assigns window.LP_COURSES["<code>"] = { ... }. Loaded before index.html's main script. */

`;
  const body = files.map(f => fs.readFileSync(path.join(dir, f), "utf8").trimEnd() + "\n\n").join("");
  fs.writeFileSync(src, header + body);
  console.log("REBUILT courses.js from", files.length, "files");
  process.exit(0);
}
fs.mkdirSync(dir, { recursive: true });
for (let i = 0; i < matches.length; i++) {
  const code = matches[i][1];
  const start = matches[i].index;
  const end = i + 1 < matches.length ? matches[i + 1].index : text.length;
  const chunk = text.slice(start, end).trimEnd() + "\n";
  fs.writeFileSync(path.join(dir, code + ".js"), chunk);
  const lessons = (chunk.match(/\n    \{ id:/g) || []).length;
  const chals = (chunk.match(/t:'chal'/g) || []).length;
  console.log(code + "\tlessons=" + lessons + "\tchals=" + chals);
}
console.log("SPLIT", matches.length, "packs into courses/");
