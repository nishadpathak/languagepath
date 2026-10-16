/* ---- dutch ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["dutch"] = {
  name: 'Dutch',
  flag: '🇳🇱',
  tts: 'nl-NL',
  dir: 'ltr',
  native: 'Nederlands',
  script: 'Latin',
  soundTitle: 'Dutch sounds & spelling',
  soundIntro: 'Dutch spelling is very regular — but a few letters sound nothing like English. Learn these and you can read any Dutch word aloud.',
  grammar: '<p>Dutch spelling is regular once you know the letter rules. <b>g</b> and <b>ch</b> are the same throaty "kh" (like Scottish <i>loch</i>) — the sound people think of as Dutch. <b>ij</b> and <b>ei</b> sound identical, like "ay" in <i>say</i>. <b>ui</b> is a rounded "ow". Long vowels are often doubled: <i>aa</i>, <i>ee</i>, <i>oo</i>. And <b>w</b> sounds like English "v".</p>',
  bridges: '<div class="note">🇬🇧 <b>English.</b> Dutch and English are close cousins — you already know water, huis (house), brood (bread), appel, man, hand. Even the word order feels familiar.</div><div class="note">🇩🇪 <b>German.</b> Dutch sits between English and German. <i>Goedemorgen</i> vs <i>Guten Morgen</i>, <i>dank je</i> vs <i>danke</i> — if you know German, Dutch is an easy jump.</div>',
  lessons: [
    { id:1, title:'Greetings & being polite', focus:'hallo · goedemorgen · dank je · alsjeblieft',
      steps:[
        {t:'say',text:'Start with the word you\'ll use all day: <span class="inline-tr">hallo</span> — hello. In the Netherlands <span class="inline-tr">hallo</span> and <span class="inline-tr">hoi</span> (hi) both work.',tr:'hallo'},
        {t:'words',items:[{tr:'hallo',pr:'HAH-loh',en:'hello'},{tr:'hoi',pr:'hoy',en:'hi'},{tr:'goedemorgen',pr:'KHOO-duh-MOR-khun',en:'good morning'},{tr:'goedenavond',pr:'KHOOD-un-AH-vont',en:'good evening'},{tr:'dank je',pr:'DAHNK yeh',en:'thank you'},{tr:'alsjeblieft',pr:'uhl-shuh-BLEEFT',en:'please / here you are'}]},
        {t:'chal',en:'Hello, thank you',tr:'Hallo, dank je',pr:'HAH-loh, DAHNK yeh',morph:['hallo = hello','dank je = thank you']},
        {t:'say',text:'The time of day matters: <span class="inline-tr">goedemorgen</span> in the morning and <span class="inline-tr">goedenavond</span> in the evening.',tr:'goedemorgen'},
        {t:'chal',en:'Good morning, please',tr:'Goedemorgen, alsjeblieft',pr:'KHOO-duh-MOR-khun, uhl-shuh-BLEEFT',morph:['goedemorgen = good morning','alsjeblieft = please']},
        {t:'say',text:'To ask how someone is: <span class="inline-tr">Hoe gaat het?</span> The classic reply is <span class="inline-tr">goed, dank je</span> — well, thanks.',tr:'Hoe gaat het?'},
        {t:'words',items:[{tr:'Hoe gaat het?',pr:'khoo KHAHT hut',en:'How are you?'},{tr:'Goed, dank je',pr:'KHOOD, DAHNK yeh',en:'Well, thanks'},{tr:'Ja',pr:'yah',en:'yes'},{tr:'Nee',pr:'nay',en:'no'}]},
        {t:'chal',en:'Hi, how are you?',tr:'Hoi, hoe gaat het?',pr:'hoy, khoo KHAHT hut',morph:['hoi = hi','hoe gaat het? = how are you?']}
      ],
      blocks:['<code>hallo</code> = hello · <code>hoi</code> = hi','<code>goedemorgen</code> = good morning','<code>dank je</code> = thank you · <code>alsjeblieft</code> = please','<code>ja</code> / <code>nee</code> = yes / no'] },
    { id:2, title:'Being polite', focus:'dank u · alstublieft · sorry · mag ik',
      steps:[
        {t:'say',text:'Dutch has a formal you: <span class="inline-tr">u</span>. Use <span class="inline-tr">dank u</span> and <span class="inline-tr">alstublieft</span> with strangers and in shops.',tr:'dank u'},
        {t:'words',items:[{tr:'dank u',pr:'DAHNK uu',en:'thank you (formal)'},{tr:'alstublieft',pr:'uhl-stuh-BLEEFT',en:'please (formal)'},{tr:'sorry',pr:'SOR-ree',en:'sorry'},{tr:'neem me niet kwalijk',pr:'naym muh neet KWAH-lik',en:'excuse me'}]},
        {t:'chal',en:'Thank you very much',tr:'Dank u wel',pr:'DAHNK uu wel',morph:['dank u = thank you','wel = very / indeed']},
        {t:'say',text:'<span class="inline-tr">Alsjeblieft</span> is the everyday version (with friends); <span class="inline-tr">alstublieft</span> is the polite one.',tr:'alsjeblieft'},
        {t:'chal',en:'Excuse me, sorry',tr:'Sorry, neem me niet kwalijk',pr:'SOR-ree, naym muh neet KWAH-lik',morph:['sorry = sorry','neem me niet kwalijk = excuse me']},
        {t:'say',text:'To ask permission politely: <span class="inline-tr">Mag ik…?</span> — may I…?',tr:'Mag ik?'},
        {t:'chal',en:'May I pay?',tr:'Mag ik betalen?',pr:'makh ik buh-TAH-lun',morph:['mag ik = may I','betalen = to pay']}
      ],
      blocks:['<code>dank u</code> / <code>dank je</code> = thank you (formal / informal)','<code>alstublieft</code> / <code>alsjeblieft</code> = please (formal / informal)','<code>mag ik…?</code> = may I…?'] },
    { id:3, title:'Numbers 1–10', focus:'een · twee · drie · tien',
      steps:[
        {t:'say',text:'Numbers are the fastest win. Listen and repeat: <span class="inline-tr">een, twee, drie</span>.',tr:'een'},
        {t:'words',items:[{tr:'een',pr:'ayn',en:'1'},{tr:'twee',pr:'tway',en:'2'},{tr:'drie',pr:'dree',en:'3'},{tr:'vier',pr:'veer',en:'4'},{tr:'vijf',pr:'fayf',en:'5'},{tr:'zes',pr:'zes',en:'6'},{tr:'zeven',pr:'ZAY-vun',en:'7'},{tr:'acht',pr:'akht',en:'8'},{tr:'negen',pr:'NAY-khun',en:'9'},{tr:'tien',pr:'teen',en:'10'}]},
        {t:'chal',en:'Two coffees, please',tr:'Twee koffie, alsjeblieft',pr:'tway KOF-fee, uhl-shuh-BLEEFT',morph:['twee = two','koffie = coffee','alsjeblieft = please']},
        {t:'say',text:'<span class="inline-tr">Hoeveel kost dat?</span> = how much does it cost? Your key phrase for shopping.',tr:'Hoeveel kost dat?'},
        {t:'chal',en:'How much is that?',tr:'Hoeveel kost dat?',pr:'KHOOV-ayl kost daht',morph:['hoeveel = how much','kost = costs','dat = that']},
        {t:'chal',en:'It\'s five euros',tr:'Dat is vijf euro',pr:'daht is fayf UH-roh',morph:['dat = that','is = is','vijf = five','euro = euros']}
      ],
      blocks:['een, twee, drie, vier, vijf = 1–5','zes, zeven, acht, negen, tien = 6–10','<code>hoeveel kost dat?</code> = how much is that?'] },
    { id:4, title:'"I want" — the verb willen', focus:'ik wil · ik zou graag · ik heb',
      steps:[
        {t:'say',text:'To say what you want: <span class="inline-tr">ik wil</span> — I want. But the polite version is better: <span class="inline-tr">ik zou graag</span> — I would like.',tr:'ik wil'},
        {t:'words',items:[{tr:'ik wil',pr:'ik vil',en:'I want'},{tr:'ik zou graag',pr:'ik zow KHRAKH',en:'I would like'},{tr:'ik heb',pr:'ik hep',en:'I have'},{tr:'graag',pr:'khrakh',en:'gladly / please'}]},
        {t:'chal',en:'I would like a coffee',tr:'Ik zou graag een koffie hebben',pr:'ik zow khrakh uhn KOF-fee HE-bun',morph:['ik zou graag = I would like','een koffie = a coffee','hebben = to have']},
        {t:'chal',en:'I would like a glass of water',tr:'Ik zou graag een glas water hebben',pr:'ik zow khrakh uhn khlahs VAH-tuhr HE-bun',morph:['ik zou graag = I would like','een glas water = a glass of water','hebben = to have']},
        {t:'say',text:'<span class="inline-tr">een</span> = a / an. It\'s the same word as the number one.',tr:'een'},
        {t:'chal',en:'I want a bread roll',tr:'Ik wil een broodje',pr:'ik vil uhn BROHT-yuh',morph:['ik wil = I want','een broodje = a bread roll']}
      ],
      blocks:['<code>ik wil</code> = I want','<code>ik zou graag</code> = I would like','<code>ik heb</code> = I have','<code>een</code> = a / an'] },
    { id:5, title:'Food & drink', focus:'koffie · water · brood · de rekening',
      steps:[
        {t:'say',text:'Eating out? Key words: <span class="inline-tr">koffie</span> (coffee), <span class="inline-tr">water</span> (water), <span class="inline-tr">brood</span> (bread).',tr:'koffie'},
        {t:'words',items:[{tr:'koffie',pr:'KOF-fee',en:'coffee',link:"≈ English coffee"},{tr:'water',pr:'VAH-tuhr',en:'water',link:"≈ English water"},{tr:'brood',pr:'broht',en:'bread',link:"≈ English bread"},{tr:'wijn',pr:'wain',en:'wine',link:"≈ English wine"},{tr:'het menu',pr:'hut MAY-nuu',en:'the menu'},{tr:'de rekening',pr:'duh RAY-kuh-ning',en:'the bill'}]},
        {t:'chal',en:'Water and bread, please',tr:'Water en brood, alsjeblieft',pr:'VAH-tuhr en broht, uhl-shuh-BLEEFT',morph:['water = water','en = and','brood = bread','alsjeblieft = please']},
        {t:'chal',en:'I would like the bill',tr:'Ik zou graag de rekening hebben',pr:'ik zow khrakh duh RAY-kuh-ning HE-bun',morph:['ik zou graag = I would like','de rekening = the bill','hebben = to have']},
        {t:'say',text:'<span class="inline-tr">het</span> and <span class="inline-tr">de</span> are both \'the\'. Just learn them with the word, like <b>het menu</b> and <b>de rekening</b>.',tr:'het'},
        {t:'chal',en:'A glass of wine, please',tr:'Een glas wijn, alsjeblieft',pr:'uhn khlahs wain, uhl-shuh-BLEEFT',morph:['een glas = a glass','wijn = wine','alsjeblieft = please']}
      ],
      blocks:['<code>koffie</code>, <code>water</code>, <code>brood</code> = coffee, water, bread','<code>de rekening</code> = the bill','<code>het</code> / <code>de</code> = the (with the noun)'] },
    { id:6, title:'Getting around', focus:'waar is …? · links · rechts · station',
      steps:[
        {t:'say',text:'The most useful question in any city: <span class="inline-tr">Waar is…?</span> — where is…?',tr:'Waar is…?'},
        {t:'words',items:[{tr:'Waar is…?',pr:'vahr is',en:'Where is...?'},{tr:'links',pr:'links',en:'to the left'},{tr:'rechts',pr:'rechts',en:'to the right'},{tr:'rechtdoor',pr:'RUKH-toor',en:'straight ahead'},{tr:'het station',pr:'hut stah-SHON',en:'the station',link:"≈ English station"},{tr:'het toilet',pr:'hut twah-LET',en:'the toilet'}]},
        {t:'chal',en:'Where is the station?',tr:'Waar is het station?',pr:'vahr is hut stah-SHON',morph:['waar = where','het station = the station']},
        {t:'chal',en:'Where is the toilet?',tr:'Waar is het toilet?',pr:'vahr is hut twah-LET',morph:['waar = where','het toilet = the toilet']},
        {t:'say',text:'<span class="inline-tr">links</span> and <span class="inline-tr">rechts</span> tell you which way to turn. \'Straight ahead\' is <span class="inline-tr">rechtdoor</span>.',tr:'rechtdoor'},
        {t:'chal',en:'Straight ahead, then left',tr:'Rechtdoor en dan links',pr:'RUKH-toor en dahn links',morph:['rechtdoor = straight ahead','en dan = and then','links = left']}
      ],
      blocks:['<code>waar is…?</code> = where is…?','<code>links</code> / <code>rechts</code> = left / right','<code>rechtdoor</code> = straight ahead'] },
    { id:7, title:'Questions & "do you have…?"', focus:'hebt u…? · is er…? · mag ik…?',
      steps:[
        {t:'say',text:'To ask someone if they have something: <span class="inline-tr">hebt u…?</span> (formal) or <span class="inline-tr">heb je…?</span> (informal).',tr:'hebt u…?'},
        {t:'chal',en:'Do you have a table?',tr:'Hebt u een tafel?',pr:'hept uu uhn TAH-ful',morph:['hebt u = do you have','een tafel = a table']},
        {t:'say',text:'<span class="inline-tr">Is er…?</span> = is there…? Very useful in shops.',tr:'Is er…?'},
        {t:'chal',en:'Is there wifi?',tr:'Is er wifi?',pr:'is er WEE-fee',morph:['is er = is there','wifi = wifi']},
        {t:'say',text:'<span class="inline-tr">Mag ik…?</span> = may I…? The polite way to ask for something.',tr:'Mag ik…?'},
        {t:'chal',en:'May I have a glass of water?',tr:'Mag ik een glas water?',pr:'makh ik uhn khlahs VAH-tuhr',morph:['mag ik = may I','een glas water = a glass of water']}
      ],
      blocks:['<code>hebt u…?</code> = do you have…? (formal)','<code>is er…?</code> = is there…?','<code>mag ik…?</code> = may I…?'] },
    { id:8, title:'Family & people', focus:'de familie · moeder · vader · vriend',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">de familie</span> (family), <span class="inline-tr">de moeder</span> (mother), <span class="inline-tr">de vader</span> (father).',tr:'de familie'},
        {t:'words',items:[{tr:'de familie',pr:'duh fah-MEE-lee',en:'the family',link:"≈ English family"},{tr:'de moeder',pr:'duh MOO-duhr',en:'the mother',link:"≈ English mother"},{tr:'de vader',pr:'duh VAH-duhr',en:'the father',link:"≈ English father"},{tr:'de zus',pr:'duh zuhs',en:'the sister'},{tr:'de broer',pr:'duh BROOR',en:'the brother'},{tr:'de vriend',pr:'duh vreent',en:'the friend'}]},
        {t:'chal',en:'I have a friend',tr:'Ik heb een vriend',pr:'ik hep uhn vreent',morph:['ik heb = I have','een vriend = a friend']},
        {t:'say',text:'<span class="inline-tr">ik heb</span> = I have. The key verb for saying what you\'ve got.',tr:'ik heb'},
        {t:'chal',en:'I have a brother',tr:'Ik heb een broer',pr:'ik hep uhn BROOR',morph:['ik heb = I have','een broer = a brother']}
      ],
      blocks:['<code>de moeder</code> / <code>de vader</code> = mother / father','<code>de zus</code> / <code>de broer</code> = sister / brother','<code>de vriend</code> = friend'] },
    { id:9, title:'Time, days & weather', focus:'vandaag · morgen · hoe is het weer?',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">vandaag</span>, tomorrow is <span class="inline-tr">morgen</span>.',tr:'vandaag'},
        {t:'words',items:[{tr:'vandaag',pr:'vahn-DAHKH',en:'today'},{tr:'morgen',pr:'MOR-khun',en:'tomorrow'},{tr:'gisteren',pr:'KHIS-tuh-run',en:'yesterday'},{tr:'de dag',pr:'duh dakh',en:'the day'},{tr:'het weer',pr:'hut vayr',en:'the weather'}]},
        {t:'chal',en:'See you tomorrow',tr:'Tot morgen',pr:'tot MOR-khun',morph:['tot = until','morgen = tomorrow']},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">Hoe is het weer?</span>',tr:'Hoe is het weer?'},
        {t:'chal',en:'It\'s raining',tr:'Het regent',pr:'hut RAY-khunt',morph:['het regent = it is raining']},
        {t:'chal',en:'It\'s sunny and warm',tr:'Het is zonnig en warm',pr:'hut is ZON-nikh en warm',morph:['het is = it is','zonnig = sunny','warm = warm']}
      ],
      blocks:['<code>vandaag</code> / <code>morgen</code> = today / tomorrow','<code>tot morgen</code> = see you tomorrow','<code>hoe is het weer?</code> = what\'s the weather?'] },
    { id:10, title:'Small talk & your name', focus:'ik heet … · hoe heet je? · leuk je te ontmoeten',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">Ik heet…</span> = my name is…, and <span class="inline-tr">Leuk je te ontmoeten</span> = nice to meet you.',tr:'Ik heet'},
        {t:'chal',en:'My name is __NAME__',tr:'Ik heet __NAME__',pr:'ik hayt __NAME__',morph:['ik heet = my name is','__NAME__ = your name']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">Hoe heet je?</span> (informal).',tr:'Hoe heet je?'},
        {t:'chal',en:'What\'s your name?',tr:'Hoe heet je?',pr:'khoo hayt yeh',morph:['hoe = how','heet je? = are you called?']},
        {t:'chal',en:'Nice to meet you',tr:'Leuk je te ontmoeten',pr:'luhk yeh tuh ont-MOO-tun',morph:['leuk = nice','je te ontmoeten = to meet you']},
        {t:'say',text:'Ask where someone is from: <span class="inline-tr">Waar kom je vandaan?</span>',tr:'Waar kom je vandaan?'},
        {t:'chal',en:'I come from __COUNTRY__',tr:'Ik kom uit __COUNTRY__',pr:'ik kom owt __COUNTRY__',morph:['ik kom = I come','uit = from','__COUNTRY__ = your country']}
      ],
      blocks:['<code>ik heet…</code> = my name is…','<code>hoe heet je?</code> = what\'s your name?','<code>leuk je te ontmoeten</code> = nice to meet you','<code>waar kom je vandaan?</code> = where are you from?'] },
    { id:11, title:'Health & emergency', focus:'help · dokter · apotheek · ik begrijp het niet',
      steps:[
        {t:'say',text:'The most important words if you need help: <span class="inline-tr">help</span> (help), <span class="inline-tr">de dokter</span> (doctor), <span class="inline-tr">de apotheek</span> (pharmacy).',tr:'help'},
        {t:'words',items:[{tr:'help',pr:'help',en:'help!',link:"≈ English help"},{tr:'de dokter',pr:'duh DOK-tuhr',en:'the doctor',link:"≈ English doctor"},{tr:'de apotheek',pr:'duh ah-poh-TAYK',en:'the pharmacy'},{tr:'Ik begrijp het niet',pr:'ik buh-KHRAYP hut neet',en:'I don\'t understand'}]},
        {t:'chal',en:'Help!',tr:'Help!',pr:'help',morph:['help = help']},
        {t:'chal',en:'I don\'t understand',tr:'Ik begrijp het niet',pr:'ik buh-KHRAYP hut neet',morph:['ik begrijp = I understand','het niet = it not']},
        {t:'say',text:'To say you need help: <span class="inline-tr">Ik heb hulp nodig</span>.',tr:'Ik heb hulp nodig'},
        {t:'chal',en:'I need help',tr:'Ik heb hulp nodig',pr:'ik hep hulp NOH-dikh',morph:['ik heb = I have','hulp nodig = need help']},
        {t:'chal',en:'I feel unwell',tr:'Ik voel me niet goed',pr:'ik vool muh neet KHOOD',morph:['ik voel me = I feel','niet goed = not well']}
      ],
      blocks:['<code>help</code> = help','<code>de dokter</code> / <code>de apotheek</code> = doctor / pharmacy','<code>ik begrijp het niet</code> = I don\'t understand','<code>ik heb hulp nodig</code> = I need help'] },
    { id:12, title:'Tying it together', focus:'willen · hebben · a capstone scene',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolbox. This capstone uses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello, how are you?',tr:'Hallo, hoe gaat het?',pr:'HAH-loh, khoo KHAHT hut',morph:['hallo = hello','hoe gaat het? = how are you?']},
        {t:'chal',en:'I would like a glass of water, please',tr:'Ik zou graag een glas water hebben, alsjeblieft',pr:'ik zow khrakh uhn khlahs VAH-tuhr HE-bun, uhl-shuh-BLEEFT',morph:['ik zou graag = I would like','een glas water hebben = to have a glass of water','alsjeblieft = please']},
        {t:'chal',en:'Where is the station?',tr:'Waar is het station?',pr:'vahr is hut stah-SHON',morph:['waar = where','het station = the station']},
        {t:'chal',en:'How much is that?',tr:'Hoeveel kost dat?',pr:'KHOOV-ayl kost daht',morph:['hoeveel kost = how much does it cost','dat = that']},
        {t:'chal',en:'Delicious! Thank you!',tr:'Heerlijk! Dank je wel!',pr:'HAYR-lik, DAHNK yeh wel',morph:['heerlijk = delicious','dank je wel = thank you very much']}
      ],
      blocks:['You built: greetings, polite requests, directions, prices, thanks — a full day out in Dutch.'] },
    { id:13, title:'Airport & tickets', focus:'luchthaven · paspoort · kaartje · vlucht',
      steps:[
        {t:'say',text:'You have landed at Schiphol. The building is the <span class="inline-tr">luchthaven</span>. Your document is a <span class="inline-tr">paspoort</span>.',tr:'luchthaven'},
        {t:'words',items:[{tr:'de luchthaven',pr:'duh LUKHTH-hah-vun',en:'the airport'},{tr:'het paspoort',pr:'hut PAS-poort',en:'the passport'},{tr:'het kaartje',pr:'hut KAHR-tyuh',en:'the ticket'},{tr:'de vlucht',pr:'duh vlukht',en:'the flight'},{tr:'de gate',pr:'duh gayt',en:'the gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'Waar is de luchthaven?',pr:'vahr is duh LUKHTH-hah-vun',morph:['waar is = where is','de luchthaven = the airport']},
        {t:'chal',en:'Here is my passport',tr:'Hier is mijn paspoort',pr:'heer is mayn PAS-poort',morph:['hier is = here is','mijn paspoort = my passport']},
        {t:'chal',en:'A ticket, please',tr:'Een kaartje, alstublieft',pr:'uhn KAHR-tyuh, uhl-stuh-BLEEFT',morph:['een kaartje = a ticket','alstublieft = please (formal)']},
        {t:'chal',en:'Where is the gate?',tr:'Waar is de gate?',pr:'vahr is duh gayt',morph:['waar is = where is','de gate = the gate']}
      ],
      blocks:['<code>luchthaven</code> = airport','<code>paspoort</code> = passport','<code>kaartje</code> = ticket'] },
    { id:14, title:'The taxi', focus:'taxi · gaan · hotel · stop hier',
      steps:[
        {t:'say',text:'The driver is waiting. Tell them where to go with <span class="inline-tr">ik wil naar … gaan</span> — the infinitive <span class="inline-tr">gaan</span> goes at the end.',tr:'taxi'},
        {t:'words',items:[{tr:'de taxi',pr:'duh TAK-see',en:'the taxi'},{tr:'de chauffeur',pr:'duh sho-FUR',en:'the driver'},{tr:'ik wil gaan',pr:'ik vil khahn',en:'I want to go'},{tr:'stop hier',pr:'stop heer',en:'stop here'}]},
        {t:'chal',en:'A taxi, please',tr:'Een taxi, alstublieft',pr:'uhn TAK-see, uhl-stuh-BLEEFT',morph:['een taxi = a taxi','alstublieft = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'Ik wil naar het hotel gaan',pr:'ik vil nahr hut ho-TEL khahn',morph:['ik wil = I want','naar het hotel = to the hotel','gaan = to go']},
        {t:'chal',en:'Stop here, please',tr:'Stop hier, alstublieft',pr:'stop heer, uhl-stuh-BLEEFT',morph:['stop hier = stop here','alstublieft = please']},
        {t:'chal',en:'How much is it?',tr:'Hoeveel kost dat?',pr:'KHOOV-ayl kost daht',morph:['hoeveel = how much','kost = costs','dat = it']}
      ],
      blocks:['<code>ik wil naar … gaan</code> = I want to go to …','<code>stop hier</code> = stop here'] },
    { id:15, title:'The hotel', focus:'reservering · kamer · sleutel · nacht',
      steps:[
        {t:'say',text:'At the desk in Amsterdam: <span class="inline-tr">ik heb een reservering</span> — I have a reservation.',tr:'reservering'},
        {t:'words',items:[{tr:'het hotel',pr:'hut ho-TEL',en:'the hotel'},{tr:'de reservering',pr:'duh ray-ser-VAY-ring',en:'the reservation'},{tr:'de kamer',pr:'duh KAH-mur',en:'the room'},{tr:'de sleutel',pr:'duh SLUR-tul',en:'the key'},{tr:'een nacht',pr:'uhn nakht',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'Ik heb een reservering',pr:'ik hep uhn ray-ser-VAY-ring',morph:['ik heb = I have','een reservering = a reservation']},
        {t:'chal',en:'A room for one night, please',tr:'Een kamer voor een nacht, alstublieft',pr:'uhn KAH-mur for uhn nakht, uhl-stuh-BLEEFT',morph:['een kamer = a room','voor een nacht = for one night','alstublieft = please']},
        {t:'chal',en:'The key, please',tr:'De sleutel, alstublieft',pr:'duh SLUR-tul, uhl-stuh-BLEEFT',morph:['de sleutel = the key','alstublieft = please']},
        {t:'chal',en:'Where is my room?',tr:'Waar is mijn kamer?',pr:'vahr is mayn KAH-mur',morph:['waar is = where is','mijn kamer = my room']}
      ],
      blocks:['<code>reservering</code> = reservation','<code>kamer</code> = room','<code>sleutel</code> = key'] },
    { id:16, title:'Ask for help', focus:'ik begrijp het niet · langzamer · Engels',
      steps:[
        {t:'say',text:'When Dutch is too fast: <span class="inline-tr">Langzamer, alstublieft</span> — slower, please. Use formal <span class="inline-tr">u</span> with strangers.',tr:'Langzamer, alstublieft'},
        {t:'words',items:[{tr:'langzamer',pr:'LANG-zah-mur',en:'slower'},{tr:'nog een keer',pr:'nokh uhn kayr',en:'again'},{tr:'Engels',pr:'ENG-uls',en:'English'},{tr:'kunt u helpen?',pr:'kunt uu HEL-pun',en:'can you help? (formal)'}]},
        {t:'chal',en:'I don\'t understand',tr:'Ik begrijp het niet',pr:'ik buh-KHRAYP hut neet',morph:['ik begrijp = I understand','het niet = it not']},
        {t:'chal',en:'Slower, please',tr:'Langzamer, alstublieft',pr:'LANG-zah-mur, uhl-stuh-BLEEFT',morph:['langzamer = slower','alstublieft = please']},
        {t:'chal',en:'Can you help me?',tr:'Kunt u mij helpen?',pr:'kunt uu may HEL-pun',morph:['kunt u = can you (formal)','mij = me','helpen = to help']},
        {t:'chal',en:'Do you speak English?',tr:'Spreekt u Engels?',pr:'spraykt uu ENG-uls',morph:['spreekt u = do you speak (formal)','Engels = English']}
      ],
      blocks:['<code>langzamer</code> = slower','<code>spreekt u Engels?</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'cafe', title:'☕ At a café', emoji:'☕', turns:[
      {who:'You',tr:'Hallo! Een koffie, alsjeblieft.',pr:'HAH-loh! uhn KOF-fee, uhl-shuh-BLEEFT',en:'Hello! A coffee, please.'},
      {who:'Barista',tr:'Zeker. Voor hier of om mee te nemen?',pr:'ZAY-kur, vohr heer of om may tuh NAY-muhn',en:'Sure. For here or to go?'},
      {who:'You',tr:'Om mee te nemen, dank je.',pr:'om may tuh NAY-muhn, DAHNK yeh',en:'To go, thanks.'},
      {who:'Barista',tr:'Alstublieft. Dat is twee euro.',pr:'uhl-stuh-BLEEFT, daht is tway UH-roh',en:'Here you are. That\'s two euros.'},
      {who:'You',tr:'Dank je wel!',pr:'DAHNK yeh wel',en:'Thanks a lot!'}
    ]},
    { id:'transport', title:'🚉 At the train station', emoji:'🚉', turns:[
      {who:'You',tr:'Pardon, waar is het station?',pr:'pahr-DON, vahr is hut stah-SHON',en:'Excuse me, where is the station?'},
      {who:'Local',tr:'Rechtdoor en dan links.',pr:'RUKH-toor en dahn links',en:'Straight ahead and then left.'},
      {who:'You',tr:'Dank u. Een kaartje naar Amsterdam, alsjeblieft.',pr:'DAHNK uu, uhn KAHRT-yuh nahr ahm-ster-DAHM',en:'Thank you. A ticket to Amsterdam, please.'},
      {who:'Ticket',tr:'Zestien euro. De trein vertrekt om negen uur.',pr:'ZES-teen UH-roh, duh trayn ver-TREKT om NAY-khun uur',en:'Sixteen euros. The train leaves at nine o\'clock.'}
    ]},
    { id:'restaurant', title:'🍽️ At a restaurant', emoji:'🍽️', turns:[
      {who:'Waiter',tr:'Goedenavond! Hebt u een reservering?',pr:'KHOOD-un-AH-vont, hept uu uhn ray-ser-VAY-ring',en:'Good evening! Do you have a reservation?'},
      {who:'You',tr:'Ja, voor twee personen.',pr:'yah, vohr tway pur-SOH-nun',en:'Yes, for two people.'},
      {who:'You',tr:'Het menu, alsjeblieft.',pr:'hut MAY-nuu, uhl-shuh-BLEEFT',en:'The menu, please.'},
      {who:'You',tr:'Ik zou graag de pasta en een glas wijn.',pr:'ik zow khrakh duh PAHS-tah en uhn khlahs wain',en:'I would like the pasta and a glass of wine.'},
      {who:'Waiter',tr:'Goede keuze! Eet smakelijk.',pr:'KHOOD-uh KUH-zuh, ayt smah-KUH-lik',en:'Good choice! Enjoy your meal.'}
    ]},
    { id:'shop', title:'🛍️ Shopping', emoji:'🛍️', turns:[
      {who:'You',tr:'Wat kost dit?',pr:'vaht kost dit',en:'How much is this?'},
      {who:'Seller',tr:'Twintig euro.',pr:'TWIN-tikh UH-roh',en:'Twenty euros.'},
      {who:'You',tr:'Dat is te duur. Mag ik het passen?',pr:'daht is tuh duur, makh ik hut PAHS-sun',en:'That\'s too expensive. May I try it on?'},
      {who:'Seller',tr:'Natuurlijk! De paskamer is daar.',pr:'nah-TUUR-lik, duh PAHS-kah-muhr is dahr',en:'Of course! The fitting room is there.'},
      {who:'You',tr:'Goed, ik neem het.',pr:'khood, ik naym hut',en:'OK, I\'ll take it.'}
    ]}
  ],
  pocket: [
    {tr:'Hallo',pr:'HAH-loh',en:'Hello',c:'Greetings'},
    {tr:'Goedemorgen',pr:'KHOO-duh-MOR-khun',en:'Good morning',c:'Greetings'},
    {tr:'Goedenavond',pr:'KHOOD-un-AH-vont',en:'Good evening',c:'Greetings'},
    {tr:'Hoe gaat het?',pr:'khoo KHAHT hut',en:'How are you?',c:'Greetings'},
    {tr:'Dank je wel',pr:'DAHNK yeh wel',en:'Thanks a lot',c:'Courtesy'},
    {tr:'Dank u',pr:'DAHNK uu',en:'Thank you (formal)',c:'Courtesy'},
    {tr:'Alsjeblieft',pr:'uhl-shuh-BLEEFT',en:'Please / here you are',c:'Courtesy'},
    {tr:'Alstublieft',pr:'uhl-stuh-BLEEFT',en:'Please (formal)',c:'Courtesy'},
    {tr:'Sorry',pr:'SOR-ree',en:'Sorry',c:'Courtesy'},
    {tr:'Ja',pr:'yah',en:'Yes',c:'Courtesy'},
    {tr:'Nee',pr:'nay',en:'No',c:'Courtesy'},
    {tr:'Een',pr:'ayn',en:'1',c:'Numbers'},
    {tr:'Twee',pr:'tway',en:'2',c:'Numbers'},
    {tr:'Drie',pr:'dree',en:'3',c:'Numbers'},
    {tr:'Vier',pr:'veer',en:'4',c:'Numbers'},
    {tr:'Vijf',pr:'fayf',en:'5',c:'Numbers'},
    {tr:'Tien',pr:'teen',en:'10',c:'Numbers'},
    {tr:'Koffie',pr:'KOF-fee',en:'coffee',c:'Food'},
    {tr:'Water',pr:'VAH-tuhr',en:'water',c:'Food'},
    {tr:'Brood',pr:'broht',en:'bread',c:'Food'},
    {tr:'Wijn',pr:'wain',en:'wine',c:'Food'},
    {tr:'De rekening',pr:'duh RAY-kuh-ning',en:'the bill',c:'Food'},
    {tr:'Waar is...?',pr:'vahr is',en:'Where is...?',c:'Directions'},
    {tr:'Links',pr:'links',en:'to the left',c:'Directions'},
    {tr:'Rechts',pr:'rechts',en:'to the right',c:'Directions'},
    {tr:'Rechtdoor',pr:'RUKH-toor',en:'straight ahead',c:'Directions'},
    {tr:'Het station',pr:'hut stah-SHON',en:'the station',c:'Directions'},
    {tr:'Hoeveel kost dat?',pr:'KHOOV-ayl kost daht',en:'how much is that?',c:'Shopping'},
    {tr:'Het toilet',pr:'hut twah-LET',en:'the toilet',c:'Emergency'},
    {tr:'Help!',pr:'help',en:'Help!',c:'Emergency'},
    {tr:'De dokter',pr:'duh DOK-tuhr',en:'the doctor',c:'Emergency'},
    {tr:'Ik begrijp het niet',pr:'ik buh-KHRAYP hut neet',en:'I don\'t understand',c:'Emergency'},
    {tr:'Ik heb hulp nodig',pr:'ik hep hulp NOH-dikh',en:'I need help',c:'Emergency'},
    {tr:'Vandaag',pr:'vahn-DAHKH',en:'today',c:'Time'},
    {tr:'Morgen',pr:'MOR-khun',en:'tomorrow',c:'Time'},
    {tr:'Ik heet __NAME__',pr:'ik hayt',en:'My name is...',c:'Greetings'},
    {tr:'De luchthaven',pr:'duh LUKHTH-hah-vun',en:'airport',c:'Travel'},
    {tr:'De taxi',pr:'duh TAK-see',en:'taxi',c:'Travel'},
    {tr:'Het hotel',pr:'hut ho-TEL',en:'hotel',c:'Travel'},
    {tr:'Stop hier',pr:'stop heer',en:'stop here',c:'Travel'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Shopping','Emergency','Time','Travel'],
  culture: [
    {icon:'☕',title:'Coffee is a ritual',body:'The Dutch call it <i>koffietijd</i> — coffee time. People drink coffee and tea all day and there\'s always a biscuit (<i>een koekje</i>) served with it. Don\'t refuse; it\'s very sociable.'},
    {icon:'🚲',title:'Two wheels everywhere',body:'Almost everyone in the Netherlands cycles. Cities are built for bikes, not cars — expect dedicated lanes everywhere. Watch for the fast commuter cyclists, and be ready to walk along a bike path.'},
    {icon:'🧀',title:'Cheese is national',body:'Gouda, Edam and Leiden are famous. In the cheese markets you\'ll hear the traditional <i>handjeklap</i> — the clapping ritual between buyers and sellers that seals a deal.'},
    {icon:'🌷',title:'Tulips and the bulb fields',body:'Spring brings a wash of colour. Keukenhof is the most famous bulb garden, and the flower market is a great place to bring home tulip bulbs.'},
    {icon:'💬',title:'Direct and honest',body:'The Dutch are famously direct. They say what they think, often to the point of blunt. It\'s not rudeness — it\'s a sign of honesty and respect. Take it as such.'},
    {icon:'🗣️',title:'A little Dutch goes far',body:'A <i>goedemorgen</i> and a <i>dank je wel</i> open every door. Dutch people reply in English almost instantly, but they light up when you try their language — effort is everything.'}
  ],
  sounds: [
    {l:'g',say:'a guttural "kh" from the throat — the classic Dutch sound',ex:'goedemorgen = KHOO-duh-MOR-khun · goed = KHOOD',voice:'goedemorgen'},
    {l:'ch',say:'the same guttural "kh" as g',ex:'achten = AKH-tun · lach = lakh',voice:'lach'},
    {l:'ui',say:'a rounded "ow" — round your lips and say "ow"',ex:'huis = hows · buiten = BOW-tun',voice:'huis'},
    {l:'ij',say:'a diphthong like "ay" in say (ij and ei sound the same)',ex:'tijd = tayt · vijf = fayf',voice:'tijd'},
    {l:'ei',say:'sounds exactly like ij — "ay"',ex:'fiets = fayts · mei = may',voice:'fiets'},
    {l:'sch',say:'"skh" — an s plus the guttural kh',ex:'school = skhohl · schip = SKHIP',voice:'school'},
    {l:'w',say:'sounds like English "v"',ex:'water = VAH-tuhr · wit = vit',voice:'water'},
    {l:'r',say:'a rolled "r" with the tip of the tongue (or a throaty one in the south)',ex:'rood = roht · restaurant = res-toh-RANT',voice:'rood'}
  ],
  resources: [
    {icon:'🗣️',t:'Easy Dutch',d:'Real street interviews with native speakers and subtitles — ideal for natural Dutch.',q:'Easy Dutch street interviews'},
    {icon:'🐢',t:'Dutch for beginners videos',d:'Slow, clear everyday-Dutch lessons for absolute beginners.',q:'Dutch for beginners slow pronunciation'},
    {icon:'📚',t:'Coffee Break Dutch',d:'Structured beginner lessons in short, digestible audio episodes.',q:'Coffee Break Dutch'},
    {icon:'💬',t:'Nederlands Leren',d:'Conversational Dutch built from everyday situations, not grammar tables.',q:'Dutch conversation practice for beginners'},
    {icon:'🎧',t:'Slow Dutch podcasts',d:'Easy listening for learners — perfect for a walk or commute.',q:'slow Dutch podcast for learners'}
  ]
};
