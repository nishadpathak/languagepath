/* ---- hindi ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["hindi"] = {
  name: 'Hindi',
  flag: '🇮🇳',
  tts: 'hi-IN',
  dir: 'ltr',
  native: 'हिन्दी',
  soundTitle: 'Hindi sounds & the Devanagari script',
  soundIntro: 'Devanagari is written left to right and is nearly phonetic — most letters are said exactly as written. A few sounds differ from English in precise ways. Master them and you can sound out any Hindi word.',
  grammar: '<p>Hindi word order is <b>Subject–Object–Verb</b>: <b>मैं चाय पीता हूँ</b> is literally “I tea drink” (I drink tea). Hindi uses <b>postpositions</b> — small words that follow a noun instead of coming before it — like <b>में</b> (in), <b>से</b> (from), <b>को</b> (to) and <b>का / की / के</b> (of). There are <b>no articles</b>, so <i>चाय</i> can mean “tea” or “the tea”. To say you want something, use <b>मुझे … चाहिए</b> — literally “to me … is needed”.</p>',
  bridges: '<div class="note">🇺🇳 <b>Hindi & Urdu are the same spoken language.</b> Hindi writes in Devanagari and leans on Sanskrit words; Urdu writes right-to-left in the Arabic script and leans on Persian and Arabic ones. They share huge amounts of everyday vocabulary: <b>दिल / دل</b> (heart), <b>दोस्त / دوست</b> (friend), <b>नमक / نمک</b> (salt).</div><div class="note">🌏 <b>Sanskrit roots stretch far.</b> <b>नमस्ते</b> comes from Sanskrit <i>namaḥ</i> (“to bow”); <b>धन्यवाद</b> = <i>dhanya</i> (blessed) + <i>vāda</i> (speech) — a “thank you” built from blessings. The same Sanskrit family also gives Hindi its relatives Marathi, Nepali and Bengali.</div>',
  lessons: [
    { id:1, title:'Greetings — नमस्ते', focus:'नमस्ते · सुप्रभात · शुभ संध्या · आप कैसे हैं?',
      steps:[
        {t:'say',text:'The very first word you\'ll say in Hindi: <span class="inline-tr">नमस्ते</span> — hello. Say it out loud. The \'na\' and \'ma\' are soft and short.',tr:'नमस्ते'},
        {t:'words',items:[{tr:'नमस्ते',pr:'nuh-mus-TAY',en:'hello'},{tr:'सुप्रभात',pr:'soo-pruh-BHAAT',en:'good morning'},{tr:'शुभ संध्या',pr:'shoob SUN-dyaa',en:'good evening'},{tr:'अलविदा',pr:'ul-vee-DAA',en:'goodbye'}]},
        {t:'chal',en:'Hello! Good morning!',tr:'नमस्ते! सुप्रभात!',pr:'nuh-mus-TAY! soo-pruh-BHAAT!',morph:['नमस्ते = hello','सुप्रभात = good morning']},
        {t:'say',text:'To ask how someone is (formal): <span class="inline-tr">आप कैसे हैं?</span> The reply is <span class="inline-tr">मैं ठीक हूँ</span> — I\'m fine.',tr:'आप कैसे हैं?'},
        {t:'words',items:[{tr:'आप कैसे हैं?',pr:'aap KAI-seh hain',en:'how are you (formal)?'},{tr:'मैं ठीक हूँ',pr:'main THEEK hoon',en:'I\'m fine'},{tr:'शुक्रिया',pr:'SHOOK-ree-yaa',en:'thanks'}]},
        {t:'chal',en:'I\'m fine, thanks',tr:'मैं ठीक हूँ, धन्यवाद',pr:'main THEEK hoon, DHUN-yuh-vaad',morph:['मैं ठीक हूँ = I am fine','धन्यवाद = thank you']}
      ],
      blocks:['<code>नमस्ते</code> = hello','<code>सुप्रभात</code> / <code>शुभ संध्या</code> = good morning / evening','<code>आप कैसे हैं?</code> = how are you (formal)?'] },
    { id:2, title:'Being polite', focus:'कृपया · धन्यवाद · माफ़ कीजिए · हाँ / नहीं',
      steps:[
        {t:'say',text:'The two politeness words that open every door: <span class="inline-tr">कृपया</span> (please) and <span class="inline-tr">धन्यवाद</span> (thank you).',tr:'कृपया'},
        {t:'words',items:[{tr:'कृपया',pr:'kri-puh-YAA',en:'please'},{tr:'धन्यवाद',pr:'DHUN-yuh-vaad',en:'thank you'},{tr:'शुक्रिया',pr:'SHOOK-ree-yaa',en:'thanks'},{tr:'हाँ',pr:'haan',en:'yes'},{tr:'नहीं',pr:'nah-HEEN',en:'no'}]},
        {t:'chal',en:'Yes, please',tr:'हाँ, कृपया',pr:'haan, kri-puh-YAA',morph:['हाँ = yes','कृपया = please']},
        {t:'say',text:'To get someone\'s attention or to apologise: <span class="inline-tr">माफ़ कीजिए</span> — excuse me / sorry.',tr:'माफ़ कीजिए'},
        {t:'chal',en:'Excuse me, thank you',tr:'माफ़ कीजिए, धन्यवाद',pr:'maaf KEE-jee-ay, DHUN-yuh-vaad',morph:['माफ़ कीजिए = excuse me / sorry','धन्यवाद = thank you']}
      ],
      blocks:['<code>कृपया</code> = please','<code>धन्यवाद</code> / <code>शुक्रिया</code> = thank you / thanks','<code>माफ़ कीजिए</code> = excuse me / sorry'] },
    { id:3, title:'Numbers 1–10', focus:'एक · दो · तीन · दस',
      steps:[
        {t:'say',text:'Counting is the fastest win. One, two, three: <span class="inline-tr">एक, दो, तीन</span>.',tr:'एक'},
        {t:'words',items:[{tr:'एक',pr:'ek',en:'1'},{tr:'दो',pr:'do',en:'2'},{tr:'तीन',pr:'teen',en:'3'},{tr:'चार',pr:'chaar',en:'4'},{tr:'पाँच',pr:'paanch',en:'5'},{tr:'छह',pr:'chheh',en:'6'},{tr:'सात',pr:'saat',en:'7'},{tr:'आठ',pr:'aath',en:'8'},{tr:'नौ',pr:'nau',en:'9'},{tr:'दस',pr:'das',en:'10'}]},
        {t:'chal',en:'It\'s five rupees',tr:'यह पाँच रुपये है',pr:'yah PAANCH roo-PAY hai',morph:['यह = this','पाँच = five','रुपये = rupees','है = is']},
        {t:'say',text:'<span class="inline-tr">कितना है?</span> = how much is it? Your key shopping question.',tr:'कितना है?'},
        {t:'chal',en:'How much is it?',tr:'कितना है?',pr:'KIT-na hai?',morph:['कितना = how much','है = is']}
      ],
      blocks:['<code>एक…दस</code> = 1–10','<code>कितना है?</code> = how much is it?'] },
    { id:4, title:'"I want" — मुझे … चाहिए', focus:'मुझे · चाहिए · पानी · चाय',
      steps:[
        {t:'say',text:'To want anything, say <span class="inline-tr">मुझे … चाहिए</span> — literally “to me … is needed”. Put the thing you want in the middle.',tr:'मुझे … चाहिए'},
        {t:'words',items:[{tr:'मुझे',pr:'moo-JHAY',en:'to me / I'},{tr:'चाहिए',pr:'CHAAH-ee-ay',en:'is needed / want'},{tr:'पानी',pr:'PAH-nee',en:'water'},{tr:'एक',pr:'ek',en:'a / one'}]},
        {t:'chal',en:'I want water',tr:'मुझे पानी चाहिए',pr:'moo-JHAY PAH-nee CHAAH-ee-ay',morph:['मुझे = to me','पानी = water','चाहिए = is needed']},
        {t:'say',text:'Add <span class="inline-tr">एक</span> (a) before a countable thing.',tr:'एक'},
        {t:'chal',en:'I want a coffee',tr:'मुझे एक कॉफ़ी चाहिए',pr:'moo-JHAY ek KOF-ee CHAAH-ee-ay',morph:['मुझे = to me','एक = a','कॉफ़ी = coffee','चाहिए = is needed']},
        {t:'chal',en:'I want tea',tr:'मुझे चाय चाहिए',pr:'moo-JHAY chai CHAAH-ee-ay',morph:['मुझे = to me','चाय = tea','चाहिए = is needed']}
      ],
      blocks:['<code>मुझे … चाहिए</code> = I want …','<code>पानी</code> = water · <code>चाय</code> = tea','<code>एक</code> = a'] },
    { id:5, title:'Food & drink', focus:'पानी · चाय · खाना · बिल',
      steps:[
        {t:'say',text:'Around food: <span class="inline-tr">पानी</span> (water), <span class="inline-tr">चाय</span> (tea), <span class="inline-tr">कॉफ़ी</span> (coffee).',tr:'पानी'},
        {t:'words',items:[{tr:'पानी',pr:'PAH-nee',en:'water'},{tr:'चाय',pr:'chai',en:'tea',link:"≈ English chai (from Chinese)"},{tr:'कॉफ़ी',pr:'KOF-ee',en:'coffee',link:"≈ English coffee"},{tr:'दूध',pr:'doodh',en:'milk'},{tr:'खाना',pr:'KHAH-naa',en:'food'},{tr:'मेनू',pr:'MAY-noo',en:'menu',link:"≈ English menu"},{tr:'बिल',pr:'bil',en:'bill',link:"≈ English bill"}]},
        {t:'chal',en:'I want chai',tr:'मुझे चाय चाहिए',pr:'moo-JHAY chai CHAAH-ee-ay',morph:['मुझे = to me','चाय = tea','चाहिए = is needed']},
        {t:'say',text:'To ask for the menu: <span class="inline-tr">मेनू दीजिए</span> — “give me the menu”. <span class="inline-tr">दीजिए</span> = please give.',tr:'मेनू दीजिए'},
        {t:'chal',en:'The menu, please',tr:'मेनू दीजिए',pr:'MAY-noo DEE-jee-ay',morph:['मेनू = menu','दीजिए = please give']},
        {t:'say',text:'Praise the food: <span class="inline-tr">बहुत स्वादिष्ट</span> — very delicious.',tr:'बहुत स्वादिष्ट'},
        {t:'chal',en:'Very delicious!',tr:'बहुत स्वादिष्ट!',pr:'BA-hut swaa-DISH-t',morph:['बहुत = very','स्वादिष्ट = delicious']}
      ],
      blocks:['<code>पानी</code> / <code>चाय</code> / <code>कॉफ़ी</code> = water / tea / coffee','<code>मेनू दीजिए</code> = the menu, please','<code>बहुत स्वादिष्ट</code> = very delicious'] },
    { id:6, title:'Getting around', focus:'कहाँ है? · दाईं ओर · बाईं ओर · सीधा',
      steps:[
        {t:'say',text:'The most useful question in any city: <span class="inline-tr">… कहाँ है?</span> = where is …?',tr:'कहाँ है?'},
        {t:'words',items:[{tr:'स्टेशन',pr:'STAY-shan',en:'station',link:"≈ English station"},{tr:'बाथरूम',pr:'BAATH-room',en:'bathroom',link:"≈ English bathroom"},{tr:'बाज़ार',pr:'baa-ZAAR',en:'market'},{tr:'दाईं ओर',pr:'DAI-ee or',en:'to the right'},{tr:'बाईं ओर',pr:'BAI-ee or',en:'to the left'}]},
        {t:'chal',en:'Where is the station?',tr:'स्टेशन कहाँ है?',pr:'STAY-shan kah-HAAN hai?',morph:['स्टेशन = station','कहाँ है? = where is?']},
        {t:'chal',en:'Where is the bathroom?',tr:'बाथरूम कहाँ है?',pr:'BAATH-room kah-HAAN hai?',morph:['बाथरूम = bathroom','कहाँ है? = where is?']},
        {t:'say',text:'Turn words: <span class="inline-tr">दाईं ओर</span> (right), <span class="inline-tr">बाईं ओर</span> (left), <span class="inline-tr">सीधा</span> (straight).',tr:'सीधा'},
        {t:'chal',en:'Go straight',tr:'सीधा जाइए',pr:'SEE-dhaa JAA-ee-ay',morph:['सीधा = straight','जाइए = go (polite)']}
      ],
      blocks:['<code>… कहाँ है?</code> = where is …?','<code>दाईं ओर</code> / <code>बाईं ओर</code> = right / left','<code>सीधा जाइए</code> = go straight'] },
    { id:7, title:'Questions & "do you have…?"', focus:'क्या · आपके पास · है · कितना',
      steps:[
        {t:'say',text:'To ask if someone has something (formal): <span class="inline-tr">क्या आपके पास … है?</span> = do you have …?',tr:'क्या आपके पास … है?'},
        {t:'words',items:[{tr:'क्या',pr:'kyaa',en:'do you / what'},{tr:'आपके पास',pr:'AAP-kay paas',en:'have (with you)'},{tr:'है',pr:'hai',en:'is'},{tr:'मेज़',pr:'MAY-z',en:'a table'},{tr:'वाई-फ़ाई',pr:'WAI-fai',en:'wifi',link:"≈ English wifi"}]},
        {t:'chal',en:'Do you have a table?',tr:'क्या आपके पास एक मेज़ है?',pr:'kyaa AAP-kay paas ek MAY-z hai?',morph:['क्या = do you','आपके पास = have','एक मेज़ = a table','है = is']},
        {t:'say',text:'<span class="inline-tr">क्या यहाँ … है?</span> = is there … here?',tr:'क्या यहाँ … है?'},
        {t:'chal',en:'Is there wifi here?',tr:'क्या यहाँ वाई-फ़ाई है?',pr:'kyaa ya-HAAN WAI-fai hai?',morph:['क्या = do you','यहाँ = here','वाई-फ़ाई = wifi','है = is']},
        {t:'chal',en:'Do you have tea?',tr:'क्या आपके पास चाय है?',pr:'kyaa AAP-kay paas chai hai?',morph:['क्या = do you','आपके पास = have','चाय = tea','है = is']}
      ],
      blocks:['<code>क्या आपके पास … है?</code> = do you have …?','<code>क्या यहाँ … है?</code> = is there … here?','<code>है</code> = is'] },
    { id:8, title:'Family & people', focus:'परिवार · माँ · भाई · बहन · दोस्त',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">परिवार</span> (family), <span class="inline-tr">माँ</span> (mother), <span class="inline-tr">पिता</span> (father).',tr:'परिवार'},
        {t:'words',items:[{tr:'परिवार',pr:'pa-ree-VAAR',en:'family'},{tr:'माँ',pr:'maan',en:'mother'},{tr:'पिता',pr:'pe-TAA',en:'father'},{tr:'भाई',pr:'bhai',en:'brother'},{tr:'बहन',pr:'BA-han',en:'sister'},{tr:'दोस्त',pr:'dost',en:'friend',link:"≈ Urdu دوست (dost)"}]},
        {t:'say',text:'To say someone belongs to you, put <span class="inline-tr">मेरा</span> (my) before it.',tr:'मेरा'},
        {t:'chal',en:'I have a brother',tr:'मेरा भाई है',pr:'MAY-raa bhai hai',morph:['मेरा = my','भाई = brother','है = is']},
        {t:'chal',en:'This is my family',tr:'यह मेरा परिवार है',pr:'yah MAY-raa pa-ree-VAAR hai',morph:['यह = this','मेरा = my','परिवार = family','है = is']},
        {t:'chal',en:'I have a friend',tr:'मेरा एक दोस्त है',pr:'MAY-raa ek dost hai',morph:['मेरा = my','एक = a','दोस्त = friend','है = is']}
      ],
      blocks:['<code>परिवार</code> = family','<code>माँ</code> / <code>पिता</code> = mother / father','<code>मेरा</code> = my'] },
    { id:9, title:'Time, days & weather', focus:'आज · कल · मौसम कैसा है?',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">आज</span>, tomorrow is <span class="inline-tr">कल</span>.',tr:'आज'},
        {t:'words',items:[{tr:'आज',pr:'aaj',en:'today'},{tr:'कल',pr:'kul',en:'tomorrow'},{tr:'सुबह',pr:'SOO-buh',en:'morning'},{tr:'शाम',pr:'shaam',en:'evening'},{tr:'रात',pr:'raat',en:'night'},{tr:'मौसम',pr:'MOW-sum',en:'weather'}]},
        {t:'chal',en:'See you tomorrow',tr:'कल मिलेंगे',pr:'kul MEE-len-gay',morph:['कल = tomorrow','मिलेंगे = we will meet']},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">मौसम कैसा है?</span>',tr:'मौसम कैसा है?'},
        {t:'chal',en:'It\'s raining',tr:'बारिश हो रही है',pr:'BAA-rish ho RUH-hee hai',morph:['बारिश = rain','हो रही है = is happening']},
        {t:'chal',en:'It\'s hot today',tr:'आज गरम है',pr:'aaj GUR-um hai',morph:['आज = today','गरम = hot','है = is']}
      ],
      blocks:['<code>आज</code> / <code>कल</code> = today / tomorrow','<code>मौसम कैसा है?</code> = how\'s the weather?'] },
    { id:10, title:'Small talk & names', focus:'मेरा नाम … है · आपका नाम क्या है?',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">मेरा नाम … है</span> = my name is …. There\'s a __NAME__ slot.',tr:'मेरा नाम … है'},
        {t:'chal',en:'My name is __NAME__',tr:'मेरा नाम __NAME__ है',pr:'MAY-raa naam __NAME__ hai',morph:['मेरा नाम = my name','है = is','__NAME__ = your name']},
        {t:'say',text:'To ask someone\'s name (formal): <span class="inline-tr">आपका नाम क्या है?</span>',tr:'आपका नाम क्या है?'},
        {t:'chal',en:'What\'s your name?',tr:'आपका नाम क्या है?',pr:'AAP-kaa naam kyaa hai?',morph:['आपका = your','नाम = name','क्या = what','है = is']},
        {t:'say',text:'<span class="inline-tr">आप कहाँ से हैं?</span> = where are you from?',tr:'आप कहाँ से हैं?'},
        {t:'chal',en:'Pleased to meet you',tr:'बहुत खुशी हुई',pr:'BA-hut KHOO-shee HOO-ee',morph:['बहुत = very','खुशी = happiness','हुई = happened']}
      ],
      blocks:['<code>मेरा नाम … है</code> = my name is …','<code>आपका नाम क्या है?</code> = what\'s your name?','<code>बहुत खुशी हुई</code> = pleased to meet you'] },
    { id:11, title:'Health & emergency', focus:'मदद · डॉक्टर · मुझे समझ नहीं आया',
      steps:[
        {t:'say',text:'The most important words if you need help: <span class="inline-tr">मदद!</span> (help), <span class="inline-tr">डॉक्टर</span> (doctor), <span class="inline-tr">अस्पताल</span> (hospital).',tr:'मदद!'},
        {t:'words',items:[{tr:'मदद!',pr:'MUH-dud',en:'help!'},{tr:'डॉक्टर',pr:'DOC-tar',en:'doctor',link:"≈ English doctor"},{tr:'दवा',pr:'duh-VAA',en:'medicine'},{tr:'अस्पताल',pr:'us-pa-TAAL',en:'hospital'},{tr:'पुलिस',pr:'poo-LIS',en:'police',link:"≈ English police"},{tr:'मुझे समझ नहीं आया',pr:'moo-JHAY su-MUJH nah-HEEN AA-yaa',en:'I don\'t understand'}]},
        {t:'chal',en:'Help!',tr:'मदद!',pr:'MUH-dud!',morph:['मदद = help']},
        {t:'say',text:'To say you need help, reuse the want phrase: <span class="inline-tr">मुझे डॉक्टर चाहिए</span> = I need a doctor.',tr:'मुझे डॉक्टर चाहिए'},
        {t:'chal',en:'I need a doctor',tr:'मुझे डॉक्टर चाहिए',pr:'moo-JHAY DOC-tar CHAAH-ee-ay',morph:['मुझे = to me','डॉक्टर = doctor','चाहिए = is needed']},
        {t:'chal',en:'I don\'t understand',tr:'मुझे समझ नहीं आया',pr:'moo-JHAY su-MUJH nah-HEEN AA-yaa',morph:['मुझे समझ = to me understand','नहीं = not','आया = came']},
        {t:'say',text:'To ask if someone speaks English: <span class="inline-tr">क्या आप अंग्रेज़ी बोलते हैं?</span>',tr:'क्या आप अंग्रेज़ी बोलते हैं?'},
        {t:'chal',en:'Do you speak English?',tr:'क्या आप अंग्रेज़ी बोलते हैं?',pr:'kyaa aap ang-GRAY-zee BOL-tay hain?',morph:['क्या = do you','आप = you','अंग्रेज़ी = English','बोलते हैं = speak']}
      ],
      blocks:['<code>मदद!</code> = help!','<code>डॉक्टर</code> = doctor · <code>अस्पताल</code> = hospital','<code>मुझे समझ नहीं आया</code> = I don\'t understand'] },
    { id:12, title:'Tying it together', focus:'एक full day out in Hindi',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolbox. This capstone uses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello! How are you?',tr:'नमस्ते! आप कैसे हैं?',pr:'nuh-mus-TAY! aap KAI-seh hain?',morph:['नमस्ते = hello','आप कैसे हैं? = how are you?']},
        {t:'chal',en:'I want water, please',tr:'मुझे पानी चाहिए, कृपया',pr:'moo-JHAY PAH-nee CHAAH-ee-ay, kri-puh-YAA',morph:['मुझे पानी चाहिए = I want water','कृपया = please']},
        {t:'chal',en:'Where is the station?',tr:'स्टेशन कहाँ है?',pr:'STAY-shan kah-HAAN hai?',morph:['स्टेशन = station','कहाँ है? = where is?']},
        {t:'chal',en:'How much is it?',tr:'कितना है?',pr:'KIT-na hai?',morph:['कितना = how much','है = is']},
        {t:'chal',en:'Very delicious! Thank you!',tr:'बहुत स्वादिष्ट! धन्यवाद!',pr:'BA-hut swaa-DISH-t! DHUN-yuh-vaad!',morph:['बहुत स्वादिष्ट = very delicious','धन्यवाद = thank you']}
      ],
      blocks:['You built: greetings, ordering, directions, prices, thanks — a full day out in Hindi.'] },
    { id:13, title:'Airport & tickets', focus:'हवाई अड्डा · पासपोर्ट · टिकट · गेट',
      steps:[
        {t:'say',text:'You have landed. The building is the <span class="inline-tr">हवाई अड्डा</span>. Your document is a <span class="inline-tr">पासपोर्ट</span>.',tr:'हवाई अड्डा'},
        {t:'words',items:[{tr:'हवाई अड्डा',pr:'ha-VAA-ee UD-daa',en:'airport'},{tr:'पासपोर्ट',pr:'PAAS-port',en:'passport'},{tr:'टिकट',pr:'TI-kat',en:'ticket'},{tr:'उड़ान',pr:'u-DAAN',en:'flight'},{tr:'गेट',pr:'gate',en:'gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'हवाई अड्डा कहाँ है?',pr:'ha-VAA-ee UD-daa kah-HAAN hai?',morph:['हवाई अड्डा = airport','कहाँ है? = where is?']},
        {t:'chal',en:'Here is my passport',tr:'यह मेरा पासपोर्ट है',pr:'yah MAY-raa PAAS-port hai',morph:['यह = this','मेरा = my','पासपोर्ट = passport','है = is']},
        {t:'chal',en:'A ticket, please',tr:'एक टिकट दीजिए',pr:'ek TI-kat DEE-jee-ay',morph:['एक टिकट = a ticket','दीजिए = please give (honorific)']},
        {t:'chal',en:'Where is the gate?',tr:'गेट कहाँ है?',pr:'gate kah-HAAN hai?',morph:['गेट = gate','कहाँ है? = where is?']}
      ],
      blocks:['<code>हवाई अड्डा</code> = airport','<code>पासपोर्ट</code> = passport','<code>टिकट</code> = ticket','<code>गेट</code> = gate'] },
    { id:14, title:'The taxi', focus:'टैक्सी · जाना · होटल · रुकिए',
      steps:[
        {t:'say',text:'The driver is waiting. <span class="inline-tr">टैक्सी</span> is taxi. Tell them where to go with <span class="inline-tr">मुझे … जाना है</span>.',tr:'टैक्सी'},
        {t:'words',items:[{tr:'टैक्सी',pr:'TAK-see',en:'taxi'},{tr:'ड्राइवर',pr:'DRY-var',en:'driver'},{tr:'मुझे जाना है',pr:'moo-JHAY JAA-naa hai',en:'I need to go'},{tr:'यहीं रुकिए',pr:'ya-HEEN ROO-kee-ay',en:'stop here (honorific)'}]},
        {t:'chal',en:'Taxi, please',tr:'टैक्सी, कृपया',pr:'TAK-see, kri-puh-YAA',morph:['टैक्सी = taxi','कृपया = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'मुझे होटल जाना है',pr:'moo-JHAY ho-TEL JAA-naa hai',morph:['मुझे = to me','होटल = hotel','जाना है = need to go']},
        {t:'chal',en:'Stop here, please',tr:'यहीं रुकिए, कृपया',pr:'ya-HEEN ROO-kee-ay, kri-puh-YAA',morph:['यहीं = right here','रुकिए = stop (honorific)','कृपया = please']},
        {t:'chal',en:'How much is it?',tr:'कितना है?',pr:'KIT-na hai?',morph:['कितना = how much','है = is']}
      ],
      blocks:['<code>मुझे … जाना है</code> = I need to go to …','<code>यहीं रुकिए</code> = stop here'] },
    { id:15, title:'The hotel', focus:'बुकिंग · कमरा · चाबी · रात',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">मेरी बुकिंग है</span> — I have a reservation.',tr:'बुकिंग'},
        {t:'words',items:[{tr:'होटल',pr:'ho-TEL',en:'hotel'},{tr:'बुकिंग',pr:'BU-king',en:'reservation'},{tr:'कमरा',pr:'KUM-raa',en:'room'},{tr:'चाबी',pr:'CHAA-bee',en:'key'},{tr:'एक रात',pr:'ek raat',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'मेरी बुकिंग है',pr:'MAY-ree BU-king hai',morph:['मेरी = my','बुकिंग = reservation','है = is']},
        {t:'chal',en:'A room for one night, please',tr:'एक रात का कमरा दीजिए',pr:'ek raat kaa KUM-raa DEE-jee-ay',morph:['एक रात का = for one night','कमरा = room','दीजिए = please give']},
        {t:'chal',en:'The key, please',tr:'चाबी दीजिए',pr:'CHAA-bee DEE-jee-ay',morph:['चाबी = key','दीजिए = please give']},
        {t:'chal',en:'Where is my room?',tr:'मेरा कमरा कहाँ है?',pr:'MAY-raa KUM-raa kah-HAAN hai?',morph:['मेरा कमरा = my room','कहाँ है? = where is?']}
      ],
      blocks:['<code>बुकिंग</code> = reservation','<code>कमरा</code> = room','<code>चाबी</code> = key'] },
    { id:16, title:'Ask for help', focus:'मुझे समझ नहीं आया · धीरे · अंग्रेज़ी',
      steps:[
        {t:'say',text:'When the language is too fast: <span class="inline-tr">धीरे बोलिए, कृपया</span> — speak slower, please.',tr:'धीरे बोलिए, कृपया'},
        {t:'words',items:[{tr:'धीरे',pr:'DHEE-re',en:'slower'},{tr:'फिर से',pr:'phir se',en:'again'},{tr:'अंग्रेज़ी',pr:'ang-GRAY-zee',en:'English'},{tr:'क्या आप मदद करेंगे?',pr:'kyaa aap MA-dud KA-ren-ge',en:'can you help? (honorific)'}]},
        {t:'chal',en:'I don\'t understand',tr:'मुझे समझ नहीं आया',pr:'moo-JHAY su-MUJH nah-HEEN AA-yaa',morph:['मुझे समझ = to me understand','नहीं = not','आया = came']},
        {t:'chal',en:'Slower, please',tr:'धीरे बोलिए, कृपया',pr:'DHEE-re BO-lee-ay, kri-puh-YAA',morph:['धीरे = slower','बोलिए = speak (honorific)','कृपया = please']},
        {t:'chal',en:'Can you help me?',tr:'क्या आप मेरी मदद करेंगे?',pr:'kyaa aap MAY-ree MA-dud KA-ren-ge',morph:['क्या आप = will you','मेरी मदद = my help','करेंगे = do (honorific)']},
        {t:'chal',en:'Do you speak English?',tr:'क्या आप अंग्रेज़ी बोलते हैं?',pr:'kyaa aap ang-GRAY-zee BOL-tay hain?',morph:['क्या आप = do you','अंग्रेज़ी = English','बोलते हैं = speak']}
      ],
      blocks:['<code>धीरे बोलिए</code> = speak slower','<code>क्या आप अंग्रेज़ी बोलते हैं?</code> = do you speak English?'] },

  ],
  dialogues: [
    { id:'cafe', title:'☕ At a café', emoji:'☕', turns:[
      {who:'You',tr:'नमस्ते! एक कॉफ़ी, कृपया।',pr:'nuh-mus-TAY! ek KOF-ee, kri-puh-YAA.',en:'Hello! A coffee, please.'},
      {who:'Barista',tr:'ठीक है। यहाँ पिएँगे या साथ ले जाएँगे?',pr:'THEEK hai. ya-HAAN pee-EN-gay yaa saath lay JAA-en-gay?',en:'OK. Will you drink it here or take it away?'},
      {who:'You',tr:'साथ ले जाएँगे, धन्यवाद।',pr:'saath lay JAA-en-gay, DHUN-yuh-vaad.',en:'Take it away, thanks.'},
      {who:'Barista',tr:'यह लीजिए। दस रुपये।',pr:'yah LEE-jee-ay. das roo-PAY.',en:'Here you go. Ten rupees.'},
      {who:'You',tr:'धन्यवाद!',pr:'DHUN-yuh-vaad!',en:'Thank you!'}
    ]},
    { id:'transport', title:'🚉 On the metro', emoji:'🚉', turns:[
      {who:'You',tr:'माफ़ कीजिए, स्टेशन कहाँ है?',pr:'maaf KEE-jee-ay, STAY-shan kah-HAAN hai?',en:'Excuse me, where is the station?'},
      {who:'Local',tr:'वहाँ, दाईं ओर।',pr:'vah-HAAN, DAI-ee or.',en:'There, to the right.'},
      {who:'You',tr:'धन्यवाद। दिल्ली का एक टिकट, कृपया।',pr:'DHUN-yuh-vaad. DIL-lee kaa ek TI-kat, kri-puh-YAA.',en:'Thanks. A ticket to Delhi, please.'},
      {who:'Ticket office',tr:'पचास रुपये। ट्रेन नौ बजे है।',pr:'pa-CHAAAS roo-PAY. train nau BAH-jay hai.',en:'Fifty rupees. The train is at nine.'}
    ]},
    { id:'restaurant', title:'🍛 At a restaurant', emoji:'🍛', turns:[
      {who:'Waiter',tr:'नमस्ते! कितने लोग हैं?',pr:'nuh-mus-TAY! KIT-nae log hain?',en:'Hello! How many people?'},
      {who:'You',tr:'दो लोग, कृपया।',pr:'do log, kri-puh-YAA.',en:'Two people, please.'},
      {who:'You',tr:'मेनू दीजिए।',pr:'MAY-noo DEE-jee-ay.',en:'The menu, please.'},
      {who:'You',tr:'मुझे दाल और एक पानी चाहिए।',pr:'moo-JHAY daal aur ek PAH-nee CHAAH-ee-ay.',en:'I want the lentils and a water.'},
      {who:'Waiter',tr:'बढ़िया! खाने का आनंद लें।',pr:'BADH-ee-yaa! KHA-nae kaa aa-NAND len.',en:'Great! Enjoy your meal.'}
    ]},
    { id:'shop', title:'🛍️ At a bazaar', emoji:'🛍️', turns:[
      {who:'You',tr:'यह कितना है?',pr:'yah KIT-na hai?',en:'How much is this?'},
      {who:'Seller',tr:'पाँच सौ रुपये।',pr:'paanch so roo-PAY.',en:'Five hundred rupees.'},
      {who:'You',tr:'बहुत महंगा है। क्या कोई छूट है?',pr:'BA-hut MAH-hun-gaa hai. kyaa KOH-ee choot hai?',en:'That\'s too expensive. Is there any discount?'},
      {who:'Seller',tr:'ठीक है, चार सौ।',pr:'THEEK hai, chaar so.',en:'OK, four hundred.'},
      {who:'You',tr:'ठीक है, ले लूँगा।',pr:'THEEK hai, lay LOON-gaa.',en:'OK, I\'ll take it.'}
    ]}
  ],
  pocket: [
    {tr:'नमस्ते',pr:'nuh-mus-TAY',en:'Hello',c:'Greetings'},
    {tr:'सुप्रभात',pr:'soo-pruh-BHAAT',en:'Good morning',c:'Greetings'},
    {tr:'शुभ संध्या',pr:'shoob SUN-dyaa',en:'Good evening',c:'Greetings'},
    {tr:'अलविदा',pr:'ul-vee-DAA',en:'Goodbye',c:'Greetings'},
    {tr:'आप कैसे हैं?',pr:'aap KAI-seh hain',en:'How are you?',c:'Greetings'},
    {tr:'मेरा नाम __NAME__ है',pr:'MAY-raa naam __NAME__ hai',en:'My name is __NAME__',c:'Greetings'},
    {tr:'कृपया',pr:'kri-puh-YAA',en:'Please',c:'Courtesy'},
    {tr:'धन्यवाद',pr:'DHUN-yuh-vaad',en:'Thank you',c:'Courtesy'},
    {tr:'शुक्रिया',pr:'SHOOK-ree-yaa',en:'Thanks',c:'Courtesy'},
    {tr:'माफ़ कीजिए',pr:'maaf KEE-jee-ay',en:'Excuse me / Sorry',c:'Courtesy'},
    {tr:'हाँ',pr:'haan',en:'Yes',c:'Courtesy'},
    {tr:'नहीं',pr:'nah-HEEN',en:'No',c:'Courtesy'},
    {tr:'एक',pr:'ek',en:'One (1)',c:'Numbers'},
    {tr:'दो',pr:'do',en:'Two (2)',c:'Numbers'},
    {tr:'तीन',pr:'teen',en:'Three (3)',c:'Numbers'},
    {tr:'पाँच',pr:'paanch',en:'Five (5)',c:'Numbers'},
    {tr:'दस',pr:'das',en:'Ten (10)',c:'Numbers'},
    {tr:'पानी',pr:'PAH-nee',en:'Water',c:'Food'},
    {tr:'चाय',pr:'chai',en:'Tea',c:'Food'},
    {tr:'मेनू दीजिए',pr:'MAY-noo DEE-jee-ay',en:'The menu, please',c:'Food'},
    {tr:'बिल',pr:'bil',en:'The bill',c:'Food'},
    {tr:'स्टेशन कहाँ है?',pr:'STAY-shan kah-HAAN hai',en:'Where is the station?',c:'Directions'},
    {tr:'बाथरूम कहाँ है?',pr:'BAATH-room kah-HAAN hai',en:'Where is the bathroom?',c:'Directions'},
    {tr:'दाईं ओर',pr:'DAI-ee or',en:'To the right',c:'Directions'},
    {tr:'सीधा',pr:'SEE-dhaa',en:'Straight ahead',c:'Directions'},
    {tr:'कितना है?',pr:'KIT-na hai',en:'How much is it?',c:'Shopping'},
    {tr:'मुझे … चाहिए',pr:'moo-JHAY … CHAAH-ee-ay',en:'I want …',c:'Shopping'},
    {tr:'क्या आपके पास … है?',pr:'kyaa AAP-kay paas … hai',en:'Do you have …?',c:'Shopping'},
    {tr:'बहुत महंगा है',pr:'BA-hut MAH-hun-gaa hai',en:'It\'s too expensive',c:'Shopping'},
    {tr:'मदद!',pr:'MUH-dud',en:'Help!',c:'Emergency'},
    {tr:'डॉक्टर',pr:'DOC-tar',en:'Doctor',c:'Emergency'},
    {tr:'मुझे समझ नहीं आया',pr:'moo-JHAY su-MUJH nah-HEEN AA-yaa',en:'I don\'t understand',c:'Emergency'},
    {tr:'क्या आप अंग्रेज़ी बोलते हैं?',pr:'kyaa aap ang-GRAY-zee BOL-tay hain',en:'Do you speak English?',c:'Emergency'},
    {tr:'आज',pr:'aaj',en:'Today',c:'Time'},
    {tr:'कल',pr:'kul',en:'Tomorrow',c:'Time'},
    {tr:'मौसम कैसा है?',pr:'MOW-sum KAI-saa hai',en:'How\'s the weather?',c:'Time'},
    {tr:'हवाई अड्डा',pr:'ha-VAA-ee UD-daa',en:'airport',c:'Travel'},
    {tr:'पासपोर्ट',pr:'PAAS-port',en:'passport',c:'Travel'},
    {tr:'टैक्सी, कृपया',pr:'TAK-see, kri-puh-YAA',en:'Taxi, please',c:'Travel'},
    {tr:'मेरी बुकिंग है',pr:'MAY-ree BU-king hai',en:'I have a reservation',c:'Travel'},
    {tr:'धीरे बोलिए',pr:'DHEE-re BO-lee-ay',en:'Speak slower',c:'Travel'},
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Shopping','Emergency','Time','Travel'],
  culture: [
    {icon:'🙏',title:'Namaste and the gesture',body:'Press your palms together at your chest with a slight bow and say नमस्ते. It comes from Sanskrit and means \'I greet the divine in you\'. It works as both hello and goodbye — polite, warm and universal.'},
    {icon:'🫖',title:'Chai is everywhere',body:'Chai is more than tea. Tiny stalls serve hot, sweet \'cutting chai\' in half-glasses at all hours. Being offered chai is a sign of hospitality — accept it and sip slowly.'},
    {icon:'🍽️',title:'Eat with your right hand',body:'Many people eat with their hands: use the right hand only, as the left is considered unclean. You use your fingers to scoop — it takes a little practice but feels natural quickly.'},
    {icon:'🙃',title:'The head wobble',body:'A side-to-side wobble isn\'t \'no\'. It usually means \'yes\', \'maybe\', or \'I understand\' — a friendly, agreeing little shake. Watch for it; you\'ll catch on fast.'},
    {icon:'💰',title:'Bargain in the bazaars',body:'In local markets, prices are often not fixed. A polite \'aur sasta?\' (any cheaper?) with a smile is normal. Shops with a fixed-price sign usually mean the price really is fixed.'},
    {icon:'🗣️',title:'A little Hindi goes far',body:'A \'नमस्ते\' and \'धन्यवाद\' open every door. Indians love it when visitors try their language — the effort matters more than perfect pronunciation.'}
  ],
  sounds: [
    {l:'ट',say:'retroflex "t" — the tongue curls back so the tip touches the roof of the mouth (deeper than English t)',ex:'टिकट = TI-kat · ticket',voice:'टिकट'},
    {l:'ड',say:'retroflex "d" — the tongue curls back, giving a deep "d"',ex:'डॉक्टर = DOC-tar · doctor',voice:'डॉक्टर'},
    {l:'ख',say:'aspirated "k" — like "k" but with a strong puff of air (k + h)',ex:'खाना = KHAH-naa · food',voice:'खाना'},
    {l:'घ',say:'aspirated "g" — like "g" but with a breath (g + h)',ex:'घर = ghar · home',voice:'घर'},
    {l:'छ',say:'aspirated "ch" — like "ch" but with a breath (ch + h); never "sh"',ex:'छह = chheh · six',voice:'छह'},
    {l:'भ',say:'aspirated "b" — like "b" but with a breath (b + h)',ex:'भाई = bhai · brother',voice:'भाई'},
    {l:'ं',say:'nasal hum — a soft "ng" sound at the end of a syllable',ex:'गंगा = GAN-gaa · the Ganges',voice:'गंगा'},
    {l:'ऋ',say:'a vowel-like "r" — said as a short "ri"',ex:'ऋषि = ri-shi · sage',voice:'ऋषि'}
  ],
  resources: [
    {icon:'🗣️',t:'Namaste Hindi',d:'A warm beginner YouTube course from a native speaker — short, clear and friendly.',q:'Namaste Hindi for beginners'},
    {icon:'🛺',t:'Easy Hindi',d:'Real street interviews with native speakers and subtitles — natural, everyday Hindi.',q:'Easy Hindi street interviews'},
    {icon:'📚',t:'HindiPod101',d:'Structured beginner lessons in short audio and video bites, from zero.',q:'HindiPod101 beginner Hindi'},
    {icon:'🔤',t:'Devanagari in a week',d:'Learn the alphabet with lively mnemonic videos — worth it, since Hindi is phonetic.',q:'learn Devanagari alphabet fast'},
    {icon:'🎧',t:'Slow Hindi podcasts',d:'Easy listening for the commute — great for tuning your ear to the rhythm.',q:'slow Hindi podcast for learners'}
  ]
};
