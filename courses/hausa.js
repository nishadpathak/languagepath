/* ---- hausa ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["hausa"] = {
  name: 'Hausa',
  flag: '🇳🇬',
  tts: 'ha-NG',
  dir: 'ltr',
  native: 'Hausa',
  soundTitle: 'Hausa sounds & spelling',
  soundIntro: 'Hausa uses a few special Latin letters for sounds English doesn\'t have. Nail the implosives and glottalized letters and you\'ll sound far more natural.',
  grammar: '<p>Hausa uses <b>Subject–Verb–Object</b> order: <i>Ina son ruwa</i> = I (subject) <b>want</b> (verb) water (object). Nouns have <b>gender</b> (masculine/feminine). The linking word <b>na</b> means "of" for masculine nouns and <b>ta</b> for feminine, e.g. <i>gida</i> (house, masculine). Hausa is written in Latin letters but adds special ones for the implosive/clipped sounds: <b>ɓ</b>, <b>ɗ</b>, <b>ƙ</b>, the glottalized <b>\'y</b>, and the ejective <b>ts</b>.</p>',
  bridges: '<div class="note">🇳🇬 <b>Hausa & Arabic.</b> Hausa has borrowed heavily from Arabic, especially for religion, wellbeing and daily life: <i>lafiya</i> (health), <i>salla</i> (prayer), <i>assalamu alaikum</i> (peace be upon you), <i>Juma\'a</i> (Friday).</div><div class="note">🇬🇧 <b>English.</b> Everyday English words have slipped into Hausa too: <i>kofi</i> (coffee), <i>tebur</i> (table), <i>tiku</i> (ticket), <i>motar</i> (car).</div>',
  lessons: [
    { id:1, title:'Greetings & being polite', focus:'sannu · ina kwana? · na gode · don Allah',
      steps:[
        {t:'say',text:'Start with the word you\'ll use everywhere: <span class="inline-tr">sannu</span> — hello. Say it warmly.',tr:'sannu'},
        {t:'words',items:[{tr:'sannu',pr:'SAN-noo',en:'hello'},{tr:'ina kwana?',pr:'EE-nah KWAH-nah',en:'how did you sleep? (morning hello)'},{tr:'barka da safiya',pr:'BAR-kah dah sah-FEE-yah',en:'good morning'},{tr:'na gode',pr:'nah GOH-deh',en:'thank you'},{tr:'don Allah',pr:'don AH-lah',en:'please'}]},
        {t:'chal',en:'Hello, thank you',tr:'Sannu, na gode',pr:'SAN-noo, nah GOH-deh',morph:['sannu = hello','na gode = thank you']},
        {t:'say',text:'The morning greeting <span class="inline-tr">ina kwana?</span> literally means "how did you sleep?". Reply with <span class="inline-tr">lafiya</span> — fine/healthy (from Arabic).',tr:'ina kwana?'},
        {t:'words',items:[{tr:'ina kwana?',pr:'EE-nah KWAH-nah',en:'how are you? (morning)'},{tr:'lafiya',pr:'lah-FEE-yah',en:'fine / healthy',link:'≈ Arabic \'āfiya'},{tr:'barka da yamma',pr:'BAR-kah dah YAM-mah',en:'good evening'},{tr:'sannu da zuwa',pr:'SAN-noo dah ZOO-wah',en:'welcome'}]},
        {t:'chal',en:'How are you? Fine, thanks.',tr:'Ina kwana? Lafiya, na gode.',pr:'EE-nah KWAH-nah? lah-FEE-yah, nah GOH-deh',morph:['ina kwana? = how are you?','lafiya = fine','na gode = thank you']}
      ],
      blocks:['<code>sannu</code> = hello','<code>ina kwana?</code> = how are you? (morning)','<code>na gode</code> = thank you · <code>don Allah</code> = please'] },
    { id:2, title:'Numbers 1–10', focus:'ɗaya · biyu · uku · goma',
      steps:[
        {t:'say',text:'Numbers are the fastest win. Listen and repeat: <span class="inline-tr">ɗaya, biyu, uku</span>.',tr:'ɗaya'},
        {t:'words',items:[{tr:'ɗaya',pr:'DAH-yah',en:'1'},{tr:'biyu',pr:'BEE-yoo',en:'2'},{tr:'uku',pr:'OO-koo',en:'3'},{tr:'huɗu',pr:'HOO-doo',en:'4'},{tr:'biyar',pr:'BEE-yar',en:'5'},{tr:'goma',pr:'GOH-mah',en:'10'}]},
        {t:'chal',en:'Two waters, please',tr:'Ruwa biyu, don Allah',pr:'ROO-wah BEE-yoo, don AH-lah',morph:['ruwa = water','biyu = two','don Allah = please']},
        {t:'say',text:'To ask a price: <span class="inline-tr">Nawa ne?</span> — how much is it? A shopping essential.',tr:'Nawa ne?'},
        {t:'chal',en:'How much is it?',tr:'Nawa ne?',pr:'NAH-wah neh?',morph:['nawa = how much','ne = is (it)']},
        {t:'chal',en:'It\'s five naira',tr:'Naira biyar',pr:'NY-rah BEE-yar',morph:['naira = naira (money)','biyar = five']}
      ],
      blocks:['ɗaya, biyu, uku, huɗu, biyar = 1–5','<code>nawa ne?</code> = how much is it?'] },
    { id:3, title:'"I want" — ina son', focus:'ina son · don Allah · ina bukatar',
      steps:[
        {t:'say',text:'The phrase to ask for anything: <span class="inline-tr">Ina son</span> — I want. Add <span class="inline-tr">don Allah</span> (please) to be polite.',tr:'ina son'},
        {t:'words',items:[{tr:'ina son',pr:'EE-nah son',en:'I want'},{tr:'ina bukatar',pr:'EE-nah boo-KAH-tar',en:'I need'},{tr:'don Allah',pr:'don AH-lah',en:'please'},{tr:'lafiya',pr:'lah-FEE-yah',en:'fine'}]},
        {t:'chal',en:'I want water',tr:'Ina son ruwa',pr:'EE-nah son ROO-wah',morph:['ina son = I want','ruwa = water']},
        {t:'chal',en:'I want food',tr:'Ina son abinci',pr:'EE-nah son ah-BIN-chee',morph:['ina son = I want','abinci = food']},
        {t:'say',text:'The linking word <span class="inline-tr">na</span> means \'of\' for masculine nouns, <span class="inline-tr">ta</span> for feminine. <b>gida</b> (house) is masculine → <b>gidan</b>.',tr:'na / ta'},
        {t:'chal',en:'I need help',tr:'Ina bukatar taimako',pr:'EE-nah boo-KAH-tar tai-MAH-koh',morph:['ina bukatar = I need','taimako = help']}
      ],
      blocks:['<code>ina son</code> = I want','<code>ina bukatar</code> = I need','<code>na / ta</code> = of (masc / fem)'] },
    { id:4, title:'Food & drink', focus:'abinci · ruwa · kofi · nama',
      steps:[
        {t:'say',text:'Eating out? Key words: <span class="inline-tr">abinci</span> (food), <span class="inline-tr">ruwa</span> (water), <span class="inline-tr">nama</span> (meat).',tr:'abinci'},
        {t:'words',items:[{tr:'abinci',pr:'ah-BIN-chee',en:'food'},{tr:'ruwa',pr:'ROO-wah',en:'water'},{tr:'nama',pr:'NAH-mah',en:'meat'},{tr:'kofi',pr:'KOH-fee',en:'coffee',link:'≈ English coffee'},{tr:'shayi',pr:'SHAH-yee',en:'tea',link:'≈ Arabic/English tea'},{tr:'burodi',pr:'boo-ROH-dee',en:'bread',link:'≈ English bread'}]},
        {t:'chal',en:'I want food and water',tr:'Ina son abinci da ruwa',pr:'EE-nah son ah-BIN-chee dah ROO-wah',morph:['ina son = I want','abinci = food','da = and','ruwa = water']},
        {t:'chal',en:'I want a coffee, please',tr:'Ina son kofi, don Allah',pr:'EE-nah son KOH-fee, don AH-lah',morph:['ina son = I want','kofi = coffee','don Allah = please']},
        {t:'say',text:'To say something tastes great: <span class="inline-tr">abin yayi daɗi</span> — it\'s delicious. Literally "the thing became sweet".',tr:'abin yayi daɗi'},
        {t:'chal',en:'It\'s delicious!',tr:'Abin yayi daɗi!',pr:'AH-bin YAH-yee DAH-dee',morph:['abin = the thing','yayi daɗi = became sweet / delicious']}
      ],
      blocks:['<code>abinci</code>, <code>ruwa</code>, <code>nama</code> = food, water, meat','<code>abin yayi daɗi</code> = it\'s delicious'] },
    { id:5, title:'Getting around', focus:'ina ne? · dama · hagu · kasuwa',
      steps:[
        {t:'say',text:'The most useful question anywhere: <span class="inline-tr">Ina ne …?</span> — where is …?',tr:'Ina ne?'},
        {t:'words',items:[{tr:'ina ne...?',pr:'EE-nah neh',en:'where is...?'},{tr:'dama',pr:'DAH-mah',en:'to the right'},{tr:'hagu',pr:'HAH-goo',en:'to the left'},{tr:'kasuwa',pr:'kah-SOO-wah',en:'market'},{tr:'tasha',pr:'TAH-shah',en:'station / stop',link:'≈ English stop'},{tr:'asibiti',pr:'ah-see-BEE-tee',en:'hospital',link:'≈ English hospital'}]},
        {t:'chal',en:'Where is the market?',tr:'Ina ne kasuwa?',pr:'EE-nah neh kah-SOO-wah',morph:['ina ne = where is','kasuwa = the market']},
        {t:'chal',en:'Where is the hospital?',tr:'Ina ne asibiti?',pr:'EE-nah neh ah-see-BEE-tee',morph:['ina ne = where is','asibiti = hospital']},
        {t:'say',text:'<span class="inline-tr">dama</span> and <span class="inline-tr">hagu</span> tell you which way. \'Straight ahead\' is <span class="inline-tr">kai tsaye</span>.',tr:'kai tsaye'},
        {t:'chal',en:'Straight ahead',tr:'Kai tsaye',pr:'kai TSAH-yeh',morph:['kai tsaye = straight ahead']}
      ],
      blocks:['<code>ina ne…?</code> = where is…?','<code>dama</code> / <code>hagu</code> = right / left'] },
    { id:6, title:'Questions & "do you have…?"', focus:'kana da? · akwai · menene',
      steps:[
        {t:'say',text:'To ask if someone has something: <span class="inline-tr">Kana da…?</span> (to a male) or <span class="inline-tr">Kina da…?</span> (to a female).',tr:'kana da'},
        {t:'chal',en:'Do you have a table?',tr:'Kana da tebur?',pr:'KAH-nah dah TAY-boor',morph:['kana da = do you have','tebur = table']},
        {t:'say',text:'<span class="inline-tr">Akwai…?</span> = is there…? Very handy for asking what\'s around.',tr:'akwai'},
        {t:'chal',en:'Is there water?',tr:'Akwai ruwa?',pr:'ah-KWAI ROO-wah',morph:['akwai = is there','ruwa = water']},
        {t:'say',text:'Question words: <span class="inline-tr">menene</span> (what), <span class="inline-tr">wane</span> (which), <span class="inline-tr">nawa</span> (how much), <span class="inline-tr">ina</span> (where).',tr:'menene'},
        {t:'chal',en:'What is this?',tr:'Menene wannan?',pr:'meh-neh-NEH WAN-nan',morph:['menene = what','wannan = this']}
      ],
      blocks:['<code>kana da…?</code> = do you have…?','<code>akwai…?</code> = is there…?','<code>menene</code> = what'] },
    { id:7, title:'Family & people', focus:'iyali · uwa · uba · aboki',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">iyali</span> (family), <span class="inline-tr">uwa</span> (mother), <span class="inline-tr">uba</span> (father).',tr:'iyali'},
        {t:'words',items:[{tr:'iyali',pr:'ee-YAH-lee',en:'family'},{tr:'uwa',pr:'OO-wah',en:'mother'},{tr:'uba',pr:'OO-bah',en:'father'},{tr:'aboki',pr:'ah-BOH-kee',en:'friend'},{tr:'yara',pr:'YAH-rah',en:'children'}]},
        {t:'chal',en:'I have a friend',tr:'Ina da aboki',pr:'EE-nah dah ah-BOH-kee',morph:['ina da = I have','aboki = friend']},
        {t:'say',text:'<span class="inline-tr">Ina da</span> = I have. It\'s how you say what you\'ve got.',tr:'ina da'},
        {t:'chal',en:'I have a family',tr:'Ina da iyali',pr:'EE-nah dah ee-YAH-lee',morph:['ina da = I have','iyali = family']}
      ],
      blocks:['<code>uwa</code> / <code>uba</code> = mother / father','<code>aboki</code> = friend','<code>ina da</code> = I have'] },
    { id:8, title:'Time, days & weather', focus:'yau · gobe · rana · yanayi',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">yau</span>, tomorrow is <span class="inline-tr">gobe</span>.',tr:'yau'},
        {t:'words',items:[{tr:'yau',pr:'yow',en:'today'},{tr:'gobe',pr:'GOH-beh',en:'tomorrow'},{tr:'yanzu',pr:'YAN-zoo',en:'now'},{tr:'rana',pr:'RAH-nah',en:'sun / day'},{tr:'Juma\'a',pr:'joo-MAH-ah',en:'Friday',link:'≈ Arabic jumu\'a'}]},
        {t:'chal',en:'See you tomorrow',tr:'Sai gobe',pr:'sai GOH-beh',morph:['sai = until / see you','gobe = tomorrow']},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">Yaya yanayi?</span> — how\'s the weather?',tr:'Yaya yanayi?'},
        {t:'chal',en:'It\'s raining',tr:'Ana ruwan sama',pr:'AH-nah ROO-wan SAH-mah',morph:['ana ruwan sama = it is raining']}
      ],
      blocks:['<code>yau</code> / <code>gobe</code> = today / tomorrow','<code>yaya yanayi?</code> = how\'s the weather?'] },
    { id:9, title:'Your name', focus:'sunana · menene sunanka? · ni ... ne',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">Sunana …</span> — my name is …, then say your name. <span class="inline-tr">Ni</span> = I.',tr:'Sunana'},
        {t:'chal',en:'My name is __NAME__',tr:'Sunana __NAME__ ne',pr:'soo-NAH-nah __NAME__ neh',morph:['sunana = my name','ne = is (it)']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">Menene sunanka?</span> (to a male) or <span class="inline-tr">sunanki?</span> (to a female).',tr:'Menene sunanka?'},
        {t:'chal',en:'What\'s your name?',tr:'Menene sunanka?',pr:'meh-neh-NEH soo-NAHN-kah',morph:['menene = what','sunanka = your name']},
        {t:'chal',en:'Pleased to meet you',tr:'Na yi farin ciki',pr:'nah yee FAH-rin CHEE-kee',morph:['na yi farin ciki = I\'m pleased']}
      ],
      blocks:['<code>sunana … ne</code> = my name is …','<code>menene sunanka?</code> = what\'s your name?'] },
    { id:10, title:'Health & emergency', focus:'taimako! · likita · asibiti · ba na gane ba',
      steps:[
        {t:'say',text:'The most important words if you need help: <span class="inline-tr">Taimako!</span> (help!), <span class="inline-tr">likita</span> (doctor), <span class="inline-tr">asibiti</span> (hospital).',tr:'Taimako!'},
        {t:'words',items:[{tr:'Taimako!',pr:'tai-MAH-koh',en:'help!'},{tr:'likita',pr:'lee-KEE-tah',en:'doctor',link:'≈ Arabic/English doctor'},{tr:'asibiti',pr:'ah-see-BEE-tee',en:'hospital',link:'≈ English hospital'},{tr:'Ba na gane ba',pr:'bah nah GAH-neh bah',en:'I don\'t understand'}]},
        {t:'chal',en:'Help!',tr:'Taimako!',pr:'tai-MAH-koh',morph:['taimako = help']},
        {t:'chal',en:'I don\'t understand',tr:'Ba na gane ba',pr:'bah nah GAH-neh bah',morph:['ba na gane ba = I don\'t understand']},
        {t:'say',text:'<span class="inline-tr">Ina bukatar taimako</span> = I need help.',tr:'Ina bukatar taimako'},
        {t:'chal',en:'I need help',tr:'Ina bukatar taimako',pr:'EE-nah boo-KAH-tar tai-MAH-koh',morph:['ina bukatar = I need','taimako = help']}
      ],
      blocks:['<code>taimako!</code> = help!','<code>likita</code> = doctor','<code>ba na gane ba</code> = I don\'t understand'] },
    { id:11, title:'Describing things', focus:'mai kyau · babba · karami · sosai',
      steps:[
        {t:'say',text:'Appearance words are handy: <span class="inline-tr">mai kyau</span> (beautiful/good), <span class="inline-tr">babba</span> (big), <span class="inline-tr">karami</span> (small).',tr:'mai kyau'},
        {t:'words',items:[{tr:'mai kyau',pr:'my KYA-oo',en:'beautiful / good'},{tr:'babba',pr:'BAHB-bah',en:'big'},{tr:'karami',pr:'kah-RAH-mee',en:'small'},{tr:'sosai',pr:'soh-SAI',en:'very / a lot'}]},
        {t:'chal',en:'Very good',tr:'Yayi kyau sosai',pr:'YAH-yee KYA-oo soh-SAI',morph:['yayi kyau = it is good','sosai = very']},
        {t:'chal',en:'A big house',tr:'Babban gida',pr:'BAHB-ban GEE-dah',morph:['babban = big','gida = house']}
      ],
      blocks:['<code>mai kyau</code> = good / beautiful','<code>babba</code> / <code>karami</code> = big / small','<code>sosai</code> = very'] },
    { id:12, title:'Tying it together', focus:'greetings · ordering · directions · thanks',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolbox. This capstone uses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello, how are you?',tr:'Sannu, ina kwana?',pr:'SAN-noo, EE-nah KWAH-nah',morph:['sannu = hello','ina kwana? = how are you?']},
        {t:'chal',en:'I want a water, please',tr:'Ina son ruwa, don Allah',pr:'EE-nah son ROO-wah, don AH-lah',morph:['ina son = I want','ruwa = water','don Allah = please']},
        {t:'chal',en:'Where is the market?',tr:'Ina ne kasuwa?',pr:'EE-nah neh kah-SOO-wah',morph:['ina ne = where is','kasuwa = market']},
        {t:'chal',en:'How much is it?',tr:'Nawa ne?',pr:'NAH-wah neh?',morph:['nawa ne? = how much is it?']},
        {t:'chal',en:'Delicious! Thank you!',tr:'Yayi daɗi! Na gode!',pr:'YAH-yee DAH-dee, nah GOH-deh',morph:['yayi daɗi = delicious','na gode = thank you']}
      ],
      blocks:['You built: greetings, ordering, directions, prices, thanks — a full day out in Hausa.'] },
    { id:13, title:'Airport & tickets', focus:'filin jirgin sama · fasfo · tikiti · ƙofa',
      steps:[
        {t:'say',text:'You have landed. The building is the <span class="inline-tr">filin jirgin sama</span>. Your document is a <span class="inline-tr">fasfo</span>.',tr:'filin jirgin sama'},
        {t:'words',items:[{tr:'filin jirgin sama',pr:'FEE-lin JEER-gin SAH-mah',en:'airport'},{tr:'fasfo',pr:'FAS-foh',en:'passport'},{tr:'tikiti',pr:'tee-KEE-tee',en:'ticket'},{tr:'jirgi',pr:'JEER-gee',en:'flight / plane'},{tr:'ƙofa',pr:'KOH-fah',en:'gate / door'}]},
        {t:'chal',en:'Where is the airport?',tr:'Ina ne filin jirgin sama?',pr:'EE-nah neh FEE-lin JEER-gin SAH-mah',morph:['ina ne = where is','filin jirgin sama = airport']},
        {t:'chal',en:'Here is my passport',tr:'Ga fasfona',pr:'gah fas-FOH-nah',morph:['ga = here is','fasfona = my passport']},
        {t:'chal',en:'A ticket, please',tr:'Tikiti ɗaya, don Allah',pr:'tee-KEE-tee DAH-yah, don AH-lah',morph:['tikiti = ticket','ɗaya = one','don Allah = please']},
        {t:'chal',en:'Where is the gate?',tr:'Ina ne ƙofa?',pr:'EE-nah neh KOH-fah',morph:['ina ne = where is','ƙofa = gate']}
      ],
      blocks:['<code>filin jirgin sama</code> = airport','<code>fasfo</code> = passport','<code>tikiti</code> = ticket','<code>ƙofa</code> = gate'] },
    { id:14, title:'The taxi', focus:'tasi · je · otal · tsaya nan',
      steps:[
        {t:'say',text:'The driver is waiting. <span class="inline-tr">Tasi</span> is taxi. Tell them where to go with <span class="inline-tr">ina so in je</span>.',tr:'tasi'},
        {t:'words',items:[{tr:'tasi',pr:'TAH-see',en:'taxi'},{tr:'direba',pr:'dee-REH-bah',en:'driver'},{tr:'ina so in je',pr:'EE-nah so in jeh',en:'I want to go'},{tr:'tsaya nan',pr:'TSAH-yah nan',en:'stop here'}]},
        {t:'chal',en:'Taxi, please',tr:'Tasi, don Allah',pr:'TAH-see, don AH-lah',morph:['tasi = taxi','don Allah = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'Ina so in je otal',pr:'EE-nah so in jeh oh-TAHL',morph:['ina so in je = I want to go','otal = hotel']},
        {t:'chal',en:'Stop here, please',tr:'Tsaya nan, don Allah',pr:'TSAH-yah nan, don AH-lah',morph:['tsaya nan = stop here','don Allah = please']},
        {t:'chal',en:'How much is it?',tr:'Nawa ne?',pr:'NAH-wah neh?',morph:['nawa = how much','ne = is (it)']}
      ],
      blocks:['<code>ina so in je …</code> = I want to go to …','<code>tsaya nan</code> = stop here'] },
    { id:15, title:'The hotel', focus:'ajiye wuri · ɗaki · mabuɗi · dare',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">ina da ajiye wuri</span> — I have a reservation.',tr:'ajiye wuri'},
        {t:'words',items:[{tr:'otal',pr:'oh-TAHL',en:'hotel'},{tr:'ajiye wuri',pr:'ah-JEE-yeh WOO-ree',en:'reservation'},{tr:'ɗaki',pr:'DAH-kee',en:'room'},{tr:'mabuɗi',pr:'mah-BOO-dee',en:'key'},{tr:'dare ɗaya',pr:'DAH-reh DAH-yah',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'Ina da ajiye wuri',pr:'EE-nah dah ah-JEE-yeh WOO-ree',morph:['ina da = I have','ajiye wuri = reservation']},
        {t:'chal',en:'A room for one night, please',tr:'Ɗaki na dare ɗaya, don Allah',pr:'DAH-kee nah DAH-reh DAH-yah, don AH-lah',morph:['ɗaki = room','na dare ɗaya = for one night','don Allah = please']},
        {t:'chal',en:'The key, please',tr:'Mabuɗi, don Allah',pr:'mah-BOO-dee, don AH-lah',morph:['mabuɗi = key','don Allah = please']},
        {t:'chal',en:'Where is my room?',tr:'Ina ne ɗakina?',pr:'EE-nah neh dah-KEE-nah',morph:['ina ne = where is','ɗakina = my room']}
      ],
      blocks:['<code>ajiye wuri</code> = reservation','<code>ɗaki</code> = room','<code>mabuɗi</code> = key'] },
    { id:16, title:'Ask for help', focus:'ba na gane ba · a hankali · Turanci',
      steps:[
        {t:'say',text:'When the language is too fast: <span class="inline-tr">A hankali, don Allah</span> — slower, please.',tr:'A hankali, don Allah'},
        {t:'words',items:[{tr:'a hankali',pr:'ah han-KAH-lee',en:'slower / gently'},{tr:'kuma',pr:'KOO-mah',en:'again'},{tr:'Turanci',pr:'too-RAHN-chee',en:'English'},{tr:'za ka iya taimakawa?',pr:'zah kah EE-yah tai-mah-KAH-wah',en:'can you help?'}]},
        {t:'chal',en:'I don\'t understand',tr:'Ba na gane ba',pr:'bah nah GAH-neh bah',morph:['ba … ba = not','na gane = I understand']},
        {t:'chal',en:'Slower, please',tr:'A hankali, don Allah',pr:'ah han-KAH-lee, don AH-lah',morph:['a hankali = slower','don Allah = please']},
        {t:'chal',en:'Can you help me?',tr:'Za ka iya taimaka mini?',pr:'zah kah EE-yah tai-MAH-kah MEE-nee',morph:['za ka iya = can you','taimaka = help','mini = me']},
        {t:'chal',en:'Do you speak English?',tr:'Kana jin Turanci?',pr:'KAH-nah jin too-RAHN-chee',morph:['kana jin = do you speak','Turanci = English']}
      ],
      blocks:['<code>a hankali</code> = slower','<code>kana jin Turanci?</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'cafe', title:'☕ At a café', emoji:'☕', turns:[
      {who:'You',tr:'Sannu! Ina son kofi, don Allah.',pr:'SAN-noo, EE-nah son KOH-fee, don AH-lah',en:'Hello! I want a coffee, please.'},
      {who:'Barista',tr:'Na gode. Da madara?',pr:'nah GOH-deh, dah mah-DAH-rah',en:'Thank you. With milk?'},
      {who:'You',tr:'Iya, da madara, na gode.',pr:'EE-yah, dah mah-DAH-rah, nah GOH-deh',en:'Yes, with milk, thank you.'},
      {who:'Barista',tr:'Ga shi. Naira biyar.',pr:'gah shee, NY-rah BEE-yar',en:'Here it is. Five naira.'},
      {who:'You',tr:'Na gode sosai!',pr:'nah GOH-deh soh-SAI',en:'Thanks a lot!'}
    ]},
    { id:'transport', title:'🚌 Getting around', emoji:'🚌', turns:[
      {who:'You',tr:'Afan, ina ne tasha?',pr:'ah-FAHN, EE-nah neh TAH-shah',en:'Excuse me, where is the station?'},
      {who:'Local',tr:'A dama, a can.',pr:'ah DAH-mah, ah chan',en:'On the right, over there.'},
      {who:'You',tr:'Na gode. Tiku daya zuwa Kano, don Allah.',pr:'nah GOH-deh, TEE-koo DAH-yah ZOO-wah KAH-noh, don AH-lah',en:'Thanks. One ticket to Kano, please.'},
      {who:'Ticket',tr:'Naira goma. Motar tana nan.',pr:'NY-rah GOH-mah, MOH-tar TAH-nah nan',en:'Ten naira. The bus is here.'}
    ]},
    { id:'restaurant', title:'🍲 At a restaurant', emoji:'🍲', turns:[
      {who:'Waiter',tr:'Barka da yamma! Ga tebur.',pr:'BAR-kah dah YAM-mah, gah TAY-boor',en:'Good evening! Here\'s a table.'},
      {who:'You',tr:'Na gode. Ina son nama da ruwa, don Allah.',pr:'nah GOH-deh, EE-nah son NAH-mah dah ROO-wah, don AH-lah',en:'Thank you. I want meat and water, please.'},
      {who:'Waiter',tr:'Ga abincinka. Daɗi!',pr:'gah ah-BIN-chin-kah, DAH-dee',en:'Here\'s your food. Enjoy!'},
      {who:'You',tr:'Abin yayi daɗi! Na gode sosai!',pr:'AH-bin YAH-yee DAH-dee, nah GOH-deh soh-SAI',en:'It\'s delicious! Thanks a lot!'}
    ]},
    { id:'shop', title:'🛍️ Shopping', emoji:'🛍️', turns:[
      {who:'You',tr:'Afan, nawa ne wannan?',pr:'ah-FAHN, NAH-wah neh WAN-nan',en:'Excuse me, how much is this?'},
      {who:'Seller',tr:'Naira ashirin.',pr:'NY-rah ah-SHEE-rin',en:'Twenty naira.'},
      {who:'You',tr:'Ya yi tsada. Za a iya ragewa?',pr:'yah yee TSAH-dah, zah ah EE-yah rah-GEH-wah',en:'It\'s too expensive. Can you reduce it?'},
      {who:'Seller',tr:'To, naira sha biyar.',pr:'toh, NY-rah shah BEE-yar',en:'OK, fifteen naira.'},
      {who:'You',tr:'To, zan saye.',pr:'toh, zan SAH-yeh',en:'OK, I\'ll buy it.'}
    ]}
  ],
  pocket: [
    {tr:'Sannu',pr:'SAN-noo',en:'Hello',c:'Greetings'},
    {tr:'Barka da safiya',pr:'BAR-kah dah sah-FEE-yah',en:'Good morning',c:'Greetings'},
    {tr:'Barka da yamma',pr:'BAR-kah dah YAM-mah',en:'Good evening',c:'Greetings'},
    {tr:'Ina kwana?',pr:'EE-nah KWAH-nah',en:'How are you?',c:'Greetings'},
    {tr:'Sannu da zuwa',pr:'SAN-noo dah ZOO-wah',en:'Welcome',c:'Greetings'},
    {tr:'Sai gobe',pr:'sai GOH-beh',en:'See you tomorrow',c:'Greetings'},
    {tr:'Don Allah',pr:'don AH-lah',en:'Please',c:'Courtesy'},
    {tr:'Na gode',pr:'nah GOH-deh',en:'Thank you',c:'Courtesy'},
    {tr:'Na gode sosai',pr:'nah GOH-deh soh-SAI',en:'Thanks a lot',c:'Courtesy'},
    {tr:'Iya',pr:'EE-yah',en:'Yes',c:'Courtesy'},
    {tr:'A\'a',pr:'AH-ah',en:'No',c:'Courtesy'},
    {tr:'Afan',pr:'ah-FAHN',en:'Excuse me',c:'Courtesy'},
    {tr:'Ɗaya',pr:'DAH-yah',en:'1',c:'Numbers'},
    {tr:'Biyu',pr:'BEE-yoo',en:'2',c:'Numbers'},
    {tr:'Uku',pr:'OO-koo',en:'3',c:'Numbers'},
    {tr:'Huɗu',pr:'HOO-doo',en:'4',c:'Numbers'},
    {tr:'Biyar',pr:'BEE-yar',en:'5',c:'Numbers'},
    {tr:'Goma',pr:'GOH-mah',en:'10',c:'Numbers'},
    {tr:'Abinci',pr:'ah-BIN-chee',en:'food',c:'Food'},
    {tr:'Ruwa',pr:'ROO-wah',en:'water',c:'Food'},
    {tr:'Nama',pr:'NAH-mah',en:'meat',c:'Food'},
    {tr:'Kofi',pr:'KOH-fee',en:'coffee',c:'Food'},
    {tr:'Shayi',pr:'SHAH-yee',en:'tea',c:'Food'},
    {tr:'Burodi',pr:'boo-ROH-dee',en:'bread',c:'Food'},
    {tr:'Ina ne...?',pr:'EE-nah neh',en:'Where is...?',c:'Directions'},
    {tr:'Dama',pr:'DAH-mah',en:'to the right',c:'Directions'},
    {tr:'Hagu',pr:'HAH-goo',en:'to the left',c:'Directions'},
    {tr:'Kasuwa',pr:'kah-SOO-wah',en:'market',c:'Directions'},
    {tr:'Tasha',pr:'TAH-shah',en:'station',c:'Directions'},
    {tr:'Nawa ne?',pr:'NAH-wah neh',en:'how much is it?',c:'Shopping'},
    {tr:'Ina son',pr:'EE-nah son',en:'I want',c:'Shopping'},
    {tr:'Ya yi tsada',pr:'yah yee TSAH-dah',en:'it\'s expensive',c:'Shopping'},
    {tr:'Zan saye',pr:'zan SAH-yeh',en:'I\'ll buy it',c:'Shopping'},
    {tr:'Taimako!',pr:'tai-MAH-koh',en:'Help!',c:'Emergency'},
    {tr:'Likita',pr:'lee-KEE-tah',en:'doctor',c:'Emergency'},
    {tr:'Ba na gane ba',pr:'bah nah GAH-neh bah',en:'I don\'t understand',c:'Emergency'},
    {tr:'Ina bukatar taimako',pr:'EE-nah boo-KAH-tar tai-MAH-koh',en:'I need help',c:'Emergency'},
    {tr:'Yau',pr:'yow',en:'today',c:'Time'},
    {tr:'Gobe',pr:'GOH-beh',en:'tomorrow',c:'Time'},
    {tr:'Yanzu',pr:'YAN-zoo',en:'now',c:'Time'},
    {tr:'Rana',pr:'RAH-nah',en:'sun / day',c:'Time'},
    {tr:'Filin jirgin sama',pr:'FEE-lin JEER-gin SAH-mah',en:'airport',c:'Travel'},
    {tr:'Fasfo',pr:'FAS-foh',en:'passport',c:'Travel'},
    {tr:'Tasi, don Allah',pr:'TAH-see, don AH-lah',en:'Taxi, please',c:'Travel'},
    {tr:'Ina da ajiye wuri',pr:'EE-nah dah ah-JEE-yeh WOO-ree',en:'I have a reservation',c:'Travel'},
    {tr:'A hankali, don Allah',pr:'ah han-KAH-lee, don AH-lah',en:'Slower, please',c:'Travel'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Shopping','Emergency','Time','Travel'],
  culture: [
    {icon:'🤝',title:'Greeting is a ritual',body:'A Hausa greeting is more than a "hello". You shake hands and ask about health, family and work, and the other person returns the favour. Never rush straight to business — the greeting comes first.'},
    {icon:'🌙',title:'A lot of Arabic',body:'Because of religion and trade, Hausa borrowed many Arabic words: <i>lafiya</i> (health), <i>salla</i> (prayer), <i>assalamu alaikum</i> (peace be upon you). Knowing Arabic root words unlocks loads of Hausa.'},
    {icon:'☕',title:'Tea & hospitality',body:'Sweet, milky <i>shayi</i> (tea) is the heart of hospitality, poured in little glasses. A guest is often offered tea or <i>goro</i> (kola nut); accepting is a sign of respect.'},
    {icon:'👨‍👩‍👧‍👦',title:'Family and elders',body:'Respect for elders runs deep. Greet older people first and use their title, and show deference with the word <i>yaya</i> (a respectful term for an elder). Family and community come before the individual.'},
    {icon:'🛍️',title:'Bargaining at the market',body:'At the <i>kasuwa</i> (market), haggling is expected. Ask <i>nawa ne?</i> (how much?), counter politely, and enjoy the friendly back-and-forth — it\'s part of the experience.'},
    {icon:'🕌',title:'Faith shapes the day',body:'Prayer times structure daily life, and on Friday (<i>Juma\'a</i>) many things pause for midday prayer. Be aware of the rhythm and you\'ll fit right in.'}
  ],
  sounds: [
    {l:'ɓ',say:'implosive b — a "b" drawn inward, with a small catch',ex:'ɓangare = part',voice:'ɓangare'},
    {l:'ɗ',say:'implosive d — like "d" but with a throaty catch',ex:'ɗa = child · ɗaya = one',voice:'ɗaya'},
    {l:'ƙ',say:'implosive k — a "k" squeezed deeper in the throat',ex:'ƙasa = earth · ƙauye = village',voice:'ƙasa'},
    {l:'\'y',say:'glottalized y — a "y" with a quick catch in the throat',ex:'\'ya = daughter · \'ya\'ya = children',voice:'\'ya\'ya'},
    {l:'ts',say:'an ejective "ts" — sharp and clipped',ex:'tsoro = fear · tsuntsu = bird',voice:'tsuntsu'},
    {l:'sh',say:'like "sh" in shoe',ex:'shayi = tea · sha = drink',voice:'shayi'},
    {l:'kw',say:'a "k" with rounded lips',ex:'kwai = egg',voice:'kwai'},
    {l:'r',say:'a light rolled r',ex:'ruwa = water · Kano',voice:'ruwa'}
  ],
  resources: [
    {icon:'🗣️',t:'Hausa for beginners',d:'Slow, step-by-step videos with native speakers and subtitles — ideal for natural Hausa.',q:'learn Hausa language for beginners'},
    {icon:'🌍',t:'Everyday Hausa phrases',d:'Common greetings and phrases you can use straight away.',q:'common Hausa phrases greetings'},
    {icon:'📚',t:'Hausa letters & pronunciation',d:'Word lists and the special Hausa letters (ɓ ɗ ƙ \'y ts).',q:'Hausa alphabet pronunciation ɓ ɗ ƙ'},
    {icon:'🎧',t:'Hausa music',d:'Songs are a fun way to soak up rhythm and familiar words.',q:'Hausa music songs'},
    {icon:'💬',t:'Hausa radio & news',d:'Native-speed audio from Hausa radio — perfect for your ear.',q:'Hausa radio news'}
  ]
};
