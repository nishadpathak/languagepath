/* ---- danish ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["danish"] = {
  name: 'Danish',
  native: 'Dansk',
  flag: '🇩🇰',
  tts: 'da-DK',
  dir: 'ltr',
  soundTitle: 'Danish sounds & spelling',
  soundIntro: 'Danish has a few sounds that don\'t exist in English, but the spelling is predictable once you know them. The tricky part is the way words glide together — don\'t worry if it feels fast at first.',
  grammar: '<p>Danish word order is close to English: subject, verb, object. Danish nouns have two genders — <b>en</b> and <b>et</b> — so it\'s <b>en</b> mand (a man) but <b>et</b> hus (a house). Verbs don\'t change for person: <b>jeg er</b>, <b>du er</b>, <b>han er</b> all use the same <b>er</b>. The vowels <b>æ</b>, <b>ø</b> and <b>å</b> are letters in their own right and come after <b>z</b> in the alphabet.</p>',
  bridges: '<div class="note">🇬🇧 <b>English.</b> Danish and English are cousins — both Germanic. Cognates you already know: <b>vand</b> ≈ water, <b>hus</b> ≈ house, <b>kaffe</b> ≈ coffee, <b>brød</b> ≈ bread, <b>mand</b> ≈ man, <b>god</b> ≈ good, <b>nat</b> ≈ night.</div><div class="note">🇳🇴🇸🇪 <b>Norwegian & Swedish.</b> Danish is North Germanic and closely related to Norwegian and Swedish. Learn one and you can read a lot of the others.</div>',
  lessons: [
    { id:1, title:'Greetings & being polite', focus:'hej · godmorgen · godaften · tak',
      steps:[
        {t:'say',text:'The word every Dane uses all the time: <span class="inline-tr">hej</span> — hello. It works morning and night, and saying it twice, <span class="inline-tr">hej hej</span>, means bye.',tr:'hej'},
        {t:'words',items:[{tr:'hej',pr:'HAY',en:'hello / hi'},{tr:'godmorgen',pr:'goh-MORN',en:'good morning'},{tr:'godaften',pr:'goh-AF-ten',en:'good evening'},{tr:'godnat',pr:'goh-NAT',en:'good night',link:'≈ English night'}]},
        {t:'chal',en:'Hello, good morning',tr:'Hej, godmorgen!',pr:'HAY, goh-MORN',morph:['hej = hello','godmorgen = good morning']},
        {t:'say',text:'Say <span class="inline-tr">hej hej</span> to say goodbye. The more formal <span class="inline-tr">farvel</span> is closer to the English \'farewell\'.',tr:'hej hej'},
        {t:'chal',en:'Bye! See you',tr:'Hej hej!',pr:'HAY HAY',morph:['hej hej = bye']},
        {t:'say',text:'To ask how someone is: <span class="inline-tr">Hvordan går det?</span> A common reply is <span class="inline-tr">Det går godt</span> — it\'s going well.',tr:'Hvordan går det?'},
        {t:'words',items:[{tr:'Hvordan går det?',pr:'vor-DAN gaw deh',en:'How are you?'},{tr:'Det går godt',pr:'deh gaw goht',en:'It\'s going well'},{tr:'Hvad med dig?',pr:'vah meh dai',en:'How about you?'}]},
        {t:'chal',en:'Hello, how are you?',tr:'Hej, hvordan går det?',pr:'HAY, vor-DAN gaw deh',morph:['hej = hello','hvordan går det? = how are you?']}
      ],
      blocks:['<code>hej</code> = hello / goodbye','<code>godmorgen</code> = good morning · <code>godnat</code> = good night','<code>hvordan går det?</code> = how are you?'] },
    { id:2, title:'Please & thank you', focus:'tak · vær så venlig · undskyld · ja/nej',
      steps:[
        {t:'say',text:'The single most useful politeness word: <span class="inline-tr">tak</span> — thank you. Add <span class="inline-tr">mange</span> for \'many thanks\': <span class="inline-tr">mange tak</span>.',tr:'tak'},
        {t:'words',items:[{tr:'tak',pr:'TAHK',en:'thank you'},{tr:'mange tak',pr:'MAHNG-eh tahk',en:'thanks a lot'},{tr:'ja',pr:'yah',en:'yes'},{tr:'nej',pr:'nay',en:'no'}]},
        {t:'chal',en:'Thank you very much',tr:'Mange tak',pr:'MAHNG-eh tahk',morph:['mange = many / a lot','tak = thanks']},
        {t:'say',text:'To say please, Danes usually say <span class="inline-tr">vær så venlig</span> (literally \'be so kind\'), or simply add <span class="inline-tr">tak</span> — politeness by thanks.',tr:'vær så venlig'},
        {t:'chal',en:'A coffee, please',tr:'En kaffe, vær så venlig',pr:'en KAH-feh, vair saw VEN-lee',morph:['en = a','kaffe = coffee','vær så venlig = please']},
        {t:'say',text:'For \'sorry\' or \'excuse me\': <span class="inline-tr">undskyld</span>. Handy in a crowd or to get someone\'s attention.',tr:'undskyld'},
        {t:'chal',en:'Excuse me, thank you',tr:'Undskyld, tak',pr:'OON-skyul, tahk',morph:['undskyld = excuse me','tak = thanks']}
      ],
      blocks:['<code>tak</code> = thank you · <code>mange tak</code> = thanks a lot','<code>vær så venlig</code> = please','<code>undskyld</code> = sorry / excuse me'] },
    { id:3, title:'Numbers 1–10', focus:'en · to · tre · fire · fem',
      steps:[
        {t:'say',text:'Numbers come up everywhere. Listen and repeat: <span class="inline-tr">en, to, tre</span>.',tr:'en'},
        {t:'words',items:[{tr:'en',pr:'EN',en:'1'},{tr:'to',pr:'TOH',en:'2'},{tr:'tre',pr:'TRAY',en:'3'},{tr:'fire',pr:'FEE-reh',en:'4'},{tr:'fem',pr:'FEM',en:'5'},{tr:'seks',pr:'SEKS',en:'6'},{tr:'syv',pr:'SIV',en:'7'},{tr:'otte',pr:'OT-eh',en:'8'},{tr:'ni',pr:'NEE',en:'9'},{tr:'ti',pr:'TEE',en:'10'}]},
        {t:'chal',en:'Two coffees, please',tr:'To kaffe, vær så venlig',pr:'TOH KAH-feh, vair saw VEN-lee',morph:['to = two','kaffe = coffee','vær så venlig = please']},
        {t:'say',text:'To ask the price: <span class="inline-tr">Hvad koster det?</span> — how much does it cost?',tr:'Hvad koster det?'},
        {t:'chal',en:'How much is it?',tr:'Hvad koster det?',pr:'vah KOS-ter deh',morph:['hvad = what','koster = costs','det = it']},
        {t:'chal',en:'It costs five kroner',tr:'Det koster fem kroner',pr:'deh KOS-ter fem KROH-ner',morph:['det koster = it costs','fem = five','kroner = kroner']}
      ],
      blocks:['en, to, tre, fire, fem = 1–5','<code>hvad koster det?</code> = how much is it?'] },
    { id:4, title:'"I want" — jeg vil & jeg vil gerne', focus:'jeg vil · jeg vil gerne have · det',
      steps:[
        {t:'say',text:'To want something, Danes say <span class="inline-tr">jeg vil</span>. But the polite, everyday way to ask is <span class="inline-tr">jeg vil gerne have…</span> — I would like to have…',tr:'jeg vil gerne have'},
        {t:'words',items:[{tr:'jeg vil',pr:'yigh vil',en:'I want'},{tr:'jeg vil gerne have',pr:'yigh vil GAIR-neh hah',en:'I would like to have'},{tr:'det',pr:'deh',en:'it / that'}]},
        {t:'chal',en:'I would like a coffee',tr:'Jeg vil gerne have en kaffe',pr:'yigh vil GAIR-neh hah en KAH-feh',morph:['jeg vil gerne have = I would like','en kaffe = a coffee']},
        {t:'chal',en:'I would like water',tr:'Jeg vil gerne have vand',pr:'yigh vil GAIR-neh hah VAN',morph:['jeg vil gerne have = I would like','vand = water']},
        {t:'say',text:'A bare <span class="inline-tr">jeg vil</span> (I want) can sound blunt. When in doubt, use <span class="inline-tr">jeg vil gerne have</span> — it\'s the politest way to order.',tr:'jeg vil gerne'},
        {t:'chal',en:'I would like that one',tr:'Jeg vil gerne have den der',pr:'yigh vil GAIR-neh hah den dair',morph:['jeg vil gerne have = I would like','den der = that one']}
      ],
      blocks:['<code>jeg vil</code> = I want','<code>jeg vil gerne have</code> = I would like to have','<code>det</code> = it / that'] },
    { id:5, title:'Food & drink', focus:'vand · brød · kaffe · te · øl',
      steps:[
        {t:'say',text:'The essentials for any café or shop: <span class="inline-tr">vand</span> (water), <span class="inline-tr">brød</span> (bread), <span class="inline-tr">kaffe</span> (coffee), <span class="inline-tr">te</span> (tea).',tr:'kaffe'},
        {t:'words',items:[{tr:'vand',pr:'VAN',en:'water',link:'≈ English water'},{tr:'brød',pr:'BRUTH',en:'bread',link:'≈ English bread'},{tr:'kaffe',pr:'KAH-feh',en:'coffee',link:'≈ English coffee'},{tr:'te',pr:'TEH',en:'tea',link:'≈ English tea'},{tr:'øl',pr:'UHL',en:'beer',link:'≈ English ale'}]},
        {t:'chal',en:'Water and bread, please',tr:'Vand og brød, vær så venlig',pr:'VAN oh BRUTH, vair saw VEN-lee',morph:['vand = water','og = and','brød = bread','vær så venlig = please']},
        {t:'chal',en:'I would like a coffee and a tea',tr:'Jeg vil gerne have en kaffe og en te',pr:'yigh vil GAIR-neh hah en KAH-feh oh en TEH',morph:['jeg vil gerne have = I would like','en kaffe = a coffee','og = and','en te = a tea']},
        {t:'say',text:'To say it\'s delicious: <span class="inline-tr">Det smager godt</span> — it tastes good. And when you sit down to eat, <span class="inline-tr">velbekomme</span> means \'enjoy your meal\'.',tr:'Det smager godt'},
        {t:'chal',en:'It tastes delicious, thanks',tr:'Det smager godt, tak',pr:'deh SMAY-er goht, tahk',morph:['det = it','smager = tastes','godt = good','tak = thanks']}
      ],
      blocks:['<code>vand</code>, <code>brød</code>, <code>kaffe</code>, <code>te</code> = water, bread, coffee, tea','<code>det smager godt</code> = it tastes good'] },
    { id:6, title:'Getting around', focus:'hvor er …? · til højre · til venstre · lige ud',
      steps:[
        {t:'say',text:'The most useful question in any town: <span class="inline-tr">Hvor er…?</span> — where is…?',tr:'Hvor er…?'},
        {t:'words',items:[{tr:'Hvor er…?',pr:'vor air',en:'Where is…?'},{tr:'til højre',pr:'til HOY-reh',en:'to the right'},{tr:'til venstre',pr:'til VEN-struh',en:'to the left'},{tr:'lige ud',pr:'LEE-eh ooth',en:'straight ahead'},{tr:'togstationen',pr:'TOH-stah-shoo-nen',en:'the train station'}]},
        {t:'chal',en:'Where is the train station?',tr:'Hvor er togstationen?',pr:'vor air TOH-stah-shoo-nen',morph:['hvor er = where is','togstationen = the train station']},
        {t:'chal',en:'Where is the toilet?',tr:'Hvor er toilettet?',pr:'vor air toh-LEH-tet',morph:['hvor er = where is','toilettet = the toilet']},
        {t:'say',text:'<span class="inline-tr">Til højre</span> and <span class="inline-tr">til venstre</span> tell you which way to turn. \'Straight ahead\' is <span class="inline-tr">lige ud</span>.',tr:'lige ud'},
        {t:'chal',en:'To the right, then straight ahead',tr:'Til højre, så lige ud',pr:'til HOY-reh, saw LEE-eh ooth',morph:['til højre = to the right','så = then','lige ud = straight ahead']}
      ],
      blocks:['<code>hvor er…?</code> = where is…?','<code>til højre</code> / <code>til venstre</code> = right / left','<code>lige ud</code> = straight ahead'] },
    { id:7, title:'Questions & "can I…?"', focus:'hvad · hvor · hvornår · kan jeg …?',
      steps:[
        {t:'say',text:'The question words: <span class="inline-tr">hvad</span> (what), <span class="inline-tr">hvor</span> (where), <span class="inline-tr">hvornår</span> (when). Note that the <b>hv</b> is just a \'v\' sound.',tr:'hvad'},
        {t:'words',items:[{tr:'hvad',pr:'vah',en:'what'},{tr:'hvem',pr:'vem',en:'who'},{tr:'hvor',pr:'vor',en:'where'},{tr:'hvornår',pr:'vor-NOR',en:'when'},{tr:'hvorfor',pr:'vor-FOR',en:'why'}]},
        {t:'chal',en:'What is that?',tr:'Hvad er det?',pr:'vah er deh',morph:['hvad = what','er = is','det = that']},
        {t:'say',text:'To ask for permission: <span class="inline-tr">Kan jeg…?</span> — can I…?',tr:'Kan jeg?'},
        {t:'chal',en:'Can I get a coffee?',tr:'Kan jeg få en kaffe?',pr:'kan yigh faw en KAH-feh',morph:['kan jeg = can I','få = get','en kaffe = a coffee']},
        {t:'chal',en:'Can I pay by card?',tr:'Kan jeg betale med kort?',pr:'kan yigh beh-TAH-leh meh kort',morph:['kan jeg = can I','betale = pay','med kort = by card']}
      ],
      blocks:['<code>hvad</code>, <code>hvor</code>, <code>hvornår</code> = what, where, when','<code>kan jeg…?</code> = can I…?'] },
    { id:8, title:'Family & people', focus:'familie · mor · far · bror · søster · ven',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">familie</span> (family), <span class="inline-tr">mor</span> (mother), <span class="inline-tr">far</span> (father).',tr:'familie'},
        {t:'words',items:[{tr:'familie',pr:'fah-MEE-lee-eh',en:'family'},{tr:'mor',pr:'mor',en:'mother'},{tr:'far',pr:'far',en:'father'},{tr:'bror',pr:'bror',en:'brother',link:'≈ English brother'},{tr:'søster',pr:'SUS-ter',en:'sister',link:'≈ English sister'},{tr:'ven',pr:'ven',en:'friend'}]},
        {t:'chal',en:'I have a brother',tr:'Jeg har en bror',pr:'yigh har en bror',morph:['jeg har = I have','en bror = a brother']},
        {t:'say',text:'<span class="inline-tr">Jeg har</span> = I have. Swap the noun to say what you\'ve got.',tr:'jeg har'},
        {t:'chal',en:'I have a family',tr:'Jeg har en familie',pr:'yigh har en fah-MEE-lee-eh',morph:['jeg har = I have','en familie = a family']},
        {t:'chal',en:'I have a friend',tr:'Jeg har en ven',pr:'yigh har en ven',morph:['jeg har = I have','en ven = a friend']}
      ],
      blocks:['<code>mor</code> / <code>far</code> = mother / father','<code>bror</code> / <code>søster</code> = brother / sister','<code>jeg har</code> = I have'] },
    { id:9, title:'Time, days & weather', focus:'i dag · i morgen · hvad er vejret?',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">i dag</span>, tomorrow is <span class="inline-tr">i morgen</span>.',tr:'i dag'},
        {t:'words',items:[{tr:'i dag',pr:'ee dai',en:'today'},{tr:'i morgen',pr:'ee MORN',en:'tomorrow'},{tr:'mandag',pr:'MAN-dai',en:'Monday'},{tr:'fredag',pr:'FRAY-dai',en:'Friday'},{tr:'søndag',pr:'SUN-dai',en:'Sunday'}]},
        {t:'chal',en:'See you tomorrow',tr:'Vi ses i morgen',pr:'vee sees ee MORN',morph:['vi ses = see you','i morgen = tomorrow']},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">Hvad er vejret?</span>',tr:'Hvad er vejret?'},
        {t:'chal',en:'It is raining',tr:'Det regner',pr:'deh RY-ner',morph:['det = it','regner = rains']},
        {t:'chal',en:'It is sunny',tr:'Det er solskin',pr:'deh er SOL-skeen',morph:['det er = it is','solskin = sunshine']}
      ],
      blocks:['<code>i dag</code> / <code>i morgen</code> = today / tomorrow','<code>hvad er vejret?</code> = what\'s the weather?'] },
    { id:10, title:'Your name', focus:'jeg hedder · hvad hedder du? · hyggeligt',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">Jeg hedder…</span> — my name is…, and <span class="inline-tr">Hyggeligt at møde dig</span> — nice to meet you.',tr:'Jeg hedder'},
        {t:'chal',en:'My name is __NAME__',tr:'Jeg hedder __NAME__',pr:'yigh HEH-thor __NAME__',morph:['jeg hedder = my name is','__NAME__ = your name']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">Hvad hedder du?</span>',tr:'Hvad hedder du?'},
        {t:'chal',en:'What is your name?',tr:'Hvad hedder du?',pr:'vah HEH-thor doo',morph:['hvad = what','hedder du? = do you go by?']},
        {t:'chal',en:'Nice to meet you',tr:'Hyggeligt at møde dig',pr:'HUHG-eh-leet at MOO-theh dai',morph:['hyggeligt = nice / cozy','at møde dig = to meet you']}
      ],
      blocks:['<code>jeg hedder…</code> = my name is…','<code>hvad hedder du?</code> = what\'s your name?'] },
    { id:11, title:'Help & emergencies', focus:'hjælp · læge · apotek · sygehus · jeg forstår ikke',
      steps:[
        {t:'say',text:'The word to shout if you need help: <span class="inline-tr">Hjælp!</span> — help!',tr:'Hjælp!'},
        {t:'words',items:[{tr:'Hjælp!',pr:'yelp',en:'Help!'},{tr:'lægen',pr:'LAY-en',en:'the doctor (GP)'},{tr:'apoteket',pr:'ah-poh-TEH-ket',en:'the pharmacy'},{tr:'sygehuset',pr:'SOO-eh-hoo-set',en:'the hospital'},{tr:'Jeg forstår ikke',pr:'yigh for-STOHR EE-geh',en:'I don\'t understand'}]},
        {t:'chal',en:'Help!',tr:'Hjælp!',pr:'yelp',morph:['hjælp = help']},
        {t:'chal',en:'I don\'t understand',tr:'Jeg forstår ikke',pr:'yigh for-STOHR EE-geh',morph:['jeg = I','forstår = understand','ikke = not']},
        {t:'say',text:'To say you need help: <span class="inline-tr">Jeg har brug for hjælp</span>. And if you\'re unwell, <span class="inline-tr">Jeg er syg</span> — I am sick.',tr:'Jeg har brug for hjælp'},
        {t:'chal',en:'I need help',tr:'Jeg har brug for hjælp',pr:'yigh har broo for yelp',morph:['jeg har brug for = I need','hjælp = help']}
      ],
      blocks:['<code>hjælp!</code> = help!','<code>jeg forstår ikke</code> = I don\'t understand','<code>jeg har brug for hjælp</code> = I need help'] },
    { id:12, title:'Tying it together', focus:'hej · tak · hvad koster · capstone',
      steps:[
        {t:'say',text:'Great — you\'ve built a full toolbox. This capstone reuses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello, how are you?',tr:'Hej, hvordan går det?',pr:'HAY, vor-DAN gaw deh',morph:['hej = hello','hvordan går det? = how are you?']},
        {t:'chal',en:'I would like a coffee and a bread, please',tr:'Jeg vil gerne have en kaffe og et brød, vær så venlig',pr:'yigh vil GAIR-neh hah en KAH-feh oh et BRUTH, vair saw VEN-lee',morph:['jeg vil gerne have = I would like','en kaffe = a coffee','og = and','et brød = a bread','vær så venlig = please']},
        {t:'chal',en:'Where is the train station?',tr:'Hvor er togstationen?',pr:'vor air TOH-stah-shoo-nen',morph:['hvor er = where is','togstationen = the train station']},
        {t:'chal',en:'How much is it?',tr:'Hvad koster det?',pr:'vah KOS-ter deh',morph:['hvad koster det? = how much is it?']},
        {t:'chal',en:'It tastes delicious, thanks',tr:'Det smager godt, tak',pr:'deh SMAY-er goht, tahk',morph:['det smager godt = it tastes good','tak = thanks']}
      ],
      blocks:['You built: greetings, ordering with <code>jeg vil gerne</code>, directions, prices and thanks — a full day out in Danish.'] },
    { id:13, title:'Airport & tickets', focus:'lufthavn · pas · billet · fly',
      steps:[
        {t:'say',text:'You have landed in Copenhagen. The building is the <span class="inline-tr">lufthavn</span>. Your document is a <span class="inline-tr">pas</span>.',tr:'lufthavn'},
        {t:'words',items:[{tr:'lufthavnen',pr:'LOOFT-hown-en',en:'the airport'},{tr:'passet',pr:'PAS-et',en:'the passport'},{tr:'billetten',pr:'bee-LEH-ten',en:'the ticket'},{tr:'flyet',pr:'FLEW-et',en:'the flight'},{tr:'gaten',pr:'GAY-ten',en:'the gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'Hvor er lufthavnen?',pr:'vor air LOOFT-hown-en',morph:['hvor er = where is','lufthavnen = the airport']},
        {t:'chal',en:'Here is my passport',tr:'Her er mit pas',pr:'hair er meet pas',morph:['her er = here is','mit pas = my passport']},
        {t:'chal',en:'A ticket, please',tr:'En billet, vær så venlig',pr:'en bee-LEH, vair saw VEN-lee',morph:['en billet = a ticket','vær så venlig = please']},
        {t:'chal',en:'Where is the gate?',tr:'Hvor er gaten?',pr:'vor air GAY-ten',morph:['hvor er = where is','gaten = the gate']}
      ],
      blocks:['<code>lufthavn</code> = airport','<code>pas</code> = passport','<code>billet</code> = ticket'] },
    { id:14, title:'The taxi', focus:'taxa · køre · hotel · stop her',
      steps:[
        {t:'say',text:'Danes often say <span class="inline-tr">taxa</span> for a cab. Ask with <span class="inline-tr">jeg vil gerne køre til</span> — I would like to go to.',tr:'taxa'},
        {t:'words',items:[{tr:'taxaen',pr:'TAHK-sa-en',en:'the taxi'},{tr:'chaufføren',pr:'sho-FOE-ren',en:'the driver'},{tr:'jeg vil gerne køre',pr:'yigh vil GAIR-neh KEU-reh',en:'I would like to go'},{tr:'stop her',pr:'stop hair',en:'stop here'}]},
        {t:'chal',en:'A taxi, please',tr:'En taxa, vær så venlig',pr:'en TAKH-sa, vair saw VEN-lee',morph:['en taxa = a taxi','vær så venlig = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'Jeg vil gerne køre til hotellet',pr:'yigh vil GAIR-neh KEU-reh til ho-TEL-et',morph:['jeg vil gerne = I would like','køre til hotellet = to go to the hotel']},
        {t:'chal',en:'Stop here, please',tr:'Stop her, tak',pr:'stop hair, tahk',morph:['stop her = stop here','tak = please / thanks']},
        {t:'chal',en:'How much is it?',tr:'Hvad koster det?',pr:'vah KOS-ter deh',morph:['hvad = what','koster = costs','det = it']}
      ],
      blocks:['<code>jeg vil gerne køre til …</code> = I would like to go to …','<code>stop her</code> = stop here'] },
    { id:15, title:'The hotel', focus:'reservation · værelse · nøgle · nat',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">jeg har en reservation</span> — I have a reservation.',tr:'reservation'},
        {t:'words',items:[{tr:'hotellet',pr:'ho-TEL-et',en:'the hotel'},{tr:'en reservation',pr:'re-ser-va-SHOWN',en:'a reservation'},{tr:'værelset',pr:'VAIR-el-set',en:'the room'},{tr:'nøglen',pr:'NOY-len',en:'the key'},{tr:'en nat',pr:'en nat',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'Jeg har en reservation',pr:'yigh har en re-ser-va-SHOWN',morph:['jeg har = I have','en reservation = a reservation']},
        {t:'chal',en:'A room for one night, please',tr:'Et værelse til en nat, tak',pr:'et VAIR-el-seh til en nat, tahk',morph:['et værelse = a room','til en nat = for one night','tak = please']},
        {t:'chal',en:'The key, please',tr:'Nøglen, tak',pr:'NOY-len, tahk',morph:['nøglen = the key','tak = please']},
        {t:'chal',en:'Where is my room?',tr:'Hvor er mit værelse?',pr:'vor air meet VAIR-el-seh',morph:['hvor er = where is','mit værelse = my room']}
      ],
      blocks:['<code>reservation</code> = reservation','<code>værelse</code> = room','<code>nøgle</code> = key'] },
    { id:16, title:'Ask for help', focus:'jeg forstår ikke · langsommere · engelsk',
      steps:[
        {t:'say',text:'When Danish is too fast: <span class="inline-tr">Langsommere, tak</span> — slower, please.',tr:'Langsommere, tak'},
        {t:'words',items:[{tr:'langsommere',pr:'LANG-som-eh-reh',en:'slower'},{tr:'igen',pr:'ee-GEN',en:'again'},{tr:'engelsk',pr:'ENG-elsk',en:'English'},{tr:'kan du hjælpe?',pr:'kan doo YEL-peh',en:'can you help?'}]},
        {t:'chal',en:'I don\'t understand',tr:'Jeg forstår ikke',pr:'yigh for-STOHR EE-geh',morph:['jeg = I','forstår = understand','ikke = not']},
        {t:'chal',en:'Slower, please',tr:'Langsommere, tak',pr:'LANG-som-eh-reh, tahk',morph:['langsommere = slower','tak = please']},
        {t:'chal',en:'Can you help me?',tr:'Kan du hjælpe mig?',pr:'kan doo YEL-peh mai',morph:['kan du = can you','hjælpe = help','mig = me']},
        {t:'chal',en:'Do you speak English?',tr:'Taler du engelsk?',pr:'TAH-ler doo ENG-elsk',morph:['taler du = do you speak','engelsk = English']}
      ],
      blocks:['<code>langsommere</code> = slower','<code>taler du engelsk?</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'cafe', title:'☕ At a café', emoji:'☕', turns:[
      {who:'You',tr:'Hej! Jeg vil gerne have en kaffe, vær så venlig.',pr:'HAY, yigh vil GAIR-neh hah en KAH-feh, vair saw VEN-lee',en:'Hi! I would like a coffee, please.'},
      {who:'Barista',tr:'Selvfølgelig. Skal det være her eller med?',pr:'sel-VUL-eh-lee, skal deh vair her eller meh',en:'Of course. For here or to go?'},
      {who:'You',tr:'Med, tak.',pr:'meh, tahk',en:'To go, thanks.'},
      {who:'Barista',tr:'Så er den klar. Det er tredive kroner.',pr:'saw er den klar, deh er treh-DEE-veh KROH-ner',en:'Here you go. That\'s thirty kroner.'},
      {who:'You',tr:'Mange tak!',pr:'MAHNG-eh tahk',en:'Thanks a lot!'}
    ]},
    { id:'tog', title:'🚌 On the bus & train', emoji:'🚌', turns:[
      {who:'You',tr:'Undskyld, hvor er bussen til centrum?',pr:'OON-skyul, vor air BOOS-en til SEN-trum',en:'Excuse me, where is the bus to the city centre?'},
      {who:'Local',tr:'Den er derovre, til venstre.',pr:'den er dair-OH-vuh, til VEN-struh',en:'It\'s over there, on the left.'},
      {who:'You',tr:'Tak. Og hvad koster en billet?',pr:'tahk, oh vah KOS-ter en bee-LEH',en:'Thanks. And how much is a ticket?'},
      {who:'Driver',tr:'Fireogtyve kroner. Bussen går klokken ni.',pr:'FEE-er-oh-ti-veh KROH-ner, BOOS-en gaw KLOK-en nee',en:'Twenty-four kroner. The bus leaves at nine.'}
    ]},
    { id:'restaurant', title:'🍽️ At a restaurant', emoji:'🍽️', turns:[
      {who:'Waiter',tr:'Godaften! Har I et bord?',pr:'goh-AF-ten, har ee et bor',en:'Good evening! Do you have a table?'},
      {who:'You',tr:'Ja, til to, tak.',pr:'yah, til toh, tahk',en:'Yes, for two, please.'},
      {who:'You',tr:'Jeg vil gerne have menuen, tak.',pr:'yigh vil GAIR-neh hah men-YEN, tahk',en:'I would like the menu, please.'},
      {who:'Waiter',tr:'Værsgo. Og hvad kan jeg bringe jer?',pr:'VAIR-go, oh vah kan yigh BRING-eh yer',en:'Here you go. And what can I bring you?'},
      {who:'You',tr:'Jeg vil gerne have fisken og et glas vand.',pr:'yigh vil GAIR-neh hah FIS-ken oh et glas VAN',en:'I would like the fish and a glass of water.'}
    ]},
    { id:'marked', title:'🧺 At the market', emoji:'🧺', turns:[
      {who:'You',tr:'Hvor meget koster æblerne?',pr:'vor MAY-eht KOS-ter EB-ler-neh',en:'How much are the apples?'},
      {who:'Seller',tr:'De koster tyve kroner for et kilo.',pr:'dee KOS-ter ti-veh KROH-ner for et KEE-loh',en:'They cost twenty kroner for a kilo.'},
      {who:'You',tr:'Jeg tager et kilo, tak.',pr:'yigh TA-yer et KEE-loh, tahk',en:'I\'ll take a kilo, please.'},
      {who:'Seller',tr:'Værsgo! Og her er en prøve af et æble.',pr:'VAIR-go, oh her er en PRO-veh av et EB-leh',en:'Here you are! And here\'s a taste of an apple.'},
      {who:'You',tr:'Det smager godt! Mange tak.',pr:'deh SMAY-er goht, MAHNG-eh tahk',en:'It tastes delicious! Thanks a lot.'}
    ]}
  ],
  pocket: [
    {tr:'Hej',pr:'HAY',en:'Hello',c:'Greetings'},
    {tr:'Godmorgen',pr:'goh-MORN',en:'Good morning',c:'Greetings'},
    {tr:'Hvordan går det?',pr:'vor-DAN gaw deh',en:'How are you?',c:'Greetings'},
    {tr:'Det går godt',pr:'deh gaw goht',en:'I am fine',c:'Greetings'},
    {tr:'Tak',pr:'TAHK',en:'Thank you',c:'Courtesy'},
    {tr:'Mange tak',pr:'MAHNG-eh tahk',en:'Thanks a lot',c:'Courtesy'},
    {tr:'Vær så venlig',pr:'vair saw VEN-lee',en:'Please',c:'Courtesy'},
    {tr:'Undskyld',pr:'OON-skyul',en:'Sorry / excuse me',c:'Courtesy'},
    {tr:'Ja',pr:'yah',en:'Yes',c:'Courtesy'},
    {tr:'Nej',pr:'nay',en:'No',c:'Courtesy'},
    {tr:'Velbekomme',pr:'vel-beh-KOM-eh',en:'Enjoy your meal',c:'Courtesy'},
    {tr:'En',pr:'EN',en:'1',c:'Numbers'},
    {tr:'To',pr:'TOH',en:'2',c:'Numbers'},
    {tr:'Tre',pr:'TRAY',en:'3',c:'Numbers'},
    {tr:'Fem',pr:'FEM',en:'5',c:'Numbers'},
    {tr:'Ti',pr:'TEE',en:'10',c:'Numbers'},
    {tr:'Vand',pr:'VAN',en:'water',c:'Food'},
    {tr:'Brød',pr:'BRUTH',en:'bread',c:'Food'},
    {tr:'Kaffe',pr:'KAH-feh',en:'coffee',c:'Food'},
    {tr:'Te',pr:'TEH',en:'tea',c:'Food'},
    {tr:'Øl',pr:'UHL',en:'beer',c:'Food'},
    {tr:'Hvor er…?',pr:'vor air',en:'Where is…?',c:'Directions'},
    {tr:'Til højre',pr:'til HOY-reh',en:'to the right',c:'Directions'},
    {tr:'Til venstre',pr:'til VEN-struh',en:'to the left',c:'Directions'},
    {tr:'Lige ud',pr:'LEE-eh ooth',en:'straight ahead',c:'Directions'},
    {tr:'Bussen',pr:'BOOS-en',en:'the bus',c:'Directions'},
    {tr:'Hvad koster det?',pr:'vah KOS-ter deh',en:'How much is it?',c:'Questions'},
    {tr:'Hvad betyder det?',pr:'vah beh-TY-ther deh',en:'What does that mean?',c:'Questions'},
    {tr:'Kan jeg…?',pr:'kan yigh',en:'Can I…?',c:'Questions'},
    {tr:'I dag',pr:'ee dai',en:'today',c:'Time'},
    {tr:'I morgen',pr:'ee MORN',en:'tomorrow',c:'Time'},
    {tr:'Mandag',pr:'MAN-dai',en:'Monday',c:'Time'},
    {tr:'Søndag',pr:'SUN-dai',en:'Sunday',c:'Time'},
    {tr:'Hjælp!',pr:'yelp',en:'Help!',c:'Emergency'},
    {tr:'Jeg forstår ikke',pr:'yigh for-STOHR EE-geh',en:'I don\'t understand',c:'Emergency'},
    {tr:'Hvor er toilettet?',pr:'vor air toh-LEH-tet',en:'Where is the toilet?',c:'Emergency'},
    {tr:'Lufthavnen',pr:'LOOFT-hown-en',en:'airport',c:'Travel'},
    {tr:'Taxaen',pr:'TAHK-sa-en',en:'taxi',c:'Travel'},
    {tr:'Hotellet',pr:'ho-TEL-et',en:'hotel',c:'Travel'},
    {tr:'Stop her',pr:'stop hair',en:'stop here',c:'Travel'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Questions','Time','Emergency','Travel'],
  culture: [
    {icon:'🕯️',title:'Hygge is everything',body:'Hygge (pronounced \'hoo-gah\') is Denmark\'s famous cosiness — candles, good company, warmth. It\'s the reason Danes are often ranked among the happiest people. Lighting a candle is a genuine act of hospitality.'},
    {icon:'🚲',title:'Everyone cycles',body:'In cities like Copenhagen, bikes outnumber people. Cyclists and pedestrians both signal and follow the rules — don\'t stand in the bike lane. Many trains let you bring a bike on board too.'},
    {icon:'🥪',title:'Smørrebrød — open sandwiches',body:'Smørrebrød is \'buttered bread\' — an open sandwich on dark rye, piled with toppings like pickled herring, cold cuts or remoulade. It\'s a lunch art form, served with care. Order one at any lunch spot.'},
    {icon:'💬',title:'Danes are direct',body:'Danes say exactly what they mean, and that\'s not rude. A plain \'ja\' or \'nej\' is normal. Don\'t read it as unfriendliness — it\'s efficient and honest.'},
    {icon:'💳',title:'Card is king, tipping is small',body:'Denmark is nearly cash-free — every shop takes a card. Tipping is built into the price; rounding up is appreciated but never expected, and staff are paid a proper wage.'},
    {icon:'☀️',title:'The dark winter',body:'Danish winters are dark and long, but Danes face them with candles, warm blankets and a plan. In summer the light barely ends. Adjusting your rhythm to both is itself a kind of hygge.'}
  ],
  sounds: [
    {l:'æ',say:'like the "a" in cat, but a little longer',ex:'æble = apple',voice:'æble'},
    {l:'ø',say:'say "er" in her with rounded lips',ex:'øl = beer',voice:'øl'},
    {l:'å',say:'like the "aw" in law',ex:'gå = to go',voice:'gå'},
    {l:'stød',say:'the glottal stop — a short catch or "click" inside a syllable',ex:'en mand = a man',voice:'mand'},
    {l:'d',say:'the soft d — between vowels it sounds like a very light "th" or "l"',ex:'mad = food',voice:'mad'},
    {l:'g',say:'after a vowel it softens toward a "y" or becomes a small hitch',ex:'jeg = I',voice:'jeg'},
    {l:'r',say:'a guttural r at the back of the throat, like French or German',ex:'rød = red',voice:'rød'},
    {l:'j',say:'always like the "y" in yes',ex:'jeg hedder = my name is',voice:'jeg hedder'}
  ],
  resources: [
    {icon:'🎧',t:'Easy Danish',d:'Real street interviews with native Danes and subtitles — natural, everyday Danish.',q:'Easy Danish street interviews'},
    {icon:'🐢',t:'Mic\'s Languages',d:'Clear, slow Danish explained in English — perfect for absolute beginners.',q:'Mic\'s Languages Danish grammar'},
    {icon:'📚',t:'DanishClass101',d:'Structured beginner lessons in short, doable audio and video episodes.',q:'DanishClass101 beginner Danish lessons'},
    {icon:'💬',t:'Coffee Break Danish',d:'Friendly, bite-sized lessons you can pick up on a walk or commute.',q:'Coffee Break Danish'},
    {icon:'🚲',t:'Danish Tube',d:'Everyday-life videos and grammar tips from a Denmark-based creator.',q:'Danish Tube Danish lessons'}
  ]
};
