#!/usr/bin/env node
/* LanguagePath prerender: writes dist/<route>/index.html for every sitemap URL.
   Each file is the normal app shell (the app still boots and takes over), but with the
   route's own <title>, meta description, OG tags, self-canonical, <html lang/dir>, and the
   rendered view's HTML already in the markup, so crawlers see real content without JS.
   Titles/descriptions come from the app itself (updateMeta()/renderTravel()) running in
   headless Chrome, so there is one source of truth for page metadata.

   Usage: node tools/prerender.js          (needs puppeteer-core + Chrome; CHROME_PATH to override)
   Output: dist/ (publish directory), plus dist/404.html and dist/prerender-report.json */
"use strict";
const fs = require("fs"), path = require("path"), http = require("http");
const root = path.join(__dirname, "..");
const dist = path.join(root, "dist");
const ORIGIN = "https://languagepath.org";
let puppeteer, CHROME = process.env.CHROME_PATH || ["/usr/bin/google-chrome", "/usr/bin/chromium", "/usr/bin/chromium-browser", "/opt/google/chrome/chrome"].find(p => fs.existsSync(p));
try { puppeteer = require("puppeteer"); if (!CHROME) CHROME = puppeteer.executablePath(); } // Netlify build: full puppeteer downloads Chrome
catch (e) { try { puppeteer = require("puppeteer-core"); } catch (e2) { console.error("npm i puppeteer (or puppeteer-core + CHROME_PATH)"); process.exit(1); } }

const shell = fs.readFileSync(path.join(root, "index.html"), "utf8");
const urls = [...fs.readFileSync(path.join(root, "sitemap.xml"), "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].trim());
const routes = urls.map(u => new URL(u).pathname.replace(/\/+$/, "") || "/").filter(r => !/\.[a-z]+$/i.test(r)); // .html legal pages are static files

const STATIC_EXT = /\.(html|js|json|png|svg|ico|txt|xml|webp|jpg|css|webmanifest)$/i;
const MIME = { ".html": "text/html; charset=utf-8", ".js": "application/javascript", ".json": "application/json", ".png": "image/png", ".svg": "image/svg+xml", ".ico": "image/x-icon", ".txt": "text/plain", ".xml": "application/xml" };
function serve() {
  return new Promise(res => {
    const srv = http.createServer((req, rsp) => {
      const p = decodeURIComponent(req.url.split("?")[0]);
      let f = path.join(root, p);
      if (!STATIC_EXT.test(p) || !fs.existsSync(f) || !fs.statSync(f).isFile()) f = path.join(root, "index.html");
      rsp.writeHead(200, { "content-type": MIME[path.extname(f)] || "application/octet-stream" });
      fs.createReadStream(f).pipe(rsp);
    }).listen(0, "127.0.0.1", () => res(srv));
  });
}
const escAttr = s => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const escText = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
function setMeta(html, sel, re, val) { return re.test(html) ? html.replace(re, val) : html; }

function build(route, m) {
  if (route === "/") return shell.replace(/<html lang="en">/, '<html lang="en" data-prerendered="/" data-view="home" data-canonical="https://languagepath.org/">'); // home keeps its hand-written global meta + markup
  const canon = ORIGIN + (route === "/" ? "/" : route);
  let h = shell;
  h = h.replace(/<html lang="[^"]*">/, `<html lang="${escAttr(m.lang || "en")}" dir="${escAttr(m.dir || "ltr")}" data-prerendered="${escAttr(route)}" data-view="${escAttr(m.view)}" data-canonical="${escAttr(canon)}">`);
  h = h.replace(/<title>[^<]*<\/title>/, `<title>${escText(m.title)}</title>`);
  h = h.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${escAttr(m.desc)}">`);
  h = h.replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${escAttr(m.title)}">`);
  h = h.replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${escAttr(m.desc)}">`);
  h = h.replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${escAttr(canon)}">`);
  h = h.replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${escAttr(canon)}">`);
  h = h.replace(/(<meta name="twitter:title" content=")[^"]*(">)/, `$1${escAttr(m.title)}$2`);
  h = h.replace(/(<meta name="twitter:description" content=")[^"]*(">)/, `$1${escAttr(m.desc)}$2`);
  if (m.view && m.view !== "home" && m.viewHTML) {
    // activate the rendered view in static markup; the app re-renders it on boot
    h = h.replace('<section class="view active" id="view-home">', '<section class="view" id="view-home">');
    const re = new RegExp(`<section class="view" id="view-${m.view}">([\\s\\S]*?)</section>`);
    if (re.test(h)) h = h.replace(re, () => `<section class="view active" id="view-${m.view}">${m.viewHTML}</section>`);
  } else if (m.view === "home" && m.viewHTML) {
    h = h.replace(/<section class="view active" id="view-home">[\s\S]*?\n  <\/section>\n(?=\s*(?:<!--[\s\S]*?-->\s*)?<section class="view" id="view-lessons">)/, () => `<section class="view active" id="view-home">${m.viewHTML}</section>\n`);
  }
  return h;
}

(async () => {
  if (!CHROME) { console.error("No Chrome found; set CHROME_PATH"); process.exit(1); }
  fs.rmSync(dist, { recursive: true, force: true }); fs.mkdirSync(dist, { recursive: true });
  // copy static assets (everything the site serves) into dist/
  const skip = new Set(["dist", "tools", "docs", "netlify", "node_modules", ".git", ".github", "guide", "README.md", ".gitignore", ".env.example", "package.json", "package-lock.json", "netlify.toml"]);
  (function cp(src, dst) {
    for (const e of fs.readdirSync(src, { withFileTypes: true })) {
      if (skip.has(e.name) && src === root) continue;
      if (e.name.startsWith(".")) continue;
      const s = path.join(src, e.name), d = path.join(dst, e.name);
      if (e.isDirectory()) { fs.mkdirSync(d, { recursive: true }); cp(s, d); } else fs.copyFileSync(s, d);
    }
  })(root, dist);

  const srv = await serve(); const base = `http://127.0.0.1:${srv.address().port}`;
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ["--no-sandbox", "--disable-gpu"] });
  const report = []; const CONC = 6; let i = 0;
  async function worker() {
    const page = await browser.newPage();
    await page.setRequestInterception(true);
    page.on("request", r => { const u = r.url(); (u.startsWith(base) || u.startsWith("data:")) ? r.continue() : r.abort(); });
    await page.evaluateOnNewDocument(() => { try { localStorage.clear(); } catch (e) {} });
    while (i < routes.length) {
      const route = routes[i++];
      try {
        await page.goto(base + route, { waitUntil: "networkidle0", timeout: 30000 });
        await new Promise(r => setTimeout(r, 150));
        const m = await page.evaluate(() => {
          const act = document.querySelector("section.view.active");
          const view = act ? act.id.replace(/^view-/, "") : "home";
          const clone = act ? act.cloneNode(true) : null;
          if (clone) clone.querySelectorAll("script,iframe,ins.adsbygoogle").forEach(n => n.remove());
          return {
            title: document.title,
            desc: (document.querySelector('meta[name="description"]') || {}).content || "",
            lang: document.documentElement.lang, dir: document.documentElement.getAttribute("dir"),
            view, viewHTML: clone ? clone.innerHTML : "",
            h1: (act && (act.querySelector("h1,h2") || {}).textContent || "").trim(),
            textLen: act ? act.innerText.length : 0,
            curated: (typeof CURATED !== "undefined" && typeof activeLang !== "undefined") ? (() => { const seg = location.pathname.split("/")[2]; const pk = (typeof PACKS !== "undefined" && PACKS[activeLang]) || {}; const k = Object.keys(CURATED).find(k => { const [a, b] = k.split("|"); return b === seg && (a === activeLang || a === pk.tts || a === (pk.tts || "").split("-")[0]); }); return k ? { title: CURATED[k].title, meta: CURATED[k].meta } : null; })() : null,
            langName: (typeof PACKS !== "undefined" && typeof activeLang !== "undefined" && PACKS[activeLang]) ? PACKS[activeLang].name : ""
          };
        });
        report.push({ route, ...m });
      } catch (e) { report.push({ route, error: String(e).slice(0, 200) }); }
    }
    await page.close();
  }
  await Promise.all(Array.from({ length: CONC }, worker));
  // Language list + lesson counts for the app-only route rewrites (_redirects)
  const pg = await browser.newPage(); await pg.goto(base + "/", { waitUntil: "networkidle0" });
  const langs = await pg.evaluate(() => Object.keys(PACKS).map(k => [k, (PACKS[k].lessons && PACKS[k].lessons.length) || 0]));
  await browser.close(); srv.close();

  for (const r of report) if (r.route === "/travel") { r.title = "Travel phrases by city — speak the local language | LanguagePath"; r.desc = "Free pocket phrase guides for travellers: the sentences you actually need in Dubai, Istanbul, Lisbon, Madrid, Beijing and more, with pronunciation. No sign-up."; }
  // Prefer curated topic titles/descriptions; then make every title unique.
  for (const r of report) if (r.curated && r.curated.title && !r.route.startsWith("/travel")) { r.title = r.curated.title + " — LanguagePath"; if (r.curated.meta) r.desc = r.curated.meta; }
  const seen = { [(shell.match(/<title>([^<]*)<\/title>/) || [])[1]]: [{ route: "/", title: "" }] };
  for (const r of report) if (!r.error && r.route !== "/") (seen[r.title] = seen[r.title] || []).push(r);
  for (const [t, rs] of Object.entries(seen)) if (rs.length > 1) for (const r of rs) {
    const segs = r.route.split("/").filter(Boolean).map(s => s.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()));
    r.title = t.replace(/ — LanguagePath$/, "") + " (" + segs.join(" · ") + ") — LanguagePath";
  }
  const descSeen = { [(shell.match(/<meta name="description" content="([^"]*)"/) || [])[1]]: 1 };
  for (const r of report) if (!r.error && r.route !== "/") { if (descSeen[r.desc]) r.desc = r.desc.replace(/\.?\s*$/, "") + " — " + r.route.split("/").filter(Boolean).join(" / ") + "."; descSeen[r.desc] = 1; }

  for (const r of report) {
    if (r.error) continue;
    const out = r.route === "/" ? path.join(dist, "index.html") : path.join(dist, r.route + ".html"); // /x/y.html: Netlify serves /x/y with no trailing-slash 301
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, build(r.route, r));
  }
  // Real 404 page (static, no app boot so it never renders a fake page)
  fs.copyFileSync(path.join(root, "404.html"), path.join(dist, "404.html"));
  // _redirects: prerendered files are served as-is (Netlify serves /x/index.html for /x).
  // App-only views that are not prerendered rewrite to the shell; anything else gets the real 404.
  const APP_VIEWS = ["join", "request", "admin", "learn", "recall", "build", "shadow", "quiz", "chat", "chunks", "progress", "path", "map", "voyage", "topic", "beginner", "pronunciation", "listening", "phrases", "grammar", "conversations", "seeit", "reallife", "travel"];
  const rules = ["# Generated by tools/prerender.js; do not edit by hand.", "# App-only routes (not prerendered) -> app shell. Unknown URLs fall through to /404.html (real 404)."];
  for (const top of ["join", "request", "admin", "seeit", "reallife", "path", "voyage", "map", "learn", "travel"]) if (!fs.existsSync(path.join(dist, top + ".html"))) rules.push(`/${top}  /index.html  200`);
  for (const [lang, n] of langs) {
    for (const v of APP_VIEWS) if (!fs.existsSync(path.join(dist, lang, v + ".html"))) rules.push(`/${lang}/${v}  /${lang}.html  200`);
    const max = Math.max(n, 40);
    for (let k = 1; k <= max; k++) rules.push(`/${lang}/lesson-${k}  /${lang}/lessons.html  200`);
  }
  fs.writeFileSync(path.join(dist, "_redirects"), rules.join("\n") + "\n");
  fs.writeFileSync(path.join(dist, "prerender-report.json"), JSON.stringify(report.map(({ viewHTML, curated, ...r }) => r), null, 1));
  const bad = report.filter(r => r.error || r.textLen < 80);
  console.log(`PRERENDER: ${report.length - report.filter(r => r.error).length}/${routes.length} routes written to dist/; ${bad.length} errors/thin pages`);
  bad.slice(0, 20).forEach(r => console.log("  " + r.route + " " + (r.error || ("thin text " + r.textLen))));
  if (report.some(r => r.error)) process.exit(1);
})();
