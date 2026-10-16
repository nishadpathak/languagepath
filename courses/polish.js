/* ---- polish ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["polish"] = {
  name: 'Polish',
  flag: '🇵🇱',
  tts: 'pl-PL',
  dir: 'ltr',
  soundTitle: 'Polish sounds & spelling',
  soundIntro: 'Polish may look intimidating — <i>szczęście</i>, anyone? — but its letters are consistent. Learn the sounds below and you can read almost any word aloud.',
  grammar: '<p>Polish spelling is reliable once you know its sounds: <b>cz</b> is like \'ch\', <b>sz</b> like \'sh\', <b>ł</b> like \'w\', and <b>rz</b> and <b>ż</b> both like the \'s\' in <i>measure</i>. The language adds little endings to nouns and verbs depending on their role, so <i>kawa</i> (coffee) becomes <i>kawę</i> when you say \'a coffee\' — but people understand you no matter what.</p>',
  bridges: '<div class="note">🏴 <b>English.</b> Polish already uses Latin letters, so you can read the words — you just have to learn the sounds. Many Poles speak English, but any <i>dziękuję</i> goes a long way.</div><div class="note">🇷🇺 <b>Russian / Ukrainian.</b> Polish is a Slavic cousin to Russian and Ukrainian. You\'ll spot shared roots like <i>woda</i> (voda), <i>brat</i>, and <i>matka</i> — but Polish uses the Latin alphabet and different sounds.</div>',
  lessons: [
    { id:1, title:'Greetings & being polite', focus:'cześć · dzień dobry · dziękuję · proszę',
      steps:[
        {t:'say',text:'Let\'s start with the first words you\'ll use: <span class="inline-tr">cześć</span> — hi (and bye). Say it out loud.',tr:'cześć'},
        {t:'words',items:[{tr:'cześć',pr:'cheshch',en:'hi / bye'},{tr:'dzień dobry',pr:'jen DOH-brih',en:'good morning (formal)'},{tr:'dobry wieczór',pr:'DOH-brih VYEH-choor',en:'good evening'},{tr:'do widzenia',pr:'doh vee-DZEH-nyah',en:'goodbye'}]},
        {t:'chal',en:'Good morning, how are you?',tr:'Dzień dobry, jak się masz?',pr:'jen DOH-brih, yahk sheh mahsh',morph:['dzień dobry = good morning','jak się masz? = how are you?']},
        {t:'say',text:'Two more essentials: <span class="inline-tr">dziękuję</span> (thank you) and <span class="inline-tr">proszę</span> (please / you\'re welcome).',tr:'dziękuję'},
        {t:'chal',en:'Thank you very much',tr:'Dziękuję bardzo',pr:'jen-KOO-yeh BAR-dzoh',morph:['dziękuję = thank you','bardzo = very much']},
        {t:'say',text:'To ask how someone is: <span class="inline-tr">Jak się masz?</span> (informal). The reply is <span class="inline-tr">Dobrze, dziękuję</span> — well, thanks.',tr:'Jak się masz?'},
        {t:'words',items:[{tr:'Jak się masz?',pr:'yahk sheh mahsh',en:'How are you?'},{tr:'Dobrze, dziękuję',pr:'DOH-bzheh, jen-KOO-yeh',en:'Well, thanks'},{tr:'W porządku',pr:'foh ZHON-dkoo',en:'Not bad / OK'}]},
        {t:'chal',en:'Hi, how are you?',tr:'Cześć, jak się masz?',pr:'cheshch, yahk sheh mahsh',morph:['cześć = hi','jak się masz? = how are you?']}
      ],
      blocks:['<code>cześć</code> = hi / bye','<code>dzień dobry</code> = good morning','<code>dziękuję</code> = thank you · <code>proszę</code> = please','<code>do widzenia</code> = goodbye'] },
    { id:2, title:'Polite phrases', focus:'dziękuję · proszę · przepraszam · nie ma za co',
      steps:[
        {t:'say',text:'Being polite opens every door. <span class="inline-tr">dziękuję</span> = thank you, <span class="inline-tr">proszę</span> = please (and you\'re welcome).',tr:'dziękuję'},
        {t:'words',items:[{tr:'dziękuję',pr:'jen-KOO-yeh',en:'thank you'},{tr:'proszę',pr:'PROH-sheh',en:'please / you\'re welcome'},{tr:'przepraszam',pr:'psheh-PRAH-shahm',en:'excuse me / sorry'},{tr:'nie ma za co',pr:'nyah mah ZAH tsoh',en:'you\'re welcome'}]},
        {t:'chal',en:'Excuse me, thank you',tr:'Przepraszam, dziękuję',pr:'psheh-PRAH-shahm, jen-KOO-yeh',morph:['przepraszam = excuse me','dziękuję = thank you']},
        {t:'say',text:'<span class="inline-tr">Przepraszam</span> covers both \'excuse me\' and \'sorry\'. <span class="inline-tr">Nie ma za co</span> is the reply to a thank-you.',tr:'przepraszam'},
        {t:'chal',en:'Yes, please',tr:'Tak, proszę',pr:'tahk, PROH-sheh',morph:['tak = yes','proszę = please']},
        {t:'chal',en:'No, thank you',tr:'Nie, dziękuję',pr:'nyeh, jen-KOO-yeh',morph:['nie = no','dziękuję = thank you']}
      ],
      blocks:['<code>dziękuję</code> = thank you','<code>proszę</code> = please','<code>przepraszam</code> = excuse me / sorry','<code>tak / nie</code> = yes / no'] },
    { id:3, title:'Numbers 1–10', focus:'jeden · dwa · trzy · dziesięć',
      steps:[
        {t:'say',text:'Numbers are the fastest win. Listen and repeat: <span class="inline-tr">jeden, dwa, trzy</span>.',tr:'jeden'},
        {t:'words',items:[{tr:'jeden',pr:'YEH-den',en:'1'},{tr:'dwa',pr:'dvah',en:'2'},{tr:'trzy',pr:'tshih',en:'3'},{tr:'cztery',pr:'CHTEH-rih',en:'4'},{tr:'pięć',pr:'pyench',en:'5'},{tr:'sześć',pr:'sheshch',en:'6'},{tr:'siedem',pr:'SHEH-dem',en:'7'},{tr:'osiem',pr:'OH-shem',en:'8'},{tr:'dziewięć',pr:'JEH-vyench',en:'9'},{tr:'dziesięć',pr:'JEH-shench',en:'10'}]},
        {t:'chal',en:'Two coffees, please',tr:'Poproszę dwie kawy',pr:'poh-PROH-sheh DVYEH KAH-vih',morph:['poproszę = I\'d like','dwie = two','kawy = coffees']},
        {t:'say',text:'To ask how much: <span class="inline-tr">Ile to kosztuje?</span> = how much is it? Combine it with numbers to shop.',tr:'Ile to kosztuje?'},
        {t:'chal',en:'How much is it?',tr:'Ile to kosztuje?',pr:'EE-leh toh kosh-TOO-yeh',morph:['ile = how much','to kosztuje = does it cost']},
        {t:'chal',en:'It\'s five zlotys',tr:'Pięć złotych',pr:'pyench ZWO-tih',morph:['pięć = five','złotych = zlotys']}
      ],
      blocks:['jeden, dwa, trzy … dziesięć = 1–10','<code>ile to kosztuje?</code> = how much is it?','<code>poproszę</code> = I\'d like'] },
    { id:4, title:'"I want" — chcę & proszę o', focus:'chcę · proszę o · poproszę',
      steps:[
        {t:'say',text:'The key verb to want: <span class="inline-tr">chcę</span> — I want. Say it out loud.',tr:'chcę'},
        {t:'chal',en:'I want a coffee',tr:'Chcę kawę',pr:'htseh KAH-veh',morph:['chcę = I want','kawę = coffee']},
        {t:'say',text:'More polite: <span class="inline-tr">proszę o…</span> = I\'d like…, and <span class="inline-tr">poproszę…</span> when you order.',tr:'proszę o'},
        {t:'chal',en:'I\'d like a water, please',tr:'Poproszę wodę',pr:'poh-PROH-sheh VOH-deh',morph:['poproszę = I\'d like','wodę = water']},
        {t:'chal',en:'I\'d like coffee, please',tr:'Proszę o kawę',pr:'PROH-sheh oh KAH-veh',morph:['proszę o = I\'d like','kawę = coffee']},
        {t:'say',text:'Note how <span class="inline-tr">kawa</span> changes to <span class="inline-tr">kawę</span> when you want it — that\'s Polish case, and it\'s nothing to fear.',tr:'kawę'}
      ],
      blocks:['<code>chcę</code> = I want','<code>proszę o…</code> = I\'d like…','<code>poproszę…</code> = I\'d like (ordering)'] },
    { id:5, title:'Food & drink', focus:'woda · kawa · chleb · rachunek',
      steps:[
        {t:'say',text:'Eating out? Key words: <span class="inline-tr">woda</span> (water), <span class="inline-tr">kawa</span> (coffee), <span class="inline-tr">chleb</span> (bread).',tr:'woda'},
        {t:'words',items:[{tr:'woda',pr:'VOH-dah',en:'water',link:"≈ water (cf. vodka)"},{tr:'kawa',pr:'KAH-vah',en:'coffee',link:"≈ coffee (via Turkish kahve)"},{tr:'herbata',pr:'hehr-BAH-tah',en:'tea'},{tr:'chleb',pr:'hlehb',en:'bread'},{tr:'piwo',pr:'PEE-voh',en:'beer'},{tr:'menu',pr:'MEH-noo',en:'the menu',link:"≈ English menu"}]},
        {t:'chal',en:'Water and bread, please',tr:'Poproszę wodę i chleb',pr:'poh-PROH-sheh VOH-deh ee hlehb',morph:['poproszę = I\'d like','wodę = water','i = and','chleb = bread']},
        {t:'say',text:'<span class="inline-tr">i</span> = and. <span class="inline-tr">Smacznego!</span> = enjoy your meal, and <span class="inline-tr">smaczne</span> means tasty.',tr:'Smacznego!'},
        {t:'chal',en:'It\'s delicious!',tr:'Bardzo smaczne!',pr:'BAR-dzoh SMACH-neh',morph:['bardzo = very','smaczne = tasty']},
        {t:'chal',en:'The bill, please',tr:'Poproszę rachunek',pr:'poh-PROH-sheh rah-HOO-nek',morph:['poproszę = I\'d like','rachunek = the bill']}
      ],
      blocks:['<code>woda</code>, <code>kawa</code>, <code>herbata</code> = water, coffee, tea','<code>chleb</code> = bread','<code>i</code> = and · <code>rachunek</code> = the bill'] },
    { id:6, title:'Getting around', focus:'gdzie jest · w prawo · w lewo · dworzec',
      steps:[
        {t:'say',text:'The most useful question in any city: <span class="inline-tr">Gdzie jest…?</span> — where is…?',tr:'Gdzie jest…?'},
        {t:'words',items:[{tr:'Gdzie jest...?',pr:'g-dzyeh yest',en:'Where is...?'},{tr:'w prawo',pr:'f PRAH-voh',en:'to the right'},{tr:'w lewo',pr:'f LEH-voh',en:'to the left'},{tr:'prosto',pr:'PROH-stoh',en:'straight ahead'},{tr:'dworzec',pr:'DVOH-zhets',en:'the station'}]},
        {t:'chal',en:'Where is the station?',tr:'Gdzie jest dworzec?',pr:'g-dzyeh yest DVOH-zhets',morph:['gdzie jest = where is','dworzec = the station']},
        {t:'chal',en:'Where is the bathroom?',tr:'Gdzie jest toaleta?',pr:'g-dzyeh yest toh-ah-LEH-tah',morph:['gdzie jest = where is','toaleta = the bathroom'],link:'toaleta ≈ toilet'},
        {t:'say',text:'<span class="inline-tr">W prawo</span> and <span class="inline-tr">w lewo</span> tell you which way to turn. \'Straight ahead\' is <span class="inline-tr">prosto</span>.',tr:'prosto'},
        {t:'chal',en:'Straight ahead',tr:'Prosto',pr:'PROH-stoh',morph:['prosto = straight ahead']}
      ],
      blocks:['<code>gdzie jest…?</code> = where is…?','<code>w prawo / w lewo</code> = right / left','<code>dworzec</code> = the station'] },
    { id:7, title:'Questions & "do you have…?"', focus:'czy ma pan/pani · czy jest · ile kosztuje',
      steps:[
        {t:'say',text:'To ask someone if they have something politely: <span class="inline-tr">Czy ma pan…?</span> (to a man) or <span class="inline-tr">Czy ma pani…?</span> (to a woman). <b>czy</b> makes it a question.',tr:'Czy ma pan…?'},
        {t:'words',items:[{tr:'Czy ma pan...?',pr:'chih mah pahn',en:'Do you have...? (to a man)'},{tr:'Czy ma pani...?',pr:'chih mah PAH-nee',en:'Do you have...? (to a woman)'},{tr:'czy jest...?',pr:'chih yest',en:'Is there...?'},{tr:'ile to kosztuje?',pr:'EE-leh toh kosh-TOO-yeh',en:'How much is it?'}]},
        {t:'chal',en:'Do you have a room?',tr:'Czy ma pani pokój?',pr:'chih mah PAH-nee POH-kool',morph:['czy = (question word)','ma pani = do you have (to a woman)','pokój = a room']},
        {t:'say',text:'<span class="inline-tr">czy</span> turns a statement into a yes/no question. <span class="inline-tr">Czy jest…?</span> = is there…?',tr:'czy'},
        {t:'chal',en:'Is there wifi?',tr:'Czy jest wifi?',pr:'chih yest WEE-fee',morph:['czy jest = is there','wifi = wifi']},
        {t:'chal',en:'Do you have a table?',tr:'Czy ma pan stolik?',pr:'chih mah pahn STOH-leek',morph:['czy = (question word)','ma pan = do you have (to a man)','stolik = a table']}
      ],
      blocks:['<code>czy ma pan…?</code> = do you have…? (to a man)','<code>czy ma pani…?</code> = do you have…? (to a woman)','<code>ile to kosztuje?</code> = how much is it?'] },
    { id:8, title:'Family & people', focus:'rodzina · matka · ojciec · przyjaciel',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">rodzina</span> (family), <span class="inline-tr">matka</span> (mother), <span class="inline-tr">ojciec</span> (father).',tr:'rodzina'},
        {t:'words',items:[{tr:'rodzina',pr:'roh-DJEE-nah',en:'family'},{tr:'matka',pr:'MAHT-kah',en:'mother',link:"≈ mother (same root)"},{tr:'ojciec',pr:'OY-chets',en:'father'},{tr:'brat',pr:'braht',en:'brother',link:"≈ brother (same root)"},{tr:'siostra',pr:'SHOS-trah',en:'sister'},{tr:'przyjaciel',pr:'pshih-YAH-chehl',en:'friend'}]},
        {t:'chal',en:'I have a family',tr:'Mam rodzinę',pr:'mahm roh-DJEE-neh',morph:['mam = I have','rodzinę = family']},
        {t:'say',text:'<span class="inline-tr">Mam…</span> = I have… It\'s the key verb to say what you\'ve got.',tr:'mam'},
        {t:'chal',en:'I have a brother',tr:'Mam brata',pr:'mahm BRAH-tah',morph:['mam = I have','brata = brother']},
        {t:'chal',en:'I have a friend',tr:'Mam przyjaciela',pr:'mahm pshih-YAH-cheh-lah',morph:['mam = I have','przyjaciela = friend']}
      ],
      blocks:['<code>matka</code> / <code>ojciec</code> = mother / father','<code>rodzina</code> = family','<code>mam…</code> = I have…'] },
    { id:9, title:'Time, days & weather', focus:'dziś · jutro · poniedziałek · pogoda',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">dziś</span> (or <span class="inline-tr">dzisiaj</span>), tomorrow is <span class="inline-tr">jutro</span>.',tr:'dziś'},
        {t:'words',items:[{tr:'dziś',pr:'jeech',en:'today'},{tr:'jutro',pr:'YOO-troh',en:'tomorrow'},{tr:'poniedziałek',pr:'poh-nyeh-DJAH-wek',en:'Monday'},{tr:'niedziela',pr:'nyeh-DJEE-lah',en:'Sunday'},{tr:'pogoda',pr:'poh-GOH-dah',en:'the weather'},{tr:'jaka jest pogoda?',pr:'YAH-kah yest poh-GOH-dah',en:'what\'s the weather?'}]},
        {t:'chal',en:'See you tomorrow',tr:'Do jutra',pr:'doh YOO-trah',morph:['do = until','jutra = tomorrow']},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">Jaka jest pogoda?</span> — what\'s the weather like?',tr:'Jaka jest pogoda?'},
        {t:'chal',en:'It\'s raining',tr:'Pada deszcz',pr:'PAH-dah deshch',morph:['pada = it\'s falling','deszcz = rain']},
        {t:'chal',en:'It\'s sunny',tr:'Jest słonecznie',pr:'yest swoh-NECH-nyeh',morph:['jest = it is','słonecznie = sunny']}
      ],
      blocks:['<code>dziś / jutro</code> = today / tomorrow','<code>poniedziałek</code> = Monday · <code>niedziela</code> = Sunday','<code>jaka jest pogoda?</code> = what\'s the weather?'] },
    { id:10, title:'Small talk & your name', focus:'nazywam się · jak masz na imię · miło mi',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">Nazywam się…</span> = my name is…, and <span class="inline-tr">Miło mi</span> = nice to meet you.',tr:'Nazywam się'},
        {t:'chal',en:'My name is __NAME__',tr:'Nazywam się __NAME__',pr:'nah-ZIH-vahm sheh __NAME__',morph:['nazywam się = my name is','__NAME__ = your name']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">Jak masz na imię?</span> (informal).',tr:'Jak masz na imię?'},
        {t:'chal',en:'What\'s your name?',tr:'Jak masz na imię?',pr:'yahk mahsh nah EE-myeh',morph:['jak masz na imię = what are you called?']},
        {t:'chal',en:'Nice to meet you',tr:'Miło mi',pr:'MEE-woh mee',morph:['miło = nice','mi = to me']},
        {t:'chal',en:'I am from America',tr:'Jestem z Ameryki',pr:'YEH-stem zah ah-MEH-rih-kee',morph:['jestem = I am','z = from','Ameryki = America'],link:'Ameryka ≈ America'}
      ],
      blocks:['<code>nazywam się…</code> = my name is…','<code>jak masz na imię?</code> = what\'s your name?','<code>miło mi</code> = nice to meet you'] },
    { id:11, title:'Health & emergency', focus:'pomocy · lekarz · apteka · nie rozumiem',
      steps:[
        {t:'say',text:'The most important words if you need help: <span class="inline-tr">pomocy</span> (help!), <span class="inline-tr">lekarz</span> (doctor), <span class="inline-tr">apteka</span> (pharmacy).',tr:'pomocy'},
        {t:'words',items:[{tr:'pomocy',pr:'poh-MOH-tsih',en:'help!'},{tr:'lekarz',pr:'LEH-kahsh',en:'the doctor'},{tr:'apteka',pr:'ahp-TEH-kah',en:'the pharmacy',link:"≈ apothecary (old pharmacy)"},{tr:'nie rozumiem',pr:'nyeh roh-ZOO-myem',en:'I don\'t understand'}]},
        {t:'chal',en:'Help!',tr:'Pomocy!',pr:'poh-MOH-tsih',morph:['pomocy = help']},
        {t:'chal',en:'I don\'t understand',tr:'Nie rozumiem',pr:'nyeh roh-ZOO-myem',morph:['nie = not','rozumiem = I understand']},
        {t:'say',text:'To say you need help: <span class="inline-tr">Potrzebuję pomocy</span>. And <span class="inline-tr">Nie czuję się dobrze</span> = I don\'t feel well.',tr:'Potrzebuję pomocy'},
        {t:'chal',en:'I need help',tr:'Potrzebuję pomocy',pr:'poh-tsheh-BOO-yeh poh-MOH-tsih',morph:['potrzebuję = I need','pomocy = help']},
        {t:'chal',en:'I don\'t feel well',tr:'Nie czuję się dobrze',pr:'nyeh CHOO-yeh sheh DOH-bzheh',morph:['nie czuję się = I don\'t feel','dobrze = well']}
      ],
      blocks:['<code>pomocy</code> = help!','<code>lekarz</code> / <code>apteka</code> = doctor / pharmacy','<code>nie rozumiem</code> = I don\'t understand'] },
    { id:12, title:'Tying it together', focus:'chcę · czy ma pan · gdzie jest · a capstone scene',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolbox. This capstone uses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello, how are you?',tr:'Dzień dobry, jak się masz?',pr:'jen DOH-brih, yahk sheh mahsh',morph:['dzień dobry = good morning','jak się masz? = how are you?']},
        {t:'chal',en:'I\'d like a coffee, please',tr:'Poproszę kawę',pr:'poh-PROH-sheh KAH-veh',morph:['poproszę = I\'d like','kawę = coffee']},
        {t:'chal',en:'Where is the station?',tr:'Gdzie jest dworzec?',pr:'g-dzyeh yest DVOH-zhets',morph:['gdzie jest = where is','dworzec = the station']},
        {t:'chal',en:'How much is it?',tr:'Ile to kosztuje?',pr:'EE-leh toh kosh-TOO-yeh',morph:['ile to kosztuje? = how much is it?']},
        {t:'chal',en:'Delicious! Thank you!',tr:'Bardzo smaczne! Dziękuję!',pr:'BAR-dzoh SMACH-neh, jen-KOO-yeh',morph:['bardzo smaczne = very tasty','dziękuję = thank you']}
      ],
      blocks:['You built: greetings, ordering, directions, prices, thanks — a full day out in Polish.'] },
    { id:13, title:'Airport & tickets', focus:'lotnisko · paszport · bilet · bramka',
      steps:[
        {t:'say',text:'You have landed. The building is the <span class="inline-tr">lotnisko</span>. Your document is a <span class="inline-tr">paszport</span>.',tr:'lotnisko'},
        {t:'words',items:[{tr:'lotnisko',pr:'lot-NEES-koh',en:'airport'},{tr:'paszport',pr:'PAHSH-port',en:'passport'},{tr:'bilet',pr:'BEE-leht',en:'ticket'},{tr:'bramka',pr:'BRAHM-kah',en:'gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'Gdzie jest lotnisko?',pr:'g-dzyeh yest lot-NEES-koh',morph:['gdzie jest = where is','lotnisko = airport']},
        {t:'chal',en:'Here is my passport',tr:'Oto mój paszport',pr:'OH-toh mooy PAHSH-port',morph:['oto = here is','mój paszport = my passport']},
        {t:'chal',en:'A ticket, please',tr:'Poproszę bilet',pr:'poh-PROH-sheh BEE-leht',morph:['poproszę = I\'d like','bilet = ticket']},
        {t:'chal',en:'Where is the gate?',tr:'Gdzie jest bramka?',pr:'g-dzyeh yest BRAHM-kah',morph:['gdzie jest = where is','bramka = gate']}
      ],
      blocks:['<code>lotnisko</code> = airport','<code>paszport</code> = passport','<code>bilet</code> = ticket'] },
    { id:14, title:'The taxi', focus:'taksówka · hotel · zatrzymać',
      steps:[
        {t:'say',text:'The driver is waiting. <span class="inline-tr">taksówka</span> is the Polish word. Tell them <span class="inline-tr">chcę jechać do hotelu</span>.',tr:'taksówka'},
        {t:'words',items:[{tr:'taksówka',pr:'tak-SOOF-kah',en:'taxi'},{tr:'kierowca',pr:'kyeh-ROV-tsah',en:'driver'},{tr:'chcę jechać',pr:'htseh YEH-hahch',en:'I want to go'},{tr:'proszę tu zatrzymać',pr:'PROH-sheh too zah-TZIH-mach',en:'please stop here'}]},
        {t:'chal',en:'Taxi, please',tr:'Taksówka, proszę',pr:'tak-SOOF-kah, PROH-sheh',morph:['taksówka = taxi','proszę = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'Chcę jechać do hotelu',pr:'htseh YEH-hahch doh ho-TEH-loo',morph:['chcę = I want','jechać = to go (by vehicle)','do hotelu = to the hotel']},
        {t:'chal',en:'Stop here, please',tr:'Proszę tu zatrzymać',pr:'PROH-sheh too zah-TZIH-mach',morph:['proszę = please','tu = here','zatrzymać = stop']},
        {t:'chal',en:'How much is it?',tr:'Ile to kosztuje?',pr:'EE-leh toh kosh-TOO-yeh',morph:['ile = how much','to kosztuje = does it cost']}
      ],
      blocks:['<code>chcę jechać do …</code> = I want to go to …','<code>proszę tu zatrzymać</code> = please stop here'] },
    { id:15, title:'The hotel', focus:'rezerwacja · pokój · klucz · noc',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">mam rezerwację</span> — I have a reservation.',tr:'rezerwacja'},
        {t:'words',items:[{tr:'hotel',pr:'ho-TEL',en:'hotel'},{tr:'rezerwacja',pr:'reh-zer-VAH-tsyah',en:'reservation'},{tr:'pokój',pr:'POH-kooy',en:'room'},{tr:'klucz',pr:'klooch',en:'key'},{tr:'jedna noc',pr:'YED-nah nots',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'Mam rezerwację',pr:'mahm reh-zer-VAH-tseh',morph:['mam = I have','rezerwację = a reservation (object case)']},
        {t:'chal',en:'A room for one night, please',tr:'Poproszę pokój na jedną noc',pr:'poh-PROH-sheh POH-kooy nah YED-non nots',morph:['poproszę = I\'d like','pokój = room','na jedną noc = for one night']},
        {t:'chal',en:'The key, please',tr:'Klucz, proszę',pr:'klooch, PROH-sheh',morph:['klucz = key','proszę = please']},
        {t:'chal',en:'Where is my room?',tr:'Gdzie jest mój pokój?',pr:'g-dzyeh yest mooy POH-kooy',morph:['gdzie jest = where is','mój pokój = my room']}
      ],
      blocks:['<code>rezerwacja</code> = reservation','<code>pokój</code> = room','<code>klucz</code> = key'] },
    { id:16, title:'Ask for help', focus:'nie rozumiem · wolniej · angielski',
      steps:[
        {t:'say',text:'When Polish is too fast: <span class="inline-tr">wolniej, proszę</span> — slower, please.',tr:'wolniej'},
        {t:'words',items:[{tr:'wolniej',pr:'VOL-nyey',en:'slower'},{tr:'jeszcze raz',pr:'YEH-shcheh rahs',en:'again'},{tr:'angielski',pr:'ahn-GYEL-skee',en:'English'},{tr:'czy może pan pomóc?',pr:'chih MOH-zheh pahn POH-moots',en:'can you help?'}]},
        {t:'chal',en:'I don\'t understand',tr:'Nie rozumiem',pr:'nyeh roh-ZOO-myem',morph:['nie = not','rozumiem = I understand']},
        {t:'chal',en:'Speak slowly, please',tr:'Wolniej, proszę',pr:'VOL-nyey, PROH-sheh',morph:['wolniej = slower','proszę = please']},
        {t:'chal',en:'Can you help me?',tr:'Czy może pan mi pomóc?',pr:'chih MOH-zheh pahn mee POH-moots',morph:['czy może pan = can you (to a man)','mi = me','pomóc = help']},
        {t:'chal',en:'Do you speak English?',tr:'Czy mówi pan po angielsku?',pr:'chih MOO-vee pahn poh ahn-GYEL-skoo',morph:['czy mówi pan = do you speak','po angielsku = in English']}
      ],
      blocks:['<code>wolniej</code> = slower','<code>czy mówi pan po angielsku?</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'cafe', title:'☕ At a café', emoji:'☕', turns:[
      {who:'You',tr:'Dzień dobry! Poproszę kawę.',pr:'jen DOH-brih, poh-PROH-sheh KAH-veh',en:'Good morning! A coffee, please.'},
      {who:'Barista',tr:'Oczywiście. Na miejscu czy na wynos?',pr:'oh-chih-VEESH-cheh, nah MYEH-stchoo chih nah VIH-nos',en:'Of course. For here or to go?'},
      {who:'You',tr:'Na wynos, dziękuję.',pr:'nah VIH-nos, jen-KOO-yeh',en:'To go, thanks.'},
      {who:'Barista',tr:'Proszę. To pięć złotych.',pr:'PROH-sheh, toh pyench ZWO-tih',en:'Here. That\'s five zlotys.'},
      {who:'You',tr:'Dziękuję bardzo!',pr:'jen-KOO-yeh BAR-dzoh',en:'Thanks a lot!'}
    ]},
    { id:'transport', title:'🚉 At the train station', emoji:'🚉', turns:[
      {who:'You',tr:'Przepraszam, gdzie jest dworzec?',pr:'psheh-PRAH-shahm, g-dzyeh yest DVOH-zhets',en:'Excuse me, where\'s the station?'},
      {who:'Local',tr:'Tam, w prawo.',pr:'tahm, f PRAH-voh',en:'It\'s there, to the right.'},
      {who:'You',tr:'Dziękuję. Poproszę bilet do Warszawy.',pr:'jen-KOO-yeh, poh-PROH-sheh BEE-leht doh vahr-SHAH-vih',en:'Thanks. A ticket to Warsaw, please.'},
      {who:'Ticket',tr:'Piętnaście złotych. Pociąg jest o dziewiątej.',pr:'PYEN-nash-cheh ZWO-tih, POH-chonk yest oh dzeh-VYON-tey',en:'Fifteen zlotys. The train is at nine.'}
    ]},
    { id:'restaurant', title:'🍝 At a restaurant', emoji:'🍝', turns:[
      {who:'Waiter',tr:'Dobry wieczór! Czy ma pan rezerwację?',pr:'DOH-brih VYEH-choor, chih mah pahn reh-zehr-VAH-tsyah',en:'Good evening! Do you have a reservation?'},
      {who:'You',tr:'Tak, dla dwóch osób.',pr:'tahk, dla dvohkh OH-sohp',en:'Yes, for two people.'},
      {who:'You',tr:'Poproszę menu.',pr:'poh-PROH-sheh MEH-noo',en:'The menu, please.'},
      {who:'You',tr:'Poproszę pierogi i wodę.',pr:'poh-PROH-sheh pyeh-ROH-ghee ee VOH-deh',en:'I\'d like pierogi and water.'},
      {who:'Waiter',tr:'Świetny wybór! Smacznego.',pr:'SHVYET-nih VIH-boor, smach-NEH-goh',en:'Excellent choice! Enjoy your meal.'}
    ]},
    { id:'shop', title:'🛍️ Shopping', emoji:'🛍️', turns:[
      {who:'You',tr:'Ile to kosztuje?',pr:'EE-leh toh kosh-TOO-yeh',en:'How much is this?'},
      {who:'Seller',tr:'Trzydzieści złotych.',pr:'tshih-DJESH-chee ZWO-tih',en:'Thirty zlotys.'},
      {who:'You',tr:'To za drogo. Czy mogę przymierzyć?',pr:'toh zah DROH-goh, chih MOH-geh pshih-MYEH-zhehch',en:'It\'s too expensive. Can I try it on?'},
      {who:'Seller',tr:'Oczywiście! Przymierzalnia jest tam.',pr:'oh-chih-VEESH-cheh, pshih-myeh-ZHAHL-nyah yest tahm',en:'Of course! The fitting room is there.'},
      {who:'You',tr:'Dobrze, biorę to.',pr:'DOH-bzheh, BYOH-reh toh',en:'OK, I\'ll take it.'}
    ]}
  ],
  pocket: [
    {tr:'Cześć',pr:'cheshch',en:'Hi',c:'Greetings'},
    {tr:'Dzień dobry',pr:'jen DOH-brih',en:'Good morning',c:'Greetings'},
    {tr:'Dobry wieczór',pr:'DOH-brih VYEH-choor',en:'Good evening',c:'Greetings'},
    {tr:'Do widzenia',pr:'doh vee-DZEH-nyah',en:'Goodbye',c:'Greetings'},
    {tr:'Nazywam się __NAME__',pr:'nah-ZIH-vahm sheh',en:'My name is __NAME__',c:'Greetings'},
    {tr:'Proszę',pr:'PROH-sheh',en:'Please / you\'re welcome',c:'Courtesy'},
    {tr:'Dziękuję',pr:'jen-KOO-yeh',en:'Thank you',c:'Courtesy'},
    {tr:'Dziękuję bardzo',pr:'jen-KOO-yeh BAR-dzoh',en:'Thanks a lot',c:'Courtesy'},
    {tr:'Przepraszam',pr:'psheh-PRAH-shahm',en:'Excuse me / sorry',c:'Courtesy'},
    {tr:'Tak',pr:'tahk',en:'Yes',c:'Courtesy'},
    {tr:'Nie',pr:'nyeh',en:'No',c:'Courtesy'},
    {tr:'Jeden',pr:'YEH-den',en:'1',c:'Numbers'},
    {tr:'Dwa',pr:'dvah',en:'2',c:'Numbers'},
    {tr:'Trzy',pr:'tshih',en:'3',c:'Numbers'},
    {tr:'Pięć',pr:'pyench',en:'5',c:'Numbers'},
    {tr:'Dziesięć',pr:'JEH-shench',en:'10',c:'Numbers'},
    {tr:'Woda',pr:'VOH-dah',en:'water',c:'Food'},
    {tr:'Kawa',pr:'KAH-vah',en:'coffee',c:'Food'},
    {tr:'Chleb',pr:'hlehb',en:'bread',c:'Food'},
    {tr:'Rachunek',pr:'rah-HOO-nek',en:'the bill',c:'Food'},
    {tr:'Gdzie jest...?',pr:'g-dzyeh yest',en:'Where is...?',c:'Directions'},
    {tr:'W prawo',pr:'f PRAH-voh',en:'to the right',c:'Directions'},
    {tr:'W lewo',pr:'f LEH-voh',en:'to the left',c:'Directions'},
    {tr:'Dworzec',pr:'DVOH-zhets',en:'the station',c:'Directions'},
    {tr:'Ile to kosztuje?',pr:'EE-leh toh kosh-TOO-yeh',en:'How much is it?',c:'Shopping'},
    {tr:'Czy mogę przymierzyć?',pr:'chih MOH-geh pshih-MYEH-zhehch',en:'Can I try it on?',c:'Shopping'},
    {tr:'Za drogo',pr:'zah DROH-goh',en:'too expensive',c:'Shopping'},
    {tr:'Biorę to',pr:'BYOH-reh toh',en:'I\'ll take it',c:'Shopping'},
    {tr:'Pomocy!',pr:'poh-MOH-tsih',en:'Help!',c:'Emergency'},
    {tr:'Nie rozumiem',pr:'nyeh roh-ZOO-myem',en:'I don\'t understand',c:'Emergency'},
    {tr:'Potrzebuję pomocy',pr:'poh-tsheh-BOO-yeh poh-MOH-tsih',en:'I need help',c:'Emergency'},
    {tr:'Lekarz',pr:'LEH-kahsh',en:'doctor',c:'Emergency'},
    {tr:'Dziś',pr:'jeech',en:'today',c:'Time'},
    {tr:'Jutro',pr:'YOO-troh',en:'tomorrow',c:'Time'},
    {tr:'Jaka jest pogoda?',pr:'YAH-kah yest poh-GOH-dah',en:'What\'s the weather?',c:'Time'},
    {tr:'Poniedziałek',pr:'poh-nyeh-DJAH-wek',en:'Monday',c:'Time'},
    {tr:'Lotnisko',pr:'lot-NEES-koh',en:'airport',c:'Travel'},
    {tr:'Paszport',pr:'PAHSH-port',en:'passport',c:'Travel'},
    {tr:'Chcę jechać do hotelu',pr:'htseh YEH-hahch doh ho-TEH-loo',en:'I want to go to the hotel',c:'Travel'},
    {tr:'Mam rezerwację',pr:'mahm reh-zer-VAH-tseh',en:'I have a reservation',c:'Travel'},
    {tr:'Wolniej, proszę',pr:'VOL-nyey, PROH-sheh',en:'Slower, please',c:'Travel'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Shopping','Emergency','Time', 'Travel'],
  culture: [
    {icon:'🥟',title:'Pierogi are sacred',body:'A Polish icon: dumplings stuffed with potato and cheese (ruskie), meat, cabbage or berries. Order them at any bar mleczny — a cheap, cosy Communist-era milk bar.'},
    {icon:'🍽️',title:'Milk bars (bar mleczny)',body:'These budget canteens from the Soviet era still serve pierogi, żurek soup and kompot at tiny prices. Brilliant for an authentic, affordable meal with locals.'},
    {icon:'🍻',title:'"Na zdrowie!"',body:'When toasting, raise your glass and say <b>Na zdrowie!</b> (to your health!). Polish hospitality means your glass rarely stays empty for long.'},
    {icon:'💸',title:'The złoty',body:'The currency is the złoty (zł). Cards are accepted almost everywhere, but keep a little cash for small shops, markets and trams.'},
    {icon:'🎄',title:'Wigilia',body:'Most Poles are Catholic. Christmas Eve (<b>Wigilia</b>) is the big family night: a 12-dish dinner, shared Christmas wafer, and the first star in the sky.'},
    {icon:'🗣️',title:'A little Polish goes far',body:'A <b>dzień dobry</b> and <b>dziękuję</b> open every door. Poles light up when visitors try their language — effort matters more than perfection.'}
  ],
  sounds: [
    {l:'cz',say:'like the "ch" in chip — a hard, plain ch',ex:'cześć = cheshch · czekolada = cheh-koh-LAH-dah',voice:'cześć'},
    {l:'sz',say:'like the "sh" in shop',ex:'szkoła = SHKOH-wa',voice:'szkoła'},
    {l:'ż',say:'like the "s" in measure — a soft "zh"',ex:'żółty = ZHOO-tih',voice:'żółty'},
    {l:'rz',say:'same sound as ż — a soft "zh"',ex:'rzeka = ZHEH-kah',voice:'rzeka'},
    {l:'ą',say:'a nasal "on", said through the nose like the on in "bont"',ex:'piątek = PYON-tek',voice:'piątek'},
    {l:'ę',say:'a nasal "en" in the middle, but at the word\'s end it sounds like a plain "e"',ex:'pięć = pyench · dziękuję = jen-KOO-yeh',voice:'pięć'},
    {l:'ł',say:'like the "w" in water',ex:'miło = MEE-woh · stół = stoow',voice:'miło'},
    {l:'ś / ć',say:'soft, "sigh"-like "sh" (ś) and soft "chee" (ć)',ex:'siostra = SHOS-trah · być = bich',voice:'siostra'}
  ],
  resources: [
    {icon:'🗣️',t:'Easy Polish',d:'Real street interviews with native speakers and subtitles — perfect for natural Polish.',q:'Easy Polish street interviews'},
    {icon:'📚',t:'PolishPod101',d:'Structured beginner lessons in short, digestible audio and video episodes.',q:'PolishPod101 for beginners'},
    {icon:'🎬',t:'Polish with Aga',d:'Friendly, focused Polish lessons from a native speaker — clear and approachable.',q:'Polish with Aga'},
    {icon:'🎧',t:'Real Polish',d:'Slow, clear Polish recordings for learners — ideal for a walk or commute.',q:'Real Polish slow listening'},
    {icon:'💬',t:'Learn Polish Podcast',d:'Conversational Polish built from context, not grammar tables.',q:'Learn Polish podcast for beginners'}
  ]
};
