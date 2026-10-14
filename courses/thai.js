/* ---- thai ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["thai"] = {
  name: 'Thai',
  flag: '🇹🇭',
  tts: 'th-TH',
  dir: 'ltr',
  native: 'ไทย',
  script: 'Thai',
  soundTitle: 'Thai tones & sounds',
  soundIntro: 'Thai is tonal — the same syllable at a different pitch can be a different word. Learn the five tones and a few key consonants and you can say almost any word.',
  grammar: '<p>Thai has no spaces between words and no verb endings or plurals — meaning comes from word order and the \'classifier\' (measure word) used when counting. The three things to master early: the <b>five tones</b> (a different pitch = a different word), the polite particles <b>ครับ</b> (khrap, used by men) and <b>ค่ะ</b> (kha, used by women) that you add to almost every sentence, and the easy pattern of putting <b>ไหม</b> (mai) at the end of a sentence to make a yes/no question.</p>',
  bridges: '<div class="note">🇬🇧 <b>English.</b> Several Thai words are already familiar: <i>menu</i>, <i>taxi</i>, <i>coffee</i> (กาแฟ), <i>bus</i>, <i>hotel</i> and even <i>shopping</i>. Your ear will catch a lot right away.</div><div class="note">🎵 <b>Tones.</b> Thai is tonal, so don\'t worry about perfect pitch at first. Context, a smile, and the polite particles get you understood — tone precision comes with practice.</div>',
  lessons: [
    { id:1, title:'Greetings — สวัสดี', focus:'สวัสดี · ครับ / ค่ะ · สบายดีไหม',
      steps:[
        {t:'say',text:'The very first word you\'ll use: <span class="inline-tr">สวัสดี</span> (sawasdee) — hello (and goodbye). Say it out loud.',tr:'สวัสดี'},
        {t:'say',text:'Thai is polite and friendly. Add a polite particle at the end: men say <span class="inline-tr">ครับ</span> (khrap), women say <span class="inline-tr">ค่ะ</span> (kha).',tr:'ครับ'},
        {t:'words',items:[{tr:'สวัสดี',pr:'sawasdee',en:'hello / goodbye'},{tr:'ครับ',pr:'khrap',en:'polite ending (man)'},{tr:'ค่ะ',pr:'kha',en:'polite ending (woman)'},{tr:'สวัสดีครับ',pr:'sawasdee khrap',en:'hello (man)'},{tr:'สวัสดีค่ะ',pr:'sawasdee kha',en:'hello (woman)'}]},
        {t:'chal',en:'Hello (a man saying it)',tr:'สวัสดีครับ',pr:'sawasdee khrap',morph:['สวัสดี = hello','ครับ = polite ending (man)']},
        {t:'say',text:'To ask how someone is: <span class="inline-tr">สบายดีไหม?</span> (sabai dii mai). The reply is <span class="inline-tr">สบายดี</span> — I\'m fine.',tr:'สบายดีไหม'},
        {t:'words',items:[{tr:'สบายดีไหม?',pr:'sabai dii mai',en:'How are you?'},{tr:'สบายดีครับ',pr:'sabai dii khrap',en:'I\'m fine (man)'},{tr:'ขอบคุณ',pr:'khop khun',en:'thank you'}]},
        {t:'chal',en:'Hello, how are you?',tr:'สวัสดีครับ สบายดีไหม',pr:'sawasdee khrap, sabai dii mai',morph:['สวัสดี = hello','ครับ = polite (man)','สบายดีไหม = how are you?']}
      ],
      blocks:['<code>สวัสดี</code> = hello / goodbye','<code>ครับ</code> / <code>ค่ะ</code> = polite ending (man / woman)','<code>สบายดีไหม?</code> = how are you?'] },
    { id:2, title:'Being polite — ขอบคุณ & ขอโทษ', focus:'ขอบคุณ · ขอโทษ · กรุณา · ใช่',
      steps:[
        {t:'say',text:'Thank you is <span class="inline-tr">ขอบคุณ</span> (khop khun). Add the particle: <span class="inline-tr">ขอบคุณครับ</span> (man) or <span class="inline-tr">ขอบคุณค่ะ</span> (woman).',tr:'ขอบคุณ'},
        {t:'words',items:[{tr:'ขอบคุณ',pr:'khop khun',en:'thank you'},{tr:'ขอบคุณมาก',pr:'khop khun mak',en:'thanks a lot'},{tr:'กรุณา',pr:'karuna',en:'please'},{tr:'ขอบคุณครับ',pr:'khop khun khrap',en:'thank you (man)'}]},
        {t:'chal',en:'Thank you very much',tr:'ขอบคุณมากครับ',pr:'khop khun mak khrap',morph:['ขอบคุณ = thank you','มาก = a lot','ครับ = polite (man)']},
        {t:'say',text:'Sorry / excuse me is <span class="inline-tr">ขอโทษ</span> (kho thot). It also gets you past people politely.',tr:'ขอโทษ'},
        {t:'say',text:'Yes is <span class="inline-tr">ใช่</span> (chai); no is <span class="inline-tr">ไม่</span> (mai).',tr:'ใช่'},
        {t:'chal',en:'Sorry (excuse me)',tr:'ขอโทษครับ',pr:'kho thot khrap',morph:['ขอโทษ = sorry','ครับ = polite (man)']}
      ],
      blocks:['<code>ขอบคุณ</code> = thank you · <code>ขอบคุณมาก</code> = thanks a lot','<code>ขอโทษ</code> = sorry / excuse me','<code>ใช่</code> = yes · <code>ไม่</code> = no'] },
    { id:3, title:'Numbers 1–10', focus:'หนึ่ง · สอง · สาม · สิบ',
      steps:[
        {t:'say',text:'Numbers are the fastest win. Listen and repeat: <span class="inline-tr">หนึ่ง, สอง, สาม</span>.',tr:'หนึ่ง'},
        {t:'words',items:[{tr:'หนึ่ง',pr:'nueng',en:'1'},{tr:'สอง',pr:'song',en:'2'},{tr:'สาม',pr:'sam',en:'3'},{tr:'สี่',pr:'si',en:'4'},{tr:'ห้า',pr:'ha',en:'5'},{tr:'หก',pr:'hok',en:'6'},{tr:'เจ็ด',pr:'jet',en:'7'},{tr:'แปด',pr:'paet',en:'8'},{tr:'เก้า',pr:'kao',en:'9'},{tr:'สิบ',pr:'sip',en:'10'}]},
        {t:'chal',en:'Two, please',tr:'สองครับ',pr:'song khrap',morph:['สอง = two','ครับ = polite (man)']},
        {t:'say',text:'Thai counts with \'classifiers\' (measure words), but if you\'re unsure, just say the number and point — people will understand.',tr:'สิบ'},
        {t:'chal',en:'Ten',tr:'สิบ',pr:'sip',morph:['สิบ = ten']},
        {t:'say',text:'To ask a price: <span class="inline-tr">ราคาเท่าไหร่?</span> (rakha thao rai) — how much is it?',tr:'ราคาเท่าไหร่'},
        {t:'chal',en:'How much is it?',tr:'ราคาเท่าไหร่',pr:'rakha thao rai',morph:['ราคา = price','เท่าไหร่ = how much']},
        {t:'chal',en:'It\'s fifty baht',tr:'ห้าสิบบาท',pr:'ha sip baat',morph:['ห้าสิบ = fifty','บาท = baht']}
      ],
      blocks:['<code>หนึ่ง สอง สาม สี่ ห้า</code> = 1–5','<code>หก เจ็ด แปด เก้า สิบ</code> = 6–10','<code>ราคาเท่าไหร่?</code> = how much is it?'] },
    { id:4, title:'"I want" — ผมอยาก & ขอ', focus:'ผมอยาก · ฉันอยาก · ขอ · น้ำ',
      steps:[
        {t:'say',text:'Thai has no verb conjugation. Just say <span class="inline-tr">ผมอยาก</span> (phom yaak) = I want (man), or <span class="inline-tr">ฉันอยาก</span> (chan yaak) = I want (woman).',tr:'ผมอยาก'},
        {t:'say',text:'<span class="inline-tr">ผม</span> (phom) = I (man), <span class="inline-tr">ฉัน</span> (chan) = I (woman). Pick the one for you and use it consistently.',tr:'ผม'},
        {t:'words',items:[{tr:'ผม',pr:'phom',en:'I (man)'},{tr:'ฉัน',pr:'chan',en:'I (woman)'},{tr:'อยาก',pr:'yaak',en:'to want'},{tr:'ขอ',pr:'kho',en:'may I have / please give'},{tr:'น้ำ',pr:'nam',en:'water'}]},
        {t:'chal',en:'I want to drink water',tr:'ผมอยากดื่มน้ำ',pr:'phom yaak duem nam',morph:['ผม = I (man)','อยาก = want','ดื่ม = to drink','น้ำ = water']},
        {t:'say',text:'An even easier way to ask: <span class="inline-tr">ขอ</span> (kho) — \'may I have\'. <b>ขอน้ำหน่อย</b> = could I have some water?',tr:'ขอน้ำหน่อย'},
        {t:'chal',en:'Could I have some water?',tr:'ขอน้ำหน่อยครับ',pr:'kho nam noi khrap',morph:['ขอ = may I have','น้ำ = water','หน่อย = a bit','ครับ = polite (man)']}
      ],
      blocks:['<code>ผม</code> / <code>ฉัน</code> = I (man / woman)','<code>อยาก</code> = to want','<code>ขอ…</code> = may I have…'] },
    { id:5, title:'Food & drink', focus:'น้ำ · ข้าว · อาหาร · อร่อย',
      steps:[
        {t:'say',text:'Eating is the best part of Thailand. Key words: <span class="inline-tr">น้ำ</span> (nam) water, <span class="inline-tr">ข้าว</span> (khao) rice, <span class="inline-tr">อาหาร</span> (ahan) food.',tr:'น้ำ'},
        {t:'words',items:[{tr:'น้ำ',pr:'nam',en:'water'},{tr:'ข้าว',pr:'khao',en:'rice'},{tr:'กาแฟ',pr:'ka fae',en:'coffee',link:'≈ coffee'},{tr:'อาหาร',pr:'ahan',en:'food'},{tr:'เมนู',pr:'menu',en:'the menu',link:'≈ menu'}]},
        {t:'chal',en:'I\'d like rice',tr:'ขอข้าว',pr:'kho khao',morph:['ขอ = may I have','ข้าว = rice']},
        {t:'say',text:'Delicious is <span class="inline-tr">อร่อย</span> (aroi). Say it to the cook and you\'ll make their day.',tr:'อร่อย'},
        {t:'words',items:[{tr:'อร่อย',pr:'aroi',en:'delicious'},{tr:'เผ็ด',pr:'phet',en:'spicy'},{tr:'ไม่เผ็ด',pr:'mai phet',en:'not spicy'}]},
        {t:'chal',en:'It\'s delicious!',tr:'อร่อยมาก',pr:'aroi mak',morph:['อร่อย = delicious','มาก = very']}
      ],
      blocks:['<code>น้ำ</code> = water · <code>ข้าว</code> = rice','<code>อร่อย</code> = delicious','<code>เผ็ด</code> = spicy · <code>ไม่เผ็ด</code> = not spicy'] },
    { id:6, title:'Getting around', focus:'ที่ไหน · ซ้าย · ขวา · ตรงไป',
      steps:[
        {t:'say',text:'The most useful question in any city: <span class="inline-tr">ที่ไหน</span> (thi nai) — where?',tr:'ที่ไหน'},
        {t:'words',items:[{tr:'ที่ไหน',pr:'thi nai',en:'where?'},{tr:'ซ้าย',pr:'sai',en:'left'},{tr:'ขวา',pr:'khwa',en:'right'},{tr:'ตรงไป',pr:'trong pai',en:'straight ahead'},{tr:'สถานีรถไฟ',pr:'sathani rot fai',en:'train station'},{tr:'ห้องน้ำ',pr:'hong nam',en:'bathroom'}]},
        {t:'chal',en:'Where is the bathroom?',tr:'ห้องน้ำอยู่ที่ไหน',pr:'hong nam yu thi nai',morph:['ห้องน้ำ = bathroom','อยู่ = is located','ที่ไหน = where']},
        {t:'chal',en:'Where is the train station?',tr:'สถานีรถไฟอยู่ที่ไหน',pr:'sathani rot fai yu thi nai',morph:['สถานีรถไฟ = train station','อยู่ = is located','ที่ไหน = where']},
        {t:'say',text:'To turn left or right: <span class="inline-tr">เลี้ยวซ้าย</span> (turn left), <span class="inline-tr">เลี้ยวขวา</span> (turn right). \'Straight ahead\' is <span class="inline-tr">ตรงไป</span>.',tr:'ตรงไป'},
        {t:'chal',en:'Straight ahead',tr:'ตรงไป',pr:'trong pai',morph:['ตรง = straight','ไป = to go']}
      ],
      blocks:['<code>ที่ไหน?</code> = where?','<code>ซ้าย</code> / <code>ขวา</code> = left / right','<code>ตรงไป</code> = straight ahead'] },
    { id:7, title:'Questions & "do you have…?"', focus:'มี … ไหม · คุณ · เท่าไหร่',
      steps:[
        {t:'say',text:'To turn any sentence into a yes/no question, just add <span class="inline-tr">ไหม</span> (mai) at the end.',tr:'ไหม'},
        {t:'say',text:'To ask if someone has something: <span class="inline-tr">คุณมี…ไหม?</span> (khun mii … mai) — do you have…?',tr:'คุณมี…ไหม?'},
        {t:'chal',en:'Do you have a menu?',tr:'คุณมีเมนูไหม',pr:'khun mii menu mai',morph:['คุณ = you','มี = have','เมนู = menu','ไหม = question'],link:'≈ menu'},
        {t:'chal',en:'Do you have wifi?',tr:'คุณมีไวไฟไหม',pr:'khun mii wai fai mai',morph:['คุณ = you','มี = have','ไวไฟ = wifi','ไหม = question'],link:'≈ wifi'},
        {t:'say',text:'For prices: <span class="inline-tr">เท่าไหร่?</span> (thao rai) = how much?',tr:'เท่าไหร่'},
        {t:'chal',en:'How much is it?',tr:'ราคาเท่าไหร่',pr:'rakha thao rai',morph:['ราคา = price','เท่าไหร่ = how much']}
      ],
      blocks:['<code>คุณมี…ไหม?</code> = do you have…?','<code>ไหม</code> = question word','<code>เท่าไหร่?</code> = how much?'] },
    { id:8, title:'Family & people', focus:'ครอบครัว · แม่ · พ่อ · เพื่อน',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">ครอบครัว</span> (khrop khrua) family, <span class="inline-tr">แม่</span> (mae) mother, <span class="inline-tr">พ่อ</span> (pho) father.',tr:'ครอบครัว'},
        {t:'words',items:[{tr:'ครอบครัว',pr:'khrop khrua',en:'family'},{tr:'แม่',pr:'mae',en:'mother'},{tr:'พ่อ',pr:'pho',en:'father'},{tr:'เพื่อน',pr:'phuean',en:'friend'},{tr:'พี่',pr:'phi',en:'older sibling'}]},
        {t:'say',text:'To have is <span class="inline-tr">มี</span> (mii). To say you have a friend: <b>ผมมีเพื่อน</b> (man) or <b>ฉันมีเพื่อน</b> (woman).',tr:'มี'},
        {t:'chal',en:'I have a friend',tr:'ผมมีเพื่อน',pr:'phom mii phuean',morph:['ผม = I (man)','มี = have','เพื่อน = friend']},
        {t:'chal',en:'I have a family',tr:'ผมมีครอบครัว',pr:'phom mii khrop khrua',morph:['ผม = I (man)','มี = have','ครอบครัว = family']}
      ],
      blocks:['<code>แม่</code> / <code>พ่อ</code> = mother / father','<code>เพื่อน</code> = friend','<code>มี</code> = to have'] },
    { id:9, title:'Time, days & weather', focus:'วันนี้ · พรุ่งนี้ · อากาศ',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">วันนี้</span> (wan ni), tomorrow is <span class="inline-tr">พรุ่งนี้</span> (phrung ni).',tr:'วันนี้'},
        {t:'words',items:[{tr:'วันนี้',pr:'wan ni',en:'today'},{tr:'พรุ่งนี้',pr:'phrung ni',en:'tomorrow'},{tr:'เมื่อวาน',pr:'muea wan',en:'yesterday'},{tr:'อากาศ',pr:'akat',en:'weather'}]},
        {t:'chal',en:'See you tomorrow',tr:'เจอกันพรุ่งนี้',pr:'joe kan phrung ni',morph:['เจอกัน = see you','พรุ่งนี้ = tomorrow']},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">อากาศเป็นยังไง?</span> (akat pen yang ngai) — how\'s the weather?',tr:'อากาศเป็นยังไง'},
        {t:'chal',en:'It\'s hot',tr:'อากาศร้อน',pr:'akat ron',morph:['อากาศ = weather','ร้อน = hot']},
        {t:'chal',en:'It\'s raining',tr:'ฝนตก',pr:'fon tok',morph:['ฝน = rain','ตก = falls']}
      ],
      blocks:['<code>วันนี้</code> / <code>พรุ่งนี้</code> = today / tomorrow','<code>อากาศเป็นยังไง?</code> = how\'s the weather?','<code>ร้อน</code> = hot'] },
    { id:10, title:'Small talk & your name', focus:'ผมชื่อ · คุณชื่ออะไร · ยินดี',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">ผมชื่อ…</span> (phom chue) = my name is… (man), or <span class="inline-tr">ฉันชื่อ…</span> (chan chue) for a woman.',tr:'ผมชื่อ'},
        {t:'chal',en:'My name is __NAME__',tr:'ผมชื่อ __NAME__',pr:'phom chue __NAME__',morph:['ผม = I (man)','ชื่อ = to be named','__NAME__ = your name']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">คุณชื่ออะไร?</span> (khun chue arai)?',tr:'คุณชื่ออะไร'},
        {t:'chal',en:'What\'s your name?',tr:'คุณชื่ออะไร',pr:'khun chue arai',morph:['คุณ = you','ชื่อ = to be named','อะไร = what']},
        {t:'say',text:'Nice to meet you is <span class="inline-tr">ยินดีที่ได้รู้จัก</span> (yindi thi dai rujak).',tr:'ยินดีที่ได้รู้จัก'},
        {t:'chal',en:'Nice to meet you',tr:'ยินดีที่ได้รู้จักครับ',pr:'yindi thi dai rujak khrap',morph:['ยินดี = glad','ได้รู้จัก = to have met','ครับ = polite (man)']}
      ],
      blocks:['<code>ผมชื่อ…</code> / <code>ฉันชื่อ…</code> = my name is…','<code>คุณชื่ออะไร?</code> = what\'s your name?','<code>ยินดีที่ได้รู้จัก</code> = nice to meet you'] },
    { id:11, title:'Health & getting help', focus:'ช่วยด้วย · หมอ · โรงพยาบาล · ไม่เข้าใจ',
      steps:[
        {t:'say',text:'The most important words if you need help: <span class="inline-tr">ช่วยด้วย</span> (chuai duai) — help! and <span class="inline-tr">หมอ</span> (mo) — doctor.',tr:'ช่วยด้วย'},
        {t:'words',items:[{tr:'ช่วยด้วย',pr:'chuai duai',en:'help!'},{tr:'หมอ',pr:'mo',en:'doctor'},{tr:'โรงพยาบาล',pr:'rong phayaban',en:'hospital'},{tr:'ยา',pr:'ya',en:'medicine'},{tr:'ไม่เข้าใจ',pr:'mai khao chai',en:'I don\'t understand'}]},
        {t:'chal',en:'Help!',tr:'ช่วยด้วย',pr:'chuai duai',morph:['ช่วย = to help','ด้วย = please']},
        {t:'say',text:'To say you don\'t understand: <span class="inline-tr">ไม่เข้าใจ</span> (mai khao chai). Saying it after <span class="inline-tr">ขอโทษ</span> (sorry) is very polite.',tr:'ไม่เข้าใจ'},
        {t:'chal',en:'Sorry, I don\'t understand',tr:'ขอโทษครับ ผมไม่เข้าใจ',pr:'kho thot khrap, phom mai khao chai',morph:['ขอโทษ = sorry','ผม = I (man)','ไม่เข้าใจ = I don\'t understand']},
        {t:'chal',en:'Where is the hospital?',tr:'โรงพยาบาลอยู่ที่ไหน',pr:'rong phayaban yu thi nai',morph:['โรงพยาบาล = hospital','อยู่ = is located','ที่ไหน = where']}
      ],
      blocks:['<code>ช่วยด้วย!</code> = help!','<code>หมอ</code> = doctor','<code>ไม่เข้าใจ</code> = I don\'t understand'] },
    { id:12, title:'Tying it together', focus:'สวัสดี · ขอน้ำ · ที่ไหน · ขอบคุณ',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolbox. This capstone uses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello, how are you?',tr:'สวัสดีครับ สบายดีไหม',pr:'sawasdee khrap, sabai dii mai',morph:['สวัสดี = hello','ครับ = polite (man)','สบายดีไหม = how are you?']},
        {t:'chal',en:'Could I have some water, please?',tr:'ขอน้ำหน่อยครับ',pr:'kho nam noi khrap',morph:['ขอ = may I have','น้ำ = water','หน่อย = a bit','ครับ = polite (man)']},
        {t:'chal',en:'How much is it?',tr:'ราคาเท่าไหร่',pr:'rakha thao rai',morph:['ราคา = price','เท่าไหร่ = how much']},
        {t:'chal',en:'Where is the bathroom?',tr:'ห้องน้ำอยู่ที่ไหน',pr:'hong nam yu thi nai',morph:['ห้องน้ำ = bathroom','อยู่ = is located','ที่ไหน = where']},
        {t:'chal',en:'Delicious! Thank you!',tr:'อร่อยมาก ขอบคุณครับ',pr:'aroi mak, khop khun khrap',morph:['อร่อย = delicious','มาก = very','ขอบคุณ = thank you','ครับ = polite (man)']}
      ],
      blocks:['You built: greetings, ordering, prices, directions, thanks — a full day out in Thai.'] },
    { id:13, title:'Airport & tickets', focus:'สนามบิน · หนังสือเดินทาง · ตั๋ว · เที่ยวบิน',
      steps:[
        {t:'say',text:'You have landed. The building is the <span class="inline-tr">สนามบิน</span>. Your document is a <span class="inline-tr">หนังสือเดินทาง</span>.',tr:'สนามบิน'},
        {t:'words',items:[{tr:'สนามบิน',pr:'sa-naam-bin',en:'the airport'},{tr:'หนังสือเดินทาง',pr:'nang-sue dern-taang',en:'the passport'},{tr:'ตั๋ว',pr:'dtua',en:'the ticket'},{tr:'เที่ยวบิน',pr:'tiaow-bin',en:'the flight'},{tr:'ประตู',pr:'pra-dtoo',en:'the gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'สนามบินอยู่ที่ไหน?',pr:'sa-naam-bin yoo-tee-nai',morph:['สนามบิน = the airport','อยู่ที่ไหน? = where is it?']},
        {t:'chal',en:'Here is my passport',tr:'นี่หนังสือเดินทางของฉัน',pr:'nee nang-sue dern-taang kawng-chan',morph:['นี่ = here is','หนังสือเดินทางของฉัน = my passport']},
        {t:'chal',en:'A ticket, please',tr:'ขอตั๋วหน่อย',pr:'kaw dtua noi',morph:['ขอ = please give','ตั๋ว = ticket','หน่อย = a bit']},
        {t:'chal',en:'Where is the gate?',tr:'ประตูอยู่ที่ไหน?',pr:'pra-dtoo yoo-tee-nai',morph:['ประตู = the gate','อยู่ที่ไหน? = where is it?']}
      ],
      blocks:['<code>สนามบิน</code> = airport','<code>หนังสือเดินทาง</code> = passport','<code>ตั๋ว</code> = ticket','<code>ประตู</code> = gate'] },
    { id:14, title:'The taxi', focus:'แท็กซี่ · ไป · โรงแรม · จอด',
      steps:[
        {t:'say',text:'The driver is waiting. <span class="inline-tr">แท็กซี่</span> is the word you need. Tell them where to go with <span class="inline-tr">อยากไป</span>.',tr:'แท็กซี่'},
        {t:'words',items:[{tr:'แท็กซี่',pr:'tak-see',en:'the taxi'},{tr:'คนขับ',pr:'kon-kap',en:'the driver'},{tr:'อยากไป',pr:'yak-bpai',en:'I want to go'},{tr:'จอดที่นี่',pr:'jawt-tee-nee',en:'stop here'}]},
        {t:'chal',en:'Taxi, please',tr:'แท็กซี่หน่อย',pr:'tak-see noi',morph:['แท็กซี่ = taxi','หน่อย = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'อยากไปโรงแรม',pr:'yak-bpai rohng-raem',morph:['อยากไป = I want to go','โรงแรม = hotel']},
        {t:'chal',en:'Stop here, please',tr:'จอดที่นี่หน่อย',pr:'jawt-tee-nee noi',morph:['จอดที่นี่ = stop here','หน่อย = please']},
        {t:'chal',en:'How much is it?',tr:'เท่าไหร่?',pr:'tao-rai',morph:['เท่าไหร่? = how much?']}
      ],
      blocks:['<code>อยากไป …</code> = I want to go to …','<code>จอดที่นี่</code> = stop here'] },
    { id:15, title:'The hotel', focus:'จอง · ห้อง · กุญแจ · คืน',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">ฉันจองไว้แล้ว</span> — I have a reservation.',tr:'จอง'},
        {t:'words',items:[{tr:'โรงแรม',pr:'rohng-raem',en:'the hotel'},{tr:'จอง',pr:'jawng',en:'the reservation'},{tr:'ห้อง',pr:'hong',en:'the room'},{tr:'กุญแจ',pr:'goon-jae',en:'the key'},{tr:'หนึ่งคืน',pr:'neung-keun',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'ฉันจองไว้แล้ว',pr:'chan jawng wai laew',morph:['ฉัน = I','จองไว้แล้ว = have a reservation']},
        {t:'chal',en:'A room for one night, please',tr:'ขอห้องหนึ่งคืน',pr:'kaw hong neung-keun',morph:['ขอห้อง = a room please','หนึ่งคืน = one night']},
        {t:'chal',en:'The key, please',tr:'ขอกุญแจหน่อย',pr:'kaw goon-jae noi',morph:['กุญแจ = the key','หน่อย = please']},
        {t:'chal',en:'Where is my room?',tr:'ห้องของฉันอยู่ที่ไหน?',pr:'hong kawng-chan yoo-tee-nai',morph:['ห้องของฉัน = my room','อยู่ที่ไหน? = where is it?']}
      ],
      blocks:['<code>จอง</code> = reservation','<code>ห้อง</code> = room','<code>กุญแจ</code> = key'] },
    { id:16, title:'Ask for help', focus:'ไม่เข้าใจ · พูดช้าๆ · ภาษาอังกฤษ',
      steps:[
        {t:'say',text:'When the language is too fast: <span class="inline-tr">พูดช้าๆ หน่อย</span> — slower, please.',tr:'พูดช้าๆ หน่อย'},
        {t:'words',items:[{tr:'พูดช้าๆ',pr:'poot-chaa-chaa',en:'slower'},{tr:'อีกครั้ง',pr:'eek-krang',en:'again'},{tr:'ภาษาอังกฤษ',pr:'paa-saa-ang-grit',en:'English'},{tr:'ช่วยได้ไหม?',pr:'chuay-dai-mai',en:'can you help?'}]},
        {t:'chal',en:'I don\'t understand',tr:'ไม่เข้าใจ',pr:'mai khao-jai',morph:['ไม่ = not','เข้าใจ = understand']},
        {t:'chal',en:'Slower, please',tr:'พูดช้าๆ หน่อย',pr:'poot-chaa-chaa noi',morph:['พูดช้าๆ = speak slower','หน่อย = please']},
        {t:'chal',en:'Can you help me?',tr:'ช่วยได้ไหม?',pr:'chuay-dai-mai',morph:['ช่วย = help','ได้ไหม? = can you?']},
        {t:'chal',en:'Do you speak English?',tr:'พูดภาษาอังกฤษได้ไหม?',pr:'poot paa-saa-ang-grit dai-mai',morph:['พูด = speak','ภาษาอังกฤษ = English','ได้ไหม? = can you?']}
      ],
      blocks:['<code>พูดช้าๆ</code> = slower','<code>พูดภาษาอังกฤษได้ไหม?</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'cafe', title:'☕ At a café', emoji:'☕', turns:[
      {who:'You',tr:'สวัสดีครับ ขอกาแฟหน่อยครับ',pr:'sawasdee khrap, kho ka fae noi khrap',en:'Hello! Could I have a coffee, please?'},
      {who:'Barista',tr:'รับที่ร้านหรือเอากลับบ้านครับ',pr:'rap thi ran rue ao klap ban khrap',en:'For here or to go?'},
      {who:'You',tr:'เอากลับบ้านครับ',pr:'ao klap ban khrap',en:'To go, please.'},
      {who:'Barista',tr:'ครับ หกสิบบาทครับ',pr:'khrap, hok sip baat khrap',en:'OK, that\'s sixty baht.'},
      {who:'You',tr:'ขอบคุณครับ',pr:'khop khun khrap',en:'Thanks!'}
    ]},
    { id:'station', title:'🚉 At the train station', emoji:'🚉', turns:[
      {who:'You',tr:'ขอโทษครับ สถานีรถไฟอยู่ที่ไหน',pr:'kho thot khrap, sathani rot fai yu thi nai',en:'Excuse me, where\'s the train station?'},
      {who:'Local',tr:'ตรงไป แล้วเลี้ยวขวาครับ',pr:'trong pai, laew liao khwa khrap',en:'Go straight, then turn right.'},
      {who:'You',tr:'ขอบคุณครับ',pr:'khop khun khrap',en:'Thanks.'},
      {who:'Ticket',tr:'ไปกรุงเทพ ใช่ไหมครับ',pr:'pai krung thep chai mai khrap',en:'Going to Bangkok, right?'},
      {who:'You',tr:'ครับ ตั๋วหนึ่งใบเท่าไหร่ครับ',pr:'khrap, tua neung bai thao rai khrap',en:'Yes, how much is one ticket?'}
    ]},
    { id:'restaurant', title:'🍜 At a restaurant', emoji:'🍜', turns:[
      {who:'Waiter',tr:'สวัสดีค่ะ กี่คนคะ',pr:'sawasdee kha, kii khon kha',en:'Hello, how many people?'},
      {who:'You',tr:'สองคนครับ',pr:'song khon khrap',en:'Two people.'},
      {who:'You',tr:'ขอเมนูหน่อยครับ',pr:'kho menu noi khrap',en:'The menu, please.'},
      {who:'You',tr:'ขอข้าวผัดกุ้งครับ',pr:'kho khao phat kung khrap',en:'I\'ll have the shrimp fried rice.'},
      {who:'Waiter',tr:'ได้เลยค่ะ รอสักครู่',pr:'dai loei kha, ro sak khru',en:'Right away, please wait a moment.'},
      {who:'You',tr:'อร่อยมาก ขอบคุณครับ',pr:'aroi mak, khop khun khrap',en:'Delicious, thank you!'}
    ]},
    { id:'shop', title:'🛍️ Shopping', emoji:'🛍️', turns:[
      {who:'You',tr:'อันนี้ราคาเท่าไหร่ครับ',pr:'an ni rakha thao rai khrap',en:'How much is this?'},
      {who:'Seller',tr:'หนึ่งพันบาทค่ะ',pr:'neung phan baat kha',en:'One thousand baht.'},
      {who:'You',tr:'แพงไปหน่อย ลดหน่อยได้ไหมครับ',pr:'phaeng pai noi, lot noi dai mai khrap',en:'A bit expensive. Can you come down a little?'},
      {who:'Seller',tr:'ลดได้นะ เก้าร้อยบาทค่ะ',pr:'lot dai na, kao roi baat kha',en:'I can reduce — nine hundred baht.'},
      {who:'You',tr:'เอาครับ',pr:'ao khrap',en:'OK, I\'ll take it.'}
    ]}
  ],
  pocket: [
    {tr:'สวัสดี',pr:'sawasdee',en:'Hello / goodbye',c:'Greetings'},
    {tr:'สวัสดีครับ',pr:'sawasdee khrap',en:'Hello (a man)',c:'Greetings'},
    {tr:'ลาก่อน',pr:'la kon',en:'Goodbye',c:'Greetings'},
    {tr:'สบายดีไหม?',pr:'sabai dii mai',en:'How are you?',c:'Greetings'},
    {tr:'ผมชื่อ __NAME__',pr:'phom chue',en:'My name is...',c:'Greetings'},
    {tr:'ขอบคุณ',pr:'khop khun',en:'Thank you',c:'Courtesy'},
    {tr:'ขอบคุณมาก',pr:'khop khun mak',en:'Thanks a lot',c:'Courtesy'},
    {tr:'ขอโทษ',pr:'kho thot',en:'Sorry / excuse me',c:'Courtesy'},
    {tr:'กรุณา',pr:'karuna',en:'Please',c:'Courtesy'},
    {tr:'ใช่',pr:'chai',en:'Yes',c:'Courtesy'},
    {tr:'หนึ่ง',pr:'nueng',en:'1',c:'Numbers'},
    {tr:'สอง',pr:'song',en:'2',c:'Numbers'},
    {tr:'สาม',pr:'sam',en:'3',c:'Numbers'},
    {tr:'สี่',pr:'si',en:'4',c:'Numbers'},
    {tr:'ห้า',pr:'ha',en:'5',c:'Numbers'},
    {tr:'สิบ',pr:'sip',en:'10',c:'Numbers'},
    {tr:'น้ำ',pr:'nam',en:'water',c:'Food'},
    {tr:'ข้าว',pr:'khao',en:'rice',c:'Food'},
    {tr:'กาแฟ',pr:'ka fae',en:'coffee',c:'Food'},
    {tr:'เมนู',pr:'menu',en:'the menu',c:'Food'},
    {tr:'อร่อย',pr:'aroi',en:'delicious',c:'Food'},
    {tr:'ที่ไหน',pr:'thi nai',en:'where?',c:'Directions'},
    {tr:'ซ้าย',pr:'sai',en:'left',c:'Directions'},
    {tr:'ขวา',pr:'khwa',en:'right',c:'Directions'},
    {tr:'ตรงไป',pr:'trong pai',en:'straight ahead',c:'Directions'},
    {tr:'ราคาเท่าไหร่?',pr:'rakha thao rai',en:'how much is it?',c:'Shopping'},
    {tr:'แพง',pr:'phaeng',en:'expensive',c:'Shopping'},
    {tr:'คุณมี…ไหม?',pr:'khun mii ... mai',en:'do you have...?',c:'Shopping'},
    {tr:'ช่วยด้วย!',pr:'chuai duai',en:'Help!',c:'Emergency'},
    {tr:'ไม่เข้าใจ',pr:'mai khao chai',en:'I don\'t understand',c:'Emergency'},
    {tr:'ห้องน้ำ',pr:'hong nam',en:'the bathroom',c:'Emergency'},
    {tr:'หมอ',pr:'mo',en:'doctor',c:'Emergency'},
    {tr:'วันนี้',pr:'wan ni',en:'today',c:'Time'},
    {tr:'พรุ่งนี้',pr:'phrung ni',en:'tomorrow',c:'Time'},
    {tr:'อากาศ',pr:'akat',en:'weather',c:'Time'},
    {tr:'สนามบิน',pr:'sa-naam-bin',en:'the airport',c:'Travel'},
    {tr:'หนังสือเดินทาง',pr:'nang-sue dern-taang',en:'the passport',c:'Travel'},
    {tr:'ตั๋ว',pr:'dtua',en:'the ticket',c:'Travel'},
    {tr:'แท็กซี่',pr:'tak-see',en:'the taxi',c:'Travel'},
    {tr:'โรงแรม',pr:'rohng-raem',en:'the hotel',c:'Travel'},
    {tr:'ฉันจองไว้แล้ว',pr:'chan jawng wai laew',en:'I have a reservation',c:'Travel'},
    {tr:'พูดช้าๆ หน่อย',pr:'poot-chaa-chaa noi',en:'Slower, please',c:'Travel'},
    {tr:'พูดภาษาอังกฤษได้ไหม?',pr:'poot paa-saa-ang-grit dai-mai',en:'Do you speak English?',c:'Travel'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Shopping','Emergency','Time','Travel'],
  culture: [
    {icon:'🙏',title:'The wai greeting',body:'Hands together in a prayer-like gesture. The higher you hold them and the lower you bow, the more respect you show. A wai to an elder or monk should be higher than a wai to a friend.'},
    {icon:'🎵',title:'Tones change meaning',body:'The same syllable at a different pitch can be a different word entirely. Don\'t stress about perfect tones — context, a smile and the polite particles do most of the work.'},
    {icon:'🍜',title:'Street food is king',body:'Meals are small, frequent and shared. Thai people often eat several times a day, so a bustling street stall is a way of life — and often the best food in town.'},
    {icon:'👑',title:'Respect the monarchy',body:'The royal family is deeply respected. Always speak of the monarchy respectfully and never make jokes about it — it\'s a serious cultural and legal matter.'},
    {icon:'😊',title:'"Mai pen rai"',body:'Meaning \'never mind\' or \'it\'s okay\'. Keeping calm and smiling through small problems is a real Thai value. Getting visibly angry loses respect, not face.'},
    {icon:'👣',title:'Head is sacred, feet are low',body:'The head is the highest and most respected part of the body; feet are the lowest. Don\'t touch someone\'s head or point your feet at people or sacred images.'}
  ],
  sounds: [
    {l:'mid tone',say:'level and even, like a flat steady note',ex:'มา = maa = to come',voice:'มา'},
    {l:'low tone',say:'starts low and stays low, a touch short',ex:'ข่า = khaa = galangal (a spice)',voice:'ข่า'},
    {l:'falling tone',say:'starts high, then falls sharply',ex:'ม้า = maa = horse',voice:'ม้า'},
    {l:'high tone',say:'starts high and rises a little higher',ex:'ช้า = chaa = slow',voice:'ช้า'},
    {l:'rising tone',say:'starts low and rises, like a question',ex:'หมา = maa = dog',voice:'หมา'},
    {l:'ก vs ค',say:'plain "k" (no puff of air) vs breathy "kh". The same plain-vs-breathy contrast applies to ด / ต and บ / ป.',ex:'กา = kaa (crow) · คา = khaa (stuck)',voice:'กา'},
    {l:'ง',say:'like "ng" in sing — never silent',ex:'งาน = ngaan = work',voice:'งาน'},
    {l:'ร vs ล',say:'rolled "r" vs soft "l"',ex:'รัก = rak = love · ลา = laa = leave',voice:'รัก'}
  ],
  resources: [
    {icon:'🗣️',t:'Learn Thai with Mod',d:'Clear, friendly beginner lessons from a native Thai teacher — great for everyday phrases.',q:'Learn Thai with Mod'},
    {icon:'🎧',t:'ThaiPod101',d:'Structured audio lessons and podcasts for every level, easy to learn on the go.',q:'ThaiPod101'},
    {icon:'📚',t:'Easy Thai',d:'Real street interviews with native speakers and subtitles — natural, contextual Thai.',q:'Easy Thai street interviews'},
    {icon:'💬',t:'Learn Thai from a White Guy',d:'A famous, very systematic beginner course that explains Thai script and tones clearly.',q:'Learn Thai from a White Guy'},
    {icon:'🎵',t:'Slow Thai listening',d:'Easy listening designed for learners — perfect for a walk or commute.',q:'slow thai for beginners'}
  ]
};
