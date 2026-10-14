/* ---- slovak ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["slovak"] = {
  name: 'Slovak',
  flag: '🇸🇰',
  tts: 'sk-SK',
  dir: 'ltr',
  native: 'Slovenčina',
  soundTitle: 'Slovak sounds & spelling',
  soundIntro: 'Slovak is written almost exactly as it sounds in Latin letters. Learn these special letters and you can read nearly any word aloud.',
  grammar: '<p>Slovak is written almost exactly as it sounds — a real gift for learners. The marks on <b>á, é, í, ó, ú</b> simply make the vowel longer; the sound stays the same. <b>ch</b> is a breathy \'h\', <b>c</b> is \'ts\', <b>č</b> is \'ch\', and <b>š/ž</b> are \'sh/zh\'. <b>ľ</b> is a soft \'l\', and <b>ô</b> slides from \'u\' into \'o\'.<br>Gender matters: nouns have masculine, feminine and neuter forms, and adjectives and past verbs agree with them — so <b>chcel by som</b> (a man speaking) vs <b>chcela by som</b> (a woman). Don\'t worry: you\'ll hear the rhythm right away.</p>',
  bridges: '<div class="note">🇨🇿 <b>Czech.</b> Slovak is West Slavic and very close to its neighbour — Czechs and Slovaks understand each other with almost no effort. If you know Czech <b>děkuji</b>, that\'s <b>ďakujem</b>; Czech <b>dobrý den</b> is Slovak <b>dobrý deň</b>.</div><div class="note">🇷🇺 <b>Russian / Polish.</b> Everyday words line up across the whole Slavic family — <b>voda</b>, <b>matka</b>, <b>brat</b>, <b>čaj</b>, <b>chlieb</b> will all look familiar.</div>',
  lessons: [
    { id:1, title:'Greetings & being friendly', focus:'ahoj · dobrý deň · ako sa máš?',
      steps:[
        {t:'say',text:'The word you\'ll use all day: <span class="inline-tr">ahoj</span> — hi (and bye). Say it out loud.',tr:'ahoj'},
        {t:'words',items:[{tr:'ahoj',pr:'ah-HOY',en:'hi / bye'},{tr:'dobrý deň',pr:'DOH-bree dyen',en:'good day'},{tr:'dobré ráno',pr:'DOH-breh RAA-noh',en:'good morning'},{tr:'dobrý večer',pr:'DOH-bree VEH-cher',en:'good evening'},{tr:'dovidenia',pr:'doh-VEE-dyeh-nyah',en:'goodbye'}]},
        {t:'chal',en:'Hello, how are you?',tr:'Ahoj, ako sa máš?',pr:'ah-HOY, AH-koh sah maash',morph:['ahoj = hi','ako sa máš? = how are you?']},
        {t:'say',text:'To ask how someone is: <span class="inline-tr">ako sa máš?</span> (informal). A common reply is <span class="inline-tr">dobre, ďakujem</span> — well, thanks.',tr:'ako sa máš?'},
        {t:'words',items:[{tr:'Ako sa máš?',pr:'AH-koh sah maash',en:'How are you?'},{tr:'Dobre, ďakujem',pr:'DOH-breh, DYAH-koo-yem',en:'Well, thanks'},{tr:'Mám sa dobre',pr:'maam sah DOH-breh',en:'I\'m doing well'}]},
        {t:'chal',en:'Good morning',tr:'Dobré ráno',pr:'DOH-breh RAA-noh',morph:['dobré ráno = good morning']}
      ],
      blocks:['<code>ahoj</code> = hi / bye','<code>dobrý deň</code> = good day','<code>ako sa máš?</code> = how are you?'] },
    { id:2, title:'Being polite: ďakujem & prosím', focus:'ďakujem · prosím · nech sa páči',
      steps:[
        {t:'say',text:'Two words carry a whole conversation: <span class="inline-tr">ďakujem</span> (thank you) and <span class="inline-tr">prosím</span> (please / you\'re welcome).',tr:'ďakujem'},
        {t:'words',items:[{tr:'ďakujem',pr:'DYAH-koo-yem',en:'thank you'},{tr:'prosím',pr:'PROH-seem',en:'please / you\'re welcome'},{tr:'nech sa páči',pr:'nyehkh sah PAH-chee',en:'here you are'},{tr:'prepáč',pr:'PREH-paach',en:'sorry'},{tr:'áno / nie',pr:'AA-noh / nyeh',en:'yes / no'}]},
        {t:'chal',en:'Thank you very much',tr:'Ďakujem pekne',pr:'DYAH-koo-yem PEHK-nyeh',morph:['ďakujem = thank you','pekne = nicely / very much']},
        {t:'say',text:'<span class="inline-tr">prosím</span> does double duty — it means \'please\' and \'you\'re welcome\'. Context tells you which.',tr:'prosím'},
        {t:'chal',en:'Yes, please',tr:'Áno, prosím',pr:'AA-noh, PROH-seem',morph:['áno = yes','prosím = please']},
        {t:'chal',en:'One water, please',tr:'Jednu vodu, prosím',pr:'YEHD-noo VOH-doo, PROH-seem',morph:['jednu = one','vodu = water','prosím = please']}
      ],
      blocks:['<code>ďakujem</code> = thank you · <code>prosím</code> = please','<code>nech sa páči</code> = here you are','<code>prepáč</code> = sorry'] },
    { id:3, title:'Numbers 1–10', focus:'jeden · dva · tri · desať',
      steps:[
        {t:'say',text:'Numbers are the fastest win. Listen and repeat: <span class="inline-tr">jeden, dva, tri</span>.',tr:'jeden'},
        {t:'words',items:[{tr:'jeden',pr:'YEH-den',en:'1'},{tr:'dva',pr:'dvah',en:'2'},{tr:'tri',pr:'tree',en:'3'},{tr:'štyri',pr:'SHTEE-ree',en:'4'},{tr:'päť',pr:'pyaht',en:'5'},{tr:'šesť',pr:'shest',en:'6'},{tr:'sedem',pr:'SEH-dem',en:'7'},{tr:'osem',pr:'OH-sem',en:'8'},{tr:'deväť',pr:'DEH-vyaht',en:'9'},{tr:'desať',pr:'DEH-syaht',en:'10'}]},
        {t:'chal',en:'Two coffees, please',tr:'Dve kávy, prosím',pr:'dveh KAH-vee, PROH-seem',morph:['dve = two','kávy = coffees','prosím = please']},
        {t:'say',text:'To ask a price: <span class="inline-tr">Koľko to stojí?</span> — how much does it cost?',tr:'Koľko to stojí?'},
        {t:'chal',en:'How much is it?',tr:'Koľko to stojí?',pr:'KOL-koh toh STOH-yee',morph:['koľko = how much','to stojí = it costs']},
        {t:'chal',en:'It\'s five euros',tr:'Je to päť eur',pr:'yeh toh pyaht eh-oor',morph:['je to = it is','päť = five','eur = euros']}
      ],
      blocks:['jeden ... desať = 1–10','<code>koľko to stojí?</code> = how much is it?'] },
    { id:4, title:'"I want" — chcem / chcel by som', focus:'chcem · chcel by som · prosím si',
      steps:[
        {t:'say',text:'To say what you want: <span class="inline-tr">chcem</span> = I want. For most situations you\'ll want the more polite <span class="inline-tr">chcel by som</span> — I would like.',tr:'chcem'},
        {t:'say',text:'The polite form matches your gender: <b>chcel by som</b> if you\'re male, <b>chcela by som</b> if you\'re female. Both mean \'I would like\'.',tr:'chcel by som'},
        {t:'chal',en:'I\'d like a coffee',tr:'Chcel by som kávu',pr:'khtsel bih som KAH-voo',morph:['chcel by som = I would like','kávu = coffee']},
        {t:'chal',en:'I\'d like a tea',tr:'Chcel by som čaj',pr:'khtsel bih som chai',morph:['chcel by som = I would like','čaj = tea']},
        {t:'chal',en:'I want a water',tr:'Chcem vodu',pr:'khtsem VOH-doo',morph:['chcem = I want','vodu = water']}
      ],
      blocks:['<code>chcem</code> = I want','<code>chcel by som</code> = I would like','<code>chcela by som</code> = I would like (f)'] },
    { id:5, title:'Food & drink', focus:'voda · chlieb · káva · čaj',
      steps:[
        {t:'say',text:'Eating and drinking: <span class="inline-tr">voda</span> (water), <span class="inline-tr">chlieb</span> (bread), <span class="inline-tr">káva</span> (coffee), <span class="inline-tr">čaj</span> (tea).',tr:'voda'},
        {t:'words',items:[{tr:'voda',pr:'VOH-dah',en:'water',link:'≈ Russian / Polish voda'},{tr:'chlieb',pr:'khlyeb',en:'bread'},{tr:'káva',pr:'KAH-vah',en:'coffee',link:'≈ English coffee'},{tr:'čaj',pr:'chai',en:'tea',link:'≈ Russian chay'},{tr:'reštaurácia',pr:'res-tow-RAH-tsyah',en:'restaurant',link:'≈ English restaurant'}]},
        {t:'chal',en:'Water and bread, please',tr:'Vodu a chlieb, prosím',pr:'VOH-doo ah khlyeb, PROH-seem',morph:['vodu = water','a = and','chlieb = bread','prosím = please']},
        {t:'chal',en:'I\'d like the menu',tr:'Chcel by som jedálny lístok',pr:'khtsel bih som YEH-daahl-nee LEES-tok',morph:['chcel by som = I would like','jedálny lístok = the menu']},
        {t:'say',text:'To praise the food: <span class="inline-tr">výborné</span> — delicious / excellent.',tr:'výborné'},
        {t:'chal',en:'It\'s delicious!',tr:'Výborné!',pr:'VEE-bor-neh',morph:['výborné = excellent / delicious']}
      ],
      blocks:['<code>voda</code>, <code>chlieb</code>, <code>káva</code>, <code>čaj</code> = water, bread, coffee, tea','<code>jedálny lístok</code> = the menu','<code>výborné</code> = delicious'] },
    { id:6, title:'Directions & getting around', focus:'kde je · vpravo · vľavo · rovno',
      steps:[
        {t:'say',text:'The most useful question in any town: <span class="inline-tr">Kde je…?</span> — where is…?',tr:'Kde je?'},
        {t:'words',items:[{tr:'Kde je...?',pr:'gdyeh yeh',en:'Where is...?'},{tr:'vpravo',pr:'FPRAH-voh',en:'to the right'},{tr:'vľavo',pr:'FVLAH-voh',en:'to the left'},{tr:'rovno',pr:'ROV-noh',en:'straight ahead'},{tr:'stanica',pr:'STAH-nee-tsah',en:'the station',link:'≈ English station'}]},
        {t:'chal',en:'Where is the station?',tr:'Kde je stanica?',pr:'gdyeh yeh STAH-nee-tsah',morph:['kde je = where is','stanica = station']},
        {t:'chal',en:'Where is the bathroom?',tr:'Kde je toaleta?',pr:'gdyeh yeh toh-ah-LEH-tah',morph:['kde je = where is','toaleta = bathroom']},
        {t:'say',text:'<span class="inline-tr">vpravo</span> and <span class="inline-tr">vľavo</span> say which way to turn, and <span class="inline-tr">rovno</span> is \'straight ahead\'.',tr:'rovno'},
        {t:'chal',en:'It\'s on the left',tr:'Je to vľavo',pr:'yeh toh FVLAH-voh',morph:['je to = it is','vľavo = to the left']}
      ],
      blocks:['<code>kde je…?</code> = where is…?','<code>vpravo</code> / <code>vľavo</code> = right / left','<code>rovno</code> = straight ahead'] },
    { id:7, title:'Questions & "may I…?"', focus:'čo · kedy · kde · prečo · môžem',
      steps:[
        {t:'say',text:'Question words unlock every conversation: <span class="inline-tr">čo</span> (what), <span class="inline-tr">kde</span> (where), <span class="inline-tr">kedy</span> (when), <span class="inline-tr">prečo</span> (why).',tr:'čo'},
        {t:'words',items:[{tr:'kto',pr:'ktoh',en:'who'},{tr:'kedy',pr:'KEH-dee',en:'when'},{tr:'kde',pr:'gdyeh',en:'where'},{tr:'prečo',pr:'PREH-choh',en:'why'},{tr:'čo',pr:'choh',en:'what'}]},
        {t:'chal',en:'What is this?',tr:'Čo je to?',pr:'choh yeh toh',morph:['čo = what','je to = is it']},
        {t:'say',text:'To ask permission politely: <span class="inline-tr">Môžem…?</span> — may I…?',tr:'Môžem?'},
        {t:'chal',en:'May I pay?',tr:'Môžem zaplatiť?',pr:'MWO-zhem ZA-pla-tich',morph:['môžem = may I','zaplatiť = to pay']},
        {t:'chal',en:'Where are you from?',tr:'Odkiaľ si?',pr:'OD-kyaal see',morph:['odkiaľ = from where','si = you are']}
      ],
      blocks:['<code>čo</code>, <code>kedy</code>, <code>kde</code>, <code>prečo</code> = what, when, where, why','<code>môžem…?</code> = may I…?'] },
    { id:8, title:'Family & people', focus:'rodina · matka · otec · priateľ',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">rodina</span> (family), <span class="inline-tr">matka</span> (mother), <span class="inline-tr">otec</span> (father).',tr:'rodina'},
        {t:'words',items:[{tr:'rodina',pr:'ROH-dee-nah',en:'family'},{tr:'matka',pr:'MAHT-kah',en:'mother',link:'≈ Russian mat\''},{tr:'otec',pr:'OH-tets',en:'father'},{tr:'brat',pr:'braht',en:'brother',link:'≈ Russian / Polish brat'},{tr:'priateľ',pr:'PREE-ah-tyel',en:'friend'}]},
        {t:'chal',en:'I have a brother',tr:'Mám brata',pr:'maam BRAH-tah',morph:['mám = I have','brata = brother']},
        {t:'say',text:'<span class="inline-tr">mám</span> = I have. It\'s the key verb for saying what you\'ve got: <b>mám rodinu</b> = I have a family.',tr:'mám'},
        {t:'chal',en:'This is my mother',tr:'Toto je moja matka',pr:'TOH-toh yeh MOH-yah MAHT-kah',morph:['toto je = this is','moja = my','matka = mother']},
        {t:'chal',en:'I have a friend',tr:'Mám priateľa',pr:'maam PREE-ah-tya',morph:['mám = I have','priateľa = friend']}
      ],
      blocks:['<code>matka</code> / <code>otec</code> = mother / father','<code>brat</code> = brother','<code>mám</code> = I have'] },
    { id:9, title:'Time, days & weather', focus:'dnes · zajtra · koľko je hodín',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">dnes</span>, tomorrow is <span class="inline-tr">zajtra</span>.',tr:'dnes'},
        {t:'words',items:[{tr:'dnes',pr:'dnyes',en:'today'},{tr:'zajtra',pr:'ZAI-trah',en:'tomorrow'},{tr:'včera',pr:'FCHER-ah',en:'yesterday'},{tr:'koľko je hodín?',pr:'KOL-koh yeh HOH-deen',en:'what time is it?'},{tr:'počasie',pr:'POH-chah-syeh',en:'weather',link:'≈ Russian pogoda'}]},
        {t:'chal',en:'See you tomorrow',tr:'Do zajtra',pr:'doh ZAI-trah',morph:['do = until','zajtra = tomorrow']},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">Aké je počasie?</span> — what\'s the weather like?',tr:'Aké je počasie?'},
        {t:'chal',en:'It\'s raining',tr:'Prší',pr:'PRSHEE',morph:['prší = it rains']},
        {t:'chal',en:'What time is it?',tr:'Koľko je hodín?',pr:'KOL-koh yeh HOH-deen',morph:['koľko = how much','je hodín = is the hour']}
      ],
      blocks:['<code>dnes</code> / <code>zajtra</code> = today / tomorrow','<code>aké je počasie?</code> = what\'s the weather?','<code>prší</code> = it\'s raining'] },
    { id:10, title:'Your name — volám sa', focus:'volám sa · ako sa voláš · teší ma',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">Volám sa…</span> = my name is…, and <span class="inline-tr">Teší ma</span> = pleased to meet you.',tr:'volám sa'},
        {t:'chal',en:'My name is __NAME__',tr:'Volám sa __NAME__',pr:'VOH-laam sah __NAME__',morph:['volám sa = my name is','__NAME__ = your name']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">Ako sa voláš?</span>',tr:'Ako sa voláš?'},
        {t:'chal',en:'What\'s your name?',tr:'Ako sa voláš?',pr:'AH-koh sah VOH-laash',morph:['ako = how','sa voláš? = do you call yourself?']},
        {t:'chal',en:'Pleased to meet you',tr:'Teší ma',pr:'TYEH-shee mah',morph:['teší ma = pleased to meet you']}
      ],
      blocks:['<code>volám sa…</code> = my name is…','<code>ako sa voláš?</code> = what\'s your name?','<code>teší ma</code> = pleased to meet you'] },
    { id:11, title:'Health & emergency', focus:'pomoc · lekár · nemocnica · nerozumiem',
      steps:[
        {t:'say',text:'If you need help: <span class="inline-tr">Pomoc!</span> (help), <span class="inline-tr">lekár</span> (doctor), <span class="inline-tr">nemocnica</span> (hospital).',tr:'Pomoc!'},
        {t:'words',items:[{tr:'Pomoc!',pr:'POH-mots',en:'Help!'},{tr:'lekár',pr:'LEH-kaar',en:'doctor'},{tr:'nemocnica',pr:'nyeh-mohts-NEE-tsah',en:'hospital'},{tr:'Nerozumiem',pr:'nyeh-roh-ZOO-myem',en:'I don\'t understand'},{tr:'hasič',pr:'HAH-seech',en:'firefighter'}]},
        {t:'chal',en:'Help!',tr:'Pomoc!',pr:'POH-mots',morph:['pomoc = help']},
        {t:'chal',en:'I don\'t understand',tr:'Nerozumiem',pr:'nyeh-roh-ZOO-myem',morph:['ne- = not','rozumiem = I understand']},
        {t:'say',text:'To say you don\'t speak the language: <span class="inline-tr">Nehovorím po slovensky</span>.',tr:'Nehovorím po slovensky'},
        {t:'chal',en:'I don\'t speak Slovak',tr:'Nehovorím po slovensky',pr:'nyeh-HOH-voh-reem poh SLOH-ven-skee',morph:['nehovorím = I don\'t speak','po slovensky = in Slovak']}
      ],
      blocks:['<code>pomoc!</code> = help','<code>lekár</code> = the doctor','<code>nerozumiem</code> = I don\'t understand'] },
    { id:12, title:'Tying it together', focus:'a capstone scene in Bratislava',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolkit. This capstone uses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello, how are you?',tr:'Ahoj, ako sa máš?',pr:'ah-HOY, AH-koh sah maash',morph:['ahoj = hi','ako sa máš? = how are you?']},
        {t:'chal',en:'I\'d like a coffee and bread, please',tr:'Chcel by som kávu a chlieb, prosím',pr:'khtsel bih som KAH-voo ah khlyeb, PROH-seem',morph:['chcel by som = I\'d like','kávu = coffee','a chlieb = and bread']},
        {t:'chal',en:'Where is the station?',tr:'Kde je stanica?',pr:'gdyeh yeh STAH-nee-tsah',morph:['kde je = where is','stanica = station']},
        {t:'chal',en:'How much is it?',tr:'Koľko to stojí?',pr:'KOL-koh toh STOH-yee',morph:['koľko to stojí? = how much is it?']},
        {t:'chal',en:'Thank you very much!',tr:'Ďakujem pekne!',pr:'DYAH-koo-yem PEHK-nyeh',morph:['ďakujem = thank you','pekne = very much']}
      ],
      blocks:['You built: greetings, ordering, directions, prices, thanks — a full day out in Slovakia.'] },
    { id:13, title:'Airport & tickets', focus:'letisko · pas · lístok · let',
      steps:[
        {t:'say',text:'You have landed. The building is the <span class="inline-tr">letisko</span>. Your document is a <span class="inline-tr">pas</span>.',tr:'letisko'},
        {t:'words',items:[{tr:'letisko',pr:'LEH-tees-koh',en:'the airport'},{tr:'pas',pr:'pahs',en:'the passport'},{tr:'lístok',pr:'LEES-tok',en:'the ticket'},{tr:'let',pr:'let',en:'the flight'},{tr:'gáta',pr:'GAA-tah',en:'the gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'Kde je letisko?',pr:'gdyeh yeh LEH-tees-koh',morph:['kde je = where is','letisko = the airport']},
        {t:'chal',en:'Here is my passport',tr:'Tu je môj pas',pr:'too yeh moy pahs',morph:['tu je = here is','môj pas = my passport']},
        {t:'chal',en:'A ticket, please',tr:'Jeden lístok, prosím',pr:'YEH-den LEES-tok, PROH-seem',morph:['jeden lístok = a ticket','prosím = please']},
        {t:'chal',en:'Where is the gate?',tr:'Kde je gáta?',pr:'gdyeh yeh GAA-tah',morph:['kde je = where is','gáta = the gate']}
      ],
      blocks:['<code>letisko</code> = airport','<code>pas</code> = passport','<code>lístok</code> = ticket','<code>gáta</code> = gate'] },
    { id:14, title:'The taxi', focus:'taxi · ísť · hotel · zastavte',
      steps:[
        {t:'say',text:'The driver is waiting. <span class="inline-tr">taxi</span> is the word you need. Tell them where to go with <span class="inline-tr">chcem ísť</span>.',tr:'taxi'},
        {t:'words',items:[{tr:'taxi',pr:'TAHK-see',en:'the taxi'},{tr:'vodič',pr:'VOH-deech',en:'the driver'},{tr:'chcem ísť',pr:'khtsem eest',en:'I want to go'},{tr:'zastavte tu',pr:'ZAH-stav-teh too',en:'stop here'}]},
        {t:'chal',en:'Taxi, please',tr:'Taxi, prosím',pr:'TAHK-see, PROH-seem',morph:['taxi = taxi','prosím = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'Chcem ísť do hotela',pr:'khtsem eest doh HOH-teh-lah',morph:['chcem ísť = I want to go','do hotela = to the hotel']},
        {t:'chal',en:'Stop here, please',tr:'Zastavte tu, prosím',pr:'ZAH-stav-teh too, PROH-seem',morph:['zastavte tu = stop here','prosím = please']},
        {t:'chal',en:'How much is it?',tr:'Koľko to stojí?',pr:'KOL-koh toh STOH-yee',morph:['koľko = how much','to stojí = it costs']}
      ],
      blocks:['<code>chcem ísť do …</code> = I want to go to …','<code>zastavte tu</code> = stop here'] },
    { id:15, title:'The hotel', focus:'rezervácia · izba · kľúč · noc',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">Mám rezerváciu</span> — I have a reservation.',tr:'rezervácia'},
        {t:'words',items:[{tr:'hotel',pr:'HOH-tel',en:'the hotel'},{tr:'rezervácia',pr:'reh-zehr-VAA-tsyah',en:'the reservation'},{tr:'izba',pr:'IZ-bah',en:'the room'},{tr:'kľúč',pr:'klyooch',en:'the key'},{tr:'jedna noc',pr:'YED-nah nots',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'Mám rezerváciu',pr:'maam reh-zehr-VAA-tsyoo',morph:['mám = I have','rezerváciu = a reservation']},
        {t:'chal',en:'A room for one night, please',tr:'Izbu na jednu noc, prosím',pr:'IZ-boo nah YED-noo nots, PROH-seem',morph:['izbu = a room','na jednu noc = for one night','prosím = please']},
        {t:'chal',en:'The key, please',tr:'Kľúč, prosím',pr:'klyooch, PROH-seem',morph:['kľúč = the key','prosím = please']},
        {t:'chal',en:'Where is my room?',tr:'Kde je moja izba?',pr:'gdyeh yeh MOH-yah IZ-bah',morph:['kde je = where is','moja izba = my room']}
      ],
      blocks:['<code>rezervácia</code> = reservation','<code>izba</code> = room','<code>kľúč</code> = key'] },
    { id:16, title:'Ask for help', focus:'nerozumiem · pomalšie · anglicky',
      steps:[
        {t:'say',text:'When the language is too fast: <span class="inline-tr">Pomalšie, prosím</span> — slower, please.',tr:'Pomalšie, prosím'},
        {t:'words',items:[{tr:'pomalšie',pr:'POH-mal-shyeh',en:'slower'},{tr:'znova',pr:'ZNOH-vah',en:'again'},{tr:'anglicky',pr:'AHNG-lits-kee',en:'English'},{tr:'môžete mi pomôcť?',pr:'MWO-zheh-teh mee poh-MOHTS',en:'can you help me?'}]},
        {t:'chal',en:'I don\'t understand',tr:'Nerozumiem',pr:'nyeh-roh-ZOO-myem',morph:['ne- = not','rozumiem = I understand']},
        {t:'chal',en:'Slower, please',tr:'Pomalšie, prosím',pr:'POH-mal-shyeh, PROH-seem',morph:['pomalšie = slower','prosím = please']},
        {t:'chal',en:'Can you help me?',tr:'Môžete mi pomôcť?',pr:'MWO-zheh-teh mee poh-MOHTS',morph:['môžete = can you','mi = me','pomôcť = help']},
        {t:'chal',en:'Do you speak English?',tr:'Hovoríte po anglicky?',pr:'hoh-voh-REE-teh poh AHNG-lits-kee',morph:['hovoríte = do you speak','po anglicky = in English']}
      ],
      blocks:['<code>pomalšie</code> = slower','<code>Hovoríte po anglicky?</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'cafe', title:'☕ At a café', emoji:'☕', turns:[
      {who:'You',tr:'Dobrý deň! Jednu kávu, prosím.',pr:'DOH-bree dyen! YEHD-noo KAH-voo, PROH-seem',en:'Good day! One coffee, please.'},
      {who:'Barista',tr:'Hneď. Tu alebo so sebou?',pr:'hnyed. TOO ah-leh-boh soh SEH-bow',en:'Right away. For here or to go?'},
      {who:'You',tr:'So sebou, ďakujem.',pr:'soh SEH-bow, DYAH-koo-yem',en:'To go, thanks.'},
      {who:'Barista',tr:'Nech sa páči. Je to jedno eur.',pr:'nyehkh sah PAH-chee. yeh toh YEHD-noh eh-oor',en:'Here you are. That\'s one euro.'},
      {who:'You',tr:'Ďakujem pekne!',pr:'DYAH-koo-yem PEHK-nyeh',en:'Thank you very much!'}
    ]},
    { id:'transport', title:'🚉 At the station', emoji:'🚉', turns:[
      {who:'You',tr:'Prepáčte, kde je stanica?',pr:'PREH-paach-tyeh, gdyeh yeh STAH-nee-tsah',en:'Excuse me, where is the station?'},
      {who:'Local',tr:'Tam, vpravo.',pr:'tahm, FPRAH-voh',en:'There, on the right.'},
      {who:'You',tr:'Ďakujem. Jeden lístok do Bratislavy, prosím.',pr:'DYAH-koo-yem. YEH-den LEES-tok doh BRAH-tee-slah-vee, PROH-seem',en:'Thanks. One ticket to Bratislava, please.'},
      {who:'Ticket',tr:'Pätnásť eur. Vlak ide o deviatej.',pr:'PYAT-naasht eh-oor. vlahk EED-eh oh DEH-vya-tyey',en:'Fifteen euros. The train leaves at nine.'}
    ]},
    { id:'restaurant', title:'🍽️ At a restaurant', emoji:'🍽️', turns:[
      {who:'Waiter',tr:'Dobrý večer! Máte rezerváciu?',pr:'DOH-bree VEH-cher! maa-teh REH-zehr-VAH-tsyoo',en:'Good evening! Do you have a reservation?'},
      {who:'You',tr:'Áno, pre dvoch.',pr:'AA-noh, preh dvohkh',en:'Yes, for two.'},
      {who:'You',tr:'Jedálny lístok, prosím.',pr:'YEH-daahl-nee LEES-tok, PROH-seem',en:'The menu, please.'},
      {who:'You',tr:'Chcel by som bryndzové halušky a vodu.',pr:'khtsel bih som BRIN-dzoh-veh HAH-loosh-kee ah VOH-doo',en:'I\'d like bryndzové halušky (potato dumplings) and water.'},
      {who:'Waiter',tr:'Výborná voľba! Dobrú chuť.',pr:'VEE-bor-nah VOL-ba! DOH-broo khootch',en:'Excellent choice! Enjoy your meal.'}
    ]},
    { id:'market', title:'🛍️ At the market', emoji:'🛍️', turns:[
      {who:'You',tr:'Dobrý deň. Koľko to stojí?',pr:'DOH-bree dyen. KOL-koh toh STOH-yee',en:'Good day. How much is it?'},
      {who:'Seller',tr:'Dvadsať eur.',pr:'DVAHD-saht eh-oor',en:'Twenty euros.'},
      {who:'You',tr:'Je to drahé. Dáte mi zľavu?',pr:'yeh toh DRAH-heh. daa-teh mee ZLAH-voo',en:'It\'s expensive. Will you give me a discount?'},
      {who:'Seller',tr:'Dobre, pätnásť eur.',pr:'DOH-breh, PYAT-naasht eh-oor',en:'OK, fifteen euros.'},
      {who:'You',tr:'Vezmem si to. Ďakujem!',pr:'VEHZ-mem see toh. DYAH-koo-yem',en:'I\'ll take it. Thank you!'}
    ]}
  ],
  pocket: [
    {tr:'Ahoj',pr:'ah-HOY',en:'Hi / bye',c:'Greetings'},
    {tr:'Dobrý deň',pr:'DOH-bree dyen',en:'Good day',c:'Greetings'},
    {tr:'Dovidenia',pr:'doh-VEE-dyeh-nyah',en:'Goodbye',c:'Greetings'},
    {tr:'Ako sa máš?',pr:'AH-koh sah maash',en:'How are you?',c:'Greetings'},
    {tr:'Dobre, ďakujem',pr:'DOH-breh, DYAH-koo-yem',en:'Well, thanks',c:'Greetings'},
    {tr:'Ďakujem',pr:'DYAH-koo-yem',en:'Thank you',c:'Courtesy'},
    {tr:'Ďakujem pekne',pr:'DYAH-koo-yem PEHK-nyeh',en:'Thanks a lot',c:'Courtesy'},
    {tr:'Prosím',pr:'PROH-seem',en:'Please / you\'re welcome',c:'Courtesy'},
    {tr:'Nech sa páči',pr:'nyehkh sah PAH-chee',en:'Here you are',c:'Courtesy'},
    {tr:'Prepáč',pr:'PREH-paach',en:'Sorry',c:'Courtesy'},
    {tr:'Áno / Nie',pr:'AA-noh / nyeh',en:'Yes / No',c:'Courtesy'},
    {tr:'Jeden',pr:'YEH-den',en:'1',c:'Numbers'},
    {tr:'Dva',pr:'dvah',en:'2',c:'Numbers'},
    {tr:'Tri',pr:'tree',en:'3',c:'Numbers'},
    {tr:'Štyri',pr:'SHTEE-ree',en:'4',c:'Numbers'},
    {tr:'Päť',pr:'pyaht',en:'5',c:'Numbers'},
    {tr:'Desať',pr:'DEH-syaht',en:'10',c:'Numbers'},
    {tr:'Voda',pr:'VOH-dah',en:'water',c:'Food'},
    {tr:'Chlieb',pr:'khlyeb',en:'bread',c:'Food'},
    {tr:'Káva',pr:'KAH-vah',en:'coffee',c:'Food'},
    {tr:'Čaj',pr:'chai',en:'tea',c:'Food'},
    {tr:'Jedálny lístok',pr:'YEH-daahl-nee LEES-tok',en:'the menu',c:'Food'},
    {tr:'Kde je...?',pr:'gdyeh yeh',en:'Where is...?',c:'Directions'},
    {tr:'Vpravo',pr:'FPRAH-voh',en:'to the right',c:'Directions'},
    {tr:'Vľavo',pr:'FVLAH-voh',en:'to the left',c:'Directions'},
    {tr:'Rovno',pr:'ROV-noh',en:'straight ahead',c:'Directions'},
    {tr:'Stanica',pr:'STAH-nee-tsah',en:'the station',c:'Directions'},
    {tr:'Koľko to stojí?',pr:'KOL-koh toh STOH-yee',en:'how much is it?',c:'Shopping'},
    {tr:'Toaleta',pr:'toh-ah-LEH-tah',en:'the bathroom',c:'Shopping'},
    {tr:'Drahé',pr:'DRAH-heh',en:'expensive',c:'Shopping'},
    {tr:'Pomoc!',pr:'POH-mots',en:'Help!',c:'Emergency'},
    {tr:'Nerozumiem',pr:'nyeh-roh-ZOO-myem',en:'I don\'t understand',c:'Emergency'},
    {tr:'Nehovorím po slovensky',pr:'nyeh-HOH-voh-reem poh SLOH-ven-skee',en:'I don\'t speak Slovak',c:'Emergency'},
    {tr:'Potrebujem pomoc',pr:'POH-treh-boo-yem POH-mots',en:'I need help',c:'Emergency'},
    {tr:'Dnes',pr:'dnyes',en:'today',c:'Time'},
    {tr:'Zajtra',pr:'ZAI-trah',en:'tomorrow',c:'Time'},
    {tr:'Koľko je hodín?',pr:'KOL-koh yeh HOH-deen',en:'what time is it?',c:'Time'},
    {tr:'Letisko',pr:'LEH-tees-koh',en:'the airport',c:'Travel'},
    {tr:'Pas',pr:'pahs',en:'the passport',c:'Travel'},
    {tr:'Lístok',pr:'LEES-tok',en:'the ticket',c:'Travel'},
    {tr:'Taxi',pr:'TAHK-see',en:'the taxi',c:'Travel'},
    {tr:'Hotel',pr:'HOH-tel',en:'the hotel',c:'Travel'},
    {tr:'Mám rezerváciu',pr:'maam reh-zehr-VAA-tsyoo',en:'I have a reservation',c:'Travel'},
    {tr:'Pomalšie, prosím',pr:'POH-mal-shyeh, PROH-seem',en:'Slower, please',c:'Travel'},
    {tr:'Hovoríte po anglicky?',pr:'hoh-voh-REE-teh poh AHNG-lits-kee',en:'Do you speak English?',c:'Travel'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Shopping','Emergency','Time','Travel'],
  culture: [
    {icon:'🏔️',title:'The Tatras',body:'The High Tatras are Slovakia\'s alpine jewel — jagged peaks, lakes and some of the best hiking in Central Europe. In winter they become a ski and snowboard playground. Bratislava is on the Danube in the west, but the mountains are a short trip away.'},
    {icon:'🇨🇿',title:'Close to Czech',body:'Slovak is West Slavic, a sibling of Czech. The two languages are so close that speakers understand each other with ease — older Slovak and Czech texts are even closer still. If you learn Slovak, Czech is nearly a free bonus.'},
    {icon:'🪕',title:'Folk culture',body:'Folk traditions run deep: vivid embroidery, wooden architecture, and the <b>fujara</b>, a long shepherd\'s flute that UNESCO lists as a masterwork. Villages keep their own songs, dances and costumes, and festivals celebrate them all summer.'},
    {icon:'🥣',title:'Bryndzové halušky',body:'The national dish is <b>bryndzové halušky</b> — potato dumplings with sheep\'s cheese and a little bacon. Hearty, cheap and everywhere. Other classics include goulash, sauerkraut soup and stuffed cabbage rolls.'},
    {icon:'🍺',title:'A beer & wine nation',body:'Beer is cheap and flows freely in <b>pivnica</b>s (beer rooms), and Slovakia also makes great wine — the most famous being the sweet Tokaj from the south-east. Ordering a local drink is a great way to connect.'},
    {icon:'💬',title:'A little Slovak goes far',body:'Slovaks light up when visitors try their language. A \'dobrý deň\' and \'ďakujem\' open every door, and even a shaky attempt brings warm smiles. Effort matters far more than perfection.'}
  ],
  sounds: [
    {l:'ľ',say:'a soft "l", like "li" in million',ex:'ľúbim = LYOO-bim (I love)',voice:'ľúbim'},
    {l:'ô',say:'a glide from "u" into "o", like "wo"',ex:'môžem = MWO-zhem (I can)',voice:'môžem'},
    {l:'ä',say:'a short "e" sound, between a and e',ex:'päť = pyaht (five)',voice:'päť'},
    {l:'š',say:'"sh" as in shoe',ex:'šesť = shest (six)',voice:'šesť'},
    {l:'ž',say:'"zh" as in pleasure',ex:'žena = ZHEH-nah (woman)',voice:'žena'},
    {l:'č',say:'"ch" as in church',ex:'čaj = chai (tea)',voice:'čaj'},
    {l:'ch',say:'a breathy "h", like Scottish loch',ex:'chlieb = khlyeb (bread)',voice:'chlieb'},
    {l:'c',say:'"ts" as in cats',ex:'cena = TSEH-nah (price)',voice:'cena'}
  ],
  resources: [
    {icon:'🗣️',t:'Easy Slovak',d:'Real street interviews with native speakers and subtitles — ideal for natural Slovak.',q:'Easy Slovak street interviews'},
    {icon:'🐢',t:'Slovak with Katka',d:'Slow, friendly everyday-Slovak lessons from a native speaker.',q:'learn Slovak slow Katka'},
    {icon:'📚',t:'Slovak A1 for beginners',d:'Structured beginner lessons in short, bite-size videos.',q:'Slovak A1 for beginners'},
    {icon:'💬',t:'Learn Slovak with Táňa',d:'Conversational Slovak built from everyday situations.',q:'Learn Slovak Táňa'},
    {icon:'🎧',t:'Slovak for travellers',d:'Essential phrases for a trip to Slovakia, from greetings to food.',q:'Slovak phrases for travellers'}
  ]
};
