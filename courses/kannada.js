/* ---- kannada ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["kannada"] = {
  name: 'Kannada',
  flag: '🇮🇳',
  tts: 'kn-IN',
  dir: 'ltr',
  soundTitle: 'Kannada sounds & spelling',
  soundIntro: 'Kannada has a few sounds that don\'t exist in English — especially the retroflex and aspirated letters. Learn these and you\'ll read any word aloud.',
  grammar: '<p>Kannada is written in its own beautiful script that reads left to right. Every consonant carries a built-in <i>a</i> sound; a small sign added on either side changes the vowel. The basic word order is Subject–Object–Verb: <b>nanage kāphi bēku</b> (to-me coffee want) = <i>I want a coffee</i>. Kannada has two <i>r</i>-like sounds and retroflex letters, but don\'t worry — locals will understand you from context.</p>',
  bridges: '<div class="note">🇬🇧 <b>English.</b> Kannada is the language of the state of Karnataka in southern India. It\'s phonetic in every sense — once you know the letters you can read any word you see.</div><div class="note">🙏 <b>Tip.</b> Saying <i>namaskāra</i> with hands folded greets everyone warmly, in any language. A smile and <i>dhanyavāda</i> opens every door.</div>',
  lessons: [
    { id:1, title:'Greetings & being polite', focus:'ನಮಸ್ಕಾರ · ಧನ್ಯವಾದ · ದಯವಿಟ್ಟು',
      steps:[
        {t:'say',text:'Let\'s start with the very word you\'ll use everywhere: <span class="inline-tr">ನಮಸ್ಕಾರ</span> — hello (with folded hands). Say it out loud.',tr:'ನಮಸ್ಕಾರ'},
        {t:'words',items:[{tr:'ನಮಸ್ಕಾರ',pr:'namaskāra',en:'hello',link:'≈ Sanskrit namaskāra, pan-Indian'},{tr:'ಶುಭೋದಯ',pr:'shubhōdaya',en:'good morning'},{tr:'ಶುಭ ಸಂಜೆ',pr:'shubha sanje',en:'good evening'},{tr:'ಧನ್ಯವಾದ',pr:'dhanyavāda',en:'thank you',link:'≈ Sanskrit dhanyavāda (dhanyavaad)'},{tr:'ದಯವಿಟ್ಟು',pr:'dayaviṭṭu',en:'please'}]},
        {t:'chal',en:'Hello, thank you',tr:'ನಮಸ್ಕಾರ, ಧನ್ಯವಾದ',pr:'namaskāra, dhanyavāda',morph:['ನಮಸ್ಕಾರ = hello','ಧನ್ಯವಾದ = thank you']},
        {t:'say',text:'Two more essentials: <span class="inline-tr">ಕ್ಷಮಿಸಿ</span> (sorry / excuse me) and <span class="inline-tr">ಸರಿ</span> (okay).',tr:'ಕ್ಷಮಿಸಿ'},
        {t:'say',text:'To ask how someone is: <span class="inline-tr">ಹೇಗಿದ್ದೀರಿ?</span>. The reply is <span class="inline-tr">ಚೆನ್ನಾಗಿದ್ದೇನೆ, ಧನ್ಯವಾದ</span> — I\'m well, thanks.',tr:'ಹೇಗಿದ್ದೀರಿ?'},
        {t:'words',items:[{tr:'ಹೇಗಿದ್ದೀರಿ?',pr:'hēgiddīri?',en:'How are you?'},{tr:'ಚೆನ್ನಾಗಿದ್ದೇನೆ',pr:'chennāgiddēne',en:'I\'m well'},{tr:'ಸರಿ',pr:'sari',en:'okay / fine'}]},
        {t:'chal',en:'Hello, how are you?',tr:'ನಮಸ್ಕಾರ, ಹೇಗಿದ್ದೀರಿ?',pr:'namaskāra, hēgiddīri?',morph:['ನಮಸ್ಕಾರ = hello','ಹೇಗಿದ್ದೀರಿ? = how are you?']}
      ],
      blocks:['<code>ನಮಸ್ಕಾರ</code> = hello','<code>ಶುಭೋದಯ</code> = good morning','<code>ಧನ್ಯವಾದ</code> = thank you · <code>ದಯವಿಟ್ಟು</code> = please','<code>ಕ್ಷಮಿಸಿ</code> = sorry / excuse me'] },
    { id:2, title:'Polite phrases', focus:'ಧನ್ಯವಾದ · ದಯವಿಟ್ಟು · ಕ್ಷಮಿಸಿ',
      steps:[
        {t:'say',text:'The magic words: <span class="inline-tr">ಧನ್ಯವಾದ</span> (thank you) and <span class="inline-tr">ದಯವಿಟ್ಟು</span> (please). Use them constantly.',tr:'ಧನ್ಯವಾದ'},
        {t:'words',items:[{tr:'ಧನ್ಯವಾದ',pr:'dhanyavāda',en:'thank you'},{tr:'ದಯವಿಟ್ಟು',pr:'dayaviṭṭu',en:'please'},{tr:'ಕ್ಷಮಿಸಿ',pr:'kṣamisi',en:'sorry / excuse me'},{tr:'ಸರಿ',pr:'sari',en:'okay / all right'}]},
        {t:'chal',en:'A coffee, please',tr:'ಒಂದು ಕಾಫಿ, ದಯವಿಟ್ಟು',pr:'ondu kāphi, dayaviṭṭu',morph:['ಒಂದು = one','ಕಾಫಿ = coffee','ದಯವಿಟ್ಟು = please']},
        {t:'say',text:'Saying yes and no: <span class="inline-tr">ಹೌದು</span> = yes, <span class="inline-tr">ಇಲ್ಲ</span> = no.',tr:'ಹೌದು'},
        {t:'words',items:[{tr:'ಹೌದು',pr:'haudu',en:'yes'},{tr:'ಇಲ್ಲ',pr:'illa',en:'no'},{tr:'ಧನ್ಯವಾದಗಳು',pr:'dhanyavādagaḷu',en:'thanks a lot'}]},
        {t:'chal',en:'Yes, thank you',tr:'ಹೌದು, ಧನ್ಯವಾದ',pr:'haudu, dhanyavāda',morph:['ಹೌದು = yes','ಧನ್ಯವಾದ = thank you']}
      ],
      blocks:['<code>ಧನ್ಯವಾದ</code> = thank you','<code>ದಯವಿಟ್ಟು</code> = please','<code>ಹೌದು</code> / <code>ಇಲ್ಲ</code> = yes / no'] },
    { id:3, title:'Numbers 1–10', focus:'ಒಂದು · ಎರಡು · ಮೂರು · ಹತ್ತು',
      steps:[
        {t:'say',text:'Numbers are the fastest win. Listen and repeat: <span class="inline-tr">ಒಂದು, ಎರಡು, ಮೂರು</span>.',tr:'ಒಂದು'},
        {t:'words',items:[{tr:'ಒಂದು',pr:'ondu',en:'1'},{tr:'ಎರಡು',pr:'eraḍu',en:'2'},{tr:'ಮೂರು',pr:'mūru',en:'3'},{tr:'ನಾಲ್ಕು',pr:'nālku',en:'4'},{tr:'ಐದು',pr:'aidu',en:'5'},{tr:'ಆರು',pr:'āru',en:'6'},{tr:'ಏಳು',pr:'ēḷu',en:'7'},{tr:'ಎಂಟು',pr:'eṇṭu',en:'8'},{tr:'ಒಂಬತ್ತು',pr:'ombattu',en:'9'},{tr:'ಹತ್ತು',pr:'hattu',en:'10'}]},
        {t:'chal',en:'Two coffees, please',tr:'ಎರಡು ಕಾಫಿ, ದಯವಿಟ್ಟು',pr:'eraḍu kāphi, dayaviṭṭu',morph:['ಎರಡು = two','ಕಾಫಿ = coffee','ದಯವಿಟ್ಟು = please']},
        {t:'say',text:'To ask the price: <span class="inline-tr">ಇದು ಎಷ್ಟು?</span> = how much is this? Great for shopping.',tr:'ಇದು ಎಷ್ಟು?'},
        {t:'chal',en:'How much is this?',tr:'ಇದು ಎಷ್ಟು?',pr:'idu eṣṭu?',morph:['ಇದು = this','ಎಷ್ಟು? = how much?']},
        {t:'chal',en:'It\'s five rupees',tr:'ಐದು ರೂಪಾಯಿ',pr:'aidu rūpāyi',morph:['ಐದು = five','ರೂಪಾಯಿ = rupees']}
      ],
      blocks:['ಒಂದು, ಎರಡು, ಮೂರು, ನಾಲ್ಕು, ಐದು = 1–5','<code>ಇದು ಎಷ್ಟು?</code> = how much is this?'] },
    { id:4, title:'"I want" — ನನಗೆ … ಬೇಕು', focus:'ನನಗೆ … ಬೇಕು · ಬೇಡ',
      steps:[
        {t:'say',text:'The magic phrase to ask for anything: <span class="inline-tr">ನನಗೆ … ಬೇಕು</span> — I want…. Put what you want before <b>ಬೇಕು</b>.',tr:'ನನಗೆ … ಬೇಕು'},
        {t:'say',text:'<span class="inline-tr">ಬೇಕು</span> is the verb \'want\'. <b>ನನಗೆ ನೀರು ಬೇಕು</b> = I want water.',tr:'ಬೇಕು'},
        {t:'chal',en:'I want water',tr:'ನನಗೆ ನೀರು ಬೇಕು',pr:'nanage nīru bēku',morph:['ನನಗೆ = to me','ನೀರು = water','ಬೇಕು = want']},
        {t:'chal',en:'I want a coffee',tr:'ನನಗೆ ಕಾಫಿ ಬೇಕು',pr:'nanage kāphi bēku',morph:['ನನಗೆ = to me','ಕಾಫಿ = coffee','ಬೇಕು = want']},
        {t:'say',text:'To refuse, use <span class="inline-tr">ನನಗೆ … ಬೇಡ</span> — I don\'t want….',tr:'ನನಗೆ … ಬೇಡ'},
        {t:'chal',en:'I don\'t want tea',tr:'ನನಗೆ ಚಹಾ ಬೇಡ',pr:'nanage cahā bēḍa',morph:['ನನಗೆ = to me','ಚಹಾ = tea','ಬೇಡ = don\'t want']}
      ],
      blocks:['<code>ನನಗೆ … ಬೇಕು</code> = I want…','<code>ನನಗೆ … ಬೇಡ</code> = I don\'t want…','<code>ಬೇಕು</code> = want / need'] },
    { id:5, title:'Food & drink', focus:'ನೀರು · ಅನ್ನ · ಚಹಾ · ಕಾಫಿ',
      steps:[
        {t:'say',text:'Eating out? Key words: <span class="inline-tr">ನೀರು</span> (water), <span class="inline-tr">ಅನ್ನ</span> (rice), <span class="inline-tr">ಚಹಾ</span> (tea).',tr:'ನೀರು'},
        {t:'words',items:[{tr:'ನೀರು',pr:'nīru',en:'water'},{tr:'ಅನ್ನ',pr:'anna',en:'rice'},{tr:'ರೊಟ್ಟಿ',pr:'roṭṭi',en:'roti / bread',link:'≈ roti, also in Hindi'},{tr:'ಚಹಾ',pr:'cahā',en:'tea',link:'≈ chai, from Chinese chá'},{tr:'ಕಾಫಿ',pr:'kāphi',en:'coffee',link:'≈ English coffee'}]},
        {t:'chal',en:'Rice and tea, please',tr:'ಅನ್ನ ಮತ್ತು ಚಹಾ, ದಯವಿಟ್ಟು',pr:'anna mattu cahā, dayaviṭṭu',morph:['ಅನ್ನ = rice','ಮತ್ತು = and','ಚಹಾ = tea','ದಯವಿಟ್ಟು = please']},
        {t:'chal',en:'I want water',tr:'ನನಗೆ ನೀರು ಬೇಕು',pr:'nanage nīru bēku',morph:['ನನಗೆ = to me','ನೀರು = water','ಬೇಕು = want']},
        {t:'say',text:'To ask for the menu: <span class="inline-tr">ಮೆನು, ದಯವಿಟ್ಟು</span> — the menu, please.',tr:'ಮೆನು, ದಯವಿಟ್ಟು'},
        {t:'chal',en:'The menu, please',tr:'ಮೆನು, ದಯವಿಟ್ಟು',pr:'menu, dayaviṭṭu',morph:['ಮೆನು = the menu','ದಯವಿಟ್ಟು = please'],link:'≈ English menu'}
      ],
      blocks:['<code>ನೀರು</code>, <code>ಅನ್ನ</code>, <code>ಚಹಾ</code> = water, rice, tea','<code>ಮೆನು</code> = the menu','<code>ಮತ್ತು</code> = and'] },
    { id:6, title:'Getting around', focus:'ಎಲ್ಲಿ? · ಬಲ · ಎಡ · ನೇರವಾಗಿ',
      steps:[
        {t:'say',text:'The most useful question in any city: <span class="inline-tr">ಎಲ್ಲಿ…?</span> — where is…?',tr:'ಎಲ್ಲಿ…?'},
        {t:'words',items:[{tr:'ಎಲ್ಲಿ...?',pr:'elli...?',en:'Where is...?'},{tr:'ಬಲ',pr:'bala',en:'to the right'},{tr:'ಎಡ',pr:'eḍa',en:'to the left'},{tr:'ನೇರವಾಗಿ',pr:'nēravāgi',en:'straight ahead'},{tr:'ನಿಲ್ದಾಣ',pr:'nildāṇa',en:'station'}]},
        {t:'chal',en:'Where is the station?',tr:'ನಿಲ್ದಾಣ ಎಲ್ಲಿ?',pr:'nildāṇa elli?',morph:['ನಿಲ್ದಾಣ = station','ಎಲ್ಲಿ? = where?']},
        {t:'chal',en:'Where is the bus stop?',tr:'ಬಸ್ ನಿಲ್ದಾಣ ಎಲ್ಲಿ?',pr:'bas nildāṇa elli?',morph:['ಬಸ್ ನಿಲ್ದಾಣ = bus stop','ಎಲ್ಲಿ? = where?'],link:'≈ English bus'},
        {t:'say',text:'<span class="inline-tr">ಬಲ</span> and <span class="inline-tr">ಎಡ</span> tell you which way to turn. \'Straight ahead\' is <span class="inline-tr">ನೇರವಾಗಿ</span>.',tr:'ಬಲ'},
        {t:'chal',en:'Straight ahead',tr:'ನೇರವಾಗಿ',pr:'nēravāgi',morph:['ನೇರವಾಗಿ = straight ahead']}
      ],
      blocks:['<code>ಎಲ್ಲಿ…?</code> = where is…?','<code>ಬಲ</code> / <code>ಎಡ</code> = right / left','<code>ನೇರವಾಗಿ</code> = straight ahead'] },
    { id:7, title:'Questions & "do you have…?"', focus:'ನಿಮ್ಮಲ್ಲಿ … ಇದೆಯೇ?',
      steps:[
        {t:'say',text:'To ask if someone has something: <span class="inline-tr">ನಿಮ್ಮಲ್ಲಿ … ಇದೆಯೇ?</span> — do you have…?',tr:'ನಿಮ್ಮಲ್ಲಿ … ಇದೆಯೇ?'},
        {t:'chal',en:'Do you have water?',tr:'ನಿಮ್ಮಲ್ಲಿ ನೀರು ಇದೆಯೇ?',pr:'nimmalli nīru ideyē?',morph:['ನಿಮ್ಮಲ್ಲಿ = with you','ನೀರು = water','ಇದೆಯೇ? = is there?']},
        {t:'words',items:[{tr:'ನಿಮ್ಮಲ್ಲಿ... ಇದೆಯೇ?',pr:'nimmalli... ideyē?',en:'do you have...?'},{tr:'ನನಗೆ... ಬೇಕು',pr:'nanage... bēku',en:'I want...'},{tr:'ಎಲ್ಲಿ...?',pr:'elli...?',en:'where is...?'}]},
        {t:'say',text:'The same <span class="inline-tr">ಇದೆಯೇ?</span> also asks \'is there…?\' Perfect for places and facilities.',tr:'ಇದೆಯೇ?'},
        {t:'chal',en:'Is there a station?',tr:'ನಿಲ್ದಾಣ ಇದೆಯೇ?',pr:'nildāṇa ideyē?',morph:['ನಿಲ್ದಾಣ = station','ಇದೆಯೇ? = is there?']},
        {t:'chal',en:'Do you have a room?',tr:'ನಿಮ್ಮಲ್ಲಿ ಕೋಣೆ ಇದೆಯೇ?',pr:'nimmalli kōṇe ideyē?',morph:['ನಿಮ್ಮಲ್ಲಿ = with you','ಕೋಣೆ = a room','ಇದೆಯೇ? = is there?']}
      ],
      blocks:['<code>ನಿಮ್ಮಲ್ಲಿ … ಇದೆಯೇ?</code> = do you have…?','<code>ಇದೆಯೇ?</code> = is there…?','<code>ನನಗೆ … ಬೇಕು</code> = I want…'] },
    { id:8, title:'Family & people', focus:'ಕುಟುಂಬ · ಅಮ್ಮ · ಅಪ್ಪ · ಗೆಳೆಯ',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">ಕುಟುಂಬ</span> (family), <span class="inline-tr">ಅಮ್ಮ</span> (mother), <span class="inline-tr">ಅಪ್ಪ</span> (father).',tr:'ಕುಟುಂಬ'},
        {t:'words',items:[{tr:'ಕುಟುಂಬ',pr:'kuṭumba',en:'family'},{tr:'ಅಮ್ಮ',pr:'amma',en:'mother'},{tr:'ಅಪ್ಪ',pr:'appa',en:'father'},{tr:'ಸಹೋದರ',pr:'sahōdara',en:'brother',link:'≈ Sanskrit sahōdara (sibling)'},{tr:'ಗೆಳೆಯ',pr:'geḷeya',en:'friend'}]},
        {t:'chal',en:'This is my friend',tr:'ಇದು ನನ್ನ ಗೆಳೆಯ',pr:'idu nanna geḷeya',morph:['ಇದು = this','ನನ್ನ = my','ಗೆಳೆಯ = friend']},
        {t:'say',text:'To say \'I have\', Kannada uses <span class="inline-tr">ನನಗೆ … ಇದೆ</span> — literally \'to me … there is\'. The word is <span class="inline-tr">ಇದೆ</span>.',tr:'ಇದೆ'},
        {t:'chal',en:'I have a family',tr:'ನನ್ನ ಕುಟುಂಬ ಇದೆ',pr:'nanna kuṭumba ide',morph:['ನನ್ನ = my','ಕುಟುಂಬ = family','ಇದೆ = there is']},
        {t:'chal',en:'I have a brother',tr:'ನನಗೆ ಸಹೋದರ ಇದ್ದಾನೆ',pr:'nanage sahōdara iddāne',morph:['ನನಗೆ = to me','ಸಹೋದರ = brother','ಇದ್ದಾನೆ = there is (male)']}
      ],
      blocks:['<code>ಅಮ್ಮ</code> / <code>ಅಪ್ಪ</code> = mother / father','<code>ಗೆಳೆಯ</code> = friend','<code>ಇದೆ</code> = there is'] },
    { id:9, title:'Time, days & weather', focus:'ಇಂದು · ನಾಳೆ · ಹವಾಮಾನ',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">ಇಂದು</span>, tomorrow is <span class="inline-tr">ನಾಳೆ</span>, yesterday is <span class="inline-tr">ನಿನ್ನೆ</span>.',tr:'ಇಂದು'},
        {t:'words',items:[{tr:'ಇಂದು',pr:'indu',en:'today'},{tr:'ನಾಳೆ',pr:'nāḷe',en:'tomorrow'},{tr:'ನಿನ್ನೆ',pr:'ninne',en:'yesterday'},{tr:'ಹವಾಮಾನ',pr:'havāmāna',en:'weather'}]},
        {t:'chal',en:'See you tomorrow',tr:'ನಾಳೆ ಭೇಟಿಯಾಗೋಣ',pr:'nāḷe bhēṭiyāgōṇa',morph:['ನಾಳೆ = tomorrow','ಭೇಟಿಯಾಗೋಣ = let\'s meet']},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">ಹವಾಮಾನ ಹೇಗಿದೆ?</span> — how\'s the weather?',tr:'ಹವಾಮಾನ ಹೇಗಿದೆ?'},
        {t:'chal',en:'How\'s the weather?',tr:'ಹವಾಮಾನ ಹೇಗಿದೆ?',pr:'havāmāna hēgide?',morph:['ಹವಾಮಾನ = weather','ಹೇಗಿದೆ? = how is it?']},
        {t:'chal',en:'It\'s raining today',tr:'ಇಂದು ಮಳೆ ಬರುತ್ತದೆ',pr:'indu maḷe baruttade',morph:['ಇಂದು = today','ಮಳೆ = rain','ಬರುತ್ತದೆ = comes']}
      ],
      blocks:['<code>ಇಂದು</code> / <code>ನಾಳೆ</code> = today / tomorrow','<code>ಹವಾಮಾನ</code> = weather','<code>ಮಳೆ</code> = rain'] },
    { id:10, title:'Small talk & your name', focus:'ನನ್ನ ಹೆಸರು · ನಿಮ್ಮ ಹೆಸರೇನು?',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">ನನ್ನ ಹೆಸರು __NAME__</span> — my name is…',tr:'ನನ್ನ ಹೆಸರು'},
        {t:'chal',en:'My name is __NAME__',tr:'ನನ್ನ ಹೆಸರು __NAME__',pr:'nanna hesaru __NAME__',morph:['ನನ್ನ = my','ಹೆಸರು = name','__NAME__ = your name']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">ನಿಮ್ಮ ಹೆಸರೇನು?</span>',tr:'ನಿಮ್ಮ ಹೆಸರೇನು?'},
        {t:'chal',en:'What\'s your name?',tr:'ನಿಮ್ಮ ಹೆಸರೇನು?',pr:'nimma hesarēnu?',morph:['ನಿಮ್ಮ = your','ಹೆಸರೇನು? = what name?']},
        {t:'say',text:'A warm reply to an introduction: <span class="inline-tr">ನಿಮ್ಮನ್ನು ಭೇಟಿಯಾಗಲು ಸಂತೋಷ</span> — pleased to meet you.',tr:'ನಿಮ್ಮನ್ನು ಭೇಟಿಯಾಗಲು ಸಂತೋಷ'},
        {t:'chal',en:'Pleased to meet you',tr:'ನಿಮ್ಮನ್ನು ಭೇಟಿಯಾಗಲು ಸಂತೋಷ',pr:'nimmannu bhēṭiyāgalu santōṣa',morph:['ನಿಮ್ಮನ್ನು = you','ಭೇಟಿಯಾಗಲು = meet','ಸಂತೋಷ = pleasure']},
        {t:'words',items:[{tr:'ನನ್ನ ಹೆಸರು...',pr:'nanna hesaru...',en:'my name is...'},{tr:'ನಿಮ್ಮ ಹೆಸರೇನು?',pr:'nimma hesarēnu?',en:'what\'s your name?'},{tr:'ಸಂತೋಷ',pr:'santōṣa',en:'pleasure'}]}
      ],
      blocks:['<code>ನನ್ನ ಹೆಸರು…</code> = my name is…','<code>ನಿಮ್ಮ ಹೆಸರೇನು?</code> = what\'s your name?','<code>ಸಂತೋಷ</code> = pleasure'] },
    { id:11, title:'Health & emergency', focus:'ಸಹಾಯ · ವೈದ್ಯ · ಆಸ್ಪತ್ರೆ',
      steps:[
        {t:'say',text:'The most important word if you need help: <span class="inline-tr">ಸಹಾಯ</span> — help!',tr:'ಸಹಾಯ'},
        {t:'words',items:[{tr:'ಸಹಾಯ',pr:'sahāya',en:'help!'},{tr:'ವೈದ್ಯ',pr:'vaidya',en:'doctor',link:'≈ Sanskrit vaidya, Ayurvedic'},{tr:'ಆಸ್ಪತ್ರೆ',pr:'āspatre',en:'hospital',link:'≈ hospital (Hindi aspataal)'},{tr:'ನನಗೆ ಅರ್ಥವಾಗುತ್ತಿಲ್ಲ',pr:'nanage arthavāguttilla',en:'I don\'t understand'}]},
        {t:'chal',en:'Help!',tr:'ಸಹಾಯ!',pr:'sahāya!',morph:['ಸಹಾಯ = help']},
        {t:'chal',en:'I need a doctor',tr:'ನನಗೆ ವೈದ್ಯ ಬೇಕು',pr:'nanage vaidya bēku',morph:['ನನಗೆ = to me','ವೈದ್ಯ = doctor','ಬೇಕು = need']},
        {t:'say',text:'To say you don\'t understand: <span class="inline-tr">ನನಗೆ ಅರ್ಥವಾಗುತ್ತಿಲ್ಲ</span> — very useful.',tr:'ನನಗೆ ಅರ್ಥವಾಗುತ್ತಿಲ್ಲ'},
        {t:'chal',en:'I have a fever',tr:'ನನಗೆ ಜ್ವರವಿದೆ',pr:'nanage jvaravide',morph:['ನನಗೆ = to me','ಜ್ವರ = fever','ಇದೆ = there is']},
        {t:'chal',en:'I don\'t understand',tr:'ನನಗೆ ಅರ್ಥವಾಗುತ್ತಿಲ್ಲ',pr:'nanage arthavāguttilla',morph:['ನನಗೆ = to me','ಅರ್ಥವಾಗುತ್ತಿಲ್ಲ = I don\'t understand']}
      ],
      blocks:['<code>ಸಹಾಯ</code> = help','<code>ವೈದ್ಯ</code> = doctor','<code>ನನಗೆ ಅರ್ಥವಾಗುತ್ತಿಲ್ಲ</code> = I don\'t understand'] },
    { id:12, title:'Tying it together', focus:'a capstone scene',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolbox. This capstone uses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello, how are you?',tr:'ನಮಸ್ಕಾರ, ಹೇಗಿದ್ದೀರಿ?',pr:'namaskāra, hēgiddīri?',morph:['ನಮಸ್ಕಾರ = hello','ಹೇಗಿದ್ದೀರಿ? = how are you?']},
        {t:'chal',en:'I want a coffee, please',tr:'ನನಗೆ ಕಾಫಿ ಬೇಕು, ದಯವಿಟ್ಟು',pr:'nanage kāphi bēku, dayaviṭṭu',morph:['ನನಗೆ = to me','ಕಾಫಿ = coffee','ಬೇಕು = want','ದಯವಿಟ್ಟು = please']},
        {t:'chal',en:'Where is the station?',tr:'ನಿಲ್ದಾಣ ಎಲ್ಲಿ?',pr:'nildāṇa elli?',morph:['ನಿಲ್ದಾಣ = station','ಎಲ್ಲಿ? = where?']},
        {t:'chal',en:'Do you have water?',tr:'ನಿಮ್ಮಲ್ಲಿ ನೀರು ಇದೆಯೇ?',pr:'nimmalli nīru ideyē?',morph:['ನಿಮ್ಮಲ್ಲಿ = with you','ನೀರು = water','ಇದೆಯೇ? = is there?']},
        {t:'chal',en:'How much is it?',tr:'ಇದು ಎಷ್ಟು?',pr:'idu eṣṭu?',morph:['ಇದು = this','ಎಷ್ಟು? = how much?']},
        {t:'chal',en:'Thank you!',tr:'ಧನ್ಯವಾದ!',pr:'dhanyavāda!',morph:['ಧನ್ಯವಾದ = thank you']}
      ],
      blocks:['You built: greetings, ordering, directions, questions, prices, thanks — a full day out in Kannada.'] },
    { id:13, title:'Airport & tickets', focus:'ವಿಮಾನ ನಿಲ್ದಾಣ · ಪಾಸ್‌ಪೋರ್ಟ್ · ಟಿಕೆಟ್ · ಗೇಟ್',
      steps:[
        {t:'say',text:'You have landed. The building is the <span class="inline-tr">ವಿಮಾನ ನಿಲ್ದಾಣ</span>. Your document is a <span class="inline-tr">ಪಾಸ್‌ಪೋರ್ಟ್</span>.',tr:'ವಿಮಾನ ನಿಲ್ದಾಣ'},
        {t:'words',items:[{tr:'ವಿಮಾನ ನಿಲ್ದಾಣ',pr:'vimana nildana',en:'airport'},{tr:'ಪಾಸ್‌ಪೋರ್ಟ್',pr:'passport',en:'passport'},{tr:'ಟಿಕೆಟ್',pr:'tiket',en:'ticket'},{tr:'ವಿಮಾನ',pr:'vimana',en:'flight / plane'},{tr:'ಗೇಟ್',pr:'gate',en:'gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'ವಿಮಾನ ನಿಲ್ದಾಣ ಎಲ್ಲಿ?',pr:'vimana nildana elli?',morph:['ವಿಮಾನ ನಿಲ್ದಾಣ = airport','ಎಲ್ಲಿ? = where?']},
        {t:'chal',en:'Here is my passport',tr:'ಇದು ನನ್ನ ಪಾಸ್‌ಪೋರ್ಟ್',pr:'idu nanna passport',morph:['ಇದು = this','ನನ್ನ = my','ಪಾಸ್‌ಪೋರ್ಟ್ = passport']},
        {t:'chal',en:'A ticket, please',tr:'ಒಂದು ಟಿಕೆಟ್, ದಯವಿಟ್ಟು',pr:'ondu tiket, dayavittu',morph:['ಒಂದು ಟಿಕೆಟ್ = a ticket','ದಯವಿಟ್ಟು = please']},
        {t:'chal',en:'Where is the gate?',tr:'ಗೇಟ್ ಎಲ್ಲಿ?',pr:'gate elli?',morph:['ಗೇಟ್ = gate','ಎಲ್ಲಿ? = where?']}
      ],
      blocks:['<code>ವಿಮಾನ ನಿಲ್ದಾಣ</code> = airport','<code>ಪಾಸ್‌ಪೋರ್ಟ್</code> = passport','<code>ಟಿಕೆಟ್</code> = ticket','<code>ಗೇಟ್</code> = gate'] },
    { id:14, title:'The taxi', focus:'ಟ್ಯಾಕ್ಸಿ · ಹೋಗಬೇಕು · ಹೋಟೆಲ್ · ನಿಲ್ಲಿಸಿ',
      steps:[
        {t:'say',text:'The driver is waiting. <span class="inline-tr">ಟ್ಯಾಕ್ಸಿ</span> is taxi. Tell them where to go with <span class="inline-tr">ನನಗೆ ಹೋಟೆಲ್‌ಗೆ ಹೋಗಬೇಕು</span>.',tr:'ಟ್ಯಾಕ್ಸಿ'},
        {t:'words',items:[{tr:'ಟ್ಯಾಕ್ಸಿ',pr:'tyaksi',en:'taxi'},{tr:'ಚಾಲಕ',pr:'chalaka',en:'driver'},{tr:'ನನಗೆ ಹೋಗಬೇಕು',pr:'nanage hogabeku',en:'I need to go'},{tr:'ಇಲ್ಲಿ ನಿಲ್ಲಿಸಿ',pr:'illi nillisi',en:'stop here (polite)'}]},
        {t:'chal',en:'Taxi, please',tr:'ಟ್ಯಾಕ್ಸಿ, ದಯವಿಟ್ಟು',pr:'tyaksi, dayavittu',morph:['ಟ್ಯಾಕ್ಸಿ = taxi','ದಯವಿಟ್ಟು = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'ನನಗೆ ಹೋಟೆಲ್‌ಗೆ ಹೋಗಬೇಕು',pr:'nanage hotel-ge hogabeku',morph:['ನನಗೆ = to me','ಹೋಟೆಲ್‌ಗೆ = to the hotel','ಹೋಗಬೇಕು = need to go']},
        {t:'chal',en:'Stop here, please',tr:'ಇಲ್ಲಿ ನಿಲ್ಲಿಸಿ, ದಯವಿಟ್ಟು',pr:'illi nillisi, dayavittu',morph:['ಇಲ್ಲಿ = here','ನಿಲ್ಲಿಸಿ = stop (polite)','ದಯವಿಟ್ಟು = please']},
        {t:'chal',en:'How much is it?',tr:'ಇದು ಎಷ್ಟು?',pr:'idu eshtu?',morph:['ಇದು = this','ಎಷ್ಟು? = how much?']}
      ],
      blocks:['<code>ನನಗೆ … ಹೋಗಬೇಕು</code> = I need to go to …','<code>ಇಲ್ಲಿ ನಿಲ್ಲಿಸಿ</code> = stop here'] },
    { id:15, title:'The hotel', focus:'ಬುಕಿಂಗ್ · ಕೋಣೆ · ಬೀಗದ ಕೈ · ರಾತ್ರಿ',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">ನನ್ನ ಬುಕಿಂಗ್ ಇದೆ</span> — I have a reservation.',tr:'ಬುಕಿಂಗ್'},
        {t:'words',items:[{tr:'ಹೋಟೆಲ್',pr:'hotel',en:'hotel'},{tr:'ಬುಕಿಂಗ್',pr:'booking',en:'reservation'},{tr:'ಕೋಣೆ',pr:'kone',en:'room'},{tr:'ಬೀಗದ ಕೈ',pr:'bigada kai',en:'key'},{tr:'ಒಂದು ರಾತ್ರಿ',pr:'ondu ratri',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'ನನ್ನ ಬುಕಿಂಗ್ ಇದೆ',pr:'nanna booking ide',morph:['ನನ್ನ = my','ಬುಕಿಂಗ್ = reservation','ಇದೆ = there is']},
        {t:'chal',en:'A room for one night, please',tr:'ಒಂದು ರಾತ್ರಿಯ ಕೋಣೆ, ದಯವಿಟ್ಟು',pr:'ondu ratriya kone, dayavittu',morph:['ಒಂದು ರಾತ್ರಿಯ = for one night','ಕೋಣೆ = room','ದಯವಿಟ್ಟು = please']},
        {t:'chal',en:'The key, please',tr:'ಬೀಗದ ಕೈ, ದಯವಿಟ್ಟು',pr:'bigada kai, dayavittu',morph:['ಬೀಗದ ಕೈ = key','ದಯವಿಟ್ಟು = please']},
        {t:'chal',en:'Where is my room?',tr:'ನನ್ನ ಕೋಣೆ ಎಲ್ಲಿ?',pr:'nanna kone elli?',morph:['ನನ್ನ ಕೋಣೆ = my room','ಎಲ್ಲಿ? = where?']}
      ],
      blocks:['<code>ಬುಕಿಂಗ್</code> = reservation','<code>ಕೋಣೆ</code> = room','<code>ಬೀಗದ ಕೈ</code> = key'] },
    { id:16, title:'Ask for help', focus:'ನನಗೆ ಅರ್ಥವಾಗುತ್ತಿಲ್ಲ · ನಿಧಾನವಾಗಿ · ಇಂಗ್ಲಿಷ್',
      steps:[
        {t:'say',text:'When the language is too fast: <span class="inline-tr">ನಿಧಾನವಾಗಿ, ದಯವಿಟ್ಟು</span> — slower, please.',tr:'ನಿಧಾನವಾಗಿ, ದಯವಿಟ್ಟು'},
        {t:'words',items:[{tr:'ನಿಧಾನವಾಗಿ',pr:'nidhanavagi',en:'slower'},{tr:'ಮತ್ತೆ',pr:'matte',en:'again'},{tr:'ಇಂಗ್ಲಿಷ್',pr:'inglish',en:'English'},{tr:'ನೀವು ಸಹಾಯ ಮಾಡುತ್ತೀರಾ?',pr:'nivu sahaya maduttira?',en:'can you help?'}]},
        {t:'chal',en:'I don\'t understand',tr:'ನನಗೆ ಅರ್ಥವಾಗುತ್ತಿಲ್ಲ',pr:'nanage arthavaguttilla',morph:['ನನಗೆ = to me','ಅರ್ಥವಾಗುತ್ತಿಲ್ಲ = I don\'t understand']},
        {t:'chal',en:'Slower, please',tr:'ನಿಧಾನವಾಗಿ, ದಯವಿಟ್ಟು',pr:'nidhanavagi, dayavittu',morph:['ನಿಧಾನವಾಗಿ = slower','ದಯವಿಟ್ಟು = please']},
        {t:'chal',en:'Can you help me?',tr:'ನೀವು ನನಗೆ ಸಹಾಯ ಮಾಡುತ್ತೀರಾ?',pr:'nivu nanage sahaya maduttira?',morph:['ನೀವು = you (formal)','ನನಗೆ = to me','ಸಹಾಯ ಮಾಡುತ್ತೀರಾ? = will you help']},
        {t:'chal',en:'Do you speak English?',tr:'ನೀವು ಇಂಗ್ಲಿಷ್ ಮಾತನಾಡುತ್ತೀರಾ?',pr:'nivu inglish matanaduttira?',morph:['ನೀವು = you','ಇಂಗ್ಲಿಷ್ = English','ಮಾತನಾಡುತ್ತೀರಾ? = do you speak']}
      ],
      blocks:['<code>ನಿಧಾನವಾಗಿ</code> = slower','<code>ನೀವು ಇಂಗ್ಲಿಷ್ ಮಾತನಾಡುತ್ತೀರಾ?</code> = do you speak English?'] },
  ],
  dialogues: [
    { id:'cafe', title:'☕ At a café', emoji:'☕', turns:[
      {who:'You',tr:'ನಮಸ್ಕಾರ! ಒಂದು ಕಾಫಿ, ದಯವಿಟ್ಟು.',pr:'namaskāra! ondu kāphi, dayaviṭṭu.',en:'Hello! A coffee, please.'},
      {who:'Waiter',tr:'ನಮಸ್ಕಾರ! ಏನು ಕೊಡಲಿ?',pr:'namaskāra! ēnu koḍali?',en:'Hello! What can I get you?'},
      {who:'You',tr:'ಒಂದು ಕಾಫಿ, ದಯವಿಟ್ಟು.',pr:'ondu kāphi, dayaviṭṭu.',en:'A coffee, please.'},
      {who:'Waiter',tr:'ಇದು ಇಲ್ಲಿದೆ. ಇಪ್ಪತ್ತು ರೂಪಾಯಿ.',pr:'idu illide. ippattu rūpāyi.',en:'Here it is. Twenty rupees.'},
      {who:'You',tr:'ಧನ್ಯವಾದಗಳು!',pr:'dhanyavādagaḷu!',en:'Thanks a lot!'}
    ]},
    { id:'transport', title:'🚌 On the bus', emoji:'🚌', turns:[
      {who:'You',tr:'ಕ್ಷಮಿಸಿ, ಬಸ್ ನಿಲ್ದಾಣ ಎಲ್ಲಿ?',pr:'kṣamisi, bas nildāṇa elli?',en:'Excuse me, where is the bus stop?'},
      {who:'Local',tr:'ಅಲ್ಲಿ, ನೇರವಾಗಿ.',pr:'alli, nēravāgi.',en:'There, straight ahead.'},
      {who:'You',tr:'ಧನ್ಯವಾದ. ಒಂದು ಟಿಕೆಟ್, ದಯವಿಟ್ಟು.',pr:'dhanyavāda. ondu ṭikeṭ, dayaviṭṭu.',en:'Thanks. A ticket, please.'},
      {who:'Ticket',tr:'ಐವತ್ತು ರೂಪಾಯಿ.',pr:'aivattu rūpāyi.',en:'Fifty rupees.'}
    ]},
    { id:'restaurant', title:'🍛 At a restaurant', emoji:'🍛', turns:[
      {who:'Waiter',tr:'ಸ್ವಾಗತ! ಎಷ್ಟು ಜನ?',pr:'swāgata! eṣṭu jana?',en:'Welcome! How many people?'},
      {who:'You',tr:'ಇಬ್ಬರು.',pr:'ibbaru.',en:'Two people.'},
      {who:'You',tr:'ಮೆನು, ದಯವಿಟ್ಟು.',pr:'menu, dayaviṭṭu.',en:'The menu, please.'},
      {who:'You',tr:'ಅನ್ನ ಮತ್ತು ಚಹಾ, ದಯವಿಟ್ಟು.',pr:'anna mattu cahā, dayaviṭṭu.',en:'Rice and tea, please.'},
      {who:'Waiter',tr:'ಸರಿ, ಬರುತ್ತಿದೆ!',pr:'sari, baruttide!',en:'Okay, coming!'}
    ]},
    { id:'shopping', title:'🛍️ Shopping', emoji:'🛍️', turns:[
      {who:'You',tr:'ಇದು ಎಷ್ಟು?',pr:'idu eṣṭu?',en:'How much is this?'},
      {who:'Seller',tr:'ನೂರು ರೂಪಾಯಿ.',pr:'nūru rūpāyi.',en:'A hundred rupees.'},
      {who:'You',tr:'ತುಂಬಾ ದುಬಾರಿ.',pr:'tumbā dubāri.',en:'Too expensive.'},
      {who:'Seller',tr:'ಸರಿ, ಎಂಬತ್ತು ರೂಪಾಯಿ.',pr:'sari, embattu rūpāyi.',en:'Okay, eighty rupees.'},
      {who:'You',tr:'ಸರಿ, ತೆಗೆದುಕೊಳ್ಳುತ್ತೇನೆ.',pr:'sari, tegedukoḷḷuttēne.',en:'Okay, I\'ll take it.'}
    ]}
  ],
  pocket: [
    {tr:'ನಮಸ್ಕಾರ',pr:'namaskāra',en:'Hello',c:'Greetings'},
    {tr:'ಶುಭೋದಯ',pr:'shubhōdaya',en:'Good morning',c:'Greetings'},
    {tr:'ಹೇಗಿದ್ದೀರಿ?',pr:'hēgiddīri?',en:'How are you?',c:'Greetings'},
    {tr:'ಚೆನ್ನಾಗಿದ್ದೇನೆ, ಧನ್ಯವಾದ',pr:'chennāgiddēne, dhanyavāda',en:'I\'m well, thanks',c:'Greetings'},
    {tr:'ನನ್ನ ಹೆಸರು __NAME__',pr:'nanna hesaru __NAME__',en:'My name is...',c:'Greetings'},
    {tr:'ದಯವಿಟ್ಟು',pr:'dayaviṭṭu',en:'Please',c:'Courtesy'},
    {tr:'ಧನ್ಯವಾದ',pr:'dhanyavāda',en:'Thank you',c:'Courtesy'},
    {tr:'ಕ್ಷಮಿಸಿ',pr:'kṣamisi',en:'Sorry / excuse me',c:'Courtesy'},
    {tr:'ಸರಿ',pr:'sari',en:'Okay',c:'Courtesy'},
    {tr:'ಹೌದು',pr:'haudu',en:'Yes',c:'Courtesy'},
    {tr:'ಇಲ್ಲ',pr:'illa',en:'No',c:'Courtesy'},
    {tr:'ಒಂದು',pr:'ondu',en:'1',c:'Numbers'},
    {tr:'ಎರಡು',pr:'eraḍu',en:'2',c:'Numbers'},
    {tr:'ಮೂರು',pr:'mūru',en:'3',c:'Numbers'},
    {tr:'ನಾಲ್ಕು',pr:'nālku',en:'4',c:'Numbers'},
    {tr:'ಐದು',pr:'aidu',en:'5',c:'Numbers'},
    {tr:'ಹತ್ತು',pr:'hattu',en:'10',c:'Numbers'},
    {tr:'ನೀರು',pr:'nīru',en:'water',c:'Food'},
    {tr:'ಅನ್ನ',pr:'anna',en:'rice',c:'Food'},
    {tr:'ಚಹಾ',pr:'cahā',en:'tea',c:'Food'},
    {tr:'ಕಾಫಿ',pr:'kāphi',en:'coffee',c:'Food'},
    {tr:'ರೊಟ್ಟಿ',pr:'roṭṭi',en:'roti / bread',c:'Food'},
    {tr:'ಎಲ್ಲಿ...?',pr:'elli...?',en:'Where is...?',c:'Directions'},
    {tr:'ಬಲ',pr:'bala',en:'to the right',c:'Directions'},
    {tr:'ಎಡ',pr:'eḍa',en:'to the left',c:'Directions'},
    {tr:'ನೇರವಾಗಿ',pr:'nēravāgi',en:'straight ahead',c:'Directions'},
    {tr:'ನಿಲ್ದಾಣ',pr:'nildāṇa',en:'station',c:'Directions'},
    {tr:'ಇದು ಎಷ್ಟು?',pr:'idu eṣṭu?',en:'how much is this?',c:'Shopping'},
    {tr:'ತುಂಬಾ ದುಬಾರಿ',pr:'tumbā dubāri',en:'too expensive',c:'Shopping'},
    {tr:'ರೂಪಾಯಿ',pr:'rūpāyi',en:'rupee',c:'Shopping'},
    {tr:'ಸಹಾಯ!',pr:'sahāya!',en:'Help!',c:'Emergency'},
    {tr:'ವೈದ್ಯ',pr:'vaidya',en:'doctor',c:'Emergency'},
    {tr:'ನನಗೆ ಅರ್ಥವಾಗುತ್ತಿಲ್ಲ',pr:'nanage arthavāguttilla',en:'I don\'t understand',c:'Emergency'},
    {tr:'ಇಂದು',pr:'indu',en:'today',c:'Time'},
    {tr:'ನಾಳೆ',pr:'nāḷe',en:'tomorrow',c:'Time'},
    {tr:'ನಿನ್ನೆ',pr:'ninne',en:'yesterday',c:'Time'},
    {tr:'ವಿಮಾನ ನಿಲ್ದಾಣ',pr:'vimana nildana',en:'airport',c:'Travel'},
    {tr:'ಪಾಸ್‌ಪೋರ್ಟ್',pr:'passport',en:'passport',c:'Travel'},
    {tr:'ಟ್ಯಾಕ್ಸಿ, ದಯವಿಟ್ಟು',pr:'tyaksi, dayavittu',en:'Taxi, please',c:'Travel'},
    {tr:'ನನ್ನ ಬುಕಿಂಗ್ ಇದೆ',pr:'nanna booking ide',en:'I have a reservation',c:'Travel'},
    {tr:'ನಿಧಾನವಾಗಿ, ದಯವಿಟ್ಟು',pr:'nidhanavagi, dayavittu',en:'Slower, please',c:'Travel'},
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Shopping','Emergency','Time', 'Travel'],
  culture: [
    {icon:'🙏',title:'Namaskāra — hands folded',body:'The folding of the palms into a namaskāra is more than a greeting — it\'s a sign of respect. The word itself comes from \'to bow\'. Use it to open any conversation; it works with everyone, young or old.'},
    {icon:'☕',title:'Filter coffee ritual',body:'South India runs on strong filter coffee, brewed in a metal tumbler and poured back and forth to froth it. Asking for a <i>kāphi</i> (coffee) and <i>cahā</i> (tea) is a great way to practise your Kannada and get a local smile.'},
    {icon:'🍛',title:'Eating with your hand',body:'A traditional meals platter piles rice with sambar, rasam, curd and a vegetable. People eat with the right hand, mixing everything with the fingers. It\'s a shared, joyful event — always washed before and after.'},
    {icon:'🛺',title:'Auto rickshaws & getting around',body:'The auto rickshaw is everywhere in Karnataka. Always agree on the fare before the ride, or ask for the meter. A friendly <i>nildāṇa elli?</i> (where is the station?) goes a long way.'},
    {icon:'🌦️',title:'Weather is small talk',body:'Kannada speakers love chatting about the monsoon and the heat. <i>Indu maḷe baruttade</i> (\'it\'s raining today\') is a perfect icebreaker, and the reply is often a warm share about the seasons.'},
    {icon:'👵',title:'Respect & family',body:'Family is central, and elders are treated with deep respect — many touch an elder\'s feet for a blessing. Using <i>amma</i> (mother) for any older woman and <i>appa</i> (father) for any older man is polite and warm.'}
  ],
  sounds: [
    {l:'ಖ',say:'aspirated k — a strong puff of air, like the kh in "Khan"',ex:'ಖಾನೆ = khānē (a room)',voice:'ಖಾನೆ'},
    {l:'ಘ',say:'aspirated g — a breathy g, like the gh with air',ex:'ಘನ = ghana (vast)',voice:'ಘನ'},
    {l:'ತ',say:'dental t — your tongue touches the teeth',ex:'ತಂದೆ = tande (father)',voice:'ತಂದೆ'},
    {l:'ಟ',say:'retroflex t — the tongue curls back to the roof of the mouth',ex:'ಟಿಕೆಟ್ = ṭikeṭ (a ticket)',voice:'ಟಿಕೆಟ್'},
    {l:'ಳ',say:'retroflex l — the tongue curls back, harder than ಲ',ex:'ಬಾಳೆ = bāḷe (plantain)',voice:'ಬಾಳೆ'},
    {l:'ಞ',say:'"ny" as in canyon',ex:'ಜ್ಞಾನ = jñāna (knowledge)',voice:'ಜ್ಞಾನ'},
    {l:'ಷ',say:'retroflex sh — the tongue curls back',ex:'ಕಷ್ಟ = kaṣṭa (difficulty)',voice:'ಕಷ್ಟ'},
    {l:'ವ',say:'a soft v, halfway between v and w',ex:'ವರು = varu (come)',voice:'ವರು'}
  ],
  resources: [
    {icon:'🗣️',t:'Learn Kannada in English',d:'Clear beginner lessons taught in English that build everyday phrases and the Kannada script step by step.',q:'learn Kannada in English for beginners'},
    {icon:'🎬',t:'Kannada film & music',d:'Films and songs are a fun, natural way to pick up spoken Kannada and everyday idioms.',q:'Kannada songs with lyrics learn language'},
    {icon:'🍛',t:'Karnataka cooking videos',d:'South Indian food videos use simple, repeated Kannada words for ingredients and actions.',q:'Kannada recipes Karnataka cooking'},
    {icon:'🧑‍🏫',t:'Kannada conversations',d:'Real conversations with subtitles to get used to the speed and rhythm of spoken Kannada.',q:'Kannada conversation practice for beginners'},
    {icon:'🎧',t:'Kannada stories & audio',d:'Easy listening for a walk or commute — build your ear while enjoying simple content.',q:'Kannada audiobook learn stories'}
  ]
};
