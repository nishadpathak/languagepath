/* ---- zulu ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["zulu"] = {
  name: 'Zulu',
  flag: '🇿🇦',
  tts: 'zu-ZA',
  dir: 'ltr',
  native: 'isiZulu',
  script: 'Latin',
  soundTitle: 'Zulu sounds & spelling',
  soundIntro: 'Zulu\'s big challenge is the clicks — but the rest reads almost exactly as written. Learn the three click letters and a couple of breathy consonants and you can say a great deal.',
  grammar: '<p>Zulu (isiZulu) is an <b>Nguni</b> language, and its most famous feature is the <b>click</b> — three click letters, <b>c</b>, <b>q</b> and <b>x</b>, borrowed from the neighbouring Khoisan languages. Zulu also uses <b>noun classes</b>: the little syllable at the front of a noun changes with the class, so <i>umuntu</i> = person but <i>abantu</i> = people. Verbs are built by stacking prefixes onto one stem: <i>ngi-</i> = I, <i>ngifuna</i> = I want, <i>ngicela</i> = I ask / please. Word order is subject–verb–object, and to make a question you often just add a question word like <i>kuphi</i> (where) or change the tone.</p>',
  bridges: '<div class="note">🇬🇧 <b>English.</b> Zulu borrows everyday words from South African English: <i>ikhofi</i> = coffee, <i>itiye</i> = tea, <i>ibhasi</i> = bus, <i>isitimela</i> = train.</div><div class="note">🖐️ <b>Clicks.</b> The <b>c</b>, <b>q</b> and <b>x</b> clicks came from the Khoisan languages. Don\'t be shy — practise them and you\'ll have them in minutes.</div>',
  lessons: [
    { id:1, title:'Greetings', focus:'sawubona · sanibonani · unjani? · ngiyaphila',
      steps:[
        {t:'say',text:'The first word you\'ll use: <span class="inline-tr">Sawubona</span> — hello, but only to ONE person. Say it out loud.',tr:'Sawubona'},
        {t:'words',items:[{tr:'Sawubona',pr:'sah-woo-BOH-nah',en:'hello (to one person)'},{tr:'Sanibonani',pr:'sah-nee-boh-NAH-nee',en:'hello (to several people)'},{tr:'Unjani?',pr:'oon-JAH-nee',en:'How are you?'},{tr:'Ngiyaphila',pr:'ngee-ah-PEE-lah',en:'I am well'},{tr:'Yebo',pr:'YEH-boh',en:'yes'}]},
        {t:'chal',en:'Hello!',tr:'Sawubona!',pr:'sah-woo-BOH-nah',morph:['sawubona = hello (to one)']},
        {t:'say',text:'Greet a group with <span class="inline-tr">Sanibonani</span>. The reply to \'how are you?\' is <span class="inline-tr">Ngiyaphila</span> — I am well.',tr:'Sanibonani'},
        {t:'words',items:[{tr:'Sala kahle',pr:'SAH-lah KAH-leh',en:'stay well (goodbye to the one staying)'},{tr:'Hamba kahle',pr:'HAM-bah KAH-leh',en:'go well (goodbye to the one leaving)'},{tr:'Ngiyabonga',pr:'ngee-ah-BON-gah',en:'thank you'}]},
        {t:'chal',en:'Hello, how are you?',tr:'Sawubona, unjani?',pr:'sah-woo-BOH-nah, oon-JAH-nee',morph:['sawubona = hello','unjani? = how are you?']}
      ],
      blocks:['<code>sawubona</code> = hello (to one)','<code>sanibonani</code> = hello (to many)','<code>unjani?</code> = how are you? · <code>ngiyaphila</code> = I am well'] },
    { id:2, title:'Being polite', focus:'ngiyabonga · ngiyacela · yebo · cha',
      steps:[
        {t:'say',text:'The most useful word you\'ll ever say: <span class="inline-tr">Ngiyabonga</span> — thank you.',tr:'Ngiyabonga'},
        {t:'words',items:[{tr:'Ngiyabonga',pr:'ngee-ah-BON-gah',en:'thank you'},{tr:'Ngiyabonga kakhulu',pr:'ngee-ah-BON-gah kah-KHOO-loo',en:'thank you very much'},{tr:'Ngiyacela',pr:'ngee-ah-SEH-lah',en:'please / I ask'},{tr:'Yebo',pr:'YEH-boh',en:'yes'},{tr:'Cha',pr:'CHA',en:'no'}]},
        {t:'chal',en:'Please',tr:'Ngiyacela',pr:'ngee-ah-SEH-lah',morph:['ngiyacela = please / I ask']},
        {t:'say',text:'To ask for something politely: <span class="inline-tr">Ngicela amanzi</span> — I\'d like some water, please.',tr:'Ngicela amanzi'},
        {t:'chal',en:'Thank you very much',tr:'Ngiyabonga kakhulu',pr:'ngee-ah-BON-gah kah-KHOO-loo',morph:['ngiyabonga = thank you','kakhulu = very much']},
        {t:'chal',en:'Yes, please',tr:'Yebo, ngiyacela',pr:'YEH-boh, ngee-ah-SEH-lah',morph:['yebo = yes','ngiyacela = please']}
      ],
      blocks:['<code>ngiyabonga</code> = thank you','<code>ngiyacela</code> = please','<code>yebo</code> = yes · <code>cha</code> = no'] },
    { id:3, title:'Numbers 1–10', focus:'kunye · kubili · kuthathu · ishumi',
      steps:[
        {t:'say',text:'Numbers come fast. Listen and repeat: <span class="inline-tr">kunye, kubili, kuthathu</span> — one, two, three.',tr:'kunye'},
        {t:'words',items:[{tr:'kunye',pr:'koo-NYEH',en:'1'},{tr:'kubili',pr:'koo-BEE-lee',en:'2'},{tr:'kuthathu',pr:'koo-TAH-too',en:'3'},{tr:'kune',pr:'koo-NEH',en:'4'},{tr:'kuhlanu',pr:'koo-HLAH-noo',en:'5'},{tr:'ishumi',pr:'ee-SHOO-mee',en:'10'}]},
        {t:'chal',en:'Two, please',tr:'Kubili, ngiyacela',pr:'koo-BEE-lee, ngee-ah-SEH-lah',morph:['kubili = two','ngiyacela = please']},
        {t:'say',text:'For shopping: <span class="inline-tr">Malini?</span> — how much is it?',tr:'Malini?'},
        {t:'words',items:[{tr:'Malini?',pr:'mah-LEE-nee',en:'how much is it?'},{tr:'isithupha',pr:'ee-see-TOO-pah',en:'6'},{tr:'isikhombisa',pr:'ee-see-khom-BEE-sah',en:'7'},{tr:'isishiyagalombili',pr:'ee-see-shee-ah-gah-lom-BEE-lee',en:'8'},{tr:'isishiyagalolunye',pr:'ee-see-shee-ah-gah-lo-loo-NYEH',en:'9'}]},
        {t:'chal',en:'It\'s ten',tr:'Ishumi',pr:'ee-SHOO-mee',morph:['ishumi = ten']}
      ],
      blocks:['kunye, kubili, kuthathu, kune, kuhlanu = 1–5','<code>malini?</code> = how much is it?','isithupha–ishumi = 6–10'] },
    { id:4, title:'"I want" — ngifuna', focus:'ngifuna · ngicela · angifuni',
      steps:[
        {t:'say',text:'The magic verb: <span class="inline-tr">Ngifuna</span> — I want. Attach it to anything.',tr:'ngifuna'},
        {t:'chal',en:'I want water',tr:'Ngifuna amanzi',pr:'ngee-FOO-nah ah-MAHN-zee',morph:['ngifuna = I want','amanzi = water']},
        {t:'say',text:'<span class="inline-tr">Ngifuna ikhofi</span> = I want coffee. The negative is <span class="inline-tr">angifuni</span> — I don\'t want.',tr:'Ngifuna ikhofi'},
        {t:'words',items:[{tr:'ngifuna',pr:'ngee-FOO-nah',en:'I want'},{tr:'ngicela',pr:'ngee-SEH-lah',en:'I would like (polite)'},{tr:'angifuni',pr:'an-gee-FOO-nee',en:'I don\'t want'},{tr:'ngiyathanda',pr:'ngee-ah-THAN-dah',en:'I like'}]},
        {t:'chal',en:'I want bread',tr:'Ngifuna isinkwa',pr:'ngee-FOO-nah ee-SEEN-kwah',morph:['ngifuna = I want','isinkwa = bread']},
        {t:'chal',en:'I\'d like tea, please',tr:'Ngicela itiye',pr:'ngee-SEH-lah ee-TEE-yeh',morph:['ngicela = I\'d like','itiye = tea']}
      ],
      blocks:['<code>ngifuna</code> = I want','<code>ngicela</code> = I would like (polite)','<code>angifuni</code> = I don\'t want'] },
    { id:5, title:'Food & drink', focus:'amanzi · isinkwa · itiye · ikhofi',
      steps:[
        {t:'say',text:'Food is the fastest way to talk. Key words: <span class="inline-tr">amanzi</span> (water) and <span class="inline-tr">isinkwa</span> (bread).',tr:'amanzi'},
        {t:'words',items:[{tr:'amanzi',pr:'ah-MAHN-zee',en:'water'},{tr:'isinkwa',pr:'ee-SEEN-kwah',en:'bread'},{tr:'itiye',pr:'ee-TEE-yeh',en:'tea',link:'≈ English tea'},{tr:'ikhofi',pr:'ee-KHO-fee',en:'coffee',link:'≈ English coffee'},{tr:'ubisi',pr:'oo-BEE-see',en:'milk'}]},
        {t:'chal',en:'Water and bread, please',tr:'Amanzi nesinkwa, ngiyacela',pr:'ah-MAHN-zee neh-SEEN-kwah, ngee-ah-SEH-lah',morph:['amanzi = water','ne = and','isinkwa = bread']},
        {t:'say',text:'<span class="inline-tr">Kumnandi!</span> = it\'s delicious. Say it and you\'ll make everyone smile.',tr:'kumnandi'},
        {t:'chal',en:'It\'s delicious!',tr:'Kumnandi!',pr:'koo-MNAN-dee',morph:['kumnandi = it is delicious']},
        {t:'chal',en:'I\'d like coffee, please',tr:'Ngicela ikhofi',pr:'ngee-SEH-lah ee-KHO-fee',morph:['ngicela = I\'d like','ikhofi = coffee']}
      ],
      blocks:['<code>amanzi</code>, <code>isinkwa</code> = water, bread','<code>itiye</code> = tea · <code>ikhofi</code> = coffee (English loans)','<code>kumnandi!</code> = delicious!'] },
    { id:6, title:'Getting around', focus:'kuphi? · kwesokudla · kwesobunxele · phambili',
      steps:[
        {t:'say',text:'The most useful question of all: <span class="inline-tr">Kuphi...?</span> — where is...?',tr:'Kuphi...?'},
        {t:'words',items:[{tr:'Kuphi...?',pr:'koo-PEE',en:'Where is...?'},{tr:'kwesokudla',pr:'kweh-so-koo-DLAH',en:'to the right'},{tr:'kwesobunxele',pr:'kweh-so-boo-NKEH-leh',en:'to the left'},{tr:'phambili',pr:'pahm-BEE-lee',en:'straight ahead'},{tr:'eduze',pr:'eh-DOO-zeh',en:'near'}]},
        {t:'chal',en:'Where is the station?',tr:'Kuphi isiteshi?',pr:'koo-PEE ee-see-TEH-shee',morph:['kuphi = where is','isiteshi = the station']},
        {t:'say',text:'<span class="inline-tr">Kwesokudla</span> = to the right, <span class="inline-tr">kwesobunxele</span> = to the left.',tr:'kwesokudla'},
        {t:'chal',en:'Where is the bathroom?',tr:'Kuphi ithoyilethi?',pr:'koo-PEE ee-toh-yee-LEH-tee',morph:['kuphi = where is','ithoyilethi = the bathroom']},
        {t:'chal',en:'Go straight, please',tr:'Qonda phambili, ngiyacela',pr:'KON-dah pahm-BEE-lee, ngee-ah-SEH-lah',morph:['qonda = go straight','phambili = forward','ngiyacela = please']}
      ],
      blocks:['<code>kuphi...?</code> = where is...?','<code>kwesokudla</code> / <code>kwesobunxele</code> = right / left','<code>phambili</code> = straight ahead'] },
    { id:7, title:'Questions', focus:'ubani? · yini? · nini? · kanjani?',
      steps:[
        {t:'say',text:'Question words open every conversation: <span class="inline-tr">Ubani?</span> (who), <span class="inline-tr">Yini?</span> (what), <span class="inline-tr">Nini?</span> (when).',tr:'Ubani?'},
        {t:'words',items:[{tr:'Ubani?',pr:'oo-BAH-nee',en:'who?'},{tr:'Yini?',pr:'YEE-nee',en:'what?'},{tr:'Nini?',pr:'NEE-nee',en:'when?'},{tr:'Kanjani?',pr:'kan-JAH-nee',en:'how?'},{tr:'Ngapi?',pr:'NGAH-pee',en:'how many?'}]},
        {t:'say',text:'<span class="inline-tr">Kubiza malini?</span> = how much does it cost?',tr:'Kubiza malini?'},
        {t:'chal',en:'How much is this?',tr:'Kubiza malini?',pr:'koo-BEE-zah mah-LEE-nee',morph:['kubiza = it costs','malini = how much?']},
        {t:'chal',en:'What is this?',tr:'Yini le?',pr:'YEE-nee leh',morph:['yini = what','le = this']},
        {t:'chal',en:'How are you?',tr:'Unjani?',pr:'oon-JAH-nee',morph:['unjani? = how are you?']}
      ],
      blocks:['<code>ubani?</code> = who? · <code>yini?</code> = what? · <code>nini?</code> = when?','<code>malini?</code> = how much?','<code>unjani?</code> = how are you?'] },
    { id:8, title:'Family & people', focus:'umndeni · umama · ubaba · umngane',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">umndeni</span> (family), <span class="inline-tr">umama</span> (mother), <span class="inline-tr">ubaba</span> (father).',tr:'umndeni'},
        {t:'words',items:[{tr:'umndeni',pr:'oom-NEH-nee',en:'family'},{tr:'umama',pr:'oo-MAH-mah',en:'mother'},{tr:'ubaba',pr:'oo-BAH-bah',en:'father'},{tr:'umntwana',pr:'oom-TWAH-nah',en:'child'},{tr:'umngane',pr:'oom-NGAH-neh',en:'friend'}]},
        {t:'chal',en:'This is my friend',tr:'Lona umngane wami',pr:'LOH-nah oom-NGAH-neh WAH-mee',morph:['lona = this is','umngane = friend','wami = my']},
        {t:'say',text:'<span class="inline-tr">Nginomndeni</span> = I have a family. The <i>-no-</i> mid-word means \'with\'.',tr:'Nginomndeni'},
        {t:'chal',en:'I have a family',tr:'Nginomndeni',pr:'ngee-nom-NEH-nee',morph:['ngi = I','nomndeni = have a family']},
        {t:'chal',en:'I have a child',tr:'Nginomntwana',pr:'ngee-nom-TWAH-nah',morph:['ngi = I','nomntwana = have a child']}
      ],
      blocks:['<code>umama</code> / <code>ubaba</code> = mother / father','<code>umndeni</code> = family','<code>umngane</code> = friend'] },
    { id:9, title:'Time, days & weather', focus:'namhlanje · kusasa · imvula · kuyashisa',
      steps:[
        {t:'say',text:'Time words: <span class="inline-tr">namhlanje</span> (today), <span class="inline-tr">kusasa</span> (tomorrow), <span class="inline-tr">izolo</span> (yesterday).',tr:'namhlanje'},
        {t:'words',items:[{tr:'namhlanje',pr:'nam-HLAH-njeh',en:'today'},{tr:'kusasa',pr:'koo-SAH-sah',en:'tomorrow'},{tr:'izolo',pr:'ee-ZOH-loh',en:'yesterday'},{tr:'isikhathi',pr:'ee-see-KHAH-tee',en:'time'},{tr:'usuku',pr:'oo-SOO-koo',en:'day'}]},
        {t:'chal',en:'See you tomorrow',tr:'Ngizokubona kusasa',pr:'ngee-zo-koo-BOH-nah koo-SAH-sah',morph:['ngizokubona = I will see you','kusasa = tomorrow']},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">Kunjani isimo sezulu?</span> Reply <span class="inline-tr">kuyashisa</span> — it\'s hot.',tr:'Kunjani isimo sezulu?'},
        {t:'words',items:[{tr:'imvula',pr:'im-VOO-lah',en:'rain'},{tr:'ilanga',pr:'ee-LAHN-gah',en:'sun / day'},{tr:'kuyashisa',pr:'koo-yah-SHEE-sah',en:'it is hot'},{tr:'kuyabanda',pr:'koo-yah-BAHN-dah',en:'it is cold'}]},
        {t:'chal',en:'It\'s raining',tr:'Kuyana',pr:'koo-YAH-nah',morph:['kuyana = it is raining']}
      ],
      blocks:['<code>namhlanje</code> / <code>kusasa</code> = today / tomorrow','<code>kunjani isimo sezulu?</code> = how\'s the weather?','<code>kuyashisa</code> = it\'s hot · <code>kuyabanda</code> = it\'s cold'] },
    { id:10, title:'Your name', focus:'igama · igama lami ngu __NAME__ · ngubani?',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">Igama lami ngu __NAME__</span> — my name is __NAME__.',tr:'Igama lami ngu __NAME__'},
        {t:'chal',en:'My name is __NAME__',tr:'Igama lami ngu __NAME__',pr:'ee-GAH-mah LAH-mee ngoo __NAME__',morph:['igama = name','lami = my','ngu = it is','__NAME__ = your name']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">Ngubani igama lakho?</span>',tr:'Ngubani igama lakho?'},
        {t:'chal',en:'What\'s your name?',tr:'Ngubani igama lakho?',pr:'ngoo-BAH-nee ee-GAH-mah LAH-kho',morph:['ngubani = who is','igama = name','lakho = your']},
        {t:'say',text:'<span class="inline-tr">Ngiyajabula ukukwazi</span> = pleased to meet you.',tr:'Ngiyajabula ukukwazi'},
        {t:'chal',en:'Pleased to meet you',tr:'Ngiyajabula ukukwazi',pr:'ngee-ah-JAH-boo-lah oo-koo-KWAH-zee',morph:['ngiyajabula = I am happy','ukukwazi = to know you']}
      ],
      blocks:['<code>igama lami ngu __NAME__</code> = my name is __NAME__','<code>ngubani igama lakho?</code> = what\'s your name?','<code>ngiyajabula ukukwazi</code> = pleased to meet you'] },
    { id:11, title:'Health & emergency', focus:'usizo! · ngenisa! · udokotela · angiqondi',
      steps:[
        {t:'say',text:'The words that matter most in a pinch: <span class="inline-tr">Usizo!</span> — help!',tr:'Usizo!'},
        {t:'words',items:[{tr:'Usizo!',pr:'oo-SEE-zo',en:'Help!'},{tr:'Ngenisa!',pr:'ngeh-NEE-sah',en:'Get them in! / bring help!'},{tr:'Ngicela usizo',pr:'ngee-SEH-lah oo-SEE-zo',en:'I need help'},{tr:'udokotela',pr:'oo-doh-KOH-teh-lah',en:'doctor'},{tr:'umlilo!',pr:'oo-MLEE-loh',en:'Fire!'}]},
        {t:'chal',en:'Help!',tr:'Usizo!',pr:'oo-SEE-zo',morph:['usizo = help']},
        {t:'chal',en:'I need help',tr:'Ngicela usizo',pr:'ngee-SEH-lah oo-SEE-zo',morph:['ngicela = I ask for','usizo = help']},
        {t:'say',text:'<span class="inline-tr">Angiqondi</span> = I don\'t understand. <span class="inline-tr">Biza udokotela!</span> = call a doctor!',tr:'Angiqondi'},
        {t:'chal',en:'Call a doctor!',tr:'Biza udokotela!',pr:'BEE-zah oo-doh-KOH-teh-lah',morph:['biza = call','udokotela = doctor']},
        {t:'chal',en:'I don\'t understand',tr:'Angiqondi',pr:'an-gee-KWON-dee',morph:['angi = I don\'t','qondi = understand']}
      ],
      blocks:['<code>usizo!</code> = help!','<code>ngicela usizo</code> = I need help','<code>angiqondi</code> = I don\'t understand'] },
    { id:12, title:'Tying it together', focus:'sawubona · ngicela · kuphi · malini — a capstone scene',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolkit. This capstone uses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello, how are you?',tr:'Sawubona, unjani?',pr:'sah-woo-BOH-nah, oon-JAH-nee',morph:['sawubona = hello','unjani? = how are you?']},
        {t:'chal',en:'I\'d like some water, please',tr:'Ngicela amanzi',pr:'ngee-SEH-lah ah-MAHN-zee',morph:['ngicela = I\'d like','amanzi = water']},
        {t:'chal',en:'Where is the station?',tr:'Kuphi isiteshi?',pr:'koo-PEE ee-see-TEH-shee',morph:['kuphi = where is','isiteshi = the station']},
        {t:'chal',en:'How much is it?',tr:'Malini?',pr:'mah-LEE-nee',morph:['malini? = how much is it?']},
        {t:'chal',en:'Delicious! Thank you!',tr:'Kumnandi! Ngiyabonga!',pr:'koo-MNAN-dee, ngee-ah-BON-gah',morph:['kumnandi = delicious','ngiyabonga = thank you']}
      ],
      blocks:['You built: greetings, ordering, directions, prices, thanks — a full day out in Zulu.'] },
    { id:13, title:'Airport & tickets', focus:'isikhumulo sezindiza · ipasipoti · ithikithi',
      steps:[
        {t:'say',text:'You have landed. The building is the <span class="inline-tr">isikhumulo sezindiza</span>. Your document is a <span class="inline-tr">ipasipoti</span>.',tr:'isikhumulo sezindiza'},
        {t:'words',items:[{tr:'isikhumulo sezindiza',pr:'ee-see-khoo-MOO-loh seh-zeen-DEE-zah',en:'the airport'},{tr:'ipasipoti',pr:'ee-pah-see-POH-tee',en:'the passport'},{tr:'ithikithi',pr:'ee-tee-KEE-tee',en:'the ticket'},{tr:'indiza',pr:'een-DEE-zah',en:'the flight'},{tr:'isango',pr:'ee-SAHN-goh',en:'the gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'Isikhumulo sezindiza siphi?',pr:'ee-see-khoo-MOO-loh seh-zeen-DEE-zah SEE-pee',morph:['isikhumulo sezindiza = the airport','siphi? = where is it?']},
        {t:'chal',en:'Here is my passport',tr:'Nansi ipasipoti yami',pr:'NAHN-see ee-pah-see-POH-tee YAH-mee',morph:['nansi = here is','ipasipoti yami = my passport']},
        {t:'chal',en:'A ticket, please',tr:'Ithikithi, ngicela',pr:'ee-tee-KEE-tee, ngee-TSEH-lah',morph:['ithikithi = ticket','ngicela = please']},
        {t:'chal',en:'Where is the gate?',tr:'Isango siphi?',pr:'ee-SAHN-goh SEE-pee',morph:['isango = the gate','siphi? = where is it?']}
      ],
      blocks:['<code>isikhumulo sezindiza</code> = airport','<code>ipasipoti</code> = passport','<code>ithikithi</code> = ticket','<code>isango</code> = gate'] },
    { id:14, title:'The taxi', focus:'itekisi · hamba · ihhotela · ima',
      steps:[
        {t:'say',text:'The driver is waiting. <span class="inline-tr">itekisi</span> is the word you need. Tell them where to go with <span class="inline-tr">ngifuna ukuya</span>.',tr:'itekisi'},
        {t:'words',items:[{tr:'itekisi',pr:'ee-teh-KEE-see',en:'the taxi'},{tr:'umshayeli',pr:'oom-shah-YEH-lee',en:'the driver'},{tr:'ngifuna ukuya',pr:'ngee-FOO-nah oo-KOO-yah',en:'I want to go'},{tr:'ima lapha',pr:'EE-mah LAH-pah',en:'stop here'}]},
        {t:'chal',en:'Taxi, please',tr:'Itekisi, ngicela',pr:'ee-teh-KEE-see, ngee-TSEH-lah',morph:['itekisi = taxi','ngicela = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'Ngifuna ukuya ehhotela',pr:'ngee-FOO-nah oo-KOO-yah eh-hoh-TEH-lah',morph:['ngifuna ukuya = I want to go','ehhotela = to the hotel']},
        {t:'chal',en:'Stop here, please',tr:'Ima lapha, ngicela',pr:'EE-mah LAH-pah, ngee-TSEH-lah',morph:['ima lapha = stop here','ngicela = please']},
        {t:'chal',en:'How much is it?',tr:'Yimalini?',pr:'yee-mah-LEE-nee',morph:['yimalini? = how much is it?']}
      ],
      blocks:['<code>ngifuna ukuya …</code> = I want to go to …','<code>ima lapha</code> = stop here'] },
    { id:15, title:'The hotel', focus:'ukubhuka · ikamelo · ukhiye · ubusuku',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">Nginokubhuka</span> — I have a reservation.',tr:'ukubhuka'},
        {t:'words',items:[{tr:'ihhotela',pr:'ee-hoh-TEH-lah',en:'the hotel'},{tr:'ukubhuka',pr:'oo-koo-BOO-kah',en:'the reservation'},{tr:'ikamelo',pr:'ee-kah-MEH-loh',en:'the room'},{tr:'ukhiye',pr:'oo-KEE-yeh',en:'the key'},{tr:'ubusuku obubodwa',pr:'oo-boo-SOO-koo oh-boo-BOH-dwah',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'Nginokubhuka',pr:'ngee-noh-koo-BOO-kah',morph:['nginokubhuka = I have a reservation']},
        {t:'chal',en:'A room for one night, please',tr:'Ikamelo lobusuku obubodwa, ngicela',pr:'ee-kah-MEH-loh loh-boo-SOO-koo oh-boo-BOH-dwah, ngee-TSEH-lah',morph:['ikamelo = a room','ubusuku obubodwa = one night','ngicela = please']},
        {t:'chal',en:'The key, please',tr:'Ukhiye, ngicela',pr:'oo-KEE-yeh, ngee-TSEH-lah',morph:['ukhiye = the key','ngicela = please']},
        {t:'chal',en:'Where is my room?',tr:'Ikamelo lami liphi?',pr:'ee-kah-MEH-loh LAH-mee LEE-pee',morph:['ikamelo lami = my room','liphi? = where is it?']}
      ],
      blocks:['<code>ukubhuka</code> = reservation','<code>ikamelo</code> = room','<code>ukhiye</code> = key'] },
    { id:16, title:'Ask for help', focus:'angiqondi · kancane · isiNgisi',
      steps:[
        {t:'say',text:'When the language is too fast: <span class="inline-tr">Kancane, ngicela</span> — slower, please.',tr:'Kancane, ngicela'},
        {t:'words',items:[{tr:'kancane',pr:'kahn-CHAH-neh',en:'slower'},{tr:'futhi',pr:'FOO-tee',en:'again'},{tr:'isiNgisi',pr:'ee-see-NGEE-see',en:'English'},{tr:'ungangisiza?',pr:'oon-gah-ngee-SEE-zah',en:'can you help?'}]},
        {t:'chal',en:'I don\'t understand',tr:'Angiqondi',pr:'ahn-gee-KOHN-dee',morph:['angiqondi = I don\'t understand']},
        {t:'chal',en:'Slower, please',tr:'Kancane, ngicela',pr:'kahn-CHAH-neh, ngee-TSEH-lah',morph:['kancane = slower','ngicela = please']},
        {t:'chal',en:'Can you help me?',tr:'Ungangisiza?',pr:'oon-gah-ngee-SEE-zah',morph:['ungangisiza? = can you help me?']},
        {t:'chal',en:'Do you speak English?',tr:'Uyasikhuluma isiNgisi?',pr:'oo-yah-see-khoo-LOO-mah ee-see-NGEE-see',morph:['uyasikhuluma = do you speak','isiNgisi = English']}
      ],
      blocks:['<code>kancane</code> = slower','<code>Uyasikhuluma isiNgisi?</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'cafe', title:'☕ At a café', emoji:'☕', turns:[
      {who:'You',tr:'Sawubona! Ngicela ikhofi.',pr:'sah-woo-BOH-nah, ngee-SEH-lah ee-KHO-fee',en:'Hello! I\'d like a coffee.'},
      {who:'Barista',tr:'Ufuna ushukela?',pr:'oo-FOO-nah oo-SHOO-keh-lah',en:'Do you want sugar?'},
      {who:'You',tr:'Yebo, ngiyabonga.',pr:'YEH-boh, ngee-ah-BON-gah',en:'Yes, thanks.'},
      {who:'Barista',tr:'Nali. Kubiza ama-randi angamashumi amabili.',pr:'NAH-lee, koo-BEE-zah ah-mah-RAN-dee ah-ngah-mah-SHOO-mee ah-mah-BEE-lee',en:'Here you go. That\'s twenty rand.'},
      {who:'You',tr:'Ngiyabonga kakhulu!',pr:'ngee-ah-BON-gah kah-KHOO-loo',en:'Thanks a lot!'}
    ]},
    { id:'kombi', title:'🚐 In the kombi', emoji:'🚐', turns:[
      {who:'You',tr:'Sawubona! Ngicela indawo.',pr:'sah-woo-BOH-nah, ngee-SEH-lah IN-dah-woh',en:'Hello! I\'d like a seat.'},
      {who:'Driver',tr:'Uyaphi?',pr:'oo-YAH-pee',en:'Where are you going?'},
      {who:'You',tr:'Ngiya edolobheni.',pr:'ngee-YAH eh-doh-LOH-beh-nee',en:'I\'m going to town.'},
      {who:'Driver',tr:'Ngena! Kubiza irandi.',pr:'NGEH-nah, koo-BEE-zah ee-RAN-dee',en:'Get in! It\'s one rand.'},
      {who:'You',tr:'Ngiyabonga. Sala kahle!',pr:'ngee-ah-BON-gah, SAH-lah KAH-leh',en:'Thanks. Stay well!'}
    ]},
    { id:'restaurant', title:'🍲 At a restaurant', emoji:'🍲', turns:[
      {who:'Waiter',tr:'Sawubona! Unjani?',pr:'sah-woo-BOH-nah, oon-JAH-nee',en:'Hello! How are you?'},
      {who:'You',tr:'Ngiyaphila! Ngicela imenyu, ngiyacela.',pr:'ngee-ah-PEE-lah, ngee-SEH-lah ee-MEH-nyoo, ngee-ah-SEH-lah',en:'I\'m well! I\'d like the menu, please.'},
      {who:'You',tr:'Ngifuna isinkwa namanzi.',pr:'ngee-FOO-nah ee-SEEN-kwah nah-MAHN-zee',en:'I\'d like bread and water.'},
      {who:'Waiter',tr:'Kulungile! Kuyabuya.',pr:'koo-loon-GEE-leh, koo-yah-BOO-yah',en:'OK! Coming right up.'},
      {who:'You',tr:'Ngiyabonga kakhulu!',pr:'ngee-ah-BON-gah kah-KHOO-loo',en:'Thanks a lot!'}
    ]},
    { id:'market', title:'🛒 At the market', emoji:'🛒', turns:[
      {who:'Seller',tr:'Sawubona! Ufunani?',pr:'sah-woo-BOH-nah, oo-FOO-nah-nee',en:'Hello! What do you want?'},
      {who:'You',tr:'Ngicela izithelo. Kubiza malini?',pr:'ngee-SEH-lah ee-zee-THEH-loh, koo-BEE-zah mah-LEE-nee',en:'I\'d like fruit. How much is it?'},
      {who:'Seller',tr:'Ama-randi amabili.',pr:'ah-mah-RAN-dee ah-mah-BEE-lee',en:'Two rand.'},
      {who:'You',tr:'Kulungile, ngiyakuthatha.',pr:'koo-loon-GEE-leh, ngee-ah-koo-TAH-tah',en:'OK, I\'ll take it.'},
      {who:'Seller',tr:'Ngiyabonga kakhulu!',pr:'ngee-ah-BON-gah kah-KHOO-loo',en:'Thanks a lot!'}
    ]}
  ],
  pocket: [
    {tr:'Sawubona',pr:'sah-woo-BOH-nah',en:'Hello (to one person)',c:'Greetings'},
    {tr:'Sanibonani',pr:'sah-nee-boh-NAH-nee',en:'Hello (to several)',c:'Greetings'},
    {tr:'Unjani?',pr:'oon-JAH-nee',en:'How are you?',c:'Greetings'},
    {tr:'Ngiyaphila',pr:'ngee-ah-PEE-lah',en:'I am well',c:'Greetings'},
    {tr:'Sala kahle',pr:'SAH-lah KAH-leh',en:'Goodbye (stay well)',c:'Greetings'},
    {tr:'Yebo',pr:'YEH-boh',en:'Yes',c:'Greetings'},
    {tr:'Ngiyabonga',pr:'ngee-ah-BON-gah',en:'Thank you',c:'Courtesy'},
    {tr:'Ngiyabonga kakhulu',pr:'ngee-ah-BON-gah kah-KHOO-loo',en:'Thank you very much',c:'Courtesy'},
    {tr:'Ngiyacela',pr:'ngee-ah-SEH-lah',en:'Please',c:'Courtesy'},
    {tr:'Cha',pr:'CHA',en:'No',c:'Courtesy'},
    {tr:'Kulungile',pr:'koo-loon-GEE-leh',en:'OK / all right',c:'Courtesy'},
    {tr:'Kunye',pr:'koo-NYEH',en:'1',c:'Numbers'},
    {tr:'Kubili',pr:'koo-BEE-lee',en:'2',c:'Numbers'},
    {tr:'Kuthathu',pr:'koo-TAH-too',en:'3',c:'Numbers'},
    {tr:'Kuhlanu',pr:'koo-HLAH-noo',en:'5',c:'Numbers'},
    {tr:'Isithupha',pr:'ee-see-TOO-pah',en:'6',c:'Numbers'},
    {tr:'Ishumi',pr:'ee-SHOO-mee',en:'10',c:'Numbers'},
    {tr:'Amanzi',pr:'ah-MAHN-zee',en:'water',c:'Food'},
    {tr:'Isinkwa',pr:'ee-SEEN-kwah',en:'bread',c:'Food'},
    {tr:'Itiye',pr:'ee-TEE-yeh',en:'tea',c:'Food'},
    {tr:'Ikhofi',pr:'ee-KHO-fee',en:'coffee',c:'Food'},
    {tr:'Ubisi',pr:'oo-BEE-see',en:'milk',c:'Food'},
    {tr:'Kumnandi!',pr:'koo-MNAN-dee',en:'delicious!',c:'Food'},
    {tr:'Kuphi...?',pr:'koo-PEE',en:'Where is...?',c:'Directions'},
    {tr:'Kwesokudla',pr:'kweh-so-koo-DLAH',en:'to the right',c:'Directions'},
    {tr:'Kwesobunxele',pr:'kweh-so-boo-NKEH-leh',en:'to the left',c:'Directions'},
    {tr:'Phambili',pr:'pahm-BEE-lee',en:'straight ahead',c:'Directions'},
    {tr:'Eduze',pr:'eh-DOO-zeh',en:'near',c:'Directions'},
    {tr:'Usizo!',pr:'oo-SEE-zo',en:'Help!',c:'Emergency'},
    {tr:'Biza udokotela!',pr:'BEE-zah oo-doh-KOH-teh-lah',en:'Call a doctor!',c:'Emergency'},
    {tr:'Angiqondi',pr:'an-gee-KWON-dee',en:'I don\'t understand',c:'Emergency'},
    {tr:'Umlilo!',pr:'oo-MLEE-loh',en:'Fire!',c:'Emergency'},
    {tr:'Umama',pr:'oo-MAH-mah',en:'mother',c:'Family'},
    {tr:'Ubaba',pr:'oo-BAH-bah',en:'father',c:'Family'},
    {tr:'Umntwana',pr:'oom-TWAH-nah',en:'child',c:'Family'},
    {tr:'Umngane',pr:'oom-NGAH-neh',en:'friend',c:'Family'},
    {tr:'Namhlanje',pr:'nam-HLAH-njeh',en:'today',c:'Time'},
    {tr:'Kusasa',pr:'koo-SAH-sah',en:'tomorrow',c:'Time'},
    {tr:'Izolo',pr:'ee-ZOH-loh',en:'yesterday',c:'Time'},
    {tr:'Imvula',pr:'im-VOO-lah',en:'rain',c:'Time'},
    {tr:'Isikhumulo sezindiza',pr:'ee-see-khoo-MOO-loh seh-zeen-DEE-zah',en:'the airport',c:'Travel'},
    {tr:'Ipasipoti',pr:'ee-pah-see-POH-tee',en:'the passport',c:'Travel'},
    {tr:'Ithikithi',pr:'ee-tee-KEE-tee',en:'the ticket',c:'Travel'},
    {tr:'Itekisi',pr:'ee-teh-KEE-see',en:'the taxi',c:'Travel'},
    {tr:'Ihhotela',pr:'ee-hoh-TEH-lah',en:'the hotel',c:'Travel'},
    {tr:'Nginokubhuka',pr:'ngee-noh-koo-BOO-kah',en:'I have a reservation',c:'Travel'},
    {tr:'Kancane, ngicela',pr:'kahn-CHAH-neh, ngee-TSEH-lah',en:'Slower, please',c:'Travel'},
    {tr:'Uyasikhuluma isiNgisi?',pr:'oo-yah-see-khoo-LOO-mah ee-see-NGEE-see',en:'Do you speak English?',c:'Travel'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Emergency','Family','Time','Travel'],
  culture: [
    {icon:'☕',title:'Ubuntu — I am because we are',body:'Ubuntu is the deep Zulu value that a person is a person through other people. It underlies everyday warmth, sharing and mutual care. You\'ll see it in how freely people greet, help and welcome visitors.'},
    {icon:'🖐️',title:'The three click sounds',body:'Zulu has three click letters — <b>c</b>, <b>q</b> and <b>x</b> — borrowed from the neighbouring Khoisan languages. They look daunting but are genuinely fun to learn, and locals light up when you try.'},
    {icon:'🙌',title:'Greet before you speak',body:'In Zulu culture a greeting always comes first. A warm <i>sawubona</i> and a handshake open every door. Greet older people first, and let a guest speak before you do.'},
    {icon:'🚪',title:'Two ways to say goodbye',body:'Zulu has two goodbyes. <b>Sala kahle</b> (stay well) is said to the person who stays; <b>hamba kahle</b> (go well) to the one leaving. Choosing the right one shows real respect.'},
    {icon:'🗣️',title:'A little Zulu goes far',body:'South Africans warm instantly when visitors try isiZulu. Effort matters far more than perfect pronunciation — a genuine <i>ngiyabonga</i> is worth more than flawless grammar.'},
    {icon:'🇿🇦',title:'One of eleven tongues',body:'Zulu (isiZulu) is the most widely spoken home language in South Africa. It is one of 11 official languages, alongside English, Afrikaans, Xhosa and others — a wonderfully multilingual country.'}
  ],
  sounds: [
    {l:'c',say:'dental click — the "tut tut" tsk sound',ex:'cela = (click)EH-lah (ask)',voice:'cela'},
    {l:'q',say:'palatal click — a cork "pop"',ex:'qala = (click)AH-lah (start)',voice:'qala'},
    {l:'x',say:'lateral click — a horse "click"',ex:'xoxa = (click)OH-(click)ah (chat)',voice:'xoxa'},
    {l:'kh',say:'aspirated k — with a puff of breath',ex:'ikhanda = ee-KHAN-dah (head)',voice:'ikhanda'},
    {l:'ph',say:'aspirated p — breathy p',ex:'phuza = POO-zah (drink)',voice:'phuza'},
    {l:'th',say:'aspirated t — breathy t',ex:'thanda = THAN-dah (love)',voice:'thanda'},
    {l:'hl',say:'lateral fricative — like Welsh "ll"',ex:'hlala = HLAH-lah (sit)',voice:'hlala'},
    {l:'dl',say:'voiced lateral — a soft "dl"',ex:'dlala = DLAH-lah (play)',voice:'dlala'}
  ],
  resources: [
    {icon:'🗣️',t:'Learn Zulu for beginners',d:'Friendly, step-by-step lessons building everyday phrases from scratch and explaining the clicks.',q:'Learn Zulu for beginners YouTube'},
    {icon:'🐢',t:'Zulu pronunciation & clicks',d:'Clear walkthroughs of the c q x clicks and breathy consonants, with slow repeats.',q:'Zulu clicks pronunciation tutorial'},
    {icon:'📚',t:'Everyday isiZulu',d:'Practical, phrase-based videos that teach you the way people really talk in South Africa.',q:'everyday isiZulu phrases lessons'},
    {icon:'💬',t:'Zulu music & stories',d:'Soak up the language through song, legend and children\'s stories — brilliant for training your ear.',q:'Zulu songs isiZulu music listening'},
    {icon:'🎧',t:'South African podcasts',d:'Native audio to practise listening on the move, from greetings to long conversations.',q:'South African isiZulu podcast for learners'}
  ]
};
