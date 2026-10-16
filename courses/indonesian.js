/* ---- indonesian ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["indonesian"] = {
  name: 'Indonesian',
  flag: '🇮🇩',
  tts: 'id-ID',
  dir: 'ltr',
  soundTitle: 'Indonesian sounds & spelling',
  soundIntro: 'Indonesian is phonetic — every letter is always said the same way. Learn these and you can read any word aloud.',
  grammar: '<p>Indonesian is wonderfully regular: <b>no tenses</b>, <b>no plurals</b>, and <b>no articles</b> ever change a word. <i>saya</i> = I, <i>kamu</i> = you, <i>dia</i> = he/she — one word does the work of the past, present and future. Time comes from context words like <i>besok</i> (tomorrow) and <i>sudah</i> (already). Word order is subject-verb-object, exactly like English: <i>saya mau kopi</i> = I want coffee. To make a question, just add <i>apakah</i> at the start.</p>',
  bridges: '<div class="note">🇬🇧 <b>English.</b> Indonesian borrows plenty of words you already know: kopi (coffee), hotel, taxi, televisi, internet, kupon.</div><div class="note">🇲🇾 <b>Malay.</b> Bahasa Indonesia and Bahasa Malaysia are close cousins — learn one and the other is largely readable. (In Indonesian, <b>bahasa</b> literally means \'language\'.)</div>',
  lessons: [
    { id:1, title:'Greetings', focus:'halo · selamat pagi · selamat malam · apa kabar',
      steps:[
        {t:'say',text:'We\'ll start with the word you\'ll use most: <span class="inline-tr">halo</span> — hello (and hi). Say it out loud.',tr:'halo'},
        {t:'words',items:[{tr:'halo',pr:'HAH-loh',en:'hello / hi',link:'≈ English hello'},{tr:'selamat pagi',pr:'suh-LAH-maht PAH-gee',en:'good morning'},{tr:'selamat malam',pr:'suh-LAH-maht MAH-lahm',en:'good evening / night'},{tr:'selamat tinggal',pr:'suh-LAH-maht TING-gahl',en:'goodbye'}]},
        {t:'chal',en:'Hello',tr:'Halo',pr:'HAH-loh',morph:['halo = hello']},
        {t:'say',text:'To ask how someone is: <span class="inline-tr">Apa kabar?</span> The reply is <span class="inline-tr">baik, terima kasih</span> — well, thanks.',tr:'Apa kabar?'},
        {t:'words',items:[{tr:'Apa kabar?',pr:'AH-pah KAH-bahr',en:'How are you?'},{tr:'Baik, terima kasih',pr:'bah-EEK, tuh-REE-mah KAH-seeh',en:'Well, thanks'},{tr:'Baik-baik saja',pr:'bah-EEK bah-EEK SAH-jah',en:'Just fine'}]},
        {t:'chal',en:'Hello, how are you?',tr:'Halo, apa kabar?',pr:'HAH-loh, AH-pah KAH-bahr',morph:['halo = hello','apa kabar? = how are you?']}
      ],
      blocks:['<code>halo</code> = hello','<code>selamat pagi</code> = good morning','<code>selamat malam</code> = good evening','<code>apa kabar?</code> = how are you?'] },
    { id:2, title:'Being polite', focus:'terima kasih · tolong · maaf · sama-sama',
      steps:[
        {t:'say',text:'The most important words for any trip: <span class="inline-tr">terima kasih</span> — thank you.',tr:'terima kasih'},
        {t:'words',items:[{tr:'terima kasih',pr:'tuh-REE-mah KAH-seeh',en:'thank you'},{tr:'terima kasih banyak',pr:'tuh-REE-mah KAH-seeh BAH-nyahk',en:'thanks a lot'},{tr:'sama-sama',pr:'SAH-mah SAH-mah',en:'you\'re welcome'},{tr:'tolong',pr:'TOH-long',en:'please / help'},{tr:'maaf',pr:'MAH-ahf',en:'sorry / excuse me'}]},
        {t:'chal',en:'Thank you',tr:'Terima kasih',pr:'tuh-REE-mah KAH-seeh',morph:['terima kasih = thank you']},
        {t:'say',text:'<span class="inline-tr">Tolong</span> means please, but it also means help — shout <span class="inline-tr">Tolong!</span> if you need a hand.',tr:'tolong'},
        {t:'words',items:[{tr:'ya',pr:'yah',en:'yes'},{tr:'tidak',pr:'tee-DAHK',en:'no / not'}]},
        {t:'chal',en:'Please help me',tr:'Tolong bantu saya',pr:'TOH-long BAHN-too SAH-yah',morph:['tolong = please / help','bantu = help','saya = me']}
      ],
      blocks:['<code>terima kasih</code> = thank you','<code>sama-sama</code> = you\'re welcome','<code>tolong</code> = please / help','<code>maaf</code> = sorry'] },
    { id:3, title:'Numbers 1–10', focus:'satu · dua · tiga · sepuluh · berapa',
      steps:[
        {t:'say',text:'Numbers are the fastest win. Listen and repeat: <span class="inline-tr">satu, dua, tiga</span>.',tr:'satu'},
        {t:'words',items:[{tr:'satu',pr:'SAH-too',en:'1'},{tr:'dua',pr:'DOO-ah',en:'2'},{tr:'tiga',pr:'TEE-gah',en:'3'},{tr:'empat',pr:'uhm-PAHT',en:'4'},{tr:'lima',pr:'LEE-mah',en:'5'},{tr:'sepuluh',pr:'suh-POO-looh',en:'10'}]},
        {t:'chal',en:'Two coffees, please',tr:'Dua kopi, tolong',pr:'DOO-ah KOH-pee, TOH-long',morph:['dua = two','kopi = coffee','tolong = please']},
        {t:'say',text:'To ask a price: <span class="inline-tr">Berapa?</span> — how much? It\'s the key word for shopping.',tr:'Berapa?'},
        {t:'chal',en:'How much is it?',tr:'Berapa harganya?',pr:'buh-RAH-pah hahr-GAH-nyah',morph:['berapa = how much','harganya = its price']},
        {t:'chal',en:'It\'s five thousand rupiah',tr:'Lima ribu rupiah',pr:'LEE-mah REE-boo roo-PEE-ah',morph:['lima = five','ribu = thousand','rupiah = rupiah']}
      ],
      blocks:['satu, dua, tiga, empat, lima = 1–5','<code>sepuluh</code> = 10','<code>berapa harganya?</code> = how much is it?'] },
    { id:4, title:'"I want" — mau', focus:'saya mau · mau · kopi · air',
      steps:[
        {t:'say',text:'The magic phrase to order anything: <span class="inline-tr">saya mau</span> — I want.',tr:'saya mau'},
        {t:'say',text:'<span class="inline-tr">Mau</span> on its own means "want". No endings, no tense changes — it never changes.',tr:'mau'},
        {t:'chal',en:'I want a coffee',tr:'Saya mau kopi',pr:'SAH-yah mow KOH-pee',morph:['saya = I','mau = want','kopi = coffee'],link:'≈ English coffee'},
        {t:'words',items:[{tr:'kopi',pr:'KOH-pee',en:'coffee',link:'≈ English coffee'},{tr:'air',pr:'AH-eer',en:'water'},{tr:'nasi',pr:'NAH-see',en:'rice'},{tr:'teh',pr:'teh',en:'tea',link:'≈ English tea'}]},
        {t:'chal',en:'I want water',tr:'Saya mau air',pr:'SAH-yah mow AH-eer',morph:['saya = I','mau = want','air = water']}
      ],
      blocks:['<code>saya</code> = I','<code>mau</code> = want','<code>saya mau</code> = I want'] },
    { id:5, title:'Food & drink', focus:'makan · minum · nasi · ayam',
      steps:[
        {t:'say',text:'Eating out? Key words: <span class="inline-tr">makan</span> (eat), <span class="inline-tr">minum</span> (drink).',tr:'makan'},
        {t:'words',items:[{tr:'makan',pr:'MAH-kahn',en:'eat / food'},{tr:'minum',pr:'MEE-noom',en:'drink'},{tr:'nasi',pr:'NAH-see',en:'rice'},{tr:'ayam',pr:'AH-yahm',en:'chicken'},{tr:'air',pr:'AH-eer',en:'water'}]},
        {t:'chal',en:'I want to eat',tr:'Saya mau makan',pr:'SAH-yah mow MAH-kahn',morph:['saya = I','mau = want','makan = eat']},
        {t:'chal',en:'I want to drink water',tr:'Saya mau minum air',pr:'SAH-yah mow MEE-noom AH-eer',morph:['saya = I','mau = want','minum = drink','air = water']},
        {t:'say',text:'<span class="inline-tr">Enak!</span> = delicious. Say it and the cook will love you.',tr:'Enak!'},
        {t:'chal',en:'It\'s delicious!',tr:'Enak!',pr:'uh-NAHK',morph:['enak = delicious']}
      ],
      blocks:['<code>makan</code> / <code>minum</code> = eat / drink','<code>nasi</code> = rice','<code>enak!</code> = delicious'] },
    { id:6, title:'Getting around', focus:'di mana · kiri · kanan · lurus',
      steps:[
        {t:'say',text:'The most useful question anywhere: <span class="inline-tr">Di mana…?</span> — where is…?',tr:'Di mana?'},
        {t:'words',items:[{tr:'Di mana...?',pr:'dee MAH-nah',en:'Where is...?'},{tr:'kiri',pr:'KEE-ree',en:'left'},{tr:'kanan',pr:'KAH-nahn',en:'right'},{tr:'lurus',pr:'LOO-roos',en:'straight ahead'},{tr:'stasiun',pr:'stah-see-OON',en:'station',link:'≈ English station'}]},
        {t:'chal',en:'Where is the station?',tr:'Di mana stasiun?',pr:'dee MAH-nah stah-see-OON',morph:['di mana = where','stasiun = station'],link:'≈ English station'},
        {t:'say',text:'<span class="inline-tr">Belok kiri</span> = turn left, <span class="inline-tr">belok kanan</span> = turn right.',tr:'belok kanan'},
        {t:'chal',en:'Turn left',tr:'Belok kiri',pr:'buh-LOHK KEE-ree',morph:['belok = turn','kiri = left']}
      ],
      blocks:['<code>di mana…?</code> = where is…?','<code>kiri</code> / <code>kanan</code> = left / right','<code>lurus</code> = straight ahead'] },
    { id:7, title:'Questions & "do you have…?"', focus:'ada · apakah ada · kamar',
      steps:[
        {t:'say',text:'<span class="inline-tr">Ada</span> means "there is / have". Add a question word: <span class="inline-tr">Apakah ada…?</span> = is there…? / do you have…?',tr:'ada'},
        {t:'say',text:'<span class="inline-tr">Apakah</span> turns any statement into a yes/no question. <i>Apakah ada kamar?</i> = is there a room?',tr:'Apakah'},
        {t:'chal',en:'Is there water?',tr:'Apakah ada air?',pr:'ah-PAH-kah AH-dah AH-eer',morph:['apakah = question word','ada = there is','air = water']},
        {t:'words',items:[{tr:'kamar',pr:'KAH-mahr',en:'room'},{tr:'makanan',pr:'mah-KAH-nahn',en:'food'},{tr:'minuman',pr:'mee-NOO-mahn',en:'drinks'},{tr:'tidak ada',pr:'tee-DAHK AH-dah',en:'there is not / none'}]},
        {t:'chal',en:'Do you have a room?',tr:'Apakah ada kamar?',pr:'ah-PAH-kah AH-dah KAH-mahr',morph:['apakah = do (question)','ada = have / there is','kamar = room']}
      ],
      blocks:['<code>ada</code> = there is / have','<code>apakah ada…?</code> = is there…? / do you have…?','<code>tidak ada</code> = there isn\'t'] },
    { id:8, title:'Family & people', focus:'keluarga · ayah · ibu · teman',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">keluarga</span> (family), <span class="inline-tr">ayah</span> (father), <span class="inline-tr">ibu</span> (mother).',tr:'keluarga'},
        {t:'words',items:[{tr:'keluarga',pr:'kuh-loo-AHR-gah',en:'family'},{tr:'ayah',pr:'AH-yah',en:'father'},{tr:'ibu',pr:'EE-boo',en:'mother'},{tr:'anak',pr:'AH-nahk',en:'child'},{tr:'teman',pr:'tuh-MAHN',en:'friend'}]},
        {t:'chal',en:'I have a friend',tr:'Saya punya teman',pr:'SAH-yah POO-nyah tuh-MAHN',morph:['saya = I','punya = have / own','teman = friend']},
        {t:'say',text:'<span class="inline-tr">Punya</span> = have / own. <i>Saya punya</i> = I have.',tr:'punya'},
        {t:'chal',en:'This is my mother',tr:'Ini ibu saya',pr:'EE-nee EE-boo SAH-yah',morph:['ini = this','ibu = mother','saya = my']}
      ],
      blocks:['<code>ayah</code> / <code>ibu</code> = father / mother','<code>teman</code> = friend','<code>saya punya</code> = I have'] },
    { id:9, title:'Time, days & weather', focus:'hari ini · besok · kemarin · cuaca',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">hari ini</span>, tomorrow is <span class="inline-tr">besok</span>, yesterday is <span class="inline-tr">kemarin</span>.',tr:'hari ini'},
        {t:'words',items:[{tr:'hari ini',pr:'HAH-ree EE-nee',en:'today'},{tr:'besok',pr:'buh-SOHK',en:'tomorrow'},{tr:'kemarin',pr:'kuh-MAH-reen',en:'yesterday'},{tr:'hari',pr:'HAH-ree',en:'day'},{tr:'cuaca',pr:'choo-AH-chah',en:'weather'},{tr:'hujan',pr:'HOO-jahn',en:'rain'}]},
        {t:'chal',en:'See you tomorrow',tr:'Sampai jumpa besok',pr:'SAHM-pai JOOM-pah buh-SOHK',morph:['sampai jumpa = see you','besok = tomorrow']},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">Bagaimana cuacanya?</span>',tr:'Bagaimana cuacanya?'},
        {t:'chal',en:'It\'s raining',tr:'Hujan',pr:'HOO-jahn',morph:['hujan = rain / it rains']}
      ],
      blocks:['<code>hari ini</code> / <code>besok</code> / <code>kemarin</code> = today / tomorrow / yesterday','<code>cuaca</code> = weather','<code>hujan</code> = rain'] },
    { id:10, title:'Introducing yourself', focus:'nama saya · siapa nama kamu · senang bertemu',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">Nama saya…</span> = my name is…, and <span class="inline-tr">Senang bertemu</span> = pleased to meet you.',tr:'Nama saya'},
        {t:'chal',en:'My name is __NAME__',tr:'Nama saya __NAME__',pr:'NAH-mah SAH-yah __NAME__',morph:['nama = name','saya = my','__NAME__ = your name']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">Siapa nama kamu?</span>',tr:'Siapa nama kamu?'},
        {t:'chal',en:'What\'s your name?',tr:'Siapa nama kamu?',pr:'see-AH-pah NAH-mah KAH-moo',morph:['siapa = who','nama = name','kamu = you']},
        {t:'chal',en:'Pleased to meet you',tr:'Senang bertemu',pr:'suh-NAHNG buhr-TUH-moo',morph:['senang = glad / happy','bertemu = meet']}
      ],
      blocks:['<code>nama saya…</code> = my name is…','<code>siapa nama kamu?</code> = what\'s your name?','<code>senang bertemu</code> = pleased to meet you'] },
    { id:11, title:'Help & health', focus:'tolong! · dokter · sakit · saya tidak mengerti',
      steps:[
        {t:'say',text:'If you need help: <span class="inline-tr">Tolong!</span> (help!), <span class="inline-tr">dokter</span> (doctor), <span class="inline-tr">apotek</span> (pharmacy).',tr:'Tolong!'},
        {t:'words',items:[{tr:'Tolong!',pr:'TOH-long',en:'Help!'},{tr:'dokter',pr:'DOHK-tehr',en:'doctor',link:'≈ English doctor'},{tr:'rumah sakit',pr:'ROO-mah SAH-keet',en:'hospital'},{tr:'apotek',pr:'ah-POH-tehk',en:'pharmacy',link:'≈ Dutch apotheek'},{tr:'sakit',pr:'SAH-keet',en:'sick / painful'}]},
        {t:'chal',en:'I need help',tr:'Saya butuh bantuan',pr:'SAH-yah BOO-tooh bahn-TOO-ahn',morph:['saya = I','butuh = need','bantuan = help / assistance']},
        {t:'say',text:'To say you don\'t understand: <span class="inline-tr">Saya tidak mengerti</span>.',tr:'Saya tidak mengerti'},
        {t:'chal',en:'I don\'t understand',tr:'Saya tidak mengerti',pr:'SAH-yah tee-DAHK muhng-uhr-TEE',morph:['saya = I','tidak = not','mengerti = understand']}
      ],
      blocks:['<code>tolong!</code> = help!','<code>dokter</code> = doctor','<code>saya tidak mengerti</code> = I don\'t understand'] },
    { id:12, title:'Tying it together', focus:'mau · ada · di mana · berapa',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolbox. This capstone uses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello, how are you?',tr:'Halo, apa kabar?',pr:'HAH-loh, AH-pah KAH-bahr',morph:['halo = hello','apa kabar? = how are you?']},
        {t:'chal',en:'I\'d like a coffee, please',tr:'Saya mau kopi, tolong',pr:'SAH-yah mow KOH-pee, TOH-long',morph:['saya mau = I want','kopi = coffee','tolong = please']},
        {t:'chal',en:'Where is the station?',tr:'Di mana stasiun?',pr:'dee MAH-nah stah-see-OON',morph:['di mana = where','stasiun = station']},
        {t:'chal',en:'How much is it?',tr:'Berapa harganya?',pr:'buh-RAH-pah hahr-GAH-nyah',morph:['berapa harganya? = how much is it?']},
        {t:'chal',en:'Delicious! Thank you!',tr:'Enak! Terima kasih!',pr:'uh-NAHK, tuh-REE-mah KAH-seeh',morph:['enak = delicious','terima kasih = thank you']}
      ],
      blocks:['You built: greetings, ordering, directions, prices, thanks — a full day out in Indonesian.'] },
    { id:13, title:'Airport & tickets', focus:'bandara · paspor · tiket · gerbang',
      steps:[
        {t:'say',text:'You have landed. The building is the <span class="inline-tr">bandara</span>. Your document is a <span class="inline-tr">paspor</span>.',tr:'bandara'},
        {t:'words',items:[{tr:'bandara',pr:'bahn-DAH-rah',en:'airport'},{tr:'paspor',pr:'PAS-por',en:'passport'},{tr:'tiket',pr:'TEE-ket',en:'ticket'},{tr:'pesawat',pr:'puh-SAH-waht',en:'flight / plane'},{tr:'gerbang',pr:'guhr-BAHNG',en:'gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'Di mana bandara?',pr:'dee MAH-nah bahn-DAH-rah',morph:['di mana = where','bandara = airport']},
        {t:'chal',en:'Here is my passport',tr:'Ini paspor saya',pr:'EE-nee PAS-por SAH-yah',morph:['ini = this','paspor = passport','saya = my']},
        {t:'chal',en:'A ticket, please',tr:'Satu tiket, tolong',pr:'SAH-too TEE-ket, TOH-long',morph:['satu tiket = one ticket','tolong = please']},
        {t:'chal',en:'Where is the gate?',tr:'Di mana gerbang?',pr:'dee MAH-nah guhr-BAHNG',morph:['di mana = where','gerbang = gate']}
      ],
      blocks:['<code>bandara</code> = airport','<code>paspor</code> = passport','<code>tiket</code> = ticket','<code>gerbang</code> = gate'] },
    { id:14, title:'The taxi', focus:'taksi · mau ke · hotel · berhenti',
      steps:[
        {t:'say',text:'The driver is waiting. <span class="inline-tr">Taksi</span> is taxi. Tell them where to go with <span class="inline-tr">saya mau ke</span>.',tr:'taksi'},
        {t:'words',items:[{tr:'taksi',pr:'TAHK-see',en:'taxi'},{tr:'sopir',pr:'SOH-peer',en:'driver'},{tr:'saya mau ke',pr:'SAH-yah mow kuh',en:'I want to go to'},{tr:'berhenti di sini',pr:'buhr-HEN-tee dee SEE-nee',en:'stop here'}]},
        {t:'chal',en:'Taxi, please',tr:'Taksi, tolong',pr:'TAHK-see, TOH-long',morph:['taksi = taxi','tolong = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'Saya mau ke hotel',pr:'SAH-yah mow kuh ho-TEL',morph:['saya mau ke = I want to go to','hotel = hotel']},
        {t:'chal',en:'Stop here, please',tr:'Berhenti di sini, tolong',pr:'buhr-HEN-tee dee SEE-nee, TOH-long',morph:['berhenti = stop','di sini = here','tolong = please']},
        {t:'chal',en:'How much is it?',tr:'Berapa harganya?',pr:'buh-RAH-pah hahr-GAH-nyah',morph:['berapa = how much','harganya = its price']}
      ],
      blocks:['<code>saya mau ke …</code> = I want to go to …','<code>berhenti di sini</code> = stop here'] },
    { id:15, title:'The hotel', focus:'reservasi · kamar · kunci · malam',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">saya punya reservasi</span> — I have a reservation.',tr:'reservasi'},
        {t:'words',items:[{tr:'hotel',pr:'ho-TEL',en:'hotel'},{tr:'reservasi',pr:'reh-sehr-VAH-see',en:'reservation'},{tr:'kamar',pr:'KAH-mahr',en:'room'},{tr:'kunci',pr:'KOON-chee',en:'key'},{tr:'satu malam',pr:'SAH-too MAH-lahm',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'Saya punya reservasi',pr:'SAH-yah POO-nyah reh-sehr-VAH-see',morph:['saya punya = I have','reservasi = reservation']},
        {t:'chal',en:'A room for one night, please',tr:'Kamar untuk satu malam, tolong',pr:'KAH-mahr OON-took SAH-too MAH-lahm, TOH-long',morph:['kamar = room','untuk satu malam = for one night','tolong = please']},
        {t:'chal',en:'The key, please',tr:'Kuncinya, tolong',pr:'KOON-chee-nyah, TOH-long',morph:['kuncinya = the key','tolong = please']},
        {t:'chal',en:'Where is my room?',tr:'Di mana kamar saya?',pr:'dee MAH-nah KAH-mahr SAH-yah',morph:['di mana = where','kamar saya = my room']}
      ],
      blocks:['<code>reservasi</code> = reservation','<code>kamar</code> = room','<code>kunci</code> = key'] },
    { id:16, title:'Ask for help', focus:'saya tidak mengerti · pelan-pelan · bahasa Inggris',
      steps:[
        {t:'say',text:'When the language is too fast: <span class="inline-tr">Pelan-pelan, tolong</span> — slower, please.',tr:'Pelan-pelan, tolong'},
        {t:'words',items:[{tr:'pelan-pelan',pr:'puh-LAHN puh-LAHN',en:'slower'},{tr:'lagi',pr:'LAH-gee',en:'again'},{tr:'bahasa Inggris',pr:'bah-HAH-sah ING-gris',en:'English'},{tr:'bisa bantu?',pr:'BEE-sah BAHN-too',en:'can you help?'}]},
        {t:'chal',en:'I don\'t understand',tr:'Saya tidak mengerti',pr:'SAH-yah tee-DAHK muhng-uhr-TEE',morph:['saya = I','tidak = not','mengerti = understand']},
        {t:'chal',en:'Slower, please',tr:'Pelan-pelan, tolong',pr:'puh-LAHN puh-LAHN, TOH-long',morph:['pelan-pelan = slower','tolong = please']},
        {t:'chal',en:'Can you help me?',tr:'Bisa bantu saya?',pr:'BEE-sah BAHN-too SAH-yah',morph:['bisa = can','bantu = help','saya = me']},
        {t:'chal',en:'Do you speak English?',tr:'Apakah Anda bisa bahasa Inggris?',pr:'ah-PAH-kah AHN-dah BEE-sah bah-HAH-sah ING-gris',morph:['apakah Anda bisa = can you','bahasa Inggris = English']}
      ],
      blocks:['<code>pelan-pelan</code> = slower','<code>apakah Anda bisa bahasa Inggris?</code> = do you speak English?'] },

  ],
  dialogues: [
    { id:'cafe', title:'☕ At a warung (café)', emoji:'☕', turns:[
      {who:'You',tr:'Selamat pagi! Satu kopi, tolong.',pr:'suh-LAH-maht PAH-gee, SAH-too KOH-pee, TOH-long',en:'Good morning! One coffee, please.'},
      {who:'Seller',tr:'Satu kopi. Mau makan juga?',pr:'SAH-too KOH-pee, mow MAH-kahn JOO-gah',en:'One coffee. Want to eat too?'},
      {who:'You',tr:'Tidak, terima kasih. Ada roti?',pr:'tee-DAHK, tuh-REE-mah KAH-seeh, AH-dah ROH-tee',en:'No, thanks. Do you have bread?'},
      {who:'Seller',tr:'Ada. Itu sepuluh ribu.',pr:'AH-dah, EE-too suh-POO-looh REE-boo',en:'Yes. That\'s ten thousand.'},
      {who:'You',tr:'Terima kasih banyak!',pr:'tuh-REE-mah KAH-seeh BAH-nyahk',en:'Thanks a lot!'}
    ]},
    { id:'transport', title:'🚉 At the station', emoji:'🚉', turns:[
      {who:'You',tr:'Permisi, di mana stasiun?',pr:'puhr-MEE-see, dee MAH-nah stah-see-OON',en:'Excuse me, where is the station?'},
      {who:'Local',tr:'Lurus, lalu belok kanan.',pr:'LOO-roos, LAH-loo buh-LOHK KAH-nahn',en:'Straight, then turn right.'},
      {who:'You',tr:'Terima kasih. Satu tiket ke Jakarta, tolong.',pr:'tuh-REE-mah KAH-seeh, SAH-too tee-KET kuh jah-KAHR-tah, TOH-long',en:'Thanks. One ticket to Jakarta, please.'},
      {who:'Ticket',tr:'Dua puluh ribu rupiah. Kereta jam sembilan.',pr:'DOO-ah POO-looh REE-boo roo-PEE-ah, kuh-REH-tah jahm suhm-BEE-lahn',en:'Twenty thousand rupiah. The train is at nine.'}
    ]},
    { id:'restaurant', title:'🍛 At a restaurant', emoji:'🍛', turns:[
      {who:'Waiter',tr:'Selamat malam! Mau pesan?',pr:'suh-LAH-maht MAH-lahm, mow puh-SAHN',en:'Good evening! Want to order?'},
      {who:'You',tr:'Satu nasi ayam, tolong.',pr:'SAH-too NAH-see AH-yahm, TOH-long',en:'One chicken rice, please.'},
      {who:'Waiter',tr:'Mau minum?',pr:'mow MEE-noom',en:'Want to drink?'},
      {who:'You',tr:'Satu teh panas, terima kasih.',pr:'SAH-too teh PAH-nahs, tuh-REE-mah KAH-seeh',en:'One hot tea, thank you.'},
      {who:'Waiter',tr:'Baik, tunggu sebentar.',pr:'bah-EEK, TOONG-goo suh-BEHN-tahr',en:'OK, wait a moment.'}
    ]},
    { id:'shop', title:'🛍️ Shopping', emoji:'🛍️', turns:[
      {who:'You',tr:'Berapa harganya?',pr:'buh-RAH-pah hahr-GAH-nyah',en:'How much is this?'},
      {who:'Seller',tr:'Lima puluh ribu rupiah.',pr:'LEE-mah POO-looh REE-boo roo-PEE-ah',en:'Fifty thousand rupiah.'},
      {who:'You',tr:'Mahal. Boleh kurang?',pr:'MAH-hahl, BO-leh KOO-rang',en:'Expensive. Can you lower the price?'},
      {who:'Seller',tr:'Baiklah, empat puluh ribu.',pr:'bah-EEK-lah, uhm-PAHT POO-looh REE-boo',en:'Alright, forty thousand.'},
      {who:'You',tr:'Baik, saya beli.',pr:'bah-EEK, SAH-yah buh-LEE',en:'OK, I\'ll take it.'}
    ]}
  ],
  pocket: [
    {tr:'Halo',pr:'HAH-loh',en:'Hello',c:'Greetings'},
    {tr:'Selamat pagi',pr:'suh-LAH-maht PAH-gee',en:'Good morning',c:'Greetings'},
    {tr:'Selamat malam',pr:'suh-LAH-maht MAH-lahm',en:'Good evening',c:'Greetings'},
    {tr:'Apa kabar?',pr:'AH-pah KAH-bahr',en:'How are you?',c:'Greetings'},
    {tr:'Sampai jumpa',pr:'SAHM-pai JOOM-pah',en:'See you',c:'Greetings'},
    {tr:'Terima kasih',pr:'tuh-REE-mah KAH-seeh',en:'Thank you',c:'Courtesy'},
    {tr:'Terima kasih banyak',pr:'tuh-REE-mah KAH-seeh BAH-nyahk',en:'Thanks a lot',c:'Courtesy'},
    {tr:'Sama-sama',pr:'SAH-mah SAH-mah',en:'You\'re welcome',c:'Courtesy'},
    {tr:'Tolong',pr:'TOH-long',en:'Please / help',c:'Courtesy'},
    {tr:'Maaf',pr:'MAH-ahf',en:'Sorry / excuse me',c:'Courtesy'},
    {tr:'Ya',pr:'yah',en:'Yes',c:'Courtesy'},
    {tr:'Tidak',pr:'tee-DAHK',en:'No',c:'Courtesy'},
    {tr:'Satu',pr:'SAH-too',en:'1',c:'Numbers'},
    {tr:'Dua',pr:'DOO-ah',en:'2',c:'Numbers'},
    {tr:'Tiga',pr:'TEE-gah',en:'3',c:'Numbers'},
    {tr:'Makan',pr:'MAH-kahn',en:'eat / food',c:'Food'},
    {tr:'Minum',pr:'MEE-noom',en:'drink',c:'Food'},
    {tr:'Nasi',pr:'NAH-see',en:'rice',c:'Food'},
    {tr:'Air',pr:'AH-eer',en:'water',c:'Food'},
    {tr:'Kopi',pr:'KOH-pee',en:'coffee',c:'Food'},
    {tr:'Di mana...?',pr:'dee MAH-nah',en:'Where is...?',c:'Directions'},
    {tr:'Kiri',pr:'KEE-ree',en:'left',c:'Directions'},
    {tr:'Kanan',pr:'KAH-nahn',en:'right',c:'Directions'},
    {tr:'Lurus',pr:'LOO-roos',en:'straight ahead',c:'Directions'},
    {tr:'Stasiun',pr:'stah-see-OON',en:'station',c:'Directions'},
    {tr:'Berapa harganya?',pr:'buh-RAH-pah hahr-GAH-nyah',en:'How much is it?',c:'Shopping'},
    {tr:'Mahal',pr:'MAH-hahl',en:'expensive',c:'Shopping'},
    {tr:'Saya beli',pr:'SAH-yah buh-LEE',en:'I\'ll take it',c:'Shopping'},
    {tr:'Tolong!',pr:'TOH-long',en:'Help!',c:'Emergency'},
    {tr:'Sakit',pr:'SAH-keet',en:'sick',c:'Emergency'},
    {tr:'Dokter',pr:'DOHK-tehr',en:'doctor',c:'Emergency'},
    {tr:'Saya tidak mengerti',pr:'SAH-yah tee-DAHK muhng-uhr-TEE',en:'I don\'t understand',c:'Emergency'},
    {tr:'Hari ini',pr:'HAH-ree EE-nee',en:'today',c:'Time'},
    {tr:'Besok',pr:'buh-SOHK',en:'tomorrow',c:'Time'},
    {tr:'Kemarin',pr:'kuh-MAH-reen',en:'yesterday',c:'Time'},
    {tr:'Cuaca',pr:'choo-AH-chah',en:'weather',c:'Time'},
    {tr:'Bandara',pr:'bahn-DAH-rah',en:'airport',c:'Travel'},
    {tr:'Paspor',pr:'PAS-por',en:'passport',c:'Travel'},
    {tr:'Taksi, tolong',pr:'TAHK-see, TOH-long',en:'Taxi, please',c:'Travel'},
    {tr:'Saya punya reservasi',pr:'SAH-yah POO-nyah reh-sehr-VAH-see',en:'I have a reservation',c:'Travel'},
    {tr:'Pelan-pelan, tolong',pr:'puh-LAHN puh-LAHN, TOH-long',en:'Slower, please',c:'Travel'},
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Shopping','Emergency','Time', 'Travel'],
  culture: [
    {icon:'☕',title:'Coffee is a daily ritual',body:'A kopi tubruk (a strong, unfiltered black coffee) is part of everyday life — often from a humble roadside warung where you sit, sip, and chat. Coffee is served sweet and strong; asking for \'kopi susu\' gets you coffee with milk.'},
    {icon:'🛵',title:'Traffic and the ojek',body:'Motorbike taxis (ojek) weave through traffic in most cities, and apps like Gojek and Grab make ordering one easy. On long rides, drivers are as friendly as they are fast.'},
    {icon:'🙏',title:'Respectful words for people',body:'Address older men as \'Pak\' (Sir) and older women as \'Bu\' (Ma\'am) — it\'s a simple sign of respect. A light touch when handing someone something shows good manners.'},
    {icon:'🍚',title:'Rice is the center of a meal',body:'Nasi (rice) is the anchor of almost every plate, in dishes like nasi goreng (fried rice) and nasi ayam (chicken rice). Many people eat with their right hand, using the fingertips to gently mix the food.'},
    {icon:'😊',title:'Smiling softens everything',body:'Indonesian culture values friendliness and a gentle tone. A warm smile and a polite \'maaf\' (sorry) go a very long way — and a direct \'no\' is often softened, so watch for a polite hesitation.'},
    {icon:'🗣️',title:'A little goes a long way',body:'A cheerful \'selamat pagi\' and \'terima kasih\' open every door. Indonesians light up when visitors try the language — effort matters far more than perfection.'}
  ],
  sounds: [
    {l:'c',say:'always "ch" as in church',ex:'cinta = CHIN-tah · cari = CHAH-ree',voice:'cinta'},
    {l:'j',say:'always "j" as in jam (never a "y")',ex:'jalan = JAH-lan',voice:'jalan'},
    {l:'ng',say:'"ng" as in sing — never a hard "g"',ex:'makan = MAH-kahn · tinggal = TING-gahl',voice:'makan'},
    {l:'ny',say:'"ny" as in canyon',ex:'banyak = BAH-nyahk',voice:'banyak'},
    {l:'e',say:'often a relaxed "uh" (schwa); sometimes "eh"',ex:'empat = uhm-PAHT · enak = uh-NAHK',voice:'empat'},
    {l:'r',say:'a light tapped r, closer to Spanish',ex:'rusa = ROO-sah',voice:'rusa'},
    {l:'h',say:'always sounded — even at the start of a word',ex:'hari = HAH-ree',voice:'hari'}
  ],
  resources: [
    {icon:'🗣️',t:'Easy Indonesian',d:'Real street interviews with native speakers and subtitles — natural Indonesian you actually hear.',q:'Easy Indonesian street interviews'},
    {icon:'📚',t:'IndonesianPod101',d:'Structured beginner video and audio lessons that build up from absolute zero.',q:'IndonesianPod101 beginner'},
    {icon:'🐢',t:'Learn Indonesian',d:'Slow, clear lessons with detailed breakdowns of everyday phrases.',q:'Learn Indonesian for beginners'},
    {icon:'🎧',t:'Slow Indonesian audio',d:'Easy listening to build your ear — perfect for a walk or commute.',q:'slow Indonesian audio for beginners'}
  ]
};
