/* ---- marathi ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["marathi"] = {
  name: 'Marathi',
  flag: '🇮🇳',
  tts: 'mr-IN',
  dir: 'ltr',
  native: 'मराठी',
  script: 'Devanagari',
  soundTitle: 'Marathi sounds & spelling',
  soundIntro: 'Marathi is written in Devanagari and is mostly phonetic — once you know the letters you can say most words. Watch for ळ (ḷ), a curled-back \'l\' that Hindi speakers often drop.',
  grammar: '<p>Marathi word order is Subject–Object–Verb: <i>मला पाणी हवं आहे</i> = \'to-me water I-want is\'. In the present tense the verb ending changes with the subject\'s gender — the <b>-तो</b> (-to) / <b>-ते</b> (-te) / <b>-ते</b> (-te) pattern. Ask a yes/no question simply by putting <b>का</b> (\'kā\') at the end.</p>',
  bridges: '<div class="note">🇭🇮 <b>Hindi.</b> Hindi speakers can read Marathi — it uses the same Devanagari script — and many everyday words are close. But the verb endings are different, so don\'t assume a Hindi verb form works as-is.</div><div class="note">🔤 <b>Devanagari.</b> Marathi is written in Devanagari, just like Hindi and Sanskrit. Learn a few letters and you can sound out almost any word.</div>',
  lessons: [
    { id:1, title:'Greetings — नमस्कार', focus:'namaskār · suprabhāt · dhanyavād',
      steps:[
        {t:'say',text:'Marathi\'s first word is its warmest: <span class="inline-tr">नमस्कार</span> (namaskār) — hello. Say it with the palms together if you like. It works all day long.',tr:'नमस्कार'},
        {t:'words',items:[{tr:'नमस्कार',pr:'na-mas-KAAR',en:'hello',link:"≈ Hindi/Sanskrit namaskār"},{tr:'सुप्रभात',pr:'soo-pra-BHAAT',en:'good morning',link:"≈ Hindi suprabhāt"},{tr:'धन्यवाद',pr:'DHAN-ya-vaad',en:'thank you'},{tr:'कृपया',pr:'kri-pa-yaa',en:'please'},{tr:'माफ करा',pr:'MAAF ka-RAA',en:'sorry / excuse me'}]},
        {t:'chal',en:'Hello, thank you',tr:'नमस्कार, धन्यवाद',pr:'na-mas-KAAR, DHAN-ya-vaad',morph:['नमस्कार = hello','धन्यवाद = thank you']},
        {t:'say',text:'To ask how someone is (to a man): <span class="inline-tr">तू कसा आहेस?</span> (to a woman: <span class="inline-tr">तू कशी आहेस?</span>). The reply is <span class="inline-tr">मी ठीक आहे</span> — I\'m fine.',tr:'तू कसा आहेस?'},
        {t:'words',items:[{tr:'तू कसा आहेस?',pr:'too ka-SAA AA-hes',en:'How are you? (to a man)'},{tr:'तू कशी आहेस?',pr:'too ka-SHEE AA-hes',en:'How are you? (to a woman)'},{tr:'मी ठीक आहे',pr:'mee THEEK AA-he',en:'I\'m fine'}]},
        {t:'chal',en:'Hello, how are you?',tr:'नमस्कार, तू कसा आहेस?',pr:'na-mas-KAAR, too ka-SAA AA-hes',morph:['नमस्कार = hello','तू कसा आहेस? = how are you?']}
      ],
      blocks:['<code>नमस्कार</code> = hello / goodbye','<code>सुप्रभात</code> = good morning','<code>धन्यवाद</code> = thank you · <code>कृपया</code> = please'] },
    { id:2, title:'Polite phrases', focus:'कृपया · धन्यवाद · माफ करा',
      steps:[
        {t:'say',text:'Two words oil every conversation: <span class="inline-tr">कृपया</span> (please) and <span class="inline-tr">धन्यवाद</span> (thank you). Say them and doors open.',tr:'कृपया'},
        {t:'words',items:[{tr:'कृपया',pr:'kri-pa-yaa',en:'please'},{tr:'धन्यवाद',pr:'DHAN-ya-vaad',en:'thank you',link:"≈ Hindi dhanyavād"},{tr:'खूप धन्यवाद',pr:'khoop DHAN-ya-vaad',en:'thank you very much'},{tr:'माफ करा',pr:'MAAF ka-RAA',en:'sorry / excuse me'},{tr:'होय',pr:'HOY',en:'yes'},{tr:'नाही',pr:'NAA-hee',en:'no'}]},
        {t:'chal',en:'Yes, please',tr:'होय, कृपया',pr:'HOY, kri-pa-yaa',morph:['होय = yes','कृपया = please']},
        {t:'say',text:'To squeeze past or get attention, say <span class="inline-tr">माफ करा</span> — excuse me / sorry. Friendly and versatile.',tr:'माफ करा'},
        {t:'chal',en:'Thank you very much',tr:'खूप धन्यवाद',pr:'khoop DHAN-ya-vaad',morph:['खूप = very','धन्यवाद = thank you']},
        {t:'chal',en:'No, thank you',tr:'नाही, धन्यवाद',pr:'NAA-hee, DHAN-ya-vaad',morph:['नाही = no','धन्यवाद = thank you']}
      ],
      blocks:['<code>कृपया</code> = please','<code>धन्यवाद</code> / <code>खूप धन्यवाद</code> = thank you (very much)','<code>माफ करा</code> = sorry','<code>होय</code> / <code>नाही</code> = yes / no'] },
    { id:3, title:'Numbers 1–10', focus:'एक · दोन · तीन · दहा',
      steps:[
        {t:'say',text:'Numbers are the fastest win. Listen and repeat: <span class="inline-tr">एक, दोन, तीन</span>.',tr:'एक'},
        {t:'words',items:[{tr:'एक',pr:'ek',en:'1'},{tr:'दोन',pr:'don',en:'2'},{tr:'तीन',pr:'teen',en:'3'},{tr:'चार',pr:'chaar',en:'4'},{tr:'पाच',pr:'paach',en:'5'},{tr:'सहा',pr:'sa-HAA',en:'6'},{tr:'सात',pr:'saat',en:'7'},{tr:'आठ',pr:'aath',en:'8'},{tr:'नऊ',pr:'na-U',en:'9'},{tr:'दहा',pr:'da-HAA',en:'10'}]},
        {t:'chal',en:'Two teas, please',tr:'दोन चहा, कृपया',pr:'DON CHA-haa, kri-pa-yaa',morph:['दोन = two','चहा = tea','कृपया = please']},
        {t:'say',text:'<span class="inline-tr">किती आहे?</span> = how much is it? The key phrase for any price.',tr:'किती आहे?'},
        {t:'chal',en:'How much is it?',tr:'किती आहे?',pr:'KI-tee AA-he',morph:['किती = how much','आहे = is']},
        {t:'chal',en:'Ten rupees',tr:'दहा रुपये',pr:'da-HAA ROOP-ye',morph:['दहा = ten','रुपये = rupees'],link:"≈ English rupee"}
      ],
      blocks:['एक, दोन, तीन ... = 1, 2, 3 ...','<code>किती आहे?</code> = how much is it?'] },
    { id:4, title:'"I want" — मला … हवं आहे', focus:'मला … हवं आहे',
      steps:[
        {t:'say',text:'The magic phrase to ask for anything: <span class="inline-tr">मला … हवं आहे</span> — I want … (literally \'to me … is wanted\').',tr:'मला … हवं आहे'},
        {t:'words',items:[{tr:'मला ... हवं आहे',pr:'ma-LAA ... ha-VAA AA-he',en:'I want ...'},{tr:'पाणी',pr:'PAA-nee',en:'water'},{tr:'चहा',pr:'CHA-haa',en:'tea'},{tr:'भात',pr:'bhaat',en:'rice'}]},
        {t:'chal',en:'I want water',tr:'मला पाणी हवं आहे',pr:'ma-LAA PAA-nee ha-VAA AA-he',morph:['मला = to me','पाणी = water','हवं आहे = I want']},
        {t:'say',text:'Make it polite by adding <span class="inline-tr">कृपया</span> at the end. Word order stays: to-me + object + want.',tr:'कृपया'},
        {t:'chal',en:'I want tea, please',tr:'मला चहा हवं आहे, कृपया',pr:'ma-LAA CHA-haa ha-VAA AA-he, kri-pa-yaa',morph:['मला = to me','चहा = tea','हवं आहे = I want','कृपया = please']},
        {t:'say',text:'To ask someone if they want something: <span class="inline-tr">तुला … हवं आहे का?</span>',tr:'तुला ... हवं आहे का?'},
        {t:'chal',en:'Do you want water?',tr:'तुला पाणी हवं आहे का?',pr:'too-LAA PAA-nee ha-VAA AA-he kaa',morph:['तुला = to you (informal)','पाणी = water','का = question word']}
      ],
      blocks:['<code>मला … हवं आहे</code> = I want …','<code>पाणी</code> = water','<code>का</code> = turns it into a question'] },
    { id:5, title:'Food & drink', focus:'पाणी · चहा · भात · पोळी',
      steps:[
        {t:'say',text:'At a meal, these carry you: <span class="inline-tr">पाणी</span> (water), <span class="inline-tr">चहा</span> (tea), <span class="inline-tr">भात</span> (rice), <span class="inline-tr">पोळी</span> (flatbread).',tr:'पाणी'},
        {t:'words',items:[{tr:'पाणी',pr:'PAA-nee',en:'water'},{tr:'दूध',pr:'doodh',en:'milk'},{tr:'चहा',pr:'CHA-haa',en:'tea'},{tr:'कॉफी',pr:'KOF-fee',en:'coffee',link:"≈ English coffee"},{tr:'भात',pr:'bhaat',en:'rice',link:"≈ Hindi bhaat"},{tr:'पोळी',pr:'po-LEE',en:'flatbread'},{tr:'मिठ',pr:'mi-TH',en:'salt'}]},
        {t:'chal',en:'Water and rice, please',tr:'पाणी आणि भात, कृपया',pr:'PAA-nee AA-nee bhaat, kri-pa-yaa',morph:['पाणी = water','आणि = and','भात = rice','कृपया = please']},
        {t:'say',text:'<span class="inline-tr">मला … हवं आहे</span> goes with food too — <span class="inline-tr">मला मेनू हवा आहे</span> = I\'d like the menu.',tr:'मेनू'},
        {t:'chal',en:'I\'d like the menu',tr:'मला मेनू हवा आहे',pr:'ma-LAA MAY-noo ha-VAA AA-he',morph:['मला = to me','मेनू = menu','हवा आहे = I want'],link:"≈ English menu"},
        {t:'say',text:'Compliment the food: <span class="inline-tr">खूप छान!</span> — very tasty!',tr:'खूप छान!'},
        {t:'chal',en:'Delicious!',tr:'खूप छान!',pr:'khoop CHHAAN',morph:['खूप = very','छान = tasty / nice']}
      ],
      blocks:['<code>पाणी</code> / <code>चहा</code> / <code>भात</code> = water / tea / rice','<code>मला … हवा आहे</code> = I\'d like …','<code>खूप छान!</code> = delicious!'] },
    { id:6, title:'Getting around', focus:'कुठे · उजवीकडे · डावीकडे · सरळ',
      steps:[
        {t:'say',text:'The most useful question in any city: <span class="inline-tr">कुठे आहे?</span> — where is it?',tr:'कुठे आहे?'},
        {t:'words',items:[{tr:'कुठे?',pr:'KOO-the',en:'where?'},{tr:'उजवीकडे',pr:'uj-VEE-ka-de',en:'to the right'},{tr:'डावीकडे',pr:'daa-VEE-ka-de',en:'to the left'},{tr:'सरळ',pr:'SA-ral',en:'straight ahead'},{tr:'रेल्वे स्टेशन',pr:'REL-ve STESH-an',en:'the railway station',link:"≈ English railway station"},{tr:'स्नानगृह',pr:'SHNA-an-grih',en:'the bathroom'}]},
        {t:'chal',en:'Where is the station?',tr:'रेल्वे स्टेशन कुठे आहे?',pr:'REL-ve STESH-an KOO-the AA-he',morph:['रेल्वे स्टेशन = the station','कुठे = where','आहे = is']},
        {t:'chal',en:'Where is the bathroom?',tr:'स्नानगृह कुठे आहे?',pr:'SHNA-an-grih KOO-the AA-he',morph:['स्नानगृह = the bathroom','कुठे = where','आहे = is']},
        {t:'say',text:'<span class="inline-tr">उजवीकडे</span> and <span class="inline-tr">डावीकडे</span> tell you the turn. \'Go straight\' is <span class="inline-tr">सरळ जा</span>.',tr:'सरळ जा'},
        {t:'chal',en:'Go straight',tr:'सरळ जा',pr:'SA-ral JAA',morph:['सरळ = straight','जा = go']}
      ],
      blocks:['<code>कुठे आहे?</code> = where is it?','<code>उजवीकडे</code> / <code>डावीकडे</code> = right / left','<code>सरळ</code> = straight'] },
    { id:7, title:'Questions & "do you have?"', focus:'काय · कोण · तुमच्याकडे … आहे का?',
      steps:[
        {t:'say',text:'Question words come first: <span class="inline-tr">काय</span> (what), <span class="inline-tr">कोण</span> (who), <span class="inline-tr">कुठे</span> (where), <span class="inline-tr">किती</span> (how much).',tr:'काय'},
        {t:'words',items:[{tr:'काय?',pr:'KAAY',en:'what?'},{tr:'कोण?',pr:'KON',en:'who?'},{tr:'कुठे?',pr:'KOO-the',en:'where?'},{tr:'किती?',pr:'KI-tee',en:'how much?'},{tr:'... आहे का?',pr:'... AA-he kaa',en:'... is it? (question ending)'}]},
        {t:'say',text:'A yes/no question ends in <span class="inline-tr">का</span>. To ask \'do you have…?\' use <span class="inline-tr">तुमच्याकडे … आहे का?</span>.',tr:'तुमच्याकडे ... आहे का?'},
        {t:'chal',en:'Do you have water?',tr:'तुमच्याकडे पाणी आहे का?',pr:'too-my-CHA-ka-de PAA-nee AA-he kaa',morph:['तुमच्याकडे = do you have','पाणी = water','आहे का = is it?']},
        {t:'chal',en:'Do you have tea?',tr:'तुमच्याकडे चहा आहे का?',pr:'too-my-CHA-ka-de CHA-haa AA-he kaa',morph:['तुमच्याकडे = do you have','चहा = tea','आहे का = is it?']}
      ],
      blocks:['<code>काय</code> / <code>कोण</code> / <code>कुठे</code> = what / who / where','<code>तुमच्याकडे … आहे का?</code> = do you have …?','<code>का</code> = question ending'] },
    { id:8, title:'Family & people', focus:'कुटुंब · आई · बाबा · मित्र',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">कुटुंब</span> (family), <span class="inline-tr">आई</span> (mother), <span class="inline-tr">बाबा</span> (father), <span class="inline-tr">मित्र</span> (friend).',tr:'कुटुंब'},
        {t:'words',items:[{tr:'कुटुंब',pr:'koo-TOOMB',en:'family'},{tr:'आई',pr:'AA-ee',en:'mother'},{tr:'बाबा',pr:'BAA-baa',en:'father'},{tr:'भाऊ',pr:'bhaa-U',en:'brother'},{tr:'बहीण',pr:'BA-heen',en:'sister'},{tr:'मित्र',pr:'MIT-r',en:'friend',link:"≈ Hindi/Sanskrit mitra"}]},
        {t:'chal',en:'This is my family',tr:'हे माझं कुटुंब आहे',pr:'he MAA-zha koo-TOOMB AA-he',morph:['हे = this','माझं = my','कुटुंब = family','आहे = is']},
        {t:'say',text:'<span class="inline-tr">माझा</span> shows \'my\' for masculine nouns, <span class="inline-tr">माझं</span> for neuter. To say you have something, Marathi says \'my … is\' — no verb \'have\'.',tr:'माझा'},
        {t:'chal',en:'I have a friend',tr:'माझा मित्र आहे',pr:'MAA-zhaa MIT-r AA-he',morph:['माझा = my (masc)','मित्र = friend','आहे = is / exists']},
        {t:'chal',en:'I have a brother',tr:'माझा भाऊ आहे',pr:'MAA-zhaa bhaa-U AA-he',morph:['माझा = my (masc)','भाऊ = brother','आहे = is / exists']}
      ],
      blocks:['<code>कुटुंब</code> = family','<code>आई</code> / <code>बाबा</code> = mother / father','<code>माझा</code> = my'] },
    { id:9, title:'Time, days & weather', focus:'आज · उद्या · काल · पाऊस',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">आज</span>, tomorrow is <span class="inline-tr">उद्या</span>, yesterday is <span class="inline-tr">काल</span>.',tr:'आज'},
        {t:'words',items:[{tr:'आज',pr:'Aaj',en:'today'},{tr:'उद्या',pr:'UD-yaa',en:'tomorrow'},{tr:'काल',pr:'KAAL',en:'yesterday'},{tr:'आता',pr:'AA-ta',en:'now'},{tr:'किती वाजले?',pr:'KI-tee VAAJ-le',en:'what time is it?'},{tr:'पाऊस',pr:'PAA-us',en:'rain'}]},
        {t:'chal',en:'See you tomorrow',tr:'उद्या भेटू',pr:'UD-yaa bhe-TOO',morph:['उद्या = tomorrow','भेटू = we\'ll meet']},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">हवामान कसं आहे?</span> Then <span class="inline-tr">पाऊस पडत आहे</span> — it\'s raining.',tr:'पाऊस पडत आहे'},
        {t:'chal',en:'It\'s raining',tr:'पाऊस पडत आहे',pr:'PAA-us PA-dat AA-he',morph:['पाऊस = rain','पडत आहे = is falling']},
        {t:'chal',en:'It\'s very hot',tr:'खूप गरम आहे',pr:'khoop GA-ram AA-he',morph:['खूप = very','गरम = hot','आहे = is']}
      ],
      blocks:['<code>आज</code> / <code>उद्या</code> / <code>काल</code> = today / tomorrow / yesterday','<code>पाऊस</code> = rain','<code>किती वाजले?</code> = what time is it?'] },
    { id:10, title:'Small talk & your name', focus:'माझं नाव … आहे · तुझं नाव काय आहे?',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">माझं नाव … आहे</span> = my name is …, and <span class="inline-tr">तुम्हाला भेटून आनंद झाला</span> = pleased to meet you.',tr:'माझं नाव ... आहे'},
        {t:'chal',en:'My name is __NAME__',tr:'माझं नाव __NAME__ आहे',pr:'MAA-zha naav __NAME__ AA-he',morph:['माझं नाव = my name','__NAME__ = your name','आहे = is']},
        {t:'say',text:'To ask someone\'s name — informal: <span class="inline-tr">तुझं नाव काय आहे?</span> Formal: <span class="inline-tr">तुमचं नाव काय आहे?</span>.',tr:'तुझं नाव काय आहे?'},
        {t:'chal',en:'What\'s your name?',tr:'तुझं नाव काय आहे?',pr:'too-jha naav KAAY AA-he',morph:['तुझं = your (informal)','नाव = name','काय = what','आहे = is']},
        {t:'chal',en:'Pleased to meet you',tr:'तुम्हाला भेटून आनंद झाला',pr:'too-MHAA-la bhe-TOON AA-nand JHA-la',morph:['तुम्हाला = to you','भेटून = meeting','आनंद = joy']}
      ],
      blocks:['<code>माझं नाव … आहे</code> = my name is …','<code>तुझं नाव काय आहे?</code> = what\'s your name?','<code>आनंद झाला</code> = pleased (to meet you)'] },
    { id:11, title:'Health & emergency', focus:'मदत · डॉक्टर · रुग्णालय · समजत नाही',
      steps:[
        {t:'say',text:'The words that matter if you need help: <span class="inline-tr">मदत</span> (help), <span class="inline-tr">डॉक्टर</span> (doctor), <span class="inline-tr">रुग्णालय</span> (hospital).',tr:'मदत'},
        {t:'words',items:[{tr:'मदत!',pr:'MA-dat',en:'help!'},{tr:'डॉक्टर',pr:'DOK-tar',en:'the doctor',link:"≈ English doctor"},{tr:'रुग्णालय',pr:'roog-NAA-lay',en:'the hospital'},{tr:'औषध',pr:'AU-shadh',en:'medicine'},{tr:'मला समजत नाही',pr:'ma-LAA SAM-jat NAA-hee',en:'I don\'t understand'}]},
        {t:'chal',en:'Help!',tr:'मदत!',pr:'MA-dat',morph:['मदत = help']},
        {t:'chal',en:'I need help',tr:'मला मदत हवी आहे',pr:'ma-LAA ma-DAT ha-VEE AA-he',morph:['मला = to me','मदत = help','हवी आहे = I need (fem)']},
        {t:'say',text:'<span class="inline-tr">मला तब्येत बरी नाही</span> = I\'m not feeling well. <span class="inline-tr">डॉक्टरला घेऊन जा</span>... better to start with \'मला तब्येत बरी नाही\'.',tr:'मला तब्येत बरी नाही'},
        {t:'chal',en:'I\'m not feeling well',tr:'मला तब्येत बरी नाही',pr:'ma-LAA tab-YET ba-REE NAA-hee',morph:['मला = to me','तब्येत = health','बरी = fine (fem)','नाही = not']}
      ],
      blocks:['<code>मदत!</code> = help!','<code>डॉक्टर</code> = the doctor','<code>मला समजत नाही</code> = I don\'t understand'] },
    { id:12, title:'Tying it together', focus:'namaskār · हवं आहे · कुठे · किती',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolbox. This capstone uses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello, how are you?',tr:'नमस्कार, तू कसा आहेस?',pr:'na-mas-KAAR, too ka-SAA AA-hes',morph:['नमस्कार = hello','तू कसा आहेस? = how are you?']},
        {t:'chal',en:'I want water, please',tr:'मला पाणी हवं आहे, कृपया',pr:'ma-LAA PAA-nee ha-VAA AA-he, kri-pa-yaa',morph:['मला = to me','पाणी = water','हवं आहे = I want','कृपया = please']},
        {t:'chal',en:'Where is the station?',tr:'रेल्वे स्टेशन कुठे आहे?',pr:'REL-ve STESH-an KOO-the AA-he',morph:['रेल्वे स्टेशन = the station','कुठे = where','आहे = is']},
        {t:'chal',en:'How much is it?',tr:'किती आहे?',pr:'KI-tee AA-he',morph:['किती = how much','आहे = is']},
        {t:'chal',en:'Delicious! Thank you!',tr:'खूप छान! धन्यवाद!',pr:'khoop CHHAAN, DHAN-ya-vaad',morph:['खूप छान! = delicious!','धन्यवाद = thank you']}
      ],
      blocks:['You built: greetings, ordering, directions, prices, thanks — a full day out in Marathi.'] },
    { id:13, title:'Airport & tickets', focus:'विमानतळ · पारपत्र · तिकीट · गेट',
      steps:[
        {t:'say',text:'You have landed. The building is the <span class="inline-tr">विमानतळ</span>. Your document is a <span class="inline-tr">पारपत्र</span>.',tr:'विमानतळ'},
        {t:'words',items:[{tr:'विमानतळ',pr:'vi-MAAN-tal',en:'airport'},{tr:'पारपत्र',pr:'PAAR-pa-tra',en:'passport'},{tr:'तिकीट',pr:'TI-keet',en:'ticket'},{tr:'गेट',pr:'geyt',en:'gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'विमानतळ कुठे आहे?',pr:'vi-MAAN-tal KOO-the AA-he',morph:['विमानतळ = airport','कुठे आहे? = where is']},
        {t:'chal',en:'Here is my passport',tr:'हे माझं पारपत्र आहे',pr:'he MAA-zha PAAR-pa-tra AA-he',morph:['हे = this','माझं = my','पारपत्र = passport']},
        {t:'chal',en:'A ticket, please',tr:'एक तिकीट, कृपया',pr:'ek TI-keet, kri-pa-yaa',morph:['एक तिकीट = a ticket','कृपया = please']},
        {t:'chal',en:'Where is the gate?',tr:'गेट कुठे आहे?',pr:'geyt KOO-the AA-he',morph:['गेट = gate','कुठे आहे? = where is']}
      ],
      blocks:['<code>विमानतळ</code> = airport','<code>पारपत्र</code> = passport','<code>तिकीट</code> = ticket'] },
    { id:14, title:'The taxi', focus:'टॅक्सी · जायचं · हॉटेल · थांबा',
      steps:[
        {t:'say',text:'The driver is waiting. <span class="inline-tr">टॅक्सी</span> is the everyday word. Tell them <span class="inline-tr">मला हॉटेलला जायचं आहे</span>.',tr:'टॅक्सी'},
        {t:'words',items:[{tr:'टॅक्सी',pr:'TAK-see',en:'taxi'},{tr:'चालक',pr:'CHAA-lak',en:'driver'},{tr:'मला जायचं आहे',pr:'ma-LAA JAA-ya-cha AA-he',en:'I need to go'},{tr:'इथे थांबा',pr:'ee-the THAAM-baa',en:'stop here'}]},
        {t:'chal',en:'Taxi, please',tr:'टॅक्सी, कृपया',pr:'TAK-see, kri-pa-yaa',morph:['टॅक्सी = taxi','कृपया = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'मला हॉटेलला जायचं आहे',pr:'ma-LAA HO-tel-laa JAA-ya-cha AA-he',morph:['मला = to me','हॉटेलला = to the hotel','जायचं आहे = I need to go']},
        {t:'chal',en:'Stop here, please',tr:'इथे थांबा, कृपया',pr:'ee-the THAAM-baa, kri-pa-yaa',morph:['इथे = here','थांबा = stop','कृपया = please']},
        {t:'chal',en:'How much is it?',tr:'किती आहे?',pr:'KI-tee AA-he',morph:['किती = how much','आहे = is']}
      ],
      blocks:['<code>मला …ला जायचं आहे</code> = I need to go to …','<code>इथे थांबा</code> = stop here'] },
    { id:15, title:'The hotel', focus:'आरक्षण · खोली · किल्ली · रात्र',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">माझं आरक्षण आहे</span> — I have a reservation.',tr:'आरक्षण'},
        {t:'words',items:[{tr:'हॉटेल',pr:'HO-tel',en:'hotel'},{tr:'आरक्षण',pr:'aa-RAK-shan',en:'reservation'},{tr:'खोली',pr:'KHO-lee',en:'room'},{tr:'किल्ली',pr:'KIL-lee',en:'key'},{tr:'एक रात्र',pr:'ek RAA-tra',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'माझं आरक्षण आहे',pr:'MAA-zha aa-RAK-shan AA-he',morph:['माझं = my','आरक्षण = reservation','आहे = is']},
        {t:'chal',en:'A room for one night, please',tr:'एका रात्रीची खोली, कृपया',pr:'ek-aa RAA-tree-chee KHO-lee, kri-pa-yaa',morph:['एका रात्रीची = for one night','खोली = room','कृपया = please']},
        {t:'chal',en:'The key, please',tr:'किल्ली, कृपया',pr:'KIL-lee, kri-pa-yaa',morph:['किल्ली = key','कृपया = please']},
        {t:'chal',en:'Where is my room?',tr:'माझी खोली कुठे आहे?',pr:'MAA-zhee KHO-lee KOO-the AA-he',morph:['माझी खोली = my room','कुठे आहे? = where is']}
      ],
      blocks:['<code>आरक्षण</code> = reservation','<code>खोली</code> = room','<code>किल्ली</code> = key'] },
    { id:16, title:'Ask for help', focus:'समजत नाही · हळू · इंग्रजी',
      steps:[
        {t:'say',text:'When Marathi is too fast: <span class="inline-tr">हळू बोला, कृपया</span> — speak slowly, please.',tr:'हळू बोला'},
        {t:'words',items:[{tr:'हळू बोला',pr:'ha-LOO BO-laa',en:'speak slowly'},{tr:'पुन्हा',pr:'pun-HAA',en:'again'},{tr:'इंग्रजी',pr:'ing-gra-JEE',en:'English'},{tr:'मदत कराल का?',pr:'MA-dat ka-raal kaa',en:'can you help?'}]},
        {t:'chal',en:'I don\'t understand',tr:'मला समजत नाही',pr:'ma-LAA SAM-jat NAA-hee',morph:['मला = to me','समजत नाही = not understood']},
        {t:'chal',en:'Speak slowly, please',tr:'हळू बोला, कृपया',pr:'ha-LOO BO-laa, kri-pa-yaa',morph:['हळू = slowly','बोला = speak','कृपया = please']},
        {t:'chal',en:'Can you help me?',tr:'मला मदत कराल का?',pr:'ma-LAA MA-dat ka-raal kaa',morph:['मला = me','मदत कराल = will you help','का = question']},
        {t:'chal',en:'Do you speak English?',tr:'तुम्ही इंग्रजी बोलता का?',pr:'too-MHEE ing-gra-JEE BOL-taa kaa',morph:['तुम्ही = you','इंग्रजी = English','बोलता का? = do you speak?']}
      ],
      blocks:['<code>हळू बोला</code> = speak slowly','<code>तुम्ही इंग्रजी बोलता का?</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'cafe', title:'☕ At a café', emoji:'☕', turns:[
      {who:'You',tr:'नमस्कार! एक चहा, कृपया.',pr:'na-mas-KAAR, EK CHA-haa, kri-pa-yaa',en:'Hello! One tea, please.'},
      {who:'Server',tr:'लगेच. इथे की घेऊन जायचं?',pr:'LA-ged, EE-the kee ghe-OON JAA-y-chan',en:'Right away. For here or to go?'},
      {who:'You',tr:'घेऊन जायचं, धन्यवाद.',pr:'ghe-OON JAA-y-chan, DHAN-ya-vaad',en:'To go, thanks.'},
      {who:'Server',tr:'हे घ्या. आणखी काही?',pr:'he GH-YAA, AA-ne-kee KAA-hee',en:'Here you go. Anything else?'},
      {who:'You',tr:'नाही, धन्यवाद!',pr:'NAA-hee, DHAN-ya-vaad',en:'No, thanks!'}
    ]},
    { id:'train', title:'🚉 At the train station', emoji:'🚉', turns:[
      {who:'You',tr:'माफ करा, रेल्वे स्टेशन कुठे आहे?',pr:'MAAF ka-RAA, REL-ve STESH-an KOO-the AA-he',en:'Excuse me, where is the railway station?'},
      {who:'Local',tr:'तिथे, उजवीकडे.',pr:'TI-the, uj-VEE-ka-de',en:'It\'s there, on the right.'},
      {who:'You',tr:'धन्यवाद. मुंबईचा एक तिकीट, कृपया.',pr:'DHAN-ya-vaad, MOOM-bai-cha EK TI-keet, kri-pa-yaa',en:'Thanks. A ticket to Mumbai, please.'},
      {who:'Ticket',tr:'पंचाहत्तर रुपये. गाडी नऊ वाजता आहे.',pr:'pan-CHA-hat-tar ROOP-ye, GAA-dee nau VAAJ-ta AA-he',en:'Seventy-five rupees. The train leaves at nine.'}
    ]},
    { id:'restaurant', title:'🍛 At a restaurant', emoji:'🍛', turns:[
      {who:'Waiter',tr:'नमस्कार! तुमचं आरक्षण आहे का?',pr:'na-mas-KAAR, too-mcha AA-rkshan AA-he kaa',en:'Hello! Do you have a reservation?'},
      {who:'You',tr:'होय, दोन जणांसाठी.',pr:'HOY, DON ja-naa-SA-thee',en:'Yes, for two people.'},
      {who:'You',tr:'मेनू, कृपया.',pr:'MAY-noo, kri-pa-yaa',en:'The menu, please.'},
      {who:'You',tr:'मला भात आणि एक चहा हवं आहे.',pr:'ma-LAA bhaat AA-nee EK CHA-haa ha-VAA AA-he',en:'I\'d like rice and a tea.'},
      {who:'Waiter',tr:'छान निवड! भोजनाचा आस्वाद घ्या.',pr:'CHHAAN ni-VAD, bho-JA-na-cha aas-VAAD GH-YAA',en:'Excellent choice! Enjoy your meal.'}
    ]},
    { id:'shop', title:'🛍️ Shopping', emoji:'🛍️', turns:[
      {who:'You',tr:'हे किती आहे?',pr:'he KI-tee AA-he',en:'How much is this?'},
      {who:'Seller',tr:'तीस रुपये.',pr:'tees ROOP-ye',en:'Thirty rupees.'},
      {who:'You',tr:'खूप महाग आहे. मी हे घालून बघू का?',pr:'khoop ma-HAAG AA-he, mee he GHA-loon BA-ghoo kaa',en:'It\'s too expensive. Can I try it on?'},
      {who:'Seller',tr:'नक्की! तिथे फिटिंग रूम आहे.',pr:'NAK-kee, TI-the fit-ing room AA-he',en:'Of course! The fitting room is there.'},
      {who:'You',tr:'ठीक आहे, मी हे घेणार.',pr:'THEEK AA-he, mee he GHE-ner',en:'OK, I\'ll take it.'}
    ]}
  ],
  pocket: [
    {tr:'नमस्कार',pr:'na-mas-KAAR',en:'Hello',c:'Greetings'},
    {tr:'सुप्रभात',pr:'soo-pra-BHAAT',en:'Good morning',c:'Greetings'},
    {tr:'तू कसा आहेस?',pr:'too ka-SAA AA-hes',en:'How are you? (to a man)',c:'Greetings'},
    {tr:'मी ठीक आहे',pr:'mee THEEK AA-he',en:'I\'m fine',c:'Greetings'},
    {tr:'पुन्हा भेटू',pr:'poon-HAA bhe-TOO',en:'See you again',c:'Greetings'},
    {tr:'माझं नाव __NAME__ आहे',pr:'MAA-zha naav __NAME__ AA-he',en:'My name is __NAME__',c:'Greetings'},
    {tr:'कृपया',pr:'kri-pa-yaa',en:'Please',c:'Courtesy'},
    {tr:'धन्यवाद',pr:'DHAN-ya-vaad',en:'Thank you',c:'Courtesy'},
    {tr:'माफ करा',pr:'MAAF ka-RAA',en:'Sorry / excuse me',c:'Courtesy'},
    {tr:'होय',pr:'HOY',en:'Yes',c:'Courtesy'},
    {tr:'नाही',pr:'NAA-hee',en:'No',c:'Courtesy'},
    {tr:'एक',pr:'ek',en:'1',c:'Numbers'},
    {tr:'दोन',pr:'don',en:'2',c:'Numbers'},
    {tr:'तीन',pr:'teen',en:'3',c:'Numbers'},
    {tr:'चार',pr:'chaar',en:'4',c:'Numbers'},
    {tr:'पाच',pr:'paach',en:'5',c:'Numbers'},
    {tr:'दहा',pr:'da-HAA',en:'10',c:'Numbers'},
    {tr:'पाणी',pr:'PAA-nee',en:'water',c:'Food'},
    {tr:'चहा',pr:'CHA-haa',en:'tea',c:'Food'},
    {tr:'भात',pr:'bhaat',en:'rice',c:'Food'},
    {tr:'पोळी',pr:'po-LEE',en:'flatbread',c:'Food'},
    {tr:'मला पाणी हवं आहे',pr:'ma-LAA PAA-nee ha-VAA AA-he',en:'I want water',c:'Food'},
    {tr:'कुठे आहे?',pr:'KOO-the AA-he',en:'Where is it?',c:'Directions'},
    {tr:'उजवीकडे',pr:'uj-VEE-ka-de',en:'to the right',c:'Directions'},
    {tr:'डावीकडे',pr:'daa-VEE-ka-de',en:'to the left',c:'Directions'},
    {tr:'रेल्वे स्टेशन',pr:'REL-ve STESH-an',en:'the railway station',c:'Directions'},
    {tr:'किती आहे?',pr:'KI-tee AA-he',en:'How much is it?',c:'Shopping'},
    {tr:'हे खूप महाग आहे',pr:'he khoop ma-HAAG AA-he',en:'This is too expensive',c:'Shopping'},
    {tr:'मला हे हवं आहे',pr:'ma-LAA he ha-VAA AA-he',en:'I want this',c:'Shopping'},
    {tr:'मदत!',pr:'MA-dat',en:'Help!',c:'Emergency'},
    {tr:'डॉक्टर',pr:'DOK-tar',en:'Doctor',c:'Emergency'},
    {tr:'मला समजत नाही',pr:'ma-LAA SAM-jat NAA-hee',en:'I don\'t understand',c:'Emergency'},
    {tr:'मला मदत हवी आहे',pr:'ma-LAA ma-DAT ha-VEE AA-he',en:'I need help',c:'Emergency'},
    {tr:'आज',pr:'Aaj',en:'today',c:'Time'},
    {tr:'उद्या',pr:'UD-yaa',en:'tomorrow',c:'Time'},
    {tr:'किती वाजले?',pr:'KI-tee VAAJ-le',en:'What time is it?',c:'Time'},
    {tr:'विमानतळ',pr:'vi-MAAN-tal',en:'airport',c:'Travel'},
    {tr:'पारपत्र',pr:'PAAR-pa-tra',en:'passport',c:'Travel'},
    {tr:'मला हॉटेलला जायचं आहे',pr:'ma-LAA HO-tel-laa JAA-ya-cha AA-he',en:'I want to go to the hotel',c:'Travel'},
    {tr:'माझं आरक्षण आहे',pr:'MAA-zha aa-RAK-shan AA-he',en:'I have a reservation',c:'Travel'},
    {tr:'हळू बोला, कृपया',pr:'ha-LOO BO-laa, kri-pa-yaa',en:'Speak slowly, please',c:'Travel'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Shopping','Emergency','Time', 'Travel'],
  culture: [
    {icon:'🙏',title:'Namaskar: one word, every situation',body:'Fold your hands and say नमस्कार for hello, goodbye, thank-you and sorry. It is respectful, universal and works any time of day — a handshake is fine too, but namaskar is the warm default.'},
    {icon:'☕',title:'Chai is the heart of hospitality',body:'Marathi homes and cafés revolve around गरम चहा — hot, milky, spiced tea. If someone offers you chai, accepting is polite; saying "एक चहा" (one tea) is a great first phrase to use.'},
    {icon:'🍽️',title:'Eating with your hands',body:'In Maharashtra it is normal to eat भात-पोळी with your right hand, using your fingers to mix and scoop. It is considered the most natural way to eat — and there\'s no shame in asking for a fork.'},
    {icon:'🚉',title:'The auto-rickshaw',body:'Auto-rickshaws (रिक्षा) are the classic way to get around. The meter is official, but many drivers negotiate a fixed fare first — agree on the price before you get in, and ask \'किती आहे?\' (how much).'},
    {icon:'📱',title:'Hindi & English everywhere',body:'Signs are often in Marathi and English, and most city folk speak Hindi or English too. But Marathi is a matter of local pride — a नमस्कार and \'धन्यवाद\' go a long way in Maharashtra.'},
    {icon:'🗣️',title:'A little Marathi opens doors',body:'Marathi speakers light up when visitors try their language. Effort beats perfection. Even one correct word shows real respect, and people will slow down and help you.'}
  ],
  sounds: [
    {l:'ळ',say:'an "l" said with the tongue tip curled back and up — Marathi\'s most distinctive sound',ex:'पोळी = po-LEE · मराठी = ma-ra-THEE',voice:'पोळी'},
    {l:'ठ',say:'a hard "t" made with a curled-back tongue plus a puff of breath',ex:'ठीक = THEEK (okay)',voice:'ठीक'},
    {l:'ख',say:'a "k" with a strong puff of breath',ex:'खूप = KHOOP (very)',voice:'खूप'},
    {l:'घ',say:'a "g" with a strong puff of breath',ex:'घर = GHAR (house)',voice:'घर'},
    {l:'ं',say:'the anusvāra — a soft nasal "ng" hum after a vowel',ex:'रंग = RUNG (colour)',voice:'रंग'},
    {l:'श',say:'a soft "sh" like in "shoe"',ex:'शाळा = SHA-la (school)',voice:'शाळा'},
    {l:'ष',say:'a harder, more curled-back "sh" than श',ex:'राष्ट्र = RAHSH-tra (nation)',voice:'राष्ट्र'},
    {l:'ऋ',say:'a vowelled "r" said from the back of the mouth, like a rolled "ri"',ex:'ऋषी = RI-shee (sage)',voice:'ऋषी'}
  ],
  resources: [
    {icon:'🗣️',t:'Learn Marathi with subtitles',d:'Real conversation videos with native speakers — ideal for hearing natural spoken Marathi.',q:'learn Marathi conversation for beginners'},
    {icon:'🐢',t:'Slow Marathi for beginners',d:'Clear, slow lessons built up from zero — perfect for absolute beginners.',q:'slow Marathi for beginners'},
    {icon:'📚',t:'Marathi grammar, made simple',d:'Short explainers of the -to/-te/-te ending pattern and word order.',q:'Marathi grammar basics'},
    {icon:'💬',t:'Daily Marathi phrases',d:'Everyday phrases and small talk you can use straight away.',q:'daily Marathi phrases'},
    {icon:'🎧',t:'Marathi songs & stories',d:'Songs, rhymes and stories build rhythm and memory — great for a walk.',q:'Marathi songs for kids learning'}
  ]
};
