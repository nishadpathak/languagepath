/* ---- burmese ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["burmese"] = {
  name: 'Burmese',
  flag: '🇲🇲',
  tts: 'my-MM',
  dir: 'ltr',
  native: 'မြန်မာ',
  soundTitle: 'Burmese sounds, tones & the round script',
  soundIntro: 'Burmese is tonal — the pitch of a syllable changes its meaning, and the script is a circle of rounded letters. Master the open vowels and you can read any word aloud.',
  grammar: '<p>Burmese is tonal: every syllable carries one of three tones (low, high, creaky). Word order is <b>Subject–Object–Verb</b>, so the verb comes last. Verbs don\'t change for the tense the way English ones do — words like <i>ဒီနေ့</i> (today) or context tell you when. Politeness particles go at the end: <b>ပါ</b> makes a sentence polite. <b>ငါ</b> is intimate \'I\', while <b>ကျွန်တော်</b> (men) and <b>ကျွန်မ</b> (women) are polite \'I\'.</p>',
  bridges: '<div class="note">🇬🇧 <b>English.</b> Burmese borrows plenty of English words: <b>ဟိုတယ်</b> (hotel), <b>တက္ကစီ</b> (taxi), <b>ကော်ဖီ</b> (coffee), <b>ဘတ်စ်ကား</b> (bus). You\'ll meet them in the dialogues.</div><div class="note">🎧 <b>Tones first.</b> A wrong tone changes the meaning. Listen closely to the audio and copy the pitch, not just the spelling — it\'s the fastest way to be understood.</div>',
  lessons: [
    { id:1, title:'Greetings & being polite', focus:'မင်္ဂလာပါ · နေကောင်းလား · ကျေးဇူးပါ',
      steps:[
        {t:'say',text:'Start with the first word you\'ll use: <span class="inline-tr">မင်္ဂလာပါ</span> — hello. Say it out loud.',tr:'မင်္ဂလာပါ'},
        {t:'words',items:[{tr:'မင်္ဂလာပါ',pr:'min-gah-lah-bah',en:'hello'},{tr:'နေကောင်းလား',pr:'neh-kaung-lah',en:'how are you?'},{tr:'နေကောင်းပါတယ်',pr:'neh-kaung-ba-deh',en:'I\'m fine'},{tr:'သွားတော့မယ်',pr:'thwa-daw-meh',en:'goodbye'},{tr:'ကျေးဇူးပါ',pr:'kya-zu-ba',en:'thanks'}]},
        {t:'chal',en:'Hello!',tr:'မင်္ဂလာပါ',pr:'min-gah-lah-bah',morph:['မင်္ဂလာပါ = hello']},
        {t:'say',text:'To ask how someone is: <span class="inline-tr">နေကောင်းလား?</span> The reply is <span class="inline-tr">နေကောင်းပါတယ်</span> — I\'m fine.',tr:'နေကောင်းလား?'},
        {t:'chal',en:'Hello, how are you?',tr:'မင်္ဂလာပါ၊ နေကောင်းလား',pr:'min-gah-lah-bah, neh-kaung-lah',morph:['မင်္ဂလာပါ = hello','နေကောင်းလား = how are you?']},
        {t:'chal',en:'I\'m fine, thanks',tr:'နေကောင်းပါတယ်, ကျေးဇူးပါ',pr:'neh-kaung-ba-deh, kya-zu-ba',morph:['နေကောင်းပါတယ် = I\'m fine','ကျေးဇူးပါ = thanks']}
      ],
      blocks:['<code>မင်္ဂလာပါ</code> = hello','<code>နေကောင်းလား</code> = how are you?','<code>နေကောင်းပါတယ်</code> = I\'m fine'] },
    { id:2, title:'Being polite', focus:'ကျေးဇူးတင်ပါတယ် · ခွင့်ပြုပါ · ဟုတ်ကဲ့',
      steps:[
        {t:'say',text:'The word that opens every door: <span class="inline-tr">ကျေးဇူးတင်ပါတယ်</span> — thank you. The easy version is <span class="inline-tr">ကျေးဇူးပါ</span>.',tr:'ကျေးဇူးတင်ပါတယ်'},
        {t:'words',items:[{tr:'ကျေးဇူးတင်ပါတယ်',pr:'kya-zu-tin-ba-deh',en:'thank you'},{tr:'ကျေးဇူးပါ',pr:'kya-zu-ba',en:'thanks'},{tr:'ရပါတယ်',pr:'ya-ba-deh',en:'you\'re welcome'},{tr:'ခွင့်ပြုပါ',pr:'khwin-pyu-ba',en:'excuse me / may I'},{tr:'ဟုတ်ကဲ့',pr:'hoht-keh',en:'yes / OK'},{tr:'မဟုတ်ဘူး',pr:'ma-hoht-bu',en:'no'}]},
        {t:'chal',en:'Thank you',tr:'ကျေးဇူးတင်ပါတယ်',pr:'kya-zu-tin-ba-deh',morph:['ကျေးဇူးတင်ပါတယ် = thank you']},
        {t:'say',text:'To get someone\'s attention: <span class="inline-tr">ခွင့်ပြုပါ</span> — excuse me / may I.',tr:'ခွင့်ပြုပါ'},
        {t:'chal',en:'Excuse me',tr:'ခွင့်ပြုပါ',pr:'khwin-pyu-ba',morph:['ခွင့်ပြုပါ = excuse me / may I']},
        {t:'say',text:'<span class="inline-tr">ဟုတ်ကဲ့</span> = yes, <span class="inline-tr">မဟုတ်ဘူး</span> = no — the basics of any conversation.',tr:'ဟုတ်ကဲ့'},
        {t:'chal',en:'Yes, thank you',tr:'ဟုတ်ကဲ့, ကျေးဇူးပါ',pr:'hoht-keh, kya-zu-ba',morph:['ဟုတ်ကဲ့ = yes','ကျေးဇူးပါ = thanks']}
      ],
      blocks:['<code>ကျေးဇူးတင်ပါတယ်</code> = thank you','<code>ခွင့်ပြုပါ</code> = excuse me','<code>ဟုတ်ကဲ့</code> = yes · <code>မဟုတ်ဘူး</code> = no'] },
    { id:3, title:'Numbers 1–10', focus:'တစ် · နှစ် · သုံး · တစ်ဆယ်',
      steps:[
        {t:'say',text:'Numbers are the fastest win. Listen and repeat: <span class="inline-tr">တစ်, နှစ်, သုံး</span>.',tr:'တစ်'},
        {t:'words',items:[{tr:'တစ်',pr:'tit',en:'1'},{tr:'နှစ်',pr:'hnit',en:'2'},{tr:'သုံး',pr:'thone',en:'3'},{tr:'လေး',pr:'lay',en:'4'},{tr:'ငါး',pr:'nga',en:'5'},{tr:'ခြောက်',pr:'chauk',en:'6'},{tr:'ခုနစ်',pr:'kun-nhit',en:'7'},{tr:'ရှစ်',pr:'shit',en:'8'},{tr:'ကိုး',pr:'ko',en:'9'},{tr:'တစ်ဆယ်',pr:'ta-seh',en:'10'}]},
        {t:'chal',en:'One water, please',tr:'ရေတစ်ခွက်, ကျေးဇူးပါ',pr:'yeh tit-kwet, kya-zu-ba',morph:['ရေ = water','တစ်ခွက် = one (glass)']},
        {t:'say',text:'To ask a price: <span class="inline-tr">ဘယ်လောက်လဲ?</span> — how much is it?',tr:'ဘယ်လောက်လဲ?'},
        {t:'chal',en:'How much is it?',tr:'ဘယ်လောက်လဲ?',pr:'bah-lauk-leh?',morph:['ဘယ်လောက် = how much','လဲ = question particle']},
        {t:'chal',en:'It\'s five kyat',tr:'ငါးကျပ်ပါ',pr:'nga-kyat-ba',morph:['ငါး = five','ကျပ် = kyat','ပါ = polite']}
      ],
      blocks:['<code>တစ်, နှစ်, သုံး, လေး, ငါး</code> = 1–5','<code>တစ်ဆယ်</code> = 10','<code>ဘယ်လောက်လဲ?</code> = how much is it?'] },
    { id:4, title:'"I want" — ချင်တယ်', focus:'ငါ · ချင်တယ် · ယူချင်တယ်',
      steps:[
        {t:'say',text:'The magic phrase to want anything: <span class="inline-tr">… ချင်တယ်</span> — I want to … . <b>ယူချင်တယ်</b> = I want to take/buy.',tr:'ချင်တယ်'},
        {t:'say',text:'<span class="inline-tr">ငါ</span> = I (casual). <b>ငါ ယူချင်တယ်</b> = I want to take it.',tr:'ငါ'},
        {t:'chal',en:'I want to take it',tr:'ငါ ယူချင်တယ်',pr:'nga yu-chin-deh',morph:['ငါ = I','ယူချင်တယ် = I want to take']},
        {t:'chal',en:'I want coffee',tr:'ကော်ဖီချင်တယ်',pr:'kaw-pi chin-deh',morph:['ကော်ဖီ = coffee','ချင်တယ် = I want']},
        {t:'say',text:'To ask what someone wants: <span class="inline-tr">… ချင်လဲ?</span>',tr:'ချင်လဲ?'},
        {t:'chal',en:'What do you want?',tr:'ဘာချင်လဲ?',pr:'bah chin-leh?',morph:['ဘာ = what','ချင်လဲ = do you want']}
      ],
      blocks:['<code>… ချင်တယ်</code> = I want to …','<code>ယူချင်တယ်</code> = I want to take/buy','<code>ငါ</code> = I'] },
    { id:5, title:'Food & drink', focus:'ထမင်း · ရေ · လက်ဖက်ရည် · ကော်ဖီ',
      steps:[
        {t:'say',text:'Eating out? Key words: <span class="inline-tr">ထမင်း</span> (rice), <span class="inline-tr">ရေ</span> (water), <span class="inline-tr">လက်ဖက်ရည်</span> (tea).',tr:'ထမင်း'},
        {t:'words',items:[{tr:'ထမင်း',pr:'ta-min',en:'rice'},{tr:'ရေ',pr:'yeh',en:'water'},{tr:'လက်ဖက်ရည်',pr:'la-pek-yeh',en:'tea'},{tr:'ကော်ဖီ',pr:'kaw-pi',en:'coffee',link:'≈ English coffee'},{tr:'ကြက်သား',pr:'chet-tha',en:'chicken'}]},
        {t:'chal',en:'Water, please',tr:'ရေ, ကျေးဇူးပါ',pr:'yeh, kya-zu-ba',morph:['ရေ = water','ကျေးဇူးပါ = please/thanks']},
        {t:'chal',en:'I want tea',tr:'လက်ဖက်ရည်ချင်တယ်',pr:'la-pek-yeh chin-deh',morph:['လက်ဖက်ရည် = tea','ချင်တယ် = I want']},
        {t:'say',text:'To praise the food: <span class="inline-tr">အရမ်းကောင်းတယ်</span> — it\'s delicious.',tr:'အရမ်းကောင်းတယ်'},
        {t:'chal',en:'It\'s delicious!',tr:'အရမ်းကောင်းတယ်',pr:'a-yan kaung-deh',morph:['အရမ်း = very','ကောင်းတယ် = it\'s good']}
      ],
      blocks:['<code>ထမင်း</code>, <code>ရေ</code>, <code>လက်ဖက်ရည်</code> = rice, water, tea','<code>ကော်ဖီ</code> = coffee (a loan! )','<code>အရမ်းကောင်းတယ်</code> = delicious'] },
    { id:6, title:'Getting around', focus:'ဘယ်မှာလဲ? · ညာဘက် · ဘယ်ဘက် · တည့်တည့်',
      steps:[
        {t:'say',text:'The most useful question in any city: <span class="inline-tr">ဘယ်မှာလဲ?</span> — where is…?',tr:'ဘယ်မှာလဲ?'},
        {t:'words',items:[{tr:'ဘယ်မှာလဲ?',pr:'bah-mah-leh?',en:'Where is...?'},{tr:'ညာဘက်',pr:'nya-bet',en:'to the right'},{tr:'ဘယ်ဘက်',pr:'bah-leh-bet',en:'to the left'},{tr:'တည့်တည့်',pr:'tih-tih',en:'straight ahead'},{tr:'ဘတ်စ်ကားမှတ်တိုင်',pr:'but-ka-ka hmet-taing',en:'the bus stop'},{tr:'ဟိုတယ်',pr:'ho-teh',en:'the hotel',link:'≈ English hotel'}]},
        {t:'chal',en:'Where is the bus stop?',tr:'ဘတ်စ်ကားမှတ်တိုင်ဘယ်မှာလဲ?',pr:'but-ka-ka hmet-taing bah-mah-leh?',morph:['ဘတ်စ်ကားမှတ်တိုင် = the bus stop','ဘယ်မှာလဲ = where is']},
        {t:'chal',en:'Where is the bathroom?',tr:'အိမ်သာဘယ်မှာလဲ?',pr:'aing-tha bah-mah-leh?',morph:['အိမ်သာ = bathroom','ဘယ်မှာလဲ = where is']},
        {t:'say',text:'To say \'over there\': <span class="inline-tr">အဲဒီမှာ</span>.',tr:'အဲဒီမှာ'},
        {t:'chal',en:'It\'s over there, on the right',tr:'အဲဒီမှာ, ညာဘက်မှာ',pr:'eh-di-mah, nya-bet-mah',morph:['အဲဒီမှာ = over there','ညာဘက်မှာ = on the right']}
      ],
      blocks:['<code>ဘယ်မှာလဲ?</code> = where is…?','<code>ညာဘက်</code> / <code>ဘယ်ဘက်</code> = right / left','<code>ဟိုတယ်</code> = hotel (a loan! )'] },
    { id:7, title:'Questions & "do you have…?"', focus:'ရှိလား? · ဘာ · ရှိပါသလား?',
      steps:[
        {t:'say',text:'To ask if something is there: <span class="inline-tr">ရှိလား?</span> — is there? / do you have?',tr:'ရှိလား?'},
        {t:'chal',en:'Do you have rice?',tr:'ထမင်းရှိလား?',pr:'ta-min shi-lah?',morph:['ထမင်း = rice','ရှိလား? = is there?']},
        {t:'chal',en:'Is there a bathroom?',tr:'အိမ်သာရှိလား?',pr:'aing-tha shi-lah?',morph:['အိမ်သာ = bathroom','ရှိလား = is there']},
        {t:'say',text:'For \'what\': <span class="inline-tr">ဘာ</span>. <b>ဘာလဲ?</b> = what is it?',tr:'ဘာ'},
        {t:'chal',en:'What is it?',tr:'ဘာလဲ?',pr:'bah-leh?',morph:['ဘာ = what','လဲ = question particle']},
        {t:'say',text:'The polite form: <span class="inline-tr">ရှိပါသလား?</span> — do you have?',tr:'ရှိပါသလား?'},
        {t:'chal',en:'Do you have a table?',tr:'စားပွဲရှိပါသလား?',pr:'sa-pweh shi-ba-da-lah?',morph:['စားပွဲ = a table','ရှိပါသလား = do you have?']}
      ],
      blocks:['<code>ရှိလား?</code> = is there? / do you have?','<code>ဘာ</code> = what','<code>ရှိပါသလား?</code> = do you have? (polite)'] },
    { id:8, title:'Family & people', focus:'မိသားစု · အမေ · အဖေ · သူငယ်ချင်း',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">မိသားစု</span> (family), <span class="inline-tr">အမေ</span> (mother), <span class="inline-tr">အဖေ</span> (father).',tr:'မိသားစု'},
        {t:'words',items:[{tr:'မိသားစု',pr:'mi-ta-zu',en:'family'},{tr:'အမေ',pr:'a-may',en:'mother'},{tr:'အဖေ',pr:'a-pay',en:'father'},{tr:'သူငယ်ချင်း',pr:'thu-ngay-chin',en:'friend'}]},
        {t:'chal',en:'I have a friend',tr:'သူငယ်ချင်းရှိတယ်',pr:'thu-ngay-chin shi-deh',morph:['သူငယ်ချင်း = friend','ရှိတယ် = there is / I have']},
        {t:'say',text:'To say \'I have\': <span class="inline-tr">ရှိတယ်</span>.',tr:'ရှိတယ်'},
        {t:'chal',en:'I have a family',tr:'မိသားစုရှိတယ်',pr:'mi-ta-zu shi-deh',morph:['မိသားစု = family','ရှိတယ် = I have']}
      ],
      blocks:['<code>မိသားစု</code> = family','<code>အမေ</code> / <code>အဖေ</code> = mother / father','<code>ရှိတယ်</code> = I have / there is'] },
    { id:9, title:'Time, days & weather', focus:'ဒီနေ့ · မနက်ဖြန် · ဘယ်နာရီ · ရာသီဥတု',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">ဒီနေ့</span>, tomorrow is <span class="inline-tr">မနက်ဖြန်</span>.',tr:'ဒီနေ့'},
        {t:'words',items:[{tr:'ဒီနေ့',pr:'di-neh',en:'today'},{tr:'မနက်ဖြန်',pr:'ma-neht-chan',en:'tomorrow'},{tr:'ဘယ်နာရီ',pr:'bah-na-yi',en:'what time?'},{tr:'ရာသီဥတု',pr:'ya-thi-u-tu',en:'weather'},{tr:'မိုးရွာတယ်',pr:'mo-ywa-deh',en:'it\'s raining'}]},
        {t:'chal',en:'See you tomorrow',tr:'မနက်ဖြန်တွေ့မယ်',pr:'ma-neht-chan tweh-meh',morph:['မနက်ဖြန် = tomorrow','တွေ့မယ် = we\'ll meet']},
        {t:'say',text:'Ask the time: <span class="inline-tr">ဘယ်နာရီလဲ?</span>',tr:'ဘယ်နာရီလဲ?'},
        {t:'chal',en:'What time is it?',tr:'ဘယ်နာရီလဲ?',pr:'bah-na-yi-leh?',morph:['ဘယ်နာရီ = what time','လဲ = question particle']},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">ရာသီဥတုဘယ်လိုလဲ?</span>',tr:'ရာသီဥတု'},
        {t:'chal',en:'It\'s raining',tr:'မိုးရွာတယ်',pr:'mo-ywa-deh',morph:['မိုး = rain','ရွာတယ် = it\'s falling (raining)']}
      ],
      blocks:['<code>ဒီနေ့</code> / <code>မနက်ဖြန်</code> = today / tomorrow','<code>ဘယ်နာရီလဲ?</code> = what time is it?','<code>ရာသီဥတု</code> = weather'] },
    { id:10, title:'Introducing yourself', focus:'ကျွန်တော် · ကျွန်မ · နာမည်က · __NAME__',
      steps:[
        {t:'say',text:'Say your name: <span class="inline-tr">ကျွန်တော်နာမည်က __NAME__</span> — my name is __NAME__. Men say <span class="inline-tr">ကျွန်တော်</span>, women say <span class="inline-tr">ကျွန်မ</span>.',tr:'ကျွန်တော်'},
        {t:'chal',en:'My name is __NAME__',tr:'ကျွန်တော်နာမည်က __NAME__',pr:'kya-naw nah-meh-ga __NAME__',morph:['ကျွန်တော် = I (male)','နာမည်က = my name is','__NAME__ = your name']},
        {t:'say',text:'As a woman: <span class="inline-tr">ကျွန်မနာမည်က __NAME__</span>.',tr:'ကျွန်မ'},
        {t:'chal',en:'My name is __NAME__ (female)',tr:'ကျွန်မနာမည်က __NAME__',pr:'kya-nah nah-meh-ga __NAME__',morph:['ကျွန်မ = I (female)','နာမည်က = my name is']},
        {t:'words',items:[{tr:'နာမည်',pr:'nah-meh',en:'name'},{tr:'ကျွန်တော်',pr:'kya-naw',en:'I (male)'},{tr:'ကျွန်မ',pr:'kya-nah',en:'I (female)'},{tr:'မင်းနာမည်ဘယ်လိုလဲ?',pr:'min nah-meh bah-lo-leh?',en:'what\'s your name?'}]},
        {t:'chal',en:'What\'s your name?',tr:'မင်းနာမည်ဘယ်လိုလဲ?',pr:'min nah-meh bah-lo-leh?',morph:['မင်း = you (informal)','နာမည် = name','ဘယ်လိုလဲ = how is']}
      ],
      blocks:['<code>ကျွန်တော်</code> = I (male) · <code>ကျွန်မ</code> = I (female)','<code>… နာမည်က __NAME__</code> = my name is…','<code>မင်းနာမည်ဘယ်လိုလဲ?</code> = what\'s your name?'] },
    { id:11, title:'Health & emergency', focus:'ကူညီပါ · ဆရာဝန် · ဆေးဆိုင် · နားမလည်ဘူး',
      steps:[
        {t:'say',text:'The most important words if you need help: <span class="inline-tr">ကူညီပါ!</span> (help!), <span class="inline-tr">ဆရာဝန်</span> (doctor), <span class="inline-tr">ဆေးဆိုင်</span> (pharmacy).',tr:'ကူညီပါ'},
        {t:'words',items:[{tr:'ကူညီပါ!',pr:'ku-nyi-ba!',en:'help!'},{tr:'ဆရာဝန်',pr:'sa-ya-wun',en:'the doctor'},{tr:'ဆေးဆိုင်',pr:'say-saing',en:'the pharmacy'},{tr:'နားမလည်ဘူး',pr:'na-ma-leh-bu',en:'I don\'t understand'},{tr:'အိမ်သာ',pr:'aing-tha',en:'the bathroom'}]},
        {t:'chal',en:'Help!',tr:'ကူညီပါ!',pr:'ku-nyi-ba!',morph:['ကူညီပါ = help!']},
        {t:'chal',en:'I don\'t understand',tr:'နားမလည်ဘူး',pr:'na-ma-leh-bu',morph:['နား = ear','မလည်ဘူး = doesn\'t understand']},
        {t:'say',text:'To say you need a doctor: <span class="inline-tr">ဆရာဝန်လိုတယ်</span>.',tr:'ဆရာဝန်'},
        {t:'chal',en:'I need a doctor',tr:'ဆရာဝန်လိုတယ်',pr:'sa-ya-wun lo-deh',morph:['ဆရာဝန် = doctor','လိုတယ် = I need']}
      ],
      blocks:['<code>ကူညီပါ!</code> = help!','<code>ဆရာဝန်</code> = the doctor','<code>နားမလည်ဘူး</code> = I don\'t understand'] },
    { id:12, title:'Tying it together', focus:'a capstone day out',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolbox. This capstone uses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello, how are you?',tr:'မင်္ဂလာပါ, နေကောင်းလား',pr:'min-gah-lah-bah, neh-kaung-lah',morph:['မင်္ဂလာပါ = hello','နေကောင်းလား = how are you?']},
        {t:'chal',en:'I want tea, please',tr:'လက်ဖက်ရည်ချင်တယ်, ကျေးဇူးပါ',pr:'la-pek-yeh chin-deh, kya-zu-ba',morph:['လက်ဖက်ရည်ချင်တယ် = I want tea','ကျေးဇူးပါ = please']},
        {t:'chal',en:'Where is the bus stop?',tr:'ဘတ်စ်ကားမှတ်တိုင်ဘယ်မှာလဲ?',pr:'but-ka-ka hmet-taing bah-mah-leh?',morph:['ဘတ်စ်ကားမှတ်တိုင် = the bus stop','ဘယ်မှာလဲ = where is']},
        {t:'chal',en:'How much is it?',tr:'ဘယ်လောက်လဲ?',pr:'bah-lauk-leh?',morph:['ဘယ်လောက်လဲ = how much is it?']},
        {t:'chal',en:'Thank you!',tr:'ကျေးဇူးတင်ပါတယ်!',pr:'kya-zu-tin-ba-deh!',morph:['ကျေးဇူးတင်ပါတယ် = thank you']}
      ],
      blocks:['You built: greetings, ordering, directions, prices, thanks — a full day out in Burmese.'] },
    { id:13, title:'Airport & tickets', focus:'လေဆိပ် · ပါစပို့ · လက်မှတ် · လေယာဉ်',
      steps:[
        {t:'say',text:'You have landed in Yangon. The building is the <span class="inline-tr">လေဆိပ်</span>. Your document is a <span class="inline-tr">ပါစပို့</span>.',tr:'လေဆိပ်'},
        {t:'words',items:[{tr:'လေဆိပ်',pr:'lay-zate',en:'the airport'},{tr:'ပါစပို့',pr:'pah-sa-po',en:'the passport'},{tr:'လက်မှတ်',pr:'let-hmat',en:'the ticket'},{tr:'လေယာဉ်',pr:'lay-yin',en:'the flight'},{tr:'ဂိတ်',pr:'gate',en:'the gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'လေဆိပ်ဘယ်မှာလဲ?',pr:'lay-zate bah-mah-leh',morph:['လေဆိပ် = the airport','ဘယ်မှာလဲ = where is']},
        {t:'chal',en:'Here is my passport',tr:'ဒါကျွန်တော့်ပါစပို့ပါ',pr:'da kya-naw pah-sa-po ba',morph:['ဒါ = this is','ကျွန်တော့်ပါစပို့ = my passport']},
        {t:'chal',en:'A ticket, please',tr:'လက်မှတ်တစ်ရွက်၊ ကျေးဇူးပါ',pr:'let-hmat tit-ywet, kya-zu-ba',morph:['လက်မှတ်တစ်ရွက် = one ticket','ကျေးဇူးပါ = please']},
        {t:'chal',en:'Where is the gate?',tr:'ဂိတ်ဘယ်မှာလဲ?',pr:'gate bah-mah-leh',morph:['ဂိတ် = the gate','ဘယ်မှာလဲ = where is']}
      ],
      blocks:['<code>လေဆိပ်</code> = airport','<code>ပါစပို့</code> = passport','<code>လက်မှတ်</code> = ticket'] },
    { id:14, title:'The taxi', focus:'တက္ကစီ · သွားချင်တယ် · ဟိုတယ် · ရပ်ပါ',
      steps:[
        {t:'say',text:'Burmese is SOV and polite with <span class="inline-tr">ပါ</span>: <span class="inline-tr">ဟိုတယ်ကိုသွားချင်တယ်</span> — hotel-to go-want. Men say <span class="inline-tr">ကျွန်တော်</span>.',tr:'တက္ကစီ'},
        {t:'words',items:[{tr:'တက္ကစီ',pr:'tak-ka-si',en:'the taxi'},{tr:'ဒရိုင်ဘာ',pr:'da-rain-ba',en:'the driver'},{tr:'သွားချင်တယ်',pr:'thwa-chin-deh',en:'I want to go'},{tr:'ဒီမှာရပ်ပါ',pr:'di-mah yut-ba',en:'stop here (polite)'}]},
        {t:'chal',en:'A taxi, please',tr:'တက္ကစီ၊ ကျေးဇူးပါ',pr:'tak-ka-si, kya-zu-ba',morph:['တက္ကစီ = taxi','ကျေးဇူးပါ = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'ဟိုတယ်ကိုသွားချင်တယ်',pr:'ho-teh-go thwa-chin-deh',morph:['ဟိုတယ်ကို = to the hotel','သွားချင်တယ် = I want to go']},
        {t:'chal',en:'Stop here, please',tr:'ဒီမှာရပ်ပါ',pr:'di-mah yut-ba',morph:['ဒီမှာ = here','ရပ်ပါ = please stop']},
        {t:'chal',en:'How much is it?',tr:'ဘယ်လောက်လဲ?',pr:'bah-lauk-leh',morph:['ဘယ်လောက် = how much','လဲ = question']}
      ],
      blocks:['<code>… ကိုသွားချင်တယ်</code> = I want to go to …','<code>ဒီမှာရပ်ပါ</code> = stop here'] },
    { id:15, title:'The hotel', focus:'ကြိုတင်မှာ · အခန်း · သော့ · တစ်ည',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">ကြိုတင်မှာထားပါတယ်</span> — I have a reservation. End with polite <span class="inline-tr">ပါ</span>.',tr:'ကြိုတင်မှာထားပါတယ်'},
        {t:'words',items:[{tr:'ဟိုတယ်',pr:'ho-teh',en:'the hotel'},{tr:'ကြိုတင်မှာ',pr:'kjo-tin hma',en:'a reservation'},{tr:'အခန်း',pr:'a-khan',en:'the room'},{tr:'သော့',pr:'thaw',en:'the key'},{tr:'တစ်ည',pr:'tit-nya',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'ကြိုတင်မှာထားပါတယ်',pr:'kjo-tin hma hta ba-deh',morph:['ကြိုတင်မှာ = reservation','ထားပါတယ် = I have']},
        {t:'chal',en:'A room for one night, please',tr:'တစ်ညစာအခန်း၊ ကျေးဇူးပါ',pr:'tit-nya-za a-khan, kya-zu-ba',morph:['တစ်ညစာ = for one night','အခန်း = a room','ကျေးဇူးပါ = please']},
        {t:'chal',en:'The key, please',tr:'သော့ပေးပါ',pr:'thaw pay-ba',morph:['သော့ = the key','ပေးပါ = please give']},
        {t:'chal',en:'Where is my room?',tr:'ကျွန်တော့်အခန်းဘယ်မှာလဲ?',pr:'kya-naw a-khan bah-mah-leh',morph:['ကျွန်တော့်အခန်း = my room','ဘယ်မှာလဲ = where is']}
      ],
      blocks:['<code>ကြိုတင်မှာ</code> = reservation','<code>အခန်း</code> = room','<code>သော့</code> = key'] },
    { id:16, title:'Ask for help', focus:'နားမလည်ဘူး · ဖြည်းဖြည်း · အင်္ဂလိပ်',
      steps:[
        {t:'say',text:'When Burmese is too fast: <span class="inline-tr">ဖြည်းဖြည်းပြောပါ</span> — speak slowly, please. Keep the polite particle <span class="inline-tr">ပါ</span>.',tr:'ဖြည်းဖြည်းပြောပါ'},
        {t:'words',items:[{tr:'ဖြည်းဖြည်း',pr:'phyee-phyee',en:'slowly'},{tr:'ထပ်ပြောပါ',pr:'htat pyaw-ba',en:'say it again'},{tr:'အင်္ဂလိပ်',pr:'in-ga-leik',en:'English'},{tr:'ကူညီပေးပါ',pr:'ku-nyi pay-ba',en:'please help'}]},
        {t:'chal',en:'I don\'t understand',tr:'နားမလည်ဘူး',pr:'na-ma-leh-bu',morph:['နား = ear','မလည်ဘူး = does not understand']},
        {t:'chal',en:'Slower, please',tr:'ဖြည်းဖြည်းပြောပါ',pr:'phyee-phyee pyaw-ba',morph:['ဖြည်းဖြည်း = slowly','ပြောပါ = please speak']},
        {t:'chal',en:'Can you help me?',tr:'ကူညီပေးပါဦး',pr:'ku-nyi pay-ba-u',morph:['ကူညီ = help','ပေးပါဦး = please do']},
        {t:'chal',en:'Do you speak English?',tr:'အင်္ဂလိပ်စကားပြောနိုင်လား',pr:'in-ga-leik za-ga pyaw nai-lah',morph:['အင်္ဂလိပ်စကား = English','ပြောနိုင်လား = can you speak']}
      ],
      blocks:['<code>ဖြည်းဖြည်းပြောပါ</code> = speak slowly','<code>အင်္ဂလိပ်စကားပြောနိုင်လား</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'tea', title:'🍵 At a tea shop', emoji:'🍵', turns:[
      {who:'You',tr:'လက်ဖက်ရည်တစ်ခွက်ပါ။',pr:'la-pek-yeh tit-kwet ba',en:'One cup of tea, please.'},
      {who:'Server',tr:'ပူပူလား အေးအေးလား?',pr:'pu-pu-lah eh-eh-lah?',en:'Hot or cold?'},
      {who:'You',tr:'ပူပူပါ။',pr:'pu-pu ba',en:'Hot, please.'},
      {who:'Server',tr:'ဒါပါ။ ကျပ်ငါးရာပါ။',pr:'da ba, kyat nga-ya ba',en:'Here you are. Five hundred kyats.'},
      {who:'You',tr:'ကျေးဇူးတင်ပါတယ်။',pr:'kya-zu-tin-ba-deh',en:'Thank you.'}
    ]},
    { id:'transport', title:'🚌 Getting around', emoji:'🚌', turns:[
      {who:'You',tr:'ခွင့်ပြုပါ၊ ဘတ်စ်ကားမှတ်တိုင်ဘယ်မှာလဲ?',pr:'khwin-pyu-ba, but-ka-ka hmet-taing bah-mah-leh?',en:'Excuse me, where is the bus stop?'},
      {who:'Local',tr:'အဲဒီမှာ၊ ညာဘက်မှာ။',pr:'eh-di-mah, nya-bet-mah',en:'Over there, on the right.'},
      {who:'You',tr:'ကျေးဇူးပါ။ ရန်ကုန်ကိုသွားတဲ့ဘတ်စ်ကားရှိလား?',pr:'kya-zu-ba, yan-gaun-go thwa-deh but-ka-ka shi-lah?',en:'Thanks. Is there a bus to Yangon?'},
      {who:'Local',tr:'ဟုတ်ပါတယ်။ တက္ကစီလည်းရှိတယ်။',pr:'hoht-ba-deh, tak-ka-si leh shi-deh',en:'Yes. There are taxis too.'},
      {who:'You',tr:'ကျေးဇူးတင်ပါတယ်။',pr:'kya-zu-tin-ba-deh',en:'Thank you.'}
    ]},
    { id:'restaurant', title:'🍽️ At a restaurant', emoji:'🍽️', turns:[
      {who:'Waiter',tr:'ဘာစားချင်လဲ?',pr:'bah sa-chin-leh?',en:'What would you like to eat?'},
      {who:'You',tr:'ထမင်းနဲ့ကြက်သားရှိလား?',pr:'ta-min-neh chet-tha shi-lah?',en:'Do you have rice and chicken?'},
      {who:'Waiter',tr:'ရှိပါတယ်။',pr:'shi-ba-deh',en:'Yes, we do.'},
      {who:'You',tr:'ထမင်းတစ်ပွဲ၊ ကျေးဇူးပါ။',pr:'ta-min tit-pweh, kya-zu-ba',en:'One rice dish, please.'},
      {who:'Waiter',tr:'ဒါပါ။ သုံးထောင်ပါ။',pr:'da ba, thone-daung ba',en:'Here you are. Three thousand.'},
      {who:'You',tr:'ကျေးဇူးတင်ပါတယ်။',pr:'kya-zu-tin-ba-deh',en:'Thank you.'}
    ]},
    { id:'market', title:'🛍️ At the market', emoji:'🛍️', turns:[
      {who:'Seller',tr:'ဘာလိုချင်လဲ?',pr:'bah-lo-chin-leh?',en:'What would you like?'},
      {who:'You',tr:'ဒါဘယ်လောက်လဲ?',pr:'da bah-lauk-leh?',en:'How much is this?'},
      {who:'Seller',tr:'နှစ်ထောင်ပါ။',pr:'hnit-daung ba',en:'Two thousand.'},
      {who:'You',tr:'လျှော့ပေးပါဦး။',pr:'sho-pay-ba-u',en:'Could you give me a discount?'},
      {who:'Seller',tr:'ဟုတ်ပါတယ်။ တစ်ထောင့်ငါးရာပါ။',pr:'hoht-ba-deh, tit-daung nga-ya ba',en:'Okay. Fifteen hundred.'},
      {who:'You',tr:'ယူပါမယ်။ ကျေးဇူးတင်ပါတယ်။',pr:'yu-ba-meh, kya-zu-tin-ba-deh',en:'I\'ll take it. Thank you.'}
    ]}
  ],
  pocket: [
    {tr:'မင်္ဂလာပါ',pr:'min-gah-lah-bah',en:'Hello',c:'Greetings'},
    {tr:'နေကောင်းလား',pr:'neh-kaung-lah',en:'How are you?',c:'Greetings'},
    {tr:'နေကောင်းပါတယ်',pr:'neh-kaung-ba-deh',en:'I\'m fine',c:'Greetings'},
    {tr:'သွားတော့မယ်',pr:'thwa-daw-meh',en:'Goodbye',c:'Greetings'},
    {tr:'မင်္ဂလာနံနက်ခင်း',pr:'min-ga-lah nan-neht-chin',en:'Good morning',c:'Greetings'},
    {tr:'ကျေးဇူးတင်ပါတယ်',pr:'kya-zu-tin-ba-deh',en:'Thank you',c:'Courtesy'},
    {tr:'ကျေးဇူးပါ',pr:'kya-zu-ba',en:'Thanks',c:'Courtesy'},
    {tr:'ရပါတယ်',pr:'ya-ba-deh',en:'You\'re welcome',c:'Courtesy'},
    {tr:'ခွင့်ပြုပါ',pr:'khwin-pyu-ba',en:'Excuse me',c:'Courtesy'},
    {tr:'ဟုတ်ကဲ့',pr:'hoht-keh',en:'Yes / OK',c:'Courtesy'},
    {tr:'မဟုတ်ဘူး',pr:'ma-hoht-bu',en:'No',c:'Courtesy'},
    {tr:'တစ်',pr:'tit',en:'1',c:'Numbers'},
    {tr:'နှစ်',pr:'hnit',en:'2',c:'Numbers'},
    {tr:'သုံး',pr:'thone',en:'3',c:'Numbers'},
    {tr:'ငါး',pr:'nga',en:'5',c:'Numbers'},
    {tr:'တစ်ဆယ်',pr:'ta-seh',en:'10',c:'Numbers'},
    {tr:'ထမင်း',pr:'ta-min',en:'rice',c:'Food'},
    {tr:'ရေ',pr:'yeh',en:'water',c:'Food'},
    {tr:'လက်ဖက်ရည်',pr:'la-pek-yeh',en:'tea',c:'Food'},
    {tr:'ကော်ဖီ',pr:'kaw-pi',en:'coffee',c:'Food'},
    {tr:'ကြက်သား',pr:'chet-tha',en:'chicken',c:'Food'},
    {tr:'စာရင်းပါ',pr:'sa-yin-ba',en:'the bill, please',c:'Food'},
    {tr:'ဘယ်မှာလဲ?',pr:'bah-mah-leh?',en:'Where is...?',c:'Directions'},
    {tr:'ညာဘက်',pr:'nya-bet',en:'to the right',c:'Directions'},
    {tr:'ဘယ်ဘက်',pr:'bah-leh-bet',en:'to the left',c:'Directions'},
    {tr:'တည့်တည့်',pr:'tih-tih',en:'straight ahead',c:'Directions'},
    {tr:'ဘတ်စ်ကားမှတ်တိုင်',pr:'but-ka-ka hmet-taing',en:'the bus stop',c:'Directions'},
    {tr:'ဘယ်လောက်လဲ?',pr:'bah-lauk-leh?',en:'How much is it?',c:'Shopping'},
    {tr:'ရှိလား?',pr:'shi-lah?',en:'Do you have...?',c:'Shopping'},
    {tr:'ယူချင်တယ်',pr:'yu-chin-deh',en:'I\'d like to take that',c:'Shopping'},
    {tr:'လျှော့ပေးပါ',pr:'sho-pay-ba',en:'Discount, please',c:'Shopping'},
    {tr:'ဟိုတယ်',pr:'ho-teh',en:'the hotel',c:'Shopping'},
    {tr:'ဈေး',pr:'zeh',en:'the market',c:'Shopping'},
    {tr:'ဒီနေ့',pr:'di-neh',en:'today',c:'Time'},
    {tr:'မနက်ဖြန်',pr:'ma-neht-chan',en:'tomorrow',c:'Time'},
    {tr:'ရာသီဥတု',pr:'ya-thi-u-tu',en:'the weather',c:'Time'},
    {tr:'ကူညီပါ!',pr:'ku-nyi-ba!',en:'Help!',c:'Emergency'},
    {tr:'ဆရာဝန်',pr:'sa-ya-wun',en:'the doctor',c:'Emergency'},
    {tr:'ဆေးဆိုင်',pr:'say-saing',en:'the pharmacy',c:'Emergency'},
    {tr:'နားမလည်ဘူး',pr:'na-ma-leh-bu',en:'I don\'t understand',c:'Emergency'},
    {tr:'လေဆိပ်',pr:'lay-zate',en:'airport',c:'Travel'},
    {tr:'တက္ကစီ',pr:'tak-ka-si',en:'taxi',c:'Travel'},
    {tr:'ဟိုတယ်',pr:'ho-teh',en:'hotel',c:'Travel'},
    {tr:'ဒီမှာရပ်ပါ',pr:'di-mah yut-ba',en:'stop here',c:'Travel'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Shopping','Time','Emergency','Travel'],
  culture: [
    {icon:'💦',title:'Thingyan — the water festival',body:'In April, Burmese New Year (\'Thingyan\') is a national water fight. Buckets, hoses and water guns drench everyone alike. Getting wet is a blessing and good luck — expect to get soaked.'},
    {icon:'🛕',title:'Shoes off at the pagoda',body:'Before entering any pagoda or monastery you must remove your shoes and socks, and keep your head lower than the Buddha and the monks. Cover your shoulders and knees. It\'s a sign of deep respect.'},
    {icon:'🍵',title:'Tea is everywhere',body:'Burmese love tea. \'Lahpet\' (fermented tea leaves) is served as a salad with nuts and sesame, and sweet milky \'lahpet yeh\' is the everyday drink. A tea shop is the social heart of any town.'},
    {icon:'🙏',title:'A gentle greeting',body:'Burmese people greet with a smile and a soft \'mingalaba\', often with a small bow or the hands loosely at the chest. Loud, aggressive gestures are avoided — warmth and calm go a long way.'},
    {icon:'🦶',title:'Head high, feet low',body:'The head is the most sacred part of the body in Burmese culture; the feet are the lowest. Never touch someone\'s head, and don\'t point your feet at a person or a sacred image.'},
    {icon:'🍚',title:'Rice is the meal',body:'A Burmese meal is a bowl of rice (\'htamin\') with side dishes. It\'s usually eaten with your right hand or with a fork and spoon. Sharing from the centre of the table is the norm.'}
  ],
  sounds: [
    {l:'အ',say:'the open vowel "ah" — every syllable is built on a vowel',ex:'အ = ah · ရေ (yeh) = water',voice:'အ'},
    {l:'င',say:'"ng" — hold it at the start of a word, don\'t drop it',ex:'ငါ (nga) = I, me',voice:'ငါ'},
    {l:'ည',say:'"ny" — as in canyon',ex:'ညာ (nya) = right',voice:'ညာ'},
    {l:'သ',say:'"th" — as in think (voiceless, no vibration)',ex:'သုံး (thone) = three',voice:'သုံး'},
    {l:'ဆ',say:'"s" — a light hiss',ex:'ဆိုင်း (saing) = shop',voice:'ဆိုင်'},
    {l:'ပ',say:'"p" — unaspirated p (no puff of air)',ex:'ပါ (ba) = to be / polite',voice:'ပါ'},
    {l:'low tone',say:'level and calm — falls slightly at the end',ex:'ပေး (pay) = to give · ယူ (yu) = take',voice:'ယူ'},
    {l:'high tone',say:'ends high and level — a brighter, sharper sound',ex:'ကိုး (ko) = 9 · သွား (thwa) = go',voice:'ကိုး'}
  ],
  resources: [
    {icon:'🗣️',t:'Learn Burmese with Adam',d:'Clear, step-by-step beginner vocabulary and phrases from a fluent speaker.',q:'Learn Burmese with Adam'},
    {icon:'🐢',t:'Burmese for beginners',d:'Slow, repeatable phrase drills with natural native audio.',q:'Burmese for beginners lessons'},
    {icon:'🎧',t:'Burmese tones explained',d:'Short videos that demystify the three tones — crucial for being understood.',q:'Burmese tones explained'},
    {icon:'📚',t:'Burmese round script',d:'Learn the rounded Burmese alphabet from scratch, letter by letter.',q:'Burmese alphabet script for beginners'},
    {icon:'💬',t:'Real Burmese conversations',d:'Everyday dialogues with subtitles — perfect for listening practice.',q:'Burmese conversation practice beginners'}
  ]
};
