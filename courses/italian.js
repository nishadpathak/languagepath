/* ---- italian ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["italian"] = {
  name: 'Italian',
  flag: '🇮🇹',
  tts: 'it-IT',
  dir: 'ltr',
  soundTitle: 'Italian sounds & spelling',
  soundIntro: 'Italian is nearly phonetic — every letter is pronounced. Learn these and you can read any word aloud.',
  grammar: '<p>Italian is very regular to spell: every vowel is pure and each letter is said the way it is written. <b>c</b> before <b>e/i</b> is \'ch\' as in <i>ciao</i>; <b>g</b> before <b>e/i</b> is \'j\' as in <i>gelato</i>. Double consonants are held longer: <i>pizza</i>.</p>',
  bridges: '<div class="note">🇬🇧 <b>English.</b> Italian is full of words you already know: pizza, pasta, cappuccino, grazie, hotel, taxi, ristorante, problema, telefono.</div><div class="note">🇪🇸 <b>Spanish.</b> Italian and Spanish are cousin languages — much of the vocabulary lines up.</div>',
  lessons: [
    { id:1, title:'Greetings & being polite', focus:'ciao · buongiorno · grazie · prego',
      steps:[
        {t:'say',text:'Let\'s start with the very first word you\'ll use: <span class="inline-tr">ciao</span> — hello (and goodbye). Say it out loud.',tr:'ciao'},
        {t:'words',items:[{tr:'ciao',pr:'CHOW',en:'hi / bye'},{tr:'buongiorno',pr:'bwon-JOR-noh',en:'good morning'},{tr:'buonasera',pr:'bwoh-nah-SEH-rah',en:'good evening'},{tr:'grazie',pr:'GRAH-tsyeh',en:'thank you'},{tr:'prego',pr:'PREH-goh',en:'you\'re welcome / please'}]},
        {t:'chal',en:'Hello, thank you',tr:'Ciao, grazie',pr:'CHOW, GRAH-tsyeh',morph:['ciao = hello','grazie = thank you']},
        {t:'say',text:'Two more essentials: <span class="inline-tr">per favore</span> (please) and <span class="inline-tr">scusa</span> (sorry).',tr:'per favore'},
        {t:'chal',en:'A coffee, please',tr:'Un caffè, per favore',pr:'oon kahf-FEH, pehr fah-VOH-reh',morph:['un = a','caffè = coffee','per favore = please']},
        {t:'say',text:'To ask how someone is: <span class="inline-tr">Come stai?</span> (informal). The reply is <span class="inline-tr">bene, grazie</span> — well, thanks.',tr:'Come stai?'},
        {t:'words',items:[{tr:'Come stai?',pr:'KOH-meh STAI',en:'How are you?'},{tr:'Bene, grazie',pr:'BEH-neh, GRAH-tsyeh',en:'Well, thanks'},{tr:'Non c\'è male',pr:'non cheh MAH-leh',en:'Not bad'}]},
        {t:'chal',en:'Hi, how are you?',tr:'Ciao, come stai?',pr:'CHOW, KOH-meh STAI',morph:['ciao = hi','come stai? = how are you?']}
      ],
      blocks:['<code>ciao</code> = hi / bye','<code>buongiorno</code> = good morning','<code>grazie</code> = thank you · <code>prego</code> = you\'re welcome','<code>per favore</code> = please'] },
    { id:2, title:'Numbers 1–10', focus:'uno · due · tre · dieci',
      steps:[
        {t:'say',text:'Numbers are the fastest win. Listen and repeat: <span class="inline-tr">uno, due, tre</span>.',tr:'uno'},
        {t:'words',items:[{tr:'uno',pr:'OO-noh',en:'1'},{tr:'due',pr:'DOO-eh',en:'2'},{tr:'tre',pr:'treh',en:'3'},{tr:'quattro',pr:'KWAH-troh',en:'4'},{tr:'cinque',pr:'CHEEN-kweh',en:'5'},{tr:'dieci',pr:'DYEH-chee',en:'10'}]},
        {t:'chal',en:'Two coffees, please',tr:'Due caffè, per favore',pr:'DOO-eh kahf-FEH, pehr fah-VOH-reh',morph:['due = two','caffè = coffee','per favore = please']},
        {t:'say',text:'<span class="inline-tr">Quanto costa?</span> = how much does it cost? A key phrase for shopping.',tr:'Quanto costa?'},
        {t:'chal',en:'How much is it?',tr:'Quanto costa?',pr:'KWAN-toh KOS-tah',morph:['quanto = how much','costa = does it cost']},
        {t:'chal',en:'It\'s five euros',tr:'Cinque euro',pr:'CHEEN-kweh EH-oo-roh',morph:['cinque = five','euro = euros']}
      ],
      blocks:['uno, due, tre, quattro, cinque = 1–5','<code>quanto costa?</code> = how much is it?'] },
    { id:3, title:'"I want" — the verb volere', focus:'vorrei · un/una · il/la',
      steps:[
        {t:'say',text:'The magic phrase to order anything: <span class="inline-tr">vorrei</span> — I would like. More polite than \'I want\'.',tr:'vorrei'},
        {t:'say',text:'<span class="inline-tr">un</span> is \'a\' for masculine nouns, <span class="inline-tr">una</span> for feminine. <b>caffè</b> is masculine → <b>un caffè</b>.',tr:'un'},
        {t:'chal',en:'I\'d like a coffee',tr:'Vorrei un caffè',pr:'vor-RAY oon kahf-FEH',morph:['vorrei = I\'d like','un caffè = a coffee']},
        {t:'chal',en:'I\'d like a water',tr:'Vorrei un\'acqua',pr:'vor-RAY oon-AH-kwah',morph:['vorrei = I\'d like','un\'acqua = a water']},
        {t:'say',text:'<span class="inline-tr">il</span> = the (masculine), <span class="inline-tr">la</span> = the (feminine). <b>il conto</b> = the bill.',tr:'il conto'},
        {t:'chal',en:'I\'d like the bill',tr:'Vorrei il conto',pr:'vor-RAY eel KON-toh',morph:['vorrei = I\'d like','il conto = the bill']}
      ],
      blocks:['<code>vorrei</code> = I would like','<code>un / una</code> = a (masc / fem)','<code>il / la</code> = the (masc / fem)'] },
    { id:4, title:'Food & drink', focus:'acqua · pane · vino · il menu',
      steps:[
        {t:'say',text:'Eating out? Key words: <span class="inline-tr">acqua</span> (water), <span class="inline-tr">pane</span> (bread), <span class="inline-tr">vino</span> (wine).',tr:'acqua'},
        {t:'words',items:[{tr:'acqua',pr:'AH-kwah',en:'water'},{tr:'pane',pr:'PAH-neh',en:'bread'},{tr:'vino',pr:'VEE-noh',en:'wine'},{tr:'il menu',pr:'eel meh-NOO',en:'the menu',link:'≈ English menu'},{tr:'il conto',pr:'eel KON-toh',en:'the bill'}]},
        {t:'chal',en:'Water and bread, please',tr:'Acqua e pane, per favore',pr:'AH-kwah eh PAH-neh, pehr fah-VOH-reh',morph:['acqua = water','e = and','pane = bread']},
        {t:'chal',en:'I\'d like the menu',tr:'Vorrei il menu',pr:'vor-RAY eel meh-NOO',morph:['vorrei = I\'d like','il menu = the menu']},
        {t:'say',text:'<span class="inline-tr">buonissimo</span> = delicious. Say it and you\'ll make the chef\'s day.',tr:'buonissimo'},
        {t:'chal',en:'It\'s delicious!',tr:'Buonissimo!',pr:'bwoh-nee-SEE-moh',morph:['buonissimo = very delicious']}
      ],
      blocks:['<code>acqua</code>, <code>pane</code>, <code>vino</code> = water, bread, wine','<code>il conto</code> = the bill','<code>buonissimo</code> = delicious'] },
    { id:5, title:'Getting around', focus:'dov\'è · a destra · a sinistra · stazione',
      steps:[
        {t:'say',text:'The most useful question in any city: <span class="inline-tr">Dov\'è…?</span> — where is…?',tr:'Dov\'è?'},
        {t:'words',items:[{tr:'Dov\'è...?',pr:'doh-VEH',en:'Where is...?'},{tr:'a destra',pr:'ah DEH-strah',en:'to the right'},{tr:'a sinistra',pr:'ah see-NEE-strah',en:'to the left'},{tr:'la stazione',pr:'lah staht-SYOH-neh',en:'the station',link:'≈ English station'},{tr:'il bagno',pr:'eel BAH-nyoh',en:'the bathroom'}]},
        {t:'chal',en:'Where is the station?',tr:'Dov\'è la stazione?',pr:'doh-VEH lah staht-SYOH-neh',morph:['dov\'è = where is','la stazione = the station']},
        {t:'chal',en:'Where is the bathroom?',tr:'Dov\'è il bagno?',pr:'doh-VEH eel BAH-nyoh',morph:['dov\'è = where is','il bagno = the bathroom']},
        {t:'say',text:'<span class="inline-tr">A destra</span> and <span class="inline-tr">a sinistra</span> tell you which way to turn. \'Straight ahead\' is <span class="inline-tr">sempre dritto</span>.',tr:'sempre dritto'},
        {t:'chal',en:'Straight ahead',tr:'Sempre dritto',pr:'SEM-preh DREE-toh',morph:['sempre = always','dritto = straight']}
      ],
      blocks:['<code>dov\'è…?</code> = where is…?','<code>a destra</code> / <code>a sinistra</code> = right / left'] },
    { id:6, title:'Questions & "do you have…?"', focus:'hai · c\'è · posso',
      steps:[
        {t:'say',text:'To ask someone if they have something: <span class="inline-tr">hai…?</span> (informal) or <span class="inline-tr">ha…?</span> (formal).',tr:'hai'},
        {t:'chal',en:'Do you have a table?',tr:'Avete un tavolo?',pr:'ah-VEH-teh oon TAH-voh-loh',morph:['avete = do you have','un tavolo = a table']},
        {t:'say',text:'<span class="inline-tr">C\'è…?</span> = is there…? Very useful.',tr:'c\'è'},
        {t:'chal',en:'Is there wifi?',tr:'C\'è il wifi?',pr:'cheh eel WEE-fee',morph:['c\'è = is there','il wifi = the wifi']},
        {t:'say',text:'<span class="inline-tr">Posso…?</span> = may I…?. For polite requests.',tr:'Posso?'},
        {t:'chal',en:'May I pay?',tr:'Posso pagare?',pr:'POS-soh pah-GAH-reh',morph:['posso = may I','pagare = to pay']}
      ],
      blocks:['<code>hai…?</code> = do you have…?','<code>c\'è…?</code> = is there…?','<code>posso…?</code> = may I…?'] },
    { id:7, title:'Family & people', focus:'famiglia · madre · padre · amico',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">famiglia</span> (family), <span class="inline-tr">madre</span> (mother), <span class="inline-tr">padre</span> (father).',tr:'famiglia'},
        {t:'words',items:[{tr:'famiglia',pr:'fah-MEE-lyah',en:'family'},{tr:'madre',pr:'MAH-dreh',en:'mother'},{tr:'padre',pr:'PAH-dreh',en:'father'},{tr:'amico',pr:'ah-MEE-koh',en:'friend'}]},
        {t:'chal',en:'I have a friend',tr:'Ho un amico',pr:'oh oon ah-MEE-koh',morph:['ho = I have','un amico = a friend']},
        {t:'say',text:'<span class="inline-tr">Ho</span> = I have. It\'s the key verb to say what you\'ve got.',tr:'ho'},
        {t:'chal',en:'I have a family',tr:'Ho una famiglia',pr:'oh OO-nah fah-MEE-lyah',morph:['ho = I have','una famiglia = a family']}
      ],
      blocks:['<code>madre</code> / <code>padre</code> = mother / father','<code>amico</code> = friend','<code>ho</code> = I have'] },
    { id:8, title:'Time, days & weather', focus:'oggi · domani · che tempo fa?',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">oggi</span>, tomorrow is <span class="inline-tr">domani</span>.',tr:'oggi'},
        {t:'words',items:[{tr:'oggi',pr:'OH-jee',en:'today'},{tr:'domani',pr:'doh-MAH-nee',en:'tomorrow'},{tr:'oggi',pr:'OH-jee',en:'today'},{tr:'che tempo fa?',pr:'keh TEM-poh fah',en:'what\'s the weather?'}]},
        {t:'chal',en:'See you tomorrow',tr:'A domani',pr:'ah doh-MAH-nee',morph:['a = until','domani = tomorrow']},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">Che tempo fa?</span>',tr:'Che tempo fa?'},
        {t:'chal',en:'It\'s raining',tr:'Piove',pr:'PYOH-veh',morph:['piove = it rains']}
      ],
      blocks:['<code>oggi</code> / <code>domani</code> = today / tomorrow','<code>che tempo fa?</code> = what\'s the weather?'] },
    { id:9, title:'Small talk & politeness', focus:'mi chiamo · piacere · molto lieto',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">Mi chiamo…</span> = my name is…, and <span class="inline-tr">Piacere</span> = pleased to meet you.',tr:'Mi chiamo'},
        {t:'chal',en:'My name is __NAME__',tr:'Mi chiamo __NAME__',pr:'mee KYAH-moh __NAME__',morph:['mi chiamo = my name is','__NAME__ = your name']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">Come ti chiami?</span>',tr:'Come ti chiami?'},
        {t:'chal',en:'What\'s your name?',tr:'Come ti chiami?',pr:'KOH-meh tee KYAH-mee',morph:['come = how','ti chiami? = do you call yourself?']},
        {t:'chal',en:'Pleased to meet you',tr:'Piacere',pr:'PYAH-cheh-reh',morph:['piacere = pleasure']}
      ],
      blocks:['<code>mi chiamo…</code> = my name is…','<code>come ti chiami?</code> = what\'s your name?','<code>piacere</code> = pleased to meet you'] },
    { id:10, title:'Health & emergency', focus:'aiuto · dottore · farmacia · non capisco',
      steps:[
        {t:'say',text:'The most important words if you need help: <span class="inline-tr">aiuto</span> (help), <span class="inline-tr">dottore</span> (doctor), <span class="inline-tr">farmacia</span> (pharmacy).',tr:'aiuto'},
        {t:'words',items:[{tr:'aiuto',pr:'ah-YOO-toh',en:'help!'},{tr:'il dottore',pr:'eel dot-TOH-reh',en:'the doctor',link:'≈ English doctor'},{tr:'la farmacia',pr:'lah far-mah-CHEE-ah',en:'the pharmacy',link:'≈ English pharmacy'},{tr:'Non capisco',pr:'non kah-PEE-skoh',en:'I don\'t understand'}]},
        {t:'chal',en:'Help!',tr:'Aiuto!',pr:'ah-YOO-toh',morph:['aiuto = help']},
        {t:'chal',en:'I don\'t understand',tr:'Non capisco',pr:'non kah-PEE-skoh',morph:['non = not','capisco = I understand']},
        {t:'say',text:'To say you need help: <span class="inline-tr">Ho bisogno di aiuto</span>.',tr:'Ho bisogno di aiuto'},
        {t:'chal',en:'I need help',tr:'Ho bisogno di aiuto',pr:'oh bee-ZOH-nyoh dee ah-YOO-toh',morph:['ho bisogno = I need','di aiuto = of help']}
      ],
      blocks:['<code>aiuto</code> = help','<code>il dottore</code> = the doctor','<code>non capisco</code> = I don\'t understand'] },
    { id:11, title:'Describing things', focus:'bello · grande · piccolo · molto',
      steps:[
        {t:'say',text:'Adjectives are easy: <span class="inline-tr">bello</span> (beautiful), <span class="inline-tr">grande</span> (big), <span class="inline-tr">piccolo</span> (small).',tr:'bello'},
        {t:'words',items:[{tr:'bello',pr:'BEH-loh',en:'beautiful'},{tr:'grande',pr:'GRAN-deh',en:'big',link:'≈ English grand'},{tr:'piccolo',pr:'PEE-koh-loh',en:'small'},{tr:'molto',pr:'MOL-toh',en:'very / a lot'}]},
        {t:'chal',en:'Very beautiful',tr:'Molto bello',pr:'MOL-toh BEH-loh',morph:['molto = very','bello = beautiful']},
        {t:'chal',en:'A big coffee',tr:'Un caffè grande',pr:'oon kahf-FEH GRAN-deh',morph:['un caffè = a coffee','grande = big']}
      ],
      blocks:['<code>bello</code> = beautiful','<code>grande</code> / <code>piccolo</code> = big / small','<code>molto</code> = very'] },
    { id:12, title:'Tying it together', focus:'volere · potere · a capstone scene',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolbox. This capstone uses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello, how are you?',tr:'Ciao, come stai?',pr:'CHOW, KOH-meh STAI',morph:['ciao = hi','come stai? = how are you?']},
        {t:'chal',en:'I\'d like a water, please',tr:'Vorrei un\'acqua, per favore',pr:'vor-RAY oon-AH-kwah, pehr fah-VOH-reh',morph:['vorrei = I\'d like','un\'acqua = a water','per favore = please']},
        {t:'chal',en:'Where is the station?',tr:'Dov\'è la stazione?',pr:'doh-VEH lah staht-SYOH-neh',morph:['dov\'è = where is','la stazione = the station']},
        {t:'chal',en:'How much is it?',tr:'Quanto costa?',pr:'KWAN-toh KOS-tah',morph:['quanto costa? = how much is it?']},
        {t:'chal',en:'Delicious! Thank you!',tr:'Buonissimo! Grazie!',pr:'bwoh-nee-SEE-moh, GRAH-tsyeh',morph:['buonissimo = delicious','grazie = thank you']}
      ],
      blocks:['You built: greetings, ordering, directions, prices, thanks — a full day out in Italian.'] },
    { id:13, title:'Airport & tickets', focus:'aeroporto · passaporto · biglietto · gate',
      steps:[
        {t:'say',text:'You have landed. The building is the <span class="inline-tr">aeroporto</span>. Your document is a <span class="inline-tr">passaporto</span>.',tr:'aeroporto'},
        {t:'words',items:[{tr:'l\'aeroporto',pr:'lah-eh-roh-POR-toh',en:'the airport'},{tr:'il passaporto',pr:'eel pahs-sah-POR-toh',en:'the passport'},{tr:'il biglietto',pr:'eel bee-LYET-toh',en:'the ticket'},{tr:'il volo',pr:'eel VOH-loh',en:'the flight'},{tr:'il gate',pr:'eel gheht',en:'the gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'Dov\'è l\'aeroporto?',pr:'doh-VEH lah-eh-roh-POR-toh',morph:['dov\'è = where is','l\'aeroporto = the airport']},
        {t:'chal',en:'Here is my passport',tr:'Ecco il mio passaporto',pr:'EH-koh eel MEE-oh pahs-sah-POR-toh',morph:['ecco = here is','il mio passaporto = my passport']},
        {t:'chal',en:'A ticket, please',tr:'Un biglietto, per favore',pr:'oon bee-LYET-toh, pehr fah-VOH-reh',morph:['un biglietto = a ticket','per favore = please']},
        {t:'chal',en:'Where is the gate?',tr:'Dov\'è il gate?',pr:'doh-VEH eel gheht',morph:['dov\'è = where is','il gate = the gate']}
      ],
      blocks:['<code>aeroporto</code> = airport','<code>passaporto</code> = passport','<code>biglietto</code> = ticket','<code>gate</code> = gate'] },
    { id:14, title:'The taxi', focus:'taxi · andare · hotel · si fermi',
      steps:[
        {t:'say',text:'The driver is waiting. <span class="inline-tr">Taxi</span> is the same word. Tell them where to go with <span class="inline-tr">vorrei andare</span>.',tr:'taxi'},
        {t:'words',items:[{tr:'il taxi',pr:'eel TAK-see',en:'the taxi'},{tr:'l\'autista',pr:'low-TEES-tah',en:'the driver'},{tr:'vorrei andare',pr:'vor-RAY ahn-DAH-reh',en:'I would like to go'},{tr:'si fermi qui',pr:'see FEHR-mee kwee',en:'stop here (formal)'}]},
        {t:'chal',en:'Taxi, please',tr:'Un taxi, per favore',pr:'oon TAK-see, pehr fah-VOH-reh',morph:['un taxi = a taxi','per favore = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'Vorrei andare in hotel',pr:'vor-RAY ahn-DAH-reh een o-TEL',morph:['vorrei = I\'d like','andare = to go','in hotel = to the hotel']},
        {t:'chal',en:'Stop here, please',tr:'Si fermi qui, per favore',pr:'see FEHR-mee kwee, pehr fah-VOH-reh',morph:['si fermi = stop (formal)','qui = here','per favore = please']},
        {t:'chal',en:'How much is it?',tr:'Quanto costa?',pr:'KWAN-toh KOS-tah',morph:['quanto = how much','costa = does it cost']}
      ],
      blocks:['<code>vorrei andare in …</code> = I\'d like to go to …','<code>si fermi qui</code> = stop here'] },
    { id:15, title:'The hotel', focus:'prenotazione · camera · chiave · notte',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">ho una prenotazione</span> — I have a reservation.',tr:'prenotazione'},
        {t:'words',items:[{tr:'l\'hotel',pr:'lo-TEL',en:'the hotel'},{tr:'la prenotazione',pr:'lah preh-noh-taht-SYOH-neh',en:'the reservation'},{tr:'la camera',pr:'lah KAH-meh-rah',en:'the room'},{tr:'la chiave',pr:'lah KYAH-veh',en:'the key'},{tr:'una notte',pr:'OO-nah NOT-teh',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'Ho una prenotazione',pr:'oh OO-nah preh-noh-taht-SYOH-neh',morph:['ho = I have','una prenotazione = a reservation']},
        {t:'chal',en:'A room for one night, please',tr:'Una camera per una notte, per favore',pr:'OO-nah KAH-meh-rah pehr OO-nah NOT-teh, pehr fah-VOH-reh',morph:['una camera = a room','per una notte = for one night','per favore = please']},
        {t:'chal',en:'The key, please',tr:'La chiave, per favore',pr:'lah KYAH-veh, pehr fah-VOH-reh',morph:['la chiave = the key','per favore = please']},
        {t:'chal',en:'Where is my room?',tr:'Dov\'è la mia camera?',pr:'doh-VEH lah MEE-ah KAH-meh-rah',morph:['dov\'è = where is','la mia camera = my room']}
      ],
      blocks:['<code>prenotazione</code> = reservation','<code>camera</code> = room','<code>chiave</code> = key'] },
    { id:16, title:'Ask for help', focus:'non capisco · più piano · inglese',
      steps:[
        {t:'say',text:'When the language is too fast: <span class="inline-tr">Più piano, per favore</span> — slower, please.',tr:'Più piano, per favore'},
        {t:'words',items:[{tr:'più piano',pr:'pyoo PYAH-noh',en:'slower'},{tr:'di nuovo',pr:'dee NWO-voh',en:'again'},{tr:'inglese',pr:'een-GLEH-zeh',en:'English'},{tr:'può aiutarmi?',pr:'pwo ah-yoo-TAR-mee',en:'can you help me? (formal)'}]},
        {t:'chal',en:'I don\'t understand',tr:'Non capisco',pr:'non kah-PEE-skoh',morph:['non = not','capisco = I understand']},
        {t:'chal',en:'Slower, please',tr:'Più piano, per favore',pr:'pyoo PYAH-noh, pehr fah-VOH-reh',morph:['più piano = slower','per favore = please']},
        {t:'chal',en:'Can you help me?',tr:'Può aiutarmi?',pr:'pwo ah-yoo-TAR-mee',morph:['può = can you (formal)','aiutarmi = help me']},
        {t:'chal',en:'Do you speak English?',tr:'Parla inglese?',pr:'PAR-lah een-GLEH-zeh',morph:['parla = do you speak (formal)','inglese = English']}
      ],
      blocks:['<code>più piano</code> = slower','<code>parla inglese?</code> = do you speak English?'] },

  ],
  dialogues: [
    { id:'cafe', title:'☕ At a café', emoji:'☕', turns:[
      {who:'You',tr:'Buongiorno! Un caffè, per favore.',pr:'bwon-JOR-noh, oon kahf-FEH, pehr fah-VOH-reh',en:'Good morning! A coffee, please.'},
      {who:'Barista',tr:'Subito. Da bere o da portare via?',pr:'SOO-bee-toh, dah BEH-reh oh dah por-TAH-reh VEE-ah',en:'Right away. For here or to go?'},
      {who:'You',tr:'Da portare via, grazie.',pr:'dah por-TAH-reh VEE-ah, GRAH-tsyeh',en:'To go, thanks.'},
      {who:'Barista',tr:'Ecco. Sono due euro.',pr:'EH-koh, soh-noh DOO-eh EH-oo-roh',en:'Here. That\'s two euros.'},
      {who:'You',tr:'Grazie mille!',pr:'GRAH-tsyeh MEE-leh',en:'Thanks a lot!'}
    ]},
    { id:'train', title:'🚉 At the train station', emoji:'🚉', turns:[
      {who:'You',tr:'Scusi, dov\'è la stazione?',pr:'SKOO-zee, doh-VEH lah staht-SYOH-neh',en:'Excuse me, where\'s the station?'},
      {who:'Local',tr:'È lì, a destra.',pr:'eh lee, ah DEH-strah',en:'It\'s there, on the right.'},
      {who:'You',tr:'Grazie. Un biglietto per Roma, per favore.',pr:'GRAH-tsyeh, oon bee-LYET-toh pehr ROH-mah, pehr fah-VOH-reh',en:'Thanks. A ticket to Rome, please.'},
      {who:'Ticket',tr:'Quindici euro. Il treno è alle nove.',pr:'KWEEN-dee-chee EH-oo-roh, eel TREH-noh eh AH-leh NOH-veh',en:'Fifteen euros. The train is at nine.'}
    ]},
    { id:'restaurant', title:'🍝 At a restaurant', emoji:'🍝', turns:[
      {who:'Waiter',tr:'Buonasera! Avete una prenotazione?',pr:'bwoh-nah-SEH-rah, ah-VEH-teh OO-nah preh-noh-taht-SYOH-neh',en:'Good evening! Do you have a reservation?'},
      {who:'You',tr:'Sì, per due persone.',pr:'see, pehr DOO-eh pehr-SOH-neh',en:'Yes, for two people.'},
      {who:'You',tr:'Il menu, per favore.',pr:'eel meh-NOO, pehr fah-VOH-reh',en:'The menu, please.'},
      {who:'You',tr:'Vorrei la pasta e un vino rosso.',pr:'vor-RAY lah PAHS-tah eh oon VEE-noh ROS-soh',en:'I\'d like the pasta and a red wine.'},
      {who:'Waiter',tr:'Ottima scelta! Buon appetito.',pr:'ot-TEE-mah SHEL-tah, bwon ahp-peh-TEE-toh',en:'Excellent choice! Enjoy your meal.'}
    ]},
    { id:'shop', title:'🛍️ Shopping', emoji:'🛍️', turns:[
      {who:'You',tr:'Quanto costa questo?',pr:'KWAN-toh KOS-tah KWES-toh',en:'How much is this?'},
      {who:'Seller',tr:'Venti euro.',pr:'VEN-tee EH-oo-roh',en:'Twenty euros.'},
      {who:'You',tr:'È troppo caro. Posso provarlo?',pr:'eh TROP-poh KAH-roh, POS-soh proh-VAHR-loh',en:'It\'s too expensive. Can I try it on?'},
      {who:'Seller',tr:'Certo! Il camerino è là.',pr:'CHEHR-toh, eel kah-meh-REE-noh eh LAH',en:'Of course! The fitting room is there.'},
      {who:'You',tr:'Va bene, lo prendo.',pr:'vah BEH-neh, loh PREN-doh',en:'OK, I\'ll take it.'}
    ]}
  ],
  pocket: [
    {tr:'Ciao',pr:'CHOW',en:'Hello',c:'Greetings'},
    {tr:'Buongiorno',pr:'bwon-JOR-noh',en:'Good morning',c:'Greetings'},
    {tr:'Buonasera',pr:'bwoh-nah-SEH-rah',en:'Good evening',c:'Greetings'},
    {tr:'Arrivederci',pr:'ah-ree-veh-DEHR-chee',en:'Goodbye',c:'Greetings'},
    {tr:'Come stai?',pr:'KOH-meh STAI',en:'How are you?',c:'Greetings'},
    {tr:'Bene, grazie',pr:'BEH-neh, GRAH-tsyeh',en:'Well, thanks',c:'Greetings'},
    {tr:'Per favore',pr:'pehr fah-VOH-reh',en:'Please',c:'Courtesy'},
    {tr:'Grazie',pr:'GRAH-tsyeh',en:'Thank you',c:'Courtesy'},
    {tr:'Grazie mille',pr:'GRAH-tsyeh MEE-leh',en:'Thanks a lot',c:'Courtesy'},
    {tr:'Prego',pr:'PREH-goh',en:'You\'re welcome',c:'Courtesy'},
    {tr:'Scusa',pr:'SKOO-zah',en:'Sorry',c:'Courtesy'},
    {tr:'Sì',pr:'see',en:'Yes',c:'Courtesy'},
    {tr:'No',pr:'noh',en:'No',c:'Courtesy'},
    {tr:'Uno',pr:'OO-noh',en:'1',c:'Numbers'},
    {tr:'Due',pr:'DOO-eh',en:'2',c:'Numbers'},
    {tr:'Tre',pr:'treh',en:'3',c:'Numbers'},
    {tr:'Quattro',pr:'KWAH-troh',en:'4',c:'Numbers'},
    {tr:'Cinque',pr:'CHEEN-kweh',en:'5',c:'Numbers'},
    {tr:'Dieci',pr:'DYEH-chee',en:'10',c:'Numbers'},
    {tr:'Acqua',pr:'AH-kwah',en:'water',c:'Food'},
    {tr:'Pane',pr:'PAH-neh',en:'bread',c:'Food'},
    {tr:'Vino',pr:'VEE-noh',en:'wine',c:'Food'},
    {tr:'Caffè',pr:'kahf-FEH',en:'coffee',c:'Food'},
    {tr:'Il conto',pr:'eel KON-toh',en:'the bill',c:'Food'},
    {tr:'Dov\'è...?',pr:'doh-VEH',en:'Where is...?',c:'Directions'},
    {tr:'A destra',pr:'ah DEH-strah',en:'to the right',c:'Directions'},
    {tr:'A sinistra',pr:'ah see-NEE-strah',en:'to the left',c:'Directions'},
    {tr:'La stazione',pr:'lah staht-SYOH-neh',en:'the station',c:'Directions'},
    {tr:'Quanto costa?',pr:'KWAN-toh KOS-tah',en:'how much is it?',c:'Shopping'},
    {tr:'Il bagno',pr:'eel BAH-nyoh',en:'the bathroom',c:'Emergency'},
    {tr:'Aiuto!',pr:'ah-YOO-toh',en:'Help!',c:'Emergency'},
    {tr:'Non capisco',pr:'non kah-PEE-skoh',en:'I don\'t understand',c:'Emergency'},
    {tr:'Ho bisogno di aiuto',pr:'oh bee-ZOH-nyoh dee ah-YOO-toh',en:'I need help',c:'Emergency'},
    {tr:'Oggi',pr:'OH-jee',en:'today',c:'Time'},
    {tr:'Domani',pr:'doh-MAH-nee',en:'tomorrow',c:'Time'},
    {tr:'Mi chiamo __NAME__',pr:'mee KYAH-moh',en:'My name is...',c:'Greetings'},
    {tr:'L\'aeroporto',pr:'lah-eh-roh-POR-toh',en:'the airport',c:'Travel'},
    {tr:'Il passaporto',pr:'eel pahs-sah-POR-toh',en:'the passport',c:'Travel'},
    {tr:'Un taxi, per favore',pr:'oon TAK-see, pehr fah-VOH-reh',en:'A taxi, please',c:'Travel'},
    {tr:'Ho una prenotazione',pr:'oh OO-nah preh-noh-taht-SYOH-neh',en:'I have a reservation',c:'Travel'},
    {tr:'Più piano, per favore',pr:'pyoo PYAH-noh, pehr fah-VOH-reh',en:'Slower, please',c:'Travel'},
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Shopping','Emergency','Time', 'Travel'],
  culture: [
    {icon:'☕',title:'Coffee is a meal',body:'An espresso is a moment, not a to-go cup. Italians drink cappuccino in the morning (never after a big meal). Standing at the bar is cheaper than sitting at a table — a real insider tip.'},
    {icon:'🤌',title:'Hands talk',body:'Italians gesture a lot. A pinch of the fingers means \'what do you want?\' or exasperation; a chin flick means \'I don\'t care\'. You don\'t need to copy them, but you\'ll understand the mood.'},
    {icon:'🕐',title:'Dinner is late',body:'Dinner often starts around 8-9pm. Lunch around 1pm. Restaurants close between the two. Don\'t be surprised if a cafe is quiet mid-afternoon.'},
    {icon:'👟',title:'Dress to impress',body:'Italians dress well, even casually. Neat, clean and stylish clothes get you better service and warmer welcomes.'},
    {icon:'💰',title:'Tipping is a small gesture',body:'A few coins or rounding up is fine in restaurants and cafés; taxis too. It\'s appreciated but never demanded.'},
    {icon:'🗣️',title:'A little Italian goes far',body:'A \'buongiorno\' and \'grazie\' open every door. Italians light up when visitors try their language — effort matters more than perfection.'}
  ],
  sounds: [
    {l:'c',say:'before e/i = "ch" as in church; else "k"',ex:'ciao = CHOW · casa = KAH-zah',voice:'ciao'},
    {l:'g',say:'before e/i = "j" as in gelato; else hard "g"',ex:'gelato = jeh-LAH-toh',voice:'gelato'},
    {l:'gn',say:'like "ny" in canyon',ex:'gnocchi = NYOK-kee',voice:'gnocchi'},
    {l:'gl',say:'like "ly" in million (before i)',ex:'famiglia = fah-MEE-lyah',voice:'famiglia'},
    {l:'ch',say:'"k" sound',ex:'che = keh',voice:'che'},
    {l:'zi',say:'"tsi" sound',ex:'grazie = GRAH-tsyeh',voice:'grazie'},
    {l:'r',say:'rolled r',ex:'Roma = ROH-mah',voice:'Roma'},
    {l:'sc',say:'before e/i = "sh"',ex:'scena = SHEH-nah',voice:'scena'}
  ],
  resources: [
    {icon:'🗣️',t:'Easy Italian',d:'Real street interviews with native speakers and subtitles — ideal for natural Italian.',q:'Easy Italian street interviews'},
    {icon:'🐢',t:'Italian with Lucrezia',d:'Clear, slow and friendly everyday-Italian videos from a native Roman.',q:'Learn Italian with Lucrezia'},
    {icon:'📚',t:'Coffee Break Italian',d:'Structured beginner lessons in short, digestible audio episodes.',q:'Coffee Break Italian'},
    {icon:'💬',t:'Italiano Automatico',d:'Conversational Italian built from context, not grammar tables.',q:'Italiano Automatico'},
    {icon:'🎧',t:'Slow Italian podcasts',d:'Easy listening for learners — perfect for a walk or commute.',q:'slow Italian podcast for learners'}
  ]
};
