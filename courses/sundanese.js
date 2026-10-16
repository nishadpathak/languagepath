/* ---- sundanese ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["sundanese"] = {
  name: 'Sundanese',
  flag: '🇮🇩',
  tts: 'su-ID',
  dir: 'ltr',
  native: 'Basa Sunda',
  soundTitle: 'Sundanese sounds & spelling',
  soundIntro: 'Sundanese is written in the Latin alphabet and sounds softer and rounder than Indonesian. A few letters and one vowel (<b>eu</b>) need a little practice — learn these and you can read almost any word aloud.',
  grammar: '<p>Sundanese is an Austronesian language. Like Indonesian it is <b>SVO</b> (subject-verb-object), has no verb tenses, and forms plurals by doubling the word: <b>budak</b> = child, <b>budak-budak</b> = children. Two small particles add flavour — <b>teh</b> marks the topic and <b>mah</b> stresses it. There is no one-word verb \'to be\': <i>Abdi murid</i> = I (am) a student. Sundanese also uses polite speech registers (undak-usuk basa), so <b>abdi</b> (I) and <b>anjeun</b> (you) are the safe, respectful forms to use.</p>',
  bridges: '<div class="note">🇮🇩 <b>Indonesian.</b> Sundanese is related to Indonesian but it is a <b>separate language</b> — not a dialect of it. If you know some Indonesian you\'ll already recognize a lot: <b>kopi</b> (coffee), <b>roti</b> (bread), <b>hujan</b> (rain), <b>jalan</b> (road). Many Indonesian speakers can follow a bit, but the sounds and politeness levels differ — the <b>eu</b> vowel, for instance, does not exist in Indonesian.</div><div class="note">🇬🇧 <b>English.</b> A few loanwords line up: <b>kopi</b> ≈ coffee, <b>entéh</b> ≈ tea, <b>stasion</b> ≈ station, and <b>warung</b> — the little shop you\'ll see everywhere in Indonesia.</div>',
  lessons: [
    { id:1, title:'Greetings', focus:'halo · wilujeng énjing · sampurasun',
      steps:[
        {t:'say',text:'Let\'s start with the word you\'ll use most: <span class="inline-tr">halo</span> — hello. Say it out loud.',tr:'halo'},
        {t:'words',items:[{tr:'halo',pr:'HAH-loh',en:'hello'},{tr:'wilujeng énjing',pr:'wee-LOO-juhng EN-jeeng',en:'good morning'},{tr:'wilujeng wengi',pr:'wee-LOO-juhng WENG-ee',en:'good evening / night'},{tr:'wilujeng sumping',pr:'wee-LOO-juhng SOOM-peeng',en:'welcome'},{tr:'sampurasun',pr:'sam-poo-RAH-soon',en:'greetings (respectful hello)'}]},
        {t:'chal',en:'Good morning',tr:'Wilujeng énjing',pr:'wee-LOO-juhng EN-jeeng',morph:['wilujeng = well / safe','énjing = morning']},
        {t:'say',text:'<span class="inline-tr">sampurasun</span> is a warm, respectful greeting — often used with a slight bow. Say it with a smile.',tr:'sampurasun'},
        {t:'chal',en:'Hello, greetings',tr:'Halo, sampurasun',pr:'HAH-loh, sam-poo-RAH-soon',morph:['halo = hello','sampurasun = greetings']}
      ],
      blocks:['<code>halo</code> = hello','<code>wilujeng énjing</code> = good morning','<code>wilujeng wengi</code> = good evening','<code>sampurasun</code> = respectful hello'] },
    { id:2, title:'Being polite', focus:'hatur nuhun · punten · kumaha',
      steps:[
        {t:'say',text:'Two words open every door: <span class="inline-tr">hatur nuhun</span> (thank you) and <span class="inline-tr">punten</span> (excuse me / please).',tr:'hatur nuhun'},
        {t:'words',items:[{tr:'hatur nuhun',pr:'HAH-toor NOO-hoon',en:'thank you'},{tr:'punten',pr:'POON-ten',en:'excuse me / please / sorry'},{tr:'sami-sami',pr:'SAH-mee SAH-mee',en:'you\'re welcome'},{tr:'kumaha damang?',pr:'koo-MAH-hah DAH-mahng',en:'how are you?'},{tr:'abdi damang',pr:'ahb-dee DAH-mahng',en:'I\'m well'}]},
        {t:'chal',en:'Thank you',tr:'Hatur nuhun',pr:'HAH-toor NOO-hoon',morph:['hatur nuhun = thank you']},
        {t:'say',text:'To get someone\'s attention, squeeze past, or soften a request, say <span class="inline-tr">punten</span>. It covers "excuse me", "sorry" and "please".',tr:'punten'},
        {t:'chal',en:'I\'m well, thank you',tr:'Abdi damang, hatur nuhun',pr:'ahb-dee DAH-mahng, HAH-toor NOO-hoon',morph:['abdi = I','damang = well','hatur nuhun = thank you']}
      ],
      blocks:['<code>hatur nuhun</code> = thank you','<code>punten</code> = excuse me / please','<code>sami-sami</code> = you\'re welcome','<code>kumaha damang?</code> = how are you?'] },
    { id:3, title:'Numbers 1–10', focus:'hiji · dua · tilu · sapuluh',
      steps:[
        {t:'say',text:'Numbers are the fastest win. Say them with me: <span class="inline-tr">hiji, dua, tilu</span>.',tr:'hiji'},
        {t:'words',items:[{tr:'hiji',pr:'HEE-jee',en:'1'},{tr:'dua',pr:'DOO-ah',en:'2'},{tr:'tilu',pr:'TEE-loo',en:'3'},{tr:'opat',pr:'OH-pat',en:'4'},{tr:'lima',pr:'LEE-mah',en:'5'},{tr:'genep',pr:'guh-NEP',en:'6'},{tr:'tujuh',pr:'TOO-jooh',en:'7'},{tr:'dalapan',pr:'dah-LAH-pahn',en:'8'},{tr:'salapan',pr:'sah-LAH-pahn',en:'9'},{tr:'sapuluh',pr:'sah-POO-looh',en:'10'}]},
        {t:'chal',en:'Two coffees, please',tr:'Dua kopi, punten',pr:'DOO-ah KOH-pee, POON-ten',morph:['dua = two','kopi = coffee','punten = please']},
        {t:'say',text:'To ask a price: <span class="inline-tr">Sabaraha?</span> — how much? Useful everywhere.',tr:'Sabaraha?'},
        {t:'chal',en:'How much is it?',tr:'Sabaraha?',pr:'sah-bah-RAH-hah',morph:['sabaraha = how much']},
        {t:'chal',en:'It\'s five thousand',tr:'Lima rébu',pr:'LEE-mah RAY-boo',morph:['lima = five','rébu = thousand']}
      ],
      blocks:['hiji, dua, tilu, opat, lima = 1–5','genep, tujuh, dalapan, salapan, sapuluh = 6–10','<code>sabaraha?</code> = how much is it?'] },
    { id:4, title:'"I want" — abdi hoyong', focus:'abdi · hoyong · naon',
      steps:[
        {t:'say',text:'The phrase to order or ask for anything: <span class="inline-tr">Abdi hoyong…</span> — I want…. Put a noun after it.',tr:'abdi hoyong'},
        {t:'say',text:'<span class="inline-tr">abdi</span> = I (polite). <span class="inline-tr">hoyong</span> = want.',tr:'abdi'},
        {t:'chal',en:'I want coffee',tr:'Abdi hoyong kopi',pr:'ahb-dee HOY-yong KOH-pee',morph:['abdi = I','hoyong = want','kopi = coffee']},
        {t:'chal',en:'I want water',tr:'Abdi hoyong cai',pr:'ahb-dee HOY-yong CHAI',morph:['abdi = I','hoyong = want','cai = water']},
        {t:'say',text:'To offer or ask politely: <span class="inline-tr">Bade?</span> — would you like to? / are you going to?',tr:'Bade'},
        {t:'chal',en:'I want tea, please',tr:'Abdi hoyong entéh, punten',pr:'ahb-dee HOY-yong un-TEH, POON-ten',morph:['abdi = I','hoyong = want','entéh = tea','punten = please']}
      ],
      blocks:['<code>abdi</code> = I (polite)','<code>hoyong</code> = want','<code>Abdi hoyong…</code> = I want…'] },
    { id:5, title:'Food & drink', focus:'cai · sangu · entéh · kopi',
      steps:[
        {t:'say',text:'Hungry or thirsty? Key words: <span class="inline-tr">cai</span> (water), <span class="inline-tr">sangu</span> (rice), <span class="inline-tr">kopi</span> (coffee).',tr:'cai'},
        {t:'words',items:[{tr:'cai',pr:'CHAI',en:'water'},{tr:'sangu',pr:'SANG-goo',en:'cooked rice'},{tr:'entéh',pr:'un-TEH',en:'tea',link:'≈ English tea'},{tr:'kopi',pr:'KOH-pee',en:'coffee',link:'≈ English coffee'},{tr:'roti',pr:'ROH-tee',en:'bread'}]},
        {t:'chal',en:'Water, please',tr:'Cai, punten',pr:'CHAI, POON-ten',morph:['cai = water','punten = please']},
        {t:'say',text:'<span class="inline-tr">sareng</span> = and. So <i>cai sareng kopi</i> = water and coffee.',tr:'sareng'},
        {t:'chal',en:'I want rice and coffee',tr:'Abdi hoyong sangu sareng kopi',pr:'ahb-dee HOY-yong SANG-goo SAH-rehng KOH-pee',morph:['abdi = I','hoyong = want','sangu = rice','sareng = and','kopi = coffee']},
        {t:'chal',en:'It\'s delicious!',tr:'Ngeunah pisan!',pr:'nguh-NAH PEE-sahn',morph:['ngeunah = delicious','pisan = very']}
      ],
      blocks:['<code>cai</code>, <code>sangu</code>, <code>entéh</code>, <code>kopi</code> = water, rice, tea, coffee','<code>sareng</code> = and','<code>ngeunah</code> = delicious'] },
    { id:6, title:'Getting around', focus:'di mana · katuhu · kénca · lempeng',
      steps:[
        {t:'say',text:'The most useful question in any town: <span class="inline-tr">Di mana…?</span> — where is…?',tr:'Di mana?'},
        {t:'words',items:[{tr:'di mana...?',pr:'dee MAH-nah',en:'Where is...?'},{tr:'katuhu',pr:'kah-TOO-hoo',en:'to the right'},{tr:'kénca',pr:'KEN-chah',en:'to the left'},{tr:'lempeng',pr:'luhm-PUHNG',en:'straight ahead'},{tr:'stasion',pr:'stah-SYON',en:'the station',link:'≈ English station'}]},
        {t:'chal',en:'Where is the station?',tr:'Di mana stasion?',pr:'dee MAH-nah stah-SYON',morph:['di mana = where','stasion = the station']},
        {t:'say',text:'<span class="inline-tr">katuhu</span> and <span class="inline-tr">kénca</span> are right and left. Straight ahead is <span class="inline-tr">lempeng</span>.',tr:'lempeng'},
        {t:'chal',en:'Where is the bathroom?',tr:'Di mana jamban?',pr:'dee MAH-nah JAHM-bahn',morph:['di mana = where','jamban = the bathroom']},
        {t:'chal',en:'Straight ahead, thank you',tr:'Lempeng, hatur nuhun',pr:'luhm-PUHNG, HAH-toor NOO-hoon',morph:['lempeng = straight ahead','hatur nuhun = thank you']}
      ],
      blocks:['<code>di mana…?</code> = where is…?','<code>katuhu</code> / <code>kénca</code> = right / left','<code>lempeng</code> = straight ahead'] },
    { id:7, title:'Questions', focus:'naon · saha · iraha · kumaha',
      steps:[
        {t:'say',text:'Question words let you get information fast. <span class="inline-tr">naon</span> = what, <span class="inline-tr">saha</span> = who.',tr:'naon'},
        {t:'words',items:[{tr:'naon',pr:'NAH-on',en:'what'},{tr:'saha',pr:'SAH-hah',en:'who'},{tr:'iraha',pr:'ee-RAH-hah',en:'when'},{tr:'kumaha',pr:'koo-MAH-hah',en:'how'},{tr:'di mana',pr:'dee MAH-nah',en:'where'},{tr:'sabaraha',pr:'sah-bah-RAH-hah',en:'how much'}]},
        {t:'chal',en:'What is this?',tr:'Naon ieu?',pr:'NAH-on ee-UH',morph:['naon = what','ieu = this']},
        {t:'say',text:'Point things out with <span class="inline-tr">ieu</span> (this) and <span class="inline-tr">éta</span> (that).',tr:'ieu'},
        {t:'chal',en:'Who is that?',tr:'Saha éta?',pr:'SAH-hah EH-tah',morph:['saha = who','éta = that']},
        {t:'chal',en:'How much is it?',tr:'Sabaraha ieu?',pr:'sah-bah-RAH-hah ee-UH',morph:['sabaraha = how much','ieu = this']}
      ],
      blocks:['<code>naon</code> = what · <code>saha</code> = who','<code>iraha</code> = when · <code>kumaha</code> = how','<code>di mana</code> = where · <code>sabaraha</code> = how much'] },
    { id:8, title:'Family & people', focus:'kulawarga · ibu · bapa · anak',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">kulawarga</span> (family), <span class="inline-tr">ibu</span> (mother), <span class="inline-tr">bapa</span> (father).',tr:'kulawarga'},
        {t:'words',items:[{tr:'kulawarga',pr:'koo-lah-WAR-gah',en:'family'},{tr:'ibu',pr:'EE-boo',en:'mother'},{tr:'bapa',pr:'BAH-pah',en:'father'},{tr:'anak',pr:'AH-nahk',en:'child'},{tr:'lanceuk',pr:'LAHN-cheuh-k',en:'older sibling'},{tr:'adi',pr:'AH-dee',en:'younger sibling'}]},
        {t:'chal',en:'I have a family',tr:'Abdi gaduh kulawarga',pr:'ahb-dee GAH-doo koo-lah-WAR-gah',morph:['abdi = I','gaduh = have','kulawarga = family']},
        {t:'say',text:'<span class="inline-tr">gaduh</span> = to have. <span class="inline-tr">Abdi gaduh…</span> = I have…',tr:'gaduh'},
        {t:'chal',en:'This is my child',tr:'Ieu anak abdi',pr:'ee-UH AH-nahk ahb-dee',morph:['ieu = this','anak = child','abdi = my']}
      ],
      blocks:['<code>kulawarga</code> = family','<code>ibu</code> / <code>bapa</code> = mother / father','<code>gaduh</code> = to have'] },
    { id:9, title:'Time, days & weather', focus:'ayeuna · isuk-isuk · dinten · hujan',
      steps:[
        {t:'say',text:'Time words first: <span class="inline-tr">ayeuna</span> = now, <span class="inline-tr">kamari</span> = yesterday, <span class="inline-tr">isuk-isuk</span> = tomorrow.',tr:'ayeuna'},
        {t:'chal',en:'See you tomorrow',tr:'Wilujeng, isuk-isuk',pr:'wee-LOO-juhng, EE-sook EE-sook',morph:['wilujeng = goodbye / safe','isuk-isuk = tomorrow']},
        {t:'say',text:'Weather is an easy icebreaker: <span class="inline-tr">hujan</span> = rain, <span class="inline-tr">panas</span> = hot, <span class="inline-tr">tiis</span> = cold. Ask <span class="inline-tr">Kumaha cuaca?</span> — how\'s the weather?',tr:'hujan'},
        {t:'words',items:[{tr:'ayeuna',pr:'ah-YUH-nah',en:'now / today'},{tr:'kamari',pr:'kah-MAH-ree',en:'yesterday'},{tr:'isuk-isuk',pr:'EE-sook EE-sook',en:'tomorrow'},{tr:'dinten',pr:'DEEN-ten',en:'day'},{tr:'hujan',pr:'HOO-jahn',en:'rain'},{tr:'panas',pr:'PAH-nahs',en:'hot'},{tr:'tiis',pr:'TEE-ees',en:'cold'},{tr:'kumaha cuaca?',pr:'koo-MAH-hah choo-AH-chah',en:'how\'s the weather?'}]},
        {t:'chal',en:'It\'s raining',tr:'Hujan',pr:'HOO-jahn',morph:['hujan = rain']}
      ],
      blocks:['<code>ayeuna</code> / <code>kamari</code> / <code>isuk-isuk</code> = now / yesterday / tomorrow','<code>hujan</code> / <code>panas</code> / <code>tiis</code> = rain / hot / cold','<code>kumaha cuaca?</code> = how\'s the weather?'] },
    { id:10, title:'Your name', focus:'nami · abdi · anjeun',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">Nami abdi…</span> = my name is…. <span class="inline-tr">nami</span> = name, <span class="inline-tr">abdi</span> = I.',tr:'nami'},
        {t:'chal',en:'My name is __NAME__',tr:'Nami abdi __NAME__',pr:'NAH-mee ahb-dee __NAME__',morph:['nami = name','abdi = my','__NAME__ = your name']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">Saha nami anjeun?</span> <span class="inline-tr">anjeun</span> = you (polite).',tr:'Saha nami anjeun?'},
        {t:'chal',en:'What\'s your name?',tr:'Saha nami anjeun?',pr:'SAH-hah NAH-mee ahn-JUHN',morph:['saha = who','nami = name','anjeun = you']},
        {t:'chal',en:'My name is Adam, nice to meet you',tr:'Nami abdi Adam, wilujeng tepang',pr:'NAH-mee ahb-dee AH-dahm, wee-LOO-juhng tuh-PAHNG',morph:['nami abdi = my name is','wilujeng tepang = nice to meet you']}
      ],
      blocks:['<code>nami</code> = name','<code>Nami abdi __NAME__</code> = my name is __NAME__','<code>Saha nami anjeun?</code> = what\'s your name?','<code>anjeun</code> = you (polite)'] },
    { id:11, title:'Emergency', focus:'tulung · pitulung · teu ngarti',
      steps:[
        {t:'say',text:'The most important word if you need help: <span class="inline-tr">tulung!</span> — help!',tr:'tulung'},
        {t:'words',items:[{tr:'tulung!',pr:'TOO-loong',en:'help!'},{tr:'pitulung',pr:'pee-TOO-loong',en:'help / assistance'},{tr:'abdi teu ngarti',pr:'ahb-dee tuh NGAR-tee',en:'I don\'t understand'},{tr:'dukter',pr:'DOOK-tur',en:'doctor'},{tr:'jamban',pr:'JAHM-bahn',en:'toilet / bathroom'}]},
        {t:'chal',en:'Help!',tr:'Tulung!',pr:'TOO-loong',morph:['tulung = help']},
        {t:'say',text:'<span class="inline-tr">Abdi peryogi pitulung</span> = I need help. <span class="inline-tr">teu</span> = not, <span class="inline-tr">ngarti</span> = understand.',tr:'pitulung'},
        {t:'chal',en:'I need help',tr:'Abdi peryogi pitulung',pr:'ahb-dee puh-RYOH-gee pee-TOO-loong',morph:['abdi = I','peryogi = need','pitulung = help']},
        {t:'chal',en:'I don\'t understand',tr:'Abdi teu ngarti',pr:'ahb-dee tuh NGAR-tee',morph:['abdi = I','teu = not','ngarti = understand']}
      ],
      blocks:['<code>tulung!</code> = help!','<code>abdi teu ngarti</code> = I don\'t understand','<code>abdi peryogi pitulung</code> = I need help'] },
    { id:12, title:'Tying it together', focus:'a capstone in Sundanese',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolkit. This finale uses only words you\'ve met. Build each line before revealing it.'},
        {t:'chal',en:'Good morning!',tr:'Wilujeng énjing!',pr:'wee-LOO-juhng EN-jeeng',morph:['wilujeng = well / safe','énjing = morning']},
        {t:'chal',en:'I want coffee, please',tr:'Abdi hoyong kopi, punten',pr:'ahb-dee HOY-yong KOH-pee, POON-ten',morph:['abdi = I','hoyong = want','kopi = coffee','punten = please']},
        {t:'chal',en:'Where is the station?',tr:'Di mana stasion?',pr:'dee MAH-nah stah-SYON',morph:['di mana = where','stasion = the station']},
        {t:'chal',en:'How much is it?',tr:'Sabaraha ieu?',pr:'sah-bah-RAH-hah ee-UH',morph:['sabaraha = how much','ieu = this']},
        {t:'chal',en:'My name is __NAME__, thank you',tr:'Nami abdi __NAME__, hatur nuhun',pr:'NAH-mee ahb-dee __NAME__, HAH-toor NOO-hoon',morph:['nami abdi = my name is','__NAME__ = your name','hatur nuhun = thank you']}
      ],
      blocks:['You built: greetings, politeness, numbers, ordering, directions, prices, names — a full day out in Sundanese.'] },
    { id:13, title:'Airport & tickets', focus:'bandara · paspor · tikét · penerbangan',
      steps:[
        {t:'say',text:'You have landed. The building is the <span class="inline-tr">bandara</span>. Your document is a <span class="inline-tr">paspor</span>.',tr:'bandara'},
        {t:'words',items:[{tr:'bandara',pr:'bahn-DAH-rah',en:'the airport'},{tr:'paspor',pr:'PAS-por',en:'the passport'},{tr:'tikét',pr:'tee-KET',en:'the ticket'},{tr:'penerbangan',pr:'puh-nuhr-BAHNG-ahn',en:'the flight'},{tr:'gerbang',pr:'guhr-BAHNG',en:'the gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'Di mana bandara?',pr:'dee MAH-nah bahn-DAH-rah',morph:['di mana = where','bandara = the airport']},
        {t:'chal',en:'Here is my passport',tr:'Ieu paspor abdi',pr:'ee-UH PAS-por ahb-dee',morph:['ieu = here is','paspor abdi = my passport']},
        {t:'chal',en:'A ticket, please',tr:'Tikét, punten',pr:'tee-KET, POON-ten',morph:['tikét = ticket','punten = please']},
        {t:'chal',en:'Where is the gate?',tr:'Di mana gerbang?',pr:'dee MAH-nah guhr-BAHNG',morph:['di mana = where','gerbang = the gate']}
      ],
      blocks:['<code>bandara</code> = airport','<code>paspor</code> = passport','<code>tikét</code> = ticket','<code>gerbang</code> = gate'] },
    { id:14, title:'The taxi', focus:'taksi · angkat · hotél · eureun',
      steps:[
        {t:'say',text:'The driver is waiting. <span class="inline-tr">taksi</span> is the word you need. Tell them where to go with <span class="inline-tr">abdi hoyong angkat</span>.',tr:'taksi'},
        {t:'words',items:[{tr:'taksi',pr:'TAHK-see',en:'the taxi'},{tr:'supir',pr:'SOO-peer',en:'the driver'},{tr:'abdi hoyong angkat',pr:'ahb-dee HOY-yong AHNG-kat',en:'I want to go'},{tr:'eureun di dieu',pr:'uh-RUHN dee dee-UH',en:'stop here'}]},
        {t:'chal',en:'Taxi, please',tr:'Taksi, punten',pr:'TAHK-see, POON-ten',morph:['taksi = taxi','punten = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'Abdi hoyong angkat ka hotél',pr:'ahb-dee HOY-yong AHNG-kat kah ho-TEL',morph:['abdi hoyong = I want','angkat ka hotél = to go to the hotel']},
        {t:'chal',en:'Stop here, please',tr:'Eureun di dieu, punten',pr:'uh-RUHN dee dee-UH, POON-ten',morph:['eureun di dieu = stop here','punten = please']},
        {t:'chal',en:'How much is it?',tr:'Sabaraha?',pr:'sah-bah-RAH-hah',morph:['sabaraha = how much']}
      ],
      blocks:['<code>abdi hoyong angkat ka …</code> = I want to go to …','<code>eureun di dieu</code> = stop here'] },
    { id:15, title:'The hotel', focus:'reservasi · kamar · konci · peuting',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">Abdi gaduh reservasi</span> — I have a reservation.',tr:'reservasi'},
        {t:'words',items:[{tr:'hotél',pr:'ho-TEL',en:'the hotel'},{tr:'reservasi',pr:'reh-sehr-VAH-see',en:'the reservation'},{tr:'kamar',pr:'KAH-mar',en:'the room'},{tr:'konci',pr:'KOHN-chee',en:'the key'},{tr:'sapeuting',pr:'sah-puh-TEENG',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'Abdi gaduh reservasi',pr:'ahb-dee GAH-doo reh-sehr-VAH-see',morph:['abdi gaduh = I have','reservasi = a reservation']},
        {t:'chal',en:'A room for one night, please',tr:'Kamar sapeuting, punten',pr:'KAH-mar sah-puh-TEENG, POON-ten',morph:['kamar = a room','sapeuting = one night','punten = please']},
        {t:'chal',en:'The key, please',tr:'Konci, punten',pr:'KOHN-chee, POON-ten',morph:['konci = the key','punten = please']},
        {t:'chal',en:'Where is my room?',tr:'Di mana kamar abdi?',pr:'dee MAH-nah KAH-mar ahb-dee',morph:['di mana = where','kamar abdi = my room']}
      ],
      blocks:['<code>reservasi</code> = reservation','<code>kamar</code> = room','<code>konci</code> = key'] },
    { id:16, title:'Ask for help', focus:'teu ngarti · laun · Inggris',
      steps:[
        {t:'say',text:'When the language is too fast: <span class="inline-tr">Langkung laun, punten</span> — slower, please.',tr:'Langkung laun, punten'},
        {t:'words',items:[{tr:'langkung laun',pr:'LAHNG-koong LAH-oon',en:'slower'},{tr:'deui',pr:'DUH-ee',en:'again'},{tr:'Inggris',pr:'ING-grees',en:'English'},{tr:'iasa ngabantos?',pr:'ee-AH-sah ngah-BAHN-tos',en:'can you help?'}]},
        {t:'chal',en:'I don\'t understand',tr:'Abdi teu ngarti',pr:'ahb-dee tuh NGAR-tee',morph:['abdi = I','teu = not','ngarti = understand']},
        {t:'chal',en:'Slower, please',tr:'Langkung laun, punten',pr:'LAHNG-koong LAH-oon, POON-ten',morph:['langkung laun = slower','punten = please']},
        {t:'chal',en:'Can you help me?',tr:'Tiasa ngabantos abdi?',pr:'tee-AH-sah ngah-BAHN-tos ahb-dee',morph:['tiasa = can you','ngabantos = help','abdi = me']},
        {t:'chal',en:'Do you speak English?',tr:'Anjeun tiasa nyarios Inggris?',pr:'ahn-JUHN tee-AH-sah nyah-REE-os ING-grees',morph:['anjeun tiasa nyarios = do you speak','Inggris = English']}
      ],
      blocks:['<code>langkung laun</code> = slower','<code>Anjeun tiasa nyarios Inggris?</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'warung', title:'🍵 At a warung', emoji:'🍵', turns:[
      {who:'You',tr:'Wilujeng énjing! Abdi hoyong entéh, punten.',pr:'wee-LOO-juhng EN-jeeng, ahb-dee HOY-yong un-TEH, POON-ten',en:'Good morning! I want tea, please.'},
      {who:'Seller',tr:'Mangga. Panas atawa tiis?',pr:'MAHNG-gah, PAH-nahs ah-TAH-wah TEE-ees',en:'Sure. Hot or cold?'},
      {who:'You',tr:'Tiis, hatur nuhun.',pr:'TEE-ees, HAH-toor NOO-hoon',en:'Cold, thank you.'},
      {who:'Seller',tr:'Ieu. Tiga rébu.',pr:'ee-UH, TEE-gah RAY-boo',en:'Here. Three thousand.'},
      {who:'You',tr:'Hatur nuhun! Wilujeng.',pr:'HAH-toor NOO-hoon, wee-LOO-juhng',en:'Thanks! Bye.'}
    ]},
    { id:'angkot', title:'🚐 On the angkot', emoji:'🚐', turns:[
      {who:'You',tr:'Punten, ieu angkat ka stasion?',pr:'POON-ten, ee-UH AHNG-kat kah stah-SYON',en:'Excuse me, does this go to the station?'},
      {who:'Driver',tr:'Leres. Naék.',pr:'luh-REHS, nah-EHK',en:'Yes. Hop in.'},
      {who:'You',tr:'Sabaraha?',pr:'sah-bah-RAH-hah',en:'How much?'},
      {who:'Driver',tr:'Lima rébu.',pr:'LEE-mah RAY-boo',en:'Five thousand.'},
      {who:'You',tr:'Mangga, hatur nuhun.',pr:'MAHNG-gah, HAH-toor NOO-hoon',en:'Okay, thank you.'}
    ]},
    { id:'restaurant', title:'🍽️ At an eatery', emoji:'🍽️', turns:[
      {who:'Waiter',tr:'Wilujeng sumping! Bade pesen naon?',pr:'wee-LOO-juhng SOOM-peeng, bah-DEH puh-SEN NAH-on',en:'Welcome! What would you like to order?'},
      {who:'You',tr:'Abdi hoyong sangu sareng lauk.',pr:'ahb-dee HOY-yong SANG-goo SAH-rehng LAH-ook',en:'I want rice and fish.'},
      {who:'You',tr:'Sareng cai, punten.',pr:'SAH-rehng CHAI, POON-ten',en:'And water, please.'},
      {who:'Waiter',tr:'Mangga. Sakedap.',pr:'MAHNG-gah, sah-kuh-DAHP',en:'Sure. A moment.'},
      {who:'You',tr:'Ngeunah pisan! Hatur nuhun.',pr:'nguh-NAH PEE-sahn, HAH-toor NOO-hoon',en:'Very delicious! Thank you.'}
    ]},
    { id:'market', title:'🛍️ At the market', emoji:'🛍️', turns:[
      {who:'You',tr:'Punten, ieu hargana sabaraha?',pr:'POON-ten, ee-UH har-GAH-nah sah-bah-RAH-hah',en:'Excuse me, how much is this?'},
      {who:'Seller',tr:'Lima rébu.',pr:'LEE-mah RAY-boo',en:'Five thousand.'},
      {who:'You',tr:'Bisa kurang?',pr:'BEE-sah KOO-rahng',en:'Can you go lower?'},
      {who:'Seller',tr:'Wah, geus murah!',pr:'wah, guh-us MOO-rah',en:'Oh, it\'s already cheap!'},
      {who:'You',tr:'Oke, abdi mésér. Hatur nuhun.',pr:'OH-keh, ahb-dee MEH-sehr, HAH-toor NOO-hoon',en:'Okay, I\'ll take it. Thank you.'}
    ]}
  ],
  pocket: [
    {tr:'Halo',pr:'HAH-loh',en:'Hello',c:'Greetings'},
    {tr:'Wilujeng énjing',pr:'wee-LOO-juhng EN-jeeng',en:'Good morning',c:'Greetings'},
    {tr:'Wilujeng wengi',pr:'wee-LOO-juhng WENG-ee',en:'Good evening / night',c:'Greetings'},
    {tr:'Sampurasun',pr:'sam-poo-RAH-soon',en:'Greetings (respectful)',c:'Greetings'},
    {tr:'Kumaha damang?',pr:'koo-MAH-hah DAH-mahng',en:'How are you?',c:'Greetings'},
    {tr:'Abdi damang',pr:'ahb-dee DAH-mahng',en:'I\'m well',c:'Greetings'},
    {tr:'Wilujeng tepang',pr:'wee-LOO-juhng tuh-PAHNG',en:'Nice to meet you',c:'Greetings'},
    {tr:'Nami abdi __NAME__',pr:'NAH-mee ahb-dee',en:'My name is...',c:'Greetings'},
    {tr:'Hatur nuhun',pr:'HAH-toor NOO-hoon',en:'Thank you',c:'Courtesy'},
    {tr:'Punten',pr:'POON-ten',en:'Excuse me / please',c:'Courtesy'},
    {tr:'Sami-sami',pr:'SAH-mee SAH-mee',en:'You\'re welcome',c:'Courtesy'},
    {tr:'Mangga',pr:'MAHNG-gah',en:'Please / here you go',c:'Courtesy'},
    {tr:'Leres',pr:'luh-REHS',en:'Yes / correct',c:'Courtesy'},
    {tr:'Henteu',pr:'huhn-TUH',en:'No / not',c:'Courtesy'},
    {tr:'Hiji',pr:'HEE-jee',en:'1',c:'Numbers'},
    {tr:'Dua',pr:'DOO-ah',en:'2',c:'Numbers'},
    {tr:'Tilu',pr:'TEE-loo',en:'3',c:'Numbers'},
    {tr:'Opat',pr:'OH-pat',en:'4',c:'Numbers'},
    {tr:'Lima',pr:'LEE-mah',en:'5',c:'Numbers'},
    {tr:'Sapuluh',pr:'sah-POO-looh',en:'10',c:'Numbers'},
    {tr:'Cai',pr:'CHAI',en:'Water',c:'Food'},
    {tr:'Sangu',pr:'SANG-goo',en:'Rice',c:'Food'},
    {tr:'Entéh',pr:'un-TEH',en:'Tea',c:'Food'},
    {tr:'Kopi',pr:'KOH-pee',en:'Coffee',c:'Food'},
    {tr:'Ngeunah',pr:'nguh-NAH',en:'Delicious',c:'Food'},
    {tr:'Abdi hoyong...',pr:'ahb-dee HOY-yong',en:'I want...',c:'Food'},
    {tr:'Di mana...?',pr:'dee MAH-nah',en:'Where is...?',c:'Directions'},
    {tr:'Katuhu',pr:'kah-TOO-hoo',en:'To the right',c:'Directions'},
    {tr:'Kénca',pr:'KEN-chah',en:'To the left',c:'Directions'},
    {tr:'Lempeng',pr:'luhm-PUHNG',en:'Straight ahead',c:'Directions'},
    {tr:'Naon?',pr:'NAH-on',en:'What?',c:'Questions'},
    {tr:'Saha?',pr:'SAH-hah',en:'Who?',c:'Questions'},
    {tr:'Iraha?',pr:'ee-RAH-hah',en:'When?',c:'Questions'},
    {tr:'Kumaha?',pr:'koo-MAH-hah',en:'How?',c:'Questions'},
    {tr:'Saha nami anjeun?',pr:'SAH-hah NAH-mee ahn-JUHN',en:'What\'s your name?',c:'Questions'},
    {tr:'Ayeuna',pr:'ah-YUH-nah',en:'Now / today',c:'Time'},
    {tr:'Kamari',pr:'kah-MAH-ree',en:'Yesterday',c:'Time'},
    {tr:'Isuk-isuk',pr:'EE-sook EE-sook',en:'Tomorrow',c:'Time'},
    {tr:'Hujan',pr:'HOO-jahn',en:'Rain',c:'Time'},
    {tr:'Panas',pr:'PAH-nahs',en:'Hot',c:'Time'},
    {tr:'Tulung!',pr:'TOO-loong',en:'Help!',c:'Emergency'},
    {tr:'Abdi teu ngarti',pr:'ahb-dee tuh NGAR-tee',en:'I don\'t understand',c:'Emergency'},
    {tr:'Abdi peryogi pitulung',pr:'ahb-dee puh-RYOH-gee pee-TOO-loong',en:'I need help',c:'Emergency'},
    {tr:'Dukter',pr:'DOOK-tur',en:'Doctor',c:'Emergency'},
    {tr:'Jamban',pr:'JAHM-bahn',en:'Toilet',c:'Emergency'},
    {tr:'Bandara',pr:'bahn-DAH-rah',en:'the airport',c:'Travel'},
    {tr:'Paspor',pr:'PAS-por',en:'the passport',c:'Travel'},
    {tr:'Tikét',pr:'tee-KET',en:'the ticket',c:'Travel'},
    {tr:'Taksi',pr:'TAHK-see',en:'the taxi',c:'Travel'},
    {tr:'Hotél',pr:'ho-TEL',en:'the hotel',c:'Travel'},
    {tr:'Abdi gaduh reservasi',pr:'ahb-dee GAH-doo reh-sehr-VAH-see',en:'I have a reservation',c:'Travel'},
    {tr:'Langkung laun, punten',pr:'LAHNG-koong LAH-oon, POON-ten',en:'Slower, please',c:'Travel'},
    {tr:'Anjeun tiasa nyarios Inggris?',pr:'ahn-JUHN tee-AH-sah nyah-REE-os ING-grees',en:'Do you speak English?',c:'Travel'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Questions','Time','Emergency','Travel'],
  culture: [
    {icon:'🗺️',title:'West Java\'s own language',body:'Sundanese (Basa Sunda) is the language of West Java, spoken by tens of millions. It is the second-largest language in Indonesia — but it is its own language, not a dialect of Indonesian.'},
    {icon:'🎭',title:'A cultural heart',body:'Sundanese culture centres on the Sunda region: wayang golek puppets, the angklung and the kacapi zither, and the jaipong dance. The Sundanese are known for being warm and courteous (santun).'},
    {icon:'🗣️',title:'Politeness levels',body:'Sundanese has speech registers (undak-usuk basa): a humble form, a middle form, and a polite form for elders and strangers. Using \'abdi\' (I) and \'anjeun\' (you) is polite and safe.'},
    {icon:'🍵',title:'Warung culture',body:'A warung is a small family-run shop or café — the heart of daily life. Order tea, coffee and snacks while sitting on a bench. A friendly \'halo\' and a smile go a long way.'},
    {icon:'🏔️',title:'Volcanoes & rice terraces',body:'West Java is volcanic and fertile, with hot springs, tea plantations and terraced rice fields. Mount Tangkuban Parahu, near Bandung, is a famous volcano — and Bandung is the cultural heart of the Sundanese.'},
    {icon:'🇮🇩',title:'Sundanese and Indonesian',body:'Most Sundanese people also speak Indonesian. If you know Indonesian you\'ll recognize a lot of words, but Sundanese is a separate language with its own sounds (the \'eu\' vowel) and its own politeness system.'}
  ],
  sounds: [
    {l:'c',say:'always "ch" as in church',ex:'cai = CHAI · roti = ROH-tee',voice:'cai'},
    {l:'j',say:'always "j" as in jam',ex:'jamban = JAHM-bahn',voice:'jamban'},
    {l:'ng',say:'one sound, as in "sing"',ex:'sangu = SANG-goo',voice:'sangu'},
    {l:'ny',say:'as in "canyon"',ex:'anyar = AHN-yar',voice:'anyar'},
    {l:'eu',say:'a one-of-a-kind vowel, between "e" and "u" — no English match',ex:'beurang = BUH-rahng · eusi = UH-see',voice:'beurang'},
    {l:'é',say:'closed "é" as in café',ex:'énjing = EN-jeeng',voice:'énjing'},
    {l:'e',say:'open, neutral "e" (a soft "uh") — not the same as é',ex:'téh = teh (a particle)',voice:'teh'},
    {l:'k',say:'a final -k is a glottal stop — a quick catch in the throat, not a hard "k"',ex:'budak = BOO-dah\' (kid)',voice:'budak'}
  ],
  resources: [
    {icon:'🗣️',t:'Slow Sundanese for beginners',d:'Slow, clear everyday Sundanese phrases with pronunciation — easy to copy aloud.',q:'Sundanese basic phrases slow'},
    {icon:'🐢',t:'Sundanese basics',d:'Beginner Sundanese covering greetings, numbers and day-to-day conversation.',q:'learn Sundanese for beginners'},
    {icon:'📚',t:'Tatakrama Sunda',d:'Short lessons on Sundanese politeness levels (undak-usuk basa) and everyday talk.',q:'tatakrama basa Sunda'},
    {icon:'🏪',t:'Warung and market talk',d:'Warung and market conversations set in West Java, with practical buying phrases.',q:'warung Sunda conversation'},
    {icon:'🎶',t:'Sundanese songs & angklung',d:'Music and angklung videos — a fun way to hear the language in context.',q:'angklung Sundanese music'}
  ]
};
