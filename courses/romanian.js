/* ---- romanian ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["romanian"] = {
  name: 'Romanian',
  flag: '🇷🇴',
  tts: 'ro-RO',
  dir: 'ltr',
  native: 'Română',
  script: 'Latin with diacritics',
  soundTitle: 'Romanian sounds & spelling',
  soundIntro: 'Romanian has five extra letters (ă, â/î, ș, ț) but besides those it is very phonetic — learn them and you can read any word aloud.',
  grammar: '<p>Romanian is a Romance language and mostly phonetic: each letter is said the way it is written. It has <b>three</b> genders (masculine, feminine, neuter) and, unusually, the definite article attaches to the end of the word: <i>un om</i> (a man) → <i>omul</i> (the man). The extra letters <b>ă</b>, <b>â/î</b>, <b>ș</b> and <b>ț</b> carry its distinctive sounds.</p>',
  bridges: '<div class="note">🇮🇹 <b>Italian.</b> Romanian is a close cousin of Italian: <i>apă</i> ≈ acqua (water), <i>pâine</i> ≈ pane (bread), <i>vin</i> ≈ vino (wine), <i>bine</i> ≈ bene (well).</div><div class="note">🇪🇸 <b>Spanish.</b> You\'ll spot Spanish too: <i>apă</i> ≈ agua, <i>vin</i> ≈ vino, <i>frate</i> ≈ hermano. If you already know Italian or Spanish, you\'re halfway to Romanian.</div>',
  lessons: [
    { id:1, title:'Greetings & being polite', focus:'salut · bună ziua · mulțumesc · te rog',
      steps:[
        {t:'say',text:'Let\'s start with the friendliest greeting: <span class="inline-tr">Salut</span> — hi. Say it out loud.',tr:'salut'},
        {t:'words',items:[{tr:'salut',pr:'sah-LOOT',en:'hi',link:'≈ French salut / Italian salve'},{tr:'bună ziua',pr:'BOO-nuh ZEE-wah',en:'good day'},{tr:'bună seara',pr:'BOO-nuh SYAH-rah',en:'good evening'},{tr:'mulțumesc',pr:'mool-tsoo-MESK',en:'thank you'},{tr:'te rog',pr:'teh ROHG',en:'please'}]},
        {t:'chal',en:'Hello, thank you',tr:'Salut, mulțumesc',pr:'sah-LOOT, mool-tsoo-MESK',morph:['salut = hi','mulțumesc = thank you']},
        {t:'say',text:'Two more essentials: <span class="inline-tr">te rog</span> (please) and <span class="inline-tr">la revedere</span> (goodbye).',tr:'la revedere'},
        {t:'chal',en:'A coffee, please',tr:'O cafea, te rog',pr:'oh kah-FYAH, teh ROHG',morph:['o = a','cafea = coffee','te rog = please']},
        {t:'say',text:'To ask how someone is: <span class="inline-tr">Ce mai faci?</span> (informal). The reply is <span class="inline-tr">bine, mulțumesc</span> — well, thanks.',tr:'Ce mai faci?'},
        {t:'words',items:[{tr:'Ce mai faci?',pr:'cheh mai fahch',en:'How are you?'},{tr:'Bine, mulțumesc',pr:'BEE-neh, mool-tsoo-MESK',en:'Well, thanks'},{tr:'Foarte bine',pr:'FWAHR-teh BEE-neh',en:'Very well'}]},
        {t:'chal',en:'Hi, how are you?',tr:'Salut, ce mai faci?',pr:'sah-LOOT, cheh mai fahch',morph:['salut = hi','ce mai faci? = how are you?']}
      ],
      blocks:['<code>salut</code> = hi','<code>bună ziua</code> = good day','<code>mulțumesc</code> = thank you · <code>te rog</code> = please','<code>la revedere</code> = goodbye'] },
    { id:2, title:'Being polite', focus:'mulțumesc · te rog · cu plăcere · îmi pare rău',
      steps:[
        {t:'say',text:'Being polite opens doors. <span class="inline-tr">Mulțumesc</span> — thank you — is your golden word.',tr:'mulțumesc'},
        {t:'words',items:[{tr:'mulțumesc',pr:'mool-tsoo-MESK',en:'thank you'},{tr:'cu plăcere',pr:'koo pluh-CHEH-reh',en:'you\'re welcome'},{tr:'te rog',pr:'teh ROHG',en:'please'},{tr:'îmi pare rău',pr:'uhm pah-reh RUH-oo',en:'I\'m sorry'},{tr:'scuză-mă',pr:'SKOO-zuh-muh',en:'excuse me'}]},
        {t:'chal',en:'Thank you very much',tr:'Mulțumesc mult',pr:'mool-tsoo-MESK moolt',morph:['mulțumesc = thank you','mult = much']},
        {t:'say',text:'<span class="inline-tr">Da</span> is yes and <span class="inline-tr">Nu</span> is no. <span class="inline-tr">Cu plăcere</span> means \'with pleasure\' — your \'you\'re welcome\'.',tr:'cu plăcere'},
        {t:'chal',en:'Yes, please',tr:'Da, te rog',pr:'dah, teh ROHG',morph:['da = yes','te rog = please']},
        {t:'say',text:'To apologize: <span class="inline-tr">Îmi pare rău</span> — I\'m sorry.',tr:'Îmi pare rău'},
        {t:'chal',en:'I\'m sorry, excuse me',tr:'Îmi pare rău, scuză-mă',pr:'uhm pah-reh RUH-oo, SKOO-zuh-muh',morph:['îmi pare rău = I\'m sorry','scuză-mă = excuse me']}
      ],
      blocks:['<code>mulțumesc</code> = thank you','<code>te rog</code> = please','<code>cu plăcere</code> = you\'re welcome','<code>îmi pare rău</code> = I\'m sorry'] },
    { id:3, title:'Numbers 1–10', focus:'unu · doi · trei · zece',
      steps:[
        {t:'say',text:'Numbers are the fastest win. Listen and repeat: <span class="inline-tr">unu, doi, trei</span>.',tr:'unu'},
        {t:'words',items:[{tr:'unu',pr:'OO-noo',en:'1'},{tr:'doi',pr:'doy',en:'2'},{tr:'trei',pr:'tray',en:'3',link:'≈ Italian tre / Spanish tres'},{tr:'patru',pr:'PAH-troo',en:'4'},{tr:'cinci',pr:'cheench',en:'5'},{tr:'zece',pr:'ZEH-cheh',en:'10'}]},
        {t:'chal',en:'Two coffees, please',tr:'Două cafele, te rog',pr:'DOH-uh kah-FEH-leh, teh ROHG',morph:['două = two','cafele = coffees','te rog = please']},
        {t:'say',text:'<span class="inline-tr">Cât costă?</span> = how much does it cost? A key phrase for shopping.',tr:'Cât costă?'},
        {t:'chal',en:'How much is it?',tr:'Cât costă?',pr:'kuht KOS-tuh',morph:['cât = how much','costă = does it cost']},
        {t:'chal',en:'It\'s five lei',tr:'Cinci lei',pr:'cheench lay',morph:['cinci = five','lei = lei (the currency)']}
      ],
      blocks:['unu, doi, trei, patru, cinci = 1–5','<code>cât costă?</code> = how much is it?'] },
    { id:4, title:'"I want" — the verb a vrea', focus:'aș vrea · vreau · un · o',
      steps:[
        {t:'say',text:'The magic phrase to order anything: <span class="inline-tr">aș vrea</span> — I would like. More polite than <span class="inline-tr">vreau</span> (I want).',tr:'aș vrea'},
        {t:'words',items:[{tr:'aș vrea',pr:'ahsh VRYAH',en:'I\'d like'},{tr:'vreau',pr:'VROW',en:'I want'},{tr:'un',pr:'oon',en:'a (masculine)'},{tr:'o',pr:'oh',en:'a (feminine)'},{tr:'apă',pr:'AH-puh',en:'water',link:'≈ Italian acqua / Spanish agua'}]},
        {t:'chal',en:'I\'d like a coffee',tr:'Aș vrea o cafea',pr:'ahsh VRYAH oh kah-FYAH',morph:['aș vrea = I\'d like','o cafea = a coffee']},
        {t:'chal',en:'I\'d like a water',tr:'Aș vrea o apă',pr:'ahsh VRYAH oh AH-puh',morph:['aș vrea = I\'d like','o apă = a water']},
        {t:'say',text:'Word order is easy — <span class="inline-tr">un</span> = a for masculine nouns, <span class="inline-tr">o</span> for feminine ones like <b>cafea</b> and <b>apă</b>.',tr:'un'},
        {t:'chal',en:'I want bread',tr:'Vreau pâine',pr:'VROW PUH-ee-neh',morph:['vreau = I want','pâine = bread']}
      ],
      blocks:['<code>aș vrea</code> = I would like','<code>vreau</code> = I want','<code>un / o</code> = a (masc / fem)'] },
    { id:5, title:'Food & drink', focus:'apă · pâine · vin · nota',
      steps:[
        {t:'say',text:'Eating out? Key words: <span class="inline-tr">apă</span> (water), <span class="inline-tr">pâine</span> (bread), <span class="inline-tr">vin</span> (wine).',tr:'apă'},
        {t:'words',items:[{tr:'apă',pr:'AH-puh',en:'water'},{tr:'pâine',pr:'PUH-ee-neh',en:'bread'},{tr:'vin',pr:'vin',en:'wine',link:'≈ Italian/Spanish vino'},{tr:'cafea',pr:'kah-FYAH',en:'coffee',link:'≈ French café / Italian caffè'},{tr:'meniu',pr:'meh-NYOO',en:'the menu',link:'≈ English/French menu'},{tr:'nota',pr:'NOH-tah',en:'the bill',link:'≈ French note / Latin nota'}]},
        {t:'chal',en:'Water and bread, please',tr:'Apă și pâine, te rog',pr:'AH-puh shee PUH-ee-neh, teh ROHG',morph:['apă = water','și = and','pâine = bread','te rog = please']},
        {t:'chal',en:'I\'d like the menu',tr:'Aș vrea meniul',pr:'ahsh VRYAH meh-NYOOL',morph:['aș vrea = I\'d like','meniul = the menu']},
        {t:'say',text:'<span class="inline-tr">Nota</span> is the bill: <span class="inline-tr">Aș vrea nota</span> = I\'d like the bill.',tr:'nota'},
        {t:'say',text:'<span class="inline-tr">Delicios!</span> = delicious. Say it and you\'ll make the chef\'s day.',tr:'delicios'},
        {t:'chal',en:'It\'s delicious!',tr:'Delicios!',pr:'deh-lee-CHOS',morph:['delicios = delicious']}
      ],
      blocks:['<code>apă</code>, <code>pâine</code>, <code>vin</code> = water, bread, wine','<code>nota</code> = the bill','<code>delicios</code> = delicious'] },
    { id:6, title:'Getting around', focus:'unde este · la dreapta · la stânga · gara',
      steps:[
        {t:'say',text:'The most useful question in any city: <span class="inline-tr">Unde este…?</span> — where is…?',tr:'Unde este?'},
        {t:'words',items:[{tr:'Unde este...?',pr:'OON-deh ES-teh',en:'Where is...?'},{tr:'la dreapta',pr:'lah DRYAP-tah',en:'to the right'},{tr:'la stânga',pr:'lah STUHN-gah',en:'to the left'},{tr:'gara',pr:'GAH-rah',en:'the station'},{tr:'toaleta',pr:'twah-LEH-tah',en:'the bathroom'}]},
        {t:'chal',en:'Where is the station?',tr:'Unde este gara?',pr:'OON-deh ES-teh GAH-rah',morph:['unde este = where is','gara = the station']},
        {t:'chal',en:'Where is the bathroom?',tr:'Unde este toaleta?',pr:'OON-deh ES-teh twah-LEH-tah',morph:['unde este = where is','toaleta = the bathroom']},
        {t:'say',text:'<span class="inline-tr">La dreapta</span> and <span class="inline-tr">la stânga</span> tell you which way to turn. \'Straight ahead\' is <span class="inline-tr">drept înainte</span>.',tr:'drept înainte'},
        {t:'chal',en:'Straight ahead',tr:'Drept înainte',pr:'drehpt uhn-NAYN-teh',morph:['drept = straight','înainte = ahead']}
      ],
      blocks:['<code>unde este…?</code> = where is…?','<code>la dreapta</code> / <code>la stânga</code> = right / left'] },
    { id:7, title:'Questions & "do you have…?"', focus:'aveți · există · pot',
      steps:[
        {t:'say',text:'To ask someone if they have something: <span class="inline-tr">Aveți…?</span> (formal) or <span class="inline-tr">Ai…?</span> (informal).',tr:'aveți'},
        {t:'chal',en:'Do you have a table?',tr:'Aveți o masă?',pr:'ah-VEH-tsih oh MAH-suh',morph:['aveți = do you have','o masă = a table']},
        {t:'say',text:'<span class="inline-tr">Există…?</span> = is there…? Very useful.',tr:'există'},
        {t:'chal',en:'Is there wifi?',tr:'Există Wi-Fi?',pr:'egz-EES-tuh WEE-fee',morph:['există = is there','Wi-Fi = wifi']},
        {t:'say',text:'<span class="inline-tr">Pot…?</span> = may I…? For polite requests.',tr:'pot'},
        {t:'chal',en:'May I pay?',tr:'Pot să plătesc?',pr:'pot suh pluh-TESK',morph:['pot = may I','să plătesc = to pay']}
      ],
      blocks:['<code>aveți…?</code> = do you have…?','<code>există…?</code> = is there…?','<code>pot…?</code> = may I…?'] },
    { id:8, title:'Family & people', focus:'familie · mamă · tată · prieten',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">familie</span> (family), <span class="inline-tr">mamă</span> (mother), <span class="inline-tr">tată</span> (father).',tr:'familie'},
        {t:'words',items:[{tr:'familie',pr:'fah-MEE-lee-eh',en:'family',link:'≈ Italian famiglia / Spanish familia'},{tr:'mamă',pr:'MAH-muh',en:'mother'},{tr:'tată',pr:'TAH-tuh',en:'father'},{tr:'frate',pr:'FRAH-teh',en:'brother'},{tr:'soră',pr:'SOH-ruh',en:'sister'},{tr:'prieten',pr:'pree-EH-ten',en:'friend'}]},
        {t:'chal',en:'I have a friend',tr:'Am un prieten',pr:'ahm oon pree-EH-ten',morph:['am = I have','un prieten = a friend']},
        {t:'say',text:'<span class="inline-tr">Am</span> = I have. It\'s the key verb to say what you\'ve got.',tr:'am'},
        {t:'chal',en:'I have a family',tr:'Am o familie',pr:'ahm oh fah-MEE-lee-eh',morph:['am = I have','o familie = a family']},
        {t:'chal',en:'She is my mother',tr:'Ea este mama mea',pr:'yah ES-teh MAH-muh myah',morph:['ea = she','este = is','mama = mother','mea = my']}
      ],
      blocks:['<code>mamă</code> / <code>tată</code> = mother / father','<code>frate</code> / <code>soră</code> = brother / sister','<code>am</code> = I have'] },
    { id:9, title:'Time, days & weather', focus:'azi · mâine · ce vreme e?',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">azi</span>, tomorrow is <span class="inline-tr">mâine</span>.',tr:'azi'},
        {t:'words',items:[{tr:'azi',pr:'ahz',en:'today'},{tr:'mâine',pr:'MUH-ee-neh',en:'tomorrow'},{tr:'luni',pr:'loon',en:'Monday'},{tr:'vineri',pr:'VEE-neh-ree',en:'Friday'},{tr:'Ce vreme e?',pr:'cheh VREH-meh yeh',en:'what\'s the weather?'}]},
        {t:'chal',en:'See you tomorrow',tr:'Pe mâine',pr:'peh MUH-ee-neh',morph:['pe = until','mâine = tomorrow']},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">Ce vreme e?</span>',tr:'Ce vreme e?'},
        {t:'chal',en:'It\'s raining',tr:'Plouă',pr:'PLOH-uh',morph:['plouă = it rains']},
        {t:'chal',en:'It\'s sunny',tr:'E soare',pr:'yeh SWAH-reh',morph:['e = it is','soare = sun']}
      ],
      blocks:['<code>azi</code> / <code>mâine</code> = today / tomorrow','<code>ce vreme e?</code> = what\'s the weather?','<code>plouă</code> = it\'s raining'] },
    { id:10, title:'Small talk & your name', focus:'mă numesc · cum te cheamă · încântat',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">Mă numesc…</span> = my name is…, and <span class="inline-tr">Încântat</span> (m) / <span class="inline-tr">Încântată</span> (f) = pleased to meet you.',tr:'Mă numesc'},
        {t:'chal',en:'My name is __NAME__',tr:'Mă numesc __NAME__',pr:'muh noo-MESK __NAME__',morph:['mă numesc = my name is','__NAME__ = your name']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">Cum te cheamă?</span>',tr:'Cum te cheamă?'},
        {t:'chal',en:'What\'s your name?',tr:'Cum te cheamă?',pr:'koom teh KYAH-muh',morph:['cum = how','te cheamă? = do they call you?']},
        {t:'say',text:'<span class="inline-tr">De unde ești?</span> — where are you from?',tr:'De unde ești?'},
        {t:'chal',en:'I\'m from America',tr:'Sunt din America',pr:'soont deen ah-MEH-ree-kah',morph:['sunt = I am','din = from']},
        {t:'chal',en:'Pleased to meet you',tr:'Încântat',pr:'uhn-kuhn-TAHT',morph:['încântat = pleased']}
      ],
      blocks:['<code>mă numesc…</code> = my name is…','<code>cum te cheamă?</code> = what\'s your name?','<code>încântat</code> = pleased to meet you'] },
    { id:11, title:'Health & emergency', focus:'ajutor · doctor · farmacie · nu înțeleg',
      steps:[
        {t:'say',text:'The most important words if you need help: <span class="inline-tr">ajutor</span> (help), <span class="inline-tr">doctor</span> (doctor), <span class="inline-tr">farmacie</span> (pharmacy).',tr:'ajutor'},
        {t:'words',items:[{tr:'ajutor',pr:'ah-zhoo-TOR',en:'help!'},{tr:'doctor',pr:'dok-TOR',en:'the doctor',link:'≈ English doctor / Italian dottore'},{tr:'farmacie',pr:'far-mah-CHEE-eh',en:'the pharmacy',link:'≈ French pharmacie / English pharmacy'},{tr:'Nu înțeleg',pr:'noo uhn-tseh-LEG',en:'I don\'t understand'},{tr:'spital',pr:'spee-TAHL',en:'the hospital'}]},
        {t:'chal',en:'Help!',tr:'Ajutor!',pr:'ah-zhoo-TOR',morph:['ajutor = help']},
        {t:'chal',en:'I don\'t understand',tr:'Nu înțeleg',pr:'noo uhn-tseh-LEG',morph:['nu = not','înțeleg = I understand']},
        {t:'say',text:'To say you need help: <span class="inline-tr">Am nevoie de ajutor</span>.',tr:'Am nevoie de ajutor'},
        {t:'chal',en:'I need help',tr:'Am nevoie de ajutor',pr:'ahm neh-VOH-yeh deh ah-zhoo-TOR',morph:['am nevoie = I need','de ajutor = of help']}
      ],
      blocks:['<code>ajutor</code> = help','<code>doctor</code> = the doctor','<code>nu înțeleg</code> = I don\'t understand'] },
    { id:12, title:'Tying it together', focus:'aș vrea · unde este · cât costă · mulțumesc',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolbox. This capstone uses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello, how are you?',tr:'Salut, ce mai faci?',pr:'sah-LOOT, cheh mai fahch',morph:['salut = hi','ce mai faci? = how are you?']},
        {t:'chal',en:'I\'d like a water, please',tr:'Aș vrea o apă, te rog',pr:'ahsh VRYAH oh AH-puh, teh ROHG',morph:['aș vrea = I\'d like','o apă = a water','te rog = please']},
        {t:'chal',en:'Where is the station?',tr:'Unde este gara?',pr:'OON-deh ES-teh GAH-rah',morph:['unde este = where is','gara = the station']},
        {t:'chal',en:'How much is it?',tr:'Cât costă?',pr:'kuht KOS-tuh',morph:['cât costă? = how much is it?']},
        {t:'chal',en:'Delicious! Thank you!',tr:'Delicios! Mulțumesc!',pr:'deh-lee-CHOS, mool-tsoo-MESK',morph:['delicios = delicious','mulțumesc = thank you']}
      ],
      blocks:['You built: greetings, ordering, directions, prices, thanks — a full day out in Romanian.'] },
    { id:13, title:'Airport & tickets', focus:'aeroport · pașaport · bilet · poartă',
      steps:[
        {t:'say',text:'You have landed. The building is the <span class="inline-tr">aeroportul</span>. Your document is a <span class="inline-tr">pașaportul</span>.',tr:'aeroportul'},
        {t:'words',items:[{tr:'aeroportul',pr:'ah-eh-ro-POR-tool',en:'the airport'},{tr:'pașaportul',pr:'pah-sha-POR-tool',en:'the passport'},{tr:'biletul',pr:'bee-LEH-tool',en:'the ticket'},{tr:'poarta',pr:'PWAR-tah',en:'the gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'Unde este aeroportul?',pr:'OON-deh ES-teh ah-eh-ro-POR-tool',morph:['unde este = where is','aeroportul = the airport']},
        {t:'chal',en:'Here is my passport',tr:'Iată pașaportul meu',pr:'YAH-tuh pah-sha-POR-tool meh-oo',morph:['iată = here is','pașaportul meu = my passport']},
        {t:'chal',en:'A ticket, please',tr:'Un bilet, te rog',pr:'oon bee-LET, teh ROHG',morph:['un bilet = a ticket','te rog = please']},
        {t:'chal',en:'Where is the gate?',tr:'Unde este poarta?',pr:'OON-deh ES-teh PWAR-tah',morph:['unde este = where is','poarta = the gate']}
      ],
      blocks:['<code>aeroportul</code> = the airport','<code>pașaportul</code> = the passport','<code>biletul</code> = the ticket'] },
    { id:14, title:'The taxi', focus:'taxi · hotel · opriți',
      steps:[
        {t:'say',text:'The driver is waiting. <span class="inline-tr">taxi</span> is the same word. Tell them <span class="inline-tr">aș vrea să merg la hotel</span>.',tr:'taxi'},
        {t:'words',items:[{tr:'taxi',pr:'TAK-see',en:'taxi'},{tr:'șoferul',pr:'sho-FEH-rool',en:'the driver'},{tr:'aș vrea să merg',pr:'ahsh VRYAH suh MERJ',en:'I would like to go'},{tr:'opriți aici',pr:'o-PREE-tsee ah-EECH',en:'stop here'}]},
        {t:'chal',en:'Taxi, please',tr:'Un taxi, te rog',pr:'oon TAK-see, teh ROHG',morph:['un taxi = a taxi','te rog = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'aș vrea să merg la hotel',pr:'ahsh VRYAH suh MERJ lah ho-TEL',morph:['aș vrea = I would like','să merg = to go','la hotel = to the hotel']},
        {t:'chal',en:'Stop here, please',tr:'Opriți aici, te rog',pr:'o-PREE-tsee ah-EECH, teh ROHG',morph:['opriți = stop (plural/polite)','aici = here','te rog = please']},
        {t:'chal',en:'How much is it?',tr:'Cât costă?',pr:'kuht kos-TUH',morph:['cât = how much','costă = does it cost']}
      ],
      blocks:['<code>aș vrea să merg la …</code> = I would like to go to …','<code>opriți aici</code> = stop here'] },
    { id:15, title:'The hotel', focus:'rezervare · cameră · cheie · noapte',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">am o rezervare</span> — I have a reservation.',tr:'rezervare'},
        {t:'words',items:[{tr:'hotelul',pr:'ho-TEH-lool',en:'the hotel'},{tr:'o rezervare',pr:'oh reh-zer-VAH-reh',en:'a reservation'},{tr:'o cameră',pr:'oh kah-MEH-ruh',en:'a room'},{tr:'cheia',pr:'KAY-yah',en:'the key'},{tr:'o noapte',pr:'oh NWAHP-teh',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'Am o rezervare',pr:'ahm oh reh-zer-VAH-reh',morph:['am = I have','o rezervare = a reservation']},
        {t:'chal',en:'A room for one night, please',tr:'O cameră pentru o noapte, te rog',pr:'oh kah-MEH-ruh PEN-troo oh NWAHP-teh, teh ROHG',morph:['o cameră = a room','pentru o noapte = for one night','te rog = please']},
        {t:'chal',en:'The key, please',tr:'Cheia, te rog',pr:'KAY-yah, teh ROHG',morph:['cheia = the key','te rog = please']},
        {t:'chal',en:'Where is my room?',tr:'Unde este camera mea?',pr:'OON-deh ES-teh KAH-meh-rah MEH-ah',morph:['unde este = where is','camera mea = my room']}
      ],
      blocks:['<code>rezervare</code> = reservation','<code>cameră</code> = room','<code>cheia</code> = the key'] },
    { id:16, title:'Ask for help', focus:'nu înțeleg · mai încet · engleză',
      steps:[
        {t:'say',text:'When Romanian is too fast: <span class="inline-tr">mai încet, te rog</span> — slower, please.',tr:'mai încet'},
        {t:'words',items:[{tr:'mai încet',pr:'my EEN-chet',en:'slower'},{tr:'din nou',pr:'deen NOH',en:'again'},{tr:'engleză',pr:'en-GLEH-zuh',en:'English'},{tr:'mă puteți ajuta?',pr:'muh poo-TET-see ah-ZHOO-tah',en:'can you help?'}]},
        {t:'chal',en:'I don\'t understand',tr:'Nu înțeleg',pr:'noo uhn-TZEH-leg',morph:['nu = not','înțeleg = I understand']},
        {t:'chal',en:'Speak slowly, please',tr:'Mai încet, te rog',pr:'my EEN-chet, teh ROHG',morph:['mai încet = slower','te rog = please']},
        {t:'chal',en:'Can you help me?',tr:'Mă puteți ajuta?',pr:'muh poo-TET-see ah-ZHOO-tah',morph:['mă = me','puteți = can you','ajuta = help']},
        {t:'chal',en:'Do you speak English?',tr:'Vorbiți engleză?',pr:'vor-BEET-see en-GLEH-zuh',morph:['vorbiți = do you speak','engleză = English']}
      ],
      blocks:['<code>mai încet</code> = slower','<code>vorbiți engleză?</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'cafe', title:'☕ At a café', emoji:'☕', turns:[
      {who:'You',tr:'Bună ziua! O cafea, te rog.',pr:'BOO-nuh ZEE-wah, oh kah-FYAH, teh ROHG',en:'Good day! A coffee, please.'},
      {who:'Barista',tr:'Imediat. La masă sau la pachet?',pr:'ee-meh-DYAHT, lah MAH-suh sa-hoo lah PAH-ket',en:'Right away. For here or to go?'},
      {who:'You',tr:'La pachet, mulțumesc.',pr:'lah PAH-ket, mool-tsoo-MESK',en:'To go, thanks.'},
      {who:'Barista',tr:'Poftim. Sunt doi lei.',pr:'pof-TEEM, soont doy lay',en:'Here. That\'s two lei.'},
      {who:'You',tr:'Mulțumesc mult!',pr:'mool-tsoo-MESK moolt',en:'Thanks a lot!'}
    ]},
    { id:'transport', title:'🚉 At the station', emoji:'🚉', turns:[
      {who:'You',tr:'Scuzați, unde este gara?',pr:'skoo-ZAH-tsih, OON-deh ES-teh GAH-rah',en:'Excuse me, where\'s the station?'},
      {who:'Local',tr:'E aici, la dreapta.',pr:'yeh ah-EECH, lah DRYAP-tah',en:'It\'s here, on the right.'},
      {who:'You',tr:'Mulțumesc. Un bilet spre București, te rog.',pr:'mool-tsoo-MESK, oon bee-LET spreh boo-koo-RESH-tee, teh ROHG',en:'Thanks. A ticket to Bucharest, please.'},
      {who:'Ticket',tr:'Douăzeci de lei. Trenul pleacă la ora nouă.',pr:'DOH-uh-zech deh lay, TREH-nool PLYAH-kuh lah OH-rah NOH-uh',en:'Twenty lei. The train leaves at nine.'}
    ]},
    { id:'restaurant', title:'🍝 At a restaurant', emoji:'🍝', turns:[
      {who:'Waiter',tr:'Bună seara! Aveți o rezervare?',pr:'BOO-nuh SYAH-rah, ah-VEH-tsih oh reh-zer-VAH-reh',en:'Good evening! Do you have a reservation?'},
      {who:'You',tr:'Da, pentru două persoane.',pr:'dah, PEHN-troo DOH-uh per-SWAH-neh',en:'Yes, for two people.'},
      {who:'You',tr:'Meniul, te rog.',pr:'meh-NYOOL, teh ROHG',en:'The menu, please.'},
      {who:'You',tr:'Aș vrea ciorba și un pahar de vin.',pr:'ahsh VRYAH chyor-BAH shee oon PAH-har deh vin',en:'I\'d like the soup and a glass of wine.'},
      {who:'Waiter',tr:'O alegere excelentă! Poftă bună.',pr:'oh ah-LEH-jeh-reh eks-cheh-LEN-tuh, pof-TUH BOO-nuh',en:'Excellent choice! Enjoy your meal.'}
    ]},
    { id:'shop', title:'🛍️ Shopping', emoji:'🛍️', turns:[
      {who:'You',tr:'Cât costă asta?',pr:'kuht KOS-tuh AS-tah',en:'How much is this?'},
      {who:'Seller',tr:'Douăzeci de lei.',pr:'DOH-uh-zech deh lay',en:'Twenty lei.'},
      {who:'You',tr:'E prea scump. Pot să-l probez?',pr:'yeh preh-ah skoomp, pot suh-l proh-BEZ',en:'It\'s too expensive. Can I try it on?'},
      {who:'Seller',tr:'Sigur! Cabina de probă e aici.',pr:'SEE-goor, kah-BEE-nah deh PROH-buh yeh ah-EECH',en:'Of course! The fitting room is here.'},
      {who:'You',tr:'Bine, îl iau.',pr:'BEE-neh, uhl YOW',en:'OK, I\'ll take it.'}
    ]}
  ],
  pocket: [
    {tr:'Salut',pr:'sah-LOOT',en:'Hi',c:'Greetings'},
    {tr:'Bună ziua',pr:'BOO-nuh ZEE-wah',en:'Good day',c:'Greetings'},
    {tr:'Bună seara',pr:'BOO-nuh SYAH-rah',en:'Good evening',c:'Greetings'},
    {tr:'La revedere',pr:'lah reh-veh-DEH-reh',en:'Goodbye',c:'Greetings'},
    {tr:'Ce mai faci?',pr:'cheh mai fahch',en:'How are you?',c:'Greetings'},
    {tr:'Mă numesc __NAME__',pr:'muh noo-MESK',en:'My name is...',c:'Greetings'},
    {tr:'Te rog',pr:'teh ROHG',en:'Please',c:'Courtesy'},
    {tr:'Mulțumesc',pr:'mool-tsoo-MESK',en:'Thank you',c:'Courtesy'},
    {tr:'Cu plăcere',pr:'koo pluh-CHEH-reh',en:'You\'re welcome',c:'Courtesy'},
    {tr:'Îmi pare rău',pr:'uhm pah-reh RUH-oo',en:'I\'m sorry',c:'Courtesy'},
    {tr:'Da',pr:'dah',en:'Yes',c:'Courtesy'},
    {tr:'Nu',pr:'noo',en:'No',c:'Courtesy'},
    {tr:'Unu',pr:'OO-noo',en:'1',c:'Numbers'},
    {tr:'Doi',pr:'doy',en:'2',c:'Numbers'},
    {tr:'Trei',pr:'tray',en:'3',c:'Numbers'},
    {tr:'Patru',pr:'PAH-troo',en:'4',c:'Numbers'},
    {tr:'Cinci',pr:'cheench',en:'5',c:'Numbers'},
    {tr:'Zece',pr:'ZEH-cheh',en:'10',c:'Numbers'},
    {tr:'Apă',pr:'AH-puh',en:'water',c:'Food'},
    {tr:'Pâine',pr:'PUH-ee-neh',en:'bread',c:'Food'},
    {tr:'Vin',pr:'vin',en:'wine',c:'Food'},
    {tr:'Cafea',pr:'kah-FYAH',en:'coffee',c:'Food'},
    {tr:'Nota',pr:'NOH-tah',en:'the bill',c:'Food'},
    {tr:'Unde este...?',pr:'OON-deh ES-teh',en:'Where is...?',c:'Directions'},
    {tr:'La dreapta',pr:'lah DRYAP-tah',en:'to the right',c:'Directions'},
    {tr:'La stânga',pr:'lah STUHN-gah',en:'to the left',c:'Directions'},
    {tr:'Gara',pr:'GAH-rah',en:'the station',c:'Directions'},
    {tr:'Cât costă?',pr:'kuht KOS-tuh',en:'how much is it?',c:'Shopping'},
    {tr:'E prea scump',pr:'yeh preh-ah skoomp',en:'it\'s too expensive',c:'Shopping'},
    {tr:'Pot să plătesc?',pr:'pot suh pluh-TESK',en:'may I pay?',c:'Shopping'},
    {tr:'Ajutor!',pr:'ah-zhoo-TOR',en:'Help!',c:'Emergency'},
    {tr:'Nu înțeleg',pr:'noo uhn-tseh-LEG',en:'I don\'t understand',c:'Emergency'},
    {tr:'Am nevoie de ajutor',pr:'ahm neh-VOH-yeh deh ah-zhoo-TOR',en:'I need help',c:'Emergency'},
    {tr:'Farmacie',pr:'far-mah-CHEE-eh',en:'the pharmacy',c:'Emergency'},
    {tr:'Azi',pr:'ahz',en:'today',c:'Time'},
    {tr:'Mâine',pr:'MUH-ee-neh',en:'tomorrow',c:'Time'},
    {tr:'Aeroportul',pr:'ah-eh-ro-POR-tool',en:'the airport',c:'Travel'},
    {tr:'Pașaportul meu',pr:'pah-sha-POR-tool meh-oo',en:'my passport',c:'Travel'},
    {tr:'aș vrea să merg la hotel',pr:'ahsh VRYAH suh MERJ lah ho-TEL',en:'I would like to go to the hotel',c:'Travel'},
    {tr:'Am o rezervare',pr:'ahm oh reh-zer-VAH-reh',en:'I have a reservation',c:'Travel'},
    {tr:'Mai încet, te rog',pr:'my EEN-chet, teh ROHG',en:'Slower, please',c:'Travel'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Shopping','Emergency','Time', 'Travel'],
  culture: [
    {icon:'🌹',title:'A Latin island',body:'Romanian is a Romance-language island surrounded by Slavic neighbours. If you know Italian, Spanish or French, you\'ll find words like apă (water), vin (wine) and prieten (friend) oddly familiar.'},
    {icon:'😊',title:'They love a guest',body:'Romanians are famously hospitable. You\'ll be offered a seat, a coffee and often a meal. Accepting with a warm mulțumesc goes a long way.'},
    {icon:'🍲',title:'Comfort food',body:'Sarmale (cabbage rolls), mămăligă (polenta) and ciorbă (sour soup) are staples. A Romanian meal is generous — come hungry.'},
    {icon:'☕',title:'Coffee is social',body:'Cafenele are a way of life. Ordering a simple cafea and lingering is perfectly normal — coffee here is for conversation, not just caffeine.'},
    {icon:'🤝',title:'Formality matters',body:'Use the formal dumneavoastră with strangers and older people. The informal tu is reserved for friends, and people usually offer it first.'},
    {icon:'🗣️',title:'A little goes far',body:'A bună ziua and a mulțumesc open every door. Romanians warm up fast when visitors try their language — effort beats perfection.'}
  ],
  sounds: [
    {l:'ă',say:'"uh" as in the last sound of "sofa"',ex:'apă = AH-puh · țară = TSAH-ruh',voice:'apă'},
    {l:'â / î',say:'a deep "uh", like the "e" in "herd"',ex:'română = ro-MUHN-uh · în = uhn',voice:'română'},
    {l:'ș',say:'"sh" as in shop',ex:'șase = SHAH-seh · și = shee',voice:'șase'},
    {l:'ț',say:'"ts" as in cats',ex:'țară = TSAH-ruh · mulțumesc = mool-tsoo-MESK',voice:'mulțumesc'},
    {l:'r',say:'a rolled or tapped r',ex:'român = ro-MUHN · revedere = reh-veh-DEH-reh',voice:'român'},
    {l:'c',say:'before e/i = "ch" as in church; else "k"',ex:'ceai = chah-i · casa = KAH-sah',voice:'ceai'},
    {l:'g',say:'before e/i = "j" as in jam; else hard "g"',ex:'geam = jahm · gata = GAH-tah',voice:'geam'},
    {l:'j',say:'"zh" as in leisure',ex:'jos = zhohs · jurnal = zhoor-NAHL',voice:'jos'}
  ],
  resources: [
    {icon:'🗣️',t:'Easy Romanian',d:'Real street interviews with native speakers and subtitles — ideal for natural, everyday Romanian.',q:'Easy Romanian street interviews'},
    {icon:'🐢',t:'Learn Romanian with Nico',d:'Clear, slow and friendly beginner lessons from a native Romanian speaker.',q:'Learn Romanian with Nico'},
    {icon:'📚',t:'RomanianPod101',d:'Structured audio and video lessons from true beginner level up — great for daily practice.',q:'RomanianPod101'},
    {icon:'💬',t:'Comprehensible Romanian stories',d:'Short stories and easy listening that build your ear naturally, without grammar tables.',q:'Romanian comprehensible input stories'},
    {icon:'🎧',t:'Slow Romanian podcasts',d:'Easy listening for learners — perfect for a walk or commute.',q:'slow Romanian podcast for learners'}
  ]
};
