#!/usr/bin/env node
/* Builds the paid Travel Phrase Pack PDFs (one per travel city) into private/packs/<city>.pdf.
   Content comes only from the course data (PACKS, cityLifelines/cityHears, TRAVEL) plus the hand-written
   city notes in tools/guides.js. private/ is excluded from dist/ by tools/prerender.js, and the PDFs are
   served only by netlify/functions/download.mjs behind signed, expiring links.
   Usage: node tools/build-phrase-packs.js   (needs puppeteer + Chrome, like the prerender) */
"use strict";
const fs = require("fs"), path = require("path"), http = require("http");
const root = path.join(__dirname, ".."), out = path.join(root, "private", "packs");
const puppeteer = require("puppeteer");
const { CITY_NOTES } = require("./guides.js");
const CHROME = process.env.CHROME_PATH || ["/usr/bin/google-chrome", "/usr/bin/chromium"].find(p => fs.existsSync(p));
const esc = s => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
const rich = s => String(s || "").replace(/<(?!\/?(b|i|em|strong)\b)[^>]*>/gi, " ");
const icon = fs.readFileSync(path.join(root, "icon.svg"), "utf8").replace(/ width="\d+" height="\d+"/, ' width="64" height="64"');
const table = (rows, lang) => rows.length ? `<table><thead><tr><th>English</th><th>${esc(lang)}</th><th>Say it</th></tr></thead><tbody>${rows.map(r => `<tr><td>${esc(r.en)}</td><td class="tr" dir="auto">${esc(r.tr || r.t)}</td><td class="pr">${esc(r.pr)}</td></tr>`).join("")}</tbody></table>` : "";
function serve() { return new Promise(res => { const s = http.createServer((q, r) => { let p = decodeURIComponent(q.url.split("?")[0]); let f = path.join(root, p); if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) f = path.join(root, "index.html"); r.writeHead(200, { "content-type": f.endsWith(".js") ? "application/javascript" : f.endsWith(".svg") ? "image/svg+xml" : "text/html; charset=utf-8" }); fs.createReadStream(f).pipe(r); }).listen(0, "127.0.0.1", () => res(s)); }); }
function html(c, city, d) {
  const p = d.pack, L = p.name, notes = CITY_NOTES[c.slug + "/" + city.slug] || [];
  const cats = [...new Set((p.pocket || []).map(x => x.c))];
  const sit = (p.lessons || []).filter(l => /greet|polite|survival|want|like|number|money|price|food|restaurant|getting around|direction|transport|ticket|hotel|shop|time|doctor|ill/i.test(l.title));
  const chal = l => (l.steps || []).filter(s => s.t === "chal").slice(0, 8);
  return `<!doctype html><html><head><meta charset="utf-8"><style>
@page{size:A4;margin:16mm 15mm 18mm}*{box-sizing:border-box}body{font-family:Inter,"DejaVu Sans","Noto Sans","Noto Sans CJK SC","Noto Naskh Arabic",sans-serif;color:#0B1F4D;font-size:10.5pt;line-height:1.45;margin:0}
.cover{height:262mm;border-radius:8mm;padding:22mm 18mm;color:#fff;background:linear-gradient(150deg,#0B1F4D 0%,#123a6b 55%,#0E9F8A 130%);display:flex;flex-direction:column;page-break-after:always}
.cover .brand{display:flex;gap:4mm;align-items:center;font-weight:800;font-size:16pt}.cover .brand i{font-style:normal;color:#2DD4BF}
.cover h1{font-size:40pt;line-height:1.02;margin:auto 0 4mm;letter-spacing:-1px}.cover .sub{font-size:15pt;color:#cfe3ff}.cover .meta{margin-top:12mm;font-size:10pt;color:#a9bfe3;border-top:1px solid rgba(255,255,255,.25);padding-top:5mm}
h2{font-size:16pt;margin:0 0 3mm;padding-bottom:2mm;border-bottom:2.5px solid #14b8a6;break-after:avoid}h3{font-size:12pt;margin:5mm 0 2mm;color:#0E7C6B;break-after:avoid}
section{margin-bottom:7mm}section.pb{page-break-before:always}
table{width:100%;border-collapse:collapse;margin:1mm 0 4mm;font-size:10pt;break-inside:auto}tr{break-inside:avoid}th{background:#EEF6F4;text-align:left;padding:2mm;font-size:8.5pt;text-transform:uppercase;letter-spacing:.04em;color:#41607a}td{border-bottom:1px solid #e3e9f2;padding:2mm;vertical-align:top}
td.tr{font-weight:700;font-size:11pt}td.pr{color:#55617a;font-style:italic}
.note{background:#F3F7FD;border-left:3px solid #1E88E5;padding:3mm 4mm;margin:3mm 0;border-radius:2mm}
.dlg p{margin:1.2mm 0}.dlg b{color:#0E7C6B}.ex{margin:1.5mm 0}.ex .t{font-weight:700}.ex .p{color:#55617a;font-style:italic}
.cols{columns:2;column-gap:8mm}.lines div{border-bottom:1px solid #cfd8e6;height:9mm}
</style></head><body>
<div class="cover"><div class="brand">${icon}Language<i>Path</i></div>
<h1>${esc(city.name)}<br>Phrase Pack</h1><div class="sub">${esc(L)} for travellers · ${esc(c.country)}</div>
<div class="meta">Print it, save it to your phone, or keep it in your bag. Every phrase has an English-friendly pronunciation guide. Hear them all free at languagepath.org/travel/${c.slug}/${city.slug}<br><br>© 2026 NMP DMCC · LanguagePath.org · For personal use</div></div>
<section><h2>Before you go: ${esc(city.name)}</h2>${notes.map(n => `<p>${n}</p>`).join("")}<div class="note"><b>How to use this pack.</b> Read the phrase, say it out loud using the "Say it" column, and point at the ${esc(L)} text if you get stuck — showing the written phrase works even when pronunciation doesn't.</div></section>
<section><h2>Lifelines</h2><p>When the conversation moves too fast:</p>${table(d.life, L)}<h3>What you'll hear in a taxi</h3>${table(d.hears, L)}</section>
<section class="pb"><h2>Pocket phrases</h2>${cats.map(k => `<h3>${esc(k)}</h3>${table(p.pocket.filter(x => x.c === k), L)}`).join("")}</section>
<section class="pb"><h2>Situations</h2>${sit.map(l => `<h3>${esc(l.title)}</h3>${chal(l).map(s => `<div class="ex">“${esc(s.en)}” → <span class="t" dir="auto">${esc(s.tr)}</span> <span class="p">(${esc(s.pr)})</span></div>`).join("")}`).join("")}</section>
${(p.dialogues || []).length ? `<section class="pb"><h2>Real conversations</h2>${p.dialogues.map(dl => `<h3>${esc(String(dl.title).replace(/^[^\p{L}]+/u, ""))}</h3><div class="dlg">${dl.turns.map(t => `<p><b>${esc(t.who)}:</b> <span dir="auto">${esc(t.tr)}</span> <i style="color:#55617a">(${esc(t.pr)})</i><br><span style="color:#41607a">${esc(t.en)}</span></p>`).join("")}</div>`).join("")}</section>` : ""}
<section class="pb"><h2>Sounds &amp; etiquette</h2>${p.soundIntro ? `<p>${rich(p.soundIntro)}</p>` : ""}<table><thead><tr><th>Letter / sound</th><th>How to say it</th><th>Example</th></tr></thead><tbody>${(p.sounds || []).map(s => `<tr><td class="tr">${esc(s.l)}</td><td>${esc(s.say)}</td><td>${esc(s.ex || "")}</td></tr>`).join("")}</tbody></table>
<div class="cols">${(p.culture || []).map(x => `<h3>${esc(x.title)}</h3><p>${rich(x.body)}</p>`).join("")}</div></section>
<section class="pb"><h2>My phrases</h2><p>Write down the phrases you needed but didn't have — and look them up on LanguagePath.</p><div class="lines">${"<div></div>".repeat(22)}</div></section>
</body></html>`;
}
(async () => {
  fs.mkdirSync(out, { recursive: true });
  const srv = await serve(), base = "http://127.0.0.1:" + srv.address().port;
  const b = await puppeteer.launch({ executablePath: CHROME, args: ["--no-sandbox"] }); const pg = await b.newPage();
  await pg.goto(base + "/", { waitUntil: "networkidle0" }); await pg.evaluate(() => new Promise(r => ensureCourses(r)));
  const data = await pg.evaluate(() => { const o = {}; for (const c of TRAVEL) o[c.lang] = { pack: JSON.parse(JSON.stringify(PACKS[c.lang])), life: cityLifelines(c.lang), hears: cityHears(c.lang) }; return { travel: JSON.parse(JSON.stringify(TRAVEL)), o }; });
  for (const c of data.travel) for (const city of c.cities) {
    const f = path.join(out, city.slug + ".pdf");
    const pp = await b.newPage(); await pp.setContent(html(c, city, data.o[c.lang]), { waitUntil: "load" }); await pp.evaluate(() => document.fonts.ready);
    await pp.pdf({ path: f, format: "A4", printBackground: true, displayHeaderFooter: true, headerTemplate: "<span></span>",
      footerTemplate: `<div style="font-size:7.5pt;color:#7a879c;width:100%;padding:0 15mm;display:flex;justify-content:space-between;font-family:sans-serif"><span>LanguagePath · ${city.name} Phrase Pack</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>` });
    await pp.close(); console.log("PACK", city.slug, Math.round(fs.statSync(f).size / 1024) + " KB");
  }
  await b.close(); srv.close();
})();
