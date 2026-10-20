#!/usr/bin/env node
/* Post-prerender static pages:
   - /<lang>/after-the-app/  A2->B2 staged roadmap per site language (free resources + Pro upsell)
   - /speak-daily/          daily speak-out-loud prompt (client-side date seed, 60s timer)
   - daily prompt card injected into every language hub (dist/<lang>.html) with links to both. */
"use strict";
const fs = require("fs"), path = require("path");
const dist = path.join(__dirname, "..", "dist"), ORIGIN = "https://languagepath.org";
const E = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const css = (fs.readdirSync(path.join(dist, "assets/v")).find(f => /^css\..*\.css$/.test(f)));
const langs = [];
for (const f of fs.readdirSync(dist)) { if (!f.endsWith(".html")) continue; const code = f.slice(0, -5);
  const h = fs.readFileSync(path.join(dist, f), "utf8"); const m = h.match(/<title>Learn (.+?) free/);
  if (m && fs.existsSync(path.join(dist, code))) langs.push({ code, name: m[1] }); }
const PROMPTS = [
 ["Describe your morning so far, step by step.", "I woke up at seven, made coffee, checked the weather and walked to the bus stop."],
 ["What did you eat yesterday, and did you like it?", "Yesterday I had rice with vegetables for lunch. It was good, but a bit too salty."],
 ["Describe the room you are in right now.", "I'm in a small kitchen. There is a table by the window and a plant on the shelf."],
 ["Tell someone how to get from your home to the nearest shop.", "Go out of the building, turn left, walk two minutes and the shop is on the right."],
 ["What are your plans for this weekend?", "On Saturday I want to clean the flat, and on Sunday I'll meet a friend for lunch."],
 ["Talk about a friend: who they are and why you like them.", "My friend is funny and patient. We met at work and we often go walking together."],
 ["Explain a problem you had recently and how you solved it.", "My phone stopped charging, so I cleaned the port and now it works again."],
 ["Order a meal at a restaurant, including one special request.", "I'd like the chicken soup and a salad, please, but without onions."],
 ["Describe the weather today and what you will wear.", "It's warm and sunny, so I'll wear a light shirt and take sunglasses."],
 ["What is a habit you want to start, and why?", "I want to read every evening because it helps me relax and learn new words."],
 ["Compare where you live now with where you grew up.", "Now I live in a big city. Where I grew up it was quieter and greener."],
 ["Tell a short story about a trip you remember.", "Once I missed my train, so I explored the town for a day. It was the best part of the trip."],
 ["Give your opinion: is it better to work from home or in an office?", "I prefer working from home because I save time, but I miss talking to colleagues."],
 ["Introduce yourself as if you were at a new job.", "Hi, I'm new on the team. I work on customer support and I'm happy to meet you."],
 ["Describe your favourite film or series without saying its name.", "It's about a family that runs a restaurant. It's funny, but sometimes very sad."],
 ["Make a phone call to book a doctor's appointment.", "Hello, I'd like to book an appointment for Thursday morning, if possible."],
 ["What did you learn this week?", "This week I learned how to say what I did yesterday, using the past tense."],
 ["Complain politely about a wrong order.", "Excuse me, I ordered tea, but this is coffee. Could you change it, please?"],
 ["Describe a typical day at your work or school.", "I start at nine, answer emails, have meetings before lunch and finish at five."],
 ["If you could live anywhere for a year, where and why?", "I'd live by the sea, because I love swimming and the slower pace of life."],
 ["Explain how to cook a simple dish you know.", "Boil water, add pasta, cook for ten minutes, then mix it with tomato sauce."],
];
const JS = `(function(){var P=${JSON.stringify(PROMPTS)};var d=new Date(),k=d.getFullYear()*1000+Math.floor((d-new Date(d.getFullYear(),0,0))/864e5);var p=P[k%P.length];
document.querySelectorAll('.lp-speak').forEach(function(c){c.querySelector('.lp-sp-q').textContent=p[0];c.querySelector('.lp-sp-a').textContent=p[1];var b=c.querySelector('.lp-sp-btn'),t=c.querySelector('.lp-sp-t'),iv=null;
b.addEventListener('click',function(){if(iv){clearInterval(iv);iv=null;t.textContent='60';b.textContent='Start 60-second timer';return}var s=60;t.textContent=s;b.textContent='Stop';iv=setInterval(function(){s--;t.textContent=s;if(s<=0){clearInterval(iv);iv=null;t.textContent='Done — well spoken!';b.textContent='Start again'}},1000)})})})();`;
const card = (lang) => `<section class="card lp-speak" style="margin:16px auto;max-width:760px"><h2>🗣️ Today's speak-out-loud prompt</h2>
<p>Answer out loud${lang ? " in " + E(lang.name) : " in the language you're learning"} for 60 seconds. Don't stop to fix mistakes: keep talking.</p>
<p><strong class="lp-sp-q">—</strong></p><details><summary>Example answer (in English: say your own version${lang ? " in " + E(lang.name) : ""})</summary><p class="lp-sp-a">—</p></details>
<p><button type="button" class="btn lp-sp-btn">Start 60-second timer</button> <span class="lp-sp-t" aria-live="polite" style="font-weight:700;margin-left:8px">60</span></p>
<p style="color:var(--muted)">A new prompt every day. ${lang ? `<a href="/${lang.code}/after-the-app/">${E(lang.name)} A2→B2 roadmap</a> · ` : ""}<a href="/speak-daily/">All about the daily prompt</a></p></section>`;
const page = (url, title, desc, body) => `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${E(title)}</title><meta name="description" content="${E(desc)}"><meta name="author" content="LanguagePath"><meta name="robots" content="index,follow">
<link rel="canonical" href="${url}"><meta property="og:type" content="website"><meta property="og:site_name" content="LanguagePath"><meta property="og:title" content="${E(title)}"><meta property="og:description" content="${E(desc)}"><meta property="og:url" content="${url}"><meta property="og:image" content="${ORIGIN}/og-image.png">
<link rel="icon" href="/favicon.ico"><link rel="stylesheet" href="/assets/v/${css}"><script>try{document.documentElement.setAttribute("data-theme",localStorage.getItem("theme")||"dark")}catch(e){}</script></head>
<body><header style="padding:12px 16px"><a href="/" style="display:inline-flex;align-items:center;gap:8px;text-decoration:none"><img src="/logo-header.png" alt="LanguagePath" width="36" height="36"><strong>LanguagePath</strong></a></header>
<main id="main" style="max-width:760px;margin:0 auto;padding:0 16px 40px">${body}</main>
<footer style="text-align:center;padding:24px;color:var(--muted)"><a href="/">LanguagePath</a> · <a href="/about.html">About</a> · <a href="/privacy.html">Privacy</a> · <a href="/contact.html">Contact</a></footer></body></html>`;
const urls = [];
for (const L of langs) {
  const u = `${ORIGIN}/${L.code}/after-the-app/`, n = E(L.name);
  const body = `<article class="card"><h1>After the app: your ${n} roadmap from A2 to B2</h1>
<p class="lead">Finished a ${n} app course and stuck around A2? Apps are great for words and basic patterns, but B2 needs long listening, real reading and lots of speaking. Here is a free, staged plan. Times are rough guides: everyone moves at a different pace.</p>
<h2>Stage 1 — Solid A2 (about 4–6 weeks)</h2><ul><li>Finish the core <a href="/${L.code}/lessons">${n} lessons</a> and redo any you can't build from memory.</li><li>Speak out loud for 60 seconds a day with the <a href="/speak-daily/">daily prompt</a>.</li><li>Learn survival phrases in the <a href="/${L.code}/pocket">${n} pocket guide</a>.</li><li>Goal: describe your day, your past weekend and your plans without English.</li></ul>
<h2>Stage 2 — Early B1 (about 2–3 months)</h2><ul><li>Daily listening: 15–20 minutes of slow or learner podcasts, then <a href="/${L.code}/listen">${n} listening practice</a>.</li><li>Grammar review: one past-tense or connector topic per week, then use it in your daily prompt.</li><li>Read short graded texts or children's news; note 5 useful phrases a day, not single words.</li><li>Goal: tell a short story and give a simple opinion with reasons.</li></ul>
<h2>Stage 3 — Solid B1 (about 3–4 months)</h2><ul><li>Watch native shows with ${n} subtitles; shadow one short scene a day.</li><li>Have a weekly conversation with a tutor or language-exchange partner.</li><li>Write 100 words a week (a message, a review, a diary entry) and get it corrected.</li><li>Goal: handle a phone call, a complaint and a work small-talk chat.</li></ul>
<h2>Stage 4 — Towards B2 (about 4–6 months)</h2><ul><li>Switch to native podcasts, news and books on topics you care about.</li><li>Practise arguing both sides of a topic out loud for 2 minutes.</li><li>Use exam-style tasks (if your language has an official exam) to check your level.</li><li>Goal: follow most of a native conversation and explain your view in detail.</li></ul>
<h2>Free resources on LanguagePath</h2><ul><li><a href="/${L.code}">${n} course home</a></li><li><a href="/${L.code}/lessons">All ${n} lessons</a></li><li><a href="/${L.code}/resources">${n} resources</a></li><li><a href="/speak-daily/">Daily speak-out-loud prompt</a></li></ul>
<h2>Want a structured push?</h2><p>LanguagePath Pro adds extra practice tools on top of the free course. Core lessons always stay free.</p><p><a class="btn" href="/pro.html?from=after-the-app">See LanguagePath Pro</a></p></article>${card(L)}`;
  const dir = path.join(dist, L.code, "after-the-app"); fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), page(u, `${L.name} after the app: A2 to B2 roadmap — LanguagePath`, `Free staged plan to take your ${L.name} from A2 to B2 after an app: listening, reading, speaking and grammar review, with free resources.`, body + `<script>${JS}</script>`));
  urls.push(u);
  const hf = path.join(dist, L.code + ".html"); let h = fs.readFileSync(hf, "utf8");
  if (!h.includes("lp-speak") && h.includes("<footer")) { h = h.replace("<footer", card(L) + `<script>${JS}</script><footer`); fs.writeFileSync(hf, h); }
}
const su = `${ORIGIN}/speak-daily/`;
fs.mkdirSync(path.join(dist, "speak-daily"), { recursive: true });
fs.writeFileSync(path.join(dist, "speak-daily", "index.html"), page(su, "Daily speak-out-loud prompt — LanguagePath", "A new speaking prompt every day with an example answer and a 60-second timer. Answer out loud in the language you're learning.",
 `<h1>Daily speak-out-loud prompt</h1><p class="lead">The fastest way past the speaking freeze is to speak a little every day. Read today's prompt, glance at the example, then talk for 60 seconds in the language you're learning.</p>${card(null)}
<h2>Roadmaps: A2 to B2 after the app</h2><ul style="columns:2">${langs.map(L => `<li><a href="/${L.code}/after-the-app/">${E(L.name)}</a></li>`).join("")}</ul><script>${JS}</script>`));
urls.push(su);
const smF = path.join(dist, "sitemap.xml"), today = new Date().toISOString().slice(0, 10);
let sm = fs.readFileSync(smF, "utf8").replace(/\s*<url><loc>[^<]*(after-the-app|speak-daily)\/<\/loc>[\s\S]*?<\/url>/g, "");
fs.writeFileSync(smF, sm.replace("</urlset>", urls.map(u => `  <url><loc>${u}</loc><lastmod>${today}</lastmod></url>`).join("\n") + "\n</urlset>"));
console.log(`EXTRA PAGES: ${langs.length} after-the-app roadmaps, /speak-daily/, prompt card on ${langs.length} hubs`);
