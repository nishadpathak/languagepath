#!/usr/bin/env node
/* Static, crawlable lesson pages: dist/<lang>/lesson-<n>.html for every lesson of every course.
   Runs after prerender (needs dist/). Each page = that language's prerendered lessons page with its own head
   (title, description, og, canonical), one h1, and the lesson's words/sentences as static HTML inside
   #lessonHome. With JS on, the app boots, routes /lang/lesson-N and opens the player (lessonHome is hidden).
   No ads (lesson = exercise). Pages with enough text go into sitemap.xml; thin ones get noindex,follow. */
"use strict";
const fs = require("fs"), path = require("path"), http = require("http");
const root = path.join(__dirname, ".."), dist = path.join(root, "dist"), ORIGIN = "https://languagepath.org";
let puppeteer; try { puppeteer = require("puppeteer"); } catch (e) { puppeteer = require("puppeteer-core"); }
const MIN_WORDS = 220;
const E = s => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const strip = s => String(s || "").replace(/<[^>]+>/g, "");
function serve() { return new Promise(res => { const s = http.createServer((q, r) => { let p = decodeURIComponent(q.url.split("?")[0]); let f = path.join(dist, p);
  if (p === "/" || !fs.existsSync(f) || fs.statSync(f).isDirectory()) f = fs.existsSync(f + ".html") ? f + ".html" : path.join(dist, "index.html");
  const ext = path.extname(f); r.writeHead(200, { "content-type": { ".html": "text/html; charset=utf-8", ".js": "application/javascript", ".css": "text/css", ".json": "application/json" }[ext] || "application/octet-stream" }); fs.createReadStream(f).pipe(r); }).listen(0, "127.0.0.1", () => res(s)); }); }
(async () => {
  const srv = await serve(), port = srv.address().port;
  const b = await puppeteer.launch({ headless: "new", args: ["--no-sandbox"], executablePath: process.env.CHROME_PATH || ["/usr/bin/google-chrome", "/usr/bin/chromium"].find(p => fs.existsSync(p)) });
  const pg = await b.newPage(); await pg.goto(`http://127.0.0.1:${port}/`, { waitUntil: "networkidle0" });
  const data = await pg.evaluate(async () => { const out = {};
    for (const code of Object.keys(PACKS)) { await new Promise(r => { try { ensureCourses(r, code); } catch (e) { r(); } setTimeout(r, 4000); });
      const p = PACKS[code]; if (!p || !Array.isArray(p.lessons) || p._lazy) continue; out[code] = { name: p.name || code, tts: p.tts || "", dir: p.dir || "ltr", lessons: p.lessons.map(L => ({ id: L.id, title: L.title, focus: L.focus || "", steps: L.steps || [] })) }; }
    return out; });
  await b.close(); srv.close();
  const smAdd = []; let n = 0, thin = 0;
  for (const [code, c] of Object.entries(data)) {
    const tplF = path.join(dist, code, "lessons.html"); if (!fs.existsSync(tplF)) continue; const tpl0 = fs.readFileSync(tplF, "utf8"); if (!/<div id="lessonHome"[^>]*>/.test(tpl0)) throw new Error("no #lessonHome in " + tplF); const tpl = tpl0;
    const bcp = (c.tts || "").split("-")[0] || "und", dir = c.dir === "rtl" ? "rtl" : "ltr", T = s => `<span lang="${E(bcp)}" dir="${dir}">${E(s)}</span>`;
    const ids = c.lessons.map(l => l.id);
    for (const L of c.lessons) {
      const words = [], sents = [], notes = [];
      for (const s of L.steps) {
        if (s.t === "words" && Array.isArray(s.items)) for (const w of s.items) words.push(w);
        else if ((s.t === "chal" || s.t === "build") && s.tr) sents.push(s);
        else if (s.t === "say" && s.text) notes.push(strip(s.text));
      }
      const url = `${ORIGIN}/${code}/lesson-${L.id}`, title = `${c.name} lesson ${L.id}: ${strip(L.title)} — LanguagePath`;
      const desc = `Free ${c.name} lesson ${L.id}, ${strip(L.title)}: ${words.length} key words and ${sents.length} sentences with pronunciation. Learn by building sentences, then say them aloud.`.slice(0, 300);
      let art = `<article id="lpLessonStatic" class="card" style="margin:0 0 16px"><h1 class="t" style="margin:2px 0 6px">${E(c.name)} lesson ${L.id}: ${E(strip(L.title))}</h1>`;
      if (L.focus) art += `<p class="lead">Focus: ${T(strip(L.focus))}</p>`;
      if (notes.length) art += "<h2>What you'll learn</h2>" + notes.map(t => `<p>${E(t)}</p>`).join("");
      if (words.length) art += `<h2>Key words</h2><table class="ph"><thead><tr><th>${E(c.name)}</th><th>Say it</th><th>English</th></tr></thead><tbody>` + words.map(w => `<tr><td>${T(w.tr)}</td><td>${E(w.pr || "")}</td><td>${E(w.en || "")}</td></tr>`).join("") + "</tbody></table>";
      if (sents.length) art += `<h2>Sentences you'll build</h2><ol>` + sents.map(s => `<li>${E(s.en || "")} → ${T(s.tr)}${s.pr ? ` <span style="color:var(--muted)">(${E(s.pr)})</span>` : ""}</li>`).join("") + "</ol>";
      const i = ids.indexOf(L.id), prev = ids[i - 1], next = ids[i + 1];
      art += `<p><a class="btn" href="/${code}/lesson-${L.id}" onclick="try{openLesson(${Number(L.id)});return false}catch(e){}">▶ Start this lesson</a> · <a href="/${code}/lessons">All ${E(c.name)} lessons</a>${prev != null ? ` · <a href="/${code}/lesson-${prev}">← Lesson ${prev}</a>` : ""}${next != null ? ` · <a href="/${code}/lesson-${next}">Lesson ${next} →</a>` : ""}</p></article>`;
      const wc = strip(art).split(/\s+/).filter(Boolean).length, indexable = wc >= MIN_WORDS;
      let h = tpl.replace(/<title>[^<]*<\/title>/, `<title>${E(title)}</title>`)
        .replace(/(<meta name="description" content=")[^"]*/, "$1" + E(desc)).replace(/(<meta property="og:title" content=")[^"]*/, "$1" + E(title))
        .replace(/(<meta property="og:description" content=")[^"]*/, "$1" + E(desc)).replace(/(<meta property="og:url" content=")[^"]*/g, "$1" + url)
        .replace(/(<link rel="canonical" href=")[^"]*/, "$1" + url).replace(/data-prerendered="[^"]*"/, `data-prerendered="/${code}/lesson-${L.id}"`)
        .replace(/data-canonical="[^"]*"/, `data-canonical="${url}"`).replace(/ data-ads="1"/, "")
        .replace(/<meta name="robots" content="[^"]*">/, `<meta name="robots" content="${indexable ? "index,follow" : "noindex,follow"}">`)
        .replace(/<h1 class="t" style="margin:6px 0 10px">([\s\S]*?)<\/h1>/, '<p class="t" style="margin:6px 0 10px">$1</p>')
        .replace(/<div id="lessonHome"[^>]*>/, m => m + art);
      h = h.replace(/(<div id="lessonHome"[^>]*>[\s\S]*?<\/article>)\s*<h2 class="vtitle">[^<]*<\/h2>/, "$1");
      fs.writeFileSync(path.join(dist, code, `lesson-${L.id}.html`), h); n++;
      if (indexable) smAdd.push(url); else thin++;
    }
  }
  const smF = path.join(dist, "sitemap.xml"); let sm = fs.readFileSync(smF, "utf8").replace(/\s*<url><loc>[^<]*\/lesson-\d+<\/loc>[\s\S]*?<\/url>/g, "");
  const today = new Date().toISOString().slice(0, 10);
  sm = sm.replace("</urlset>", smAdd.map(u => `  <url><loc>${u}</loc><lastmod>${today}</lastmod></url>`).join("\n") + "\n</urlset>");
  fs.writeFileSync(smF, sm); fs.writeFileSync(path.join(dist, "lesson-pages.json"), JSON.stringify(smAdd, null, 1));
  console.log(`LESSON PAGES: ${n} static lesson pages for ${Object.keys(data).length} languages; ${smAdd.length} in sitemap, ${thin} thin (noindex,follow)`);
})().catch(e => { console.error(e); process.exit(1); });
