/* ---- malayalam ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["malayalam"] = {
  name: 'Malayalam',
  flag: '🇮🇳',
  tts: 'ml-IN',
  dir: 'ltr',
  native: 'മലയാളം',
  soundTitle: 'Malayalam sounds & letters',
  soundIntro: 'Malayalam has a beautiful rounded script and a few sounds English does not have. Master the "zha", the retroflex "l" and the chillu letters and you can sound out almost any word.',
  grammar: '<p>Malayalam is an agglutinative language — you build new words by stacking small "chunks" (suffixes) onto a root, so a single long word can carry a lot of meaning. There are no articles: <b>വെള്ളം</b> means both "water" and "the water". The word order is Subject–Object–Verb: <b>എനിക്ക് ചായ വേണം</b> is literally "to-me tea is-needed" = "I want tea".</p>',
  bridges: '<div class="note">🇮🇳 <b>Dravidian, not Indo-European.</b> Malayalam is a Dravidian language — a cousin of Tamil, Kannada and Telugu, and unrelated to Hindi or Sanskrit. It shares an ancient vocabulary with Tamil; a little Tamil makes lots of Malayalam feel familiar.</div><div class="note">💬 <b>Words you already know.</b> Malayalam borrows freely from English: <i>ഡോക്ടർ</i> (doctor), <i>ബസ്</i> (bus), <i>കാപ്പി</i> (coffee), <i>ടായിം</i>... and <i>ചായ</i> (chaaya, tea) is the same family as "chai" and "tea".</div>',
  lessons: [
    { id:1, title:'Greetings', focus:'നമസ്കാരം · സുഖമാണോ · വിട',
      steps:[
        {t:'say',text:'Start with the word that opens every conversation in Kerala: <span class="inline-tr">നമസ്കാരം</span> — a traditional hello, often said with palms together. Say it out loud.',tr:'നമസ്കാരം'},
        {t:'words',items:[{tr:'നമസ്കാരം',pr:'NAH-mus-kuh-rum',en:'hello / greetings'},{tr:'സുഖമാണോ?',pr:'soo-kuh-MAA-noh',en:'How are you?'},{tr:'സുഖമാണ്',pr:'soo-kuh-MAAN',en:'I\'m well'},{tr:'വിട',pr:'vee-duh',en:'goodbye'},{tr:'പിന്നീട് കാണാം',pr:'pin-NEE-du KAAN-um',en:'see you later'}]},
        {t:'chal',en:'Hello, thank you',tr:'നമസ്കാരം, നന്ദി',pr:'NAH-mus-kuh-rum, NUN-dee',morph:['നമസ്കാരം = hello','നന്ദി = thank you']},
        {t:'say',text:'Ask how someone is with <span class="inline-tr">സുഖമാണോ?</span> The reply is <span class="inline-tr">സുഖമാണ്</span> — I\'m well.',tr:'സുഖമാണോ?'},
        {t:'chal',en:'Hello, how are you?',tr:'നമസ്കാരം, സുഖമാണോ?',pr:'NAH-mus-kuh-rum, soo-kuh-MAA-noh',morph:['നമസ്കാരം = hello','സുഖമാണോ? = how are you?']},
        {t:'say',text:'To say goodbye, <span class="inline-tr">വിട</span> works, but Keralites often say <span class="inline-tr">പിന്നീട് കാണാം</span> — "see you later."',tr:'വിട'}
      ],
      blocks:['<code>നമസ്കാരം</code> = hello','<code>സുഖമാണോ?</code> = how are you? · <code>സുഖമാണ്</code> = I\'m well','<code>വിട</code> = goodbye'] },
    { id:2, title:'Politeness & courtesy', focus:'നന്ദി · ദയവായി · ക്ഷമിക്കണം',
      steps:[
        {t:'say',text:'The most useful word in any language is <span class="inline-tr">നന്ദി</span> — thank you.',tr:'നന്ദി'},
        {t:'words',items:[{tr:'നന്ദി',pr:'NUN-dee',en:'thank you'},{tr:'വളരെ നന്ദി',pr:'vuh-LUH-reh NUN-dee',en:'thank you very much'},{tr:'ദയവായി',pr:'duh-yuh-VAA-yee',en:'please'},{tr:'ക്ഷമിക്കണം',pr:'kshuh-mik-KUH-num',en:'sorry / excuse me'},{tr:'ഒന്നുമില്ല',pr:'on-noo-MIL-luh',en:'you\'re welcome (it\'s nothing)'}]},
        {t:'chal',en:'Yes, please',tr:'അതെ, ദയവായി',pr:'uh-teh, duh-yuh-VAA-yee',morph:['അതെ = yes','ദയവായി = please']},
        {t:'say',text:'For "sorry" or "excuse me", use <span class="inline-tr">ക്ഷമിക്കണം</span>. It literally asks for forgiveness.',tr:'ക്ഷമിക്കണം'},
        {t:'chal',en:'Thank you very much',tr:'വളരെ നന്ദി',pr:'vuh-LUH-reh NUN-dee',morph:['വളരെ = very','നന്ദി = thank you']},
        {t:'words',items:[{tr:'അതെ',pr:'uh-teh',en:'yes'},{tr:'അല്ല',pr:'uhl-luh',en:'no'}]}
      ],
      blocks:['<code>നന്ദി</code> = thank you','<code>ദയവായി</code> = please','<code>ക്ഷമിക്കണം</code> = sorry','<code>അതെ / അല്ല</code> = yes / no'] },
    { id:3, title:'Numbers 1–10', focus:'ഒന്ന് · രണ്ട് · മൂന്ന് · പത്ത്',
      steps:[
        {t:'say',text:'Numbers are a fast win. Listen and repeat: <span class="inline-tr">ഒന്ന്, രണ്ട്, മൂന്ന്</span>.',tr:'ഒന്ന്'},
        {t:'words',items:[{tr:'ഒന്ന്',pr:'ON-noo',en:'1'},{tr:'രണ്ട്',pr:'RUN-du',en:'2'},{tr:'മൂന്ന്',pr:'MOON-noo',en:'3'},{tr:'നാല്',pr:'NAA-loo',en:'4'},{tr:'അഞ്ച്',pr:'UN-choo',en:'5'},{tr:'പത്ത്',pr:'PUN-tu',en:'10'}]},
        {t:'chal',en:'Three teas, please',tr:'മൂന്ന് ചായ, ദയവായി',pr:'MOON-noo CHAA-yaa, duh-yuh-VAA-yee',morph:['മൂന്ന് = three','ചായ = tea','ദയവായി = please']},
        {t:'say',text:'Carry on up to ten: <span class="inline-tr">ആറ്, ഏഴ്, എട്ട്, ഒൻപത്, പത്ത്</span>.',tr:'പത്ത്'},
        {t:'words',items:[{tr:'ആറ്',pr:'AA-roo',en:'6'},{tr:'ഏഴ്',pr:'EE-zhoo',en:'7'},{tr:'എട്ട്',pr:'ET-too',en:'8'},{tr:'ഒൻപത്',pr:'ON-puh-tu',en:'9'},{tr:'പത്ത്',pr:'PUN-tu',en:'10'}]},
        {t:'chal',en:'It\'s ten rupees',tr:'പത്ത് രൂപ',pr:'PUN-tu ROO-pa',morph:['പത്ത് = ten','രൂപ = rupees']}
      ],
      blocks:['<code>ഒന്ന്, രണ്ട്, മൂന്ന്, നാല്, അഞ്ച്</code> = 1–5','<code>ആറ്, ഏഴ്, എട്ട്, ഒൻപത്, പത്ത്</code> = 6–10'] },
    { id:4, title:'"I want" — എനിക്ക് … വേണം', focus:'എനിക്ക് · വേണം · ഒരു',
      steps:[
        {t:'say',text:'To want something, use <span class="inline-tr">എനിക്ക്</span> (to me) + the thing + <span class="inline-tr">വേണം</span> (is wanted).',tr:'എനിക്ക്'},
        {t:'words',items:[{tr:'എനിക്ക്',pr:'eh-nee-koo',en:'to me / I'},{tr:'വേണം',pr:'veh-num',en:'want / is needed'},{tr:'ഒരു',pr:'OH-roo',en:'a / one'},{tr:'വേണ്ട',pr:'ven-duh',en:'I don\'t want it / no thanks'}]},
        {t:'chal',en:'I want water',tr:'എനിക്ക് വെള്ളം വേണം',pr:'eh-nee-koo VEL-lum veh-num',morph:['എനിക്ക് = to me','വെള്ളം = water','വേണം = want']},
        {t:'say',text:'The order matters: the thing comes before <span class="inline-tr">വേണം</span>. <span class="inline-tr">ഒരു</span> = "a / one", like <b>ഒരു ചായ</b> = a tea.',tr:'ഒരു ചായ'},
        {t:'chal',en:'I don\'t want tea',tr:'എനിക്ക് ചായ വേണ്ട',pr:'eh-nee-koo CHAA-yaa ven-duh',morph:['എനിക്ക് = to me','ചായ = tea','വേണ്ട = don\'t want']},
        {t:'chal',en:'I want a coffee',tr:'എനിക്ക് ഒരു കാപ്പി വേണം',pr:'eh-nee-koo OH-roo KAAP-pee veh-num',morph:['എനിക്ക് = to me','ഒരു = a','കാപ്പി = coffee','വേണം = want']}
      ],
      blocks:['<code>എനിക്ക് … വേണം</code> = I want …','<code>ഒരു</code> = a / one','<code>വേണ്ട</code> = I don\'t want it'] },
    { id:5, title:'Food & drink', focus:'വെള്ളം · ചോറ് · ചായ · കാപ്പി',
      steps:[
        {t:'say',text:'The essentials at any meal: <span class="inline-tr">വെള്ളം</span> (water), <span class="inline-tr">ചോറ്</span> (rice), <span class="inline-tr">ചായ</span> (tea).',tr:'വെള്ളം'},
        {t:'words',items:[{tr:'വെള്ളം',pr:'VEL-lum',en:'water'},{tr:'ചോറ്',pr:'CHOH-ru',en:'rice'},{tr:'ചായ',pr:'CHAA-yaa',en:'tea',link:'≈ the same family as "chai" and "tea"'},{tr:'കാപ്പി',pr:'KAAP-pee',en:'coffee',link:'≈ loan word, like English/Persian coffee'},{tr:'കറി',pr:'kuh-REE',en:'curry'},{tr:'ഭക്ഷണം',pr:'buhk-shuh-num',en:'food',link:'≈ Sanskrit bhaksh = to eat'}]},
        {t:'chal',en:'I want tea',tr:'എനിക്ക് ചായ വേണം',pr:'eh-nee-koo CHAA-yaa veh-num',morph:['എനിക്ക് = to me','ചായ = tea','വേണം = want']},
        {t:'chal',en:'Water and rice, please',tr:'വെള്ളവും ചോറും, ദയവായി',pr:'VEL-luh-vum CHOH-rum, duh-yuh-VAA-yee',morph:['വെള്ളവും = and water','ചോറും = and rice','ദയവായി = please']},
        {t:'say',text:'The classic Kerala meal is <span class="inline-tr">ചോറും കറിയും</span> — rice and curry. Try saying it.',tr:'ചോറും കറിയും'},
        {t:'chal',en:'I want a coffee',tr:'എനിക്ക് ഒരു കാപ്പി വേണം',pr:'eh-nee-koo OH-roo KAAP-pee veh-num',morph:['എനിക്ക് = to me','ഒരു കാപ്പി = a coffee','വേണം = want']}
      ],
      blocks:['<code>വെള്ളം</code>, <code>ചോറ്</code>, <code>ചായ</code>, <code>കാപ്പി</code> = water, rice, tea, coffee','<code>ചോറും കറിയും</code> = rice and curry'] },
    { id:6, title:'Getting around', focus:'എവിടെ · ഇടത് · വലത് · നേരെ',
      steps:[
        {t:'say',text:'The most useful question when you\'re lost: <span class="inline-tr">എവിടെ?</span> — where?',tr:'എവിടെ?'},
        {t:'words',items:[{tr:'എവിടെ?',pr:'eh-vee-teh',en:'Where?'},{tr:'ഇടത്',pr:'ee-duh-tu',en:'left'},{tr:'വലത്',pr:'vuh-luh-tu',en:'right'},{tr:'നേരെ',pr:'neh-reh',en:'straight ahead'},{tr:'ബസ് സ്റ്റോപ്പ്',pr:'bus STA-pu',en:'bus stop',link:'≈ English bus stop'},{tr:'അടുത്ത്',pr:'uh-dut-too',en:'near'}]},
        {t:'chal',en:'Where is the bus stop?',tr:'ബസ് സ്റ്റോപ്പ് എവിടെ?',pr:'bus STA-pu eh-vee-teh',morph:['ബസ് സ്റ്റോപ്പ് = bus stop','എവിടെ? = where?']},
        {t:'say',text:'<span class="inline-tr">ഇടത്</span> is left, <span class="inline-tr">വലത്</span> is right, and <span class="inline-tr">നേരെ</span> is straight ahead.',tr:'നേരെ'},
        {t:'chal',en:'Go straight, then right',tr:'നേരെ പോകൂ, എന്നിട്ട് വലത്',pr:'neh-reh POH-koo, en-neet-tu vuh-luh-tu',morph:['നേരെ = straight','പോകൂ = go','വലത് = right']},
        {t:'chal',en:'Is it near?',tr:'അത് അടുത്താണോ?',pr:'ut-tu uh-dut-TAA-noh',morph:['അത് = that/it','അടുത്താണോ? = is it near?']}
      ],
      blocks:['<code>എവിടെ…?</code> = where is…?','<code>ഇടത് / വലത്</code> = left / right','<code>നേരെ</code> = straight ahead'] },
    { id:7, title:'Questions', focus:'എന്ത് · എപ്പോൾ · എങ്ങനെ · എത്ര',
      steps:[
        {t:'say',text:'Question words are quick: <span class="inline-tr">എന്ത്</span> is what, <span class="inline-tr">എപ്പോൾ</span> is when.',tr:'എന്ത്'},
        {t:'words',items:[{tr:'എന്ത്',pr:'en-tu',en:'what'},{tr:'ആര്',pr:'AA-r',en:'who'},{tr:'എപ്പോൾ',pr:'ep-pohl',en:'when'},{tr:'എങ്ങനെ',pr:'en-guh-neh',en:'how'},{tr:'എത്ര?',pr:'et-ruh',en:'how much?'}]},
        {t:'chal',en:'What is this?',tr:'ഇത് എന്താണ്?',pr:'it-tu EN-taan',morph:['ഇത് = this','എന്താണ്? = what is it?']},
        {t:'say',text:'For prices, ask <span class="inline-tr">എത്ര?</span> — how much?',tr:'എത്ര?'},
        {t:'chal',en:'How much is this?',tr:'ഇത് എത്ര?',pr:'it-tu et-ruh',morph:['ഇത് = this','എത്ര? = how much?']},
        {t:'chal',en:'How does it work?',tr:'ഇത് എങ്ങനെ പ്രവർത്തിക്കും?',pr:'it-tu en-guh-neh prav-ur-tee-koom',morph:['ഇത് = this','എങ്ങനെ = how']}
      ],
      blocks:['<code>എന്ത്</code> = what · <code>എപ്പോൾ</code> = when','<code>എങ്ങനെ</code> = how · <code>എത്ര?</code> = how much?','<code>ആര്</code> = who'] },
    { id:8, title:'Family & people', focus:'അമ്മ · അച്ഛൻ · കുടുംബം',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">അമ്മ</span> (mother), <span class="inline-tr">അച്ഛൻ</span> (father), <span class="inline-tr">കുടുംബം</span> (family).',tr:'അമ്മ'},
        {t:'words',items:[{tr:'അമ്മ',pr:'um-muh',en:'mother',link:'≈ Dravidian cognate — also in Tamil'},{tr:'അച്ഛൻ',pr:'uch-chun',en:'father'},{tr:'കുടുംബം',pr:'koo-doom-bum',en:'family'},{tr:'കുട്ടി',pr:'koot-tee',en:'child'},{tr:'സഹോദരൻ',pr:'suh-HOH-duh-run',en:'brother'},{tr:'സഹോദരി',pr:'suh-HOH-duh-ree',en:'sister'}]},
        {t:'chal',en:'This is my mother',tr:'ഇത് എന്റെ അമ്മ',pr:'it-tu en-teh um-muh',morph:['ഇത് = this','എന്റെ = my','അമ്മ = mother']},
        {t:'say',text:'<span class="inline-tr">എന്റെ</span> is "my", <span class="inline-tr">നിന്റെ</span> is "your" (informal).',tr:'എന്റെ'},
        {t:'chal',en:'I have a child',tr:'എനിക്ക് ഒരു കുട്ടിയുണ്ട',pr:'eh-nee-koo OH-roo koot-tee-yun-du',morph:['എനിക്ക് = to me','ഒരു കുട്ടി = a child','ഉണ്ട് = there is']},
        {t:'chal',en:'My family',tr:'എന്റെ കുടുംബം',pr:'en-teh koo-doom-bum',morph:['എന്റെ = my','കുടുംബം = family']}
      ],
      blocks:['<code>അമ്മ</code> / <code>അച്ഛൻ</code> = mother / father','<code>കുടുംബം</code> = family','<code>കുട്ടി</code> = child'] },
    { id:9, title:'Time, days & weather', focus:'ഇന്ന് · നാളെ · മഴ',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">ഇന്ന്</span>, tomorrow is <span class="inline-tr">നാളെ</span>, yesterday is <span class="inline-tr">ഇന്നലെ</span>.',tr:'ഇന്ന്'},
        {t:'words',items:[{tr:'ഇന്ന്',pr:'in-noo',en:'today'},{tr:'നാളെ',pr:'NAA-leh',en:'tomorrow'},{tr:'ഇന്നലെ',pr:'in-nuh-leh',en:'yesterday'},{tr:'ഇപ്പോൾ',pr:'ip-pohl',en:'now'},{tr:'ദിവസം',pr:'dee-vuh-sum',en:'day'},{tr:'രാത്രി',pr:'RAA-tree',en:'night'}]},
        {t:'chal',en:'See you tomorrow',tr:'നാളെ കാണാം',pr:'NAA-leh KAAN-um',morph:['നാളെ = tomorrow','കാണാം = see you']},
        {t:'say',text:'The weekdays run Sunday to Saturday; three common ones: <span class="inline-tr">ഞായർ</span> (Sun), <span class="inline-tr">തിങ്കൾ</span> (Mon), <span class="inline-tr">ശനി</span> (Sat).',tr:'ഞായർ'},
        {t:'say',text:'The monsoon is famous, so the weather word to know is <span class="inline-tr">മഴ</span> — rain.',tr:'മഴ'},
        {t:'chal',en:'It\'s raining',tr:'മഴയാണ്',pr:'muh-zhaa-yaan',morph:['മഴ = rain','ആണ് = is']},
        {t:'words',items:[{tr:'മഴ',pr:'muh-zha',en:'rain'},{tr:'ചൂട്',pr:'choo-doo',en:'heat / hot'},{tr:'വെയിൽ',pr:'veh-yil',en:'sunshine'}]}
      ],
      blocks:['<code>ഇന്ന്</code> / <code>നാളെ</code> = today / tomorrow','<code>മഴ</code>, <code>ചൂട്</code>, <code>വെയിൽ</code> = rain, heat, sun','Days: ഞായർ (Sun), തിങ്കൾ (Mon), ശനി (Sat)'] },
    { id:10, title:'My name is…', focus:'എന്റെ പേര് · നിന്റെ പേര്',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">എന്റെ പേര് __NAME__</span> — my name is __NAME__.',tr:'എന്റെ പേര് __NAME__'},
        {t:'chal',en:'My name is __NAME__',tr:'എന്റെ പേര് __NAME__',pr:'en-teh peh-roo __NAME__',morph:['എന്റെ = my','പേര് = name','__NAME__ = your name']},
        {t:'say',text:'<span class="inline-tr">പേര്</span> means name. To ask someone their name: <span class="inline-tr">നിന്റെ പേര് എന്താണ്?</span>',tr:'പേര്'},
        {t:'chal',en:'What\'s your name?',tr:'നിന്റെ പേര് എന്താണ്?',pr:'nin-teh peh-roo EN-taan',morph:['നിന്റെ = your','പേര് = name','എന്താണ്? = what is?']},
        {t:'words',items:[{tr:'പേര്',pr:'peh-roo',en:'name',link:'≈ Tamil peyar'},{tr:'എന്റെ',pr:'en-teh',en:'my'},{tr:'നിന്റെ',pr:'nin-teh',en:'your (informal)'},{tr:'സന്തോഷം',pr:'sun-toh-shum',en:'pleased to meet you / happiness'}]},
        {t:'chal',en:'Pleased to meet you',tr:'സന്തോഷം',pr:'sun-toh-shum',morph:['സന്തോഷം = pleasure']}
      ],
      blocks:['<code>എന്റെ പേര് __NAME__</code> = my name is __NAME__','<code>നിന്റെ പേര് എന്താണ്?</code> = what\'s your name?','<code>സന്തോഷം</code> = pleased to meet you'] },
    { id:11, title:'Emergency & help', focus:'സഹായം · ഡോക്ടർ · എനിക്ക് മനസ്സിലാകുന്നില്ല',
      steps:[
        {t:'say',text:'The word to shout if you need help: <span class="inline-tr">സഹായം!</span> — help!',tr:'സഹായം'},
        {t:'words',items:[{tr:'സഹായം!',pr:'suh-HAA-yum',en:'Help!'},{tr:'ഡോക്ടർ',pr:'DOK-tur',en:'doctor',link:'≈ English doctor'},{tr:'ആശുപത്രി',pr:'AA-shoo-puh-tree',en:'hospital'},{tr:'പോലീസ്',pr:'poh-LEES',en:'police',link:'≈ English police'},{tr:'മരുന്ന്',pr:'muh-roon-noo',en:'medicine'}]},
        {t:'chal',en:'Help!',tr:'സഹായം!',pr:'suh-HAA-yum',morph:['സഹായം = help']},
        {t:'say',text:'If you don\'t understand, say <span class="inline-tr">എനിക്ക് മനസ്സിലാകുന്നില്ല</span> — I don\'t understand.',tr:'എനിക്ക് മനസ്സിലാകുന്നില്ല'},
        {t:'chal',en:'I don\'t understand',tr:'എനിക്ക് മനസ്സിലാകുന്നില്ല',pr:'eh-nee-koo muh-nus-see-LAA-koon-neel-luh',morph:['എനിക്ക് = to me','മനസ്സിലാകുന്നില്ല = not understood']},
        {t:'chal',en:'I need a doctor',tr:'എനിക്ക് ഒരു ഡോക്ടർ വേണം',pr:'eh-nee-koo OH-roo DOK-tur veh-num',morph:['എനിക്ക് = to me','ഡോക്ടർ = doctor','വേണം = want']}
      ],
      blocks:['<code>സഹായം!</code> = help!','<code>ഡോക്ടർ</code> = doctor · <code>ആശുപത്രി</code> = hospital','<code>എനിക്ക് മനസ്സിലാകുന്നില്ല</code> = I don\'t understand'] },
    { id:12, title:'Tying it together', focus:'your first day in Kerala',
      steps:[
        {t:'say',text:'You\'ve built a real toolbox. This capstone uses only words you\'ve already met — build each line before you reveal it.'},
        {t:'chal',en:'Hello, how are you?',tr:'നമസ്കാരം, സുഖമാണോ?',pr:'NAH-mus-kuh-rum, soo-kuh-MAA-noh',morph:['നമസ്കാരം = hello','സുഖമാണോ? = how are you?']},
        {t:'chal',en:'I want a tea, please',tr:'എനിക്ക് ഒരു ചായ വേണം, ദയവായി',pr:'eh-nee-koo OH-roo CHAA-yaa veh-num, duh-yuh-VAA-yee',morph:['എനിക്ക് = to me','ഒരു ചായ = a tea','വേണം = want','ദയവായി = please']},
        {t:'chal',en:'How much is this?',tr:'ഇത് എത്ര?',pr:'it-tu et-ruh',morph:['ഇത് = this','എത്ര? = how much?']},
        {t:'chal',en:'Where is the bus stop?',tr:'ബസ് സ്റ്റോപ്പ് എവിടെ?',pr:'bus STA-pu eh-vee-teh',morph:['ബസ് സ്റ്റോപ്പ് = bus stop','എവിടെ? = where?']},
        {t:'chal',en:'Thank you very much!',tr:'വളരെ നന്ദി!',pr:'vuh-LUH-reh NUN-dee',morph:['വളരെ = very','നന്ദി = thank you']}
      ],
      blocks:['You built: greetings, ordering a tea, food, directions and thanks — a whole first day out in Kerala.'] },
    { id:13, title:'Airport & tickets', focus:'വിമാനത്താവളം · പാസ്പോർട്ട് · ടിക്കറ്റ് · ഗേറ്റ്',
      steps:[
        {t:'say',text:'You have landed. The building is the <span class="inline-tr">വിമാനത്താവളം</span>. Your document is a <span class="inline-tr">പാസ്പോർട്ട്</span>.',tr:'വിമാനത്താവളം'},
        {t:'words',items:[{tr:'വിമാനത്താവളം',pr:'vi-MAA-nuh-thaa-vuh-lum',en:'airport'},{tr:'പാസ്പോർട്ട്',pr:'PAAS-port',en:'passport'},{tr:'ടിക്കറ്റ്',pr:'TICK-et',en:'ticket'},{tr:'ഗേറ്റ്',pr:'geyt',en:'gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'വിമാനത്താവളം എവിടെ?',pr:'vi-MAA-nuh-thaa-vuh-lum eh-vee-teh',morph:['വിമാനത്താവളം = airport','എവിടെ? = where?']},
        {t:'chal',en:'Here is my passport',tr:'ഇതാ എന്റെ പാസ്പോർട്ട്',pr:'ee-THAA en-teh PAAS-port',morph:['ഇതാ = here is','എന്റെ = my','പാസ്പോർട്ട് = passport']},
        {t:'chal',en:'A ticket, please',tr:'ഒരു ടിക്കറ്റ്, ദയവായി',pr:'OH-roo TICK-et, duh-yuh-VAA-yee',morph:['ഒരു ടിക്കറ്റ് = a ticket','ദയവായി = please']},
        {t:'chal',en:'Where is the gate?',tr:'ഗേറ്റ് എവിടെ?',pr:'geyt eh-vee-teh',morph:['ഗേറ്റ് = gate','എവിടെ? = where?']}
      ],
      blocks:['<code>വിമാനത്താവളം</code> = airport','<code>പാസ്പോർട്ട്</code> = passport','<code>ടിക്കറ്റ്</code> = ticket'] },
    { id:14, title:'The taxi', focus:'ടാക്സി · പോകണം · ഹോട്ടൽ · നിർത്തൂ',
      steps:[
        {t:'say',text:'The driver is waiting. <span class="inline-tr">ടാക്സി</span> is a loanword. Tell them <span class="inline-tr">എനിക്ക് ഹോട്ടലിലേക്ക് പോകണം</span>.',tr:'ടാക്സി'},
        {t:'words',items:[{tr:'ടാക്സി',pr:'TAAK-see',en:'taxi'},{tr:'ഡ്രൈവർ',pr:'DRY-ver',en:'driver'},{tr:'എനിക്ക് പോകണം',pr:'eh-nee-koo POH-kuh-num',en:'I need to go'},{tr:'ഇവിടെ നിർത്തൂ',pr:'ee-vee-teh nir-TOO',en:'stop here'}]},
        {t:'chal',en:'Taxi, please',tr:'ടാക്സി, ദയവായി',pr:'TAAK-see, duh-yuh-VAA-yee',morph:['ടാക്സി = taxi','ദയവായി = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'എനിക്ക് ഹോട്ടലിലേക്ക് പോകണം',pr:'eh-nee-koo HO-ttel-il-ek-ku POH-kuh-num',morph:['എനിക്ക് = to me','ഹോട്ടലിലേക്ക് = to the hotel','പോകണം = need to go']},
        {t:'chal',en:'Stop here, please',tr:'ഇവിടെ നിർത്തൂ, ദയവായി',pr:'ee-vee-teh nir-TOO, duh-yuh-VAA-yee',morph:['ഇവിടെ = here','നിർത്തൂ = stop','ദയവായി = please']},
        {t:'chal',en:'How much is it?',tr:'എത്ര രൂപ?',pr:'et-ruh ROO-pa',morph:['എത്ര = how much','രൂപ = rupees']}
      ],
      blocks:['<code>…ിലേക്ക് പോകണം</code> = I need to go to …','<code>ഇവിടെ നിർത്തൂ</code> = stop here'] },
    { id:15, title:'The hotel', focus:'ബുക്കിംഗ് · മുറി · താക്കോൽ · രാത്രി',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">എനിക്ക് ബുക്കിംഗ് ഉണ്ട</span> — I have a reservation.',tr:'ബുക്കിംഗ്'},
        {t:'words',items:[{tr:'ഹോട്ടൽ',pr:'HO-ttel',en:'hotel'},{tr:'ബുക്കിംഗ്',pr:'BOOK-ing',en:'reservation'},{tr:'മുറി',pr:'mu-ri',en:'room'},{tr:'താക്കോൽ',pr:'thaa-KOHL',en:'key'},{tr:'ഒരു രാത്രി',pr:'OH-roo RAA-tree',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'എനിക്ക് ബുക്കിംഗ് ഉണ്ട',pr:'eh-nee-koo BOOK-ing un-du',morph:['എനിക്ക് = to me','ബുക്കിംഗ് = reservation','ഉണ്ട = there is']},
        {t:'chal',en:'A room for one night, please',tr:'ഒരു രാത്രിയുടെ മുറി, ദയവായി',pr:'OH-roo RAA-tree-yu-deh mu-ri, duh-yuh-VAA-yee',morph:['ഒരു രാത്രി = one night','മുറി = room','ദയവായി = please']},
        {t:'chal',en:'The key, please',tr:'താക്കോൽ, ദയവായി',pr:'thaa-KOHL, duh-yuh-VAA-yee',morph:['താക്കോൽ = key','ദയവായി = please']},
        {t:'chal',en:'Where is my room?',tr:'എന്റെ മുറി എവിടെ?',pr:'en-teh mu-ri eh-vee-teh',morph:['എന്റെ മുറി = my room','എവിടെ? = where?']}
      ],
      blocks:['<code>ബുക്കിംഗ്</code> = reservation','<code>മുറി</code> = room','<code>താക്കോൽ</code> = key'] },
    { id:16, title:'Ask for help', focus:'മനസ്സിലാകുന്നില്ല · പതുക്കെ · ഇംഗ്ലീഷ്',
      steps:[
        {t:'say',text:'When Malayalam is too fast: <span class="inline-tr">പതുക്കെ പറയൂ, ദയവായി</span> — speak slowly, please.',tr:'പതുക്കെ'},
        {t:'words',items:[{tr:'പതുക്കെ പറയൂ',pr:'puh-tuk-keh puh-ra-YOO',en:'speak slowly'},{tr:'വീണ്ടും',pr:'VEEN-dum',en:'again'},{tr:'ഇംഗ്ലീഷ്',pr:'ing-GLEESH',en:'English'},{tr:'സഹായിക്കാമോ?',pr:'suh-HAA-yik-kaa-moh',en:'can you help?'}]},
        {t:'chal',en:'I don\'t understand',tr:'എനിക്ക് മനസ്സിലാകുന്നില്ല',pr:'eh-nee-koo muh-nus-see-LAA-koon-neel-luh',morph:['എനിക്ക് = to me','മനസ്സിലാകുന്നില്ല = not understood']},
        {t:'chal',en:'Speak slowly, please',tr:'പതുക്കെ പറയൂ, ദയവായി',pr:'puh-tuk-keh puh-ra-YOO, duh-yuh-VAA-yee',morph:['പതുക്കെ = slowly','പറയൂ = speak','ദയവായി = please']},
        {t:'chal',en:'Can you help me?',tr:'എന്നെ സഹായിക്കാമോ?',pr:'en-neh suh-HAA-yik-kaa-moh',morph:['എന്നെ = me','സഹായിക്കാമോ? = can you help?']},
        {t:'chal',en:'Do you speak English?',tr:'നിങ്ങൾ ഇംഗ്ലീഷ് സംസാരിക്കുമോ?',pr:'ning-ngal ing-GLEESH sum-saa-rik-koo-moh',morph:['നിങ്ങൾ = you','ഇംഗ്ലീഷ് = English','സംസാരിക്കുമോ? = do you speak?']}
      ],
      blocks:['<code>പതുക്കെ പറയൂ</code> = speak slowly','<code>നിങ്ങൾ ഇംഗ്ലീഷ് സംസാരിക്കുമോ?</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'cafe', title:'☕ At a café', emoji:'☕', turns:[
      {who:'You',tr:'നമസ്കാരം! എനിക്ക് ഒരു ചായ വേണം, ദയവായി.',pr:'NAH-mus-kuh-rum! eh-nee-koo OH-roo CHAA-yaa veh-num, duh-yuh-VAA-yee',en:'Hello! I\'d like a tea, please.'},
      {who:'Server',tr:'പാൽ വേണോ?',pr:'PAAL veh-noh',en:'Do you want milk?'},
      {who:'You',tr:'അതെ, പാൽ വേണം. നന്ദി.',pr:'uh-teh, PAAL veh-num. NUN-dee',en:'Yes, milk, please. Thanks.'},
      {who:'Server',tr:'ഇതാ. മൂന്ന് രൂപ.',pr:'ee-THAA. MOON-noo ROO-pa',en:'Here. Three rupees.'},
      {who:'You',tr:'വളരെ നന്ദി!',pr:'vuh-LUH-reh NUN-dee',en:'Thank you very much!'}
    ]},
    { id:'transport', title:'🚌 Getting around', emoji:'🚌', turns:[
      {who:'You',tr:'ബസ് സ്റ്റോപ്പ് എവിടെ?',pr:'bus STA-pu eh-vee-teh',en:'Where is the bus stop?'},
      {who:'Local',tr:'നേരെ പോകൂ, എന്നിട്ട് വലത്.',pr:'neh-reh POH-koo, en-neet-tu vuh-luh-tu',en:'Go straight, then right.'},
      {who:'You',tr:'നന്ദി. എത്ര?',pr:'NUN-dee. et-ruh',en:'Thanks. How much?'},
      {who:'Driver',tr:'അമ്പത് രൂപ.',pr:'UM-buh-tu ROO-pa',en:'Fifty rupees.'}
    ]},
    { id:'restaurant', title:'🍛 At a restaurant', emoji:'🍛', turns:[
      {who:'Waiter',tr:'നമസ്കാരം! എന്ത് വേണം?',pr:'NAH-mus-kuh-rum! en-tu veh-num',en:'Hello! What would you like?'},
      {who:'You',tr:'എനിക്ക് ചോറും കറിയും വേണം.',pr:'eh-nee-koo CHOH-rum kuh-ree-yum veh-num',en:'I\'d like rice and curry.'},
      {who:'Waiter',tr:'ചായ വേണോ?',pr:'CHAA-yaa veh-noh',en:'Do you want tea?'},
      {who:'You',tr:'അതെ, ചായ വേണം.',pr:'uh-teh, CHAA-yaa veh-num',en:'Yes, I\'d like tea.'}
    ]},
    { id:'market', title:'🧺 At the market', emoji:'🧺', turns:[
      {who:'You',tr:'ഇത് എത്ര?',pr:'it-tu et-ruh',en:'How much is this?'},
      {who:'Seller',tr:'ഇരുപത് രൂപ.',pr:'ee-roo-pu-tu ROO-pa',en:'Twenty rupees.'},
      {who:'You',tr:'ഒരു കിലോ വേണം.',pr:'OH-roo KEE-loh veh-num',en:'I\'d like a kilo.'},
      {who:'Seller',tr:'ഇതാ. നന്ദി!',pr:'ee-THAA. NUN-dee',en:'Here. Thanks!'}
    ]}
  ],
  pocket: [
    {tr:'നമസ്കാരം',pr:'NAH-mus-kuh-rum',en:'Hello',c:'Greetings'},
    {tr:'സുഖമാണോ?',pr:'soo-kuh-MAA-noh',en:'How are you?',c:'Greetings'},
    {tr:'സുഖമാണ്',pr:'soo-kuh-MAAN',en:'I\'m well',c:'Greetings'},
    {tr:'വിട',pr:'vee-duh',en:'Goodbye',c:'Greetings'},
    {tr:'പിന്നീട് കാണാം',pr:'pin-NEE-du KAAN-um',en:'See you later',c:'Greetings'},
    {tr:'എന്റെ പേര് __NAME__',pr:'en-teh peh-roo',en:'My name is...',c:'Greetings'},
    {tr:'സ്വാഗതം',pr:'swah-guh-tum',en:'Welcome',c:'Greetings'},
    {tr:'നന്ദി',pr:'NUN-dee',en:'Thank you',c:'Courtesy'},
    {tr:'വളരെ നന്ദി',pr:'vuh-LUH-reh NUN-dee',en:'Thank you very much',c:'Courtesy'},
    {tr:'ദയവായി',pr:'duh-yuh-VAA-yee',en:'Please',c:'Courtesy'},
    {tr:'ക്ഷമിക്കണം',pr:'kshuh-mik-KUH-num',en:'Sorry / excuse me',c:'Courtesy'},
    {tr:'ഒന്നുമില്ല',pr:'on-noo-MIL-luh',en:'You\'re welcome',c:'Courtesy'},
    {tr:'അതെ',pr:'uh-teh',en:'Yes',c:'Courtesy'},
    {tr:'അല്ല',pr:'uhl-luh',en:'No',c:'Courtesy'},
    {tr:'ഒന്ന്',pr:'ON-noo',en:'1',c:'Numbers'},
    {tr:'രണ്ട്',pr:'RUN-du',en:'2',c:'Numbers'},
    {tr:'മൂന്ന്',pr:'MOON-noo',en:'3',c:'Numbers'},
    {tr:'നാല്',pr:'NAA-loo',en:'4',c:'Numbers'},
    {tr:'അഞ്ച്',pr:'UN-choo',en:'5',c:'Numbers'},
    {tr:'പത്ത്',pr:'PUN-tu',en:'10',c:'Numbers'},
    {tr:'അമ്പത്',pr:'UM-buh-tu',en:'50',c:'Numbers'},
    {tr:'വെള്ളം',pr:'VEL-lum',en:'Water',c:'Food & Drink'},
    {tr:'ചോറ്',pr:'CHOH-ru',en:'Rice',c:'Food & Drink'},
    {tr:'ചായ',pr:'CHAA-yaa',en:'Tea',c:'Food & Drink'},
    {tr:'കാപ്പി',pr:'KAAP-pee',en:'Coffee',c:'Food & Drink'},
    {tr:'കറി',pr:'kuh-REE',en:'Curry',c:'Food & Drink'},
    {tr:'ഭക്ഷണം',pr:'buhk-shuh-num',en:'Food',c:'Food & Drink'},
    {tr:'എനിക്ക് ... വേണം',pr:'eh-nee-koo ... veh-num',en:'I want ...',c:'Food & Drink'},
    {tr:'എവിടെ?',pr:'eh-vee-teh',en:'Where?',c:'Directions'},
    {tr:'ഇടത്',pr:'ee-duh-tu',en:'Left',c:'Directions'},
    {tr:'വലത്',pr:'vuh-luh-tu',en:'Right',c:'Directions'},
    {tr:'നേരെ',pr:'neh-reh',en:'Straight ahead',c:'Directions'},
    {tr:'ബസ് സ്റ്റോപ്പ്',pr:'bus STA-pu',en:'Bus stop',c:'Directions'},
    {tr:'എന്ത്',pr:'en-tu',en:'What?',c:'Questions'},
    {tr:'എപ്പോൾ',pr:'ep-pohl',en:'When?',c:'Questions'},
    {tr:'എങ്ങനെ',pr:'en-guh-neh',en:'How?',c:'Questions'},
    {tr:'എത്ര?',pr:'et-ruh',en:'How much?',c:'Questions'},
    {tr:'സഹായം!',pr:'suh-HAA-yum',en:'Help!',c:'Emergency'},
    {tr:'ഡോക്ടർ',pr:'DOK-tur',en:'Doctor',c:'Emergency'},
    {tr:'ആശുപത്രി',pr:'AA-shoo-puh-tree',en:'Hospital',c:'Emergency'},
    {tr:'എനിക്ക് മനസ്സിലാകുന്നില്ല',pr:'eh-nee-koo muh-nus-see-LAA-koon-neel-luh',en:'I don\'t understand',c:'Emergency'},
    {tr:'ഇന്ന്',pr:'in-noo',en:'Today',c:'Time'},
    {tr:'നാളെ',pr:'NAA-leh',en:'Tomorrow',c:'Time'},
    {tr:'ഇന്നലെ',pr:'in-nuh-leh',en:'Yesterday',c:'Time'},
    {tr:'ഇപ്പോൾ',pr:'ip-pohl',en:'Now',c:'Time'},
    {tr:'വിമാനത്താവളം',pr:'vi-MAA-nuh-thaa-vuh-lum',en:'airport',c:'Travel'},
    {tr:'പാസ്പോർട്ട്',pr:'PAAS-port',en:'passport',c:'Travel'},
    {tr:'എനിക്ക് ഹോട്ടലിലേക്ക് പോകണം',pr:'eh-nee-koo HO-ttel-il-ek-ku POH-kuh-num',en:'I want to go to the hotel',c:'Travel'},
    {tr:'എനിക്ക് ബുക്കിംഗ് ഉണ്ട',pr:'eh-nee-koo BOOK-ing un-du',en:'I have a reservation',c:'Travel'},
    {tr:'പതുക്കെ പറയൂ, ദയവായി',pr:'puh-tuk-keh puh-ra-YOO, duh-yuh-VAA-yee',en:'Speak slowly, please',c:'Travel'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food & Drink','Directions','Questions','Emergency','Time', 'Travel'],
  culture: [
    {icon:'🌴',title:'God\'s own country',body:'Kerala is a slim strip of coast in southern India, famous for backwaters, spice plantations and palm trees. It is one of the most literate states in India, and Malayalam is its own proud language.'},
    {icon:'🛶',title:'The backwaters & houseboats',body:'A network of lakes, canals and lagoons runs along the coast. Traditional "kettuvallam" houseboats — made of bamboo and coconut fibre — glide through them, and locals ferry everything from rice to coconuts by boat.'},
    {icon:'🍛',title:'Kerala sadhya',body:'The celebration feast, served on a big banana leaf: rice in the centre ringed by curries, pickles, crispy pappadams and payasam (a sweet pudding). It is eaten with the right hand, and the leaf itself is the plate.'},
    {icon:'🌼',title:'Onam',body:'The biggest festival of the year marks the harvest and the return of the mythical king Mahabali. Homes are decorated with flower carpets (pookkalam), there are boat races, and families share a grand sadhya.'},
    {icon:'🎭',title:'Kathakali',body:'Kerala\'s classical dance-drama. Performers wear huge headdresses and vivid face paint, and tell stories from the epics entirely through eye movements, hand gestures and rhythm — no spoken words needed.'},
    {icon:'🌶️',title:'The spice coast',body:'Kerala trades in pepper, cardamom, cloves and cinnamon — spices that drew traders from Arabia, Rome and China for centuries. Black pepper is called the "king of spices" here.'}
  ],
  sounds: [
    {l:'ഴ',say:'a retroflex sound English lacks — curl your tongue back and make a soft "z"-like buzz.',ex:'മഴ = MA-zha = rain',voice:'മഴ'},
    {l:'ള',say:'retroflex "l" — the tongue curls back, unlike the front English "l".',ex:'മലയാളം = ma-la-YAA-lam = Malayalam',voice:'മലയാളം'},
    {l:'ശ',say:'a palatal "sh", like the "sh" in "shoe".',ex:'ശനി = SHA-nee = Saturday',voice:'ശനി'},
    {l:'ഷ',say:'a retroflex "sh" — deeper and darker than ശ.',ex:'ഭാഷ = BHA-sha = language',voice:'ഭാഷ'},
    {l:'ഖ ഥ ഫ ഭ',say:'aspirated consonants: a little puff of air follows them, like in "kha" or "pha".',ex:'ഫലം = PHA-lam = fruit · ഭഗവാൻ = BHA-ga-vaan',voice:'ഫലം'},
    {l:'ൻ ർ ൽ ൾ ൺ',say:'the "chillu" letters — these consonants stand alone with no vowel after them.',ex:'അവൻ = a-van = he · നാൾ = naal = day',voice:'അവൻ'},
    {l:'റ',say:'a trilled, rolled "r" (a single റ is strong).',ex:'റോഡ് = road',voice:'റോഡ്'},
    {l:'അ ആ',say:'short vs long vowels: double the length for a long vowel.',ex:'ക = ka (short) · കാ = kaa (long)',voice:'കാ'}
  ],
  resources: [
    {icon:'🗣️',t:'Learn Malayalam greetings',d:'Native-speaker videos walking through the everyday phrases you\'ll use in Kerala.',q:'learn Malayalam greetings for beginners'},
    {icon:'🌸',t:'Malayalam alphabets & reading',d:'Clear, step-by-step lessons on the Malayalam script and letter sounds.',q:'learn Malayalam alphabets reading writing'},
    {icon:'🎧',t:'Malayalam for travelers',d:'Practical phrases for a trip — ordering, directions, and getting around.',q:'Malayalam phrases for tourists Kerala'},
    {icon:'🎬',t:'Malayalam cinema & songs',d:'Immerse yourself in the culture through its films and music.',q:'Malayalam cinema songs immersion'},
    {icon:'💬',t:'Spoken Malayalam basics',d:'Conversational Malayalam for absolute beginners, built from real situations.',q:'spoken Malayalam for beginners'}
  ]
};
