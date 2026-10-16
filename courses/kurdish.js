/* ---- kurdish ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["kurdish"] = {
  name: 'Kurdish',
  flag: '🇮🇶',
  tts: 'ku-TR',
  dir: 'ltr',
  native: 'Kurdî',
  soundTitle: 'Kurdish (Kurmanji) sounds & spelling',
  soundIntro: 'Kurmanji is written in the Latin alphabet with a handful of special letters. Learn the "x", "ç", "ş", "ê" and "î" and you\'ll be able to read almost anything out loud.',
  grammar: '<p>Kurmanji word order is <b>Subject – Object – Verb</b>: the verb goes last. So <i>ez dixwazim av</i> is literally \'I want water\' with the verb at the end. Instead of \'to have\', Kurmanji uses <b>heye</b> (\'there is\'): <i>hevalekî min heye</i> = I have a friend. Nouns have no grammatical gender like German or French, but they take endings when definite or possessive. The personal endings do the work of \'am / are / is\': <i>ez … im</i> (I am), <i>tu … î</i> (you are).</p>',
  bridges: '<div class="note">🇮🇷 <b>Persian / Farsi.</b> Kurdish and Farsi are cousins — both Indo-Iranian languages. You\'ll feel right at home with <i>av</i> (water), <i>nan</i> (bread), <i>baran</i> (rain) and <i>çar</i> (four).</div><div class="note">🔤 <b>Two scripts, one language.</b> Kurmanji (this pack) is written in the Latin alphabet; Sorani — the other major Kurdish variety — uses the Arabic script. Same family, different writing.</div><div class="note">🇬🇧 <b>English & loanwords.</b> Kurdish happily borrows everyday words: <i>telefon</i>, <i>doktor</i>, <i>bank</i>, <i>menû</i> (menu).</div>',
  lessons: [
    { id:1, title:'Greetings — Silav & Rojbaş', focus:'silav · rojbaş · bêxatir · çawa yî?',
      steps:[
        {t:'say',text:'Start with the all-purpose hello: <span class="inline-tr">silav</span> — a warm, friendly greeting. Say it out loud.',tr:'silav'},
        {t:'words',items:[{tr:'silav',pr:'see-LAV',en:'hello'},{tr:'rojbaş',pr:'ROZH-bash',en:'good day / hello'},{tr:'bêxatir',pr:'bay-khah-TEER',en:'goodbye'},{tr:'Tu çawa yî?',pr:'too CHAH-wah yee',en:'how are you?'},{tr:'Ez baş im',pr:'ez BASH eem',en:'I\'m well'}]},
        {t:'chal',en:'Hello, how are you?',tr:'Silav, tu çawa yî?',pr:'see-LAV, too CHAH-wah yee',morph:['silav = hello','tu çawa yî? = how are you?']},
        {t:'say',text:'<span class="inline-tr">Rojbaş</span> literally means \'good day\' (<i>roj</i> = day, <i>baş</i> = good). A lovely midday greeting.',tr:'rojbaş'},
        {t:'chal',en:'Good day!',tr:'Rojbaş!',pr:'ROZH-bash',morph:['roj = day','baş = good']},
        {t:'say',text:'To answer \'how are you?\', say <span class="inline-tr">ez baş im</span> — I\'m fine.',tr:'ez baş im'},
        {t:'chal',en:'I\'m fine, thanks',tr:'Ez baş im, spas',pr:'ez BASH eem, SPAS',morph:['ez = I','baş= good','im = I am','spas = thanks']}
      ],
      blocks:['<code>silav</code> = hello','<code>rojbaş</code> = good day · <code>bêxatir</code> = goodbye','<code>tu çawa yî?</code> = how are you?'] },
    { id:2, title:'Being polite — Spas & Ji kerema xwe', focus:'spas · gelek spas · ji kerema xwe · ser çavan',
      steps:[
        {t:'say',text:'The word that opens every door: <span class="inline-tr">spas</span> — thank you.',tr:'spas'},
        {t:'words',items:[{tr:'spas',pr:'SPAS',en:'thank you'},{tr:'gelek spas',pr:'geh-LEK SPAS',en:'thanks a lot'},{tr:'ji kerema xwe',pr:'zhee keh-REH-mah khweh',en:'please'},{tr:'ser çavan',pr:'sehr CHAH-vahn',en:'you\'re welcome'},{tr:'bibûre',pr:'bee-BOO-reh',en:'excuse me / sorry'}]},
        {t:'chal',en:'Thank you',tr:'Spas',pr:'SPAS',morph:['spas = thank you']},
        {t:'say',text:'For \'please\', use <span class="inline-tr">ji kerema xwe</span> — literally \'of your kindness\'. Add it to any request.',tr:'ji kerema xwe'},
        {t:'chal',en:'Two coffees, please',tr:'Du qehwe, ji kerema xwe',pr:'doo keh-WEH, zhee keh-REH-mah khweh',morph:['du = two','qehwe = coffee','ji kerema xwe = please']},
        {t:'chal',en:'Thanks a lot!',tr:'Gelek spas!',pr:'geh-LEK SPAS',morph:['gelek = a lot','spas = thanks']}
      ],
      blocks:['<code>spas</code> = thank you · <code>gelek spas</code> = thanks a lot','<code>ji kerema xwe</code> = please','<code>ser çavan</code> = you\'re welcome'] },
    { id:3, title:'Numbers 1–10 — yek, du, sê', focus:'yek · du · sê · çar · pênc · deh',
      steps:[
        {t:'say',text:'Numbers are your fastest win. Listen and repeat: <span class="inline-tr">yek, du, sê</span>.',tr:'yek'},
        {t:'words',items:[{tr:'yek',pr:'yek',en:'1'},{tr:'du',pr:'doo',en:'2'},{tr:'sê',pr:'say',en:'3'},{tr:'çar',pr:'chahr',en:'4',link:'≈ Persian chahâr'},{tr:'pênc',pr:'paynch',en:'5'},{tr:'şeş',pr:'shesh',en:'6'},{tr:'heft',pr:'heft',en:'7'},{tr:'heşt',pr:'hesht',en:'8'},{tr:'neh',pr:'neh',en:'9'},{tr:'deh',pr:'deh',en:'10'}]},
        {t:'chal',en:'Two teas, please',tr:'Du çay, ji kerema xwe',pr:'doo chai, zhee keh-REH-mah khweh',morph:['du = two','çay = tea','ji kerema xwe = please']},
        {t:'chal',en:'Three apples',tr:'Sê sêv',pr:'say sAYV',morph:['sê = three','sêv = apple']},
        {t:'say',text:'To ask a price: <span class="inline-tr">çend e?</span> — how much is it?',tr:'çend e?'},
        {t:'chal',en:'How much is it?',tr:'Çend e?',pr:'chend eh',morph:['çend = how much','e = is']}
      ],
      blocks:['yek, du, sê, çar, pênc = 1–5','şeş, heft, heşt, neh, deh = 6–10','<code>çend e?</code> = how much is it?'] },
    { id:4, title:'"I want" — ez dixwazim', focus:'ez dixwazim · tu dixwazî · ez … im',
      steps:[
        {t:'say',text:'To want something, say <span class="inline-tr">ez dixwazim</span> — I want. The verb goes at the end.',tr:'ez dixwazim'},
        {t:'words',items:[{tr:'ez',pr:'ez',en:'I'},{tr:'ez dixwazim',pr:'ez dee-KHWAH-zeem',en:'I want'},{tr:'tu dixwazî',pr:'too dee-KHWAH-zee',en:'you want'},{tr:'av',pr:'av',en:'water'},{tr:'nan',pr:'nahn',en:'bread'}]},
        {t:'chal',en:'I want water',tr:'Ez dixwazim av',pr:'ez dee-KHWAH-zeem av',morph:['ez = I','dixwazim = I want','av = water']},
        {t:'chal',en:'I want bread',tr:'Ez dixwazim nan',pr:'ez dee-KHWAH-zeem nahn',morph:['ez = I','dixwazim = I want','nan = bread']},
        {t:'say',text:'Make it polite by adding <span class="inline-tr">ji kerema xwe</span> at the end.',tr:'ez dixwazim av, ji kerema xwe'},
        {t:'chal',en:'I want water, please',tr:'Ez dixwazim av, ji kerema xwe',pr:'ez dee-KHWAH-zeem av, zhee keh-REH-mah khweh',morph:['ez dixwazim = I want','av = water','ji kerema xwe = please']}
      ],
      blocks:['<code>ez dixwazim</code> = I want','<code>tu dixwazî</code> = you want','word order: ez dixwazim + what you want'] },
    { id:5, title:'Food & drink — av, nan, çay, qehwe', focus:'av · nan · çay · qehwe · û',
      steps:[
        {t:'say',text:'The essentials: <span class="inline-tr">av</span> (water) and <span class="inline-tr">nan</span> (bread).',tr:'av'},
        {t:'words',items:[{tr:'av',pr:'av',en:'water',link:'≈ Persian âb'},{tr:'nan',pr:'nahn',en:'bread',link:'≈ Persian nân'},{tr:'çay',pr:'chai',en:'tea',link:'≈ English chai'},{tr:'qehwe',pr:'keh-WEH',en:'coffee',link:'≈ English coffee'},{tr:'şîr',pr:'sheer',en:'milk'}]},
        {t:'chal',en:'Water and bread, please',tr:'Av û nan, ji kerema xwe',pr:'av oo nahn, zhee keh-REH-mah khweh',morph:['av = water','û = and','nan = bread','ji kerema xwe = please']},
        {t:'say',text:'<span class="inline-tr">û</span> is \'and\'. A small word that links everything.',tr:'û'},
        {t:'chal',en:'A tea and a coffee, please',tr:'Çay û qehwe, ji kerema xwe',pr:'chai oo keh-WEH, zhee keh-REH-mah khweh',morph:['çay = tea','û = and','qehwe = coffee']},
        {t:'words',items:[{tr:'menû',pr:'meh-NOO',en:'menu',link:'≈ English menu'},{tr:'hesab',pr:'heh-SAB',en:'the bill',link:'≈ Arabic hisâb'}]}
      ],
      blocks:['<code>av</code>, <code>nan</code> = water, bread','<code>çay</code>, <code>qehwe</code> = tea, coffee','<code>û</code> = and'] },
    { id:6, title:'Getting around — directions', focus:'li ku derê? · rast · çep · rasterê',
      steps:[
        {t:'say',text:'The most useful question anywhere: <span class="inline-tr">li ku derê?</span> — where is it?',tr:'li ku derê?'},
        {t:'words',items:[{tr:'li ku derê?',pr:'lee koo deh-REH',en:'where is it?'},{tr:'rasterê',pr:'rah-steh-REH',en:'go straight'},{tr:'rast',pr:'rahst',en:'right'},{tr:'çep',pr:'chep',en:'left'},{tr:'li vir',pr:'lee veer',en:'here'},{tr:'stasyona tirênê',pr:'stah-SYOH-nah tee-REH-neh',en:'the train station'}]},
        {t:'chal',en:'Where is the train station?',tr:'Stasyona tirênê li ku ye?',pr:'stah-SYOH-nah tee-REH-neh lee koo yeh',morph:['stasyona tirênê = the train station','li ku ye? = where is it?']},
        {t:'chal',en:'Go straight, then left',tr:'Rasterê herin, dûv re bi çep',pr:'rah-steh-REH HEH-reen, doov reh bee CHEP',morph:['rasterê = go straight','herin = you go','dûv re = then','bi çep = to the left']},
        {t:'say',text:'<span class="inline-tr">rast</span> is \'right\', <span class="inline-tr">çep</span> is \'left\'.' ,tr:'rast'},
        {t:'chal',en:'The station is here',tr:'Stasyon li vir e',pr:'stah-SYON lee veer eh',morph:['stasyon = station','li vir = here','e = is']}
      ],
      blocks:['<code>li ku derê?</code> = where is it?','<code>rast</code> / <code>çep</code> = right / left','<code>rasterê</code> = go straight'] },
    { id:7, title:'Asking questions', focus:'çi? · kî? · çend e? · kengî? · çawa?',
      steps:[
        {t:'say',text:'The question word for everything: <span class="inline-tr">çi?</span> — what?',tr:'çi?'},
        {t:'words',items:[{tr:'Çi?',pr:'chee',en:'what?'},{tr:'Kî?',pr:'kee',en:'who?'},{tr:'Kengî?',pr:'KENG-ee',en:'when?'},{tr:'Çawa?',pr:'CHAH-wah',en:'how?'},{tr:'Çima?',pr:'CHEE-mah',en:'why?'},{tr:'Çend e?',pr:'chend eh',en:'how much is it?'}]},
        {t:'chal',en:'What is this?',tr:'Ev çi ye?',pr:'ev chee yeh',morph:['ev = this','çi = what','ye = is']},
        {t:'chal',en:'How much is this?',tr:'Ev çend e?',pr:'ev chend eh',morph:['ev = this','çend = how much','e = is']},
        {t:'say',text:'Put the question word first, then the rest. <span class="inline-tr">Ev çi ye?</span> = What is this?',tr:'Ev çi ye?'},
        {t:'chal',en:'Who is this?',tr:'Ev kî ye?',pr:'ev kee yeh',morph:['ev = this','kî = who','ye = is']}
      ],
      blocks:['<code>çi?</code> = what? · <code>kî?</code> = who?','<code>kengî?</code> = when? · <code>çawa?</code> = how?','<code>çend e?</code> = how much is it?'] },
    { id:8, title:'Family & people', focus:'malbat · dê · bav · heval',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">malbat</span> (family), <span class="inline-tr">dê</span> (mother), <span class="inline-tr">bav</span> (father).',tr:'malbat'},
        {t:'words',items:[{tr:'malbat',pr:'mal-BAT',en:'family'},{tr:'dê',pr:'day',en:'mother'},{tr:'bav',pr:'bav',en:'father',link:'≈ Persian bâbâ'},{tr:'bira',pr:'bee-RAH',en:'brother',link:'≈ Persian barâdar'},{tr:'xwişk',pr:'khweeshk',en:'sister',link:'≈ Persian khâhar'},{tr:'heval',pr:'heh-VAL',en:'friend'}]},
        {t:'chal',en:'I have a friend',tr:'Hevalekî min heye',pr:'heh-vah-LEH-kee meen HEH-yeh',morph:['hevalekî = a friend','min = my','heye = there is / I have']},
        {t:'say',text:'<span class="inline-tr">min</span> is \'my\'. And <span class="inline-tr">heye</span> is how Kurdish says \'I have\'.',tr:'min'},
        {t:'chal',en:'This is my mother',tr:'Ev dayika min e',pr:'ev dah-YEE-kah meen eh',morph:['ev = this','dayika min = my mother','e = is']},
        {t:'chal',en:'I have a family',tr:'Min malbatek heye',pr:'meen mal-bah-TEK HEH-yeh',morph:['min = I','malbatek = a family','heye = there is / have']}
      ],
      blocks:['<code>dê</code> / <code>bav</code> = mother / father','<code>heval</code> = friend','<code>min</code> = my · <code>heye</code> = I have'] },
    { id:9, title:'Time, days & weather', focus:'îro · sibê · baran · germ · sar',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">îro</span>, tomorrow is <span class="inline-tr">sibê</span>.',tr:'îro'},
        {t:'words',items:[{tr:'îro',pr:'EE-roh',en:'today'},{tr:'sibê',pr:'see-BEH',en:'tomorrow'},{tr:'duh',pr:'dooh',en:'yesterday'},{tr:'hewa',pr:'heh-WAH',en:'weather'},{tr:'baran',pr:'BAH-rahn',en:'rain',link:'≈ Persian bârân'},{tr:'germ',pr:'germ',en:'hot'},{tr:'sar',pr:'sar',en:'cold'}]},
        {t:'chal',en:'It\'s raining',tr:'Baran dibare',pr:'BAH-rahn dee-BAH-reh',morph:['baran = rain','dibare = is falling']},
        {t:'chal',en:'Until tomorrow',tr:'Heta sibê',pr:'HEH-tah see-BEH',morph:['heta = until','sibê = tomorrow']},
        {t:'say',text:'For weather, ask <span class="inline-tr">hewa çawa ye?</span> — how\'s the weather?',tr:'hewa çawa ye?'},
        {t:'chal',en:'It\'s hot',tr:'Hewa germ e',pr:'heh-WAH germ eh',morph:['hewa = weather','germ = hot','e = is']}
      ],
      blocks:['<code>îro</code> / <code>sibê</code> = today / tomorrow','<code>baran</code> = rain · <code>germ</code> / <code>sar</code> = hot / cold','<code>heta sibê</code> = until tomorrow'] },
    { id:10, title:'My name is… — navê min __NAME__ ye', focus:'navê min … ye · navê te çi ye? · kêfxweş',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">navê min __NAME__ ye</span> — my name is __NAME__.',tr:'navê min __NAME__ ye'},
        {t:'words',items:[{tr:'navê min __NAME__ ye',pr:'nah-VAY meen __NAME__ yeh',en:'my name is __NAME__'},{tr:'navê te çi ye?',pr:'nah-VAY teh chee yeh',en:'what\'s your name?'},{tr:'nav',pr:'nav',en:'name'},{tr:'kêfxweş',pr:'kayf-KHWEHSH',en:'pleased / glad'}]},
        {t:'chal',en:'My name is __NAME__',tr:'Navê min __NAME__ ye',pr:'nah-VAY meen __NAME__ yeh',morph:['navê min = my name','ye = is']},
        {t:'chal',en:'What is your name?',tr:'Navê te çi ye?',pr:'nah-VAY teh chee yeh',morph:['navê te = your name','çi = what','ye = is']},
        {t:'say',text:'To say you\'re glad to meet someone: <span class="inline-tr">kêfxweş im</span> — I\'m pleased.',tr:'kêfxweş im'},
        {t:'chal',en:'Pleased to meet you',tr:'Pir kêfxweş im',pr:'peer kayf-KHWEHSH eem',morph:['pir = very','kêfxweş = pleased','im = I am']}
      ],
      blocks:['<code>navê min __NAME__ ye</code> = my name is…','<code>navê te çi ye?</code> = what\'s your name?','<code>kêfxweş im</code> = pleased to meet you'] },
    { id:11, title:'Health & emergency — Alîkarî!', focus:'alîkarî · nexweş · doktor · ez fêm nakim',
      steps:[
        {t:'say',text:'The most important word in the language: <span class="inline-tr">Alîkarî!</span> — Help!',tr:'Alîkarî!'},
        {t:'words',items:[{tr:'alîkarî',pr:'ah-lee-kah-REE',en:'help'},{tr:'ez nexweş im',pr:'ez neh-KHWEHSH eem',en:'I\'m sick'},{tr:'ez fêm nakim',pr:'ez faym nah-KEEM',en:'I don\'t understand'},{tr:'doktor',pr:'dok-TOR',en:'doctor',link:'≈ English doctor'},{tr:'dermanxane',pr:'der-man-KHAH-neh',en:'pharmacy'}]},
        {t:'chal',en:'Help!',tr:'Alîkarî!',pr:'ah-lee-kah-REE',morph:['alîkarî = help']},
        {t:'chal',en:'I\'m sick',tr:'Ez nexweş im',pr:'ez neh-KHWEHSH eem',morph:['ez = I','nexweş = sick','im = I am']},
        {t:'chal',en:'I don\'t understand',tr:'Ez fêm nakim',pr:'ez faym nah-KEEM',morph:['ez = I','fêm = understanding','nakim = I do not']},
        {t:'say',text:'If you need a doctor, say <span class="inline-tr">doktor lazim e</span> — a doctor is needed.',tr:'doktor lazim e'},
        {t:'chal',en:'A doctor is needed',tr:'Doktor lazim e',pr:'dok-TOR lah-ZEEM eh',morph:['doktor = doctor','lazim = needed','e = is']}
      ],
      blocks:['<code>alîkarî!</code> = help!','<code>ez fêm nakim</code> = I don\'t understand','<code>ez nexweş im</code> = I\'m sick · <code>doktor lazim e</code> = a doctor is needed'] },
    { id:12, title:'Tying it together — capstone', focus:'silav · ez dixwazim · li ku derê? · spas',
      steps:[
        {t:'say',text:'Excellent — you\'ve built a real toolbox. This capstone uses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello, how are you?',tr:'Silav, tu çawa yî?',pr:'see-LAV, too CHAH-wah yee',morph:['silav = hello','tu çawa yî? = how are you?']},
        {t:'chal',en:'I want tea and bread, please',tr:'Ez çay û nan dixwazim, ji kerema xwe',pr:'ez chai oo nahn dee-KHWAH-zeem, zhee keh-REH-mah khweh',morph:['ez = I','çay = tea','û = and','nan = bread','dixwazim = I want','ji kerema xwe = please']},
        {t:'chal',en:'Where is the train station?',tr:'Stasyona tirênê li ku ye?',pr:'stah-SYOH-nah tee-REH-neh lee koo yeh',morph:['stasyona tirênê = the train station','li ku ye? = where is it?']},
        {t:'chal',en:'How much is this?',tr:'Ev çend e?',pr:'ev chend eh',morph:['ev = this','çend = how much','e = is']},
        {t:'chal',en:'Thank you! Goodbye!',tr:'Spas! Bêxatir!',pr:'SPAS! bay-khah-TEER',morph:['spas = thank you','bêxatir = goodbye']}
      ],
      blocks:['You built: greetings, ordering, directions, prices and thanks — a full day out in Kurdish.'] },
    { id:13, title:'Airport & tickets', focus:'balafirgeh · pasaport · bilet · dergeh',
      steps:[
        {t:'say',text:'You have landed. The building is the <span class="inline-tr">balafirgeh</span>. Your document is a <span class="inline-tr">pasaport</span>.',tr:'balafirgeh'},
        {t:'words',items:[{tr:'balafirgeh',pr:'bah-lah-feer-GEH',en:'airport'},{tr:'pasaport',pr:'pah-sah-PORT',en:'passport'},{tr:'bilet',pr:'bee-LET',en:'ticket'},{tr:'firîn',pr:'fee-REEN',en:'flight'},{tr:'dergeh',pr:'der-GEH',en:'gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'Balafirgeh li ku ye?',pr:'bah-lah-feer-GEH lee koo yeh',morph:['balafirgeh = airport','li ku ye? = where is it?']},
        {t:'chal',en:'Here is my passport',tr:'Pasaporta min ev e',pr:'pah-sah-POR-tah meen ev eh',morph:['pasaporta min = my passport','ev e = this is']},
        {t:'chal',en:'A ticket, please',tr:'Biletek, ji kerema xwe',pr:'bee-leh-TEK, zhee keh-REH-mah khweh',morph:['biletek = a ticket','ji kerema xwe = please']},
        {t:'chal',en:'Where is the gate?',tr:'Dergeh li ku ye?',pr:'der-GEH lee koo yeh',morph:['dergeh = gate','li ku ye? = where is it?']}
      ],
      blocks:['<code>balafirgeh</code> = airport','<code>pasaport</code> = passport','<code>bilet</code> = ticket','<code>dergeh</code> = gate'] },
    { id:14, title:'The taxi', focus:'taksî · herin · otêl · li vir bisekinin',
      steps:[
        {t:'say',text:'The driver is waiting. Tell them where to go: <span class="inline-tr">ez dixwazim herim…</span> — I want to go…',tr:'taksî'},
        {t:'words',items:[{tr:'taksî',pr:'tak-SEE',en:'taxi'},{tr:'ajokar',pr:'ah-zhoh-KAR',en:'driver'},{tr:'ez dixwazim herim',pr:'ez dee-KHWAH-zeem HEH-reem',en:'I want to go'},{tr:'li vir bisekinin',pr:'lee veer bee-seh-kee-NEEN',en:'stop here'}]},
        {t:'chal',en:'Taxi, please',tr:'Taksî, ji kerema xwe',pr:'tak-SEE, zhee keh-REH-mah khweh',morph:['taksî = taxi','ji kerema xwe = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'Ez dixwazim herim otêlê',pr:'ez dee-KHWAH-zeem HEH-reem oh-TAY-leh',morph:['ez dixwazim = I want','herim = to go','otêlê = to the hotel']},
        {t:'chal',en:'Stop here, please',tr:'Li vir bisekinin, ji kerema xwe',pr:'lee veer bee-seh-kee-NEEN, zhee keh-REH-mah khweh',morph:['li vir = here','bisekinin = stop','ji kerema xwe = please']},
        {t:'chal',en:'How much is it?',tr:'Çend e?',pr:'chend eh',morph:['çend = how much','e = is']}
      ],
      blocks:['<code>ez dixwazim herim…</code> = I want to go to …','<code>li vir bisekinin</code> = stop here'] },
    { id:15, title:'The hotel', focus:'rezervasyon · ode · mifte · şev',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">rezervasyona min heye</span> — I have a reservation.',tr:'rezervasyon'},
        {t:'words',items:[{tr:'otêl',pr:'oh-TAYL',en:'hotel'},{tr:'rezervasyon',pr:'reh-zer-vah-SYON',en:'reservation'},{tr:'ode',pr:'OH-deh',en:'room'},{tr:'mifte',pr:'MIF-teh',en:'key'},{tr:'şevek',pr:'SHEH-vek',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'Rezervasyona min heye',pr:'reh-zer-vah-SYOH-nah meen HEH-yeh',morph:['rezervasyona min = my reservation','heye = there is / I have']},
        {t:'chal',en:'A room for one night, please',tr:'Odeyek ji bo şevekê, ji kerema xwe',pr:'oh-deh-YEK zhee boh SHEH-veh-keh, zhee keh-REH-mah khweh',morph:['odeyek = a room','ji bo şevekê = for one night','ji kerema xwe = please']},
        {t:'chal',en:'The key, please',tr:'Mifte, ji kerema xwe',pr:'MIF-teh, zhee keh-REH-mah khweh',morph:['mifte = key','ji kerema xwe = please']},
        {t:'chal',en:'Where is my room?',tr:'Odeya min li ku ye?',pr:'oh-DEH-yah meen lee koo yeh',morph:['odeya min = my room','li ku ye? = where is it?']}
      ],
      blocks:['<code>rezervasyon</code> = reservation','<code>ode</code> = room','<code>mifte</code> = key'] },
    { id:16, title:'Ask for help', focus:'ez fêm nakim · hêdîtir · îngilîzî',
      steps:[
        {t:'say',text:'When Kurmanji is too fast: <span class="inline-tr">Hêdîtir, ji kerema xwe</span> — slower, please.',tr:'Hêdîtir, ji kerema xwe'},
        {t:'words',items:[{tr:'hêdîtir',pr:'HAY-dee-teer',en:'slower'},{tr:'dîsa',pr:'DEE-sah',en:'again'},{tr:'îngilîzî',pr:'een-gee-LEE-zee',en:'English'},{tr:'tu dikarî alîkarî bikî?',pr:'too dee-KAH-ree ah-lee-kah-REE bee-kee',en:'can you help?'}]},
        {t:'chal',en:'I don\'t understand',tr:'Ez fêm nakim',pr:'ez faym nah-KEEM',morph:['ez = I','fêm = understanding','nakim = I do not']},
        {t:'chal',en:'Slower, please',tr:'Hêdîtir, ji kerema xwe',pr:'HAY-dee-teer, zhee keh-REH-mah khweh',morph:['hêdîtir = slower','ji kerema xwe = please']},
        {t:'chal',en:'Can you help me?',tr:'Tu dikarî alîkariya min bikî?',pr:'too dee-KAH-ree ah-lee-kah-REE-yah meen bee-kee',morph:['tu dikarî = can you','alîkariya min = my help','bikî = do']},
        {t:'chal',en:'Do you speak English?',tr:'Tu îngilîzî dizanî?',pr:'too een-gee-LEE-zee dee-zah-NEE',morph:['tu = you','îngilîzî = English','dizanî = you know / speak']}
      ],
      blocks:['<code>hêdîtir</code> = slower','<code>tu îngilîzî dizanî?</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'cafe', title:'☕ At a café', emoji:'☕', turns:[
      {who:'You',tr:'Rojbaş! Yek qehwe, ji kerema xwe.',pr:'ROZH-bash! yek keh-WEH, zhee keh-REH-mah khweh',en:'Good day! A coffee, please.'},
      {who:'Barista',tr:'Bi xweşî. Ji bo li vir an ji bo bi xwe re?',pr:'bee khweh-SHEE. zhee boh lee veer ahn zhee boh bee khweh reh',en:'With pleasure. For here or to go?'},
      {who:'You',tr:'Ji bo bi xwe re, spas.',pr:'zhee boh bee khweh reh, SPAS',en:'To go, thanks.'},
      {who:'Barista',tr:'De ka. Ew çar dînar.',pr:'deh kah. eh CHAHR DEE-nar',en:'Here you go. That\'s four dinars.'},
      {who:'You',tr:'Gelek spas. Bêxatir!',pr:'geh-LEK SPAS. bay-khah-TEER',en:'Thanks so much. Goodbye!'}
    ]},
    { id:'transport', title:'🚌 Getting around', emoji:'🚌', turns:[
      {who:'You',tr:'Bibûre! Stasyona tirênê li ku ye?',pr:'bee-BOO-reh! stah-SYOH-nah tee-REH-neh lee koo yeh',en:'Excuse me! Where is the train station?'},
      {who:'Local',tr:'Rasterê herin, dûv re bi çep.',pr:'rah-steh-REH HEH-reen, doov reh bee CHEP',en:'Go straight, then turn left.'},
      {who:'You',tr:'Gelek spas. Yek bilet, ji kerema xwe.',pr:'geh-LEK SPAS. yek bee-LET, zhee keh-REH-mah khweh',en:'Thanks a lot. One ticket, please.'},
      {who:'Ticket',tr:'Tu diçî kîder?',pr:'too dee-CHEE KEE-dair',en:'Where are you going?'},
      {who:'You',tr:'Diçim Hewlêrê.',pr:'dee-CHIM hew-LAY-reh',en:'I\'m going to Erbil.'}
    ]},
    { id:'restaurant', title:'🍽️ At a restaurant', emoji:'🍽️', turns:[
      {who:'Waiter',tr:'Rojbaş! Bi xêr hatin.',pr:'ROZH-bash! bee khayr hah-TEEN',en:'Good day! Welcome.'},
      {who:'You',tr:'Spas. Menû, ji kerema xwe.',pr:'SPAS. meh-NOO, zhee keh-REH-mah khweh',en:'Thanks. The menu, please.'},
      {who:'You',tr:'Ez dixwazim nan û av.',pr:'ez dee-KHWAH-zeem nahn oo av',en:'I want bread and water.'},
      {who:'Waiter',tr:'Tiştek din?',pr:'teesh-TEK deen',en:'Anything else?'},
      {who:'You',tr:'Na, spas. Çend e?',pr:'nah, SPAS. chend eh',en:'No, thanks. How much is it?'},
      {who:'Waiter',tr:'Ew şeş dînar.',pr:'eh SHESH DEE-nar',en:'That\'s six dinars.'}
    ]},
    { id:'market', title:'🛒 At the market', emoji:'🛒', turns:[
      {who:'Seller',tr:'Tu dixwazî çi?',pr:'too dee-KHWAH-zee chee',en:'What do you want?'},
      {who:'You',tr:'Sê sêv û du nan, ji kerema xwe.',pr:'say sAYV oo doo nahn, zhee keh-REH-mah khweh',en:'Three apples and two breads, please.'},
      {who:'Seller',tr:'Tiştek din?',pr:'teesh-TEK deen',en:'Anything else?'},
      {who:'You',tr:'Na, spas. Çend e?',pr:'nah, SPAS. chend eh',en:'No, thanks. How much is it?'},
      {who:'Seller',tr:'Şeş dînar.',pr:'shesh DEE-nar',en:'Six dinars.'},
      {who:'You',tr:'De ka. Spas!',pr:'deh kah. SPAS',en:'Here. Thanks!'}
    ]}
  ],
  pocket: [
    {tr:'Silav',pr:'see-LAV',en:'Hello',c:'Greetings'},
    {tr:'Rojbaş',pr:'ROZH-bash',en:'Good day',c:'Greetings'},
    {tr:'Bêxatir',pr:'bay-khah-TEER',en:'Goodbye',c:'Greetings'},
    {tr:'Tu çawa yî?',pr:'too CHAH-wah yee',en:'How are you?',c:'Greetings'},
    {tr:'Ez baş im',pr:'ez BASH eem',en:'I\'m well',c:'Greetings'},
    {tr:'Spas',pr:'SPAS',en:'Thank you',c:'Courtesy'},
    {tr:'Gelek spas',pr:'geh-LEK SPAS',en:'Thanks a lot',c:'Courtesy'},
    {tr:'Ji kerema xwe',pr:'zhee keh-REH-mah khweh',en:'Please',c:'Courtesy'},
    {tr:'Ser çavan',pr:'sehr CHAH-vahn',en:'You\'re welcome',c:'Courtesy'},
    {tr:'Bibûre',pr:'bee-BOO-reh',en:'Excuse me / sorry',c:'Courtesy'},
    {tr:'Erê',pr:'eh-RAY',en:'Yes',c:'Courtesy'},
    {tr:'Na',pr:'nah',en:'No',c:'Courtesy'},
    {tr:'Yek',pr:'yek',en:'1',c:'Numbers'},
    {tr:'Du',pr:'doo',en:'2',c:'Numbers'},
    {tr:'Sê',pr:'say',en:'3',c:'Numbers'},
    {tr:'Çar',pr:'chahr',en:'4',c:'Numbers'},
    {tr:'Deh',pr:'deh',en:'10',c:'Numbers'},
    {tr:'Av',pr:'av',en:'water',c:'Food & Drink'},
    {tr:'Nan',pr:'nahn',en:'bread',c:'Food & Drink'},
    {tr:'Çay',pr:'chai',en:'tea',c:'Food & Drink'},
    {tr:'Qehwe',pr:'keh-WEH',en:'coffee',c:'Food & Drink'},
    {tr:'Menû, ji kerema xwe',pr:'meh-NOO, zhee keh-REH-mah khweh',en:'The menu, please',c:'Food & Drink'},
    {tr:'Li ku derê?',pr:'lee koo deh-REH',en:'Where is it?',c:'Directions'},
    {tr:'Rasterê',pr:'rah-steh-REH',en:'Go straight',c:'Directions'},
    {tr:'Rast',pr:'rahst',en:'Right',c:'Directions'},
    {tr:'Çep',pr:'chep',en:'Left',c:'Directions'},
    {tr:'Stasyona tirênê',pr:'stah-SYOH-nah tee-REH-neh',en:'The train station',c:'Directions'},
    {tr:'Çi?',pr:'chee',en:'What?',c:'Questions'},
    {tr:'Kî?',pr:'kee',en:'Who?',c:'Questions'},
    {tr:'Çend e?',pr:'chend eh',en:'How much is it?',c:'Questions'},
    {tr:'Kengî?',pr:'KENG-ee',en:'When?',c:'Questions'},
    {tr:'Alîkarî!',pr:'ah-lee-kah-REE',en:'Help!',c:'Emergency'},
    {tr:'Ez nexweş im',pr:'ez neh-KHWEHSH eem',en:'I\'m sick',c:'Emergency'},
    {tr:'Ez fêm nakim',pr:'ez faym nah-KEEM',en:'I don\'t understand',c:'Emergency'},
    {tr:'Dermanxane',pr:'der-man-KHAH-neh',en:'Pharmacy',c:'Emergency'},
    {tr:'Îro',pr:'EE-roh',en:'today',c:'Time & Weather'},
    {tr:'Sibê',pr:'see-BEH',en:'tomorrow',c:'Time & Weather'},
    {tr:'Baran',pr:'BAH-rahn',en:'rain',c:'Time & Weather'},
    {tr:'Balafirgeh',pr:'bah-lah-feer-GEH',en:'airport',c:'Travel'},
    {tr:'Pasaport',pr:'pah-sah-PORT',en:'passport',c:'Travel'},
    {tr:'Ez dixwazim herim otêlê',pr:'ez dee-KHWAH-zeem HEH-reem oh-TAY-leh',en:'I want to go to the hotel',c:'Travel'},
    {tr:'Rezervasyona min heye',pr:'reh-zer-vah-SYOH-nah meen HEH-yeh',en:'I have a reservation',c:'Travel'},
    {tr:'Hêdîtir, ji kerema xwe',pr:'HAY-dee-teer, zhee keh-REH-mah khweh',en:'Slower, please',c:'Travel'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food & Drink','Directions','Questions','Emergency','Time & Weather','Travel'],
  culture: [
    {icon:'🏔️',title:'The lands of Kurdistan',body:'Kurdistan isn\'t a single country — it\'s a region spanning Turkey, Iraq, Iran and Syria. The people\'s identity is their language and culture rather than a border. The flag you see here is Iraq, home to the Kurdistan Region and the great city of Erbil (Hewlêr).'},
    {icon:'🎉',title:'Newroz — the spring festival',body:'Newroz (new day), on 21 March, is the Kurdish New Year. People dress up in green, red and gold, picnic outdoors, and jump over fires. It\'s a celebration of spring, renewal and freedom — and it\'s marked by Kurds everywhere.'},
    {icon:'🗣️',title:'An Indo-Iranian cousin',body:'Kurdish belongs to the Iranian branch of Indo-European, so it\'s a cousin of Farsi (Persian) and Pashto — and NOT an Arabic or Turkish language. You\'ll spot it fast: <i>av</i> (water), <i>nan</i> (bread), <i>baran</i> (rain) and <i>çend</i> all feel familiar.'},
    {icon:'✍️',title:'Two scripts, one language',body:'Kurmanji (northern Kurdish) is written in the Latin alphabet, with letters like <b>ç</b>, <b>ş</b> and <b>ê</b> — exactly what you\'re learning here. Sorani (southern Kurdish) uses the Arabic script. The spoken varieties are close cousins; only the writing differs much.'},
    {icon:'☕',title:'Tea & hospitality',body:'Kurdish hospitality is legendary. A guest is handed tea (<i>çay</i>) almost immediately and greeted with <i>bi xêr hatin</i> (welcome). Accepting the tea is a warm, sincere gesture — and declining politely is fine too.'},
    {icon:'🤝',title:'Kurdish in Iraq',body:'Arabic is Iraq\'s official language, but Kurdish is co-official in the Kurdistan Region and widely spoken there. A <i>rojbaş</i> (good day) and <i>spas</i> (thank you) in Kurdish will open doors and win warm smiles.'}
  ],
  sounds: [
    {l:'x',say:'a deep guttural "ch" — like the j in Spanish jugar or the ch in Scottish loch',ex:'xanî = khah-NEE (house) · xwîn = khween',voice:'xanî'},
    {l:'ç',say:'the hard "ch" in church',ex:'çay = chai (tea) · çiya = chee-YAH (mountain)',voice:'çay'},
    {l:'ş',say:'the "sh" in she',ex:'şeş = shesh (six) · şev = shev (night)',voice:'şeş'},
    {l:'ê',say:'a pure open "ay", as in hey but without the gliding y',ex:'sê = "say" (three) · kêr = knife',voice:'sê'},
    {l:'î',say:'a long "ee" as in see',ex:'şîr = sheer (milk) · Kurdî = koor-DEE',voice:'şîr'},
    {l:'û',say:'a long "oo" as in boot',ex:'û = oo (and) · Kurdî = koor-DEE',voice:'Kurdî'},
    {l:'u',say:'a short "oo" as in put',ex:'du = doo (two) · bu = bee',voice:'du'},
    {l:'ł / l',say:'Kurmanji has two l sounds: a clear English l, and a deeper one (written ł) that often sounds like a soft w',ex:'l = clear · the dark ł can sound almost like "w"',voice:'mal'}
  ],
  resources: [
    {icon:'🗣️',t:'Easy Kurmanji dialogues',d:'Everyday conversations with subtitles — perfect for hearing natural Kurmanji.',q:'Easy Kurmanji dialogues for beginners'},
    {icon:'📚',t:'Kurdish alphabet lessons',d:'Breaks down the Latin letters and their unique sounds, one by one.',q:'Kurmanji alphabet pronunciation lesson'},
    {icon:'🎧',t:'Slow Kurmanji listening',d:'Short, clear phrases to practise on a walk or commute.',q:'slow Kurdish Kurmanji phrases for beginners'},
    {icon:'🌍',t:'Kurdish vs Persian cognates',d:'See the shared words between Kurdish and Farsi for an instant head start.',q:'Kurdish and Persian common words cognates'},
    {icon:'💬',t:'Kurdish phrasebook',d:'Traveller phrases with native audio, handy for the bazaar or the street.',q:'Kurmanji Kurdish common phrases travel'}
  ]
};
