/* ---- finnish ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["finnish"] = {
  name: 'Finnish',
  flag: '🇫🇮',
  tts: 'fi-FI',
  dir: 'ltr',
  native: 'Suomi',
  soundTitle: 'Finnish sounds & spelling',
  soundIntro: 'Finnish is written almost exactly as it sounds — every letter has one value. Master the tricky <b>ä / ö / y</b>, the long double letters and the rolled <b>r</b>, and you can read any word aloud.',
  grammar: '<p>Finnish spelling is wonderfully predictable: every letter has one sound, and stress always falls on the <b>first</b> syllable. It is <b>agglutinative</b> — endings and cases tack onto the end of a word, so <i>kahvi</i> (coffee) becomes <i>kahvissa</i> (in the coffee). The vowels <b>ä</b>, <b>ö</b> and <b>y</b> are special, and a doubled letter (aa, tt…) is simply held for twice as long. Read it and you can say it.</p>',
  bridges: '<div class="note">🌳 <b>Not Germanic.</b> Finnish is <b>Uralic</b> — a cousin of Hungarian and Estonian, <i>not</i> related to English, German or the other Nordic languages. Even though Finland is a <b>Nordic</b> country, its language stands apart from its Scandinavian neighbours, so you won\'t find familiar cognates — you\'ll be learning words fresh.</div><div class="note">💶 <b>Real loans.</b> A few words were borrowed anyway and will feel familiar: <i>kahvi</i> (coffee), <i>tee</i> (tea), <i>hotelli</i> (hotel), <i>taksi</i> (taxi). And <i>sauna</i> has travelled from Finnish into English and around the world!</div>',
  lessons: [
    { id:1, title:'Greetings', focus:'Moi · Hyvää päivää · näkemiin',
      steps:[
        {t:'say',text:'Start with the word you\'ll say all day: <span class="inline-tr">Moi</span> — hi (informal) and bye. Say it out loud.',tr:'Moi'},
        {t:'words',items:[{tr:'Moi',pr:'MOY',en:'hi / bye'},{tr:'Hei',pr:'HAY',en:'hi'},{tr:'Hyvää päivää',pr:'HEW-vaa PIE-vaa',en:'good day'},{tr:'Hyvää huomenta',pr:'HEW-vaa HWO-men-tah',en:'good morning'},{tr:'Hyvää iltaa',pr:'HEW-vaa EEL-tah',en:'good evening'},{tr:'Näkemiin',pr:'NAK-eh-meen',en:'goodbye'}]},
        {t:'chal',en:'Good day, hello',tr:'Hyvää päivää, moi',pr:'HEW-vaa PIE-vaa, MOY',morph:['hyvää päivää = good day','moi = hi']},
        {t:'say',text:'To ask how someone is: <span class="inline-tr">Mitä kuuluu?</span> (informal). The reply is <span class="inline-tr">Hyvää, kiitos</span> — fine, thanks.',tr:'Mitä kuuluu?'},
        {t:'words',items:[{tr:'Mitä kuuluu?',pr:'MEE-ta KOO-loo',en:'How are you?'},{tr:'Hyvää, kiitos',pr:'HEW-vaa, KEE-tos',en:'Fine, thanks'},{tr:'Entä sinä?',pr:'EN-ta SEE-na',en:'And you?'}]},
        {t:'chal',en:'Hi, how are you?',tr:'Moi, mitä kuuluu?',pr:'MOY, MEE-ta KOO-loo',morph:['moi = hi','mitä kuuluu? = how are you?']}
      ],
      blocks:['<code>Moi</code> / <code>Hei</code> = hi / bye','<code>Hyvää päivää</code> = good day','<code>näkemiin</code> = goodbye'] },
    { id:2, title:'Being polite', focus:'kiitos · ole hyvä · anteeksi · kyllä',
      steps:[
        {t:'say',text:'The politeness pair: <span class="inline-tr">kiitos</span> (thank you) and <span class="inline-tr">ole hyvä</span> (please / you\'re welcome). Both are everywhere.',tr:'kiitos'},
        {t:'words',items:[{tr:'kiitos',pr:'KEE-tos',en:'thank you'},{tr:'kiitos paljon',pr:'KEE-tos PAHL-yon',en:'thank you very much'},{tr:'ole hyvä',pr:'OH-leh HEW-va',en:'please / you\'re welcome'},{tr:'anteeksi',pr:'AHN-tehk-see',en:'excuse me / sorry'},{tr:'kyllä',pr:'KEWL-la',en:'yes'},{tr:'ei',pr:'AY',en:'no'}]},
        {t:'chal',en:'Thank you very much',tr:'Kiitos paljon',pr:'KEE-tos PAHL-yon',morph:['kiitos = thank you','paljon = a lot']},
        {t:'say',text:'<span class="inline-tr">anteeksi</span> is your \'excuse me\' and \'sorry\' in one word — handy to get attention or apologise.',tr:'anteeksi'},
        {t:'chal',en:'Excuse me, please',tr:'Anteeksi, ole hyvä',pr:'AHN-tehk-see, OH-leh HEW-va',morph:['anteeksi = excuse me','ole hyvä = please']},
        {t:'chal',en:'Could I have the menu, please?',tr:'Saisinko ruokalistan, ole hyvä?',pr:'SAI-sin-ko RWO-ka-lees-tan, OH-leh HEW-va',morph:['saisinko = could I get','ruokalistan = the menu','ole hyvä = please']}
      ],
      blocks:['<code>kiitos</code> = thank you · <code>ole hyvä</code> = please','<code>anteeksi</code> = excuse me / sorry','<code>kyllä</code> / <code>ei</code> = yes / no'] },
    { id:3, title:'Numbers 1–10', focus:'yksi · kaksi · kolme · kymmenen',
      steps:[
        {t:'say',text:'Numbers are the fastest win. Listen and repeat: <span class="inline-tr">yksi, kaksi, kolme</span>.',tr:'yksi'},
        {t:'words',items:[{tr:'yksi',pr:'EWK-see',en:'1'},{tr:'kaksi',pr:'KAHK-see',en:'2'},{tr:'kolme',pr:'KOL-meh',en:'3'},{tr:'neljä',pr:'NEL-ya',en:'4'},{tr:'viisi',pr:'VEE-see',en:'5'},{tr:'kymmenen',pr:'KEWM-meh-nen',en:'10'}]},
        {t:'chal',en:'Two coffees, please',tr:'Kaksi kahvia, ole hyvä',pr:'KAHK-see KAHV-ee-a, OH-leh HEW-va',morph:['kaksi = two','kahvia = coffee','ole hyvä = please']},
        {t:'say',text:'<span class="inline-tr">Paljonko se maksaa?</span> = how much does it cost? A key phrase for shops and the market.',tr:'Paljonko se maksaa?'},
        {t:'chal',en:'How much is it?',tr:'Paljonko se maksaa?',pr:'PAHL-yon-ko se MAHK-saa',morph:['paljonko = how much','maksaa = does it cost']},
        {t:'chal',en:'It\'s five euros',tr:'Viisi euroa',pr:'VEE-see EH-oo-roh-a',morph:['viisi = five','euroa = euros']}
      ],
      blocks:['yksi, kaksi, kolme, neljä, viisi = 1–5','<code>paljonko se maksaa?</code> = how much is it?'] },
    { id:4, title:'"I want" — haluan', focus:'haluan · haluaisin · (minä)',
      steps:[
        {t:'say',text:'The magic phrase to order anything: <span class="inline-tr">haluan</span> — I want. Say it out loud.',tr:'haluan'},
        {t:'say',text:'More polite is <span class="inline-tr">haluaisin</span> — I would like. Pair it with what you want: <span class="inline-tr">Haluaisin kahvia</span>.',tr:'haluaisin'},
        {t:'chal',en:'I want coffee',tr:'Haluan kahvia',pr:'HAH-loo-an KAHV-ee-a',morph:['haluan = I want','kahvia = coffee']},
        {t:'chal',en:'I\'d like water',tr:'Haluaisin vettä',pr:'HAH-loo-ai-sin VET-ta',morph:['haluaisin = I would like','vettä = water']},
        {t:'say',text:'To ask for the bill, say <span class="inline-tr">Saisinko laskun?</span> — could I get the bill?',tr:'Saisinko laskun?'},
        {t:'chal',en:'Could I get the bill?',tr:'Saisinko laskun?',pr:'SAI-sin-ko LAHS-koon',morph:['saisinko = could I get','laskun = the bill']}
      ],
      blocks:['<code>haluan</code> = I want','<code>haluaisin</code> = I would like','<code>minä</code> = I'] },
    { id:5, title:'Food & drink', focus:'vesi · leipä · kahvi · tee',
      steps:[
        {t:'say',text:'Eating out? Key words: <span class="inline-tr">vesi</span> (water), <span class="inline-tr">leipä</span> (bread), <span class="inline-tr">kahvi</span> (coffee).',tr:'vesi'},
        {t:'words',items:[{tr:'vesi',pr:'VEH-see',en:'water'},{tr:'leipä',pr:'LAY-pa',en:'bread'},{tr:'kahvi',pr:'KAHV-ee',en:'coffee',link:'≈ English coffee (loan)'},{tr:'tee',pr:'tay',en:'tea',link:'≈ English tea (loan)'},{tr:'olut',pr:'OH-loot',en:'beer'},{tr:'ruokalista',pr:'RWO-ka-lees-ta',en:'the menu'},{tr:'lasku',pr:'LAHS-koo',en:'the bill'}]},
        {t:'chal',en:'Water and bread, please',tr:'Vettä ja leipää, ole hyvä',pr:'VET-ta ya LAY-pa, OH-leh HEW-va',morph:['vettä = water','ja = and','leipää = bread']},
        {t:'chal',en:'I\'d like tea, please',tr:'Teetä, ole hyvä',pr:'TAY-ta, OH-leh HEW-va',morph:['teetä = tea','ole hyvä = please']},
        {t:'say',text:'<span class="inline-tr">Tosi hyvää!</span> = really delicious. Say it and you\'ll make the cook smile.',tr:'Tosi hyvää!'},
        {t:'chal',en:'Delicious! Thank you!',tr:'Tosi hyvää! Kiitos!',pr:'TOH-see HEW-vaa, KEE-tos',morph:['tosi hyvää = really delicious','kiitos = thank you']}
      ],
      blocks:['<code>vesi</code>, <code>leipä</code>, <code>kahvi</code>, <code>tee</code> = water, bread, coffee, tea','<code>lasku</code> = the bill','<code>tosi hyvää</code> = really delicious'] },
    { id:6, title:'Getting around', focus:'Missä on? · oikealle · vasemmalle · juna-asema',
      steps:[
        {t:'say',text:'The most useful question in a new city: <span class="inline-tr">Missä on…?</span> — where is…?',tr:'Missä on?'},
        {t:'words',items:[{tr:'Missä on...?',pr:'MEES-sa on',en:'Where is...?'},{tr:'oikealle',pr:'OY-keh-al-leh',en:'to the right'},{tr:'vasemmalle',pr:'VAH-sem-mal-leh',en:'to the left'},{tr:'suoraan',pr:'SWO-raan',en:'straight ahead'},{tr:'juna-asema',pr:'YOO-na-ah-seh-ma',en:'the train station'},{tr:'vessa',pr:'VES-sa',en:'the bathroom'},{tr:'taksi',pr:'TAHK-see',en:'taxi',link:'≈ English taxi (loan)'},{tr:'hotelli',pr:'hoh-TEL-lee',en:'the hotel',link:'≈ English hotel (loan)'}]},
        {t:'chal',en:'Where is the train station?',tr:'Missä on juna-asema?',pr:'MEES-sa on YOO-na-ah-seh-ma',morph:['missä = where','juna-asema = train station']},
        {t:'chal',en:'Where is the bathroom?',tr:'Missä on vessa?',pr:'MEES-sa on VES-sa',morph:['missä = where','vessa = bathroom']},
        {t:'say',text:'<span class="inline-tr">oikealle</span> (right) and <span class="inline-tr">vasemmalle</span> (left) tell you which way. \'Straight ahead\' is <span class="inline-tr">suoraan</span>.',tr:'suoraan'},
        {t:'chal',en:'Straight ahead',tr:'Suoraan',pr:'SWO-raan',morph:['suoraan = straight ahead']}
      ],
      blocks:['<code>missä on…?</code> = where is…?','<code>oikealle</code> / <code>vasemmalle</code> = right / left'] },
    { id:7, title:'Questions & "is there…?"', focus:'Mikä · Missä · Milloin · Onko',
      steps:[
        {t:'say',text:'Question words are short and memorable: <span class="inline-tr">Mikä?</span> (what), <span class="inline-tr">Missä?</span> (where), <span class="inline-tr">Milloin?</span> (when).',tr:'Mikä?'},
        {t:'words',items:[{tr:'Mikä?',pr:'MEE-ka',en:'what?'},{tr:'Missä?',pr:'MEES-sa',en:'where?'},{tr:'Milloin?',pr:'MEEL-loin',en:'when?'},{tr:'Kuka?',pr:'KOO-ka',en:'who?'}]},
        {t:'say',text:'<span class="inline-tr">Onko…?</span> = is there…? / do you have…? A wonderfully useful little word for travel.',tr:'Onko?'},
        {t:'chal',en:'Is there wifi?',tr:'Onko wifi?',pr:'ON-ko WEE-fee',morph:['onko = is there','wifi = wifi']},
        {t:'say',text:'Lost? <span class="inline-tr">Voitko auttaa?</span> = can you help me?',tr:'Voitko auttaa?'},
        {t:'chal',en:'Can you help me?',tr:'Voitko auttaa?',pr:'VOYT-ko OWT-taa',morph:['voitko = can you','auttaa = to help']}
      ],
      blocks:['<code>mikä / missä / milloin</code> = what / where / when','<code>onko…?</code> = is there…?','<code>voitko auttaa?</code> = can you help me?'] },
    { id:8, title:'Family & people', focus:'perhe · äiti · isä · ystävä',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">perhe</span> (family), <span class="inline-tr">äiti</span> (mother), <span class="inline-tr">isä</span> (father).',tr:'perhe'},
        {t:'words',items:[{tr:'perhe',pr:'PEHR-heh',en:'family'},{tr:'äiti',pr:'AY-tee',en:'mother'},{tr:'isä',pr:'EE-sa',en:'father'},{tr:'ystävä',pr:'EWS-ta-va',en:'friend'},{tr:'veli',pr:'VEH-lee',en:'brother'},{tr:'sisko',pr:'SEES-ko',en:'sister'}]},
        {t:'chal',en:'I have a friend',tr:'Minulla on ystävä',pr:'MIN-ool-la on EWS-ta-va',morph:['minulla on = I have','ystävä = friend']},
        {t:'say',text:'<span class="inline-tr">Minulla on…</span> = I have… (literally \'on me is\'). It\'s how you say what you\'ve got.',tr:'Minulla on'},
        {t:'chal',en:'I have a family',tr:'Minulla on perhe',pr:'MIN-ool-la on PEHR-heh',morph:['minulla on = I have','perhe = family']}
      ],
      blocks:['<code>äiti</code> / <code>isä</code> = mother / father','<code>ystävä</code> = friend','<code>minulla on</code> = I have'] },
    { id:9, title:'Time, days & weather', focus:'tänään · huomennä · maanantai · sää',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">tänään</span>, tomorrow is <span class="inline-tr">huomennä</span>.',tr:'tänään'},
        {t:'words',items:[{tr:'tänään',pr:'TAN-an',en:'today'},{tr:'huomennä',pr:'HWO-men-na',en:'tomorrow'},{tr:'nyt',pr:'newt',en:'now'},{tr:'maanantai',pr:'MAH-nan-tai',en:'Monday'},{tr:'perjantai',pr:'PEHR-yan-tai',en:'Friday'}]},
        {t:'chal',en:'See you tomorrow',tr:'Nähdään huomennä',pr:'NAK-dan HWO-men-na',morph:['nähdään = see you','huomennä = tomorrow']},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">Millainen sää on?</span> ; \'It\'s raining\' is <span class="inline-tr">sataa</span>.',tr:'Millainen sää on?'},
        {t:'chal',en:'It\'s raining',tr:'Sataa',pr:'SAH-taa',morph:['sataa = it rains']}
      ],
      blocks:['<code>tänään</code> / <code>huomennä</code> = today / tomorrow','<code>millainen sää on?</code> = what\'s the weather?'] },
    { id:10, title:'Your name', focus:'Nimeni on __NAME__ · Mikä sinun nimesi on?',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">Nimeni on…</span> = my name is…, and <span class="inline-tr">Hauska tavata</span> = pleased to meet you.',tr:'Nimeni on'},
        {t:'chal',en:'My name is __NAME__',tr:'Nimeni on __NAME__',pr:'NEE-meh-nee on __NAME__',morph:['nimeni on = my name is','__NAME__ = your name']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">Mikä sinun nimesi on?</span> (informal).',tr:'Mikä sinun nimesi on?'},
        {t:'chal',en:'What\'s your name?',tr:'Mikä sinun nimesi on?',pr:'MEE-ka SEE-noon NEE-meh-see on',morph:['mikä = what','sinun nimesi = your name']},
        {t:'chal',en:'Pleased to meet you',tr:'Hauska tavata',pr:'HOWS-ka TAH-va-ta',morph:['hauska tavata = nice to meet you']}
      ],
      blocks:['<code>nimeni on…</code> = my name is…','<code>mikä sinun nimesi on?</code> = what\'s your name?','<code>hauska tavata</code> = pleased to meet you'] },
    { id:11, title:'Health & emergency', focus:'Apua! · lääkäri · apteekki · en ymmärrä',
      steps:[
        {t:'say',text:'The most important words if you need help: <span class="inline-tr">Apua!</span> (help), <span class="inline-tr">lääkäri</span> (doctor), <span class="inline-tr">apteekki</span> (pharmacy).',tr:'Apua!'},
        {t:'words',items:[{tr:'Apua!',pr:'AH-poo-a',en:'help!'},{tr:'lääkäri',pr:'LAK-ka-ree',en:'the doctor'},{tr:'apteekki',pr:'AHP-tehk-kee',en:'the pharmacy'},{tr:'En ymmärrä',pr:'en EWM-mar-ra',en:'I don\'t understand'},{tr:'En puhu suomea',pr:'en POO-hoo SWO-meh-a',en:'I don\'t speak Finnish'}]},
        {t:'chal',en:'Help!',tr:'Apua!',pr:'AH-poo-a',morph:['apua = help']},
        {t:'chal',en:'I don\'t understand',tr:'En ymmärrä',pr:'en EWM-mar-ra',morph:['en = I don\'t','ymmärrä = understand']},
        {t:'say',text:'To say you need help: <span class="inline-tr">Tarvitsen apua</span>.',tr:'Tarvitsen apua'},
        {t:'chal',en:'I need help',tr:'Tarvitsen apua',pr:'TAR-vit-sen AH-poo-a',morph:['tarvitsen = I need','apua = help']}
      ],
      blocks:['<code>apua!</code> = help!','<code>lääkäri</code> = the doctor','<code>en ymmärrä</code> = I don\'t understand'] },
    { id:12, title:'Tying it together', focus:'a capstone scene',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolbox. This capstone uses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello, how are you?',tr:'Moi, mitä kuuluu?',pr:'MOY, MEE-ta KOO-loo',morph:['moi = hi','mitä kuuluu? = how are you?']},
        {t:'chal',en:'I\'d like water, please',tr:'Haluaisin vettä, ole hyvä',pr:'HAH-loo-ai-sin VET-ta, OH-leh HEW-va',morph:['haluaisin = I would like','vettä = water','ole hyvä = please']},
        {t:'chal',en:'Where is the train station?',tr:'Missä on juna-asema?',pr:'MEES-sa on YOO-na-ah-seh-ma',morph:['missä on = where is','juna-asema = train station']},
        {t:'chal',en:'How much is it?',tr:'Paljonko se maksaa?',pr:'PAHL-yon-ko se MAHK-saa',morph:['paljonko se maksaa? = how much is it?']},
        {t:'chal',en:'Delicious! Thank you!',tr:'Tosi hyvää! Kiitos!',pr:'TOH-see HEW-vaa, KEE-tos',morph:['tosi hyvää = delicious','kiitos = thank you']}
      ],
      blocks:['You built: greetings, ordering, directions, prices, thanks — a full day out in Finnish.'] },
    { id:13, title:'Airport & tickets', focus:'lentokenttä · passi · lippu · lento',
      steps:[
        {t:'say',text:'You have landed in Helsinki. The building is the <span class="inline-tr">lentokenttä</span>. Your document is a <span class="inline-tr">passi</span>.',tr:'lentokenttä'},
        {t:'words',items:[{tr:'lentokenttä',pr:'LEN-to-kent-ta',en:'the airport'},{tr:'passi',pr:'PAS-si',en:'the passport'},{tr:'lippu',pr:'LEEP-poo',en:'the ticket'},{tr:'lento',pr:'LEN-to',en:'the flight'},{tr:'portti',pr:'PORT-ti',en:'the gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'Missä on lentokenttä?',pr:'MEES-sa on LEN-to-kent-ta',morph:['missä on = where is','lentokenttä = the airport']},
        {t:'chal',en:'Here is my passport',tr:'Tässä on passini',pr:'TAS-sa on PAS-si-nee',morph:['tässä on = here is','passini = my passport']},
        {t:'chal',en:'A ticket, please',tr:'Yksi lippu, ole hyvä',pr:'EWK-see LEEP-poo, OH-leh HEW-va',morph:['yksi lippu = one ticket','ole hyvä = please']},
        {t:'chal',en:'Where is the gate?',tr:'Missä on portti?',pr:'MEES-sa on PORT-ti',morph:['missä on = where is','portti = the gate']}
      ],
      blocks:['<code>lentokenttä</code> = airport','<code>passi</code> = passport','<code>lippu</code> = ticket'] },
    { id:14, title:'The taxi', focus:'taksi · mennä · hotelli · pysähtykää',
      steps:[
        {t:'say',text:'The driver is waiting. Finnish puts the place in a case: <span class="inline-tr">haluan mennä hotelliin</span> — I want to go to the hotel.',tr:'taksi'},
        {t:'words',items:[{tr:'taksi',pr:'TAHK-see',en:'the taxi'},{tr:'kuljettaja',pr:'KUL-yet-ta-ya',en:'the driver'},{tr:'haluan mennä',pr:'HAH-loo-an MEN-na',en:'I want to go'},{tr:'pysähtykää tähän',pr:'PEW-sahk-tyu-kaa TA-han',en:'stop here (formal)'}]},
        {t:'chal',en:'A taxi, please',tr:'Taksi, ole hyvä',pr:'TAHK-see, OH-leh HEW-va',morph:['taksi = taxi','ole hyvä = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'Haluan mennä hotelliin',pr:'HAH-loo-an MEN-na hoh-TEL-leen',morph:['haluan = I want','mennä = to go','hotelliin = to the hotel']},
        {t:'chal',en:'Stop here, please',tr:'Pysähtykää tähän, ole hyvä',pr:'PEW-sahk-tyu-kaa TA-han, OH-leh HEW-va',morph:['pysähtykää tähän = stop here','ole hyvä = please']},
        {t:'chal',en:'How much is it?',tr:'Paljonko se maksaa?',pr:'PAHL-yon-ko se MAHK-saa',morph:['paljonko = how much','maksaa = does it cost']}
      ],
      blocks:['<code>haluan mennä …</code> = I want to go to …','<code>pysähtykää tähän</code> = stop here (formal te)'] },
    { id:15, title:'The hotel', focus:'varaus · huone · avain · yö',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">minulla on varaus</span> — I have a reservation (literally \'on me is a booking\').',tr:'varaus'},
        {t:'words',items:[{tr:'hotelli',pr:'hoh-TEL-lee',en:'the hotel'},{tr:'varaus',pr:'VAH-rows',en:'the reservation'},{tr:'huone',pr:'HWO-neh',en:'the room'},{tr:'avain',pr:'AH-vain',en:'the key'},{tr:'yksi yö',pr:'EWK-see eu',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'Minulla on varaus',pr:'MIN-ool-la on VAH-rows',morph:['minulla on = I have','varaus = a reservation']},
        {t:'chal',en:'A room for one night, please',tr:'Huone yhdeksi yöksi, ole hyvä',pr:'HWO-neh EWH-dek-si EUK-si, OH-leh HEW-va',morph:['huone = a room','yhdeksi yöksi = for one night','ole hyvä = please']},
        {t:'chal',en:'The key, please',tr:'Avain, ole hyvä',pr:'AH-vain, OH-leh HEW-va',morph:['avain = the key','ole hyvä = please']},
        {t:'chal',en:'Where is my room?',tr:'Missä on huoneeni?',pr:'MEES-sa on HWO-neh-nee',morph:['missä on = where is','huoneeni = my room']}
      ],
      blocks:['<code>varaus</code> = reservation','<code>huone</code> = room','<code>avain</code> = key'] },
    { id:16, title:'Ask for help', focus:'en ymmärrä · hitaammin · englanti',
      steps:[
        {t:'say',text:'When Finnish is too fast: <span class="inline-tr">Hitaammin, ole hyvä</span> — slower, please. Formal <span class="inline-tr">te</span> is safer with staff.',tr:'Hitaammin, ole hyvä'},
        {t:'words',items:[{tr:'hitaammin',pr:'HEE-tahm-min',en:'slower'},{tr:'uudelleen',pr:'OO-de-leen',en:'again'},{tr:'englanti',pr:'ENG-lan-ti',en:'English'},{tr:'voitteko auttaa?',pr:'VOYT-te-ko OWT-taa',en:'can you help? (formal)'}]},
        {t:'chal',en:'I don\'t understand',tr:'En ymmärrä',pr:'en EWM-mar-ra',morph:['en = I don\'t','ymmärrä = understand']},
        {t:'chal',en:'Slower, please',tr:'Hitaammin, ole hyvä',pr:'HEE-tahm-min, OH-leh HEW-va',morph:['hitaammin = slower','ole hyvä = please']},
        {t:'chal',en:'Can you help me?',tr:'Voitteko auttaa?',pr:'VOYT-te-ko OWT-taa',morph:['voitteko = can you (formal)','auttaa = to help']},
        {t:'chal',en:'Do you speak English?',tr:'Puhutteko englantia?',pr:'POO-hut-te-ko ENG-lan-tee-a',morph:['puhutteko = do you speak (formal)','englantia = English']}
      ],
      blocks:['<code>hitaammin</code> = slower','<code>puhutteko englantia?</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'cafe', title:'☕ At a café', emoji:'☕', turns:[
      {who:'You',tr:'Hei! Yksi kahvi, ole hyvä.',pr:'HAY, EWK-see KAHV-ee, OH-leh HEW-va',en:'Hi! One coffee, please.'},
      {who:'Barista',tr:'Tähän vai mukaan?',pr:'TA-han vai MOO-kan',en:'For here or to go?'},
      {who:'You',tr:'Mukaan, kiitos.',pr:'MOO-kan, KEE-tos',en:'To go, thanks.'},
      {who:'Barista',tr:'Ole hyvä. Se maksaa neljä euroa.',pr:'OH-leh HEW-va, se MAHK-saa NEL-ya EH-oo-roh-a',en:'Here you are. That\'s four euros.'},
      {who:'You',tr:'Kiitos paljon!',pr:'KEE-tos PAHL-yon',en:'Thanks a lot!'}
    ]},
    { id:'transport', title:'🚌 Bus & train', emoji:'🚌', turns:[
      {who:'You',tr:'Anteeksi, missä on juna-asema?',pr:'AHN-tehk-see, MEES-sa on YOO-na-ah-seh-ma',en:'Excuse me, where\'s the train station?'},
      {who:'Local',tr:'Se on tuolla, oikealla.',pr:'se on TYOL-la, OY-keh-al-la',en:'It\'s over there, on the right.'},
      {who:'You',tr:'Kiitos. Yksi lippu Helsinkiin, ole hyvä.',pr:'KEE-tos, EWK-see LEEP-poo HEL-seen-keen, OH-leh HEW-va',en:'Thanks. One ticket to Helsinki, please.'},
      {who:'Ticket',tr:'Viisi euroa. Juna lähtee kello yhdeksän.',pr:'VEE-see EH-oo-roh-a, YOO-na LAK-tee KEL-lo EWH-dek-san',en:'Five euros. The train leaves at nine.'}
    ]},
    { id:'restaurant', title:'🍽️ At a restaurant', emoji:'🍽️', turns:[
      {who:'Waiter',tr:'Hyvää iltaa! Onko teillä varaus?',pr:'HEW-vaa EEL-tah, ON-ko TAYL-la VAH-rows',en:'Good evening! Do you have a reservation?'},
      {who:'You',tr:'Kyllä, kahdelle.',pr:'KEWL-la, KAHD-deh-leh',en:'Yes, for two.'},
      {who:'You',tr:'Ruokalista, ole hyvä.',pr:'RWO-ka-lees-ta, OH-leh HEW-va',en:'The menu, please.'},
      {who:'You',tr:'Haluaisin lohta ja perunoita.',pr:'HAH-loo-ai-sin LOH-ta ya PEH-roo-noy-ta',en:'I\'d like the salmon and potatoes.'},
      {who:'Waiter',tr:'Hyvä valinta! Hyvää ruokahalua.',pr:'HEW-va VAH-lin-ta, HEW-vaa RWO-ka-HA-loo-a',en:'Good choice! Enjoy your meal.'}
    ]},
    { id:'market', title:'🧺 At the market', emoji:'🧺', turns:[
      {who:'You',tr:'Paljonko tämä maksaa?',pr:'PAHL-yon-ko TA-ma MAHK-saa',en:'How much is this?'},
      {who:'Seller',tr:'Kaksi euroa.',pr:'KAHK-see EH-oo-roh-a',en:'Two euros.'},
      {who:'You',tr:'Otan kaksi kiloa omenoita.',pr:'OH-tan KAHK-see KEE-lo-ah OH-meh-noy-ta',en:'I\'ll take two kilos of apples.'},
      {who:'Seller',tr:'Ole hyvä. Tässä.',pr:'OH-leh HEW-va, TAS-sa',en:'Here you are. There you go.'},
      {who:'You',tr:'Kiitos, näkemiin!',pr:'KEE-tos, NAK-eh-meen',en:'Thanks, goodbye!'}
    ]}
  ],
  pocket: [
    {tr:'Moi',pr:'MOY',en:'Hi / bye',c:'Greetings'},
    {tr:'Hyvää päivää',pr:'HEW-vaa PIE-vaa',en:'Good day',c:'Greetings'},
    {tr:'Näkemiin',pr:'NAK-eh-meen',en:'Goodbye',c:'Greetings'},
    {tr:'Mitä kuuluu?',pr:'MEE-ta KOO-loo',en:'How are you?',c:'Greetings'},
    {tr:'Hyvää, kiitos',pr:'HEW-vaa, KEE-tos',en:'Fine, thanks',c:'Greetings'},
    {tr:'Nimeni on __NAME__',pr:'NEE-meh-nee on',en:'My name is...',c:'Greetings'},
    {tr:'Kiitos',pr:'KEE-tos',en:'Thank you',c:'Courtesy'},
    {tr:'Kiitos paljon',pr:'KEE-tos PAHL-yon',en:'Thank you very much',c:'Courtesy'},
    {tr:'Ole hyvä',pr:'OH-leh HEW-va',en:'Please / you\'re welcome',c:'Courtesy'},
    {tr:'Anteeksi',pr:'AHN-tehk-see',en:'Excuse me / sorry',c:'Courtesy'},
    {tr:'Kyllä',pr:'KEWL-la',en:'Yes',c:'Courtesy'},
    {tr:'Ei',pr:'AY',en:'No',c:'Courtesy'},
    {tr:'Yksi',pr:'EWK-see',en:'1',c:'Numbers'},
    {tr:'Kaksi',pr:'KAHK-see',en:'2',c:'Numbers'},
    {tr:'Kolme',pr:'KOL-meh',en:'3',c:'Numbers'},
    {tr:'Neljä',pr:'NEL-ya',en:'4',c:'Numbers'},
    {tr:'Viisi',pr:'VEE-see',en:'5',c:'Numbers'},
    {tr:'Kymmenen',pr:'KEWM-meh-nen',en:'10',c:'Numbers'},
    {tr:'Vesi',pr:'VEH-see',en:'water',c:'Food'},
    {tr:'Leipä',pr:'LAY-pa',en:'bread',c:'Food'},
    {tr:'Kahvi',pr:'KAHV-ee',en:'coffee',c:'Food'},
    {tr:'Tee',pr:'tay',en:'tea',c:'Food'},
    {tr:'Lasku',pr:'LAHS-koo',en:'the bill',c:'Food'},
    {tr:'Missä on...?',pr:'MEES-sa on',en:'Where is...?',c:'Directions'},
    {tr:'Oikealle',pr:'OY-keh-al-leh',en:'to the right',c:'Directions'},
    {tr:'Vasemmalle',pr:'VAH-sem-mal-leh',en:'to the left',c:'Directions'},
    {tr:'Suoraan',pr:'SWO-raan',en:'straight ahead',c:'Directions'},
    {tr:'Juna-asema',pr:'YOO-na-ah-seh-ma',en:'the train station',c:'Directions'},
    {tr:'Vessa',pr:'VES-sa',en:'the bathroom',c:'Directions'},
    {tr:'Paljonko se maksaa?',pr:'PAHL-yon-ko se MAHK-saa',en:'How much is it?',c:'Questions'},
    {tr:'Onko...?',pr:'ON-ko',en:'Is there...?',c:'Questions'},
    {tr:'Voitko auttaa?',pr:'VOYT-ko OWT-taa',en:'Can you help me?',c:'Questions'},
    {tr:'Apua!',pr:'AH-poo-a',en:'Help!',c:'Emergency'},
    {tr:'En ymmärrä',pr:'en EWM-mar-ra',en:'I don\'t understand',c:'Emergency'},
    {tr:'Lääkäri',pr:'LAK-ka-ree',en:'the doctor',c:'Emergency'},
    {tr:'Tarvitsen apua',pr:'TAR-vit-sen AH-poo-a',en:'I need help',c:'Emergency'},
    {tr:'Tänään',pr:'TAN-an',en:'today',c:'Time'},
    {tr:'Huomennä',pr:'HWO-men-na',en:'tomorrow',c:'Time'},
    {tr:'Millainen sää on?',pr:'MEEL-lai-nen sash on',en:'What\'s the weather?',c:'Time'},
    {tr:'Lentokenttä',pr:'LEN-to-kent-ta',en:'airport',c:'Travel'},
    {tr:'Taksi',pr:'TAHK-see',en:'taxi',c:'Travel'},
    {tr:'Hotelli',pr:'hoh-TEL-lee',en:'hotel',c:'Travel'},
    {tr:'Pysähtykää tähän',pr:'PEW-sahk-tyu-kaa TA-han',en:'stop here',c:'Travel'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Questions','Emergency','Time','Travel'],
  culture: [
    {icon:'♨️',title:'Sauna is a national ritual',body:'Finland has more saunas than cars. It\'s a place to relax, not just to sweat — often followed by a cool dip or a roll in the snow. In homes and hotels alike, it\'s a warm, welcoming ritual. The word <i>sauna</i> itself comes from Finnish.'},
    {icon:'💪',title:'Sisu — the Finnish spirit',body:'<i>Sisu</i> can\'t be translated in one word: it\'s grit, courage and stubborn resilience through hardship. It\'s a national character trait. When things get hard, Finns lean on <i>sisu</i>.'},
    {icon:'🌳',title:'A Uralic island',body:'Finland is a <b>Nordic</b> country, but its language is <b>Uralic</b> — a cousin of Hungarian and Estonian, with no links to the Germanic or Slavic tongues around it. You won\'t find familiar cognates, so learn words on their own terms.'},
    {icon:'☕',title:'Coffee is life',body:'Finns are among the world\'s biggest coffee drinkers per person. The short break at work is called a <i>kahvitauko</i> (coffee break) — coffee and a cinnamon-bun-like <i>pulla</i> are part of the daily rhythm.'},
    {icon:'🌲',title:'The right to roam',body:'Finland\'s <i>jokamiehenoikeus</i> (everyman\'s right) lets you walk, camp and pick berries and mushrooms freely on most land — a deep respect for nature that everyone shares and preserves.'},
    {icon:'🗣️',title:'A little Suomi goes far',body:'Finns are famously delighted when a visitor tries the language. A single <i>Moi</i> or <i>kiitos</i> can light up a whole shop or café — the effort means more than perfect pronunciation.'}
  ],
  sounds: [
    {l:'ä',say:'like the "a" in "cat" — open and front',ex:'päivä = PIE-vaa (day) · äiti = AY-tee (mother)',voice:'päivä'},
    {l:'ö',say:'round your lips for "o", say "e" — like the German ö',ex:'yö = YUH (night) · työ = TYUH (work)',voice:'yö'},
    {l:'y',say:'round your lips for "oo", say "ee" — like the German ü',ex:'yksi = EWK-see (1) · nyt = newt (now)',voice:'yksi'},
    {l:'double cons',say:'hold the consonant twice as long — it changes the word',ex:'muta = moo-ta (mud) · mutta = MOOT-ta (but)',voice:'mutta'},
    {l:'double vowel',say:'a long vowel, held twice as long',ex:'tuli = TOO-lee (fire) · tuuli = TOO-lee (wind)',voice:'tuuli'},
    {l:'r',say:'rolled / trilled "r" — tap the tip of your tongue',ex:'raha = RAH-ha (money) · Rovaniemi',voice:'raha'},
    {l:'h',say:'always pronounced, even between vowels',ex:'kahvi = KAHV-ee (coffee) · raha = RAH-ha (money)',voice:'kahvi'},
    {l:'j',say:'like "y" in "yes"',ex:'juna = YOO-na (train) · ja = ya (and)',voice:'juna'}
  ],
  resources: [
    {icon:'🗣️',t:'Easy Finnish',d:'Street interviews with native speakers and subtitles — real everyday Finnish at a natural pace.',q:'Easy Finnish street interviews'},
    {icon:'📰',t:'Yle Selkouutiset',d:'Finnish national news written and read slowly in simple language — a great daily stepping stone.',q:'Yle Selkouutiset simple Finnish news'},
    {icon:'🎧',t:'FinnishPod101',d:'Structured bite-size lessons from beginner to advanced, with plenty of audio.',q:'FinnishPod101 Finnish lessons'},
    {icon:'🐢',t:'Slow Finnish Podcasts',d:'Easy listening for learners — perfect for a walk or commute.',q:'slow Finnish podcast for learners'},
    {icon:'💬',t:'Finnish for Beginners',d:'Conversational Finnish built from real dialogues, not grammar tables.',q:'Finnish for beginners learn language'}
  ]
};
