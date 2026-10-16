/* ---- nepali ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["nepali"] = {
  name: 'Nepali',
  flag: '🇳🇵',
  tts: 'ne-NP',
  dir: 'ltr',
  native: 'नेपाली',
  soundTitle: 'Nepali sounds & Devanagari',
  soundIntro: 'Nepali is written in the <b>Devanagari</b> script (the same as Hindi) and read left to right. The real challenge is the two <b>t</b> sounds, the breathy aspirates and the nasal hook — master these and you can say any word.',
  grammar: '<p>Nepali is written in the <b>Devanagari</b> script and read left to right. Sentences follow <b>subject–object–verb</b> order, just like Hindi — so \'I water want\' rather than \'I want water\'. Instead of prepositions, Nepali uses <b>postpositions</b>: <code>लाई lai</code> (to / for), <code>को ko</code> (of), <code>मा ma</code> (in). Verbs change to match the person, and there is a polite <code>तपाईं tapai</code> and a casual <code>तिमी timi</code> for \'you\'.</p>',
  bridges: '<div class="note">🇮🇳 <b>Hindi.</b> Nepali is very close to Hindi — shared words, shared grammar, same script. If you know Hindi you already know much of this course, and Hindi speakers pick Nepali up fast.</div><div class="note">🇬🇧 <b>English.</b> Loanwords like टिकट (ticket), बैंक (bank), होटल (hotel) and मोबाइल (mobile) are used as-is. And yes — <i>chai</i> (चिया) is where English \'chai\' comes from.</div><div class="note">🕉️ <b>Sanskrit.</b> Many formal and spiritual words come straight from Sanskrit — नमस्ते and धन्यवाद are Sanskrit roots you will recognize.</div>',
  lessons: [
    { id:1, title:'Greetings', focus:'नमस्ते · शुभ प्रभात · कस्तो छ?',
      steps:[
        {t:'say',text:'Nepali\'s universal greeting is <span class="inline-tr">नमस्ते namaste</span> — hello, and also goodbye when you leave. Say it out loud.',tr:'नमस्ते'},
        {t:'words',items:[{tr:'नमस्ते',pr:'NAH-mas-teh',en:'hello / goodbye',link:'≈ Hindi namaste'},{tr:'शुभ प्रभात',pr:'SHUBH pra-BHAAT',en:'good morning'},{tr:'शुभ साँझ',pr:'SHUBH saanjh',en:'good evening'}]},
        {t:'chal',en:'Hello, good morning!',tr:'नमस्ते, शुभ प्रभात!',pr:'NAH-mas-teh, SHUBH pra-BHAAT!',morph:['नमस्ते = hello','शुभ प्रभात = good morning']},
        {t:'say',text:'To ask how someone is: <span class="inline-tr">तिमीलाई कस्तो छ?</span> The friendly answer is <span class="inline-tr">सन्चै छु</span> — I\'m fine.',tr:'तिमीलाई कस्तो छ?'},
        {t:'words',items:[{tr:'तिमीलाई कस्तो छ?',pr:'ti-mi-LAI kas-TO chha?',en:'How are you? (casual)'},{tr:'तपाईंलाई कस्तो छ?',pr:'ta-PAI-laai kas-TO chha?',en:'How are you? (formal)'},{tr:'सन्चै छु',pr:'SAN-chai chhu',en:'I\'m fine'}]},
        {t:'chal',en:'Hello, how are you?',tr:'नमस्ते, तिमीलाई कस्तो छ?',pr:'NAH-mas-teh, ti-mi-LAI kas-TO chha?',morph:['नमस्ते = hello','तिमीलाई कस्तो छ = how are you?']}
      ],
      blocks:['<code>नमस्ते</code> = hello / goodbye','<code>शुभ प्रभात</code> = good morning','<code>तिमीलाई कस्तो छ?</code> = how are you?'] },
    { id:2, title:'Being polite', focus:'धन्यवाद · कृपया · माफ गर्नुहोस्',
      steps:[
        {t:'say',text:'The two politeness words you\'ll use constantly: <span class="inline-tr">धन्यवाद</span> (thank you) and <span class="inline-tr">कृपया</span> (please).',tr:'धन्यवाद'},
        {t:'words',items:[{tr:'धन्यवाद',pr:'DHA-nya-bad',en:'thank you',link:'≈ Hindi धन्यवाद · Sanskrit dhanyavāda'},{tr:'कृपया',pr:'KRI-pa-ya',en:'please',link:'≈ Hindi कृपया'},{tr:'माफ गर्नुहोस्',pr:'maaf GAR-nu-hos',en:'excuse me / sorry'},{tr:'तपाईंको स्वागत छ',pr:'ta-PAI-ko swa-GAT chha',en:'you\'re welcome'}]},
        {t:'chal',en:'Thank you very much',tr:'धेरै धन्यवाद',pr:'DHEH-rai DHA-nya-bad',morph:['धेरै = very / many','धन्यवाद = thank you']},
        {t:'say',text:'To get attention or apologize: <span class="inline-tr">माफ गर्नुहोस्</span>. And <span class="inline-tr">हो</span> = yes, <span class="inline-tr">होइन</span> = no.',tr:'माफ गर्नुहोस्'},
        {t:'words',items:[{tr:'हो',pr:'ho',en:'yes'},{tr:'होइन',pr:'HO-in',en:'no'},{tr:'हुन्छ',pr:'hoon-CHHA',en:'okay / sure'}]},
        {t:'chal',en:'Yes, please',tr:'हो, कृपया',pr:'ho, KRI-pa-ya',morph:['हो = yes','कृपया = please']}
      ],
      blocks:['<code>धन्यवाद</code> = thank you · <code>कृपया</code> = please','<code>माफ गर्नुहोस्</code> = excuse me / sorry','<code>हो</code> / <code>होइन</code> = yes / no'] },
    { id:3, title:'Numbers 1–10', focus:'एक · दुई · तीन · दस',
      steps:[
        {t:'say',text:'Numbers are the fastest win. Listen and repeat: <span class="inline-tr">एक, दुई, तीन</span>.',tr:'एक'},
        {t:'words',items:[{tr:'एक',pr:'ek',en:'1'},{tr:'दुई',pr:'doo-ee',en:'2'},{tr:'तीन',pr:'teen',en:'3'},{tr:'चार',pr:'chaar',en:'4'},{tr:'पाँच',pr:'paanch',en:'5'},{tr:'छ',pr:'chha',en:'6'},{tr:'सात',pr:'saat',en:'7'},{tr:'आठ',pr:'aath',en:'8'},{tr:'नौ',pr:'nau',en:'9'},{tr:'दस',pr:'das',en:'10'}]},
        {t:'chal',en:'Two teas, please',tr:'दुई चिया, कृपया',pr:'doo-ee CHI-ya, KRI-pa-ya',morph:['दुई = two','चिया = tea','कृपया = please']},
        {t:'chal',en:'I\'d like three',tr:'तीन चाहियो',pr:'teen CHAH-i-yo',morph:['तीन = three','चाहियो = is needed / I want']},
        {t:'say',text:'To ask how much: <span class="inline-tr">कति?</span> kati. And the full question at the market: <span class="inline-tr">कति पर्छ?</span> — how much does it cost?',tr:'कति पर्छ?'},
        {t:'chal',en:'How much is it?',tr:'कति पर्छ?',pr:'ka-ti PAR-cha?',morph:['कति = how much','पर्छ = does it cost']}
      ],
      blocks:['<code>एक, दुई, तीन</code> = 1, 2, 3 · <code>दस</code> = 10','<code>कति पर्छ?</code> = how much is it? · <code>कति?</code> = how much'] },
    { id:4, title:'"I want" — मलाई ... चाहियो', focus:'मलाई · चाहियो · पानी',
      steps:[
        {t:'say',text:'To want or need something, Nepali says <span class="inline-tr">मलाई ... चाहियो</span> — literally \'to me ... is needed\'. Say the thing first.',tr:'मलाई ... चाहियो'},
        {t:'words',items:[{tr:'मलाई',pr:'ma-LAI',en:'to me / I'},{tr:'चाहियो',pr:'CHAH-i-yo',en:'is needed / I want'},{tr:'पानी',pr:'PAH-nee',en:'water',link:'≈ Hindi पानी'}]},
        {t:'chal',en:'I want water',tr:'मलाई पानी चाहियो',pr:'ma-LAI PAH-nee CHAH-i-yo',morph:['मलाई = to me','पानी = water','चाहियो = is needed']},
        {t:'chal',en:'I want tea',tr:'मलाई चिया चाहियो',pr:'ma-LAI CHI-ya CHAH-i-yo',morph:['मलाई = to me','चिया = tea','चाहियो = is needed']},
        {t:'say',text:'<span class="inline-tr">छ</span> (chha) means \'is / there is\' and it\'s everywhere in Nepali. With <span class="inline-tr">मलाई</span> it builds wants.',tr:'छ'},
        {t:'chal',en:'I want the menu',tr:'मलाई मेनु चाहियो',pr:'ma-LAI MEH-noo CHAH-i-yo',morph:['मलाई = to me','मेनु = menu','चाहियो = is needed']}
      ],
      blocks:['<code>मलाई</code> = to me / I','<code>चाहियो</code> = is needed / I want','<code>मलाई पानी चाहियो</code> = I want water'] },
    { id:5, title:'Food & drink', focus:'पानी · दाल भात · चिया',
      steps:[
        {t:'say',text:'Nepali food words you\'ll meet daily: <span class="inline-tr">पानी</span> (water), <span class="inline-tr">दाल भात</span> (the national dish), <span class="inline-tr">चिया</span> (tea).',tr:'दाल भात'},
        {t:'words',items:[{tr:'पानी',pr:'PAH-nee',en:'water',link:'≈ Hindi पानी'},{tr:'दाल भात',pr:'DAAL bhaat',en:'lentil & rice'},{tr:'चिया',pr:'CHI-ya',en:'tea'},{tr:'कफी',pr:'ka-FEE',en:'coffee'},{tr:'मोमो',pr:'MOH-moh',en:'dumplings'}]},
        {t:'chal',en:'Water, please',tr:'पानी, कृपया',pr:'PAH-nee, KRI-pa-ya',morph:['पानी = water','कृपया = please']},
        {t:'say',text:'<span class="inline-tr">दाल भात</span> is the everyday meal — lentils over rice with vegetables and pickle. Say <span class="inline-tr">गरम</span> (garam) if you want it hot.',tr:'गरम'},
        {t:'chal',en:'I want dal bhat',tr:'मलाई दाल भात चाहियो',pr:'ma-LAI DAAL bhaat CHAH-i-yo',morph:['मलाई = to me','दाल भात = lentil & rice','चाहियो = is needed']},
        {t:'chal',en:'It\'s delicious!',tr:'मिठो छ!',pr:'MI-toh chha!',morph:['मिठो = delicious','छ = is']}
      ],
      blocks:['<code>पानी</code> = water · <code>चिया</code> = tea','<code>दाल भात</code> = the everyday meal','<code>मिठो छ!</code> = it\'s delicious!'] },
    { id:6, title:'Getting around', focus:'कहाँ छ? · दायाँ · बायाँ',
      steps:[
        {t:'say',text:'The most useful question in any town: <span class="inline-tr">... कहाँ छ?</span> kaha chha — where is ...? Say the place first.',tr:'कहाँ छ?'},
        {t:'words',items:[{tr:'कहाँ?',pr:'ka-HAH',en:'where?'},{tr:'दायाँ',pr:'DAH-yaa',en:'to the right'},{tr:'बायाँ',pr:'BAH-yaa',en:'to the left'},{tr:'सिधा',pr:'SI-dha',en:'straight ahead'},{tr:'नजिक',pr:'na-JIK',en:'near'}]},
        {t:'chal',en:'Where is the bus stop?',tr:'बस स्टप कहाँ छ?',pr:'bas stap ka-HAH chha?',morph:['बस स्टप = bus stop','कहाँ = where','छ = is']},
        {t:'chal',en:'Where is the toilet?',tr:'शौचालय कहाँ छ?',pr:'shau-CHA-lay ka-HAH chha?',morph:['शौचालय = toilet','कहाँ = where','छ = is']},
        {t:'say',text:'<span class="inline-tr">दायाँ</span> = right, <span class="inline-tr">बायाँ</span> = left, <span class="inline-tr">सिधा</span> = straight ahead.',tr:'सिधा'},
        {t:'chal',en:'Go straight',tr:'सिधा जानुहोस्',pr:'SI-dha JAA-nu-hos',morph:['सिधा = straight','जानुहोस् = go']}
      ],
      blocks:['<code>कहाँ छ?</code> = where is ...?','<code>दायाँ</code> / <code>बायाँ</code> = right / left','<code>सिधा</code> = straight ahead'] },
    { id:7, title:'Questions', focus:'के · कति · कहिले',
      steps:[
        {t:'say',text:'Question words carry a lot of weight in Nepali: <span class="inline-tr">के</span> (what), <span class="inline-tr">कति</span> (how much), <span class="inline-tr">कहाँ</span> (where), <span class="inline-tr">कहिले</span> (when).',tr:'के'},
        {t:'words',items:[{tr:'के?',pr:'keh',en:'what?'},{tr:'किन?',pr:'kin',en:'why?'},{tr:'कहिले?',pr:'ka-hi-LEH',en:'when?'},{tr:'कसरी?',pr:'kas-REE',en:'how?'},{tr:'कति?',pr:'ka-TI',en:'how much / many'}]},
        {t:'chal',en:'What is this?',tr:'यो के हो?',pr:'yo keh ho?',morph:['यो = this','के = what','हो = is']},
        {t:'say',text:'To ask what someone needs: <span class="inline-tr">के चाहियो?</span> ke chahiyo — what do you need? It\'s friendly and very common.',tr:'के चाहियो?'},
        {t:'chal',en:'What do you want?',tr:'के चाहियो?',pr:'keh CHAH-i-yo?',morph:['के = what','चाहियो = is needed']},
        {t:'chal',en:'Do you have a room?',tr:'एउटा कोठा छ?',pr:'EH-u-ta KO-tha chha?',morph:['एउटा = a / one','कोठा = room','छ = is there']}
      ],
      blocks:['<code>के?</code> = what · <code>कति?</code> = how much','<code>के चाहियो?</code> = what do you need?','<code>... छ?</code> = is there ...?'] },
    { id:8, title:'Family & people', focus:'परिवार · आमा · बुबा · साथी',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">परिवार</span> (parivar) = family, <span class="inline-tr">आमा</span> (aama) = mother, <span class="inline-tr">बुबा</span> (buba) = father.',tr:'परिवार'},
        {t:'words',items:[{tr:'परिवार',pr:'pa-ri-VAAR',en:'family',link:'≈ Hindi परिवार'},{tr:'आमा',pr:'AA-ma',en:'mother'},{tr:'बुबा',pr:'BU-ba',en:'father'},{tr:'साथी',pr:'SA-thi',en:'friend'},{tr:'दिदी',pr:'DI-di',en:'older sister'},{tr:'भाइ',pr:'bhai',en:'younger brother',link:'≈ Hindi भाई'}]},
        {t:'chal',en:'I have a family',tr:'मेरो परिवार छ',pr:'ME-ro pa-ri-VAAR chha',morph:['मेरो = my','परिवार = family','छ = is / has']},
        {t:'say',text:'<span class="inline-tr">छ</span> also means \'has\': <span class="inline-tr">मसँग छ</span> = I have (with me).',tr:'मसँग छ'},
        {t:'words',items:[{tr:'मसँग छ',pr:'ma-SANG chha',en:'I have'},{tr:'तिमीसँग छ?',pr:'ti-mee-SANG chha?',en:'do you have?'}]},
        {t:'chal',en:'I have a friend',tr:'मेरो साथी छ',pr:'ME-ro SA-thi chha',morph:['मेरो = my','साथी = friend','छ = is / has']}
      ],
      blocks:['<code>आमा</code> / <code>बुबा</code> = mother / father','<code>साथी</code> = friend','<code>मसँग छ</code> = I have'] },
    { id:9, title:'Time, days & weather', focus:'आज · भोलि · मौसम',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">आज</span> (aaj), tomorrow <span class="inline-tr">भोलि</span> (bholi), yesterday <span class="inline-tr">हिजो</span> (hijo).',tr:'आज'},
        {t:'words',items:[{tr:'आज',pr:'aaj',en:'today'},{tr:'भोलि',pr:'BHO-li',en:'tomorrow'},{tr:'हिजो',pr:'HI-jo',en:'yesterday'},{tr:'मौसम',pr:'MAU-sam',en:'weather',link:'≈ Hindi मौसम'}]},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">मौसम कस्तो छ?</span> mausam kasto chha?',tr:'मौसम कस्तो छ?'},
        {t:'chal',en:'It\'s raining',tr:'पानी परेको छ',pr:'PAH-nee pa-RE-ko chha',morph:['पानी = rain / water','परेको छ = is falling']},
        {t:'chal',en:'See you tomorrow',tr:'भोलि भेटौँला',pr:'BHO-li bhe-TAU-la',morph:['भोलि = tomorrow','भेटौँला = see you']},
        {t:'words',items:[{tr:'आइतबार',pr:'AI-ta-baar',en:'Sunday'},{tr:'सोमबार',pr:'SOM-baar',en:'Monday'},{tr:'शनिबार',pr:'sha-ni-BAAR',en:'Saturday'}]}
      ],
      blocks:['<code>आज</code> / <code>भोलि</code> / <code>हिजो</code> = today / tomorrow / yesterday','<code>मौसम कस्तो छ?</code> = how\'s the weather?','<code>आइतबार / शनिबार</code> = Sunday / Saturday'] },
    { id:10, title:'My name — मेरो नाम', focus:'मेरो नाम · हो · तपाईंको नाम',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">मेरो नाम ... हो</span> — my name is ... .',tr:'मेरो नाम ... हो'},
        {t:'chal',en:'My name is __NAME__',tr:'मेरो नाम __NAME__ हो',pr:'ME-ro naam __NAME__ ho',morph:['मेरो = my','नाम = name','हो = is']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">तपाईंको नाम के हो?</span> (polite) or <span class="inline-tr">तिम्रो नाम के हो?</span> (casual).',tr:'तपाईंको नाम के हो?'},
        {t:'words',items:[{tr:'तपाईंको नाम के हो?',pr:'ta-PAI-ko naam keh ho?',en:'What\'s your name? (formal)'},{tr:'तिम्रो नाम के हो?',pr:'TIM-ro naam keh ho?',en:'What\'s your name? (casual)'},{tr:'नाम',pr:'naam',en:'name',link:'≈ Hindi नाम · Sanskrit nāma'}]},
        {t:'chal',en:'What\'s your name?',tr:'तपाईंको नाम के हो?',pr:'ta-PAI-ko naam keh ho?',morph:['तपाईंको = your (formal)','नाम = name','के हो = what is']},
        {t:'say',text:'Nice to meet you: <span class="inline-tr">भेटेर खुसी लाग्यो</span>.',tr:'भेटेर खुसी लाग्यो'}
      ],
      blocks:['<code>मेरो नाम __NAME__ हो</code> = my name is __NAME__','<code>तपाईंको नाम के हो?</code> = what\'s your name?','<code>भेटेर खुसी लाग्यो</code> = pleased to meet you'] },
    { id:11, title:'Health & emergency', focus:'मद्दत! · डाक्टर · बुझ्दैन',
      steps:[
        {t:'say',text:'The words that matter fast: <span class="inline-tr">मद्दत!</span> (help), <span class="inline-tr">डाक्टर</span> (doctor), <span class="inline-tr">अस्पताल</span> (hospital), <span class="inline-tr">प्रहरी</span> (police).',tr:'मद्दत!'},
        {t:'words',items:[{tr:'मद्दत!',pr:'MAD-dat!',en:'help!'},{tr:'डाक्टर',pr:'DAAK-tar',en:'doctor',link:'≈ Hindi डॉक्टर'},{tr:'अस्पताल',pr:'as-pa-TAAL',en:'hospital',link:'≈ Hindi अस्पताल'},{tr:'प्रहरी',pr:'PRA-ha-ri',en:'police'}]},
        {t:'chal',en:'Help!',tr:'मद्दत!',pr:'MAD-dat!',morph:['मद्दत = help']},
        {t:'say',text:'To say you don\'t understand: <span class="inline-tr">मलाई बुझ्दैन</span>. To ask for help: <span class="inline-tr">मलाई मद्दत चाहियो</span>.',tr:'मलाई मद्दत चाहियो'},
        {t:'words',items:[{tr:'मलाई बुझ्दैन',pr:'ma-LAI boo-DHAIN',en:'I don\'t understand'},{tr:'मलाई मद्दत चाहियो',pr:'ma-LAI MAD-dat CHAH-i-yo',en:'I need help'},{tr:'मलाई पानी चाहियो',pr:'ma-LAI PAH-nee CHAH-i-yo',en:'I need water'}]},
        {t:'chal',en:'I need a doctor',tr:'मलाई डाक्टर चाहियो',pr:'ma-LAI DAAK-tar CHAH-i-yo',morph:['मलाई = to me','डाक्टर = doctor','चाहियो = is needed']}
      ],
      blocks:['<code>मद्दत!</code> = help!','<code>डाक्टर</code> / <code>अस्पताल</code> = doctor / hospital','<code>मलाई बुझ्दैन</code> = I don\'t understand'] },
    { id:12, title:'Tying it together', focus:'चाहियो · कहाँ · कति · a capstone scene',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolbox. This capstone uses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello, how are you?',tr:'नमस्ते, तिमीलाई कस्तो छ?',pr:'NAH-mas-teh, ti-mi-LAI kas-TO chha?',morph:['नमस्ते = hello','तिमीलाई कस्तो छ = how are you?']},
        {t:'chal',en:'I want water, please',tr:'मलाई पानी चाहियो, कृपया',pr:'ma-LAI PAH-nee CHAH-i-yo, KRI-pa-ya',morph:['मलाई = to me','पानी = water','चाहियो = is needed','कृपया = please']},
        {t:'chal',en:'Where is the bus stop?',tr:'बस स्टप कहाँ छ?',pr:'bas stap ka-HAH chha?',morph:['बस स्टप = bus stop','कहाँ = where','छ = is']},
        {t:'chal',en:'How much is it?',tr:'कति पर्छ?',pr:'ka-ti PAR-cha?',morph:['कति = how much','पर्छ = does it cost']},
        {t:'chal',en:'Thank you very much!',tr:'धेरै धन्यवाद!',pr:'DHEH-rai DHA-nya-bad!',morph:['धेरै = very','धन्यवाद = thank you']}
      ],
      blocks:['You built: greetings, politeness, ordering, directions and prices — a full day out in Nepal.'] },
    { id:13, title:'Airport & tickets', focus:'विमानस्थल · राहदानी · टिकट · गेट',
      steps:[
        {t:'say',text:'You have landed. The building is the <span class="inline-tr">विमानस्थल</span>. Your document is a <span class="inline-tr">राहदानी</span>.',tr:'विमानस्थल'},
        {t:'words',items:[{tr:'विमानस्थल',pr:'bi-MAAN-sthal',en:'airport'},{tr:'राहदानी',pr:'raa-ha-DAA-ni',en:'passport'},{tr:'टिकट',pr:'TI-kat',en:'ticket'},{tr:'गेट',pr:'geyt',en:'gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'विमानस्थल कहाँ छ?',pr:'bi-MAAN-sthal ka-HAH chha',morph:['विमानस्थल = airport','कहाँ छ? = where is']},
        {t:'chal',en:'Here is my passport',tr:'यो मेरो राहदानी हो',pr:'yo ME-ro raa-ha-DAA-ni ho',morph:['यो = this','मेरो = my','राहदानी = passport']},
        {t:'chal',en:'A ticket, please',tr:'एउटा टिकट, कृपया',pr:'EH-u-ta TI-kat, KRI-pa-ya',morph:['एउटा टिकट = a ticket','कृपया = please']},
        {t:'chal',en:'Where is the gate?',tr:'गेट कहाँ छ?',pr:'geyt ka-HAH chha',morph:['गेट = gate','कहाँ छ? = where is']}
      ],
      blocks:['<code>विमानस्थल</code> = airport','<code>राहदानी</code> = passport','<code>टिकट</code> = ticket'] },
    { id:14, title:'The taxi', focus:'ट्याक्सी · जानु · होटल · रोक्नुहोस्',
      steps:[
        {t:'say',text:'The driver is waiting. <span class="inline-tr">ट्याक्सी</span> is a loanword. Tell them <span class="inline-tr">मलाई होटल जानु पर्‍यो</span>.',tr:'ट्याक्सी'},
        {t:'words',items:[{tr:'ट्याक्सी',pr:'TYAAK-see',en:'taxi'},{tr:'चालक',pr:'CHAA-lak',en:'driver'},{tr:'मलाई जानु पर्‍यो',pr:'ma-LAI JAA-nu par-yo',en:'I need to go'},{tr:'यहाँ रोक्नुहोस्',pr:'ya-HAA ROK-nu-hos',en:'stop here'}]},
        {t:'chal',en:'Taxi, please',tr:'ट्याक्सी, कृपया',pr:'TYAAK-see, KRI-pa-ya',morph:['ट्याक्सी = taxi','कृपया = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'मलाई होटल जानु पर्‍यो',pr:'ma-LAI ho-TEL JAA-nu par-yo',morph:['मलाई = to me','होटल = hotel','जानु पर्‍यो = I need to go']},
        {t:'chal',en:'Stop here, please',tr:'यहाँ रोक्नुहोस्, कृपया',pr:'ya-HAA ROK-nu-hos, KRI-pa-ya',morph:['यहाँ = here','रोक्नुहोस् = please stop','कृपया = please']},
        {t:'chal',en:'How much is it?',tr:'कति पर्छ?',pr:'ka-ti PAR-cha',morph:['कति = how much','पर्छ = does it cost']}
      ],
      blocks:['<code>मलाई … जानु पर्‍यो</code> = I need to go to …','<code>यहाँ रोक्नुहोस्</code> = stop here'] },
    { id:15, title:'The hotel', focus:'आरक्षण · कोठा · साँचो · रात',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">मेरो आरक्षण छ</span> — I have a reservation.',tr:'आरक्षण'},
        {t:'words',items:[{tr:'होटल',pr:'ho-TEL',en:'hotel'},{tr:'आरक्षण',pr:'aa-RAK-shan',en:'reservation'},{tr:'कोठा',pr:'KO-tha',en:'room'},{tr:'साँचो',pr:'SAAN-cho',en:'key'},{tr:'एक रात',pr:'ek raat',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'मेरो आरक्षण छ',pr:'ME-ro aa-RAK-shan chha',morph:['मेरो = my','आरक्षण = reservation','छ = is']},
        {t:'chal',en:'A room for one night, please',tr:'एक रातको कोठा, कृपया',pr:'ek RAAT-ko KO-tha, KRI-pa-ya',morph:['एक रातको = for one night','कोठा = room','कृपया = please']},
        {t:'chal',en:'The key, please',tr:'साँचो, कृपया',pr:'SAAN-cho, KRI-pa-ya',morph:['साँचो = key','कृपया = please']},
        {t:'chal',en:'Where is my room?',tr:'मेरो कोठा कहाँ छ?',pr:'ME-ro KO-tha ka-HAH chha',morph:['मेरो कोठा = my room','कहाँ छ? = where is']}
      ],
      blocks:['<code>आरक्षण</code> = reservation','<code>कोठा</code> = room','<code>साँचो</code> = key'] },
    { id:16, title:'Ask for help', focus:'बुझिनँ · बिस्तारै · अंग्रेजी',
      steps:[
        {t:'say',text:'When Nepali is too fast: <span class="inline-tr">बिस्तारै बोल्नुहोस्</span> — please speak slowly.',tr:'बिस्तारै'},
        {t:'words',items:[{tr:'बिस्तारै बोल्नुहोस्',pr:'bis-TAA-rai BOL-nu-hos',en:'speak slowly'},{tr:'फेरि',pr:'PHE-ri',en:'again'},{tr:'अंग्रेजी',pr:'ang-gre-JEE',en:'English'},{tr:'मद्दत गर्नुहुन्छ?',pr:'mad-dat GAR-nu-hun-chha',en:'can you help?'}]},
        {t:'chal',en:'I don\'t understand',tr:'मैले बुझिनँ',pr:'MAI-le BU-jhi-na',morph:['मैले = I','बुझिनँ = didn\'t understand']},
        {t:'chal',en:'Speak slowly, please',tr:'बिस्तारै बोल्नुहोस्, कृपया',pr:'bis-TAA-rai BOL-nu-hos, KRI-pa-ya',morph:['बिस्तारै = slowly','बोल्नुहोस् = please speak','कृपया = please']},
        {t:'chal',en:'Can you help me?',tr:'मलाई मद्दत गर्नुहुन्छ?',pr:'ma-LAI mad-dat GAR-nu-hun-chha',morph:['मलाई = me','मद्दत गर्नुहुन्छ? = will you help?']},
        {t:'chal',en:'Do you speak English?',tr:'तपाईं अंग्रेजी बोल्नुहोस्?',pr:'ta-PAAI ang-gre-JEE BOL-nu-hun-chha',morph:['तपाईं = you','अंग्रेजी = English','बोल्नुहोस्? = do you speak?']}
      ],
      blocks:['<code>बिस्तारै बोल्नुहोस्</code> = speak slowly','<code>तपाईं अंग्रेजी बोल्नुहोस्?</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'cafe', title:'☕ At a café', emoji:'☕', turns:[
      {who:'You',tr:'नमस्ते! एक चिया, कृपया।',pr:'NAH-mas-teh! ek CHI-ya, KRI-pa-ya.',en:'Hello! One tea, please.'},
      {who:'Waiter',tr:'हुन्छ। यहाँ खाने हो कि लैजाने?',pr:'hoon-CHHA. ya-HAA KHA-ne ho ki lai-JAA-ne?',en:'Sure. For here or to take away?'},
      {who:'You',tr:'लैजाने, धन्यवाद।',pr:'lai-JAA-ne, DHA-nya-bad.',en:'To take away, thanks.'},
      {who:'Waiter',tr:'यो लिनुहोस्। सय रुपैयाँ।',pr:'yo LI-nu-hos. say ru-pai-YAA.',en:'Here you go. One hundred rupees.'},
      {who:'You',tr:'धेरै धन्यवाद!',pr:'DHEH-rai DHA-nya-bad!',en:'Thanks a lot!'}
    ]},
    { id:'transport', title:'🚌 At the bus stop', emoji:'🚌', turns:[
      {who:'You',tr:'माफ गर्नुहोस्, बस स्टप कहाँ छ?',pr:'maaf GAR-nu-hos, bas stap ka-HAH chha?',en:'Excuse me, where is the bus stop?'},
      {who:'Local',tr:'त्यहाँ छ, दायाँ।',pr:'TYA-haa chha, DAH-yaa.',en:'It\'s there, to the right.'},
      {who:'You',tr:'धन्यवाद। काठमाडौँ जाने बस कहाँ?',pr:'DHA-nya-bad. KATH-ma-dau JAA-ne bas ka-HAH?',en:'Thanks. Where is the bus to Kathmandu?'},
      {who:'Driver',tr:'यता। दुई सय रुपैयाँ। भोलि बिहान निस्किन्छ।',pr:'ya-TAA. doo-ee say ru-pai-YAA. BHO-li bi-HAAN nis-KIN-chha.',en:'This way. Two hundred rupees. It leaves tomorrow morning.'}
    ]},
    { id:'restaurant', title:'🍛 At a restaurant', emoji:'🍛', turns:[
      {who:'Waiter',tr:'नमस्ते! के खानुहुन्छ?',pr:'NAH-mas-teh! keh KHA-nu-hunchha?',en:'Hello! What would you like to eat?'},
      {who:'You',tr:'मलाई दाल भात चाहियो।',pr:'ma-LAI DAAL bhaat CHAH-i-yo.',en:'I want dal bhat.'},
      {who:'You',tr:'मेनु, कृपया।',pr:'MEH-noo, KRI-pa-ya.',en:'The menu, please.'},
      {who:'Waiter',tr:'धेरै मिठो हुन्छ! केही चिया पनि?',pr:'DHEH-rai MI-toh hunchha! KEH-hi CHI-ya pa-NI?',en:'It\'s delicious! Some tea too?'},
      {who:'You',tr:'हो, एक चिया। एकदम गरम।',pr:'ho, ek CHI-ya. ek-DAM ga-RAM.',en:'Yes, one tea. Very hot.'}
    ]},
    { id:'market', title:'🛍️ At the market', emoji:'🛍️', turns:[
      {who:'You',tr:'यो कति पर्छ?',pr:'yo ka-TI PAR-cha?',en:'How much is this?'},
      {who:'Seller',tr:'तीन सय रुपैयाँ।',pr:'teen say ru-pai-YAA.',en:'Three hundred rupees.'},
      {who:'You',tr:'धेरै महँगो छ!',pr:'DHEH-rai ma-HAN-go chha!',en:'That\'s too expensive!'},
      {who:'Seller',tr:'हुन्छ, तपाईंको लागि दुई सय।',pr:'hoon-CHHA, ta-PAI-ko laagi doo-ee say.',en:'OK, for you two hundred.'},
      {who:'You',tr:'ल, लिन्छु। धन्यवाद!',pr:'LA, LIN-chhu. DHA-nya-bad!',en:'OK, I\'ll take it. Thanks!'}
    ]}
  ],
  pocket: [
    {tr:'नमस्ते',pr:'NAH-mas-teh',en:'hello / goodbye',c:'Greetings'},
    {tr:'शुभ प्रभात',pr:'SHUBH pra-BHAAT',en:'good morning',c:'Greetings'},
    {tr:'शुभ साँझ',pr:'SHUBH saanjh',en:'good evening',c:'Greetings'},
    {tr:'तिमीलाई कस्तो छ?',pr:'ti-mi-LAI kas-TO chha?',en:'How are you?',c:'Greetings'},
    {tr:'सन्चै छु',pr:'SAN-chai chhu',en:'I\'m fine',c:'Greetings'},
    {tr:'भेटेर खुसी लाग्यो',pr:'bhe-TER KHU-si LAAG-yo',en:'Pleased to meet you',c:'Greetings'},
    {tr:'मेरो नाम __NAME__ हो',pr:'ME-ro naam __NAME__ ho',en:'My name is __NAME__',c:'Greetings'},
    {tr:'धन्यवाद',pr:'DHA-nya-bad',en:'Thank you',c:'Courtesy'},
    {tr:'धेरै धन्यवाद',pr:'DHEH-rai DHA-nya-bad',en:'Thanks a lot',c:'Courtesy'},
    {tr:'कृपया',pr:'KRI-pa-ya',en:'Please',c:'Courtesy'},
    {tr:'माफ गर्नुहोस्',pr:'maaf GAR-nu-hos',en:'Excuse me / sorry',c:'Courtesy'},
    {tr:'तपाईंको स्वागत छ',pr:'ta-PAI-ko swa-GAT chha',en:'You\'re welcome',c:'Courtesy'},
    {tr:'हो',pr:'ho',en:'Yes',c:'Courtesy'},
    {tr:'होइन',pr:'HO-in',en:'No',c:'Courtesy'},
    {tr:'हुन्छ',pr:'hoon-CHHA',en:'Okay / sure',c:'Courtesy'},
    {tr:'एक',pr:'ek',en:'1',c:'Numbers'},
    {tr:'दुई',pr:'doo-ee',en:'2',c:'Numbers'},
    {tr:'तीन',pr:'teen',en:'3',c:'Numbers'},
    {tr:'चार',pr:'chaar',en:'4',c:'Numbers'},
    {tr:'पाँच',pr:'paanch',en:'5',c:'Numbers'},
    {tr:'छ',pr:'chha',en:'6',c:'Numbers'},
    {tr:'सात',pr:'saat',en:'7',c:'Numbers'},
    {tr:'आठ',pr:'aath',en:'8',c:'Numbers'},
    {tr:'नौ',pr:'nau',en:'9',c:'Numbers'},
    {tr:'दस',pr:'das',en:'10',c:'Numbers'},
    {tr:'पानी',pr:'PAH-nee',en:'water',c:'Food'},
    {tr:'दाल भात',pr:'DAAL bhaat',en:'lentil & rice',c:'Food'},
    {tr:'चिया',pr:'CHI-ya',en:'tea',c:'Food'},
    {tr:'कफी',pr:'ka-FEE',en:'coffee',c:'Food'},
    {tr:'मोमो',pr:'MOH-moh',en:'dumplings',c:'Food'},
    {tr:'मिठो छ!',pr:'MI-toh chha!',en:'It\'s delicious!',c:'Food'},
    {tr:'कति पर्छ?',pr:'ka-ti PAR-cha?',en:'How much is it?',c:'Shopping'},
    {tr:'रुपैयाँ',pr:'ru-pai-YAA',en:'rupees',c:'Shopping'},
    {tr:'महँगो',pr:'ma-HAN-go',en:'expensive',c:'Shopping'},
    {tr:'यो लिन्छु',pr:'yo LIN-chhu',en:'I\'ll take this',c:'Shopping'},
    {tr:'कहाँ छ?',pr:'ka-HAH chha?',en:'Where is ...?',c:'Directions'},
    {tr:'दायाँ',pr:'DAH-yaa',en:'to the right',c:'Directions'},
    {tr:'बायाँ',pr:'BAH-yaa',en:'to the left',c:'Directions'},
    {tr:'सिधा',pr:'SI-dha',en:'straight ahead',c:'Directions'},
    {tr:'नजिक',pr:'na-JIK',en:'near',c:'Directions'},
    {tr:'मद्दत!',pr:'MAD-dat!',en:'Help!',c:'Emergency'},
    {tr:'डाक्टर',pr:'DAAK-tar',en:'doctor',c:'Emergency'},
    {tr:'अस्पताल',pr:'as-pa-TAAL',en:'hospital',c:'Emergency'},
    {tr:'प्रहरी',pr:'PRA-ha-ri',en:'police',c:'Emergency'},
    {tr:'मलाई बुझ्दैन',pr:'ma-LAI boo-DHAIN',en:'I don\'t understand',c:'Emergency'},
    {tr:'मलाई मद्दत चाहियो',pr:'ma-LAI MAD-dat CHAH-i-yo',en:'I need help',c:'Emergency'},
    {tr:'आज',pr:'aaj',en:'today',c:'Time'},
    {tr:'भोलि',pr:'BHO-li',en:'tomorrow',c:'Time'},
    {tr:'हिजो',pr:'HI-jo',en:'yesterday',c:'Time'},
    {tr:'मौसम',pr:'MAU-sam',en:'weather',c:'Time'},
    {tr:'विमानस्थल',pr:'bi-MAAN-sthal',en:'airport',c:'Travel'},
    {tr:'राहदानी',pr:'raa-ha-DAA-ni',en:'passport',c:'Travel'},
    {tr:'मलाई होटल जानु पर्‍यो',pr:'ma-LAI ho-TEL JAA-nu par-yo',en:'I want to go to the hotel',c:'Travel'},
    {tr:'मेरो आरक्षण छ',pr:'ME-ro aa-RAK-shan chha',en:'I have a reservation',c:'Travel'},
    {tr:'बिस्तारै बोल्नुहोस्, कृपया',pr:'bis-TAA-rai BOL-nu-hos, KRI-pa-ya',en:'Speak slowly, please',c:'Travel'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Shopping','Directions','Emergency','Time', 'Travel'],
  culture: [
    {icon:'🏔️',title:'Sagarmatha — Mt. Everest',body:'The world\'s highest peak is <b>Sagarmatha</b> (\'head of the sky\') in Nepali; Sherpas call it \'Chomolungma\'. It stands in eastern Nepal, a short flight or a famous trek from Kathmandu.'},
    {icon:'🙏',title:'Namaste',body:'The palms-together <b>namaste</b> (नमस्ते) is both hello and goodbye, and a sign of respect. Bringing your palms to the chest or forehead shows more reverence, and elders are often greeted with a slight bow.'},
    {icon:'🎉',title:'Dashain',body:'<b>Dashain</b> is Nepal\'s biggest festival — up to fifteen days each autumn. Families reunite, elders give <b>tika</b> (a red blessing mark) and <b>dakshina</b> (money), and everyone feasts on goat, rice and sweets.'},
    {icon:'🌺',title:'Tihar — festival of lights',body:'<b>Tihar</b> follows Dashain. Houses glow with oil lamps, and days honour crows, dogs, cows and oxen. Sisters bless brothers, and families play cards and share sweets.'},
    {icon:'🍛',title:'Dal bhat power, 24 hour',body:'<b>Dal bhat</b> (lentils with rice) is the national meal, usually with vegetables, pickle and sometimes fried greens. Locals joke it gives \'24-hour power\' — you\'ll hear that phrase on every trekking trail.'},
    {icon:'🥟',title:'Momo mania',body:'<b>Momo</b> — steamed dumplings — are Nepal\'s favourite snack, served with a fiery tomato-and-chilli <b>achar</b> (chutney). You\'ll find them everywhere, from mountain teahouses to Kathmandu street stalls.'}
  ],
  sounds: [
    {l:'ट',say:'retroflex \'t\' — curl the tongue back to the roof of the mouth',ex:'टिकट = TIK-at (ticket)',voice:'टिकट'},
    {l:'त',say:'dental \'t\' — tongue touches the back of the top teeth',ex:'तिमी = TI-mee (you)',voice:'तिमी'},
    {l:'ठ',say:'retroflex \'t\' with a puff of breath — aspirated',ex:'ठुलो = THU-lo (big)',voice:'ठुलो'},
    {l:'ध',say:'breathy \'d\' — a d with a hard exhale',ex:'धन्यवाद = DHA-nya-bad (thank you)',voice:'धन्यवाद'},
    {l:'भ',say:'breathy \'b\' — b with a strong exhale',ex:'भात = BHAAT (cooked rice)',voice:'भात'},
    {l:'च / छ',say:'ch (soft) vs chh (breathy ch)',ex:'चिया = CHI-ya (tea) · छ = CHHA (is)',voice:'चिया'},
    {l:'द / ड',say:'dental d vs retroflex d (tongue curled back)',ex:'दस = das (ten) · डुङ्गा = DUNG-ga (boat)',voice:'दस'},
    {l:'ं',say:'anusvara — nasalize the vowel before it (a soft \'n\')',ex:'मन्दिर = MAN-dir (temple)',voice:'मन्दिर'}
  ],
  resources: [
    {icon:'🗣️',t:'Easy Nepali for beginners',d:'Slow, clear beginner phrases in real Nepali — perfect for building your first sentences.',q:'Nepali for beginners'},
    {icon:'🐢',t:'Nepali in a Nutshell',d:'Short conversational videos that teach everyday phrases in context, with subtitles.',q:'learn Nepali conversational'},
    {icon:'💬',t:'Nepali travel phrases',d:'Practical phrases for travel in Nepal — greetings, food, directions and money.',q:'Nepali travel phrases'},
    {icon:'🎧',t:'Nepali language podcast',d:'Easy-listening audio for learners, ideal for a walk or on the bus.',q:'Nepali language podcast for learners'},
    {icon:'📚',t:'Devanagari reading practice',d:'Read-along videos to build your Devanagari letter recognition and pronunciation.',q:'learn Devanagari script Nepali pronunciation'}
  ]
};
