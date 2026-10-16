/* ---- pashto ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["pashto"] = {
  name: 'Pashto',
  flag: '🇦🇫',
  tts: 'ps-AF',
  dir: 'rtl',
  native: 'پښتو',
  soundTitle: 'Pashto sounds & spelling',
  soundIntro: 'Pashto (پښتو) is written in its own alphabet based on Arabic and read right to left — but it is not Arabic, it is an Iranian language. The tricky part is a set of "retroflex" consonants (tongue curled back) and a few gutturals that do not exist in English. Learn these and you can read almost any word.',
  grammar: '<p>Pashto (پښتو) is an <b>Eastern Iranian</b> language, a cousin of <b>Dari</b> and <b>Farsi</b> — not a form of Arabic. It has its own alphabet based on Arabic and is read <b>right to left</b>. Beyond the Arabic letters it adds a set of its own: ښ (sh), ږ (gh/ge), ځ (dz), څ (ts), plus the retroflex ډ (d), ټ (t), ړ (r). Word order is <b>subject–object–verb</b>: "I want water" is literally "I water want" (زه اوبه غواړم).</p>',
  bridges: '<div class="note">🇮🇷 <b>Persian / Dari.</b> Pashto and Persian are cousins, not the same language, but they share a lot: <b>سلام</b> (salām, peace), <b>چای</b> (čāy, tea), <b>قهوه</b> (qahwa, coffee), <b>بازار</b> (bāzār, market), <b>ګل</b> (gul, flower).</div><div class="note">🕌 <b>Arabic.</b> Centuries of Islamic culture brought a layer of Arabic loanwords — <b>کتاب</b> (kitāb, book), <b>وخت</b> (waxt, time), <b>سلام</b> (peace) — so religious and learned words often look familiar.</div><div class="note">🇬🇧 <b>English.</b> Modern life brought English: <b>موټر</b> (moṭar, car), <b>ټېلېفون</b> (telefon, phone), <b>سټیشن</b> (stāṣyun, station).</div>',
  lessons: [
    { id:1, title:'Greetings & being polite', focus:'سلام · ښه ورځ · مننه · مهرباني وکړئ',
      steps:[
        {t:'say',text:'Start with the word you\'ll say every day: <span class="inline-tr">سلام</span> (salām) — hello, from the Arabic for "peace".',tr:'سلام'},
        {t:'words',items:[{tr:'سلام',pr:'sa-LAAM',en:'hello'},{tr:'ښه ورځ',pr:'SHĒ WRADZ',en:'good day'},{tr:'ښه ماښام',pr:'SHĒ maa-SHAAM',en:'good evening'},{tr:'مننه',pr:'MA-na-na',en:'thank you'},{tr:'مهرباني وکړئ',pr:'meh-ra-BA-ni wuk-RAY',en:'please'}]},
        {t:'chal',en:'Hello, thank you',tr:'سلام، مننه',pr:'sa-LAAM, MA-na-na',morph:['سلام = hello','مننه = thank you']},
        {t:'say',text:'To ask how someone is: <span class="inline-tr">څنګه یاست؟</span> The reply is <span class="inline-tr">ښه یم، مننه</span> — I\'m well, thanks.',tr:'څنګه یاست؟'},
        {t:'words',items:[{tr:'څنګه یاست؟',pr:'TSANG-aa YAST',en:'How are you?'},{tr:'ښه یم، مننه',pr:'SHĒ YAM, MA-na-na',en:'I\'m well, thanks'},{tr:'هو',pr:'ho',en:'yes'},{tr:'نه',pr:'na',en:'no'}]},
        {t:'chal',en:'How are you? I\'m well, thanks',tr:'څنګه یاست؟ ښه یم، مننه',pr:'TSANG-aa YAST? SHĒ YAM, MA-na-na',morph:['څنګه یاست؟ = how are you?','ښه یم = I\'m well','مننه = thanks']},
        {t:'chal',en:'Good night',tr:'ښه شپه',pr:'SHĒ SHPA',morph:['ښه = good','شپه = night']}
      ],
      blocks:['<code>سلام</code> = hello','<code>ښه ورځ</code> = good day','<code>مننه</code> = thank you · <code>مهرباني وکړئ</code> = please','<code>هو</code> / <code>نه</code> = yes / no'] },
    { id:2, title:'Numbers 1–10', focus:'یو · دوه · درې · لس',
      steps:[
        {t:'say',text:'Numbers are the fastest win. Listen and repeat: <span class="inline-tr">یو، دوه، درې</span>.',tr:'یو'},
        {t:'words',items:[{tr:'یو',pr:'yaw',en:'1'},{tr:'دوه',pr:'dwa',en:'2'},{tr:'درې',pr:'dre',en:'3'},{tr:'څلور',pr:'tsa-LOR',en:'4'},{tr:'پنځه',pr:'PIN-dzē',en:'5'},{tr:'شپږ',pr:'shpaZH',en:'6'},{tr:'اووه',pr:'a-WA',en:'7'},{tr:'اته',pr:'a-TA',en:'8'},{tr:'نه',pr:'na',en:'9'},{tr:'لس',pr:'las',en:'10'}]},
        {t:'chal',en:'Two teas, please',tr:'دوه چای، مهرباني وکړئ',pr:'DWA CHAAY, meh-ra-BA-ni wuk-RAY',morph:['دوه = two','چای = tea','مهرباني وکړئ = please']},
        {t:'say',text:'To ask a price: <span class="inline-tr">څومره؟</span> — how much? A key phrase for shopping.',tr:'څومره؟'},
        {t:'chal',en:'How much is it?',tr:'څومره ده؟',pr:'TSOM-ra DA',morph:['څومره = how much','ده = is it']},
        {t:'chal',en:'It\'s ten',tr:'لس دی',pr:'LAS DAY',morph:['لس = ten','دی = is']}
      ],
      blocks:['یو، دوه، درې، څلور، پنځه = 1–5','<code>څومره ده؟</code> = how much is it?'] },
    { id:3, title:'"I want" — the verb غواړم', focus:'زه غواړم · زه ... غواړم',
      steps:[
        {t:'say',text:'The magic phrase to ask for anything: <span class="inline-tr">زه غواړم</span> — I want.',tr:'زه غواړم'},
        {t:'say',text:'The word order is special: <b>زه</b> + <b>the thing you want</b> + <b>غواړم</b>. So "I want water" is <span class="inline-tr">زه اوبه غواړم</span>.',tr:'زه اوبه غواړم'},
        {t:'chal',en:'I want water',tr:'زه اوبه غواړم',pr:'ZA a-BA GHWAA-ram',morph:['زه = I','اوبه = water','غواړم = I want']},
        {t:'say',text:'Make it a request by adding <span class="inline-tr">مهرباني وکړئ</span> (please).',tr:'مهرباني وکړئ'},
        {t:'chal',en:'I want tea, please',tr:'زه چای غواړم، مهرباني وکړئ',pr:'ZA CHAAY GHWAA-ram, meh-ra-BA-ni wuk-RAY',morph:['زه = I','چای = tea','غواړم = I want','مهرباني وکړئ = please']},
        {t:'chal',en:'I want bread',tr:'زه ډوډۍ غواړم',pr:'ZA DO-DŌY GHWAA-ram',morph:['زه = I','ډوډۍ = bread','غواړم = I want']}
      ],
      blocks:['<code>زه غواړم</code> = I want','<code>زه ... غواړم</code> = I want ...','<code>غواړم</code> = I want (the thing goes before it)'] },
    { id:4, title:'Food & drink', focus:'اوبه · ډوډۍ · چای · قهوه',
      steps:[
        {t:'say',text:'Eating out? Key words: <span class="inline-tr">اوبه</span> (water), <span class="inline-tr">ډوډۍ</span> (bread), <span class="inline-tr">چای</span> (tea), <span class="inline-tr">قهوه</span> (coffee).',tr:'اوبه'},
        {t:'words',items:[{tr:'اوبه',pr:'a-BA',en:'water'},{tr:'ډوډۍ',pr:'DO-DŌY',en:'bread'},{tr:'چای',pr:'CHAAY',en:'tea',link:'≈ Persian چای'},{tr:'قهوه',pr:'QAH-wa',en:'coffee',link:'≈ Arabic قهوة'},{tr:'غوښه',pr:'GHWA-ša',en:'meat'},{tr:'میوه',pr:'ME-wa',en:'fruit'}]},
        {t:'chal',en:'Water and bread, please',tr:'اوبه او ډوډۍ، مهرباني وکړئ',pr:'a-BA aw DO-DŌY, meh-ra-BA-ni wuk-RAY',morph:['اوبه = water','او = and','ډوډۍ = bread']},
        {t:'chal',en:'I want tea',tr:'زه چای غواړم',pr:'ZA CHAAY GHWAA-ram',morph:['زه = I','چای = tea','غواړم = I want']},
        {t:'say',text:'<span class="inline-tr">بخښنه</span> = excuse me / sorry. Say it before you interrupt someone.',tr:'بخښنه'},
        {t:'chal',en:'Coffee and tea, please',tr:'قهوه او چای، مهرباني وکړئ',pr:'QAH-wa aw CHAAY, meh-ra-BA-ni wuk-RAY',morph:['قهوه = coffee','او = and','چای = tea']}
      ],
      blocks:['<code>اوبه</code>, <code>ډوډۍ</code> = water, bread','<code>چای</code> = tea · <code>قهوه</code> = coffee','<code>بخښنه</code> = excuse me / sorry'] },
    { id:5, title:'Getting around', focus:'چېرته · ښي · چپ · سټیشن',
      steps:[
        {t:'say',text:'The most useful question in any city: <span class="inline-tr">چېرته</span> — where?',tr:'چېرته'},
        {t:'words',items:[{tr:'چېرته',pr:'CHER-ta',en:'where'},{tr:'ښي',pr:'SHĒ',en:'to the right'},{tr:'چپ',pr:'chap',en:'to the left'},{tr:'مستقیم',pr:'mus-TA-qim',en:'straight ahead'},{tr:'سټیشن',pr:'STAA-shyun',en:'the station',link:'≈ English station'}]},
        {t:'chal',en:'Where is the station?',tr:'سټیشن چېرته دی؟',pr:'STAA-shyun CHER-ta DAY',morph:['سټیشن = station','چېرته = where','دی = is']},
        {t:'chal',en:'Where is the bathroom?',tr:'تش خانه چېرته ده؟',pr:'taash KHA-na CHER-ta DA',morph:['تش خانه = bathroom','چېرته = where','ده = is']},
        {t:'say',text:'<span class="inline-tr">ښي</span> and <span class="inline-tr">چپ</span> tell you which way to turn. \'Straight ahead\' is <span class="inline-tr">مستقیم</span>.',tr:'مستقیم'},
        {t:'chal',en:'Straight ahead',tr:'مستقیم',pr:'mus-TA-qim',morph:['مستقیم = straight ahead']}
      ],
      blocks:['<code>چېرته</code> = where?','<code>ښي</code> / <code>چپ</code> = right / left','<code>سټیشن</code> = station'] },
    { id:6, title:'Questions & "do you have…?"', focus:'ته ... لرې؟ · زه ... لرم',
      steps:[
        {t:'say',text:'To ask if someone has something: <span class="inline-tr">ته ... لرې؟</span> (informal) or <span class="inline-tr">تاسو ... لرئ؟</span> (polite/plural).',tr:'ته'},
        {t:'chal',en:'Do you have a table?',tr:'ته مېز لرې؟',pr:'TA MAAZ LA-re',morph:['ته = you','مېز = table','لرې = do you have']},
        {t:'say',text:'To say what <b>you</b> have, use <span class="inline-tr">زه ... لرم</span> = I have ...',tr:'زه ... لرم'},
        {t:'chal',en:'I have water',tr:'زه اوبه لرم',pr:'ZA a-BA LA-ram',morph:['زه = I','اوبه = water','لرم = I have']},
        {t:'chal',en:'Do you have tea?',tr:'ته چای لرې؟',pr:'TA CHAAY LA-re',morph:['ته = you','چای = tea','لرې = do you have']},
        {t:'chal',en:'I have a family',tr:'زه کورنۍ لرم',pr:'ZA ko-ran-ĀY LA-ram',morph:['زه = I','کورنۍ = family','لرم = I have']}
      ],
      blocks:['<code>ته ... لرې؟</code> = do you have…?','<code>زه ... لرم</code> = I have …','<code>مېز</code> = table'] },
    { id:7, title:'Family & people', focus:'کورنۍ · پلار · مور · ملګری',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">کورنۍ</span> (family), <span class="inline-tr">پلار</span> (father), <span class="inline-tr">مور</span> (mother).',tr:'کورنۍ'},
        {t:'words',items:[{tr:'کورنۍ',pr:'ko-ran-ĀY',en:'family'},{tr:'پلار',pr:'PLAAR',en:'father'},{tr:'مور',pr:'mor',en:'mother'},{tr:'ورور',pr:'wro-RŌR',en:'brother'},{tr:'خور',pr:'xor',en:'sister'},{tr:'ملګری',pr:'mal-GA-ray',en:'friend'}]},
        {t:'chal',en:'I have a brother',tr:'زه ورور لرم',pr:'ZA wro-RŌR LA-ram',morph:['زه = I','ورور = brother','لرم = I have']},
        {t:'say',text:'<span class="inline-tr">ملګری</span> = friend. A key word for making ones.',tr:'ملګری'},
        {t:'chal',en:'My mother',tr:'زما مور',pr:'ZMA MOR',morph:['زما = my','مور = mother']},
        {t:'chal',en:'I have a friend',tr:'زه ملګری لرم',pr:'ZA mal-GA-ray LA-ram',morph:['زه = I','ملګری = friend','لرم = I have']}
      ],
      blocks:['<code>کورنۍ</code> = family · <code>پلار</code> / <code>مور</code> = father / mother','<code>ورور</code> / <code>خور</code> = brother / sister','<code>ملګری</code> = friend'] },
    { id:8, title:'Time, days & weather', focus:'نن · سبا · هوا · ورځ',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">نن</span>, tomorrow is <span class="inline-tr">سبا</span>.',tr:'نن'},
        {t:'words',items:[{tr:'نن',pr:'nan',en:'today'},{tr:'سبا',pr:'sa-BAA',en:'tomorrow'},{tr:'ورځ',pr:'wradz',en:'day'},{tr:'هوا',pr:'ha-WAA',en:'weather / air'},{tr:'لمر',pr:'l-mar',en:'sun'}]},
        {t:'chal',en:'See you tomorrow',tr:'سبا به ګورو',pr:'sa-BAA ba GO-ro',morph:['سبا = tomorrow','به ګورو = we\'ll see']},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">هوا څنګه ده؟</span>.',tr:'هوا څنګه ده؟'},
        {t:'chal',en:'It\'s raining',tr:'باران ورېږي',pr:'baa-RAAN WE-red-zē',morph:['باران = rain','ورېږي = falls']},
        {t:'chal',en:'What day is today?',tr:'نن کومه ورځ ده؟',pr:'NAN KO-ma WRADZ DA',morph:['نن = today','کومه = which','ورځ = day']}
      ],
      blocks:['<code>نن</code> / <code>سبا</code> = today / tomorrow','<code>هوا</code> = weather','<code>ورځ</code> = day'] },
    { id:9, title:'Introducing yourself', focus:'زما نوم ... دی · ستا نوم څه دی؟',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">زما نوم ... دی</span> — my name is ...',tr:'زما نوم'},
        {t:'chal',en:'My name is __NAME__',tr:'زما نوم __NAME__ دی',pr:'ZMA NOM __NAME__ DAY',morph:['زما نوم = my name','__NAME__ = your name','دی = is']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">ستا نوم څه دی؟</span>',tr:'ستا نوم څه دی؟'},
        {t:'chal',en:'What\'s your name?',tr:'ستا نوم څه دی؟',pr:'STA NOM TSA DAY',morph:['ستا = your','نوم = name','څه = what','دی = is']},
        {t:'chal',en:'I am __NAME__',tr:'زه __NAME__ یم',pr:'ZA __NAME__ YAM',morph:['زه = I','یم = am']},
        {t:'say',text:'<span class="inline-tr">په مخه ښه</span> = goodbye (literally "go well").',tr:'په مخه ښه'}
      ],
      blocks:['<code>زما نوم ... دی</code> = my name is …','<code>ستا نوم څه دی؟</code> = what\'s your name?','<code>په مخه ښه</code> = goodbye'] },
    { id:10, title:'Health & emergency', focus:'مرسته · ډاکټر · روغتون · زه نه پوهېږم',
      steps:[
        {t:'say',text:'The most important words if you need help: <span class="inline-tr">مرسته</span> (help!), <span class="inline-tr">ډاکټر</span> (doctor), <span class="inline-tr">روغتون</span> (hospital).',tr:'مرسته'},
        {t:'words',items:[{tr:'مرسته',pr:'ma-ra-STA',en:'help!'},{tr:'ډاکټر',pr:'DAAK-tar',en:'the doctor',link:'≈ English doctor'},{tr:'روغتون',pr:'rogh-TŌN',en:'the hospital'},{tr:'درملتون',pr:'dar-mal-TŌN',en:'the pharmacy'},{tr:'زه نه پوهېږم',pr:'ZA NA po-HĒ-ram',en:'I don\'t understand'}]},
        {t:'chal',en:'Help!',tr:'مرسته!',pr:'ma-ra-STA!',morph:['مرسته = help']},
        {t:'chal',en:'I don\'t understand',tr:'زه نه پوهېږم',pr:'ZA NA po-HĒ-ram',morph:['زه = I','نه = not','پوهېږم = I understand']},
        {t:'say',text:'To say you need a doctor: <span class="inline-tr">زه ډاکټر ته اړتیا لرم</span>.',tr:'زه ډاکټر ته اړتیا لرم'},
        {t:'chal',en:'I need a doctor',tr:'زه ډاکټر ته اړتیا لرم',pr:'ZA DAAK-tar TA ar-ti-YAA LA-ram',morph:['زه = I','ډاکټر = doctor','اړتیا لرم = I need']}
      ],
      blocks:['<code>مرسته</code> = help','<code>ډاکټر</code> / <code>روغتون</code> = doctor / hospital','<code>زه نه پوهېږم</code> = I don\'t understand'] },
    { id:11, title:'Describing things', focus:'ښکلی · لوی · کوچنی · ډېر',
      steps:[
        {t:'say',text:'Adjectives are easy: <span class="inline-tr">ښکلی</span> (beautiful), <span class="inline-tr">لوی</span> (big), <span class="inline-tr">کوچنی</span> (small).',tr:'ښکلی'},
        {t:'words',items:[{tr:'ښکلی',pr:'SHÃK-la',en:'beautiful'},{tr:'لوی',pr:'LOY',en:'big'},{tr:'کوچنی',pr:'KOOCH-na',en:'small'},{tr:'ډېر',pr:'der',en:'very / a lot'}]},
        {t:'chal',en:'Very beautiful',tr:'ډېر ښکلی',pr:'DER SHÃK-la',morph:['ډېر = very','ښکلی = beautiful']},
        {t:'say',text:'<span class="inline-tr">ډېر</span> = very / a lot. Put it in front of the adjective.',tr:'ډېر'},
        {t:'chal',en:'A big house',tr:'لوی کور',pr:'LOY KOR',morph:['لوی = big','کور = house']},
        {t:'chal',en:'This is a beautiful city',tr:'دا ښکلی ښار دی',pr:'DAA SHÃK-la SHAAR DAY',morph:['دا = this','ښکلی = beautiful','ښار = city','دی = is']}
      ],
      blocks:['<code>ښکلی</code> = beautiful','<code>لوی</code> / <code>کوچنی</code> = big / small','<code>ډېر</code> = very'] },
    { id:12, title:'Tying it together', focus:'a capstone scene',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolbox. This capstone uses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello, how are you?',tr:'سلام، څنګه یاست؟',pr:'sa-LAAM, TSANG-aa YAST',morph:['سلام = hello','څنګه یاست؟ = how are you?']},
        {t:'chal',en:'I want water, please',tr:'زه اوبه غواړم، مهرباني وکړئ',pr:'ZA a-BA GHWAA-ram, meh-ra-BA-ni wuk-RAY',morph:['زه = I','اوبه = water','غواړم = I want','مهرباني وکړئ = please']},
        {t:'chal',en:'Where is the station?',tr:'سټیشن چېرته دی؟',pr:'STAA-shyun CHER-ta DAY',morph:['سټیشن = station','چېرته = where','دی = is']},
        {t:'chal',en:'How much is it?',tr:'څومره ده؟',pr:'TSOM-ra DA',morph:['څومره ده؟ = how much is it?']},
        {t:'chal',en:'Thank you! Goodbye!',tr:'مننه! په مخه ښه!',pr:'MA-na-na! pa MA-KHĀ SHĒ!',morph:['مننه = thank you','په مخه ښه = goodbye']}
      ],
      blocks:['You built: greetings, ordering, directions, prices, thanks — a full day out in Pashto.'] },
    { id:13, title:'Airport & tickets', focus:'هوايي ډګر · پاسپورټ · ټکټ · دروازه',
      steps:[
        {t:'say',text:'You have landed. The building is the <span class="inline-tr">هوايي ډګر</span>. Your document is a <span class="inline-tr">پاسپورټ</span>.',tr:'هوايي ډګر'},
        {t:'words',items:[{tr:'هوايي ډګر',pr:'ha-WAA-yee da-GAR',en:'airport'},{tr:'پاسپورټ',pr:'PAAS-port',en:'passport'},{tr:'ټکټ',pr:'ta-KAT',en:'ticket'},{tr:'دروازه',pr:'dar-WAA-za',en:'gate / door'}]},
        {t:'chal',en:'Where is the airport?',tr:'هوايي ډګر چېرته دی؟',pr:'ha-WAA-yee da-GAR CHER-ta DAY',morph:['هوايي ډګر = airport','چېرته = where','دی = is']},
        {t:'chal',en:'Here is my passport',tr:'دا زما پاسپورټ دی',pr:'DAA ZMA PAAS-port DAY',morph:['دا = this','زما = my','پاسپورټ = passport']},
        {t:'chal',en:'A ticket, please',tr:'یوه ټکټ، مهرباني وکړئ',pr:'YAW-a ta-KAT, meh-ra-BA-ni wuk-RAY',morph:['یوه ټکټ = a ticket','مهرباني وکړئ = please']},
        {t:'chal',en:'Where is the gate?',tr:'دروازه چېرته ده؟',pr:'dar-WAA-za CHER-ta DA',morph:['دروازه = gate','چېرته = where','ده = is']}
      ],
      blocks:['<code>هوايي ډګر</code> = airport','<code>پاسپورټ</code> = passport','<code>ټکټ</code> = ticket'] },
    { id:14, title:'The taxi', focus:'ټکسي · هوټل · ودرېږه',
      steps:[
        {t:'say',text:'The driver is waiting. <span class="inline-tr">ټکسي</span> is a loanword. Tell them <span class="inline-tr">زه هوټل ته تلل غواړم</span>.',tr:'ټکسي'},
        {t:'words',items:[{tr:'ټکسي',pr:'tak-SEE',en:'taxi'},{tr:'چلونکی',pr:'cha-la-WUN-kay',en:'driver'},{tr:'زه هوټل ته ځم',pr:'ZA ho-TEL ta dzam',en:'I am going to the hotel'},{tr:'دلته ودرېږه',pr:'DAL-ta wa-da-RĒ-ga',en:'stop here'}]},
        {t:'chal',en:'Taxi, please',tr:'ټکسي، مهرباني وکړئ',pr:'tak-SEE, meh-ra-BA-ni wuk-RAY',morph:['ټکسي = taxi','مهرباني وکړئ = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'زه هوټل ته تلل غواړم',pr:'ZA ho-TEL ta ta-LAL GHWAA-ram',morph:['زه = I','هوټل ته = to the hotel','تلل غواړم = I want to go']},
        {t:'chal',en:'Stop here, please',tr:'دلته ودرېږه، مهرباني وکړئ',pr:'DAL-ta wa-da-RĒ-ga, meh-ra-BA-ni wuk-RAY',morph:['دلته = here','ودرېږه = stop','مهرباني وکړئ = please']},
        {t:'chal',en:'How much is it?',tr:'څومره ده؟',pr:'TSOM-ra DA',morph:['څومره = how much','ده = is it']}
      ],
      blocks:['<code>زه … ته تلل غواړم</code> = I want to go to …','<code>دلته ودرېږه</code> = stop here'] },
    { id:15, title:'The hotel', focus:'ریزرو · خونه · کیلي · شپه',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">زه ریزرو لرم</span> — I have a reservation.',tr:'ریزرو'},
        {t:'words',items:[{tr:'هوټل',pr:'ho-TEL',en:'hotel'},{tr:'ریزرو',pr:'ree-ZERV',en:'reservation'},{tr:'خونه',pr:'KHO-na',en:'room'},{tr:'کیلي',pr:'kee-LEE',en:'key'},{tr:'یوه شپه',pr:'YAW-a shpa',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'زه ریزرو لرم',pr:'ZA ree-ZERV LA-ram',morph:['زه = I','ریزرو = reservation','لرم = I have']},
        {t:'chal',en:'A room for one night, please',tr:'د یوې شپې خونه، مهرباني وکړئ',pr:'da YAW-e shpe KHO-na, meh-ra-BA-ni wuk-RAY',morph:['د یوې شپې = for one night','خونه = room','مهرباني وکړئ = please']},
        {t:'chal',en:'The key, please',tr:'کیلي، مهرباني وکړئ',pr:'kee-LEE, meh-ra-BA-ni wuk-RAY',morph:['کیلي = key','مهرباني وکړئ = please']},
        {t:'chal',en:'Where is my room?',tr:'زما خونه چېرته ده؟',pr:'ZMA KHO-na CHER-ta DA',morph:['زما خونه = my room','چېرته ده؟ = where is it']}
      ],
      blocks:['<code>ریزرو</code> = reservation','<code>خونه</code> = room','<code>کیلي</code> = key'] },
    { id:16, title:'Ask for help', focus:'نه پوهېږم · ورو ورو · انګلیسي',
      steps:[
        {t:'say',text:'When Pashto is too fast: <span class="inline-tr">ورو ورو خبرې وکړئ</span> — speak slowly, please.',tr:'ورو ورو'},
        {t:'words',items:[{tr:'ورو ورو خبرې وکړئ',pr:'WRO WRO kha-BE ray wuk-RAY',en:'speak slowly'},{tr:'بیا',pr:'byaa',en:'again'},{tr:'انګلیسي',pr:'ang-lee-SEE',en:'English'},{tr:'مرسته?',pr:'ma-ra-STA ka-WAA-lay shay',en:'can you help?'}]},
        {t:'chal',en:'I don\'t understand',tr:'زه نه پوهېږم',pr:'ZA NA po-HĒ-ram',morph:['زه = I','نه = not','پوهېږم = I understand']},
        {t:'chal',en:'Speak slowly, please',tr:'ورو ورو خبرې وکړئ، مهرباني وکړئ',pr:'WRO WRO kha-BE ray wuk-RAY, meh-ra-BA-ni wuk-RAY',morph:['ورو ورو = slowly','خبرې وکړئ = please speak','مهرباني وکړئ = please']},
        {t:'chal',en:'Can you help me?',tr:'تاسو زما مرسته کولای شئ؟',pr:'TAA-so ZMA ma-ra-STA ka-WAA-lay shay',morph:['تاسو = you','زما مرسته = my help','کولای شئ؟ = can you?']},
        {t:'chal',en:'Do you speak English?',tr:'تاسو انګلیسي خبرې کوئ؟',pr:'TAA-so ang-lee-SEE kha-BE ray kway',morph:['تاسو = you','انګلیسي = English','خبرې کوئ؟ = do you speak?']}
      ],
      blocks:['<code>ورو ورو خبرې وکړئ</code> = speak slowly','<code>تاسو انګلیسي خبرې?</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'cafe', title:'☕ At a café', emoji:'☕', turns:[
      {who:'You',tr:'سلام! زه چای غواړم، مهرباني وکړئ.',pr:'sa-LAAM! ZA CHAAY GHWAA-ram, meh-ra-BA-ni wuk-RAY',en:'Hello! I want tea, please.'},
      {who:'Server',tr:'څه ډول چای؟',pr:'TSA DŌL CHAAY',en:'What kind of tea?'},
      {who:'You',tr:'شین چای، مننه.',pr:'SHIN CHAAY, MA-na-na',en:'Green tea, thanks.'},
      {who:'Server',tr:'دلته که له ځانه سره؟',pr:'del-TA KE la KHA-na SA-ra',en:'Here or to go?'},
      {who:'You',tr:'دلته، مننه.',pr:'del-TA, MA-na-na',en:'Here, thanks.'}
    ]},
    { id:'transport', title:'🚉 At the station', emoji:'🚉', turns:[
      {who:'You',tr:'بخښنه، سټیشن چېرته دی؟',pr:'ba-KHĀ-na, STAA-shyun CHER-ta DAY',en:'Excuse me, where is the station?'},
      {who:'Local',tr:'هلته، ښي لور ته.',pr:'hal-TA, SHĒ LŌR TA',en:'There, to the right.'},
      {who:'You',tr:'مننه. کابل ته یوه ټېکټ، مهرباني وکړئ.',pr:'MA-na-na. KAA-bul TA YAW tekṭ, meh-ra-BA-ni wuk-RAY',en:'Thanks. A ticket to Kabul, please.'},
      {who:'Ticket clerk',tr:'پنځه سوه افغانۍ. موټر یو ساعت وروسته حرکت کوي.',pr:'PIN-dzē SA-WA af-GHA-nī. mo-TAR YAW sa-AT wa-ROS-ta har-KAT ka-wī',en:'Five hundred afghanis. The bus leaves in an hour.'}
    ]},
    { id:'restaurant', title:'🍛 At a restaurant', emoji:'🍛', turns:[
      {who:'Waiter',tr:'سلام! تاسو څو یاست؟',pr:'sa-LAAM! TAA-so TSO YAST',en:'Hello! How many are you?'},
      {who:'You',tr:'دوه کسان، مهرباني وکړئ.',pr:'DWA ka-SAAN, meh-ra-BA-ni wuk-RAY',en:'Two people, please.'},
      {who:'Waiter',tr:'څه خورئ؟',pr:'TSA XWA-ray',en:'What will you eat?'},
      {who:'You',tr:'زه غوښه او ډوډۍ غواړم، او اوبه.',pr:'ZA GHWA-ša aw DO-DŌY GHWAA-ram, aw a-BA',en:'I want meat and bread, and water.'},
      {who:'Waiter',tr:'ډېر ښه! مننه.',pr:'DER SHĒ! MA-na-na',en:'Very good! Thank you.'}
    ]},
    { id:'market', title:'🛍️ At a market', emoji:'🛍️', turns:[
      {who:'You',tr:'بخښنه، دا څومره ده؟',pr:'ba-KHĀ-na, DAA TSOM-ra DA',en:'Excuse me, how much is this?'},
      {who:'Seller',tr:'درې سوه افغانۍ دی.',pr:'DRE SA-WA af-GHA-nī DAY',en:'Three hundred afghanis.'},
      {who:'You',tr:'ډېر ګران دی.',pr:'DER GRAAN DAY',en:'That\'s too expensive.'},
      {who:'Seller',tr:'سمه ده. ارزانه کوم.',pr:'sma DA. ar-ZA-na KA-wom',en:'OK. I\'ll make it cheaper.'},
      {who:'You',tr:'ډېر ښه! زه دا اخلم.',pr:'DER SHĒ! ZA DAA AKH-lam',en:'Very good! I\'ll take this.'}
    ]}
  ],
  pocket: [
    {tr:'سلام',pr:'sa-LAAM',en:'Hello',c:'Greetings'},
    {tr:'ښه شپه',pr:'SHĒ SHPA',en:'Good night',c:'Greetings'},
    {tr:'په مخه ښه',pr:'pa MA-KHĀ SHĒ',en:'Goodbye',c:'Greetings'},
    {tr:'څنګه یاست؟',pr:'TSANG-aa YAST',en:'How are you?',c:'Greetings'},
    {tr:'ښه یم، مننه',pr:'SHĒ YAM, MA-na-na',en:'I\'m well, thanks',c:'Greetings'},
    {tr:'ستا نوم څه دی؟',pr:'STA NOM TSA DAY',en:'What\'s your name?',c:'Greetings'},
    {tr:'مننه',pr:'MA-na-na',en:'Thank you',c:'Courtesy'},
    {tr:'مهرباني وکړئ',pr:'meh-ra-BA-ni wuk-RAY',en:'Please',c:'Courtesy'},
    {tr:'بخښنه',pr:'ba-KHĀ-na',en:'Excuse me',c:'Courtesy'},
    {tr:'هو',pr:'ho',en:'Yes',c:'Courtesy'},
    {tr:'نه',pr:'na',en:'No',c:'Courtesy'},
    {tr:'یو',pr:'yaw',en:'1',c:'Numbers'},
    {tr:'دوه',pr:'dwa',en:'2',c:'Numbers'},
    {tr:'درې',pr:'dre',en:'3',c:'Numbers'},
    {tr:'څلور',pr:'tsa-LOR',en:'4',c:'Numbers'},
    {tr:'پنځه',pr:'PIN-dzē',en:'5',c:'Numbers'},
    {tr:'لس',pr:'las',en:'10',c:'Numbers'},
    {tr:'اوبه',pr:'a-BA',en:'water',c:'Food'},
    {tr:'ډوډۍ',pr:'DO-DŌY',en:'bread',c:'Food'},
    {tr:'چای',pr:'CHAAY',en:'tea',c:'Food'},
    {tr:'قهوه',pr:'QAH-wa',en:'coffee',c:'Food'},
    {tr:'غوښه',pr:'GHWA-ša',en:'meat',c:'Food'},
    {tr:'چېرته',pr:'CHER-ta',en:'Where?',c:'Directions'},
    {tr:'ښي',pr:'SHĒ',en:'to the right',c:'Directions'},
    {tr:'چپ',pr:'chap',en:'to the left',c:'Directions'},
    {tr:'مستقیم',pr:'mus-TA-qim',en:'straight ahead',c:'Directions'},
    {tr:'سټیشن',pr:'STAA-shyun',en:'the station',c:'Directions'},
    {tr:'څومره ده؟',pr:'TSOM-ra DA',en:'how much is it?',c:'Shopping'},
    {tr:'ډېر ګران دی',pr:'DER GRAAN DAY',en:'it\'s too expensive',c:'Shopping'},
    {tr:'زه دا اخلم',pr:'ZA DAA AKH-lam',en:'I\'ll take this',c:'Shopping'},
    {tr:'مرسته!',pr:'ma-ra-STA!',en:'Help!',c:'Emergency'},
    {tr:'زه نه پوهېږم',pr:'ZA NA po-HĒ-ram',en:'I don\'t understand',c:'Emergency'},
    {tr:'ډاکټر',pr:'DAAK-tar',en:'doctor',c:'Emergency'},
    {tr:'روغتون',pr:'rogh-TŌN',en:'hospital',c:'Emergency'},
    {tr:'نن',pr:'nan',en:'today',c:'Time'},
    {tr:'سبا',pr:'sa-BAA',en:'tomorrow',c:'Time'},
    {tr:'ورځ',pr:'wradz',en:'day',c:'Time'},
    {tr:'هوا',pr:'ha-WAA',en:'weather',c:'Time'},
    {tr:'باران ورېږي',pr:'baa-RAAN WE-red-zē',en:'it\'s raining',c:'Time'},
    {tr:'هوايي ډګر',pr:'ha-WAA-yee da-GAR',en:'airport',c:'Travel'},
    {tr:'پاسپورټ',pr:'PAAS-port',en:'passport',c:'Travel'},
    {tr:'زه هوټل ته تلل غواړم',pr:'ZA ho-TEL ta ta-LAL GHWAA-ram',en:'I want to go to the hotel',c:'Travel'},
    {tr:'زه ریزرو لرم',pr:'ZA ree-ZERV LA-ram',en:'I have a reservation',c:'Travel'},
    {tr:'ورو ورو خبرې وکړئ، مهرباني وکړئ',pr:'WRO WRO kha-BE ray wuk-RAY, meh-ra-BA-ni wuk-RAY',en:'Speak slowly, please',c:'Travel'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Shopping','Emergency','Time', 'Travel'],
  culture: [
    {icon:'🫖',title:'Hospitality is sacred',body:'Hospitality (مېلمستیا, melmastia) is the heart of Pashtun culture. A guest is treated like family — offered the best food, tea (شین چای) and a place to sleep. Turning a guest away is considered deeply shameful. If you\'re invited, accept graciously; declining can seem rude.'},
    {icon:'📜',title:'Pashtunwali — the code',body:'Pashtunwali (پښتونوالی) is the ancient, unwritten way of the Pashtuns. Its pillars include hospitality, honour and revenge (بدل), the granting of refuge (پناه), and courage. It still shapes how people behave in daily life, especially in the countryside.'},
    {icon:'📖',title:'A nation of poets',body:'Pashtuns love poetry. The 17th-century poet Rahman Baba and the warrior-poet Khushal Khan Khattak are beloved; their lines are recited at weddings, gatherings and on the radio. Pashto poetry sings of honour, love, God and the mountains.'},
    {icon:'🪁',title:'Kite fighting',body:'Kite fighting is a treasured Pashtun pastime. In spring the skies fill with kites; fighters use glass-coated string to cut a rival\'s kite loose. It\'s a symbol of freedom and childhood — and the heart of the famous story "The Kite Runner".'},
    {icon:'🕌',title:'Islam shapes daily life',body:'Islam is woven into everyday rhythm in Afghanistan. There are five daily prayers, Friday prayers, and festivals such as Eid (عید) and New Year (نوروز, Nowruz). The call to prayer sounds through cities and villages, and much Pashto vocabulary of faith comes from Arabic.'},
    {icon:'⚔️',title:'A proud, resilient history',body:'In the 1980s Pashtuns led the mujahideen resistance against the Soviet occupation — a chapter that shaped the country\'s modern identity and the global Afghan diaspora. Afghanistan\'s story is one of repeated struggle, and of a culture that endures through it all.'}
  ],
  sounds: [
    {l:'ښ',say:'like "sh" in she (or a throaty "kh" in some dialects)',ex:'ښه = "SHĒ" (good)',voice:'ښه'},
    {l:'ږ',say:'like a soft "ge/zh" with a guttural quality',ex:'شپږ = "shpaZH" (six)',voice:'شپږ'},
    {l:'ځ',say:'like "ds" in ads — a dz sound',ex:'ځمکه = "dzMA-ka" (earth)',voice:'ځمکه'},
    {l:'څ',say:'like "ts" in cats',ex:'څلور = "tsa-LOR" (four)',voice:'څلور'},
    {l:'ډ',say:'retroflex d — tongue curled back against the roof of the mouth',ex:'ډوډۍ = "DO-DŌY" (bread)',voice:'ډوډۍ'},
    {l:'ټ',say:'retroflex t — tongue curled back',ex:'موټر = "mo-TAR" (car)',voice:'موټر'},
    {l:'ړ',say:'retroflex r — a soft, curled-back r',ex:'غواړم = "GHWAA-ram" (I want)',voice:'غواړم'},
    {l:'ڼ',say:'retroflex n — tongue curled back (the "n" family)',ex:'تڼۍ = "ta-NAY" (button)',voice:'تڼۍ'}
  ],
  resources: [
    {icon:'🗣️',t:'Easy Pashto',d:'Real Afghan conversation with native speakers and subtitles — natural everyday Pashto.',q:'Easy Pashto conversations with subtitles'},
    {icon:'🐢',t:'Learn Pashto with Zarghuna',d:'Friendly, slow and clear beginner lessons, step by step.',q:'Learn Pashto with Zarghuna'},
    {icon:'📚',t:'Pimsleur Pashto',d:'Audio-first course that gets you speaking from day one.',q:'Pimsleur Pashto'},
    {icon:'💬',t:'Pashto Pod 101',d:'Bite-sized lessons plus vocabulary lists for beginners.',q:'PashtoPod101'},
    {icon:'🎧',t:'BBC Pashto',d:'Real news in clear Pashto — great for listening once you know the basics.',q:'BBC Pashto'}
  ]
};
