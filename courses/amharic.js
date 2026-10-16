/* ---- amharic ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["amharic"] = {
  name: 'Amharic',
  flag: '🇪🇹',
  tts: 'am-ET',
  dir: 'ltr',
  native: 'አማርኛ',
  soundTitle: 'Amharic sounds & the Ge\'ez script',
  soundIntro: 'Amharic is written in the Ge\'ez script (the fidel), read left to right. It has seven vowel sounds, and a few "ejective" consonants — ጠ, ጨ, ፀ — that give Amharic its sharp pop. Learn these and you can sound out any new word.',
  grammar: '<p>Amharic is written in the <b>Ge\'ez script</b> (the fidel) and read left to right. Each consonant letter carries its vowel: the seven <b>orders</b> of a letter — ሀ, ሁ, ሂ, ሃ, ሄ, ህ, ሆ — give the vowels <i>ä, u, i, a, e, ə, o</i>. There are <b>no</b> articles, so <i>ቡና</i> can mean \'coffee\', \'a coffee\' or \'the coffee\'. The usual order is <b>subject–object–verb</b>. To say you want something, use <b>እፈልጋለሁ (efelgalehu)</b> = I want. Amharic also has a few <b>ejectives</b> (ጠ, ጨ, ፀ) made with a burst of air and a small catch in the throat.</p>',
  bridges: '<div class="note">☕ <b>Coffee was born here.</b> The English word <i>coffee</i> traces back through Arabic <i>qahwa</i> to the Ethiopian region of <b>Kaffa</b> — home of the Arabica bean. In Amharic it\'s <b>ቡና (buna)</b>, and the <b>coffee ceremony</b> is the heart of daily life: beans are roasted, ground and brewed three times in a clay pot.</div><div class="note">🍞 <b>Injera, the national bread.</b> <b>እንጀራ (injera)</b> is the spongy sourdough flatbread made from <b>tef</b> — a tiny Ethiopian grain. It\'s the plate <i>and</i> the fork: you tear off a piece to scoop up everything else.</div><div class="note">🌍 <b>A Semitic cousin.</b> Amharic belongs to the Semitic family alongside Arabic and Hebrew. A friendly sign: <b>ሰላም (selam)</b> = peace, a cousin of <i>salaam</i> and <i>shalom</i>. It also borrows everyday words you\'ll recognize — <i>ታክሲ</i> (taxi), <i>ሆቴል</i> (hotel), <i>ፋርማሲ</i> (farmasi = pharmacy), <i>ካፌ</i> (kafe = café).</div>',
  lessons: [
    { id:1, title:'Greetings & being polite', focus:'ሰላም · ታደርስ? · አመሰግናለሁ · እባክህ',
      steps:[
        {t:'say',text:'Let\'s start with the very first word you\'ll use: <span class="inline-tr">ሰላም</span> — hello (and peace). Say it out loud.',tr:'ሰላም'},
        {t:'words',items:[{tr:'ሰላም',pr:'selam',en:'hi / hello / peace'},{tr:'ታደርስ?',pr:'tadese',en:'good morning'},{tr:'አመሰግናለሁ',pr:'ameseginalehu',en:'thank you'},{tr:'እባክህ',pr:'ebakeh',en:'please (to a man)'},{tr:'እባክሽ',pr:'ebakesh',en:'please (to a woman)'}]},
        {t:'chal',en:'Hello, thank you',tr:'ሰላም፣ አመሰግናለሁ',pr:'selam, ameseginalehu',morph:['ሰላም = hello','አመሰግናለሁ = thank you']},
        {t:'say',text:'To ask how someone is: <span class="inline-tr">እንደምን አለህ?</span> (to a man) or <span class="inline-tr">እንደምን አለሽ?</span> (to a woman). The reply is <span class="inline-tr">ደህና ነኝ</span> — I\'m fine.',tr:'እንደምን አለህ?'},
        {t:'words',items:[{tr:'እንደምን አለህ?',pr:'endemin aleh',en:'How are you? (to a man)'},{tr:'እንደምን አለሽ?',pr:'endemin alesh',en:'How are you? (to a woman)'},{tr:'ደህና ነኝ',pr:'dehna neñ',en:'I\'m fine'},{tr:'እንደምን አደርክ?',pr:'endemin aderk',en:'How was your night? (morning greeting)'}]},
        {t:'chal',en:'Hi, how are you?',tr:'ሰላም፣ እንደምን አለህ?',pr:'selam, endemin aleh?',morph:['ሰላም = hi','እንደምን አለህ? = how are you?']}
      ],
      blocks:['<code>ሰላም</code> = hello','<code>ታደርስ?</code> = good morning','<code>አመሰግናለሁ</code> = thank you · <code>እባክህ</code> = please'] },
    { id:2, title:'Numbers 1–10', focus:'አንድ · ሁለት · ሶስት · አስር',
      steps:[
        {t:'say',text:'Numbers are the fastest win. Listen and repeat: <span class="inline-tr">አንድ, ሁለት, ሶስት</span>.',tr:'አንድ'},
        {t:'words',items:[{tr:'አንድ',pr:'and',en:'1'},{tr:'ሁለት',pr:'hulet',en:'2'},{tr:'ሶስት',pr:'sost',en:'3'},{tr:'አራት',pr:'arat',en:'4'},{tr:'አምስት',pr:'amist',en:'5'},{tr:'ስድስት',pr:'siddist',en:'6'},{tr:'ሰባት',pr:'sebat',en:'7'},{tr:'ስምንት',pr:'simint',en:'8'},{tr:'ዘጠኝ',pr:'zeteñ',en:'9'},{tr:'አስር',pr:'asir',en:'10'}]},
        {t:'chal',en:'Two coffees, please',tr:'ሁለት ቡና፣ እባክህ',pr:'hulet buna, ebakeh',morph:['ሁለት = two','ቡና = coffee','እባክህ = please']},
        {t:'say',text:'<span class="inline-tr">ስንት ነው?</span> = how much is it? A key phrase for shopping.',tr:'ስንት ነው?'},
        {t:'chal',en:'How much is it?',tr:'ስንት ነው?',pr:'sint new?',morph:['ስንት = how much','ነው? = is it?']},
        {t:'chal',en:'It\'s five birr',tr:'አምስት ብር',pr:'amist birr',morph:['አምስት = five','ብር = birr (money)']}
      ],
      blocks:['አንድ፣ ሁለት፣ ሶስት፣ አራት፣ አምስት = 1–5','<code>ስንት ነው?</code> = how much is it?','ስድስት፣ ሰባት፣ ስምንት፣ ዘጠኝ፣ አስር = 6–10'] },
    { id:3, title:'"I want" — እፈልጋለሁ', focus:'እፈልጋለሁ · ቡና · ውሃ · እባክህ',
      steps:[
        {t:'say',text:'The magic phrase to order anything: <span class="inline-tr">እፈልጋለሁ</span> — I want. Say it out loud.',tr:'እፈልጋለሁ'},
        {t:'say',text:'To make it polite, add <span class="inline-tr">እባክህ</span> (please) to a man, <span class="inline-tr">እባክሽ</span> to a woman, or the respectful <span class="inline-tr">እባክዎ</span> to an elder.',tr:'እባክዎ'},
        {t:'chal',en:'I want coffee',tr:'ቡና እፈልጋለሁ',pr:'buna efelgalehu',morph:['ቡና = coffee','እፈልጋለሁ = I want']},
        {t:'chal',en:'I want water',tr:'ውሃ እፈልጋለሁ',pr:'wiha efelgalehu',morph:['ውሃ = water','እፈልጋለሁ = I want']},
        {t:'say',text:'The verb <span class="inline-tr">መጠጣት</span> is "to drink". Order what you want with <span class="inline-tr">እፈልጋለሁ</span> and the drink.',tr:'መጠጣት'},
        {t:'chal',en:'I want water, please',tr:'ውሃ እፈልጋለሁ፣ እባክህ',pr:'wiha efelgalehu, ebakeh',morph:['ውሃ = water','እፈልጋለሁ = I want','እባክህ = please']}
      ],
      blocks:['<code>እፈልጋለሁ</code> = I want','<code>ቡና</code> / <code>ውሃ</code> = coffee / water','<code>እባክህ / እባክዎ</code> = please (familiar / formal)'] },
    { id:4, title:'Food & drink', focus:'ቡና · ውሃ · ሻይ · ብር',
      steps:[
        {t:'say',text:'The staples: <span class="inline-tr">ቡና</span> (buna, coffee), <span class="inline-tr">ውሃ</span> (wiha, water), <span class="inline-tr">ሻይ</span> (shay, tea).',tr:'ቡና'},
        {t:'words',items:[{tr:'ቡና',pr:'buna',en:'coffee',link:'≈ coffee — named for the Kaffa region, where the bean was born'},{tr:'ውሃ',pr:'wiha',en:'water'},{tr:'ሻይ',pr:'shay',en:'tea',link:'≈ chai (from Arabic, via Chinese)'},{tr:'ብር',pr:'birr',en:'money / the birr (currency)'},{tr:'ካፌ',pr:'kafe',en:'café',link:'≈ café'}]},
        {t:'chal',en:'Water and tea, please',tr:'ውሃ እና ሻይ፣ እባክህ',pr:'wiha ena shay, ebakeh',morph:['ውሃ = water','እና = and','ሻይ = tea']},
        {t:'chal',en:'I want coffee',tr:'ቡና እፈልጋለሁ',pr:'buna efelgalehu',morph:['ቡና = coffee','እፈልጋለሁ = I want']},
        {t:'say',text:'<span class="inline-tr">ጣፋጭ ነው</span> = it\'s delicious. Say it and you\'ll make the cook\'s day.',tr:'ጣፋጭ ነው'},
        {t:'chal',en:'It\'s delicious!',tr:'ጣፋጭ ነው!',pr:'tafatch new!',morph:['ጣፋጭ = tasty / sweet','ነው = is']}
      ],
      blocks:['<code>ቡና</code> = coffee · <code>ውሃ</code> = water · <code>ሻይ</code> = tea','<code>እፈልጋለሁ</code> = I want','<code>ጣፋጭ ነው</code> = it\'s delicious'] },
    { id:5, title:'Getting around', focus:'የት ነው? · ወደ ቀኝ · ወደ ግራ · ፊት ለፊት',
      steps:[
        {t:'say',text:'The most useful question in any city: <span class="inline-tr">የት ነው…?</span> — where is…?',tr:'የት ነው?'},
        {t:'words',items:[{tr:'የት ነው?',pr:'yet new?',en:'Where is...?'},{tr:'ወደ ቀኝ',pr:'wede keñ',en:'to the right'},{tr:'ወደ ግራ',pr:'wede gira',en:'to the left'},{tr:'ፊት ለፊት',pr:'fit lefit',en:'straight ahead'},{tr:'መቆሚያ',pr:'mekomiya',en:'the bus stop'}]},
        {t:'chal',en:'Where is the bus stop?',tr:'መቆሚያው የት ነው?',pr:'mekomiyaw yet new?',morph:['መቆሚያው = the bus stop','የት ነው? = where is it?']},
        {t:'chal',en:'Where is the bathroom?',tr:'መጸዳጃ ቤቱ የት ነው?',pr:'metsejaja betu yet new?',morph:['መጸዳጃ ቤት = bathroom','የት ነው? = where is it?']},
        {t:'say',text:'<span class="inline-tr">ወደ ቀኝ</span> = to the right, <span class="inline-tr">ወደ ግራ</span> = to the left. "Straight ahead" is <span class="inline-tr">ፊት ለፊት</span>.',tr:'ወደ ቀኝ'},
        {t:'chal',en:'Where is the café?',tr:'ካፌው የት ነው?',pr:'kafew yet new?',morph:['ካፌው = the café','የት ነው? = where is it?']}
      ],
      blocks:['<code>የት ነው…?</code> = where is…?','<code>ወደ ቀኝ</code> / <code>ወደ ግራ</code> = right / left'] },
    { id:6, title:'Questions & "do you have…?"', focus:'አለህ? · አለ? · አለኝ',
      steps:[
        {t:'say',text:'To ask if someone has something: <span class="inline-tr">አለህ?</span> (to a man) or <span class="inline-tr">አለሽ?</span> (to a woman).',tr:'አለህ?'},
        {t:'chal',en:'Do you have a table?',tr:'ጠረጴዛ አለህ?',pr:'terapeza aleh?',morph:['ጠረጴዛ = table','አለህ? = do you have?']},
        {t:'say',text:'<span class="inline-tr">አለ?</span> = is there…? Very useful. The reply <span class="inline-tr">አለኝ</span> = I have.',tr:'አለ?'},
        {t:'chal',en:'Is there water?',tr:'ውሃ አለ?',pr:'wiha ale?',morph:['ውሃ = water','አለ? = is there?']},
        {t:'say',text:'For a polite request, <span class="inline-tr">ል…?</span> = may I…? (literally "let me…").',tr:'ልከፍል?'},
        {t:'chal',en:'May I pay?',tr:'ልከፍል?',pr:'likefel?',morph:['ልከፍል? = may I pay?']}
      ],
      blocks:['<code>አለህ…?</code> = do you have…?','<code>አለ…?</code> = is there…?','<code>አለኝ</code> = I have'] },
    { id:7, title:'Family & people', focus:'ቤተሰብ · እናት · አባት · ጓደኛ',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">ቤተሰብ</span> (family), <span class="inline-tr">እናት</span> (mother), <span class="inline-tr">አባት</span> (father).',tr:'ቤተሰብ'},
        {t:'words',items:[{tr:'ቤተሰብ',pr:'beteseb',en:'family'},{tr:'እናት',pr:'enat',en:'mother'},{tr:'አባት',pr:'abat',en:'father'},{tr:'ወንድም',pr:'wendim',en:'brother'},{tr:'እህት',pr:'eht',en:'sister'},{tr:'ጓደኛ',pr:'gwadeña',en:'friend'}]},
        {t:'chal',en:'I have a brother',tr:'ወንድም አለኝ',pr:'wendim alegn',morph:['ወንድም = brother','አለኝ = I have']},
        {t:'say',text:'<span class="inline-tr">አለኝ</span> = I have. It\'s the key verb to say what you\'ve got.',tr:'አለኝ'},
        {t:'chal',en:'I have a family',tr:'ቤተሰብ አለኝ',pr:'beteseb alegn',morph:['ቤተሰብ = family','አለኝ = I have']}
      ],
      blocks:['<code>እናት</code> / <code>አባት</code> = mother / father','<code>ቤተሰብ</code> = family','<code>ጓደኛ</code> = friend · <code>አለኝ</code> = I have'] },
    { id:8, title:'Time, days & weather', focus:'ዛሬ · ነገ · አየሩ · ሰኞ',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">ዛሬ</span>, tomorrow is <span class="inline-tr">ነገ</span>.',tr:'ዛሬ'},
        {t:'words',items:[{tr:'ዛሬ',pr:'zare',en:'today'},{tr:'ነገ',pr:'nege',en:'tomorrow'},{tr:'ትናንት',pr:'tinant',en:'yesterday'},{tr:'ሰኞ',pr:'senyo',en:'Monday'},{tr:'አየሩ እንዴት ነው?',pr:'ayeru endet new?',en:'how\'s the weather?'}]},
        {t:'chal',en:'See you tomorrow',tr:'ነገ ደህና ሁን',pr:'nege dehna hun',morph:['ነገ = tomorrow','ደህና ሁን = be well (goodbye)']},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">አየሩ እንዴት ነው?</span>',tr:'አየሩ እንዴት ነው?'},
        {t:'chal',en:'It\'s raining',tr:'ዝናብ ነው',pr:'znab new',morph:['ዝናብ = rain','ነው = is']}
      ],
      blocks:['<code>ዛሬ</code> / <code>ነገ</code> = today / tomorrow','<code>አየሩ እንዴት ነው?</code> = how\'s the weather?'] },
    { id:9, title:'Small talk & your name', focus:'ስሜ … ነው · ደስ ብሎኛል',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">ስሜ __NAME__ ነው</span> — my name is __NAME__.',tr:'ስሜ __NAME__ ነው'},
        {t:'chal',en:'My name is __NAME__',tr:'ስሜ __NAME__ ነው',pr:'sme __NAME__ new',morph:['ስሜ = my name','ነው = is','__NAME__ = your name']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">ስምህ ማን ነው?</span> (to a man) or <span class="inline-tr">ስምሽ ማን ነው?</span> (to a woman).',tr:'ስምህ ማን ነው?'},
        {t:'chal',en:'What\'s your name?',tr:'ስምህ ማን ነው?',pr:'smih man new?',morph:['ስምህ = your name','ማን = who','ነው? = is it?']},
        {t:'chal',en:'Pleased to meet you',tr:'ደስ ብሎኛል',pr:'des biloñal',morph:['ደስ ብሎኛል = I\'m pleased (to meet you)']}
      ],
      blocks:['<code>ስሜ __NAME__ ነው</code> = my name is…','<code>ስምህ ማን ነው?</code> = what\'s your name?','<code>ደስ ብሎኛል</code> = pleased to meet you'] },
    { id:10, title:'Health & emergency', focus:'እገዛ! · ሐኪም · ፋርማሲ · አልገባኝም',
      steps:[
        {t:'say',text:'The most important words if you need help: <span class="inline-tr">እገዛ!</span> (help), <span class="inline-tr">ሐኪም</span> (doctor), <span class="inline-tr">ፋርማሲ</span> (pharmacy).',tr:'እገዛ!'},
        {t:'words',items:[{tr:'እገዛ!',pr:'egza!',en:'Help!'},{tr:'ሐኪም',pr:'hakim',en:'the doctor',link:'≈ Arabic ḥakīm = doctor'},{tr:'ፋርማሲ',pr:'farmasi',en:'the pharmacy',link:'≈ English pharmacy'},{tr:'ሆስፒታል',pr:'hospital',en:'hospital',link:'≈ hospital'},{tr:'አልገባኝም',pr:'algebagnim',en:'I don\'t understand'}]},
        {t:'chal',en:'Help!',tr:'እገዛ!',pr:'egza!',morph:['እገዛ = help']},
        {t:'chal',en:'I don\'t understand',tr:'አልገባኝም',pr:'algebagnim',morph:['አልገባኝም = I don\'t understand']},
        {t:'say',text:'To say you need help: <span class="inline-tr">እርዳታ እፈልጋለሁ</span> — I need help.',tr:'እርዳታ እፈልጋለሁ'},
        {t:'chal',en:'I need help',tr:'እርዳታ እፈልጋለሁ',pr:'irdata efelgalehu',morph:['እርዳታ = help / aid','እፈልጋለሁ = I want']}
      ],
      blocks:['<code>እገዛ!</code> = help!','<code>ሐኪም</code> / <code>ፋርማሲ</code> = doctor / pharmacy','<code>አልገባኝም</code> = I don\'t understand'] },
    { id:11, title:'Describing things', focus:'ጥሩ · ትልቅ · ትንሽ · በጣም',
      steps:[
        {t:'say',text:'Adjectives are easy: <span class="inline-tr">ጥሩ</span> (good / beautiful), <span class="inline-tr">ትልቅ</span> (big), <span class="inline-tr">ትንሽ</span> (small).',tr:'ጥሩ'},
        {t:'words',items:[{tr:'ጥሩ',pr:'tiru',en:'good / beautiful'},{tr:'ትልቅ',pr:'tilik',en:'big'},{tr:'ትንሽ',pr:'tinish',en:'small / little'},{tr:'ውብ',pr:'wub',en:'beautiful'},{tr:'በጣም',pr:'betam',en:'very / a lot'}]},
        {t:'chal',en:'Very good',tr:'በጣም ጥሩ',pr:'betam tiru',morph:['በጣም = very','ጥሩ = good']},
        {t:'chal',en:'A big coffee',tr:'ትልቅ ቡና',pr:'tilik buna',morph:['ትልቅ = big','ቡና = coffee']}
      ],
      blocks:['<code>ጥሩ</code> = good','<code>ትልቅ</code> / <code>ትንሽ</code> = big / small','<code>በጣም</code> = very'] },
    { id:12, title:'Tying it together', focus:'እፈልጋለሁ · የት ነው? · ስንት ነው? · ሰላም',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolbox. This capstone uses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello, how are you?',tr:'ሰላም፣ እንደምን አለህ?',pr:'selam, endemin aleh?',morph:['ሰላም = hi','እንደምን አለህ? = how are you?']},
        {t:'chal',en:'I\'d like water, please',tr:'ውሃ እፈልጋለሁ፣ እባክህ',pr:'wiha efelgalehu, ebakeh',morph:['ውሃ = water','እፈልጋለሁ = I want','እባክህ = please']},
        {t:'chal',en:'Where is the café?',tr:'ካፌው የት ነው?',pr:'kafew yet new?',morph:['ካፌው = the café','የት ነው? = where is it?']},
        {t:'chal',en:'How much is it?',tr:'ስንት ነው?',pr:'sint new?',morph:['ስንት ነው? = how much is it?']},
        {t:'chal',en:'Delicious! Thank you!',tr:'ጣፋጭ ነው! አመሰግናለሁ!',pr:'tafatch new! ameseginalehu!',morph:['ጣፋጭ ነው = delicious','አመሰግናለሁ = thank you']}
      ],
      blocks:['You built: greetings, ordering, directions, prices, thanks — a full day out in Amharic.'] },
    { id:13, title:'Airport & tickets', focus:'አየር ማረፊያ · ፓስፖርት · ትኬት · በረራ',
      steps:[
        {t:'say',text:'You have landed in Addis Ababa. The building is the <span class="inline-tr">አየር ማረፊያ</span>. Your document is a <span class="inline-tr">ፓስፖርት</span>.',tr:'አየር ማረፊያ'},
        {t:'words',items:[{tr:'አየር ማረፊያ',pr:'ayer marefiya',en:'the airport'},{tr:'ፓስፖርት',pr:'pasport',en:'the passport'},{tr:'ትኬት',pr:'ticket',en:'the ticket'},{tr:'በረራ',pr:'berera',en:'the flight'},{tr:'ጌት',pr:'get',en:'the gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'አየር ማረፊያው የት ነው?',pr:'ayer marefiyaw yet new?',morph:['አየር ማረፊያው = the airport','የት ነው? = where is it?']},
        {t:'chal',en:'Here is my passport',tr:'ፓስፖርቴ እነሆ',pr:'pasporte eneha',morph:['ፓስፖርቴ = my passport','እነሆ = here it is']},
        {t:'chal',en:'A ticket, please',tr:'አንድ ትኬት፣ እባክዎ',pr:'and ticket, ebakwo',morph:['አንድ ትኬት = one ticket','እባክዎ = please (formal)']},
        {t:'chal',en:'Where is the gate?',tr:'ጌቱ የት ነው?',pr:'getu yet new?',morph:['ጌቱ = the gate','የት ነው? = where is it?']}
      ],
      blocks:['<code>አየር ማረፊያ</code> = airport','<code>ፓስፖርት</code> = passport','<code>ትኬት</code> = ticket'] },
    { id:14, title:'The taxi', focus:'ታክሲ · መሄድ · ሆቴል · እዚህ ቁም',
      steps:[
        {t:'say',text:'The driver is waiting. Amharic is SOV: <span class="inline-tr">ወደ ሆቴሉ መሄድ እፈልጋለሁ</span> — to the hotel to-go I-want. Use formal <span class="inline-tr">እባክዎ</span> with drivers.',tr:'ታክሲ'},
        {t:'words',items:[{tr:'ታክሲ',pr:'taksi',en:'the taxi'},{tr:'ሹፌር',pr:'shufer',en:'the driver'},{tr:'መሄድ እፈልጋለሁ',pr:'mehed efelgalehu',en:'I want to go'},{tr:'እዚህ ቁም',pr:'izih kum',en:'stop here'}]},
        {t:'chal',en:'A taxi, please',tr:'ታክሲ፣ እባክዎ',pr:'taksi, ebakwo',morph:['ታክሲ = taxi','እባክዎ = please (formal)']},
        {t:'chal',en:'I want to go to the hotel',tr:'ወደ ሆቴሉ መሄድ እፈልጋለሁ',pr:'wede hotelu mehed efelgalehu',morph:['ወደ ሆቴሉ = to the hotel','መሄድ እፈልጋለሁ = I want to go']},
        {t:'chal',en:'Stop here, please',tr:'እዚህ ቁም፣ እባክዎ',pr:'izih kum, ebakwo',morph:['እዚህ ቁም = stop here','እባክዎ = please (formal)']},
        {t:'chal',en:'How much is it?',tr:'ስንት ነው?',pr:'sint new?',morph:['ስንት = how much','ነው? = is it?']}
      ],
      blocks:['<code>ወደ … መሄድ እፈልጋለሁ</code> = I want to go to …','<code>እዚህ ቁም</code> = stop here'] },
    { id:15, title:'The hotel', focus:'ቦታ · ክፍል · ቁልፍ · ሌሊት',
      steps:[
        {t:'say',text:'At the desk in Addis: <span class="inline-tr">ቦታ አለኝ</span> — I have a reservation.',tr:'ቦታ አለኝ'},
        {t:'words',items:[{tr:'ሆቴል',pr:'hotel',en:'the hotel'},{tr:'ቦታ',pr:'bota',en:'a reservation'},{tr:'ክፍል',pr:'kifil',en:'the room'},{tr:'ቁልፍ',pr:'kulf',en:'the key'},{tr:'አንድ ሌሊት',pr:'and lelit',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'ቦታ አለኝ',pr:'bota alegn',morph:['ቦታ = a reservation','አለኝ = I have']},
        {t:'chal',en:'A room for one night, please',tr:'ለአንድ ሌሊት ክፍል፣ እባክዎ',pr:'le-and lelit kifil, ebakwo',morph:['ለአንድ ሌሊት = for one night','ክፍል = a room','እባክዎ = please']},
        {t:'chal',en:'The key, please',tr:'ቁልፉን፣ እባክዎ',pr:'kulfun, ebakwo',morph:['ቁልፉን = the key','እባክዎ = please']},
        {t:'chal',en:'Where is my room?',tr:'ክፍሌ የት ነው?',pr:'kifle yet new?',morph:['ክፍሌ = my room','የት ነው? = where is it?']}
      ],
      blocks:['<code>ቦታ አለኝ</code> = I have a reservation','<code>ክፍል</code> = room','<code>ቁልፍ</code> = key'] },
    { id:16, title:'Ask for help', focus:'አልገባኝም · ቀስ በሉ · እንግሊዝኛ',
      steps:[
        {t:'say',text:'When Amharic is too fast: <span class="inline-tr">ቀስ በሉ፣ እባክዎ</span> — slower, please (formal).',tr:'ቀስ በሉ'},
        {t:'words',items:[{tr:'ቀስ በሉ',pr:'kes belu',en:'slower (formal)'},{tr:'እንደገና',pr:'endegena',en:'again'},{tr:'እንግሊዝኛ',pr:'inglizigna',en:'English'},{tr:'ሊረዱኝ ይችላሉ?',pr:'liredugn yichlalu?',en:'can you help me? (formal)'}]},
        {t:'chal',en:'I don\'t understand',tr:'አልገባኝም',pr:'algebagnim',morph:['አል = not','ገባኝም = I understood']},
        {t:'chal',en:'Slower, please',tr:'ቀስ በሉ፣ እባክዎ',pr:'kes belu, ebakwo',morph:['ቀስ በሉ = slower (formal)','እባክዎ = please']},
        {t:'chal',en:'Can you help me?',tr:'ሊረዱኝ ይችላሉ?',pr:'liredugn yichlalu?',morph:['ሊረዱኝ = to help me','ይችላሉ? = can you? (formal)']},
        {t:'chal',en:'Do you speak English?',tr:'እንግሊዝኛ ይናገራሉ?',pr:'inglizigna yinageralu?',morph:['እንግሊዝኛ = English','ይናገራሉ? = do you speak? (formal)']}
      ],
      blocks:['<code>ቀስ በሉ</code> = slower (formal)','<code>እንግሊዝኛ ይናገራሉ?</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'cafe', title:'☕ At a café', emoji:'☕', turns:[
      {who:'You',tr:'ሰላም! አንድ ቡና፣ እባክህ.',pr:'selam! and buna, ebakeh.',en:'Hello! A coffee, please.'},
      {who:'Server',tr:'እዚህ ትጠጣለህ ወይስ ትወስዳለህ?',pr:'izih tetatalah wides tiwesdalah?',en:'For here or to go?'},
      {who:'You',tr:'እዚህ እጠጣለሁ፣ አመሰግናለሁ.',pr:'izih ettatalhu, ameseginalehu.',en:'I\'ll drink it here, thank you.'},
      {who:'Server',tr:'እነሆ. አምስት ብር ነው.',pr:'eneha. amist birr new.',en:'Here. That\'s five birr.'},
      {who:'You',tr:'አመሰግናለሁ በጣም!',pr:'ameseginalehu betam!',en:'Thank you very much!'}
    ]},
    { id:'taxi', title:'🚖 At the taxi stand', emoji:'🚖', turns:[
      {who:'You',tr:'ይቅርታ፣ ታክሲ አለ?',pr:'yikirta, taksi ale?',en:'Excuse me, is there a taxi?'},
      {who:'Local',tr:'አዎ፣ እዚያ ይቁማል.',pr:'awo, iziya yikomal.',en:'Yes, one stops there.'},
      {who:'You',tr:'ወደ ሆቴሉ መሄድ እፈልጋለሁ. ስንት ነው?',pr:'wede hotelu mehed efelgalehu. sint new?',en:'I want to go to the hotel. How much is it?'},
      {who:'Driver',tr:'መቶ ብር ነው.',pr:'meto birr new.',en:'One hundred birr.'},
      {who:'You',tr:'እሺ፣ እንሂድ.',pr:'ishi, enhid.',en:'OK, let\'s go.'}
    ]},
    { id:'restaurant', title:'🍛 At a restaurant', emoji:'🍛', turns:[
      {who:'Waiter',tr:'እንኳን ደህና መጡ! ጠረጴዛ ይፈልጋሉ?',pr:'enkuan dehna metu! terapeza yifelgalu?',en:'Welcome! Would you like a table?'},
      {who:'You',tr:'አዎ፣ ለሁለት ሰዎች.',pr:'awo, lehulet sewoch.',en:'Yes, for two people.'},
      {who:'You',tr:'ምናሌውን፣ እባክህ.',pr:'minalew, ebakeh.',en:'The menu, please.'},
      {who:'You',tr:'እንጀራ እና ክትፎ እፈልጋለሁ.',pr:'injera ena kitfo efelgalehu.',en:'I\'d like injera and kitfo.'},
      {who:'Waiter',tr:'ጥሩ ምርጫ! ደህና ምግብ.',pr:'tiru mircha! dehna migb.',en:'Good choice! Enjoy your meal.'}
    ]},
    { id:'market', title:'🧺 At the market', emoji:'🧺', turns:[
      {who:'You',tr:'ይህ ስንት ነው?',pr:'yih sint new?',en:'How much is this?'},
      {who:'Seller',tr:'ሃምሳ ብር ነው.',pr:'hamsa birr new.',en:'Fifty birr.'},
      {who:'You',tr:'በጣም ውድ ነው. አስር ብር ይሁን?',pr:'betam wod new. asir birr yihun?',en:'It\'s too expensive. Can it be ten birr?'},
      {who:'Seller',tr:'ሃያ ብር ይሁን.',pr:'haya birr yihun.',en:'Let it be twenty birr.'},
      {who:'You',tr:'እሺ፣ እወስደዋለሁ.',pr:'ishi, iwesedewalhu.',en:'OK, I\'ll take it.'}
    ]}
  ],
  pocket: [
    {tr:'ሰላም',pr:'selam',en:'Hello',c:'Greetings'},
    {tr:'ታደርስ?',pr:'tadese',en:'Good morning',c:'Greetings'},
    {tr:'እንደምን አለህ?',pr:'endemin aleh',en:'How are you?',c:'Greetings'},
    {tr:'ደህና ነኝ',pr:'dehna neñ',en:'I\'m fine',c:'Greetings'},
    {tr:'ስሜ __NAME__ ነው',pr:'sme __NAME__ new',en:'My name is...',c:'Greetings'},
    {tr:'እባክህ',pr:'ebakeh',en:'Please',c:'Courtesy'},
    {tr:'አመሰግናለሁ',pr:'ameseginalehu',en:'Thank you',c:'Courtesy'},
    {tr:'አመሰግናለሁ በጣም',pr:'ameseginalehu betam',en:'Thanks a lot',c:'Courtesy'},
    {tr:'ይቅርታ',pr:'yikirta',en:'Sorry / excuse me',c:'Courtesy'},
    {tr:'አዎ',pr:'awo',en:'Yes',c:'Courtesy'},
    {tr:'አይ',pr:'ay',en:'No',c:'Courtesy'},
    {tr:'አንድ',pr:'and',en:'1',c:'Numbers'},
    {tr:'ሁለት',pr:'hulet',en:'2',c:'Numbers'},
    {tr:'ሶስት',pr:'sost',en:'3',c:'Numbers'},
    {tr:'አራት',pr:'arat',en:'4',c:'Numbers'},
    {tr:'አምስት',pr:'amist',en:'5',c:'Numbers'},
    {tr:'አስር',pr:'asir',en:'10',c:'Numbers'},
    {tr:'ቡና',pr:'buna',en:'coffee',c:'Food'},
    {tr:'ውሃ',pr:'wiha',en:'water',c:'Food'},
    {tr:'ሻይ',pr:'shay',en:'tea',c:'Food'},
    {tr:'እንጀራ',pr:'injera',en:'injera (flatbread)',c:'Food'},
    {tr:'ብር',pr:'birr',en:'money / birr',c:'Food'},
    {tr:'የት ነው?',pr:'yet new',en:'Where is...?',c:'Directions'},
    {tr:'ወደ ቀኝ',pr:'wede keñ',en:'to the right',c:'Directions'},
    {tr:'ወደ ግራ',pr:'wede gira',en:'to the left',c:'Directions'},
    {tr:'መቆሚያ',pr:'mekomiya',en:'the bus stop',c:'Directions'},
    {tr:'ፊት ለፊት',pr:'fit lefit',en:'straight ahead',c:'Directions'},
    {tr:'ስንት ነው?',pr:'sint new',en:'how much is it?',c:'Shopping'},
    {tr:'በጣም ውድ ነው',pr:'betam wod new',en:'it\'s too expensive',c:'Shopping'},
    {tr:'እወስደዋለሁ',pr:'iwesedewalhu',en:'I\'ll take it',c:'Shopping'},
    {tr:'እገዛ!',pr:'egza!',en:'Help!',c:'Emergency'},
    {tr:'አልገባኝም',pr:'algebagnim',en:'I don\'t understand',c:'Emergency'},
    {tr:'እርዳታ እፈልጋለሁ',pr:'irdata efelgalehu',en:'I need help',c:'Emergency'},
    {tr:'መጸዳጃ ቤት',pr:'metsejaja bet',en:'the bathroom',c:'Emergency'},
    {tr:'ዛሬ',pr:'zare',en:'today',c:'Time'},
    {tr:'ነገ',pr:'nege',en:'tomorrow',c:'Time'},
    {tr:'ትናንት',pr:'tinant',en:'yesterday',c:'Time'},
    {tr:'አየር ማረፊያ',pr:'ayer marefiya',en:'airport',c:'Travel'},
    {tr:'ታክሲ',pr:'taksi',en:'taxi',c:'Travel'},
    {tr:'ሆቴል',pr:'hotel',en:'hotel',c:'Travel'},
    {tr:'እባክዎ',pr:'ebakwo',en:'please (formal)',c:'Travel'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Shopping','Emergency','Time','Travel'],
  culture: [
    {icon:'☕',title:'Coffee is a ceremony',body:'Ethiopia is the birthplace of coffee. The coffee ceremony roasts fresh beans, grinds them by hand, and brews them three times in a clay pot (jebena). You\'ll be served three rounds — abol, tona and baraka. Accepting at least one cup is a sign of friendship and respect.'},
    {icon:'🥘',title:'Injera, the national bread',body:'Injera is the spongy sourdough flatbread eaten with almost every meal. It\'s made from tef, a tiny gluten-free grain. It\'s both the plate and the fork — you tear off a piece of injera to scoop up the stews and sauces on top.'},
    {icon:'✝️',title:'Orthodox Christianity',body:'Ethiopia is home to one of the world\'s oldest Christian churches. Orthodox fasting — abstaining from meat and dairy on many days — shapes much of the food you\'ll find, especially in coffee shops and on festival days like Timkat.'},
    {icon:'🤝',title:'Gorsha, the honor of feeding',body:'Feeding a guest by hand is called gorsha (ጎርሻ). A host will often pop a delicious bite right into your mouth as a sign of deep affection. If you feel brave, return the honor — it\'s a warm and playful compliment.'},
    {icon:'📅',title:'The Ge\'ez calendar',body:'Ethiopia uses its own Ge\'ez calendar with 13 months — about 7 years behind the Gregorian one. Time is also counted differently: the day starts at 6am, so what\'s 7am in your watch is "1 o\'clock" in Ethiopian time.'},
    {icon:'🗣️',title:'A little Amharic goes far',body:'A \'ሰላም\' (selam) and an \'አመሰግናለሁ\' (ameseginalehu) open every door. Ethiopians light up when visitors try — effort matters far more than perfection.'}
  ],
  sounds: [
    {l:'ጠ',say:'an ejective "t" — a sharp t pushed out with a small catch in the throat',ex:'ጠበላ = tebela (he waited)',voice:'ጠ'},
    {l:'ጨ',say:'an ejective "ch" — like church but grabbed at the throat',ex:'ጨው = chew (salt)',voice:'ጨ'},
    {l:'ፀ',say:'an ejective "ts" — a sharp ts with a catch',ex:'ፀሀይ = tsehay (sun)',voice:'ፀ'},
    {l:'ቀ',say:'an ejective "k" (q) — a hard k popped deep from the throat',ex:'ቀን = qen (day)',voice:'ቀን'},
    {l:'ሀ',say:'plain "h" as in hat',ex:'ሀገር = hager (country)',voice:'ሀገር'},
    {l:'አ (ä)',say:'the base "a" vowel — the first of the seven vowel orders',ex:'ላ = la (a cow / milk)',voice:'ላ'},
    {l:'በ–ቦ',say:'one consonant carries seven vowel orders: በ (bä) ቡ (bu) ቢ (bi) ባ (ba) ቤ (be) ብ (bə) ቦ (bo)',ex:'ቤት = bet (house)',voice:'ቤት'},
    {l:'ኦ (o)',say:'the long "o" vowel, as in go',ex:'ቡና = buna (coffee)',voice:'ቡና'}
  ],
  resources: [
    {icon:'🗣️',t:'Amharic for beginners',d:'Clear, step-by-step beginner lessons from a native speaker — greetings, numbers and everyday phrases.',q:'Amharic for beginners lessons'},
    {icon:'💬',t:'Everyday Amharic phrases',d:'Real phrases for travel, cafés and markets with native audio and subtitles.',q:'common Amharic phrases for travelers'},
    {icon:'🎧',t:'Amharic conversation practice',d:'Slow, clear dialogues for listening — ideal for a walk or commute.',q:'slow Amharic conversation for learners'},
    {icon:'📚',t:'Amharic alphabet (fidel)',d:'Learn the Ge\'ez / fidel script and the seven vowel orders step by step.',q:'Amharic alphabet fidel for beginners'},
    {icon:'🎶',t:'Amharic music with lyrics',d:'Learn through Ethiopian songs with subtitles — catchy and memorable.',q:'Ethiopian Amharic songs with lyrics'}
  ]
};
