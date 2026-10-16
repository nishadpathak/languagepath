/* ---- catalan ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["catalan"] = {
  name: 'Catalan',
  flag: '🇪🇸',
  tts: 'ca-ES',
  dir: 'ltr',
  native: 'Català',
  soundTitle: 'Catalan sounds & spelling',
  soundIntro: 'Catalan is very regular to read — once you know its special letters (ç, l·l, ny), you can sound out almost any word.',
  grammar: '<p>Catalan uses the Latin alphabet with a few extra characters. <b>ç</b> always sounds like an \'s\' (never \'k\'), <b>l·l</b> is a doubled \'l\', and <b>ny</b> works like the \'ny\' in <i>canyon</i>. Most nouns are masculine (<b>el</b>) or feminine (<b>la</b>), and adjectives usually come <i>after</i> the noun. Written accents (<b>à, è, ò</b>) show where the stress falls when it isn\'t where you\'d expect.</p>',
  bridges: '<div class="note">🇬🇧 <b>English.</b> Catalan is a Romance language — a cousin of Spanish, French and Italian. If you already speak one, you\'ll learn Catalan fast: <i>aigua</i> ≈ agua/acqua, <i>pa</i> ≈ pan/pane, <i>cafè</i> ≈ café.</div><div class="note">🇪🇸 <b>Spanish.</b> Many Catalan words look like Spanish ones but sound very different — <i>gràcies</i> means \'thanks\' but is not the same as <b>gracias</b>. Don\'t assume they\'re identical.</div><div class="note">🤓 <b>Import knowledge.</b> Because Catalan sits between Spanish and French, knowing either unlocks a lot of vocabulary before you learn a single word.</div>',
  lessons: [
    { id:1, title:'Greetings', focus:'hola · bon dia · adéu · com estàs?',
      steps:[
        {t:'say',text:'Let\'s start with the very first word you\'ll use: <span class="inline-tr">hola</span> — hello (and often goodbye too). Say it out loud.',tr:'hola'},
        {t:'words',items:[{tr:'hola',pr:'OH-lah',en:'hello'},{tr:'bon dia',pr:'bohn DEE-uh',en:'good morning',link:'≈ French bonjour / Italian buongiorno'},{tr:'bon vespre',pr:'bon VES-pruh',en:'good evening'},{tr:'bona nit',pr:'BOH-nah NEET',en:'good night'},{tr:'adéu',pr:'ah-DEH-oo',en:'goodbye'}]},
        {t:'chal',en:'Good morning!',tr:'Bon dia!',pr:'bohn DEE-uh',morph:['bon dia = good morning']},
        {t:'say',text:'To ask how someone is: <span class="inline-tr">Com estàs?</span> (informal). The reply is <span class="inline-tr">Molt bé, gràcies</span> — very well, thanks.',tr:'Com estàs?'},
        {t:'words',items:[{tr:'Com estàs?',pr:'kom es-TAHS',en:'How are you?'},{tr:'Molt bé, gràcies',pr:'mohl BEH, GRAH-syuhs',en:'Very well, thanks'},{tr:'I tu?',pr:'ee TOO',en:'And you?'}]},
        {t:'chal',en:'Hello, how are you?',tr:'Hola, com estàs?',pr:'OH-lah, kom es-TAHS',morph:['hola = hi','com estàs? = how are you?']},
        {t:'chal',en:'Very well, thanks',tr:'Molt bé, gràcies',pr:'mohl BEH, GRAH-syuhs',morph:['molt bé = very well','gràcies = thanks']}
      ],
      blocks:['<code>hola</code> = hello','<code>bon dia</code> = good morning','<code>adéu</code> = goodbye','<code>com estàs?</code> = how are you?'] },
    { id:2, title:'Being polite', focus:'gràcies · si us plau · de res · ho sent',
      steps:[
        {t:'say',text:'The two magic words: <span class="inline-tr">gràcies</span> (thank you) and <span class="inline-tr">si us plau</span> (please). Use them everywhere.',tr:'gràcies'},
        {t:'words',items:[{tr:'gràcies',pr:'GRAH-syuhs',en:'thank you',link:'≈ Spanish gracias'},{tr:'si us plau',pr:'see oos PLOW',en:'please'},{tr:'moltes gràcies',pr:'MOL-tuhs GRAH-syuhs',en:'thanks a lot'},{tr:'de res',pr:'duh REHS',en:'you\'re welcome'},{tr:'ho sent',pr:'oo SENT',en:'I\'m sorry'}]},
        {t:'chal',en:'Thank you very much',tr:'Moltes gràcies',pr:'MOL-tuhs GRAH-syuhs',morph:['moltes = many','gràcies = thanks']},
        {t:'chal',en:'A coffee, please',tr:'Un cafè, si us plau',pr:'oon kah-FEH, see oos PLOW',morph:['un cafè = a coffee','si us plau = please']},
        {t:'say',text:'To get someone\'s attention politely, say <span class="inline-tr">perdoni</span> — excuse me (formal).',tr:'perdoni'},
        {t:'chal',en:'Excuse me',tr:'Perdoni',pr:'pehr-DOH-nee',morph:['perdoni = excuse me']},
        {t:'chal',en:'You\'re welcome',tr:'De res',pr:'duh REHS',morph:['de res = it\'s nothing']}
      ],
      blocks:['<code>gràcies</code> = thank you','<code>si us plau</code> = please','<code>de res</code> = you\'re welcome','<code>perdoni</code> = excuse me'] },
    { id:3, title:'Numbers 1–10', focus:'un · dos · tres · deu',
      steps:[
        {t:'say',text:'Numbers are the fastest win. Listen and repeat: <span class="inline-tr">un, dos, tres</span>.',tr:'un'},
        {t:'words',items:[{tr:'un',pr:'oon',en:'1'},{tr:'dos',pr:'dohs',en:'2'},{tr:'tres',pr:'trehs',en:'3'},{tr:'quatre',pr:'KWAH-truh',en:'4'},{tr:'cinc',pr:'SEENK',en:'5'},{tr:'sis',pr:'SEES',en:'6'},{tr:'set',pr:'SET',en:'7'},{tr:'vuit',pr:'BWEET',en:'8'},{tr:'nou',pr:'NOH-oo',en:'9'},{tr:'deu',pr:'DEH-oo',en:'10'}]},
        {t:'chal',en:'Two coffees, please',tr:'Dos cafès, si us plau',pr:'dohs kah-FEHS, see oos PLOW',morph:['dos = two','cafès = coffees','si us plau = please']},
        {t:'say',text:'To ask the price: <span class="inline-tr">Quant costa?</span> — how much is it? A key phrase for shopping.',tr:'Quant costa?'},
        {t:'chal',en:'How much is it?',tr:'Quant costa?',pr:'kwahn KOS-tah',morph:['quant = how much','costa = does it cost']},
        {t:'chal',en:'It\'s five euros',tr:'Són cinc euros',pr:'SOHN SEENK EH-oo-roos',morph:['són = they are','cinc = five','euros = euros']}
      ],
      blocks:['un, dos, tres, quatre, cinc = 1–5 · vuit = 8 · deu = 10','<code>quant costa?</code> = how much is it?'] },
    { id:4, title:'"I want" — vull & voldria', focus:'vull · voldria · un/una · el/la',
      steps:[
        {t:'say',text:'The keyword to order anything: <span class="inline-tr">vull</span> — I want. But <span class="inline-tr">voldria</span> — I would like — is more polite.',tr:'vull'},
        {t:'say',text:'<span class="inline-tr">un</span> is \'a\' for masculine nouns, <span class="inline-tr">una</span> for feminine. <b>cafè</b> is masculine → <b>un cafè</b>.',tr:'un'},
        {t:'chal',en:'I\'d like a coffee',tr:'Voldria un cafè',pr:'vool-DREE-uh oon kah-FEH',morph:['voldria = I\'d like','un cafè = a coffee']},
        {t:'chal',en:'I want a glass of water',tr:'Vull un got d\'aigua',pr:'VUY oon got DEYE-gwah',morph:['vull = I want','un got d\'aigua = a glass of water']},
        {t:'say',text:'<span class="inline-tr">el</span> = the (masculine), <span class="inline-tr">la</span> = the (feminine). <b>el compte</b> = the bill.',tr:'el compte'},
        {t:'chal',en:'I\'d like the bill',tr:'Voldria el compte',pr:'vool-DREE-uh el KOM-tuh',morph:['voldria = I\'d like','el compte = the bill']}
      ],
      blocks:['<code>vull</code> = I want','<code>voldria</code> = I would like','<code>un / una</code> = a (masc / fem)','<code>el / la</code> = the (masc / fem)'] },
    { id:5, title:'Food & drink', focus:'aigua · pa · cafè · te',
      steps:[
        {t:'say',text:'Eating and drinking: <span class="inline-tr">aigua</span> (water), <span class="inline-tr">pa</span> (bread), <span class="inline-tr">cafè</span> (coffee), <span class="inline-tr">te</span> (tea).',tr:'aigua'},
        {t:'words',items:[{tr:'aigua',pr:'EYE-gwah',en:'water',link:'≈ Spanish agua / Italian acqua'},{tr:'pa',pr:'pah',en:'bread',link:'≈ Spanish pan / French pain / Italian pane'},{tr:'cafè',pr:'kah-FEH',en:'coffee',link:'≈ French café / Italian caffè'},{tr:'te',pr:'TEH',en:'tea',link:'≈ Spanish té / Italian tè'},{tr:'cervesa',pr:'ser-VEH-zah',en:'beer'},{tr:'el compte',pr:'el KOM-tuh',en:'the bill'}]},
        {t:'chal',en:'Water and bread, please',tr:'Aigua i pa, si us plau',pr:'EYE-gwah ee pah, see oos PLOW',morph:['aigua = water','i = and','pa = bread']},
        {t:'chal',en:'I\'d like a coffee, please',tr:'Voldria un cafè, si us plau',pr:'vool-DREE-uh oon kah-FEH, see oos PLOW',morph:['voldria = I\'d like','un cafè = a coffee','si us plau = please']},
        {t:'say',text:'<span class="inline-tr">Pa amb tomàquet</span> — bread with tomato — is a Catalan classic. And <span class="inline-tr">boníssim</span> means \'delicious\'.',tr:'pa amb tomàquet'},
        {t:'chal',en:'It\'s delicious!',tr:'És boníssim!',pr:'EHS boh-NEE-seem',morph:['és = it\'s','boníssim = delicious']}
      ],
      blocks:['<code>aigua</code>, <code>pa</code>, <code>cafè</code>, <code>te</code> = water, bread, coffee, tea','<code>el compte</code> = the bill','<code>boníssim</code> = delicious'] },
    { id:6, title:'Getting around', focus:'on és? · a la dreta · a l\'esquerra · l\'estació',
      steps:[
        {t:'say',text:'The most useful question in any city: <span class="inline-tr">On és…?</span> — where is…?',tr:'On és?'},
        {t:'words',items:[{tr:'On és...?',pr:'on EHS',en:'Where is...?'},{tr:'a la dreta',pr:'ah lah DREH-tah',en:'to the right'},{tr:'a l\'esquerra',pr:'ah les-KEH-rrah',en:'to the left'},{tr:'l\'estació',pr:'les-tah-see-OH',en:'the station',link:'≈ English station'},{tr:'el bany',pr:'el BAHN',en:'the bathroom'},{tr:'tot recte',pr:'tot REK-tuh',en:'straight ahead'}]},
        {t:'chal',en:'Where is the station?',tr:'On és l\'estació?',pr:'on EHS les-tah-see-OH',morph:['on és = where is','l\'estació = the station']},
        {t:'chal',en:'Where is the bathroom?',tr:'On és el bany?',pr:'on EHS el BAHN',morph:['on és = where is','el bany = the bathroom']},
        {t:'say',text:'<span class="inline-tr">A la dreta</span> and <span class="inline-tr">a l\'esquerra</span> tell you which way to turn. \'Straight ahead\' is <span class="inline-tr">tot recte</span>.',tr:'tot recte'},
        {t:'chal',en:'Straight ahead',tr:'Tot recte',pr:'tot REK-tuh',morph:['tot = all','recte = straight']}
      ],
      blocks:['<code>on és…?</code> = where is…?','<code>a la dreta</code> / <code>a l\'esquerra</code> = right / left','<code>tot recte</code> = straight ahead'] },
    { id:7, title:'Questions', focus:'tens? · hi ha? · puc? · per què?',
      steps:[
        {t:'say',text:'To ask if someone has something: <span class="inline-tr">Tens…?</span> (informal) or <span class="inline-tr">Té…?</span> (formal).',tr:'Tens'},
        {t:'chal',en:'Do you have a table?',tr:'Té una taula?',pr:'TEH OO-nah TOW-lah',morph:['té = do you have','una taula = a table']},
        {t:'say',text:'<span class="inline-tr">Hi ha…?</span> = is there…? Very useful.',tr:'Hi ha?'},
        {t:'chal',en:'Is there wifi?',tr:'Hi ha wifi?',pr:'ee AH WEE-fee',morph:['hi ha = is there','wifi = the wifi']},
        {t:'say',text:'<span class="inline-tr">Puc…?</span> = may I…? For polite requests.',tr:'Puc?'},
        {t:'chal',en:'May I pay?',tr:'Puc pagar?',pr:'PUK pah-GAR',morph:['puc = may I','pagar = to pay']}
      ],
      blocks:['<code>tens…?</code> = do you have…?','<code>hi ha…?</code> = is there…?','<code>puc…?</code> = may I…?'] },
    { id:8, title:'Family & people', focus:'família · mare · pare · amic',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">família</span> (family), <span class="inline-tr">mare</span> (mother), <span class="inline-tr">pare</span> (father).',tr:'família'},
        {t:'words',items:[{tr:'família',pr:'fah-MEE-lee-ah',en:'family',link:'≈ English family / Italian famiglia'},{tr:'mare',pr:'MAH-ruh',en:'mother'},{tr:'pare',pr:'PAH-ruh',en:'father'},{tr:'amic',pr:'ah-MEEK',en:'friend'},{tr:'germà',pr:'zher-MAH',en:'brother'},{tr:'germana',pr:'zher-MAH-nuh',en:'sister'}]},
        {t:'say',text:'<span class="inline-tr">Tinc</span> = I have. It\'s the key verb to say what you\'ve got.',tr:'tinc'},
        {t:'chal',en:'I have a friend',tr:'Tinc un amic',pr:'TEENK oon ah-MEEK',morph:['tinc = I have','un amic = a friend']},
        {t:'chal',en:'I have a family',tr:'Tinc una família',pr:'TEENK OO-nah fah-MEE-lee-ah',morph:['tinc = I have','una família = a family']},
        {t:'chal',en:'This is my mother',tr:'Aquesta és la meva mare',pr:'ah-KES-tah EHS lah MEH-vah MAH-ruh',morph:['aquesta = this','és = is','la meva mare = my mother']}
      ],
      blocks:['<code>mare</code> / <code>pare</code> = mother / father','<code>amic</code> = friend','<code>tinc</code> = I have'] },
    { id:9, title:'Time, days & weather', focus:'avui · demà · quin temps fa?',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">avui</span>, tomorrow is <span class="inline-tr">demà</span> — and yesterday is <span class="inline-tr">ahir</span>.',tr:'avui'},
        {t:'words',items:[{tr:'avui',pr:'ah-BWEE',en:'today'},{tr:'demà',pr:'duh-MAH',en:'tomorrow'},{tr:'ahir',pr:'ah-EE',en:'yesterday'},{tr:'dilluns',pr:'dee-LOONS',en:'Monday'},{tr:'quin temps fa?',pr:'KEEN tems FAH',en:'what\'s the weather?'}]},
        {t:'chal',en:'See you tomorrow',tr:'Fins demà',pr:'FEENS duh-MAH',morph:['fins = until','demà = tomorrow']},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">Quin temps fa?</span>',tr:'Quin temps fa?'},
        {t:'chal',en:'It\'s cold',tr:'Fa fred',pr:'FAH FRED',morph:['fa = it does','fred = cold']},
        {t:'chal',en:'It\'s raining',tr:'Plou',pr:'PLOH-oo',morph:['plou = it rains']}
      ],
      blocks:['<code>avui</code> / <code>demà</code> = today / tomorrow','<code>quin temps fa?</code> = what\'s the weather?','<code>plou</code> = it\'s raining'] },
    { id:10, title:'Introducing yourself', focus:'em dic · com et dius? · molt de gust',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">Em dic…</span> = my name is…, and <span class="inline-tr">Molt de gust</span> = pleased to meet you.',tr:'Em dic'},
        {t:'chal',en:'My name is __NAME__',tr:'Em dic __NAME__',pr:'em DEEK __NAME__',morph:['em dic = my name is','__NAME__ = your name']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">Com et dius?</span>',tr:'Com et dius?'},
        {t:'chal',en:'What\'s your name?',tr:'Com et dius?',pr:'kom et DEE-oos',morph:['com = how','et dius? = do you call yourself?']},
        {t:'chal',en:'Pleased to meet you',tr:'Molt de gust',pr:'mohl duh GOOST',morph:['molt de gust = much pleasure']}
      ],
      blocks:['<code>em dic…</code> = my name is…','<code>com et dius?</code> = what\'s your name?','<code>molt de gust</code> = pleased to meet you'] },
    { id:11, title:'Health & emergency', focus:'ajuda! · metge · farmàcia · no ho entenc',
      steps:[
        {t:'say',text:'The most important words if you need help: <span class="inline-tr">Ajuda!</span> (help!), <span class="inline-tr">un metge</span> (a doctor), <span class="inline-tr">una farmàcia</span> (a pharmacy).',tr:'Ajuda!'},
        {t:'words',items:[{tr:'Ajuda!',pr:'ah-ZHOO-dah',en:'help!'},{tr:'un metge',pr:'oon MEJ-uh',en:'a doctor',link:'≈ English medic'},{tr:'la farmàcia',pr:'lah far-MAH-see-ah',en:'the pharmacy'},{tr:'No ho entenc',pr:'noh oo en-TENGK',en:'I don\'t understand'},{tr:'Necessito ajuda',pr:'nuh-suh-see-TOO ah-ZHOO-dah',en:'I need help'}]},
        {t:'chal',en:'Help!',tr:'Ajuda!',pr:'ah-ZHOO-dah',morph:['ajuda = help']},
        {t:'chal',en:'I don\'t understand',tr:'No ho entenc',pr:'noh oo en-TENGK',morph:['no = not','ho entenc = I understand it']},
        {t:'say',text:'To say you need help: <span class="inline-tr">Necessito ajuda</span>.',tr:'Necessito ajuda'},
        {t:'chal',en:'I need help',tr:'Necessito ajuda',pr:'nuh-suh-see-TOO ah-ZHOO-dah',morph:['necessito = I need','ajuda = help']}
      ],
      blocks:['<code>ajuda!</code> = help!','<code>un metge</code> = a doctor','<code>no ho entenc</code> = I don\'t understand'] },
    { id:12, title:'Tying it together', focus:'vull · on és? · quant costa? · a capstone scene',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolbox. This capstone uses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello, how are you?',tr:'Hola, com estàs?',pr:'OH-lah, kom es-TAHS',morph:['hola = hi','com estàs? = how are you?']},
        {t:'chal',en:'I\'d like a coffee, please',tr:'Voldria un cafè, si us plau',pr:'vool-DREE-uh oon kah-FEH, see oos PLOW',morph:['voldria = I\'d like','un cafè = a coffee','si us plau = please']},
        {t:'chal',en:'Where is the station?',tr:'On és l\'estació?',pr:'on EHS les-tah-see-OH',morph:['on és = where is','l\'estació = the station']},
        {t:'chal',en:'How much is it?',tr:'Quant costa?',pr:'kwahn KOS-tah',morph:['quant costa? = how much is it?']},
        {t:'chal',en:'Delicious! Thank you!',tr:'Boníssim! Gràcies!',pr:'boh-NEE-seem, GRAH-syuhs',morph:['boníssim = delicious','gràcies = thank you']}
      ],
      blocks:['You built: greetings, ordering, directions, prices, thanks — a full day out in Catalan.'] },
    { id:13, title:'Airport & tickets', focus:'aeroport · passaport · bitllet · vol',
      steps:[
        {t:'say',text:'You have landed in Barcelona. The building is the <span class="inline-tr">aeroport</span>. Your document is a <span class="inline-tr">passaport</span>.',tr:'aeroport'},
        {t:'words',items:[{tr:'l\'aeroport',pr:'lah-eh-ro-PORT',en:'the airport'},{tr:'el passaport',pr:'el pah-sah-PORT',en:'the passport'},{tr:'el bitllet',pr:'el bee-LLET',en:'the ticket'},{tr:'el vol',pr:'el bol',en:'the flight'},{tr:'la porta',pr:'lah POR-tah',en:'the gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'On és l\'aeroport?',pr:'on EHS lah-eh-ro-PORT',morph:['on és = where is','l\'aeroport = the airport']},
        {t:'chal',en:'Here is my passport',tr:'Aquí tens el meu passaport',pr:'ah-KEE tens el MEH-oo pah-sah-PORT',morph:['aquí tens = here is','el meu passaport = my passport']},
        {t:'chal',en:'A ticket, please',tr:'Un bitllet, si us plau',pr:'oon bee-LLET, see oos PLOW',morph:['un bitllet = a ticket','si us plau = please']},
        {t:'chal',en:'Where is the gate?',tr:'On és la porta?',pr:'on EHS lah POR-tah',morph:['on és = where is','la porta = the gate']}
      ],
      blocks:['<code>aeroport</code> = airport','<code>passaport</code> = passport','<code>bitllet</code> = ticket'] },
    { id:14, title:'The taxi', focus:'taxi · anar · hotel · pari aquí',
      steps:[
        {t:'say',text:'The driver is waiting. Tell them <span class="inline-tr">vull anar a l\'hotel</span> — I want to go to the hotel. The infinitive <span class="inline-tr">anar</span> is required.',tr:'taxi'},
        {t:'words',items:[{tr:'el taxi',pr:'el TAK-see',en:'the taxi'},{tr:'el taxista',pr:'el tak-SEES-tah',en:'the driver'},{tr:'vull anar',pr:'VUY ah-NAR',en:'I want to go'},{tr:'pari aquí',pr:'PAH-ree ah-KEE',en:'stop here (formal)'}]},
        {t:'chal',en:'A taxi, please',tr:'Un taxi, si us plau',pr:'oon TAK-see, see oos PLOW',morph:['un taxi = a taxi','si us plau = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'Vull anar a l\'hotel',pr:'VUY ah-NAR ah lo-TEL',morph:['vull = I want','anar = to go','a l\'hotel = to the hotel']},
        {t:'chal',en:'Stop here, please',tr:'Pari aquí, si us plau',pr:'PAH-ree ah-KEE, see oos PLOW',morph:['pari aquí = stop here','si us plau = please']},
        {t:'chal',en:'How much is it?',tr:'Quant costa?',pr:'kwahn KOS-tah',morph:['quant = how much','costa = does it cost']}
      ],
      blocks:['<code>vull anar a …</code> = I want to go to …','<code>pari aquí</code> = stop here (formal vostè)'] },
    { id:15, title:'The hotel', focus:'reserva · habitació · clau · nit',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">tinc una reserva</span> — I have a reservation.',tr:'reserva'},
        {t:'words',items:[{tr:'l\'hotel',pr:'lo-TEL',en:'the hotel'},{tr:'la reserva',pr:'lah reh-SER-vah',en:'the reservation'},{tr:'l\'habitació',pr:'lah-bee-tah-see-OH',en:'the room'},{tr:'la clau',pr:'lah KLOW',en:'the key'},{tr:'una nit',pr:'OO-nah NEET',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'Tinc una reserva',pr:'TEENK OO-nah reh-SER-vah',morph:['tinc = I have','una reserva = a reservation']},
        {t:'chal',en:'A room for one night, please',tr:'Una habitació per a una nit, si us plau',pr:'OO-nah ah-bee-tah-see-OH pehr ah OO-nah NEET, see oos PLOW',morph:['una habitació = a room','per a una nit = for one night','si us plau = please']},
        {t:'chal',en:'The key, please',tr:'La clau, si us plau',pr:'lah KLOW, see oos PLOW',morph:['la clau = the key','si us plau = please']},
        {t:'chal',en:'Where is my room?',tr:'On és la meva habitació?',pr:'on EHS lah MEH-vah ah-bee-tah-see-OH',morph:['on és = where is','la meva habitació = my room']}
      ],
      blocks:['<code>reserva</code> = reservation','<code>habitació</code> = room','<code>clau</code> = key'] },
    { id:16, title:'Ask for help', focus:'no ho entenc · més a poc a poc · anglès',
      steps:[
        {t:'say',text:'When Catalan is too fast: <span class="inline-tr">Més a poc a poc, si us plau</span> — slower, please. Formal <span class="inline-tr">vostè</span> is safer at the desk.',tr:'Més a poc a poc'},
        {t:'words',items:[{tr:'més a poc a poc',pr:'mess ah pok ah pok',en:'slower'},{tr:'un altre cop',pr:'oon AHL-treh kop',en:'again'},{tr:'anglès',pr:'ang-LESS',en:'English'},{tr:'em pot ajudar?',pr:'em pot ah-zhoo-DAH',en:'can you help me? (formal)'}]},
        {t:'chal',en:'I don\'t understand',tr:'No ho entenc',pr:'noh oo en-TENGK',morph:['no = not','ho entenc = I understand it']},
        {t:'chal',en:'Slower, please',tr:'Més a poc a poc, si us plau',pr:'mess ah pok ah pok, see oos PLOW',morph:['més a poc a poc = slower','si us plau = please']},
        {t:'chal',en:'Can you help me?',tr:'Em pot ajudar?',pr:'em pot ah-zhoo-DAH',morph:['em pot = can you (formal)','ajudar = to help']},
        {t:'chal',en:'Do you speak English?',tr:'Parla anglès?',pr:'PAR-lah ang-LESS',morph:['parla = do you speak (formal)','anglès = English']}
      ],
      blocks:['<code>més a poc a poc</code> = slower','<code>parla anglès?</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'cafe', title:'☕ At a café', emoji:'☕', turns:[
      {who:'You',tr:'Bon dia! Un cafè, si us plau.',pr:'bohn DEE-uh, oon kah-FEH, see oos PLOW',en:'Good morning! A coffee, please.'},
      {who:'Server',tr:'De seguida. Per beure aquí o per emportar?',pr:'duh suh-GEE-dah, pehr BEH-oo-ruh ah-KEE oh pehr em-por-TAR',en:'Right away. For here or to go?'},
      {who:'You',tr:'Per emportar, gràcies.',pr:'pehr em-por-TAR, GRAH-syuhs',en:'To go, thanks.'},
      {who:'Server',tr:'Aquí tens. Són dos euros.',pr:'ah-KEE tens, SOHN dohs EH-oo-roos',en:'Here you are. That\'s two euros.'},
      {who:'You',tr:'Moltes gràcies!',pr:'MOL-tuhs GRAH-syuhs',en:'Thanks a lot!'}
    ]},
    { id:'transport', title:'🚉 At the station', emoji:'🚉', turns:[
      {who:'You',tr:'Perdoni, on és l\'estació?',pr:'pehr-DOH-nee, on EHS les-tah-see-OH',en:'Excuse me, where is the station?'},
      {who:'Local',tr:'És allà, a la dreta.',pr:'EHS ah-LYAH, ah lah DREH-tah',en:'It\'s over there, on the right.'},
      {who:'You',tr:'Gràcies. Un bitllet per a Barcelona, si us plau.',pr:'GRAH-syuhs, oon bee-LLET pehr ah bahr-suh-LOH-nuh, see oos PLOW',en:'Thanks. A ticket to Barcelona, please.'},
      {who:'Ticket',tr:'Quinze euros. El tren surt a les nou.',pr:'KEEN-zuh EH-oo-roos, el TREN soort ah lehs NOH-oo',en:'Fifteen euros. The train leaves at nine.'}
    ]},
    { id:'restaurant', title:'🍝 At a restaurant', emoji:'🍝', turns:[
      {who:'Waiter',tr:'Bona nit! Té una reserva?',pr:'BOH-nah NEET, TEH OO-nah reh-SER-vah',en:'Good evening! Do you have a reservation?'},
      {who:'You',tr:'Sí, per a dues persones.',pr:'SEE, pehr ah DOO-uhs pehr-SOH-nuhs',en:'Yes, for two people.'},
      {who:'You',tr:'El menú, si us plau.',pr:'el meh-NOO, see oos PLOW',en:'The menu, please.'},
      {who:'You',tr:'Voldria el pa amb tomàquet i una aigua.',pr:'vool-DREE-uh el pah am too-MAH-ket ee OO-nah EYE-gwah',en:'I\'d like bread with tomato and a water.'},
      {who:'Waiter',tr:'Molt bona tria! Bon profit.',pr:'mohl BOH-nuh TREE-uh, bohn proh-FEET',en:'Excellent choice! Enjoy your meal.'}
    ]},
    { id:'market', title:'🧺 At the market', emoji:'🧺', turns:[
      {who:'You',tr:'Quant costa això?',pr:'kwahn KOS-tah ay-SHOH',en:'How much is this?'},
      {who:'Seller',tr:'Quatre euros.',pr:'KWAH-truh EH-oo-roos',en:'Four euros.'},
      {who:'You',tr:'És massa car. Es pot provar?',pr:'EHS MAH-sah KAR, es pot proh-VAR',en:'It\'s too expensive. Can I try it?'},
      {who:'Seller',tr:'És clar! El camerino és allà.',pr:'EHS KLAR, el kah-muh-REE-noh EHS ah-LYAH',en:'Of course! The fitting room is there.'},
      {who:'You',tr:'D\'acord, me l\'emporto.',pr:'dah-KORD, muh lem-POR-too',en:'OK, I\'ll take it.'}
    ]}
  ],
  pocket: [
    {tr:'Hola',pr:'OH-lah',en:'Hello',c:'Greetings'},
    {tr:'Bon dia',pr:'bohn DEE-uh',en:'Good morning',c:'Greetings'},
    {tr:'Bon vespre',pr:'bon VES-pruh',en:'Good evening',c:'Greetings'},
    {tr:'Bona nit',pr:'BOH-nah NEET',en:'Good night',c:'Greetings'},
    {tr:'Adéu',pr:'ah-DEH-oo',en:'Goodbye',c:'Greetings'},
    {tr:'Com estàs?',pr:'kom es-TAHS',en:'How are you?',c:'Greetings'},
    {tr:'Em dic __NAME__',pr:'em DEEK',en:'My name is...',c:'Greetings'},
    {tr:'Si us plau',pr:'see oos PLOW',en:'Please',c:'Courtesy'},
    {tr:'Gràcies',pr:'GRAH-syuhs',en:'Thank you',c:'Courtesy'},
    {tr:'Moltes gràcies',pr:'MOL-tuhs GRAH-syuhs',en:'Thanks a lot',c:'Courtesy'},
    {tr:'De res',pr:'duh REHS',en:'You\'re welcome',c:'Courtesy'},
    {tr:'Perdoni',pr:'pehr-DOH-nee',en:'Excuse me',c:'Courtesy'},
    {tr:'Ho sent',pr:'oo SENT',en:'I\'m sorry',c:'Courtesy'},
    {tr:'Sí',pr:'SEE',en:'Yes',c:'Courtesy'},
    {tr:'No',pr:'NOH',en:'No',c:'Courtesy'},
    {tr:'Un',pr:'oon',en:'1',c:'Numbers'},
    {tr:'Dos',pr:'dohs',en:'2',c:'Numbers'},
    {tr:'Tres',pr:'trehs',en:'3',c:'Numbers'},
    {tr:'Quatre',pr:'KWAH-truh',en:'4',c:'Numbers'},
    {tr:'Cinc',pr:'SEENK',en:'5',c:'Numbers'},
    {tr:'Deu',pr:'DEH-oo',en:'10',c:'Numbers'},
    {tr:'Aigua',pr:'EYE-gwah',en:'water',c:'Food'},
    {tr:'Pa',pr:'pah',en:'bread',c:'Food'},
    {tr:'Cafè',pr:'kah-FEH',en:'coffee',c:'Food'},
    {tr:'Te',pr:'TEH',en:'tea',c:'Food'},
    {tr:'El compte',pr:'el KOM-tuh',en:'the bill',c:'Food'},
    {tr:'Un cafè, si us plau',pr:'oon kah-FEH, see oos PLOW',en:'A coffee, please',c:'Food'},
    {tr:'On és...?',pr:'on EHS',en:'Where is...?',c:'Directions'},
    {tr:'A la dreta',pr:'ah lah DREH-tah',en:'to the right',c:'Directions'},
    {tr:'A l\'esquerra',pr:'ah les-KEH-rrah',en:'to the left',c:'Directions'},
    {tr:'L\'estació',pr:'les-tah-see-OH',en:'the station',c:'Directions'},
    {tr:'El bany',pr:'el BAHN',en:'the bathroom',c:'Directions'},
    {tr:'Quant costa?',pr:'kwahn KOS-tah',en:'how much is it?',c:'Shopping'},
    {tr:'Ajuda!',pr:'ah-ZHOO-dah',en:'Help!',c:'Emergency'},
    {tr:'No ho entenc',pr:'noh oo en-TENGK',en:'I don\'t understand',c:'Emergency'},
    {tr:'Necessito ajuda',pr:'nuh-suh-see-TOO ah-ZHOO-dah',en:'I need help',c:'Emergency'},
    {tr:'Avui',pr:'ah-BWEE',en:'today',c:'Time'},
    {tr:'Demà',pr:'duh-MAH',en:'tomorrow',c:'Time'},
    {tr:'Quin temps fa?',pr:'KEEN tems FAH',en:'what\'s the weather?',c:'Time'},
    {tr:'L\'aeroport',pr:'lah-eh-ro-PORT',en:'airport',c:'Travel'},
    {tr:'El taxi',pr:'el TAK-see',en:'taxi',c:'Travel'},
    {tr:'L\'hotel',pr:'lo-TEL',en:'hotel',c:'Travel'},
    {tr:'Pari aquí',pr:'PAH-ree ah-KEE',en:'stop here',c:'Travel'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Shopping','Emergency','Time','Travel'],
  culture: [
    {icon:'🗼',title:'Castells — human towers',body:'At Catalan festivals, groups called <b>castellers</b> build <b>castells</b> — human towers up to ten storeys tall — by standing on each other\'s shoulders. The smallest child, the <i>anxaneta</i>, climbs to the very top. It\'s all about teamwork and trust.'},
    {icon:'🌆',title:'Barcelona',body:'Barcelona is Catalonia\'s capital and the heart of <i>modernisme</i>, from Gaudí\'s Sagrada Família to the Rambla and the huge <b>La Boqueria</b> food market. Catalan is co-official with Spanish here, and you\'ll hear it on the streets every day.'},
    {icon:'💃',title:'La sardana',body:'The <b>sardana</b> is Catalonia\'s national dance, danced in a circle holding hands to the music of a <i>cobla</i> band. It\'s very welcoming — anyone can join the circle, visitors included.'},
    {icon:'🍅',title:'Pa amb tomàquet',body:'<b>Pa amb tomàquet</b> is bread rubbed with ripe tomato, then drizzled with olive oil and a little salt. It\'s the Catalan way to eat bread with almost any meal — simple but iconic.'},
    {icon:'🌹',title:'Sant Jordi',body:'On 23 April — <b>Sant Jordi</b> (St George) — people exchange a rose and a book. Bookstalls line the streets of Barcelona, and the whole city feels like one big open-air bookshop.'},
    {icon:'🥂',title:'Cava & the market',body:'Catalonia makes <b>cava</b>, Spain\'s famous sparkling wine. A lovely way to practise is strolling through a local <b>mercat</b> (market) — shoppers and vendors are famously friendly and happy to chat.'}
  ],
  sounds: [
    {l:'ll',say:'like "ly" in million — a palatal l',ex:'vull = VUY · ella = EH-ya',voice:'vull'},
    {l:'ny',say:'like "ny" in canyon',ex:'Catalunya = kah-tuh-LOO-nyah',voice:'Catalunya'},
    {l:'ç',say:'always an "s" sound (never "k")',ex:'plaça = PLAH-sah · començar = koo-men-SAH',voice:'plaça'},
    {l:'l·l',say:'a doubled "l" held a little longer',ex:'col·legi = kool-LEH-jee',voice:'col·legi'},
    {l:'x',say:'often "sh" at the start of a word',ex:'xocolata = shoo-koh-LAH-tah',voice:'xocolata'},
    {l:'j',say:'like "zh" in measure',ex:'jove = ZHOH-vuh · ajuda = ah-ZHOO-dah',voice:'jove'},
    {l:'r',say:'a tapped or rolled r',ex:'però = peh-ROH · rosa = ROH-zuh',voice:'però'},
    {l:'h',say:'silent at the start of a word',ex:'Hola = OH-lah',voice:'hola'}
  ],
  resources: [
    {icon:'🗣️',t:'Easy Catalan',d:'Real street interviews with natural one-to-one conversations and subtitles — ideal for catching real Catalan.',q:'Easy Catalan street interviews'},
    {icon:'🧑‍🏫',t:'parla.cat',d:'The official free Catalan course from the Catalan government, in clear structured levels.',q:'parla.cat free Catalan course'},
    {icon:'🐢',t:'Slow & Easy Catalan',d:'Short videos with slow, clear speech — perfect for beginners who tune out fast talk.',q:'slow Catalan for beginners'},
    {icon:'🎧',t:'Catalan podcasts',d:'Easy-listening audio for learners — great for a walk or a commute.',q:'Catalan podcast for beginners'},
    {icon:'📺',t:'3Cat / TV3',d:'Watch Catalan TV and streaming free online — hear real everyday Catalan spoken fast.',q:'TV3 3Cat Catalan'}
  ]
};
