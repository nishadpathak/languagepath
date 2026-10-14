/* ---- kazakh ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["kazakh"] = {
  name: 'Kazakh',
  flag: '🇰🇿',
  tts: 'kk-KZ',
  dir: 'ltr',
  native: 'Қазақша',
  soundTitle: 'Kazakh sounds & spelling',
  soundIntro: 'Kazakh is written in Cyrillic, but the sounds are closer to Turkish. A few letters — қ, ғ, ұ, ү, ө, ә, ң — don\'t exist in English. Learn them once and most words become easy to say.',
  grammar: '<p>Kazakh is <b>Turkic</b> and <b>agglutinative</b>: meaning is built by stacking suffixes onto a stem, not by using lots of small separate words. It follows <b>vowel harmony</b> — suffixes copy the frontness of the stem\'s vowels (front: <b>ө, ү, ә, і</b>; back: <b>о, ұ, а, ы</b>). Word order is subject-object-verb, exactly like Turkish: <i>men su qalaymın</i> = "I water want". Two phrases get you ordering anything: <b>мен ... қалаймын</b> ("I want ...") and <b>маған ... керек</b> ("I need ...").</p>',
  bridges: '<div class="note">🇹🇷 <b>Turkish.</b> Kazakh is a Turkic cousin of Turkish, so if you know Turkish you\'ll fly. Shared words: <b>су</b> (su, water), <b>нан</b> (nan, bread), <b>шай</b> (shay, tea), <b>мен</b> (men, "I" — Turkish <i>ben</i>). Word order lines up exactly.</div><div class="note">🇺🇿 <b>Uzbek · Azerbaijani · Kyrgyz.</b> The whole Turkic family is close: <i>su, nan, shay, men</i> turn up again and again across Uzbek, Azerbaijani, Kyrgyz and Tatar — you\'re importing knowledge from a whole group at once.</div><div class="note">🇷🇺 <b>Russian.</b> Many Kazakhs also speak Russian, and Kazakh has borrowed from it — <b>вокзал</b> (vokzal, station), <b>кофе</b> (kofe, coffee). When you\'re stuck, a word of Russian often saves the day.</div>',
  lessons: [
    { id:1, title:'Greetings & being polite', focus:'сәлем · қайырлы таң · қош бол',
      steps:[
        {t:'say',text:'Start with the word you\'ll use most: <span class="inline-tr">сәлем</span> — hello (and, casually, goodbye). Say it out loud.',tr:'сәлем'},
        {t:'words',items:[{tr:'Сәлем',pr:'sälem',en:'hello / hi'},{tr:'Қайырлы таң',pr:'qayırlı tañ',en:'good morning'},{tr:'Қайырлы кеш',pr:'qayırlı keş',en:'good evening'},{tr:'Қалайсың?',pr:'qalaysıñ?',en:'How are you?'},{tr:'Жақсы, рақмет',pr:'jaqsı, raqmet',en:'Well, thanks'},{tr:'Сау бол',pr:'saw bol',en:'goodbye'}]},
        {t:'chal',en:'Hello, how are you?',tr:'Сәлем, қалайсың?',pr:'sälem, qalaysıñ?',morph:['сәлем = hello','қалайсың? = how are you?']},
        {t:'say',text:'To say goodbye: <span class="inline-tr">сау бол</span> (bye), or <span class="inline-tr">қош бол</span>.',tr:'қош бол'},
        {t:'chal',en:'Good morning! How are you?',tr:'Қайырлы таң! Қалайсың?',pr:'qayırlı tañ! qalaysıñ?',morph:['қайырлы таң = good morning','қалайсың? = how are you?']},
        {t:'say',text:'To welcome someone: <span class="inline-tr">қош келдіңіз!</span> — welcome!.',tr:'қош келдіңіз!'}
      ],
      blocks:['<code>сәлем</code> = hello','<code>қайырлы таң</code> = good morning','<code>қалайсың?</code> = how are you?','<code>сау бол</code> = goodbye'] },
    { id:2, title:'Thanks & please', focus:'рақмет · өтінемін · кешіріңіз',
      steps:[
        {t:'say',text:'The two politeness words: <span class="inline-tr">рақмет</span> (thank you) and <span class="inline-tr">өтінемін</span> (please).',tr:'рақмет'},
        {t:'words',items:[{tr:'рақмет',pr:'raqmet',en:'thank you'},{tr:'өтінемін',pr:'ötinemin',en:'please'},{tr:'кешіріңіз',pr:'keşiriñiz',en:'excuse me / sorry'},{tr:'иә',pr:'iä',en:'yes'},{tr:'жоқ',pr:'joq',en:'no'}]},
        {t:'say',text:'To say thanks a lot, add <span class="inline-tr">көп</span> (a lot): <span class="inline-tr">көп рақмет</span>.',tr:'көп рақмет'},
        {t:'chal',en:'Thank you very much',tr:'Көп рақмет',pr:'köp raqmet',morph:['көп = a lot','рақмет = thanks']},
        {t:'say',text:'The reply to "thank you": <span class="inline-tr">оқасы жоқ</span> — no problem / you\'re welcome.',tr:'оқасы жоқ'},
        {t:'chal',en:'You\'re welcome',tr:'Оқасы жоқ',pr:'oqası joq',morph:['оқасы жоқ = no problem / you\'re welcome']}
      ],
      blocks:['<code>рақмет</code> = thank you','<code>өтінемін</code> = please','<code>кешіріңіз</code> = excuse me / sorry','<code>иә</code> / <code>жоқ</code> = yes / no'] },
    { id:3, title:'Numbers 1–10', focus:'бір · екі · үш · он',
      steps:[
        {t:'say',text:'Numbers are a fast win. Listen and repeat: <span class="inline-tr">бір, екі, үш</span>.',tr:'бір'},
        {t:'words',items:[{tr:'бір',pr:'bir',en:'1'},{tr:'екі',pr:'eki',en:'2'},{tr:'үш',pr:'üş',en:'3'},{tr:'төрт',pr:'tört',en:'4'},{tr:'бес',pr:'bes',en:'5'},{tr:'он',pr:'on',en:'10'}]},
        {t:'say',text:'Six to ten: <span class="inline-tr">алты, жеті, сегіз, тоғыз, он</span>.',tr:'алты'},
        {t:'chal',en:'Two coffees, please',tr:'Екі кофе, өтінемін',pr:'eki kofe, ötinemin',morph:['екі = two','кофе = coffee','өтінемін = please']},
        {t:'say',text:'To ask "how much / how many?": <span class="inline-tr">қанша?</span>',tr:'қанша?'},
        {t:'chal',en:'How much is it?',tr:'Бұл қанша тұрады?',pr:'bul qanşa turadı?',morph:['бұл = this','қанша = how much','тұрады? = costs?']},
        {t:'chal',en:'It\'s five tenge',tr:'Бес теңге',pr:'bes teñge',morph:['бес = five','теңге = tenge']}
      ],
      blocks:['бір, екі, үш, төрт, бес = 1–5','алты, жеті, сегіз, тоғыз, он = 6–10','<code>қанша?</code> = how much / how many?'] },
    { id:4, title:'"I want" — мен ... қалаймын', focus:'мен ... қалаймын · маған ... керек',
      steps:[
        {t:'say',text:'To order or want something: <span class="inline-tr">мен ... қалаймын</span> — I want ....',tr:'мен ... қалаймын'},
        {t:'words',items:[{tr:'мен ... қалаймын',pr:'men ... qalaymın',en:'I want ...'},{tr:'маған ... керек',pr:'mağan ... kerek',en:'I need ...'},{tr:'мен',pr:'men',en:'I / me',link:'≈ Turkish ben — a Turkic cognate'},{tr:'су',pr:'su',en:'water',link:'≈ Turkish su — a shared Turkic word'},{tr:'нан',pr:'nan',en:'bread',link:'≈ Uzbek non — a shared Central Asian word'},{tr:'шай',pr:'şay',en:'tea',link:'≈ Turkish çay — same word, borrowed worldwide'}]},
        {t:'chal',en:'I want water',tr:'Мен су қалаймын',pr:'men su qalaymın',morph:['мен = I','су = water','қалаймын = I want']},
        {t:'say',text:'Even more natural for needs: <span class="inline-tr">маған ... керек</span> — I need ....',tr:'маған ... керек'},
        {t:'chal',en:'I need bread',tr:'Маған нан керек',pr:'mağan nan kerek',morph:['маған = for me / I need','нан = bread','керек = is needed']},
        {t:'chal',en:'I want tea',tr:'Мен шай қалаймын',pr:'men şay qalaymın',morph:['мен = I','шай = tea','қалаймын = I want']}
      ],
      blocks:['<code>мен ... қалаймын</code> = I want ...','<code>маған ... керек</code> = I need ...','<code>су</code>, <code>нан</code>, <code>шай</code> = water, bread, tea'] },
    { id:5, title:'Food & drink', focus:'су · нан · шай · кофе',
      steps:[
        {t:'say',text:'Food and drink essentials: <span class="inline-tr">су</span> (water), <span class="inline-tr">нан</span> (bread), <span class="inline-tr">шай</span> (tea), <span class="inline-tr">кофе</span> (coffee).',tr:'су'},
        {t:'words',items:[{tr:'су',pr:'su',en:'water',link:'≈ Turkish su'},{tr:'нан',pr:'nan',en:'bread'},{tr:'шай',pr:'şay',en:'tea',link:'≈ Turkish çay'},{tr:'кофе',pr:'kofe',en:'coffee',link:'≈ coffee (international loan)'},{tr:'сүт',pr:'süt',en:'milk'},{tr:'ет',pr:'et',en:'meat'}]},
        {t:'chal',en:'Tea with milk, please',tr:'Сүт қосылған шай, өтінемін',pr:'süt qosılğan şay, ötinemin',morph:['сүт = milk','шай = tea','өтінемін = please']},
        {t:'say',text:'To say it\'s tasty: <span class="inline-tr">дәмді</span> — delicious.',tr:'дәмді'},
        {t:'chal',en:'It\'s delicious!',tr:'Дәмді!',pr:'dämdi!',morph:['дәмді = delicious / tasty']},
        {t:'chal',en:'I need bread, please',tr:'Маған нан керек, өтінемін',pr:'mağan nan kerek, ötinemin',morph:['маған = I need','нан = bread','керек = needed','өтінемін = please']}
      ],
      blocks:['<code>су</code> / <code>нан</code> = water / bread','<code>шай</code> / <code>кофе</code> = tea / coffee','<code>дәмді</code> = delicious'] },
    { id:6, title:'Getting around', focus:'қайда? · оңға · солға · түзу',
      steps:[
        {t:'say',text:'The most useful question: put the place then <span class="inline-tr">... қайда?</span> — where is ...?.',tr:'... қайда?'},
        {t:'words',items:[{tr:'... қайда?',pr:'... qayda?',en:'Where is ...?'},{tr:'оңға',pr:'oñğa',en:'to the right'},{tr:'солға',pr:'solğa',en:'to the left'},{tr:'түзу',pr:'tüzu',en:'straight ahead'},{tr:'вокзал',pr:'vokzal',en:'station',link:'≈ Russian вокзал — a loan that travelled'},{tr:'дәріхана',pr:'därixana',en:'pharmacy'}]},
        {t:'chal',en:'Where is the station?',tr:'Вокзал қайда?',pr:'vokzal qayda?',morph:['вокзал = station','қайда? = where?']},
        {t:'say',text:'<span class="inline-tr">оңға</span> = to the right, <span class="inline-tr">солға</span> = to the left, <span class="inline-tr">түзу</span> = straight ahead.',tr:'түзу'},
        {t:'chal',en:'Turn left',tr:'Солға бұрылыңыз',pr:'solğa burılıñız',morph:['солға = to the left','бұрылыңыз = turn']}
      ],
      blocks:['<code>... қайда?</code> = where is ...?','<code>оңға</code> / <code>солға</code> = right / left','<code>түзу</code> = straight ahead'] },
    { id:7, title:'Questions & "is there…?"', focus:'кім? · не? · қайда? · бар ма?',
      steps:[
        {t:'say',text:'Question words are short and powerful: <span class="inline-tr">кім?</span> (who?), <span class="inline-tr">не?</span> (what?), <span class="inline-tr">қайда?</span> (where?), <span class="inline-tr">қашан?</span> (when?), <span class="inline-tr">неге?</span> (why?), <span class="inline-tr">қанша?</span> (how much?).',tr:'кім?'},
        {t:'words',items:[{tr:'Кім?',pr:'kim?',en:'who?'},{tr:'Не?',pr:'ne?',en:'what?'},{tr:'Қайда?',pr:'qayda?',en:'where?'},{tr:'Қашан?',pr:'qaşan?',en:'when?'},{tr:'Неге?',pr:'nege?',en:'why?'},{tr:'Қанша?',pr:'qanşa?',en:'how much / how many?'}]},
        {t:'say',text:'To ask "is there ...?" or "do you have ...?": <span class="inline-tr">... бар ма?</span>',tr:'... бар ма?'},
        {t:'chal',en:'Is there tea?',tr:'Шай бар ма?',pr:'şay bar ma?',morph:['шай = tea','бар ма? = is there?']},
        {t:'chal',en:'Do you have bread?',tr:'Сізде нан бар ма?',pr:'sizde nan bar ma?',morph:['сізде = at you (formal)','нан = bread','бар ма? = is there?']}
      ],
      blocks:['<code>кім?</code> / <code>не?</code> = who? / what?','<code>қайда?</code> / <code>қашан?</code> = where? / when?','<code>... бар ма?</code> = is there ...? / do you have ...?'] },
    { id:8, title:'Family & people', focus:'отбасы · ана · әке · дос',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">отбасы</span> (family), <span class="inline-tr">ана</span> (mother), <span class="inline-tr">әке</span> (father).',tr:'отбасы'},
        {t:'words',items:[{tr:'отбасы',pr:'otbası',en:'family'},{tr:'ана',pr:'ana',en:'mother'},{tr:'әке',pr:'äke',en:'father'},{tr:'аға',pr:'ağa',en:'older brother'},{tr:'апа',pr:'apa',en:'older sister'},{tr:'дос',pr:'dos',en:'friend',link:'≈ Turkish dost — a shared word'}]},
        {t:'say',text:'<span class="inline-tr">бар</span> = there is / have. Менің досым бар = I have a friend.',tr:'менің досым бар'},
        {t:'chal',en:'I have a friend',tr:'Менің досым бар',pr:'meniñ dosım bar',morph:['менің = my','досым = my friend','бар = there is / have']},
        {t:'chal',en:'I have a family',tr:'Менің отбасым бар',pr:'meniñ otbasım bar',morph:['менің = my','отбасым = my family','бар = have']}
      ],
      blocks:['<code>ана</code> / <code>әке</code> = mother / father','<code>аға</code> / <code>апа</code> = older brother / sister','<code>менің досым бар</code> = I have a friend'] },
    { id:9, title:'Time, days & weather', focus:'бүгін · ертең · ауа райы',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">бүгін</span>, tomorrow is <span class="inline-tr">ертең</span>, yesterday is <span class="inline-tr">кеше</span>.',tr:'бүгін'},
        {t:'words',items:[{tr:'бүгін',pr:'bügin',en:'today'},{tr:'ертең',pr:'erteñ',en:'tomorrow'},{tr:'кеше',pr:'keşe',en:'yesterday'},{tr:'апта',pr:'apta',en:'week'},{tr:'ауа райы қандай?',pr:'awa rayı qanday?',en:'what\'s the weather like?'},{tr:'ауа райы жақсы',pr:'awa rayı jaqsı',en:'the weather is good'}]},
        {t:'chal',en:'See you tomorrow',tr:'Ертеңге дейін!',pr:'erteñge deyin!',morph:['ертеңге = until tomorrow','дейін = until']},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">ауа райы қандай?</span>',tr:'ауа райы қандай?'},
        {t:'chal',en:'It\'s raining',tr:'Жаңбыр жауып тұр',pr:'jañbır jawıp tur',morph:['жаңбыр = rain','жауып тұр = is falling']}
      ],
      blocks:['<code>бүгін</code> / <code>ертең</code> / <code>кеше</code> = today / tomorrow / yesterday','<code>ауа райы қандай?</code> = what\'s the weather like?'] },
    { id:10, title:'Your name', focus:'менің атым · сенің атың кім?',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">менің атым ...</span> — my name is ..., then your name.',tr:'менің атым'},
        {t:'words',items:[{tr:'Менің атым ...',pr:'meniñ atım ...',en:'My name is ...'},{tr:'Сенің атың кім?',pr:'seniñ atıñ kim?',en:'What\'s your name?'},{tr:'Сіздің атыңыз кім?',pr:'sizdiñ atıñız kim?',en:'What\'s your name? (formal)'},{tr:'Танысқаныма қуаныштымын',pr:'tanısqanıma quanıştımın',en:'Pleased to meet you'}]},
        {t:'say',text:'Fill in your own name: <span class="inline-tr">Менің атым __NAME__</span> — my name is __NAME__.',tr:'менің атым __NAME__'},
        {t:'chal',en:'My name is __NAME__',tr:'Менің атым __NAME__',pr:'meniñ atım __NAME__',morph:['менің = my','атым = my name','__NAME__ = your name']},
        {t:'say',text:'To ask informally: <span class="inline-tr">сенің атың кім?</span> Formally: <span class="inline-tr">сіздің атыңыз кім?</span>',tr:'сенің атың кім?'},
        {t:'chal',en:'Pleased to meet you',tr:'Танысқаныма қуаныштымын',pr:'tanısqanıma quanıştımın',morph:['танысқаныма = having met you','қуаныштымын = I am glad']}
      ],
      blocks:['<code>менің атым ...</code> = my name is ...','<code>сенің атың кім?</code> = what\'s your name?','<code>танысқаныма қуаныштымын</code> = pleased to meet you'] },
    { id:11, title:'Health & emergency', focus:'көмек! · дәрігер · дәріхана',
      steps:[
        {t:'say',text:'The most important word if you need help: <span class="inline-tr">көмек!</span> — help!.',tr:'көмек!'},
        {t:'words',items:[{tr:'Көмек!',pr:'kömek!',en:'Help!'},{tr:'дәрігер',pr:'däriger',en:'doctor'},{tr:'дәріхана',pr:'därixana',en:'pharmacy'},{tr:'Мен түсінбеймін',pr:'men tüsinbeymin',en:'I don\'t understand'},{tr:'Маған дәрігер керек',pr:'mağan däriger kerek',en:'I need a doctor'},{tr:'полиция',pr:'politsiya',en:'police'}]},
        {t:'say',text:'To say you\'re lost: <span class="inline-tr">Мен адасып қалдым</span>.',tr:'мен адасып қалдым'},
        {t:'chal',en:'Help!',tr:'Көмек!',pr:'kömek!',morph:['көмек = help']},
        {t:'chal',en:'I don\'t understand',tr:'Мен түсінбеймін',pr:'men tüsinbeymin',morph:['мен = I','түсінбеймін = I don\'t understand']},
        {t:'chal',en:'I need a doctor',tr:'Маған дәрігер керек',pr:'mağan däriger kerek',morph:['маған = for me / I need','дәрігер = doctor','керек = is needed']}
      ],
      blocks:['<code>көмек!</code> = help!','<code>мен түсінбеймін</code> = I don\'t understand','<code>маған дәрігер керек</code> = I need a doctor'] },
    { id:12, title:'Tying it together', focus:'a capstone day out in Kazakh',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolbox. This capstone uses only words you\'ve met. Build each line yourself before revealing the Kazakh.'},
        {t:'chal',en:'Hello, how are you?',tr:'Сәлем, қалайсың?',pr:'sälem, qalaysıñ?',morph:['сәлем = hello','қалайсың? = how are you?']},
        {t:'chal',en:'I want tea, please',tr:'Мен шай қалаймын, өтінемін',pr:'men şay qalaymın, ötinemin',morph:['мен = I','шай = tea','қалаймын = I want','өтінемін = please']},
        {t:'chal',en:'Where is the station?',tr:'Вокзал қайда?',pr:'vokzal qayda?',morph:['вокзал = station','қайда? = where?']},
        {t:'chal',en:'How much is this?',tr:'Бұл қанша тұрады?',pr:'bul qanşa turadı?',morph:['бұл = this','қанша = how much','тұрады? = costs?']},
        {t:'chal',en:'My name is __NAME__',tr:'Менің атым __NAME__',pr:'meniñ atım __NAME__',morph:['менің = my','атым = my name','__NAME__ = your name']},
        {t:'chal',en:'Delicious! Thank you!',tr:'Дәмді! Рақмет!',pr:'dämdi! raqmet!',morph:['дәмді = delicious','рақмет = thank you']}
      ],
      blocks:['You built: greetings, ordering, directions, prices, introductions and thanks — a full day out in Kazakh.'] },
    { id:13, title:'Airport & tickets', focus:'әуежай · төлқұжат · билет · қақпа',
      steps:[
        {t:'say',text:'You have landed. The building is the <span class="inline-tr">әуежай</span>. Your document is a <span class="inline-tr">төлқұжат</span>.',tr:'әуежай'},
        {t:'words',items:[{tr:'әуежай',pr:'äwejay',en:'airport'},{tr:'төлқұжат',pr:'tölqujat',en:'passport'},{tr:'билет',pr:'bilet',en:'ticket'},{tr:'рейс',pr:'reys',en:'flight'},{tr:'қақпа',pr:'qaqpa',en:'gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'Әуежай қайда?',pr:'äwejay qayda?',morph:['әуежай = airport','қайда? = where?']},
        {t:'chal',en:'Here is my passport',tr:'Міне менің төлқұжатым',pr:'mine meniñ tölqujatım',morph:['міне = here is','менің төлқұжатым = my passport']},
        {t:'chal',en:'A ticket, please',tr:'Бір билет, өтінемін',pr:'bir bilet, ötinemin',morph:['бір билет = one ticket','өтінемін = please']},
        {t:'chal',en:'Where is the gate?',tr:'Қақпа қайда?',pr:'qaqpa qayda?',morph:['қақпа = gate','қайда? = where?']}
      ],
      blocks:['<code>әуежай</code> = airport','<code>төлқұжат</code> = passport','<code>билет</code> = ticket','<code>қақпа</code> = gate'] },
    { id:14, title:'The taxi', focus:'такси · барғым келеді · қонақүй · тоқтаңыз',
      steps:[
        {t:'say',text:'The driver is waiting. <span class="inline-tr">Такси</span> is taxi. Tell them where to go with <span class="inline-tr">қонақүйге барғым келеді</span>.',tr:'такси'},
        {t:'words',items:[{tr:'такси',pr:'taksi',en:'taxi'},{tr:'жүргізуші',pr:'jürgizuşi',en:'driver'},{tr:'барғым келеді',pr:'barğım keledi',en:'I want to go'},{tr:'осында тоқтаңыз',pr:'osında toqtañız',en:'stop here (formal)'}]},
        {t:'chal',en:'Taxi, please',tr:'Такси, өтінемін',pr:'taksi, ötinemin',morph:['такси = taxi','өтінемін = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'Қонақүйге барғым келеді',pr:'qonaqüige barğım keledi',morph:['қонақүйге = to the hotel','барғым келеді = I want to go']},
        {t:'chal',en:'Stop here, please',tr:'Осында тоқтаңыз, өтінемін',pr:'osında toqtañız, ötinemin',morph:['осында = here','тоқтаңыз = stop (formal)','өтінемін = please']},
        {t:'chal',en:'How much is it?',tr:'Бұл қанша тұрады?',pr:'bul qanşa turadı?',morph:['бұл = this','қанша = how much','тұрады? = costs?']}
      ],
      blocks:['<code>… барғым келеді</code> = I want to go to …','<code>осында тоқтаңыз</code> = stop here'] },
    { id:15, title:'The hotel', focus:'бронь · бөлме · кілт · түн',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">менің броным бар</span> — I have a reservation.',tr:'бронь'},
        {t:'words',items:[{tr:'қонақүй',pr:'qonaquy',en:'hotel'},{tr:'бронь',pr:'bron',en:'reservation'},{tr:'бөлме',pr:'bölme',en:'room'},{tr:'кілт',pr:'kilt',en:'key'},{tr:'бір түн',pr:'bir tün',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'Менің броным бар',pr:'meniñ bronım bar',morph:['менің = my','броным = my reservation','бар = there is']},
        {t:'chal',en:'A room for one night, please',tr:'Бір түнге бөлме, өтінемін',pr:'bir tünge bölme, ötinemin',morph:['бір түнге = for one night','бөлме = room','өтінемін = please']},
        {t:'chal',en:'The key, please',tr:'Кілтті, өтінемін',pr:'kiltti, ötinemin',morph:['кілтті = the key','өтінемін = please']},
        {t:'chal',en:'Where is my room?',tr:'Бөлмем қайда?',pr:'bölmem qayda?',morph:['бөлмем = my room','қайда? = where?']}
      ],
      blocks:['<code>бронь</code> = reservation','<code>бөлме</code> = room','<code>кілт</code> = key'] },
    { id:16, title:'Ask for help', focus:'мен түсінбеймін · баяулау · ағылшынша',
      steps:[
        {t:'say',text:'When the language is too fast: <span class="inline-tr">Баяулау, өтінемін</span> — slower, please.',tr:'Баяулау, өтінемін'},
        {t:'words',items:[{tr:'баяулау',pr:'bayulaw',en:'slower'},{tr:'тағы',pr:'tağı',en:'again'},{tr:'ағылшынша',pr:'ağılşınşa',en:'English'},{tr:'көмектесе аласыз ба?',pr:'kömektese alasız ba?',en:'can you help? (formal)'}]},
        {t:'chal',en:'I don\'t understand',tr:'Мен түсінбеймін',pr:'men tüsinbeymin',morph:['мен = I','түсінбеймін = I don\'t understand']},
        {t:'chal',en:'Slower, please',tr:'Баяулау, өтінемін',pr:'bayulaw, ötinemin',morph:['баяулау = slower','өтінемін = please']},
        {t:'chal',en:'Can you help me?',tr:'Маған көмектесе аласыз ба?',pr:'mağan kömektese alasız ba?',morph:['маған = for me','көмектесе аласыз ба = can you help']},
        {t:'chal',en:'Do you speak English?',tr:'Сіз ағылшынша сөйлейсіз бе?',pr:'siz ağılşınşa söyleysiz be?',morph:['сіз = you (formal)','ағылшынша = English','сөйлейсіз бе = do you speak']}
      ],
      blocks:['<code>баяулау</code> = slower','<code>сіз ағылшынша сөйлейсіз бе?</code> = do you speak English?'] },
  ],
  dialogues: [
    { id:'chaykhana', title:'☕ At a chaykhana', emoji:'☕', turns:[
      {who:'You',tr:'Сәлем! Бір шай, өтінемін.',pr:'sälem! bir şay, ötinemin.',en:'Hello! One tea, please.'},
      {who:'Waiter',tr:'Сүтпен бе, қантпен бе?',pr:'sütpen be, qantpen be?',en:'With milk or with sugar?'},
      {who:'You',tr:'Сүтпен, рақмет.',pr:'sütpen, raqmet.',en:'With milk, thanks.'},
      {who:'Waiter',tr:'Міне.',pr:'mine.',en:'Here you go.'},
      {who:'You',tr:'Көп рақмет, сау бол.',pr:'köp raqmet, saw bol.',en:'Thanks a lot, goodbye.'}
    ]},
    { id:'transport', title:'🚌 Getting around', emoji:'🚌', turns:[
      {who:'You',tr:'Кешіріңіз, автовокзал қайда?',pr:'keşiriñiz, avtovokzal qayda?',en:'Excuse me, where is the bus station?'},
      {who:'Local',tr:'Оңға бұрылыңыз, содан кейін түзу.',pr:'oñğa burılıñız, sodan keyin tüzu.',en:'Turn right, then straight ahead.'},
      {who:'You',tr:'Рақмет. Бұл автобус қалаға бара ма?',pr:'raqmet. bul avtobus qalağa bara ma?',en:'Thanks. Does this bus go into the city?'},
      {who:'Local',tr:'Иә, бесінші аялдама.',pr:'iä, besinşi ayaldama.',en:'Yes, the fifth stop.'},
      {who:'You',tr:'Көп рақмет!',pr:'köp raqmet!',en:'Thanks a lot!'}
    ]},
    { id:'restaurant', title:'🍛 At a restaurant', emoji:'🍛', turns:[
      {who:'Waiter',tr:'Қош келдіңіз! Мәзір міне.',pr:'qoş keldiñiz! mäzir mine.',en:'Welcome! Here is the menu.'},
      {who:'You',tr:'Рақмет. Маған ет керек, өтінемін.',pr:'raqmet. mağan et kerek, ötinemin.',en:'Thanks. I\'d like the meat, please.'},
      {who:'Waiter',tr:'Қандай ет? Қой ма, сиыр ма?',pr:'qanday et? qoy ma, sıyır ma?',en:'What meat? Lamb or beef?'},
      {who:'You',tr:'Қой еті, өтінемін.',pr:'qoy eti, ötinemin.',en:'Lamb, please.'},
      {who:'Waiter',tr:'Жақсы. Ас болсын!',pr:'jaqsı. as bolsın!',en:'Good. Enjoy your meal!'}
    ]},
    { id:'bazaar', title:'🛒 At the bazaar', emoji:'🛒', turns:[
      {who:'You',tr:'Бұл қанша тұрады?',pr:'bul qanşa turadı?',en:'How much is this?'},
      {who:'Seller',tr:'Мың теңге.',pr:'mıñ teñge.',en:'A thousand tenge.'},
      {who:'You',tr:'Өте қымбат. Бес жүз теңге болсын?',pr:'öte qımbat. bes jüz teñge bolsın?',en:'Very expensive. How about five hundred tenge?'},
      {who:'Seller',tr:'Жарайды, бес жүз теңге.',pr:'jaraydı, bes jüz teñge.',en:'Okay, five hundred tenge.'},
      {who:'You',tr:'Алдым. Көп рақмет!',pr:'aldım. köp raqmet!',en:'I\'ll take it. Thanks a lot!'}
    ]}
  ],
  pocket: [
    {tr:'Сәлем',pr:'sälem',en:'Hello',c:'Greetings'},
    {tr:'Қайырлы таң',pr:'qayırlı tañ',en:'Good morning',c:'Greetings'},
    {tr:'Қайырлы кеш',pr:'qayırlı keş',en:'Good evening',c:'Greetings'},
    {tr:'Қош бол',pr:'qoş bol',en:'Goodbye',c:'Greetings'},
    {tr:'Қалайсың?',pr:'qalaysıñ?',en:'How are you?',c:'Greetings'},
    {tr:'Жақсы, рақмет',pr:'jaqsı, raqmet',en:'Well, thanks',c:'Greetings'},
    {tr:'Рақмет',pr:'raqmet',en:'Thank you',c:'Courtesy'},
    {tr:'Көп рақмет',pr:'köp raqmet',en:'Thanks a lot',c:'Courtesy'},
    {tr:'Өтінемін',pr:'ötinemin',en:'Please',c:'Courtesy'},
    {tr:'Оқасы жоқ',pr:'oqası joq',en:'You\'re welcome',c:'Courtesy'},
    {tr:'Кешіріңіз',pr:'keşiriñiz',en:'Excuse me / sorry',c:'Courtesy'},
    {tr:'Иә',pr:'iä',en:'Yes',c:'Courtesy'},
    {tr:'Жоқ',pr:'joq',en:'No',c:'Courtesy'},
    {tr:'бір',pr:'bir',en:'1',c:'Numbers'},
    {tr:'екі',pr:'eki',en:'2',c:'Numbers'},
    {tr:'үш',pr:'üş',en:'3',c:'Numbers'},
    {tr:'төрт',pr:'tört',en:'4',c:'Numbers'},
    {tr:'бес',pr:'bes',en:'5',c:'Numbers'},
    {tr:'он',pr:'on',en:'10',c:'Numbers'},
    {tr:'су',pr:'su',en:'water',c:'Food'},
    {tr:'нан',pr:'nan',en:'bread',c:'Food'},
    {tr:'шай',pr:'şay',en:'tea',c:'Food'},
    {tr:'кофе',pr:'kofe',en:'coffee',c:'Food'},
    {tr:'сүт',pr:'süt',en:'milk',c:'Food'},
    {tr:'ет',pr:'et',en:'meat',c:'Food'},
    {tr:'Дәмді',pr:'dämdi',en:'delicious',c:'Food'},
    {tr:'... қайда?',pr:'... qayda?',en:'Where is...?',c:'Directions'},
    {tr:'оңға',pr:'oñğa',en:'to the right',c:'Directions'},
    {tr:'солға',pr:'solğa',en:'to the left',c:'Directions'},
    {tr:'түзу',pr:'tüzu',en:'straight ahead',c:'Directions'},
    {tr:'вокзал',pr:'vokzal',en:'station',c:'Directions'},
    {tr:'Бұл қанша тұрады?',pr:'bul qanşa turadı?',en:'How much is this?',c:'Shopping'},
    {tr:'қымбат',pr:'qımbat',en:'expensive',c:'Shopping'},
    {tr:'теңге',pr:'teñge',en:'tenge (money)',c:'Shopping'},
    {tr:'Көмек!',pr:'kömek!',en:'Help!',c:'Emergency'},
    {tr:'Мен түсінбеймін',pr:'men tüsinbeymin',en:'I don\'t understand',c:'Emergency'},
    {tr:'Маған дәрігер керек',pr:'mağan däriger kerek',en:'I need a doctor',c:'Emergency'},
    {tr:'Дәріхана',pr:'därixana',en:'pharmacy',c:'Emergency'},
    {tr:'Бүгін',pr:'bügin',en:'today',c:'Time'},
    {tr:'Ертең',pr:'erteñ',en:'tomorrow',c:'Time'},
    {tr:'Ауа райы қандай?',pr:'awa rayı qanday?',en:'what\'s the weather?',c:'Time'},
    {tr:'Менің атым __NAME__',pr:'meniñ atım',en:'My name is...',c:'Greetings'},
    {tr:'Әуежай',pr:'äwejay',en:'airport',c:'Travel'},
    {tr:'Төлқұжат',pr:'tölqujat',en:'passport',c:'Travel'},
    {tr:'Такси, өтінемін',pr:'taksi, ötinemin',en:'Taxi, please',c:'Travel'},
    {tr:'Менің броным бар',pr:'meniñ bronım bar',en:'I have a reservation',c:'Travel'},
    {tr:'Баяулау, өтінемін',pr:'bayulaw, ötinemin',en:'Slower, please',c:'Travel'},
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Shopping','Emergency','Time', 'Travel'],
  culture: [
    {icon:'🐎',title:'The steppes',body:'Kazakhstan is vast grassland — the steppe. For centuries the Kazakh people were nomadic herders, following the seasons across it. That wide-open space still shapes the national character and their love of freedom.'},
    {icon:'⛺',title:'The yurt',body:'The yurt (<b>киіз үй</b>) is a portable felt tent the Kazakhs carried across the steppe. It\'s a symbol of home and community: a guest is seated in the honored spot in the center and treated like family.'},
    {icon:'🎶',title:'The dombra',body:'The <b>dombra</b> (<b>домбыра</b>) is a two-stringed, long-necked instrument. It\'s the national instrument, played at celebrations and gatherings — a single dombra can carry a whole song.'},
    {icon:'🍵',title:'Tea & hospitality',body:'Hospitality runs deep. When you visit, a host will pour you <b>chai</b> (<b>шай</b>) — often again and again — and offer food before they even ask your name. Accepting tea graciously honors the host.'},
    {icon:'🌍',title:'Kazakh is Turkic',body:'Kazakh belongs to the Turkic language family, close to Turkish, Azerbaijani and Uzbek. If you know Turkish, much of the vocabulary transfers — <i>su, nan, shay, men</i> reappear everywhere.'},
    {icon:'🌷',title:'Nauryz',body:'<b>Nauryz</b> (<b>Наурыз</b>), around March 21, is the spring new-year festival. Families wear bright clothes, share a festive meal, and play music. It\'s the warmest, most joyful holiday of the year.'}
  ],
  sounds: [
    {l:'Ғ ғ',say:'deep, voiced "gh" from the back of the throat (not the English /g/)',ex:'аға = ağa (older brother)',voice:'аға'},
    {l:'Қ қ',say:'deep, breathy "k" made in the back of the throat (К is the front "k")',ex:'қайда = qayda (where)',voice:'қайда'},
    {l:'Ң ң',say:'"ng" as in "song"',ex:'таң = tañ (dawn)',voice:'таң'},
    {l:'Ұ ұ',say:'back "u" as in "do", made deep in the mouth',ex:'тұз = tuz (salt)',voice:'тұз'},
    {l:'Ү ү',say:'front rounded "u" like German ü / French u',ex:'үш = üş (three)',voice:'үш'},
    {l:'Ө ө',say:'front rounded "o" like German ö',ex:'өтінемін = ötinemin (please)',voice:'өтінемін'},
    {l:'Ә ә',say:'open front "a" as in "cat" / English "hat"',ex:'әке = äke (father)',voice:'әке'},
    {l:'Ы ы',say:'a back, relaxed "i" (like the "a" in "about")',ex:'қыз = qız (girl)',voice:'қыз'}
  ],
  resources: [
    {icon:'🗣️',t:'Easy Kazakh',d:'Real street interviews with Kazakh speakers and subtitles — ideal for hearing natural, fast Kazakh.',q:'Easy Kazakh street interviews'},
    {icon:'🐢',t:'Kazakh for beginners',d:'Slow, friendly beginner lessons that walk you through basic phrases and pronunciation step by step.',q:'learn Kazakh for beginners slow'},
    {icon:'🔤',t:'Kazakh alphabet & sounds',d:'Focused videos on reading Cyrillic and pronouncing the Turkic letters like қ, ғ, ө and ү.',q:'Kazakh alphabet pronunciation sounds'},
    {icon:'🎧',t:'Kazakh listening practice',d:'Everyday dialogue for learners — perfect for the commute or a walk.',q:'Kazakh listening practice beginner'},
    {icon:'💬',t:'Qazaqsha conversations',d:'Short conversational Kazakh lessons built around real situations and daily vocabulary.',q:'Kazakh conversation practice for beginners'}
  ]
};
