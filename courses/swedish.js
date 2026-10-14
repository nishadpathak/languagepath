/* ---- swedish ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["swedish"] = {
  name: 'Swedish',
  flag: '🇸🇪',
  tts: 'sv-SE',
  dir: 'ltr',
  native: 'Svenska',
  soundTitle: 'Swedish sounds & spelling',
  soundIntro: 'Swedish is mostly phonetic, but three extra vowels (å, ä, ö) and the famous \'sj\' sound make it special. Learn these once and you can read almost any word aloud.',
  grammar: '<p>Swedish is a Germanic language, so it shares a lot with English and German. Verbs do <b>not</b> change with the person — <i>jag är, du är, han är</i> = "I am, you are, he is". Word order is close to English, which makes it easy to pick up. Nouns come in two groups, the <b>en</b>-words and the <b>ett</b>-words; when you learn a noun, learn its little word: <i>en kaffe</i>, <i>ett glas</i>.</p>',
  bridges: '<div class="note">🇬🇧 <b>English.</b> Swedish and English are Germanic cousins, so you already know <i>hus</i> (house), <i>land</i>, <i>son</i>, <i>vatten</i> (water), <i>kaffe</i> (coffee) and <i>musik</i> (music).</div><div class="note">🇩🇪 <b>German.</b> The family resemblance is strong: <i>vatten</i> = <i>Wasser</i> (water), <i>hus</i> = <i>Haus</i> (house), <i>sommar</i> = <i>Sommer</i> (summer), <i>dricka</i> = <i>trinken</i> (drink).</div>',
  lessons: [
    { id:1, title:'Greetings', focus:'hej · god morgon · god kväll · hej då',
      steps:[
        {t:'say',text:'Let\'s start with the first word you\'ll use: <span class="inline-tr">hej</span> — hello. Say it out loud.',tr:'hej'},
        {t:'words',items:[{tr:'hej',pr:'HEY',en:'hello'},{tr:'god morgon',pr:'GOO MOR-gon',en:'good morning'},{tr:'god dag',pr:'GOO DAHG',en:'good day'},{tr:'god kväll',pr:'GOO KVELL',en:'good evening'},{tr:'hej då',pr:'HEY DOH',en:'goodbye'}]},
        {t:'chal',en:'Hello, good morning',tr:'Hej, god morgon',pr:'HEY, GOO MOR-gon',morph:['hej = hello','god morgon = good morning']},
        {t:'say',text:'<span class="inline-tr">Trevligt att träffas</span> = nice to meet you — handy when you greet someone for the first time.',tr:'trevligt att träffas'},
        {t:'chal',en:'Nice to meet you',tr:'Trevligt att träffas',pr:'TREHV-leet aht TREHF-fahs',morph:['trevligt = nice','att träffas = to meet']},
        {t:'say',text:'To ask how someone is: <span class="inline-tr">Hur mår du?</span> The reply is <span class="inline-tr">bra, tack</span> — well, thanks.',tr:'Hur mår du?'},
        {t:'chal',en:'How are you?',tr:'Hur mår du?',pr:'Hoor MOR doo',morph:['hur = how','mår du? = are you?']}
      ],
      blocks:['<code>hej</code> = hello','<code>god morgon</code> = good morning','<code>god kväll</code> = good evening','<code>hej då</code> = goodbye','<code>hur mår du?</code> = how are you?'] },
    { id:2, title:'Polite phrases', focus:'tack · snälla · varsågod · ursäkta',
      steps:[
        {t:'say',text:'The two most useful words: <span class="inline-tr">tack</span> (thank you) and <span class="inline-tr">snälla</span> (please).',tr:'tack'},
        {t:'words',items:[{tr:'tack',pr:'TAHK',en:'thank you'},{tr:'snälla',pr:'SNELL-ah',en:'please'},{tr:'varsågod',pr:'VAHR-shoh-goh',en:'you\'re welcome'},{tr:'ursäkta',pr:'OOSH-ehk-tah',en:'excuse me'},{tr:'förlåt',pr:'fur-LOHT',en:'sorry'},{tr:'ja',pr:'YAH',en:'yes'},{tr:'nej',pr:'NAY',en:'no'}]},
        {t:'chal',en:'Thank you very much',tr:'Tack så mycket',pr:'tahk soh MEEK-eh',morph:['tack = thanks','så mycket = so much']},
        {t:'say',text:'<span class="inline-tr">Varsågod</span> does double duty as "you\'re welcome" and "here you go". It\'s everywhere in shops and cafés.',tr:'varsågod'},
        {t:'chal',en:'Yes, please',tr:'Ja, snälla',pr:'YAH, SNELL-ah',morph:['ja = yes','snälla = please']},
        {t:'say',text:'To get attention or apologize: <span class="inline-tr">Ursäkta</span> (excuse me) or <span class="inline-tr">förlåt</span> (sorry).',tr:'ursäkta'},
        {t:'chal',en:'Excuse me, where is...?',tr:'Ursäkta, var är...?',pr:'OOSH-ehk-tah, var AHR',morph:['ursäkta = excuse me','var är...? = where is...?']}
      ],
      blocks:['<code>tack</code> = thank you','<code>snälla</code> = please','<code>varsågod</code> = you\'re welcome','<code>ursäkta</code> = excuse me'] },
    { id:3, title:'Numbers 1–10', focus:'ett · två · tre · tio',
      steps:[
        {t:'say',text:'Numbers are the fastest win. Listen and repeat: <span class="inline-tr">ett, två, tre</span>.',tr:'ett'},
        {t:'words',items:[{tr:'ett',pr:'EHT',en:'1'},{tr:'två',pr:'TVOH',en:'2'},{tr:'tre',pr:'TREH',en:'3'},{tr:'fyra',pr:'FEE-rah',en:'4'},{tr:'fem',pr:'FEM',en:'5'},{tr:'sex',pr:'SEKS',en:'6'},{tr:'sju',pr:'SHOO',en:'7'},{tr:'åtta',pr:'AW-tah',en:'8'},{tr:'nio',pr:'NEE-oh',en:'9'},{tr:'tio',pr:'TEE-oh',en:'10'}]},
        {t:'chal',en:'Two coffees, please',tr:'Två kaffe, tack',pr:'TVOH KAFF-eh, tahk',morph:['två = two','kaffe = coffee','tack = please']},
        {t:'say',text:'<span class="inline-tr">Hur mycket kostar det?</span> = how much does it cost? The key shopping phrase.',tr:'Hur mycket kostar det?'},
        {t:'chal',en:'How much is it?',tr:'Hur mycket kostar det?',pr:'Hoor MEEK-eh KOS-tar deh',morph:['hur mycket = how much','kostar det? = does it cost?']},
        {t:'chal',en:'It\'s five kronor',tr:'Det kostar fem kronor',pr:'deh KOS-tar fem KROH-nor',morph:['det kostar = it costs','fem = five','kronor = kronor']}
      ],
      blocks:['ett, två, tre, fyra, fem = 1–5','<code>hur mycket kostar det?</code> = how much is it?'] },
    { id:4, title:'"I want"', focus:'jag vill · jag skulle vilja · ha · en/ett',
      steps:[
        {t:'say',text:'The magic phrase for ordering: <span class="inline-tr">jag skulle vilja</span> — I would like. Gentler than "I want".',tr:'jag skulle vilja'},
        {t:'say',text:'The simpler version is <span class="inline-tr">jag vill ha…</span> — I want (to have). Both work; <b>skulle vilja</b> is the polite one.',tr:'jag vill ha'},
        {t:'chal',en:'I would like a coffee',tr:'Jag skulle vilja ha en kaffe',pr:'yah SKUH-leh VIL-yah hah en KAFF-eh',morph:['jag skulle vilja = I would like','ha = to have','en kaffe = a coffee']},
        {t:'chal',en:'I want a water',tr:'Jag vill ha vatten',pr:'yah vil hah VAHT-tehn',morph:['jag vill = I want','ha = to have','vatten = water'],link:'≈ English water'},
        {t:'say',text:'<span class="inline-tr">En</span> is \'a\' for most nouns (<b>en kaffe</b>); some take <span class="inline-tr">ett</span> instead (<b>ett glas</b>). Learn them together.',tr:'ett glas'},
        {t:'chal',en:'I would like the bill',tr:'Jag skulle vilja ha notan',pr:'yah SKUH-leh VIL-yah hah NOO-tahn',morph:['jag skulle vilja = I would like','ha = to have','notan = the bill']}
      ],
      blocks:['<code>jag skulle vilja</code> = I would like','<code>jag vill ha</code> = I want (to have)','<code>en / ett</code> = a'] },
    { id:5, title:'Food & drink', focus:'kaffe · vatten · bröd · notan',
      steps:[
        {t:'say',text:'Eating out? Key words: <span class="inline-tr">kaffe</span> (coffee), <span class="inline-tr">vatten</span> (water), <span class="inline-tr">bröd</span> (bread).',tr:'kaffe'},
        {t:'words',items:[{tr:'kaffe',pr:'KAFF-eh',en:'coffee',link:'≈ English coffee'},{tr:'vatten',pr:'VAHT-tehn',en:'water',link:'≈ English water'},{tr:'bröd',pr:'BRUHD',en:'bread'},{tr:'vin',pr:'VEEN',en:'wine',link:'≈ English wine'},{tr:'öl',pr:'UHL',en:'beer'},{tr:'mat',pr:'MAHT',en:'food'},{tr:'notan',pr:'NOO-tahn',en:'the bill'}]},
        {t:'chal',en:'Coffee and a cinnamon bun, please',tr:'Kaffe och en kanelbulle, tack',pr:'KAFF-eh ohk en KAH-nel-BUHL-leh, tahk',morph:['kaffe = coffee','och = and','en kanelbulle = a cinnamon bun','tack = please']},
        {t:'chal',en:'I would like the menu',tr:'Jag skulle vilja ha menyn',pr:'yah SKUH-leh VIL-yah hah meh-NOON',morph:['jag skulle vilja = I would like','menyn = the menu']},
        {t:'say',text:'<span class="inline-tr">Gott!</span> = tasty / delicious. Say it and you\'ll make the cook\'s day.',tr:'gott!'},
        {t:'chal',en:'It\'s delicious!',tr:'Gott!',pr:'GOT',morph:['gott = delicious']}
      ],
      blocks:['<code>kaffe</code>, <code>vatten</code>, <code>bröd</code> = coffee, water, bread','<code>notan</code> = the bill','<code>gott!</code> = delicious'] },
    { id:6, title:'Directions', focus:'var är · till höger · till vänster · rakt fram',
      steps:[
        {t:'say',text:'The most useful question in any city: <span class="inline-tr">Var är…?</span> — where is…?',tr:'Var är...?'},
        {t:'words',items:[{tr:'Var är...?',pr:'var AHR',en:'Where is...?'},{tr:'till höger',pr:'til HOO-ger',en:'to the right'},{tr:'till vänster',pr:'til VEN-ster',en:'to the left'},{tr:'rakt fram',pr:'RAHKT frahm',en:'straight ahead'},{tr:'stationen',pr:'STAH-shoh-neh',en:'the station',link:'≈ English station'},{tr:'toaletten',pr:'toh-ah-LET-tehn',en:'the bathroom',link:'≈ English toilet'}]},
        {t:'chal',en:'Where is the station?',tr:'Var är stationen?',pr:'var AHR STAH-shoh-neh',morph:['var är = where is','stationen = the station']},
        {t:'chal',en:'Where is the bathroom?',tr:'Var är toaletten?',pr:'var AHR toh-ah-LET-tehn',morph:['var är = where is','toaletten = the bathroom']},
        {t:'say',text:'<span class="inline-tr">Till höger</span> and <span class="inline-tr">till vänster</span> tell you which way to turn. Straight ahead is <span class="inline-tr">rakt fram</span>.',tr:'rakt fram'},
        {t:'chal',en:'Straight ahead',tr:'Rakt fram',pr:'RAHKT frahm',morph:['rakt = straight','fram = forward']}
      ],
      blocks:['<code>var är…?</code> = where is…?','<code>till höger</code> / <code>till vänster</code> = right / left'] },
    { id:7, title:'Questions & "do you have…?"', focus:'har du · finns det · kan jag',
      steps:[
        {t:'say',text:'To ask if someone has something: <span class="inline-tr">Har du…?</span> = do you have…? It works in shops and restaurants.',tr:'har du'},
        {t:'chal',en:'Do you have a table?',tr:'Har du ett bord?',pr:'har doo eht BOOR',morph:['har du = do you have','ett bord = a table']},
        {t:'say',text:'<span class="inline-tr">Finns det…?</span> = is there…? Great for checking what\'s available.',tr:'Finns det...?'},
        {t:'chal',en:'Is there wifi?',tr:'Finns det wifi?',pr:'fins deh WEE-fee',morph:['finns det = is there','wifi = wifi'],link:'≈ English wi-fi (same word)'},
        {t:'say',text:'<span class="inline-tr">Kan jag…?</span> = can I…? / may I…?. For polite requests.',tr:'Kan jag...?'},
        {t:'chal',en:'Can I pay?',tr:'Kan jag betala?',pr:'kan yah beh-TAH-lah',morph:['kan jag = can I','betala = to pay']}
      ],
      blocks:['<code>har du…?</code> = do you have…?','<code>finns det…?</code> = is there…?','<code>kan jag…?</code> = can I…?'] },
    { id:8, title:'Family & people', focus:'familj · mamma · pappa · vän',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">familj</span> (family), <span class="inline-tr">mamma</span> (mother), <span class="inline-tr">pappa</span> (father).',tr:'familj'},
        {t:'words',items:[{tr:'familj',pr:'fah-MEEL',en:'family',link:'≈ English family'},{tr:'mamma',pr:'MAHM-mah',en:'mother'},{tr:'pappa',pr:'PAHP-pah',en:'father'},{tr:'bror',pr:'BROOR',en:'brother',link:'≈ English brother'},{tr:'syster',pr:'SOS-ter',en:'sister',link:'≈ English sister'},{tr:'vän',pr:'VEN',en:'friend'}]},
        {t:'chal',en:'I have a friend',tr:'Jag har en vän',pr:'yah har en VEN',morph:['jag har = I have','en vän = a friend']},
        {t:'say',text:'<span class="inline-tr">Jag har</span> = I have. It\'s the key verb to say what you\'ve got.',tr:'jag har'},
        {t:'chal',en:'I have a family',tr:'Jag har en familj',pr:'yah har en fah-MEEL',morph:['jag har = I have','en familj = a family']}
      ],
      blocks:['<code>mamma</code> / <code>pappa</code> = mother / father','<code>vän</code> = friend','<code>jag har</code> = I have'] },
    { id:9, title:'Time, days & weather', focus:'idag · imorgon · vad är det för väder?',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">idag</span>, tomorrow is <span class="inline-tr">imorgon</span>.',tr:'idag'},
        {t:'words',items:[{tr:'idag',pr:'ee-DAHG',en:'today'},{tr:'imorgon',pr:'ee-MOR-gon',en:'tomorrow'},{tr:'i går',pr:'ee GOHR',en:'yesterday'},{tr:'måndag',pr:'MON-dahg',en:'Monday'},{tr:'Vad är det för väder?',pr:'vahd ahr deh fer VEH-der',en:'what\'s the weather?'}]},
        {t:'chal',en:'See you tomorrow',tr:'Vi ses imorgon',pr:'vee sehs ee-MOR-gon',morph:['vi ses = see you','imorgon = tomorrow']},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">Vad är det för väder?</span> The answer might be <span class="inline-tr">det regnar</span> — it\'s raining.',tr:'Det regnar'},
        {t:'chal',en:'It\'s raining',tr:'Det regnar',pr:'deh RENG-nar',morph:['det = it','regnar = is raining']}
      ],
      blocks:['<code>idag</code> / <code>imorgon</code> = today / tomorrow','<code>vad är det för väder?</code> = what\'s the weather?','<code>det regnar</code> = it\'s raining'] },
    { id:10, title:'Small talk & your name', focus:'jag heter · vad heter du · trevligt',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">Jag heter…</span> = my name is…, and <span class="inline-tr">trevligt att träffas</span> = nice to meet you.',tr:'jag heter'},
        {t:'chal',en:'My name is __NAME__',tr:'Jag heter __NAME__',pr:'yah HEH-ter __NAME__',morph:['jag heter = my name is','__NAME__ = your name']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">Vad heter du?</span>',tr:'Vad heter du?'},
        {t:'chal',en:'What\'s your name?',tr:'Vad heter du?',pr:'vahd HEH-ter doo',morph:['vad = what','heter du? = are you called?']},
        {t:'chal',en:'Nice to meet you',tr:'Trevligt att träffas',pr:'TREHV-leet aht TREHF-fahs',morph:['trevligt = nice','att träffas = to meet']}
      ],
      blocks:['<code>jag heter…</code> = my name is…','<code>vad heter du?</code> = what\'s your name?','<code>trevligt att träffas</code> = nice to meet you'] },
    { id:11, title:'Health & emergency', focus:'hjälp · läkare · jag förstår inte · jag behöver hjälp',
      steps:[
        {t:'say',text:'The most important words if you need help: <span class="inline-tr">hjälp</span> (help!), <span class="inline-tr">läkare</span> (doctor), <span class="inline-tr">apotek</span> (pharmacy).',tr:'hjälp'},
        {t:'words',items:[{tr:'hjälp!',pr:'YELP',en:'help!'},{tr:'en läkare',pr:'en LEH-kah-reh',en:'a doctor'},{tr:'apotek',pr:'ah-poh-TEHK',en:'the pharmacy'},{tr:'Jag förstår inte',pr:'yah fer-STOHR een-teh',en:'I don\'t understand'}]},
        {t:'chal',en:'Help!',tr:'Hjälp!',pr:'YELP',morph:['hjälp = help']},
        {t:'chal',en:'I don\'t understand',tr:'Jag förstår inte',pr:'yah fer-STOHR een-teh',morph:['jag = I','förstår = understand','inte = not']},
        {t:'say',text:'To say you need help: <span class="inline-tr">Jag behöver hjälp</span>.',tr:'Jag behöver hjälp'},
        {t:'chal',en:'I need help',tr:'Jag behöver hjälp',pr:'yah beh-HUH-ver YELP',morph:['jag behöver = I need','hjälp = help']}
      ],
      blocks:['<code>hjälp!</code> = help','<code>en läkare</code> = a doctor','<code>jag förstår inte</code> = I don\'t understand'] },
    { id:12, title:'Tying it together', focus:'greetings · ordering · directions · a capstone scene',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolbox. This capstone uses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello, how are you?',tr:'Hej, hur mår du?',pr:'HEY, Hoor MOR doo',morph:['hej = hello','hur mår du? = how are you?']},
        {t:'chal',en:'I would like a coffee, please',tr:'Jag skulle vilja ha en kaffe, tack',pr:'yah SKUH-leh VIL-yah hah en KAFF-eh, tahk',morph:['jag skulle vilja = I would like','en kaffe = a coffee','tack = please']},
        {t:'chal',en:'Where is the station?',tr:'Var är stationen?',pr:'var AHR STAH-shoh-neh',morph:['var är = where is','stationen = the station']},
        {t:'chal',en:'How much is it?',tr:'Hur mycket kostar det?',pr:'Hoor MEEK-eh KOS-tar deh',morph:['hur mycket kostar det? = how much is it?']},
        {t:'chal',en:'It\'s delicious! Thank you!',tr:'Gott! Tack!',pr:'GOT, tahk',morph:['gott = delicious','tack = thank you']}
      ],
      blocks:['You built: greetings, contact, ordering, directions, prices, thanks — a full day out in Swedish.'] },
    { id:13, title:'Airport & tickets', focus:'flygplats · pass · biljett · flyg',
      steps:[
        {t:'say',text:'You have landed. The building is the <span class="inline-tr">flygplats</span>. Your document is a <span class="inline-tr">pass</span>.',tr:'flygplats'},
        {t:'words',items:[{tr:'flygplatsen',pr:'FLEEG-plat-sehn',en:'the airport'},{tr:'passet',pr:'PAHSS-et',en:'the passport'},{tr:'biljetten',pr:'bil-YET-tehn',en:'the ticket'},{tr:'flyget',pr:'FLEEG-et',en:'the flight'},{tr:'gaten',pr:'GAYT-en',en:'the gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'Var är flygplatsen?',pr:'var AHR FLEEG-plat-sehn',morph:['var är = where is','flygplatsen = the airport']},
        {t:'chal',en:'Here is my passport',tr:'Här är mitt pass',pr:'hair ahr mit pahss',morph:['här är = here is','mitt pass = my passport']},
        {t:'chal',en:'A ticket, please',tr:'En biljett, tack',pr:'en bil-YET, tahk',morph:['en biljett = a ticket','tack = please']},
        {t:'chal',en:'Where is the gate?',tr:'Var är gaten?',pr:'var AHR GAYT-en',morph:['var är = where is','gaten = the gate']}
      ],
      blocks:['<code>flygplats</code> = airport','<code>pass</code> = passport','<code>biljett</code> = ticket','<code>gate</code> = gate'] },
    { id:14, title:'The taxi', focus:'taxi · åka · hotell · stanna',
      steps:[
        {t:'say',text:'The driver is waiting. <span class="inline-tr">taxi</span> is the word you need. Tell them where to go with <span class="inline-tr">jag vill åka</span>.',tr:'taxi'},
        {t:'words',items:[{tr:'taxi',pr:'TAHK-see',en:'the taxi'},{tr:'föraren',pr:'FUR-ah-rehn',en:'the driver'},{tr:'jag vill åka',pr:'yah vil OH-kah',en:'I want to go'},{tr:'stanna här',pr:'STAH-nah hair',en:'stop here'}]},
        {t:'chal',en:'Taxi, please',tr:'Taxi, tack',pr:'TAHK-see, tahk',morph:['taxi = taxi','tack = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'Jag vill åka till hotellet',pr:'yah vil OH-kah til hoo-TELL-et',morph:['jag vill åka = I want to go','till hotellet = to the hotel']},
        {t:'chal',en:'Stop here, please',tr:'Stanna här, tack',pr:'STAH-nah hair, tahk',morph:['stanna här = stop here','tack = please']},
        {t:'chal',en:'How much is it?',tr:'Hur mycket kostar det?',pr:'Hoor MEEK-eh KOS-tar deh',morph:['hur mycket = how much','kostar det? = does it cost?']}
      ],
      blocks:['<code>jag vill åka till …</code> = I want to go to …','<code>stanna här</code> = stop here'] },
    { id:15, title:'The hotel', focus:'bokning · rum · nyckel · natt',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">Jag har en bokning</span> — I have a reservation.',tr:'bokning'},
        {t:'words',items:[{tr:'hotellet',pr:'hoo-TELL-et',en:'the hotel'},{tr:'bokning',pr:'BOOK-ning',en:'the reservation'},{tr:'rummet',pr:'ROOM-et',en:'the room'},{tr:'nyckeln',pr:'NUCK-eln',en:'the key'},{tr:'en natt',pr:'en naht',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'Jag har en bokning',pr:'yah har en BOOK-ning',morph:['jag har = I have','en bokning = a reservation']},
        {t:'chal',en:'A room for one night, please',tr:'Ett rum för en natt, tack',pr:'et room fur en naht, tahk',morph:['ett rum = a room','för en natt = for one night','tack = please']},
        {t:'chal',en:'The key, please',tr:'Nyckeln, tack',pr:'NUCK-eln, tahk',morph:['nyckeln = the key','tack = please']},
        {t:'chal',en:'Where is my room?',tr:'Var är mitt rum?',pr:'var AHR mit room',morph:['var är = where is','mitt rum = my room']}
      ],
      blocks:['<code>bokning</code> = reservation','<code>rum</code> = room','<code>nyckel</code> = key'] },
    { id:16, title:'Ask for help', focus:'jag förstår inte · långsammare · engelska',
      steps:[
        {t:'say',text:'When the language is too fast: <span class="inline-tr">Långsammare, tack</span> — slower, please.',tr:'Långsammare, tack'},
        {t:'words',items:[{tr:'långsammare',pr:'LONG-sahm-ah-reh',en:'slower'},{tr:'igen',pr:'ee-YEN',en:'again'},{tr:'engelska',pr:'ENG-el-skah',en:'English'},{tr:'kan du hjälpa mig?',pr:'kan doo YEL-pah may',en:'can you help?'}]},
        {t:'chal',en:'I don\'t understand',tr:'Jag förstår inte',pr:'yah fer-STOHR een-teh',morph:['jag = I','förstår = understand','inte = not']},
        {t:'chal',en:'Slower, please',tr:'Långsammare, tack',pr:'LONG-sahm-ah-reh, tahk',morph:['långsammare = slower','tack = please']},
        {t:'chal',en:'Can you help me?',tr:'Kan du hjälpa mig?',pr:'kan doo YEL-pah may',morph:['kan du = can you','hjälpa = help','mig = me']},
        {t:'chal',en:'Do you speak English?',tr:'Talar du engelska?',pr:'TAH-lar doo ENG-el-skah',morph:['talar du = do you speak','engelska = English']}
      ],
      blocks:['<code>långsammare</code> = slower','<code>Talar du engelska?</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'cafe', title:'☕ At a café (fika)', emoji:'☕', turns:[
      {who:'You',tr:'God morgon! En kopp kaffe, tack.',pr:'GOO MOR-gon, en KOHP KAFF-eh, tahk',en:'Good morning! A cup of coffee, please.'},
      {who:'Barista',tr:'Varsågod. Ska det vara något mer?',pr:'VAHR-shoh-goh, skah deh VAH-rah NOH-got mehr',en:'Here you go. Anything else?'},
      {who:'You',tr:'Ja, en kanelbulle, snälla.',pr:'YAH, en KAH-nel-BUHL-leh, SNELL-ah',en:'Yes, a cinnamon bun, please.'},
      {who:'Barista',tr:'Det blir femtio kronor.',pr:'deh bleer FEM-ti-oh KROH-nor',en:'That will be fifty kronor.'},
      {who:'You',tr:'Tack så mycket!',pr:'tahk soh MEEK-eh',en:'Thank you very much!'}
    ]},
    { id:'transport', title:'🚆 At the station', emoji:'🚆', turns:[
      {who:'You',tr:'Ursäkta, var är stationen?',pr:'OOSH-ehk-tah, var AHR STAH-shoh-neh',en:'Excuse me, where is the station?'},
      {who:'Local',tr:'Det är till höger, där borta.',pr:'deh ahr til HOO-ger, dahr BOOR-tah',en:'It\'s to the right, over there.'},
      {who:'You',tr:'Tack. En biljett till Stockholm, tack.',pr:'tahk, en bee-YET til STOCK-holm, tahk',en:'Thanks. A ticket to Stockholm, please.'},
      {who:'Attendant',tr:'Det blir tvåhundra kronor. Tåget går vid nio.',pr:'deh bleer TVOH-hoon-drah KROH-nor, TOH-get gohr veed NEE-oh',en:'That will be two hundred kronor. The train leaves at nine.'}
    ]},
    { id:'restaurant', title:'🍽️ At a restaurant', emoji:'🍽️', turns:[
      {who:'Waiter',tr:'God kväll! Har ni bokat bord?',pr:'GOO KVELL, har nee BOH-kaht boor',en:'Good evening! Have you booked a table?'},
      {who:'You',tr:'Ja, för två personer.',pr:'YAH, fer TVOH pehr-SOH-ner',en:'Yes, for two people.'},
      {who:'Waiter',tr:'Varsågod. Här är menyn.',pr:'VAHR-shoh-goh, hahr ahr meh-NOON',en:'Here you are. Here is the menu.'},
      {who:'You',tr:'Jag skulle vilja ha laxen och ett glas vin.',pr:'yah SKUH-leh VIL-yah hah LAHK-sehn oh eht glahs veen',en:'I would like the salmon and a glass of wine.'},
      {who:'Waiter',tr:'Utmärkt val!',pr:'OOT-mehrkt vahl',en:'Excellent choice!'}
    ]},
    { id:'shop', title:'🛍️ Shopping', emoji:'🛍️', turns:[
      {who:'You',tr:'Hur mycket kostar den här?',pr:'Hoor MEEK-eh KOS-tar dehn hahr',en:'How much does this cost?'},
      {who:'Seller',tr:'Tvåhundra kronor.',pr:'TVOH-hoon-drah KROH-nor',en:'Two hundred kronor.'},
      {who:'You',tr:'Det är lite dyrt. Kan jag prova den?',pr:'deh ahr LEE-teh dihrt, kan yah PROH-vah dehn',en:'It\'s a little expensive. Can I try it on?'},
      {who:'Seller',tr:'Självklart! Provrummet är där borta.',pr:'SHELV-klahrt, PROH-vroom-meh ahr dahr BOOR-tah',en:'Of course! The fitting room is over there.'},
      {who:'You',tr:'Okej, jag tar den.',pr:'oh-KAY, yah tar dehn',en:'OK, I\'ll take it.'}
    ]}
  ],
  pocket: [
    {tr:'Hej',pr:'HEY',en:'Hello',c:'Greetings'},
    {tr:'God morgon',pr:'GOO MOR-gon',en:'Good morning',c:'Greetings'},
    {tr:'Hej då',pr:'HEY DOH',en:'Goodbye',c:'Greetings'},
    {tr:'Vad heter du?',pr:'vahd HEH-ter doo',en:'What\'s your name?',c:'Greetings'},
    {tr:'Jag heter __NAME__',pr:'yah HEH-ter',en:'My name is...',c:'Greetings'},
    {tr:'Tack',pr:'TAHK',en:'Thank you',c:'Courtesy'},
    {tr:'Tack så mycket',pr:'tahk soh MEEK-eh',en:'Thanks a lot',c:'Courtesy'},
    {tr:'Snälla',pr:'SNELL-ah',en:'Please',c:'Courtesy'},
    {tr:'Varsågod',pr:'VAHR-shoh-goh',en:'You\'re welcome',c:'Courtesy'},
    {tr:'Ursäkta',pr:'OOSH-ehk-tah',en:'Excuse me',c:'Courtesy'},
    {tr:'Ett',pr:'EHT',en:'1',c:'Numbers'},
    {tr:'Två',pr:'TVOH',en:'2',c:'Numbers'},
    {tr:'Tre',pr:'TREH',en:'3',c:'Numbers'},
    {tr:'Fyra',pr:'FEE-rah',en:'4',c:'Numbers'},
    {tr:'Tio',pr:'TEE-oh',en:'10',c:'Numbers'},
    {tr:'Kaffe',pr:'KAFF-eh',en:'coffee',c:'Food'},
    {tr:'Vatten',pr:'VAHT-tehn',en:'water',c:'Food'},
    {tr:'Bröd',pr:'BRUHD',en:'bread',c:'Food'},
    {tr:'Vin',pr:'VEEN',en:'wine',c:'Food'},
    {tr:'Öl',pr:'UHL',en:'beer',c:'Food'},
    {tr:'Var är...?',pr:'var AHR',en:'Where is...?',c:'Directions'},
    {tr:'Till höger',pr:'til HOO-ger',en:'to the right',c:'Directions'},
    {tr:'Till vänster',pr:'til VEN-ster',en:'to the left',c:'Directions'},
    {tr:'Rakt fram',pr:'RAHKT frahm',en:'straight ahead',c:'Directions'},
    {tr:'Toaletten',pr:'toh-ah-LET-tehn',en:'the bathroom',c:'Directions'},
    {tr:'Hur mycket kostar...?',pr:'Hoor MEEK-eh KOS-tar',en:'how much does it cost?',c:'Shopping'},
    {tr:'Det är dyrt',pr:'deh ahr dihrt',en:'it\'s expensive',c:'Shopping'},
    {tr:'Kan jag betala?',pr:'kan yah beh-TAH-lah',en:'can I pay?',c:'Shopping'},
    {tr:'Jag tar den',pr:'yah tar dehn',en:'I\'ll take it',c:'Shopping'},
    {tr:'Hjälp!',pr:'YELP',en:'Help!',c:'Emergency'},
    {tr:'Läkare',pr:'LEH-kah-reh',en:'doctor',c:'Emergency'},
    {tr:'Jag förstår inte',pr:'yah fer-STOHR een-teh',en:'I don\'t understand',c:'Emergency'},
    {tr:'Jag behöver hjälp',pr:'yah beh-HUH-ver YELP',en:'I need help',c:'Emergency'},
    {tr:'Idag',pr:'ee-DAHG',en:'today',c:'Time'},
    {tr:'Imorgon',pr:'ee-MOR-gon',en:'tomorrow',c:'Time'},
    {tr:'Vad är det för väder?',pr:'vahd ahr deh fer VEH-der',en:'what\'s the weather?',c:'Time'},
    {tr:'Flygplatsen',pr:'FLEEG-plat-sehn',en:'the airport',c:'Travel'},
    {tr:'Passet',pr:'PAHSS-et',en:'the passport',c:'Travel'},
    {tr:'Biljett',pr:'bil-YET',en:'the ticket',c:'Travel'},
    {tr:'Taxi',pr:'TAHK-see',en:'the taxi',c:'Travel'},
    {tr:'Hotell',pr:'hoo-TELL',en:'the hotel',c:'Travel'},
    {tr:'Jag har en bokning',pr:'yah har en BOOK-ning',en:'I have a reservation',c:'Travel'},
    {tr:'Långsammare, tack',pr:'LONG-sahm-ah-reh, tahk',en:'Slower, please',c:'Travel'},
    {tr:'Talar du engelska?',pr:'TAH-lar doo ENG-el-skah',en:'Do you speak English?',c:'Travel'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Shopping','Emergency','Time','Travel'],
  culture: [
    {icon:'☕',title:'Fika is sacred',body:'The <i>fika</i> is a coffee break with friends — usually coffee and a <i>kanelbulle</i> (cinnamon bun). It isn\'t a quick caffeine hit; it\'s a pause to slow down and talk. You\'ll be invited to fika a lot.'},
    {icon:'😌',title:'Lagom — just right',body:'<i>Lagom</i> means "just the right amount". Swedes aim for balance in work, food and life. You\'ll hear it often — an easy way to say "not too much, not too little".'},
    {icon:'🪙',title:'Kronor, not euros',body:'Sweden uses the <i>krona</i> (kr), not the euro, even inside the EU. Prices can be high and cards are everywhere — paying by phone is completely normal.'},
    {icon:'🙋',title:'Hej is universal',body:'Swedes are informal. <i>Hej</i> (or a casual <i>tja</i>) works for anyone, from a shopkeeper to a stranger on the street. You\'ll rarely hear titles like "sir" or "madam".'},
    {icon:'🏪',title:'Systembolaget',body:'Beer and wine above a light level are sold only at <i>Systembolaget</i>, the state-run chain. Expect queues on Friday and fair-but-not-cheap prices — you\'ll learn to plan ahead.'},
    {icon:'🗣️',title:'A little Swedish goes far',body:'Almost all Swedes speak excellent English, but they light up when you try their language. A <i>hej</i> and a <i>tack</i> open every door — effort matters more than perfection.'}
  ],
  sounds: [
    {l:'sj',say:'the famous Swedish "sj" sound — a soft "sh" formed deep in the throat',ex:'sjö = SHUH (a lake) · sju = SHOO (seven)',voice:'sju'},
    {l:'å',say:'like "aw" in law — a long, round o',ex:'gå = GAW (go) · åtta = AW-tah (eight)',voice:'gå'},
    {l:'ä',say:'like "e" in bed',ex:'äpple = APP-leh (apple) · väg = VAIG (road)',voice:'äpple'},
    {l:'ö',say:'say "eh", then round your lips — like "er" in her',ex:'öl = UHL (beer) · bröd = BRUHD (bread)',voice:'öl'},
    {l:'g',say:'soft "y" sound before e, i, y, ä, ö; hard "g" otherwise',ex:'gift = YIFT (poison) · gata = GAH-tah (street)',voice:'gata'},
    {l:'k',say:'soft "sh" sound before e, i, y, ä, ö; hard "k" otherwise',ex:'känd = SHEND (famous) · kaffe = KAFF-eh (coffee)',voice:'kaffe'},
    {l:'tj',say:'a soft "sh" sound, like in "chip"',ex:'tjej = SHEY (girl) · tjock = SHOK (thick)',voice:'tjej'},
    {l:'r',say:'a tapped or rolled r (varies by region)',ex:'rik = REEK (rich)',voice:'rik'}
  ],
  resources: [
    {icon:'🗣️',t:'Easy Swedish',d:'Real street interviews with native speakers and clear subtitles — ideal for natural, everyday Swedish.',q:'Easy Swedish street interviews'},
    {icon:'🎧',t:'Slow Swedish podcasts',d:'Easy-listening episodes for beginners — perfect for a walk or a commute.',q:'Slow Swedish podcast for learners'},
    {icon:'📚',t:'Coffee Break Swedish',d:'Structured beginner lessons in short, digestible audio episodes.',q:'Coffee Break Swedish'},
    {icon:'💬',t:'Swedish for beginners',d:'Conversation-led Swedish built from real situations, not grammar tables.',q:'learn Swedish conversation for beginners'},
    {icon:'🎮',t:'Duolingo Swedish',d:'A gamified, bite-sized way to build vocabulary and keep a daily streak.',q:'Duolingo Swedish course'}
  ]
};
