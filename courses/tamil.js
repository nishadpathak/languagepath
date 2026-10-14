/* ---- tamil ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["tamil"] = {
  name: 'Tamil',
  flag: '🇮🇳',
  tts: 'ta-IN',
  dir: 'ltr',
  native: 'தமிழ்',
  soundTitle: 'Tamil sounds & spelling',
  soundIntro: 'Tamil has a few consonants English doesn\'t — you\'ll curl your tongue back for them. Learn this once and you\'ll hear (and say) the difference.',
  grammar: '<p>Tamil is written in its own alphabet and read left to right. The word order is <b>subject–object–verb</b>: we say \'I water want\', not \'I want water\'. There\'s no word for \'a\' or \'the\', and verbs don\'t change for gender — so <i>எனக்கு தண்ணீர் வேண்டும்</i> (\'I want water\') is one tidy pattern. Vowels come in short and long pairs; the long ones are stretched, like <i>அ</i> vs <i>ஆ</i>.</p>',
  bridges: '<div class="note">🇬🇧 <b>English.</b> Tamil has borrowed a handful of everyday words you\'ll hear instantly: பில் (bill), டீ (tea), காபி (coffee), ஹோட்டல் (hotel), பேருந்து (bus).</div><div class="note">🇮🇳 <b>Indian languages.</b> If you already speak another Indian language you\'ll recognise a few spoken words, but Tamil is a Dravidian language — its script and grammar are really its own.</div>',
  lessons: [
    { id:1, title:'Greetings', focus:'வணக்கம் · எப்படி இருக்கிறீர்கள்? · நன்றி',
      steps:[
        {t:'say',text:'Start with the one word you\'ll use all day: <span class="inline-tr">வணக்கம்</span> — hello. Say it out loud.',tr:'வணக்கம்'},
        {t:'words',items:[{tr:'வணக்கம்',pr:'vuh-NAH-kum',en:'hello'},{tr:'நன்றி',pr:'NUN-dri',en:'thank you'},{tr:'ஆம்',pr:'ahm',en:'yes'},{tr:'இல்லை',pr:'ee-LEY',en:'no'},{tr:'சரி',pr:'suh-REE',en:'OK'}]},
        {t:'chal',en:'Hello, thank you',tr:'வணக்கம், நன்றி',pr:'vuh-NAH-kum, NUN-dri',morph:['வணக்கம் = hello','நன்றி = thank you']},
        {t:'say',text:'To ask how someone is: <span class="inline-tr">எப்படி இருக்கிறீர்கள்?</span> The reply is <span class="inline-tr">நன்றாக இருக்கிறேன்</span> — I\'m fine, thanks.',tr:'எப்படி இருக்கிறீர்கள்?'},
        {t:'words',items:[{tr:'எப்படி இருக்கிறீர்கள்?',pr:'EH-pah-dee ee-ru-kee-REER-kul',en:'How are you?'},{tr:'நன்றாக இருக்கிறேன்',pr:'NUN-dra-ga ee-ru-kee-REHN',en:'I\'m fine, thanks'},{tr:'போய் வருகிறேன்',pr:'poy vuh-ru-guh-GEE-rehn',en:'goodbye'}]},
        {t:'chal',en:'Hello, how are you?',tr:'வணக்கம், எப்படி இருக்கிறீர்கள்?',pr:'vuh-NAH-kum, EH-pah-dee ee-ru-kee-REER-kul',morph:['வணக்கம் = hello','எப்படி இருக்கிறீர்கள்? = how are you?']}
      ],
      blocks:['<code>வணக்கம்</code> = hello','<code>நன்றி</code> = thank you','<code>ஆம்</code> / <code>இல்லை</code> = yes / no','<code>எப்படி இருக்கிறீர்கள்?</code> = how are you?'] },
    { id:2, title:'Polite phrases', focus:'தயவு செய்து · நன்றி · மன்னிக்கவும்',
      steps:[
        {t:'say',text:'The magic words: <span class="inline-tr">தயவு செய்து</span> (please) and <span class="inline-tr">நன்றி</span> (thank you).',tr:'தயவு செய்து'},
        {t:'words',items:[{tr:'தயவு செய்து',pr:'THY-vu SAY-thu',en:'please'},{tr:'நன்றி',pr:'NUN-dri',en:'thank you'},{tr:'மன்னிக்கவும்',pr:'muh-NEE-kuh-vum',en:'excuse me / sorry'},{tr:'சரி',pr:'suh-REE',en:'OK'},{tr:'பரவாயில்லை',pr:'puh-ru-vuh-VY-ley',en:'no problem / you\'re welcome'}]},
        {t:'chal',en:'A coffee, please',tr:'ஒரு காபி, தயவுசெய்து',pr:'oh-ru KAH-bee, THY-vu-SAY-thu',morph:['ஒரு = a / one','காபி = coffee','தயவுசெய்து = please']},
        {t:'say',text:'To get someone\'s attention or say sorry: <span class="inline-tr">மன்னிக்கவும்</span>. For \'you\'re welcome\', Tamil usually says <span class="inline-tr">பரவாயில்லை</span> — no problem.',tr:'மன்னிக்கவும்'},
        {t:'chal',en:'Excuse me, thank you',tr:'மன்னிக்கவும், நன்றி',pr:'muh-NEE-kuh-vum, NUN-dri',morph:['மன்னிக்கவும் = excuse me','நன்றி = thank you']}
      ],
      blocks:['<code>தயவு செய்து</code> = please','<code>நன்றி</code> = thank you','<code>மன்னிக்கவும்</code> = excuse me / sorry','<code>பரவாயில்லை</code> = you\'re welcome'] },
    { id:3, title:'Numbers 1–10', focus:'ஒன்று · இரண்டு · மூன்று · பத்து',
      steps:[
        {t:'say',text:'Numbers are the fastest win. Listen and repeat: <span class="inline-tr">ஒன்று, இரண்டு, மூன்று</span>.',tr:'ஒன்று'},
        {t:'words',items:[{tr:'ஒன்று',pr:'ON-dru',en:'1'},{tr:'இரண்டு',pr:'ee-RUN-du',en:'2'},{tr:'மூன்று',pr:'MOON-dru',en:'3'},{tr:'நான்கு',pr:'NAHN-ku',en:'4'},{tr:'ஐந்து',pr:'EYN-du',en:'5'},{tr:'ஆறு',pr:'AH-ru',en:'6'},{tr:'ஏழு',pr:'AY-zhu',en:'7'},{tr:'எட்டு',pr:'ET-tu',en:'8'},{tr:'ஒன்பது',pr:'ON-ba-thu',en:'9'},{tr:'பத்து',pr:'PUT-tu',en:'10'}]},
        {t:'chal',en:'Two coffees, please',tr:'இரண்டு காபி, தயவுசெய்து',pr:'ee-RUN-du KAH-bee, THY-vu-SAY-thu',morph:['இரண்டு = two','காபி = coffee','தயவுசெய்து = please']},
        {t:'say',text:'To ask the price: <span class="inline-tr">இது எவ்வளவு?</span> — how much is this? A life-saver when shopping.',tr:'இது எவ்வளவு?'},
        {t:'chal',en:'How much is this?',tr:'இது எவ்வளவு?',pr:'EE-du ev-VUH-luh-vu',morph:['இது = this','எவ்வளவு? = how much?']},
        {t:'chal',en:'It\'s five rupees',tr:'ஐந்து ரூபாய்',pr:'EYN-du ROO-by',morph:['ஐந்து = five','ரூபாய் = rupees'],link:'≈ English rupee'}
      ],
      blocks:['ஒன்று … ஐந்து = 1–5','ஆறு … பத்து = 6–10','<code>இது எவ்வளவு?</code> = how much is this?'] },
    { id:4, title:'"I want" — எனக்கு … வேண்டும்', focus:'எனக்கு … வேண்டும் · வேண்டாம்',
      steps:[
        {t:'say',text:'<span class="inline-tr">எனக்கு</span> = to me / I. It starts the \'I want\' pattern.',tr:'எனக்கு'},
        {t:'say',text:'Add <span class="inline-tr">வேண்டும்</span> (I want / it\'s needed) at the end: <b>எனக்கு தண்ணீர் வேண்டும்</b> = I want water.',tr:'வேண்டும்'},
        {t:'words',items:[{tr:'எனக்கு தண்ணீர் வேண்டும்',pr:'e-NUH-ku tuh-NEER VEEN-dum',en:'I want water'},{tr:'தண்ணீர்',pr:'tuh-NEER',en:'water'},{tr:'சாப்பாடு',pr:'sah-PAH-du',en:'food'},{tr:'காபி',pr:'KAH-bee',en:'coffee'},{tr:'வேண்டாம்',pr:'VEEN-dam',en:'I don\'t want / no thanks'}]},
        {t:'chal',en:'I want water',tr:'எனக்கு தண்ணீர் வேண்டும்',pr:'e-NUH-ku tuh-NEER VEEN-dum',morph:['எனக்கு = I / to me','தண்ணீர் = water','வேண்டும் = I want']},
        {t:'chal',en:'I want coffee',tr:'எனக்கு காபி வேண்டும்',pr:'e-NUH-ku KAH-bee VEEN-dum',morph:['எனக்கு = I','காபி = coffee','வேண்டும் = I want']},
        {t:'chal',en:'No, thank you',tr:'வேண்டாம், நன்றி',pr:'VEEN-dam, NUN-dri',morph:['வேண்டாம் = no thanks','நன்றி = thank you']}
      ],
      blocks:['<code>எனக்கு … வேண்டும்</code> = I want …','<code>வேண்டாம்</code> = no thanks'] },
    { id:5, title:'Food & drink', focus:'தண்ணீர் · காபி · டீ · பில்',
      steps:[
        {t:'say',text:'Food basics: <span class="inline-tr">தண்ணீர்</span> (water), <span class="inline-tr">காபி</span> (coffee), <span class="inline-tr">டீ</span> (tea).',tr:'தண்ணீர்'},
        {t:'words',items:[{tr:'தண்ணீர்',pr:'tuh-NEER',en:'water'},{tr:'காபி',pr:'KAH-bee',en:'coffee',link:'≈ English coffee'},{tr:'டீ',pr:'TEE',en:'tea',link:'≈ English tea'},{tr:'சாப்பாடு',pr:'sah-PAH-du',en:'food'},{tr:'அரிசி',pr:'uh-REE-see',en:'rice'},{tr:'பில்',pr:'BIL',en:'the bill',link:'≈ English bill'}]},
        {t:'chal',en:'Water and food, please',tr:'தண்ணீரும் சாப்பாடும்',pr:'tuh-NEER-um sah-PAH-dom',morph:['தண்ணீர் = water','-ம் = and','சாப்பாடு = food']},
        {t:'say',text:'To say something tastes great: <span class="inline-tr">சுவையாக இருக்கிறது!</span> — it\'s delicious.',tr:'சுவையாக இருக்கிறது'},
        {t:'chal',en:'It\'s delicious!',tr:'சுவையாக இருக்கிறது!',pr:'suh-vuy-YA-ga ee-ru-kee-ru-DUH',morph:['சுவையாக = tasty','இருக்கிறது = it is']},
        {t:'chal',en:'The bill, please',tr:'பில், தயவுசெய்து',pr:'BIL, THY-vu SAY-thu',morph:['பில் = the bill','தயவுசெய்து = please']}
      ],
      blocks:['<code>தண்ணீர்</code>, <code>காபி</code>, <code>டீ</code> = water, coffee, tea','<code>சாப்பாடு</code> = food','<code>பில்</code> = the bill','<code>சுவையாக இருக்கிறது</code> = it\'s delicious'] },
    { id:6, title:'Directions', focus:'எங்கே? · வலது · இடது · நேராக',
      steps:[
        {t:'say',text:'The most useful question in a new city: <span class="inline-tr">எங்கே?</span> — where?',tr:'எங்கே?'},
        {t:'words',items:[{tr:'எங்கே?',pr:'ehn-GAY',en:'where?'},{tr:'வலது',pr:'vuh-luh-DUH',en:'right'},{tr:'இடது',pr:'ee-duh-DUH',en:'left'},{tr:'நேராக',pr:'NAY-ra-ga',en:'straight ahead'},{tr:'ரயில் நிலையம்',pr:'ruh-yil nuh-luh-YUM',en:'railway station',link:'≈ English rail'},{tr:'கடை',pr:'kuh-DEH',en:'shop'}]},
        {t:'chal',en:'Where is the station?',tr:'ரயில் நிலையம் எங்கே?',pr:'ruh-yil nuh-luh-YUM ehn-GAY',morph:['ரயில் நிலையம் = railway station','எங்கே? = where?']},
        {t:'chal',en:'Where is the shop?',tr:'கடை எங்கே?',pr:'kuh-DEH ehn-GAY',morph:['கடை = shop','எங்கே? = where?']},
        {t:'say',text:'Turn <span class="inline-tr">வலது</span> (right) or <span class="inline-tr">இடது</span> (left); go <span class="inline-tr">நேராக</span> (straight).',tr:'வலது'},
        {t:'chal',en:'Go straight, please',tr:'நேராகப் போங்கள்',pr:'NAY-ra-ga PO-ngul',morph:['நேராக = straight','போங்கள் = go (polite)']}
      ],
      blocks:['<code>எங்கே?</code> = where?','<code>வலது</code> / <code>இடது</code> = right / left','<code>நேராக</code> = straight ahead'] },
    { id:7, title:'Questions & "do you have…?"', focus:'உங்களிடம் … இருக்கிறதா? · என்ன? · எப்போது?',
      steps:[
        {t:'say',text:'To ask if someone has something: <span class="inline-tr">உங்களிடம் … இருக்கிறதா?</span> — do you have…?',tr:'உங்களிடம் … இருக்கிறதா?'},
        {t:'words',items:[{tr:'உங்களிடம் … இருக்கிறதா?',pr:'ung-ku-luh-DUM … ee-ru-kee-ru-DA',en:'do you have …?'},{tr:'என்ன?',pr:'EH-nna',en:'what?'},{tr:'யார்?',pr:'YAR',en:'who?'},{tr:'எப்போது?',pr:'EH-po-du',en:'when?'},{tr:'அறை',pr:'uh-REY',en:'room'}]},
        {t:'chal',en:'Do you have a room?',tr:'உங்களிடம் அறை இருக்கிறதா?',pr:'ung-ku-luh-DUM uh-REY ee-ru-kee-ru-DA',morph:['உங்களிடம் = with you','அறை = room','இருக்கிறதா? = is there?']},
        {t:'chal',en:'Do you have water?',tr:'உங்களிடம் தண்ணீர் இருக்கிறதா?',pr:'ung-ku-luh-DUM tuh-NEER ee-ru-kee-ru-DA',morph:['உங்களிடம் = with you','தண்ணீர் = water','இருக்கிறதா? = is there?']},
        {t:'say',text:'Short question words are handy: <span class="inline-tr">என்ன?</span> (what?), <span class="inline-tr">எப்போது?</span> (when?), <span class="inline-tr">எங்கே?</span> (where?).',tr:'என்ன?'},
        {t:'chal',en:'What is this?',tr:'இது என்ன?',pr:'EE-du EH-nna',morph:['இது = this','என்ன? = what?']}
      ],
      blocks:['<code>உங்களிடம் … இருக்கிறதா?</code> = do you have …?','<code>என்ன?</code> = what?','<code>எங்கே?</code> = where?'] },
    { id:8, title:'Family', focus:'அம்மா · அப்பா · குடும்பம் · நண்பர்',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">அம்மா</span> (mother), <span class="inline-tr">அப்பா</span> (father), <span class="inline-tr">குடும்பம்</span> (family).',tr:'அம்மா'},
        {t:'words',items:[{tr:'அம்மா',pr:'UH-mma',en:'mother',link:'≈ amma (Telugu/Kannada too)'},{tr:'அப்பா',pr:'UH-ppa',en:'father',link:'≈ appa (Telugu/Kannada too)'},{tr:'குடும்பம்',pr:'GU-duh-bum',en:'family'},{tr:'நண்பர்',pr:'NUN-pur',en:'friend'},{tr:'அண்ணன்',pr:'UHN-nun',en:'older brother'},{tr:'அக்கா',pr:'UK-ka',en:'older sister'}]},
        {t:'chal',en:'I have a family',tr:'எனக்கு குடும்பம் இருக்கிறது',pr:'e-NUH-ku GU-duh-bum ee-ru-kee-ru-DUH',morph:['எனக்கு = I have / to me','குடும்பம் = family','இருக்கிறது = there is']},
        {t:'say',text:'A friend is <span class="inline-tr">நண்பர்</span>. Tamil uses <b>-கள்</b> for plurals: நண்பர்கள் = friends.',tr:'நண்பர்'},
        {t:'chal',en:'This is my family',tr:'இது என் குடும்பம்',pr:'EE-du ehn GU-duh-bum',morph:['இது = this','என் = my','குடும்பம் = family']}
      ],
      blocks:['<code>அம்மா</code> / <code>அப்பா</code> = mother / father','<code>குடும்பம்</code> = family','<code>நண்பர்</code> = friend','<code>-கள்</code> = plural marker'] },
    { id:9, title:'Time, days & weather', focus:'இன்று · நாளை · வானிலை · மழை',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">இன்று</span>, tomorrow is <span class="inline-tr">நாளை</span>.',tr:'இன்று'},
        {t:'words',items:[{tr:'இன்று',pr:'IN-dru',en:'today'},{tr:'நாளை',pr:'NA-lei',en:'tomorrow'},{tr:'நேரம்',pr:'NEH-rum',en:'time'},{tr:'வானிலை',pr:'VAH-nuh-lei',en:'weather'},{tr:'மழை',pr:'muh-ZH-ley',en:'rain'},{tr:'வெயில்',pr:'VEY-il',en:'sun / heat'}]},
        {t:'chal',en:'See you tomorrow',tr:'நாளை சந்திப்போம்',pr:'NA-lei sun-TIP-po-om',morph:['நாளை = tomorrow','சந்திப்போம் = we\'ll meet']},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">வானிலை எப்படி இருக்கிறது?</span> — how is the weather? The reply: \'It\'s raining\'.',tr:'வானிலை எப்படி இருக்கிறது?'},
        {t:'chal',en:'It\'s raining',tr:'மழை பெய்கிறது',pr:'muh-ZH-ley pey-guh-ree-ru-DUH',morph:['மழை = rain','பெய்கிறது = it\'s falling']},
        {t:'chal',en:'What time is it?',tr:'நேரம் என்ன?',pr:'NEH-rum EH-nna',morph:['நேரம் = time','என்ன? = what?']}
      ],
      blocks:['<code>இன்று</code> / <code>நாளை</code> = today / tomorrow','<code>வானிலை</code> = weather','<code>மழை</code> = rain'] },
    { id:10, title:'Small talk & your name', focus:'என் பெயர் … · உங்கள் பெயர் என்ன? · மகிழ்ச்சி',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">என் பெயர் …</span> — my name is …, and <span class="inline-tr">மகிழ்ச்சி</span> — pleased to meet you.',tr:'என் பெயர் …'},
        {t:'chal',en:'My name is __NAME__',tr:'என் பெயர் __NAME__',pr:'ehn PAY-yer __NAME__',morph:['என் = my','பெயர் = name','__NAME__ = your name']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">உங்கள் பெயர் என்ன?</span>',tr:'உங்கள் பெயர் என்ன?'},
        {t:'chal',en:'What\'s your name?',tr:'உங்கள் பெயர் என்ன?',pr:'ung-kul PAY-yer EH-nna',morph:['உங்கள் = your','பெயர் = name','என்ன? = what?']},
        {t:'chal',en:'Pleased to meet you',tr:'மகிழ்ச்சி',pr:'muh-KIL-chee',morph:['மகிழ்ச்சி = pleasure / glad']},
        {t:'say',text:'To say where you\'re from, use <span class="inline-tr">நான்</span> (I) plus <span class="inline-tr">…இலிருந்து</span> (from): நான் இந்தியாவிலிருந்து — I\'m from India.',tr:'நான்'},
        {t:'chal',en:'I\'m from India',tr:'நான் இந்தியாவிலிருந்து',pr:'NAHN in-dee-YAH-vee-li-run-du',morph:['நான் = I','இந்தியா = India','இலிருந்து = from']}
      ],
      blocks:['<code>என் பெயர் __NAME__</code> = my name is …','<code>உங்கள் பெயர் என்ன?</code> = what\'s your name?','<code>மகிழ்ச்சி</code> = pleased to meet you'] },
    { id:11, title:'Emergency & health', focus:'உதவி! · மருத்துவர் · மருத்துவமனை · எனக்கு புரியவில்லை',
      steps:[
        {t:'say',text:'The most important words if you need help: <span class="inline-tr">உதவி!</span> (help!), <span class="inline-tr">மருத்துவர்</span> (doctor), <span class="inline-tr">மருத்துவமனை</span> (hospital).',tr:'உதவி!'},
        {t:'words',items:[{tr:'உதவி!',pr:'oo-tuh-VEE',en:'help!'},{tr:'மருத்துவர்',pr:'muh-rut-tuh-vur',en:'doctor'},{tr:'மருத்துவமனை',pr:'muh-rut-tuh-vuh-muh-ney',en:'hospital'},{tr:'எனக்கு புரியவில்லை',pr:'e-NUH-ku poo-ree-yuh-VIL-lei',en:'I don\'t understand'},{tr:'மருந்தகம்',pr:'muh-run-duh-gum',en:'pharmacy'}]},
        {t:'chal',en:'Help!',tr:'உதவி!',pr:'oo-tuh-VEE',morph:['உதவி = help']},
        {t:'chal',en:'I don\'t understand',tr:'எனக்கு புரியவில்லை',pr:'e-NUH-ku poo-ree-yuh-VIL-lei',morph:['எனக்கு = to me','புரியவில்லை = (it) is not understood']},
        {t:'say',text:'To say you\'re unwell: <span class="inline-tr">எனக்கு உடம்பு சரியில்லை</span> — I\'m not well.',tr:'எனக்கு உடம்பு சரியில்லை'},
        {t:'chal',en:'I need a doctor',tr:'எனக்கு மருத்துவர் வேண்டும்',pr:'e-NUH-ku muh-rut-tuh-vur VEEN-dum',morph:['எனக்கு = I','மருத்துவர் = doctor','வேண்டும் = I need']}
      ],
      blocks:['<code>உதவி!</code> = help!','<code>மருத்துவர்</code> = doctor','<code>எனக்கு புரியவில்லை</code> = I don\'t understand'] },
    { id:12, title:'Tying it together', focus:'எனக்கு … வேண்டும் · எங்கே? · சுவையாக · நன்றி',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolbox. This capstone uses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello, how are you?',tr:'வணக்கம், எப்படி இருக்கிறீர்கள்?',pr:'vuh-NAH-kum, EH-pah-dee ee-ru-kee-REER-kul',morph:['வணக்கம் = hello','எப்படி இருக்கிறீர்கள்? = how are you?']},
        {t:'chal',en:'I want a coffee, please',tr:'எனக்கு ஒரு காபி வேண்டும்',pr:'e-NUH-ku oh-ru KAH-bee VEEN-dum',morph:['எனக்கு = I','ஒரு காபி = a coffee','வேண்டும் = I want']},
        {t:'chal',en:'Where is the station?',tr:'ரயில் நிலையம் எங்கே?',pr:'ruh-yil nuh-luh-YUM ehn-GAY',morph:['ரயில் நிலையம் = railway station','எங்கே? = where?']},
        {t:'chal',en:'How much is this?',tr:'இது எவ்வளவு?',pr:'EE-du ev-VUH-luh-vu',morph:['இது = this','எவ்வளவு? = how much?']},
        {t:'chal',en:'It\'s delicious! Thank you!',tr:'சுவையாக இருக்கிறது! நன்றி!',pr:'suh-vuy-YA-ga ee-ru-kee-ru-DUH, NUN-dri',morph:['சுவையாக இருக்கிறது = it\'s delicious','நன்றி = thank you']}
      ],
      blocks:['You built: greetings, ordering, directions, prices, thanks — a full day out in Tamil.'] },
    { id:13, title:'Airport & tickets', focus:'விமான நிலையம் · கடவுச்சீட்டு · டிக்கெட்',
      steps:[
        {t:'say',text:'You have landed. The building is the <span class="inline-tr">விமான நிலையம்</span>. Your document is a <span class="inline-tr">கடவுச்சீட்டு</span>.',tr:'விமான நிலையம்'},
        {t:'words',items:[{tr:'விமான நிலையம்',pr:'vee-MAH-nah ni-lai-yum',en:'the airport'},{tr:'கடவுச்சீட்டு',pr:'kah-dah-voo-CHEET-too',en:'the passport'},{tr:'டிக்கெட்',pr:'TEE-ket',en:'the ticket'},{tr:'விமானம்',pr:'vee-MAH-nam',en:'the flight'},{tr:'வாயில்',pr:'VAH-yil',en:'the gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'விமான நிலையம் எங்கே?',pr:'vee-MAH-nah ni-lai-yum ehn-GAY',morph:['விமான நிலையம் = the airport','எங்கே? = where?']},
        {t:'chal',en:'Here is my passport',tr:'இதோ என் கடவுச்சீட்டு',pr:'EE-thoh ehn kah-dah-voo-CHEET-too',morph:['இதோ = here is','என் = my','கடவுச்சீட்டு = passport']},
        {t:'chal',en:'A ticket, please',tr:'ஒரு டிக்கெட், தயவுசெய்து',pr:'oh-ru TEE-ket, THY-vu-SAY-thu',morph:['ஒரு டிக்கெட் = a ticket','தயவுசெய்து = please']},
        {t:'chal',en:'Where is the gate?',tr:'வாயில் எங்கே?',pr:'VAH-yil ehn-GAY',morph:['வாயில் = the gate','எங்கே? = where?']}
      ],
      blocks:['<code>விமான நிலையம்</code> = airport','<code>கடவுச்சீட்டு</code> = passport','<code>டிக்கெட்</code> = ticket','<code>வாயில்</code> = gate'] },
    { id:14, title:'The taxi', focus:'டாக்ஸி · போக · ஹோட்டல் · நில்லுங்கள்',
      steps:[
        {t:'say',text:'The driver is waiting. <span class="inline-tr">டாக்ஸி</span> is the word you need. Tell them where to go with <span class="inline-tr">நான் போக வேண்டும்</span>.',tr:'டாக்ஸி'},
        {t:'words',items:[{tr:'டாக்ஸி',pr:'TAHK-see',en:'the taxi'},{tr:'ஓட்டுநர்',pr:'OH-ttu-nar',en:'the driver'},{tr:'நான் போக வேண்டும்',pr:'NAHN POH-gah VEEN-dum',en:'I want to go'},{tr:'இங்கே நில்லுங்கள்',pr:'ING-geh NIL-lung-gul',en:'stop here'}]},
        {t:'chal',en:'Taxi, please',tr:'டாக்ஸி, தயவுசெய்து',pr:'TAHK-see, THY-vu-SAY-thu',morph:['டாக்ஸி = taxi','தயவுசெய்து = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'நான் ஹோட்டலுக்கு போக வேண்டும்',pr:'NAHN HOH-tal-uk-ku POH-gah VEEN-dum',morph:['நான் = I','ஹோட்டலுக்கு = to the hotel','போக வேண்டும் = want to go']},
        {t:'chal',en:'Stop here, please',tr:'இங்கே நில்லுங்கள், தயவுசெய்து',pr:'ING-geh NIL-lung-gul, THY-vu-SAY-thu',morph:['இங்கே = here','நில்லுங்கள் = stop','தயவுசெய்து = please']},
        {t:'chal',en:'How much is it?',tr:'இது எவ்வளவு?',pr:'EE-du ev-VUH-luh-vu',morph:['இது = this','எவ்வளவு? = how much?']}
      ],
      blocks:['<code>நான் … போக வேண்டும்</code> = I want to go to …','<code>இங்கே நில்லுங்கள்</code> = stop here'] },
    { id:15, title:'The hotel', focus:'முன்பதிவு · அறை · சாவி · இரவு',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">எனக்கு முன்பதிவு இருக்கிறது</span> — I have a reservation.',tr:'முன்பதிவு'},
        {t:'words',items:[{tr:'ஹோட்டல்',pr:'HOH-tal',en:'the hotel'},{tr:'முன்பதிவு',pr:'moon-bah-thee-voo',en:'the reservation'},{tr:'அறை',pr:'uh-REY',en:'the room'},{tr:'சாவி',pr:'SAH-vee',en:'the key'},{tr:'ஒரு இரவு',pr:'oh-ru ee-RAH-voo',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'எனக்கு முன்பதிவு இருக்கிறது',pr:'e-NUH-ku moon-bah-thee-voo ee-ru-kee-ru-DUH',morph:['எனக்கு = I have','முன்பதிவு = a reservation','இருக்கிறது = there is']},
        {t:'chal',en:'A room for one night, please',tr:'ஒரு இரவுக்கு அறை, தயவுசெய்து',pr:'oh-ru ee-RAH-vuk-ku uh-REY, THY-vu-SAY-thu',morph:['ஒரு இரவுக்கு = for one night','அறை = a room','தயவுசெய்து = please']},
        {t:'chal',en:'The key, please',tr:'சாவி, தயவுசெய்து',pr:'SAH-vee, THY-vu-SAY-thu',morph:['சாவி = the key','தயவுசெய்து = please']},
        {t:'chal',en:'Where is my room?',tr:'என் அறை எங்கே?',pr:'ehn uh-REY ehn-GAY',morph:['என் அறை = my room','எங்கே? = where?']}
      ],
      blocks:['<code>முன்பதிவு</code> = reservation','<code>அறை</code> = room','<code>சாவி</code> = key'] },
    { id:16, title:'Ask for help', focus:'புரியவில்லை · மெதுவாக · ஆங்கிலம்',
      steps:[
        {t:'say',text:'When the language is too fast: <span class="inline-tr">மெதுவாக, தயவுசெய்து</span> — slower, please.',tr:'மெதுவாக, தயவுசெய்து'},
        {t:'words',items:[{tr:'மெதுவாக',pr:'meh-thoo-VAH-gah',en:'slower'},{tr:'மீண்டும்',pr:'MEEN-dum',en:'again'},{tr:'ஆங்கிலம்',pr:'AANG-gi-lam',en:'English'},{tr:'உதவ முடியுமா?',pr:'oo-thah-vah moo-dee-yoo-MAH',en:'can you help?'}]},
        {t:'chal',en:'I don\'t understand',tr:'எனக்கு புரியவில்லை',pr:'e-NUH-ku poo-ree-yuh-VIL-lei',morph:['எனக்கு = to me','புரியவில்லை = is not understood']},
        {t:'chal',en:'Slower, please',tr:'மெதுவாக, தயவுசெய்து',pr:'meh-thoo-VAH-gah, THY-vu-SAY-thu',morph:['மெதுவாக = slower','தயவுசெய்து = please']},
        {t:'chal',en:'Can you help me?',tr:'எனக்கு உதவ முடியுமா?',pr:'e-NUH-ku oo-thah-vah moo-dee-yoo-MAH',morph:['எனக்கு = to me','உதவ = help','முடியுமா? = can you?']},
        {t:'chal',en:'Do you speak English?',tr:'நீங்கள் ஆங்கிலம் பேசுவீர்களா?',pr:'NEENG-gul AANG-gi-lam PEH-soo-veer-gah-lah',morph:['நீங்கள் = you','ஆங்கிலம் = English','பேசுவீர்களா? = do you speak?']}
      ],
      blocks:['<code>மெதுவாக</code> = slower','<code>நீங்கள் ஆங்கிலம் பேசுவீர்களா?</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'cafe', title:'☕ At a café', emoji:'☕', turns:[
      {who:'You',tr:'வணக்கம்! எனக்கு ஒரு காபி வேண்டும்.',pr:'vuh-NAH-kum, e-NUH-ku oh-ru KAH-bee VEEN-dum',en:'Hello! I\'d like a coffee.'},
      {who:'Barista',tr:'இதோ. சர்க்கரை வேண்டுமா?',pr:'EE-thoh, sur-KUH-ruh VEEN-du-ma',en:'Here you go. Do you want sugar?'},
      {who:'You',tr:'வேண்டாம். நன்றி.',pr:'VEEN-dam, NUN-dri',en:'No, thanks.'},
      {who:'Barista',tr:'நன்றி! ஐம்பது ரூபாய்.',pr:'NUN-dri, EYE-m-ba-thu ROO-by',en:'Thank you! Fifty rupees.'},
      {who:'You',tr:'அருமை! நன்றி!',pr:'uh-RU-may, NUN-dri',en:'Great! Thanks!'}
    ]},
    { id:'transport', title:'🚉 At the station', emoji:'🚉', turns:[
      {who:'You',tr:'மன்னிக்கவும், ரயில் நிலையம் எங்கே?',pr:'muh-NEE-kuh-vum, ruh-yil nuh-luh-YUM ehn-GAY',en:'Excuse me, where is the railway station?'},
      {who:'Local',tr:'நேராகப் போங்கள், வலது பக்கம்.',pr:'NAY-ra-ga PO-ngul, vuh-luh-DUH puh-KUM',en:'Go straight, on the right.'},
      {who:'You',tr:'நன்றி. எனக்கு ஒரு டிக்கெட் வேண்டும்.',pr:'NUN-dri, e-NUH-ku oh-ru TEE-ket VEEN-dum',en:'Thanks. I need a ticket.'},
      {who:'Ticket',tr:'எங்கே போகிறீர்கள்?',pr:'ehn-GAY po-guh-REE-rul',en:'Where are you going?'},
      {who:'You',tr:'சென்னைக்கு.',pr:'CHEN-nye-kuh',en:'To Chennai.'}
    ]},
    { id:'restaurant', title:'🍛 At a restaurant', emoji:'🍛', turns:[
      {who:'Waiter',tr:'வணக்கம்! உங்களுக்கு என்ன வேண்டும்?',pr:'vuh-NAH-kum, ung-ku-LUH-kuh EH-nna VEEN-dum',en:'Hello! What would you like?'},
      {who:'You',tr:'எனக்கு சாப்பாடும் தண்ணீரும் வேண்டும்.',pr:'e-NUH-ku sah-PAH-dom tuh-NEER-um VEEN-dum',en:'I\'d like food and water.'},
      {who:'Waiter',tr:'இதோ. சாப்பிடுங்கள்.',pr:'EE-thoh, sah-PEE-du-ngul',en:'Here. Please eat.'},
      {who:'You',tr:'சுவையாக இருக்கிறது! பில் கொண்டு வாருங்கள்.',pr:'suh-vuy-YA-ga ee-ru-kee-ru-DUH, BIL kon-du VAH-rung-ku',en:'It\'s delicious! Please bring the bill.'},
      {who:'Waiter',tr:'நன்றி! இதோ பில்.',pr:'NUN-dri, EE-thoh BIL',en:'Thank you! Here\'s the bill.'}
    ]},
    { id:'shop', title:'🛍️ Shopping', emoji:'🛍️', turns:[
      {who:'You',tr:'இது எவ்வளவு?',pr:'EE-du ev-VUH-luh-vu',en:'How much is this?'},
      {who:'Seller',tr:'ஐம்பது ரூபாய்.',pr:'EYM-buh-du ROO-by',en:'Fifty rupees.'},
      {who:'You',tr:'இது ரொம்ப விலை!',pr:'EE-du ROM-buh vi-LEY',en:'This is too expensive!'},
      {who:'Seller',tr:'சரி, நாற்பது ரூபாய்.',pr:'suh-REE, NAH-ruh-du ROO-by',en:'OK, forty rupees.'},
      {who:'You',tr:'சரி, வாங்குகிறேன்.',pr:'suh-REE, VAHN-gu-guh-REHN',en:'OK, I\'ll take it.'}
    ]}
  ],
  pocket: [
    {tr:'வணக்கம்',pr:'vuh-NAH-kum',en:'Hello',c:'Greetings'},
    {tr:'போய் வருகிறேன்',pr:'poy vuh-ru-guh-GEE-rehn',en:'Goodbye',c:'Greetings'},
    {tr:'எப்படி இருக்கிறீர்கள்?',pr:'EH-pah-dee ee-ru-kee-REER-kul',en:'How are you?',c:'Greetings'},
    {tr:'நன்றாக இருக்கிறேன்',pr:'NUN-dra-ga ee-ru-kee-REHN',en:'I\'m fine, thanks',c:'Greetings'},
    {tr:'என் பெயர் __NAME__',pr:'ehn PAY-yer __NAME__',en:'My name is ...',c:'Greetings'},
    {tr:'தயவு செய்து',pr:'THY-vu SAY-thu',en:'Please',c:'Courtesy'},
    {tr:'நன்றி',pr:'NUN-dri',en:'Thank you',c:'Courtesy'},
    {tr:'மன்னிக்கவும்',pr:'muh-NEE-kuh-vum',en:'Excuse me / sorry',c:'Courtesy'},
    {tr:'ஆம்',pr:'ahm',en:'Yes',c:'Courtesy'},
    {tr:'இல்லை',pr:'ee-LEY',en:'No',c:'Courtesy'},
    {tr:'ஒன்று',pr:'ON-dru',en:'1',c:'Numbers'},
    {tr:'இரண்டு',pr:'ee-RUN-du',en:'2',c:'Numbers'},
    {tr:'மூன்று',pr:'MOON-dru',en:'3',c:'Numbers'},
    {tr:'ஐந்து',pr:'EYN-du',en:'5',c:'Numbers'},
    {tr:'பத்து',pr:'PUT-tu',en:'10',c:'Numbers'},
    {tr:'தண்ணீர்',pr:'tuh-NEER',en:'water',c:'Food'},
    {tr:'காபி',pr:'KAH-bee',en:'coffee',c:'Food'},
    {tr:'சாப்பாடு',pr:'sah-PAH-du',en:'food',c:'Food'},
    {tr:'பில்',pr:'BIL',en:'the bill',c:'Food'},
    {tr:'சுவையாக இருக்கிறது',pr:'suh-vuy-YA-ga ee-ru-kee-ru-DUH',en:'it\'s delicious',c:'Food'},
    {tr:'எங்கே?',pr:'ehn-GAY',en:'Where?',c:'Directions'},
    {tr:'வலது',pr:'vuh-luh-DUH',en:'right',c:'Directions'},
    {tr:'இடது',pr:'ee-duh-DUH',en:'left',c:'Directions'},
    {tr:'நேராக',pr:'NAY-ra-ga',en:'straight ahead',c:'Directions'},
    {tr:'ரயில் நிலையம்',pr:'ruh-yil nuh-luh-YUM',en:'railway station',c:'Directions'},
    {tr:'இது எவ்வளவு?',pr:'EE-du ev-VUH-luh-vu',en:'How much is this?',c:'Shopping'},
    {tr:'எனக்கு ... வேண்டும்',pr:'e-NUH-ku ... VEEN-dum',en:'I want ...',c:'Shopping'},
    {tr:'உங்களிடம் ... இருக்கிறதா?',pr:'ung-ku-luh-DUM ... ee-ru-kee-ru-DA',en:'Do you have ...?',c:'Shopping'},
    {tr:'உதவி!',pr:'oo-tuh-VEE',en:'Help!',c:'Emergency'},
    {tr:'மருத்துவர்',pr:'muh-rut-tuh-vur',en:'doctor',c:'Emergency'},
    {tr:'மருத்துவமனை',pr:'muh-rut-tuh-vuh-muh-ney',en:'hospital',c:'Emergency'},
    {tr:'எனக்கு புரியவில்லை',pr:'e-NUH-ku poo-ree-yuh-VIL-lei',en:'I don\'t understand',c:'Emergency'},
    {tr:'இன்று',pr:'IN-dru',en:'today',c:'Time'},
    {tr:'நாளை',pr:'NA-lei',en:'tomorrow',c:'Time'},
    {tr:'வானிலை',pr:'VAH-nuh-lei',en:'weather',c:'Time'},
    {tr:'மழை',pr:'muh-ZH-ley',en:'rain',c:'Time'},
    {tr:'விமான நிலையம்',pr:'vee-MAH-nah ni-lai-yum',en:'the airport',c:'Travel'},
    {tr:'கடவுச்சீட்டு',pr:'kah-dah-voo-CHEET-too',en:'the passport',c:'Travel'},
    {tr:'டிக்கெட்',pr:'TEE-ket',en:'the ticket',c:'Travel'},
    {tr:'டாக்ஸி',pr:'TAHK-see',en:'the taxi',c:'Travel'},
    {tr:'ஹோட்டல்',pr:'HOH-tal',en:'the hotel',c:'Travel'},
    {tr:'எனக்கு முன்பதிவு இருக்கிறது',pr:'e-NUH-ku moon-bah-thee-voo ee-ru-kee-ru-DUH',en:'I have a reservation',c:'Travel'},
    {tr:'மெதுவாக, தயவுசெய்து',pr:'meh-thoo-VAH-gah, THY-vu-SAY-thu',en:'Slower, please',c:'Travel'},
    {tr:'நீங்கள் ஆங்கிலம் பேசுவீர்களா?',pr:'NEENG-gul AANG-gi-lam PEH-soo-veer-gah-lah',en:'Do you speak English?',c:'Travel'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Shopping','Emergency','Time','Travel'],
  culture: [
    {icon:'🏵️',title:'Pongal, the harvest festival',body:'In mid-January, Tamil families celebrate <i>Pongal</i> by boiling new rice in sweet milk until it bubbles over — a wish for abundance. Expect kites in the sky and a day off school and work.'},
    {icon:'☕',title:'Filter coffee is a ritual',body:'Sweet, strong Tamil filter coffee (<i>காபி</i>) is served in a steel tumbler set. Poured back and forth to cool and froth it, it\'s the heart of every home and roadside stall.'},
    {icon:'🛕',title:'Temples are everywhere',body:'Huge, colourful <i>திருக்கோயில்</i> temples shape daily life. You\'ll remove your shoes, walk clockwise and often see priests and musicians — dress modestly and be respectful.'},
    {icon:'🍛',title:'Eating with your hands',body:'A traditional <i>சாப்பாடு</i> means rice on a banana leaf eaten with your right hand, mixing in dhal, sambar and curd. It\'s skilful and delicious — watch a local first.'},
    {icon:'🎬',title:'Tamil cinema rules',body:'Kollywood (Chennai\'s film industry) is huge and deeply loved. Songs, dance and drama — and a deep pride in the Tamil language — travel far beyond Tamil Nadu.'},
    {icon:'🙏',title:'வணக்கம் opens every door',body:'The palm-together greeting <i>வணக்கம்</i> works for hello and goodbye. A warm attempt at Tamil is always appreciated and often rewarded with a smile.'}
  ],
  sounds: [
    {l:'ழ்',say:'the tricky one — a sound between "r" and "l", tongue curled back',ex:'மழை = muh-ZH-ley (rain)',voice:'மழை'},
    {l:'ள்',say:'retroflex "l", tongue curled back (softer than English l)',ex:'நாள் = nuh-LL (day)',voice:'நாள்'},
    {l:'ற்',say:'a rolled / tapped "r" like the Spanish r',ex:'அறை = uh-RY (room)',voice:'அறை'},
    {l:'ன்',say:'alveolar "n" with the tongue at the front (not retroflex)',ex:'நான் = NAHN (I)',voice:'நான்'},
    {l:'ண்',say:'retroflex "n", tongue curled back',ex:'கண் = kuhn (eye)',voice:'கண்'},
    {l:'ர்',say:'a soft "r" like the flapped r in American "butter"',ex:'பெயர் = PAY-yer (name)',voice:'பெயர்'},
    {l:'ல்',say:'regular "l", like English l',ex:'பால் = PAHL (milk)',voice:'பால்'},
    {l:'ந்',say:'regular dental "n", like English n',ex:'நன்றி = NUN-dri (thank you)',voice:'நன்றி'}
  ],
  resources: [
    {icon:'🗣️',t:'Tamil for absolute beginners',d:'Start from zero: the script, the sounds and your first greetings.',q:'learn Tamil for beginners'},
    {icon:'🐢',t:'Spoken Tamil for daily life',d:'Real, natural conversations and everyday phrases for living in Tamil.',q:'spoken Tamil lessons for beginners'},
    {icon:'📚',t:'Tamil letters & writing',d:'Learn the vowels and consonants and how they join into words.',q:'Tamil alphabet letters writing'},
    {icon:'🎬',t:'Tamil songs with a story',d:'Watch with subtitles and pick up the rhythm and emotion of the language.',q:'Tamil hit songs with lyrics subtitles'},
    {icon:'💬',t:'Tamil culture & travel',d:'Get to know the people, festivals and food behind the phrases.',q:'Tamil Nadu culture and traditions'}
  ]
};
