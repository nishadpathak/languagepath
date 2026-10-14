/* ---- punjabi ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["punjabi"] = {
  name: 'Punjabi',
  flag: '🇮🇳',
  tts: 'pa-IN',
  dir: 'ltr',
  native: 'ਪੰਜਾਬੀ',
  script: 'Gurmukhi',
  soundTitle: 'Punjabi sounds & writing',
  soundIntro: 'Punjabi is written in the Gurmukhi alphabet. A few letters sound different from English — learn them and you can read any Punjabi word aloud.',
  grammar: '<p>Punjabi is easy to structure. There\'s no word for "a" or "the" — <i>ਪਾਣੀ</i> just means "water" or "the water" depending on context. The verb usually comes at the <b>end</b>: <b>ਮੈਨੂੰ ਪਾਣੀ ਚਾਹੀਦਾ ਹੈ</b> (I want water) literally reads "to-me water is-needed". To want something, say <b>ਮੈਨੂੰ … ਚਾਹੀਦਾ ਹੈ</b>; for feminine words like ਚਾਹ (tea) it becomes … <b>ਚਾਹੀਦੀ ਹੈ</b>. The little word <b>ਹੈ</b> (hai) means "is/are", and starting a question with <b>ਕੀ</b> (kee) makes it a yes/no question.</p>',
  bridges: '<div class="note">🇮🇳 <b>Hindi.</b> Punjabi and Hindi share loads of everyday words — only the alphabet and pronunciation differ. ਪਾਣੀ = पानी (water), ਦੋਸਤ = दोस्त (friend), ਸੜਕ = सड़क (road), ਦੁੱਧ = दूध (milk).</div><div class="note">🇵🇰 <b>Urdu.</b> Punjabi also borrows many words from Urdu: ਸ਼ੁਕਰੀਆ (shukriyā = thanks), ਦਵਾਈ (davāī = medicine), ਬਾਜ਼ਾਰ (bāzār = market). That\'s why Urdu speakers pick up the Punjabi spoken on both sides of the border quickly.</div>',
  lessons: [
    { id:1, title:'Greetings & being polite', focus:'ਸਤ ਸ੍ਰੀ ਅਕਾਲ · ਕਿਵੇਂ ਹੋ? · ਧੰਨਵਾਦ',
      steps:[
        {t:'say',text:'Start with the greeting you\'ll hear everywhere in Punjab: <span class="inline-tr">ਸਤ ਸ੍ਰੀ ਅਕਾਲ</span> — hello. Some write it <span class="inline-tr">ਸਤ ਸ਼੍ਰੀ ਅਕਾਲ</span>. It literally means "Truth is timeless." Say it out loud.',tr:'ਸਤ ਸ੍ਰੀ ਅਕਾਲ'},
        {t:'words',items:[{tr:'ਸਤ ਸ੍ਰੀ ਅਕਾਲ',pr:'sat sree a-KAAL',en:'hello / goodbye'},{tr:'ਜੀ ਆਇਆਂ ਨੂੰ',pr:'JEE aa-ee-an noon',en:'welcome'},{tr:'ਕਿਵੇਂ ਹੋ?',pr:'KI-ven ho',en:'how are you?'},{tr:'ਧੰਨਵਾਦ',pr:'DHUN-vaad',en:'thank you'}]},
        {t:'chal',en:'Hello',tr:'ਸਤ ਸ੍ਰੀ ਅਕਾਲ',pr:'sat sree a-KAAL',morph:['sat sree akal = hello / goodbye']},
        {t:'say',text:'To ask how someone is: <span class="inline-tr">ਕਿਵੇਂ ਹੋ?</span>. The friendly reply is <span class="inline-tr">ਮੈਂ ਠੀਕ ਹਾਂ</span> — I\'m fine.',tr:'ਕਿਵੇਂ ਹੋ?'},
        {t:'words',items:[{tr:'ਕਿਵੇਂ ਹੋ?',pr:'KI-ven ho',en:'how are you?'},{tr:'ਮੈਂ ਠੀਕ ਹਾਂ',pr:'main THEEK haan',en:'I\'m fine'},{tr:'ਬਹੁਤ ਧੰਨਵਾਦ',pr:'BA-hut DHUN-vaad',en:'thank you very much'},{tr:'ਮਾਫ਼ ਕਰਨਾ',pr:'MAA-f KAR-naa',en:'excuse me / sorry'}]},
        {t:'chal',en:'Hello, how are you?',tr:'ਸਤ ਸ੍ਰੀ ਅਕਾਲ, ਕਿਵੇਂ ਹੋ?',pr:'sat sree a-KAAL, KI-ven ho',morph:['sat sree akal = hello','kiven ho? = how are you?']}
      ],
      blocks:['<code>ਸਤ ਸ੍ਰੀ ਅਕਾਲ</code> = hello / goodbye','<code>ਕਿਵੇਂ ਹੋ?</code> = how are you?','<code>ਧੰਨਵਾਦ</code> = thank you'] },
    { id:2, title:'Polite words', focus:'ਕਿਰਪਾ ਕਰਕੇ · ਧੰਨਵਾਦ · ਹਾਂ / ਨਹੀਂ',
      steps:[
        {t:'say',text:'Politeness is easy in Punjabi. <span class="inline-tr">ਕਿਰਪਾ ਕਰਕੇ</span> = please, and <span class="inline-tr">ਧੰਨਵਾਦ</span> = thank you. Say them out loud.',tr:'ਕਿਰਪਾ ਕਰਕੇ'},
        {t:'words',items:[{tr:'ਕਿਰਪਾ ਕਰਕੇ',pr:'KIR-pa KAR-kay',en:'please'},{tr:'ਧੰਨਵਾਦ',pr:'DHUN-vaad',en:'thank you'},{tr:'ਬਹੁਤ ਧੰਨਵਾਦ',pr:'BA-hut DHUN-vaad',en:'thank you very much'},{tr:'ਹਾਂ',pr:'HAAN',en:'yes'},{tr:'ਨਹੀਂ',pr:'na-heen',en:'no'}]},
        {t:'chal',en:'Thank you very much',tr:'ਬਹੁਤ ਧੰਨਵਾਦ',pr:'BA-hut DHUN-vaad',morph:['bahut = very','dhunvaad = thank you']},
        {t:'say',text:'For "you\'re welcome" or "no problem", use <span class="inline-tr">ਕੋਈ ਗੱਲ ਨਹੀਂ</span> — literally "it\'s nothing".',tr:'ਕੋਈ ਗੱਲ ਨਹੀਂ'},
        {t:'chal',en:'You\'re welcome',tr:'ਕੋਈ ਗੱਲ ਨਹੀਂ',pr:'KO-ee GALL na-heen',morph:['koi = any','gall = a matter','nahin = not']},
        {t:'say',text:'To say "excuse me" or "sorry" before interrupting: <span class="inline-tr">ਮਾਫ਼ ਕਰਨਾ</span>.',tr:'ਮਾਫ਼ ਕਰਨਾ'},
        {t:'chal',en:'Yes, please',tr:'ਹਾਂ, ਕਿਰਪਾ ਕਰਕੇ',pr:'HAAN, KIR-pa KAR-kay',morph:['haan = yes','kirpa karke = please']}
      ],
      blocks:['<code>ਕਿਰਪਾ ਕਰਕੇ</code> = please','<code>ਧੰਨਵਾਦ</code> = thank you','<code>ਮਾਫ਼ ਕਰਨਾ</code> = excuse me / sorry','<code>ਹਾਂ</code> / <code>ਨਹੀਂ</code> = yes / no'] },
    { id:3, title:'Numbers 1–10', focus:'ਇੱਕ · ਦੋ · ਤਿੰਨ · ਦਸ',
      steps:[
        {t:'say',text:'Numbers are the fastest win. Listen and repeat: <span class="inline-tr">ਇੱਕ, ਦੋ, ਤਿੰਨ</span>.',tr:'ਇੱਕ'},
        {t:'words',items:[{tr:'ਇੱਕ',pr:'ikk',en:'1'},{tr:'ਦੋ',pr:'do',en:'2'},{tr:'ਤਿੰਨ',pr:'tinn',en:'3'},{tr:'ਚਾਰ',pr:'chaar',en:'4'},{tr:'ਪੰਜ',pr:'panj',en:'5'},{tr:'ਛੇ',pr:'chhe',en:'6'},{tr:'ਸੱਤ',pr:'satt',en:'7'},{tr:'ਅੱਠ',pr:'atth',en:'8'},{tr:'ਨੌ',pr:'nau',en:'9'},{tr:'ਦਸ',pr:'das',en:'10'}]},
        {t:'chal',en:'Two teas, please',tr:'ਦੋ ਚਾਹ, ਕਿਰਪਾ ਕਰਕੇ',pr:'do chaah, KIR-pa KAR-kay',morph:['do = two','chaah = tea','kirpa karke = please']},
        {t:'say',text:'To ask "how much is it?": <span class="inline-tr">ਇਹ ਕਿੰਨੇ ਦਾ ਹੈ?</span> A key phrase for shopping.',tr:'ਇਹ ਕਿੰਨੇ ਦਾ ਹੈ?'},
        {t:'chal',en:'How much is it?',tr:'ਇਹ ਕਿੰਨੇ ਦਾ ਹੈ?',pr:'ih KIN-nay daa hay?',morph:['ih = this','kinne da = how much','hai = is']},
        {t:'chal',en:'It\'s ten rupees',tr:'ਦਸ ਰੁਪਏ',pr:'das ru-PA-yay',morph:['das = ten','rupaye = rupees']}
      ],
      blocks:['ਇੱਕ, ਦੋ, ਤਿੰਨ, ਚਾਰ, ਪੰਜ = 1–5','<code>ਇਹ ਕਿੰਨੇ ਦਾ ਹੈ?</code> = how much is it?','<code>ਦਸ ਰੁਪਏ</code> = ten rupees'] },
    { id:4, title:'"I want" — ਮੈਨੂੰ … ਚਾਹੀਦਾ ਹੈ', focus:'ਮੈਨੂੰ … ਚਾਹੀਦਾ ਹੈ · ਚਾਹੀਦੀ ਹੈ',
      steps:[
        {t:'say',text:'The magic phrase to ask for anything: <span class="inline-tr">ਮੈਨੂੰ … ਚਾਹੀਦਾ ਹੈ</span> — I want… Replace the … with the thing you need.',tr:'ਮੈਨੂੰ … ਚਾਹੀਦਾ ਹੈ'},
        {t:'say',text:'There\'s no "a" or "the" in Punjabi — just say the noun. <span class="inline-tr">ਪਾਣੀ</span> is just "water".',tr:'ਪਾਣੀ'},
        {t:'chal',en:'I want water',tr:'ਮੈਨੂੰ ਪਾਣੀ ਚਾਹੀਦਾ ਹੈ',pr:'mai-NOO PAA-nee cha-HEE-daa hay',morph:['mainu = to me','paani = water','chahida hai = is needed / I want']},
        {t:'say',text:'The word after ਮੈਨੂੰ changes with the noun\'s gender. For most things it\'s <span class="inline-tr">ਚਾਹੀਦਾ ਹੈ</span>; for feminine words like ਚਾਹ (tea) it\'s <span class="inline-tr">ਚਾਹੀਦੀ ਹੈ</span>. Don\'t worry about getting it perfect — people understand you.',tr:'ਚਾਹੀਦੀ ਹੈ'},
        {t:'chal',en:'I want tea',tr:'ਮੈਨੂੰ ਚਾਹ ਚਾਹੀਦੀ ਹੈ',pr:'mai-NOO chaah cha-HEE-dee hay',morph:['mainu = to me','chaah = tea','chahidi hai = I want (feminine)']},
        {t:'chal',en:'I want a ticket',tr:'ਮੈਨੂੰ ਟਿਕਟ ਚਾਹੀਦੀ ਹੈ',pr:'mai-NOO TICKET cha-HEE-dee hay',morph:['mainu = to me','ticket = ticket','chahidi hai = I want'],link:'≈ English ticket'},
        {t:'chal',en:'I want the bill',tr:'ਮੈਨੂੰ ਹਿਸਾਬ ਚਾਹੀਦਾ ਹੈ',pr:'mai-NOO hi-SAAB cha-HEE-daa hay',morph:['mainu = to me','hisaab = the bill','chahida hai = I want']}
      ],
      blocks:['<code>ਮੈਨੂੰ … ਚਾਹੀਦਾ ਹੈ</code> = I want…','<code>ਚਾਹੀਦਾ</code> / <code>ਚਾਹੀਦੀ</code> = masculine / feminine','<code>ਹਿਸਾਬ</code> = the bill'] },
    { id:5, title:'Food & drink', focus:'ਪਾਣੀ · ਚਾਹ · ਰੋਟੀ · ਦਾਲ',
      steps:[
        {t:'say',text:'Eating in Punjab? Key words: <span class="inline-tr">ਪਾਣੀ</span> (water), <span class="inline-tr">ਚਾਹ</span> (tea), <span class="inline-tr">ਰੋਟੀ</span> (flatbread).',tr:'ਪਾਣੀ'},
        {t:'words',items:[{tr:'ਪਾਣੀ',pr:'PAA-nee',en:'water',link:'≈ Hindi पानी'},{tr:'ਚਾਹ',pr:'chaah',en:'tea',link:'≈ Hindi चाय'},{tr:'ਦੁੱਧ',pr:'dudh',en:'milk',link:'≈ Hindi दूध'},{tr:'ਰੋਟੀ',pr:'RO-tee',en:'flatbread / bread'},{tr:'ਦਾਲ',pr:'daal',en:'lentils',link:'≈ Hindi दाल'},{tr:'ਚੌਲ',pr:'chol',en:'rice'},{tr:'ਲੱਸੀ',pr:'LAS-see',en:'lassi (a drink)'}]},
        {t:'chal',en:'Dal and rice, please',tr:'ਦਾਲ ਅਤੇ ਚੌਲ, ਕਿਰਪਾ ਕਰਕੇ',pr:'daal a-TAY chol, KIR-pa KAR-kay',morph:['daal = lentils','ate = and','chol = rice']},
        {t:'say',text:'<span class="inline-tr">ਅਤੇ</span> means "and". <span class="inline-tr">ਸੁਆਦ</span> means "taste" — say <span class="inline-tr">ਬਹੁਤ ਸੁਆਦ!</span> for "very tasty!".',tr:'ਬਹੁਤ ਸੁਆਦ!'},
        {t:'chal',en:'It\'s delicious!',tr:'ਬਹੁਤ ਸੁਆਦ!',pr:'BA-hut swaad!',morph:['bahut = very','swaad = tasty / delicious']},
        {t:'chal',en:'The bill, please',tr:'ਹਿਸਾਬ, ਕਿਰਪਾ ਕਰਕੇ',pr:'hi-SAAB, KIR-pa KAR-kay',morph:['hisaab = the bill','kirpa karke = please']}
      ],
      blocks:['<code>ਪਾਣੀ</code>, <code>ਚਾਹ</code>, <code>ਰੋਟੀ</code> = water, tea, bread','<code>ਹਿਸਾਬ</code> = the bill','<code>ਬਹੁਤ ਸੁਆਦ!</code> = delicious!'] },
    { id:6, title:'Getting around', focus:'ਕਿੱਥੇ ਹੈ? · ਸੱਜੇ · ਖੱਬੇ · ਸਿੱਧਾ',
      steps:[
        {t:'say',text:'The most useful question in any town: <span class="inline-tr">… ਕਿੱਥੇ ਹੈ?</span> — where is…?',tr:'… ਕਿੱਥੇ ਹੈ?'},
        {t:'words',items:[{tr:'ਸਟੇਸ਼ਨ ਕਿੱਥੇ ਹੈ?',pr:'s-TAY-shan KIT-thay hay',en:'where is the station?'},{tr:'ਸੱਜੇ',pr:'SAJ-jay',en:'to the right'},{tr:'ਖੱਬੇ',pr:'KHAB-bay',en:'to the left'},{tr:'ਸਿੱਧਾ',pr:'SID-dhaa',en:'straight ahead'},{tr:'ਬਾਥਰੂਮ',pr:'BAATH-room',en:'the bathroom',link:'≈ English bathroom'},{tr:'ਬਾਜ਼ਾਰ',pr:'baa-ZAAR',en:'the market',link:'≈ English bazaar'}]},
        {t:'chal',en:'Where is the station?',tr:'ਸਟੇਸ਼ਨ ਕਿੱਥੇ ਹੈ?',pr:'s-TAY-shan KIT-thay hay',morph:['station = station','kitthe hai? = where is']},
        {t:'chal',en:'Where is the bathroom?',tr:'ਬਾਥਰੂਮ ਕਿੱਥੇ ਹੈ?',pr:'BAATH-room KIT-thay hay',morph:['bathroom = bathroom','kitthe hai? = where is']},
        {t:'say',text:'<span class="inline-tr">ਸੱਜੇ</span> = to the right, <span class="inline-tr">ਖੱਬੇ</span> = to the left, <span class="inline-tr">ਸਿੱਧਾ</span> = straight on.',tr:'ਸੱਜੇ'},
        {t:'chal',en:'Turn right',tr:'ਸੱਜੇ ਮੁੜੋ',pr:'SAJ-jay mu-ro',morph:['sajje = to the right','muro = turn']}
      ],
      blocks:['<code>… ਕਿੱਥੇ ਹੈ?</code> = where is…?','<code>ਸੱਜੇ</code> / <code>ਖੱਬੇ</code> = right / left','<code>ਸਿੱਧਾ</code> = straight ahead'] },
    { id:7, title:'Questions & "do you have…?"', focus:'ਕੀ ਤੁਹਾਡੇ ਕੋਲ … ਹੈ? · ਮੇਰੇ ਕੋਲ',
      steps:[
        {t:'say',text:'To ask if someone has something: <span class="inline-tr">ਕੀ ਤੁਹਾਡੇ ਕੋਲ … ਹੈ?</span> — do you have…?',tr:'ਕੀ ਤੁਹਾਡੇ ਕੋਲ … ਹੈ?'},
        {t:'say',text:'Start with <span class="inline-tr">ਕੀ</span> to make it a yes/no question — it\'s like a question mark at the front.',tr:'ਕੀ'},
        {t:'chal',en:'Do you have water?',tr:'ਕੀ ਤੁਹਾਡੇ ਕੋਲ ਪਾਣੀ ਹੈ?',pr:'kee tu-HAA-day kol PAA-nee hay',morph:['kee = question marker','tuhade kol = do you have','paani = water','hai = is']},
        {t:'say',text:'To say "I have": <span class="inline-tr">ਮੇਰੇ ਕੋਲ … ਹੈ</span>.',tr:'ਮੇਰੇ ਕੋਲ … ਹੈ'},
        {t:'chal',en:'I have a ticket',tr:'ਮੇਰੇ ਕੋਲ ਟਿਕਟ ਹੈ',pr:'MAY-ray kol TICKET hay',morph:['mere kol = I have','ticket = ticket','hai = is']},
        {t:'say',text:'<span class="inline-tr">ਕੀ … ਹੈ?</span> also asks "is there…?" — so <span class="inline-tr">ਕੀ ਵਾਈ-ਫ਼ਾਈ ਹੈ?</span> is "is there wifi?".',tr:'ਕੀ ਵਾਈ-ਫ਼ਾਈ ਹੈ?'},
        {t:'chal',en:'Is there wifi?',tr:'ਕੀ ਵਾਈ-ਫ਼ਾਈ ਹੈ?',pr:'kee WAI-fai hay',morph:['kee = is there','wai-fai = wifi','hai = is']}
      ],
      blocks:['<code>ਕੀ ਤੁਹਾਡੇ ਕੋਲ … ਹੈ?</code> = do you have…?','<code>ਮੇਰੇ ਕੋਲ … ਹੈ</code> = I have…','<code>ਕੀ … ਹੈ?</code> = is there…?'] },
    { id:8, title:'Family & people', focus:'ਪਰਿਵਾਰ · ਮਾਂ · ਪਿਤਾ ਜੀ · ਦੋਸਤ',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">ਪਰਿਵਾਰ</span> (family), <span class="inline-tr">ਮਾਂ</span> (mother), <span class="inline-tr">ਪਿਤਾ ਜੀ</span> (father).',tr:'ਪਰਿਵਾਰ'},
        {t:'words',items:[{tr:'ਪਰਿਵਾਰ',pr:'pa-ri-VAAR',en:'family'},{tr:'ਮਾਂ',pr:'maan',en:'mother'},{tr:'ਪਿਤਾ ਜੀ',pr:'pi-TAA jee',en:'father'},{tr:'ਭਾਈ',pr:'bhaa-ee',en:'brother'},{tr:'ਭੈਣ',pr:'bhain',en:'sister'},{tr:'ਦੋਸਤ',pr:'dost',en:'friend',link:'≈ Hindi/Urdu दोस्त'}]},
        {t:'chal',en:'This is my mother',tr:'ਇਹ ਮੇਰੀ ਮਾਂ ਹੈ',pr:'ih MAY-ree maan hay',morph:['ih = this','meri = my','maan = mother','hai = is']},
        {t:'chal',en:'I have a brother',tr:'ਮੇਰੇ ਕੋਲ ਇੱਕ ਭਾਈ ਹੈ',pr:'MAY-ray kol ikk bhaa-ee hay',morph:['mere kol = I have','ikk = one','bhaa-ee = brother','hai = is']},
        {t:'say',text:'Punjabi is full of respect — add <span class="inline-tr">ਜੀ</span> after names and titles: <b>ਪਿਤਾ ਜੀ</b>, <b>ਮਾਤਾ ਜੀ</b>.',tr:'ਜੀ'},
        {t:'chal',en:'I love my family',tr:'ਮੈਂ ਆਪਣੇ ਪਰਿਵਾਰ ਨੂੰ ਪਿਆਰ ਕਰਦਾ ਹਾਂ',pr:'main aa-p-NAY pa-ri-VAAR noon PYAAR kar-daa haan',morph:['main = I','apne parivaar nu = my family','pyaar karda haan = (I) love']}
      ],
      blocks:['<code>ਪਰਿਵਾਰ</code> = family','<code>ਮਾਂ</code> / <code>ਪਿਤਾ ਜੀ</code> = mother / father','<code>ਦੋਸਤ</code> = friend'] },
    { id:9, title:'Time, days & weather', focus:'ਅੱਜ · ਕੱਲ੍ਹ · ਮੌਸਮ',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">ਅੱਜ</span>, tomorrow is <span class="inline-tr">ਕੱਲ੍ਹ</span>.',tr:'ਅੱਜ'},
        {t:'words',items:[{tr:'ਅੱਜ',pr:'ajj',en:'today'},{tr:'ਕੱਲ੍ਹ',pr:'kal',en:'tomorrow / yesterday'},{tr:'ਹੁਣ',pr:'hun',en:'now'},{tr:'ਸਵੇਰੇ',pr:'sa-VAY-ray',en:'in the morning'},{tr:'ਮੌਸਮ',pr:'MAU-sam',en:'the weather',link:'≈ Hindi मौसम'}]},
        {t:'chal',en:'See you tomorrow',tr:'ਕੱਲ੍ਹ ਮਿਲਾਂਗੇ',pr:'kal mee-LAA-ngay',morph:['kal = tomorrow','meelange = we\'ll meet']},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">ਮੌਸਮ ਕਿਵੇਂ ਹੈ?</span> "Hot" is <span class="inline-tr">ਗਰਮ</span>, "cold" is <span class="inline-tr">ਠੰਡਾ</span>.',tr:'ਮੌਸਮ ਕਿਵੇਂ ਹੈ?'},
        {t:'chal',en:'It\'s cold today',tr:'ਅੱਜ ਠੰਡਾ ਹੈ',pr:'ajj THAN-daa hay',morph:['ajj = today','thanda = cold','hai = is']},
        {t:'chal',en:'It\'s very hot',tr:'ਬਹੁਤ ਗਰਮ ਹੈ',pr:'BA-hut ga-ram hay',morph:['bahut = very','garam = hot','hai = is']}
      ],
      blocks:['<code>ਅੱਜ</code> / <code>ਕੱਲ੍ਹ</code> = today / tomorrow','<code>ਮੌਸਮ ਕਿਵੇਂ ਹੈ?</code> = what\'s the weather?','<code>ਗਰਮ</code> / <code>ਠੰਡਾ</code> = hot / cold'] },
    { id:10, title:'Small talk & your name', focus:'ਮੇਰਾ ਨਾਮ … ਹੈ · __NAME__',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">ਮੇਰਾ ਨਾਮ … ਹੈ</span> — my name is…',tr:'ਮੇਰਾ ਨਾਮ … ਹੈ'},
        {t:'chal',en:'My name is __NAME__',tr:'ਮੇਰਾ ਨਾਮ __NAME__ ਹੈ',pr:'MAY-raa naam __NAME__ hay',morph:['mera = my','naam = name','__NAME__ = your name','hai = is']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">ਤੁਹਾਡਾ ਨਾਮ ਕੀ ਹੈ?</span>',tr:'ਤੁਹਾਡਾ ਨਾਮ ਕੀ ਹੈ?'},
        {t:'chal',en:'What\'s your name?',tr:'ਤੁਹਾਡਾ ਨਾਮ ਕੀ ਹੈ?',pr:'tu-HAA-daa naam kee hay?',morph:['tuhada = your','naam = name','kee = what','hai = is']},
        {t:'chal',en:'Where are you from?',tr:'ਤੁਸੀਂ ਕਿੱਥੋਂ ਹੋ?',pr:'tu-SEEN KIT-thon ho?',morph:['tusi = you','kitthon = from where','ho = are']},
        {t:'chal',en:'Pleased to meet you',tr:'ਤੁਹਾਨੂੰ ਮਿਲ ਕੇ ਖੁਸ਼ੀ ਹੋਈ',pr:'tu-HAA-noon mil ke khu-SHEE HO-ee',morph:['tuhanu mil ke = to meet you','khushi hoi = (I am) happy']}
      ],
      blocks:['<code>ਮੇਰਾ ਨਾਮ … ਹੈ</code> = my name is…','<code>ਤੁਹਾਡਾ ਨਾਮ ਕੀ ਹੈ?</code> = what\'s your name?','<code>ਤੁਸੀਂ ਕਿੱਥੋਂ ਹੋ?</code> = where are you from?'] },
    { id:11, title:'Health & emergency', focus:'ਮਦਦ! · ਡਾਕਟਰ · ਸਮਝ ਨਹੀਂ ਆਈ',
      steps:[
        {t:'say',text:'The most important words if you need help: <span class="inline-tr">ਮਦਦ!</span> (help), <span class="inline-tr">ਡਾਕਟਰ</span> (doctor), <span class="inline-tr">ਫਾਰਮੇਸੀ</span> (pharmacy).',tr:'ਮਦਦ!'},
        {t:'words',items:[{tr:'ਮਦਦ!',pr:'ma-DAD',en:'help!'},{tr:'ਡਾਕਟਰ',pr:'DAK-tar',en:'doctor'},{tr:'ਫਾਰਮੇਸੀ',pr:'phaar-MAY-see',en:'pharmacy'},{tr:'ਹਸਪਤਾਲ',pr:'has-pa-TAAL',en:'hospital'},{tr:'ਦਵਾਈ',pr:'da-VAA-ee',en:'medicine'}]},
        {t:'chal',en:'Help!',tr:'ਮਦਦ!',pr:'ma-DAD',morph:['madad = help']},
        {t:'chal',en:'I don\'t understand',tr:'ਮੈਨੂੰ ਸਮਝ ਨਹੀਂ ਆਈ',pr:'mai-NOO sa-majh na-heen AA-ee',morph:['mainu = to me','samajh = understand','nahin aayi = didn\'t come']},
        {t:'say',text:'Need a doctor? <span class="inline-tr">ਮੈਨੂੰ ਡਾਕਟਰ ਚਾਹੀਦਾ ਹੈ</span> — I need a doctor.',tr:'ਮੈਨੂੰ ਡਾਕਟਰ ਚਾਹੀਦਾ ਹੈ'},
        {t:'chal',en:'I need a doctor',tr:'ਮੈਨੂੰ ਡਾਕਟਰ ਚਾਹੀਦਾ ਹੈ',pr:'mai-NOO DAK-tar cha-HEE-daa hay',morph:['mainu = to me','doctor = doctor','chahida hai = is needed'],link:'≈ English doctor'},
        {t:'chal',en:'I\'m sick',tr:'ਮੈਂ ਬੀਮਾਰ ਹਾਂ',pr:'main bee-MAAR haan',morph:['main = I','bimaar = sick','haan = am']}
      ],
      blocks:['<code>ਮਦਦ!</code> = help','<code>ਡਾਕਟਰ</code> = doctor','<code>ਮੈਨੂੰ ਸਮਝ ਨਹੀਂ ਆਈ</code> = I don\'t understand'] },
    { id:12, title:'Tying it together', focus:'ਚਾਹੀਦਾ ਹੈ · ਕਿੱਥੇ ਹੈ · ਸੁਆਦ · a capstone scene',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolbox. This capstone uses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello, how are you?',tr:'ਸਤ ਸ੍ਰੀ ਅਕਾਲ, ਕਿਵੇਂ ਹੋ?',pr:'sat sree a-KAAL, KI-ven ho',morph:['sat sree akal = hello','kiven ho? = how are you?']},
        {t:'chal',en:'I want tea, please',tr:'ਮੈਨੂੰ ਚਾਹ ਚਾਹੀਦੀ ਹੈ, ਕਿਰਪਾ ਕਰਕੇ',pr:'mai-NOO chaah cha-HEE-dee hay, KIR-pa KAR-kay',morph:['mainu chaah chahidi hai = I want tea','kirpa karke = please']},
        {t:'chal',en:'Where is the station?',tr:'ਸਟੇਸ਼ਨ ਕਿੱਥੇ ਹੈ?',pr:'s-TAY-shan KIT-thay hay',morph:['station kitthe hai = where is the station']},
        {t:'chal',en:'How much is it?',tr:'ਇਹ ਕਿੰਨੇ ਦਾ ਹੈ?',pr:'ih KIN-nay daa hay',morph:['ih kinne da hai = how much is it']},
        {t:'chal',en:'Delicious! Thank you!',tr:'ਬਹੁਤ ਸੁਆਦ! ਧੰਨਵਾਦ!',pr:'BA-hut swaad! DHUN-vaad!',morph:['bahut swaad = delicious','dhunvaad = thank you']}
      ],
      blocks:['You built: greetings, wanting, directions, prices, thanks — a full day out in Punjab.'] },
    { id:13, title:'Airport & tickets', focus:'ਹਵਾਈ ਅੱਡਾ · ਪਾਸਪੋਰਟ · ਟਿਕਟ · ਗੇਟ',
      steps:[
        {t:'say',text:'You have landed. The building is the <span class="inline-tr">ਹਵਾਈ ਅੱਡਾ</span>. Your document is a <span class="inline-tr">ਪਾਸਪੋਰਟ</span>.',tr:'ਹਵਾਈ ਅੱਡਾ'},
        {t:'words',items:[{tr:'ਹਵਾਈ ਅੱਡਾ',pr:'ha-VAA-ee AD-daa',en:'airport'},{tr:'ਪਾਸਪੋਰਟ',pr:'PAAS-port',en:'passport'},{tr:'ਟਿਕਟ',pr:'TICKET',en:'ticket'},{tr:'ਗੇਟ',pr:'geyt',en:'gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'ਹਵਾਈ ਅੱਡਾ ਕਿੱਥੇ ਹੈ?',pr:'ha-VAA-ee AD-daa KIT-thay hay',morph:['ਹਵਾਈ ਅੱਡਾ = airport','ਕਿੱਥੇ ਹੈ? = where is']},
        {t:'chal',en:'Here is my passport',tr:'ਇਹ ਮੇਰਾ ਪਾਸਪੋਰਟ ਹੈ',pr:'ih MAY-raa PAAS-port hay',morph:['ਇਹ = this','ਮੇਰਾ = my','ਪਾਸਪੋਰਟ = passport']},
        {t:'chal',en:'A ticket, please',tr:'ਇੱਕ ਟਿਕਟ, ਕਿਰਪਾ ਕਰਕੇ',pr:'ikk TICKET, KIR-pa KAR-kay',morph:['ਇੱਕ ਟਿਕਟ = a ticket','ਕਿਰਪਾ ਕਰਕੇ = please']},
        {t:'chal',en:'Where is the gate?',tr:'ਗੇਟ ਕਿੱਥੇ ਹੈ?',pr:'geyt KIT-thay hay',morph:['ਗੇਟ = gate','ਕਿੱਥੇ ਹੈ? = where is']}
      ],
      blocks:['<code>ਹਵਾਈ ਅੱਡਾ</code> = airport','<code>ਪਾਸਪੋਰਟ</code> = passport','<code>ਟਿਕਟ</code> = ticket'] },
    { id:14, title:'The taxi', focus:'ਟੈਕਸੀ · ਜਾਣਾ · ਹੋਟਲ · ਰੋਕੋ',
      steps:[
        {t:'say',text:'The driver is waiting. <span class="inline-tr">ਟੈਕਸੀ</span> is a loanword. Tell them <span class="inline-tr">ਮੈਨੂਂ ਹੋਟਲ ਜਾਣਾ ਹੈ</span>.',tr:'ਟੈਕਸੀ'},
        {t:'words',items:[{tr:'ਟੈਕਸੀ',pr:'TAI-ksee',en:'taxi'},{tr:'ਡਰਾਈਵਰ',pr:'draa-ee-var',en:'driver'},{tr:'ਮੈਨੂਂ ਜਾਣਾ ਹੈ',pr:'mai-NOO JAA-naa hay',en:'I need to go'},{tr:'ਇੱਥੇ ਰੋਕੋ',pr:'it-thay RO-ko',en:'stop here'}]},
        {t:'chal',en:'Taxi, please',tr:'ਟੈਕਸੀ, ਕਿਰਪਾ ਕਰਕੇ',pr:'TAI-ksee, KIR-pa KAR-kay',morph:['ਟੈਕਸੀ = taxi','ਕਿਰਪਾ ਕਰਕੇ = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'ਮੈਨੂਂ ਹੋਟਲ ਜਾਣਾ ਹੈ',pr:'mai-NOO HO-tal JAA-naa hay',morph:['ਮੈਨੂਂ = to me','ਹੋਟਲ = hotel','ਜਾਣਾ ਹੈ = I need to go']},
        {t:'chal',en:'Stop here, please',tr:'ਇੱਥੇ ਰੋਕੋ, ਕਿਰਪਾ ਕਰਕੇ',pr:'it-thay RO-ko, KIR-pa KAR-kay',morph:['ਇੱਥੇ = here','ਰੋਕੋ = stop','ਕਿਰਪਾ ਕਰਕੇ = please']},
        {t:'chal',en:'How much is it?',tr:'ਇਹ ਕਿੰਨੇ ਦਾ ਹੈ?',pr:'ih KIN-nay daa hay',morph:['ਇਹ = this','ਕਿੰਨੇ ਦਾ ਹੈ? = how much is it']}
      ],
      blocks:['<code>ਮੈਨੂਂ … ਜਾਣਾ ਹੈ</code> = I need to go to …','<code>ਇੱਥੇ ਰੋਕੋ</code> = stop here'] },
    { id:15, title:'The hotel', focus:'ਬੁਕਿੰਗ · ਕਮਰਾ · ਚਾਬੀ · ਰਾਤ',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">ਮੇਰੀ ਬੁਕਿੰਗ ਹੈ</span> — I have a reservation.',tr:'ਬੁਕਿੰਗ'},
        {t:'words',items:[{tr:'ਹੋਟਲ',pr:'HO-tal',en:'hotel'},{tr:'ਬੁਕਿੰਗ',pr:'BOOK-ing',en:'reservation'},{tr:'ਕਮਰਾ',pr:'kam-RAA',en:'room'},{tr:'ਚਾਬੀ',pr:'chaa-BEE',en:'key'},{tr:'ਇੱਕ ਰਾਤ',pr:'ikk raat',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'ਮੇਰੀ ਬੁਕਿੰਗ ਹੈ',pr:'MAY-ree BOOK-ing hay',morph:['ਮੇਰੀ = my','ਬੁਕਿੰਗ = reservation','ਹੈ = is']},
        {t:'chal',en:'A room for one night, please',tr:'ਇੱਕ ਰਾਤ ਦਾ ਕਮਰਾ, ਕਿਰਪਾ ਕਰਕੇ',pr:'ikk raat daa kam-RAA, KIR-pa KAR-kay',morph:['ਇੱਕ ਰਾਤ ਦਾ = for one night','ਕਮਰਾ = room','ਕਿਰਪਾ ਕਰਕੇ = please']},
        {t:'chal',en:'The key, please',tr:'ਚਾਬੀ, ਕਿਰਪਾ ਕਰਕੇ',pr:'chaa-BEE, KIR-pa KAR-kay',morph:['ਚਾਬੀ = key','ਕਿਰਪਾ ਕਰਕੇ = please']},
        {t:'chal',en:'Where is my room?',tr:'ਮੇਰਾ ਕਮਰਾ ਕਿੱਥੇ ਹੈ?',pr:'MAY-raa kam-RAA KIT-thay hay',morph:['ਮੇਰਾ ਕਮਰਾ = my room','ਕਿੱਥੇ ਹੈ? = where is']}
      ],
      blocks:['<code>ਬੁਕਿੰਗ</code> = reservation','<code>ਕਮਰਾ</code> = room','<code>ਚਾਬੀ</code> = key'] },
    { id:16, title:'Ask for help', focus:'ਸਮਝ ਨਹੀਂ · ਹੌਲੀ · ਅੰਗਰੇਜ਼ੀ',
      steps:[
        {t:'say',text:'When Punjabi is too fast: <span class="inline-tr">ਹੌਲੀ ਬੋਲੋ, ਕਿਰਪਾ ਕਰਕੇ</span> — speak slowly, please.',tr:'ਹੌਲੀ'},
        {t:'words',items:[{tr:'ਹੌਲੀ ਬੋਲੋ',pr:'HAU-lee BO-lo',en:'speak slowly'},{tr:'ਮੁੜ ਇੱਕ ਵਾਰ',pr:'mur ikk vaar',en:'again'},{tr:'ਅੰਗਰੇਜ਼ੀ',pr:'ang-re-ZEE',en:'English'},{tr:'ਮਦਦ ਕਰੋਗੇ?',pr:'madad karoge',en:'can you help?'}]},
        {t:'chal',en:'I don\'t understand',tr:'ਮੈਨੂਂ ਸਮਝ ਨਹੀਂ ਆਇਆ',pr:'mai-NOO samajh na-heen aa-ee',morph:['ਮੈਨੂਂ = to me','ਸਮਝ ਨਹੀਂ = not understood']},
        {t:'chal',en:'Speak slowly, please',tr:'ਹੌਲੀ ਬੋਲੋ, ਕਿਰਪਾ ਕਰਕੇ',pr:'HAU-lee BO-lo, KIR-pa KAR-kay',morph:['ਹੌਲੀ = slowly','ਬੋਲੋ = speak','ਕਿਰਪਾ ਕਰਕੇ = please']},
        {t:'chal',en:'Can you help me?',tr:'ਮੈਨੂਂ ਮਦਦ ਕਰੋ?',pr:'mai-NOO madad karo',morph:['ਮੈਨੂਂ = me','ਮਦਦ ਕਰੋ? = help']},
        {t:'chal',en:'Do you speak English?',tr:'ਕੀ ਤੁਸੀਂ ਅੰਗਰੇਜ਼ੀ ਬੋਲਦੇ ਹੋ?',pr:'kee tu-SEE ang-re-ZEE BOL-day ho',morph:['ਕੀ = question','ਤੁਸੀਂ = you','ਅੰਗਰੇਜ਼ੀ = English','ਬੋਲਦੇ ਹੋ? = do you speak?']}
      ],
      blocks:['<code>ਹੌਲੀ ਬੋਲੋ</code> = speak slowly','<code>ਤੁਸੀਂ ਅੰਗਰੇਜ਼ੀ ਬੋਲਦੇ ਹੋ?</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'cafe', title:'☕ At a café', emoji:'☕', turns:[
      {who:'You',tr:'ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ਇੱਕ ਚਾਹ, ਕਿਰਪਾ ਕਰਕੇ।',pr:'sat sree a-KAAL! ikk chaah, KIR-pa KAR-kay.',en:'Hello! One tea, please.'},
      {who:'Waiter',tr:'ਜੀ, ਦੁੱਧ ਅਤੇ ਖੰਡ ਨਾਲ?',pr:'JEE, dudh a-TAY khand naal?',en:'Yes, with milk and sugar?'},
      {who:'You',tr:'ਹਾਂ, ਦੁੱਧ ਨਾਲ, ਖੰਡ ਨਹੀਂ।',pr:'HAAN, dudh naal, khand na-heen.',en:'Yes, with milk, no sugar.'},
      {who:'Waiter',tr:'ਤੁਹਾਡੀ ਚਾਹ, ਜੀ।',pr:'tu-HAA-dee chaah, JEE.',en:'Your tea, sir.'},
      {who:'You',tr:'ਬਹੁਤ ਧੰਨਵਾਦ!',pr:'BA-hut DHUN-vaad!',en:'Thank you very much!'}
    ]},
    { id:'transport', title:'🚉 At the train station', emoji:'🚉', turns:[
      {who:'You',tr:'ਮਾਫ਼ ਕਰਨਾ, ਸਟੇਸ਼ਨ ਕਿੱਥੇ ਹੈ?',pr:'MAA-f KAR-naa, s-TAY-shan KIT-thay hay?',en:'Excuse me, where is the station?'},
      {who:'Local',tr:'ਇੱਧਰ, ਸੱਜੇ ਪਾਸੇ।',pr:'ID-dhar, SAJ-jay PAA-say.',en:'Over here, to the right.'},
      {who:'You',tr:'ਧੰਨਵਾਦ। ਇੱਕ ਟਿਕਟ ਦਿੱਲੀ ਲਈ, ਕਿਰਪਾ ਕਰਕੇ।',pr:'DHUN-vaad. ikk TICKET DIL-lee la-EE, KIR-pa KAR-kay.',en:'Thanks. A ticket to Delhi, please.'},
      {who:'Ticket',tr:'ਪੰਜ ਸੌ ਰੁਪਏ। ਟ੍ਰੇਨ ਸਵੇਰੇ ਨੌਂ ਵਜੇ ਹੈ।',pr:'panj sau ru-PA-yay. train sa-VAY-ray nau va-JAY hay.',en:'Five hundred rupees. The train is at nine in the morning.'}
    ]},
    { id:'restaurant', title:'🍲 At a restaurant', emoji:'🍲', turns:[
      {who:'Waiter',tr:'ਜੀ, ਕੀ ਚਾਹੀਦਾ ਹੈ?',pr:'JEE, kee cha-HEE-daa hay?',en:'Yes, what would you like?'},
      {who:'You',tr:'ਮੈਨੂੰ ਦਾਲ ਅਤੇ ਰੋਟੀ ਚਾਹੀਦੀ ਹੈ।',pr:'mai-NOO daal a-TAY RO-tee cha-HEE-dee hay.',en:'I would like dal and roti.'},
      {who:'You',tr:'ਅਤੇ ਇੱਕ ਲੱਸੀ, ਕਿਰਪਾ ਕਰਕੇ।',pr:'a-TAY ikk LAS-see, KIR-pa KAR-kay.',en:'And a lassi, please.'},
      {who:'Waiter',tr:'ਜੀ ਸਾਰ, ਆਉਂਦਾ ਹੈ।',pr:'JEE saar, AA-un-daa hay.',en:'Yes sir, coming right up.'},
      {who:'You',tr:'ਹਿਸਾਬ, ਕਿਰਪਾ ਕਰਕੇ। ਧੰਨਵਾਦ!',pr:'hi-SAAB, KIR-pa KAR-kay. DHUN-vaad!',en:'The bill, please. Thank you!'}
    ]},
    { id:'shop', title:'🛍️ Shopping', emoji:'🛍️', turns:[
      {who:'You',tr:'ਇਹ ਕਿੰਨੇ ਦਾ ਹੈ?',pr:'ih KIN-nay daa hay?',en:'How much is this?'},
      {who:'Seller',tr:'ਪੰਜ ਸੌ ਰੁਪਏ।',pr:'panj sau ru-PA-yay.',en:'Five hundred rupees.'},
      {who:'You',tr:'ਬਹੁਤ ਮਹਿੰਗਾ ਹੈ।',pr:'BA-hut ma-HEEN-gaa hay.',en:'That\'s too expensive.'},
      {who:'Seller',tr:'ਸੌਦਾ ਕਰੋ, ਚਾਰ ਸੌ।',pr:'SAU-daa ka-ro, chaar sau.',en:'Let\'s make a deal, four hundred.'},
      {who:'You',tr:'ਠੀਕ ਹੈ, ਮੈਂ ਲੈਂਦਾ ਹਾਂ।',pr:'THEEK hay, main LAYN-daa haan.',en:'OK, I\'ll take it.'}
    ]}
  ],
  pocket: [
    {tr:'ਸਤ ਸ੍ਰੀ ਅਕਾਲ',pr:'sat sree a-KAAL',en:'Hello / goodbye',c:'Greetings'},
    {tr:'ਜੀ ਆਇਆਂ ਨੂੰ',pr:'JEE aa-ee-an noon',en:'Welcome',c:'Greetings'},
    {tr:'ਕਿਵੇਂ ਹੋ?',pr:'KI-ven ho',en:'How are you?',c:'Greetings'},
    {tr:'ਮੈਂ ਠੀਕ ਹਾਂ',pr:'main THEEK haan',en:'I\'m fine',c:'Greetings'},
    {tr:'ਹਾਂ',pr:'HAAN',en:'Yes',c:'Greetings'},
    {tr:'ਨਹੀਂ',pr:'na-heen',en:'No',c:'Greetings'},
    {tr:'ਮੇਰਾ ਨਾਮ __NAME__ ਹੈ',pr:'MAY-raa naam __NAME__ hay',en:'My name is...',c:'Greetings'},
    {tr:'ਕਿਰਪਾ ਕਰਕੇ',pr:'KIR-pa KAR-kay',en:'Please',c:'Courtesy'},
    {tr:'ਧੰਨਵਾਦ',pr:'DHUN-vaad',en:'Thank you',c:'Courtesy'},
    {tr:'ਬਹੁਤ ਧੰਨਵਾਦ',pr:'BA-hut DHUN-vaad',en:'Thanks a lot',c:'Courtesy'},
    {tr:'ਕੋਈ ਗੱਲ ਨਹੀਂ',pr:'KO-ee GALL na-heen',en:'You\'re welcome',c:'Courtesy'},
    {tr:'ਮਾਫ਼ ਕਰਨਾ',pr:'MAA-f KAR-naa',en:'Sorry / excuse me',c:'Courtesy'},
    {tr:'ਇੱਕ',pr:'ikk',en:'1',c:'Numbers'},
    {tr:'ਦੋ',pr:'do',en:'2',c:'Numbers'},
    {tr:'ਤਿੰਨ',pr:'tinn',en:'3',c:'Numbers'},
    {tr:'ਚਾਰ',pr:'chaar',en:'4',c:'Numbers'},
    {tr:'ਪੰਜ',pr:'panj',en:'5',c:'Numbers'},
    {tr:'ਦਸ',pr:'das',en:'10',c:'Numbers'},
    {tr:'ਪਾਣੀ',pr:'PAA-nee',en:'water',c:'Food'},
    {tr:'ਚਾਹ',pr:'chaah',en:'tea',c:'Food'},
    {tr:'ਦੁੱਧ',pr:'dudh',en:'milk',c:'Food'},
    {tr:'ਰੋਟੀ',pr:'RO-tee',en:'bread',c:'Food'},
    {tr:'ਦਾਲ',pr:'daal',en:'lentils',c:'Food'},
    {tr:'ਹਿਸਾਬ, ਕਿਰਪਾ ਕਰਕੇ',pr:'hi-SAAB, KIR-pa KAR-kay',en:'the bill, please',c:'Food'},
    {tr:'ਸਟੇਸ਼ਨ ਕਿੱਥੇ ਹੈ?',pr:'s-TAY-shan KIT-thay hay',en:'Where is the station?',c:'Directions'},
    {tr:'ਸੱਜੇ',pr:'SAJ-jay',en:'to the right',c:'Directions'},
    {tr:'ਖੱਬੇ',pr:'KHAB-bay',en:'to the left',c:'Directions'},
    {tr:'ਸਿੱਧਾ',pr:'SID-dhaa',en:'straight ahead',c:'Directions'},
    {tr:'ਇਹ ਕਿੰਨੇ ਦਾ ਹੈ?',pr:'ih KIN-nay daa hay',en:'How much is this?',c:'Shopping'},
    {tr:'ਕੀ ਤੁਹਾਡੇ ਕੋਲ … ਹੈ?',pr:'kee tu-HAA-day kol ... hay',en:'Do you have...?',c:'Shopping'},
    {tr:'ਮਦਦ!',pr:'ma-DAD',en:'Help!',c:'Emergency'},
    {tr:'ਮੈਨੂੰ ਡਾਕਟਰ ਚਾਹੀਦਾ ਹੈ',pr:'mai-NOO DAK-tar cha-HEE-daa hay',en:'I need a doctor',c:'Emergency'},
    {tr:'ਮੈਨੂੰ ਸਮਝ ਨਹੀਂ ਆਈ',pr:'mai-NOO sa-majh na-heen AA-ee',en:'I don\'t understand',c:'Emergency'},
    {tr:'ਅੱਜ',pr:'ajj',en:'today',c:'Time'},
    {tr:'ਕੱਲ੍ਹ',pr:'kal',en:'tomorrow',c:'Time'},
    {tr:'ਮੌਸਮ ਕਿਵੇਂ ਹੈ?',pr:'MAU-sam KI-ven hay',en:'What\'s the weather?',c:'Time'},
    {tr:'ਹਵਾਈ ਅੱਡਾ',pr:'ha-VAA-ee AD-daa',en:'airport',c:'Travel'},
    {tr:'ਪਾਸਪੋਰਟ',pr:'PAAS-port',en:'passport',c:'Travel'},
    {tr:'ਮੈਨੂਂ ਹੋਟਲ ਜਾਣਾ ਹੈ',pr:'mai-NOO HO-tal JAA-naa hay',en:'I want to go to the hotel',c:'Travel'},
    {tr:'ਮੇਰੀ ਬੁਕਿੰਗ ਹੈ',pr:'MAY-ree BOOK-ing hay',en:'I have a reservation',c:'Travel'},
    {tr:'ਹੌਲੀ ਬੋਲੋ, ਕਿਰਪਾ ਕਰਕੇ',pr:'HAU-lee BO-lo, KIR-pa KAR-kay',en:'Speak slowly, please',c:'Travel'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Shopping','Emergency','Time', 'Travel'],
  culture: [
    {icon:'🫖',title:'Masala chai is life',body:'Chai (tea) is the heart of Punjabi hospitality. Guests are always offered a hot cup, usually with milk and sugar. It\'s polite to accept — and refusing at first, then taking it when pressed again, is a warm little dance.'},
    {icon:'🙏',title:'Greet with folded hands',body:'"Sat Sri Akal" is the greeting heard across Punjab. A slight bow with hands folded together, like a gentle prayer gesture, goes with it. In Muslim households you\'ll hear "Adaab" with a hand raised to the forehead.'},
    {icon:'🍽️',title:'Langar — food for everyone',body:'Langar is a free community meal served in every gurdwara, open to anyone of any faith. The classic Punjabi plate is makki di roti (corn flatbread) with sarson da saag (mustard greens), finished with a glass of creamy lassi.'},
    {icon:'🥁',title:'Music runs deep',body:'Bhangra is the energetic folk dance of the harvest; Giddha is the graceful women\'s dance. Punjabi folk, pop and bhangra music travel the world, and celebrations are always full of song and dance.'},
    {icon:'🏡',title:'Family first',body:'Extended families stay close. Elders are deeply respected — you\'d address older men and women with the respectful "ji", and many touch an elder\'s feet as a sign of deep respect and blessing.'},
    {icon:'🌊',title:'Land of five rivers',body:'"Punjab" literally means "land of five rivers". The region spans India and Pakistan — Punjabi is spoken and the same "Sat Sri Akal" greeting works on both sides. That\'s why you\'ll see both 🇮🇳 and 🇵🇰 here.'}
  ],
  sounds: [
    {l:'ਖ',say:'an aspirated "kh" — a k with a puff of air, like the "kh" in "khaki".',ex:'ਖਾਣਾ = KHAA-naa (to eat)',voice:'ਖਾਣਾ'},
    {l:'ਟ',say:'"t" with the tongue curled back (retroflex) — it sounds different from the English t.',ex:'ਟਾਇਲਟ = TAA-i-laṭ (toilet)',voice:'ਟਾਇਲਟ'},
    {l:'ਹ',say:'a soft, breathy "h" — breathed out, quieter than the English h.',ex:'ਹਾਂ = haan (yes) · ਹੋ = ho (is)',voice:'ਹਾਂ'},
    {l:'ਚ',say:'"ch" as in "chair", like the ch in cheese.',ex:'ਚਾਹ = chaah (tea)',voice:'ਚਾਹ'},
    {l:'ਣ',say:'"n" with the tongue curled back, a bit like the "ng" in "sing".',ex:'ਪਾਣੀ = PAA-nee (water)',voice:'ਪਾਣੀ'},
    {l:'ੋ',say:'the "o" in "go" — written as a vowel sign above the consonant.',ex:'ਦੋ = do (two) · ਸੋ = so (to sleep)',voice:'ਦੋ'},
    {l:'ੁ',say:'a short "u" as in "put".',ex:'ਦੁੱਧ = dudh (milk)',voice:'ਦੁੱਧ'},
    {l:'ਾ',say:'a long "aa" as in "father".',ex:'ਮਾਂ = maan (mother)',voice:'ਮਾਂ'}
  ],
  resources: [
    {icon:'🗣️',t:'Punjabi Charm',d:'A friendly channel that teaches Punjabi in English — vocab lists, phrases and grammar made simple.',q:'Punjabi Charm learn Punjabi'},
    {icon:'🐢',t:'ifactner',d:'Slow, step-by-step Punjabi lessons for English speakers, including the Gurmukhi alphabet.',q:'ifactner learn Punjabi'},
    {icon:'📚',t:'Punjab Youth in Action',d:'A structured learning-Punjabi playlist with clear lessons and Sikh culture woven in.',q:'Punjab Youth in Action learn Punjabi'},
    {icon:'🎧',t:'Punjabi radio & podcasts',d:'Tune into Punjabi radio and podcasts to absorb the sound of the language on the move.',q:'Punjabi podcast for learners'},
    {icon:'🌏',t:'Gurmukhi.in',d:'A free online hub for the Gurmukhi alphabet, worksheets and practice activities.',q:'learn Gurmukhi alphabet'}
  ]
};
