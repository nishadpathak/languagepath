/* ---- uzbek ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["uzbek"] = {
  name: 'Uzbek',
  flag: '🇺🇿',
  tts: 'uz-UZ',
  dir: 'ltr',
  native: 'Oʻzbekcha',
  soundTitle: 'Uzbek sounds & spelling',
  soundIntro: 'Uzbek is written in the Latin alphabet and is nearly phonetic — learn the few special letters and you can read any word aloud. Watch the deep throat letters q and x, the special sounds oʻ and gʻ, and the rounded vowels.',
  grammar: '<p>Uzbek is a <b>Turkic</b> language, so the word order is <b>Subject – Object – Verb</b> and all the grammar lives in suffixes added to the end of words. There is <b>no gender</b> (no \'he/she/it\') and <b>no articles</b> (no \'a\' or \'the\'). It is written phonetically in the Latin alphabet: <b>men</b> = \'I\', <b>mening</b> = \'my\'. For polite or formal \'you\', use <b>Siz</b>. To say you want something: <b>Men … xohlayman</b> — e.g. <b>Men choy xohlayman</b> (I want tea). To ask a question simply add <b>-mi?</b> to the end: <b>Suv bormi?</b> = is there water?</p>',
  bridges: '<div class="note">🇹🇷 <b>Turkish & Azerbaijani.</b> Uzbek is a Turkic language very close to Turkish and Azerbaijani, so they learn it fast. Many everyday words line up — <i>su</i> (water), <i>choy</i> (tea), <i>uy</i> (house ≈ Turkish <i>ev</i>), <i>mening</i> (my ≈ Turkish <i>benim</i>), <i>bir</i>/<i>ikki</i> (one/two), <i>on</i> (ten), <i>ota</i> (father). If you already know one, you\'ll pick this up quickly.</div><div class="note">🇷🇺 <b>Russian & loanwords.</b> From the Soviet era and trade, Uzbek borrowed many everyday words: <i>metro</i>, <i>stansiya</i> (station), <i>taksi</i>, <i>bank</i>, <i>politsiya</i> (police), <i>dorixona</i> (pharmacy, from <i>dori</i> = medicine). <i>Bozor</i> (market) is the same word as English \'bazaar\'.</div>',
  lessons: [
    { id:1, title:'Greetings', focus:'salom · xayrli tong · xayr · qalaysiz?',
      steps:[
        {t:'say',text:'The word you\'ll use all day — <span class="inline-tr">salom</span> — hello. Say it out loud and you can greet almost anyone.',tr:'salom'},
        {t:'words',items:[{tr:'salom',pr:'SAH-lom',en:'hello / hi'},{tr:'xayrli tong',pr:'khay-REE tong',en:'good morning'},{tr:'xayrli kech',pr:'khay-REE kech',en:'good evening'},{tr:'xayr',pr:'khayr',en:'goodbye'},{tr:'qalaysiz?',pr:'kha-LAY-siz',en:'how are you? (formal)'}]},
        {t:'say',text:'<span class="inline-tr">Xayrli tong</span> = good morning; <span class="inline-tr">xayrli kech</span> = good evening. <span class="inline-tr">Xayr</span> = goodbye.',tr:'xayrli tong'},
        {t:'chal',en:'Hello! How are you?',tr:'Salom! Qalaysiz?',pr:'SAH-lom, kha-LAY-siz',morph:['salom = hello','qalaysiz? = how are you?']},
        {t:'say',text:'To answer \'how are you?\' say <span class="inline-tr">Yaxshi</span> — I\'m good — and add <span class="inline-tr">rahmat</span> (thanks).',tr:'yaxshi'},
        {t:'words',items:[{tr:'yaxshi',pr:'YAKH-shee',en:'good / well',link:'= Turkish yaxşı'},{tr:'rahmat',pr:'RAH-mat',en:'thank you'},{tr:'xayrli kun',pr:'khay-REE koon',en:'good day'}]},
        {t:'chal',en:'I\'m well, thanks',tr:'Yaxshi, rahmat',pr:'YAKH-shee, RAH-mat',morph:['yaxshi = I\'m well','rahmat = thanks']}
      ],
      blocks:['<code>salom</code> = hello','<code>xayrli tong</code> = good morning','<code>xayr</code> = goodbye','<code>qalaysiz?</code> = how are you?'] },
    { id:2, title:'Being polite', focus:'rahmat · iltimos · kechirasiz · ha · yoʻq',
      steps:[
        {t:'say',text:'The two magic words: <span class="inline-tr">rahmat</span> (thank you) and <span class="inline-tr">iltimos</span> (please).',tr:'rahmat'},
        {t:'words',items:[{tr:'rahmat',pr:'RAH-mat',en:'thank you',link:'≈ Arabic/Persian rahmat'},{tr:'iltimos',pr:'il-tee-MOS',en:'please'},{tr:'kechirasiz',pr:'ke-chee-RAH-siz',en:'excuse me / sorry'},{tr:'ha',pr:'hah',en:'yes'},{tr:'yoʻq',pr:'yok',en:'no'}]},
        {t:'chal',en:'Thank you, please',tr:'Rahmat, iltimos',pr:'RAH-mat, il-tee-MOS',morph:['rahmat = thank you','iltimos = please']},
        {t:'say',text:'<span class="inline-tr">Kechirasiz</span> = excuse me — perfect for getting someone\'s attention or apologising.',tr:'kechirasiz'},
        {t:'chal',en:'Excuse me, thank you',tr:'Kechirasiz, rahmat',pr:'ke-chee-RAH-siz, RAH-mat',morph:['kechirasiz = excuse me','rahmat = thank you']},
        {t:'say',text:'When a server hands you something they\'ll say <span class="inline-tr">Marhamat</span> — here you go. It also means \'go ahead\'.',tr:'marhamat'},
        {t:'chal',en:'Yes / No',tr:'Ha / Yoʻq',pr:'hah / yok',morph:['ha = yes','yoʻq = no']}
      ],
      blocks:['<code>rahmat</code> = thank you','<code>iltimos</code> = please','<code>kechirasiz</code> = excuse me','<code>ha</code> / <code>yoʻq</code> = yes / no'] },
    { id:3, title:'Numbers 1–10', focus:'bir · ikki · uch · toʻrt · besh · oʻn',
      steps:[
        {t:'say',text:'Numbers are the fastest win, and several are almost identical to Turkish. Listen and repeat: <span class="inline-tr">bir, ikki, uch</span>.',tr:'bir'},
        {t:'words',items:[{tr:'bir',pr:'beer',en:'1',link:'= Turkish bir'},{tr:'ikki',pr:'ee-KEE',en:'2',link:'= Turkish iki'},{tr:'uch',pr:'ooch',en:'3',link:'= Turkish üç'},{tr:'toʻrt',pr:'tort',en:'4',link:'≈ Turkish dört'},{tr:'besh',pr:'besh',en:'5',link:'= Turkish beş'},{tr:'olti',pr:'ol-TEE',en:'6'},{tr:'yetti',pr:'YET-tee',en:'7'},{tr:'sakkiz',pr:'sak-KEEZ',en:'8'},{tr:'toʻqqiz',pr:'tok-KIZ',en:'9'},{tr:'oʻn',pr:'on',en:'10',link:'= Turkish on'}]},
        {t:'chal',en:'Two teas, please',tr:'Ikki choy, iltimos',pr:'ee-KEE choy, il-tee-MOS',morph:['ikki = two','choy = tea','iltimos = please']},
        {t:'say',text:'To ask a price: <span class="inline-tr">Bu qancha turadi?</span> — how much is it? The money is the <b>soʻm</b>.',tr:'Bu qancha turadi?'},
        {t:'chal',en:'How much is it?',tr:'Bu qancha turadi?',pr:'boo khan-CHAH too-RAH-dee',morph:['bu = this','qancha = how much','turadi? = does it cost?']},
        {t:'chal',en:'It\'s five thousand soʻm',tr:'Besh ming soʻm',pr:'besh meeng som',morph:['besh = five','ming = thousand','soʻm = the currency (som)']}
      ],
      blocks:['bir, ikki, uch, toʻrt, besh = 1–5','olti, yetti, sakkiz, toʻqqiz, oʻn = 6–10','<code>bu qancha turadi?</code> = how much is it?'] },
    { id:4, title:'"I want" — men xohlayman', focus:'men xohlayman · xohlamayman · nima xohlaysiz?',
      steps:[
        {t:'say',text:'To say you want something: <span class="inline-tr">Men … xohlayman</span> — I want. The verb <span class="inline-tr">xohlamoq</span> is \'to want\'.',tr:'men xohlayman'},
        {t:'words',items:[{tr:'men',pr:'men',en:'I',link:'≈ Turkish ben'},{tr:'men xohlayman',pr:'men KHO-khla-y-man',en:'I want'},{tr:'xohlamayman',pr:'KHO-khla-may-man',en:'I don\'t want'},{tr:'nima xohlaysiz?',pr:'nee-MA KHO-khla-y-siz',en:'what do you want?'}]},
        {t:'chal',en:'I want tea',tr:'Men choy xohlayman',pr:'men choy KHO-khla-y-man',morph:['men = I','choy = tea','xohlayman = I want']},
        {t:'chal',en:'I want water',tr:'Men suv xohlayman',pr:'men soov KHO-khla-y-man',morph:['men = I','suv = water','xohlayman = I want']},
        {t:'say',text:'To say you don\'t want something: <span class="inline-tr">xohlamayman</span>. Handy when a seller offers you something.',tr:'xohlamayman'},
        {t:'chal',en:'I don\'t want coffee',tr:'Men qahva xohlamayman',pr:'men KAH-vah KHO-khla-may-man',morph:['men = I','qahva = coffee','xohlamayman = I don\'t want']}
      ],
      blocks:['<code>men xohlayman</code> = I want','<code>xohlamayman</code> = I don\'t want','<code>nima xohlaysiz?</code> = what do you want?'] },
    { id:5, title:'Food & drink', focus:'suv · non · choy · qahva · osh',
      steps:[
        {t:'say',text:'The essentials: <span class="inline-tr">suv</span> (water), <span class="inline-tr">non</span> (bread), <span class="inline-tr">choy</span> (tea). Tea is everywhere.',tr:'suv'},
        {t:'words',items:[{tr:'suv',pr:'soov',en:'water',link:'= Turkish su'},{tr:'non',pr:'non',en:'bread',link:'≈ Persian nān'},{tr:'choy',pr:'choy',en:'tea',link:'≈ English chai'},{tr:'qahva',pr:'KAH-vah',en:'coffee',link:'≈ English coffee'},{tr:'osh',pr:'osh',en:'plov (rice dish)'},{tr:'goʻsht',pr:'gosht',en:'meat'},{tr:'shakar',pr:'sha-KAR',en:'sugar',link:'≈ English sugar'}]},
        {t:'chal',en:'Water and bread, please',tr:'Suv va non, iltimos',pr:'soov va non, il-tee-MOS',morph:['suv = water','va = and','non = bread','iltimos = please']},
        {t:'say',text:'A <span class="inline-tr">choyxona</span> is a tea house — the heart of Uzbek social life. Order a cup with <span class="inline-tr">choy</span>.',tr:'choyxona'},
        {t:'chal',en:'I\'d like the menu',tr:'Menyu, iltimos',pr:'MEN-yoo, il-tee-MOS',morph:['menyu = menu (loanword)','iltimos = please']},
        {t:'say',text:'To praise the food: <span class="inline-tr">Juda mazali!</span> — it\'s delicious!',tr:'Juda mazali!'},
        {t:'chal',en:'It\'s very tasty!',tr:'Juda mazali!',pr:'JOO-dah mah-za-LEE',morph:['juda = very','mazali = tasty']}
      ],
      blocks:['<code>suv</code>, <code>non</code>, <code>choy</code>, <code>qahva</code> = water, bread, tea, coffee','<code>choyxona</code> = tea house','<code>juda mazali!</code> = it\'s delicious!'] },
    { id:6, title:'Getting around', focus:'qayerda? · oʻng · chap · toʻgʻri',
      steps:[
        {t:'say',text:'The most useful question when you\'re lost: <span class="inline-tr">Qayerda?</span> — where is it?',tr:'Qayerda?'},
        {t:'words',items:[{tr:'Qayerda?',pr:'kha-YER-dah',en:'where is it?',link:'≈ Turkish nerede'},{tr:'oʻng',pr:'ong',en:'right'},{tr:'chap',pr:'chap',en:'left'},{tr:'toʻgʻri',pr:'TOGH-ree',en:'straight ahead / correct'},{tr:'bekat',pr:'be-KAT',en:'stop / station'},{tr:'metro',pr:'met-ROH',en:'metro',link:'≈ English metro'}]},
        {t:'chal',en:'Where is the metro?',tr:'Metro qayerda?',pr:'met-ROH kha-YER-dah',morph:['metro = the metro','qayerda? = where is it?']},
        {t:'chal',en:'Where is the stop?',tr:'Bekat qayerda?',pr:'be-KAT kha-YER-dah',morph:['bekat = stop','qayerda? = where is it?']},
        {t:'say',text:'To give or follow directions: <span class="inline-tr">Oʻngga</span> = to the right, <span class="inline-tr">Chapga</span> = to the left, <span class="inline-tr">Toʻgʻri</span> = straight ahead.',tr:'oʻngga'},
        {t:'chal',en:'Turn right, straight ahead',tr:'Oʻngga, toʻgʻri',pr:'ong-GAH, TOGH-ree',morph:['oʻngga = to the right','toʻgʻri = straight ahead']}
      ],
      blocks:['<code>qayerda?</code> = where is it?','<code>oʻng</code> / <code>chap</code> = right / left','<code>toʻgʻri</code> = straight ahead'] },
    { id:7, title:'Questions & "do you have…?"', focus:'nima · qayer · qachon · qancha · bormi?',
      steps:[
        {t:'say',text:'Question words: <span class="inline-tr">nima</span> (what), <span class="inline-tr">qayer</span> (where), <span class="inline-tr">qachon</span> (when), <span class="inline-tr">qancha</span> (how much).',tr:'nima'},
        {t:'words',items:[{tr:'nima',pr:'nee-MA',en:'what',link:'≈ Turkish ne'},{tr:'qayer',pr:'kha-YER',en:'where',link:'≈ Turkish nerede'},{tr:'qachon',pr:'kha-CHON',en:'when',link:'≈ Turkish ne zaman'},{tr:'qancha',pr:'khan-CHAH',en:'how much'},{tr:'kim',pr:'keem',en:'who',link:'= Turkish kim'},{tr:'bormi?',pr:'BOR-mee',en:'is there? / do you have?'}]},
        {t:'chal',en:'What is this?',tr:'Bu nima?',pr:'boo nee-MA',morph:['bu = this','nima = what']},
        {t:'say',text:'<span class="inline-tr">Bormi?</span> = is there? / do you have? Often added to a noun: <span class="inline-tr">Suv bormi?</span> = is there water?',tr:'bormi?'},
        {t:'chal',en:'Is there wifi?',tr:'Wi-Fi bormi?',pr:'WEE-fee BOR-mee',morph:['wifi = the wifi','bormi? = is there / do you have?']},
        {t:'chal',en:'Do you have water?',tr:'Sizda suv bormi?',pr:'SEEZ-dah soov BOR-mee',morph:['sizda = with you (formal)','suv = water','bormi? = do you have?']}
      ],
      blocks:['<code>nima</code>, <code>qayer</code>, <code>qachon</code>, <code>qancha</code> = what, where, when, how much','<code>bormi?</code> = is there? / do you have?'] },
    { id:8, title:'Family & people', focus:'oila · ona · ota · aka · doʻst',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">oila</span> (family), <span class="inline-tr">ona</span> (mother), <span class="inline-tr">ota</span> (father).',tr:'oila'},
        {t:'words',items:[{tr:'oila',pr:'oy-LEH',en:'family',link:'≈ Turkish aile'},{tr:'ona',pr:'o-NAH',en:'mother',link:'≈ Turkish ana'},{tr:'ota',pr:'o-TAH',en:'father',link:'≈ Turkish ata'},{tr:'aka',pr:'a-KAH',en:'older brother'},{tr:'singil',pr:'seen-GEEL',en:'younger sister'},{tr:'doʻst',pr:'dost',en:'friend',link:'= Turkish dost'}]},
        {t:'chal',en:'This is my family',tr:'Bu mening oilam',pr:'boo MEN-eeng oy-LEM',morph:['bu = this','mening = my','oilam = my family']},
        {t:'say',text:'To say you have something, use <span class="inline-tr">Mening … bor</span> — literally \'my … exists\'.',tr:'mening doʻstim bor'},
        {t:'chal',en:'I have a friend',tr:'Mening doʻstim bor',pr:'MEN-eeng dos-TEEM bor',morph:['mening = my','doʻstim = my friend','bor = is / have']},
        {t:'chal',en:'I have a family',tr:'Mening oilam bor',pr:'MEN-eeng oy-LEM bor',morph:['mening = my','oilam = my family','bor = is / have']}
      ],
      blocks:['<code>ona</code> / <code>ota</code> = mother / father','<code>doʻst</code> = friend','<code>mening … bor</code> = I have …'] },
    { id:9, title:'Time, days & weather', focus:'bugun · ertaga · kecha · ob-havo',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">bugun</span>, tomorrow is <span class="inline-tr">ertaga</span>.',tr:'bugun'},
        {t:'words',items:[{tr:'bugun',pr:'boo-GOON',en:'today',link:'≈ Turkish bugün'},{tr:'ertaga',pr:'er-ta-GAH',en:'tomorrow'},{tr:'kecha',pr:'ke-CHA',en:'yesterday'},{tr:'ob-havo',pr:'OB hah-vo',en:'weather'},{tr:'issiq',pr:'ee-SEEK',en:'hot / warm'},{tr:'sovuq',pr:'so-VOOK',en:'cold',link:'≈ Turkish soğuk'}]},
        {t:'chal',en:'See you tomorrow',tr:'Ertaga koʻrishamiz',pr:'er-ta-GAH ko-ree-sha-meez',morph:['ertaga = tomorrow','koʻrishamiz = we\'ll meet']},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">Ob-havo qanday?</span> — how is the weather?',tr:'Ob-havo qanday?'},
        {t:'chal',en:'It\'s hot today',tr:'Bugun issiq',pr:'boo-GOON ee-SEEK',morph:['bugun = today','issiq = hot']},
        {t:'chal',en:'It\'s cold today',tr:'Bugun sovuq',pr:'boo-GOON so-VOOK',morph:['bugun = today','sovuq = cold']}
      ],
      blocks:['<code>bugun</code> / <code>ertaga</code> = today / tomorrow','<code>ob-havo qanday?</code> = how is the weather?','<code>issiq</code> / <code>sovuq</code> = hot / cold'] },
    { id:10, title:'Your name', focus:'Mening ismim __NAME__ · Sizning ismingiz nima?',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">Mening ismim __NAME__</span> — my name is __NAME__.',tr:'Mening ismim __NAME__'},
        {t:'words',items:[{tr:'Mening ismim __NAME__',pr:'MEN-eeng ees-MEEM __NAME__',en:'my name is __NAME__'},{tr:'Sizning ismingiz nima?',pr:'SEEZ-neeng ees-meen-GEES nee-MA',en:'what is your name? (formal)'},{tr:'ism',pr:'eesm',en:'name',link:'≈ Arabic ism'},{tr:'sizning',pr:'SEEZ-neeng',en:'your (formal)'}]},
        {t:'chal',en:'My name is __NAME__',tr:'Mening ismim __NAME__',pr:'MEN-eeng ees-MEEM __NAME__',morph:['mening = my','ismim = my name','__NAME__ = your name']},
        {t:'say',text:'To ask someone\'s name politely: <span class="inline-tr">Sizning ismingiz nima?</span>',tr:'Sizning ismingiz nima?'},
        {t:'chal',en:'What is your name?',tr:'Sizning ismingiz nima?',pr:'SEEZ-neeng ees-meen-GEES nee-MA',morph:['sizning = your (formal)','ismingiz = your name','nima = what']},
        {t:'say',text:'To say you\'re pleased to meet someone: <span class="inline-tr">Tanishganimdan xursandman</span> — very glad to meet you.',tr:'Tanishganimdan xursandman'},
        {t:'chal',en:'Pleased to meet you',tr:'Tanishganimdan xursandman',pr:'ta-neesh-GA-neem-dan khoor-SAND-man',morph:['tanishganimdan = from meeting you','xursandman = I am glad']}
      ],
      blocks:['<code>mening ismim __NAME__</code> = my name is __NAME__','<code>sizning ismingiz nima?</code> = what\'s your name?','<code>tanishganimdan xursandman</code> = pleased to meet you'] },
    { id:11, title:'Health & emergency', focus:'yordam! · shifokor · dorixona · tushunmayapman',
      steps:[
        {t:'say',text:'The most important words if you need help: <span class="inline-tr">Yordam!</span> (help!), <span class="inline-tr">shifokor</span> (doctor), <span class="inline-tr">dorixona</span> (pharmacy).',tr:'Yordam!'},
        {t:'words',items:[{tr:'Yordam!',pr:'yor-DAM',en:'help!'},{tr:'shifokor',pr:'shee-FOH-kor',en:'doctor'},{tr:'dorixona',pr:'do-ree-KHO-nah',en:'pharmacy'},{tr:'kasalxona',pr:'ka-sal-KHO-nah',en:'hospital'},{tr:'Tushunmayapman',pr:'too-shoon-MAH-yap-man',en:'I don\'t understand'},{tr:'politsiya',pr:'po-lee-TSEE-ya',en:'police',link:'≈ English police'}]},
        {t:'chal',en:'Help!',tr:'Yordam!',pr:'yor-DAM',morph:['yordam = help']},
        {t:'chal',en:'I don\'t understand',tr:'Tushunmayapman',pr:'too-shoon-MAH-yap-man',morph:['tushunmayapman = I don\'t understand']},
        {t:'say',text:'To say you need something: <span class="inline-tr">Menga … kerak</span> — I need…',tr:'menga shifokor kerak'},
        {t:'chal',en:'I need a doctor',tr:'Menga shifokor kerak',pr:'MEN-ga shee-FOH-kor ke-RAK',morph:['menga = to me','shifokor = doctor','kerak = is needed']},
        {t:'chal',en:'I need help',tr:'Menga yordam kerak',pr:'MEN-ga yor-DAM ke-RAK',morph:['menga = to me','yordam = help','kerak = is needed']}
      ],
      blocks:['<code>yordam!</code> = help!','<code>shifokor</code> / <code>dorixona</code> = doctor / pharmacy','<code>tushunmayapman</code> = I don\'t understand'] },
    { id:12, title:'Tying it together', focus:'a capstone mini-scene',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolbox. This capstone uses only words you\'ve met. Build each line yourself before revealing it.'},
        {t:'chal',en:'Hello! How are you?',tr:'Salom! Qalaysiz?',pr:'SAH-lom, kha-LAY-siz',morph:['salom = hello','qalaysiz? = how are you?']},
        {t:'chal',en:'My name is __NAME__',tr:'Mening ismim __NAME__',pr:'MEN-eeng ees-MEEM __NAME__',morph:['mening ismim = my name','__NAME__ = your name']},
        {t:'chal',en:'A tea, please',tr:'Bir choy, iltimos',pr:'beer choy, il-tee-MOS',morph:['bir = one','choy = tea','iltimos = please']},
        {t:'chal',en:'How much is it?',tr:'Bu qancha turadi?',pr:'boo khan-CHAH too-RAH-dee',morph:['bu = this','qancha = how much','turadi? = does it cost?']},
        {t:'chal',en:'Delicious! Thank you!',tr:'Juda mazali! Rahmat!',pr:'JOO-dah mah-za-LEE, RAH-mat',morph:['juda mazali = delicious','rahmat = thank you']}
      ],
      blocks:['You built: greetings, introductions, ordering, prices, thanks — a full day out in Uzbek.'] },
    { id:13, title:'Airport & tickets', focus:'aeroport · pasport · chipta · reys',
      steps:[
        {t:'say',text:'You have landed. The building is the <span class="inline-tr">aeroport</span>. Your document is a <span class="inline-tr">pasport</span>.',tr:'aeroport'},
        {t:'words',items:[{tr:'aeroport',pr:'ah-eh-roh-PORT',en:'the airport'},{tr:'pasport',pr:'PAHS-port',en:'the passport'},{tr:'chipta',pr:'CHIP-tah',en:'the ticket'},{tr:'reys',pr:'rays',en:'the flight'},{tr:'darvoza',pr:'dar-voh-ZAH',en:'the gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'Aeroport qayerda?',pr:'ah-eh-roh-PORT kah-YER-dah',morph:['aeroport = the airport','qayerda? = where?']},
        {t:'chal',en:'Here is my passport',tr:'Mana mening pasportim',pr:'MAH-nah MEH-ning PAHS-por-tim',morph:['mana = here is','mening pasportim = my passport']},
        {t:'chal',en:'A ticket, please',tr:'Chipta, iltimos',pr:'CHIP-tah, il-tee-MOHS',morph:['chipta = ticket','iltimos = please']},
        {t:'chal',en:'Where is the gate?',tr:'Darvoza qayerda?',pr:'dar-voh-ZAH kah-YER-dah',morph:['darvoza = the gate','qayerda? = where?']}
      ],
      blocks:['<code>aeroport</code> = airport','<code>pasport</code> = passport','<code>chipta</code> = ticket','<code>darvoza</code> = gate'] },
    { id:14, title:'The taxi', focus:'taksi · borish · mehmonxona · toʻxtang',
      steps:[
        {t:'say',text:'The driver is waiting. <span class="inline-tr">taksi</span> is the word you need. Tell them where to go with <span class="inline-tr">borishni xohlayman</span>.',tr:'taksi'},
        {t:'words',items:[{tr:'taksi',pr:'TAHK-see',en:'the taxi'},{tr:'haydovchi',pr:'high-DOHV-chee',en:'the driver'},{tr:'borishni xohlayman',pr:'BOH-rish-nee khoh-LAI-man',en:'I want to go'},{tr:'shu yerda toʻxtang',pr:'shoo YER-dah TOKH-tang',en:'stop here'}]},
        {t:'chal',en:'Taxi, please',tr:'Taksi, iltimos',pr:'TAHK-see, il-tee-MOHS',morph:['taksi = taxi','iltimos = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'Mehmonxonaga borishni xohlayman',pr:'meh-mon-khoh-nah-GAH BOH-rish-nee khoh-LAI-man',morph:['mehmonxonaga = to the hotel','borishni xohlayman = I want to go']},
        {t:'chal',en:'Stop here, please',tr:'Shu yerda toʻxtang, iltimos',pr:'shoo YER-dah TOKH-tang, il-tee-MOHS',morph:['shu yerda toʻxtang = stop here','iltimos = please']},
        {t:'chal',en:'How much is it?',tr:'Qancha turadi?',pr:'KAN-chah too-RAH-dee',morph:['qancha = how much','turadi? = does it cost?']}
      ],
      blocks:['<code>… ga borishni xohlayman</code> = I want to go to …','<code>shu yerda toʻxtang</code> = stop here'] },
    { id:15, title:'The hotel', focus:'bron · xona · kalit · tun',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">Menda bron bor</span> — I have a reservation.',tr:'bron'},
        {t:'words',items:[{tr:'mehmonxona',pr:'meh-mon-KHOH-nah',en:'the hotel'},{tr:'bron',pr:'brohn',en:'the reservation'},{tr:'xona',pr:'KHOH-nah',en:'the room'},{tr:'kalit',pr:'kah-LEET',en:'the key'},{tr:'bir tun',pr:'beer toon',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'Menda bron bor',pr:'MEN-dah brohn bor',morph:['menda = I have','bron bor = a reservation']},
        {t:'chal',en:'A room for one night, please',tr:'Bir tunlik xona, iltimos',pr:'beer TOON-lik KHOH-nah, il-tee-MOHS',morph:['bir tunlik = for one night','xona = a room','iltimos = please']},
        {t:'chal',en:'The key, please',tr:'Kalit, iltimos',pr:'kah-LEET, il-tee-MOHS',morph:['kalit = the key','iltimos = please']},
        {t:'chal',en:'Where is my room?',tr:'Mening xonam qayerda?',pr:'MEH-ning KHOH-nam kah-YER-dah',morph:['mening xonam = my room','qayerda? = where?']}
      ],
      blocks:['<code>bron</code> = reservation','<code>xona</code> = room','<code>kalit</code> = key'] },
    { id:16, title:'Ask for help', focus:'tushunmadim · sekinroq · inglizcha',
      steps:[
        {t:'say',text:'When the language is too fast: <span class="inline-tr">Sekinroq, iltimos</span> — slower, please.',tr:'Sekinroq, iltimos'},
        {t:'words',items:[{tr:'sekinroq',pr:'seh-keen-ROHK',en:'slower'},{tr:'yana',pr:'yah-NAH',en:'again'},{tr:'inglizcha',pr:'ing-LEEZ-chah',en:'English'},{tr:'yordam bera olasizmi?',pr:'YOR-dam BEH-rah oh-LAH-siz-mee',en:'can you help?'}]},
        {t:'chal',en:'I don\'t understand',tr:'Tushunmadim',pr:'too-shoon-mah-DEEM',morph:['tushunmadim = I didn\'t understand']},
        {t:'chal',en:'Slower, please',tr:'Sekinroq, iltimos',pr:'seh-keen-ROHK, il-tee-MOHS',morph:['sekinroq = slower','iltimos = please']},
        {t:'chal',en:'Can you help me?',tr:'Yordam bera olasizmi?',pr:'YOR-dam BEH-rah oh-LAH-siz-mee',morph:['yordam = help','bera olasizmi? = can you give?']},
        {t:'chal',en:'Do you speak English?',tr:'Inglizcha gapirasizmi?',pr:'ing-LEEZ-chah gah-pee-rah-SIZ-mee',morph:['inglizcha = English','gapirasizmi? = do you speak?']}
      ],
      blocks:['<code>sekinroq</code> = slower','<code>Inglizcha gapirasizmi?</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'choyxona', title:'🍵 At a choyxona (tea house)', emoji:'🍵', turns:[
      {who:'You',tr:'Salom! Bir choy, iltimos.',pr:'SAH-lom, beer choy, il-tee-MOS',en:'Hello! A tea, please.'},
      {who:'Server',tr:'Marhamat. Yana nima kerak?',pr:'mar-ha-MAT, ya-NA NEEM-a ke-RAK',en:'Here you are. Anything else?'},
      {who:'You',tr:'Bir non, iltimos.',pr:'beer non, il-tee-MOS',en:'A bread, please.'},
      {who:'You',tr:'Bu qancha turadi?',pr:'boo khan-CHAH too-RAH-dee',en:'How much is it?'},
      {who:'Server',tr:'Besh ming soʻm.',pr:'besh meeng som',en:'Five thousand soʻm.'},
      {who:'You',tr:'Rahmat!',pr:'RAH-mat',en:'Thank you!'}
    ]},
    { id:'transport', title:'🚌 Getting around', emoji:'🚌', turns:[
      {who:'You',tr:'Kechirasiz, bekat qayerda?',pr:'ke-chee-RAH-siz, be-KAT kha-YER-dah',en:'Excuse me, where is the stop?'},
      {who:'Local',tr:'U yerda, toʻgʻri.',pr:'oo yer-DAH, TOGH-ree',en:'There, straight ahead.'},
      {who:'You',tr:'Rahmat. Bitta chipta, iltimos.',pr:'RAH-mat, BEET-ta cheep-TA, il-tee-MOS',en:'Thanks. One ticket, please.'},
      {who:'Driver',tr:'Ikki ming soʻm.',pr:'ee-KEE meeng som',en:'Two thousand soʻm.'},
      {who:'You',tr:'Rahmat!',pr:'RAH-mat',en:'Thank you!'}
    ]},
    { id:'restaurant', title:'🍽️ At a restaurant', emoji:'🍽️', turns:[
      {who:'Waiter',tr:'Xush kelibsiz! Nima buyurasiz?',pr:'khoosh ke-leeb-SEEZ, nee-MA boo-yoo-RA-siz',en:'Welcome! What would you like?'},
      {who:'You',tr:'Menyu, iltimos.',pr:'MEN-yoo, il-tee-MOS',en:'The menu, please.'},
      {who:'You',tr:'Men osh va suv xohlayman.',pr:'men osh va soov KHO-khla-y-man',en:'I\'d like plov and water.'},
      {who:'Waiter',tr:'Juda yaxshi.',pr:'JOO-dah YAKH-shee',en:'Very good.'},
      {who:'You',tr:'Bu qancha turadi?',pr:'boo khan-CHAH too-RAH-dee',en:'How much is it?'},
      {who:'Waiter',tr:'Oʻn besh ming soʻm.',pr:'on besh meeng som',en:'Fifteen thousand soʻm.'}
    ]},
    { id:'bazaar', title:'🧺 At the bazaar', emoji:'🧺', turns:[
      {who:'Seller',tr:'Xush kelibsiz! Sizga nima kerak?',pr:'khoosh ke-leeb-SEEZ, SEEZ-ga nee-MA ke-RAK',en:'Welcome! What do you need?'},
      {who:'You',tr:'Bu qancha turadi?',pr:'boo khan-CHAH too-RAH-dee',en:'How much is this?'},
      {who:'Seller',tr:'Yigirma ming soʻm.',pr:'yee-GEER-ma meeng som',en:'Twenty thousand soʻm.'},
      {who:'You',tr:'Juda qimmat! Oʻn ming?',pr:'JOO-dah keem-MAT, on meeng',en:'Too expensive! Ten thousand?'},
      {who:'Seller',tr:'Yaxshi, oʻn besh ming.',pr:'YAKH-shee, on besh meeng',en:'OK, fifteen thousand.'},
      {who:'You',tr:'Rahmat!',pr:'RAH-mat',en:'Thank you!'}
    ]}
  ],
  pocket: [
    {tr:'Salom',pr:'SAH-lom',en:'Hello',c:'Greetings'},
    {tr:'Xayrli tong',pr:'khay-REE tong',en:'Good morning',c:'Greetings'},
    {tr:'Xayrli kech',pr:'khay-REE kech',en:'Good evening',c:'Greetings'},
    {tr:'Xayr',pr:'khayr',en:'Goodbye',c:'Greetings'},
    {tr:'Qalaysiz?',pr:'kha-LAY-siz',en:'How are you?',c:'Greetings'},
    {tr:'Yaxshi, rahmat',pr:'YAKH-shee, RAH-mat',en:'I\'m well, thanks',c:'Greetings'},
    {tr:'Mening ismim __NAME__',pr:'MEN-eeng ees-MEEM __NAME__',en:'My name is __NAME__',c:'Greetings'},
    {tr:'Rahmat',pr:'RAH-mat',en:'Thank you',c:'Courtesy'},
    {tr:'Iltimos',pr:'il-tee-MOS',en:'Please',c:'Courtesy'},
    {tr:'Kechirasiz',pr:'ke-chee-RAH-siz',en:'Excuse me',c:'Courtesy'},
    {tr:'Marhamat',pr:'mar-ha-MAT',en:'Here you go',c:'Courtesy'},
    {tr:'Ha',pr:'hah',en:'Yes',c:'Courtesy'},
    {tr:'Yoʻq',pr:'yok',en:'No',c:'Courtesy'},
    {tr:'Bir',pr:'beer',en:'1',c:'Numbers'},
    {tr:'Ikki',pr:'ee-KEE',en:'2',c:'Numbers'},
    {tr:'Besh',pr:'besh',en:'5',c:'Numbers'},
    {tr:'Oʻn',pr:'on',en:'10',c:'Numbers'},
    {tr:'Suv',pr:'soov',en:'water',c:'Food & Drink'},
    {tr:'Non',pr:'non',en:'bread',c:'Food & Drink'},
    {tr:'Choy',pr:'choy',en:'tea',c:'Food & Drink'},
    {tr:'Qahva',pr:'KAH-vah',en:'coffee',c:'Food & Drink'},
    {tr:'Osh',pr:'osh',en:'plov (rice dish)',c:'Food & Drink'},
    {tr:'Juda mazali!',pr:'JOO-dah mah-za-LEE',en:'It\'s delicious!',c:'Food & Drink'},
    {tr:'Qayerda?',pr:'kha-YER-dah',en:'Where is it?',c:'Directions'},
    {tr:'Oʻngga',pr:'ong-GAH',en:'to the right',c:'Directions'},
    {tr:'Chapga',pr:'chap-GAH',en:'to the left',c:'Directions'},
    {tr:'Toʻgʻri',pr:'TOGH-ree',en:'straight ahead',c:'Directions'},
    {tr:'Bekat qayerda?',pr:'be-KAT kha-YER-dah',en:'Where is the stop?',c:'Directions'},
    {tr:'Bu qancha turadi?',pr:'boo khan-CHAH too-RAH-dee',en:'How much is it?',c:'Questions'},
    {tr:'Bu nima?',pr:'boo nee-MA',en:'What is this?',c:'Questions'},
    {tr:'Bormi?',pr:'BOR-mee',en:'Is there? / Do you have?',c:'Questions'},
    {tr:'Oila',pr:'oy-LEH',en:'family',c:'Family & Time'},
    {tr:'Ona',pr:'o-NAH',en:'mother',c:'Family & Time'},
    {tr:'Bugun',pr:'boo-GOON',en:'today',c:'Family & Time'},
    {tr:'Ertaga',pr:'er-ta-GAH',en:'tomorrow',c:'Family & Time'},
    {tr:'Yordam!',pr:'yor-DAM',en:'Help!',c:'Emergency'},
    {tr:'Shifokor',pr:'shee-FOH-kor',en:'doctor',c:'Emergency'},
    {tr:'Dorixona',pr:'do-ree-KHO-nah',en:'pharmacy',c:'Emergency'},
    {tr:'Tushunmayapman',pr:'too-shoon-MAH-yap-man',en:'I don\'t understand',c:'Emergency'},
    {tr:'Aeroport',pr:'ah-eh-roh-PORT',en:'the airport',c:'Travel'},
    {tr:'Pasport',pr:'PAHS-port',en:'the passport',c:'Travel'},
    {tr:'Chipta',pr:'CHIP-tah',en:'the ticket',c:'Travel'},
    {tr:'Taksi',pr:'TAHK-see',en:'the taxi',c:'Travel'},
    {tr:'Mehmonxona',pr:'meh-mon-KHOH-nah',en:'the hotel',c:'Travel'},
    {tr:'Menda bron bor',pr:'MEN-dah brohn bor',en:'I have a reservation',c:'Travel'},
    {tr:'Sekinroq, iltimos',pr:'seh-keen-ROHK, il-tee-MOHS',en:'Slower, please',c:'Travel'},
    {tr:'Inglizcha gapirasizmi?',pr:'ing-LEEZ-chah gah-pee-rah-SIZ-mee',en:'Do you speak English?',c:'Travel'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food & Drink','Directions','Questions','Family & Time','Emergency','Travel'],
  culture: [
    {icon:'🧺',title:'The bazaar is the heart of it',body:'The bazaar (bozor) is central to Uzbek life — a sprawling market of fruit, spices, bread and handicrafts. In the city bazaars prices are often negotiable: ask \'Bu qancha turadi?\' and politely counter with \'Juda qimmat!\' (too expensive!). A smile and \'iltimos\' go a long way, and sellers usually enjoy the friendly haggling.'},
    {icon:'🍚',title:'Plov is the national dish',body:'Plov (osh) — rice with carrots, onions and meat — is the signature Uzbek dish, served for celebrations and big gatherings. It\'s often cooked on a huge scale and shared. Ordering a plate of osh is a great way to connect, and the famous saying \'plov is the king of dishes\' (Osh — yegulikning qoni) tells you how much it matters.'},
    {icon:'🤝',title:'Hospitality comes first',body:'Uzbeks are famously warm to guests. If you\'re invited home you\'ll be offered tea (choy) and food within minutes, and the family will insist you eat more. Refusing can seem rude — a little \'rahmat\' and one more bite goes a long way. Tea is almost always poured and refilled, and turning the cup over signals you\'re done.'},
    {icon:'🐫',title:'Land of the Silk Road',body:'Uzbekistan sits at the heart of the ancient Silk Road, with the trading cities of Samarkand, Bukhara and Khiva. These cities were meeting points for traders and travellers, which is why Uzbek absorbed words from Persian, Arabic, Russian and beyond. The tile-work and madrasas (Islamic schools) of Samarkand are some of the most beautiful in the world.'},
    {icon:'🍉',title:'Glories of the melon',body:'Uzbekistan is famous for its incredibly sweet melons (qovun) and its round flat bread (non), stamped with patterns and baked in traditional clay ovens (tandir). Sawing into a juicy melon or tearing off a piece of fresh non is a memory you\'ll keep — and a perfect conversation opener.'},
    {icon:'🍵',title:'The choyxona (tea house)',body:'The choyxona — a tea house with shaded platforms — is the social hub of any Uzbek town. Men and families gather for green tea, sweets and conversation, often for hours. It\'s a relaxed place where you can sit and soak up daily life, and it\'s also where you\'ll practise your first words of Uzbek.'}
  ],
  sounds: [
    {l:'oʻ',say:'a deep, rounded "o" said further back, like "aw" in "law" or the "o" here could feel a little like "or" — it is rounder than the plain "o"',ex:'oʻn = on (ten) · soʻz = sos (word)',voice:'oʻn'},
    {l:'gʻ',say:'a voiced throaty sound like a soft French "r" or the gutteral "g"; there\'s no exact English match',ex:'toʻgʻri = TOGH-ree (straight) · gʻoz = ghoz (goose)',voice:'toʻgʻri'},
    {l:'q',say:'a deep "k" made at the back of the throat (like Arabic "qaf")',ex:'qahva = KAH-vah (coffee) · qayer = kha-YER (where)',voice:'qahva'},
    {l:'x',say:'a rough, throaty "kh", like Scottish "loch"',ex:'xayr = khayr (goodbye) · yaxshi = YAKH-shee (good)',voice:'xayr'},
    {l:'o',say:'an open rounded "o", like the "o" in "hot" or "not" (a little deeper than the letter in English)',ex:'non = non (bread) · osh = osh (plov)',voice:'non'},
    {l:'u',say:'rounded "oo", like "oo" in "food"',ex:'suv = soov (water) · kun = koon (day)',voice:'suv'},
    {l:'sh',say:'like "sh" in "shoe"',ex:'shakar = sha-KAR (sugar) · osh = osh (plov)',voice:'shakar'},
    {l:'ch',say:'like "ch" in "church" (soft)',ex:'choy = choy (tea) · kech = kech (evening)',voice:'choy'}
  ],
  resources: [
    {icon:'🗣️',t:'Learn Uzbek for beginners',d:'Clear, step-by-step beginner lessons on greetings, numbers and everyday phrases from a native speaker.',q:'Learn Uzbek for beginners'},
    {icon:'✈️',t:'Uzbek travel phrases',d:'Practical phrases for travel, ordering food, shopping and getting around Tashkent and Samarkand.',q:'Uzbek travel phrases for tourists'},
    {icon:'🆚',t:'Turkish vs Uzbek vocabulary',d:'Uzbek shares a huge amount with Turkish and Azerbaijani — these videos show the overlaps directly.',q:'Turkish Uzbek Azerbaijani language comparison'},
    {icon:'🔤',t:'The Uzbek alphabet & pronunciation',d:'Learn the Latin alphabet plus the special letters oʻ, gʻ, q and x with clear audio.',q:'Uzbek alphabet pronunciation lesson'},
    {icon:'🎧',t:'Slow Uzbek listening practice',d:'Easy, slow conversational Uzbek for learners — great for a walk or commute.',q:'Uzbek conversation for beginners audio'}
  ]
};
