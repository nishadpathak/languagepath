/* ---- georgian ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["georgian"] = {
  name: 'Georgian',
  flag: '🇬🇪',
  tts: 'ka-GE',
  dir: 'ltr',
  native: 'ქართული',
  soundTitle: 'Georgian sounds & spelling',
  soundIntro: 'Georgian has a character all its own: a unique alphabet and a few sounds you may never have heard. Learn these and you can read any Georgian word aloud.',
  grammar: '<p>Georgian is wonderfully regular to spell — once you know its alphabet, you can read anything. It has <b>no</b> words for \'a\' or \'the\': <i>ყავა</i> can mean \'coffee\', \'a coffee\' or \'the coffee\', depending on context. The usual order is subject–object–verb. The verbs carry a lot of information, so here we keep it simple: <b>მინდა</b> = I want, <b>მადლობა</b> = thank you.</p>',
  bridges: '<div class="note">🌍 <b>A family of its own.</b> Georgian is a lone branch of the small <b>Kartvelian</b> family — it is <i>not</i> related to Russian, Turkish or any Indo-European language. Good news: you\'ll learn something almost nobody else in your circle speaks.</div><div class="note">💳 <b>Useful loans.</b> Georgian borrowed practical words from Russian and beyond, so you already know some: <i>ტაქსი</i> (taxi), <i>კაფე</i> (café), <i>პოლიცია</i> (police), <i>მარშრუტკა</i> (marshrutka minibus) and <i>ჩაი</i> (chai = tea).</div>',
  lessons: [
    { id:1, title:'Greetings', focus:'გამარჯობა · დილა მშვიდობისა',
      steps:[
        {t:'say',text:'Start with the first word you\'ll use a hundred times: <span class="inline-tr">გამარჯობა</span> — hello. Say it out loud.',tr:'გამარჯობა'},
        {t:'words',items:[{tr:'გამარჯობა',pr:'ga-mar-JO-ba',en:'hello / hi'},{tr:'დილა მშვიდობისა',pr:'DEE-la msh-vee-DO-bee-sa',en:'good morning'},{tr:'საღამო მშვიდობისა',pr:'sa-GHA-mo msh-vee-DO-bee-sa',en:'good evening'},{tr:'ნახვამდის',pr:'NAKH-vam-dees',en:'goodbye'}]},
        {t:'say',text:'To ask how someone is: <span class="inline-tr">როგორ ხარ?</span>. The reply is <span class="inline-tr">კარგად ვარ</span> — I\'m well.',tr:'როგორ ხარ?'},
        {t:'words',items:[{tr:'როგორ ხარ?',pr:'RO-gor khar',en:'how are you?'},{tr:'კარგად ვარ',pr:'kar-GAD var',en:'I am well'},{tr:'მე მქვია __NAME__',pr:'me M-kvee-a',en:'my name is __NAME__'}]},
        {t:'chal',en:'Hello, I am well',tr:'გამარჯობა, კარგად ვარ',pr:'ga-mar-JO-ba, kar-GAD var',morph:['გამარჯობა = hello','კარგად ვარ = I am well']},
        {t:'chal',en:'Good morning, goodbye',tr:'დილა მშვიდობისა, ნახვამდის',pr:'DEE-la msh-vee-DO-bee-sa, NAKH-vam-dees',morph:['დილა მშვიდობისა = good morning','ნახვამდის = goodbye']}
      ],
      blocks:['<code>გამარჯობა</code> = hello','<code>დილა მშვიდობისა</code> = good morning','<code>ნახვამდის</code> = goodbye'] },
    { id:2, title:'Being polite', focus:'მადლობა · თუ შეიძლება',
      steps:[
        {t:'say',text:'The two magic words: <span class="inline-tr">მადლობა</span> — thank you — and <span class="inline-tr">თუ შეიძლება</span> — please.',tr:'მადლობა'},
        {t:'words',items:[{tr:'მადლობა',pr:'MAD-lo-ba',en:'thank you'},{tr:'თუ შეიძლება',pr:'tu shey-DZLE-ba',en:'please'},{tr:'არაფრის',pr:'a-RAF-rees',en:'you\'re welcome'},{tr:'ბოდიში',pr:'BO-dee-shee',en:'sorry'},{tr:'კი',pr:'kee',en:'yes'},{tr:'არა',pr:'A-ra',en:'no'}]},
        {t:'chal',en:'Thank you very much',tr:'მადლობა ძალიან',pr:'MAD-lo-ba DZA-lee-an',morph:['მადლობა = thank you','ძალიან = very much']},
        {t:'say',text:'To be extra polite when asking, add <span class="inline-tr">თუ შეიძლება</span> at the end — please.',tr:'თუ შეიძლება'},
        {t:'chal',en:'Yes please',tr:'კი, თუ შეიძლება',pr:'kee, tu shey-DZLE-ba',morph:['კი = yes','თუ შეიძლება = please']},
        {t:'chal',en:'No, thank you',tr:'არა, მადლობა',pr:'A-ra, MAD-lo-ba',morph:['არა = no','მადლობა = thank you']}
      ],
      blocks:['<code>მადლობა</code> = thank you','<code>თუ შეიძლება</code> = please','<code>ბოდიში</code> = sorry'] },
    { id:3, title:'Numbers 1–10', focus:'ერთი · ორი · სამი · ათი',
      steps:[
        {t:'say',text:'Numbers are the fastest win. Listen and repeat: <span class="inline-tr">ერთი, ორი, სამი</span>.',tr:'ერთი'},
        {t:'words',items:[{tr:'ერთი',pr:'ER-tee',en:'1'},{tr:'ორი',pr:'O-ree',en:'2'},{tr:'სამი',pr:'SA-mee',en:'3'},{tr:'ოთხი',pr:'OT-khee',en:'4'},{tr:'ხუთი',pr:'KHU-tee',en:'5'},{tr:'ათი',pr:'A-tee',en:'10'}]},
        {t:'say',text:'To ask a price: <span class="inline-tr">რა ღირს?</span> — how much is it?',tr:'რა ღირს?'},
        {t:'chal',en:'Three coffees, please',tr:'სამი ყავა, თუ შეიძლება',pr:'SA-mee QA-va, tu shey-DZLE-ba',morph:['სამი = three','ყავა = coffee','თუ შეიძლება = please']},
        {t:'chal',en:'How much is it?',tr:'რა ღირს?',pr:'ra GHEERS',morph:['რა = what','ღირს = it costs']},
        {t:'chal',en:'Ten lari',tr:'ათი ლარი',pr:'A-tee LA-ree',morph:['ათი = ten','ლარი = lari (currency)']}
      ],
      blocks:['ერთი, ორი, სამი, ხუთი, ათი = 1, 2, 3, 5, 10','<code>რა ღირს?</code> = how much is it?'] },
    { id:4, title:'"I want" — მინდა', focus:'მინდა · I want',
      steps:[
        {t:'say',text:'The word to ask for anything: <span class="inline-tr">მინდა</span> — I want.',tr:'მინდა'},
        {t:'words',items:[{tr:'მინდა',pr:'MEEN-da',en:'I want'},{tr:'მე მინდა',pr:'me MEEN-da',en:'I want (emphatic)'},{tr:'წყალი',pr:'TSQA-lee',en:'water'},{tr:'ყავა',pr:'QA-va',en:'coffee'}]},
        {t:'chal',en:'I want coffee',tr:'მე მინდა ყავა',pr:'me MEEN-da QA-va',morph:['მე = I','მინდა = want','ყავა = coffee']},
        {t:'say',text:'Just add a thing after <span class="inline-tr">მინდა</span>. <span class="inline-tr">წყალი</span> is water.',tr:'მინდა წყალი'},
        {t:'chal',en:'I want water',tr:'მინდა წყალი',pr:'MEEN-da TSQA-lee',morph:['მინდა = I want','წყალი = water']}
      ],
      blocks:['<code>მინდა</code> = I want','<code>მე მინდა</code> = I want (emphatic)'] },
    { id:5, title:'Food & drink', focus:'წყალი · პური · ყავა · ჩაი',
      steps:[
        {t:'say',text:'Eating out? Four essentials: <span class="inline-tr">წყალი</span> (water), <span class="inline-tr">პური</span> (bread), <span class="inline-tr">ყავა</span> (coffee) and <span class="inline-tr">ჩაი</span> (tea).',tr:'წყალი'},
        {t:'words',items:[{tr:'წყალი',pr:'TSQA-lee',en:'water'},{tr:'პური',pr:'POO-ree',en:'bread'},{tr:'ყავა',pr:'QA-va',en:'coffee'},{tr:'ჩაი',pr:'CHAI',en:'tea',link:'≈ English chai — the word travelled the Silk Road'},{tr:'კაფე',pr:'KA-peh',en:'café',link:'≈ café'}]},
        {t:'chal',en:'Water, please',tr:'წყალი, თუ შეიძლება',pr:'TSQA-lee, tu shey-DZLE-ba',morph:['წყალი = water','თუ შეიძლება = please']},
        {t:'chal',en:'Coffee and tea',tr:'ყავა და ჩაი',pr:'QA-va da CHAI',morph:['ყავა = coffee','და = and','ჩაი = tea']},
        {t:'say',text:'<span class="inline-tr">გემრიელი</span> = delicious. Say it and you\'ll make the cook\'s day.',tr:'გემრიელი'},
        {t:'chal',en:'It is delicious!',tr:'გემრიელია!',pr:'gem-ree-E-lee-a',morph:['გემრიელი = delicious','ა = is']}
      ],
      blocks:['<code>წყალი</code>, <code>პური</code>, <code>ყავა</code>, <code>ჩაი</code> = water, bread, coffee, tea','<code>გემრიელი</code> = delicious'] },
    { id:6, title:'Getting around', focus:'სად არის? · მარჯვნივ · მარცხნივ',
      steps:[
        {t:'say',text:'The single most useful question: <span class="inline-tr">სად არის…?</span> — where is…?',tr:'სად არის?'},
        {t:'words',items:[{tr:'სად არის...?',pr:'sad A-rees',en:'where is...?'},{tr:'მარჯვნივ',pr:'mar-JV-niv',en:'to the right'},{tr:'მარცხნივ',pr:'mar-TSKH-niv',en:'to the left'},{tr:'ვაგზალი',pr:'vag-ZA-lee',en:'the station',link:'≈ Russian vokzal'},{tr:'მარშრუტკა',pr:'mar-shroot-KA',en:'minibus',link:'≈ Russian marshrutka'}]},
        {t:'chal',en:'Where is the station?',tr:'სად არის ვაგზალი?',pr:'sad A-rees vag-ZA-lee',morph:['სად არის = where is','ვაგზალი = the station']},
        {t:'chal',en:'Where is the bathroom?',tr:'სად არის ტუალეტი?',pr:'sad A-rees TUA-le-tee',morph:['სად არის = where is','ტუალეტი = bathroom', '≈ toilet']},
        {t:'say',text:'To say how to get there: <span class="inline-tr">მარჯვნივ</span> (right), <span class="inline-tr">მარცხნივ</span> (left), <span class="inline-tr">პირდაპირ</span> (straight ahead).',tr:'პირდაპირ'},
        {t:'chal',en:'Straight ahead',tr:'პირდაპირ',pr:'peer-DA-peer',morph:['პირდაპირ = straight ahead']}
      ],
      blocks:['<code>სად არის…?</code> = where is…?','<code>მარჯვნივ</code> / <code>მარცხნივ</code> = right / left'] },
    { id:7, title:'Questions', focus:'რა · ვინ · როდის · გაქვთ?',
      steps:[
        {t:'say',text:'To ask if someone has something: <span class="inline-tr">გაქვთ…?</span> — do you have…?',tr:'გაქვთ?'},
        {t:'words',items:[{tr:'რა',pr:'ra',en:'what'},{tr:'ვინ',pr:'veen',en:'who'},{tr:'სად',pr:'sad',en:'where'},{tr:'როდის',pr:'RO-dees',en:'when'},{tr:'რატომ',pr:'RA-tom',en:'why'}]},
        {t:'chal',en:'Do you have a table?',tr:'გაქვთ მაგიდა?',pr:'gak-VT ma-GEE-da',morph:['გაქვთ = do you have','მაგიდა = a table']},
        {t:'say',text:'To check if something exists: <span class="inline-tr">არის?</span> — is there?',tr:'არის?'},
        {t:'chal',en:'Is there wifi?',tr:'ვაი-ფაი არის?',pr:'WAI-FAI A-rees',morph:['ვაი-ფაი = wifi','არის = is there']},
        {t:'chal',en:'What is this?',tr:'რა არის ეს?',pr:'ra A-rees es',morph:['რა = what','არის = is','ეს = this']}
      ],
      blocks:['<code>გაქვთ…?</code> = do you have…?','<code>არის?</code> = is there?','<code>რა / ვინ / როდის</code> = what / who / when'] },
    { id:8, title:'Family & people', focus:'ოჯახი · დედა · მამა · მეგობარი',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">ოჯახი</span> (family), <span class="inline-tr">დედა</span> (mother), <span class="inline-tr">მამა</span> (father).',tr:'ოჯახი'},
        {t:'words',items:[{tr:'ოჯახი',pr:'O-ja-khi',en:'family'},{tr:'დედა',pr:'DE-da',en:'mother'},{tr:'მამა',pr:'MA-ma',en:'father'},{tr:'მეგობარი',pr:'me-go-BA-ree',en:'friend'}]},
        {t:'say',text:'To say you have someone, Georgian uses <span class="inline-tr">მყავს</span>. <span class="inline-tr">მე მყავს მეგობარი</span> = I have a friend.',tr:'მყავს'},
        {t:'chal',en:'I have a friend',tr:'მე მყავს მეგობარი',pr:'me mkAVS me-go-BA-ree',morph:['მყავს = I have','მეგობარი = a friend']},
        {t:'chal',en:'This is my mother',tr:'ეს არის ჩემი დედა',pr:'es A-rees CHE-mee DE-da',morph:['ეს = this','ჩემი = my','დედა = mother']}
      ],
      blocks:['<code>ოჯახი</code> = family','<code>დედა</code> / <code>მამა</code> = mother / father','<code>მეგობარი</code> = friend'] },
    { id:9, title:'Time, days & weather', focus:'დღეს · ხვალ · რა ამინდია?',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">დღეს</span>, tomorrow is <span class="inline-tr">ხვალ</span>, yesterday is <span class="inline-tr">გუშინ</span>.',tr:'დღეს'},
        {t:'words',items:[{tr:'დღეს',pr:'dg-HES',en:'today'},{tr:'ხვალ',pr:'khval',en:'tomorrow'},{tr:'გუშინ',pr:'GU-sheen',en:'yesterday'},{tr:'დღე',pr:'dghe',en:'day'}]},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">რა ამინდია?</span>',tr:'რა ამინდია?'},
        {t:'chal',en:'What is the weather like?',tr:'რა ამინდია?',pr:'ra a-MEEN-dee-a',morph:['რა = what','ამინდია = the weather is']},
        {t:'chal',en:'See you tomorrow',tr:'ხვალამდე',pr:'khva-LAM-de',morph:['ხვალამდე = until tomorrow']},
        {t:'chal',en:'It is raining',tr:'წვიმს',pr:'TSVEEMS',morph:['წვიმს = it is raining']}
      ],
      blocks:['<code>დღეს</code> / <code>ხვალ</code> = today / tomorrow','<code>რა ამინდია?</code> = what\'s the weather?'] },
    { id:10, title:'Your name', focus:'მე მქვია __NAME__ · რა გქვია?',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">მე მქვია…</span> = my name is…',tr:'მე მქვია'},
        {t:'chal',en:'My name is __NAME__',tr:'მე მქვია __NAME__',pr:'me M-kvee-a __NAME__',morph:['მე = I','მქვია = am called','__NAME__ = your name']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">რა გქვია?</span>',tr:'რა გქვია?'},
        {t:'chal',en:'What is your name?',tr:'რა გქვია?',pr:'ra G-kvee-a',morph:['რა = what','გქვია = are you called']},
        {t:'say',text:'On meeting, say <span class="inline-tr">სასიამოვნოა</span> — pleased to meet you.',tr:'სასიამოვნოა'},
        {t:'chal',en:'Pleased to meet you',tr:'სასიამოვნოა',pr:'sa-see-a-MOV-no-a',morph:['სასიამოვნოა = pleasing']}
      ],
      blocks:['<code>მე მქვია…</code> = my name is…','<code>რა გქვია?</code> = what\'s your name?','<code>სასიამოვნოა</code> = pleased to meet you'] },
    { id:11, title:'Health & emergency', focus:'დახმარება! · ექიმი · ვერ გავიგე',
      steps:[
        {t:'say',text:'The most important words when you need help: <span class="inline-tr">დახმარება!</span> — help!',tr:'დახმარება!'},
        {t:'words',items:[{tr:'დახმარება!',pr:'dakh-ma-RE-ba',en:'help!'},{tr:'ექიმი',pr:'E-kee-mee',en:'doctor'},{tr:'აფთიაქი',pr:'ap-tee-A-kee',en:'pharmacy'},{tr:'პოლიცია',pr:'po-LEE-tsee-a',en:'police',link:'≈ English police'},{tr:'ვერ გავიგე',pr:'ver GA-vee-ge',en:'I don\'t understand'}]},
        {t:'chal',en:'Help!',tr:'დახმარება!',pr:'dakh-ma-RE-ba',morph:['დახმარება = help']},
        {t:'chal',en:'I don\'t understand',tr:'ვერ გავიგე',pr:'ver GA-vee-ge',morph:['ვერ = (not) able','გავიგე = I understood']},
        {t:'say',text:'To say you need a doctor: <span class="inline-tr">მე მჭირდება ექიმი</span>.',tr:'მე მჭირდება ექიმი'},
        {t:'chal',en:'I need a doctor',tr:'მე მჭირდება ექიმი',pr:'me mcheer-DE-ba E-kee-mee',morph:['მჭირდება = I need','ექიმი = a doctor']}
      ],
      blocks:['<code>დახმარება!</code> = help!','<code>ექიმი</code> = doctor','<code>ვერ გავიგე</code> = I don\'t understand'] },
    { id:12, title:'Tying it together', focus:'a capstone scene in Georgian',
      steps:[
        {t:'say',text:'Great — you built a real toolkit. This capstone uses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello, how are you?',tr:'გამარჯობა, როგორ ხარ?',pr:'ga-mar-JO-ba, RO-gor khar',morph:['გამარჯობა = hello','როგორ ხარ = how are you']},
        {t:'chal',en:'I want coffee, please',tr:'მე მინდა ყავა, თუ შეიძლება',pr:'me MEEN-da QA-va, tu shey-DZLE-ba',morph:['მე მინდა = I want','ყავა = coffee','თუ შეიძლება = please']},
        {t:'chal',en:'Where is the station?',tr:'სად არის ვაგზალი?',pr:'sad A-rees vag-ZA-lee',morph:['სად არის = where is','ვაგზალი = the station']},
        {t:'chal',en:'How much is it?',tr:'რა ღირს?',pr:'ra GHEERS',morph:['რა ღირს = how much is it']},
        {t:'chal',en:'Delicious! Thank you very much!',tr:'გემრიელია! მადლობა ძალიან!',pr:'gem-ree-E-lee-a! MAD-lo-ba DZA-lee-an',morph:['გემრიელია = delicious','მადლობა ძალიან = thanks a lot']}
      ],
      blocks:['You built: greetings, ordering, directions, prices, thanks — a full day out in Georgian.'] },
    { id:13, title:'Airport & tickets', focus:'აეროპორტი · პასპორტი · ბილეთი · რეისი',
      steps:[
        {t:'say',text:'You have landed in Tbilisi. The building is the <span class="inline-tr">აეროპორტი</span>. Your document is a <span class="inline-tr">პასპორტი</span>.',tr:'აეროპორტი'},
        {t:'words',items:[{tr:'აეროპორტი',pr:'a-e-ro-POR-tee',en:'the airport'},{tr:'პასპორტი',pr:'pas-POR-tee',en:'the passport'},{tr:'ბილეთი',pr:'bee-LE-tee',en:'the ticket'},{tr:'რეისი',pr:'REH-ee-see',en:'the flight'},{tr:'გასასვლელი',pr:'ga-sas-VLE-lee',en:'the gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'სად არის აეროპორტი?',pr:'sad A-rees a-e-ro-POR-tee',morph:['სად არის = where is','აეროპორტი = the airport']},
        {t:'chal',en:'Here is my passport',tr:'აი ჩემი პასპორტი',pr:'ai CHE-mee pas-POR-tee',morph:['აი = here is','ჩემი პასპორტი = my passport']},
        {t:'chal',en:'A ticket, please',tr:'ერთი ბილეთი, თუ შეიძლება',pr:'ER-tee bee-LE-tee, tu shey-DZLE-ba',morph:['ერთი ბილეთი = one ticket','თუ შეიძლება = please']},
        {t:'chal',en:'Where is the gate?',tr:'სად არის გასასვლელი?',pr:'sad A-rees ga-sas-VLE-lee',morph:['სად არის = where is','გასასვლელი = the gate']}
      ],
      blocks:['<code>აეროპორტი</code> = airport','<code>პასპორტი</code> = passport','<code>ბილეთი</code> = ticket'] },
    { id:14, title:'The taxi', focus:'ტაქსი · წასვლა · სასტუმრო · გაჩერდით',
      steps:[
        {t:'say',text:'Georgian is SOV: <span class="inline-tr">სასტუმროში წასვლა მინდა</span> — to the hotel to-go I-want. Formal commands use <span class="inline-tr">თქვენ</span>.',tr:'ტაქსი'},
        {t:'words',items:[{tr:'ტაქსი',pr:'TAK-see',en:'the taxi'},{tr:'მძღოლი',pr:'mzghO-lee',en:'the driver'},{tr:'წასვლა მინდა',pr:'tsas-VLA MEEN-da',en:'I want to go'},{tr:'აქ გაჩერდით',pr:'ak ga-cher-DEET',en:'stop here (formal)'}]},
        {t:'chal',en:'A taxi, please',tr:'ტაქსი, თუ შეიძლება',pr:'TAK-see, tu shey-DZLE-ba',morph:['ტაქსი = taxi','თუ შეიძლება = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'სასტუმროში წასვლა მინდა',pr:'sas-tum-RO-shee tsas-VLA MEEN-da',morph:['სასტუმროში = to the hotel','წასვლა = to go','მინდა = I want']},
        {t:'chal',en:'Stop here, please',tr:'აქ გაჩერდით, თუ შეიძლება',pr:'ak ga-cher-DEET, tu shey-DZLE-ba',morph:['აქ გაჩერდით = stop here','თუ შეიძლება = please']},
        {t:'chal',en:'How much is it?',tr:'რა ღირს?',pr:'ra GHEERS',morph:['რა = what','ღირს = it costs']}
      ],
      blocks:['<code>… წასვლა მინდა</code> = I want to go to …','<code>აქ გაჩერდით</code> = stop here (formal თქვენ)'] },
    { id:15, title:'The hotel', focus:'ჯავშანი · ოთახი · გასაღები · ღამე',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">ჯავშანი მაქვს</span> — I have a reservation.',tr:'ჯავშანი მაქვს'},
        {t:'words',items:[{tr:'სასტუმრო',pr:'sas-TUM-ro',en:'the hotel'},{tr:'ჯავშანი',pr:'JAV-sha-nee',en:'the reservation'},{tr:'ოთახი',pr:'o-TA-khee',en:'the room'},{tr:'გასაღები',pr:'ga-sa-GHE-bee',en:'the key'},{tr:'ერთი ღამე',pr:'ER-tee GHA-meh',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'ჯავშანი მაქვს',pr:'JAV-sha-nee MAKVS',morph:['ჯავშანი = a reservation','მაქვს = I have']},
        {t:'chal',en:'A room for one night, please',tr:'ოთახი ერთი ღამით, თუ შეიძლება',pr:'o-TA-khee ER-tee gha-MEET, tu shey-DZLE-ba',morph:['ოთახი = a room','ერთი ღამით = for one night','თუ შეიძლება = please']},
        {t:'chal',en:'The key, please',tr:'გასაღები, თუ შეიძლება',pr:'ga-sa-GHE-bee, tu shey-DZLE-ba',morph:['გასაღები = the key','თუ შეიძლება = please']},
        {t:'chal',en:'Where is my room?',tr:'სად არის ჩემი ოთახი?',pr:'sad A-rees CHE-mee o-TA-khee',morph:['სად არის = where is','ჩემი ოთახი = my room']}
      ],
      blocks:['<code>ჯავშანი</code> = reservation','<code>ოთახი</code> = room','<code>გასაღები</code> = key'] },
    { id:16, title:'Ask for help', focus:'ვერ გავიგე · ნელა · ინგლისური',
      steps:[
        {t:'say',text:'When Georgian is too fast: <span class="inline-tr">ნელა, თუ შეიძლება</span> — slower, please. Formal <span class="inline-tr">თქვენ</span> is safer with staff.',tr:'ნელა, თუ შეიძლება'},
        {t:'words',items:[{tr:'ნელა',pr:'NE-la',en:'slower / slowly'},{tr:'კიდევ',pr:'kee-DEV',en:'again'},{tr:'ინგლისური',pr:'in-glee-SOO-ree',en:'English'},{tr:'დამეხმარებით?',pr:'da-mekh-ma-RE-beet',en:'can you help me? (formal)'}]},
        {t:'chal',en:'I don\'t understand',tr:'ვერ გავიგე',pr:'ver GA-vee-ge',morph:['ვერ = not able','გავიგე = I understood']},
        {t:'chal',en:'Slower, please',tr:'ნელა, თუ შეიძლება',pr:'NE-la, tu shey-DZLE-ba',morph:['ნელა = slower','თუ შეიძლება = please']},
        {t:'chal',en:'Can you help me?',tr:'დამეხმარებით?',pr:'da-mekh-ma-RE-beet',morph:['დამეხმარებით = will you help me','თქვენ = formal you']},
        {t:'chal',en:'Do you speak English?',tr:'ინგლისურად ლაპარაკობთ?',pr:'in-glee-soo-RAD la-pa-ra-KOBT',morph:['ინგლისურად = in English','ლაპარაკობთ? = do you speak? (formal)']}
      ],
      blocks:['<code>ნელა</code> = slower','<code>ინგლისურად ლაპარაკობთ?</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'cafe', title:'☕ At a café', emoji:'☕', turns:[
      {who:'You',tr:'გამარჯობა! ერთი ყავა, თუ შეიძლება.',pr:'ga-mar-JO-ba! ER-tee QA-va, tu shey-DZLE-ba',en:'Hello! A coffee, please.'},
      {who:'Barista',tr:'მაშინვე. აქ დასალევად თუ წასაღებად?',pr:'MA-sheen-ve. ak da-sa-LE-vad tu tsa-sa-GHE-bad',en:'Right away. For here or to go?'},
      {who:'You',tr:'წასაღებად, მადლობა.',pr:'tsa-sa-GHE-bad, MAD-lo-ba',en:'To go, thanks.'},
      {who:'Barista',tr:'აი. სამი ლარი.',pr:'ai. SA-mee LA-ree',en:'Here. Three lari.'},
      {who:'You',tr:'მადლობა ძალიან!',pr:'MAD-lo-ba DZA-lee-an',en:'Thanks a lot!'}
    ]},
    { id:'transport', title:'🚐 On the marshrutka', emoji:'🚐', turns:[
      {who:'You',tr:'უკაცრავად, ეს მარშრუტკა ქუთაისში მიდის?',pr:'oo-KATS-ra-vad, es mar-shroot-KA khoo-TAI-see MEE-dees',en:'Excuse me, does this minibus go to Kutaisi?'},
      {who:'Driver',tr:'არა, ეს ბათუმში მიდის.',pr:'A-ra, es ba-TOOM-shee MEE-dees',en:'No, this one goes to Batumi.'},
      {who:'You',tr:'მაშინ ერთი ბილეთი ბათუმში, თუ შეიძლება.',pr:'MA-sheen ER-tee bee-LE-tee ba-TOOM-shee, tu shey-DZLE-ba',en:'Then one ticket to Batumi, please.'},
      {who:'Driver',tr:'ათი ლარი. დაჯექი.',pr:'A-tee LA-ree. DA-jek-ee',en:'Ten lari. Sit down.'}
    ]},
    { id:'restaurant', title:'🍽️ At a restaurant', emoji:'🍽️', turns:[
      {who:'Waiter',tr:'საღამო მშვიდობისა! გაქვთ დაჯავშნა?',pr:'sa-GHA-mo msh-vee-DO-bee-sa! gak-VT da-JAV-shna',en:'Good evening! Do you have a reservation?'},
      {who:'You',tr:'კი, ორი ადამიანი.',pr:'kee, O-ree A-da-mee-a-nee',en:'Yes, for two people.'},
      {who:'You',tr:'მენიუ, თუ შეიძლება.',pr:'ME-nee-u, tu shey-DZLE-ba',en:'The menu, please.'},
      {who:'You',tr:'მე მინდა ხინკალი და ღვინო.',pr:'me MEEN-da kheen-KA-lee da GHVEE-no',en:'I would like khinkali and wine.'},
      {who:'Waiter',tr:'შესანიშნავი არჩევანი! გემრიელად მიირთვით.',pr:'she-sa-NEESH-na-vee ar-che-VA-nee! gem-ree-e-LAD MEE-eer-tveet',en:'Excellent choice! Enjoy your meal.'}
    ]},
    { id:'market', title:'🥬 At the market', emoji:'🥬', turns:[
      {who:'You',tr:'რა ღირს ეს?',pr:'ra GHEERS es',en:'How much is this?'},
      {who:'Seller',tr:'ათი ლარი.',pr:'A-tee LA-ree',en:'Ten lari.'},
      {who:'You',tr:'ძალიან ძვირია. ხუთ ლარად გამიყიდით?',pr:'DZA-lee-an dzVEE-ree-a. khut LA-rad ga-mee-GEE-deet',en:'Too expensive. Will you sell it for five lari?'},
      {who:'Seller',tr:'კარგი, რვა ლარი.',pr:'KAR-gee, r-VA LA-ree',en:'OK, eight lari.'},
      {who:'You',tr:'კარგი, ავიღებ.',pr:'KAR-gee, a-vee-GHEB',en:'OK, I will take it.'}
    ]}
  ],
  pocket: [
    {tr:'გამარჯობა',pr:'ga-mar-JO-ba',en:'Hello',c:'Greetings'},
    {tr:'დილა მშვიდობისა',pr:'DEE-la msh-vee-DO-bee-sa',en:'Good morning',c:'Greetings'},
    {tr:'ნახვამდის',pr:'NAKH-vam-dees',en:'Goodbye',c:'Greetings'},
    {tr:'როგორ ხარ?',pr:'RO-gor khar',en:'How are you?',c:'Greetings'},
    {tr:'კარგად ვარ',pr:'kar-GAD var',en:'I am well',c:'Greetings'},
    {tr:'მე მქვია __NAME__',pr:'me M-kvee-a',en:'My name is...',c:'Greetings'},
    {tr:'მადლობა',pr:'MAD-lo-ba',en:'Thank you',c:'Courtesy'},
    {tr:'მადლობა ძალიან',pr:'MAD-lo-ba DZA-lee-an',en:'Thanks a lot',c:'Courtesy'},
    {tr:'თუ შეიძლება',pr:'tu shey-DZLE-ba',en:'Please',c:'Courtesy'},
    {tr:'არაფრის',pr:'a-RAF-rees',en:'You\'re welcome',c:'Courtesy'},
    {tr:'ბოდიში',pr:'BO-dee-shee',en:'Sorry',c:'Courtesy'},
    {tr:'კი',pr:'kee',en:'Yes',c:'Courtesy'},
    {tr:'არა',pr:'A-ra',en:'No',c:'Courtesy'},
    {tr:'ერთი',pr:'ER-tee',en:'1',c:'Numbers'},
    {tr:'ორი',pr:'O-ree',en:'2',c:'Numbers'},
    {tr:'სამი',pr:'SA-mee',en:'3',c:'Numbers'},
    {tr:'ათი',pr:'A-tee',en:'10',c:'Numbers'},
    {tr:'წყალი',pr:'TSQA-lee',en:'water',c:'Food'},
    {tr:'პური',pr:'POO-ree',en:'bread',c:'Food'},
    {tr:'ყავა',pr:'QA-va',en:'coffee',c:'Food'},
    {tr:'ჩაი',pr:'CHAI',en:'tea',c:'Food'},
    {tr:'მე მინდა ყავა',pr:'me MEEN-da QA-va',en:'I\'d like coffee',c:'Food'},
    {tr:'გემრიელი',pr:'gem-ree-E-lee',en:'delicious',c:'Food'},
    {tr:'სად არის...?',pr:'sad A-rees',en:'Where is...?',c:'Directions'},
    {tr:'მარჯვნივ',pr:'mar-JV-niv',en:'to the right',c:'Directions'},
    {tr:'მარცხნივ',pr:'mar-TSKH-niv',en:'to the left',c:'Directions'},
    {tr:'პირდაპირ',pr:'peer-DA-peer',en:'straight ahead',c:'Directions'},
    {tr:'ვაგზალი',pr:'vag-ZA-lee',en:'the station',c:'Directions'},
    {tr:'რა ღირს?',pr:'ra GHEERS',en:'how much is it?',c:'Numbers'},
    {tr:'გაქვთ...?',pr:'gak-VT',en:'Do you have...?',c:'Questions'},
    {tr:'რა',pr:'ra',en:'what',c:'Questions'},
    {tr:'სად',pr:'sad',en:'where',c:'Questions'},
    {tr:'როდის',pr:'RO-dees',en:'when',c:'Questions'},
    {tr:'რატომ',pr:'RA-tom',en:'why',c:'Questions'},
    {tr:'დახმარება!',pr:'dakh-ma-RE-ba',en:'Help!',c:'Emergency'},
    {tr:'ვერ გავიგე',pr:'ver GA-vee-ge',en:'I don\'t understand',c:'Emergency'},
    {tr:'მე მჭირდება ექიმი',pr:'me mcheer-DE-ba E-kee-mee',en:'I need a doctor',c:'Emergency'},
    {tr:'აფთიაქი',pr:'ap-tee-A-kee',en:'pharmacy',c:'Emergency'},
    {tr:'პოლიცია',pr:'po-LEE-tsee-a',en:'police',c:'Emergency'},
    {tr:'დღეს',pr:'dg-HES',en:'today',c:'Time'},
    {tr:'ხვალ',pr:'khval',en:'tomorrow',c:'Time'},
    {tr:'გუშინ',pr:'GU-sheen',en:'yesterday',c:'Time'},
    {tr:'რა ამინდია?',pr:'ra a-MEEN-dee-a',en:'How is the weather?',c:'Time'},
    {tr:'აეროპორტი',pr:'a-e-ro-POR-tee',en:'airport',c:'Travel'},
    {tr:'ტაქსი',pr:'TAK-see',en:'taxi',c:'Travel'},
    {tr:'სასტუმრო',pr:'sas-TUM-ro',en:'hotel',c:'Travel'},
    {tr:'აქ გაჩერდით',pr:'ak ga-cher-DEET',en:'stop here',c:'Travel'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Questions','Emergency','Time','Travel'],
  culture: [
    {icon:'🍷',title:'The supra & the toast',body:'A supra is Georgia\'s great feast, and every table has a <i>tamada</i> — a toastmaster — who raises the horned cup and leads endless toasts to peace, to family, to guests. When they toast you, answer with <i>გაუმარჯოს!</i> — cheers!'},
    {icon:'✍️',title:'A one-of-a-kind alphabet',body:'Georgian writes with its own script, <i>Mkhedruli</i> — 33 unique letters, no capitals, no upper or lower case. It\'s one of the world\'s oldest writing systems, and it\'s much more regular than English to sound out.'},
    {icon:'🍇',title:'The cradle of wine',body:'Georgians have made wine for around 8,000 years, using clay <i>qvevri</i> jars buried in the ground — an art recognised by UNESCO. Every family region has its own grape, and a toast is never far away.'},
    {icon:'🎵',title:'Polyphonic singing',body:'Traditional Georgian music is three-part polyphony — an ancient, haunting harmony that UNESCO lists as Intangible Cultural Heritage. You\'ll hear it at every supra, and its open vowels make it great ear-training.'},
    {icon:'🤗',title:'Hospitality is sacred',body:'Georgians say a guest is a gift from God. Expect to be fed, poured wine and tosted again and again. Saying <i>მადლობა</i> (thank you) and a little toast goes a very long way.'},
    {icon:'🏔️',title:'Where Europe meets Asia',body:'Georgia sits in the Caucasus, between the Black and Caspian seas, with Europe to the west and Asia to the east. The mountains are stunning, the cities friendly, and many young people speak English plus Russian.'}
  ],
  sounds: [
    {l:'ქ',say:'"k" with a puff of air (aspirated) — like the k in "key" but breathier',ex:'ქუთაისი = khoo-TAI-see',voice:'ქუთაისი'},
    {l:'ფ',say:'"p" with a puff of air (aspirated) — as in the p of "pot"',ex:'ფული = POO-lee (money)',voice:'ფული'},
    {l:'ტ',say:'a sharp ejective "t" — no puff, a pop from the throat',ex:'ტყე = t-qeh (forest)',voice:'ტყე'},
    {l:'კ',say:'a sharp ejective "k" — pops with no breath, unlike ქ',ex:'კატა = KA-ta (cat)',voice:'კატა'},
    {l:'ჭ',say:'ejective "ch" — a hard, popping "ch" from the throat',ex:'ჭიქა = CHEE-ka (glass)',voice:'ჭიქა'},
    {l:'ყ',say:'a deep velar "q" made far back in the throat — nothing like English',ex:'ყავა = QA-va (coffee)',voice:'ყავა'},
    {l:'ხ',say:'"kh" as in Scottish "loch" — a rough h from the throat',ex:'ხვალ = khval (tomorrow)',voice:'ხვალ'},
    {l:'რ',say:'a rolled / trilled "r", with the tongue tip tapping',ex:'რვა = r-VA (eight)',voice:'რვა'}
  ],
  resources: [
    {icon:'🗣️',t:'Georgian phrases for beginners',d:'Slow, spoken Georgian with subtitles — great for the rhythm and sounds.',q:'learn Georgian phrases for beginners'},
    {icon:'📚',t:'The alphabet (Mkhedruli)',d:'A walkthrough of the 33 letters. The script is unique and genuinely fun to learn.',q:'learn Georgian alphabet mkhedruli'},
    {icon:'🎧',t:'Georgian listening practice',d:'Short audio lessons to build your ear for Georgian\'s vowels and stress.',q:'Georgian language listening practice audio'},
    {icon:'💬',t:'Polyphonic singing',d:'Hear the famous three-part harmony — it also tunes your ear to the vowel sounds.',q:'Georgian polyphonic singing'},
    {icon:'🍷',t:'Wine & supra culture',d:'Tours of qvevri winemaking and the supra feast — pure Georgian culture.',q:'Georgia country wine qvevri supra culture'}
  ]
};
