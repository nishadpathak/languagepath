/* ---- javanese ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["javanese"] = {
  name: 'Javanese',
  flag: '🇮🇩',
  tts: 'jv-ID',
  dir: 'ltr',
  native: 'Basa Jawa',
  soundTitle: 'Javanese sounds & spelling',
  soundIntro: 'Javanese is written in the Latin alphabet and is mostly phonetic, but a few letters differ from English. Learn these and you can read almost any word aloud.',
  grammar: '<p>Javanese word order is simple: subject + verb + object. There are no verb tenses — time words like <b>sesuk</b> (tomorrow) and <b>dina iki</b> (today) do that work, and nouns have no gender or plural endings. The big rule is <b>register</b>: use <b>ngoko</b> (informal) with friends, family and children, and <b>krama</b> (polite) with elders, strangers and people of higher status. In krama, <b>aku</b> (I) becomes <b>kula</b> and <b>kowe</b> (you) becomes <b>panjenengan</b>.</p>',
  bridges: '<div class="note">🇮🇩 <b>Indonesian / Malay.</b> Javanese and Indonesian/Malay are closely related Austronesian languages, so you already know plenty: <b>lima</b> (five), <b>ibu</b> (mother), <b>bapak</b> (father), <b>kopi</b> (coffee), <b>teh</b> (tea), <b>pasar</b> (market), <b>stasiun</b> (station).</div><div class="note">🗣️ <b>Register matters.</b> Choosing <b>ngoko</b> vs <b>krama</b> matters more than getting every word right. When in doubt with a stranger, lean polite (krama): <b>kula</b> instead of <b>aku</b>, <b>panjenengan</b> instead of <b>kowe</b>.</div>',
  lessons: [
    { id:1, title:'Greetings & being polite', focus:'sugeng enjing · halo · matur nuwun · mangga',
      steps:[
        {t:'say',text:'Let\'s start with the word you\'ll say most in Java: <span class="inline-tr">sugeng enjing</span> — good morning. Say it out loud.',tr:'sugeng enjing'},
        {t:'words',items:[{tr:'Sugeng enjing',pr:'SOO-geng EN-jing',en:'good morning'},{tr:'Sugeng siang',pr:'SOO-geng see-AHNG',en:'good day'},{tr:'Sugeng dalu',pr:'SOO-geng DAH-loo',en:'good evening / night'},{tr:'Halo',pr:'HAH-loh',en:'hello'},{tr:'Matur nuwun',pr:'MAH-toor NOO-woon',en:'thank you'},{tr:'Mangga',pr:'MAHNG-gah',en:'please / go ahead'}]},
        {t:'chal',en:'Hello, thank you',tr:'Halo, matur nuwun',pr:'HAH-loh, MAH-toor NOO-woon',morph:['halo = hello','matur nuwun = thank you']},
        {t:'say',text:'The two politeness words: <span class="inline-tr">mangga</span> (please / go ahead) and <span class="inline-tr">matur nuwun</span> (thank you).',tr:'mangga'},
        {t:'chal',en:'Please, thank you',tr:'Mangga, matur nuwun',pr:'MAHNG-gah, MAH-toor NOO-woon',morph:['mangga = please','matur nuwun = thank you']},
        {t:'say',text:'To ask how someone is: <span class="inline-tr">Kepiye kabare?</span> (informal). The reply is <span class="inline-tr">apik, matur nuwun</span> — fine, thanks.',tr:'Kepiye kabare?'},
        {t:'words',items:[{tr:'Kepiye kabare?',pr:'keh-PEE-yeh kah-BAH-reh',en:'How are you?'},{tr:'Apik, matur nuwun',pr:'AH-pik, MAH-toor NOO-woon',en:'Fine, thanks'},{tr:'Ora apa-apa',pr:'OH-rah AH-pah AH-pah',en:'Not bad / no problem'}]},
        {t:'chal',en:'Hi, how are you?',tr:'Halo, kepiye kabare?',pr:'HAH-loh, keh-PEE-yeh kah-BAH-reh',morph:['halo = hi','kepiye kabare? = how are you?']}
      ],
      blocks:['<code>sugeng enjing</code> = good morning','<code>halo</code> = hello','<code>matur nuwun</code> = thank you · <code>mangga</code> = please / go ahead'] },
    { id:2, title:'Numbers 1–10', focus:'siji · loro · telu · sepuluh',
      steps:[
        {t:'say',text:'Numbers are the fastest win. Listen and repeat: <span class="inline-tr">siji, loro, telu</span>.',tr:'siji'},
        {t:'words',items:[{tr:'siji',pr:'SEE-jee',en:'1'},{tr:'loro',pr:'LOH-roh',en:'2'},{tr:'telu',pr:'TEH-loo',en:'3'},{tr:'papat',pr:'PAH-paht',en:'4'},{tr:'lima',pr:'LEE-mah',en:'5',link:'≈ Indonesian lima'},{tr:'enem',pr:'EH-num',en:'6'},{tr:'pitu',pr:'PEE-too',en:'7'},{tr:'wolu',pr:'WOH-loo',en:'8'},{tr:'sanga',pr:'SAHNG-ah',en:'9'},{tr:'sepuluh',pr:'seh-POO-looh',en:'10'}]},
        {t:'chal',en:'Two coffees, please',tr:'Loro kopi, mangga',pr:'LOH-roh KOH-pee, MAHNG-gah',morph:['loro = two','kopi = coffee','mangga = please']},
        {t:'say',text:'To ask the price: <span class="inline-tr">Pira?</span> = how much? A key phrase for shopping.',tr:'Pira?'},
        {t:'chal',en:'How much is it?',tr:'Pira iki?',pr:'PEE-rah EE-kee',morph:['pira = how much','iki = this']},
        {t:'chal',en:'It\'s five thousand rupiah',tr:'Lima ewu rupiah',pr:'LEE-mah EH-woo roo-PEE-ah',morph:['lima = five','ewu = thousand','rupiah = rupiah']}
      ],
      blocks:['siji, loro, telu, papat, lima = 1–5','<code>sepuluh</code> = 10','<code>pira?</code> = how much?'] },
    { id:3, title:'"I want" — aku pengin', focus:'aku pengin · kula · badhe',
      steps:[
        {t:'say',text:'The magic phrase to order anything: <span class="inline-tr">aku pengin</span> — I want (informal).',tr:'aku pengin'},
        {t:'words',items:[{tr:'aku',pr:'AH-koo',en:'I / me'},{tr:'pengin',pr:'peh-NGEEN',en:'want'},{tr:'kula',pr:'KOO-lah',en:'I (formal / krama)'},{tr:'badhe',pr:'BAH-dheh',en:'want (formal / krama)'}]},
        {t:'chal',en:'I want coffee',tr:'Aku pengin kopi',pr:'AH-koo peh-NGEEN KOH-pee',morph:['aku = I','pengin = want','kopi = coffee']},
        {t:'say',text:'In polite speech (krama) the same idea is <span class="inline-tr">kula badhe</span> — I would like.',tr:'kula badhe'},
        {t:'chal',en:'I\'d like water, please',tr:'Kula badhe banyu, mangga',pr:'KOO-lah BAH-dheh BAH-nyoo, MAHNG-gah',morph:['kula = I (formal)','badhe = would like','banyu = water','mangga = please']},
        {t:'chal',en:'I want rice',tr:'Aku pengin sega',pr:'AH-koo peh-NGEEN seh-GAH',morph:['aku = I','pengin = want','sega = rice']}
      ],
      blocks:['<code>aku</code> = I (informal) · <code>kula</code> = I (formal)','<code>pengin</code> = want · <code>badhe</code> = want (formal)'] },
    { id:4, title:'Food & drink', focus:'banyu · sega · roti · kopi',
      steps:[
        {t:'say',text:'Eating time. Key words: <span class="inline-tr">banyu</span> (water), <span class="inline-tr">sega</span> (rice), <span class="inline-tr">kopi</span> (coffee).',tr:'banyu'},
        {t:'words',items:[{tr:'banyu',pr:'BAH-nyoo',en:'water'},{tr:'sega',pr:'seh-GAH',en:'rice'},{tr:'roti',pr:'ROH-tee',en:'bread',link:'≈ Indonesian roti'},{tr:'kopi',pr:'KOH-pee',en:'coffee',link:'≈ Indonesian kopi'},{tr:'teh',pr:'teh',en:'tea',link:'≈ Indonesian teh'},{tr:'panganan',pr:'pah-NGAH-nahn',en:'food'},{tr:'wedang',pr:'weh-DAHNG',en:'drink'}]},
        {t:'chal',en:'I want water and bread',tr:'Aku pengin banyu lan roti',pr:'AH-koo peh-NGEEN BAH-nyoo lahn ROH-tee',morph:['aku pengin = I want','banyu = water','lan = and','roti = bread']},
        {t:'say',text:'In polite mode, <span class="inline-tr">toya</span> is the formal word for water.',tr:'toya'},
        {t:'chal',en:'I want coffee and tea',tr:'Aku pengin kopi lan teh',pr:'AH-koo peh-NGEEN KOH-pee lahn teh',morph:['aku pengin = I want','kopi = coffee','lan = and','teh = tea']},
        {t:'chal',en:'Delicious!',tr:'Enak tenan!',pr:'eh-NAHK teh-NAHN',morph:['enak = delicious','tenan = really']}
      ],
      blocks:['<code>banyu</code>, <code>sega</code>, <code>kopi</code> = water, rice, coffee','<code>roti</code> = bread','<code>enak tenan</code> = delicious'] },
    { id:5, title:'Getting around', focus:'ing endi · tengen · kiwa · lurus',
      steps:[
        {t:'say',text:'The most useful question in any town: <span class="inline-tr">Ing endi…?</span> — where is…?',tr:'Ing endi'},
        {t:'words',items:[{tr:'Ing endi...?',pr:'ing EN-dee',en:'Where is...?'},{tr:'tengen',pr:'teh-NGEN',en:'to the right'},{tr:'kiwa',pr:'KEE-wah',en:'to the left'},{tr:'lurus',pr:'LOO-roos',en:'straight ahead'},{tr:'stasiun',pr:'stah-SEE-oon',en:'station',link:'≈ Indonesian stasiun'},{tr:'WC',pr:'weh-SEH',en:'bathroom'}]},
        {t:'chal',en:'Where is the station?',tr:'Ing endi stasiun?',pr:'ing EN-dee stah-SEE-oon',morph:['ing endi = where is','stasiun = station']},
        {t:'chal',en:'Where is the bathroom?',tr:'Ing endi WC?',pr:'ing EN-dee weh-SEH',morph:['ing endi = where is','WC = bathroom']},
        {t:'say',text:'<span class="inline-tr">Tengen</span> and <span class="inline-tr">kiwa</span> tell you which way to turn. \'Straight ahead\' is <span class="inline-tr">lurus</span>.',tr:'tengen'},
        {t:'chal',en:'Straight ahead',tr:'Lurus',pr:'LOO-roos',morph:['lurus = straight ahead']}
      ],
      blocks:['<code>ing endi…?</code> = where is…?','<code>tengen</code> / <code>kiwa</code> = right / left','<code>lurus</code> = straight ahead'] },
    { id:6, title:'Questions & "do you have…?"', focus:'kepiye · apa · sapa · pira',
      steps:[
        {t:'say',text:'Question words: <span class="inline-tr">apa</span> (what), <span class="inline-tr">sapa</span> (who), <span class="inline-tr">kepiye</span> (how), <span class="inline-tr">pira</span> (how much).',tr:'apa'},
        {t:'words',items:[{tr:'apa',pr:'AH-pah',en:'what / is it?'},{tr:'sapa',pr:'SAH-pah',en:'who'},{tr:'kepiye',pr:'keh-PEE-yeh',en:'how'},{tr:'pira',pr:'PEE-rah',en:'how much'},{tr:'ngapa',pr:'ngah-PAH',en:'why'}]},
        {t:'chal',en:'What is this?',tr:'Apa iki?',pr:'AH-pah EE-kee',morph:['apa = what','iki = this']},
        {t:'chal',en:'How much is it?',tr:'Pira iki?',pr:'PEE-rah EE-kee',morph:['pira = how much','iki = this']},
        {t:'say',text:'In polite register, <span class="inline-tr">pinten</span> is how much and <span class="inline-tr">menapa</span> is what/how.',tr:'pinten'},
        {t:'chal',en:'Is there wifi?',tr:'Ana wifi ta?',pr:'AH-nah wee-fee tah',morph:['ana = is there','wifi = wifi','ta = question particle']}
      ],
      blocks:['<code>apa</code> = what · <code>sapa</code> = who','<code>kepiye</code> = how · <code>pira</code> = how much'] },
    { id:7, title:'Family & people', focus:'kulawarga · ibu · bapak · kanca',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">kulawarga</span> (family), <span class="inline-tr">ibu</span> (mother), <span class="inline-tr">bapak</span> (father).',tr:'kulawarga'},
        {t:'words',items:[{tr:'kulawarga',pr:'koo-lah-WAHR-gah',en:'family'},{tr:'ibu',pr:'EE-boo',en:'mother',link:'≈ Indonesian ibu'},{tr:'bapak',pr:'BAH-pahk',en:'father',link:'≈ Indonesian bapak'},{tr:'kanca',pr:'KAHN-chah',en:'friend',link:'≈ Indonesian kawan'},{tr:'anak',pr:'AH-nahk',en:'child'}]},
        {t:'chal',en:'I have a family',tr:'Aku duwe kulawarga',pr:'AH-koo DOO-weh koo-lah-WAHR-gah',morph:['aku = I','duwe = have','kulawarga = family']},
        {t:'say',text:'<span class="inline-tr">Duwe</span> = have. It\'s the key verb to say what you\'ve got.',tr:'duwe'},
        {t:'chal',en:'I have a friend',tr:'Aku duwe kanca',pr:'AH-koo DOO-weh KAHN-chah',morph:['aku = I','duwe = have','kanca = friend']}
      ],
      blocks:['<code>ibu</code> / <code>bapak</code> = mother / father','<code>kanca</code> = friend','<code>duwe</code> = have'] },
    { id:8, title:'Time, days & weather', focus:'dina iki · sesuk · cuaca',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">dina iki</span>, tomorrow is <span class="inline-tr">sesuk</span>.',tr:'dina iki'},
        {t:'words',items:[{tr:'dina',pr:'DEE-nah',en:'day'},{tr:'dina iki',pr:'DEE-nah EE-kee',en:'today'},{tr:'sesuk',pr:'seh-SOOK',en:'tomorrow'},{tr:'esuk',pr:'eh-SOOK',en:'morning'},{tr:'bengi',pr:'beh-NGEE',en:'night'},{tr:'cuaca',pr:'choo-AH-chah',en:'weather',link:'≈ Indonesian cuaca'}]},
        {t:'chal',en:'See you tomorrow',tr:'Sesuk ketemu',pr:'seh-SOOK keh-TEH-moo',morph:['sesuk = tomorrow','ketemu = meet / see you']},
        {t:'say',text:'To ask about the weather: <span class="inline-tr">Kepiye cuacane?</span>',tr:'Kepiye cuacane?'},
        {t:'chal',en:'It\'s raining',tr:'Udan',pr:'OO-dahn',morph:['udan = it rains']}
      ],
      blocks:['<code>dina iki</code> / <code>sesuk</code> = today / tomorrow','<code>kepiye cuacane?</code> = what\'s the weather?'] },
    { id:9, title:'Name & small talk', focus:'jenengku · sapa jenengmu · sugeng tepang',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">Jenengku…</span> = my name is…, and <span class="inline-tr">sugeng tepang</span> = pleased to meet you.',tr:'Jenengku'},
        {t:'chal',en:'My name is __NAME__',tr:'Jenengku __NAME__',pr:'jeh-NENG-koo __NAME__',morph:['jenengku = my name is','__NAME__ = your name']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">Sapa jenengmu?</span>',tr:'Sapa jenengmu?'},
        {t:'chal',en:'What\'s your name?',tr:'Sapa jenengmu?',pr:'SAH-pah jeh-NENG-moo',morph:['sapa = who','jenengmu = your name']},
        {t:'chal',en:'Pleased to meet you',tr:'Sugeng tepang',pr:'SOO-geng teh-PAHNG',morph:['sugeng = good / happy','tepang = meet']}
      ],
      blocks:['<code>jenengku…</code> = my name is…','<code>sapa jenengmu?</code> = what\'s your name?','<code>sugeng tepang</code> = pleased to meet you'] },
    { id:10, title:'Health & emergency', focus:'tulung · dokter · apotek · aku ora ngerti',
      steps:[
        {t:'say',text:'The most important words if you need help: <span class="inline-tr">tulung</span> (help), <span class="inline-tr">dokter</span> (doctor), <span class="inline-tr">apotek</span> (pharmacy).',tr:'tulung'},
        {t:'words',items:[{tr:'Tulung!',pr:'TOO-loong',en:'Help!'},{tr:'dokter',pr:'DOHK-tehr',en:'doctor',link:'≈ Indonesian dokter'},{tr:'apotek',pr:'AH-poh-tek',en:'pharmacy',link:'≈ Indonesian apotek'},{tr:'Aku ora ngerti',pr:'AH-koo OH-rah ngehr-TEE',en:'I don\'t understand'}]},
        {t:'chal',en:'Help!',tr:'Tulung!',pr:'TOO-loong',morph:['tulung = help / please']},
        {t:'chal',en:'I don\'t understand',tr:'Aku ora ngerti',pr:'AH-koo OH-rah ngehr-TEE',morph:['aku = I','ora = not','ngerti = understand']},
        {t:'say',text:'To say you need help: <span class="inline-tr">Aku butuh tulung</span>.',tr:'Aku butuh tulung'},
        {t:'chal',en:'I need help',tr:'Aku butuh tulung',pr:'AH-koo BOO-tooh TOO-loong',morph:['aku = I','butuh = need','tulung = help']}
      ],
      blocks:['<code>tulung!</code> = help!','<code>dokter</code> = doctor','<code>aku ora ngerti</code> = I don\'t understand'] },
    { id:11, title:'Describing things', focus:'apik · gedhe · cilik · banget',
      steps:[
        {t:'say',text:'Adjectives are easy: <span class="inline-tr">apik</span> (good/nice), <span class="inline-tr">gedhe</span> (big), <span class="inline-tr">cilik</span> (small).',tr:'apik'},
        {t:'words',items:[{tr:'apik',pr:'AH-pik',en:'good / nice'},{tr:'gedhe',pr:'GEH-dheh',en:'big'},{tr:'cilik',pr:'CHEE-lik',en:'small'},{tr:'banget',pr:'BAHNG-eht',en:'very / a lot'}]},
        {t:'chal',en:'Very good',tr:'Apik banget',pr:'AH-pik BAHNG-eht',morph:['apik = good','banget = very']},
        {t:'chal',en:'A big coffee',tr:'Kopi gedhe',pr:'KOH-pee GEH-dheh',morph:['kopi = coffee','gedhe = big']}
      ],
      blocks:['<code>apik</code> = good','<code>gedhe</code> / <code>cilik</code> = big / small','<code>banget</code> = very'] },
    { id:12, title:'Tying it together', focus:'greetings · ordering · a capstone scene',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolbox. This capstone uses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello, how are you?',tr:'Halo, kepiye kabare?',pr:'HAH-loh, keh-PEE-yeh kah-BAH-reh',morph:['halo = hi','kepiye kabare? = how are you?']},
        {t:'chal',en:'I want coffee, please',tr:'Aku pengin kopi, mangga',pr:'AH-koo peh-NGEEN KOH-pee, MAHNG-gah',morph:['aku pengin = I want','kopi = coffee','mangga = please']},
        {t:'chal',en:'Where is the station?',tr:'Ing endi stasiun?',pr:'ing EN-dee stah-SEE-oon',morph:['ing endi = where is','stasiun = station']},
        {t:'chal',en:'How much is it?',tr:'Pira iki?',pr:'PEE-rah EE-kee',morph:['pira = how much','iki = this']},
        {t:'chal',en:'Delicious! Thank you!',tr:'Enak tenan! Matur nuwun!',pr:'eh-NAHK teh-NAHN, MAH-toor NOO-woon',morph:['enak tenan = delicious','matur nuwun = thank you']}
      ],
      blocks:['You built: greetings, ordering, directions, prices, thanks — a full day out in Java.'] },
    { id:13, title:'Airport & tickets', focus:'bandara · paspor · tiket · gerbang',
      steps:[
        {t:'say',text:'You have landed. The building is the <span class="inline-tr">bandara</span>. Your document is a <span class="inline-tr">paspor</span>.',tr:'bandara'},
        {t:'words',items:[{tr:'bandara',pr:'bahn-DAH-rah',en:'airport'},{tr:'paspor',pr:'PAS-por',en:'passport'},{tr:'tiket',pr:'TEE-keht',en:'ticket'},{tr:'pesawat',pr:'puh-SAH-waht',en:'flight / plane'},{tr:'gerbang',pr:'guhr-BAHNG',en:'gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'Ing endi bandara?',pr:'ing EN-dee bahn-DAH-rah',morph:['ing endi = where is','bandara = airport']},
        {t:'chal',en:'Here is my passport',tr:'Iki pasporku',pr:'EE-kee PAS-por-koo',morph:['iki = this','pasporku = my passport']},
        {t:'chal',en:'A ticket, please',tr:'Tiket siji, mangga',pr:'TEE-keht SEE-jee, MAHNG-gah',morph:['tiket = ticket','siji = one','mangga = please']},
        {t:'chal',en:'Where is the gate?',tr:'Ing endi gerbang?',pr:'ing EN-dee guhr-BAHNG',morph:['ing endi = where is','gerbang = gate']}
      ],
      blocks:['<code>bandara</code> = airport','<code>paspor</code> = passport','<code>tiket</code> = ticket','<code>gerbang</code> = gate'] },
    { id:14, title:'The taxi', focus:'taksi · menyang · hotel · mandheg',
      steps:[
        {t:'say',text:'The driver is waiting. <span class="inline-tr">Taksi</span> is taxi. With a stranger, lean polite: <span class="inline-tr">kula badhe menyang hotel</span>.',tr:'taksi'},
        {t:'words',items:[{tr:'taksi',pr:'TAHK-see',en:'taxi'},{tr:'sopir',pr:'SOH-peer',en:'driver'},{tr:'kula badhe menyang',pr:'KOO-lah BAH-dheh meh-NYAHNG',en:'I would like to go (krama)'},{tr:'mandheg ing kene',pr:'mahn-DHEG ing keh-neh',en:'stop here'}]},
        {t:'chal',en:'Taxi, please',tr:'Taksi, mangga',pr:'TAHK-see, MAHNG-gah',morph:['taksi = taxi','mangga = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'Kula badhe menyang hotel',pr:'KOO-lah BAH-dheh meh-NYAHNG ho-TEL',morph:['kula = I (formal)','badhe = would like','menyang = to','hotel = hotel']},
        {t:'chal',en:'Stop here, please',tr:'Mandheg ing kene, mangga',pr:'mahn-DHEG ing keh-neh, MAHNG-gah',morph:['mandheg = stop','ing kene = here','mangga = please']},
        {t:'chal',en:'How much is it?',tr:'Pira iki?',pr:'PEE-rah EE-kee',morph:['pira = how much','iki = this']}
      ],
      blocks:['<code>kula badhe menyang …</code> = I would like to go to …','<code>mandheg ing kene</code> = stop here'] },
    { id:15, title:'The hotel', focus:'pesenan · kamar · kunci · wengi',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">kula gadhah pesenan</span> — I have a reservation (krama).',tr:'pesenan'},
        {t:'words',items:[{tr:'hotel',pr:'ho-TEL',en:'hotel'},{tr:'pesenan',pr:'peh-SEH-nahn',en:'reservation'},{tr:'kamar',pr:'KAH-mahr',en:'room'},{tr:'kunci',pr:'KOON-chee',en:'key'},{tr:'sewengi',pr:'seh-WEHNG-ee',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'Kula gadhah pesenan',pr:'KOO-lah GAD-hah peh-SEH-nahn',morph:['kula = I (formal)','gadhah = have (krama)','pesenan = reservation']},
        {t:'chal',en:'A room for one night, please',tr:'Kamar sewengi, mangga',pr:'KAH-mahr seh-WEHNG-ee, MAHNG-gah',morph:['kamar = room','sewengi = one night','mangga = please']},
        {t:'chal',en:'The key, please',tr:'Kuncine, mangga',pr:'KOON-chee-neh, MAHNG-gah',morph:['kuncine = the key','mangga = please']},
        {t:'chal',en:'Where is my room?',tr:'Ing endi kamarku?',pr:'ing EN-dee KAH-mahr-koo',morph:['ing endi = where is','kamarku = my room']}
      ],
      blocks:['<code>pesenan</code> = reservation','<code>kamar</code> = room','<code>kunci</code> = key'] },
    { id:16, title:'Ask for help', focus:'aku ora ngerti · alon-alon · basa Inggris',
      steps:[
        {t:'say',text:'When the language is too fast: <span class="inline-tr">Alon-alon, mangga</span> — slower, please.',tr:'Alon-alon, mangga'},
        {t:'words',items:[{tr:'alon-alon',pr:'AH-lon AH-lon',en:'slower'},{tr:'maneh',pr:'MAH-neh',en:'again'},{tr:'basa Inggris',pr:'BAH-sah ING-gris',en:'English'},{tr:'panjenengan saged nulung?',pr:'pahn-jeh-NENG-ahn SAH-ged NOO-loong',en:'can you help? (krama)'}]},
        {t:'chal',en:'I don\'t understand',tr:'Kula mboten ngertos',pr:'KOO-lah m-BOH-ten ngehr-TOS',morph:['kula = I (formal)','mboten = not (krama)','ngertos = understand (krama)']},
        {t:'chal',en:'Slower, please',tr:'Alon-alon, mangga',pr:'AH-lon AH-lon, MAHNG-gah',morph:['alon-alon = slower','mangga = please']},
        {t:'chal',en:'Can you help me?',tr:'Panjenengan saged nulung?',pr:'pahn-jeh-NENG-ahn SAH-ged NOO-loong',morph:['panjenengan = you (krama)','saged = can','nulung = help']},
        {t:'chal',en:'Do you speak English?',tr:'Panjenengan saged basa Inggris?',pr:'pahn-jeh-NENG-ahn SAH-ged BAH-sah ING-gris',morph:['panjenengan saged = can you','basa Inggris = English']}
      ],
      blocks:['<code>alon-alon</code> = slower','<code>panjenengan saged basa Inggris?</code> = do you speak English?'] },
  ],
  dialogues: [
    { id:'warung', title:'☕ At a warung', emoji:'☕', turns:[
      {who:'You',tr:'Sugeng enjing! Aku pengin kopi, mangga.',pr:'SOO-geng EN-jing, AH-koo peh-NGEEN KOH-pee, MAHNG-gah',en:'Good morning! I want a coffee, please.'},
      {who:'Seller',tr:'Mangga. Nang kene apa digawa?',pr:'MAHNG-gah, nahng keh-neh AH-pah dee-GAH-wah',en:'Here. For here or to go?'},
      {who:'You',tr:'Nang kene, matur nuwun.',pr:'nahng keh-neh, MAH-toor NOO-woon',en:'For here, thank you.'},
      {who:'Seller',tr:'Enem ewu.',pr:'EH-num EH-woo',en:'Six thousand.'},
      {who:'You',tr:'Matur nuwun!',pr:'MAH-toor NOO-woon',en:'Thank you!'}
    ]},
    { id:'transport', title:'🚉 Transport & directions', emoji:'🚉', turns:[
      {who:'You',tr:'Nyuwun sewu, ing endi stasiun?',pr:'NYOO-woon seh-WOO, ing EN-dee stah-SEE-oon',en:'Excuse me, where is the station?'},
      {who:'Local',tr:'Neng kono, nengen.',pr:'nehng KOH-noh, neh-NGEN',en:'It\'s there, to the right.'},
      {who:'You',tr:'Matur nuwun. Tiket siji menyang Yogyakarta, mangga.',pr:'MAH-toor NOO-woon, TEE-keht SEE-jee meh-NYAHNG yoh-gyah-KAHR-tah, MAHNG-gah',en:'Thanks. One ticket to Yogyakarta, please.'},
      {who:'Ticket clerk',tr:'Rong puluh ewu. Sepure jam wolu.',pr:'rong POO-looh EH-woo, seh-POO-reh JAHM WOH-loo',en:'Twenty thousand. The train is at eight.'}
    ]},
    { id:'restaurant', title:'🍛 At a restaurant', emoji:'🍛', turns:[
      {who:'You',tr:'Sugeng dalu! Meja kanggo wong loro, mangga.',pr:'SOO-geng DAH-loo, MEH-jah KAHNG-goh wong LOH-roh, MAHNG-gah',en:'Good evening! A table for two, please.'},
      {who:'Waiter',tr:'Mangga. Menika menu.',pr:'MAHNG-gah, meh-NEE-kah meh-NOO',en:'Here. This is the menu.'},
      {who:'You',tr:'Aku pengin sega lan ayam, mangga.',pr:'AH-koo peh-NGEEN seh-GAH lahn AH-yahm, MAHNG-gah',en:'I want rice and chicken, please.'},
      {who:'Waiter',tr:'Sekedhap, mangga.',pr:'seh-KEH-dap, MAHNG-gah',en:'Just a moment, please.'},
      {who:'You',tr:'Enak tenan. Matur nuwun!',pr:'eh-NAHK teh-NAHN, MAH-toor NOO-woon',en:'Delicious. Thank you!'}
    ]},
    { id:'market', title:'🛍️ At the market', emoji:'🛍️', turns:[
      {who:'You',tr:'Iki pira?',pr:'EE-kee PEE-rah',en:'How much is this?'},
      {who:'Seller',tr:'Sepuluh ewu.',pr:'seh-POO-looh EH-woo',en:'Ten thousand.'},
      {who:'You',tr:'Larang banget. Bisa kurang?',pr:'LAH-rahng BAHNG-eht, BEE-sah KOO-rahng',en:'Too expensive. Can you do less?'},
      {who:'Seller',tr:'Wolung ewu, wis.',pr:'WOH-loong EH-woo, wis',en:'Eight thousand, that\'s the price.'},
      {who:'You',tr:'Ya wis, aku tuku iki.',pr:'yah wis, AH-koo TOO-koo EE-kee',en:'OK then, I\'ll take this.'},
      {who:'Seller',tr:'Matur nuwun!',pr:'MAH-toor NOO-woon',en:'Thank you!'}
    ]}
  ],
  pocket: [
    {tr:'Sugeng enjing',pr:'SOO-geng EN-jing',en:'Good morning',c:'Greetings'},
    {tr:'Sugeng siang',pr:'SOO-geng see-AHNG',en:'Good day',c:'Greetings'},
    {tr:'Sugeng dalu',pr:'SOO-geng DAH-loo',en:'Good evening / night',c:'Greetings'},
    {tr:'Halo',pr:'HAH-loh',en:'Hello',c:'Greetings'},
    {tr:'Kepiye kabare?',pr:'keh-PEE-yeh kah-BAH-reh',en:'How are you?',c:'Greetings'},
    {tr:'Apik, matur nuwun',pr:'AH-pik, MAH-toor NOO-woon',en:'Fine, thanks',c:'Greetings'},
    {tr:'Matur nuwun',pr:'MAH-toor NOO-woon',en:'Thank you',c:'Courtesy'},
    {tr:'Mangga',pr:'MAHNG-gah',en:'Please / go ahead',c:'Courtesy'},
    {tr:'Nyuwun sewu',pr:'NYOO-woon seh-WOO',en:'Excuse me',c:'Courtesy'},
    {tr:'Ngapunten',pr:'ngah-POON-ten',en:'Sorry',c:'Courtesy'},
    {tr:'Ya',pr:'YAH',en:'Yes',c:'Courtesy'},
    {tr:'Ora',pr:'OH-rah',en:'No',c:'Courtesy'},
    {tr:'Siji',pr:'SEE-jee',en:'1',c:'Numbers'},
    {tr:'Loro',pr:'LOH-roh',en:'2',c:'Numbers'},
    {tr:'Telu',pr:'TEH-loo',en:'3',c:'Numbers'},
    {tr:'Papat',pr:'PAH-paht',en:'4',c:'Numbers'},
    {tr:'Lima',pr:'LEE-mah',en:'5',c:'Numbers'},
    {tr:'Enem',pr:'EH-num',en:'6',c:'Numbers'},
    {tr:'Pitu',pr:'PEE-too',en:'7',c:'Numbers'},
    {tr:'Sepuluh',pr:'seh-POO-looh',en:'10',c:'Numbers'},
    {tr:'Banyu',pr:'BAH-nyoo',en:'water',c:'Food'},
    {tr:'Sega',pr:'seh-GAH',en:'rice',c:'Food'},
    {tr:'Roti',pr:'ROH-tee',en:'bread',c:'Food'},
    {tr:'Kopi',pr:'KOH-pee',en:'coffee',c:'Food'},
    {tr:'Teh',pr:'teh',en:'tea',c:'Food'},
    {tr:'Panganan',pr:'pah-NGAH-nahn',en:'food',c:'Food'},
    {tr:'Ing endi...?',pr:'ing EN-dee',en:'Where is...?',c:'Directions'},
    {tr:'Tengen',pr:'teh-NGEN',en:'to the right',c:'Directions'},
    {tr:'Kiwa',pr:'KEE-wah',en:'to the left',c:'Directions'},
    {tr:'Lurus',pr:'LOO-roos',en:'straight ahead',c:'Directions'},
    {tr:'Stasiun',pr:'stah-SEE-oon',en:'station',c:'Directions'},
    {tr:'Pira?',pr:'PEE-rah',en:'how much?',c:'Shopping'},
    {tr:'Iki',pr:'EE-kee',en:'this',c:'Shopping'},
    {tr:'Larang banget',pr:'LAH-rahng BAHNG-eht',en:'too expensive',c:'Shopping'},
    {tr:'Bisa kurang?',pr:'BEE-sah KOO-rahng',en:'can you do less?',c:'Shopping'},
    {tr:'Tulung!',pr:'TOO-loong',en:'Help!',c:'Emergency'},
    {tr:'Aku ora ngerti',pr:'AH-koo OH-rah ngehr-TEE',en:'I don\'t understand',c:'Emergency'},
    {tr:'Aku butuh tulung',pr:'AH-koo BOO-tooh TOO-loong',en:'I need help',c:'Emergency'},
    {tr:'Dokter',pr:'DOHK-tehr',en:'doctor',c:'Emergency'},
    {tr:'Dina iki',pr:'DEE-nah EE-kee',en:'today',c:'Time'},
    {tr:'Sesuk',pr:'seh-SOOK',en:'tomorrow',c:'Time'},
    {tr:'Esuk',pr:'eh-SOOK',en:'morning',c:'Time'},
    {tr:'Bengi',pr:'beh-NGEE',en:'night',c:'Time'},
    {tr:'Bandara',pr:'bahn-DAH-rah',en:'airport',c:'Travel'},
    {tr:'Paspor',pr:'PAS-por',en:'passport',c:'Travel'},
    {tr:'Taksi, mangga',pr:'TAHK-see, MAHNG-gah',en:'Taxi, please',c:'Travel'},
    {tr:'Kula gadhah pesenan',pr:'KOO-lah GAD-hah peh-SEH-nahn',en:'I have a reservation',c:'Travel'},
    {tr:'Alon-alon, mangga',pr:'AH-lon AH-lon, MAHNG-gah',en:'Slower, please',c:'Travel'},
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Shopping','Emergency','Time', 'Travel'],
  culture: [
    {icon:'🗣️',title:'Two levels of Javanese',body:'Javanese has an informal form (<b>ngoko</b>) and a polite form (<b>krama</b>). Ngoko is for friends, family and children; krama is for elders, strangers and people of higher status. Mixing them up is the most common beginner slip — but people will gently correct you.'},
    {icon:'🙏',title:'Register shows respect',body:'The quickest way to sound polite is to swap the pronoun: <b>aku</b> (I) becomes <b>kula</b> in krama, and <b>kowe</b> (you) becomes <b>panjenengan</b>. To give directions, the formal word for \'go\' is <b>tindak</b>; for \'eat\', it\'s <b>dhahar</b> instead of <b>mangan</b>. When unsure, lean polite.'},
    {icon:'☕',title:'Ngopi at the warung',body:'A <b>warung</b> is a small family-run stall, and <b>ngopi</b> (drinking coffee) is a daily ritual. Strong black coffee is the classic order. Warungs are great, friendly places to practise your Javanese — and the coffee is cheap.'},
    {icon:'🌾',title:'Rice is at the centre',body:'Rice — <b>sega</b> (ngoko) or <b>sekul</b> (krama) — anchors almost every meal. Greeting someone and asking whether they\'ve eaten is a warm, common way to say hello in Java.'},
    {icon:'👏',title:'Always greet',body:'Javanese place great value on courtesy. A <b>sugeng enjing</b> in the morning and a <b>matur nuwun</b> whenever you\'re given something go a long way. People brighten up when visitors try their language.'},
    {icon:'🌏',title:'Close to Indonesian',body:'Javanese and Indonesian/Malay share a lot of vocabulary: <b>lima</b> (five), <b>ibu</b> (mother), <b>bapak</b> (father), <b>kopi</b>, <b>teh</b>, <b>pasar</b>, <b>stasiun</b>. If you know any Indonesian or Malay you have a head start — but the ngoko/krama register is uniquely Javanese.'}
  ],
  sounds: [
    {l:'c',say:'"ch" as in church',ex:'catur = CHAH-toor',voice:'catur'},
    {l:'j',say:'"j" as in jump',ex:'Jawa = JAH-wah',voice:'Jawa'},
    {l:'ng',say:'one nasal sound, as in "siNGer"',ex:'sugeng = SOO-geng',voice:'sugeng'},
    {l:'ny',say:'like Spanish ñ, "ny" in canyon',ex:'banyu = BAH-nyoo',voice:'banyu'},
    {l:'dh',say:'"d" with the tongue curled back',ex:'gedhe = GEH-dheh',voice:'gedhe'},
    {l:'th',say:'"t" with the tongue curled back',ex:'bathik = BAH-tik',voice:'bathik'},
    {l:'e',say:'often a soft "uh" (schwa)',ex:'sega = seh-GAH',voice:'sega'},
    {l:'u',say:'"oo" as in too',ex:'tulung = TOO-loong',voice:'tulung'}
  ],
  resources: [
    {icon:'🗣️',t:'Easy Javanese',d:'Real conversations with native Javanese speakers — great for natural everyday phrases.',q:'easy Javanese conversation'},
    {icon:'📚',t:'Belajar Bahasa Jawa',d:'Structured lessons on Javanese vocabulary and the ngoko/krama registers, told in simple steps.',q:'belajar bahasa Jawa untuk pemula'},
    {icon:'🎭',t:'Wayang & tradition',d:'Wayang kulit shadow puppetry is full of everyday and ceremonial Javanese, and a wonderful way to absorb the language.',q:'wayang kulit bahasa Jawa'},
    {icon:'🎵',t:'Javanese songs',d:'Campursari and langgam songs let you soak up pronunciation and rhythm naturally.',q:'campursari Javanese music'},
    {icon:'🌏',t:'Compare with Indonesian',d:'Since so many words overlap, Indonesian lessons reinforce the vocabulary you already know for free.',q:'learn Indonesian for beginners'}
  ]
};
