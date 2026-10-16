/* ---- tagalog ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["tagalog"] = {
  name: 'Tagalog',
  flag: '🇵🇭',
  tts: 'fil-PH',
  dir: 'ltr',
  native: 'Tagalog',
  soundTitle: 'Tagalog sounds & spelling',
  soundIntro: 'Tagalog is written in the Latin alphabet and mostly said the way it\'s spelled. Nail these few sounds and you can read almost any word aloud.',
  grammar: '<p>Tagalog is friendly to learn: there are <b>no genders</b> and <b>no verb forms that change for each person</b> like in Spanish. Word order is flexible — <b>Gusto ko ng kape</b> = "I want coffee" (literally "want I [marker] coffee"). Instead of \'a\'/\'the\', Tagalog uses small markers: <b>ang</b> (the subject), <b>ng</b> (object / possessive), <b>sa</b> (to / at / in). <b>ko</b> = my/I, <b>mo</b> = your, <b>niya</b> = his/her. Add <b>po</b> to be polite, especially to elders — <b>Salamat po.</b> Questions often open with a question word: <b>ano</b> (what), <b>saan</b> (where), <b>kailan</b> (when), <b>bakit</b> (why), <b>magkano</b> (how much).</p>',
  bridges: '<div class="note">🇪🇸 <b>Spanish.</b> Tagalog borrowed a huge amount of Spanish vocabulary over centuries: <i>kumusta</i> (from "¿cómo está?"), <i>mesa</i> (table), <i>silya</i> (chair), <i>doktor</i> (doctor), <i>ospital</i> (hospital), <i>pamilya</i> (family). You already know more than you think.</div><div class="note">🌍 <b>English.</b> Modern Tagalog (along with Filipino) also swallows English words directly — <i>taxi, hotel, computer, cellphone</i> (selpon), <i>joke</i>, <i>color</i>. Everyday Tagalog mixes English in constantly.</div><div class="note">🔗 <b>Import your knowledge.</b> Whenever a Tagalog word sounds like English or Spanish, grab it. These <i>cognates</i> — mesa, silya, kumusta, doktor, pamilya — are free vocabulary and build your confidence fast.</div>',
  lessons: [
    { id:1, title:'Greetings & being polite', focus:'kumusta · magandang umaga · paalam',
      steps:[
        {t:'say',text:'Start with the greeting you\'ll hear first: <span class="inline-tr">kumusta</span> — how are you? It comes from Spanish "¿cómo está?". Say it out loud.',tr:'kumusta'},
        {t:'words',items:[{tr:'Kumusta?',pr:'koo-moos-TAH',en:'How are you?',link:'kumusta ≈ Spanish "¿cómo está?"'},{tr:'Magandang umaga',pr:'mah-gahn-DAHNG oo-MAH-gah',en:'good morning'},{tr:'Magandang gabi',pr:'mah-gahn-DAHNG gah-BEE',en:'good evening / night'},{tr:'Paalam',pr:'pah-AH-lahm',en:'goodbye'},{tr:'Sige',pr:'SEE-geh',en:'OK / go ahead'}]},
        {t:'chal',en:'Hello, how are you?',tr:'Kumusta?',pr:'koo-moos-TAH',morph:['kumusta = how are you?']},
        {t:'say',text:'To greet by time of day: <span class="inline-tr">magandang umaga</span> — good morning. <b>Maganda</b> means "beautiful/good", so it\'s literally "beautiful morning".',tr:'magandang umaga'},
        {t:'chal',en:'Good morning!',tr:'Magandang umaga!',pr:'mah-gahn-DAHNG oo-MAH-gah',morph:['magandang = beautiful/good','umaga = morning']},
        {t:'chal',en:'Goodbye!',tr:'Paalam!',pr:'pah-AH-lahm',morph:['paalam = goodbye']}
      ],
      blocks:['<code>kumusta?</code> = how are you?','<code>magandang umaga</code> / <code>magandang gabi</code> = good morning / evening','<code>paalam</code> = goodbye'] },
    { id:2, title:'Being polite', focus:'salamat · paki · walang anuman · po',
      steps:[
        {t:'say',text:'The two words that open every door: <span class="inline-tr">salamat</span> (thank you) and <span class="inline-tr">paki</span> (please). Say them out loud.',tr:'salamat'},
        {t:'words',items:[{tr:'Salamat',pr:'sah-LAH-maht',en:'thank you'},{tr:'Maraming salamat',pr:'mah-RAH-meeng sah-LAH-maht',en:'thanks a lot'},{tr:'Walang anuman',pr:'WAH-lahng ah-noo-MAHN',en:'you\'re welcome'},{tr:'Paki',pr:'pah-KEE',en:'please'},{tr:'Pasensya na',pr:'pah-SEHN-shah nah',en:'sorry / excuse me'},{tr:'Oo',pr:'OH-oh',en:'yes'},{tr:'Hindi',pr:'HEEN-dee',en:'no'}]},
        {t:'chal',en:'Thank you',tr:'Salamat',pr:'sah-LAH-maht',morph:['salamat = thank you']},
        {t:'say',text:'To thank someone a lot, say <span class="inline-tr">maraming salamat</span> — literally "many thanks".',tr:'maraming salamat'},
        {t:'chal',en:'Thank you very much',tr:'Maraming salamat',pr:'mah-RAH-meeng sah-LAH-maht',morph:['maraming = many','salamat = thanks']},
        {t:'say',text:'Add <span class="inline-tr">po</span> after words to be polite, especially to elders: <b>Salamat po.</b> And reply to a thank-you with <span class="inline-tr">walang anuman</span> — you\'re welcome.',tr:'walang anuman'},
        {t:'chal',en:'You\'re welcome',tr:'Walang anuman',pr:'WAH-lahng ah-noo-MAHN',morph:['walang = no','anuman = anything']}
      ],
      blocks:['<code>salamat</code> / <code>maraming salamat</code> = thank you','<code>paki</code> = please','<code>walang anuman</code> = you\'re welcome','<code>po</code> = politeness marker'] },
    { id:3, title:'Numbers 1–10', focus:'isa · dalawa · tatlo · sampu',
      steps:[
        {t:'say',text:'Start counting: <span class="inline-tr">isa, dalawa, tatlo</span> — one, two, three.',tr:'isa'},
        {t:'words',items:[{tr:'Isa',pr:'EE-sah',en:'1'},{tr:'Dalawa',pr:'dah-LAH-wah',en:'2'},{tr:'Tatlo',pr:'tat-LOH',en:'3'},{tr:'Apat',pr:'AH-paht',en:'4'},{tr:'Lima',pr:'LEE-mah',en:'5'},{tr:'Anim',pr:'AH-neem',en:'6'},{tr:'Pito',pr:'PEE-toh',en:'7'},{tr:'Walo',pr:'WAH-loh',en:'8'},{tr:'Siyam',pr:'shee-YAHM',en:'9'},{tr:'Sampu',pr:'sahm-POO',en:'10'}]},
        {t:'chal',en:'One',tr:'Isa',pr:'EE-sah',morph:['isa = one']},
        {t:'say',text:'To count money, use a number + <span class="inline-tr">piso</span> (peso). <b>Limang piso</b> = five pesos.',tr:'limang piso'},
        {t:'chal',en:'Five pesos',tr:'Limang piso',pr:'LEE-mahng PEE-soh',morph:['limang = five','piso = peso']},
        {t:'say',text:'To ask a price, use <span class="inline-tr">Magkano?</span> — how much?',tr:'Magkano?'},
        {t:'chal',en:'How much is this?',tr:'Magkano ito?',pr:'mag-KAH-noh EE-toh',morph:['magkano = how much','ito = this']}
      ],
      blocks:['<code>isa, dalawa, tatlo…</code> = one, two, three…','<code>limang piso</code> = five pesos','<code>magkano?</code> = how much?'] },
    { id:4, title:'"I want" — gusto ko', focus:'gusto ko · ng · ayoko · sige',
      steps:[
        {t:'say',text:'To say what you want: <span class="inline-tr">gusto ko</span> — I want (literally "I like"). <b>Gusto ko ng kape</b> = I want coffee.',tr:'gusto ko'},
        {t:'words',items:[{tr:'Gusto ko',pr:'GOOS-toh koh',en:'I want'},{tr:'Gusto ko ng…',pr:'GOOS-toh koh nahng',en:'I want a…'},{tr:'Ayoko',pr:'ah-YOH-koh',en:'I don\'t want'},{tr:'Sige',pr:'SEE-geh',en:'OK'},{tr:'Gusto mo?',pr:'GOOS-toh moh',en:'do you want?'}]},
        {t:'chal',en:'I want coffee',tr:'Gusto ko ng kape',pr:'GOOS-toh koh nahng KAH-peh',morph:['gusto ko = I want','ng = (marker)','kape = coffee']},
        {t:'say',text:'<span class="inline-tr">ng</span> is a small marker connecting you to the thing you want. And to say you don\'t want something, use <span class="inline-tr">ayoko</span>.',tr:'ayoko'},
        {t:'chal',en:'I don\'t want',tr:'Ayoko',pr:'ah-YOH-koh',morph:['ayoko = I don\'t want']},
        {t:'chal',en:'I want water',tr:'Gusto ko ng tubig',pr:'GOOS-toh koh nahng TOO-beeg',morph:['gusto ko = I want','tubig = water']}
      ],
      blocks:['<code>gusto ko (ng)</code> = I want (a)…','<code>ayoko</code> = I don\'t want','<code>sige</code> = OK'] },
    { id:5, title:'Food & drink', focus:'kape · tubig · kanin · masarap',
      steps:[
        {t:'say',text:'Eating and drinking: <span class="inline-tr">kape</span> (coffee), <span class="inline-tr">tubig</span> (water), <span class="inline-tr">kanin</span> (rice) — the staple of every meal.',tr:'kape'},
        {t:'words',items:[{tr:'Kape',pr:'KAH-peh',en:'coffee'},{tr:'Tubig',pr:'TOO-beeg',en:'water'},{tr:'Kanin',pr:'KAH-neen',en:'rice'},{tr:'Mesa',pr:'MEH-sah',en:'table',link:'mesa ≈ Spanish "mesa" (table)'},{tr:'Silya',pr:'SEE-lyah',en:'chair',link:'silya ≈ Spanish "silla" (chair)'},{tr:'Masarap',pr:'mah-SAH-rahp',en:'delicious'}]},
        {t:'chal',en:'I want rice',tr:'Gusto ko ng kanin',pr:'GOOS-toh koh nahng KAH-neen',morph:['gusto ko = I want','kanin = rice']},
        {t:'say',text:'<span class="inline-tr">Masarap</span> — delicious! Say it when the food is good.',tr:'masarap'},
        {t:'chal',en:'It\'s delicious!',tr:'Masarap!',pr:'mah-SAH-rahp',morph:['masarap = delicious']},
        {t:'chal',en:'Water, please',tr:'Tubig, paki',pr:'TOO-beeg, pah-KEE',morph:['tubig = water','paki = please']}
      ],
      blocks:['<code>kape</code>, <code>tubig</code>, <code>kanin</code> = coffee, water, rice','<code>masarap</code> = delicious','<code>mesa</code> / <code>silya</code> = table / chair (Spanish loans)'] },
    { id:6, title:'Getting around', focus:'saan ang · kanan · kaliwa · diretso',
      steps:[
        {t:'say',text:'To find your way, ask <span class="inline-tr">Saan ang…?</span> — where is…?',tr:'Saan ang...?'},
        {t:'words',items:[{tr:'Saan ang…?',pr:'sah-AHN ahng',en:'Where is…?'},{tr:'Kanan',pr:'KAH-nahn',en:'to the right'},{tr:'Kaliwa',pr:'kah-LEE-wah',en:'to the left'},{tr:'Diretso',pr:'dee-REH-tsoh',en:'straight ahead'},{tr:'Banyo',pr:'BAHN-yoh',en:'the bathroom',link:'banyo ≈ English "bathroom"'},{tr:'Palengke',pr:'pah-LEHNG-keh',en:'the market'}]},
        {t:'chal',en:'Where is the bathroom?',tr:'Saan ang banyo?',pr:'sah-AHN ahng BAHN-yoh',morph:['saan = where','ang = the','banyo = bathroom']},
        {t:'chal',en:'Where is the market?',tr:'Saan ang palengke?',pr:'sah-AHN ahng pah-LEHNG-keh',morph:['saan = where','ang = the','palengke = market']},
        {t:'say',text:'<span class="inline-tr">Kumanan</span> = turn right, <span class="inline-tr">kumaliwa</span> = turn left. Straight ahead is <span class="inline-tr">diretso</span>.',tr:'diretso'},
        {t:'chal',en:'Straight ahead',tr:'Diretso',pr:'dee-REH-tsoh',morph:['diretso = straight ahead']}
      ],
      blocks:['<code>saan ang…?</code> = where is…?','<code>kanan</code> / <code>kaliwa</code> = right / left','<code>diretso</code> = straight ahead'] },
    { id:7, title:'Questions & "do you have…?"', focus:'ano · sino · kailan · may · pwede',
      steps:[
        {t:'say',text:'Tagalog question words: <span class="inline-tr">ano</span> (what), <span class="inline-tr">saan</span> (where), <span class="inline-tr">kailan</span> (when), <span class="inline-tr">bakit</span> (why).',tr:'ano'},
        {t:'words',items:[{tr:'Ano',pr:'ah-NOH',en:'what'},{tr:'Sino',pr:'see-NOH',en:'who'},{tr:'Kailan',pr:'kah-EE-lahn',en:'when'},{tr:'Bakit',pr:'BAH-keet',en:'why'},{tr:'Paano',pr:'pah-AH-noh',en:'how'},{tr:'May…?',pr:'may',en:'is there / do you have…?'},{tr:'Pwede…?',pr:'PWEH-deh',en:'may I / can I…?',link:'pwede ≈ Spanish "puede"'}]},
        {t:'chal',en:'What is this?',tr:'Ano ito?',pr:'ah-NOH EE-toh',morph:['ano = what','ito = this']},
        {t:'say',text:'<span class="inline-tr">May…?</span> asks "is there…?" and it\'s extremely handy. <b>May wifi?</b> = is there wifi?',tr:'May...?'},
        {t:'chal',en:'Is there wifi?',tr:'May wifi?',pr:'may WEE-fee',morph:['may = is there','wifi = wifi']},
        {t:'say',text:'<span class="inline-tr">Pwede…?</span> = may I / can I…? It comes from Spanish "puede".',tr:'Pwede...?'},
        {t:'chal',en:'Who is that?',tr:'Sino iyon?',pr:'see-NOH ee-YON',morph:['sino = who','iyon = that']}
      ],
      blocks:['<code>ano</code> / <code>sino</code> / <code>kailan</code> = what / who / when','<code>may…?</code> = is there…?','<code>pwede…?</code> = may I…?'] },
    { id:8, title:'Family & people', focus:'pamilya · nanay · tatay · kaibigan',
      steps:[
        {t:'say',text:'Family is central in the Philippines: <span class="inline-tr">pamilya</span> (family), <span class="inline-tr">nanay</span> (mother), <span class="inline-tr">tatay</span> (father).',tr:'pamilya'},
        {t:'words',items:[{tr:'Pamilya',pr:'pah-MEEL-yah',en:'family',link:'pamilya ≈ Spanish "familia"'},{tr:'Nanay / Ina',pr:'NAH-nai / EE-nah',en:'mother'},{tr:'Tatay / Ama',pr:'TAH-tai / AH-mah',en:'father'},{tr:'Kuya',pr:'KOO-yah',en:'older brother'},{tr:'Ate',pr:'AH-teh',en:'older sister'},{tr:'Anak',pr:'ah-NAK',en:'child'},{tr:'Kaibigan',pr:'kah-ee-BEE-gahn',en:'friend'}]},
        {t:'chal',en:'I have a family',tr:'May pamilya ako',pr:'may pah-MEEL-yah ah-KOH',morph:['may = have/there is','pamilya = family','ako = I']},
        {t:'say',text:'<span class="inline-tr">Kuya</span> is what you call an older brother and <span class="inline-tr">ate</span> an older sister — people use them for friends and strangers too, as a sign of warmth.',tr:'kuya'},
        {t:'chal',en:'This is my friend',tr:'Ito ang kaibigan ko',pr:'EE-toh ahng kah-ee-BEE-gahn koh',morph:['ito = this','ang = the','kaibigan ko = my friend']},
        {t:'chal',en:'My family',tr:'Ang pamilya ko',pr:'ahng pah-MEEL-yah koh',morph:['ang = the','pamilya ko = my family']}
      ],
      blocks:['<code>pamilya</code> = family (Spanish loan)','<code>nanay</code> / <code>tatay</code> = mother / father','<code>kuya</code> / <code>ate</code> = older brother / sister','<code>kaibigan</code> = friend'] },
    { id:9, title:'Time, days & weather', focus:'ngayon · bukas · umuulan · panahon',
      steps:[
        {t:'say',text:'Time words: <span class="inline-tr">ngayon</span> (now / today), <span class="inline-tr">bukas</span> (tomorrow), <span class="inline-tr">kahapon</span> (yesterday).',tr:'ngayon'},
        {t:'words',items:[{tr:'Ngayon',pr:'nah-GYON',en:'now / today'},{tr:'Bukas',pr:'BOO-kahs',en:'tomorrow'},{tr:'Kahapon',pr:'kah-HAH-pon',en:'yesterday'},{tr:'Umaga',pr:'oo-MAH-gah',en:'morning'},{tr:'Gabi',pr:'gah-BEE',en:'night'},{tr:'Linggo',pr:'LEENG-goh',en:'week / Sunday'},{tr:'Biyernes',pr:'bee-YER-nes',en:'Friday',link:'biyernes ≈ Spanish "viernes"'}]},
        {t:'chal',en:'See you tomorrow',tr:'Kita bukas',pr:'KEE-tah BOO-kahs',morph:['kita = see you','bukas = tomorrow']},
        {t:'say',text:'To talk about the weather, ask <span class="inline-tr">Kumusta ang panahon?</span> — how is the weather? <b>Umuulan</b> = it\'s raining.',tr:'Umuulan'},
        {t:'chal',en:'It\'s raining',tr:'Umuulan',pr:'oo-moo-AH-lahn',morph:['umuulan = it is raining']},
        {t:'say',text:'<span class="inline-tr">Mainit</span> = hot, <span class="inline-tr">malamig</span> = cold, <span class="inline-tr">maaraw</span> = sunny.',tr:'malamig'},
        {t:'chal',en:'It\'s hot',tr:'Mainit',pr:'mah-EE-neet',morph:['mainit = hot']}
      ],
      blocks:['<code>ngayon</code> / <code>bukas</code> / <code>kahapon</code> = today / tomorrow / yesterday','<code>umuulan</code> = it\'s raining','<code>mainit</code> / <code>malamig</code> = hot / cold'] },
    { id:10, title:'Your name', focus:'ako si · pangalan · anong pangalan mo?',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">Ako si…</span> — I am… Say <b>Ako si __NAME__</b> to say your name.',tr:'Ako si __NAME__'},
        {t:'chal',en:'My name is __NAME__',tr:'Ako si __NAME__',pr:'ah-KOH see __NAME__',morph:['ako = I','si = (name marker)','__NAME__ = your name']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">Anong pangalan mo?</span> — literally "what name is yours?".',tr:'Anong pangalan mo?'},
        {t:'chal',en:'What\'s your name?',tr:'Anong pangalan mo?',pr:'ah-NONG pah-ngah-LAHN moh',morph:['anong = what','pangalan mo = your name']},
        {t:'chal',en:'Pleased to meet you',tr:'Masaya akong makilala ka',pr:'mah-SAH-yah ah-KONG mah-kee-LAH-lah kah',morph:['masaya = happy','makilala = to meet','ka = you']}
      ],
      blocks:['<code>ako si…</code> = I am…','<code>anong pangalan mo?</code> = what\'s your name?','<code>pangalan</code> = name'] },
    { id:11, title:'Getting help', focus:'tulong · kailangan ko ng tulong · hindi ko maintindihan',
      steps:[
        {t:'say',text:'If you need help fast, shout <span class="inline-tr">Tulong!</span> or <span class="inline-tr">Saklolo!</span> — help!',tr:'Tulong!'},
        {t:'words',items:[{tr:'Tulong! / Saklolo!',pr:'too-LONG / sak-LOH-loh',en:'Help!'},{tr:'Kailangan ko ng tulong',pr:'kah-ee-LAH-ngahn koh nahng too-LONG',en:'I need help'},{tr:'Doktor',pr:'dok-TOR',en:'the doctor',link:'doktor ≈ English "doctor"'},{tr:'Ospital',pr:'os-pee-TAHL',en:'the hospital',link:'ospital ≈ English "hospital"'},{tr:'Hindi ko maintindihan',pr:'HEEN-dee koh mah-een-teen-DEE-hahn',en:'I don\'t understand'},{tr:'Hindi ko alam',pr:'HEEN-dee koh ah-LAHM',en:'I don\'t know'}]},
        {t:'chal',en:'Help!',tr:'Tulong!',pr:'too-LONG',morph:['tulong = help']},
        {t:'say',text:'To say you don\'t understand: <span class="inline-tr">Hindi ko maintindihan</span>. And <span class="inline-tr">Hindi ko alam</span> = I don\'t know.',tr:'Hindi ko maintindihan'},
        {t:'chal',en:'I need help',tr:'Kailangan ko ng tulong',pr:'kah-ee-LAH-ngahn koh nahng too-LONG',morph:['kailangan = need','ko = I','ng tulong = help']}
      ],
      blocks:['<code>tulong!</code> = help!','<code>kailangan ko ng tulong</code> = I need help','<code>hindi ko maintindihan</code> = I don\'t understand'] },
    { id:12, title:'Tying it together', focus:'a capstone day out',
      steps:[
        {t:'say',text:'You\'ve built a real toolbox! This capstone uses only words you\'ve met. Build each line yourself before revealing it.'},
        {t:'chal',en:'Good morning! How are you?',tr:'Magandang umaga! Kumusta?',pr:'mah-gahn-DAHNG oo-MAH-gah, koo-moos-TAH',morph:['magandang umaga = good morning','kumusta = how are you?']},
        {t:'chal',en:'I\'m well, thank you',tr:'Mabuti naman, salamat',pr:'mah-BOO-tee nah-MAHN, sah-LAH-maht',morph:['mabuti = well','naman = (softener)','salamat = thanks']},
        {t:'chal',en:'I want coffee and rice, please',tr:'Gusto ko ng kape at kanin, paki',pr:'GOOS-toh koh nahng KAH-peh aht KAH-neen, pah-KEE',morph:['gusto ko = I want','at = and','kanin = rice','paki = please']},
        {t:'chal',en:'How much is this?',tr:'Magkano ito?',pr:'mag-KAH-noh EE-toh',morph:['magkano = how much','ito = this']},
        {t:'chal',en:'It\'s delicious! Thank you!',tr:'Masarap! Salamat!',pr:'mah-SAH-rahp, sah-LAH-maht',morph:['masarap = delicious','salamat = thank you']}
      ],
      blocks:['You built: greetings, politeness, numbers, ordering, directions, prices and thanks — a whole day out in Tagalog.'] },
    { id:13, title:'Airport & tickets', focus:'paliparan · pasaporte · tiket · lipad',
      steps:[
        {t:'say',text:'You have landed. The building is the <span class="inline-tr">paliparan</span>. Your document is a <span class="inline-tr">pasaporte</span>.',tr:'paliparan'},
        {t:'words',items:[{tr:'paliparan',pr:'pah-lee-PAH-rahn',en:'the airport'},{tr:'pasaporte',pr:'pah-sah-POR-teh',en:'the passport'},{tr:'tiket',pr:'TEE-ket',en:'the ticket'},{tr:'lipad',pr:'LEE-pahd',en:'the flight'},{tr:'gate',pr:'gayt',en:'the gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'Saan ang paliparan?',pr:'sah-AHN ahng pah-lee-PAH-rahn',morph:['saan = where','ang paliparan = the airport']},
        {t:'chal',en:'Here is my passport',tr:'Ito ang pasaporte ko',pr:'EE-toh ahng pah-sah-POR-teh koh',morph:['ito = here is','pasaporte ko = my passport']},
        {t:'chal',en:'A ticket, please',tr:'Isang tiket, paki',pr:'EE-sahng TEE-ket, pah-KEE',morph:['isang tiket = a ticket','paki = please']},
        {t:'chal',en:'Where is the gate?',tr:'Saan ang gate?',pr:'sah-AHN ahng gayt',morph:['saan = where','ang gate = the gate']}
      ],
      blocks:['<code>paliparan</code> = airport','<code>pasaporte</code> = passport','<code>tiket</code> = ticket','<code>gate</code> = gate'] },
    { id:14, title:'The taxi', focus:'taksi · pumunta · hotel · tumigil',
      steps:[
        {t:'say',text:'The driver is waiting. <span class="inline-tr">taksi</span> is the word you need. Tell them where to go with <span class="inline-tr">gusto kong pumunta</span>.',tr:'taksi'},
        {t:'words',items:[{tr:'taksi',pr:'TAHK-see',en:'the taxi'},{tr:'tsuper',pr:'TSOO-per',en:'the driver'},{tr:'gusto kong pumunta',pr:'GOOS-toh kong poo-MOON-tah',en:'I want to go'},{tr:'tumigil dito',pr:'too-MEE-gil DEE-toh',en:'stop here'}]},
        {t:'chal',en:'Taxi, please',tr:'Taksi, paki',pr:'TAHK-see, pah-KEE',morph:['taksi = taxi','paki = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'Gusto kong pumunta sa hotel',pr:'GOOS-toh kong poo-MOON-tah sah hoh-TEL',morph:['gusto kong pumunta = I want to go','sa hotel = to the hotel']},
        {t:'chal',en:'Stop here, please',tr:'Tumigil dito, paki',pr:'too-MEE-gil DEE-toh, pah-KEE',morph:['tumigil dito = stop here','paki = please']},
        {t:'chal',en:'How much is it?',tr:'Magkano ito?',pr:'mag-KAH-noh EE-toh',morph:['magkano = how much','ito = this']}
      ],
      blocks:['<code>gusto kong pumunta sa …</code> = I want to go to …','<code>tumigil dito</code> = stop here'] },
    { id:15, title:'The hotel', focus:'reserbasyon · kuwarto · susi · gabi',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">May reserbasyon ako</span> — I have a reservation.',tr:'reserbasyon'},
        {t:'words',items:[{tr:'hotel',pr:'hoh-TEL',en:'the hotel'},{tr:'reserbasyon',pr:'reh-sehr-bah-SYOHN',en:'the reservation'},{tr:'kuwarto',pr:'KWAR-toh',en:'the room'},{tr:'susi',pr:'SOO-see',en:'the key'},{tr:'isang gabi',pr:'EE-sahng gah-BEE',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'May reserbasyon ako',pr:'may reh-sehr-bah-SYOHN ah-KOH',morph:['may = have','reserbasyon = a reservation','ako = I']},
        {t:'chal',en:'A room for one night, please',tr:'Isang kuwarto para sa isang gabi, paki',pr:'EE-sahng KWAR-toh PAH-rah sah EE-sahng gah-BEE, pah-KEE',morph:['isang kuwarto = a room','isang gabi = one night','paki = please']},
        {t:'chal',en:'The key, please',tr:'Ang susi, paki',pr:'ahng SOO-see, pah-KEE',morph:['ang susi = the key','paki = please']},
        {t:'chal',en:'Where is my room?',tr:'Saan ang kuwarto ko?',pr:'sah-AHN ahng KWAR-toh koh',morph:['saan = where','kuwarto ko = my room']}
      ],
      blocks:['<code>reserbasyon</code> = reservation','<code>kuwarto</code> = room','<code>susi</code> = key'] },
    { id:16, title:'Ask for help', focus:'hindi ko maintindihan · mas mabagal · Ingles',
      steps:[
        {t:'say',text:'When the language is too fast: <span class="inline-tr">Mas mabagal, paki</span> — slower, please.',tr:'Mas mabagal, paki'},
        {t:'words',items:[{tr:'mas mabagal',pr:'mahs mah-BAH-gahl',en:'slower'},{tr:'ulit',pr:'oo-LEET',en:'again'},{tr:'Ingles',pr:'ING-les',en:'English'},{tr:'puwede mo ba akong tulungan?',pr:'PWEH-deh moh bah ah-KONG too-loo-NGAHN',en:'can you help?'}]},
        {t:'chal',en:'I don\'t understand',tr:'Hindi ko maintindihan',pr:'HEEN-dee koh mah-een-teen-DEE-hahn',morph:['hindi ko = I don\'t','maintindihan = understand']},
        {t:'chal',en:'Slower, please',tr:'Mas mabagal, paki',pr:'mahs mah-BAH-gahl, pah-KEE',morph:['mas mabagal = slower','paki = please']},
        {t:'chal',en:'Can you help me?',tr:'Puwede mo ba akong tulungan?',pr:'PWEH-deh moh bah ah-KONG too-loo-NGAHN',morph:['puwede mo ba = can you','akong tulungan = help me']},
        {t:'chal',en:'Do you speak English?',tr:'Marunong ka ba ng Ingles?',pr:'mah-ROO-nong kah bah nahng ING-les',morph:['marunong ka ba = do you know','Ingles = English']}
      ],
      blocks:['<code>mas mabagal</code> = slower','<code>Marunong ka ba ng Ingles?</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'cafe', title:'☕ At a café', emoji:'☕', turns:[
      {who:'You',tr:'Kumusta! Gusto ko ng kape.',pr:'koo-moos-TAH, GOOS-toh koh nahng KAH-peh',en:'Hello! I want a coffee.'},
      {who:'Barista',tr:'Sige po. Mainit o may yelo?',pr:'SEE-geh poh, mah-EE-neet oh may YEH-loh',en:'Sure. Hot or iced?'},
      {who:'You',tr:'May yelo, salamat. Magkano?',pr:'may YEH-loh, sah-LAH-maht, mag-KAH-noh',en:'Iced, thanks. How much?'},
      {who:'Barista',tr:'Isandaang piso po.',pr:'ee-sahn-DAH-ahng PEE-soh poh',en:'One hundred pesos.'},
      {who:'You',tr:'Salamat po!',pr:'sah-LAH-maht poh',en:'Thanks!'}
    ]},
    { id:'jeepney', title:'🚌 On the jeepney', emoji:'🚌', turns:[
      {who:'You',tr:'Saan ang jeepney papuntang palengke?',pr:'sah-AHN ahng jeep-NAY pah-poon-TAHNG pah-LEHNG-keh',en:'Where is the jeepney going to the market?'},
      {who:'Driver',tr:'Dito, sumakay ka.',pr:'DEE-toh, soo-MAH-kai kah',en:'Here, hop on.'},
      {who:'You',tr:'Magkano ang pamasahe?',pr:'mag-KAH-noh ahng pah-mah-SAH-heh',en:'How much is the fare?'},
      {who:'Driver',tr:'Labinlimang piso.',pr:'lah-been-LEE-mahng PEE-soh',en:'Fifteen pesos.'},
      {who:'You',tr:'Sige, salamat!',pr:'SEE-geh, sah-LAH-maht',en:'Okay, thanks!'}
    ]},
    { id:'restaurant', title:'🍝 At a restaurant', emoji:'🍝', turns:[
      {who:'Waiter',tr:'Kumusta! Ilan po kayo?',pr:'koo-moos-TAH, EE-lahn poh kah-YOH',en:'Hello! How many of you?'},
      {who:'You',tr:'Dalawa po.',pr:'dah-LAH-wah poh',en:'Two.'},
      {who:'You',tr:'Gusto ko ng menu, paki.',pr:'GOOS-toh koh nahng meh-NOO, pah-KEE',en:'I\'d like the menu, please.'},
      {who:'Waiter',tr:'Ito po.',pr:'EE-toh poh',en:'Here you are.'},
      {who:'You',tr:'Gusto ko ng kanin at manok.',pr:'GOOS-toh koh nahng KAH-neen aht mah-NOK',en:'I want rice and chicken.'},
      {who:'Waiter',tr:'Magandang pili! Masarap po.',pr:'mah-gahn-DAHNG pee-LEE, mah-SAH-rahp poh',en:'Good choice! It\'s delicious.'}
    ]},
    { id:'palengke', title:'🛒 At the market', emoji:'🛒', turns:[
      {who:'You',tr:'Magkano ito?',pr:'mag-KAH-noh EE-toh',en:'How much is this?'},
      {who:'Seller',tr:'Limampung piso.',pr:'lee-mahm-POONG PEE-soh',en:'Fifty pesos.'},
      {who:'You',tr:'Ang mahal naman, paki-baba.',pr:'ahng mah-HAHL nah-MAHN, pah-KEE bah-BAH',en:'That\'s expensive, please lower it.'},
      {who:'Seller',tr:'Sige, apatnapung piso.',pr:'SEE-geh, ah-paht-nah-POONG PEE-soh',en:'Okay, forty pesos.'},
      {who:'You',tr:'Sige, bibili ako. Salamat!',pr:'SEE-geh, bee-BEE-lee ah-KOH, sah-LAH-maht',en:'Okay, I\'ll buy it. Thanks!'}
    ]}
  ],
  pocket: [
    {tr:'Kumusta?',pr:'koo-moos-TAH',en:'How are you?',c:'Greetings'},
    {tr:'Magandang umaga',pr:'mah-gahn-DAHNG oo-MAH-gah',en:'Good morning',c:'Greetings'},
    {tr:'Magandang gabi',pr:'mah-gahn-DAHNG gah-BEE',en:'Good evening / night',c:'Greetings'},
    {tr:'Paalam',pr:'pah-AH-lahm',en:'Goodbye',c:'Greetings'},
    {tr:'Ako si __NAME__',pr:'ah-KOH see',en:'I am __NAME__',c:'Greetings'},
    {tr:'Anong pangalan mo?',pr:'ah-NONG pah-ngah-LAHN moh',en:'What\'s your name?',c:'Greetings'},
    {tr:'Salamat',pr:'sah-LAH-maht',en:'Thank you',c:'Courtesy'},
    {tr:'Maraming salamat',pr:'mah-RAH-meeng sah-LAH-maht',en:'Thanks a lot',c:'Courtesy'},
    {tr:'Walang anuman',pr:'WAH-lahng ah-noo-MAHN',en:'You\'re welcome',c:'Courtesy'},
    {tr:'Paki',pr:'pah-KEE',en:'Please',c:'Courtesy'},
    {tr:'Pasensya na',pr:'pah-SEHN-shah nah',en:'Sorry / excuse me',c:'Courtesy'},
    {tr:'Oo',pr:'OH-oh',en:'Yes',c:'Courtesy'},
    {tr:'Hindi',pr:'HEEN-dee',en:'No',c:'Courtesy'},
    {tr:'Isa',pr:'EE-sah',en:'1',c:'Numbers'},
    {tr:'Dalawa',pr:'dah-LAH-wah',en:'2',c:'Numbers'},
    {tr:'Tatlo',pr:'tat-LOH',en:'3',c:'Numbers'},
    {tr:'Apat',pr:'AH-paht',en:'4',c:'Numbers'},
    {tr:'Lima',pr:'LEE-mah',en:'5',c:'Numbers'},
    {tr:'Anim',pr:'AH-neem',en:'6',c:'Numbers'},
    {tr:'Pito',pr:'PEE-toh',en:'7',c:'Numbers'},
    {tr:'Walo',pr:'WAH-loh',en:'8',c:'Numbers'},
    {tr:'Siyam',pr:'shee-YAHM',en:'9',c:'Numbers'},
    {tr:'Sampu',pr:'sahm-POO',en:'10',c:'Numbers'},
    {tr:'Gusto ko ng kape',pr:'GOOS-toh koh nahng KAH-peh',en:'I want coffee',c:'Food'},
    {tr:'Tubig',pr:'TOO-beeg',en:'Water',c:'Food'},
    {tr:'Kanin',pr:'KAH-neen',en:'Rice',c:'Food'},
    {tr:'Masarap',pr:'mah-SAH-rahp',en:'Delicious',c:'Food'},
    {tr:'Saan ang banyo?',pr:'sah-AHN ahng BAHN-yoh',en:'Where is the bathroom?',c:'Directions'},
    {tr:'Kanan',pr:'KAH-nahn',en:'To the right',c:'Directions'},
    {tr:'Kaliwa',pr:'kah-LEE-wah',en:'To the left',c:'Directions'},
    {tr:'Diretso',pr:'dee-REH-tsoh',en:'Straight ahead',c:'Directions'},
    {tr:'Magkano ito?',pr:'mag-KAH-noh EE-toh',en:'How much is this?',c:'Shopping'},
    {tr:'Ang mahal',pr:'ahng mah-HAHL',en:'That\'s expensive',c:'Shopping'},
    {tr:'Gusto ko ito',pr:'GOOS-toh koh EE-toh',en:'I want this',c:'Shopping'},
    {tr:'Tulong!',pr:'too-LONG',en:'Help!',c:'Emergency'},
    {tr:'Hindi ko maintindihan',pr:'HEEN-dee koh mah-een-teen-DEE-hahn',en:'I don\'t understand',c:'Emergency'},
    {tr:'Kailangan ko ng tulong',pr:'kah-ee-LAH-ngahn koh nahng too-LONG',en:'I need help',c:'Emergency'},
    {tr:'Ngayon',pr:'nah-GYON',en:'Now / today',c:'Time'},
    {tr:'Bukas',pr:'BOO-kahs',en:'Tomorrow',c:'Time'},
    {tr:'Umuulan',pr:'oo-moo-AH-lahn',en:'It\'s raining',c:'Time'},
    {tr:'Paliparan',pr:'pah-lee-PAH-rahn',en:'the airport',c:'Travel'},
    {tr:'Pasaporte',pr:'pah-sah-POR-teh',en:'the passport',c:'Travel'},
    {tr:'Tiket',pr:'TEE-ket',en:'the ticket',c:'Travel'},
    {tr:'Taksi',pr:'TAHK-see',en:'the taxi',c:'Travel'},
    {tr:'Hotel',pr:'hoh-TEL',en:'the hotel',c:'Travel'},
    {tr:'May reserbasyon ako',pr:'may reh-sehr-bah-SYOHN ah-KOH',en:'I have a reservation',c:'Travel'},
    {tr:'Mas mabagal, paki',pr:'mahs mah-BAH-gahl, pah-KEE',en:'Slower, please',c:'Travel'},
    {tr:'Marunong ka ba ng Ingles?',pr:'mah-ROO-nong kah bah nahng ING-les',en:'Do you speak English?',c:'Travel'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Shopping','Emergency','Time','Travel'],
  culture: [
    {icon:'🇵🇭',title:'Kumusta opens every door',body:'A warm <i>kumusta!</i> and a smile go a long way. Filipinos are famously hospitable — greeting someone in Tagalog lights up the conversation, even if you switch to English after.'},
    {icon:'🙏',title:'Respect with po & opo',body:'Add <i>po</i> to show respect, especially to elders: <i>Salamat po.</i> Use <i>opo</i> for a polite yes and sprinkle <i>po</i> freely — it marks you as well-mannered.'},
    {icon:'🚌',title:'Ride the jeepney',body:'The jeepney is the Philippines\' iconic shared taxi. Climb in, pass your fare forward with a <i>"bayad po"</i>, and say a loud <i>"para po"</i> when you want to get off. It\'s an adventure in itself.'},
    {icon:'🇪🇸',title:'Spanish hiding in the words',body:'After centuries of contact, Spanish left a huge imprint: <i>kumusta</i> (cómo está), <i>mesa</i>, <i>silya</i>, <i>doktor</i>, <i>pamilya</i>. Spot the pattern and you\'ve unlocked free vocab.'},
    {icon:'👪',title:'Family comes first',body:'Family is everything. You\'ll hear <i>kuya</i> (older brother) and <i>ate</i> (older sister) used for friends and even strangers — a sign of closeness and respect.'},
    {icon:'💰',title:'Palengke & tipping',body:'At the market (<i>palengke</i>) light, friendly bargaining is normal. In restaurants a small tip or rounding up is appreciated — never expected.'}
  ],
  sounds: [
    {l:'a',say:'as in "father" — open and full, never the short "cat" sound',ex:'araw = AH-raw',voice:'araw'},
    {l:'e',say:'as in "bed"',ex:'mesa = MEH-sah',voice:'mesa'},
    {l:'i',say:'as in "machine"',ex:'isa = EE-sah',voice:'isa'},
    {l:'o',say:'as in "go"',ex:'opo = OH-poh',voice:'opo'},
    {l:'u',say:'as in "boot"',ex:'umuulan = oo-moo-AH-lahn',voice:'umuulan'},
    {l:'ng',say:'the nasal "ng" as in "singer" — one sound, not two letters',ex:'maraming = mah-RAH-meeng',voice:'maraming'},
    {l:'k',say:'crisp hard "k", a little lighter than English',ex:'kumusta = koo-moos-TAH',voice:'kumusta'},
    {l:'r',say:'a single tap of the tongue, lightly rolled',ex:'Rizal = ree-SAL',voice:'Rizal'}
  ],
  resources: [
    {icon:'🗣️',t:'Easy Tagalog',d:'Real street interviews with native speakers and subtitles — natural, everyday Tagalog you actually hear.',q:'Easy Tagalog street interviews'},
    {icon:'🐢',t:'Learn Tagalog with subtitles',d:'Clear, slow beginner lessons with subtitles — perfect for building your first phrases.',q:'learn Tagalog for beginners slow'},
    {icon:'📚',t:'Talk to Me in Tagalog',d:'Structured beginner lessons in short, digestible pieces.',q:'Talk to Me in Tagalog beginner'},
    {icon:'🎧',t:'Easy Filipino',d:'Conversational Filipino/Tagalog built from context, not grammar tables.',q:'Easy Filipino lessons'},
    {icon:'☀️',t:'Tagalog in daily life',d:'Everyday phrases and culture from real Filipino vlogs and street interviews.',q:'Tagalog phrases daily life vlog'}
  ]
};
