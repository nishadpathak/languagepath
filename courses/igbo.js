/* ---- igbo ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["igbo"] = {
  name: 'Igbo',
  flag: '🇳🇬',
  tts: 'ig-NG',
  dir: 'ltr',
  native: 'Igbo',
  soundTitle: 'Igbo sounds & tones',
  soundIntro: 'Igbo is written with the Latin alphabet plus three special vowels (ị, ọ, ụ). It\'s a tonal language, so pitch — not just spelling — is part of every word. Master these sounds and you\'re already halfway there.',
  grammar: '<p>Igbo is strongly tonal: the same letters mean different things depending on pitch (high, low, or mid). Verbs change to match their subject, and the \'I\' form often drops or shortens — <b>achọrọ m</b> and <b>m chọrọ</b> both mean \'I want\'. Word order is usually subject-verb-object, and <b>na</b> links things (\'and\').</p>',
  bridges: '<div class="note">🎵 <b>Tone carries meaning.</b> Igbo is a tonal language, like Yoruba and Chinese. Say the same word high or low and it means something different — get the pitch right and you\'ll be understood.</div><div class="note">🌍 <b>English loans.</b> Igbo borrowed everyday words along the way: <b>kọfị</b> (coffee), <b>tii</b> (tea), <b>bọs</b> (bus), <b>dọkịta</b> (doctor), <b>shuga</b> (sugar), and the days of the week.</div>',
  lessons: [
    { id:1, title:'Greetings & being polite', focus:'kedu · nnọọ · ka ọ dị',
      steps:[
        {t:'say',text:'The first word to know: <span class="inline-tr">Kedu</span> (keh-doo) — hello / how is it? Say it out loud.',tr:'Kedu'},
        {t:'words',items:[{tr:'Kedu',pr:'keh-DOO',en:'Hello / how are you?'},{tr:'Nnọọ',pr:'nnaw-AW',en:'Welcome (hello)'},{tr:'Kedu ka ị mere?',pr:'keh-DOO kah ee MEH-reh',en:'How are you?'},{tr:'Ụtụtụ ọma',pr:'oo-TOO-too AW-mah',en:'Good morning'},{tr:'Mgbede ọma',pr:'mm-GBEH-deh AW-mah',en:'Good evening'}]},
        {t:'chal',en:'Hello, how are you?',tr:'Kedu ka ị mere?',pr:'keh-DOO kah ee MEH-reh',morph:['kedu = hello / how','ka ị mere = how did you do?']},
        {t:'say',text:'To say goodbye: <span class="inline-tr">Ka ọ dị</span> — literally \'let it be well\'. Short and sweet.',tr:'Ka ọ dị'},
        {t:'chal',en:'Goodbye!',tr:'Ka ọ dị!',pr:'kah AW dee',morph:['ka = let','ọ dị = it is well']},
        {t:'chal',en:'Good morning!',tr:'Ụtụtụ ọma!',pr:'oo-TOO-too AW-mah',morph:['ụtụtụ = morning','ọma = good']}
      ],
      blocks:['<code>kedu</code> = hello · how','<code>nnọọ</code> = welcome','<code>ka ọ dị</code> = goodbye'] },
    { id:2, title:'Polite words: Daalụ & Biko', focus:'daalụ · biko · ee · mba',
      steps:[
        {t:'say',text:'The two magic words: <span class="inline-tr">Daalụ</span> (thank you) and <span class="inline-tr">Biko</span> (please). Say them.',tr:'Daalụ'},
        {t:'words',items:[{tr:'Daalụ',pr:'dah-AH-loo',en:'thank you'},{tr:'Biko',pr:'BEE-koh',en:'please'},{tr:'Daalụ nke ukwuu',pr:'dah-AH-loo n-keh OO-koo-oo',en:'thank you very much'},{tr:'Biko',pr:'BEE-koh',en:'excuse me / sorry'},{tr:'Ee',pr:'eh',en:'yes'},{tr:'Mba',pr:'mm-BAH',en:'no'}]},
        {t:'chal',en:'Thank you very much!',tr:'Daalụ nke ukwuu!',pr:'dah-AH-loo n-keh OO-koo-oo',morph:['daalụ = thank you','nke ukwuu = very much']},
        {t:'say',text:'<span class="inline-tr">Biko</span> softens any request — say it before you ask for something.',tr:'Biko'},
        {t:'chal',en:'Water, please',tr:'Mmiri, biko',pr:'MMEE-ree, BEE-koh',morph:['mmiri = water','biko = please']},
        {t:'chal',en:'Yes, thank you!',tr:'Ee, daalụ!',pr:'eh, dah-AH-loo',morph:['ee = yes','daalụ = thank you']}
      ],
      blocks:['<code>daalụ</code> = thank you','<code>biko</code> = please','<code>ee</code> / <code>mba</code> = yes / no'] },
    { id:3, title:'Numbers 1–10', focus:'otu · abụọ · atọ · iri',
      steps:[
        {t:'say',text:'Numbers are the fastest win. Listen and repeat: <span class="inline-tr">otu, abụọ, atọ</span>.',tr:'otu'},
        {t:'words',items:[{tr:'otu',pr:'AW-too',en:'1'},{tr:'abụọ',pr:'ah-BUO',en:'2'},{tr:'atọ',pr:'ah-TAW',en:'3'},{tr:'anọ',pr:'ah-NAW',en:'4'},{tr:'ise',pr:'ee-SEH',en:'5'},{tr:'isii',pr:'ee-SEE-ee',en:'6'},{tr:'asaa',pr:'ah-SAH-ah',en:'7'},{tr:'asatọ',pr:'ah-sah-TAW',en:'8'},{tr:'itoolu',pr:'ee-TOH-oo-loo',en:'9'},{tr:'iri',pr:'EE-ree',en:'10'}]},
        {t:'chal',en:'Two coffees, please',tr:'Kọfị abụọ, biko',pr:'koh-FEE ah-BUO, BEE-koh',morph:['kọfị = coffee','abụọ = two','biko = please']},
        {t:'say',text:'<span class="inline-tr">Ego ole?</span> = how much money? Essential for shopping.',tr:'Ego ole?'},
        {t:'chal',en:'How much is it?',tr:'Ego ole?',pr:'EH-goh AW-leh',morph:['ego = money','ole = how much']},
        {t:'chal',en:'It\'s five naira',tr:'Ọ bụ naira ise',pr:'aw BAH NY-rah ee-SEH',morph:['ọ bụ = it is','naira = naira','ise = five']}
      ],
      blocks:['otu, abụọ, atọ, anọ, ise = 1–5','<code>ego ole?</code> = how much is it?'] },
    { id:4, title:'"I want" — achọrọ m', focus:'achọrọ m · m chọrọ · ị chọrọ?',
      steps:[
        {t:'say',text:'To say you want something: <span class="inline-tr">M chọrọ...</span> = I want... and <span class="inline-tr">achọrọ m</span> = I am wanting.',tr:'M chọrọ'},
        {t:'chal',en:'I want water',tr:'Achọrọ m mmiri',pr:'ah-CHAW-roh m MMEE-ree',morph:['achọrọ m = I want','mmiri = water']},
        {t:'chal',en:'I want coffee',tr:'M chọrọ kọfị',pr:'m CHAW-roh koh-FEE',morph:['m chọrọ = I want','kọfị = coffee']},
        {t:'say',text:'To ask if someone wants something: <span class="inline-tr">Ị chọrọ...?</span> = do you want...?',tr:'Ị chọrọ'},
        {t:'chal',en:'Do you want tea?',tr:'Ị chọrọ tii?',pr:'ee CHAW-roh TEE-ee',morph:['ị chọrọ = do you want','tii = tea']},
        {t:'chal',en:'I want food',tr:'Achọrọ m nri',pr:'ah-CHAW-roh m n-REE',morph:['achọrọ m = I want','nri = food']}
      ],
      blocks:['<code>m chọrọ</code> / <code>achọrọ m</code> = I want','<code>ị chọrọ?</code> = do you want?'] },
    { id:5, title:'Food & drink', focus:'mmiri · achịcha · kọfị · tii',
      steps:[
        {t:'say',text:'Key food words: <span class="inline-tr">mmiri</span> (water), <span class="inline-tr">achịcha</span> (bread), <span class="inline-tr">kọfị</span> (coffee), <span class="inline-tr">tii</span> (tea).',tr:'mmiri'},
        {t:'words',items:[{tr:'mmiri',pr:'MMEE-ree',en:'water'},{tr:'achịcha',pr:'ah-CHEE-chah',en:'bread'},{tr:'kọfị',pr:'koh-FEE',en:'coffee',link:'≈ English coffee'},{tr:'tii',pr:'TEE-ee',en:'tea',link:'≈ English tea'},{tr:'nri',pr:'n-REE',en:'food'},{tr:'osikapa',pr:'oh-see-KAH-pah',en:'rice'}]},
        {t:'chal',en:'Water and bread, please',tr:'Mmiri na achịcha, biko',pr:'MMEE-ree nah ah-CHEE-chah, BEE-koh',morph:['mmiri = water','na = and','achịcha = bread','biko = please']},
        {t:'chal',en:'I want tea',tr:'Achọrọ m tii',pr:'ah-CHAW-roh m TEE-ee',morph:['achọrọ m = I want','tii = tea']},
        {t:'say',text:'<span class="inline-tr">na</span> = and. Join items with it: mmiri na achịcha.',tr:'na'},
        {t:'chal',en:'Coffee and tea, please',tr:'Kọfị na tii, biko',pr:'koh-FEE nah TEE-ee, BEE-koh',morph:['kọfị = coffee','na = and','tii = tea','biko = please']}
      ],
      blocks:['<code>mmiri</code>, <code>achịcha</code>, <code>kọfị</code>, <code>tii</code> = water, bread, coffee, tea','<code>na</code> = and'] },
    { id:6, title:'Getting around', focus:'ebee ka · aka nri · aka ekpe',
      steps:[
        {t:'say',text:'The most useful question in any town: <span class="inline-tr">Ebee ka...</span> = where is...?',tr:'Ebee ka...?'},
        {t:'words',items:[{tr:'Ebee ka...?',pr:'eh-BEH-eh kah',en:'Where is...?'},{tr:'aka nri',pr:'AH-kah n-REE',en:'to the right'},{tr:'aka ekpe',pr:'AH-kah EK-peh',en:'to the left'},{tr:'n\'ihu',pr:'n-EE-hoo',en:'straight ahead'},{tr:'ụlọ mposi',pr:'oo-LAW mm-PO-see',en:'bathroom'}]},
        {t:'chal',en:'Where is the bathroom?',tr:'Ebee ka ụlọ mposi dị?',pr:'eh-BEH-eh kah oo-LAW mm-PO-see dee',morph:['ebee ka = where is','ụlọ mposi = bathroom','dị = is']},
        {t:'say',text:'<span class="inline-tr">Aka nri</span> is \'right hand\' (to the right); <span class="inline-tr">aka ekpe</span> is \'left\'.',tr:'aka nri'},
        {t:'chal',en:'Straight ahead',tr:'N\'ihu',pr:'n-EE-hoo',morph:['n\'ihu = straight ahead (in front)']}
      ],
      blocks:['<code>ebee ka...?</code> = where is...?','<code>aka nri</code> / <code>aka ekpe</code> = right / left'] },
    { id:7, title:'Questions & "do you have…?"', focus:'gịnị · ònye · ị nwere',
      steps:[
        {t:'say',text:'Question words: <span class="inline-tr">Gịnị</span> (what), <span class="inline-tr">Ònye</span> (who), <span class="inline-tr">kedu</span> (how/which).',tr:'Gịnị'},
        {t:'words',items:[{tr:'Gịnị',pr:'GIN-ee',en:'what'},{tr:'Ònye',pr:'AW-nyeh',en:'who'},{tr:'Kedu',pr:'keh-DOO',en:'how / which'},{tr:'Ebee',pr:'eh-BEH-eh',en:'where'},{tr:'Ị nwere...?',pr:'ee n-WEH-reh',en:'do you have...?'}]},
        {t:'chal',en:'What is this?',tr:'Gịnị bụ nke a?',pr:'GIN-ee boo n-keh ah',morph:['gịnị = what','bụ = is','nke a = this']},
        {t:'say',text:'<span class="inline-tr">Ị nwere...?</span> = do you have...? Perfect for asking whether something is available.',tr:'Ị nwere...?'},
        {t:'chal',en:'Do you have water?',tr:'Ị nwere mmiri?',pr:'ee n-WEH-reh MMEE-ree',morph:['ị nwere = do you have','mmiri = water']},
        {t:'chal',en:'Who is it?',tr:'Ònye ka ọ bụ?',pr:'AW-nyeh kah aw boo',morph:['ònye = who','ka ọ bụ = is it']}
      ],
      blocks:['<code>gịnị</code> = what','<code>ònye</code> = who','<code>ị nwere...?</code> = do you have...?'] },
    { id:8, title:'Family & people', focus:'ezinụlọ · nne · nna · enyi',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">ezinụlọ</span> (family), <span class="inline-tr">nne</span> (mother), <span class="inline-tr">nna</span> (father).',tr:'ezinụlọ'},
        {t:'words',items:[{tr:'ezinụlọ',pr:'eh-zee-noo-LAW',en:'family'},{tr:'nne',pr:'n-NAY',en:'mother'},{tr:'nna',pr:'n-NAH',en:'father'},{tr:'nwanne',pr:'n-WAN-nay',en:'sibling'},{tr:'enyi',pr:'EH-nyee',en:'friend'},{tr:'ụmụaka',pr:'oo-moo-AH-kah',en:'children'}]},
        {t:'chal',en:'I have a family',tr:'Enwere m ezinụlọ',pr:'en-WEH-reh m eh-zee-noo-LAW',morph:['enwere m = I have','ezinụlọ = family']},
        {t:'say',text:'<span class="inline-tr">Enwere m...</span> = I have... The key verb for what you\'ve got.',tr:'Enwere m...'},
        {t:'chal',en:'I have a friend',tr:'Enwere m enyi',pr:'en-WEH-reh m EH-nyee',morph:['enwere m = I have','enyi = friend']},
        {t:'chal',en:'This is my mother',tr:'Nke a bụ nne m',pr:'n-keh ah boo n-NAY m',morph:['nke a = this','bụ = is','nne m = my mother']}
      ],
      blocks:['<code>ezinụlọ</code> = family','<code>nne</code> / <code>nna</code> = mother / father','<code>enyi</code> = friend','<code>enwere m</code> = I have'] },
    { id:9, title:'Time, days & weather', focus:'taa · echi · mmiri ozuzo',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">taa</span>, tomorrow is <span class="inline-tr">echi</span>.' ,tr:'taa'},
        {t:'words',items:[{tr:'taa',pr:'TAH-ah',en:'today'},{tr:'echi',pr:'EH-chee',en:'tomorrow'},{tr:'ụnyaahụ',pr:'oo-nyah-HOO',en:'yesterday'},{tr:'anyanwụ',pr:'ah-nyah-NWOO',en:'sun'},{tr:'mmiri ozuzo',pr:'MMEE-ree oh-ZOO-zoh',en:'rain'},{tr:'ihu igwe',pr:'ee-hoo EE-gweh',en:'weather'}]},
        {t:'chal',en:'See you tomorrow',tr:'Ka ọ dị echi',pr:'kah AW dee EH-chee',morph:['ka ọ dị = see you','echi = tomorrow']},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">Kedu ka ihu igwe dị?</span> = how is the weather?',tr:'Kedu ka ihu igwe dị?'},
        {t:'chal',en:'The weather is good',tr:'Ihu igwe dị mma',pr:'ee-hoo EE-gweh dee mm-AH',morph:['ihu igwe = weather','dị mma = is good']}
      ],
      blocks:['<code>taa</code> / <code>echi</code> = today / tomorrow','<code>mmiri ozuzo</code> = rain','<code>ihu igwe</code> = weather'] },
    { id:10, title:'Introducing yourself', focus:'aha m bụ __NAME__ · gịnị bụ aha gị',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">Aha m bụ...</span> = my name is..., and <span class="inline-tr">Gịnị bụ aha gị?</span> = what\'s your name?',tr:'Aha m bụ...'},
        {t:'chal',en:'My name is __NAME__',tr:'Aha m bụ __NAME__',pr:'AH-hah m boo __NAME__',morph:['aha m = my name','bụ = is','__NAME__ = your name']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">Gịnị bụ aha gị?</span>',tr:'Gịnị bụ aha gị?'},
        {t:'chal',en:'What\'s your name?',tr:'Gịnị bụ aha gị?',pr:'GIN-ee boo AH-hah gee',morph:['gịnị = what','bụ = is','aha gị = your name']},
        {t:'chal',en:'Hello, my name is __NAME__',tr:'Kedu, aha m bụ __NAME__',pr:'keh-DOO, AH-hah m boo __NAME__',morph:['kedu = hello','aha m bụ = my name is']}
      ],
      blocks:['<code>aha m bụ...</code> = my name is...','<code>gịnị bụ aha gị?</code> = what\'s your name?'] },
    { id:11, title:'Health & emergency', focus:'nyere m aka · ụlọ ọgwụ · aghọtaghị m',
      steps:[
        {t:'say',text:'The most important words if you need help: <span class="inline-tr">Nyere m aka!</span> (help me!), <span class="inline-tr">ụlọ ọgwụ</span> (hospital).',tr:'Nyere m aka!'},
        {t:'words',items:[{tr:'Nyere m aka!',pr:'NYEH-reh m AH-kah',en:'Help me!'},{tr:'enyemaka',pr:'eh-nyeh-MAH-kah',en:'help'},{tr:'ụlọ ọgwụ',pr:'oo-LAW AW-gwoo',en:'hospital'},{tr:'dọkịta',pr:'daw-KEE-tah',en:'doctor',link:'≈ English doctor'},{tr:'Aghọtaghị m',pr:'ah-gwor-TAH-ghee m',en:'I don\'t understand'},{tr:'kpọọ ndị uwe ojii',pr:'KPOH-oh n-dee oo-weh OH-jee',en:'call the police'}]},
        {t:'chal',en:'Help me!',tr:'Nyere m aka!',pr:'NYEH-reh m AH-kah',morph:['nyere = help','m = me','aka = hand']},
        {t:'chal',en:'I don\'t understand',tr:'Aghọtaghị m',pr:'ah-gwor-TAH-ghee m',morph:['aghọtaghị m = I don\'t understand']},
        {t:'say',text:'To say you have trouble: <span class="inline-tr">Enwere m nsogbu</span> = I have a problem.',tr:'Enwere m nsogbu'},
        {t:'chal',en:'I have a problem',tr:'Enwere m nsogbu',pr:'en-WEH-reh m n-SO-gboo',morph:['enwere m = I have','nsogbu = a problem']}
      ],
      blocks:['<code>nyere m aka!</code> = help me!','<code>ụlọ ọgwụ</code> = hospital','<code>aghọtaghị m</code> = I don\'t understand'] },
    { id:12, title:'Tying it together', focus:'kedu · m chọrọ · ego ole · nyere m aka',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolbox in Igbo. This capstone uses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello, how are you?',tr:'Kedu ka ị mere?',pr:'keh-DOO kah ee MEH-reh',morph:['kedu = hello','ka ị mere = how are you?']},
        {t:'chal',en:'I want water, please',tr:'M chọrọ mmiri, biko',pr:'m CHAW-roh MMEE-ree, BEE-koh',morph:['m chọrọ = I want','mmiri = water','biko = please']},
        {t:'chal',en:'Where is the road?',tr:'Ebee ka ụzọ dị?',pr:'eh-BEH-eh kah oo-ZAW dee',morph:['ebee ka = where is','ụzọ = road','dị = is']},
        {t:'chal',en:'How much is it?',tr:'Ego ole?',pr:'EH-goh AW-leh',morph:['ego ole = how much is it?']},
        {t:'chal',en:'Help me! Thank you!',tr:'Nyere m aka! Daalụ!',pr:'NYEH-reh m AH-kah, dah-AH-loo',morph:['nyere m aka = help me','daalụ = thank you']}
      ],
      blocks:['You built: greetings, ordering, directions, prices, help — a full day in Igbo.'] },
    { id:13, title:'Airport & tickets', focus:'ọdụ ụgbọelu · paspọtụ · tiketi · ọnụ ụzọ',
      steps:[
        {t:'say',text:'You have landed. The building is the <span class="inline-tr">ọdụ ụgbọelu</span>. Your document is a <span class="inline-tr">paspọtụ</span>.',tr:'ọdụ ụgbọelu'},
        {t:'words',items:[{tr:'ọdụ ụgbọelu',pr:'AW-doo oo-GBAW-eh-loo',en:'airport'},{tr:'paspọtụ',pr:'pas-PAW-too',en:'passport'},{tr:'tiketi',pr:'tee-KEH-tee',en:'ticket'},{tr:'ụgbọelu',pr:'oo-GBAW-eh-loo',en:'flight / plane'},{tr:'ọnụ ụzọ',pr:'AW-nyoo oo-ZAW',en:'gate / door'}]},
        {t:'chal',en:'Where is the airport?',tr:'Ebee ka ọdụ ụgbọelu dị?',pr:'eh-BEH-eh kah AW-doo oo-GBAW-eh-loo dee',morph:['ebee ka = where is','ọdụ ụgbọelu = airport','dị = is']},
        {t:'chal',en:'Here is my passport',tr:'Nke a bụ paspọtụ m',pr:'n-keh ah boo pas-PAW-too m',morph:['nke a = this','bụ = is','paspọtụ m = my passport']},
        {t:'chal',en:'A ticket, please',tr:'Tiketi otu, biko',pr:'tee-KEH-tee AW-too, BEE-koh',morph:['tiketi = ticket','otu = one','biko = please']},
        {t:'chal',en:'Where is the gate?',tr:'Ebee ka ọnụ ụzọ dị?',pr:'eh-BEH-eh kah AW-nyoo oo-ZAW dee',morph:['ebee ka = where is','ọnụ ụzọ = gate','dị = is']}
      ],
      blocks:['<code>ọdụ ụgbọelu</code> = airport','<code>paspọtụ</code> = passport','<code>tiketi</code> = ticket','<code>ọnụ ụzọ</code> = gate'] },
    { id:14, title:'The taxi', focus:'tagzi · ịga · ụlọ oriri ndị ọbịa · kwụsị',
      steps:[
        {t:'say',text:'The driver is waiting. <span class="inline-tr">Tagzi</span> is taxi. Tell them where to go with <span class="inline-tr">achọrọ m ịga</span>.',tr:'tagzi'},
        {t:'words',items:[{tr:'tagzi',pr:'TAH-gzee',en:'taxi'},{tr:'ọkwọ ụgbọala',pr:'AW-kaw oo-GBAW-ah-lah',en:'driver'},{tr:'achọrọ m ịga',pr:'ah-CHAW-roh m ee-GAH',en:'I want to go'},{tr:'kwụsị ebe a',pr:'KWOO-see eh-BEH ah',en:'stop here'}]},
        {t:'chal',en:'Taxi, please',tr:'Tagzi, biko',pr:'TAH-gzee, BEE-koh',morph:['tagzi = taxi','biko = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'Achọrọ m ịga n\'ụlọ oriri ndị ọbịa',pr:'ah-CHAW-roh m ee-GAH n-oo-LAW oh-REE-ree n-dee AW-bee-ah',morph:['achọrọ m ịga = I want to go','ụlọ oriri ndị ọbịa = hotel']},
        {t:'chal',en:'Stop here, please',tr:'Kwụsị ebe a, biko',pr:'KWOO-see eh-BEH ah, BEE-koh',morph:['kwụsị = stop','ebe a = here','biko = please']},
        {t:'chal',en:'How much is it?',tr:'Ego ole?',pr:'EH-goh AW-leh',morph:['ego = money','ole = how much']}
      ],
      blocks:['<code>achọrọ m ịga …</code> = I want to go to …','<code>kwụsị ebe a</code> = stop here'] },
    { id:15, title:'The hotel', focus:'ndebanye aha · ọnụ ụlọ · igodo · abalị',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">enwere m ndebanye aha</span> — I have a reservation.',tr:'ndebanye aha'},
        {t:'words',items:[{tr:'ụlọ oriri ndị ọbịa',pr:'oo-LAW oh-REE-ree n-dee AW-bee-ah',en:'hotel'},{tr:'ndebanye aha',pr:'n-deh-BAH-nyeh AH-hah',en:'reservation'},{tr:'ọnụ ụlọ',pr:'AW-nyoo oo-LAW',en:'room'},{tr:'igodo',pr:'ee-GOH-doh',en:'key'},{tr:'otu abalị',pr:'AW-too ah-BAH-lee',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'Enwere m ndebanye aha',pr:'en-WEH-reh m n-deh-BAH-nyeh AH-hah',morph:['enwere m = I have','ndebanye aha = reservation']},
        {t:'chal',en:'A room for one night, please',tr:'Ọnụ ụlọ maka otu abalị, biko',pr:'AW-nyoo oo-LAW MAH-kah AW-too ah-BAH-lee, BEE-koh',morph:['ọnụ ụlọ = room','maka otu abalị = for one night','biko = please']},
        {t:'chal',en:'The key, please',tr:'Igodo, biko',pr:'ee-GOH-doh, BEE-koh',morph:['igodo = key','biko = please']},
        {t:'chal',en:'Where is my room?',tr:'Ebee ka ọnụ ụlọ m dị?',pr:'eh-BEH-eh kah AW-nyoo oo-LAW m dee',morph:['ebee ka = where is','ọnụ ụlọ m = my room','dị = is']}
      ],
      blocks:['<code>ndebanye aha</code> = reservation','<code>ọnụ ụlọ</code> = room','<code>igodo</code> = key'] },
    { id:16, title:'Ask for help', focus:'aghọtaghị m · nwayọọ · Bekee',
      steps:[
        {t:'say',text:'When the language is too fast: <span class="inline-tr">Nwayọọ, biko</span> — slower, please.',tr:'Nwayọọ, biko'},
        {t:'words',items:[{tr:'nwayọọ',pr:'n-WAH-yaw',en:'slower / gently'},{tr:'ọzọ',pr:'AW-zaw',en:'again'},{tr:'Bekee',pr:'BEH-keh-eh',en:'English'},{tr:'ị nwere ike inyere m aka?',pr:'ee n-WEH-reh EE-keh in-YEH-reh m AH-kah',en:'can you help me?'}]},
        {t:'chal',en:'I don\'t understand',tr:'Aghọtaghị m',pr:'ah-gwor-TAH-ghee m',morph:['aghọtaghị m = I don\'t understand']},
        {t:'chal',en:'Slower, please',tr:'Nwayọọ, biko',pr:'n-WAH-yaw, BEE-koh',morph:['nwayọọ = slower','biko = please']},
        {t:'chal',en:'Can you help me?',tr:'Ị nwere ike inyere m aka?',pr:'ee n-WEH-reh EE-keh in-YEH-reh m AH-kah',morph:['ị nwere ike = can you','inyere m aka = help me']},
        {t:'chal',en:'Do you speak English?',tr:'Ị na-asụ Bekee?',pr:'ee nah AH-soo BEH-keh-eh',morph:['ị na-asụ = do you speak','Bekee = English']}
      ],
      blocks:['<code>nwayọọ</code> = slower','<code>ị na-asụ Bekee?</code> = do you speak English?'] },

  ],
  dialogues: [
    { id:'cafe', title:'☕ At a café', emoji:'☕', turns:[
      {who:'You',tr:'Kedu! M chọrọ kọfị, biko.',pr:'keh-DOO, m CHAW-roh koh-FEE, BEE-koh',en:'Hello! I want a coffee, please.'},
      {who:'Barista',tr:'Ị chọrọ shuga?',pr:'ee CHAW-roh SHOO-gah',en:'Do you want sugar?'},
      {who:'You',tr:'Mba, daalụ. Ego ole?',pr:'mm-BAH, dah-AH-loo, EH-goh AW-leh',en:'No, thanks. How much?'},
      {who:'Barista',tr:'Iri abụọ na ise.',pr:'EE-ree ah-BUO nah ee-SEH',en:'Twenty-five.'},
      {who:'You',tr:'Daalụ nke ukwuu!',pr:'dah-AH-loo n-keh OO-koo-oo',en:'Thank you very much!'}
    ]},
    { id:'bus', title:'🚌 At the bus stop', emoji:'🚌', turns:[
      {who:'You',tr:'Biko, ebee ka bọs na-aga?',pr:'BEE-koh, eh-BEH-eh kah BAW-s nah AH-gah',en:'Please, where does the bus go?'},
      {who:'Local',tr:'Ọ na-aga ahịa.',pr:'aw nah AH-gah AH-hee-ah',en:'It goes to the market.'},
      {who:'You',tr:'Ego ole?',pr:'EH-goh AW-leh',en:'How much?'},
      {who:'Local',tr:'Ise.',pr:'ee-SEH',en:'Five.'},
      {who:'You',tr:'Daalụ!',pr:'dah-AH-loo',en:'Thanks!'}
    ]},
    { id:'restaurant', title:'🍽️ At a restaurant', emoji:'🍽️', turns:[
      {who:'Waiter',tr:'Nnọọ! Gịnị ka ị chọrọ?',pr:'nnaw-AW, GIN-ee kah ee CHAW-roh',en:'Welcome! What do you want?'},
      {who:'You',tr:'M chọrọ nri na mmiri.',pr:'m CHAW-roh n-REE nah MMEE-ree',en:'I want food and water.'},
      {who:'Waiter',tr:'Ị chọrọ osikapa ma ọ bụ ji?',pr:'ee CHAW-roh oh-see-KAH-pah mah aw boo jee',en:'Do you want rice or yam?'},
      {who:'You',tr:'Osikapa, biko.',pr:'oh-see-KAH-pah, BEE-koh',en:'Rice, please.'},
      {who:'Waiter',tr:'Ọ dị mma. Daalụ.',pr:'aw dee mm-AH, dah-AH-loo',en:'OK. Thank you.'}
    ]},
    { id:'market', title:'🛍️ At the market', emoji:'🛍️', turns:[
      {who:'You',tr:'Kedu! Ego ole ka nke a?',pr:'keh-DOO, EH-goh AW-leh kah n-keh ah',en:'Hello! How much is this?'},
      {who:'Seller',tr:'Ise.',pr:'ee-SEH',en:'Five.'},
      {who:'You',tr:'Ọ dị oke ọnụ!',pr:'aw dee AW-keh AW-nyoo',en:'It\'s too expensive!'},
      {who:'Seller',tr:'Ọ dị mma, anọ.',pr:'aw dee mm-AH, ah-NAW',en:'OK, four.'},
      {who:'You',tr:'Ọ dị mma, m ga-azụta ya.',pr:'aw dee mm-AH, m gah-ah-zoo-tah yah',en:'OK, I\'ll buy it.'}
    ]}
  ],
  pocket: [
    {tr:'Kedu',pr:'keh-DOO',en:'Hello / how',c:'Greetings'},
    {tr:'Nnọọ',pr:'nnaw-AW',en:'Welcome',c:'Greetings'},
    {tr:'Ụtụtụ ọma',pr:'oo-TOO-too AW-mah',en:'Good morning',c:'Greetings'},
    {tr:'Mgbede ọma',pr:'mm-GBEH-deh AW-mah',en:'Good evening',c:'Greetings'},
    {tr:'Ka ọ dị',pr:'kah AW dee',en:'Goodbye',c:'Greetings'},
    {tr:'Daalụ',pr:'dah-AH-loo',en:'Thank you',c:'Courtesy'},
    {tr:'Biko',pr:'BEE-koh',en:'Please',c:'Courtesy'},
    {tr:'Daalụ nke ukwuu',pr:'dah-AH-loo n-keh OO-koo-oo',en:'Thanks a lot',c:'Courtesy'},
    {tr:'Ee',pr:'eh',en:'Yes',c:'Courtesy'},
    {tr:'Mba',pr:'mm-BAH',en:'No',c:'Courtesy'},
    {tr:'Otu',pr:'AW-too',en:'1',c:'Numbers'},
    {tr:'Abụọ',pr:'ah-BUO',en:'2',c:'Numbers'},
    {tr:'Atọ',pr:'ah-TAW',en:'3',c:'Numbers'},
    {tr:'Anọ',pr:'ah-NAW',en:'4',c:'Numbers'},
    {tr:'Ise',pr:'ee-SEH',en:'5',c:'Numbers'},
    {tr:'Iri',pr:'EE-ree',en:'10',c:'Numbers'},
    {tr:'Mmiri',pr:'MMEE-ree',en:'water',c:'Food'},
    {tr:'Achịcha',pr:'ah-CHEE-chah',en:'bread',c:'Food'},
    {tr:'Kọfị',pr:'koh-FEE',en:'coffee',c:'Food'},
    {tr:'Tii',pr:'TEE-ee',en:'tea',c:'Food'},
    {tr:'Nri',pr:'n-REE',en:'food',c:'Food'},
    {tr:'Ebee ka...?',pr:'eh-BEH-eh kah',en:'Where is...?',c:'Directions'},
    {tr:'Aka nri',pr:'AH-kah n-REE',en:'to the right',c:'Directions'},
    {tr:'Aka ekpe',pr:'AH-kah EK-peh',en:'to the left',c:'Directions'},
    {tr:'Ụlọ mposi',pr:'oo-LAW mm-PO-see',en:'bathroom',c:'Directions'},
    {tr:'Gịnị',pr:'GIN-ee',en:'what',c:'Questions'},
    {tr:'Ònye',pr:'AW-nyeh',en:'who',c:'Questions'},
    {tr:'Ego ole?',pr:'EH-goh AW-leh',en:'how much?',c:'Questions'},
    {tr:'Ị nwere...?',pr:'ee n-WEH-reh',en:'do you have...?',c:'Questions'},
    {tr:'Ezinụlọ',pr:'eh-zee-noo-LAW',en:'family',c:'Family'},
    {tr:'Nne',pr:'n-NAY',en:'mother',c:'Family'},
    {tr:'Nna',pr:'n-NAH',en:'father',c:'Family'},
    {tr:'Enyi',pr:'EH-nyee',en:'friend',c:'Family'},
    {tr:'Nyere m aka!',pr:'NYEH-reh m AH-kah',en:'Help me!',c:'Emergency'},
    {tr:'Ụlọ ọgwụ',pr:'oo-LAW AW-gwoo',en:'hospital',c:'Emergency'},
    {tr:'Aghọtaghị m',pr:'ah-gwor-TAH-ghee m',en:'I don\'t understand',c:'Emergency'},
    {tr:'Kpọọ ndị uwe ojii',pr:'KPOH-oh n-dee oo-weh OH-jee',en:'call the police',c:'Emergency'},
    {tr:'Ọdụ ụgbọelu',pr:'AW-doo oo-GBAW-eh-loo',en:'airport',c:'Travel'},
    {tr:'Paspọtụ',pr:'pas-PAW-too',en:'passport',c:'Travel'},
    {tr:'Tagzi, biko',pr:'TAH-gzee, BEE-koh',en:'Taxi, please',c:'Travel'},
    {tr:'Enwere m ndebanye aha',pr:'en-WEH-reh m n-deh-BAH-nyeh AH-hah',en:'I have a reservation',c:'Travel'},
    {tr:'Nwayọọ, biko',pr:'n-WAH-yaw, BEE-koh',en:'Slower, please',c:'Travel'},
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Questions','Family','Emergency', 'Travel'],
  culture: [
    {icon:'🎵',title:'A tonal language',body:'Igbo is tonal: the same spelling said high or low changes the meaning. \'akwa\' on a high pitch is cloth, on a low pitch it\'s a bed. Listen closely to native speakers and mimic the pitch — it matters more than the letters.'},
    {icon:'🥜',title:'The kola nut (oji)',body:'The kola nut is central to Igbo ceremony — a sign of welcome, peace and hospitality. When you\'re offered one, accept with both hands. Breaking the kola formally opens a gathering, blessing and welcoming the group.'},
    {icon:'🏺',title:'Mbari houses',body:'In the southeast, Mbari were decorated houses built in honour of deities, filled with life-size clay figures. A community would gather, sculpt and paint them together — an art and social ritual at once.'},
    {icon:'👪',title:'Family structure & ọnụ',body:'Igbo families run large and extended. Respect for elders is foundational: greet seniors first, use honorifics, and speak gently. \'ọnụ\' (the compound) matters more than the household — decisions are often shared.'},
    {icon:'🤝',title:'Greetings matter',body:'Greeting is not a formality in Igbo culture — it\'s how you show respect. Use \'Nnọọ\' (welcome) when someone arrives and \'Kedu\' to ask how they are. A proper greeting with both hands signals warmth and character.'},
    {icon:'🎭',title:'Masquerades & festivals',body:'Ndi Igbo hold rich festivals with Egwu Mmanwu (masquerades) — striking, costumed figures that dance and speak in voices. Festivals celebrate yam, the new season and harvest, and are a vivid mix of music, dance and community.'}
  ],
  sounds: [
    {l:'tones',say:'high (´) and low (`) change a word\'s meaning — the core of Igbo',ex:'akwa (HH) = cloth · akwa (LL) = bed',voice:'akwa'},
    {l:'ị',say:'short \'ee\' as in see',ex:'ị = you · mmiri = water',voice:'mmiri'},
    {l:'ọ',say:'short open \'aw\' as in law',ex:'ọ = he/she · ọnụ = mouth',voice:'ọnụ'},
    {l:'ụ',say:'short \'oo\' as in boot',ex:'ụzọ = road · ụlọ = house',voice:'ụzọ'},
    {l:'gb',say:'implosive \'gb\' — a soft, caught sound',ex:'Igbo = EE-gbaw',voice:'Igbo'},
    {l:'kp',say:'implosive \'kp\' — the voiceless twin of gb',ex:'kpọo = call',voice:'kpọo'},
    {l:'ch',say:'\'ch\' as in church',ex:'achịcha = ah-chee-chah',voice:'achịcha'},
    {l:'m/n',say:'a nasal \'m\' or \'n\' that carries the word on its own',ex:'nri = n-REE = food · mba = mm-BAH = no',voice:'nri'}
  ],
  resources: [
    {icon:'🗣️',t:'Igbo for Beginners',d:'Slow, clear lessons that start from zero — alphabet, tones and everyday phrases.',q:'learn Igbo for beginners'},
    {icon:'📚',t:'Igbo Phrases & Vocabulary',d:'Common Igbo phrases with pronunciation, ideal for travel and real conversation.',q:'common Igbo phrases'},
    {icon:'🔤',t:'Igbo Alphabet & Tones',d:'Break down the special vowels and the tone system with a native speaker.',q:'Igbo alphabet and tones pronunciation'},
    {icon:'💬',t:'Igbo Conversation Practice',d:'Natural dialogue and listening practise to build your ear and confidence.',q:'Igbo conversation practice for beginners'},
    {icon:'🎧',t:'Igbo Audio Lessons',d:'Repeat-after-me audio for pronunciation and listening on the go.',q:'Igbo audio lessons beginners'}
  ]
};
