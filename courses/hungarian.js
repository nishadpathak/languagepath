/* ---- hungarian ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["hungarian"] = {
  name: 'Hungarian',
  flag: '🇭🇺',
  tts: 'hu-HU',
  dir: 'ltr',
  native: 'Magyar',
  soundTitle: 'Hungarian sounds & spelling',
  soundIntro: 'Hungarian is beautifully phonetic — every letter always makes the same sound. Learn the few special digraphs and you can read any word aloud.',
  grammar: '<p>Hungarian is <b>agglutinative</b>: it stacks suffixes onto a word to build meaning, so one long word can do the work of a whole English phrase. It also follows <b>vowel harmony</b> — suffixes come in two versions and you pick the one that fits the vowels of the word. Good news: spelling is phonetic and stress almost always falls on the <b>first syllable</b>, so if you read it, you can say it.</p>',
  bridges: '<div class="note">🌳 <b>Not Indo-European.</b> Hungarian is <b>Uralic</b>, a cousin of Finnish and Estonian. It is <i>not</i> related to English, German or the Romance/Slavic languages, so you won\'t find the familiar cognates — you\'ll be learning words fresh.</div><div class="note">💰 <b>Real loans.</b> A few words were borrowed anyway: <i>kávé</i> (coffee), <i>tea</i>, <i>menü</i>, <i>hotel</i>, <i>taxi</i>, <i>sport</i>. And <i>gulyás</i> (goulash) has travelled the world.</div>',
  lessons: [
    { id:1, title:'Greetings & being polite', focus:'Szia · Jó napot · köszönöm · kérem',
      steps:[
        {t:'say',text:'Start with the word you\'ll say all day: <span class="inline-tr">Szia</span> — hello (informal) and bye. Say it out loud.',tr:'Szia'},
        {t:'words',items:[{tr:'Szia',pr:'SEE-ah',en:'hi / bye'},{tr:'Jó napot',pr:'YO NAH-pot',en:'good day'},{tr:'Jó reggelt',pr:'YO REG-gelt',en:'good morning'},{tr:'Jó estét',pr:'YO EH-shayt',en:'good evening'},{tr:'Viszlát',pr:'VEES-lat',en:'goodbye'}]},
        {t:'chal',en:'Hello, thank you',tr:'Szia, köszönöm',pr:'SEE-ah, KUH-suh-nuhm',morph:['szia = hello','köszönöm = thank you']},
        {t:'say',text:'The politeness pair: <span class="inline-tr">köszönöm</span> (thank you) and <span class="inline-tr">kérem</span> (please / you\'re welcome). Both are everywhere.',tr:'kérem'},
        {t:'chal',en:'The menu, please',tr:'A menü, kérem',pr:'aw MEH-new, KAY-rem',morph:['a menü = the menu','kérem = please']},
        {t:'say',text:'To ask how someone is: <span class="inline-tr">Hogy vagy?</span> (informal). The reply is <span class="inline-tr">Köszönöm, jól</span> — fine, thanks.',tr:'Hogy vagy?'},
        {t:'words',items:[{tr:'Hogy vagy?',pr:'HODJ vawdj',en:'How are you?'},{tr:'Köszönöm, jól',pr:'KUH-suh-nuhm, YOL',en:'Fine, thanks'},{tr:'És te?',pr:'aysh teh',en:'And you?'}]},
        {t:'chal',en:'Hi, how are you?',tr:'Szia, hogy vagy?',pr:'SEE-ah, HODJ vawdj',morph:['szia = hi','hogy vagy? = how are you?']}
      ],
      blocks:['<code>Szia</code> = hi / bye','<code>Jó napot</code> = good day','<code>köszönöm</code> = thank you · <code>kérem</code> = please'] },
    { id:2, title:'Numbers 1–10', focus:'egy · kettő · három · tíz',
      steps:[
        {t:'say',text:'Numbers are the fastest win. Listen and repeat: <span class="inline-tr">egy, kettő, három</span>.',tr:'egy'},
        {t:'words',items:[{tr:'egy',pr:'EDJ',en:'1'},{tr:'kettő',pr:'KET-tuh',en:'2'},{tr:'három',pr:'HAH-rom',en:'3'},{tr:'négy',pr:'NEDJ',en:'4'},{tr:'öt',pr:'ERT',en:'5'},{tr:'tíz',pr:'teez',en:'10'}]},
        {t:'chal',en:'Two coffees, please',tr:'Két kávét kérek',pr:'kayt KAH-vayt KAY-rek',morph:['két = two','kávét = coffee','kérek = I\'d like']},
        {t:'say',text:'<span class="inline-tr">Mennyibe kerül?</span> = how much is it? A key phrase for shops and the market.',tr:'Mennyibe kerül?'},
        {t:'chal',en:'How much is it?',tr:'Mennyibe kerül?',pr:'MEN-yee-beh KEH-rewl',morph:['mennyibe = how much','kerül = does it cost']},
        {t:'chal',en:'It\'s five hundred forints',tr:'Ötszáz forint',pr:'ERT-saz forint',morph:['ötszáz = five hundred','forint = forint (the currency)']}
      ],
      blocks:['egy, kettő, három, négy, öt = 1–5','<code>mennyibe kerül?</code> = how much is it?'] },
    { id:3, title:'"I want" — szeretnék & akarok', focus:'szeretnék · akarok · egy',
      steps:[
        {t:'say',text:'The magic phrase to order anything: <span class="inline-tr">szeretnék</span> — I would like. Kinder than \'I want\'.',tr:'szeretnék'},
        {t:'say',text:'The plain \'I want\' is <span class="inline-tr">akarok</span>, but <span class="inline-tr">szeretnék</span> gets you a warmer reply. Pair it with what you want: <span class="inline-tr">Szeretnék egy kávét</span>.',tr:'Szeretnék egy kávét'},
        {t:'chal',en:'I\'d like a coffee',tr:'Szeretnék egy kávét',pr:'SEH-ret-nayk EDJ KAH-vayt',morph:['szeretnék = I\'d like','egy kávét = a coffee']},
        {t:'chal',en:'I\'d like a water',tr:'Szeretnék egy vizet',pr:'SEH-ret-nayk EDJ VEE-zet',morph:['szeretnék = I\'d like','egy vizet = a water']},
        {t:'say',text:'To ask for the bill, say <span class="inline-tr">Szeretnék fizetni</span> — I would like to pay.',tr:'Szeretnék fizetni'},
        {t:'chal',en:'I\'d like to pay',tr:'Szeretnék fizetni',pr:'SEH-ret-nayk FEE-zet-nee',morph:['szeretnék = I\'d like','fizetni = to pay']}
      ],
      blocks:['<code>szeretnék</code> = I would like','<code>akarok</code> = I want','<code>egy</code> = a / one'] },
    { id:4, title:'Food & drink', focus:'víz · kenyér · kávé · a menü',
      steps:[
        {t:'say',text:'Eating out? Key words: <span class="inline-tr">víz</span> (water), <span class="inline-tr">kenyér</span> (bread), <span class="inline-tr">kávé</span> (coffee).',tr:'víz'},
        {t:'words',items:[{tr:'víz',pr:'VEEZ',en:'water'},{tr:'kenyér',pr:'KEN-yehr',en:'bread'},{tr:'kávé',pr:'KAH-vay',en:'coffee',link:'≈ English coffee'},{tr:'tea',pr:'TEH-ah',en:'tea',link:'≈ English tea'},{tr:'a menü',pr:'aw MEH-new',en:'the menu',link:'≈ English menu'},{tr:'sör',pr:'shur',en:'beer'}]},
        {t:'chal',en:'Water and bread, please',tr:'Vizet és kenyeret kérek',pr:'VEE-zet aysh KEN-ye-ret KAY-rek',morph:['vizet = water','és = and','kenyeret = bread','kérek = I\'d like']},
        {t:'chal',en:'A coffee, please',tr:'Egy kávét kérek',pr:'EDJ KAH-vayt KAY-rek',morph:['egy = a','kávét = coffee','kérek = I\'d like']},
        {t:'say',text:'<span class="inline-tr">Nagyon finom!</span> = very delicious. Say it and you\'ll make the cook smile.',tr:'Nagyon finom!'},
        {t:'chal',en:'Delicious! Thank you!',tr:'Nagyon finom! Köszönöm!',pr:'NAH-dyon FEE-nom, KUH-suh-nuhm',morph:['nagyon finom = very delicious','köszönöm = thank you']}
      ],
      blocks:['<code>víz</code>, <code>kenyér</code>, <code>kávé</code>, <code>tea</code> = water, bread, coffee, tea','<code>a menü</code> = the menu','<code>nagyon finom</code> = very delicious'] },
    { id:5, title:'Getting around', focus:'Merre? · jobbra · balra · pályaudvar',
      steps:[
        {t:'say',text:'The most useful question in a new city: <span class="inline-tr">Merre…?</span> — which way…? Also <span class="inline-tr">Hol van…?</span> — where is…?',tr:'Merre?'},
        {t:'words',items:[{tr:'Merre...?',pr:'MER-reh',en:'which way / where...?'},{tr:'jobbra',pr:'YOB-raw',en:'to the right'},{tr:'balra',pr:'BOL-raw',en:'to the left'},{tr:'egyenesen',pr:'EDJ-yeh-neh-shen',en:'straight ahead'},{tr:'a pályaudvar',pr:'aw PAH-yah-oo-dvahr',en:'the station'},{tr:'a mosdó',pr:'aw MOZH-doh',en:'the bathroom'}]},
        {t:'chal',en:'Where is the station?',tr:'Hol van a pályaudvar?',pr:'hol vahn aw PAH-yah-oo-dvahr',morph:['hol van = where is','a pályaudvar = the station']},
        {t:'chal',en:'Where is the bathroom?',tr:'Hol van a mosdó?',pr:'hol vahn aw MOZH-doh',morph:['hol van = where is','a mosdó = the bathroom']},
        {t:'say',text:'<span class="inline-tr">jobbra</span> (right) and <span class="inline-tr">balra</span> (left) tell you which way to turn. \'Straight ahead\' is <span class="inline-tr">egyenesen</span>.',tr:'egyenesen'},
        {t:'chal',en:'Straight ahead',tr:'Egyenesen',pr:'EDJ-yeh-neh-shen',morph:['egyenesen = straight ahead']}
      ],
      blocks:['<code>merre…?</code> = which way…?','<code>jobbra</code> / <code>balra</code> = right / left'] },
    { id:6, title:'Questions & "is there…?"', focus:'van · hol van · tud segíteni',
      steps:[
        {t:'say',text:'<span class="inline-tr">Van…?</span> = is there…? / do you have…? Such a useful little word for travel.',tr:'van'},
        {t:'chal',en:'Is there wifi?',tr:'Van wifi?',pr:'von WEE-fee',morph:['van = is there','wifi = wifi']},
        {t:'say',text:'<span class="inline-tr">Hol van…?</span> = where is…? Combine it with a place and you can find anything.',tr:'Hol van...?'},
        {t:'chal',en:'Do you have a menu?',tr:'Van menüjük?',pr:'von MEH-new-yuk',morph:['van = do you have','menüjük = your menu']},
        {t:'say',text:'Lost? <span class="inline-tr">Tud segíteni?</span> = can you help me?',tr:'Tud segíteni?'},
        {t:'chal',en:'Can you help me?',tr:'Tud segíteni?',pr:'tood SHEG-ee-teh-nee',morph:['tud = can you','segíteni = to help']}
      ],
      blocks:['<code>van…?</code> = is there…?','<code>hol van…?</code> = where is…?','<code>tud segíteni?</code> = can you help me?'] },
    { id:7, title:'Family & people', focus:'család · anya · apa · barát',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">család</span> (family), <span class="inline-tr">anya</span> (mother), <span class="inline-tr">apa</span> (father).',tr:'család'},
        {t:'words',items:[{tr:'család',pr:'CHAH-lad',en:'family'},{tr:'anya',pr:'ON-yo',en:'mother'},{tr:'apa',pr:'OP-oh',en:'father'},{tr:'barát',pr:'BOH-rat',en:'friend'},{tr:'testvér',pr:'TEHSH-vayr',en:'brother / sister'}]},
        {t:'chal',en:'I have a friend',tr:'Van egy barátom',pr:'von EDJ BOH-ra-tom',morph:['van = I have','egy = a','barátom = my friend']},
        {t:'say',text:'<span class="inline-tr">Van</span> = have / there is. It\'s the key to saying what you\'ve got: <span class="inline-tr">van egy…</span>.',tr:'van egy'},
        {t:'chal',en:'I have a family',tr:'Van egy családom',pr:'von EDJ CHAH-la-dom',morph:['van = I have','egy családom = a family']}
      ],
      blocks:['<code>anya</code> / <code>apa</code> = mother / father','<code>barát</code> = friend','<code>van</code> = have / there is'] },
    { id:8, title:'Time, days & weather', focus:'ma · holnap · milyen idő van?',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">ma</span>, tomorrow is <span class="inline-tr">holnap</span>. To ask the time: <span class="inline-tr">Hány óra van?</span>',tr:'ma'},
        {t:'words',items:[{tr:'ma',pr:'mo',en:'today'},{tr:'holnap',pr:'HOL-nop',en:'tomorrow'},{tr:'most',pr:'mohsht',en:'now'},{tr:'péntek',pr:'PAYN-tek',en:'Friday'},{tr:'Hány óra van?',pr:'HAH-nyo OH-ro von',en:'what time is it?'}]},
        {t:'chal',en:'See you tomorrow',tr:'Holnap találkozunk',pr:'HOL-nop TOL-al-ko-zoonk',morph:['holnap = tomorrow','találkozunk = we\'ll meet']},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">Milyen idő van?</span>',tr:'Milyen idő van?'},
        {t:'chal',en:'It\'s raining',tr:'Esik az eső',pr:'EH-sheek oz EH-shuh',morph:['esik = it\'s falling','az eső = the rain']}
      ],
      blocks:['<code>ma</code> / <code>holnap</code> = today / tomorrow','<code>milyen idő van?</code> = what\'s the weather?'] },
    { id:9, title:'Your name', focus:'a nevem __NAME__ · mi a neved?',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">A nevem…</span> = my name is…, and <span class="inline-tr">Örvendek</span> = pleased to meet you.',tr:'A nevem'},
        {t:'chal',en:'My name is __NAME__',tr:'A nevem __NAME__',pr:'aw NEH-vem __NAME__',morph:['a nevem = my name is','__NAME__ = your name']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">Mi a neved?</span> (informal).',tr:'Mi a neved?'},
        {t:'chal',en:'What\'s your name?',tr:'Mi a neved?',pr:'mee aw NEH-ved',morph:['mi = what','a neved = your name']},
        {t:'chal',en:'Pleased to meet you',tr:'Örvendek',pr:'UR-ven-dek',morph:['örvendek = I am pleased']}
      ],
      blocks:['<code>a nevem…</code> = my name is…','<code>mi a neved?</code> = what\'s your name?','<code>örvendek</code> = pleased to meet you'] },
    { id:10, title:'Health & emergency', focus:'Segítség! · orvos · nem értem',
      steps:[
        {t:'say',text:'The most important words if you need help: <span class="inline-tr">Segítség!</span> (help), <span class="inline-tr">orvos</span> (doctor), <span class="inline-tr">gyógyszertár</span> (pharmacy).',tr:'Segítség!'},
        {t:'words',items:[{tr:'Segítség!',pr:'SHEG-eet-shayg',en:'help!'},{tr:'az orvos',pr:'oz OR-vosh',en:'the doctor'},{tr:'a gyógyszertár',pr:'aw DYOHD-yer-tar',en:'the pharmacy'},{tr:'Nem értem',pr:'nem AYR-tem',en:'I don\'t understand'}]},
        {t:'chal',en:'Help!',tr:'Segítség!',pr:'SHEG-eet-shayg',morph:['segítség = help']},
        {t:'chal',en:'I don\'t understand',tr:'Nem értem',pr:'nem AYR-tem',morph:['nem = not','értem = I understand']},
        {t:'say',text:'To say you need help: <span class="inline-tr">Segítségre van szükségem</span>.',tr:'Segítségre van szükségem'},
        {t:'chal',en:'I need help',tr:'Segítségre van szükségem',pr:'SHEG-eet-shayg-reh von SOOK-sheh-gem',morph:['segítségre = because of help','van szükségem = I have need']}
      ],
      blocks:['<code>Segítség!</code> = help!','<code>az orvos</code> = the doctor','<code>nem értem</code> = I don\'t understand'] },
    { id:11, title:'Describing things', focus:'szép · nagy · kicsi · nagyon',
      steps:[
        {t:'say',text:'Adjectives are easy: <span class="inline-tr">szép</span> (beautiful), <span class="inline-tr">nagy</span> (big), <span class="inline-tr">kicsi</span> (small).',tr:'szép'},
        {t:'words',items:[{tr:'szép',pr:'sayp',en:'beautiful'},{tr:'nagy',pr:'nahdj',en:'big'},{tr:'kicsi',pr:'KEE-chee',en:'small'},{tr:'nagyon',pr:'NAH-dyon',en:'very / a lot'}]},
        {t:'chal',en:'Very beautiful',tr:'Nagyon szép',pr:'NAH-dyon sayp',morph:['nagyon = very','szép = beautiful']},
        {t:'chal',en:'A big coffee',tr:'Egy nagy kávé',pr:'EDJ nahdj KAH-vay',morph:['egy = a','nagy = big','kávé = coffee']}
      ],
      blocks:['<code>szép</code> = beautiful','<code>nagy</code> / <code>kicsi</code> = big / small','<code>nagyon</code> = very'] },
    { id:12, title:'Tying it together', focus:'a capstone scene',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolbox. This capstone uses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello, how are you?',tr:'Szia, hogy vagy?',pr:'SEE-ah, HODJ vawdj',morph:['szia = hi','hogy vagy? = how are you?']},
        {t:'chal',en:'I\'d like a water, please',tr:'Szeretnék egy vizet, kérem',pr:'SEH-ret-nayk EDJ VEE-zet, KAY-rem',morph:['szeretnék = I\'d like','egy vizet = a water','kérem = please']},
        {t:'chal',en:'Where is the station?',tr:'Hol van a pályaudvar?',pr:'hol vahn aw PAH-yah-oo-dvahr',morph:['hol van = where is','a pályaudvar = the station']},
        {t:'chal',en:'How much is it?',tr:'Mennyibe kerül?',pr:'MEN-yee-beh KEH-rewl',morph:['mennyibe kerül? = how much is it?']},
        {t:'chal',en:'Delicious! Thank you!',tr:'Nagyon finom! Köszönöm!',pr:'NAH-dyon FEE-nom, KUH-suh-nuhm',morph:['nagyon finom = delicious','köszönöm = thank you']}
      ],
      blocks:['You built: greetings, ordering, directions, prices, thanks — a full day out in Hungarian.'] },
    { id:13, title:'Airport & tickets', focus:'reptér · útlevél · jegy · kapu',
      steps:[
        {t:'say',text:'You have landed. The building is the <span class="inline-tr">reptér</span>. Your document is an <span class="inline-tr">útlevél</span>.',tr:'reptér'},
        {t:'words',items:[{tr:'a reptér',pr:'aw REP-tayr',en:'the airport'},{tr:'az útlevél',pr:'oz OOT-leh-vayl',en:'the passport'},{tr:'a jegy',pr:'aw YEDJ',en:'the ticket'},{tr:'a járat',pr:'aw YAH-rot',en:'the flight'},{tr:'a kapu',pr:'aw KAH-poo',en:'the gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'Hol van a reptér?',pr:'hol vahn aw REP-tayr',morph:['hol van = where is','a reptér = the airport']},
        {t:'chal',en:'Here is my passport',tr:'Itt van az útlevelem',pr:'it vahn oz OOT-leh-veh-lem',morph:['itt van = here is','az útlevelem = my passport']},
        {t:'chal',en:'A ticket, please',tr:'Egy jegyet kérek',pr:'EDJ YED-yet KAY-rek',morph:['egy jegyet = a ticket','kérek = I\'d like']},
        {t:'chal',en:'Where is the gate?',tr:'Hol van a kapu?',pr:'hol vahn aw KAH-poo',morph:['hol van = where is','a kapu = the gate']}
      ],
      blocks:['<code>reptér</code> = airport','<code>útlevél</code> = passport','<code>jegy</code> = ticket','<code>kapu</code> = gate'] },
    { id:14, title:'The taxi', focus:'taxi · megyek · hotel · álljon meg',
      steps:[
        {t:'say',text:'The driver is waiting. <span class="inline-tr">Taxi</span> is the same word. Tell them where to go with <span class="inline-tr">a hotelbe szeretnék menni</span>.',tr:'taxi'},
        {t:'words',items:[{tr:'a taxi',pr:'aw TAK-see',en:'the taxi'},{tr:'a sofőr',pr:'aw SHO-fur',en:'the driver'},{tr:'menni szeretnék',pr:'MEN-nee SEH-ret-nayk',en:'I would like to go'},{tr:'álljon meg itt',pr:'AHL-yon meg it',en:'stop here (formal)'}]},
        {t:'chal',en:'Taxi, please',tr:'Egy taxit kérek',pr:'EDJ TAK-sit KAY-rek',morph:['egy taxit = a taxi','kérek = I\'d like']},
        {t:'chal',en:'I want to go to the hotel',tr:'A hotelbe szeretnék menni',pr:'aw HO-tel-beh SEH-ret-nayk MEN-nee',morph:['a hotelbe = to the hotel','szeretnék = I\'d like','menni = to go']},
        {t:'chal',en:'Stop here, please',tr:'Álljon meg itt, kérem',pr:'AHL-yon meg it, KAY-rem',morph:['álljon meg = stop (formal)','itt = here','kérem = please']},
        {t:'chal',en:'How much is it?',tr:'Mennyibe kerül?',pr:'MEN-yee-beh KEH-rewl',morph:['mennyibe = how much','kerül = does it cost']}
      ],
      blocks:['<code>a hotelbe szeretnék menni</code> = I\'d like to go to the hotel','<code>álljon meg itt</code> = stop here'] },
    { id:15, title:'The hotel', focus:'foglalás · szoba · kulcs · éjszaka',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">van foglalásom</span> — I have a reservation.',tr:'foglalás'},
        {t:'words',items:[{tr:'a hotel',pr:'aw HO-tel',en:'the hotel'},{tr:'a foglalás',pr:'aw FOG-lah-lahsh',en:'the reservation'},{tr:'a szoba',pr:'aw SO-bah',en:'the room'},{tr:'a kulcs',pr:'aw koolch',en:'the key'},{tr:'egy éjszaka',pr:'EDJ AY-sah-kah',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'Van foglalásom',pr:'von FOG-lah-lah-shom',morph:['van = I have','foglalásom = my reservation']},
        {t:'chal',en:'A room for one night, please',tr:'Egy szobát kérek egy éjszakára',pr:'EDJ SO-baht KAY-rek EDJ AY-sah-kah-rah',morph:['egy szobát = a room','kérek = I\'d like','egy éjszakára = for one night']},
        {t:'chal',en:'The key, please',tr:'A kulcsot, kérem',pr:'aw KOOL-chot, KAY-rem',morph:['a kulcsot = the key','kérem = please']},
        {t:'chal',en:'Where is my room?',tr:'Hol van a szobám?',pr:'hol vahn aw SO-bahm',morph:['hol van = where is','a szobám = my room']}
      ],
      blocks:['<code>foglalás</code> = reservation','<code>szoba</code> = room','<code>kulcs</code> = key'] },
    { id:16, title:'Ask for help', focus:'nem értem · lassabban · angolul',
      steps:[
        {t:'say',text:'When the language is too fast: <span class="inline-tr">Lassabban, kérem</span> — slower, please.',tr:'Lassabban, kérem'},
        {t:'words',items:[{tr:'lassabban',pr:'LAHSH-shahb-bahn',en:'slower'},{tr:'még egyszer',pr:'mayg EDJ-ser',en:'again'},{tr:'angolul',pr:'ON-go-lool',en:'in English'},{tr:'tud segíteni?',pr:'tood SHEG-ee-teh-nee',en:'can you help?'}]},
        {t:'chal',en:'I don\'t understand',tr:'Nem értem',pr:'nem AYR-tem',morph:['nem = not','értem = I understand']},
        {t:'chal',en:'Slower, please',tr:'Lassabban, kérem',pr:'LAHSH-shahb-bahn, KAY-rem',morph:['lassabban = slower','kérem = please']},
        {t:'chal',en:'Can you help me?',tr:'Tud segíteni?',pr:'tood SHEG-ee-teh-nee',morph:['tud = can you','segíteni = help']},
        {t:'chal',en:'Do you speak English?',tr:'Beszél angolul?',pr:'BEH-sayl ON-go-lool',morph:['beszél = do you speak (formal)','angolul = English']}
      ],
      blocks:['<code>lassabban</code> = slower','<code>beszél angolul?</code> = do you speak English?'] },

  ],
  dialogues: [
    { id:'cafe', title:'☕ At a café', emoji:'☕', turns:[
      {who:'You',tr:'Jó napot! Egy kávét kérek, kérem.',pr:'YO NAH-pot, EDJ KAH-vayt KAY-rek, KAY-rem',en:'Good day! A coffee, please.'},
      {who:'Barista',tr:'Ide vagy elvitelre?',pr:'EE-deh vawg EL-vee-tel-reh',en:'For here or to go?'},
      {who:'You',tr:'Elvitelre, köszönöm.',pr:'EL-vee-tel-reh, KUH-suh-nuhm',en:'To go, thanks.'},
      {who:'Barista',tr:'Parancsoljon. Ez háromszáz forint.',pr:'PAH-rawn-chol-yon, ez HAH-rom-saz forint',en:'Here you go. That\'s three hundred forints.'},
      {who:'You',tr:'Köszönöm szépen!',pr:'KUH-suh-nuhm SAY-pen',en:'Thank you very much!'}
    ]},
    { id:'transport', title:'🚉 At the station', emoji:'🚉', turns:[
      {who:'You',tr:'Elnézést, hol van a pályaudvar?',pr:'EL-nay-zaysht, hol vahn aw PAH-yah-oo-dvahr',en:'Excuse me, where\'s the station?'},
      {who:'Local',tr:'Ott van, egyenesen előre.',pr:'ot vahn, EDJ-yeh-neh-shen EL-ur-reh',en:'It\'s there, straight ahead.'},
      {who:'You',tr:'Köszönöm. Egy jegyet kérek Budapestre.',pr:'KUH-suh-nuhm, EDJ YEH-dyet KAY-rek BOO-dah-pesht-reh',en:'Thanks. A ticket to Budapest, please.'},
      {who:'Ticket',tr:'Kétezer forint. A vonat nyolckor indul.',pr:'KAY-teh-zer forint, aw VOH-nat nyolts-kor IN-dool',en:'Two thousand forints. The train leaves at eight.'}
    ]},
    { id:'restaurant', title:'🍲 At a restaurant', emoji:'🍲', turns:[
      {who:'Waiter',tr:'Jó estét! Van asztalfoglalása?',pr:'YO EH-shayt, von OS-tol-fog-lah-lah-shah',en:'Good evening! Do you have a reservation?'},
      {who:'You',tr:'Igen, két személyre.',pr:'EE-gen, kayt SEM-ay-reh',en:'Yes, for two.'},
      {who:'You',tr:'A menü, legyen szíves.',pr:'aw MEH-new, LEH-dyen SEE-vash',en:'The menu, please.'},
      {who:'You',tr:'Kérek egy levest és egy sört.',pr:'KAY-rek EDJ LEH-vesht aysh EDJ shurt',en:'I\'d like a soup and a beer.'},
      {who:'Waiter',tr:'Jó étvágyat!',pr:'YO AYT-vah-dyot',en:'Enjoy your meal!'}
    ]},
    { id:'market', title:'🧺 At the market', emoji:'🧺', turns:[
      {who:'You',tr:'Mennyibe kerül ez?',pr:'MEN-yee-beh KEH-rewl ez',en:'How much is this?'},
      {who:'Seller',tr:'Ez ezer forint.',pr:'ez EH-zer forint',en:'This is a thousand forints.'},
      {who:'You',tr:'Két kilót kérek.',pr:'kayt KEE-lot KAY-rek',en:'I\'d like two kilos.'},
      {who:'Seller',tr:'Parancsoljon. Tessék.',pr:'PAH-rawn-chol-yon, TEH-shayk',en:'Here you are. There you go.'},
      {who:'You',tr:'Köszönöm, viszlát!',pr:'KUH-suh-nuhm, VEES-lat',en:'Thanks, goodbye!'}
    ]}
  ],
  pocket: [
    {tr:'Szia',pr:'SEE-ah',en:'Hello',c:'Greetings'},
    {tr:'Jó napot',pr:'YO NAH-pot',en:'Good day',c:'Greetings'},
    {tr:'Jó reggelt',pr:'YO REG-gelt',en:'Good morning',c:'Greetings'},
    {tr:'Viszlát',pr:'VEES-lat',en:'Goodbye',c:'Greetings'},
    {tr:'Hogy vagy?',pr:'HODJ vawdj',en:'How are you?',c:'Greetings'},
    {tr:'Köszönöm',pr:'KUH-suh-nuhm',en:'Thank you',c:'Courtesy'},
    {tr:'Köszönöm szépen',pr:'KUH-suh-nuhm SAY-pen',en:'Thank you very much',c:'Courtesy'},
    {tr:'Kérem',pr:'KAY-rem',en:'Please / you\'re welcome',c:'Courtesy'},
    {tr:'Szívesen',pr:'SEE-veh-shen',en:'You\'re welcome',c:'Courtesy'},
    {tr:'Bocsánat',pr:'BOH-chah-not',en:'Excuse me / sorry',c:'Courtesy'},
    {tr:'Igen',pr:'EE-gen',en:'Yes',c:'Courtesy'},
    {tr:'Nem',pr:'nem',en:'No',c:'Courtesy'},
    {tr:'Egy',pr:'EDJ',en:'1',c:'Numbers'},
    {tr:'Kettő',pr:'KET-tuh',en:'2',c:'Numbers'},
    {tr:'Három',pr:'HAH-rom',en:'3',c:'Numbers'},
    {tr:'Négy',pr:'NEDJ',en:'4',c:'Numbers'},
    {tr:'Öt',pr:'ERT',en:'5',c:'Numbers'},
    {tr:'Tíz',pr:'teez',en:'10',c:'Numbers'},
    {tr:'Víz',pr:'VEEZ',en:'water',c:'Food'},
    {tr:'Kenyér',pr:'KEN-yehr',en:'bread',c:'Food'},
    {tr:'Kávé',pr:'KAH-vay',en:'coffee',c:'Food'},
    {tr:'Tea',pr:'TEH-ah',en:'tea',c:'Food'},
    {tr:'Sör',pr:'shur',en:'beer',c:'Food'},
    {tr:'A számlát',pr:'aw SHAHM-lat',en:'the bill',c:'Food'},
    {tr:'Merre...?',pr:'MER-reh',en:'Which way...?',c:'Directions'},
    {tr:'Jobbra',pr:'YOB-raw',en:'to the right',c:'Directions'},
    {tr:'Balra',pr:'BOL-raw',en:'to the left',c:'Directions'},
    {tr:'Egyenesen',pr:'EDJ-yeh-neh-shen',en:'straight ahead',c:'Directions'},
    {tr:'A pályaudvar',pr:'aw PAH-yah-oo-dvahr',en:'the station',c:'Directions'},
    {tr:'Mennyibe kerül?',pr:'MEN-yee-beh KEH-rewl',en:'How much is it?',c:'Questions'},
    {tr:'Van...?',pr:'von',en:'Is there...?',c:'Questions'},
    {tr:'Tud segíteni?',pr:'tood SHEG-ee-teh-nee',en:'Can you help me?',c:'Questions'},
    {tr:'Segítség!',pr:'SHEG-eet-shayg',en:'Help!',c:'Emergency'},
    {tr:'Nem értem',pr:'nem AYR-tem',en:'I don\'t understand',c:'Emergency'},
    {tr:'Az orvos',pr:'oz OR-vosh',en:'the doctor',c:'Emergency'},
    {tr:'Ma',pr:'mo',en:'today',c:'Time'},
    {tr:'Holnap',pr:'HOL-nop',en:'tomorrow',c:'Time'},
    {tr:'Milyen idő van?',pr:'MEE-yen EE-duh von',en:'What\'s the weather?',c:'Time'},
    {tr:'A reptér',pr:'aw REP-tayr',en:'the airport',c:'Travel'},
    {tr:'Az útlevél',pr:'oz OOT-leh-vayl',en:'the passport',c:'Travel'},
    {tr:'Egy taxit kérek',pr:'EDJ TAK-sit KAY-rek',en:'A taxi, please',c:'Travel'},
    {tr:'Van foglalásom',pr:'von FOG-lah-lah-shom',en:'I have a reservation',c:'Travel'},
    {tr:'Lassabban, kérem',pr:'LAHSH-shahb-bahn, KAY-rem',en:'Slower, please',c:'Travel'},
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Questions','Emergency','Time', 'Travel'],
  culture: [
    {icon:'🍲',title:'Gulyás is a soup',body:'Gulyás is a hearty paprika beef soup, not a thick stew — served in a kettle with a dollop of hot pepper paste. \'Gulyás\' also names the herdsmen who once made it. Order it with fresh bread.'},
    {icon:'♨️',title:'The city of baths',body:'Budapest calls itself the \'spa capital\' — thermal springs fuelled a bath culture for centuries. Soak in the Széchenyi baths in a grandiose historic building; locals play chess in the warm water.'},
    {icon:'🌳',title:'A Uralic island',body:'Hungarian is Uralic, not Indo-European. It is a cousin of Finnish and Estonian, and shares almost nothing with its neighbours, so you won\'t find English or German cognates. Learn words on their own terms.'},
    {icon:'🥃',title:'Pálinka',body:'Pálinka is a strong fruit brandy (plum, apricot, pear). It\'s a national drink, often served chilled and poured generously. Sip it slowly and it\'s a warm welcome.'},
    {icon:'🍻',title:'Toast with a cheer',body:'Raise a glass with \'Egészségedre!\' (to your health). Hungarians clink glasses and say it before the first sip — it\'s rude to drink before someone has said it.'},
    {icon:'🗣️',title:'A little Magyar goes far',body:'Hungarians are famously proud of their unusual language, and foreigners rarely attempt it. A single \'Jó napot\' or \'köszönöm\' can light up a whole shop or restaurant.'}
  ],
  sounds: [
    {l:'gy',say:'like "dy/dj" in "duke" — a soft "d" blended into "y"',ex:'egy = EDJ (1) · Magyar = MAH-dyor',voice:'egy'},
    {l:'ny',say:'like "ny" in "canyon"',ex:'nyolc = nyolts (8)',voice:'nyolc'},
    {l:'sz',say:'a plain "s" as in "yes" (never "z")',ex:'szia = SEE-ah · kenyér = KEN-yehr',voice:'szia'},
    {l:'cs',say:'"ch" as in "church"',ex:'család = CHAH-lad (family)',voice:'család'},
    {l:'s',say:'"sh" as in "she" — Hungarian "s" is NOT English "s"',ex:'sör = shur (beer) · szép = sayp',voice:'sör'},
    {l:'ö/ü',say:'rounded front vowels — lips like "oo", but say "e"',ex:'öt = ERT (5) · kettő = KET-tuh',voice:'öt'},
    {l:'r',say:'rolled / trilled "r" — tap the tip of your tongue',ex:'Budapest = BOO-dah-pesht · jó reggelt',voice:'Budapest'},
    {l:'ty',say:'a soft "t" as in "tune" / "cute"',ex:'kutya = KOO-tya (dog)',voice:'kutya'}
  ],
  resources: [
    {icon:'🗣️',t:'Easy Hungarian',d:'Street interviews with native speakers and subtitles — real everyday Hungarian at a natural pace.',q:'Easy Hungarian street interviews'},
    {icon:'🎧',t:'HungarianPod101',d:'Structured bite-size lessons from beginner to advanced, with plenty of audio.',q:'HungarianPod101 Hungarian lessons'},
    {icon:'🐢',t:'Slow Hungarian Podcasts',d:'Easy listening for learners — perfect for a walk or commute.',q:'slow Hungarian podcast for learners'},
    {icon:'📚',t:'Magyaróra',d:'Free worksheets, exercises and clear grammar notes for beginner Hungarian.',q:'Magyaróra Hungarian lessons'},
    {icon:'💬',t:'Hungarian for Beginners',d:'Conversational Hungarian built from real dialogues, not grammar tables.',q:'Hungarian for beginners learn language'}
  ]
};
