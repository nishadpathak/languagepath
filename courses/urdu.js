/* ---- urdu ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["urdu"] = {
  name: 'Urdu',
  flag: '🇵🇰',
  tts: 'ur-PK',
  dir: 'rtl',
  native: 'اردو',
  script: 'Urdu (Perso-Arabic)',
  soundTitle: 'Urdu sounds & letters',
  soundIntro: 'Urdu is written right-to-left in the Perso-Arabic script. A few letters use sounds English doesn\'t have — learn them and you\'ll pronounce any word like a local.',
  grammar: '<p>Urdu is written right-to-left in the Perso-Arabic script, but you don\'t need the alphabet to start speaking. Word order is flexible but usually <b>subject–object–verb</b>: مجھے پانی چاہیے reads literally "to-me water is-needed". The question word <b>کیا</b> (kya) turns a statement into a yes/no question. Genders and plurals exist, but as a beginner you can rely on word order and context and still be understood.</p>',
  bridges: '<div class="note">🇮🇳 <b>Hindi.</b> Urdu and Hindi share the same spoken language — most everyday words are identical. Written Urdu uses the Perso-Arabic script; written Hindi uses Devanagari. Learn one and you can be understood across the border.</div><div class="note">🇸🇦 <b>Arabic & Persian.</b> Much of Urdu\'s "high" vocabulary comes from Arabic and Persian loanwords: <b>کتاب</b> (kitab, book), <b>سفر</b> (safar, journey), <b>خبر</b> (khabar, news). If you know either, a lot of Urdu will already feel familiar.</div>',
  lessons: [
    { id:1, title:'Greetings & being polite', focus:'السلام علیکم · آداب · آپ کیسے ہیں؟',
      steps:[
        {t:'say',text:'Urdu\'s first words: <span class="inline-tr">السلام علیکم</span> — hello, literally "peace be upon you". Say it loud.',tr:'السلام علیکم'},
        {t:'words',items:[{tr:'السلام علیکم',pr:'as-salaam alaikum',en:'hello / peace be upon you'},{tr:'وعلیکم السلام',pr:'wa alaikum as-salaam',en:'the reply'},{tr:'سلام',pr:'salaam',en:'hi / hello',link:"≈ Arabic salaam (peace)"},{tr:'آداب',pr:'aadaab',en:'a respectful greeting'},{tr:'صبح بخیر',pr:'subh bakhair',en:'good morning'}]},
        {t:'chal',en:'Hello, peace be upon you',tr:'السلام علیکم',pr:'as-salaam alaikum',morph:['as-salaam = the peace','alaikum = upon you']},
        {t:'say',text:'To ask how someone is: <span class="inline-tr">آپ کیسے ہیں؟</span> — how are you?',tr:'آپ کیسے ہیں؟'},
        {t:'words',items:[{tr:'آپ کیسے ہیں؟',pr:'aap kaise hain?',en:'How are you?'},{tr:'میں ٹھیک ہوں',pr:'main theek hoon',en:'I\'m fine'},{tr:'شکریہ',pr:'shukriya',en:'thank you',link:"≈ Arabic shukran (thanks)"}]},
        {t:'chal',en:'Hello, how are you?',tr:'السلام علیکم، آپ کیسے ہیں؟',pr:'as-salaam alaikum, aap kaise hain?',morph:['as-salaam = hello','aap kaise hain? = how are you?']}
      ],
      blocks:['<code>السلام علیکم</code> = hello / peace be upon you','<code>آداب</code> = a respectful greeting','<code>شکریہ</code> = thank you','<code>آپ کیسے ہیں؟</code> = how are you?'] },
    { id:2, title:'Polite phrases', focus:'شکریہ · براہِ مہربانی · معاف کیجیے · جی ہاں',
      steps:[
        {t:'say',text:'The magic word for anything polite: <span class="inline-tr">شکریہ</span> — thank you.',tr:'شکریہ'},
        {t:'words',items:[{tr:'شکریہ',pr:'shukriya',en:'thank you'},{tr:'بہت شکریہ',pr:'bahut shukriya',en:'thank you very much'},{tr:'براہِ مہربانی',pr:'baraah meherbaani',en:'please'},{tr:'معاف کیجیے',pr:'maaf kijiye',en:'excuse me / sorry'},{tr:'جی ہاں',pr:'jee haan',en:'yes (polite)'},{tr:'جی نہیں',pr:'jee nahin',en:'no (polite)'}]},
        {t:'chal',en:'Thank you very much',tr:'بہت شکریہ',pr:'bahut shukriya',morph:['bahut = very','shukriya = thanks']},
        {t:'say',text:'<span class="inline-tr">براہِ مہربانی</span> = please. Add it to any request to sound warm and polite.',tr:'براہِ مہربانی'},
        {t:'chal',en:'A water, please',tr:'پانی، براہِ مہربانی',pr:'paani, baraah meherbaani',morph:['paani = water','baraah meherbaani = please']},
        {t:'chal',en:'Sorry, excuse me',tr:'معاف کیجیے',pr:'maaf kijiye',morph:['maaf = forgiveness','kijiye = please (do)']}
      ],
      blocks:['<code>شکریہ</code> = thank you','<code>براہِ مہربانی</code> = please','<code>معاف کیجیے</code> = excuse me / sorry'] },
    { id:3, title:'Numbers 1–10', focus:'ایک · دو · تین · دس',
      steps:[
        {t:'say',text:'Numbers are the fastest win. Listen and repeat: <span class="inline-tr">ایک، دو، تین</span>.',tr:'ایک'},
        {t:'words',items:[{tr:'ایک',pr:'ek',en:'1'},{tr:'دو',pr:'do',en:'2'},{tr:'تین',pr:'teen',en:'3'},{tr:'چار',pr:'chaar',en:'4'},{tr:'پانچ',pr:'paanch',en:'5'},{tr:'چھ',pr:'chheh',en:'6'},{tr:'سات',pr:'saat',en:'7'},{tr:'آٹھ',pr:'aatth',en:'8'},{tr:'نو',pr:'nau',en:'9'},{tr:'دس',pr:'das',en:'10'}]},
        {t:'chal',en:'Two waters, please',tr:'دو پانی، براہِ مہربانی',pr:'do paani, baraah meherbaani',morph:['do = two','paani = water']},
        {t:'say',text:'<span class="inline-tr">یہ کتنا ہے؟</span> = how much does it cost? The key phrase for shopping.',tr:'یہ کتنا ہے؟'},
        {t:'chal',en:'How much is it?',tr:'یہ کتنا ہے؟',pr:'yeh kitna hai?',morph:['yeh = this','kitna = how much','hai = is']},
        {t:'chal',en:'It\'s five rupees',tr:'پانچ روپے',pr:'paanch rupay',morph:['paanch = five','rupay = rupees']}
      ],
      blocks:['<code>ایک، دو، تین، چار، پانچ</code> = 1–5','<code>چھ، سات، آٹھ، نو، دس</code> = 6–10','<code>یہ کتنا ہے؟</code> = how much is it?'] },
    { id:4, title:'"I want" — مجھے چاہیے', focus:'مجھے … چاہیے · چائے · پانی',
      steps:[
        {t:'say',text:'The magic phrase to ask for anything: <span class="inline-tr">مجھے … چاہیے</span> — I want … / I need ….',tr:'مجھے چاہیے'},
        {t:'words',items:[{tr:'مجھے چاہیے',pr:'mujhe chahiye',en:'I want...'},{tr:'پانی',pr:'paani',en:'water'},{tr:'چائے',pr:'chai',en:'tea',link:"≈ English chai (tea)"},{tr:'کھانا',pr:'khaana',en:'food'},{tr:'کافی',pr:'KAA-fee',en:'coffee',link:"≈ English coffee"}]},
        {t:'chal',en:'I want water',tr:'مجھے پانی چاہیے',pr:'mujhe paani chahiye',morph:['mujhe = I / to me','paani = water','chahiye = want / need']},
        {t:'chal',en:'I want food',tr:'مجھے کھانا چاہیے',pr:'mujhe khaana chahiye',morph:['mujhe = I','khaana = food','chahiye = want']},
        {t:'say',text:'Make it polite by adding <span class="inline-tr">براہِ مہربانی</span> (please) at the end.',tr:'براہِ مہربانی'},
        {t:'chal',en:'I want tea, please',tr:'مجھے چائے چاہیے، براہِ مہربانی',pr:'mujhe chai chahiye, baraah meherbaani',morph:['mujhe = I','chai = tea','chahiye = want','baraah meherbaani = please']}
      ],
      blocks:['<code>مجھے … چاہیے</code> = I want …','<code>چائے</code> = tea · <code>پانی</code> = water · <code>کھانا</code> = food'] },
    { id:5, title:'Food & drink', focus:'پانی · روٹی · چائے · مینیو',
      steps:[
        {t:'say',text:'Eating out? Key words: <span class="inline-tr">پانی</span> (water), <span class="inline-tr">روٹی</span> (bread), <span class="inline-tr">چائے</span> (tea).',tr:'پانی'},
        {t:'words',items:[{tr:'پانی',pr:'paani',en:'water'},{tr:'روٹی',pr:'roti',en:'bread'},{tr:'چائے',pr:'chai',en:'tea'},{tr:'مینیو',pr:'MEN-yoo',en:'the menu',link:"≈ English menu"},{tr:'بل',pr:'bil',en:'the bill',link:"≈ English bill"}]},
        {t:'chal',en:'Water and bread, please',tr:'پانی اور روٹی، براہِ مہربانی',pr:'paani aur roti, baraah meherbaani',morph:['paani = water','aur = and','roti = bread']},
        {t:'chal',en:'I\'d like the menu',tr:'مجھے مینیو چاہیے',pr:'mujhe MEN-yoo chahiye',morph:['مجھے = I','مینیو = the menu','چاہیے = want']},
        {t:'say',text:'<span class="inline-tr">بہت مزیدار</span> = delicious. Say it and you\'ll make the cook\'s day.',tr:'بہت مزیدار'},
        {t:'chal',en:'It\'s delicious!',tr:'بہت مزیدار!',pr:'bahut mazeedaar!',morph:['bahut = very','mazeedaar = delicious']}
      ],
      blocks:['<code>پانی</code>, <code>روٹی</code>, <code>چائے</code> = water, bread, tea','<code>بل</code> = the bill','<code>بہت مزیدار</code> = delicious'] },
    { id:6, title:'Getting around', focus:'کہاں ہے؟ · دائیں · بائیں · سیدھا',
      steps:[
        {t:'say',text:'The most useful question in any city: <span class="inline-tr">… کہاں ہے؟</span> — where is…?',tr:'کہاں ہے؟'},
        {t:'words',items:[{tr:'کہاں ہے؟',pr:'kahan hai?',en:'Where is...?'},{tr:'دائیں',pr:'daain',en:'to the right'},{tr:'بائیں',pr:'baain',en:'to the left'},{tr:'سیدھا',pr:'seedha',en:'straight ahead'},{tr:'ریلوے اسٹیشن',pr:'RAIL-way uh-STAY-shan',en:'the station'},{tr:'بیت الخلا',pr:'baital-khala',en:'the bathroom'}]},
        {t:'chal',en:'Where is the station?',tr:'ریلوے اسٹیشن کہاں ہے؟',pr:'RAIL-way uh-STAY-shan ka-HAAN hai?',morph:['ریلوے اسٹیشن = the station','kahan = where','hai = is']},
        {t:'chal',en:'Where is the bathroom?',tr:'بیت الخلا کہاں ہے؟',pr:'baital-khala kahan hai?',morph:['baital-khala = the bathroom','kahan = where']},
        {t:'say',text:'<span class="inline-tr">دائیں</span> is right, <span class="inline-tr">بائیں</span> is left, <span class="inline-tr">سیدھا</span> is straight ahead.',tr:'سیدھا'},
        {t:'chal',en:'Go straight ahead',tr:'سیدھا جائیے',pr:'seedha jaaiye',morph:['seedha = straight','jaaiye = go (polite)']}
      ],
      blocks:['<code>… کہاں ہے؟</code> = where is…?','<code>دائیں</code> / <code>بائیں</code> = right / left'] },
    { id:7, title:'Questions & "do you have…?"', focus:'کیا آپ کے پاس… ہے؟ · کیا',
      steps:[
        {t:'say',text:'To ask if someone has something: <span class="inline-tr">کیا آپ کے پاس… ہے؟</span> — do you have…?',tr:'کیا آپ کے پاس ہے؟'},
        {t:'chal',en:'Do you have water?',tr:'کیا آپ کے پاس پانی ہے؟',pr:'kya aap ke paas paani hai?',morph:['kya = question word','aap ke paas = do you have','paani = water','hai = is']},
        {t:'say',text:'<span class="inline-tr">کیا</span> at the start turns any statement into a yes/no question.',tr:'کیا'},
        {t:'chal',en:'Is there wifi?',tr:'کیا وائی فائی ہے؟',pr:'kya wifi hai?',morph:['kya = question word','wifi = wifi','hai = is'],link:"wifi = English loanword"},
        {t:'say',text:'<span class="inline-tr">کیا میں… کر سکتا ہوں؟</span> = may I…? For polite requests.',tr:'کر سکتا ہوں؟'},
        {t:'chal',en:'May I pay?',tr:'کیا میں بل ادا کر سکتا ہوں؟',pr:'kya main bill ada kar sakta hoon?',morph:['kya = question word','main = I','bill = bill','ada kar sakta hoon = can I pay']}
      ],
      blocks:['<code>کیا آپ کے پاس… ہے؟</code> = do you have…?','<code>کیا</code> = yes/no question word','<code>کیا میں…؟</code> = may I…?'] },
    { id:8, title:'Family & people', focus:'خاندان · ماں · باپ · دوست',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">خاندان</span> (family), <span class="inline-tr">ماں</span> (mother), <span class="inline-tr">باپ</span> (father).',tr:'خاندان'},
        {t:'words',items:[{tr:'خاندان',pr:'khaandaan',en:'family'},{tr:'ماں',pr:'maa',en:'mother'},{tr:'باپ',pr:'baap',en:'father'},{tr:'بھائی',pr:'bhai',en:'brother'},{tr:'بہن',pr:'behen',en:'sister'},{tr:'دوست',pr:'dost',en:'friend',link:"≈ Persian/Hindi dost (friend)"}]},
        {t:'chal',en:'I have a friend',tr:'میرا ایک دوست ہے',pr:'mera ek dost hai',morph:['mera = my','ek = a / one','dost = friend','hai = is']},
        {t:'say',text:'<span class="inline-tr">میرے پاس</span> = I have, literally "with me". It\'s the key way to say what you\'ve got.',tr:'میرے پاس'},
        {t:'chal',en:'I have a family',tr:'میرے پاس ایک خاندان ہے',pr:'mere paas ek khaandaan hai',morph:['mere paas = I have (with me)','ek = a','khaandaan = family','hai = is']}
      ],
      blocks:['<code>ماں</code> / <code>باپ</code> = mother / father','<code>خاندان</code> = family','<code>دوست</code> = friend','<code>میرے پاس</code> = I have'] },
    { id:9, title:'Time, days & weather', focus:'آج · کل · موسم کیسا ہے؟',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">آج</span>, tomorrow is <span class="inline-tr">کل</span>.',tr:'آج'},
        {t:'words',items:[{tr:'آج',pr:'aaj',en:'today'},{tr:'کل',pr:'kal',en:'tomorrow / yesterday'},{tr:'موسم کیسا ہے؟',pr:'mausam kaisa hai?',en:'what\'s the weather?'},{tr:'بارش',pr:'baarish',en:'rain'},{tr:'گرم',pr:'garm',en:'hot'},{tr:'اتوار',pr:'itwar',en:'Sunday'}]},
        {t:'chal',en:'See you tomorrow',tr:'کل ملتے ہیں',pr:'kal milte hain',morph:['kal = tomorrow','milte hain = we\'ll meet']},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">موسم کیسا ہے؟</span>',tr:'موسم کیسا ہے؟'},
        {t:'chal',en:'It\'s raining',tr:'بارش ہو رہی ہے',pr:'baarish ho rahi hai',morph:['baarish = rain','ho rahi hai = is happening']},
        {t:'chal',en:'Today is Sunday',tr:'آج اتوار ہے',pr:'aaj itwar hai',morph:['aaj = today','itwar = Sunday','hai = is']}
      ],
      blocks:['<code>آج</code> / <code>کل</code> = today / tomorrow','<code>موسم کیسا ہے؟</code> = what\'s the weather?','<code>بارش</code> = rain'] },
    { id:10, title:'Small talk & names', focus:'میرا نام… ہے · آپ کا نام کیا ہے؟',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">میرا نام… ہے</span> = my name is…, and <span class="inline-tr">مل کر خوشی ہوئی</span> = pleased to meet you.',tr:'میرا نام ہے'},
        {t:'chal',en:'My name is __NAME__',tr:'میرا نام __NAME__ ہے',pr:'mera naam __NAME__ hai',morph:['میرا = my','نام = name','__NAME__ = your name','ہے = is']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">آپ کا نام کیا ہے؟</span>',tr:'آپ کا نام کیا ہے؟'},
        {t:'chal',en:'What\'s your name?',tr:'آپ کا نام کیا ہے؟',pr:'aap ka naam kya hai?',morph:['aap ka = your','naam = name','kya = what','hai = is']},
        {t:'say',text:'And where are you from? <span class="inline-tr">آپ کہاں سے ہیں؟</span> Reply with <span class="inline-tr">میں _____ سے ہوں</span>.',tr:'آپ کہاں سے ہیں؟'},
        {t:'chal',en:'Pleased to meet you',tr:'مل کر خوشی ہوئی',pr:'mil kar khushi hui',morph:['mil kar = meeting','khushi hui = joy happened']}
      ],
      blocks:['<code>میرا نام __NAME__ ہے</code> = my name is…','<code>آپ کا نام کیا ہے؟</code> = what\'s your name?','<code>مل کر خوشی ہوئی</code> = pleased to meet you'] },
    { id:11, title:'Health & emergency', focus:'مدد · ڈاکٹر · دواخانہ',
      steps:[
        {t:'say',text:'The most important words if you need help: <span class="inline-tr">مدد</span> (help), <span class="inline-tr">ڈاکٹر</span> (doctor), <span class="inline-tr">دواخانہ</span> (pharmacy).',tr:'مدد'},
        {t:'words',items:[{tr:'مدد!',pr:'madad!',en:'help!',link:"≈ Arabic madad (help)"},{tr:'ڈاکٹر',pr:'daaktar',en:'the doctor',link:"≈ English doctor"},{tr:'دواخانہ',pr:'dawakhana',en:'the pharmacy'},{tr:'مجھے سمجھ نہیں آیا',pr:'mujhe samajh nahin aaya',en:'I don\'t understand'},{tr:'بیمار',pr:'beemaar',en:'sick / ill'},{tr:'درد',pr:'dard',en:'pain'}]},
        {t:'chal',en:'Help!',tr:'مدد!',pr:'madad!',morph:['madad = help']},
        {t:'chal',en:'I don\'t understand',tr:'مجھے سمجھ نہیں آیا',pr:'mujhe samajh nahin aaya',morph:['mujhe = to me','samajh = understanding','nahin = not','aaya = came']},
        {t:'say',text:'To say you need medical help: <span class="inline-tr">مجھے ڈاکٹر چاہیے</span> — I need a doctor.',tr:'مجھے ڈاکٹر چاہیے'},
        {t:'chal',en:'I need a doctor',tr:'مجھے ڈاکٹر چاہیے',pr:'mujhe daaktar chahiye',morph:['mujhe = I','daaktar = doctor','chahiye = need / want']}
      ],
      blocks:['<code>مدد</code> = help','<code>ڈاکٹر</code> = the doctor','<code>مجھے سمجھ نہیں آیا</code> = I don\'t understand'] },
    { id:12, title:'Tying it together', focus:'السلام علیکم · مجھے چاہیے · کہاں ہے؟',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolbox. This capstone uses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello, how are you?',tr:'السلام علیکم، آپ کیسے ہیں؟',pr:'as-salaam alaikum, aap kaise hain?',morph:['as-salaam = hello','aap kaise hain? = how are you?']},
        {t:'chal',en:'I want water, please',tr:'مجھے پانی چاہیے، براہِ مہربانی',pr:'mujhe paani chahiye, baraah meherbaani',morph:['mujhe = I','paani = water','chahiye = want','baraah meherbaani = please']},
        {t:'chal',en:'Where is the station?',tr:'ریلوے اسٹیشن کہاں ہے؟',pr:'RAIL-way uh-STAY-shan ka-HAAN hai?',morph:['ریلوے اسٹیشن = the station','kahan = where','hai = is']},
        {t:'chal',en:'How much is it?',tr:'یہ کتنا ہے؟',pr:'yeh kitna hai?',morph:['yeh = this','kitna = how much','hai = is']},
        {t:'chal',en:'Delicious! Thank you!',tr:'بہت مزیدار! شکریہ!',pr:'bahut mazeedaar! shukriya!',morph:['bahut mazeedaar = delicious','shukriya = thanks']}
      ],
      blocks:['You built: greetings, ordering, directions, prices, thanks — a full day out in Urdu.'] },
    { id:13, title:'Airport & tickets', focus:'ہوائی اڈا · پاسپورٹ · ٹکٹ · پرواز',
      steps:[
        {t:'say',text:'You have landed. The building is the <span class="inline-tr">ہوائی اڈا</span>. Your document is a <span class="inline-tr">پاسپورٹ</span>.',tr:'ہوائی اڈا'},
        {t:'words',items:[{tr:'ہوائی اڈا',pr:'ha-WAA-ee uh-DAA',en:'the airport'},{tr:'پاسپورٹ',pr:'PAAS-port',en:'the passport'},{tr:'ٹکٹ',pr:'ti-KAT',en:'the ticket'},{tr:'پرواز',pr:'par-WAAZ',en:'the flight'},{tr:'گیٹ',pr:'gayt',en:'the gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'ہوائی اڈا کہاں ہے؟',pr:'ha-WAA-ee uh-DAA ka-HAAN hai',morph:['ہوائی اڈا = the airport','کہاں ہے؟ = where is it?']},
        {t:'chal',en:'Here is my passport',tr:'یہ میرا پاسپورٹ ہے',pr:'yeh MAY-raa PAAS-port hai',morph:['یہ = this is','میرا پاسپورٹ = my passport']},
        {t:'chal',en:'A ticket, please',tr:'ایک ٹکٹ، براہ کرم',pr:'aik ti-KAT, ba-RAAH ka-ram',morph:['ایک ٹکٹ = a ticket','براہ کرم = please']},
        {t:'chal',en:'Where is the gate?',tr:'گیٹ کہاں ہے؟',pr:'gayt ka-HAAN hai',morph:['گیٹ = the gate','کہاں ہے؟ = where is it?']}
      ],
      blocks:['<code>ہوائی اڈا</code> = airport','<code>پاسپورٹ</code> = passport','<code>ٹکٹ</code> = ticket','<code>گیٹ</code> = gate'] },
    { id:14, title:'The taxi', focus:'ٹیکسی · جانا · ہوٹل · رکیں',
      steps:[
        {t:'say',text:'The driver is waiting. <span class="inline-tr">ٹیکسی</span> is the word you need. Tell them where to go with <span class="inline-tr">میں جانا چاہتا ہوں</span>.',tr:'ٹیکسی'},
        {t:'words',items:[{tr:'ٹیکسی',pr:'TAIK-see',en:'the taxi'},{tr:'ڈرائیور',pr:'drai-var',en:'the driver'},{tr:'میں جانا چاہتا ہوں',pr:'main JAA-naa CHAH-taa hoon',en:'I want to go'},{tr:'یہاں رکیں',pr:'ya-HAAN ru-KAIN',en:'stop here'}]},
        {t:'chal',en:'Taxi, please',tr:'ٹیکسی، براہ کرم',pr:'TAIK-see, ba-RAAH ka-ram',morph:['ٹیکسی = taxi','براہ کرم = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'میں ہوٹل جانا چاہتا ہوں',pr:'main ho-TAL JAA-naa CHAH-taa hoon',morph:['میں = I','ہوٹل = hotel','جانا چاہتا ہوں = want to go']},
        {t:'chal',en:'Stop here, please',tr:'یہاں رکیں، براہ کرم',pr:'ya-HAAN ru-KAIN, ba-RAAH ka-ram',morph:['یہاں رکیں = stop here','براہ کرم = please']},
        {t:'chal',en:'How much is it?',tr:'کتنے کا ہے؟',pr:'KI-tnay kaa hai',morph:['کتنے کا = how much','ہے؟ = is it?']}
      ],
      blocks:['<code>میں … جانا چاہتا ہوں</code> = I want to go to …','<code>یہاں رکیں</code> = stop here'] },
    { id:15, title:'The hotel', focus:'ریزرویشن · کمرہ · چابی · رات',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">میری ریزرویشن ہے</span> — I have a reservation.',tr:'ریزرویشن'},
        {t:'words',items:[{tr:'ہوٹل',pr:'ho-TAL',en:'the hotel'},{tr:'ریزرویشن',pr:'ray-zar-VAY-shan',en:'the reservation'},{tr:'کمرہ',pr:'KAM-rah',en:'the room'},{tr:'چابی',pr:'CHAA-bee',en:'the key'},{tr:'ایک رات',pr:'aik raat',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'میری ریزرویشن ہے',pr:'MAY-ree ray-zar-VAY-shan hai',morph:['میری = my','ریزرویشن ہے = there is a reservation']},
        {t:'chal',en:'A room for one night, please',tr:'ایک رات کا کمرہ، براہ کرم',pr:'aik raat kaa KAM-rah, ba-RAAH ka-ram',morph:['ایک رات کا = for one night','کمرہ = a room','براہ کرم = please']},
        {t:'chal',en:'The key, please',tr:'چابی، براہ کرم',pr:'CHAA-bee, ba-RAAH ka-ram',morph:['چابی = the key','براہ کرم = please']},
        {t:'chal',en:'Where is my room?',tr:'میرا کمرہ کہاں ہے؟',pr:'MAY-raa KAM-rah ka-HAAN hai',morph:['میرا کمرہ = my room','کہاں ہے؟ = where is it?']}
      ],
      blocks:['<code>ریزرویشن</code> = reservation','<code>کمرہ</code> = room','<code>چابی</code> = key'] },
    { id:16, title:'Ask for help', focus:'سمجھ نہیں آیا · آہستہ · انگریزی',
      steps:[
        {t:'say',text:'When the language is too fast: <span class="inline-tr">آہستہ، براہ کرم</span> — slower, please.',tr:'آہستہ، براہ کرم'},
        {t:'words',items:[{tr:'آہستہ',pr:'AA-his-tah',en:'slower'},{tr:'دوبارہ',pr:'doo-BAA-rah',en:'again'},{tr:'انگریزی',pr:'an-grai-ZEE',en:'English'},{tr:'کیا آپ مدد کر سکتے ہیں؟',pr:'kya aap ma-DAD kar SAK-tay hain',en:'can you help?'}]},
        {t:'chal',en:'I don\'t understand',tr:'مجھے سمجھ نہیں آیا',pr:'mu-JHAY sa-MAJH na-HEEN aa-yaa',morph:['مجھے = to me','سمجھ نہیں آیا = it is not understood']},
        {t:'chal',en:'Slower, please',tr:'آہستہ، براہ کرم',pr:'AA-his-tah, ba-RAAH ka-ram',morph:['آہستہ = slower','براہ کرم = please']},
        {t:'chal',en:'Can you help me?',tr:'کیا آپ مدد کر سکتے ہیں؟',pr:'kya aap ma-DAD kar SAK-tay hain',morph:['کیا آپ = can you','مدد کر سکتے ہیں؟ = help?']},
        {t:'chal',en:'Do you speak English?',tr:'کیا آپ انگریزی بولتے ہیں؟',pr:'kya aap an-grai-ZEE BOL-tay hain',morph:['کیا آپ = do you','انگریزی = English','بولتے ہیں؟ = speak?']}
      ],
      blocks:['<code>آہستہ</code> = slower','<code>کیا آپ انگریزی بولتے ہیں؟</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'cafe', title:'☕ At a café', emoji:'☕', turns:[
      {who:'You',tr:'السلام علیکم! ایک کافی، براہِ مہربانی۔',pr:'as-salaam alaikum! ek KAA-fee, baraah meherbaani.',en:'Hello! A coffee, please.'},
      {who:'Waiter',tr:'فوراً۔ یہاں کھائیں گے یا ساتھ لے جائیں گے؟',pr:'fauran. yahan khaain ge ya saath le jaayen ge?',en:'Right away. Eat here or take it away?'},
      {who:'You',tr:'ساتھ لے جاؤں گا، شکریہ۔',pr:'saath le jaoon ga, shukriya.',en:'To go, thanks.'},
      {who:'Waiter',tr:'یہ لیجیے۔ دو سو روپے ہوئے۔',pr:'yeh leejiye. do sau rupay hue.',en:'Here. That\'s two hundred rupees.'},
      {who:'You',tr:'بہت شکریہ!',pr:'bahut shukriya!',en:'Thanks a lot!'}
    ]},
    { id:'train', title:'🚉 At the train station', emoji:'🚉', turns:[
      {who:'You',tr:'معاف کیجیے، ریلوے اسٹیشن کہاں ہے؟',pr:'maaf kijiye, RAIL-way uh-STAY-shan ka-HAAN hai?',en:'Excuse me, where\'s the station?'},
      {who:'Local',tr:'وہیں ہے، دائیں طرف۔',pr:'wahin hai, daain taraf.',en:'It\'s there, on the right.'},
      {who:'You',tr:'شکریہ۔ لاہور کا ایک ٹکٹ، براہِ مہربانی۔',pr:'shukriya. lahore ka ek ticket, baraah meherbaani.',en:'Thanks. A ticket to Lahore, please.'},
      {who:'Ticket',tr:'پانچ سو روپے۔ ٹرین نو بجے نکلے گی۔',pr:'paanch sau rupay. train nau baje nikle gi.',en:'Five hundred rupees. The train leaves at nine.'}
    ]},
    { id:'restaurant', title:'🍽️ At a restaurant', emoji:'🍽️', turns:[
      {who:'Waiter',tr:'شام بخیر! کیا آپ نے میز بک کروائی ہے؟',pr:'shaam bakhair! kya aap ne mez book karwaai hai?',en:'Good evening! Do you have a reservation?'},
      {who:'You',tr:'جی ہاں، دو لوگوں کے لیے۔',pr:'jee haan, do logon ke liye.',en:'Yes, for two people.'},
      {who:'You',tr:'مینیو، براہِ مہربانی۔',pr:'menu, baraah meherbaani.',en:'The menu, please.'},
      {who:'You',tr:'مجھے بریانی اور ایک چائے چاہیے۔',pr:'mujhe biryani aur ek chai chahiye.',en:'I\'d like the biryani and a tea.'},
      {who:'Waiter',tr:'بہت اچھا انتخاب! کھانے کا مزہ لیجیے۔',pr:'bahut acha intikhab! khaane ka maza leejiye.',en:'Excellent choice! Enjoy your meal.'}
    ]},
    { id:'shop', title:'🛍️ Shopping', emoji:'🛍️', turns:[
      {who:'You',tr:'یہ کتنی کا ہے؟',pr:'yeh kitni ka hai?',en:'How much is this?'},
      {who:'Seller',tr:'پانچ سو روپے۔',pr:'paanch sau rupay.',en:'Five hundred rupees.'},
      {who:'You',tr:'بہت مہنگا ہے۔ کیا میں اسے پہن کر دیکھ سکتا ہوں؟',pr:'bahut mehnga hai. kya main ise pehn kar dekh sakta hoon?',en:'It\'s too expensive. Can I try it on?'},
      {who:'Seller',tr:'ضرور! فٹنگ روم وہاں ہے۔',pr:'zaroor! fitting room wahin hai.',en:'Of course! The fitting room is there.'},
      {who:'You',tr:'ٹھیک ہے، میں یہ لیتا ہوں۔',pr:'theek hai, main yeh leta hoon.',en:'OK, I\'ll take it.'}
    ]}
  ],
  pocket: [
    {tr:'السلام علیکم',pr:'as-salaam alaikum',en:'Hello',c:'Greetings'},
    {tr:'صبح بخیر',pr:'subh bakhair',en:'Good morning',c:'Greetings'},
    {tr:'شام بخیر',pr:'shaam bakhair',en:'Good evening',c:'Greetings'},
    {tr:'آپ کیسے ہیں؟',pr:'aap kaise hain?',en:'How are you?',c:'Greetings'},
    {tr:'شکریہ',pr:'shukriya',en:'Thank you',c:'Courtesy'},
    {tr:'بہت شکریہ',pr:'bahut shukriya',en:'Thank you very much',c:'Courtesy'},
    {tr:'براہِ مہربانی',pr:'baraah meherbaani',en:'Please',c:'Courtesy'},
    {tr:'معاف کیجیے',pr:'maaf kijiye',en:'Excuse me / sorry',c:'Courtesy'},
    {tr:'جی ہاں',pr:'jee haan',en:'Yes',c:'Courtesy'},
    {tr:'جی نہیں',pr:'jee nahin',en:'No',c:'Courtesy'},
    {tr:'ایک',pr:'ek',en:'1',c:'Numbers'},
    {tr:'دو',pr:'do',en:'2',c:'Numbers'},
    {tr:'تین',pr:'teen',en:'3',c:'Numbers'},
    {tr:'چار',pr:'chaar',en:'4',c:'Numbers'},
    {tr:'پانچ',pr:'paanch',en:'5',c:'Numbers'},
    {tr:'دس',pr:'das',en:'10',c:'Numbers'},
    {tr:'پانی',pr:'paani',en:'water',c:'Food'},
    {tr:'روٹی',pr:'roti',en:'bread',c:'Food'},
    {tr:'چائے',pr:'chai',en:'tea',c:'Food'},
    {tr:'کھانا',pr:'khaana',en:'food',c:'Food'},
    {tr:'بل',pr:'bill',en:'the bill',c:'Food'},
    {tr:'کہاں ہے؟',pr:'kahan hai?',en:'Where is...?',c:'Directions'},
    {tr:'دائیں',pr:'daain',en:'to the right',c:'Directions'},
    {tr:'بائیں',pr:'baain',en:'to the left',c:'Directions'},
    {tr:'سیدھا',pr:'seedha',en:'straight ahead',c:'Directions'},
    {tr:'ریلوے اسٹیشن',pr:'RAIL-way uh-STAY-shan',en:'the station',c:'Directions'},
    {tr:'یہ کتنا ہے؟',pr:'yeh kitna hai?',en:'how much is it?',c:'Shopping'},
    {tr:'بہت مہنگا ہے',pr:'bahut mehnga hai',en:'it\'s too expensive',c:'Shopping'},
    {tr:'مدد!',pr:'madad!',en:'Help!',c:'Emergency'},
    {tr:'مجھے ڈاکٹر چاہیے',pr:'mujhe daaktar chahiye',en:'I need a doctor',c:'Emergency'},
    {tr:'مجھے سمجھ نہیں آیا',pr:'mujhe samajh nahin aaya',en:'I don\'t understand',c:'Emergency'},
    {tr:'بیت الخلا کہاں ہے؟',pr:'baital-khala kahan hai?',en:'Where is the bathroom?',c:'Emergency'},
    {tr:'آج',pr:'aaj',en:'today',c:'Time'},
    {tr:'کل',pr:'kal',en:'tomorrow',c:'Time'},
    {tr:'موسم کیسا ہے؟',pr:'mausam kaisa hai?',en:'what\'s the weather?',c:'Time'},
    {tr:'بارش',pr:'baarish',en:'rain',c:'Time'},
    {tr:'ہوائی اڈا',pr:'ha-WAA-ee uh-DAA',en:'the airport',c:'Travel'},
    {tr:'پاسپورٹ',pr:'PAAS-port',en:'the passport',c:'Travel'},
    {tr:'ٹکٹ',pr:'ti-KAT',en:'the ticket',c:'Travel'},
    {tr:'ٹیکسی',pr:'TAIK-see',en:'the taxi',c:'Travel'},
    {tr:'ہوٹل',pr:'ho-TAL',en:'the hotel',c:'Travel'},
    {tr:'میری ریزرویشن ہے',pr:'MAY-ree ray-zar-VAY-shan hai',en:'I have a reservation',c:'Travel'},
    {tr:'آہستہ، براہ کرم',pr:'AA-his-tah, ba-RAAH ka-ram',en:'Slower, please',c:'Travel'},
    {tr:'کیا آپ انگریزی بولتے ہیں؟',pr:'kya aap an-grai-ZEE BOL-tay hain',en:'Do you speak English?',c:'Travel'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Shopping','Emergency','Time','Travel'],
  culture: [
    {icon:'🕌',title:'Salaam is sacred',body:'السلام علیکم (as-salaam alaikum) means "peace be upon you" and is used everywhere — the reply وعلیکم السلام matters just as much. A warm salaam opens every door.'},
    {icon:'🍛',title:'Biryani is an event',body:'A plate of biryani is a celebration, not just a meal. From the sizzling kebab streets of Lahore to home kitchens, food is shared generously — nobody eats alone.'},
    {icon:'🫖',title:'Chai for every reason',body:'Urdu speakers treat tea as a ritual. Offering a scalding cup of doodh patti chai is the warmest sign of welcome, and accepting it is the polite thing to do.'},
    {icon:'🎶',title:'The poetry of ghazals',body:'Urdu is a language of poetry. The ghazals of Mir, Ghalib and Faiz are still sung and recited today. A perfect couplet can quiet a whole room.'},
    {icon:'🤝',title:'Guests are a blessing',body:'Hospitality (mehmaan-nawazi) is a point of honour. Even a casual visitor is offered tea and food, and refusing too quickly can seem rude.'},
    {icon:'🛍️',title:'Bazaar bargaining',body:'In markets a quoted price is often a starting point. A friendly "بہت مہنگا ہے" (too expensive) and a smile opens the negotiation — it\'s all good-natured.'}
  ],
  sounds: [
    {l:'خ',say:'a deep "kh" from the back of the throat, like clearing it',ex:'خوبصورت = khoobsurat (beautiful)',voice:'خوبصورت'},
    {l:'غ',say:'a throaty "gh", like a guttural gargled r',ex:'غزل = ghazal',voice:'غزل'},
    {l:'ق',say:'a deep "q" from the back of the mouth — not an English "k"',ex:'قلم = qalam (pen)',voice:'قلم'},
    {l:'ع',say:'a guttural catch from the throat, like a gentle "a"',ex:'عید = Eid',voice:'عید'},
    {l:'ہ',say:'a soft breathy "h", lighter than English h',ex:'ہاں = haan (yes)',voice:'ہاں'},
    {l:'ں',say:'a nasal "n" that hums (nūn ghunna)',ex:'ہوں = hoon (I am)',voice:'ہوں'},
    {l:'ٹ',say:'a hard "t" from the roof of the mouth (retroflex)',ex:'ٹوپی = topi (cap)',voice:'ٹوپی'},
    {l:'ش',say:'the "sh" sound, as in English "she"',ex:'شکریہ = shukriya (thanks)',voice:'شکریہ'}
  ],
  resources: [
    {icon:'🗣️',t:'UrduPod101',d:'Structured beginner lessons, from the alphabet to full conversational phrases.',q:'UrduPod101'},
    {icon:'🇵🇰',t:'Easy Urdu',d:'Real street interviews with native speakers — natural, everyday spoken Urdu.',q:'Easy Urdu street interviews'},
    {icon:'🎬',t:'Urdu drama',d:'Pakistani dramas are a great way to hear everyday Urdu with clear subtitles.',q:'Learn Urdu with Pakistani dramas'},
    {icon:'🎶',t:'Ghazal poetry',d:'Listen to the masters sing to fall in love with the sound of the language.',q:'Urdu ghazal poetry for beginners'},
    {icon:'🎧',t:'Urdu audio lessons',d:'Short, digestible audio for the commute or a walk.',q:'Urdu audio lessons for beginners'}
  ]
};
