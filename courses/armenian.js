/* ---- armenian ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["armenian"] = {
  name: 'Armenian',
  flag: '🇦🇲',
  tts: 'hy-AM',
  dir: 'ltr',
  native: 'Հայերեն',
  soundTitle: 'Armenian sounds & spelling',
  soundIntro: 'Armenian has its own 39-letter alphabet. The trickiest part is the three-way contrast in consonants — voiced (b), unaspirated (p) and aspirated (p\'). Master those and your accent jumps ahead.',
  grammar: '<p>Armenian is written with its own alphabet (created in 405 AD) and read left to right. There is no grammatical gender — <i>նա</i> (na) means both \'he\' and \'she\'. Verbs are friendly for beginners: <i>ուզում եմ</i> (I want), <i>կուզեի</i> (I would like). Word order is flexible but usually subject–verb–object. Instead of separate words for \'the\' and \'a\', Armenian changes the end of the word.</p>',
  bridges: '<div class="note">🌍 <b>Its own branch.</b> Armenian forms its own branch of the Indo-European family — it\'s not close to Russian, Turkish, or any neighbour. No cousins to lean on, but you\'ll spot lots of borrowed words.</div><div class="note">🚕 <b>Loanwords.</b> Everyday Armenian borrows freely and keeps the meaning: <i>տաքսի</i> (taksi = taxi), <i>կաֆե</i> (kafe = café), <i>բանկ</i> (bank = bank), <i>ռեստորան</i> (restoran = restaurant).</div>',
  lessons: [
    { id:1, title:'Greetings & being polite', focus:'բարև · բարի լույս · շնորհակալություն · խնդրում եմ',
      steps:[
        {t:'say',text:'Let\'s start with the first word you\'ll use: <span class="inline-tr">Բարև</span> — barev — hello. In older spelling you\'ll see it written <span class="inline-tr">Բարեւ</span>. Say it out loud.',tr:'Բարև'},
        {t:'words',items:[{tr:'Բարև',pr:'ba-REV',en:'hello'},{tr:'Բարի լույս',pr:'ba-REE LUYS',en:'good morning'},{tr:'Բարի երեկո',pr:'ba-REE ye-re-KO',en:'good evening'},{tr:'Բարի գիշեր',pr:'ba-REE gee-SHER',en:'good night'},{tr:'Ցտեսություն',pr:'ts\'teh-soo-TYOON',en:'goodbye'}]},
        {t:'chal',en:'Hello, good morning',tr:'Բարև, բարի լույս',pr:'ba-REV, ba-REE LUYS',morph:['բարև = hello','բարի լույս = good morning']},
        {t:'say',text:'The magic polite words: <span class="inline-tr">շնորհակալություն</span> (shnorhakalutyun) = thank you, and <span class="inline-tr">խնդրում եմ</span> (khndrum em) = please / you\'re welcome.',tr:'շնորհակալություն'},
        {t:'words',items:[{tr:'շնորհակալություն',pr:'shnor-ha-ka-loo-TYOON',en:'thank you'},{tr:'խնդրում եմ',pr:'khn-DROOM em',en:'please / you\'re welcome'},{tr:'ներեցեք',pr:'ne-re-TSEK',en:'excuse me / sorry'}]},
        {t:'chal',en:'Thank you',tr:'Շնորհակալություն',pr:'shnor-ha-ka-loo-TYOON',morph:['շնորհակալություն = thank you']},
        {t:'say',text:'To ask how someone is: <span class="inline-tr">Ինչպե՞ս եք</span> (inch\'pes ek). A polite reply: <span class="inline-tr">Շատ լավ, շնորհակալություն</span> — very well, thanks.',tr:'Ինչպե՞ս եք'},
        {t:'chal',en:'How are you?',tr:'Ինչպե՞ս եք',pr:'inch\'pes ek',morph:['ինչպե՞ս = how','եք = you are (formal)']}
      ],
      blocks:['<code>բարև</code> = hello','<code>բարի լույս</code> = good morning','<code>շնորհակալություն</code> = thank you · <code>խնդրում եմ</code> = please','<code>ցտեսություն</code> = goodbye'] },
    { id:2, title:'Numbers 1–10', focus:'մեկ · երկու · երեք · տաս',
      steps:[
        {t:'say',text:'Numbers are the fastest win. Listen and repeat: <span class="inline-tr">մեկ, երկու, երեք</span>.',tr:'մեկ'},
        {t:'words',items:[{tr:'մեկ',pr:'MEK',en:'1'},{tr:'երկու',pr:'yer-KU',en:'2'},{tr:'երեք',pr:'ye-REK',en:'3'},{tr:'չորս',pr:'CHORS',en:'4'},{tr:'հինգ',pr:'HING',en:'5'},{tr:'տաս',pr:'TAS',en:'10'}]},
        {t:'chal',en:'One coffee, please',tr:'Մեկ սուրճ, խնդրում եմ',pr:'MEK surch, khn-DROOM em',morph:['մեկ = one','սուրճ = coffee','խնդրում եմ = please']},
        {t:'say',text:'<span class="inline-tr">Որքա՞ն արժե</span> = how much does it cost? A key phrase for shopping.',tr:'Որքա՞ն արժե'},
        {t:'chal',en:'How much is it?',tr:'Որքա՞ն արժե',pr:'or-KAN ar-ZHE',morph:['որքան = how much','արժե = it costs']},
        {t:'chal',en:'It\'s five hundred drams',tr:'Հինգ հարյուր դրամ',pr:'HING ha-RYUR dram',morph:['հինգ = five','հարյուր = hundred','դրամ = dram (the currency)']}
      ],
      blocks:['մեկ, երկու, երեք, չորս, հինգ = 1–5','<code>տաս</code> = 10','<code>որքա՞ն արժե</code> = how much is it?'] },
    { id:3, title:'"I want" — the verb ուզել', focus:'ուզում եմ · կուզեի · կարո՞ղ եմ',
      steps:[
        {t:'say',text:'To say what you want: <span class="inline-tr">ուզում եմ</span> (uzum em) = I want. Direct and useful.',tr:'ուզում եմ'},
        {t:'say',text:'Ordering politely? Use <span class="inline-tr">կուզեի</span> (kuzei) = I would like. Softer than \'I want\'.',tr:'կուզեի'},
        {t:'chal',en:'I want water',tr:'Ջուր եմ ուզում',pr:'jur em u-ZUM',morph:['ջուր = water','եմ ուզում = I want']},
        {t:'chal',en:'I would like a coffee',tr:'Կուզեի մեկ սուրճ',pr:'ku-ZE-I MEK surch',morph:['կուզեի = I would like','մեկ սուրճ = a coffee']},
        {t:'say',text:'To ask permission: <span class="inline-tr">Կարո՞ղ եմ…?</span> (karogh em) = may I…?',tr:'Կարո՞ղ եմ'},
        {t:'chal',en:'May I pay?',tr:'Կարո՞ղ եմ վճարել',pr:'ka-ROGH em vcha-REL',morph:['կարո՞ղ եմ = may I','վճարել = to pay']}
      ],
      blocks:['<code>ուզում եմ</code> = I want','<code>կուզեի</code> = I would like','<code>կարո՞ղ եմ</code> = may I…?'] },
    { id:4, title:'Food & drink', focus:'ջուր · հաց · սուրճ · թեյ',
      steps:[
        {t:'say',text:'Eating or drinking? Key words: <span class="inline-tr">ջուր</span> (jur = water), <span class="inline-tr">հաց</span> (hats = bread), <span class="inline-tr">սուրճ</span> (surch = coffee), <span class="inline-tr">թեյ</span> (tey = tea).',tr:'ջուր'},
        {t:'words',items:[{tr:'ջուր',pr:'JUR',en:'water'},{tr:'հաց',pr:'HATS',en:'bread'},{tr:'սուրճ',pr:'SURCH',en:'coffee'},{tr:'թեյ',pr:'TEY',en:'tea'},{tr:'մենյու',pr:'me-NYU',en:'the menu',link:'≈ English menu'}]},
        {t:'chal',en:'Tea and bread, please',tr:'Թեյ և հաց, խնդրում եմ',pr:'tey yev hats, khn-DROOM em',morph:['թեյ = tea','և = and','հաց = bread']},
        {t:'chal',en:'I would like the menu',tr:'Կուզեի մենյուն',pr:'ku-ZE-I me-NYUN',morph:['կուզեի = I would like','մենյուն = the menu']},
        {t:'say',text:'<span class="inline-tr">Համեղ է</span> (hamel e) = it\'s delicious. And a café is <span class="inline-tr">սրճարան</span> (srcharan) — from <span class="inline-tr">սուրճ</span>, coffee.',tr:'Համեղ է'},
        {t:'chal',en:'It\'s delicious!',tr:'Համեղ է!',pr:'ha-MEL e',morph:['համեղ = delicious','է = it is']}
      ],
      blocks:['<code>ջուր</code>, <code>հաց</code> = water, bread','<code>սուրճ</code> / <code>թեյ</code> = coffee / tea','<code>համեղ է</code> = delicious'] },
    { id:5, title:'Getting around', focus:'որտե՞ղ է · աջ · ձախ · ուղիղ',
      steps:[
        {t:'say',text:'The most useful question in any city: <span class="inline-tr">Որտե՞ղ է…?</span> — where is…?',tr:'Որտե՞ղ է'},
        {t:'words',items:[{tr:'որտե՞ղ է...',pr:'vor-TEGH e',en:'where is...?'},{tr:'աջ',pr:'AJD',en:'to the right'},{tr:'ձախ',pr:'DZAKH',en:'to the left'},{tr:'ուղիղ',pr:'u-GHIGH',en:'straight ahead'},{tr:'կայարան',pr:'ka-ya-RAN',en:'the station',link:'≈ English station'},{tr:'տաքսի',pr:'tak-SEE',en:'a taxi',link:'≈ English taxi'}]},
        {t:'chal',en:'Where is the station?',tr:'Որտե՞ղ է կայարանը',pr:'vor-TEGH e ka-ya-RA-ny',morph:['որտե՞ղ է = where is','կայարանը = the station']},
        {t:'chal',en:'Where is the bank?',tr:'Որտե՞ղ է բանկը',pr:'vor-TEGH e BANK-ə',morph:['որտե՞ղ է = where is','բանկը = the bank']},
        {t:'say',text:'<span class="inline-tr">աջ</span> (ajet) and <span class="inline-tr">ձախ</span> (dzakh) tell you which way to turn. \'Straight ahead\' is <span class="inline-tr">ուղիղ</span> (ughigh).',tr:'ուղիղ'},
        {t:'chal',en:'Straight ahead',tr:'Ուղիղ',pr:'u-GHIGH',morph:['ուղիղ = straight ahead']}
      ],
      blocks:['<code>որտե՞ղ է…?</code> = where is…?','<code>աջ</code> / <code>ձախ</code> = right / left','<code>տաքսի</code> = a taxi (a loanword)'] },
    { id:6, title:'Questions & "do you have…?"', focus:'ունե՞ք · ի՞նչ · կարո՞ղ եմ',
      steps:[
        {t:'say',text:'To ask if someone has something: <span class="inline-tr">Ունե՞ք…?</span> = do you have…? (formal / plural).',tr:'Ունե՞ք'},
        {t:'chal',en:'Do you have a table?',tr:'Ունե՞ք սեղան',pr:'u-NEK se-GHAN',morph:['ունե՞ք = do you have','սեղան = a table']},
        {t:'say',text:'Question words to collect: <span class="inline-tr">Ի՞նչ</span> (inch = what), <span class="inline-tr">Որտե՞ղ</span> (vortegh = where), <span class="inline-tr">Երբ</span> (yerv = when).',tr:'Ի՞նչ'},
        {t:'words',items:[{tr:'ի՞նչ',pr:'INCH',en:'what'},{tr:'որտե՞ղ',pr:'vor-TEGH',en:'where'},{tr:'երբ',pr:'YERP',en:'when'},{tr:'ի՞նչու',pr:'in-CHU',en:'why'},{tr:'ինչպե՞ս',pr:'inch-PES',en:'how'}]},
        {t:'say',text:'For a polite request: <span class="inline-tr">Կարո՞ղ եմ…?</span> = may I…?.',tr:'Կարո՞ղ եմ'},
        {t:'chal',en:'Is there internet?',tr:'Կա՞ ինտերնետ',pr:'ka in-ter-NET',morph:['կա՞ = is there','ինտերնետ = internet']}
      ],
      blocks:['<code>ունե՞ք…?</code> = do you have…?','<code>ի՞նչ</code> / <code>որտե՞ղ</code> / <code>երբ</code> = what / where / when','<code>կարո՞ղ եմ</code> = may I…?'] },
    { id:7, title:'Family & people', focus:'ընտանիք · մայր · հայր · ընկեր',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">ընտանիք</span> (yntanik = family), <span class="inline-tr">մայր</span> (mayr = mother), <span class="inline-tr">հայր</span> (hayr = father).',tr:'ընտանիք'},
        {t:'words',items:[{tr:'ընտանիք',pr:'yen-ta-NIK',en:'family'},{tr:'մայր',pr:'MAYR',en:'mother'},{tr:'հայր',pr:'HAYR',en:'father'},{tr:'եղբայր',pr:'yegh-BAYR',en:'brother'},{tr:'քույր',pr:'KUYR',en:'sister'},{tr:'ընկեր',pr:'yen-KER',en:'friend'}]},
        {t:'chal',en:'I have a friend',tr:'Ընկեր ունեմ',pr:'yen-ker u-NEM',morph:['ընկեր = friend','ունեմ = I have']},
        {t:'say',text:'<span class="inline-tr">ունեմ</span> (unem) = I have. A key verb: <span class="inline-tr">Ընտանիք ունեմ</span> — I have a family.',tr:'ունեմ'},
        {t:'chal',en:'I have a family',tr:'Ընտանիք ունեմ',pr:'yen-ta-nik u-NEM',morph:['ընտանիք = family','ունեմ = I have']}
      ],
      blocks:['<code>մայր</code> / <code>հայր</code> = mother / father','<code>եղբայր</code> / <code>քույր</code> = brother / sister','<code>ունեմ</code> = I have'] },
    { id:8, title:'Time, days & weather', focus:'այսօր · վաղը · եղանակ',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">այսօր</span> (aysor), tomorrow is <span class="inline-tr">վաղը</span> (vaghə).',tr:'այսօր'},
        {t:'words',items:[{tr:'այսօր',pr:'ay-SOR',en:'today'},{tr:'վաղը',pr:'VA-ghə',en:'tomorrow'},{tr:'երեկ',pr:'ye-REK',en:'yesterday'},{tr:'օր',pr:'OR',en:'day'},{tr:'շաբաթ',pr:'sha-BAT',en:'week'}]},
        {t:'chal',en:'See you tomorrow',tr:'Մինչև վաղը',pr:'min-CHEV VA-ghə',morph:['մինչև = until','վաղը = tomorrow']},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">Ինչպիսի՞ն է եղանակը</span> (inchpisi e yeghanake).',tr:'Ինչպիսի՞ն է եղանակը'},
        {t:'words',items:[{tr:'ինչպիսի՞ն է եղանակը',pr:'inch-pee-SEEN e ye-gha-NA-ke',en:'what\'s the weather like?'},{tr:'արևոտ',pr:'a-re-VOT',en:'sunny'},{tr:'անձրև',pr:'an-DZREV',en:'rain'},{tr:'ցուրտ',pr:'TSURT',en:'cold'},{tr:'տաք',pr:'TAK',en:'hot'}]},
        {t:'chal',en:'It\'s raining',tr:'Անձրև է գալիս',pr:'an-DZREV e ga-LIS',morph:['անձրև = rain','է գալիս = is coming']}
      ],
      blocks:['<code>այսօր</code> / <code>վաղը</code> = today / tomorrow','<code>ինչպիսի՞ն է եղանակը</code> = what\'s the weather like?','<code>անձրև</code> = rain'] },
    { id:9, title:'My name', focus:'իմ անունը __NAME__ է · ի՞նչ է ձեր անունը',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">Իմ անունը __NAME__ է</span> = my name is __NAME__. To ask back (formal): <span class="inline-tr">Ի՞նչ է ձեր անունը</span>.',tr:'Իմ անունը __NAME__ է'},
        {t:'chal',en:'My name is __NAME__',tr:'Իմ անունը __NAME__ է',pr:'im a-NU-ny __NAME__ e',morph:['իմ = my','անունը = the name','է = is']},
        {t:'say',text:'Informally: <span class="inline-tr">Ի՞նչ է քո անունը</span> (inch e ko anuny).',tr:'Ի՞նչ է քո անունը'},
        {t:'chal',en:'What\'s your name?',tr:'Ի՞նչ է ձեր անունը',pr:'inch e dzer a-NU-ny',morph:['ինչ = what','է = is','ձեր անունը = your name']},
        {t:'chal',en:'Pleased to meet you',tr:'Ուրախ եմ',pr:'u-RAKH em',morph:['ուրախ = glad','եմ = I am']}
      ],
      blocks:['<code>իմ անունը __NAME__ է</code> = my name is __NAME__','<code>ի՞նչ է ձեր անունը</code> = what\'s your name?','<code>ուրախ եմ</code> = pleased to meet you'] },
    { id:10, title:'Health & emergency', focus:'օգնություն · բժիշկ · դեղատուն · չեմ հասկանում',
      steps:[
        {t:'say',text:'The most important words if you need help: <span class="inline-tr">Օգնություն</span> (ognutyun = help!), <span class="inline-tr">բժիշկ</span> (bzhishk = doctor), <span class="inline-tr">դեղատուն</span> (deghatun = pharmacy).',tr:'Օգնություն'},
        {t:'words',items:[{tr:'Օգնություն',pr:'og-noo-TYOON',en:'help!'},{tr:'բժիշկ',pr:'BZHISHK',en:'doctor'},{tr:'դեղատուն',pr:'de-gha-TUN',en:'pharmacy'},{tr:'Չեմ հասկանում',pr:'chem has-ka-NUM',en:'I don\'t understand'}]},
        {t:'chal',en:'Help!',tr:'Օգնություն!',pr:'og-noo-TYOON',morph:['օգնություն = help']},
        {t:'chal',en:'I don\'t understand',tr:'Չեմ հասկանում',pr:'chem has-ka-NUM',morph:['չեմ = I don\'t','հասկանում = understand']},
        {t:'say',text:'Do you speak English? <span class="inline-tr">Խոսու՞մ եք անգլերեն</span>.',tr:'Խոսու՞մ եք անգլերեն'},
        {t:'chal',en:'Do you speak English?',tr:'Խոսու՞մ եք անգլերեն',pr:'kho-SUM ek ang-le-REN',morph:['խոսու՞մ եք = do you speak','անգլերեն = English']}
      ],
      blocks:['<code>օգնություն</code> = help','<code>բժիշկ</code> = doctor','<code>չեմ հասկանում</code> = I don\'t understand'] },
    { id:11, title:'Describing things', focus:'գեղեցիկ · մեծ · փոքր · շատ',
      steps:[
        {t:'say',text:'Adjectives are easy: <span class="inline-tr">գեղեցիկ</span> (geghetsik = beautiful), <span class="inline-tr">մեծ</span> (mets = big), <span class="inline-tr">փոքր</span> (pokr = small).',tr:'գեղեցիկ'},
        {t:'words',items:[{tr:'գեղեցիկ',pr:'ge-ghe-TSIK',en:'beautiful'},{tr:'մեծ',pr:'METS',en:'big'},{tr:'փոքր',pr:'POKR',en:'small'},{tr:'շատ',pr:'SHAT',en:'very / a lot'},{tr:'համեղ',pr:'ha-MEL',en:'delicious'}]},
        {t:'chal',en:'Very beautiful',tr:'Շատ գեղեցիկ',pr:'SHAT ge-ghe-TSIK',morph:['շատ = very','գեղեցիկ = beautiful']},
        {t:'chal',en:'A big coffee',tr:'Մեծ սուրճ',pr:'METS surch',morph:['մեծ = big','սուրճ = coffee']}
      ],
      blocks:['<code>գեղեցիկ</code> = beautiful','<code>մեծ</code> / <code>փոքր</code> = big / small','<code>շատ</code> = very'] },
    { id:12, title:'Tying it together', focus:'a capstone day out in Yerevan',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolbox. This capstone uses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello, how are you?',tr:'Բարև, ինչպե՞ս եք',pr:'ba-REV, inch-PES ek',morph:['բարև = hello','ինչպե՞ս եք = how are you?']},
        {t:'chal',en:'I\'d like a coffee, please',tr:'Կուզեի մեկ սուրճ, խնդրում եմ',pr:'ku-ZE-I MEK surch, khn-DROOM em',morph:['կուզեի = I would like','մեկ սուրճ = a coffee','խնդրում եմ = please']},
        {t:'chal',en:'Where is the station?',tr:'Որտե՞ղ է կայարանը',pr:'vor-TEGH e ka-ya-RA-ny',morph:['որտե՞ղ է = where is','կայարանը = the station']},
        {t:'chal',en:'How much is it?',tr:'Որքա՞ն արժե',pr:'or-KAN ar-ZHE',morph:['որքա՞ն արժե = how much is it?']},
        {t:'chal',en:'Delicious! Thank you!',tr:'Համեղ է! Շնորհակալություն!',pr:'ha-MEL e, shnor-ha-ka-loo-TYOON',morph:['համեղ է = delicious','շնորհակալություն = thank you']}
      ],
      blocks:['You built: greetings, ordering, directions, prices, thanks — a full day out in Armenian.'] },
    { id:13, title:'Airport & tickets', focus:'օդանավակայան · անձնագիր · տոմս · թռիչք',
      steps:[
        {t:'say',text:'You have landed in Yerevan. The building is the <span class="inline-tr">օդանավակայան</span>. Your document is an <span class="inline-tr">անձնագիր</span>.',tr:'օդանավակայան'},
        {t:'words',items:[{tr:'օդանավակայան',pr:'o-da-na-va-ka-YAN',en:'the airport'},{tr:'անձնագիր',pr:'andz-na-GEER',en:'the passport'},{tr:'տոմս',pr:'TOMS',en:'the ticket'},{tr:'թռիչք',pr:'t\'rrichk',en:'the flight'},{tr:'դարպաս',pr:'dar-PAS',en:'the gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'Որտեղ է օդանավակայանը',pr:'vor-TEGH e o-da-na-va-ka-YA-ny',morph:['որտեղ է = where is','օդանավակայանը = the airport']},
        {t:'chal',en:'Here is my passport',tr:'Ահա իմ անձնագիրը',pr:'a-HA im andz-na-GEE-ry',morph:['ահա = here is','իմ անձնագիրը = my passport']},
        {t:'chal',en:'A ticket, please',tr:'Մեկ տոմս, խնդրում եմ',pr:'MEK toms, khn-DROOM em',morph:['մեկ տոմս = one ticket','խնդրում եմ = please']},
        {t:'chal',en:'Where is the gate?',tr:'Որտեղ է դարպասը',pr:'vor-TEGH e dar-PA-sy',morph:['որտեղ է = where is','դարպասը = the gate']}
      ],
      blocks:['<code>օդանավակայան</code> = airport','<code>անձնագիր</code> = passport','<code>տոմս</code> = ticket'] },
    { id:14, title:'The taxi', focus:'տաքսի · գնալ · հյուրանոց · կանգնեք',
      steps:[
        {t:'say',text:'The driver is waiting. Armenian needs the infinitive: <span class="inline-tr">ուզում եմ գնալ հյուրանոց</span> — I want to go to the hotel.',tr:'տաքսի'},
        {t:'words',items:[{tr:'տաքսի',pr:'tak-SEE',en:'the taxi'},{tr:'վարորդ',pr:'va-RORT',en:'the driver'},{tr:'ուզում եմ գնալ',pr:'u-ZUM em gnal',en:'I want to go'},{tr:'կանգնեք այստեղ',pr:'kang-NEK ay-STEGH',en:'stop here (formal)'}]},
        {t:'chal',en:'A taxi, please',tr:'Տաքսի, խնդրում եմ',pr:'tak-SEE, khn-DROOM em',morph:['տաքսի = taxi','խնդրում եմ = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'Ուզում եմ գնալ հյուրանոց',pr:'u-ZUM em gnal hyu-ra-NOTS',morph:['ուզում եմ = I want','գնալ = to go','հյուրանոց = hotel']},
        {t:'chal',en:'Stop here, please',tr:'Կանգնեք այստեղ, խնդրում եմ',pr:'kang-NEK ay-STEGH, khn-DROOM em',morph:['կանգնեք այստեղ = stop here','խնդրում եմ = please']},
        {t:'chal',en:'How much is it?',tr:'Որքան արժե',pr:'or-KAN ar-ZHE',morph:['որքան = how much','արժե = it costs']}
      ],
      blocks:['<code>ուզում եմ գնալ …</code> = I want to go to …','<code>կանգնեք այստեղ</code> = stop here (formal)'] },
    { id:15, title:'The hotel', focus:'ամրագրում · սենյակ · բանալի · գիշեր',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">ամրագրում ունեմ</span> — I have a reservation.',tr:'ամրագրում ունեմ'},
        {t:'words',items:[{tr:'հյուրանոց',pr:'hyu-ra-NOTS',en:'the hotel'},{tr:'ամրագրում',pr:'am-ra-GRUM',en:'the reservation'},{tr:'սենյակ',pr:'sen-YAK',en:'the room'},{tr:'բանալի',pr:'ba-na-LEE',en:'the key'},{tr:'մեկ գիշեր',pr:'MEK gee-SHER',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'Ամրագրում ունեմ',pr:'am-ra-GRUM u-NEM',morph:['ամրագրում = a reservation','ունեմ = I have']},
        {t:'chal',en:'A room for one night, please',tr:'Մեկ գիշերվա սենյակ, խնդրում եմ',pr:'MEK gee-sher-VA sen-YAK, khn-DROOM em',morph:['մեկ գիշերվա = for one night','սենյակ = a room','խնդրում եմ = please']},
        {t:'chal',en:'The key, please',tr:'Բանալին, խնդրում եմ',pr:'ba-na-LEEN, khn-DROOM em',morph:['բանալին = the key','խնդրում եմ = please']},
        {t:'chal',en:'Where is my room?',tr:'Որտեղ է իմ սենյակը',pr:'vor-TEGH e im sen-YA-ky',morph:['որտեղ է = where is','իմ սենյակը = my room']}
      ],
      blocks:['<code>ամրագրում</code> = reservation','<code>սենյակ</code> = room','<code>բանալի</code> = key'] },
    { id:16, title:'Ask for help', focus:'չեմ հասկանում · դանդաղ · անգլերեն',
      steps:[
        {t:'say',text:'When Armenian is too fast: <span class="inline-tr">Ավելի դանդաղ, խնդրում եմ</span> — slower, please. Formal <span class="inline-tr">դուք</span> is safer with staff.',tr:'Ավելի դանդաղ'},
        {t:'words',items:[{tr:'ավելի դանդաղ',pr:'a-ve-LEE dan-DAGH',en:'slower'},{tr:'կրկին',pr:'kr-KEEN',en:'again'},{tr:'անգլերեն',pr:'ang-le-REN',en:'English'},{tr:'կարող եք օգնել',pr:'ka-ROGH ek og-NEL',en:'can you help? (formal)'}]},
        {t:'chal',en:'I don\'t understand',tr:'Չեմ հասկանում',pr:'chem has-ka-NUM',morph:['չեմ = I don\'t','հասկանում = understand']},
        {t:'chal',en:'Slower, please',tr:'Ավելի դանդաղ, խնդրում եմ',pr:'a-ve-LEE dan-DAGH, khn-DROOM em',morph:['ավելի դանդաղ = slower','խնդրում եմ = please']},
        {t:'chal',en:'Can you help me?',tr:'Կարող եք ինձ օգնել',pr:'ka-ROGH ek indz og-NEL',morph:['կարող եք = can you (formal)','ինձ = me','օգնել = to help']},
        {t:'chal',en:'Do you speak English?',tr:'Խոսում եք անգլերեն',pr:'kho-SUM ek ang-le-REN',morph:['խոսում եք = do you speak','անգլերեն = English']}
      ],
      blocks:['<code>ավելի դանդաղ</code> = slower','<code>խոսում եք անգլերեն</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'cafe', title:'☕ At a café', emoji:'☕', turns:[
      {who:'You',tr:'Բարի լույս։ Մեկ սուրճ, խնդրում եմ։',pr:'ba-REE LUYS, MEK surch, khn-DROOM em',en:'Good morning. One coffee, please.'},
      {who:'Barista',tr:'Այստեղ ե՞ք խմելու, թե՞ հետը տանելու։',pr:'ay-STEGH ek khe-Me-LU, te he-TE ta-NE-LU',en:'Are you having it here or to go?'},
      {who:'You',tr:'Այստեղ, շնորհակալություն։',pr:'ay-STEGH, shnor-ha-ka-loo-TYOON',en:'Here, thank you.'},
      {who:'Barista',tr:'Ահա։ Հազար դրամ։',pr:'a-HA, ha-ZAR dram',en:'Here. A thousand drams.'},
      {who:'You',tr:'Շնորհակալություն։',pr:'shnor-ha-ka-loo-TYOON',en:'Thank you!'}
    ]},
    { id:'transport', title:'🚉 At the station', emoji:'🚉', turns:[
      {who:'You',tr:'Ներեցեք, որտե՞ղ է կայարանը։',pr:'ne-re-TSEK, vor-TEGH e ka-ya-RA-ny',en:'Excuse me, where\'s the station?'},
      {who:'Local',tr:'Այնտեղ, աջ կողմում։',pr:'ayn-TEGH, ajd kog-MUM',en:'There, on the right.'},
      {who:'You',tr:'Շնորհակալություն։ Մեկ տոմս, խնդրում եմ։',pr:'shnor-ha-ka-loo-TYOON, MEK toms, khn-DROOM em',en:'Thanks. One ticket, please.'},
      {who:'Ticket',tr:'Մեկ տոմս՝ հազար դրամ։',pr:'MEK toms, ha-ZAR dram',en:'One ticket — a thousand drams.'},
      {who:'You',tr:'Ե՞րբ է ավտոբուսը։',pr:'yerb e av-to-BU-sə',en:'When is the bus?'}
    ]},
    { id:'restaurant', title:'🍽️ At a restaurant', emoji:'🍽️', turns:[
      {who:'Waiter',tr:'Բարի երեկո։ Ունե՞ք ամրագրում։',pr:'ba-REE ye-re-KO, u-NEK am-ra-GRUM',en:'Good evening. Do you have a reservation?'},
      {who:'You',tr:'Այո, երկուսի համար։',pr:'A-YO, yer-KU-si ha-MAR',en:'Yes, for two people.'},
      {who:'You',tr:'Ճաշացուցակը, խնդրում եմ։',pr:'cha-sha-tsu-TSA-ky, khn-DROOM em',en:'The menu, please.'},
      {who:'You',tr:'Կուզեի մեկ թեյ և մեկ ջուր։',pr:'ku-ZE-I MEK tey yev MEK jur',en:'I\'d like a tea and a water.'},
      {who:'Waiter',tr:'Լավ ընտրություն։ Բարի ախորժակ։',pr:'lav yn-tru-TYUN, ba-REE a-khor-ZHAK',en:'Good choice. Bon appétit!'}
    ]},
    { id:'market', title:'🛒 At the market', emoji:'🛒', turns:[
      {who:'You',tr:'Որքա՞ն արժե սա։',pr:'or-KAN ar-ZHE sa',en:'How much is this?'},
      {who:'Seller',tr:'Հինգ հարյուր դրամ։',pr:'HING ha-RYUR dram',en:'Five hundred drams.'},
      {who:'You',tr:'Թանկ է։ Կարո՞ղ եք իջեցնել։',pr:'TANK e, ka-ROGH ek i-je-TSNEL',en:'That\'s expensive. Can you lower the price?'},
      {who:'Seller',tr:'Օ, լավ։ Երեք հարյուր։',pr:'O, lav, ye-REK ha-RYUR',en:'Oh, fine. Three hundred.'},
      {who:'You',tr:'Կվերցնեմ։ Շնորհակալություն։',pr:'kver-ts-NEM, shnor-ha-ka-loo-TYOON',en:'I\'ll take it. Thank you!'}
    ]}
  ],
  pocket: [
    {tr:'Բարև',pr:'ba-REV',en:'Hello',c:'Greetings'},
    {tr:'Բարի լույս',pr:'ba-REE LUYS',en:'Good morning',c:'Greetings'},
    {tr:'Բարի երեկո',pr:'ba-REE ye-re-KO',en:'Good evening',c:'Greetings'},
    {tr:'Ցտեսություն',pr:'ts\'teh-soo-TYOON',en:'Goodbye',c:'Greetings'},
    {tr:'Ինչպե՞ս եք',pr:'inch-PES ek',en:'How are you?',c:'Greetings'},
    {tr:'Շատ լավ, շնորհակալություն',pr:'SHAT lav, shnor-ha-ka-loo-TYOON',en:'Fine, thanks',c:'Greetings'},
    {tr:'Իմ անունը __NAME__ է',pr:'im a-NU-ny __NAME__ e',en:'My name is __NAME__',c:'Greetings'},
    {tr:'Խնդրում եմ',pr:'khn-DROOM em',en:'Please',c:'Courtesy'},
    {tr:'Շնորհակալություն',pr:'shnor-ha-ka-loo-TYOON',en:'Thank you',c:'Courtesy'},
    {tr:'Ներեցեք',pr:'ne-re-TSEK',en:'Excuse me',c:'Courtesy'},
    {tr:'Այո',pr:'A-YO',en:'Yes',c:'Courtesy'},
    {tr:'Ոչ',pr:'VOCH',en:'No',c:'Courtesy'},
    {tr:'Մեկ',pr:'MEK',en:'1',c:'Numbers'},
    {tr:'Երկու',pr:'yer-KU',en:'2',c:'Numbers'},
    {tr:'Երեք',pr:'ye-REK',en:'3',c:'Numbers'},
    {tr:'Չորս',pr:'CHORS',en:'4',c:'Numbers'},
    {tr:'Հինգ',pr:'HING',en:'5',c:'Numbers'},
    {tr:'Տաս',pr:'TAS',en:'10',c:'Numbers'},
    {tr:'Ջուր',pr:'JUR',en:'water',c:'Food'},
    {tr:'Հաց',pr:'HATS',en:'bread',c:'Food'},
    {tr:'Սուրճ',pr:'SURCH',en:'coffee',c:'Food'},
    {tr:'Թեյ',pr:'TEY',en:'tea',c:'Food'},
    {tr:'Կուզեի',pr:'ku-ZE-I',en:'I would like',c:'Food'},
    {tr:'Համեղ է',pr:'ha-MEL e',en:'It\'s delicious',c:'Food'},
    {tr:'Որտե՞ղ է...',pr:'vor-TEGH e',en:'Where is...?',c:'Directions'},
    {tr:'Աջ',pr:'AJD',en:'to the right',c:'Directions'},
    {tr:'Ձախ',pr:'DZAKH',en:'to the left',c:'Directions'},
    {tr:'Ուղիղ',pr:'u-GHIGH',en:'straight ahead',c:'Directions'},
    {tr:'Որքա՞ն արժե',pr:'or-KAN ar-ZHE',en:'how much is it?',c:'Questions'},
    {tr:'Ունե՞ք...',pr:'u-NEK',en:'do you have...?',c:'Questions'},
    {tr:'Ի՞նչ',pr:'INCH',en:'what',c:'Questions'},
    {tr:'Ընտանիք',pr:'yen-ta-NIK',en:'family',c:'Family'},
    {tr:'Մայր',pr:'MAYR',en:'mother',c:'Family'},
    {tr:'Հայր',pr:'HAYR',en:'father',c:'Family'},
    {tr:'Օգնություն',pr:'og-noo-TYOON',en:'Help!',c:'Emergency'},
    {tr:'Բժիշկ',pr:'BZHISHK',en:'doctor',c:'Emergency'},
    {tr:'Դեղատուն',pr:'de-gha-TUN',en:'pharmacy',c:'Emergency'},
    {tr:'Չեմ հասկանում',pr:'chem has-ka-NUM',en:'I don\'t understand',c:'Emergency'},
    {tr:'օդանավակայան',pr:'o-da-na-va-ka-YAN',en:'airport',c:'Travel'},
    {tr:'տաքսի',pr:'tak-SEE',en:'taxi',c:'Travel'},
    {tr:'հյուրանոց',pr:'hyu-ra-NOTS',en:'hotel',c:'Travel'},
    {tr:'կանգնեք այստեղ',pr:'kang-NEK ay-STEGH',en:'stop here',c:'Travel'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Questions','Family','Emergency','Travel'],
  culture: [
    {icon:'✍️',title:'A 1,600-year-old alphabet',body:'Armenian has its own unique alphabet, created in 405 AD by Mesrop Mashtots. Every letter is a distinct sound, so you\'ll quickly learn to read new words aloud — an impressive skill to bring home.'},
    {icon:'☕',title:'Coffee is a ritual',body:'Coffee in Armenia is strong, black and served in a tiny cup (սուրճ). You\'ll likely be offered coffee everywhere — accepting is a warm exchange, not just a drink.'},
    {icon:'🍇',title:'A feast culture',body:'Hospitality is huge. A table is rarely just a meal — expect generous portions, plenty of toasts (կենաց) and endless insistence that you eat more.'},
    {icon:'💬',title:'A little Armenian goes far',body:'Armenians light up when visitors try their language. Even a single \'Բարև\' (barev) and \'Շնորհակալություն\' (shnorhakalutyun) open doors.'},
    {icon:'💰',title:'Dram, not euros',body:'Armenia uses the dram (դրամ). Prices are often quoted in hundreds and thousands, so get comfortable with bigger numbers quickly.'},
    {icon:'🗣️',title:'Eastern vs Western',body:'There are two main standards: Eastern (the Republic of Armenia — what you\'re learning) and Western (the diaspora). They\'re mutually understandable with effort.'}
  ],
  sounds: [
    {l:'բ',say:'voiced b — as in \'boy\'',ex:'բարև = barev (hello)',voice:'բարև'},
    {l:'պ',say:'unaspirated p — like the p in \'spit\'',ex:'պանիր = panir (cheese)',voice:'պանիր'},
    {l:'փ',say:'aspirated p\' — like the p in \'pot\', with a puff of air',ex:'փողոց = p\'oghots (street)',voice:'փողոց'},
    {l:'տ',say:'unaspirated t — like the t in \'stop\'',ex:'տաս = tas (ten)',voice:'տաս'},
    {l:'թ',say:'aspirated t\' — like the t in \'top\'',ex:'թեյ = t\'ey (tea)',voice:'թեյ'},
    {l:'կ',say:'unaspirated k — like the k in \'scan\'',ex:'կաթ = kat (milk)',voice:'կաթ'},
    {l:'ք',say:'aspirated k\' — like the k in \'cat\'',ex:'քաղաք = k\'aghak (city)',voice:'քաղաք'},
    {l:'ց',say:'\'ts\' sound',ex:'ցտեսություն = ts\'tesutyun (goodbye)',voice:'ցտեսություն'}
  ],
  resources: [
    {icon:'🎓',t:'Learn Armenian with Mariam',d:'Clear, step-by-step beginner lessons in Armenian and English from a native speaker.',q:'Learn Armenian for beginners Mariam'},
    {icon:'🗣️',t:'Armenian alphabet & pronunciation',d:'Master the 39-letter alphabet and the trick ejective/aspirate consonants with slow, clear examples.',q:'Armenian alphabet pronunciation lesson'},
    {icon:'📺',t:'Everyday Armenian phrases',d:'Real phrases for travel, cafés and markets with native audio and subtitles.',q:'common Armenian phrases for travelers'},
    {icon:'🎧',t:'Armenian podcasts for learners',d:'Easy listening in Armenian — perfect for a walk or commute.',q:'learn Armenian podcast for beginners'},
    {icon:'💬',t:'Basic Armenian conversation',d:'Short dialogues you can follow along with, focused on real conversation.',q:'basic Armenian conversation dialogue'}
  ]
};
