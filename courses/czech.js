/* ---- czech ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["czech"] = {
  name: 'Czech',
  flag: '🇨🇿',
  tts: 'cs-CZ',
  dir: 'ltr',
  native: 'Čeština',
  soundTitle: 'Czech sounds & spelling',
  soundIntro: 'Czech is written with Latin letters and every sound is said out loud — there are no silent letters. Word stress always falls on the FIRST syllable.',
  grammar: '<p>Czech is close to phonetic: if you can say each letter you can read any word. Stress is always on the first syllable. Watch the diacritics — they change the sound, not just the look: <b>č</b> = \'ch\', <b>š</b> = \'sh\', <b>ž</b> = \'zh\', <b>ě</b> = \'ye\'. The tricky <b>ř</b> combines a trilled <b>r</b> with a soft \'zh\'. Nouns have gender (masculine, feminine, neuter), which changes endings — the dictionary form is a good place to start.</p>',
  bridges: '<div class="note">🌍 <b>Slavic family.</b> Czech is a West Slavic language — a sibling of Slovak and Polish, and a cousin of Russian. If you know one, you can spot words in the others.</div><div class="note">🇬🇧 <b>English.</b> Czech borrowed plenty of words you already use: káva (coffee), čaj (tea), hotel, taxi, restaurace, telefon, policie, tramvaj.</div><div class="note">🇸🇰 <b>Slovak & Polish.</b> Czech, Slovak and Polish share roots: <i>voda</i> (water), <i>sestra</i> (sister), <i>děkuji</i> line up closely. Czech is written in Latin script (like Polish), not Cyrillic (like Russian).</div>',
  lessons: [
    { id:1, title:'Greetings & being polite', focus:'Ahoj · Dobrý den · děkuji · prosím',
      steps:[
        {t:'say',text:'Start with the word you\'ll use constantly: <span class="inline-tr">Ahoj</span> — hello (and also goodbye, to friends). Say it out loud.',tr:'Ahoj'},
        {t:'words',items:[{tr:'Ahoj',pr:'AH-hoy',en:'hi / bye'},{tr:'Dobrý den',pr:'DOH-bree den',en:'good day (formal)'},{tr:'Dobré ráno',pr:'DOH-breh RAH-noh',en:'good morning'},{tr:'Dobrý večer',pr:'DOH-bree VEH-cher',en:'good evening'},{tr:'Na shledanou',pr:'nah SHKLEH-dah-noh',en:'goodbye (formal)'}]},
        {t:'chal',en:'Hello, thank you',tr:'Ahoj, děkuji',pr:'AH-hoy, DYEH-koo-yee',morph:['ahoj = hi','děkuji = thank you']},
        {t:'say',text:'The magic politeness pair: <span class="inline-tr">děkuji</span> (thank you) and <span class="inline-tr">prosím</span> (please / you\'re welcome).',tr:'prosím'},
        {t:'chal',en:'A coffee, please',tr:'Jednu kávu, prosím',pr:'YEHD-noo KAH-voo, PROH-seem',morph:['jednu kávu = a coffee','prosím = please']},
        {t:'say',text:'To ask how someone is (informal): <span class="inline-tr">Jak se máš?</span> Reply <span class="inline-tr">Mám se dobře</span> — I\'m well.',tr:'Jak se máš?'},
        {t:'words',items:[{tr:'Jak se máš?',pr:'yahk seh MAHSH',en:'How are you?'},{tr:'Mám se dobře',pr:'mahm seh DOH-brzheh',en:'I\'m well'},{tr:'Děkuji, dobře',pr:'DYEH-koo-yee, DOH-brzheh',en:'Thanks, well'}]},
        {t:'chal',en:'Hi, how are you?',tr:'Ahoj, jak se máš?',pr:'AH-hoy, yahk seh MAHSH',morph:['ahoj = hi','jak se máš? = how are you?']}
      ],
      blocks:['<code>ahoj</code> = hi / bye','<code>dobrý den</code> = good day (formal)','<code>děkuji</code> = thank you · <code>prosím</code> = please','<code>jak se máš?</code> = how are you?'] },
    { id:2, title:'Numbers 1–10', focus:'jedna · dva · tři · deset',
      steps:[
        {t:'say',text:'Numbers come up everywhere. Listen and repeat: <span class="inline-tr">jedna, dva, tři</span>.',tr:'jedna'},
        {t:'words',items:[{tr:'jedna',pr:'YEHD-nah',en:'1'},{tr:'dva',pr:'dvah',en:'2'},{tr:'tři',pr:'trzhih',en:'3'},{tr:'čtyři',pr:'CHTY-rzhih',en:'4'},{tr:'pět',pr:'pyet',en:'5'},{tr:'šest',pr:'shest',en:'6'},{tr:'sedm',pr:'SEH-dim',en:'7'},{tr:'osm',pr:'OH-suhm',en:'8'},{tr:'devět',pr:'DEH-vyet',en:'9'},{tr:'deset',pr:'DEH-set',en:'10'}]},
        {t:'chal',en:'Two coffees, please',tr:'Dvě kávy, prosím',pr:'Dvyeh KAH-vee, PROH-seem',morph:['dvě = two','kávy = coffees','prosím = please']},
        {t:'say',text:'To ask a price: <span class="inline-tr">Kolik to stojí?</span> — how much does it cost?',tr:'Kolik to stojí?'},
        {t:'chal',en:'How much is it?',tr:'Kolik to stojí?',pr:'KOH-lik toh STOH-yee',morph:['kolik = how much','to stojí = does it cost']},
        {t:'chal',en:'It\'s five crowns',tr:'Je to pět korun',pr:'yeh toh pyet KOH-roon',morph:['je to = it is','pět = five','korun = crowns']}
      ],
      blocks:['jedna, dva, tři, čtyři, pět = 1–5','<code>kolik to stojí?</code> = how much is it?','<code>koruna</code> = Czech crown'] },
    { id:3, title:'"I want" — chci & chtěl bych', focus:'chci · chtěl bych · jestli',
      steps:[
        {t:'say',text:'To say you want something: <span class="inline-tr">chci</span> — I want. Learn it and you can order almost anything.',tr:'chci'},
        {t:'say',text:'More polite is <span class="inline-tr">chtěl bych</span> (said by a man) or <span class="inline-tr">chtěla bych</span> (said by a woman) — I would like.',tr:'chtěl bych'},
        {t:'words',items:[{tr:'chci',pr:'kh-tsee',en:'I want'},{tr:'chtěl bych',pr:'kh-TYEHL bikh',en:'I would like (masc)'},{tr:'chtěla bych',pr:'kh-TYEH-lah bikh',en:'I would like (fem)'},{tr:'já',pr:'yah',en:'I'},{tr:'ty',pr:'tih',en:'you (informal)'}]},
        {t:'chal',en:'I would like a coffee',tr:'Chtěl bych kávu',pr:'kh-TYEHL bikh KAH-voo',morph:['chtěl bych = I would like','kávu = coffee']},
        {t:'chal',en:'I want water',tr:'Chci vodu',pr:'kh-tsee VOH-doo',morph:['chci = I want','vodu = water']},
        {t:'chal',en:'I would like a beer',tr:'Chtěl bych pivo',pr:'kh-TYEHL bikh PEE-voh',morph:['chtěl bych = I would like','pivo = beer']}
      ],
      blocks:['<code>chci</code> = I want','<code>chtěl / chtěla bych</code> = I would like','<code>chci</code> never mispronounced — the <b>ch</b> is hard like \'loch\'' ] },
    { id:4, title:'Food & drink', focus:'voda · chléb · káva · čaj',
      steps:[
        {t:'say',text:'Essential eats: <span class="inline-tr">voda</span> (water), <span class="inline-tr">chléb</span> (bread), <span class="inline-tr">káva</span> (coffee), <span class="inline-tr">čaj</span> (tea).',tr:'káva'},
        {t:'words',items:[{tr:'voda',pr:'VOH-dah',en:'water',link:'≈ Slavic water, Slovak/Slovania'},{tr:'chléb',pr:'kh-lehb',en:'bread'},{tr:'káva',pr:'KAH-vah',en:'coffee',link:'≈ English coffee'},{tr:'čaj',pr:'chai',en:'tea',link:'≈ English chai / tea'},{tr:'pivo',pr:'PEE-voh',en:'beer',link:'≈ Russian pivo'},{tr:'víno',pr:'VEE-noh',en:'wine',link:'≈ English wine'}]},
        {t:'chal',en:'Water and bread, please',tr:'Vodu a chléb, prosím',pr:'VOH-doo ah kh-lehb, PROH-seem',morph:['vodu = water','a = and','chléb = bread']},
        {t:'chal',en:'I would like tea',tr:'Chtěl bych čaj',pr:'kh-TYEHL bikh chai',morph:['chtěl bych = I would like','čaj = tea']},
        {t:'say',text:'To ask for the bill: <span class="inline-tr">Účet, prosím</span>. And <span class="inline-tr">výborné</span> = delicious.',tr:'Účet, prosím'},
        {t:'chal',en:'The bill, please',tr:'Účet, prosím',pr:'OO-chet, PROH-seem',morph:['účet = the bill','prosím = please']}
      ],
      blocks:['<code>voda</code>, <code>chléb</code>, <code>káva</code>, <code>čaj</code> = water, bread, coffee, tea','<code>pivo</code> = beer','<code>účet, prosím</code> = the bill, please'] },
    { id:5, title:'Getting around', focus:'Kde je...? · vpravo · vlevo · nádraží',
      steps:[
        {t:'say',text:'The most useful question in any town: <span class="inline-tr">Kde je…?</span> — where is…?',tr:'Kde je...?'},
        {t:'words',items:[{tr:'Kde je...?',pr:'kdeh yeh',en:'Where is...?'},{tr:'vpravo',pr:'VPRAH-voh',en:'to the right'},{tr:'vlevo',pr:'VLEH-voh',en:'to the left'},{tr:'rovně',pr:'ROHV-nyeh',en:'straight ahead'},{tr:'nádraží',pr:'NAH-drah-zhee',en:'the station'},{tr:'vlak',pr:'vlahk',en:'the train'},{tr:'letiště',pr:'LEH-tih-shtyeh',en:'the airport'}]},
        {t:'chal',en:'Where is the station?',tr:'Kde je nádraží?',pr:'kdeh yeh NAH-drah-zhee',morph:['kde = where','je = is','nádraží = the station']},
        {t:'chal',en:'Where is the airport?',tr:'Kde je letiště?',pr:'kdeh yeh LEH-tih-shtyeh',morph:['kde je = where is','letiště = the airport']},
        {t:'say',text:'<span class="inline-tr">Vpravo</span> = right, <span class="inline-tr">vlevo</span> = left, <span class="inline-tr">rovně</span> = straight. Use these to follow directions.',tr:'rovně'},
        {t:'chal',en:'Where is the bathroom?',tr:'Kde je záchod?',pr:'kdeh yeh ZAH-khot',morph:['kde je = where is','záchod = the bathroom']}
      ],
      blocks:['<code>kde je...?</code> = where is...?','<code>vpravo</code> / <code>vlevo</code> = right / left','<code>rovně</code> = straight ahead'] },
    { id:6, title:'Questions & "do you have…?"', focus:'Máte...? · Kolik · Nerozumím',
      steps:[
        {t:'say',text:'To ask whether someone has something: <span class="inline-tr">Máte…?</span> — do you have…?',tr:'Máte...?'},
        {t:'chal',en:'Do you have a table?',tr:'Máte stůl?',pr:'MAH-teh stool',morph:['máte = do you have','stůl = a table']},
        {t:'say',text:'Key question words: <span class="inline-tr">co</span> (what), <span class="inline-tr">kde</span> (where), <span class="inline-tr">kdy</span> (when), <span class="inline-tr">proč</span> (why), <span class="inline-tr">jak</span> (how).',tr:'co'},
        {t:'words',items:[{tr:'Co',pr:'tso',en:'what'},{tr:'Kde',pr:'kdeh',en:'where'},{tr:'Kdy',pr:'gdih',en:'when'},{tr:'Proč',pr:'proch',en:'why'},{tr:'Jak',pr:'yahk',en:'how'}]},
        {t:'say',text:'If you don\'t follow: <span class="inline-tr">Nerozumím</span> — I don\'t understand. Then <span class="inline-tr">mluvíte anglicky?</span> — do you speak English?',tr:'Nerozumím'},
        {t:'chal',en:'Do you speak English?',tr:'Mluvíte anglicky?',pr:'MLOO-vee-teh AHN-gleet-skee',morph:['mluvíte = do you speak','anglicky = English']},
        {t:'chal',en:'I don\'t understand',tr:'Nerozumím',pr:'NEH-roh-zoo-meem',morph:['nerozumím = I don\'t understand']}
      ],
      blocks:['<code>máte…?</code> = do you have…?','<code>co / kde / kdy / proč / jak</code> = what / where / when / why / how','<code>nerozumím</code> = I don\'t understand'] },
    { id:7, title:'Family & people', focus:'rodina · matka · otec · sestra',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">rodina</span> (family), <span class="inline-tr">matka</span> (mother), <span class="inline-tr">otec</span> (father).',tr:'rodina'},
        {t:'words',items:[{tr:'rodina',pr:'ROH-dee-nah',en:'family'},{tr:'matka',pr:'MAHT-kah',en:'mother'},{tr:'otec',pr:'OH-tets',en:'father'},{tr:'sestra',pr:'SEHS-trah',en:'sister',link:'≈ Slovak/Russian sestra, Latin soror'},{tr:'bratr',pr:'BRAH-tr',en:'brother'},{tr:'kamarád',pr:'KAH-mah-raad',en:'friend'}]},
        {t:'chal',en:'I have a friend',tr:'Mám kamaráda',pr:'mahm KAH-mah-raa-dah',morph:['mám = I have','kamaráda = a friend']},
        {t:'say',text:'To say you have something: <span class="inline-tr">mám</span> — I have. It\'s the verb for possession.',tr:'mám'},
        {t:'chal',en:'I have a family',tr:'Mám rodinu',pr:'mahm ROH-dee-noo',morph:['mám = I have','rodinu = a family']},
        {t:'chal',en:'I have a brother and a sister',tr:'Mám bratra a sestru',pr:'mahm BRAH-trah ah SEHS-troo',morph:['mám = I have','bratra = a brother','a = and']}
      ],
      blocks:['<code>matka</code> / <code>otec</code> = mother / father','<code>sestra</code> / <code>bratr</code> = sister / brother','<code>mám</code> = I have'] },
    { id:8, title:'Time, days & weather', focus:'dnes · zítra · pondělí · počasí',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">dnes</span>, tomorrow is <span class="inline-tr">zítra</span>, yesterday is <span class="inline-tr">včera</span>.',tr:'dnes'},
        {t:'words',items:[{tr:'dnes',pr:'dnes',en:'today'},{tr:'zítra',pr:'ZEE-trah',en:'tomorrow'},{tr:'včera',pr:'VCHER-ah',en:'yesterday'},{tr:'hodina',pr:'HOH-dee-nah',en:'hour / clock'}]},
        {t:'chal',en:'See you tomorrow',tr:'Zítra na shledanou',pr:'ZEE-trah nah SHKLEH-dah-noh',morph:['zítra = tomorrow','na shledanou = goodbye']},
        {t:'say',text:'Days of the week: <span class="inline-tr">pondělí</span> (Monday) to <span class="inline-tr">neděle</span> (Sunday).',tr:'pondělí'},
        {t:'words',items:[{tr:'pondělí',pr:'PON-dyeh-lee',en:'Monday'},{tr:'pátek',pr:'PAH-tek',en:'Friday'},{tr:'sobota',pr:'SOH-boh-tah',en:'Saturday'},{tr:'neděle',pr:'NEH-dyeh-leh',en:'Sunday'}]},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">Jaké je počasí?</span> — what\'s the weather like? <span class="inline-tr">Prší</span> = it\'s raining.',tr:'Jaké je počasí?'},
        {t:'chal',en:'It\'s raining',tr:'Prší',pr:'PR-shee',morph:['prší = it rains']}
      ],
      blocks:['<code>dnes</code> / <code>zítra</code> / <code>včera</code> = today / tomorrow / yesterday','<code>pondělí</code> = Monday','<code>jaké je počasí?</code> = what\'s the weather?'] },
    { id:9, title:'Introducing yourself', focus:'Jmenuji se · Těší mě',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">Jmenuji se…</span> = my name is…, and <span class="inline-tr">Těší mě</span> = pleased to meet you.',tr:'Jmenuji se'},
        {t:'chal',en:'My name is __NAME__',tr:'Jmenuji se __NAME__',pr:'y-MEH-noo-yee seh __NAME__',morph:['jmenuji se = my name is','__NAME__ = your name']},
        {t:'say',text:'To ask someone\'s name (formal): <span class="inline-tr">Jak se jmenujete?</span>',tr:'Jak se jmenujete?'},
        {t:'words',items:[{tr:'Jak se jmenujete?',pr:'yahk seh y-MEH-noo-yeh-teh',en:'What\'s your name?'},{tr:'Těší mě',pr:'TYEH-shee myeh',en:'Pleased to meet you'},{tr:'Rád vás poznávám',pr:'rahd vahs POHZ-nah-vahm',en:'Nice to meet you'}]},
        {t:'chal',en:'What\'s your name?',tr:'Jak se jmenujete?',pr:'yahk seh y-MEH-noo-yeh-teh',morph:['jak se = how do you','jmenujete = call yourself']},
        {t:'chal',en:'Pleased to meet you',tr:'Těší mě',pr:'TYEH-shee myeh',morph:['těší mě = it pleases me']}
      ],
      blocks:['<code>jmenuji se…</code> = my name is…','<code>jak se jmenujete?</code> = what\'s your name?','<code>těší mě</code> = pleased to meet you'] },
    { id:10, title:'Health & emergency', focus:'Pomoc! · doktor · nemocnice · Nerozumím',
      steps:[
        {t:'say',text:'The most important word if you need help: <span class="inline-tr">Pomoc!</span> — help!',tr:'Pomoc!'},
        {t:'words',items:[{tr:'Pomoc!',pr:'POH-mots',en:'Help!'},{tr:'lékař',pr:'LEH-kahrzh',en:'doctor',link:'≈ German Doktor / English doctor'},{tr:'nemocnice',pr:'NEH-mots-nee-tseh',en:'hospital'},{tr:'lékárna',pr:'LEH-kahr-nah',en:'pharmacy'},{tr:'Nemluvím česky',pr:'NEH-mloo-veem CHES-kee',en:'I don\'t speak Czech'}]},
        {t:'chal',en:'Help!',tr:'Pomoc!',pr:'POH-mots',morph:['pomoc = help']},
        {t:'chal',en:'I don\'t understand',tr:'Nerozumím',pr:'NEH-roh-zoo-meem',morph:['nerozumím = I don\'t understand']},
        {t:'say',text:'To say you need a doctor: <span class="inline-tr">Potřebuji doktora</span>. To call the police: <span class="inline-tr">Zavolejte policii!</span>',tr:'Potřebuji doktora'},
        {t:'chal',en:'I need a doctor',tr:'Potřebuji doktora',pr:'POH-trzheh-boo-yee DOHK-toh-rah',morph:['potřebuji = I need','doktora = a doctor']},
        {t:'chal',en:'Call the police!',tr:'Zavolejte policii!',pr:'ZAH-voh-leh-teh poh-LEE-tsee',morph:['zavolejte = call','policii = the police']}
      ],
      blocks:['<code>pomoc!</code> = help!','<code>potřebuji doktora</code> = I need a doctor','<code>nerozumím</code> = I don\'t understand'] },
    { id:11, title:'Describing things', focus:'krásný · velký · dobrý · moc',
      steps:[
        {t:'say',text:'Adjectives are useful everywhere: <span class="inline-tr">krásný</span> (beautiful), <span class="inline-tr">velký</span> (big), <span class="inline-tr">malý</span> (small).',tr:'krásný'},
        {t:'words',items:[{tr:'krásný',pr:'KRAHS-nee',en:'beautiful'},{tr:'velký',pr:'VEL-kee',en:'big'},{tr:'malý',pr:'MAH-lee',en:'small'},{tr:'dobrý',pr:'DOH-bree',en:'good'},{tr:'drahý',pr:'DRAH-hee',en:'expensive'},{tr:'levný',pr:'LEHV-nee',en:'cheap'},{tr:'moc',pr:'mots',en:'very / a lot'}]},
        {t:'chal',en:'Very beautiful',tr:'Moc krásné',pr:'mots KRAHS-neh',morph:['moc = very','krásné = beautiful']},
        {t:'say',text:'<span class="inline-tr">Moc</span> = very / a lot — say <span class="inline-tr">moc</span> in everything from \'very nice\' to \'too much\'.',tr:'moc'},
        {t:'chal',en:'A big coffee',tr:'Velkou kávu',pr:'VEL-koh KAH-voo',morph:['velkou = big','kávu = coffee']},
        {t:'chal',en:'It\'s too expensive',tr:'Je to moc drahé',pr:'yeh toh mots DRAH-heh',morph:['je to = it is','moc = too','drahé = expensive']}
      ],
      blocks:['<code>krásný</code> / <code>velký</code> / <code>malý</code> = beautiful / big / small','<code>dobrý</code> = good','<code>moc</code> = very / a lot'] },
    { id:12, title:'Tying it together', focus:'chci · kde je · kolik · a capstone scene',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolbox. This capstone uses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello, how are you?',tr:'Ahoj, jak se máš?',pr:'AH-hoy, yahk seh MAHSH',morph:['ahoj = hi','jak se máš? = how are you?']},
        {t:'chal',en:'I would like a coffee with milk',tr:'Chtěl bych kávu s mlékem',pr:'kh-TYEHL bikh KAH-voo s MLEH-kem',morph:['chtěl bych = I would like','kávu = coffee','s mlékem = with milk']},
        {t:'chal',en:'Where is the station?',tr:'Kde je nádraží?',pr:'kdeh yeh NAH-drah-zhee',morph:['kde je = where is','nádraží = the station']},
        {t:'chal',en:'How much is it?',tr:'Kolik to stojí?',pr:'KOH-lik toh STOH-yee',morph:['kolik to stojí = how much is it?']},
        {t:'chal',en:'Delicious! Thank you!',tr:'Výborné! Děkuji!',pr:'VEE-bor-neh, DYEH-koo-yee',morph:['výborné = delicious','děkuji = thank you']}
      ],
      blocks:['You built: greetings, ordering, directions, prices, thanks — a full day out in Czech.'] },
    { id:13, title:'Airport & tickets', focus:'letiště · pas · letenka · let',
      steps:[
        {t:'say',text:'You have landed in Prague. The building is the <span class="inline-tr">letiště</span>. Your document is a <span class="inline-tr">pas</span>.',tr:'letiště'},
        {t:'words',items:[{tr:'letiště',pr:'LEH-tih-shtyeh',en:'the airport'},{tr:'pas',pr:'pahs',en:'the passport'},{tr:'letenka',pr:'LEH-ten-kah',en:'the plane ticket'},{tr:'let',pr:'let',en:'the flight'},{tr:'brána',pr:'BRAH-nah',en:'the gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'Kde je letiště?',pr:'kdeh yeh LEH-tih-shtyeh',morph:['kde je = where is','letiště = the airport']},
        {t:'chal',en:'Here is my passport',tr:'Tady je můj pas',pr:'TAH-dee yeh mooy pahs',morph:['tady je = here is','můj pas = my passport']},
        {t:'chal',en:'A ticket, please',tr:'Jednu letenku, prosím',pr:'YEHD-noo LEH-ten-koo, PROH-seem',morph:['jednu letenku = one ticket','prosím = please']},
        {t:'chal',en:'Where is the gate?',tr:'Kde je brána?',pr:'kdeh yeh BRAH-nah',morph:['kde je = where is','brána = the gate']}
      ],
      blocks:['<code>letiště</code> = airport','<code>pas</code> = passport','<code>letenka</code> = ticket'] },
    { id:14, title:'The taxi', focus:'taxi · jet · hotel · zastavte',
      steps:[
        {t:'say',text:'The driver is waiting. Czech needs the infinitive: <span class="inline-tr">chci jet do hotelu</span> — I want to go to the hotel.',tr:'taxi'},
        {t:'words',items:[{tr:'taxi',pr:'TAHK-see',en:'the taxi'},{tr:'řidič',pr:'RZHEE-deech',en:'the driver'},{tr:'chci jet',pr:'kh-tsee yet',en:'I want to go'},{tr:'zastavte tady',pr:'ZAH-stahv-teh TAH-dee',en:'stop here (formal)'}]},
        {t:'chal',en:'A taxi, please',tr:'Taxi, prosím',pr:'TAHK-see, PROH-seem',morph:['taxi = taxi','prosím = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'Chci jet do hotelu',pr:'kh-tsee yet doh HO-te-lu',morph:['chci = I want','jet = to go','do hotelu = to the hotel']},
        {t:'chal',en:'Stop here, please',tr:'Zastavte tady, prosím',pr:'ZAH-stahv-teh TAH-dee, PROH-seem',morph:['zastavte tady = stop here','prosím = please']},
        {t:'chal',en:'How much is it?',tr:'Kolik to stojí?',pr:'KOH-lik toh STOH-yee',morph:['kolik = how much','to stojí = does it cost']}
      ],
      blocks:['<code>chci jet do …</code> = I want to go to …','<code>zastavte tady</code> = stop here (formal vy)'] },
    { id:15, title:'The hotel', focus:'rezervace · pokoj · klíč · noc',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">mam rezervaci</span> — I have a reservation (accusative).',tr:'rezervace'},
        {t:'words',items:[{tr:'hotel',pr:'HO-tel',en:'the hotel'},{tr:'rezervace',pr:'REH-zehr-vah-tseh',en:'the reservation'},{tr:'pokoj',pr:'PO-koy',en:'the room'},{tr:'klíč',pr:'kleech',en:'the key'},{tr:'jednu noc',pr:'YEHD-noo nots',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'Mám rezervaci',pr:'mahm REH-zehr-vah-tsi',morph:['mám = I have','rezervaci = a reservation']},
        {t:'chal',en:'A room for one night, please',tr:'Pokoj na jednu noc, prosím',pr:'PO-koy nah YEHD-noo nots, PROH-seem',morph:['pokoj = a room','na jednu noc = for one night','prosím = please']},
        {t:'chal',en:'The key, please',tr:'Klíč, prosím',pr:'kleech, PROH-seem',morph:['klíč = the key','prosím = please']},
        {t:'chal',en:'Where is my room?',tr:'Kde je můj pokoj?',pr:'kdeh yeh mooy PO-koy',morph:['kde je = where is','můj pokoj = my room']}
      ],
      blocks:['<code>rezervace</code> = reservation','<code>pokoj</code> = room','<code>klíč</code> = key'] },
    { id:16, title:'Ask for help', focus:'nerozumím · pomaleji · anglicky',
      steps:[
        {t:'say',text:'When Czech is too fast: <span class="inline-tr">Pomaleji, prosím</span> — slower, please. Formal <span class="inline-tr">vy</span> is safer with staff.',tr:'Pomaleji, prosím'},
        {t:'words',items:[{tr:'pomaleji',pr:'PO-mah-leh-yee',en:'slower'},{tr:'znovu',pr:'ZNO-voo',en:'again'},{tr:'anglicky',pr:'AHN-gleet-skee',en:'English'},{tr:'můžete mi pomoci?',pr:'MOO-zheh-teh mee PO-mo-tsi',en:'can you help me? (formal)'}]},
        {t:'chal',en:'I don\'t understand',tr:'Nerozumím',pr:'NEH-roh-zoo-meem',morph:['ne = not','rozumím = I understand']},
        {t:'chal',en:'Slower, please',tr:'Pomaleji, prosím',pr:'PO-mah-leh-yee, PROH-seem',morph:['pomaleji = slower','prosím = please']},
        {t:'chal',en:'Can you help me?',tr:'Můžete mi pomoci?',pr:'MOO-zheh-teh mee PO-mo-tsi',morph:['můžete = can you (formal)','mi = me','pomoci = to help']},
        {t:'chal',en:'Do you speak English?',tr:'Mluvíte anglicky?',pr:'MLOO-vee-teh AHN-gleet-skee',morph:['mluvíte = do you speak (formal)','anglicky = English']}
      ],
      blocks:['<code>pomaleji</code> = slower','<code>mluvíte anglicky?</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'cafe', title:'☕ At a café (kavárna)', emoji:'☕', turns:[
      {who:'You',tr:'Dobrý den! Jednu kávu, prosím.',pr:'DOH-bree den, YEHD-noo KAH-voo, PROH-seem',en:'Good day! One coffee, please.'},
      {who:'Barista',tr:'Dáte si s mlékem, nebo černou?',pr:'DAH-teh see s MLEH-kem, NEH-boh CHER-noh',en:'Do you want it with milk, or black?'},
      {who:'You',tr:'S mlékem, prosím. A jedno pivo taky.',pr:'s MLEH-kem, PROH-seem, ah YEHD-noh PEE-voh TAH-kee',en:'With milk, please. And a beer too.'},
      {who:'Barista',tr:'To je padesát korun, prosím.',pr:'toh yeh PAH-deh-saht KOH-roon, PROH-seem',en:'That\'s fifty crowns, please.'},
      {who:'You',tr:'Děkuji! Na shledanou!',pr:'DYEH-koo-yee, nah SHKLEH-dah-noh',en:'Thank you! Goodbye!'}
    ]},
    { id:'transport', title:'🚉 Getting around', emoji:'🚉', turns:[
      {who:'You',tr:'Promiňte, kde je nádraží?',pr:'PROH-meen-tyeh, kdeh yeh NAH-drah-zhee',en:'Excuse me, where is the station?'},
      {who:'Local',tr:'Je to tamhle, rovně a vpravo.',pr:'yeh toh TAHM-hleh, ROHV-nyeh ah VPRAH-voh',en:'It\'s over there, straight ahead and right.'},
      {who:'You',tr:'Děkuji. Jednu jízdenku do Prahy, prosím.',pr:'DYEH-koo-yee, YEHD-noo YEEZ-den-koo doh PRAH-hee, PROH-seem',en:'Thanks. One ticket to Prague, please.'},
      {who:'Ticket',tr:'Tři sta korun. Vlak jede v osm hodin.',pr:'trzhih stah KOH-roon, vlahk YEH-deh v OH-suhm HOH-deen',en:'Three hundred crowns. The train leaves at eight.'}
    ]},
    { id:'restaurant', title:'🍝 At a restaurant', emoji:'🍝', turns:[
      {who:'Waiter',tr:'Dobrý večer! Máte rezervaci?',pr:'DOH-bree VEH-cher, MAH-teh REH-zehr-vah-tsee',en:'Good evening! Do you have a reservation?'},
      {who:'You',tr:'Ano, na dvě osoby.',pr:'AH-noh, nah dvyeh OH-soh-bee',en:'Yes, for two people.'},
      {who:'You',tr:'Dám si kuře s rýží a jedno pivo.',pr:'dahm see KOO-rzheh s REE-zhee ah YEHD-noh PEE-voh',en:'I\'ll have the chicken with rice and a beer.'},
      {who:'Waiter',tr:'Výborná volba! Dobrou chuť.',pr:'VEE-bor-nah VOL-bah, DOH-broh khoot',en:'Excellent choice! Enjoy your meal.'}
    ]},
    { id:'market', title:'🛒 At the market (trh)', emoji:'🛒', turns:[
      {who:'You',tr:'Dobrý den! Kolik to stojí?',pr:'DOH-bree den, KOH-lik toh STOH-yee',en:'Good day! How much does this cost?'},
      {who:'Seller',tr:'Třicet korun.',pr:'TRZHEE-tset KOH-roon',en:'Thirty crowns.'},
      {who:'You',tr:'To je drahé. Dvacet korun?',pr:'toh yeh DRAH-heh, DVAH-tset KOH-roon',en:'That\'s expensive. Twenty crowns?'},
      {who:'Seller',tr:'Dobře, dvacet pět korun.',pr:'DOH-brzheh, DVAH-tset pyet KOH-roon',en:'OK, twenty-five crowns.'},
      {who:'You',tr:'Dobře, beru si to. Děkuji!',pr:'DOH-brzheh, BEH-roo see toh, DYEH-koo-yee',en:'OK, I\'ll take it. Thank you!'}
    ]}
  ],
  pocket: [
    {tr:'Ahoj',pr:'AH-hoy',en:'hi / bye',c:'Greetings'},
    {tr:'Dobrý den',pr:'DOH-bree den',en:'good day',c:'Greetings'},
    {tr:'Dobré ráno',pr:'DOH-breh RAH-noh',en:'good morning',c:'Greetings'},
    {tr:'Na shledanou',pr:'nah SHKLEH-dah-noh',en:'goodbye',c:'Greetings'},
    {tr:'Jak se máš?',pr:'yahk seh MAHSH',en:'how are you?',c:'Greetings'},
    {tr:'Mám se dobře',pr:'mahm seh DOH-brzheh',en:'I\'m well',c:'Greetings'},
    {tr:'Prosím',pr:'PROH-seem',en:'please / you\'re welcome',c:'Courtesy'},
    {tr:'Děkuji',pr:'DYEH-koo-yee',en:'thank you',c:'Courtesy'},
    {tr:'Děkuji mockrát',pr:'DYEH-koo-yee MOHTS-raht',en:'thanks a lot',c:'Courtesy'},
    {tr:'Promiňte',pr:'PROH-meen-tyeh',en:'excuse me',c:'Courtesy'},
    {tr:'Ano',pr:'AH-noh',en:'yes',c:'Courtesy'},
    {tr:'Ne',pr:'neh',en:'no',c:'Courtesy'},
    {tr:'Jedna',pr:'YEHD-nah',en:'1',c:'Numbers'},
    {tr:'Dva',pr:'dvah',en:'2',c:'Numbers'},
    {tr:'Tři',pr:'trzhih',en:'3',c:'Numbers'},
    {tr:'Čtyři',pr:'CHTY-rzhih',en:'4',c:'Numbers'},
    {tr:'Pět',pr:'pyet',en:'5',c:'Numbers'},
    {tr:'Voda',pr:'VOH-dah',en:'water',c:'Food & Drink'},
    {tr:'Káva',pr:'KAH-vah',en:'coffee',c:'Food & Drink'},
    {tr:'Čaj',pr:'chai',en:'tea',c:'Food & Drink'},
    {tr:'Pivo',pr:'PEE-voh',en:'beer',c:'Food & Drink'},
    {tr:'Chléb',pr:'kh-lehb',en:'bread',c:'Food & Drink'},
    {tr:'Účet, prosím',pr:'OO-chet, PROH-seem',en:'the bill, please',c:'Food & Drink'},
    {tr:'Kde je...?',pr:'kdeh yeh',en:'where is...?',c:'Directions'},
    {tr:'Vpravo',pr:'VPRAH-voh',en:'to the right',c:'Directions'},
    {tr:'Vlevo',pr:'VLEH-voh',en:'to the left',c:'Directions'},
    {tr:'Rovně',pr:'ROHV-nyeh',en:'straight ahead',c:'Directions'},
    {tr:'Nádraží',pr:'NAH-drah-zhee',en:'the station',c:'Directions'},
    {tr:'Kolik to stojí?',pr:'KOH-lik toh STOH-yee',en:'how much is it?',c:'Questions'},
    {tr:'Mluvíte anglicky?',pr:'MLOO-vee-teh AHN-gleet-skee',en:'do you speak English?',c:'Questions'},
    {tr:'Nerozumím',pr:'NEH-roh-zoo-meem',en:'I don\'t understand',c:'Questions'},
    {tr:'Pomoc!',pr:'POH-mots',en:'Help!',c:'Emergency'},
    {tr:'Potřebuji doktora',pr:'POH-trzheh-boo-yee DOHK-toh-rah',en:'I need a doctor',c:'Emergency'},
    {tr:'Zavolejte policii!',pr:'ZAH-voh-leh-teh poh-LEE-tsee',en:'call the police!',c:'Emergency'},
    {tr:'Dnes',pr:'dnes',en:'today',c:'Time'},
    {tr:'Zítra',pr:'ZEE-trah',en:'tomorrow',c:'Time'},
    {tr:'letiště',pr:'LEH-tih-shtyeh',en:'airport',c:'Travel'},
    {tr:'taxi',pr:'TAHK-see',en:'taxi',c:'Travel'},
    {tr:'hotel',pr:'HO-tel',en:'hotel',c:'Travel'},
    {tr:'zastavte tady',pr:'ZAH-stahv-teh TAH-dee',en:'stop here',c:'Travel'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food & Drink','Directions','Questions','Emergency','Time','Travel'],
  culture: [
    {icon:'🍺',title:'Beer is liquid bread',body:'Czechs drink more beer per person than any country in the world. <i>Pivo</i> is often cheaper than water. Order a <i>pivo</i> and a classic Czech moment is yours — but when someone toasts, look them in the eye and say <i>Na zdraví!</i> (to health).'},
    {icon:'🏰',title:'Prague (Praha)',body:'The capital is one of Europe\'s most beautiful cities — a fairytale old town, a famous astronomical clock and a castle on the hill. It is compact and walkable, and nearly everyone in tourism speaks English, but a few words of Czech win a warm smile.'},
    {icon:'🗣️',title:'Česky — the language',body:'Czech is a West Slavic language, a close cousin to Slovak and Polish. It is written in Latin letters with diacritics, so you can read it aloud if you learn the sounds. Locals are delighted when visitors try, even if it\'s just <i>děkuji</i>.'},
    {icon:'🥟',title:'Czech comfort food',body:'Hearty and warming: <i>knedlíky</i> (bread or potato dumplings), <i>svíčková</i> (a creamy beef sauce with dumplings) and <i>guláš</i> (goulash). Portions are generous — come hungry.'},
    {icon:'🚋',title:'Trams & getting around',body:'Czech cities have superb, cheap public transport. Buy a ticket from a machine or kiosk, then validate it in a yellow box as you board. A <i>jízdenka</i> (ticket) for the tram, metro and bus is one small slip that gets you everywhere.'},
    {icon:'💶',title:'The koruna & tipping',body:'The currency is the Czech crown (<i>koruna</i>), not the euro. Round up or add a few crowns for a tip — 10% is generous and always appreciated. Prices in shops are already final, so no surprises at the till.'}
  ],
  sounds: [
    {l:'ř',say:'The Czech special — a rolled \'r\' blended with a soft \'zh\', like a rolled \'r\' and your \'sh\' at once',ex:'tři = trzhih · Dvořák',voice:'tři'},
    {l:'č',say:'"ch" as in church',ex:'čaj = chai · český = CHES-kee',voice:'čaj'},
    {l:'š',say:'"sh" as in shoe',ex:'škola = SHKOH-lah',voice:'škola'},
    {l:'ž',say:'"zh" as in pleasure',ex:'žena = ZHEH-nah',voice:'žena'},
    {l:'ě',say:'"ye" as in yes — it also softens the consonant in front of it',ex:'pět = pyet · město = MYES-toh',voice:'město'},
    {l:'c',say:'"ts" as in cats',ex:'cena = TSEH-nah · co = tso',voice:'cena'},
    {l:'j',say:'"y" as in yes',ex:'já = yah · jak = yahk',voice:'já'},
    {l:'ch',say:'a hard "h" like clearing your throat — as in Scottish "loch"',ex:'chléb = kh-lehb',voice:'chléb'}
  ],
  resources: [
    {icon:'🗣️',t:'Czech with Katerina',d:'Clear, slow, well-structured Czech lessons for beginners from a native teacher.',q:'Learn Czech with Katerina'},
    {icon:'🐢',t:'Slow Czech',d:'Everyday Czech spoken slowly with subtitles — great for picking up the rhythm.',q:'Slow Czech for learners video'},
    {icon:'📚',t:'Česky krok za krokem',d:'The classic textbook has companion audio and is excellent for structured self-study.',q:'Cesky krok za krokem Czech step by step'},
    {icon:'🎧',t:'Prague-based podcasts',d:'Easy listening in Czech for a walk or commute — perfect passive practice.',q:'learn Czech podcast for beginners'},
    {icon:'💬',t:'Czech in real conversation',d:'Street interviews with natives use the phrases from this course in context.',q:'Czech street interviews native speakers'}
  ]
};
