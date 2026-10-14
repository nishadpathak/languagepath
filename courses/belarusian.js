/* ---- belarusian ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["belarusian"] = {
  name: 'Belarusian',
  flag: '🇧🇾',
  tts: 'be-BY',
  dir: 'ltr',
  native: 'Беларуская',
  soundTitle: 'Belarusian sounds & the Cyrillic script',
  soundIntro: 'Belarusian is written in Cyrillic and is very phonetic — a handful of letters match English exactly, so once you learn the tricky sounds you can read nearly any word aloud.',
  grammar: '<p>Belarusian is written in <b>Cyrillic</b> and is an <b>East Slavic</b> language — a close cousin of Russian and Ukrainian, so much of the vocabulary and grammar lines up (import that knowledge if you speak either). Two things to know early: there are no words for <b>a</b> or <b>the</b>, so <i>кава</i> can mean "coffee", "a coffee" or "the coffee". It also keeps sounds that Russian lost — the short <b>ў</b> and the digraphs <b>дз</b> and <b>дж</b>. Past-tense verbs change by gender, and <b>stress</b> can fall anywhere, so learn each word with its stressed vowel marked.</p>',
  bridges: '<div class="note">🇷🇺 <b>Russian.</b> Belarusian is East Slavic and extremely close to Russian — you\'ll recognise a huge amount: <i>вада</i> (water), <i>хлеб</i> (bread), <i>брат</i> (brother), <i>так</i> (yes), <i>не</i> (no). Russian speakers pick it up fast.</div><div class="note">🇺🇦 <b>Ukrainian.</b> Also East Slavic, sharing the same roots: <i>кава</i> (coffee), <i>гарбата</i> (tea), <i>малако</i> (milk), <i>дзякуй</i> (thanks). If you know Russian or Ukrainian, a lot of Belarusian is essentially free.</div>',
  lessons: [
    { id:1, title:'Greetings — hello', focus:'Прывітанне · Добры дзень · Да пабачэння',
      steps:[
        {t:'say',text:'Say hello the friendly way: <span class="inline-tr">Прывітанне</span> — hi. It works any time of day.',tr:'Прывітанне'},
        {t:'words',items:[{tr:'Добры дзень',pr:'DOH-bree dzen',en:'good day (formal hello)'},{tr:'Добры вечар',pr:'DOH-bree VEH-chahr',en:'good evening'},{tr:'Да пабачэння',pr:'dah pah-bah-CHEN-nyah',en:'goodbye'},{tr:'Добрай раніцы',pr:'DOH-bray RAH-nee-tsih',en:'good morning'}]},
        {t:'chal',en:'Good day',tr:'Добры дзень',pr:'DOH-bree dzen',morph:['добры = good','дзень = day']},
        {t:'say',text:'Two more: <span class="inline-tr">Добрай раніцы</span> = good morning, and <span class="inline-tr">Добры вечар</span> = good evening.',tr:'Добры вечар'},
        {t:'chal',en:'Hi!',tr:'Прывітанне',pr:'pry-vee-TAHN-nyeh',morph:['прывітанне = hi / hello']},
        {t:'say',text:'To ask how someone is: <span class="inline-tr">Як справы?</span> — literally "how are things?".',tr:'Як справы?'},
        {t:'words',items:[{tr:'Як справы?',pr:'yak SPRAH-vih',en:'How are you?'},{tr:'Добра, дзякуй',pr:'DOH-brah, DZYAH-kooy',en:'Well, thanks'},{tr:'Добра',pr:'DOH-brah',en:'good'}]},
        {t:'chal',en:'Hi! How are you?',tr:'Прывітанне! Як справы?',pr:'pry-vee-TAHN-nyeh! yak SPRAH-vih?',morph:['прывітанне = hi','як справы? = how are you?']}
      ],
      blocks:['<code>Прывітанне</code> = hi','<code>Добры дзень</code> = good day','<code>Да пабачэння</code> = goodbye','<code>Як справы?</code> = how are you?'] },
    { id:2, title:'Polite phrases', focus:'Дзякуй · Калі ласка · Прабачце',
      steps:[
        {t:'say',text:'The word you\'ll say every single day: <span class="inline-tr">Дзякуй</span> — thank you.',tr:'Дзякуй'},
        {t:'words',items:[{tr:'Дзякуй',pr:'DZYAH-kooy',en:'thank you'},{tr:'Дзякуй вялікі',pr:'DZYAH-kooy VYAH-lee-kee',en:'thanks a lot'},{tr:'Калі ласка',pr:'KAH-lee LAHS-kah',en:'please / you\'re welcome'},{tr:'Прабачце',pr:'prah-BAHT-syeh',en:'excuse me / sorry'},{tr:'Так',pr:'tahk',en:'yes'},{tr:'Не',pr:'nyeh',en:'no'}]},
        {t:'chal',en:'Thank you',tr:'Дзякуй',pr:'DZYAH-kooy',morph:['дзякуй = thank you']},
        {t:'say',text:'<span class="inline-tr">Калі ласка</span> does two jobs — it means both "please" and "you\'re welcome".',tr:'Калі ласка'},
        {t:'chal',en:'A coffee, please',tr:'Адна кава, калі ласка',pr:'ahd-NAH KAH-vah, KAH-lee LAHS-kah',morph:['адна = one (fem.)','кава = coffee','калі ласка = please']},
        {t:'say',text:'To get someone\'s attention or apologise: <span class="inline-tr">Прабачце</span> — excuse me / sorry.',tr:'Прабачце'},
        {t:'chal',en:'Yes / No',tr:'Так / Не',pr:'tahk / nyeh',morph:['так = yes','не = no']}
      ],
      blocks:['<code>Дзякуй</code> = thank you','<code>Калі ласка</code> = please / you\'re welcome','<code>Прабачце</code> = excuse me / sorry','<code>Так / Не</code> = yes / no'] },
    { id:3, title:'Numbers 1–10', focus:'адзін · два · тры · дзесяць',
      steps:[
        {t:'say',text:'Numbers are the fastest win. Listen and repeat the first five: <span class="inline-tr">адзін, два, тры, чатыры, пяць</span>.',tr:'адзін'},
        {t:'words',items:[{tr:'адзін',pr:'ah-DZEEN',en:'1'},{tr:'два',pr:'dvah',en:'2'},{tr:'тры',pr:'trih',en:'3'},{tr:'чатыры',pr:'chah-TIH-rih',en:'4'},{tr:'пяць',pr:'pyats',en:'5'}]},
        {t:'chal',en:'Two coffees, please',tr:'Дзве кавы, калі ласка',pr:'dzvyeh KAH-vih, KAH-lee LAHS-kah',morph:['дзве = two (fem.)','кавы = coffees','калі ласка = please']},
        {t:'say',text:'Now six to ten: <span class="inline-tr">шэсць, сем, восем, дзевяць, дзесяць</span>.',tr:'шэсць'},
        {t:'words',items:[{tr:'шэсць',pr:'shests',en:'6'},{tr:'сем',pr:'syem',en:'7'},{tr:'восем',pr:'VOH-syem',en:'8'},{tr:'дзевяць',pr:'DZYEH-vyats',en:'9'},{tr:'дзесяць',pr:'DZYEH-syats',en:'10'}]},
        {t:'chal',en:'Three coffees, please',tr:'Тры кавы, калі ласка',pr:'trih KAH-vih, KAH-lee LAHS-kah',morph:['тры = three','кавы = coffees','калі ласка = please']}
      ],
      blocks:['<code>адзін</code>, <code>два</code>, <code>тры</code>, <code>чатыры</code>, <code>пяць</code> = 1–5','<code>шэсць</code> … <code>дзесяць</code> = 6–10'] },
    { id:4, title:'"I want" — хачу & трэба', focus:'Я хачу · Мне трэба · Можна?',
      steps:[
        {t:'say',text:'The magic phrase to ask for anything: <span class="inline-tr">Я хачу</span> — I want.',tr:'Я хачу'},
        {t:'chal',en:'I want tea',tr:'Я хачу гарбату',pr:'yah hah-CHOO hahr-BAH-tah',morph:['я = I','хачу = I want','гарбату = tea']},
        {t:'say',text:'To say you need something, use <span class="inline-tr">Мне трэба</span> — I need.',tr:'Мне трэба'},
        {t:'chal',en:'I need water',tr:'Мне трэба вада',pr:'mnyeh TREH-bah vah-DAH',morph:['мне трэба = I need','вада = water']},
        {t:'say',text:'To ask for permission, use <span class="inline-tr">Можна?</span> — may I? / is it OK?',tr:'Можна?'},
        {t:'words',items:[{tr:'Я хачу',pr:'yah hah-CHOO',en:'I want'},{tr:'Мне трэба',pr:'mnyeh TREH-bah',en:'I need'},{tr:'Можна?',pr:'MOHZH-nah',en:'May I?'},{tr:'Калі ласка',pr:'KAH-lee LAHS-kah',en:'please'}]},
        {t:'chal',en:'May I?',tr:'Можна?',pr:'MOHZH-nah',morph:['можна = may I / is it allowed']}
      ],
      blocks:['<code>Я хачу</code> = I want','<code>Мне трэба</code> = I need','<code>Можна?</code> = may I? (is it OK?)'] },
    { id:5, title:'Food & drink', focus:'вада · хлеб · кава · гарбата',
      steps:[
        {t:'say',text:'Eating out? The essentials: <span class="inline-tr">вада</span> (water), <span class="inline-tr">хлеб</span> (bread), <span class="inline-tr">кава</span> (coffee), <span class="inline-tr">гарбата</span> (tea).',tr:'вада'},
        {t:'words',items:[{tr:'вада',pr:'vah-DAH',en:'water'},{tr:'хлеб',pr:'khlyeb',en:'bread'},{tr:'кава',pr:'KAH-vah',en:'coffee',link:'≈ English coffee'},{tr:'гарбата',pr:'hahr-BAH-tah',en:'tea'},{tr:'малако',pr:'mah-lah-KOH',en:'milk'},{tr:'віно',pr:'vee-NOH',en:'wine',link:'≈ English wine'}]},
        {t:'chal',en:'Water and bread, please',tr:'Вада і хлеб, калі ласка',pr:'vah-DAH ee khlyeb, KAH-lee LAHS-kah',morph:['вада = water','і = and','хлеб = bread','калі ласка = please']},
        {t:'say',text:'To order the menu or ask for the bill: <span class="inline-tr">меню</span> and <span class="inline-tr">рахунак</span>.',tr:'рахунак'},
        {t:'words',items:[{tr:'меню',pr:'meh-NYOO',en:'the menu',link:'≈ English menu'},{tr:'рахунак',pr:'rah-KHOON-kah',en:'the bill'},{tr:'смачна',pr:'SMAHCH-nah',en:'tasty / delicious'}]},
        {t:'chal',en:'The bill, please',tr:'Рахунак, калі ласка',pr:'rah-KHOON-kah, KAH-lee LAHS-kah',morph:['рахунак = the bill','калі ласка = please']},
        {t:'say',text:'<span class="inline-tr">Смачна!</span> = tasty / delicious. A lovely thing to say over a meal.',tr:'Смачна!'},
        {t:'chal',en:'It\'s delicious!',tr:'Вельмі смачна!',pr:'VEHL-mee SMAHCH-nah!',morph:['вельмі = very','смачна = tasty']}
      ],
      blocks:['<code>вада</code>, <code>хлеб</code>, <code>кава</code>, <code>гарбата</code> = water, bread, coffee, tea','<code>рахунак</code> = the bill','<code>смачна</code> = tasty / delicious'] },
    { id:6, title:'Getting around', focus:'Дзе...? · налева · направа · вакзал',
      steps:[
        {t:'say',text:'The most useful question in any city: <span class="inline-tr">Дзе…?</span> — where is…?',tr:'Дзе...?'},
        {t:'words',items:[{tr:'Дзе...?',pr:'dzyeh',en:'Where is...?'},{tr:'налева',pr:'nah-LYEH-vah',en:'to the left'},{tr:'направа',pr:'nah-PRAH-vah',en:'to the right'},{tr:'прама',pr:'PRAH-mah',en:'straight ahead'},{tr:'вакзал',pr:'vahg-ZAHL',en:'the station'},{tr:'туалет',pr:'too-ah-LYET',en:'the bathroom',link:'≈ English toilet'}]},
        {t:'chal',en:'Where is the station?',tr:'Дзе вакзал?',pr:'dzyeh vahg-ZAHL?',morph:['дзе = where','вакзал = the station']},
        {t:'chal',en:'Where is the bathroom?',tr:'Дзе туалет?',pr:'dzyeh too-ah-LYET?',morph:['дзе = where','туалет = the bathroom']},
        {t:'say',text:'<span class="inline-tr">Налева</span> and <span class="inline-tr">направа</span> tell you which way to turn. <span class="inline-tr">Прама</span> is straight ahead.',tr:'направа'},
        {t:'chal',en:'Straight ahead, then left',tr:'Прама, потым налева',pr:'PRAH-mah, POH-tim nah-LYEH-vah',morph:['прама = straight ahead','потым = then','налева = to the left']}
      ],
      blocks:['<code>Дзе…?</code> = where is…?','<code>налева</code> / <code>направа</code> = left / right','<code>прама</code> = straight ahead'] },
    { id:7, title:'Questions & "do you have…?"', focus:'Ці ёсць? · Колькі? · Гэта',
      steps:[
        {t:'say',text:'To ask if someone has something: <span class="inline-tr">Ці ёсць у вас…?</span> (formal). With friends, say <span class="inline-tr">Ці ёсць у цябе…?</span>',tr:'Ці ёсць у вас...?'},
        {t:'chal',en:'Do you have a table?',tr:'Ці ёсць у вас стол?',pr:'tsi yosts oo vahs stol?',morph:['ці ёсць = is there / do you have','у вас = with you','стол = a table']},
        {t:'say',text:'To ask the price: <span class="inline-tr">Колькі гэта каштуе?</span> — how much does this cost?',tr:'Колькі гэта каштуе?'},
        {t:'chal',en:'How much is this?',tr:'Колькі гэта каштуе?',pr:'KOL-kee HEH-tah kahsh-TOO-yeh?',morph:['колькі = how much','гэта = this','каштуе = it costs']},
        {t:'say',text:'<span class="inline-tr">Гэта</span> = this / it — a very handy little word in shops.',tr:'Гэта'},
        {t:'chal',en:'Do you have tea?',tr:'Ці ёсць у вас гарбата?',pr:'tsi yosts oo vahs hahr-BAH-tah?',morph:['ці ёсць у вас = do you have','гарбата = tea']}
      ],
      blocks:['<code>Ці ёсць у вас…?</code> = do you have…? (formal)','<code>Колькі гэта каштуе?</code> = how much does it cost?','<code>Гэта</code> = this / it'] },
    { id:8, title:'Family & people', focus:'мама · бацька · брат · сябар',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">мама</span> (mum), <span class="inline-tr">бацька</span> (dad), <span class="inline-tr">брат</span> (brother).',tr:'мама'},
        {t:'words',items:[{tr:'мама',pr:'MAH-mah',en:'mum'},{tr:'бацька',pr:'BAHT-skah',en:'dad'},{tr:'брат',pr:'braht',en:'brother',link:'≈ English brother'},{tr:'сястра',pr:'syah-STRAH',en:'sister',link:'≈ English sister'},{tr:'сябар',pr:'SYAH-bahr',en:'friend'}]},
        {t:'chal',en:'This is my brother',tr:'Гэта мой брат',pr:'HEH-tah moy braht',morph:['гэта = this is','мой = my (masc.)','брат = brother']},
        {t:'say',text:'<span class="inline-tr">Мой</span> = my (masculine), <span class="inline-tr">мая</span> = my (feminine). <b>брат</b> is masculine → <b>мой брат</b>.',tr:'мой'},
        {t:'chal',en:'This is my mum',tr:'Гэта мая мама',pr:'HEH-tah MAH-yah MAH-mah',morph:['гэта = this is','мая = my (fem.)','мама = mum']},
        {t:'chal',en:'This is my friend',tr:'Гэта мой сябар',pr:'HEH-tah moy SYAH-bahr',morph:['гэта = this is','мой = my (masc.)','сябар = friend']}
      ],
      blocks:['<code>мама</code> / <code>бацька</code> = mum / dad','<code>брат</code> / <code>сястра</code> = brother / sister','<code>мой / мая</code> = my (masc / fem)'] },
    { id:9, title:'Time, days & weather', focus:'сёння · заўтра · Якая пагода?',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">сёння</span>, tomorrow is <span class="inline-tr">заўтра</span>, yesterday is <span class="inline-tr">ўчора</span>.',tr:'сёння'},
        {t:'words',items:[{tr:'сёння',pr:'SYOHN-nyah',en:'today'},{tr:'заўтра',pr:'ZAW-trah',en:'tomorrow'},{tr:'ўчора',pr:'oo-CHOH-rah',en:'yesterday'},{tr:'дзень',pr:'dzen',en:'day'},{tr:'тыдзень',pr:'TIH-dzen',en:'week'}]},
        {t:'chal',en:'See you tomorrow',tr:'Да заўтра',pr:'dah ZAW-trah',morph:['да = until','заўтра = tomorrow']},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">Якая пагода?</span>',tr:'Якая пагода?'},
        {t:'words',items:[{tr:'Якая пагода?',pr:'yah-KAH-yah pah-GOH-dah',en:'what\'s the weather?'},{tr:'дождж',pr:'dohzhd',en:'rain'},{tr:'снег',pr:'snyehk',en:'snow'},{tr:'сонца',pr:'SON-tsah',en:'sun'}]},
        {t:'chal',en:'It\'s raining',tr:'Ідзе дождж',pr:'ee-DZYEH dohzhd',morph:['ідзе = goes / falls','дождж = rain']}
      ],
      blocks:['<code>сёння / заўтра</code> = today / tomorrow','<code>Якая пагода?</code> = what\'s the weather?','<code>ідзе дождж</code> = it\'s raining'] },
    { id:10, title:'Introducing yourself', focus:'Мяне завуць · Як цябе завуць? · Вельмі прыемна',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">Мяне завуць…</span> = my name is…. It literally means "they call me…".',tr:'Мяне завуць'},
        {t:'chal',en:'My name is __NAME__',tr:'Мяне завуць __NAME__',pr:'myah-NYEH ZAH-voots __NAME__',morph:['мяне = me','завуць = they call','__NAME__ = your name']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">Як цябе завуць?</span> (informal). Formal: <span class="inline-tr">Як вас завуць?</span>',tr:'Як цябе завуць?'},
        {t:'chal',en:'What\'s your name?',tr:'Як цябе завуць?',pr:'yahk tsyah-BYE ZAH-voots?',morph:['як = how','цябе = you (informal)','завуць = they call']},
        {t:'say',text:'<span class="inline-tr">Вельмі прыемна</span> = pleased to meet you. Lovely to say when you meet someone new.',tr:'Вельмі прыемна'},
        {t:'chal',en:'Pleased to meet you',tr:'Вельмі прыемна',pr:'VEHL-mee prih-YEM-nah',morph:['вельмі = very','прыемна = pleased / nice']}
      ],
      blocks:['<code>Мяне завуць…</code> = my name is…','<code>Як цябе завуць?</code> = what\'s your name?','<code>Вельмі прыемна</code> = pleased to meet you'] },
    { id:11, title:'Health & emergency', focus:'Дапамажыце! · Урач · Я не разумею',
      steps:[
        {t:'say',text:'The most important words if you need help: <span class="inline-tr">Дапамажыце!</span> (help!), and <span class="inline-tr">Дапамога!</span> for the noun "help".',tr:'Дапамажыце!'},
        {t:'words',items:[{tr:'Дапамажыце!',pr:'dah-pah-mah-ZHIH-tsyeh',en:'Help!'},{tr:'Дапамога!',pr:'dah-pah-MOH-hah',en:'Help! (the noun)'},{tr:'урач',pr:'oo-RAHCH',en:'the doctor'},{tr:'аптэка',pr:'ahp-TEH-kah',en:'the pharmacy',link:'≈ English apothecary'},{tr:'бальніца',pr:'bahle-NEE-tsah',en:'the hospital'}]},
        {t:'chal',en:'Help!',tr:'Дапамажыце!',pr:'dah-pah-mah-ZHIH-tsyeh',morph:['дапамажыце = help (please do)']},
        {t:'say',text:'If you don\'t understand: <span class="inline-tr">Я не разумею</span> — I don\'t understand.',tr:'Я не разумею'},
        {t:'chal',en:'I don\'t understand',tr:'Я не разумею',pr:'yah nyeh rah-zoo-MYEH-yoo',morph:['я = I','не = not','разумею = I understand']},
        {t:'chal',en:'I need a doctor',tr:'Мне трэба ўрач',pr:'mnyeh TREH-bah oo-RAHCH',morph:['мне трэба = I need','ўрач = a doctor']}
      ],
      blocks:['<code>Дапамажыце!</code> = help!','<code>урач</code> = the doctor','<code>аптэка</code> = the pharmacy','<code>я не разумею</code> = I don\'t understand'] },
    { id:12, title:'Tying it together', focus:'A full day in Belarusian',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolbox. This capstone uses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello! How are you?',tr:'Прывітанне! Як справы?',pr:'pry-vee-TAHN-nyeh! yak SPRAH-vih?',morph:['прывітанне = hi','як справы? = how are you?']},
        {t:'chal',en:'I want tea, please',tr:'Я хачу гарбату, калі ласка',pr:'yah hah-CHOO hahr-BAH-tah, KAH-lee LAHS-kah',morph:['я хачу = I want','гарбату = tea','калі ласка = please']},
        {t:'chal',en:'Where is the station?',tr:'Дзе вакзал?',pr:'dzyeh vahg-ZAHL?',morph:['дзе = where','вакзал = the station']},
        {t:'chal',en:'How much is this?',tr:'Колькі гэта каштуе?',pr:'KOL-kee HEH-tah kahsh-TOO-yeh?',morph:['колькі гэта каштуе = how much is this?']},
        {t:'chal',en:'Thank you very much!',tr:'Дзякуй вялікі!',pr:'DZYAH-kooy VYAH-lee-kee!',morph:['дзякуй = thank you','вялікі = big / very']}
      ],
      blocks:['You built: greetings, ordering, directions, prices, thanks — a full day out in Belarusian.'] },
    { id:13, title:'Airport & tickets', focus:'аэрапорт · пашпарт · білет · рэйс',
      steps:[
        {t:'say',text:'You have landed in Minsk. The building is the <span class="inline-tr">аэрапорт</span>. Your document is a <span class="inline-tr">пашпарт</span>.',tr:'аэрапорт'},
        {t:'words',items:[{tr:'аэрапорт',pr:'ah-eh-rah-PORT',en:'the airport'},{tr:'пашпарт',pr:'pash-PART',en:'the passport'},{tr:'білет',pr:'bee-LYET',en:'the ticket'},{tr:'рэйс',pr:'rays',en:'the flight'},{tr:'выхад',pr:'VIH-khad',en:'the gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'Дзе аэрапорт?',pr:'dzyeh ah-eh-rah-PORT',morph:['дзе = where','аэрапорт = the airport']},
        {t:'chal',en:'Here is my passport',tr:'Вось мой пашпарт',pr:'vohs moy pash-PART',morph:['вось = here is','мой пашпарт = my passport']},
        {t:'chal',en:'A ticket, please',tr:'Адзін білет, калі ласка',pr:'ah-DZEEN bee-LYET, KAH-lee LAHS-kah',morph:['адзін білет = one ticket','калі ласка = please']},
        {t:'chal',en:'Where is the gate?',tr:'Дзе выхад?',pr:'dzyeh VIH-khad',morph:['дзе = where','выхад = the gate']}
      ],
      blocks:['<code>аэрапорт</code> = airport','<code>пашпарт</code> = passport','<code>білет</code> = ticket'] },
    { id:14, title:'The taxi', focus:'таксі · паехаць · гатэль · спыніце',
      steps:[
        {t:'say',text:'The driver is waiting. Belarusian needs the infinitive: <span class="inline-tr">я хачу паехаць у гатэль</span> — I want to go to the hotel.',tr:'таксі'},
        {t:'words',items:[{tr:'таксі',pr:'tahk-SEE',en:'the taxi'},{tr:'кіроўца',pr:'kee-ROFF-tsah',en:'the driver'},{tr:'я хачу паехаць',pr:'yah hah-CHOO pah-YEH-khatz',en:'I want to go'},{tr:'спыніце тут',pr:'spih-NEE-tseh toot',en:'stop here (formal)'}]},
        {t:'chal',en:'A taxi, please',tr:'Таксі, калі ласка',pr:'tahk-SEE, KAH-lee LAHS-kah',morph:['таксі = taxi','калі ласка = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'Я хачу паехаць у гатэль',pr:'yah hah-CHOO pah-YEH-khatz oo hah-TEL',morph:['я хачу = I want','паехаць = to go','у гатэль = to the hotel']},
        {t:'chal',en:'Stop here, please',tr:'Спыніце тут, калі ласка',pr:'spih-NEE-tseh toot, KAH-lee LAHS-kah',morph:['спыніце тут = stop here','калі ласка = please']},
        {t:'chal',en:'How much is it?',tr:'Колькі гэта каштуе?',pr:'KOL-kee HEH-tah kahsh-TOO-yeh',morph:['колькі = how much','гэта = this','каштуе = it costs']}
      ],
      blocks:['<code>я хачу паехаць у …</code> = I want to go to …','<code>спыніце тут</code> = stop here (formal вы)'] },
    { id:15, title:'The hotel', focus:'браніраванне · нумар · ключ · ноч',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">у мяне ёсць браніраванне</span> — I have a reservation.',tr:'браніраванне'},
        {t:'words',items:[{tr:'гатэль',pr:'hah-TEL',en:'the hotel'},{tr:'браніраванне',pr:'brah-nee-RAH-van-nyeh',en:'the reservation'},{tr:'нумар',pr:'NOO-mar',en:'the room'},{tr:'ключ',pr:'klyooch',en:'the key'},{tr:'адна ноч',pr:'ahd-NAH noch',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'У мяне ёсць браніраванне',pr:'oo myah-NYEH yosts brah-nee-RAH-van-nyeh',morph:['у мяне ёсць = I have','браніраванне = a reservation']},
        {t:'chal',en:'A room for one night, please',tr:'Нумар на адну ноч, калі ласка',pr:'NOO-mar nah ahd-NOO noch, KAH-lee LAHS-kah',morph:['нумар = a room','на адну ноч = for one night','калі ласка = please']},
        {t:'chal',en:'The key, please',tr:'Ключ, калі ласка',pr:'klyooch, KAH-lee LAHS-kah',morph:['ключ = the key','калі ласка = please']},
        {t:'chal',en:'Where is my room?',tr:'Дзе мой нумар?',pr:'dzyeh moy NOO-mar',morph:['дзе = where','мой нумар = my room']}
      ],
      blocks:['<code>браніраванне</code> = reservation','<code>нумар</code> = room','<code>ключ</code> = key'] },
    { id:16, title:'Ask for help', focus:'я не разумею · павольней · англійская',
      steps:[
        {t:'say',text:'When Belarusian is too fast: <span class="inline-tr">Павольней, калі ласка</span> — slower, please. Formal <span class="inline-tr">вы</span> is safer with staff.',tr:'Павольней, калі ласка'},
        {t:'words',items:[{tr:'павольней',pr:'pah-VOHL-nyey',en:'slower'},{tr:'яшчэ раз',pr:'yah-SHOY rahs',en:'again'},{tr:'англійская',pr:'ahn-GLEE-skah-yah',en:'English'},{tr:'вы можаце дапамагчы?',pr:'vih MO-zhah-tseh dah-pah-MAHCH-chih',en:'can you help? (formal)'}]},
        {t:'chal',en:'I don\'t understand',tr:'Я не разумею',pr:'yah nyeh rah-zoo-MYEH-yoo',morph:['я = I','не = not','разумею = I understand']},
        {t:'chal',en:'Slower, please',tr:'Павольней, калі ласка',pr:'pah-VOHL-nyey, KAH-lee LAHS-kah',morph:['павольней = slower','калі ласка = please']},
        {t:'chal',en:'Can you help me?',tr:'Вы можаце мне дапамагчы?',pr:'vih MO-zhah-tseh mnyeh dah-pah-MAHCH-chih',morph:['вы можаце = can you (formal)','мне = me','дапамагчы = to help']},
        {t:'chal',en:'Do you speak English?',tr:'Вы размаўляеце па-ангельску?',pr:'vih rahz-mow-LYAH-yeh-tseh pah-ahn-GEL-skoo',morph:['вы размаўляеце = do you speak (formal)','па-ангельску = English']}
      ],
      blocks:['<code>павольней</code> = slower','<code>вы размаўляеце па-ангельску?</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'cafe', title:'☕ At a café', emoji:'☕', turns:[
      {who:'You',tr:'Добры дзень! Адну каву, калі ласка.',pr:'DOH-bree dzen! ahd-NAH KAH-vah, KAH-lee LAHS-kah',en:'Good day! One coffee, please.'},
      {who:'Barista',tr:'Калі ласка. Што-небудзь яшчэ?',pr:'KAH-lee LAHS-kah. shtoh-NEH-boots yah-SHOY?',en:'Here you are. Anything else?'},
      {who:'You',tr:'Не, дзякуй. Колькі гэта каштуе?',pr:'nyeh, DZYAH-kooy. KOL-kee HEH-tah kahsh-TOO-yeh?',en:'No, thanks. How much is that?'},
      {who:'Barista',tr:'Тры рублі.',pr:'trih ROOB-lee',en:'Three rubles.'},
      {who:'You',tr:'Дзякуй вялікі!',pr:'DZYAH-kooy VYAH-lee-kee!',en:'Thanks a lot!'}
    ]},
    { id:'transport', title:'🚉 At the station', emoji:'🚉', turns:[
      {who:'You',tr:'Прабачце, дзе вакзал?',pr:'prah-BAHT-syeh, dzyeh vahg-ZAHL?',en:'Excuse me, where\'s the station?'},
      {who:'Local',tr:'Прама, потым налева.',pr:'PRAH-mah, POH-tim nah-LYEH-vah',en:'Straight ahead, then left.'},
      {who:'You',tr:'Дзякуй. Адзін білет да Мінска, калі ласка.',pr:'DZYAH-kooy. ah-DZEEN bee-LYET dah MEEN-skah, KAH-lee LAHS-kah',en:'Thanks. One ticket to Minsk, please.'},
      {who:'Clerk',tr:'Пяць рублёў. Цягнік а трэцяй гадзіне.',pr:'pyats roob-LYOW. tsyahg-NEEK ah TREH-tsyahy hah-DZEE-nyeh',en:'Five rubles. The train at three o\'clock.'}
    ]},
    { id:'restaurant', title:'🍲 At a restaurant', emoji:'🍲', turns:[
      {who:'Waiter',tr:'Добры вечар! Столік на дваіх?',pr:'DOH-bree VEH-chahr! STOH-leek nah dvah-EEKH?',en:'Good evening! A table for two?'},
      {who:'You',tr:'Так, калі ласка.',pr:'tahk, KAH-lee LAHS-kah',en:'Yes, please.'},
      {who:'You',tr:'Я хачу дранікі і гарбату.',pr:'yah hah-CHOO drah-NEE-kee ee hahr-BAH-tah',en:'I want draniki (potato pancakes) and tea.'},
      {who:'Waiter',tr:'Выдатны выбар!',pr:'vih-DAHT-nih VIH-bahr!',en:'Excellent choice!'},
      {who:'You',tr:'Рахунак, калі ласка.',pr:'rah-KHOON-kah, KAH-lee LAHS-kah',en:'The bill, please.'}
    ]},
    { id:'market', title:'🧺 At the market', emoji:'🧺', turns:[
      {who:'You',tr:'Колькі гэта каштуе?',pr:'KOL-kee HEH-tah kahsh-TOO-yeh?',en:'How much is this?'},
      {who:'Seller',tr:'Дзесяць рублёў.',pr:'DZYEH-syats roob-LYOW',en:'Ten rubles.'},
      {who:'You',tr:'Гэта дорага. Можна танней?',pr:'HEH-tah DOH-rah-hah. MOHZH-nah tahn-NEHY?',en:'That\'s expensive. Can it be cheaper?'},
      {who:'Seller',tr:'Добра, восем рублёў.',pr:'DOH-brah, VOH-syem roob-LYOW',en:'OK, eight rubles.'},
      {who:'You',tr:'Добра, я бяру.',pr:'DOH-brah, yah BYAH-roo',en:'OK, I\'ll take it.'}
    ]}
  ],
  pocket: [
    {tr:'Прывітанне',pr:'pry-vee-TAHN-nyeh',en:'Hello (informal)',c:'Greetings'},
    {tr:'Добры дзень',pr:'DOH-bree dzen',en:'Good day / hello',c:'Greetings'},
    {tr:'Да пабачэння',pr:'dah pah-bah-CHEN-nyah',en:'Goodbye',c:'Greetings'},
    {tr:'Як справы?',pr:'yak SPRAH-vih',en:'How are you?',c:'Greetings'},
    {tr:'Добра, дзякуй',pr:'DOH-brah, DZYAH-kooy',en:'Well, thanks',c:'Greetings'},
    {tr:'Дзякуй',pr:'DZYAH-kooy',en:'Thank you',c:'Courtesy'},
    {tr:'Дзякуй вялікі',pr:'DZYAH-kooy VYAH-lee-kee',en:'Thanks a lot',c:'Courtesy'},
    {tr:'Калі ласка',pr:'KAH-lee LAHS-kah',en:'Please / you\'re welcome',c:'Courtesy'},
    {tr:'Прабачце',pr:'prah-BAHT-syeh',en:'Excuse me / sorry',c:'Courtesy'},
    {tr:'Так',pr:'tahk',en:'Yes',c:'Courtesy'},
    {tr:'Не',pr:'nyeh',en:'No',c:'Courtesy'},
    {tr:'адзін',pr:'ah-DZEEN',en:'1',c:'Numbers'},
    {tr:'два',pr:'dvah',en:'2',c:'Numbers'},
    {tr:'тры',pr:'trih',en:'3',c:'Numbers'},
    {tr:'пяць',pr:'pyats',en:'5',c:'Numbers'},
    {tr:'дзесяць',pr:'DZYEH-syats',en:'10',c:'Numbers'},
    {tr:'вада',pr:'vah-DAH',en:'water',c:'Food'},
    {tr:'хлеб',pr:'khlyeb',en:'bread',c:'Food'},
    {tr:'кава',pr:'KAH-vah',en:'coffee',c:'Food'},
    {tr:'гарбата',pr:'hahr-BAH-tah',en:'tea',c:'Food'},
    {tr:'рахунак',pr:'rah-KHOON-kah',en:'the bill',c:'Food'},
    {tr:'Дзе...?',pr:'dzyeh',en:'Where is...?',c:'Directions'},
    {tr:'налева',pr:'nah-LYEH-vah',en:'to the left',c:'Directions'},
    {tr:'направа',pr:'nah-PRAH-vah',en:'to the right',c:'Directions'},
    {tr:'прама',pr:'PRAH-mah',en:'straight ahead',c:'Directions'},
    {tr:'вакзал',pr:'vahg-ZAHL',en:'the station',c:'Directions'},
    {tr:'Колькі гэта каштуе?',pr:'KOL-kee HEH-tah kahsh-TOO-yeh',en:'How much is it?',c:'Shopping'},
    {tr:'Ці ёсць у вас...?',pr:'tsi yosts oo vahs',en:'Do you have...?',c:'Shopping'},
    {tr:'Можна танней?',pr:'MOHZH-nah tahn-NEHY',en:'Can it be cheaper?',c:'Shopping'},
    {tr:'я бяру',pr:'yah BYAH-roo',en:'I\'ll take it',c:'Shopping'},
    {tr:'Дапамажыце!',pr:'dah-pah-mah-ZHIH-tsyeh',en:'Help!',c:'Emergency'},
    {tr:'урач',pr:'oo-RAHCH',en:'the doctor',c:'Emergency'},
    {tr:'Я не разумею',pr:'yah nyeh rah-zoo-MYEH-yoo',en:'I don\'t understand',c:'Emergency'},
    {tr:'Мне трэба дапамога',pr:'mnyeh TREH-bah dah-pah-MOH-hah',en:'I need help',c:'Emergency'},
    {tr:'сёння',pr:'SYOHN-nyah',en:'today',c:'Time'},
    {tr:'заўтра',pr:'ZAW-trah',en:'tomorrow',c:'Time'},
    {tr:'Якая пагода?',pr:'yah-KAH-yah pah-GOH-dah',en:'What\'s the weather?',c:'Time'},
    {tr:'аэрапорт',pr:'ah-eh-rah-PORT',en:'airport',c:'Travel'},
    {tr:'таксі',pr:'tahk-SEE',en:'taxi',c:'Travel'},
    {tr:'гатэль',pr:'hah-TEL',en:'hotel',c:'Travel'},
    {tr:'спыніце тут',pr:'spih-NEE-tseh toot',en:'stop here',c:'Travel'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Shopping','Emergency','Time','Travel'],
  culture: [
    {icon:'🔤',title:'Cyrillic is your friend',body:'Don\'t be put off — a lot of Cyrillic letters match Latin: <b>А, Е, К, М, О, Т</b> look the same as English. Belarusian also has a few unique letters you\'ll meet below: the short <b>ў</b> and the digraphs <b>дз</b> and <b>дж</b>. Learn those and you can read most words aloud.'},
    {icon:'🇧🇾',title:'Belarusian ≠ Russian',body:'Belarusian is a separate East Slavic language, not a dialect of Russian. It keeps sounds that Russian has lost — like <b>ў</b>, <b>дз</b> and <b>дж</b> — and shares vocabulary with both Russian and Ukrainian. Its status and identity are a point of real national pride.'},
    {icon:'🔁',title:'An East Slavic cousin',body:'Belarusian sits alongside Russian and Ukrainian: all three descend from Old East Slavic. If you speak Russian or Ukrainian you\'ll pick Belarusian up fast — <i>вада</i> (water), <i>хлеб</i> (bread), <i>брат</i> (brother), <i>дзякуй</i> (thanks).'},
    {icon:'🇵🇱',title:'History with Poland',body:'Belarus has been close to Poland for centuries, and Polish helped shape the language too. You\'ll meet words like <i>рахунак</i> (bill) and <i>дзякаваць</i> (to thank) that feel familiar to Polish speakers — a bonus if you know Polish.'},
    {icon:'🥔',title:'Food & hospitality',body:'The national dish is <b>дранікі</b> — potato pancakes, served with sour cream. Guests are welcomed generously with food and a warm cup of tea or coffee. Saying <b>смачна</b> (tasty!) while you eat is a lovely touch.'},
    {icon:'😊',title:'A little Belarusian goes far',body:'A "добры дзень" and "дзякуй" open every door. Belarusians warm up fast when visitors try their language — a genuine effort and a smile matter far more than perfect grammar.'}
  ],
  sounds: [
    {l:'ў',say:'A short "u" that sounds almost like English "w" — it never begins a word.',ex:'заўтра = ZAW-trah · быў = byw',voice:'заўтра'},
    {l:'і',say:'A bright "ee" as in "see" — the soft i.',ex:'віно = vee-NOH · мінута = mee-NOO-tah',voice:'віно'},
    {l:'ы',say:'A deep "i" with the tongue pulled back and lips relaxed — there is no English match. Copy the audio.',ex:'ты = tih · мы = mih',voice:'ты'},
    {l:'дж',say:'Like the "j" in "jam" — a single sound written with two letters.',ex:'джаз = jahz · джон = jahn',voice:'джаз'},
    {l:'дз',say:'Like the "ds" in "goods" — a soft, blended sound characteristic of East Slavic.',ex:'дзень = dzen · дзе = dzyeh',voice:'дзень'},
    {l:'г',say:'Voiced and guttural, like the "h" in a soft "hello" — not the hard English "g".',ex:'гарбата = hahr-BAH-tah · гэта = HEH-tah',voice:'гарбата'},
    {l:'ц',say:'A crisp "ts" as in "cats" — never a plain "s".',ex:'цяпер = tsyah-PYER · раніца = RAH-nee-tsah',voice:'цяпер'},
    {l:'ь',say:'The soft sign — it makes no sound of its own, it softens (palatalises) the consonant before it.',ex:'дзень = dzen · сёння = SYOHN-nyah',voice:'сёння'}
  ],
  resources: [
    {icon:'🗣️',t:'Easy Belarusian',d:'Real street interviews with native speakers and subtitles — ideal for natural spoken Belarusian.',q:'Easy Belarusian street interviews'},
    {icon:'🐢',t:'Slow Belarusian',d:'Clear, slow Belarusian for beginners with everyday vocabulary you\'ll actually use.',q:'slow Belarusian for beginners'},
    {icon:'📚',t:'Belarusian lessons',d:'Structured beginner lessons in short, digestible videos.',q:'learn Belarusian for beginners'},
    {icon:'💬',t:'Speak Belarusian',d:'Conversational Belarusian built from real situations with clear explanations.',q:'Belarusian conversation practice'},
    {icon:'🎧',t:'Belarusian podcasts',d:'Easy listening at a gentle pace — perfect for a walk or commute.',q:'Belarusian podcast for learners'}
  ]
};
