/* ---- afrikaans ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["afrikaans"] = {
  name: 'Afrikaans',
  flag: '🇿🇦',
  tts: 'af-ZA',
  dir: 'ltr',
  native: 'Afrikaans',
  soundTitle: 'Afrikaans sounds & spelling',
  soundIntro: 'Afrikaans is almost phonetic — once you know a few letter rules you can read any word aloud. The trickiest sounds are the throaty g and the v-sounding w.',
  grammar: '<p>Afrikaans is the easiest of the Germanic languages to start: <b>no noun genders</b>, <b>no verb endings for person</b> (ek is, jy is, hy is — <i>is</i> for everyone), and a simple past built with <i>het + ge-</i>. Spelliest is near-phonetic: <b>g</b> is a throaty "kh", <b>j</b> is "y", and <b>w</b> sounds like English "v". Watch the signature double negative — <i>ek verstaan <b>nie</b></i>.</p>',
  bridges: '<div class="note">🇳🇱 <b>Dutch.</b> Afrikaans is a daughter of Dutch — you already know a huge amount: water, brood, koffie, huis. A Dutch speaker will understand most of it.</div><div class="note">🇬🇧 <b>English.</b> They\'re close cousins: brood (bread), water, koffie, melk, naam, weer. Even the word order feels familiar.</div><div class="note">🇩🇪 <b>German.</b> Great starting point — water/Wasser, brood/Brot, koffie/Kaffee, huis/Haus: the same Germanic roots.</div>',
  lessons: [
    { id:1, title:'Greetings', focus:'hallo · goeie môre · goeie aand · totsiens',
      steps:[
        {t:'say',text:'Let\'s start with the word you\'ll use all day: <span class="inline-tr">hallo</span> — hello. Say it out loud.',tr:'hallo'},
        {t:'words',items:[{tr:'hallo',pr:'HAH-loh',en:'hello'},{tr:'goeie môre',pr:'KOO-yuh MAW-ruh',en:'good morning'},{tr:'goeie dag',pr:'KOO-yuh dahkh',en:'good day'},{tr:'goeie aand',pr:'KOO-yuh ahnt',en:'good evening'},{tr:'totsiens',pr:'tot-SEENS',en:'goodbye'}]},
        {t:'chal',en:'Hello, thank you',tr:'Hallo, dankie',pr:'HAH-loh, DAHN-kee',morph:['hallo = hello','dankie = thank you']},
        {t:'say',text:'The time of day matters: <span class="inline-tr">goeie môre</span> in the morning and <span class="inline-tr">goeie aand</span> in the evening.',tr:'goeie môre'},
        {t:'chal',en:'Good morning, how are you?',tr:'Goeie môre, hoe gaan dit?',pr:'KOO-yuh MAW-ruh, KHOOH khahn dit',morph:['goeie môre = good morning','hoe gaan dit? = how are you?']},
        {t:'say',text:'To ask how someone is: <span class="inline-tr">Hoe gaan dit?</span> The classic reply is <span class="inline-tr">goed, dankie</span> — well, thanks.',tr:'Hoe gaan dit?'},
        {t:'words',items:[{tr:'Hoe gaan dit?',pr:'KHOOH khahn dit',en:'How are you?'},{tr:'Goed, dankie',pr:'KHOOD, DAHN-kee',en:'Well, thanks'},{tr:'Ja',pr:'yah',en:'yes'},{tr:'Nee',pr:'nay',en:'no'}]},
        {t:'chal',en:'Hi, how are you?',tr:'Hallo, hoe gaan dit?',pr:'HAH-loh, KHOOH khahn dit',morph:['hallo = hi','hoe gaan dit? = how are you?']}
      ],
      blocks:['<code>hallo</code> = hello','<code>goeie môre</code> = good morning','<code>goeie aand</code> = good evening','<code>totsiens</code> = goodbye'] },
    { id:2, title:'Being polite', focus:'dankie · baie dankie · asseblief · jammer',
      steps:[
        {t:'say',text:'The two most important courtesy words: <span class="inline-tr">dankie</span> (thank you) and <span class="inline-tr">asseblief</span> (please).',tr:'dankie'},
        {t:'words',items:[{tr:'dankie',pr:'DAHN-kee',en:'thank you'},{tr:'baie dankie',pr:'BAY-uh DAHN-kee',en:'thank you very much'},{tr:'asseblief',pr:'uh-SUH-bleef',en:'please'},{tr:'jammer',pr:'YAHM-muhr',en:'sorry'},{tr:'ekskuus',pr:'eks-KOOYS',en:'excuse me'}]},
        {t:'chal',en:'Thank you very much',tr:'Baie dankie',pr:'BAY-uh DAHN-kee',morph:['baie = very','dankie = thank you']},
        {t:'say',text:'<span class="inline-tr">Ekskuus</span> and <span class="inline-tr">jammer</span> cover \'excuse me\' and \'sorry\'.',tr:'ekskuus'},
        {t:'chal',en:'Yes, please',tr:'Ja, asseblief',pr:'yah, uh-SUH-bleef',morph:['ja = yes','asseblief = please']},
        {t:'say',text:'<span class="inline-tr">Ja</span> is yes and <span class="inline-tr">nee</span> is no — the core of any answer.',tr:'nee'},
        {t:'chal',en:'Please, thank you',tr:'Asseblief, dankie',pr:'uh-SUH-bleef, DAHN-kee',morph:['asseblief = please','dankie = thank you']}
      ],
      blocks:['<code>dankie</code> = thank you','<code>baie dankie</code> = thank you very much','<code>asseblief</code> = please','<code>jammer</code> / <code>ekskuus</code> = sorry / excuse me'] },
    { id:3, title:'Numbers 1–10', focus:'een · twee · drie · tien',
      steps:[
        {t:'say',text:'Numbers are the fastest win. Listen and repeat: <span class="inline-tr">een, twee, drie</span>.',tr:'een'},
        {t:'words',items:[{tr:'een',pr:'ayn',en:'1'},{tr:'twee',pr:'tway',en:'2'},{tr:'drie',pr:'dree',en:'3'},{tr:'vier',pr:'veer',en:'4'},{tr:'vyf',pr:'fayf',en:'5'},{tr:'ses',pr:'ses',en:'6'},{tr:'sewe',pr:'SAY-vuh',en:'7'},{tr:'agt',pr:'ahkht',en:'8'},{tr:'nege',pr:'NAY-khuh',en:'9'},{tr:'tien',pr:'teen',en:'10'}]},
        {t:'chal',en:'Two coffees, please',tr:'Twee koffie, asseblief',pr:'tway KOF-ee, uh-SUH-bleef',morph:['twee = two','koffie = coffee','asseblief = please']},
        {t:'say',text:'<span class="inline-tr">Hoeveel kos dit?</span> = how much does it cost? Your key phrase for the market.',tr:'Hoeveel kos dit?'},
        {t:'chal',en:'How much is this?',tr:'Hoeveel kos dit?',pr:'KHOOH-vayl kos dit',morph:['hoeveel = how much','kos = costs','dit = this']},
        {t:'chal',en:'It\'s five rand',tr:'Dit is vyf rand',pr:'dit is fayf rahnt',morph:['dit = this','is = is','vyf = five','rand = rand (South African money)']}
      ],
      blocks:['een, twee, drie, vier, vyf = 1–5','ses, sewe, agt, nege, tien = 6–10','<code>hoeveel kos dit?</code> = how much is this?'] },
    { id:4, title:'"I want" — the verb wil', focus:'ek wil · ek sou graag · ek het',
      steps:[
        {t:'say',text:'To say what you want: <span class="inline-tr">ek wil</span> — I want. The polite version is better: <span class="inline-tr">ek sou graag</span> — I would like.',tr:'ek wil'},
        {t:'words',items:[{tr:'ek wil',pr:'ek vil',en:'I want'},{tr:'ek sou graag',pr:'ek soh khraakh',en:'I would like'},{tr:'ek het',pr:'ek het',en:'I have'},{tr:'graag',pr:'khraakh',en:'gladly / please'}]},
        {t:'chal',en:'I would like a coffee',tr:'Ek sou graag \'n koffie hê',pr:'ek soh khraakh uh KOF-ee heh',morph:['ek sou graag = I would like','\'n koffie = a coffee','hê = to have']},
        {t:'chal',en:'I want a water',tr:'Ek wil \'n water hê',pr:'ek vil uh VAH-tuhr heh',morph:['ek wil = I want','\'n water = a water','hê = to have']},
        {t:'say',text:'<span class="inline-tr">\'n</span> (said like "uh") is the indefinite article — a / an. It is a shortened <b>een</b>.',tr:'\'n'},
        {t:'chal',en:'I want a bread',tr:'Ek wil \'n brood hê',pr:'ek vil uh brooht heh',morph:['ek wil = I want','\'n brood = a bread','hê = to have']}
      ],
      blocks:['<code>ek wil</code> = I want','<code>ek sou graag</code> = I would like','<code>ek het</code> = I have','<code>\'n</code> = a / an'] },
    { id:5, title:'Food & drink', focus:'water · brood · koffie · tee',
      steps:[
        {t:'say',text:'Eating out? Key words: <span class="inline-tr">water</span> (water), <span class="inline-tr">brood</span> (bread), <span class="inline-tr">koffie</span> (coffee).',tr:'water'},
        {t:'words',items:[{tr:'water',pr:'VAH-tuhr',en:'water',link:'≈ English water · Dutch water · German Wasser'},{tr:'brood',pr:'brooht',en:'bread',link:'≈ English bread · Dutch brood · German Brot'},{tr:'koffie',pr:'KOF-ee',en:'coffee',link:'≈ Dutch koffie · German Kaffee'},{tr:'tee',pr:'TAY-uh',en:'tea'},{tr:'wyn',pr:'vayn',en:'wine',link:'≈ English wine · Dutch wijn · German Wein'},{tr:'die rekening',pr:'dee RAY-kuh-ning',en:'the bill'}]},
        {t:'chal',en:'Water and bread, please',tr:'Water en brood, asseblief',pr:'VAH-tuhr en brooht, uh-SUH-bleef',morph:['water = water','en = and','brood = bread','asseblief = please']},
        {t:'chal',en:'I would like the bill',tr:'Ek sou graag die rekening hê',pr:'ek soh khraakh dee RAY-kuh-ning heh',morph:['ek sou graag = I would like','die rekening = the bill','hê = to have']},
        {t:'say',text:'<span class="inline-tr">die</span> is simply \'the\' — there is no masculine or feminine, so it is easy. <b>die rekening</b> = the bill.',tr:'die'},
        {t:'chal',en:'A glass of wine, please',tr:'\'n glas wyn, asseblief',pr:'uh khlas vayn, uh-SUH-bleef',morph:['\'n = a','glas = glass','wyn = wine','asseblief = please']},
        {t:'chal',en:'A tea and a coffee, please',tr:'\'n tee en \'n koffie, asseblief',pr:'uh TAY-uh en uh KOF-ee, uh-SUH-bleef',morph:['\'n = a','tee = tea','en = and','koffie = coffee']}
      ],
      blocks:['<code>water</code>, <code>brood</code>, <code>koffie</code> = water, bread, coffee','<code>die rekening</code> = the bill','<code>die</code> = the'] },
    { id:6, title:'Directions', focus:'waar is ...? · regs · links · reguit',
      steps:[
        {t:'say',text:'The most useful question in any town: <span class="inline-tr">Waar is...?</span> — where is...?',tr:'Waar is...?'},
        {t:'words',items:[{tr:'Waar is...?',pr:'vahr is',en:'Where is...?'},{tr:'regs',pr:'rekhs',en:'to the right'},{tr:'links',pr:'links',en:'to the left'},{tr:'reguit',pr:'ruh-KHOYT',en:'straight ahead'},{tr:'die stasie',pr:'dee STAH-see',en:'the station',link:'≈ English station'},{tr:'die toilet',pr:'dee toy-LET',en:'the toilet'}]},
        {t:'chal',en:'Where is the station?',tr:'Waar is die stasie?',pr:'vahr is dee STAH-see',morph:['waar = where','die stasie = the station']},
        {t:'chal',en:'Where is the toilet?',tr:'Waar is die toilet?',pr:'vahr is dee toy-LET',morph:['waar = where','die toilet = the toilet']},
        {t:'say',text:'<span class="inline-tr">Regs</span> and <span class="inline-tr">links</span> tell you which way to turn. \'Straight ahead\' is <span class="inline-tr">reguit</span>.',tr:'reguit'},
        {t:'chal',en:'Straight ahead, then left',tr:'Reguit aan en dan links',pr:'ruh-KHOYT ahn en dahn links',morph:['reguit aan = straight ahead','en dan = and then','links = left']}
      ],
      blocks:['<code>waar is...?</code> = where is...?','<code>regs</code> / <code>links</code> = right / left','<code>reguit</code> = straight ahead'] },
    { id:7, title:'Questions & "do you have…?"', focus:'het jy ...? · is daar ...? · mag ek ...?',
      steps:[
        {t:'say',text:'To ask someone if they have something: <span class="inline-tr">Het jy...?</span> (informal) or <span class="inline-tr">Het u...?</span> (formal).',tr:'Het jy...?'},
        {t:'chal',en:'Do you have a table?',tr:'Het jy \'n tafel?',pr:'het yay uh TAH-fuhl',morph:['het jy = do you have','\'n tafel = a table']},
        {t:'say',text:'<span class="inline-tr">Is daar...?</span> = is there...? Very useful in shops.',tr:'Is daar...?'},
        {t:'chal',en:'Is there wifi?',tr:'Is daar wifi?',pr:'is dahr WEE-fee',morph:['is daar = is there','wifi = wifi']},
        {t:'say',text:'<span class="inline-tr">Mag ek...?</span> = may I...? The polite way to ask for something.',tr:'Mag ek...?'},
        {t:'chal',en:'May I have a glass of water?',tr:'Mag ek \'n glas water hê?',pr:'mahk ek uh khlas VAH-tuhr heh',morph:['mag ek = may I','\'n glas water = a glass of water','hê = to have']},
        {t:'chal',en:'How much is this?',tr:'Hoeveel kos dit?',pr:'KHOOH-vayl kos dit',morph:['hoeveel = how much','kos = costs','dit = this']}
      ],
      blocks:['<code>het jy...?</code> = do you have...? (informal)','<code>is daar...?</code> = is there...?','<code>mag ek...?</code> = may I...?'] },
    { id:8, title:'Family', focus:'familie · ma · pa · broer · suster',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">familie</span> (family), <span class="inline-tr">ma</span> (mother), <span class="inline-tr">pa</span> (father).',tr:'familie'},
        {t:'words',items:[{tr:'familie',pr:'fah-MEE-lee',en:'family',link:'≈ English family · Dutch familie'},{tr:'ma',pr:'mah',en:'mother'},{tr:'pa',pr:'pah',en:'father'},{tr:'broer',pr:'broor',en:'brother',link:'≈ English brother · Dutch broer'},{tr:'suster',pr:'SUHS-tuhr',en:'sister'},{tr:'vriend',pr:'vreent',en:'friend',link:'≈ English friend · Dutch vriend'}]},
        {t:'chal',en:'I have a friend',tr:'Ek het \'n vriend',pr:'ek het uh vreent',morph:['ek het = I have','\'n vriend = a friend']},
        {t:'say',text:'<span class="inline-tr">Ek het</span> = I have. The key verb for saying what you\'ve got.',tr:'Ek het'},
        {t:'chal',en:'I have a brother',tr:'Ek het \'n broer',pr:'ek het uh broor',morph:['ek het = I have','\'n broer = a brother']}
      ],
      blocks:['<code>ma</code> / <code>pa</code> = mother / father','<code>broer</code> / <code>suster</code> = brother / sister','<code>vriend</code> = friend','<code>ek het</code> = I have'] },
    { id:9, title:'Time, days & weather', focus:'vandag · môre · gister · hoe is die weer?',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">vandag</span>, tomorrow is <span class="inline-tr">môre</span>.',tr:'vandag'},
        {t:'words',items:[{tr:'vandag',pr:'fahn-DAHKH',en:'today'},{tr:'môre',pr:'MAW-ruh',en:'tomorrow'},{tr:'gister',pr:'KHIS-tuhr',en:'yesterday'},{tr:'die weer',pr:'dee veer',en:'the weather',link:'≈ English weather · Dutch weer'},{tr:'die dag',pr:'dee dahkh',en:'the day'},{tr:'die week',pr:'dee vayk',en:'the week'}]},
        {t:'chal',en:'See you tomorrow',tr:'Tot môre',pr:'tot MAW-ruh',morph:['tot = until','môre = tomorrow']},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">Hoe is die weer?</span>',tr:'Hoe is die weer?'},
        {t:'chal',en:'It\'s raining',tr:'Dit reën',pr:'dit RAY-uh',morph:['dit = it','reën = rains']},
        {t:'chal',en:'It\'s sunny and warm',tr:'Dit is sonnig en warm',pr:'dit is SON-nikh en varm',morph:['dit = it','is = is','sonnig = sunny','warm = warm']}
      ],
      blocks:['<code>vandag</code> / <code>môre</code> = today / tomorrow','<code>tot môre</code> = see you tomorrow','<code>hoe is die weer?</code> = what\'s the weather?'] },
    { id:10, title:'Your name', focus:'my naam is ... · wat is jou naam? · aangename kennis',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">My naam is…</span> = my name is…, and <span class="inline-tr">Aangename kennis</span> = nice to meet you.',tr:'My naam is'},
        {t:'chal',en:'My name is __NAME__',tr:'My naam is __NAME__',pr:'may nahm is __NAME__',morph:['my naam = my name','is = is','__NAME__ = your name']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">Wat is jou naam?</span>',tr:'Wat is jou naam?'},
        {t:'chal',en:'What\'s your name?',tr:'Wat is jou naam?',pr:'vaht is yow nahm',morph:['wat = what','jou = your','naam = name']},
        {t:'chal',en:'Nice to meet you',tr:'Aangename kennis',pr:'AHN-khuh-nahm-uh KEN-nis',morph:['aangename = pleasant','kennis = acquaintance']},
        {t:'say',text:'Ask where someone is from: <span class="inline-tr">Waarvandaan kom jy?</span>',tr:'Waarvandaan kom jy?'},
        {t:'chal',en:'I come from __COUNTRY__',tr:'Ek kom van __COUNTRY__',pr:'ek kom fahn __COUNTRY__',morph:['ek kom = I come','van = from','__COUNTRY__ = your country']}
      ],
      blocks:['<code>my naam is…</code> = my name is…','<code>wat is jou naam?</code> = what\'s your name?','<code>aangename kennis</code> = nice to meet you'] },
    { id:11, title:'Health & emergency', focus:'help · dokter · apteek · ek verstaan nie',
      steps:[
        {t:'say',text:'The most important words if you need help: <span class="inline-tr">help</span> (help), <span class="inline-tr">dokter</span> (doctor), <span class="inline-tr">apteek</span> (pharmacy).',tr:'help'},
        {t:'words',items:[{tr:'help',pr:'help',en:'help!',link:'≈ English help · German Hilfe'},{tr:'die dokter',pr:'dee DOK-tuhr',en:'the doctor',link:'≈ English doctor · Dutch dokter'},{tr:'die apteek',pr:'dee ahp-TAYK',en:'the pharmacy'},{tr:'Ek verstaan nie',pr:'ek fer-STAHN nee',en:'I don\'t understand'},{tr:'die polisie',pr:'dee po-lee-SEE',en:'the police',link:'≈ English police'}]},
        {t:'chal',en:'Help!',tr:'Help!',pr:'help',morph:['help = help']},
        {t:'chal',en:'I don\'t understand',tr:'Ek verstaan nie',pr:'ek fer-STAHN nee',morph:['ek = I','verstaan = understand','nie = not (at the end)']},
        {t:'say',text:'To say you need help: <span class="inline-tr">Ek het hulp nodig</span>.',tr:'Ek het hulp nodig'},
        {t:'chal',en:'I need help',tr:'Ek het hulp nodig',pr:'ek het hulp NOH-dukh',morph:['ek het = I have','hulp nodig = in need of help']},
        {t:'chal',en:'I am sick',tr:'Ek is siek',pr:'ek is seek',morph:['ek is = I am','siek = sick']}
      ],
      blocks:['<code>help</code> = help','<code>die dokter</code> / <code>die apteek</code> = doctor / pharmacy','<code>ek verstaan nie</code> = I don\'t understand','<code>ek het hulp nodig</code> = I need help'] },
    { id:12, title:'Tying it together', focus:'wil · het · a capstone scene',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolbox. This capstone uses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello, how are you?',tr:'Hallo, hoe gaan dit?',pr:'HAH-loh, KHOOH khahn dit',morph:['hallo = hello','hoe gaan dit? = how are you?']},
        {t:'chal',en:'I would like a water, please',tr:'Ek sou graag \'n water hê, asseblief',pr:'ek soh khraakh uh VAH-tuhr heh, uh-SUH-bleef',morph:['ek sou graag = I would like','\'n water = a water','hê = to have','asseblief = please']},
        {t:'chal',en:'Where is the station?',tr:'Waar is die stasie?',pr:'vahr is dee STAH-see',morph:['waar = where','die stasie = the station']},
        {t:'chal',en:'How much is this?',tr:'Hoeveel kos dit?',pr:'KHOOH-vayl kos dit',morph:['hoeveel kos = how much does it cost','dit = this']},
        {t:'chal',en:'Delicious! Thank you!',tr:'Lekker! Baie dankie!',pr:'LEK-kuhr, BAY-uh DAHN-kee',morph:['lekker = delicious / nice','baie dankie = thank you very much']}
      ],
      blocks:['You built: greetings, polite requests, directions, prices, thanks — a full day out in Afrikaans.'] },
    { id:13, title:'Airport & tickets', focus:'lughawe · paspoort · kaartjie · vlug',
      steps:[
        {t:'say',text:'You have landed. The building is the <span class="inline-tr">lughawe</span>. Your document is a <span class="inline-tr">paspoort</span>.',tr:'lughawe'},
        {t:'words',items:[{tr:'die lughawe',pr:'dee LUHKH-hah-vuh',en:'the airport'},{tr:'die paspoort',pr:'dee PAS-poort',en:'the passport'},{tr:'die kaartjie',pr:'dee KAHR-kee',en:'the ticket'},{tr:'die vlug',pr:'dee flukh',en:'the flight'},{tr:'die hek',pr:'dee hek',en:'the gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'Waar is die lughawe?',pr:'vahr is dee LUHKH-hah-vuh',morph:['waar is = where is','die lughawe = the airport']},
        {t:'chal',en:'Here is my passport',tr:'Hier is my paspoort',pr:'heer is may PAS-poort',morph:['hier is = here is','my paspoort = my passport']},
        {t:'chal',en:'A ticket, please',tr:'\'n Kaartjie, asseblief',pr:'uh KAHR-kee, uh-SUH-bleef',morph:['\'n kaartjie = a ticket','asseblief = please']},
        {t:'chal',en:'Where is the gate?',tr:'Waar is die hek?',pr:'vahr is dee hek',morph:['waar is = where is','die hek = the gate']}
      ],
      blocks:['<code>lughawe</code> = airport','<code>paspoort</code> = passport','<code>kaartjie</code> = ticket','<code>hek</code> = gate'] },
    { id:14, title:'The taxi', focus:'taxi · gaan · hotel · asb stop',
      steps:[
        {t:'say',text:'The driver is waiting. <span class="inline-tr">Taxi</span> is the same word. Tell them where to go with <span class="inline-tr">ek wil gaan</span>.',tr:'taxi'},
        {t:'words',items:[{tr:'die taxi',pr:'dee TAK-see',en:'the taxi'},{tr:'die drywer',pr:'dee DRAY-vur',en:'the driver'},{tr:'ek wil gaan',pr:'ek vil khahn',en:'I want to go'},{tr:'stop hier',pr:'stop heer',en:'stop here'}]},
        {t:'chal',en:'Taxi, please',tr:'Taxi, asseblief',pr:'TAK-see, uh-SUH-bleef',morph:['taxi = taxi','asseblief = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'Ek wil na die hotel gaan',pr:'ek vil nah dee ho-TEL khahn',morph:['ek wil = I want','na die hotel = to the hotel','gaan = to go']},
        {t:'chal',en:'Stop here, please',tr:'Stop hier, asseblief',pr:'stop heer, uh-SUH-bleef',morph:['stop hier = stop here','asseblief = please']},
        {t:'chal',en:'How much is it?',tr:'Hoeveel kos dit?',pr:'KHOOH-vayl kos dit',morph:['hoeveel = how much','kos = costs','dit = it']}
      ],
      blocks:['<code>ek wil na … gaan</code> = I want to go to …','<code>stop hier</code> = stop here'] },
    { id:15, title:'The hotel', focus:'bespreking · kamer · sleutel · nag',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">ek het \'n bespreking</span> — I have a reservation.',tr:'bespreking'},
        {t:'words',items:[{tr:'die hotel',pr:'dee ho-TEL',en:'the hotel'},{tr:'die bespreking',pr:'dee buh-SPRAY-king',en:'the reservation'},{tr:'die kamer',pr:'dee KAH-mur',en:'the room'},{tr:'die sleutel',pr:'dee SLUR-tul',en:'the key'},{tr:'een nag',pr:'ayn nahkh',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'Ek het \'n bespreking',pr:'ek het uh buh-SPRAY-king',morph:['ek het = I have','\'n bespreking = a reservation']},
        {t:'chal',en:'A room for one night, please',tr:'\'n Kamer vir een nag, asseblief',pr:'uh KAH-mur fer ayn nahkh, uh-SUH-bleef',morph:['\'n kamer = a room','vir een nag = for one night','asseblief = please']},
        {t:'chal',en:'The key, please',tr:'Die sleutel, asseblief',pr:'dee SLUR-tul, uh-SUH-bleef',morph:['die sleutel = the key','asseblief = please']},
        {t:'chal',en:'Where is my room?',tr:'Waar is my kamer?',pr:'vahr is may KAH-mur',morph:['waar is = where is','my kamer = my room']}
      ],
      blocks:['<code>bespreking</code> = reservation','<code>kamer</code> = room','<code>sleutel</code> = key'] },
    { id:16, title:'Ask for help', focus:'ek verstaan nie · stadiger · Engels',
      steps:[
        {t:'say',text:'When the language is too fast: <span class="inline-tr">Stadiger, asseblief</span> — slower, please.',tr:'Stadiger, asseblief'},
        {t:'words',items:[{tr:'stadiger',pr:'STAH-duh-khur',en:'slower'},{tr:'weer',pr:'veer',en:'again'},{tr:'Engels',pr:'ENG-uls',en:'English'},{tr:'kan jy help?',pr:'kan yay help',en:'can you help?'}]},
        {t:'chal',en:'I don\'t understand',tr:'Ek verstaan nie',pr:'ek fer-STAHN nee',morph:['ek = I','verstaan = understand','nie = not']},
        {t:'chal',en:'Slower, please',tr:'Stadiger, asseblief',pr:'STAH-duh-khur, uh-SUH-bleef',morph:['stadiger = slower','asseblief = please']},
        {t:'chal',en:'Can you help me?',tr:'Kan jy my help?',pr:'kan yay may help',morph:['kan jy = can you','my = me','help = help']},
        {t:'chal',en:'Do you speak English?',tr:'Praat jy Engels?',pr:'praht yay ENG-uls',morph:['praat jy = do you speak','Engels = English']}
      ],
      blocks:['<code>stadiger</code> = slower','<code>praat jy Engels?</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'cafe', title:'☕ At a café', emoji:'☕', turns:[
      {who:'You',tr:'Goeie môre! Een koffie, asseblief.',pr:'KOO-yuh MAW-ruh, ayn KOF-ee, uh-SUH-bleef',en:'Good morning! A coffee, please.'},
      {who:'Barista',tr:'Seker. Vir hier of om te neem?',pr:'SAY-kuhr, fer heer of om tuh nayn',en:'Sure. For here or to go?'},
      {who:'You',tr:'Om te neem, dankie.',pr:'om tuh nayn, DAHN-kee',en:'To go, thanks.'},
      {who:'Barista',tr:'Asseblief — dit is twintig rand.',pr:'uh-SUH-bleef, dit is TWIN-tikh rahnt',en:'Here you are — that\'s twenty rand.'},
      {who:'You',tr:'Baie dankie!',pr:'BAY-uh DAHN-kee',en:'Thanks a lot!'}
    ]},
    { id:'transport', title:'🚌 Getting around', emoji:'🚌', turns:[
      {who:'You',tr:'Ekskuus, waar is die stasie?',pr:'eks-KOOYS, vahr is dee STAH-see',en:'Excuse me, where is the station?'},
      {who:'Local',tr:'Reguit aan en dan regs.',pr:'ruh-KHOYT ahn en dahn rekhs',en:'Straight ahead and then right.'},
      {who:'You',tr:'Dankie. Een kaartjie na Kaapstad, asseblief.',pr:'DAHN-kee, ayn KAHR-kee nah KAHP-stat, uh-SUH-bleef',en:'Thanks. A ticket to Cape Town, please.'},
      {who:'Ticket',tr:'Nege euro. Die trein vertrek om tien uur.',pr:'NAY-khuh UH-roh, dee trayn fer-TREK om teen uur',en:'Nine euros. The train leaves at ten.'}
    ]},
    { id:'restaurant', title:'🍽️ At a restaurant', emoji:'🍽️', turns:[
      {who:'Waiter',tr:'Goeie aand! Het u \'n bespreking?',pr:'KOO-yuh ahnt, het oo uh buh-SPRAY-king',en:'Good evening! Do you have a reservation?'},
      {who:'You',tr:'Ja, vir twee.',pr:'yah, fer tway',en:'Yes, for two.'},
      {who:'You',tr:'Die spyskaart, asseblief.',pr:'dee SPAY-skahrt, uh-SUH-bleef',en:'The menu, please.'},
      {who:'You',tr:'Ek wil \'n bier en \'n glas water, asseblief.',pr:'ek vil uh beer en uh khlas VAH-tuhr, uh-SUH-bleef',en:'I\'d like a beer and a glass of water, please.'},
      {who:'Waiter',tr:'Goeie keuse! Lekker eet.',pr:'KOO-yuh KUH-zuh, LEK-kuhr ayt',en:'Good choice! Enjoy your meal.'}
    ]},
    { id:'markt', title:'🛒 At the market', emoji:'🛒', turns:[
      {who:'You',tr:'Hoeveel kos dit?',pr:'KHOOH-vayl kos dit',en:'How much is this?'},
      {who:'Seller',tr:'Twintig rand.',pr:'TWIN-tikh rahnt',en:'Twenty rand.'},
      {who:'You',tr:'Dit is te duur. Kan ek dit sien?',pr:'dit is tuh duur, kan ek dit seen',en:'That\'s too expensive. Can I see it?'},
      {who:'Seller',tr:'Goed. Tien rand dan.',pr:'khood, teen rahnt dan',en:'OK. Ten rand, then.'},
      {who:'You',tr:'Goed, ek neem dit.',pr:'khood, ek nayn dit',en:'OK, I\'ll take it.'}
    ]}
  ],
  pocket: [
    {tr:'Hallo',pr:'HAH-loh',en:'Hello',c:'Greetings'},
    {tr:'Goeie môre',pr:'KOO-yuh MAW-ruh',en:'Good morning',c:'Greetings'},
    {tr:'Goeie aand',pr:'KOO-yuh ahnt',en:'Good evening',c:'Greetings'},
    {tr:'Totsiens',pr:'tot-SEENS',en:'Goodbye',c:'Greetings'},
    {tr:'Hoe gaan dit?',pr:'KHOOH khahn dit',en:'How are you?',c:'Greetings'},
    {tr:'My naam is __NAME__',pr:'may nahm is',en:'My name is...',c:'Greetings'},
    {tr:'Dankie',pr:'DAHN-kee',en:'Thank you',c:'Courtesy'},
    {tr:'Baie dankie',pr:'BAY-uh DAHN-kee',en:'Thanks a lot',c:'Courtesy'},
    {tr:'Asseblief',pr:'uh-SUH-bleef',en:'Please',c:'Courtesy'},
    {tr:'Jammer',pr:'YAHM-muhr',en:'Sorry',c:'Courtesy'},
    {tr:'Ja',pr:'yah',en:'Yes',c:'Courtesy'},
    {tr:'Nee',pr:'nay',en:'No',c:'Courtesy'},
    {tr:'Een',pr:'ayn',en:'1',c:'Numbers'},
    {tr:'Twee',pr:'tway',en:'2',c:'Numbers'},
    {tr:'Drie',pr:'dree',en:'3',c:'Numbers'},
    {tr:'Vier',pr:'veer',en:'4',c:'Numbers'},
    {tr:'Vyf',pr:'fayf',en:'5',c:'Numbers'},
    {tr:'Tien',pr:'teen',en:'10',c:'Numbers'},
    {tr:'Water',pr:'VAH-tuhr',en:'water',c:'Food'},
    {tr:'Brood',pr:'brooht',en:'bread',c:'Food'},
    {tr:'Koffie',pr:'KOF-ee',en:'coffee',c:'Food'},
    {tr:'Tee',pr:'TAY-uh',en:'tea',c:'Food'},
    {tr:'Wyn',pr:'vayn',en:'wine',c:'Food'},
    {tr:'Die rekening',pr:'dee RAY-kuh-ning',en:'the bill',c:'Food'},
    {tr:'Waar is...?',pr:'vahr is',en:'Where is...?',c:'Directions'},
    {tr:'Regs',pr:'rekhs',en:'to the right',c:'Directions'},
    {tr:'Links',pr:'links',en:'to the left',c:'Directions'},
    {tr:'Die stasie',pr:'dee STAH-see',en:'the station',c:'Directions'},
    {tr:'Hoeveel kos dit?',pr:'KHOOH-vayl kos dit',en:'how much is this?',c:'Shopping'},
    {tr:'Die toilet',pr:'dee toy-LET',en:'the toilet',c:'Emergency'},
    {tr:'Help!',pr:'help',en:'Help!',c:'Emergency'},
    {tr:'Die dokter',pr:'dee DOK-tuhr',en:'the doctor',c:'Emergency'},
    {tr:'Die apteek',pr:'dee ahp-TAYK',en:'the pharmacy',c:'Emergency'},
    {tr:'Ek verstaan nie',pr:'ek fer-STAHN nee',en:'I don\'t understand',c:'Emergency'},
    {tr:'Ek het hulp nodig',pr:'ek het hulp NOH-dukh',en:'I need help',c:'Emergency'},
    {tr:'Vandag',pr:'fahn-DAHKH',en:'today',c:'Time'},
    {tr:'Môre',pr:'MAW-ruh',en:'tomorrow',c:'Time'},
    {tr:'Tot môre',pr:'tot MAW-ruh',en:'see you tomorrow',c:'Time'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Shopping','Emergency','Time'],
  culture: [
    {icon:'🍖',title:'The braai, not the barbecue',body:'A <i>braai</i> is far more than a barbecue — it\'s a national social ritual. Friends gather around the fire and the <i>braaier</i> (the one in charge) holds a position of honour. On the grid: boerewors (a spiced sausage), lamb chops and steak. \'Lekker!\' — nice! — is the word of the day.'},
    {icon:'🇳🇱',title:'A daughter of Dutch',body:'Afrikaans grew out of the 17th-century Dutch spoken by settlers at the Cape, and simplified it along the way — fewer genders, simpler grammar. Read it slowly and Dutch speakers can often work it out. It\'s one of the youngest Germanic languages.'},
    {icon:'🏉',title:'Rugby is a religion',body:'Rugby is South Africa\'s most-loved sport, and the Springboks are a national obsession. On match days the country turns green and gold. You\'ll hear <i>hou koers!</i> (keep going!) and plenty of <i>lekker</i>.'},
    {icon:'🌊',title:'The language of the Cape',body:'Afrikaans was born at the Cape of Good Hope — a meeting point of Dutch, Khoekhoe (Khoisan) and other languages. Its vocabulary carries words borrowed from Malay, Portuguese and the Khoisan languages, which is part of why it sounds so distinctive today.'},
    {icon:'💬',title:'"Lekker" — one word, endless uses',body:'<i>Lekker</i> is the most useful word in Afrikaans: nice, tasty, great, good, fun. A <i>lekker</i> meal, a <i>lekker</i> day, <i>lekker</i> dancing — it covers approval of almost anything. Use it liberally.'},
    {icon:'🗣️',title:'A little Afrikaans goes far',body:'A <i>goeie môre</i> and a <i>baie dankie</i> open every door. Afrikaans speakers often switch to English for you, but they light up the moment you try their language — effort matters more than perfection.'}
  ],
  sounds: [
    {l:'g',say:'a throaty "kh" from the back of the throat — the famous Afrikaans g, shaped by the Khoisan (Khoekhoe) languages',ex:'goeie = KHOO-yuh · groot = khroht',voice:'goeie'},
    {l:'j',say:'"y" as in yes',ex:'ja = yah · jou = yow',voice:'ja'},
    {l:'r',say:'a rolled or trilled r (soft, often guttural)',ex:'rooi = roy · reën = RAY-uh',voice:'rooi'},
    {l:'y',say:'"ay" as in may (a diphthong)',ex:'my = may · jy = yay',voice:'my'},
    {l:'ie',say:'a long "ee" as in see',ex:'tien = teen · hier = heer',voice:'tien'},
    {l:'oe',say:'"oo" as in too',ex:'boek = book · goeie = KHOO-yuh',voice:'boek'},
    {l:'w',say:'sounds like English "v"',ex:'water = VAH-tuhr · weer = veer',voice:'water'}
  ],
  resources: [
    {icon:'🗣️',t:'Easy Afrikaans',d:'Real street interviews with native speakers and subtitles — ideal for natural, everyday Afrikaans.',q:'Easy Afrikaans street interviews'},
    {icon:'🐢',t:'Afrikaans for beginners',d:'Slow, clear lessons on pronunciation and everyday phrases for absolute beginners.',q:'Afrikaans for beginners slow pronunciation'},
    {icon:'📚',t:'Learn Afrikaans in context',d:'Beginner lessons built around real situations — ordering food, directions, small talk.',q:'Learn Afrikaans beginner lessons'},
    {icon:'💬',t:'South African conversations',d:'Friendly dialogue practise drawn from South Africa\'s many languages and cultures.',q:'Afrikaans conversation practice for beginners'},
    {icon:'🎧',t:'Slow Afrikaans podcasts',d:'Easy listening for learners — perfect for a walk or the commute.',q:'slow Afrikaans podcast for learners'}
  ]
};
