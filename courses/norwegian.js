/* ---- norwegian ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["norwegian"] = {
  name: 'Norwegian',
  flag: '🇳🇴',
  tts: 'no-NO',
  dir: 'ltr',
  native: 'Norsk',
  soundTitle: 'Norwegian sounds & spelling',
  soundIntro: 'Norwegian is written with the Latin alphabet, but a few sounds trip up English speakers — like the soft <b>kj</b> (not a hard k) and the retroflex \'r\' sounds eastern Norwegians use. Learn these and you can read almost any word aloud.',
  grammar: '<p>Norwegian uses the Latin alphabet plus three extra vowels: <b>æ</b>, <b>ø</b> and <b>å</b>. Word order is like English — <i>subject + verb</i>. To make a yes/no question you often just swap them: <i>kan du…?</i> = can you…?. Nouns come in three genders, <b>en</b>, <b>ei</b> and <b>et</b> — <b>en</b> is by far the most common. Verbs stay the same for all people: <i>jeg er, du er, han er</i> (I am, you are, he is).</p>',
  bridges: '<div class="note">🇬🇧 <b>English.</b> Norwegian is a North Germanic language and a close relative of English. Some words are near-identical: <i>vann</i> ≈ water, <i>dør</i> ≈ door, <i>kaffe</i> ≈ coffee, <i>mann</i> ≈ man, <i>hus</i> ≈ house.</div><div class="note">🇩🇰🇸🇪 <b>Danish & Swedish.</b> Norwegian sits right between its neighbours — Danes, Swedes and Norwegians can usually understand each other. Learn Norwegian and two more languages are in reach.</div>',
  lessons: [
    { id:1, title:'Greetings & saying hello', focus:'hei · god morgen · god kveld · ha det bra',
      steps:[
        {t:'say',text:'The very first word you\'ll use: <span class="inline-tr">hei</span> — hello. Say it out loud — it sounds just like English \'hi\'.',tr:'hei'},
        {t:'words',items:[{tr:'hei',pr:'hai',en:'hi / hello'},{tr:'god morgen',pr:'goh MORN',en:'good morning'},{tr:'god kveld',pr:'goh KVEL',en:'good evening'},{tr:'ha det bra',pr:'hah deh BRAH',en:'goodbye'},{tr:'hyggelig å møte deg',pr:'HUGG-lee oh MUR-teh dai',en:'nice to meet you'}]},
        {t:'chal',en:'Hello! Good morning!',tr:'Hei! God morgen!',pr:'hai! goh MORN',morph:['hei = hello','god morgen = good morning']},
        {t:'say',text:'To say goodbye, use <span class="inline-tr">ha det bra</span> — literally \'have it good\'.',tr:'ha det bra'},
        {t:'chal',en:'Goodbye!',tr:'Ha det bra!',pr:'hah deh BRAH',morph:['ha det = have it','bra = good']}
      ],
      blocks:['<code>hei</code> = hello','<code>god morgen</code> / <code>god kveld</code> = good morning / evening','<code>ha det bra</code> = goodbye'] },
    { id:2, title:'Polite words', focus:'takk · vær så snill · unnskyld · ja / nei',
      steps:[
        {t:'say',text:'The two politeness essentials: <span class="inline-tr">takk</span> (thank you) and <span class="inline-tr">vær så snill</span> (please).',tr:'takk'},
        {t:'words',items:[{tr:'takk',pr:'tahk',en:'thank you'},{tr:'vær så snill',pr:'vair so snill',en:'please'},{tr:'unnskyld',pr:'UN-shill',en:'excuse me / sorry'},{tr:'ja',pr:'YAH',en:'yes'},{tr:'nei',pr:'NAI',en:'no'}]},
        {t:'chal',en:'Yes, please',tr:'Ja, takk',pr:'YAH, tahk',morph:['ja = yes','takk = thanks']},
        {t:'say',text:'The reply to <span class="inline-tr">takk</span> is <span class="inline-tr">bare hyggelig</span> — you\'re welcome. To make it warmer, <span class="inline-tr">tusen takk</span> means \'thanks a lot\'.',tr:'bare hyggelig'},
        {t:'chal',en:'No, thanks',tr:'Nei, takk',pr:'NAI, tahk',morph:['nei = no','takk = thanks']}
      ],
      blocks:['<code>takk</code> = thank you','<code>vær så snill</code> = please','<code>ja</code> / <code>nei</code> = yes / no'] },
    { id:3, title:'Numbers 1–10', focus:'en · to · tre · fire · fem · ti',
      steps:[
        {t:'say',text:'Numbers are the fastest win. Listen and repeat: <span class="inline-tr">en, to, tre</span>.',tr:'en'},
        {t:'words',items:[{tr:'en',pr:'en',en:'1'},{tr:'to',pr:'TOO',en:'2'},{tr:'tre',pr:'TRAY',en:'3'},{tr:'fire',pr:'FEE-reh',en:'4'},{tr:'fem',pr:'fem',en:'5'},{tr:'ti',pr:'TEE',en:'10'}]},
        {t:'chal',en:'One coffee, please',tr:'En kaffe, vær så snill',pr:'en KAHF-feh, vair so snill',morph:['en = one','kaffe = coffee','vær så snill = please']},
        {t:'say',text:'To ask a price: <span class="inline-tr">hvor mye koster det?</span> = how much does it cost? Or just <span class="inline-tr">hvor mye?</span>',tr:'hvor mye koster det?'},
        {t:'words',items:[{tr:'seks',pr:'seks',en:'6'},{tr:'sju',pr:'SHOO',en:'7'},{tr:'åtte',pr:'OT-tuh',en:'8'},{tr:'ni',pr:'NEE',en:'9'},{tr:'hvor mye koster det?',pr:'voor MY-yuh KOS-ter det',en:'how much does it cost?'}]},
        {t:'chal',en:'It\'s ten kroner',tr:'Det er ti kroner',pr:'det air TEE KROO-ner',morph:['det er = it is','ti = ten','kroner = kroner (the currency)']}
      ],
      blocks:['en, to, tre, fire, fem = 1–5','<code>hvor mye koster det?</code> = how much is it?','<code>kroner</code> = Norwegian money'] },
    { id:4, title:'"I want" — å ville', focus:'jeg vil · jeg vil gjerne · kan jeg få',
      steps:[
        {t:'say',text:'To say what you want: <span class="inline-tr">jeg vil</span> — I want. More polite: <span class="inline-tr">jeg vil gjerne</span> — I would like.',tr:'jeg vil gjerne'},
        {t:'words',items:[{tr:'jeg',pr:'YAI',en:'I'},{tr:'jeg vil',pr:'yai VIL',en:'I want'},{tr:'jeg vil gjerne',pr:'yai vil YER-nuh',en:'I would like'},{tr:'kan jeg få...?',pr:'kahn yai FOH',en:'can I get...?'},{tr:'vær så snill',pr:'vair so snill',en:'please'}]},
        {t:'chal',en:'I would like a coffee',tr:'Jeg vil gjerne ha en kaffe',pr:'yai vil YER-nuh hah en KAHF-feh',morph:['jeg vil gjerne = I would like','ha = have','en kaffe = a coffee']},
        {t:'chal',en:'I want a water',tr:'Jeg vil ha vann',pr:'yai vil hah vahn',morph:['jeg vil = I want','ha = have','vann = water']},
        {t:'say',text:'To ask for something politely: <span class="inline-tr">kan jeg få…?</span> = can I get…?. The magic phrase in cafés and shops.',tr:'kan jeg få?'},
        {t:'chal',en:'Can I get a coffee?',tr:'Kan jeg få en kaffe?',pr:'kahn yai FOH en KAHF-feh',morph:['kan jeg = can I','få = get','en kaffe = a coffee']}
      ],
      blocks:['<code>jeg vil</code> = I want','<code>jeg vil gjerne</code> = I would like','<code>kan jeg få…?</code> = can I get…?'] },
    { id:5, title:'Food & drink', focus:'vann · brød · kaffe · te',
      steps:[
        {t:'say',text:'Eating out or grabbing a drink? Key words: <span class="inline-tr">vann</span> (water), <span class="inline-tr">brød</span> (bread), <span class="inline-tr">kaffe</span> (coffee), <span class="inline-tr">te</span> (tea).',tr:'vann'},
        {t:'words',items:[{tr:'vann',pr:'vahn',en:'water',link:'≈ English water'},{tr:'brød',pr:'BRUH',en:'bread',link:'≈ English bread'},{tr:'kaffe',pr:'KAHF-feh',en:'coffee',link:'≈ English coffee'},{tr:'te',pr:'TAY',en:'tea',link:'≈ English tea'},{tr:'melk',pr:'MELK',en:'milk',link:'≈ English milk'},{tr:'øl',pr:'UHL',en:'beer'}]},
        {t:'chal',en:'Water and bread, please',tr:'Vann og brød, vær så snill',pr:'vahn oh BRUH, vair so snill',morph:['vann = water','og = and','brød = bread','vær så snill = please']},
        {t:'chal',en:'I would like a coffee with milk',tr:'Jeg vil gjerne ha en kaffe med melk',pr:'yai vil YER-nuh hah en KAHF-feh meh MELK',morph:['jeg vil gjerne ha = I would like','en kaffe = a coffee','med = with','melk = milk']},
        {t:'say',text:'To ask for the bill: <span class="inline-tr">kan jeg få regningen?</span> = can I have the bill?',tr:'regningen'},
        {t:'chal',en:'The bill, please',tr:'Regningen, vær så snill',pr:'RAIN-ning-en, vair so snill',morph:['regningen = the bill','vær så snill = please']}
      ],
      blocks:['<code>vann</code>, <code>brød</code>, <code>kaffe</code>, <code>te</code> = water, bread, coffee, tea','<code>regningen</code> = the bill'] },
    { id:6, title:'Getting around', focus:'hvor er · til høyre · til venstre · rett fram',
      steps:[
        {t:'say',text:'The most useful question in any town: <span class="inline-tr">hvor er…?</span> = where is…?. Pronounced \'voor air\'.',tr:'hvor er?'},
        {t:'words',items:[{tr:'Hvor er...?',pr:'voor AIR',en:'Where is...?'},{tr:'til høyre',pr:'til HOY-reh',en:'to the right'},{tr:'til venstre',pr:'til VEN-streh',en:'to the left'},{tr:'rett fram',pr:'ret FRAM',en:'straight ahead'},{tr:'stasjonen',pr:'stah-SHOON-en',en:'the station',link:'≈ English station'},{tr:'bussen / toget',pr:'BOOS-sen / TOH-get',en:'the bus / the train'}]},
        {t:'chal',en:'Where is the station?',tr:'Hvor er stasjonen?',pr:'voor AIR stah-SHOON-en',morph:['hvor = where','er = is','stasjonen = the station']},
        {t:'chal',en:'Where is the bathroom?',tr:'Hvor er toalettet?',pr:'voor AIR toh-ah-LET-et',morph:['hvor er = where is','toalettet = the bathroom']},
        {t:'say',text:'<span class="inline-tr">til høyre</span> (right) and <span class="inline-tr">til venstre</span> (left) tell you which way to turn. Straight on is <span class="inline-tr">rett fram</span>.',tr:'til høyre'},
        {t:'chal',en:'Straight ahead, please',tr:'Rett fram, vær så snill',pr:'ret FRAM, vair so snill',morph:['rett fram = straight ahead','vær så snill = please']}
      ],
      blocks:['<code>hvor er…?</code> = where is…?','<code>til høyre</code> / <code>til venstre</code> = right / left','<code>rett fram</code> = straight ahead'] },
    { id:7, title:'Questions & "do you have…?"', focus:'har du · kan du · hva · når',
      steps:[
        {t:'say',text:'To ask if someone has something: <span class="inline-tr">har du…?</span> = do you have…?. For several people, <span class="inline-tr">har dere…?</span>.',tr:'har du?'},
        {t:'chal',en:'Do you have a table?',tr:'Har dere et bord?',pr:'har DAY-reh et BOR',morph:['har = have','dere = you (plural)','et bord = a table']},
        {t:'say',text:'Question words: <span class="inline-tr">hva?</span> (what), <span class="inline-tr">når?</span> (when), <span class="inline-tr">hvorfor?</span> (why), <span class="inline-tr">hvem?</span> (who).',tr:'når?'},
        {t:'words',items:[{tr:'Hva?',pr:'VAH',en:'What?'},{tr:'Når?',pr:'NOHR',en:'When?'},{tr:'Hvorfor?',pr:'voor-FOR',en:'Why?'},{tr:'Hvem?',pr:'VEM',en:'Who?'},{tr:'Hvordan?',pr:'voor-DAHN',en:'How?'}]},
        {t:'say',text:'<span class="inline-tr">kan du…?</span> = can you…? — handy for asking for help.',tr:'kan du?'},
        {t:'chal',en:'Can you help me?',tr:'Kan du hjelpe meg?',pr:'kahn doo YEL-peh MAI',morph:['kan du = can you','hjelpe = help','meg = me']}
      ],
      blocks:['<code>har du…?</code> = do you have…?','<code>kan du…?</code> = can you…?','<code>hva / når / hvorfor</code> = what / when / why'] },
    { id:8, title:'Family & people', focus:'familien · mor · far · bror · venn',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">familien</span> (the family), <span class="inline-tr">mor</span> (mother), <span class="inline-tr">far</span> (father).',tr:'familien'},
        {t:'words',items:[{tr:'familien',pr:'fah-MEE-lee-en',en:'the family'},{tr:'mor',pr:'MOOR',en:'mother',link:'≈ English mother'},{tr:'far',pr:'FAHR',en:'father',link:'≈ English father'},{tr:'bror',pr:'BROOR',en:'brother',link:'≈ English brother'},{tr:'søster',pr:'SUS-ter',en:'sister',link:'≈ English sister'},{tr:'venn',pr:'VEN',en:'friend'}]},
        {t:'chal',en:'I have a brother',tr:'Jeg har en bror',pr:'yai har en BROOR',morph:['jeg = I','har = have','en bror = a brother']},
        {t:'say',text:'<span class="inline-tr">Jeg har</span> = I have. It\'s the verb to say what you\'ve got.',tr:'jeg har'},
        {t:'chal',en:'I have a family',tr:'Jeg har en familie',pr:'yai har en fah-MEE-lee',morph:['jeg har = I have','en familie = a family']}
      ],
      blocks:['<code>mor</code> / <code>far</code> = mother / father','<code>bror</code> / <code>søster</code> = brother / sister','<code>jeg har</code> = I have'] },
    { id:9, title:'Time, days & weather', focus:'i dag · i morgen · dagen · været',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">i dag</span>, tomorrow is <span class="inline-tr">i morgen</span>.',tr:'i dag'},
        {t:'words',items:[{tr:'i dag',pr:'ee DAHG',en:'today'},{tr:'i morgen',pr:'ee MOR-gen',en:'tomorrow'},{tr:'mandag',pr:'MAHN-dahg',en:'Monday'},{tr:'fredag',pr:'FRAY-dahg',en:'Friday'},{tr:'helgen',pr:'HEL-gen',en:'the weekend'}]},
        {t:'chal',en:'See you tomorrow',tr:'Vi sees i morgen',pr:'vee sees ee MOR-gen',morph:['vi sees = we see (each other)','i morgen = tomorrow']},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">hvordan er været?</span> = how is the weather?. Reply <span class="inline-tr">det regner</span> = it\'s raining.',tr:'hvordan er været?'},
        {t:'chal',en:'It\'s raining',tr:'Det regner',pr:'det RAIN-er',morph:['det = it','regner = it rains']}
      ],
      blocks:['<code>i dag</code> / <code>i morgen</code> = today / tomorrow','<code>hvordan er været?</code> = how\'s the weather?','<code>det regner</code> = it\'s raining'] },
    { id:10, title:'Introducing yourself', focus:'jeg heter · hva heter du?',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">jeg heter…</span> = my name is…. Say it \'yai het-er\'.',tr:'jeg heter'},
        {t:'chal',en:'My name is __NAME__',tr:'Jeg heter __NAME__',pr:'yai HET-er __NAME__',morph:['jeg heter = my name is','__NAME__ = your name']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">hva heter du?</span> = what\'s your name?.',tr:'hva heter du?'},
        {t:'chal',en:'What\'s your name?',tr:'Hva heter du?',pr:'VAH HET-er doo',morph:['hva = what','heter = is named','du = you']},
        {t:'say',text:'Pleased to meet you: <span class="inline-tr">hyggelig å møte deg</span>.',tr:'hyggelig å møte deg'},
        {t:'chal',en:'Nice to meet you',tr:'Hyggelig å møte deg',pr:'HUGG-lee oh MUR-teh dai',morph:['hyggelig = pleasant','å møte = to meet','deg = you']}
      ],
      blocks:['<code>jeg heter…</code> = my name is…','<code>hva heter du?</code> = what\'s your name?','<code>hyggelig å møte deg</code> = nice to meet you'] },
    { id:11, title:'Health & emergency', focus:'hjelp! · legen · apoteket · jeg forstår ikke',
      steps:[
        {t:'say',text:'The most important words if you need help: <span class="inline-tr">hjelp!</span> (help!), <span class="inline-tr">legen</span> (the doctor), <span class="inline-tr">apoteket</span> (the pharmacy).',tr:'hjelp'},
        {t:'words',items:[{tr:'Hjelp!',pr:'YELP',en:'help!',link:'≈ English help'},{tr:'legen',pr:'LAY-gen',en:'the doctor'},{tr:'apoteket',pr:'ah-poh-TAYK-et',en:'the pharmacy',link:'≈ pharmacy'},{tr:'Jeg forstår ikke',pr:'yai fohr-STOR IK-kuh',en:'I don\'t understand'},{tr:'politiet',pr:'poh-lee-TEE-et',en:'the police',link:'≈ English police'},{tr:'Jeg er syk',pr:'yai air SEEK',en:'I am sick'}]},
        {t:'chal',en:'Help!',tr:'Hjelp!',pr:'YELP',morph:['hjelp = help']},
        {t:'chal',en:'I need help',tr:'Jeg trenger hjelp',pr:'yai TRENG-er YELP',morph:['jeg = I','trenger = need','hjelp = help']},
        {t:'chal',en:'I don\'t understand',tr:'Jeg forstår ikke',pr:'yai fohr-STOR IK-kuh',morph:['jeg = I','forstår = understand','ikke = not']}
      ],
      blocks:['<code>hjelp!</code> = help!','<code>legen</code> / <code>apoteket</code> = doctor / pharmacy','<code>jeg forstår ikke</code> = I don\'t understand'] },
    { id:12, title:'Tying it together', focus:'a full day out in Norwegian',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolbox. This capstone uses only words you\'ve met. Build each line yourself before revealing it.'},
        {t:'chal',en:'Hello! My name is __NAME__',tr:'Hei! Jeg heter __NAME__',pr:'hai! yai HET-er __NAME__',morph:['hei = hello','jeg heter = my name is']},
        {t:'chal',en:'I would like a coffee, please',tr:'Jeg vil gjerne ha en kaffe, vær så snill',pr:'yai vil YER-nuh hah en KAHF-feh, vair so snill',morph:['jeg vil gjerne ha = I would like','en kaffe = a coffee','vær så snill = please']},
        {t:'chal',en:'How much is it?',tr:'Hvor mye koster det?',pr:'voor MY-yuh KOS-ter det',morph:['hvor mye = how much','koster = does it cost','det = it']},
        {t:'chal',en:'Where is the station?',tr:'Hvor er stasjonen?',pr:'voor AIR stah-SHOON-en',morph:['hvor er = where is','stasjonen = the station']},
        {t:'chal',en:'Thank you! Goodbye!',tr:'Tusen takk! Ha det bra!',pr:'TOO-sen tahk! hah deh BRAH',morph:['tusen takk = thanks a lot','ha det bra = goodbye']}
      ],
      blocks:['You built: greetings, introducing yourself, ordering, asking prices, directions and thanks — a full day out in Norwegian.'] },
    { id:13, title:'Airport & tickets', focus:'flyplass · pass · billett · gate',
      steps:[
        {t:'say',text:'You have landed. The building is the <span class="inline-tr">flyplass</span>. Your document is a <span class="inline-tr">pass</span>.',tr:'flyplassen'},
        {t:'words',items:[{tr:'flyplassen',pr:'FLEE-plahs-en',en:'the airport'},{tr:'passet',pr:'PAHS-et',en:'the passport'},{tr:'billetten',pr:'bil-LET-en',en:'the ticket'},{tr:'gaten',pr:'GAA-ten',en:'the gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'Hvor er flyplassen?',pr:'voor AIR FLEE-plahs-en',morph:['hvor er = where is','flyplassen = the airport']},
        {t:'chal',en:'Here is my passport',tr:'Her er passet mitt',pr:'hair air PAHS-et mit',morph:['her er = here is','passet mitt = my passport']},
        {t:'chal',en:'A ticket, please',tr:'En billett, vær så snill',pr:'en bil-LET, vair so snill',morph:['en billett = a ticket','vær så snill = please']},
        {t:'chal',en:'Where is the gate?',tr:'Hvor er gaten?',pr:'voor AIR GAA-ten',morph:['hvor er = where is','gaten = the gate']}
      ],
      blocks:['<code>flyplassen</code> = the airport','<code>passet</code> = the passport','<code>billetten</code> = the ticket'] },
    { id:14, title:'The taxi', focus:'taxi · til hotellet · stopp her',
      steps:[
        {t:'say',text:'The driver is waiting. <span class="inline-tr">taxi</span> is the same word. Tell them <span class="inline-tr">jeg vil gjerne til hotellet</span>.',tr:'taxi'},
        {t:'words',items:[{tr:'taxi',pr:'TAK-see',en:'taxi'},{tr:'sjåføren',pr:'shoh-FUR-en',en:'the driver'},{tr:'jeg vil gjerne til',pr:'yai vil YER-nuh til',en:'I would like to go to'},{tr:'stopp her',pr:'stop hair',en:'stop here'}]},
        {t:'chal',en:'Taxi, please',tr:'Taxi, vær så snill',pr:'TAK-see, vair so snill',morph:['taxi = taxi','vær så snill = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'Jeg vil gjerne til hotellet',pr:'yai vil YER-nuh til hoo-TEL-et',morph:['jeg vil gjerne = I would like','til hotellet = to the hotel']},
        {t:'chal',en:'Stop here, please',tr:'Stopp her, vær så snill',pr:'stop hair, vair so snill',morph:['stopp her = stop here','vær så snill = please']},
        {t:'chal',en:'How much is it?',tr:'Hvor mye koster det?',pr:'voor MY-yuh KOS-ter det',morph:['hvor mye = how much','koster det = does it cost']}
      ],
      blocks:['<code>jeg vil gjerne til …</code> = I would like to go to …','<code>stopp her</code> = stop here'] },
    { id:15, title:'The hotel', focus:'reservasjon · rom · nøkkel · natt',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">jeg har en reservasjon</span> — I have a reservation.',tr:'reservasjon'},
        {t:'words',items:[{tr:'hotellet',pr:'hoo-TEL-et',en:'the hotel'},{tr:'en reservasjon',pr:'en reh-ser-va-SHOON',en:'a reservation'},{tr:'et rom',pr:'et rom',en:'a room'},{tr:'nøkkelen',pr:'NUK-kel-en',en:'the key'},{tr:'én natt',pr:'ayn nat',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'Jeg har en reservasjon',pr:'yai haar en reh-ser-va-SHOON',morph:['jeg har = I have','en reservasjon = a reservation']},
        {t:'chal',en:'A room for one night, please',tr:'Et rom for én natt, vær så snill',pr:'et rom for ayn nat, vair so snill',morph:['et rom = a room','for én natt = for one night','vær så snill = please']},
        {t:'chal',en:'The key, please',tr:'Nøkkelen, vær så snill',pr:'NUK-kel-en, vair so snill',morph:['nøkkelen = the key','vær så snill = please']},
        {t:'chal',en:'Where is my room?',tr:'Hvor er rommet mitt?',pr:'voor AIR ROM-et mit',morph:['hvor er = where is','rommet mitt = my room']}
      ],
      blocks:['<code>reservasjon</code> = reservation','<code>rom</code> = room','<code>nøkkelen</code> = the key'] },
    { id:16, title:'Ask for help', focus:'jeg forstår ikke · saktere · engelsk',
      steps:[
        {t:'say',text:'When Norwegian is too fast: <span class="inline-tr">snakk saktere, vær så snill</span> — speak more slowly, please.',tr:'saktere'},
        {t:'words',items:[{tr:'saktere',pr:'SAHK-teh-reh',en:'slower'},{tr:'igjen',pr:'ee-YEN',en:'again'},{tr:'engelsk',pr:'ENG-elsk',en:'English'},{tr:'kan du hjelpe?',pr:'kahn doo YEL-peh',en:'can you help?'}]},
        {t:'chal',en:'I don\'t understand',tr:'Jeg forstår ikke',pr:'yai fohr-STOR IK-kuh',morph:['jeg = I','forstår = understand','ikke = not']},
        {t:'chal',en:'Speak slowly, please',tr:'Snakk saktere, vær så snill',pr:'snahk SAHK-teh-reh, vair so snill',morph:['snakk = speak','saktere = slower','vær så snill = please']},
        {t:'chal',en:'Can you help me?',tr:'Kan du hjelpe meg?',pr:'kahn doo YEL-peh mai',morph:['kan du = can you','hjelpe = help','meg = me']},
        {t:'chal',en:'Do you speak English?',tr:'Snakker du engelsk?',pr:'SNAHK-ker doo ENG-elsk',morph:['snakker du = do you speak','engelsk = English']}
      ],
      blocks:['<code>snakk saktere</code> = speak slower','<code>snakker du engelsk?</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'kafe', title:'☕ At a café', emoji:'☕', turns:[
      {who:'You',tr:'Hei! Kan jeg få en kaffe, vær så snill?',pr:'hai! kahn yai FOH en KAHF-feh, vair so snill',en:'Hi! Can I get a coffee, please?'},
      {who:'Barista',tr:'Selvfølgelig. Skal det være noe annet?',pr:'SEL-ful-lee. skahL det VEH-reh NOH-eh AH-net',en:'Of course. Anything else?'},
      {who:'You',tr:'Ja, et glass vann, takk.',pr:'YAH, et glahs vahn, tahk',en:'Yes, a glass of water, thanks.'},
      {who:'Barista',tr:'Vær så god. Det blir femti kroner.',pr:'vair so GOH. det bleer FEM-tee KROO-ner',en:'Here you go. That\'ll be fifty kroner.'},
      {who:'You',tr:'Tusen takk!',pr:'TOO-sen tahk',en:'Thanks a lot!'}
    ]},
    { id:'transport', title:'🚌 On the bus', emoji:'🚌', turns:[
      {who:'You',tr:'Unnskyld, hvor går bussen til sentrum?',pr:'UN-shill, voor gohr BOOS-sen til SEN-trum',en:'Excuse me, where does the bus to the centre go?'},
      {who:'Driver',tr:'Den går til sentrum. Du må bytte på stasjonen.',pr:'den gohr til SEN-trum. doo moh BYT-tuh poh stah-SHOON-en',en:'It goes to the centre. You have to change at the station.'},
      {who:'You',tr:'Hvor mye koster en billett?',pr:'voor MY-yuh KOS-ter en bee-LET',en:'How much does a ticket cost?'},
      {who:'Driver',tr:'Femti kroner.',pr:'FEM-tee KROO-ner',en:'Fifty kroner.'},
      {who:'You',tr:'Takk! Når går neste tog?',pr:'tahk! nohr gohr NES-teh TOHG',en:'Thanks! When does the next train go?'}
    ]},
    { id:'restaurant', title:'🍽️ At a restaurant', emoji:'🍽️', turns:[
      {who:'Waiter',tr:'God kveld! Et bord for to?',pr:'goh KVEL! et BOR for TOO',en:'Good evening! A table for two?'},
      {who:'You',tr:'Ja, takk. Kan vi få menyen?',pr:'YAH, tahk. kahn vee FOH MEH-nyen',en:'Yes, thanks. Can we have the menu?'},
      {who:'You',tr:'Jeg vil gjerne ha fisken og en te.',pr:'yai vil YER-nuh hah FIS-ken oh en TAY',en:'I\'d like the fish and a tea.'},
      {who:'Waiter',tr:'Utmerket valg! Velbekomme.',pr:'OOT-mer-ket VALG! VEL-beh-KOM-meh',en:'Excellent choice! Enjoy your meal.'}
    ]},
    { id:'market', title:'🛍️ At the market', emoji:'🛍️', turns:[
      {who:'You',tr:'Hvor mye koster dette?',pr:'voor MY-yuh KOS-ter DET-teh',en:'How much does this cost?'},
      {who:'Seller',tr:'Tre hundre kroner.',pr:'TRAY HUN-dreh KROO-ner',en:'Three hundred kroner.'},
      {who:'You',tr:'Det er litt dyrt. Kan du gi en rabatt?',pr:'det air lit DYRT. kahn doo GEE en rah-BAHT',en:'That\'s a bit expensive. Can you give a discount?'},
      {who:'Seller',tr:'Ok, to hundre og femti.',pr:'ohk, TOO HUN-dreh oh FEM-tee',en:'OK, two hundred and fifty.'},
      {who:'You',tr:'Da tar jeg den!',pr:'dah TAHR yai den',en:'Then I\'ll take it!'}
    ]}
  ],
  pocket: [
    {tr:'Hei',pr:'hai',en:'Hello',c:'Greetings'},
    {tr:'God morgen',pr:'goh MORN',en:'Good morning',c:'Greetings'},
    {tr:'Ha det bra',pr:'hah deh BRAH',en:'Goodbye',c:'Greetings'},
    {tr:'Jeg heter __NAME__',pr:'yai HET-er',en:'My name is...',c:'Greetings'},
    {tr:'Takk',pr:'tahk',en:'Thank you',c:'Courtesy'},
    {tr:'Tusen takk',pr:'TOO-sen tahk',en:'Thanks a lot',c:'Courtesy'},
    {tr:'Vær så snill',pr:'vair so snill',en:'Please',c:'Courtesy'},
    {tr:'Vær så god',pr:'vair so goh',en:'Here you go',c:'Courtesy'},
    {tr:'Unnskyld',pr:'UN-shill',en:'Excuse me / sorry',c:'Courtesy'},
    {tr:'Ja',pr:'YAH',en:'Yes',c:'Courtesy'},
    {tr:'Nei',pr:'NAI',en:'No',c:'Courtesy'},
    {tr:'En',pr:'en',en:'1',c:'Numbers'},
    {tr:'To',pr:'TOO',en:'2',c:'Numbers'},
    {tr:'Tre',pr:'TRAY',en:'3',c:'Numbers'},
    {tr:'Fire',pr:'FEE-reh',en:'4',c:'Numbers'},
    {tr:'Fem',pr:'fem',en:'5',c:'Numbers'},
    {tr:'Ti',pr:'TEE',en:'10',c:'Numbers'},
    {tr:'Vann',pr:'vahn',en:'water',c:'Food & drink'},
    {tr:'Brød',pr:'BRUH',en:'bread',c:'Food & drink'},
    {tr:'Kaffe',pr:'KAHF-feh',en:'coffee',c:'Food & drink'},
    {tr:'Te',pr:'TAY',en:'tea',c:'Food & drink'},
    {tr:'Regningen',pr:'RAIN-ning-en',en:'the bill',c:'Food & drink'},
    {tr:'Jeg vil gjerne ha',pr:'yai vil YER-nuh hah',en:'I would like',c:'Food & drink'},
    {tr:'Hvor er...?',pr:'voor AIR',en:'Where is...?',c:'Directions'},
    {tr:'Til høyre',pr:'til HOY-reh',en:'to the right',c:'Directions'},
    {tr:'Til venstre',pr:'til VEN-streh',en:'to the left',c:'Directions'},
    {tr:'Rett fram',pr:'ret FRAM',en:'straight ahead',c:'Directions'},
    {tr:'Stasjonen',pr:'stah-SHOON-en',en:'the station',c:'Directions'},
    {tr:'Hva?',pr:'VAH',en:'What?',c:'Questions'},
    {tr:'Når?',pr:'NOHR',en:'When?',c:'Questions'},
    {tr:'Hvordan er været?',pr:'voor-DAHN air VE-ret',en:'How\'s the weather?',c:'Questions'},
    {tr:'Hvor mye koster det?',pr:'voor MY-yuh KOS-ter det',en:'How much is it?',c:'Questions'},
    {tr:'Mor',pr:'MOOR',en:'mother',c:'Family'},
    {tr:'Far',pr:'FAHR',en:'father',c:'Family'},
    {tr:'Bror',pr:'BROOR',en:'brother',c:'Family'},
    {tr:'Søster',pr:'SUS-ter',en:'sister',c:'Family'},
    {tr:'Hjelp!',pr:'YELP',en:'Help!',c:'Emergency'},
    {tr:'Jeg trenger hjelp',pr:'yai TRENG-er YELP',en:'I need help',c:'Emergency'},
    {tr:'Jeg forstår ikke',pr:'yai fohr-STOR IK-kuh',en:'I don\'t understand',c:'Emergency'},
    {tr:'Legen',pr:'LAY-gen',en:'the doctor',c:'Emergency'},
    {tr:'Apoteket',pr:'ah-poh-TAYK-et',en:'the pharmacy',c:'Emergency'},
    {tr:'Flyplassen',pr:'FLEE-plahs-en',en:'the airport',c:'Travel'},
    {tr:'Passet mitt',pr:'PAHS-et mit',en:'my passport',c:'Travel'},
    {tr:'Jeg vil gjerne til hotellet',pr:'yai vil YER-nuh til hoo-TEL-et',en:'I would like to go to the hotel',c:'Travel'},
    {tr:'Jeg har en reservasjon',pr:'yai haar en reh-ser-va-SHOON',en:'I have a reservation',c:'Travel'},
    {tr:'Snakk saktere, vær så snill',pr:'snahk SAHK-teh-reh, vair so snill',en:'Speak slowly, please',c:'Travel'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food & drink','Directions','Questions','Family','Emergency', 'Travel'],
  culture: [
    {icon:'🏔️',title:'Friluftsliv',body:'<b>Friluftsliv</b> (\'free-air life\') is the Norwegian love of being outdoors. Norwegians hike, ski and camp in all weathers. The rule of thumb: there is no bad weather, only bad clothing.'},
    {icon:'⛰️',title:'Fjords',body:'Norway\'s deep, narrow sea inlets — carved by glaciers — are the country\'s signature landscape. Towns hug the water, and ferries and fjord boats are everyday transport.'},
    {icon:'🕯️',title:'Koselig',body:'<b>Koselig</b> (the noun is <i>kos</i>) is the cosy warmth of friends, candles, good food and a quiet evening — Norway\'s version of the Danish <i>hygge</i>. You\'ll hear the word all the time.'},
    {icon:'☕',title:'Kaffe is a ritual',body:'Norwegians are among the world\'s biggest coffee drinkers. <i>Å ta en kaffe</i> — grabbing a coffee — is a social moment, not a quick pick-me-up. Norwegians love light, slow-brewed coffee.'},
    {icon:'🚪',title:'Shoes off',body:'Take your shoes off at the door in any Norwegian home. It\'s one of the first things a host will mention, and doing it is a simple, respectful habit.'},
    {icon:'💳',title:'Kroner & cards',body:'Norway\'s currency is the <b>krone</b> (kr). Cards are accepted almost everywhere — even for a small coffee. Tipping isn\'t expected; rounding up to the nearest 10 kr is plenty.'}
  ],
  sounds: [
    {l:'kj',say:'a soft hissing sound, like the "ch" in German ich or the "h" in huge',ex:'kjøpe (to buy) = SHUH-peh · kjære (dear) = SHARE-uh',voice:'kjøpe'},
    {l:'skj',say:'like "sh" in shoe (eastern Norwegian, before i/y/j)',ex:'ski = SHEE',voice:'ski'},
    {l:'sj',say:'like "sh" in shoe',ex:'sjø (sea) = SHUH',voice:'sjø'},
    {l:'r + n/t/d/l',say:'in eastern dialects, r blends with the next consonant into one retroflex sound (tongue curled back)',ex:'barn (child) · kort (card) · Nord (north)',voice:'barn'},
    {l:'å',say:'a long "aw" as in law',ex:'åtte (eight) = OT-tuh',voice:'åtte'},
    {l:'ø',say:'like the "u" in fur, but rounded',ex:'brød (bread) = BRUH',voice:'brød'},
    {l:'æ',say:'like the "a" in cat',ex:'vær (weather) = VAIR',voice:'vær'},
    {l:'j',say:'like the "y" in yes',ex:'jeg (I) = YAI',voice:'jeg'}
  ],
  resources: [
    {icon:'🗣️',t:'Simple Norwegian',d:'Short, slow, clear beginner lessons from a native speaker — great for ear-training.',q:'Simple Norwegian YouTube'},
    {icon:'🎓',t:'Norwegian with Maren',d:'Grammar and vocabulary explained in plain English, step by step.',q:'Norwegian with Maren'},
    {icon:'🇳🇴',t:'Karoline\'s Norwegian',d:'Fun, easy videos that teach the everyday Norwegian people actually speak.',q:'Norwegian lessons Karoline'},
    {icon:'🎧',t:'Norsk for learners podcast',d:'Easy-listening Norwegian for a walk or commute.',q:'learn Norwegian podcast for beginners'},
    {icon:'📚',t:'NTNU Norwegian on the Web',d:'A free, structured beginner course from a Norwegian university.',q:'NTNU Norwegian on the Web course'}
  ]
};
