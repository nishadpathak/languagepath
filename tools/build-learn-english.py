#!/usr/bin/env python3
"""Generates /learn-english/ (hub) and /learn-english/<from>/ for Gulf workers. Static pages in the site shell."""
import json, os, re, html, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from learn_english_data import CATS, EN, T, LANGS, HELLO
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
about = open(os.path.join(ROOT, "about.html"), encoding="utf8").read()
HEAD = about.split("</head>")[0]
HEADER = re.search(r'<header class="lp-site">.*?</header>', about, re.S).group(0).replace(' aria-current="page"', "")
FOOT = about[about.index('<footer class="lp-foot">'):]
E = html.escape
UPDATED, UPD_TXT = "2026-10-15", "15 October 2026"
CSS = """<style>.ph{width:100%;border-collapse:collapse;margin:12px 0;font-size:14px}.ph th,.ph td{border-bottom:1px solid var(--line);padding:7px 8px;text-align:start;vertical-align:top}.ph .en{font-weight:700}.ph .nat{font-size:16px}.ph .pr{color:var(--muted)}.disc{color:var(--muted);font-size:12px}.hub li{margin:10px 0}.hello{font-size:18px}</style>"""
def head(title, desc, url, extra=""):
    h = HEAD
    h = re.sub(r"<title>.*?</title>", "<title>" + E(title) + "</title>", h)
    for k, v in [(r'(<meta name="description" content=")[^"]*', desc), (r'(<link rel="canonical" href=")[^"]*', url), (r'(<meta property="og:url" content=")[^"]*', url), (r'(<meta property="og:title" content=")[^"]*', title), (r'(<meta property="og:description" content=")[^"]*', desc)]:
        h = re.sub(k, lambda m: m.group(1) + E(v), h)
    return h + CSS + extra + "\n</head>\n<body>\n" + HEADER + "\n<main>\n"

TIPS = [
 ("Start polite, keep it short", "In Gulf workplaces, short and polite English works best. Start with “Good morning” or “Excuse me”, say what you need in one sentence, and finish with “Thank you”. “Please” makes any request softer. You do not need perfect grammar: “AC not working, please fix” is understood, but the full sentences below sound more confident and get faster help."),
 ("Ask them to repeat", "If you do not understand, it is normal to ask. Say “Sorry, can you repeat, please?” or “Please speak slowly.” Asking is better than guessing, especially about money, documents and safety instructions."),
 ("Numbers, dates and money", "Practise saying your phone number, your room number and amounts of money out loud. When you hear a date or an amount, repeat it back: “The 25th? 1,500 dirhams?” This avoids mistakes with rent, salary and appointments."),
 ("Documents", "Always keep copies or photos of your passport, visa, ID card, contract and payslips. At an office, show the document and use the phrases below. If something is unclear, ask for it in writing: “Can you write it down, please?”"),
 ("Health and safety", "At a clinic, say where it hurts and since when: “My back hurts since yesterday.” At work, ask for safety equipment if you do not have it, and ask to be shown how to use a new machine before you start."),
]

def page(slug):
    name, native, bcp, d, script = LANGS[slug]
    url = f"https://languagepath.org/learn-english/{slug}/"
    t = f"English for Gulf workers — for {name} speakers: work, housing, bank, clinic and visa phrases | LanguagePath"
    desc = f"Free English phrases for {name} speakers working in the Gulf: workplace, housing, bank, clinic, transport, salary and visa office — with {name} translation and English pronunciation written in {script} script."
    ld = {"@context": "https://schema.org", "@type": "LearningResource", "name": f"English for Gulf workers ({name} speakers)", "inLanguage": ["en", bcp], "teaches": "English", "educationalLevel": "Beginner", "isAccessibleForFree": True, "dateModified": UPDATED, "url": url, "publisher": {"@type": "Organization", "name": "LanguagePath"}}
    b = [head(t, desc, url, '<script type="application/ld+json">' + json.dumps(ld, ensure_ascii=False) + "</script>")]
    b.append(f'<p class="disc"><a href="/learn-english/">Learn English</a> › For {E(name)} speakers</p><h1>English for Gulf workers — for {E(name)} speakers</h1><p class="disc">Last updated {UPD_TXT}</p>')
    b.append(f'<p class="hello" lang="{bcp}" dir="{d}">{E(HELLO[slug])}</p>')
    b.append(f'<p class="lead">These are the English sentences people use most in their first months working in the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain and Oman. Each one has the meaning in {E(name)} and a simple way to say the English, written in {E(script)} script so you can read it straight away.</p>')
    b.append("<p>English is the shared language of many Gulf workplaces, shops, banks and clinics, so a few clear sentences make daily life easier. Learn five sentences a day: read the meaning, say the English out loud using the pronunciation column, then cover the English and try to say it from memory.</p>")
    for i, cat in enumerate(CATS):
        rows = [(en, T[slug][k]) for k, (c, en) in enumerate(EN) if c == i]
        b.append(f"<h2>{E(cat)}</h2><table class=\"ph\"><thead><tr><th>English</th><th>{E(name)}</th><th>Say it ({E(script)})</th></tr></thead><tbody>" + "".join(
            f'<tr><td class="en" lang="en">{E(en)}</td><td class="nat" lang="{bcp}" dir="{d}">{E(tr)}</td><td class="pr" lang="{bcp}" dir="{d}">{E(pr)}</td></tr>' for en, (tr, pr) in rows) + "</tbody></table>")
    b.append("<h2>Tips for speaking English at work</h2>" + "".join(f"<h3>{E(h)}</h3><p>{E(p)}</p>" for h, p in TIPS))
    b.append('<aside class="lp-tutor-slot" data-slot="tutors" style="margin:18px 0;padding:12px 14px;border:1px solid #d9e1ec;border-radius:12px"><b>Practise with a real tutor on italki</b><br>Book 1-to-1 English lessons with a teacher, at times that fit your shifts. <a href="https://www.italki.com/affshare?ref=af34057391" target="_blank" rel="sponsored nofollow noopener">Find an English tutor on italki</a><p class="disc" style="font-size:12px;margin:6px 0 0">This is a partner link. LanguagePath may earn a commission if you book through it, at no extra cost to you.</p></aside>')
    others = [s for s in LANGS if s != slug]
    b.append("<h2>Other languages</h2><p>" + " · ".join(f'<a href="/learn-english/{s}/">English for {E(LANGS[s][0])} speakers</a>' for s in others) + "</p>")
    b.append('<p class="disc">Pronunciation guides are approximate. Questions or corrections: <a href="/contact.html">contact LanguagePath</a> or <a href="mailto:languagepathorg@gmail.com">languagepathorg@gmail.com</a>.</p>')
    b.append("</main>\n" + FOOT)
    return "\n".join(b)

def hub():
    url = "https://languagepath.org/learn-english/"
    t = "Learn English for work in the Gulf — free phrases in Hindi, Urdu, Tagalog, Bengali and Arabic | LanguagePath"
    d = "Free English phrases for people working in the UAE, Saudi Arabia and the Gulf, explained in Hindi, Urdu, Tagalog, Bengali and Arabic: work, housing, bank, clinic, transport, salary and visa office."
    ld = {"@context": "https://schema.org", "@type": "CollectionPage", "name": "Learn English for work in the Gulf", "url": url, "dateModified": UPDATED}
    b = [head(t, d, url, '<script type="application/ld+json">' + json.dumps(ld) + "</script>")]
    b.append(f'<h1>Learn English for work in the Gulf</h1><p class="disc">Last updated {UPD_TXT}</p><p class="lead">Free, practical English for your first months working in the UAE, Saudi Arabia and the rest of the Gulf. Choose your language: every page has {len(EN)} everyday sentences with the meaning in your language and the English pronunciation written in your own script.</p><ul class="hub">')
    for s, (name, native, bcp, dd, script) in LANGS.items():
        b.append(f'<li><a href="/learn-english/{s}/"><b>English for {E(name)} speakers</b></a> — <span lang="{bcp}" dir="{dd}">{E(native)}</span><br><span class="disc">{E(HELLO[s])}</span></li>'.replace(f'<span class="disc">{E(HELLO[s])}</span>', f'<span class="disc" lang="{bcp}" dir="{dd}">{E(HELLO[s])}</span>'))
    b.append("</ul><p>Topics on every page: " + ", ".join(c.lower() for c in CATS) + ". Each page also has tips for speaking English at work, asking people to repeat, and handling numbers and documents.</p></main>\n" + FOOT)
    b.append('<aside class="lp-tutor-slot" style="margin:18px 0;padding:12px 14px;border:1px solid #d9e1ec;border-radius:12px"><b>Practise with a real tutor on italki</b><br>Book 1-to-1 English lessons with a teacher, at times that fit your shifts. <a href="https://www.italki.com/affshare?ref=af34057391" target="_blank" rel="sponsored nofollow noopener">Find an English tutor on italki</a><p class="disc" style="font-size:12px;margin:6px 0 0">This is a partner link. LanguagePath may earn a commission if you book through it, at no extra cost to you.</p></aside>')
    return "\n".join(b)

base = os.path.join(ROOT, "learn-english")
for s in LANGS:
    os.makedirs(os.path.join(base, s), exist_ok=True)
    open(os.path.join(base, s, "index.html"), "w", encoding="utf8").write(page(s))
open(os.path.join(base, "index.html"), "w", encoding="utf8").write(hub())
sm = os.path.join(ROOT, "sitemap.xml"); x = open(sm, encoding="utf8").read()
x = re.sub(r"\s*<url><loc>https://languagepath.org/learn-english/[^<]*</loc>.*?</url>", "", x)
x = x.replace("\n</urlset>", "".join(f"\n  <url><loc>https://languagepath.org/learn-english/{u}</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>" for u in [""] + [s + "/" for s in LANGS]) + "\n</urlset>")
open(sm, "w", encoding="utf8").write(x); print("learn-english: hub +", len(LANGS))
