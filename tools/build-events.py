#!/usr/bin/env python3
"""Generates /events/visiting/<slug>/index.html + hub from the trade-show list (facts from the list + verified venue notes)."""
import json, os, re, html, datetime
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
about = open(os.path.join(ROOT, "about.html"), encoding="utf8").read()
HEAD = about.split("</head>")[0]
HEADER = re.search(r'<header class="lp-site">.*?</header>', about, re.S).group(0).replace(' aria-current="page"', "")
HEADER = HEADER if "Trade-show guides" in HEADER else HEADER.replace('<a href="/travel">Travel phrases</a>', '<a href="/travel">Travel phrases</a><a href="/events/visiting/">Trade-show guides</a>')
UPDATED = "2026-10-15"; UPD_TXT = "15 October 2026"
FOOT = about[about.index('<footer class="lp-foot">'):]
CFG = open(os.path.join(ROOT, "pro-config.js"), encoding="utf8").read()
LINKS = dict(re.findall(r'(\w+):\s*"(https://buy\.stripe\.com/[^"]+)"', CFG))
TP = {"hotels": ("🏨 Hotels (KKday)", "https://kkday.tpk.ro/OwAxlYCe"), "transfers": ("🚐 Airport transfer (Intui)", "https://intui.tpk.ro/uKlnIpBL"),
      "esim": ("📶 Travel eSIM (Airalo)", "https://airalo.tpk.ro/qQ92Xf19"), "carrental": ("🚗 Car rental (Localrent)", "https://localrent.tpk.ro/S2HbNLJ4"),
      "insurance": ("🛡️ Travel insurance (EKTA)", "https://ektatraveling.tpk.ro/nrnmYI8y")}
E = html.escape

AR = [("السلام عليكم", "as-salāmu ʿalaykum", "Hello (literally “peace be upon you”) — the standard greeting"),
      ("وعليكم السلام", "wa ʿalaykum as-salām", "The reply: “and upon you peace”"),
      ("صباح الخير", "ṣabāḥ al-khayr", "Good morning"),
      ("تشرفنا", "tasharrafnā", "Pleased to meet you"),
      ("اسمي …", "ismī …", "My name is …"),
      ("أنا من شركة …", "anā min sharikat …", "I'm from the company …"),
      ("هذه بطاقتي", "hādhihi biṭāqatī", "This is my business card"),
      ("هل تتكلم الإنجليزية؟", "hal tatakallam al-ingilīziyya?", "Do you speak English? (to a man)"),
      ("أين الجناح رقم …؟", "ayna al-janāḥ raqm …?", "Where is stand number …?"),
      ("إلى المعرض، من فضلك", "ilā al-maʿraḍ, min faḍlak", "To the exhibition, please (taxi)"),
      ("لحظة من فضلك", "laḥẓa min faḍlak", "One moment, please"),
      ("كم السعر؟", "kam as-siʿr?", "How much is it?"),
      ("شكراً", "shukran", "Thank you"),
      ("عفواً", "ʿafwan", "You're welcome / excuse me"),
      ("إن شاء الله", "in shāʾ allāh", "God willing — often means “hopefully” or “we'll see”"),
      ("الحمد لله", "al-ḥamdu lillāh", "Thank God — the usual answer to “how are you?”"),
      ("مع السلامة", "maʿa as-salāma", "Goodbye")]
ZH = [("您好", "nín hǎo", "Hello (polite form — use it with new business contacts)"),
      ("你好", "nǐ hǎo", "Hello (everyday form)"),
      ("很高兴认识您", "hěn gāoxìng rènshi nín", "Very pleased to meet you"),
      ("我叫 …", "wǒ jiào …", "My name is …"),
      ("我是 … 公司的", "wǒ shì … gōngsī de", "I'm from the company …"),
      ("这是我的名片", "zhè shì wǒ de míngpiàn", "This is my business card"),
      ("请问 … 号展位在哪里？", "qǐngwèn … hào zhǎnwèi zài nǎlǐ?", "Excuse me, where is stand number …?"),
      ("您会说英语吗？", "nín huì shuō Yīngyǔ ma?", "Do you speak English?"),
      ("请慢一点说", "qǐng màn yìdiǎn shuō", "Please speak a little more slowly"),
      ("我听不懂", "wǒ tīng bu dǒng", "I don't understand (what I hear)"),
      ("可以加微信吗？", "kěyǐ jiā Wēixìn ma?", "Can we add each other on WeChat?"),
      ("多少钱？", "duōshao qián?", "How much is it?"),
      ("请给我发票", "qǐng gěi wǒ fāpiào", "Please give me an official receipt (fapiao)"),
      ("谢谢", "xièxie", "Thank you"),
      ("不客气", "bú kèqi", "You're welcome"),
      ("干杯", "gānbēi", "Cheers! (at a business dinner)"),
      ("再见", "zàijiàn", "Goodbye")]
HI = [("नमस्ते", "namaste", "Hello — said with palms together; a handshake is also normal in business"),
      ("आपसे मिलकर ख़ुशी हुई", "āpse milkar khushī huī", "Pleased to meet you"),
      ("मेरा नाम … है", "merā nām … hai", "My name is …"),
      ("मैं … कंपनी से हूँ", "main … kampanī se hūn", "I'm from the company …"),
      ("यह मेरा कार्ड है", "yah merā kārḍ hai", "This is my card"),
      ("क्या आप अंग्रेज़ी बोलते हैं?", "kyā āp angrezī bolte hain?", "Do you speak English?"),
      ("स्टॉल नंबर … कहाँ है?", "sṭŏl nambar … kahān hai?", "Where is stall number …?"),
      ("मुझे … जाना है", "mujhe … jānā hai", "I need to go to … (taxi or auto)"),
      ("थोड़ा धीरे बोलिए", "thoṛā dhīre boliye", "Please speak a little slower"),
      ("एक मिनट", "ek minaṭ", "One minute"),
      ("कितने का है?", "kitne kā hai?", "How much is it?"),
      ("ठीक है", "ṭhīk hai", "OK / fine"),
      ("जी हाँ", "jī hān", "Yes (polite)"),
      ("जी नहीं", "jī nahīn", "No (polite)"),
      ("धन्यवाद", "dhanyavād", "Thank you"),
      ("फिर मिलेंगे", "phir milenge", "See you again")]
LANG = {"ar": ("Arabic", "ar", "rtl", AR), "zh": ("Mandarin Chinese", "zh-CN", "ltr", ZH), "hi": ("Hindi", "hi", "ltr", HI)}

GULF_ETQ = ["Greet with a handshake using your right hand, and offer and receive cards, documents and refreshments with the right hand too.",
            "Wait for a woman to offer her hand first; a hand on the heart and a nod is a polite alternative.",
            "Dress conservatively: a suit or smart business wear, with shoulders and knees covered.",
            "Arabic coffee and dates are a sign of hospitality. Accept at least one small cup; a gentle shake of the cup tells the host you've had enough.",
            "First meetings are about the relationship. Expect small talk about family, travel and the event before business, and don't rush to the price.",
            "Ask before you photograph people, and don't photograph government buildings."]
ETQ = {
 "uae": GULF_ETQ + ["The UAE weekend is Saturday and Sunday, and many companies finish early on Friday, so plan follow-up meetings for Monday to Thursday.",
                    "English is the everyday business language. A few words of Arabic are still noticed and appreciated, especially greetings."],
 "oman": GULF_ETQ + ["Oman's weekend is Friday and Saturday, so plan follow-up meetings for Sunday to Thursday.",
                     "Omanis are known for a calm, courteous style. Keep your voice low and avoid hard-sell tactics."],
 "saudi": GULF_ETQ + ["The Saudi weekend is Friday and Saturday. Business usually pauses at prayer times, so leave slack in a tight schedule.",
                      "Alcohol is not served in Saudi Arabia. Business hospitality means coffee, tea, dates and long meals."],
 "china": ["Offer and receive business cards with both hands, read the card for a moment, and don't write on it or put it straight in your back pocket. A card with a Chinese side is a real advantage.",
           "Address people by surname and title (for example 王总 Wáng zǒng, “Director Wang”) until they invite you to use a first name.",
           "WeChat is the main channel for business contacts and follow-up; many visitors share WeChat QR codes rather than email addresses at the stand.",
           "Seniority matters: greet the most senior person first and expect the senior person to lead on decisions.",
           "At a banquet, wait to be seated, let the host make the first toast, and hold your glass slightly lower than a senior person's when you clink.",
           "Mobile payment is everywhere. Set up Alipay or WeChat Pay with a foreign card before you travel, and carry some cash as a backup.",
           "Direct refusals are rare. “We'll study it” (我们研究一下 wǒmen yánjiū yíxià) often means no, or not yet."],
 "india": ["A handshake is normal in business. Namaste with palms together is always polite, and with women a namaste is often the safer first greeting.",
           "Use titles and surnames (Mr Sharma, Dr Rao) until invited otherwise. Adding “ji” (Sharma-ji) shows respect.",
           "Relationships come first: expect tea, small talk and more than one meeting before a decision.",
           "Many contacts will follow up on WhatsApp. Ask before you add someone, and keep messages short and polite.",
           "Food matters: many colleagues are vegetarian, and some avoid beef or pork. Let your host guide the order.",
           "Traffic is heavy and unpredictable, so build generous buffers into a day of meetings.",
           "A side-to-side head tilt usually means “OK” or “I'm listening”, not “no”."]}

ORG = {'wetex-2026': ['Dubai Electricity and Water Authority (DEWA)'], 'gcc-power-2026': ['CIGRE GCC'], 'saudi-elenex-2026': ['Riyadh Exhibitions Company (REC)'], 'ep-shanghai-2026': ['China Electricity Council', 'Adsale Exhibition Services Ltd'], 'world-future-energy-summit-2027': ['RX'], 'elecrama-2027': ["IEEMA (Indian Electrical & Electronics Manufacturers' Association)"], 'middle-east-energy-2027': ['Informa Markets'], 'power-and-utilities-india-2027': ['dmg events']}

def tp(kind, slug):
    lab, u = TP[kind]; sub = "event_" + slug.replace("-", "_") + ("_hotels" if kind == "hotels" else "")
    return f'<a class="btn" href="{u}?sub_id={sub}" target="_blank" rel="sponsored noopener nofollow">{E(lab)}</a>'

SHOWS = [
 dict(n=1, name="WETEX 2026", city="Dubai", country="UAE", cc="AE", ctry="uae", start="2026-10-20", end="2026-10-22", dates="20–22 October 2026",
      venue="Dubai World Trade Centre", slug="wetex-2026", lang="ar", pack="dubai", packname="Dubai",
      about="WETEX (the Water, Energy, Technology and Environment Exhibition) brings utilities, power equipment makers, water-technology firms and sustainability suppliers to Dubai each autumn. If you are travelling for it, this page covers the venue, getting around the city, how business meetings in the UAE usually run, and the Arabic phrases that make a good first impression.",
      getting=["Dubai World Trade Centre (DWTC) sits on Sheikh Zayed Road, between the older districts and Downtown Dubai. World Trade Centre station on the Dubai Metro Red Line is right next to the venue, so the metro is often faster than a taxi at rush hour.",
               "From Dubai International Airport (DXB), the Red Line runs from Terminals 1 and 3 direct to World Trade Centre. A taxi or pre-booked transfer usually takes 15–30 minutes, depending on traffic.",
               "Buy a Nol card at any metro station for the metro and buses. Taxis are metered, and ride-hailing apps operate widely. If you stay along the Red Line (Downtown, Business Bay, the Marina), commuting to the show is simple.",
               "October is still hot in Dubai, but exhibition halls are strongly air-conditioned. Carry a light jacket for the halls and water for the walk between transport and the entrance."]),
 dict(n=2, name="GCC POWER 2026 (CIGRE GCC)", city="Muscat", country="Oman", cc="OM", ctry="oman", start="2026-11-02", end="2026-11-04", dates="2–4 November 2026",
      venue="JW Marriott Muscat", slug="gcc-power-2026", lang="ar", pack=None,
      about="GCC POWER is the conference and exhibition of CIGRE GCC, the regional committee of the international council on large electric systems. It gathers transmission, distribution and generation engineers, utilities and equipment suppliers from across the Gulf. The 2026 edition is in Muscat, Oman's calm, low-rise capital.",
      getting=["The JW Marriott Muscat is part of the Oman Convention & Exhibition Centre district, close to Muscat International Airport (MCT). The drive from the airport is short, so a pre-booked transfer or a taxi is the easiest option on arrival.",
               "Muscat has no metro. The city stretches along the coast, so most visitors get around by taxi, ride-hailing app or hire car. Agree the fare first, or use a metered or app-booked car.",
               "If you stay at or near the conference hotel, you can walk to sessions. Hotels in Al Khuwair, Qurum or the old town of Muttrah are a longer drive, so allow extra time at the start and end of the working day.",
               "Driving in Oman is straightforward on good, well-signed roads. A hire car is worth it if you plan to see clients across the city or take a day trip after the conference."]),
 dict(n=3, name="Saudi Elenex 2026", city="Riyadh", country="Saudi Arabia", cc="SA", ctry="saudi", start="2026-11-16", end="2026-11-19", dates="16–19 November 2026",
      venue="Riyadh International Convention & Exhibition Center", slug="saudi-elenex-2026", lang="ar", pack=None,
      about="Saudi Elenex is Saudi Arabia's exhibition for electrical power, lighting, renewable energy and related engineering. It draws utilities, contractors and manufacturers serving the Kingdom's large build-out of grid and generation capacity. This page is a practical brief for visitors and exhibitors coming to Riyadh for the show.",
      getting=["The Riyadh International Convention & Exhibition Center (RICEC) is centrally located, with road access from King Abdullah Road (near Exit 10) and its own stop on the Riyadh Metro Red Line, Riyadh Exhibition Center station. King Khalid International Airport (RUH) is north of the city; allow roughly 30–45 minutes by car, longer at peak times.",
               "Most business visitors use taxis or ride-hailing apps. A pre-booked airport transfer saves negotiating on arrival after a long flight.",
               "Riyadh is spread out and car-centred, and traffic around the morning and evening peaks can be heavy. Group your meetings by district, and leave buffers between appointments.",
               "Check your visa before you fly. Many nationalities can get a Saudi eVisa or visa on arrival, but the rules change, so confirm the current requirements for your passport with official sources."]),
 dict(n=4, name="EP Shanghai 2026", city="Shanghai", country="China", cc="CN", ctry="china", start="2026-12-03", end="2026-12-05", dates="3–5 December 2026",
      venue="Shanghai New International Expo Centre", slug="ep-shanghai-2026", lang="zh", pack="shanghai", packname="Shanghai",
      about="EP Shanghai is the international exhibition on electric power equipment and technology. It is a key date for buyers and engineers sourcing switchgear, transformers, cables and grid automation from Chinese and international manufacturers. Here is what to know about the venue, getting around Shanghai, Chinese business etiquette, and the Mandarin phrases that help on the show floor.",
      getting=["The Shanghai New International Expo Centre (SNIEC) is in Pudong. Longyang Road station (Lines 2 and 7, plus the Maglev terminus) is a short walk away, and Huamu Road station on Line 7 is next to the halls.",
               "From Pudong International Airport (PVG), the Maglev runs to Longyang Road in about eight minutes, putting you close to SNIEC. From Hongqiao Airport (SHA) or Hongqiao railway station, take Line 2 east to Longyang Road.",
               "Taxis are plentiful and metered. Have your hotel and the venue written in Chinese (上海新国际博览中心, Shànghǎi Xīn Guójì Bólǎn Zhōngxīn), because many drivers don't read English.",
               "Early December in Shanghai is cold and damp. Pack a warm coat for queues outside the halls and the walk from the metro."]),
 dict(n=6, name="World Future Energy Summit 2027", city="Abu Dhabi", country="UAE", cc="AE", ctry="uae", start="2027-01-12", end="2027-01-14", dates="12–14 January 2027",
      venue="ADNEC (Abu Dhabi National Exhibition Centre)", slug="world-future-energy-summit-2027", lang="ar", pack="abu_dhabi", packname="Abu Dhabi",
      about="The World Future Energy Summit is Abu Dhabi's January gathering for clean energy, water, smart cities and climate technology, held during Abu Dhabi Sustainability Week. Utilities, developers, investors and technology suppliers from around the world attend. This brief covers ADNEC, getting around Abu Dhabi, UAE business etiquette and essential Arabic.",
      getting=["ADNEC is on the Abu Dhabi mainland, between the airport and the downtown island. From Zayed International Airport (AUH), a taxi or transfer usually takes 20–30 minutes.",
               "Abu Dhabi has no metro. Taxis are metered and reliable, ride-hailing apps operate, and public buses cover the main corridors. Hotels next to ADNEC let you walk to the halls.",
               "Many visitors fly into Dubai instead. The drive from Dubai to ADNEC takes roughly 1 to 1.5 hours, depending on where you start and on traffic. Inter-city buses run as well.",
               "January is the pleasant season in Abu Dhabi: warm days and cooler evenings. Pack a light layer for air-conditioned halls and evening events outdoors."]),
 dict(n=7, name="ELECRAMA 2027", city="Greater Noida", country="India", cc="IN", ctry="india", start="2027-02-20", end="2027-02-24", dates="20–24 February 2027",
      venue="India Expo Mart", slug="elecrama-2027", lang="hi", pack=None,
      about="ELECRAMA, organised by IEEMA (the Indian Electrical and Electronics Manufacturers' Association), is one of the largest showcases of the electrical equipment industry. Transformers, switchgear, cables, meters and renewables fill several halls, and buyers come from around the world. The 2027 edition is at India Expo Mart in Greater Noida, in the National Capital Region outside Delhi.",
      getting=["India Expo Mart is in Knowledge Park II, Greater Noida. Knowledge Park II station on the Noida Metro Aqua Line is the nearest metro stop. The Aqua Line connects with the Delhi Metro network at Noida.",
               "From Indira Gandhi International Airport (DEL), it is a long road trip across the region. Allow roughly 1.5–2 hours, and more at peak times. A pre-booked transfer is the least stressful way to arrive.",
               "Staying in Greater Noida or Noida cuts the daily commute a lot compared with central Delhi. If you stay in Delhi, leave early: the expressway traffic around the show can be heavy.",
               "February mornings in the Delhi region can be cool and foggy. Fog sometimes delays early flights, so leave slack in your arrival plans."]),
 dict(n=9, name="Middle East Energy 2027", city="Dubai", country="UAE", cc="AE", ctry="uae", start="2027-05-11", end="2027-05-13", dates="11–13 May 2027",
      venue="Dubai Exhibition Centre, Expo City Dubai", slug="middle-east-energy-2027", lang="ar", pack="dubai", packname="Dubai",
      about="Middle East Energy is the region's long-running exhibition for power generation, transmission and distribution, energy storage and critical power. It attracts utilities, EPC contractors, distributors and manufacturers from across the Middle East, Africa and South Asia. The 2027 edition is at the Dubai Exhibition Centre in Expo City Dubai.",
      getting=["Dubai Exhibition Centre is in Expo City Dubai, the former Expo 2020 site in the south of the city. Expo 2020 station, at the end of the Dubai Metro Red Line's Expo branch, serves the site directly.",
               "From Dubai International Airport (DXB), take the Red Line towards Expo 2020 (check the train's destination, as the line splits), or allow about 40 minutes or more by taxi. Al Maktoum International Airport (DWC) is closer to the site, if your flight uses it.",
               "Hotels near Expo City, Dubai South or Jebel Ali shorten the commute. If you stay in Downtown or the Marina, the metro is a predictable option at rush hour.",
               "May is hot in Dubai, with daytime temperatures commonly in the high 30s °C. Plan walks outdoors early or late, and drink plenty of water."]),
 dict(n=10, name="Power & Utilities India 2027", city="Mumbai", country="India", cc="IN", ctry="india", start="2027-05-19", end="2027-05-21", dates="19–21 May 2027",
      venue="Jio World Convention Centre", slug="power-and-utilities-india-2027", lang="hi", pack=None,
      about="Power & Utilities India brings utilities, regulators, developers and technology suppliers together around India's grid modernisation, renewables and distribution reform. The 2027 edition is at the Jio World Convention Centre in Mumbai. This page covers getting there, Indian business etiquette and Hindi phrases. Marathi is Mumbai's state language, but Hindi and English are widely used in business.",
      getting=["The Jio World Convention Centre is in Bandra Kurla Complex (BKC), Mumbai's main business district, roughly midway between the airport and South Mumbai.",
               "From Chhatrapati Shivaji Maharaj International Airport (BOM), BKC is a relatively short drive, typically 20–45 minutes depending on traffic. App-based cabs and pre-booked transfers are the easiest options.",
               "Hotels in BKC and the nearby suburbs keep your daily commute short. Mumbai traffic is heavy, so allow plenty of time between meetings in different parts of the city.",
               "Late May is hot and humid in Mumbai, just before the monsoon. Light, breathable business clothing helps between air-conditioned venues."]),
 dict(n=11, name="EPOWER 2027", city="Shanghai", country="China", cc="CN", ctry="china", start="2027-06-03", end="2027-06-05", dates="3–5 June 2027",
      venue="SNIEC (2027 venue unconfirmed)", slug="epower-2027", lang="zh", pack="shanghai", packname="Shanghai", venue_unconfirmed=True,
      about="EPOWER is a Shanghai trade fair for electric power equipment and technology, covering generation, transmission, distribution and electrical engineering. The 2027 dates are confirmed. The venue is expected to be the Shanghai New International Expo Centre (SNIEC), but it is not yet confirmed, so check the organiser's site before you book a hotel next to it.",
      getting=["If the show is at SNIEC in Pudong, Longyang Road station (Lines 2 and 7, plus the Maglev terminus) and Huamu Road station (Line 7) are the nearest stops.",
               "From Pudong International Airport (PVG), the Maglev reaches Longyang Road in about eight minutes. From Hongqiao Airport or railway station, Line 2 runs east to Longyang Road.",
               "Shanghai's metro is fast, cheap and signed in English. Taxis are metered, but have your destination written in Chinese for the driver.",
               "June is the start of the plum-rain season in Shanghai: warm, humid and often wet. Carry a compact umbrella."]),
]

def phrase_table(code):
    nm, bcp, d, rows = LANG[code]
    tr = "".join(f'<tr><td lang="{bcp}" dir="{d}" class="nat">{E(a)}</td><td class="tl">{E(b)}</td><td>{E(c)}</td></tr>' for a, b, c in rows)
    return nm, f'<table class="ph"><thead><tr><th>{nm}</th><th>Say it</th><th>Meaning</th></tr></thead><tbody>{tr}</tbody></table>'

def upsell(s):
    if s["pack"]:
        k = "pack_" + s["pack"]
        return (f'<div class="card up"><h3>📄 Take the {s["packname"]} Phrase Pack with you</h3><p>A print-ready PDF with every phrase from our {s["packname"]} guide, plus dialogues and etiquette notes: handy in a jacket pocket on the show floor. $9, or $19 for all 8 city packs.</p>'
                f'<p><a class="btn" href="{LINKS[k]}" rel="noopener">Buy the {s["packname"]} pack — $9</a> <a class="btn ghost" href="{LINKS["pack_bundle"]}" rel="noopener">All 8 cities — $19</a></p></div>')
    return (f'<div class="card up"><h3>⭐ Practise before you fly</h3><p>LanguagePath Pro removes ads, downloads the full course for offline study on the plane, and raises your daily AI conversation practice. Or get all 8 printable city phrase packs for $19.</p>'
            f'<p><a class="btn" href="/pro.html?from=event_{s["slug"]}">See LanguagePath Pro</a> <a class="btn ghost" href="{LINKS["pack_bundle"]}" rel="noopener">8-city phrase-pack bundle — $19</a></p></div>')

CSS = """<style>.ph{width:100%;border-collapse:collapse;margin:12px 0;font-size:14px}.ph th,.ph td{border-bottom:1px solid var(--line);padding:7px 8px;text-align:start;vertical-align:top}.ph .nat{font-size:17px;white-space:nowrap}.ph td.nat[dir=rtl]{text-align:right}.ph .tl{color:var(--muted);font-style:italic}
.btn{display:inline-block;margin:4px 4px 4px 0;padding:8px 14px;border-radius:999px;background:var(--accent);color:var(--onAccent);text-decoration:none;font-weight:700;font-size:14px}.btn.ghost{background:transparent;color:var(--accent);border:1px solid var(--accent)}
.facts{list-style:none;padding:0}.facts li{margin:4px 0}.up h3{margin-top:0}.disc{color:var(--muted);font-size:12px}.hub li{margin:10px 0}</style>"""

def head(title, desc, url, extra=""):
    h = HEAD
    h = re.sub(r"<title>.*?</title>", "<title>" + E(title) + "</title>", h)
    h = re.sub(r'(<meta name="description" content=")[^"]*', lambda m: m.group(1) + E(desc), h)
    h = re.sub(r'(<link rel="canonical" href=")[^"]*', lambda m: m.group(1) + url, h)
    h = re.sub(r'(<meta property="og:url" content=")[^"]*', lambda m: m.group(1) + url, h)
    h = re.sub(r'(<meta property="og:title" content=")[^"]*', lambda m: m.group(1) + E(title), h)
    h = re.sub(r'(<meta property="og:description" content=")[^"]*', lambda m: m.group(1) + E(desc), h)
    return h + CSS + extra + "\n</head>\n<body>\n" + HEADER + "\n<main>\n"

def page(s):
    url = f"https://languagepath.org/events/visiting/{s['slug']}/"
    nm, tbl = phrase_table(s["lang"])
    venue_txt = s["venue"]
    ld = {"@context": "https://schema.org", "@type": "Event", "name": s["name"], "startDate": s["start"], "endDate": s["end"],
          "eventStatus": "https://schema.org/EventScheduled", "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "location": {"@type": "Place", "name": s["city"] if s.get("venue_unconfirmed") else s["venue"], "address": {"@type": "PostalAddress", "addressLocality": s["city"], "addressCountry": s["cc"]}},
          "dateModified": UPDATED, "url": url, "sameAs": f"https://transformerpath.com/events/{s['slug']}/"}
    if s["slug"] in ORG: ld["organizer"] = [{"@type": "Organization", "name": o} for o in ORG[s["slug"]]] if len(ORG[s["slug"]]) > 1 else {"@type": "Organization", "name": ORG[s["slug"]][0]}
    bc = {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "LanguagePath", "item": "https://languagepath.org/"},
        {"@type": "ListItem", "position": 2, "name": "Visiting for a trade show", "item": "https://languagepath.org/events/visiting/"},
        {"@type": "ListItem", "position": 3, "name": s["name"], "item": url}]}
    extra = '<script type="application/ld+json">' + json.dumps(ld, ensure_ascii=False) + '</script><script type="application/ld+json">' + json.dumps(bc, ensure_ascii=False) + "</script>"
    title = f"Visiting {s['city']} for {s['name']}: venue, travel tips and {nm} phrases | LanguagePath"
    desc = f"Going to {s['name']} in {s['city']} ({s['dates']})? Venue and transport tips, business etiquette in {s['country']}, and {len(LANG[s['lang']][3])} key {nm} phrases for the show floor."
    b = [head(title, desc, url, extra)]
    b.append(f'<p class="updated"><a href="/events/visiting/">Trade shows</a> › {E(s["name"])}</p><h1>Visiting {E(s["city"])} for {E(s["name"])}</h1><p class="disc">Last updated {UPD_TXT}</p>')
    b.append(f'<ul class="facts card"><li>📅 <b>Dates:</b> {s["dates"]}</li><li>📍 <b>Venue:</b> {E(venue_txt)}</li>{('<li>🏢 <b>Organiser:</b> ' + E(' and '.join(ORG[s['slug']])) + '</li>') if s['slug'] in ORG else ''}<li>🏙️ <b>City:</b> {E(s["city"])}, {E(s["country"])}</li><li>🗣️ <b>Local language:</b> {nm}{" (with English widely used in business)" if s["ctry"] in ("uae","oman","saudi","india") else ""}</li></ul>')
    b.append(f'<p class="lead">{E(s["about"])}</p><p>Always confirm opening hours, registration and any last-minute changes on the official event website before you travel. The dates and venue here come from our trade-show list, and we update them when organisers announce changes.</p>')
    b.append("<h2>Venue and getting there</h2>" + "".join(f"<p>{E(p)}</p>" for p in s["getting"]))
    b.append(f'<div class="card"><h3>Book the practical bits</h3><p>Partner links for the trip: a hotel near the venue, an airport transfer, mobile data from the moment you land, a car if you need one, and travel insurance.</p><p>{"".join(tp(k, s["slug"]) for k in ["hotels","transfers","esim","carrental","insurance"])}</p><p class="disc">Partner links: LanguagePath may earn a commission if you book through them, at no extra cost to you. <a href="/terms.html#affiliates">How this works</a>.</p></div>')
    b.append(f"<h2>Business etiquette in {E(s['country'])}</h2><ul>" + "".join(f"<li>{E(x)}</li>" for x in ETQ[s["ctry"]]) + "</ul>")
    b.append(f"<h2>Key {nm} phrases for the show</h2><p>English will carry most conversations at an international trade show. Still, opening with a greeting in {nm} and knowing how to ask for a stand, a taxi or a slower repeat makes the trip smoother and leaves a good impression. The pronunciation guides are approximate; tap through to our free course for audio.</p>" + tbl)
    lk = {"ar": "/arabic", "zh": "/mandarin", "hi": "/hindi"}[s["lang"]]
    b.append(f'<p>Want to go further? Start the free <a href="{lk}">{nm} course</a> or browse the <a href="/travel">travel phrasebooks by city</a>.</p>')
    b.append(upsell(s))
    b.append(f'<h2>For exhibitors and engineers</h2><p>Planning stand visits, technical meetings or supplier sourcing at {E(s["name"])}? TransformerPath has an engineering-focused guide to the show: <a href="https://transformerpath.com/events/{s["slug"]}/">{E(s["name"])} on TransformerPath</a>.</p>')
    b.append('<p class="disc">Questions or corrections: <a href="/contact.html">contact LanguagePath</a> or email <a href="mailto:languagepathorg@gmail.com">languagepathorg@gmail.com</a>.</p>')
    b.append("</main>\n" + FOOT)
    return "\n".join(b)

def hub():
    url = "https://languagepath.org/events/visiting/"
    t = "Visiting for a trade show: venue tips, etiquette and phrases | LanguagePath"
    d = "Practical guides for business visitors to energy and power trade shows in Dubai, Abu Dhabi, Muscat, Riyadh, Shanghai, Greater Noida and Mumbai: venues, transport, etiquette and key phrases."
    wp = {"@context": "https://schema.org", "@type": "CollectionPage", "name": "Visiting for a trade show", "url": url, "dateModified": UPDATED}
    b = [head(t, d, url, '<script type="application/ld+json">' + json.dumps(wp) + "</script>"), "<h1>Visiting for a trade show</h1><p class=\"disc\">Last updated " + UPD_TXT + "</p><p class=\"lead\">Short, practical guides for business visitors: how to reach the venue, how meetings usually run in the host country, and the local-language phrases that help on the show floor.</p><ul class=\"hub\">"]
    for s in sorted(SHOWS, key=lambda x: x["start"]):
        b.append(f'<li><a href="/events/visiting/{s["slug"]}/"><b>{E(s["name"])}</b></a><br><span class="disc">{s["dates"]} · {E(s["city"])}, {E(s["country"])} · {E(s["venue"])}</span></li>')
    b.append("</ul><p>More shows will be added once their dates and venues are confirmed.</p></main>\n" + FOOT)
    return "\n".join(b)

base = os.path.join(ROOT, "events", "visiting")
for s in SHOWS:
    os.makedirs(os.path.join(base, s["slug"]), exist_ok=True)
    open(os.path.join(base, s["slug"], "index.html"), "w", encoding="utf8").write(page(s))
open(os.path.join(base, "index.html"), "w", encoding="utf8").write(hub())
sm = os.path.join(ROOT, "sitemap.xml"); x = open(sm, encoding="utf8").read()
x = re.sub(r"\s*<url><loc>https://languagepath.org/events/[^<]*</loc>.*?</url>", "", x)
add = "".join(f"\n  <url><loc>https://languagepath.org/events/visiting/{u}</loc><changefreq>weekly</changefreq><priority>0.6</priority></url>" for u in [""] + [s["slug"] + "/" for s in SHOWS])
x = x.replace("\n</urlset>", add + "\n</urlset>"); open(sm, "w", encoding="utf8").write(x)
print("events:", len(SHOWS), "pages + hub")
