/* ---- azerbaijani ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["azerbaijani"] = {
  name: 'Azerbaijani',
  flag: '🇦🇿',
  tts: 'az-AZ',
  dir: 'ltr',
  native: 'Azərbaycan',
  soundTitle: 'Azerbaijani sounds & spelling',
  soundIntro: 'Azerbaijani is written in the Latin alphabet and is nearly phonetic — every letter is said the same way, all the time. Learn the five special vowels and the throaty letters and you can read any word aloud.',
  grammar: '<p>Azerbaijani is a <b>Turkic</b> language, so the word order is <b>Subject – Object – Verb</b> and all the grammar lives in suffixes that attach to the end of words. There is <b>no gender</b> (no \'he/she/it\') and <b>no articles</b> (no \'a\' or \'the\'). It is written phonetically in the Latin alphabet: <b>mən</b> = \'I\', <b>sən</b> = \'you\'. For polite or formal \'you\', use <b>siz</b>. Adding <b>-dır</b> to a noun means \'is\': <b>ad</b> (name) → <b>Mənim adım __NAME__-dır</b> (my name is __NAME__).</p>',
  bridges: '<div class="note">🇹🇷 <b>Turkish.</b> Azerbaijani is a Turkic language that is very close to Turkish. Many everyday words are basically the same — <i>çay</i> (tea), <i>su</i> (water), <i>ev</i> (house), <i>əl</i> (hand), <i>bir</i> (one), <i>qardaş</i> (brother), <i>ailə</i> (family). If you already know Turkish you\'ll pick this up fast — and if you don\'t, a Turkish speaker will usually understand you.</div><div class="note">🇷🇺 <b>Russian loanwords.</b> From the Soviet era, Azerbaijani borrowed many everyday words into its alphabet: <i>aptek</i> (pharmacy), <i>stansiya</i> (station), <i>metro</i>, <i>kompüter</i> (computer), <i>bank</i>. These show up a lot in the cities.</div>',
  lessons: [
    { id:1, title:'Greetings', focus:'salam · sabahınız xeyir · axşamınız xeyir · necəsən?',
      steps:[
        {t:'say',text:'The word you\'ll use all day — <span class="inline-tr">salam</span> — hello. Say it out loud, and you can greet almost anyone.',tr:'salam'},
        {t:'words',items:[{tr:'salam',pr:'sah-LAM',en:'hello / hi'},{tr:'sabahınız xeyir',pr:'sah-BAH-uh-nuhz khay-EER',en:'good morning'},{tr:'axşamınız xeyir',pr:'akh-SHAH-muh-nuhz khay-EER',en:'good evening'},{tr:'necəsən?',pr:'neh-JAH-sen',en:'how are you?'}]},
        {t:'say',text:'<span class="inline-tr">Sabahınız xeyir</span> = good morning (until about noon). <span class="inline-tr">Axşamınız xeyir</span> = good evening.',tr:'sabahınız xeyir'},
        {t:'chal',en:'Hello! How are you?',tr:'Salam! Necəsən?',pr:'sah-LAM, neh-JAH-sen',morph:['salam = hello','necəsən? = how are you?']},
        {t:'chal',en:'Good morning!',tr:'Sabahınız xeyir!',pr:'sah-BAH-uh-nuhz khay-EER',morph:['sabahınız xeyir = good morning']},
        {t:'say',text:'To answer \'how are you?\', say <span class="inline-tr">Yaxşıyam</span> — I\'m well. Pair it with <span class="inline-tr">sağ olun</span> (thanks).',tr:'Yaxşıyam'},
        {t:'chal',en:'I\'m well, thanks',tr:'Yaxşıyam, sağ olun',pr:'YAKH-shuh-yam, SAH oh-loon',morph:['yaxşıyam = I\'m well','sağ olun = thank you']}
      ],
      blocks:['<code>salam</code> = hello','<code>sabahınız xeyir</code> = good morning','<code>axşamınız xeyir</code> = good evening','<code>necəsən?</code> = how are you?'] },
    { id:2, title:'Being polite', focus:'sağ olun · zəhmət olmasa · bağışlayın · bəli / xeyr',
      steps:[
        {t:'say',text:'The two magic words: <span class="inline-tr">sağ olun</span> (thank you) and <span class="inline-tr">zəhmət olmasa</span> (please).',tr:'sağ olun'},
        {t:'words',items:[{tr:'sağ olun',pr:'SAH oh-loon',en:'thank you (formal)'},{tr:'sağol',pr:'SAH-ohl',en:'thanks (informal)'},{tr:'zəhmət olmasa',pr:'ZAH-mat ol-MA-sa',en:'please'},{tr:'bağışlayın',pr:'bah-UHSH-lah-yuhn',en:'excuse me'},{tr:'bəli',pr:'beh-LEE',en:'yes'},{tr:'xeyr',pr:'khayr',en:'no'}]},
        {t:'chal',en:'Yes, please',tr:'Bəli, zəhmət olmasa',pr:'beh-LEE, ZAH-mat ol-MA-sa',morph:['bəli = yes','zəhmət olmasa = please']},
        {t:'say',text:'<span class="inline-tr">Bağışlayın</span> = excuse me — great for getting someone\'s attention or apologising.',tr:'bağışlayın'},
        {t:'chal',en:'Excuse me, thank you',tr:'Bağışlayın, sağ olun',pr:'bah-UHSH-lah-yuhn, SAH oh-loon',morph:['bağışlayın = excuse me','sağ olun = thank you']},
        {t:'say',text:'When someone hands you something, they\'ll say <span class="inline-tr">buyurun</span> — here you go. It also means \'go ahead\'.',tr:'buyurun'},
        {t:'chal',en:'Here you go, please',tr:'Buyurun, zəhmət olmasa',pr:'boo-yoo-ROON, ZAH-mat ol-MA-sa',morph:['buyurun = here you go / go ahead','zəhmət olmasa = please']}
      ],
      blocks:['<code>sağ olun</code> / <code>sağol</code> = thank you','<code>zəhmət olmasa</code> = please','<code>bağışlayın</code> = excuse me','<code>bəli</code> / <code>xeyr</code> = yes / no'] },
    { id:3, title:'Numbers 1–10', focus:'bir · iki · üç · dörd · beş · on',
      steps:[
        {t:'say',text:'Numbers are the fastest win, and they\'re almost identical to Turkish. Listen and repeat: <span class="inline-tr">bir, iki, üç</span>.',tr:'bir'},
        {t:'words',items:[{tr:'bir',pr:'beer',en:'1',link:'= Turkish bir'},{tr:'iki',pr:'ee-KEE',en:'2',link:'= Turkish iki'},{tr:'üç',pr:'uch',en:'3',link:'= Turkish üç'},{tr:'dörd',pr:'duhrd',en:'4',link:'≈ Turkish dört'},{tr:'beş',pr:'besh',en:'5',link:'= Turkish beş'},{tr:'on',pr:'ohn',en:'10',link:'= Turkish on'}]},
        {t:'chal',en:'Two teas, please',tr:'İki çay, zəhmət olmasa',pr:'ee-KEE chai, ZAH-mat ol-MA-sa',morph:['iki = two','çay = tea','zəhmət olmasa = please']},
        {t:'say',text:'To ask a price: <span class="inline-tr">Nə qədərdir?</span> — how much is it? The money here is the <b>manat</b>.',tr:'Nə qədərdir?'},
        {t:'chal',en:'How much is it?',tr:'Bu nə qədərdir?',pr:'boo neh-JAH-duhr',morph:['bu = this','nə qədərdir? = how much is it?']},
        {t:'chal',en:'It\'s five manat',tr:'Beş manatdır',pr:'besh mah-NAHT-duhr',morph:['beş = five','manatdır = it is manat']}
      ],
      blocks:['bir, iki, üç, dörd, beş = 1–5','<code>nə qədərdir?</code> = how much is it?'] },
    { id:4, title:'"I want" — mən istəyirəm', focus:'mən istəyirəm · istəyirəm · istəmirəm',
      steps:[
        {t:'say',text:'To say you want something: <span class="inline-tr">mən istəyirəm</span> — I want. The verb <span class="inline-tr">istəmək</span> is \'to want\'.',tr:'mən istəyirəm'},
        {t:'words',items:[{tr:'mən istəyirəm',pr:'man is-teh-yee-ram',en:'I want',link:'≈ Turkish istiyorum'},{tr:'mən istəmirəm',pr:'man is-teh-mee-ram',en:'I don\'t want'},{tr:'nə istəyirsiniz?',pr:'na is-teh-yeer-see-neez',en:'what do you want?'},{tr:'mənə',pr:'ma-NA',en:'to me'}]},
        {t:'chal',en:'I want tea',tr:'Mən çay istəyirəm',pr:'man chai is-teh-yee-ram',morph:['mən = I','çay = tea','istəyirəm = I want']},
        {t:'chal',en:'I want water',tr:'Mən su istəyirəm',pr:'man soo is-teh-yee-ram',morph:['mən = I','su = water','istəyirəm = I want']},
        {t:'say',text:'To say you don\'t want something: <span class="inline-tr">istəmirəm</span>. Handy when a seller offers you something.',tr:'istəmirəm'},
        {t:'chal',en:'I don\'t want coffee',tr:'Mən qəhvə istəmirəm',pr:'man GAH-va is-teh-mee-ram',morph:['mən = I','qəhvə = coffee','istəmirəm = I don\'t want']}
      ],
      blocks:['<code>mən istəyirəm</code> = I want','<code>mən istəmirəm</code> = I don\'t want','<code>nə istəyirsiniz?</code> = what do you want?'] },
    { id:5, title:'Food & drink', focus:'çay · su · çörək · ət · pendir · çayxana',
      steps:[
        {t:'say',text:'The essentials: <span class="inline-tr">çay</span> (tea), <span class="inline-tr">su</span> (water), <span class="inline-tr">çörək</span> (bread). Tea is everywhere in Azerbaijan.',tr:'çay'},
        {t:'words',items:[{tr:'çay',pr:'chai',en:'tea',link:'= Turkish çay'},{tr:'su',pr:'soo',en:'water',link:'= Turkish su'},{tr:'çörək',pr:'CHOR-ak',en:'bread'},{tr:'ət',pr:'at',en:'meat',link:'≈ Turkish et'},{tr:'pendir',pr:'pen-DEER',en:'cheese',link:'≈ Turkish peynir'},{tr:'qəhvə',pr:'GAH-va',en:'coffee'}]},
        {t:'chal',en:'Tea and bread, please',tr:'Çay və çörək, zəhmət olmasa',pr:'chai va CHOR-ak, ZAH-mat ol-MA-sa',morph:['çay = tea','və = and','çörək = bread','zəhmət olmasa = please']},
        {t:'say',text:'A <span class="inline-tr">çayxana</span> is a tea house — the heart of Azerbaijani social life. Order a cup with the word <span class="inline-tr">çay</span>.',tr:'çayxana'},
        {t:'chal',en:'I\'d like the menu',tr:'Menyu, zəhmət olmasa',pr:'MEN-yoo, ZAH-mat ol-MA-sa',morph:['menyu = menu (loanword)','zəhmət olmasa = please']},
        {t:'say',text:'To praise the food: <span class="inline-tr">Çox dadlıdır!</span> — it\'s delicious!',tr:'Çox dadlıdır!'},
        {t:'chal',en:'It\'s very tasty!',tr:'Çox dadlıdır!',pr:'choh DAHD-luh-duhr',morph:['çox = very','dadlıdır = it is tasty']}
      ],
      blocks:['<code>çay</code>, <code>su</code>, <code>çörək</code> = tea, water, bread','<code>çayxana</code> = tea house','<code>çox dadlıdır!</code> = it\'s delicious!'] },
    { id:6, title:'Getting around', focus:'haradadır? · sağa · sola · düz · stansiya',
      steps:[
        {t:'say',text:'The most useful question when you\'re lost: <span class="inline-tr">Haradadır?</span> — where is it?',tr:'Haradadır?'},
        {t:'words',items:[{tr:'Haradadır?',pr:'hah-rah-dah-duhr',en:'where is it?'},{tr:'sağa',pr:'SAH-uh',en:'to the right'},{tr:'sola',pr:'soh-LAH',en:'to the left'},{tr:'düz',pr:'duz',en:'straight ahead'},{tr:'stansiya',pr:'stahn-see-YAH',en:'station',link:'≈ Russian/English station'},{tr:'metro',pr:'met-ROH',en:'metro / subway',link:'≈ Russian metro'}]},
        {t:'chal',en:'Where is the metro?',tr:'Metro haradadır?',pr:'met-ROH hah-rah-dah-duhr',morph:['metro = the metro','haradadır? = where is it?']},
        {t:'chal',en:'Where is the station?',tr:'Stansiya haradadır?',pr:'stahn-see-YAH hah-rah-dah-duhr',morph:['stansiya = station','haradadır? = where is it?']},
        {t:'say',text:'To give or follow directions: <span class="inline-tr">Sağa dönün</span> = turn right; <span class="inline-tr">Sola dönün</span> = turn left.',tr:'sağa dönün'},
        {t:'chal',en:'Turn right, straight ahead',tr:'Sağa dönün, düz',pr:'SAH-uh dah-NUN, duz',morph:['sağa dönün = turn right','düz = straight ahead']}
      ],
      blocks:['<code>haradadır?</code> = where is it?','<code>sağa</code> / <code>sola</code> = to the right / left','<code>düz</code> = straight ahead'] },
    { id:7, title:'Questions & "do you have…?"', focus:'necə · nə · harada · var · yoxdur',
      steps:[
        {t:'say',text:'Question words: <span class="inline-tr">necə</span> (how), <span class="inline-tr">nə</span> (what), <span class="inline-tr">harada</span> (where), <span class="inline-tr">kim</span> (who).',tr:'nə'},
        {t:'words',items:[{tr:'necə',pr:'neh-JA',en:'how',link:'≈ Turkish nece'},{tr:'nə',pr:'na',en:'what',link:'= Turkish ne'},{tr:'harada',pr:'hah-rah-DAH',en:'where',link:'≈ Turkish nerede'},{tr:'kim',pr:'keem',en:'who',link:'= Turkish kim'},{tr:'var',pr:'var',en:'there is / have'},{tr:'yoxdur',pr:'YOKH-door',en:'there isn\'t / don\'t have'}]},
        {t:'chal',en:'Do you have wifi?',tr:'Wi-Fi var?',pr:'WEE-fee var',morph:['wifi = the wifi','var? = is there / do you have?']},
        {t:'say',text:'<span class="inline-tr">Var</span> = there is / have. <span class="inline-tr">Yoxdur</span> = there isn\'t / don\'t have. These two cover a huge amount.',tr:'var'},
        {t:'chal',en:'Is there water here?',tr:'Burda su var?',pr:'BUR-dah soo var',morph:['burda = here','su = water','var? = is there?']},
        {t:'chal',en:'What is this?',tr:'Bu nədir?',pr:'boo na-DEER',morph:['bu = this','nədir? = what is it?']}
      ],
      blocks:['<code>nə</code>, <code>necə</code>, <code>harada</code>, <code>kim</code> = what, how, where, who','<code>var</code> / <code>yoxdur</code> = is there / there isn\'t'] },
    { id:8, title:'Family & people', focus:'ailə · ana · ata · qardaş · bacı · dost',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">ailə</span> (family), <span class="inline-tr">ana</span> (mother), <span class="inline-tr">ata</span> (father).',tr:'ailə'},
        {t:'words',items:[{tr:'ailə',pr:'ah-ee-LEH',en:'family',link:'≈ Turkish aile'},{tr:'ana',pr:'ah-NAH',en:'mother',link:'≈ Turkish ana'},{tr:'ata',pr:'ah-TAH',en:'father'},{tr:'qardaş',pr:'kar-DAHSH',en:'brother',link:'≈ Turkish kardeş'},{tr:'bacı',pr:'bah-JU',en:'sister',link:'= Turkish bacı'},{tr:'dost',pr:'dost',en:'friend',link:'= Turkish dost'}]},
        {t:'chal',en:'This is my family',tr:'Bu mənim ailəmdir',pr:'boo MAN-eem ah-ee-lehm-deer',morph:['bu = this','mənim = my','ailəmdir = it is my family']},
        {t:'say',text:'To say you have something, use <span class="inline-tr">mənim … var</span> — literally \'my … exists\'.',tr:'Mənim dostum var'},
        {t:'chal',en:'I have a friend',tr:'Mənim dostum var',pr:'MAN-eem dos-toom var',morph:['mənim = my','dostum = my friend','var = is / have']},
        {t:'chal',en:'I have a family',tr:'Mənim ailəm var',pr:'MAN-eem ah-ee-lem var',morph:['mənim = my','ailəm = my family','var = is / have']}
      ],
      blocks:['<code>ana</code> / <code>ata</code> = mother / father','<code>qardaş</code> / <code>bacı</code> = brother / sister','<code>dost</code> = friend · <code>mənim … var</code> = I have …'] },
    { id:9, title:'Time, days & weather', focus:'bu gün · sabah · hava · isti · soyuq',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">bu gün</span>, tomorrow is <span class="inline-tr">sabah</span> — a word that rhymes with English \'sabah\' meaning morning.',tr:'bu gün'},
        {t:'words',items:[{tr:'bu gün',pr:'boo gun',en:'today',link:'= Turkish bugün'},{tr:'sabah',pr:'sah-BAH',en:'tomorrow'},{tr:'hava',pr:'hah-VAH',en:'weather / air'},{tr:'hava necədir?',pr:'hah-VAH neh-JAH-deer',en:'what\'s the weather like?'},{tr:'isti',pr:'is-TEE',en:'hot / warm'},{tr:'soyuq',pr:'soh-YUK',en:'cold',link:'≈ Turkish soğuk'}]},
        {t:'chal',en:'See you tomorrow',tr:'Sabah görüşərik',pr:'sah-BAH guh-ROO-shuh-rek',morph:['sabah = tomorrow','görüşərik = we\'ll meet']},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">Hava necədir?</span> — how is the weather?',tr:'Hava necədir?'},
        {t:'chal',en:'It\'s hot today',tr:'Bu gün istidir',pr:'boo gun is-TEE-deer',morph:['bu gün = today','istidir = it is hot']},
        {t:'chal',en:'It\'s cold and rainy',tr:'Soyuq və yağışlıdır',pr:'soh-YUK va yah-UHSH-luh-duhr',morph:['soyuq = cold','və = and','yağışlıdır = it\'s rainy']}
      ],
      blocks:['<code>bu gün</code> / <code>sabah</code> = today / tomorrow','<code>hava necədir?</code> = what\'s the weather like?','<code>isti</code> / <code>soyuq</code> = hot / cold'] },
    { id:10, title:'Your name', focus:'Mənim adım __NAME__-dır · Sizin adınız nədir?',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">Mənim adım __NAME__-dır</span> — my name is __NAME__.',tr:'Mənim adım __NAME__-dır'},
        {t:'words',items:[{tr:'Mənim adım __NAME__-dır',pr:'MAN-eem ah-duhm __NAME__-duhr',en:'my name is __NAME__'},{tr:'Sizin adınız nədir?',pr:'see-ZEEN ah-duh-nuhz na-DEER',en:'what is your name?'},{tr:'ad',pr:'ahd',en:'name',link:'= Turkish ad'},{tr:'sizin',pr:'SEE-zeen',en:'your (formal)'}]},
        {t:'chal',en:'My name is __NAME__',tr:'Mənim adım __NAME__-dır',pr:'MAN-eem ah-duhm __NAME__-duhr',morph:['mənim = my','adım = my name','__NAME__-dır = is __NAME__']},
        {t:'say',text:'To ask someone\'s name politely: <span class="inline-tr">Sizin adınız nədir?</span>',tr:'Sizin adınız nədir?'},
        {t:'chal',en:'What is your name?',tr:'Sizin adınız nədir?',pr:'see-ZEEN ah-duh-nuhz na-DEER',morph:['sizin = your (formal)','adınız = your name','nədir? = what is it?']},
        {t:'say',text:'To say you\'re pleased to meet someone: <span class="inline-tr">Çox şadam</span> — very glad.',tr:'Çox şadam'},
        {t:'chal',en:'Pleased to meet you',tr:'Çox şadam',pr:'choh SHAH-duhm',morph:['çox = very','şadam = I am glad']}
      ],
      blocks:['<code>mənim adım __NAME__-dır</code> = my name is __NAME__','<code>sizin adınız nədir?</code> = what\'s your name?','<code>çox şadam</code> = pleased to meet you'] },
    { id:11, title:'Health & emergency', focus:'kömək edin! · həkim · aptek · başa düşmürəm',
      steps:[
        {t:'say',text:'The most important words if you need help: <span class="inline-tr">Kömək edin!</span> (help!), <span class="inline-tr">həkim</span> (doctor), <span class="inline-tr">aptek</span> (pharmacy).',tr:'Kömək edin!'},
        {t:'words',items:[{tr:'Kömək edin!',pr:'KO-mak EH-deen',en:'help!'},{tr:'həkim',pr:'ha-KEEM',en:'doctor',link:'≈ Turkish hekim'},{tr:'aptek',pr:'ap-TEK',en:'pharmacy',link:'≈ Russian apteka'},{tr:'xəstəxana',pr:'khas-ta-kha-NAH',en:'hospital'},{tr:'Başa düşmürəm',pr:'BAH-sha duhsh-MU-ram',en:'I don\'t understand'},{tr:'polis',pr:'po-LEES',en:'police',link:'≈ English police'}]},
        {t:'chal',en:'Help!',tr:'Kömək edin!',pr:'KO-mak EH-deen',morph:['kömək = help','edin = do it (formal command)']},
        {t:'chal',en:'I don\'t understand',tr:'Başa düşmürəm',pr:'BAH-sha duhsh-MU-ram',morph:['başa düşmürəm = I don\'t understand']},
        {t:'say',text:'To say you need something: <span class="inline-tr">Mənə … lazımdır</span> — I need…',tr:'Mənə həkim lazımdır'},
        {t:'chal',en:'I need a doctor',tr:'Mənə həkim lazımdır',pr:'ma-NA ha-KEEM la-ZUHM-duhr',morph:['mənə = to me','həkim = doctor','lazımdır = is needed']},
        {t:'chal',en:'Call the police',tr:'Polisi çağırın',pr:'po-LEE-see chah-uh-RUHN',morph:['polisi = the police','çağırın = call']}
      ],
      blocks:['<code>kömək edin!</code> = help!','<code>həkim</code> / <code>aptek</code> = doctor / pharmacy','<code>başa düşmürəm</code> = I don\'t understand'] },
    { id:12, title:'Tying it together', focus:'a capstone mini-scene',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolbox. This capstone uses only words you\'ve met. Build each line yourself before revealing it.'},
        {t:'chal',en:'Hello! How are you?',tr:'Salam! Necəsən?',pr:'sah-LAM, neh-JAH-sen',morph:['salam = hello','necəsən? = how are you?']},
        {t:'chal',en:'My name is __NAME__',tr:'Mənim adım __NAME__-dır',pr:'MAN-eem ah-duhm __NAME__-duhr',morph:['mənim adım = my name','__NAME__-dır = is __NAME__']},
        {t:'chal',en:'A tea, please',tr:'Bir çay, zəhmət olmasa',pr:'beer chai, ZAH-mat ol-MA-sa',morph:['bir = one','çay = tea','zəhmət olmasa = please']},
        {t:'chal',en:'How much is it?',tr:'Bu nə qədərdir?',pr:'boo neh-JAH-duhr',morph:['bu = this','nə qədərdir? = how much is it?']},
        {t:'chal',en:'Delicious! Thank you!',tr:'Çox dadlıdır! Sağ olun!',pr:'choh DAHD-luh-duhr, SAH oh-loon',morph:['çox dadlıdır = delicious','sağ olun = thank you']}
      ],
      blocks:['You built: greetings, introductions, ordering, prices, thanks — a full day out in Azerbaijani.'] },
    { id:13, title:'Airport & tickets', focus:'hava limanı · pasport · bilet · reys',
      steps:[
        {t:'say',text:'You have landed in Baku. The building is the <span class="inline-tr">hava limanı</span>. Your document is a <span class="inline-tr">pasport</span>.',tr:'hava limanı'},
        {t:'words',items:[{tr:'hava limanı',pr:'hah-VAH lee-mah-NUH',en:'the airport'},{tr:'pasport',pr:'pahs-PORT',en:'the passport'},{tr:'bilet',pr:'bee-LET',en:'the ticket'},{tr:'reys',pr:'rays',en:'the flight'},{tr:'qapı',pr:'kah-PUH',en:'the gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'Hava limanı haradadır?',pr:'hah-VAH lee-mah-NUH hah-rah-dah-duhr',morph:['hava limanı = the airport','haradadır? = where is it?']},
        {t:'chal',en:'Here is my passport',tr:'Budur mənim pasportum',pr:'boo-DOOR MAN-eem pahs-por-TOOM',morph:['budur = here is','mənim pasportum = my passport']},
        {t:'chal',en:'A ticket, please',tr:'Bir bilet, zəhmət olmasa',pr:'beer bee-LET, ZAH-mat ol-MA-sa',morph:['bir bilet = one ticket','zəhmət olmasa = please']},
        {t:'chal',en:'Where is the gate?',tr:'Qapı haradadır?',pr:'kah-PUH hah-rah-dah-duhr',morph:['qapı = the gate','haradadır? = where is it?']}
      ],
      blocks:['<code>hava limanı</code> = airport','<code>pasport</code> = passport','<code>bilet</code> = ticket'] },
    { id:14, title:'The taxi', focus:'taksi · getmək · otel · dayanın',
      steps:[
        {t:'say',text:'The driver is waiting. Word order is object then verb: <span class="inline-tr">mən otelə getmək istəyirəm</span> — I want to go to the hotel.',tr:'taksi'},
        {t:'words',items:[{tr:'taksi',pr:'tahk-SEE',en:'the taxi'},{tr:'sürücü',pr:'su-ru-JU',en:'the driver'},{tr:'getmək istəyirəm',pr:'get-MAK is-teh-yee-ram',en:'I want to go'},{tr:'burada dayanın',pr:'boo-rah-DAH dah-yah-NUHN',en:'stop here (formal)'}]},
        {t:'chal',en:'A taxi, please',tr:'Taksi, zəhmət olmasa',pr:'tahk-SEE, ZAH-mat ol-MA-sa',morph:['taksi = taxi','zəhmət olmasa = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'Mən otelə getmək istəyirəm',pr:'man o-te-LA get-MAK is-teh-yee-ram',morph:['mən = I','otelə = to the hotel','getmək istəyirəm = I want to go']},
        {t:'chal',en:'Stop here, please',tr:'Burada dayanın, zəhmət olmasa',pr:'boo-rah-DAH dah-yah-NUHN, ZAH-mat ol-MA-sa',morph:['burada dayanın = stop here','zəhmət olmasa = please']},
        {t:'chal',en:'How much is it?',tr:'Bu nə qədərdir?',pr:'boo neh-JAH-duhr',morph:['bu = this','nə qədərdir? = how much is it?']}
      ],
      blocks:['<code>mən … getmək istəyirəm</code> = I want to go to …','<code>burada dayanın</code> = stop here (formal siz)'] },
    { id:15, title:'The hotel', focus:'rezervasiya · otaq · açar · gecə',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">mənim rezervasiyam var</span> — I have a reservation (literally \'my reservation exists\').',tr:'rezervasiyam var'},
        {t:'words',items:[{tr:'otel',pr:'o-TEL',en:'the hotel'},{tr:'rezervasiya',pr:'re-zer-vah-SEE-yah',en:'the reservation'},{tr:'otaq',pr:'o-TAKH',en:'the room'},{tr:'açar',pr:'ah-CHAR',en:'the key'},{tr:'bir gecə',pr:'beer ge-JA',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'Mənim rezervasiyam var',pr:'MAN-eem re-zer-vah-see-YAHM var',morph:['mənim = my','rezervasiyam = my reservation','var = exists']},
        {t:'chal',en:'A room for one night, please',tr:'Bir gecəlik otaq, zəhmət olmasa',pr:'beer ge-ja-LIK o-TAKH, ZAH-mat ol-MA-sa',morph:['bir gecəlik = for one night','otaq = a room','zəhmət olmasa = please']},
        {t:'chal',en:'The key, please',tr:'Açar, zəhmət olmasa',pr:'ah-CHAR, ZAH-mat ol-MA-sa',morph:['açar = the key','zəhmət olmasa = please']},
        {t:'chal',en:'Where is my room?',tr:'Mənim otağım haradadır?',pr:'MAN-eem o-tah-UHM hah-rah-dah-duhr',morph:['mənim otağım = my room','haradadır? = where is it?']}
      ],
      blocks:['<code>rezervasiyam var</code> = I have a reservation','<code>otaq</code> = room','<code>açar</code> = key'] },
    { id:16, title:'Ask for help', focus:'başa düşmürəm · yavaş · ingiliscə',
      steps:[
        {t:'say',text:'When the language is too fast: <span class="inline-tr">Yavaş, zəhmət olmasa</span> — slower, please. Use formal <span class="inline-tr">siz</span> with strangers.',tr:'Yavaş, zəhmət olmasa'},
        {t:'words',items:[{tr:'yavaş',pr:'yah-VASH',en:'slower / slowly'},{tr:'təkrar',pr:'tak-RAR',en:'again'},{tr:'ingiliscə',pr:'in-gee-lees-JA',en:'English'},{tr:'kömək edə bilərsiniz?',pr:'KO-mak e-DA bee-la-ree-NEEZ',en:'can you help? (formal)'}]},
        {t:'chal',en:'I don\'t understand',tr:'Başa düşmürəm',pr:'BAH-sha duhsh-MU-ram',morph:['başa = the head','düşmürəm = I don\'t catch']},
        {t:'chal',en:'Slower, please',tr:'Yavaş, zəhmət olmasa',pr:'yah-VASH, ZAH-mat ol-MA-sa',morph:['yavaş = slower','zəhmət olmasa = please']},
        {t:'chal',en:'Can you help me?',tr:'Mənə kömək edə bilərsiniz?',pr:'ma-NA KO-mak e-DA bee-la-ree-NEEZ',morph:['mənə = to me','kömək edə = help','bilərsiniz? = can you? (formal)']},
        {t:'chal',en:'Do you speak English?',tr:'İngiliscə danışırsınız?',pr:'in-gee-lees-JA dah-nuh-shuhr-suh-NUHZ',morph:['ingiliscə = English','danışırsınız? = do you speak? (formal)']}
      ],
      blocks:['<code>yavaş</code> = slower','<code>ingiliscə danışırsınız?</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'teahouse', title:'🍵 At a çayxana (tea house)', emoji:'🍵', turns:[
      {who:'You',tr:'Salam! Bir çay, zəhmət olmasa.',pr:'sah-LAM, beer chai, ZAH-mat ol-MA-sa',en:'Hello! A tea, please.'},
      {who:'Server',tr:'Buyurun. Başqa nə?',pr:'boo-yoo-ROON, BAH-shuh na',en:'Here you are. Anything else?'},
      {who:'You',tr:'Bir çörək, sağ olun.',pr:'beer CHOR-ak, SAH oh-loon',en:'A bread, thanks.'},
      {who:'You',tr:'Bu nə qədərdir?',pr:'boo neh-JAH-duhr',en:'How much is it?'},
      {who:'Server',tr:'İki manatdır.',pr:'ee-KEE mah-NAHT-duhr',en:'It is two manat.'},
      {who:'You',tr:'Sağ olun!',pr:'SAH oh-loon',en:'Thank you!'}
    ]},
    { id:'transport', title:'🚌 Getting around', emoji:'🚌', turns:[
      {who:'You',tr:'Bağışlayın, metro haradadır?',pr:'bah-UHSH-lah-yuhn, met-ROH hah-rah-dah-duhr',en:'Excuse me, where is the metro?'},
      {who:'Local',tr:'Orada, düz irəli.',pr:'oh-RAH-dah, duz ee-RA-lee',en:'There, straight ahead.'},
      {who:'You',tr:'Sağ olun. Bir bilet, zəhmət olmasa.',pr:'SAH oh-loon, beer bee-LET, ZAH-mat ol-MA-sa',en:'Thanks. One ticket, please.'},
      {who:'Driver',tr:'İki manat.',pr:'ee-KEE mah-NAHT',en:'Two manat.'},
      {who:'You',tr:'Sağ olun!',pr:'SAH oh-loon',en:'Thank you!'}
    ]},
    { id:'restaurant', title:'🍽️ At a restaurant', emoji:'🍽️', turns:[
      {who:'Waiter',tr:'Buyurun! Nə istəyirsiniz?',pr:'boo-yoo-ROON, na is-teh-yeer-see-neez',en:'Welcome! What would you like?'},
      {who:'You',tr:'Menyu, zəhmət olmasa.',pr:'MEN-yoo, ZAH-mat ol-MA-sa',en:'The menu, please.'},
      {who:'You',tr:'Mən çay və ət istəyirəm.',pr:'man chai va at is-teh-yee-ram',en:'I would like tea and meat.'},
      {who:'Waiter',tr:'Çox yaxşı.',pr:'choh YAKH-shuh',en:'Very good.'},
      {who:'You',tr:'Bu nə qədərdir?',pr:'boo neh-JAH-duhr',en:'How much is it?'},
      {who:'Waiter',tr:'On manatdır.',pr:'ohn mah-NAHT-duhr',en:'It is ten manat.'}
    ]},
    { id:'bazaar', title:'🧺 At the bazaar', emoji:'🧺', turns:[
      {who:'Seller',tr:'Buyurun! Sizə nə lazımdır?',pr:'boo-yoo-ROON, see-ZA na la-ZUHM-duhr',en:'Welcome! What do you need?'},
      {who:'You',tr:'Bu nə qədərdir?',pr:'boo neh-JAH-duhr',en:'How much is this?'},
      {who:'Seller',tr:'Üç manat.',pr:'uch mah-NAHT',en:'Three manat.'},
      {who:'You',tr:'Çox bahadır. İki manat?',pr:'choh bah-HAHD-duhr, ee-KEE mah-NAHT',en:'It\'s too expensive. Two manat?'},
      {who:'Seller',tr:'Yaxşı, iki manat.',pr:'YAKH-shuh, ee-KEE mah-NAHT',en:'OK, two manat.'},
      {who:'You',tr:'Sağ olun!',pr:'SAH oh-loon',en:'Thank you!'}
    ]}
  ],
  pocket: [
    {tr:'Salam',pr:'sah-LAM',en:'Hello',c:'Greetings'},
    {tr:'Sabahınız xeyir',pr:'sah-BAH-uh-nuhz khay-EER',en:'Good morning',c:'Greetings'},
    {tr:'Axşamınız xeyir',pr:'akh-SHAH-muh-nuhz khay-EER',en:'Good evening',c:'Greetings'},
    {tr:'Necəsən?',pr:'neh-JAH-sen',en:'How are you?',c:'Greetings'},
    {tr:'Yaxşıyam, sağ olun',pr:'YAKH-shuh-yam, SAH oh-loon',en:'I\'m well, thanks',c:'Greetings'},
    {tr:'Mənim adım __NAME__-dır',pr:'MAN-eem ah-duhm __NAME__-duhr',en:'My name is __NAME__',c:'Greetings'},
    {tr:'Sağ olun',pr:'SAH oh-loon',en:'Thank you (formal)',c:'Courtesy'},
    {tr:'Sağol',pr:'SAH-ohl',en:'Thanks (informal)',c:'Courtesy'},
    {tr:'Zəhmət olmasa',pr:'ZAH-mat ol-MA-sa',en:'Please',c:'Courtesy'},
    {tr:'Bağışlayın',pr:'bah-UHSH-lah-yuhn',en:'Excuse me',c:'Courtesy'},
    {tr:'Bəli',pr:'beh-LEE',en:'Yes',c:'Courtesy'},
    {tr:'Xeyr',pr:'khayr',en:'No',c:'Courtesy'},
    {tr:'Bir',pr:'beer',en:'1',c:'Numbers'},
    {tr:'İki',pr:'ee-KEE',en:'2',c:'Numbers'},
    {tr:'Üç',pr:'uch',en:'3',c:'Numbers'},
    {tr:'Dörd',pr:'duhrd',en:'4',c:'Numbers'},
    {tr:'Beş',pr:'besh',en:'5',c:'Numbers'},
    {tr:'On',pr:'ohn',en:'10',c:'Numbers'},
    {tr:'Çay',pr:'chai',en:'tea',c:'Food & Drink'},
    {tr:'Su',pr:'soo',en:'water',c:'Food & Drink'},
    {tr:'Çörək',pr:'CHOR-ak',en:'bread',c:'Food & Drink'},
    {tr:'Ət',pr:'at',en:'meat',c:'Food & Drink'},
    {tr:'Pendir',pr:'pen-DEER',en:'cheese',c:'Food & Drink'},
    {tr:'Qəhvə',pr:'GAH-va',en:'coffee',c:'Food & Drink'},
    {tr:'Çox dadlıdır!',pr:'choh DAHD-luh-duhr',en:'It\'s delicious!',c:'Food & Drink'},
    {tr:'Haradadır?',pr:'hah-rah-dah-duhr',en:'Where is it?',c:'Directions'},
    {tr:'Sağa',pr:'SAH-uh',en:'to the right',c:'Directions'},
    {tr:'Sola',pr:'soh-LAH',en:'to the left',c:'Directions'},
    {tr:'Düz',pr:'duz',en:'straight ahead',c:'Directions'},
    {tr:'Metro haradadır?',pr:'met-ROH hah-rah-dah-duhr',en:'Where is the metro?',c:'Directions'},
    {tr:'Stansiya',pr:'stahn-see-YAH',en:'station',c:'Directions'},
    {tr:'Nə qədərdir?',pr:'neh-JAH-duhr',en:'How much is it?',c:'Questions'},
    {tr:'Bu nədir?',pr:'boo na-DEER',en:'What is this?',c:'Questions'},
    {tr:'Var?',pr:'var',en:'Is there? / Do you have?',c:'Questions'},
    {tr:'Ailə',pr:'ah-ee-LEH',en:'family',c:'Family & Time'},
    {tr:'Ana',pr:'ah-NAH',en:'mother',c:'Family & Time'},
    {tr:'Ata',pr:'ah-TAH',en:'father',c:'Family & Time'},
    {tr:'Bu gün',pr:'boo gun',en:'today',c:'Family & Time'},
    {tr:'Sabah',pr:'sah-BAH',en:'tomorrow',c:'Family & Time'},
    {tr:'Kömək edin!',pr:'KO-mak EH-deen',en:'Help!',c:'Emergency'},
    {tr:'Başa düşmürəm',pr:'BAH-sha duhsh-MU-ram',en:'I don\'t understand',c:'Emergency'},
    {tr:'Həkim',pr:'ha-KEEM',en:'doctor',c:'Emergency'},
    {tr:'Aptek',pr:'ap-TEK',en:'pharmacy',c:'Emergency'},
    {tr:'Xəstəxana',pr:'khas-ta-kha-NAH',en:'hospital',c:'Emergency'},
    {tr:'Hava limanı',pr:'hah-VAH lee-mah-NUH',en:'airport',c:'Travel'},
    {tr:'Taksi',pr:'tahk-SEE',en:'taxi',c:'Travel'},
    {tr:'Otel',pr:'o-TEL',en:'hotel',c:'Travel'},
    {tr:'Burada dayanın',pr:'boo-rah-DAH dah-yah-NUHN',en:'stop here',c:'Travel'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food & Drink','Directions','Questions','Family & Time','Emergency','Travel'],
  culture: [
    {icon:'🍵',title:'Tea is the heart of the day',body:'Tea (çay) is everywhere in Azerbaijan and is served at almost any hour — in the morning, after meals, and when guests arrive. The çayxana (tea house) is a social hub where people meet, talk and play backgammon. It is usually served in a small pear-shaped glass (armudu).'},
    {icon:'🤝',title:'Hospitality comes first',body:'Guests are a blessing. If you visit an Azerbaijani home you\'ll be offered tea and food within minutes, and the family will insist you eat more. Refusing can seem rude — a little \'sağ olun\' and one more bite goes a long way.'},
    {icon:'🌸',title:'Novruz, the spring new year',body:'Novruz is the most important celebration — the coming of spring around the March equinox. Families clean their homes, prepare sweet wheat (səməni), jump over bonfires and lay a symbolic table. It is a joyful, ancient Persian-roots festival that shows off Azerbaijani warmth.'},
    {icon:'🇹🇷',title:'A language almost like Turkish',body:'Azerbaijani and Turkish are closely related Turkic languages. Huge numbers of common words match — çay, su, ev, əl, bir, qardaş, ailə. A Turkish speaker can often be understood in Baku and vice versa, so if you know one, the other comes fast.'},
    {icon:'🧺',title:'Bargaining is part of the bazaar',body:'At the bazaar, prices are often negotiable. It is normal to ask \'Bu nə qədərdir?\' and then politely counter with a lower price — \'Çox bahadır!\' (too expensive!). A smile and \'zəhmət olmasa\' go far, and the seller often enjoys the friendly haggling.'},
    {icon:'🎶',title:'Mugham, carpets and music',body:'Azerbaijan is famous for mugham — an improvised classical music tradition — and for its hand-woven carpets, a UNESCO-recognised craft. Music and carpets are a big part of the cultural identity and make great conversation topics.'}
  ],
  sounds: [
    {l:'ə',say:'like the "a" in "cat" (short, front, open)',ex:'mən = MAN (I) · çörək = CHOR-ak (bread)',voice:'mən'},
    {l:'ı',say:'like the schwa in "about" — a quick "u" sound',ex:'qız = kuhz (girl)',voice:'qız'},
    {l:'ö',say:'like saying "e" but with rounded lips (French "eu")',ex:'çörək = CHOR-ak (bread) · göz = goz (eye)',voice:'göz'},
    {l:'ü',say:'like saying "ee" but with rounded lips (French "u")',ex:'üç = uch (three) · gün = gun (day)',voice:'üç'},
    {l:'q',say:'a deep "k" made at the back of the throat (Arabic "qaf")',ex:'qız = kuhz (girl) · qəhvə = GAH-va (coffee)',voice:'qız'},
    {l:'x',say:'a rough, throaty "kh", like Scottish "loch"',ex:'xeyr = khayr (no) · xəstəxana = khas-ta-kha-NAH (hospital)',voice:'xeyr'},
    {l:'ç',say:'like "ch" in "church" (soft)',ex:'çay = chai (tea) · çörək = CHOR-ak (bread)',voice:'çay'},
    {l:'ş',say:'like "sh" in "shoe"',ex:'şəhər = sha-her (city) · şadam = SHAH-duhm (glad)',voice:'şəhər'}
  ],
  resources: [
    {icon:'🗣️',t:'Learn Azerbaijani with Ebrahim',d:'Clear beginner lessons covering vocab, numbers and everyday phrases from a native speaker.',q:'Learn Azerbaijani for beginners'},
    {icon:'🎧',t:'Azerbaijani for travelers',d:'Practical phrases for travel, ordering food, shopping and getting around Baku.',q:'Azerbaijani travel phrases'},
    {icon:'🧠',t:'Azerbaijani vs Turkish',d:'Azerbaijani shares a huge amount with Turkish — these videos show the overlaps directly.',q:'Turkish vs Azerbaijani language'},
    {icon:'🎵',t:'Azerbaijani songs',d:'Music is a natural way to absorb the pronunciation and rhythm without studying.',q:'Azerbaijani music for learners'},
    {icon:'🗣️',t:'The Azerbaijani alphabet',d:'Learn the Latin ABC and the special letters ə, ı, ö, ü with clear audio.',q:'Azerbaijani alphabet pronunciation'}
  ]
};
