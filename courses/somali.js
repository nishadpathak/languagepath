/* ---- somali ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["somali"] = {
  name: 'Somali',
  flag: '🇸🇴',
  tts: 'so-SO',
  dir: 'ltr',
  native: 'Soomaali',
  soundTitle: 'Somali sounds & spelling',
  soundIntro: 'Somali is written in a Latin alphabet and every letter is said the way it looks. The tricky part is a handful of throat sounds — c, dh, x, q and the glottal stop. Master these and you can read any word aloud.',
  grammar: '<p>Somali is a Cushitic language — a distant cousin of Arabic within the wider Afro-Asiatic family. Vowels come in short and long pairs (<b>a/aa, e/ee, i/ii, o/oo, u/uu</b>); doubling a vowel changes the meaning, so stretch it. Nouns have masculine or feminine gender, and there is no separate word for \'a\' — <i>qaxwo</i> can be \'coffee\' or \'a coffee\'. The definite article attaches to the end of the word: <i>qaxwo</i> → <i>qaxwaha</i> = the coffee. Word order is Subject–Object–Verb, so the verb usually comes last: <i>waxaan rabaa biyo</i> = I want water (literally \'I want water\'). Watch the special letters — <b>c</b> is a deep throat sound, <b>dh</b> is a curled \'d\', and <b>x</b> is a raspy \'h\'.</p>',
  bridges: '<div class="note">🇸🇦 <b>Arabic.</b> Somali is packed with Arabic loans you already know: <b>qaxwo</b> (coffee, from <i>qahwa</i>), <b>shaah</b> (tea, from <i>shay</i>), <b>salaan</b> (greeting, from <i>salam</i>), <b>makhaayad</b> (restaurant, from <i>maqhā</i>), <b>fadlan</b> (please).</div><div class="note">🇬🇧🇮🇹 <b>English & Italian.</b> Recent contacts added words like <b>doolar</b> (dollar), <b>raadiyo</b> (radio), <b>bas</b> (bus) and <b>isbitaal</b> (hospital) — say the loan and you\'ll often be understood.</div>',
  lessons: [
    { id:1, title:'Greetings', focus:'salaan · iska warran · nabadgelyo',
      steps:[
        {t:'say',text:'Let\'s start with a warm Somali greeting: <span class="inline-tr">salaan</span> — hi / a greeting. Say it out loud.',tr:'salaan'},
        {t:'words',items:[{tr:'salaan',pr:'sah-LAHN',en:'hi / greetings'},{tr:'iska warran',pr:'IS-kah wah-RRAN',en:'how are you? (informal)'},{tr:'subax wanaagsan',pr:'SOO-bakh wah-NAHG-sahn',en:'good morning'},{tr:'galab wanaagsan',pr:'GAH-lahb wah-NAHG-sahn',en:'good afternoon'},{tr:'habeen wanaagsan',pr:'HAH-been wah-NAHG-sahn',en:'good night'},{tr:'nabadgelyo',pr:'nah-BAD-GEL-yoh',en:'goodbye (in peace)'}]},
        {t:'chal',en:'Hello, how are you?',tr:'Salaan, iska warran?',pr:'sah-LAHN, IS-kah wah-RRAN',morph:['salaan = greetings','iska warran = how are you?']},
        {t:'say',text:'Two more essentials: <span class="inline-tr">mahadsanid</span> (thank you) and <span class="inline-tr">fadlan</span> (please).',tr:'mahadsanid'},
        {t:'chal',en:'Thank you, goodbye',tr:'Mahadsanid, nabadgelyo',pr:'mah-HAD-sah-nid, nah-BAD-GEL-yoh',morph:['mahadsanid = thank you','nabadgelyo = goodbye']},
        {t:'say',text:'To ask how someone is: <span class="inline-tr">iska warran?</span> (informal). A warm reply is <span class="inline-tr">waan wanaagsanahay</span> — I\'m well.',tr:'iska warran?'},
        {t:'words',items:[{tr:'iska warran?',pr:'IS-kah wah-RRAN',en:'how are you?'},{tr:'waan wanaagsanahay',pr:'wahn wah-NAHG-sah-nah-high',en:'I\'m well'},{tr:'waxba, mahadsanid',pr:'WAHsh-bah, mah-HAD-sah-nid',en:'nothing much, thanks'}]}
      ],
      blocks:['<code>salaan</code> = hi / greetings','<code>iska warran</code> = how are you?','<code>subax wanaagsan</code> = good morning','<code>nabadgelyo</code> = goodbye'] },
    { id:2, title:'Being polite', focus:'mahadsanid · fadlan · waxba ma aha',
      steps:[
        {t:'say',text:'Thank you in Somali is <span class="inline-tr">mahadsanid</span>. Say it with a smile — it goes a long way.',tr:'mahadsanid'},
        {t:'words',items:[{tr:'mahadsanid',pr:'mah-HAD-sah-nid',en:'thank you'},{tr:'aad ayaad u mahadsan tahay',pr:'aad AH-yaad oo mah-HAD-sahn tah-HIGH',en:'thank you very much'},{tr:'fadlan',pr:'FAHD-lahn',en:'please',link:'≈ Arabic fadlan'},{tr:'waxba ma aha',pr:'WAHsh-bah mah AH-hah',en:'you\'re welcome (it\'s nothing)'},{tr:'iga raalli ahow',pr:'EE-gah RAH-lee AH-how',en:'excuse me / forgive me'}]},
        {t:'chal',en:'Thank you very much',tr:'Aad ayaad u mahadsan tahay',pr:'aad AH-yaad oo mah-HAD-sahn tah-HIGH',morph:['aad = very','ayaad u mahadsan tahay = thank you']},
        {t:'say',text:'For "please", use <span class="inline-tr">fadlan</span> — very close to the Arabic <i>fadlan</i>.',tr:'fadlan'},
        {t:'chal',en:'Water, please',tr:'Biyo, fadlan',pr:'BEE-yoh, FAHD-lahn',morph:['biyo = water','fadlan = please']},
        {t:'say',text:'When someone thanks you, reply <span class="inline-tr">waxba ma aha</span> — "it\'s nothing".',tr:'waxba ma aha'},
        {t:'chal',en:'Excuse me, sorry',tr:'Iga raalli ahow',pr:'EE-gah RAH-lee AH-how',morph:['iga raalli ahow = excuse me']}
      ],
      blocks:['<code>mahadsanid</code> = thank you','<code>fadlan</code> = please','<code>waxba ma aha</code> = you\'re welcome'] },
    { id:3, title:'Numbers 1–10', focus:'kow · laba · saddex · toban',
      steps:[
        {t:'say',text:'Numbers are the fastest win. Listen and repeat: <span class="inline-tr">kow, laba, saddex</span>.',tr:'kow'},
        {t:'words',items:[{tr:'kow',pr:'koh',en:'1'},{tr:'laba',pr:'LAH-bah',en:'2'},{tr:'saddex',pr:'SAH-dehkh',en:'3'},{tr:'afar',pr:'AH-far',en:'4'},{tr:'shan',pr:'shahn',en:'5'},{tr:'lix',pr:'likh',en:'6'},{tr:'toddoba',pr:'tod-DOH-bah',en:'7'},{tr:'sideed',pr:'see-DEHD',en:'8'},{tr:'sagaal',pr:'sah-GAHL',en:'9'},{tr:'toban',pr:'TOH-bahn',en:'10'}]},
        {t:'chal',en:'Two coffees, please',tr:'Laba qaxwo, fadlan',pr:'LAH-bah kakh-WOH, FAHD-lahn',morph:['laba = two','qaxwo = coffee','fadlan = please']},
        {t:'say',text:'To ask how much something costs: <span class="inline-tr">imisa?</span> — how much / how many?',tr:'imisa?'},
        {t:'chal',en:'How much is it?',tr:'Imisa?',pr:'ee-MEE-sah',morph:['imisa = how much']},
        {t:'chal',en:'It\'s five dollars',tr:'Shan doolar',pr:'shahn DOH-lahr',morph:['shan = five','doolar = dollars']}
      ],
      blocks:['kow, laba, saddex, afar, shan = 1–5','<code>imisa?</code> = how much?','<code>doolar</code> = dollars'] },
    { id:4, title:'"I want" — waxaan rabaa', focus:'waxaan rabaa · ma rabtaa? · biyo · qaxwo',
      steps:[
        {t:'say',text:'The phrase to order anything: <span class="inline-tr">waxaan rabaa</span> — I want.',tr:'waxaan rabaa'},
        {t:'say',text:'In Somali the verb goes at the end. <b>waxaan rabaa</b> + the thing, e.g. <span class="inline-tr">waxaan rabaa biyo</span> — I want water.',tr:'waxaan rabaa biyo'},
        {t:'chal',en:'I want water',tr:'Waxaan rabaa biyo',pr:'WAH-hahn rah-BAH BEE-yoh',morph:['waxaan rabaa = I want','biyo = water']},
        {t:'chal',en:'I want coffee',tr:'Waxaan rabaa qaxwo',pr:'WAH-hahn rah-BAH kakh-WOH',morph:['waxaan rabaa = I want','qaxwo = coffee']},
        {t:'say',text:'To ask what someone wants: <span class="inline-tr">ma rabtaa?</span> — do you want?',tr:'ma rabtaa?'},
        {t:'chal',en:'Do you want tea?',tr:'Ma rabtaa shaah?',pr:'mah rab-TAH shah',morph:['ma rabtaa = do you want','shaah = tea']}
      ],
      blocks:['<code>waxaan rabaa</code> = I want','<code>ma rabtaa?</code> = do you want?','the verb goes at the end'] },
    { id:5, title:'Food & drink', focus:'biyo · rooti · qaxwo · shaah · cunto',
      steps:[
        {t:'say',text:'Eating and drinking? Key words: <span class="inline-tr">biyo</span> (water), <span class="inline-tr">rooti</span> (bread), <span class="inline-tr">qaxwo</span> (coffee).',tr:'biyo'},
        {t:'words',items:[{tr:'biyo',pr:'BEE-yoh',en:'water'},{tr:'rooti',pr:'ROH-tee',en:'bread'},{tr:'qaxwo',pr:'kakh-WOH',en:'coffee',link:'≈ Arabic qahwa'},{tr:'shaah',pr:'shah',en:'tea',link:'≈ Arabic shay'},{tr:'caano',pr:'AAH-noh',en:'milk'},{tr:'cunto',pr:'OON-toh',en:'food'}]},
        {t:'chal',en:'Water and bread, please',tr:'Biyo iyo rooti, fadlan',pr:'BEE-yoh EE-yoh ROH-tee, FAHD-lahn',morph:['biyo = water','iyo = and','rooti = bread']},
        {t:'say',text:'<span class="inline-tr">qaxwo</span> is a true loan from Arabic <i>qahwa</i>, and <span class="inline-tr">shaah</span> comes from <i>shay</i> — coffee and tea.',tr:'qaxwo'},
        {t:'chal',en:'I want tea and milk',tr:'Waxaan rabaa shaah iyo caano',pr:'WAH-hahn rah-BAH shah EE-yoh AAH-noh',morph:['waxaan rabaa = I want','shaah = tea','iyo = and','caano = milk']},
        {t:'say',text:'To say it tastes great: <span class="inline-tr">waa macaan tahay</span> — it\'s delicious.',tr:'waa macaan tahay'},
        {t:'chal',en:'It\'s delicious!',tr:'Waa macaan tahay!',pr:'wah mah-AHN tah-HIGH',morph:['waa = it is','macaan = delicious','tahay = is']}
      ],
      blocks:['<code>biyo</code>, <code>rooti</code>, <code>qaxwo</code>, <code>shaah</code> = water, bread, coffee, tea','<code>waa macaan tahay</code> = it\'s delicious'] },
    { id:6, title:'Getting around', focus:'xaggee? · midig · bidix · toos',
      steps:[
        {t:'say',text:'The most useful question in any city: <span class="inline-tr">xaggee?</span> — where / which direction?',tr:'xaggee?'},
        {t:'words',items:[{tr:'xaggee?',pr:'hahg-GAY',en:'where?'},{tr:'midig',pr:'MEE-dihg',en:'to the right'},{tr:'bidix',pr:'BEE-dihkh',en:'to the left'},{tr:'toos',pr:'tohs',en:'straight ahead'},{tr:'halkan',pr:'HAHL-kahn',en:'here'},{tr:'halkaas',pr:'hahl-KAHS',en:'there'}]},
        {t:'chal',en:'Where is the hospital?',tr:'Isbitaal xaggee buu yahay?',pr:'is-bee-TAHL hahg-GAY boo yah-HIGH',morph:['isbitaal = hospital','xaggee = where','buu yahay = is it']},
        {t:'say',text:'<span class="inline-tr">midig</span> (right) and <span class="inline-tr">bidix</span> (left) tell you which way to turn; <span class="inline-tr">toos</span> is straight ahead.',tr:'toos'},
        {t:'chal',en:'Straight ahead',tr:'Toos',pr:'tohs',morph:['toos = straight ahead']}
      ],
      blocks:['<code>xaggee?</code> = where?','<code>midig</code> / <code>bidix</code> = right / left','<code>toos</code> = straight ahead'] },
    { id:7, title:'Questions', focus:'maxaa? · yaa? · imisa? · goorma? · sidee?',
      steps:[
        {t:'say',text:'Questions are easy in Somali: the little word <span class="inline-tr">ma</span> at the start turns many statements into yes/no questions.',tr:'ma'},
        {t:'words',items:[{tr:'maxaa?',pr:'MAH-hah',en:'what?'},{tr:'yaa?',pr:'yah',en:'who?'},{tr:'imisa?',pr:'ee-MEE-sah',en:'how much / how many?'},{tr:'goorma?',pr:'gohr-MAH',en:'when?'},{tr:'xaggee?',pr:'hahg-GAY',en:'where?'},{tr:'sidee?',pr:'see-DEH',en:'how?'}]},
        {t:'chal',en:'What is this?',tr:'Waa maxay kani?',pr:'wah MAH-hay KAH-nee',morph:['waa = it is','maxay = what','kani = this']},
        {t:'say',text:'To ask "do you know?": <span class="inline-tr">ma taqaan?</span>',tr:'ma taqaan?'},
        {t:'chal',en:'Do you know?',tr:'Ma taqaan?',pr:'mah tah-KAAN',morph:['ma = question word','taqaan = you know']},
        {t:'chal',en:'How much is it?',tr:'Imisa?',pr:'ee-MEE-sah',morph:['imisa = how much']}
      ],
      blocks:['<code>maxaa?</code> = what? · <code>yaa?</code> = who?','<code>imisa?</code> = how much?','<code>goorma?</code> = when? · <code>sidee?</code> = how?'] },
    { id:8, title:'Family & people', focus:'qoys · hooyo · aabbe · walaal',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">qoys</span> (family), <span class="inline-tr">hooyo</span> (mother), <span class="inline-tr">aabbe</span> (father).',tr:'qoys'},
        {t:'words',items:[{tr:'qoys',pr:'koyess',en:'family'},{tr:'hooyo',pr:'HOH-yoh',en:'mother'},{tr:'aabbe',pr:'AAH-bbeh',en:'father'},{tr:'walaal',pr:'wah-LAHL',en:'sibling / brother / sister'},{tr:'wiil',pr:'weel',en:'son / boy'},{tr:'gabadh',pr:'GAH-bahdh',en:'daughter / girl'},{tr:'awoowe',pr:'ah-WOH-weh',en:'grandfather'},{tr:'ayeeyo',pr:'ah-YAY-yoh',en:'grandmother'}]},
        {t:'chal',en:'This is my family',tr:'Kani waa qoyskayga',pr:'KAH-nee wah koyess-KIY-gah',morph:['kani = this','waa = is','qoyskayga = my family']},
        {t:'say',text:'To say you have something: <span class="inline-tr">waxaan haystaa</span> — I have.',tr:'waxaan haystaa'},
        {t:'chal',en:'I have a family',tr:'Waxaan haystaa qoys',pr:'WAH-hahn HAYS-tah koyess',morph:['waxaan haystaa = I have','qoys = family']}
      ],
      blocks:['<code>qoys</code> = family','<code>hooyo</code> / <code>aabbe</code> = mother / father','<code>walaal</code> = sibling'] },
    { id:9, title:'Time, days & weather', focus:'maanta · berri · shalay · days of the week',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">maanta</span>, tomorrow is <span class="inline-tr">berri</span>, yesterday is <span class="inline-tr">shalay</span>.',tr:'maanta'},
        {t:'words',items:[{tr:'maanta',pr:'MAHN-tah',en:'today'},{tr:'berri',pr:'BEH-rree',en:'tomorrow'},{tr:'shalay',pr:'SHAH-lay',en:'yesterday'},{tr:'hadda',pr:'HAH-dah',en:'now'},{tr:'subax',pr:'SOO-bakh',en:'morning'},{tr:'galab',pr:'GAH-lahb',en:'afternoon'},{tr:'habeen',pr:'HAH-been',en:'night'}]},
        {t:'chal',en:'See you tomorrow',tr:'Berri ayaan ku arkayaa',pr:'BEH-rree AH-yaan koo ar-KAH-yah',morph:['berri = tomorrow','ayaan ku arkayaa = I\'ll see you']},
        {t:'say',text:'To ask about the weather: <span class="inline-tr">jawigu siduu yahay?</span> — how\'s the weather?',tr:'jawigu siduu yahay?'},
        {t:'chal',en:'It is raining',tr:'Waa roobka',pr:'wah ROBB-kah',morph:['waa = it is','roobka = the rain']},
        {t:'say',text:'The week runs Sunday to Saturday: <span class="inline-tr">Axad, Isniin, Talaado, Arbaco, Khamiis, Jimce, Sabti</span>.',tr:'Axad'},
        {t:'words',items:[{tr:'Axad',pr:'AH-hadd',en:'Sunday'},{tr:'Isniin',pr:'is-NEEN',en:'Monday'},{tr:'Talaado',pr:'tah-LAH-doh',en:'Tuesday'},{tr:'Arbaco',pr:'ar-BAH-choh',en:'Wednesday'},{tr:'Khamiis',pr:'khah-MEES',en:'Thursday'},{tr:'Jimce',pr:'jeem-JEH',en:'Friday'},{tr:'Sabti',pr:'SAB-tee',en:'Saturday'}]},
        {t:'chal',en:'Today is Monday',tr:'Maanta waa Isniin',pr:'MAHN-tah wah is-NEEN',morph:['maanta = today','waa = is','Isniin = Monday']}
      ],
      blocks:['<code>maanta</code> / <code>berri</code> / <code>shalay</code> = today / tomorrow / yesterday','<code>jawigu siduu yahay?</code> = how\'s the weather?','days: <code>Axad</code> (Sun) to <code>Sabti</code> (Sat)'] },
    { id:10, title:'Your name', focus:'magacaygu waa __NAME__ · magacaa? · waxaan ahay',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">magacaygu waa __NAME__</span> — my name is __NAME__.',tr:'magacaygu waa __NAME__'},
        {t:'chal',en:'My name is __NAME__',tr:'Magacaygu waa __NAME__',pr:'mah-GAH-ichay-guh wah __NAME__',morph:['magacaygu = my name','waa = is','__NAME__ = your name']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">magacaa?</span> — your name?',tr:'magacaa?'},
        {t:'chal',en:'What is your name?',tr:'Magacaa?',pr:'mah-GAH-chah',morph:['magacaa = your name']},
        {t:'say',text:'Or simply: <span class="inline-tr">waxaan ahay __NAME__</span> — I am __NAME__.',tr:'waxaan ahay __NAME__'},
        {t:'chal',en:'I am __NAME__',tr:'Waxaan ahay __NAME__',pr:'WAH-hahn AH-high __NAME__',morph:['waxaan ahay = I am','__NAME__ = your name']}
      ],
      blocks:['<code>magacaygu waa __NAME__</code> = my name is…','<code>magacaa?</code> = what\'s your name?','<code>waxaan ahay</code> = I am'] },
    { id:11, title:'Help & emergency', focus:'caawimaad! · isbitaal · dhakhtar · ma fahmayo',
      steps:[
        {t:'say',text:'The most important words if you need help: <span class="inline-tr">Caawimaad!</span> (help!), <span class="inline-tr">isbitaal</span> (hospital), <span class="inline-tr">dhakhtar</span> (doctor).',tr:'Caawimaad!'},
        {t:'words',items:[{tr:'Caawimaad!',pr:'ah-wee-MAHD',en:'help!'},{tr:'isbitaal',pr:'is-bee-TAHL',en:'hospital',link:'≈ Italian ospedale'},{tr:'dhakhtar',pr:'dhakh-TAR',en:'doctor',link:'≈ Arabic/English doctor'},{tr:'ma fahmayo',pr:'mah fah-MAH-yoh',en:'I don\'t understand'},{tr:'degdeg',pr:'dehg-DEHG',en:'quickly / emergency'},{tr:'fadlan i caawi',pr:'FAHD-lahn ee AH-wee',en:'please help me'}]},
        {t:'chal',en:'Help!',tr:'Caawimaad!',pr:'ah-wee-MAHD',morph:['caawimaad = help']},
        {t:'chal',en:'I don\'t understand',tr:'Ma fahmayo',pr:'mah fah-MAH-yoh',morph:['ma = not','fahmayo = I understand']},
        {t:'say',text:'To say you need help: <span class="inline-tr">waxaan u baahanahay caawimaad</span> — I need help.',tr:'waxaan u baahanahay caawimaad'},
        {t:'chal',en:'I need help',tr:'Waxaan u baahanahay caawimaad',pr:'WAH-hahn oo BAH-hah-nah-high ah-wee-MAHD',morph:['waxaan u baahanahay = I need','caawimaad = help']}
      ],
      blocks:['<code>caawimaad!</code> = help!','<code>isbitaal</code> = hospital','<code>dhakhtar</code> = doctor','<code>ma fahmayo</code> = I don\'t understand'] },
    { id:12, title:'Tying it together', focus:'waxaan rabaa · imisa? · a capstone scene',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolbox. This capstone uses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello, how are you?',tr:'Salaan, iska warran?',pr:'sah-LAHN, IS-kah wah-RRAN',morph:['salaan = greetings','iska warran = how are you?']},
        {t:'chal',en:'I\'d like a coffee, please',tr:'Waxaan rabaa qaxwo, fadlan',pr:'WAH-hahn rah-BAH kakh-WOH, FAHD-lahn',morph:['waxaan rabaa = I want','qaxwo = coffee','fadlan = please']},
        {t:'chal',en:'Where is the hospital?',tr:'Isbitaal xaggee buu yahay?',pr:'is-bee-TAHL hahg-GAY boo yah-HIGH',morph:['isbitaal = hospital','xaggee = where','buu yahay = is it']},
        {t:'chal',en:'How much is it?',tr:'Imisa?',pr:'ee-MEE-sah',morph:['imisa = how much']},
        {t:'chal',en:'Thank you very much!',tr:'Aad ayaad u mahadsan tahay!',pr:'aad AH-yaad oo mah-HAD-sahn tah-HIGH',morph:['aad = very','ayaad u mahadsan tahay = thank you']}
      ],
      blocks:['You built: greetings, ordering, directions, prices, thanks — a full day out in Somali.'] },
    { id:13, title:'Airport & tickets', focus:'garoonka · baasaboor · tigidh · duulimaad',
      steps:[
        {t:'say',text:'You have landed. The building is the <span class="inline-tr">garoonka diyaaradaha</span>. Your document is a <span class="inline-tr">baasaboor</span>.',tr:'garoonka diyaaradaha'},
        {t:'words',items:[{tr:'garoonka diyaaradaha',pr:'gah-ROHN-kah dee-yah-RAH-dah-hah',en:'the airport'},{tr:'baasaboor',pr:'BAH-sah-bohr',en:'the passport'},{tr:'tigidh',pr:'tee-GIDH',en:'the ticket'},{tr:'duulimaad',pr:'doo-lee-MAHD',en:'the flight'},{tr:'albaabka',pr:'al-BAHB-kah',en:'the gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'Garoonka diyaaradaha xaggee buu yahay?',pr:'gah-ROHN-kah dee-yah-RAH-dah-hah hahg-GAY boo yah-HIGH',morph:['garoonka diyaaradaha = the airport','xaggee = where','buu yahay = is it']},
        {t:'chal',en:'Here is my passport',tr:'Waa kan baasaboorkayga',pr:'wah kahn BAH-sah-bohr-KIY-gah',morph:['waa kan = here is','baasaboorkayga = my passport']},
        {t:'chal',en:'A ticket, please',tr:'Tigidh, fadlan',pr:'tee-GIDH, FAHD-lahn',morph:['tigidh = a ticket','fadlan = please']},
        {t:'chal',en:'Where is the gate?',tr:'Albaabka xaggee buu yahay?',pr:'al-BAHB-kah hahg-GAY boo yah-HIGH',morph:['albaabka = the gate','xaggee = where']}
      ],
      blocks:['<code>garoonka diyaaradaha</code> = airport','<code>baasaboor</code> = passport','<code>tigidh</code> = ticket','<code>albaabka</code> = gate'] },
    { id:14, title:'The taxi', focus:'taksi · tag · huteel · istaag',
      steps:[
        {t:'say',text:'The driver is waiting. <span class="inline-tr">taksi</span> is the word you need. Tell them where to go with <span class="inline-tr">waxaan rabaa inaan tago</span>.',tr:'taksi'},
        {t:'words',items:[{tr:'taksi',pr:'TAHK-see',en:'the taxi'},{tr:'darawal',pr:'dah-rah-WAHL',en:'the driver'},{tr:'waxaan rabaa inaan tago',pr:'WAH-hahn rah-BAH ee-NAHN TAH-goh',en:'I want to go'},{tr:'halkan istaag',pr:'HAHL-kahn is-TAHG',en:'stop here'}]},
        {t:'chal',en:'Taxi, please',tr:'Taksi, fadlan',pr:'TAHK-see, FAHD-lahn',morph:['taksi = taxi','fadlan = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'Waxaan rabaa inaan tago huteelka',pr:'WAH-hahn rah-BAH ee-NAHN TAH-goh hoo-TEEL-kah',morph:['waxaan rabaa inaan tago = I want to go','huteelka = the hotel']},
        {t:'chal',en:'Stop here, please',tr:'Halkan istaag, fadlan',pr:'HAHL-kahn is-TAHG, FAHD-lahn',morph:['halkan = here','istaag = stop','fadlan = please']},
        {t:'chal',en:'How much is it?',tr:'Imisa?',pr:'ee-MEE-sah',morph:['imisa = how much']}
      ],
      blocks:['<code>waxaan rabaa inaan tago …</code> = I want to go to …','<code>halkan istaag</code> = stop here'] },
    { id:15, title:'The hotel', focus:'ballan · qol · fure · habeen',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">Waxaan haystaa ballan</span> — I have a reservation.',tr:'ballan'},
        {t:'words',items:[{tr:'huteel',pr:'hoo-TEEL',en:'the hotel'},{tr:'ballan',pr:'BAHL-lahn',en:'the reservation'},{tr:'qol',pr:'kohl',en:'the room'},{tr:'fure',pr:'FOO-reh',en:'the key'},{tr:'hal habeen',pr:'hahl hah-BEEN',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'Waxaan haystaa ballan',pr:'WAH-hahn HAYS-tah BAHL-lahn',morph:['waxaan haystaa = I have','ballan = a reservation']},
        {t:'chal',en:'A room for one night, please',tr:'Qol hal habeen, fadlan',pr:'kohl hahl hah-BEEN, FAHD-lahn',morph:['qol = a room','hal habeen = one night','fadlan = please']},
        {t:'chal',en:'The key, please',tr:'Furaha, fadlan',pr:'foo-RAH-hah, FAHD-lahn',morph:['furaha = the key','fadlan = please']},
        {t:'chal',en:'Where is my room?',tr:'Qolkayga xaggee buu yahay?',pr:'kohl-KIY-gah hahg-GAY boo yah-HIGH',morph:['qolkayga = my room','xaggee = where']}
      ],
      blocks:['<code>ballan</code> = reservation','<code>qol</code> = room','<code>fure</code> = key'] },
    { id:16, title:'Ask for help', focus:'ma fahmayo · tartiib · Ingiriisi',
      steps:[
        {t:'say',text:'When the language is too fast: <span class="inline-tr">Tartiib, fadlan</span> — slower, please.',tr:'Tartiib, fadlan'},
        {t:'words',items:[{tr:'tartiib',pr:'tar-TEEB',en:'slower'},{tr:'mar kale',pr:'mahr KAH-leh',en:'again'},{tr:'Ingiriisi',pr:'in-gee-REE-see',en:'English'},{tr:'ma i caawin kartaa?',pr:'mah ee AH-ween KAR-tah',en:'can you help me?'}]},
        {t:'chal',en:'I don\'t understand',tr:'Ma fahmayo',pr:'mah fah-MAH-yoh',morph:['ma = not','fahmayo = I understand']},
        {t:'chal',en:'Slower, please',tr:'Tartiib, fadlan',pr:'tar-TEEB, FAHD-lahn',morph:['tartiib = slower','fadlan = please']},
        {t:'chal',en:'Can you help me?',tr:'Ma i caawin kartaa?',pr:'mah ee AH-ween KAR-tah',morph:['ma = question','i = me','caawin kartaa = can you help']},
        {t:'chal',en:'Do you speak English?',tr:'Ma ku hadashaa Ingiriisi?',pr:'mah koo hah-DAH-shah in-gee-REE-see',morph:['ma ku hadashaa = do you speak','Ingiriisi = English']}
      ],
      blocks:['<code>tartiib</code> = slower','<code>Ma ku hadashaa Ingiriisi?</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'cafe', title:'☕ At a café', emoji:'☕', turns:[
      {who:'You',tr:'Salaan! Qaxwo, fadlan.',pr:'sah-LAHN, kakh-WOH, FAHD-lahn',en:'Hello! A coffee, please.'},
      {who:'Barista',tr:'Waad soo dhawoowday. Ma qaxwo mise shaah?',pr:'wahd soh-dhow-WDAY, mah kakh-WOH MEE-say shah',en:'Welcome. Coffee or tea?'},
      {who:'You',tr:'Qaxwo, mahadsanid.',pr:'kakh-WOH, mah-HAD-sah-nid',en:'Coffee, thank you.'},
      {who:'Barista',tr:'Kani waa kuuga. Shan doolar.',pr:'KAH-nee wah KOO-gah, shahn DOH-lahr',en:'Here is yours. Five dollars.'},
      {who:'You',tr:'Aad ayaad u mahadsan tahay!',pr:'aad AH-yaad oo mah-HAD-sahn tah-HIGH',en:'Thank you very much!'}
    ]},
    { id:'transport', title:'🚌 On the bus', emoji:'🚌', turns:[
      {who:'You',tr:'Fadlan, xaggee buu joogsadaa baska?',pr:'FAHD-lahn, hahg-GAY boo john-GAH-dah BAHSS-kah',en:'Please, where does the bus stop?'},
      {who:'Driver',tr:'Halkaas, toos ka soco.',pr:'hahl-KAHS, tohs kah SOH-choh',en:'There, just go straight.'},
      {who:'You',tr:'Imisa baa laga bixiyaa?',pr:'ee-MEE-sah bah LAH-gah bee-KEE-yah',en:'How much do you pay?'},
      {who:'Driver',tr:'Toban doolar.',pr:'TOH-bahn DOH-lahr',en:'Ten dollars.'},
      {who:'You',tr:'Mahadsanid!',pr:'mah-HAD-sah-nid',en:'Thank you!'}
    ]},
    { id:'restaurant', title:'🍛 At a restaurant', emoji:'🍛', turns:[
      {who:'Waiter',tr:'Salaan! Immisa qof baa jooga?',pr:'sah-LAHN, ee-MEE-sah kohf bah JOH-gah',en:'Hello! How many people?'},
      {who:'You',tr:'Laba qof, fadlan.',pr:'LAH-bah kohf, FAHD-lahn',en:'Two people, please.'},
      {who:'You',tr:'Waxaan rabaa hilib iyo bariis.',pr:'WAH-hahn rah-BAH HEE-lib EE-yoh bah-REESS',en:'I want meat and rice.'},
      {who:'Waiter',tr:'Waan kuu keenayaa, hadda.',pr:'WAHN koo KAY-nah-yah, HAH-dah',en:'I\'ll bring it, right away.'},
      {who:'You',tr:'Waa macaan tahay! Mahadsanid.',pr:'wah mah-AHN tah-HIGH, mah-HAD-sah-nid',en:'It is delicious! Thank you.'}
    ]},
    { id:'market', title:'🛍️ At the market', emoji:'🛍️', turns:[
      {who:'You',tr:'Salaan! Kani waa imisa?',pr:'sah-LAHN, KAH-nee wah ee-MEE-sah',en:'Hello! How much is this?'},
      {who:'Seller',tr:'Shan doolar.',pr:'shahn DOH-lahr',en:'Five dollars.'},
      {who:'You',tr:'Waa qaalisan tahay. Afar doolar, ma hagaag?',pr:'wah keh-LEE-sahn tah-HIGH, AH-far DOH-lahr, mah hah-GAHG',en:'That is expensive. Four dollars, okay?'},
      {who:'Seller',tr:'Haa, afar doolar.',pr:'hah, AH-far DOH-lahr',en:'Yes, four dollars.'},
      {who:'You',tr:'Waan iibsanayaa. Mahadsanid!',pr:'WAHN eeb-sah-NAH-yah, mah-HAD-sah-nid',en:'I\'ll buy it. Thank you!'}
    ]}
  ],
  pocket: [
    {tr:'Salaan',pr:'sah-LAHN',en:'Hello',c:'Greetings'},
    {tr:'Iska warran',pr:'IS-kah wah-RRAN',en:'How are you?',c:'Greetings'},
    {tr:'Subax wanaagsan',pr:'SOO-bakh wah-NAHG-sahn',en:'Good morning',c:'Greetings'},
    {tr:'Galab wanaagsan',pr:'GAH-lahb wah-NAHG-sahn',en:'Good afternoon',c:'Greetings'},
    {tr:'Habeen wanaagsan',pr:'HAH-been wah-NAHG-sahn',en:'Good night',c:'Greetings'},
    {tr:'Nabadgelyo',pr:'nah-BAD-GEL-yoh',en:'Goodbye',c:'Greetings'},
    {tr:'Mahadsanid',pr:'mah-HAD-sah-nid',en:'Thank you',c:'Courtesy'},
    {tr:'Aad ayaad u mahadsan tahay',pr:'aad AH-yaad oo mah-HAD-sahn tah-HIGH',en:'Thank you very much',c:'Courtesy'},
    {tr:'Fadlan',pr:'FAHD-lahn',en:'Please',c:'Courtesy'},
    {tr:'Waxba ma aha',pr:'WAHsh-bah mah AH-hah',en:'You\'re welcome',c:'Courtesy'},
    {tr:'Iga raalli ahow',pr:'EE-gah RAH-lee AH-how',en:'Excuse me',c:'Courtesy'},
    {tr:'Ma fahmayo',pr:'mah fah-MAH-yoh',en:'I don\'t understand',c:'Courtesy'},
    {tr:'kow',pr:'koh',en:'1',c:'Numbers'},
    {tr:'laba',pr:'LAH-bah',en:'2',c:'Numbers'},
    {tr:'saddex',pr:'SAH-dehkh',en:'3',c:'Numbers'},
    {tr:'afar',pr:'AH-far',en:'4',c:'Numbers'},
    {tr:'shan',pr:'shahn',en:'5',c:'Numbers'},
    {tr:'lix',pr:'likh',en:'6',c:'Numbers'},
    {tr:'biyo',pr:'BEE-yoh',en:'water',c:'Food'},
    {tr:'rooti',pr:'ROH-tee',en:'bread',c:'Food'},
    {tr:'qaxwo',pr:'kakh-WOH',en:'coffee',c:'Food'},
    {tr:'shaah',pr:'shah',en:'tea',c:'Food'},
    {tr:'caano',pr:'AAH-noh',en:'milk',c:'Food'},
    {tr:'cunto',pr:'OON-toh',en:'food',c:'Food'},
    {tr:'xaggee?',pr:'hahg-GAY',en:'Where?',c:'Directions'},
    {tr:'midig',pr:'MEE-dihg',en:'to the right',c:'Directions'},
    {tr:'bidix',pr:'BEE-dihkh',en:'to the left',c:'Directions'},
    {tr:'maxaa?',pr:'MAH-hah',en:'What?',c:'Questions'},
    {tr:'imisa?',pr:'ee-MEE-sah',en:'How much?',c:'Questions'},
    {tr:'yaa?',pr:'yah',en:'Who?',c:'Questions'},
    {tr:'maanta',pr:'MAHN-tah',en:'today',c:'Time'},
    {tr:'berri',pr:'BEH-rree',en:'tomorrow',c:'Time'},
    {tr:'shalay',pr:'SHAH-lay',en:'yesterday',c:'Time'},
    {tr:'Caawimaad!',pr:'ah-wee-MAHD',en:'Help!',c:'Emergency'},
    {tr:'Isbitaal',pr:'is-bee-TAHL',en:'Hospital',c:'Emergency'},
    {tr:'Dhakhtar',pr:'dhakh-TAR',en:'Doctor',c:'Emergency'},
    {tr:'Garoonka diyaaradaha',pr:'gah-ROHN-kah dee-yah-RAH-dah-hah',en:'the airport',c:'Travel'},
    {tr:'Baasaboor',pr:'BAH-sah-bohr',en:'the passport',c:'Travel'},
    {tr:'Tigidh',pr:'tee-GIDH',en:'the ticket',c:'Travel'},
    {tr:'Taksi',pr:'TAHK-see',en:'the taxi',c:'Travel'},
    {tr:'Huteel',pr:'hoo-TEEL',en:'the hotel',c:'Travel'},
    {tr:'Waxaan haystaa ballan',pr:'WAH-hahn HAYS-tah BAHL-lahn',en:'I have a reservation',c:'Travel'},
    {tr:'Tartiib, fadlan',pr:'tar-TEEB, FAHD-lahn',en:'Slower, please',c:'Travel'},
    {tr:'Ma ku hadashaa Ingiriisi?',pr:'mah koo hah-DAH-shah in-gee-REE-see',en:'Do you speak English?',c:'Travel'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Questions','Time','Emergency','Travel'],
  culture: [
    {icon:'🐪',title:'The camel is wealth',body:'In Somali pastoral life the camel (geel) is prized above all — a measure of wealth and the source of milk, meat and transport. Gifts and marriages are often discussed in camels. Even the greeting "iska warran" can be an excuse to catch up on a herd you both know.'},
    {icon:'🎶',title:'A nation of poets',body:'Somalia has been called a "nation of poets". A well-turned verse can be memorised and passed down for generations — praise, warning and history are all carried in poetry. Weddings, gatherings and even politics open with spoken or sung lines.'},
    {icon:'☕',title:'Coffee & spiced tea',body:'Qaxwo (a true loan from Arabic qahwa) is shared generously with guests. Almost as common is shaah, tea brewed with cardamom, cinnamon and ginger, often served sweet. Refusing a cup can feel a little chilly — accept, sip, and enjoy the chat.'},
    {icon:'🕌',title:'Islamic culture',body:'Islam shapes the rhythm of the day. The everyday greeting "As-salaamu alaykum" (peace be upon you) is everywhere, and Friday (Jimce) is the holy day of the week, with communal prayer. Dress modestly, and be aware of prayer times around five points in the day.'},
    {icon:'🍃',title:'Qaad — a word of caution',body:'Qaad (also spelled khat) is a fresh green leaf many chew socially for a mild stimulant effect. It is expensive, it swallows hours of the day, and it is illegal in many countries and restricted in parts of the Horn. It\'s the one local habit best avoided — your time is better spent on coffee, tea and conversation.'},
    {icon:'🤝',title:'Hospitality comes first',body:'Somali hospitality is legendary. Guests are welcomed warmly, fed generously and treated as a blessing. A little effort in the language — a "salaan", a "mahadsanid" — is met with joy and makes the welcome even warmer.'}
  ],
  sounds: [
    {l:'dh',say:'like a normal "d" but with the tongue curled back to the roof of the mouth — a heavy, rounded "d" (close to the Arabic ض)',ex:'dhagax = DAH-khakh (stone) · dhaqan = DAH-khan (culture)',voice:'dhagax'},
    {l:'c',say:'a deep sound made in the throat — the Arabic ع (ayn). Squeeze the throat and say a guttural "ah"',ex:'cunto = OON-toh (food) · caano = AAH-noh (milk)',voice:'cunto'},
    {l:'x',say:'a raspy "h" breathed from the back of the throat — like fogging a mirror (the Arabic ح)',ex:'xoolo = HOH-loh (livestock) · xaggee = hahg-GAY (where)',voice:'xoolo'},
    {l:'q',say:'a hard "k" made far back at the roof of the mouth (the Arabic ق)',ex:'qaxwo = kakh-WOH (coffee) · qoys = koyess (family)',voice:'qaxwo'},
    {l:"'",say:'a quick catch in the throat (glottal stop), like the pause in "uh-oh"',ex:"aabbe = AAH-bbeh (father) · la'a = without",voice:'aabbe'},
    {l:'kh',say:'a scratchy "kh" as in Scottish loch or German Bach (the Arabic خ)',ex:'makhaayad = mah-KHAH-yad (restaurant) · khamri = KHAHM-ree (wine)',voice:'makhaayad'},
    {l:'sh',say:'exactly like the English "sh" in ship',ex:'shaah = shah (tea) · shalay = SHAH-lay (yesterday)',voice:'shaah'},
    {l:'long vowels (aa ee ii oo uu)',say:'hold the vowel about twice as long — length can change the whole meaning',ex:'Soomaali = soh-MAA-lee (Somali) · shaah = shah (tea)',voice:'Soomaali'}
  ],
  resources: [
    {icon:'🗣️',t:'Somali for Beginners',d:'Clear, slow spoken Somali from native speakers with subtitles — perfect for your first phrases.',q:'Somali for beginners lessons'},
    {icon:'🔤',t:'Somali alphabet & pronunciation',d:'A focused walkthrough of the tricky letters (c, dh, x, q) and the long vowels.',q:'Somali alphabet pronunciation'},
    {icon:'💬',t:'Everyday Somali phrases',d:'Real conversation practice for greetings, food and getting around.',q:'common Somali phrases conversation'},
    {icon:'🎧',t:'Somali music & poetry',d:'Somali is a nation of poets — listening to songs is a gorgeous way to absorb the rhythm.',q:'Somali music songs poetry'},
    {icon:'📚',t:'Somali & Arabic loanwords',d:'Spot the Arabic and English words that make Somali feel familiar fast.',q:'Somali Arabic loanwords'}
  ]
};
