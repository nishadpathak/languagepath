/* ---- malay ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["malay"] = {
  name: 'Malay',
  flag: '🇲🇾',
  tts: 'ms-MY',
  dir: 'ltr',
  native: 'Bahasa Melayu',
  script: 'Latin',
  soundTitle: 'Malay sounds & spelling',
  soundIntro: 'Malay is beautifully phonetic — each letter has one sound and almost everything is said the way it is written. Master these and you can read any word aloud.',
  grammar: '<p>Malay is one of the friendliest languages to learn. There is <b>no verb conjugation</b> and <b>no gender</b>: <i>saya mahu</i> means "I want" and "I wanted" — context tells you the time. Word order is simple (subject + verb + object): <i>saya mahu nasi</i> = I want rice. Nouns have no singular/plural change — add <b>banyak</b> (many) to mean a lot. To ask a question, start with a question word like <b>apa</b> (what), <b>di mana</b> (where), <b>bila</b> (when), or use <b>Ada…?</b> for "is there / do you have". <b>tidak/tak</b> = no (with verbs), <b>bukan</b> = not (with nouns). Possession is simple: put the thing first, then the owner — <i>nama saya</i> = my name, <i>rumah saya</i> = my house.</p>',
  bridges: '<div class="note">🇮🇩 <b>Indonesian.</b> Bahasa Melayu and Bahasa Indonesia are essentially the same language — learn Malay and you can read menus and be understood across Malaysia, Indonesia, Brunei and Singapore. Most everyday words are identical.</div><div class="note">🌍 <b>English & Arabic.</b> Malay borrows heavily: <i>bas, tiket, telefon, hospital</i> come straight from English, while <i>selamat, khabar, masjid, syukur</i> come from Arabic. You already recognise more than you think.</div>',
  lessons: [
    { id:1, title:'Greetings & being polite', focus:'selamat pagi · hai · apa khabar',
      steps:[
        {t:'say',text:'Start with your first greeting: <span class="inline-tr">selamat pagi</span> — good morning. Say it out loud. <b>Selamat</b> works like "safe/peace" and appears in almost every greeting.',tr:'selamat pagi'},
        {t:'words',items:[{tr:'Selamat pagi',pr:'suh-LAH-maht PAH-gee',en:'good morning',link:'selamat ≈ Arabic "salam" (peace)'},{tr:'Selamat petang',pr:'suh-LAH-maht puh-TAHNG',en:'good afternoon / evening'},{tr:'Selamat malam',pr:'suh-LAH-maht MAH-lahm',en:'good night'},{tr:'Hai',pr:'hai',en:'hello'},{tr:'Selamat tinggal',pr:'suh-LAH-maht TING-gahl',en:'goodbye'}]},
        {t:'chal',en:'Hello',tr:'Hai',pr:'hai',morph:['hai = hello']},
        {t:'say',text:'To ask how someone is: <span class="inline-tr">Apa khabar?</span> — literally "what news?". Reply <span class="inline-tr">khabar baik</span> — I\'m fine.',tr:'Apa khabar?'},
        {t:'words',items:[{tr:'Apa khabar?',pr:'AH-pah KAH-bar',en:'How are you?',link:'khabar ≈ Arabic "khabar" (news)'},{tr:'Khabar baik',pr:'KAH-bar bah-EEK',en:'I\'m fine'}]},
        {t:'chal',en:'Hello, how are you?',tr:'Hai, apa khabar?',pr:'hai, AH-pah KAH-bar',morph:['hai = hello','apa khabar = how are you?']}
      ],
      blocks:['<code>selamat pagi</code> = good morning','<code>apa khabar?</code> = how are you? · <code>khabar baik</code> = I\'m fine','<code>selamat tinggal</code> = goodbye'] },
    { id:2, title:'Being polite', focus:'terima kasih · tolong · sama-sama · maaf',
      steps:[
        {t:'say',text:'The two words that open every door: <span class="inline-tr">terima kasih</span> (thank you) and <span class="inline-tr">tolong</span> (please / help).',tr:'terima kasih'},
        {t:'words',items:[{tr:'Terima kasih',pr:'tuh-REE-mah KAH-seh',en:'thank you'},{tr:'Sama-sama',pr:'SAH-mah SAH-mah',en:'you\'re welcome'},{tr:'Tolong',pr:'TOH-long',en:'please / help'},{tr:'Maaf',pr:'MAH-af',en:'sorry / excuse me'},{tr:'Ya',pr:'yah',en:'yes'},{tr:'Tidak',pr:'TEE-dak',en:'no'}]},
        {t:'chal',en:'Thank you',tr:'Terima kasih',pr:'tuh-REE-mah KAH-seh',morph:['terima kasih = thank you']},
        {t:'say',text:'Reply to a thank-you with <span class="inline-tr">sama-sama</span> — you\'re welcome. And <span class="inline-tr">maaf</span> gets you out of any small mistake.',tr:'sama-sama'},
        {t:'chal',en:'Please help',tr:'Tolong',pr:'TOH-long',morph:['tolong = please / help']},
        {t:'chal',en:'Thank you very much',tr:'Terima kasih banyak',pr:'tuh-REE-mah KAH-seh bah-NYAHK',morph:['terima kasih = thank you','banyak = many / a lot']}
      ],
      blocks:['<code>terima kasih</code> = thank you','<code>sama-sama</code> = you\'re welcome','<code>tolong</code> = please / help · <code>maaf</code> = sorry'] },
    { id:3, title:'Numbers 1–10', focus:'satu · dua · tiga · sepuluh',
      steps:[
        {t:'say',text:'Numbers are the fastest win. Listen and repeat: <span class="inline-tr">satu, dua, tiga</span>.',tr:'satu'},
        {t:'words',items:[{tr:'satu',pr:'SAH-too',en:'1'},{tr:'dua',pr:'DOO-ah',en:'2'},{tr:'tiga',pr:'TEE-gah',en:'3'},{tr:'empat',pr:'ehm-PAHT',en:'4'},{tr:'lima',pr:'LEE-mah',en:'5'},{tr:'enam',pr:'uh-NAHM',en:'6'},{tr:'tujuh',pr:'TOO-joo',en:'7'},{tr:'lapan',pr:'LAH-pahn',en:'8'},{tr:'sembilan',pr:'suhm-BEE-lahn',en:'9'},{tr:'sepuluh',pr:'suh-POO-looh',en:'10'}]},
        {t:'chal',en:'Two, please',tr:'Dua, tolong',pr:'DOO-ah, TOH-long',morph:['dua = two','tolong = please']},
        {t:'say',text:'To ask a price or amount: <span class="inline-tr">berapa…?</span> (how much / how many). Put <span class="inline-tr">harga</span> (price) after it for prices.',tr:'berapa?'},
        {t:'chal',en:'How much is it?',tr:'Berapa harganya?',pr:'buh-RAH-pah HAR-gah-nyah',morph:['berapa = how much','harganya = its price']},
        {t:'chal',en:'It\'s five',tr:'Lima',pr:'LEE-mah',morph:['lima = five']}
      ],
      blocks:['satu, dua, tiga, empat, lima = 1–5','<code>berapa harganya?</code> = how much is it?','<code>sepuluh</code> = 10'] },
    { id:4, title:'"I want" — saya mahu', focus:'saya · mahu · nak',
      steps:[
        {t:'say',text:'The magic word for ordering anything: <span class="inline-tr">mahu</span> — to want. Say <span class="inline-tr">saya mahu</span> = I want.',tr:'saya mahu'},
        {t:'say',text:'<span class="inline-tr">saya</span> = I / me. It is the polite, safest word for yourself.',tr:'saya'},
        {t:'chal',en:'I want water',tr:'Saya mahu air',pr:'SAH-yah MAH-hoo AH-eer',morph:['saya = I','mahu = want','air = water']},
        {t:'say',text:'In everyday speech people say <span class="inline-tr">saya nak</span> — same meaning, more casual.',tr:'saya nak'},
        {t:'chal',en:'I want tea',tr:'Saya mahu teh',pr:'SAH-yah MAH-hoo teh',morph:['saya = I','mahu = want','teh = tea']},
        {t:'chal',en:'I want fried rice',tr:'Saya mahu nasi goreng',pr:'SAH-yah MAH-hoo NAH-see GOH-reng',morph:['saya mahu = I want','nasi = rice','goreng = fried']}
      ],
      blocks:['<code>saya</code> = I / me','<code>mahu</code> = want · <code>saya mahu…</code> = I want…','<code>saya nak…</code> = I want… (casual)'] },
    { id:5, title:'Food & drink', focus:'nasi · air · teh tarik · roti canai · sedap',
      steps:[
        {t:'say',text:'Eating out? <span class="inline-tr">nasi</span> (rice) is the heart of every meal, and <span class="inline-tr">air</span> (water) is always close by.',tr:'nasi'},
        {t:'words',items:[{tr:'nasi',pr:'NAH-see',en:'rice'},{tr:'air',pr:'AH-eer',en:'water'},{tr:'teh tarik',pr:'teh TAH-reek',en:'pulled tea'},{tr:'roti canai',pr:'ROH-tee CHAH-nai',en:'flatbread'},{tr:'ayam',pr:'AH-yahm',en:'chicken'},{tr:'sedap',pr:'suh-DAHP',en:'delicious'}]},
        {t:'chal',en:'I want chicken rice',tr:'Saya mahu nasi ayam',pr:'SAH-yah MAH-hoo NAH-see AH-yahm',morph:['saya mahu = I want','nasi = rice','ayam = chicken']},
        {t:'say',text:'<span class="inline-tr">teh tarik</span> is Malaysia\'s famous "pulled" milk tea. Order one with <span class="inline-tr">roti canai</span>.',tr:'teh tarik'},
        {t:'chal',en:'Teh tarik, please',tr:'Teh tarik, tolong',pr:'teh TAH-reek, TOH-long',morph:['teh tarik = pulled tea','tolong = please']},
        {t:'chal',en:'It\'s delicious!',tr:'Sedap!',pr:'suh-DAHP',morph:['sedap = delicious']}
      ],
      blocks:['<code>nasi</code>, <code>air</code>, <code>ayam</code> = rice, water, chicken','<code>teh tarik</code> = pulled tea · <code>roti canai</code> = flatbread','<code>sedap</code> = delicious'] },
    { id:6, title:'Getting around', focus:'di mana · kiri · kanan · lurus',
      steps:[
        {t:'say',text:'The most useful question anywhere: <span class="inline-tr">Di mana…?</span> — where is…?',tr:'di mana?'},
        {t:'words',items:[{tr:'Di mana...?',pr:'dee MAH-nah',en:'Where is...?'},{tr:'kiri',pr:'KEE-ree',en:'left'},{tr:'kanan',pr:'KAH-nahn',en:'right'},{tr:'lurus',pr:'LOO-roos',en:'straight ahead'},{tr:'stesen',pr:'STAY-sen',en:'station',link:'≈ English "station"'},{tr:'pasar',pr:'PAH-sar',en:'market',link:'≈ English "bazaar" (from Persian)'}]},
        {t:'chal',en:'Where is the station?',tr:'Di mana stesen?',pr:'dee MAH-nah STAY-sen',morph:['di mana = where is','stesen = the station'],link:'stesen ≈ English "station"'},
        {t:'say',text:'<span class="inline-tr">kiri</span> = left, <span class="inline-tr">kanan</span> = right, <span class="inline-tr">lurus</span> = straight ahead. To say "turn left": <span class="inline-tr">belok kiri</span>.',tr:'belok kiri'},
        {t:'chal',en:'Where is the market?',tr:'Di mana pasar?',pr:'dee MAH-nah PAH-sar',morph:['di mana = where is','pasar = the market']},
        {t:'chal',en:'Go straight',tr:'Jalan lurus',pr:'JAH-lahn LOO-roos',morph:['jalan = go / walk','lurus = straight']}
      ],
      blocks:['<code>di mana…?</code> = where is…?','<code>kiri</code> / <code>kanan</code> = left / right','<code>lurus</code> = straight ahead'] },
    { id:7, title:'Questions & "do you have…?"', focus:'ada · apa · bila · berapa',
      steps:[
        {t:'say',text:'To ask if someone has something: <span class="inline-tr">Ada…?</span> — "do you have / is there…?".',tr:'ada'},
        {t:'chal',en:'Do you have a table?',tr:'Ada meja?',pr:'AH-dah MAY-jah',morph:['ada = do you have / is there','meja = a table']},
        {t:'say',text:'Question words are easy: <span class="inline-tr">apa</span> (what), <span class="inline-tr">siapa</span> (who), <span class="inline-tr">bila</span> (when), <span class="inline-tr">mana</span> (where), <span class="inline-tr">berapa</span> (how much).',tr:'apa'},
        {t:'words',items:[{tr:'apa',pr:'AH-pah',en:'what'},{tr:'siapa',pr:'see-AH-pah',en:'who'},{tr:'bila',pr:'BEE-lah',en:'when'},{tr:'di mana',pr:'dee MAH-nah',en:'where'},{tr:'berapa',pr:'buh-RAH-pah',en:'how much / many'}]},
        {t:'chal',en:'What is this?',tr:'Apa ini?',pr:'AH-pah EE-nee',morph:['apa = what','ini = this']},
        {t:'chal',en:'Do you have water?',tr:'Ada air?',pr:'AH-dah AH-eer',morph:['ada = do you have','air = water']}
      ],
      blocks:['<code>ada…?</code> = do you have / is there…?','<code>apa, siapa, bila, mana</code> = what, who, when, where','<code>berapa</code> = how much'] },
    { id:8, title:'Family & people', focus:'keluarga · ibu · ayah · adik · kawan',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">keluarga</span> (family), <span class="inline-tr">ibu</span> (mother), <span class="inline-tr">ayah</span> (father).',tr:'keluarga'},
        {t:'words',items:[{tr:'keluarga',pr:'kuh-LOO-ar-gah',en:'family'},{tr:'ibu',pr:'EE-boo',en:'mother'},{tr:'ayah',pr:'AH-yah',en:'father'},{tr:'adik',pr:'AH-deek',en:'younger sibling'},{tr:'anak',pr:'AH-nahk',en:'child'},{tr:'kawan',pr:'KAH-wahn',en:'friend'}]},
        {t:'chal',en:'This is my family',tr:'Ini keluarga saya',pr:'EE-nee kuh-LOO-ar-gah SAH-yah',morph:['ini = this','keluarga = family','saya = my']},
        {t:'say',text:'<span class="inline-tr">Ini…</span> = this is…, <span class="inline-tr">itu</span> = that. Put the owner last: <span class="inline-tr">kawan saya</span> = my friend.',tr:'ini'},
        {t:'chal',en:'This is my friend',tr:'Ini kawan saya',pr:'EE-nee KAH-wahn SAH-yah',morph:['ini = this','kawan = friend','saya = my']},
        {t:'chal',en:'Do you have children?',tr:'Ada anak?',pr:'AH-dah AH-nahk',morph:['ada = do you have','anak = child / children']}
      ],
      blocks:['<code>ibu</code> / <code>ayah</code> = mother / father','<code>keluarga</code> = family · <code>anak</code> = child','<code>kawan</code> = friend'] },
    { id:9, title:'Time, days & weather', focus:'hari ini · esok · cuaca · hujan · panas',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">hari ini</span>, tomorrow is <span class="inline-tr">esok</span>, yesterday is <span class="inline-tr">semalam</span>.',tr:'hari ini'},
        {t:'words',items:[{tr:'hari ini',pr:'HAH-ree EE-nee',en:'today'},{tr:'esok',pr:'eh-SOHK',en:'tomorrow'},{tr:'semalam',pr:'suh-MAH-lahm',en:'yesterday'},{tr:'Isnin',pr:'EES-neen',en:'Monday'},{tr:'Ahad',pr:'AH-had',en:'Sunday'},{tr:'cuaca',pr:'CHOO-ah-chah',en:'weather'}]},
        {t:'chal',en:'See you tomorrow',tr:'Jumpa esok',pr:'JOOM-pah eh-SOHK',morph:['jumpa = meet / see','esok = tomorrow']},
        {t:'say',text:'Ask about the weather with <span class="inline-tr">cuaca</span>. It is hot = <span class="inline-tr">panas</span>, it is raining = <span class="inline-tr">hujan</span>, cold = <span class="inline-tr">sejuk</span>.',tr:'cuaca'},
        {t:'chal',en:'It\'s hot today',tr:'Hari ini panas',pr:'HAH-ree EE-nee PAH-nahs',morph:['hari ini = today','panas = hot']},
        {t:'chal',en:'It\'s raining',tr:'Hujan',pr:'HOO-jahn',morph:['hujan = rain']}
      ],
      blocks:['<code>hari ini</code> / <code>esok</code> / <code>semalam</code> = today / tomorrow / yesterday','<code>cuaca</code> = weather','<code>panas</code> / <code>hujan</code> = hot / rain'] },
    { id:10, title:'Small talk & your name', focus:'nama saya · apa nama · selamat berkenalan',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">Nama saya…</span> — my name is…. <b>Nama</b> = name.',tr:'nama saya __NAME__'},
        {t:'chal',en:'My name is __NAME__',tr:'Nama saya __NAME__',pr:'NAH-mah SAH-yah __NAME__',morph:['nama = name','saya = my','__NAME__ = your name']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">Apa nama anda?</span>. <b>Anda</b> is the polite word for "you".',tr:'apa nama anda?'},
        {t:'chal',en:'What\'s your name?',tr:'Apa nama anda?',pr:'AH-pah NAH-mah AHN-dah',morph:['apa = what','nama = name','anda = you']},
        {t:'say',text:'To say where you come from: <span class="inline-tr">Saya dari…</span> — I\'m from…. And "nice to meet you" is <span class="inline-tr">Selamat berkenalan</span>.',tr:'selamat berkenalan'},
        {t:'chal',en:'I\'m from __COUNTRY__',tr:'Saya dari __COUNTRY__',pr:'SAH-yah DAH-ree __COUNTRY__',morph:['saya = I','dari = from','__COUNTRY__ = your country']},
        {t:'chal',en:'Pleased to meet you',tr:'Selamat berkenalan',pr:'suh-LAH-maht buhr-kuh-NAH-lahn',morph:['selamat = peace / welcome','berkenalan = to get acquainted']}
      ],
      blocks:['<code>nama saya…</code> = my name is…','<code>apa nama anda?</code> = what\'s your name?','<code>selamat berkenalan</code> = pleased to meet you'] },
    { id:11, title:'Emergency & health', focus:'tolong · sakit · doktor · tidak faham',
      steps:[
        {t:'say',text:'The most important word if you need help: <span class="inline-tr">tolong!</span> — help! It is the same word as "please".',tr:'tolong'},
        {t:'words',items:[{tr:'Tolong!',pr:'TOH-long',en:'Help!'},{tr:'sakit',pr:'SAH-keet',en:'sick / pain'},{tr:'doktor',pr:'DOHK-tor',en:'doctor',link:'≈ English "doctor"'},{tr:'hospital',pr:'hos-pee-TAHL',en:'hospital',link:'≈ English "hospital"'},{tr:'polis',pr:'POH-lees',en:'police',link:'≈ English "police"'},{tr:'Saya tidak faham',pr:'SAH-yah TEE-dak FAH-hahm',en:'I don\'t understand'}]},
        {t:'chal',en:'Help!',tr:'Tolong!',pr:'TOH-long',morph:['tolong = help']},
        {t:'chal',en:'I\'m sick',tr:'Saya sakit',pr:'SAH-yah SAH-keet',morph:['saya = I','sakit = sick']},
        {t:'say',text:'If you need a doctor: <span class="inline-tr">Saya perlukan doktor</span>. And <span class="inline-tr">Saya tidak faham</span> means you don\'t understand.',tr:'saya tidak faham'},
        {t:'chal',en:'Where is the hospital?',tr:'Di mana hospital?',pr:'dee MAH-nah hos-pee-TAHL',morph:['di mana = where is','hospital = the hospital']},
        {t:'chal',en:'I need a doctor',tr:'Saya perlukan doktor',pr:'SAH-yah puhr-LOO-kahn DOHK-tor',morph:['saya = I','perlukan = need','doktor = doctor'],link:'doktor ≈ English "doctor"'}
      ],
      blocks:['<code>tolong!</code> = help!','<code>sakit</code> = sick · <code>doktor</code> = doctor','<code>saya tidak faham</code> = I don\'t understand'] },
    { id:12, title:'Tying it together', focus:'a capstone scene — greetings, wants, places',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolbox. This capstone uses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello, how are you?',tr:'Hai, apa khabar?',pr:'hai, AH-pah KAH-bar',morph:['hai = hello','apa khabar = how are you?']},
        {t:'chal',en:'I want chicken rice and water',tr:'Saya mahu nasi ayam dan air',pr:'SAH-yah MAH-hoo NAH-see AH-yahm dahn AH-eer',morph:['saya mahu = I want','nasi ayam = chicken rice','dan = and','air = water']},
        {t:'chal',en:'Where is the station?',tr:'Di mana stesen?',pr:'dee MAH-nah STAY-sen',morph:['di mana = where is','stesen = the station'],link:'stesen ≈ English "station"'},
        {t:'chal',en:'How much is it?',tr:'Berapa harganya?',pr:'buh-RAH-pah HAR-gah-nyah',morph:['berapa = how much','harganya = its price']},
        {t:'chal',en:'Delicious! Thank you!',tr:'Sedap! Terima kasih!',pr:'suh-DAHP, tuh-REE-mah KAH-seh',morph:['sedap = delicious','terima kasih = thank you']}
      ],
      blocks:['You built: greetings, ordering, directions, prices, thanks — a whole day out in Malay.'] },
    { id:13, title:'Airport & tickets', focus:'lapangan terbang · pasport · tiket · pintu',
      steps:[
        {t:'say',text:'You have landed. The building is the <span class="inline-tr">lapangan terbang</span>. Your document is a <span class="inline-tr">pasport</span>.',tr:'lapangan terbang'},
        {t:'words',items:[{tr:'lapangan terbang',pr:'lah-PAHNG-ahn tuhr-BAHNG',en:'airport'},{tr:'pasport',pr:'PAHS-port',en:'passport'},{tr:'tiket',pr:'TEE-keht',en:'ticket'},{tr:'pintu',pr:'PIN-too',en:'gate / door'}]},
        {t:'chal',en:'Where is the airport?',tr:'Di mana lapangan terbang?',pr:'dee MAH-nah lah-PAHNG-ahn tuhr-BAHNG',morph:['di mana = where is','lapangan terbang = airport']},
        {t:'chal',en:'Here is my passport',tr:'Ini pasport saya',pr:'EE-nee PAHS-port SAH-yah',morph:['ini = this','pasport = passport','saya = my']},
        {t:'chal',en:'A ticket, please',tr:'Tiket, tolong',pr:'TEE-keht, TOH-long',morph:['tiket = ticket','tolong = please']},
        {t:'chal',en:'Where is the gate?',tr:'Di mana pintu?',pr:'dee MAH-nah PIN-too',morph:['di mana = where is','pintu = gate']}
      ],
      blocks:['<code>lapangan terbang</code> = airport','<code>pasport</code> = passport','<code>tiket</code> = ticket'] },
    { id:14, title:'The taxi', focus:'teksi · pergi · hotel · berhenti',
      steps:[
        {t:'say',text:'The driver is waiting. <span class="inline-tr">teksi</span> is the everyday word. Tell them <span class="inline-tr">saya mahu pergi ke hotel</span>.',tr:'teksi'},
        {t:'words',items:[{tr:'teksi',pr:'TEK-see',en:'taxi'},{tr:'pemandu',pr:'puh-MAHN-doo',en:'driver'},{tr:'saya mahu pergi',pr:'SAH-yah MAH-hoo puhr-GEE',en:'I want to go'},{tr:'berhenti di sini',pr:'buhr-HUN-tee dee SEE-nee',en:'stop here'}]},
        {t:'chal',en:'Taxi, please',tr:'Teksi, tolong',pr:'TEK-see, TOH-long',morph:['teksi = taxi','tolong = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'Saya mahu pergi ke hotel',pr:'SAH-yah MAH-hoo puhr-GEE kuh ho-TEL',morph:['saya mahu = I want','pergi ke = to go to','hotel = hotel']},
        {t:'chal',en:'Stop here, please',tr:'Berhenti di sini, tolong',pr:'buhr-HUN-tee dee SEE-nee, TOH-long',morph:['berhenti = stop','di sini = here','tolong = please']},
        {t:'chal',en:'How much is it?',tr:'Berapa harganya?',pr:'buh-RAH-pah HAR-gah-nyah',morph:['berapa = how much','harganya = its price']}
      ],
      blocks:['<code>saya mahu pergi ke …</code> = I want to go to …','<code>berhenti di sini</code> = stop here'] },
    { id:15, title:'The hotel', focus:'tempahan · bilik · kunci · malam',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">saya ada tempahan</span> — I have a reservation.',tr:'tempahan'},
        {t:'words',items:[{tr:'hotel',pr:'ho-TEL',en:'hotel'},{tr:'tempahan',pr:'tuhm-PAH-han',en:'reservation'},{tr:'bilik',pr:'BEE-lik',en:'room'},{tr:'kunci',pr:'KOON-chee',en:'key'},{tr:'satu malam',pr:'SAH-too MAH-lahm',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'Saya ada tempahan',pr:'SAH-yah AH-dah tuhm-PAH-han',morph:['saya ada = I have','tempahan = reservation']},
        {t:'chal',en:'A room for one night, please',tr:'Bilik satu malam, tolong',pr:'BEE-lik SAH-too MAH-lahm, TOH-long',morph:['bilik = room','satu malam = one night','tolong = please']},
        {t:'chal',en:'The key, please',tr:'Kunci, tolong',pr:'KOON-chee, TOH-long',morph:['kunci = key','tolong = please']},
        {t:'chal',en:'Where is my room?',tr:'Di mana bilik saya?',pr:'dee MAH-nah BEE-lik SAH-yah',morph:['di mana = where is','bilik saya = my room']}
      ],
      blocks:['<code>tempahan</code> = reservation','<code>bilik</code> = room','<code>kunci</code> = key'] },
    { id:16, title:'Ask for help', focus:'tidak faham · perlahan · Inggeris',
      steps:[
        {t:'say',text:'When Malay is too fast: <span class="inline-tr">tolong cakap perlahan-lahan</span> — please speak slowly.',tr:'perlahan-lahan'},
        {t:'words',items:[{tr:'perlahan-lahan',pr:'puhr-LAH-han LAH-han',en:'slowly'},{tr:'sekali lagi',pr:'suh-KAH-lee LAH-gee',en:'again'},{tr:'bahasa Inggeris',pr:'bah-HAH-sah ing-guh-REES',en:'English'},{tr:'boleh tolong?',pr:'BOH-leh TOH-long',en:'can you help?'}]},
        {t:'chal',en:'I don\'t understand',tr:'Saya tidak faham',pr:'SAH-yah TEE-dak FAH-hahm',morph:['saya = I','tidak = not','faham = understand']},
        {t:'chal',en:'Speak slowly, please',tr:'Tolong cakap perlahan-lahan',pr:'TOH-long CHAH-kahp puhr-LAH-han LAH-han',morph:['tolong = please','cakap = speak','perlahan-lahan = slowly']},
        {t:'chal',en:'Can you help me?',tr:'Boleh tolong saya?',pr:'BOH-leh TOH-long SAH-yah',morph:['boleh = can','tolong = help','saya = me']},
        {t:'chal',en:'Do you speak English?',tr:'Anda cakap bahasa Inggeris?',pr:'AHN-dah CHAH-kahp bah-HAH-sah ing-guh-REES',morph:['anda = you','cakap = speak','bahasa Inggeris = English']}
      ],
      blocks:['<code>perlahan-lahan</code> = slowly','<code>anda cakap bahasa Inggeris?</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'cafe', title:'☕ At a mamak café', emoji:'☕', turns:[
      {who:'You',tr:'Selamat pagi! Satu teh tarik, satu roti canai.',pr:'suh-LAH-maht PAH-gee, SAH-too teh TAH-reek, SAH-too ROH-tee CHAH-nai',en:'Good morning! One pulled tea, one flatbread.'},
      {who:'Waiter',tr:'Makan di sini atau bungkus?',pr:'MAH-kahn dee SEE-nee AH-tow BOONG-koos',en:'Eat here or take away?'},
      {who:'You',tr:'Di sini, terima kasih.',pr:'dee SEE-nee, tuh-REE-mah KAH-seh',en:'Here, thanks.'},
      {who:'Waiter',tr:'Semuanya tiga ringgit.',pr:'suh-MOO-nyah TEE-gah RING-git',en:'All together, three ringgit.'},
      {who:'You',tr:'Sedap! Terima kasih!',pr:'suh-DAHP, tuh-REE-mah KAH-seh',en:'Delicious! Thank you!'}
    ]},
    { id:'transport', title:'🚌 On the bus', emoji:'🚌', turns:[
      {who:'You',tr:'Maaf, di mana stesen bas?',pr:'MAH-af, dee MAH-nah STAY-sen bahs',en:'Excuse me, where is the bus station?'},
      {who:'Local',tr:'Terus dan belok kiri.',pr:'tuh-ROOS dahn buh-LOWK KEE-ree',en:'Go straight, then turn left.'},
      {who:'You',tr:'Berapa harga tiket ke bandar?',pr:'buh-RAH-pah HAR-gah TEE-keht kuh BAHN-dar',en:'How much is a ticket to town?'},
      {who:'Ticket',tr:'Tiga ringgit. Bas ini ke bandar.',pr:'TEE-gah RING-git, bahs EE-nee kuh BAHN-dar',en:'Three ringgit. This bus goes to town.'}
    ]},
    { id:'restaurant', title:'🍚 At a restaurant', emoji:'🍚', turns:[
      {who:'Waiter',tr:'Selamat datang! Meja untuk dua?',pr:'suh-LAH-maht DAH-tang, MAY-jah OON-too DOO-ah',en:'Welcome! A table for two?'},
      {who:'You',tr:'Ya, terima kasih.',pr:'yah, tuh-REE-mah KAH-seh',en:'Yes, thank you.'},
      {who:'You',tr:'Saya mahu nasi ayam dan teh tarik.',pr:'SAH-yah MAH-hoo NAH-see AH-yahm dahn teh TAH-reek',en:'I\'d like chicken rice and pulled tea.'},
      {who:'Waiter',tr:'Baik. Selamat makan!',pr:'bah-EEK, suh-LAH-maht MAH-kahn',en:'OK. Enjoy your meal!'},
      {who:'You',tr:'Terima kasih. Boleh saya minta bil?',pr:'tuh-REE-mah KAH-seh, BOH-leh SAH-yah MIN-tah bil',en:'Thank you. Can I have the bill?'}
    ]},
    { id:'shop', title:'🛍️ At the market (pasar)', emoji:'🛍️', turns:[
      {who:'You',tr:'Selamat petang. Berapa harga ini?',pr:'suh-LAH-maht puh-TAHNG, buh-RAH-pah HAR-gah EE-nee',en:'Good afternoon. How much is this?'},
      {who:'Seller',tr:'Lima ringgit sahaja.',pr:'LEE-mah RING-git sah-HAH-jah',en:'Only five ringgit.'},
      {who:'You',tr:'Boleh kurang sikit?',pr:'BOH-leh KOO-rang SEE-keet',en:'Can you go a bit lower?'},
      {who:'Seller',tr:'Baik, empat ringgit.',pr:'bah-EEK, ehm-PAHT RING-git',en:'OK, four ringgit.'},
      {who:'You',tr:'OK, saya ambil. Terima kasih!',pr:'oh-kay, SAH-yah AHM-beel, tuh-REE-mah KAH-seh',en:'OK, I\'ll take it. Thanks!'}
    ]}
  ],
  pocket: [
    {tr:'Selamat pagi',pr:'suh-LAH-maht PAH-gee',en:'Good morning',c:'Greetings'},
    {tr:'Selamat petang',pr:'suh-LAH-maht puh-TAHNG',en:'Good afternoon',c:'Greetings'},
    {tr:'Apa khabar?',pr:'AH-pah KAH-bar',en:'How are you?',c:'Greetings'},
    {tr:'Khabar baik',pr:'KAH-bar bah-EEK',en:'I\'m fine',c:'Greetings'},
    {tr:'Nama saya __NAME__',pr:'NAH-mah SAH-yah __NAME__',en:'My name is...',c:'Greetings'},
    {tr:'Selamat tinggal',pr:'suh-LAH-maht TING-gahl',en:'Goodbye',c:'Greetings'},
    {tr:'Terima kasih',pr:'tuh-REE-mah KAH-seh',en:'Thank you',c:'Courtesy'},
    {tr:'Sama-sama',pr:'SAH-mah SAH-mah',en:'You\'re welcome',c:'Courtesy'},
    {tr:'Tolong',pr:'TOH-long',en:'Please / help',c:'Courtesy'},
    {tr:'Maaf',pr:'MAH-af',en:'Sorry',c:'Courtesy'},
    {tr:'Ya',pr:'yah',en:'Yes',c:'Courtesy'},
    {tr:'Tidak',pr:'TEE-dak',en:'No',c:'Courtesy'},
    {tr:'Satu',pr:'SAH-too',en:'1',c:'Numbers'},
    {tr:'Dua',pr:'DOO-ah',en:'2',c:'Numbers'},
    {tr:'Tiga',pr:'TEE-gah',en:'3',c:'Numbers'},
    {tr:'Empat',pr:'ehm-PAHT',en:'4',c:'Numbers'},
    {tr:'Lima',pr:'LEE-mah',en:'5',c:'Numbers'},
    {tr:'Sepuluh',pr:'suh-POO-looh',en:'10',c:'Numbers'},
    {tr:'Nasi',pr:'NAH-see',en:'rice',c:'Food'},
    {tr:'Air',pr:'AH-eer',en:'water',c:'Food'},
    {tr:'Teh tarik',pr:'teh TAH-reek',en:'pulled tea',c:'Food'},
    {tr:'Sedap',pr:'suh-DAHP',en:'delicious',c:'Food'},
    {tr:'Di mana...?',pr:'dee MAH-nah',en:'Where is...?',c:'Directions'},
    {tr:'Kiri',pr:'KEE-ree',en:'left',c:'Directions'},
    {tr:'Kanan',pr:'KAH-nahn',en:'right',c:'Directions'},
    {tr:'Lurus',pr:'LOO-roos',en:'straight ahead',c:'Directions'},
    {tr:'Berapa harga ini?',pr:'buh-RAH-pah HAR-gah EE-nee',en:'How much is this?',c:'Shopping'},
    {tr:'Boleh kurang?',pr:'BOH-leh KOO-rang',en:'Can you drop the price?',c:'Shopping'},
    {tr:'Mahal',pr:'MAH-hal',en:'expensive',c:'Shopping'},
    {tr:'Tolong!',pr:'TOH-long',en:'Help!',c:'Emergency'},
    {tr:'Saya sakit',pr:'SAH-yah SAH-keet',en:'I\'m sick',c:'Emergency'},
    {tr:'Doktor',pr:'DOHK-tor',en:'doctor',c:'Emergency'},
    {tr:'Saya tidak faham',pr:'SAH-yah TEE-dak FAH-hahm',en:'I don\'t understand',c:'Emergency'},
    {tr:'Hari ini',pr:'HAH-ree EE-nee',en:'today',c:'Time'},
    {tr:'Esok',pr:'eh-SOHK',en:'tomorrow',c:'Time'},
    {tr:'Semalam',pr:'suh-MAH-lahm',en:'yesterday',c:'Time'},
    {tr:'Lapangan terbang',pr:'lah-PAHNG-ahn tuhr-BAHNG',en:'airport',c:'Travel'},
    {tr:'Pasport',pr:'PAHS-port',en:'passport',c:'Travel'},
    {tr:'Saya mahu pergi ke hotel',pr:'SAH-yah MAH-hoo puhr-GEE kuh ho-TEL',en:'I want to go to the hotel',c:'Travel'},
    {tr:'Saya ada tempahan',pr:'SAH-yah AH-dah tuhm-PAH-han',en:'I have a reservation',c:'Travel'},
    {tr:'Tolong cakap perlahan-lahan',pr:'TOH-long CHAH-kahp puhr-LAH-han LAH-han',en:'Speak slowly, please',c:'Travel'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Shopping','Emergency','Time', 'Travel'],
  culture: [
    {icon:'☕',title:'Teh tarik & the mamak',body:'The mamak is a humble Indian-Muslim eatery, open late into the night. Its star is teh tarik — milk tea "pulled" between two cups for that foam. It\'s the cheapest, warmest way to meet locals.'},
    {icon:'🍚',title:'Rice is every meal',body:'Malay says "belum makan" (not yet eaten) for "are you hungry?" — because eating is the centre of the day. Nasi lemak, coconut rice with sambal, is the beloved national dish.'},
    {icon:'🤝',title:'Selamat greets everything',body:'Selamat means safe/peace, and it wraps almost every greeting: selamat pagi, selamat petang, selamat malam, selamat tinggal (goodbye), selamat makan (enjoy your meal). One word unlocks them all.'},
    {icon:'😊',title:'You, politely',body:'Malay has layers of "you". Saya is the safe, courteous word for "I"; awak is friendly; aku is very casual. Using saya shows respect and is never wrong for a beginner.'},
    {icon:'🗣️',title:'One language, many countries',body:'Bahasa Melayu and Bahasa Indonesia are essentially the same language. Learn Malay here and you can be understood in Malaysia, Indonesia, Brunei and Singapore — a huge return for one language.'},
    {icon:'🕌',title:'Shares faith, shares etiquette',body:'Malaysia is majority Muslim yet deeply multicultural. Take off your shoes in homes and mosques, use your right hand to eat and pass things, and dress modestly at places of worship.'}
  ],
  sounds: [
    {l:'c',say:'always "ch" as in church — never "k"',ex:'cinta = CHIN-tah (love) · Cina = CHEE-nah (China)',voice:'cinta'},
    {l:'j',say:'always "j" as in jam — never "y"',ex:'jalan = JAH-lahn (road) · jangan = JAH-ngahn (don\'t)',voice:'jalan'},
    {l:'ng',say:'one sound, as in "singer" — not n + g',ex:'kampung = kahm-POONG (village) · sangat = SAH-ngaht (very)',voice:'sangat'},
    {l:'ny',say:'like "ny" in canyon — n + y together',ex:'banyak = BAH-nyahk (many) · nyaman = NYAH-mahn (comfortable)',voice:'banyak'},
    {l:'e',say:'a soft "uh" (schwa), like the "e" in "the"',ex:'empat = ehm-PAHT (four) · enam = uh-NAHM (six)',voice:'empat'},
    {l:'r',say:'lightly rolled, like a Spanish or Scottish r',ex:'roti = ROH-tee (bread) · rumah = ROO-mah (house)',voice:'roti'},
    {l:'ai / au',say:'"ai" like "eye" and "au" like "ow"',ex:'pantai = pahn-TAI (beach) · pulau = POO-lau (island)',voice:'pantai'}
  ],
  resources: [
    {icon:'🗣️',t:'Easy Malay street talk',d:'Real everyday chats and street interviews with native speakers, with subtitles.',q:'easy malay street interviews'},
    {icon:'🐢',t:'Slow & easy Malay',d:'Clearly spoken, slowly paced videos built for complete beginners.',q:'slow malay conversation for beginners'},
    {icon:'📚',t:'Bahasa Melayu lessons',d:'Structured beginner lessons covering core vocabulary and simple grammar.',q:'learn malay language for beginners'},
    {icon:'🛒',t:'Travel Malay phrases',d:'Practical phrases for markets, food, and getting around town.',q:'malay phrases for travel'},
    {icon:'🎧',t:'Malay podcasts',d:'Easy listening to build your ear while you walk or commute.',q:'malay podcast for learners'}
  ]
};
