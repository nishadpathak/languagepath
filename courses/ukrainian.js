/* ---- ukrainian ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["ukrainian"] = {
  name: 'Ukrainian',
  flag: '🇺🇦',
  tts: 'uk-UA',
  dir: 'ltr',
  native: 'Українська',
  soundTitle: 'Ukrainian sounds & letters',
  soundIntro: 'Ukrainian letters are mostly one sound each, so if you can read the letters you can pronounce almost any word. These are the tricky ones.',
  grammar: '<p>Ukrainian is very phonetic — each letter maps to one sound, so reading aloud is easy once you know the alphabet. But <b>case</b> changes endings: <i>кава</i> (coffee) becomes <i>кави</i>, <i>каву</i> or <i>кавою</i> depending on where it sits in the sentence. Names, objects and after prepositions all shift endings. Don\'t worry — people understand you even if your endings aren\'t perfect.</p>',
  bridges: '<div class="note">🇬🇧 <b>English.</b> You already know some Ukrainian words: кава (coffee, as in \'café\'), таксі, банк, готель, інтернет, телефон, квітка... They share roots with English and Latin.</div><div class="note">🇵🇱 <b>Polish / Russian.</b> Ukrainian sits between Polish and Russian. You\'ll recognise many words and grammar patterns, but the letters and sounds are different — treat it as its own language.</div>',
  lessons: [
    { id:1, title:'Greetings', focus:'привіт · добрий день · до побачення',
      steps:[
        {t:'say',text:'Let\'s start with the word you\'ll use everywhere: <span class="inline-tr">Привіт</span> — hi. Say it out loud.',tr:'Привіт'},
        {t:'words',items:[{tr:'Привіт',pr:'pry-VEET',en:'hi'},{tr:'Добрий день',pr:'DOH-bryi den',en:'good day / hello'},{tr:'Добрий вечір',pr:'DOH-bryi VEH-cheer',en:'good evening'},{tr:'До побачення',pr:'doh poh-BAH-chen-nyah',en:'goodbye'}]},
        {t:'chal',en:'Hello',tr:'Привіт',pr:'pry-VEET',morph:['привіт = hello']},
        {t:'say',text:'Greet by time of day: <span class="inline-tr">Добрий день</span> is the safest, most polite hello.',tr:'Добрий день'},
        {t:'chal',en:'Good afternoon!',tr:'Добрий день!',pr:'DOH-bryi den',morph:['добрий день = good day / hello']},
        {t:'say',text:'To ask how someone is: <span class="inline-tr">Як справи?</span> The reply is <span class="inline-tr">Добре, дякую</span> — well, thank you.',tr:'Як справи?'},
        {t:'words',items:[{tr:'Як справи?',pr:'yak SPRA-vy',en:'How are you?'},{tr:'Добре, дякую',pr:'DOH-breh, DYAH-koo',en:'Well, thank you'},{tr:'Дуже добре',pr:'DOO-zheh DOH-breh',en:'Very well'}]},
        {t:'chal',en:'Hi, how are you?',tr:'Привіт, як справи?',pr:'pry-VEET, yak SPRA-vy',morph:['привіт = hi','як справи? = how are you?']}
      ],
      blocks:['<code>привіт</code> = hi','<code>добрий день</code> = good day','<code>до побачення</code> = goodbye','<code>як справи?</code> = how are you?'] },
    { id:2, title:'Polite phrases', focus:'дякую · будь ласка · вибачте',
      steps:[
        {t:'say',text:'<span class="inline-tr">Дякую</span> means thank you — one of the first words you\'ll use every day.',tr:'Дякую'},
        {t:'words',items:[{tr:'Дякую',pr:'DYAH-koo',en:'thank you'},{tr:'Дуже дякую',pr:'DOO-zheh DYAH-koo',en:'thank you very much'},{tr:'Будь ласка',pr:'bool LAHS-kah',en:'please / you\'re welcome'},{tr:'Вибачте',pr:'VY-bach-teh',en:'excuse me / sorry'},{tr:'Так',pr:'tak',en:'yes'},{tr:'Ні',pr:'nee',en:'no'}]},
        {t:'chal',en:'Thank you very much',tr:'Дуже дякую',pr:'DOO-zheh DYAH-koo',morph:['дуже = very','дякую = thank you']},
        {t:'say',text:'<span class="inline-tr">Будь ласка</span> is both \'please\' and \'you\'re welcome\'.',tr:'Будь ласка'},
        {t:'chal',en:'Thank you — you\'re welcome',tr:'Дякую! Будь ласка.',pr:'DYAH-koo, bool LAHS-kah',morph:['дякую = thank you','будь ласка = you\'re welcome']},
        {t:'say',text:'<span class="inline-tr">Вибачте</span> is the polite \'excuse me\' or \'sorry\'. You\'ll use it a lot.',tr:'Вибачте'},
        {t:'chal',en:'Excuse me, please',tr:'Вибачте, будь ласка',pr:'VY-bach-teh, bool LAHS-kah',morph:['вибачте = excuse me','будь ласка = please']}
      ],
      blocks:['<code>дякую</code> = thank you','<code>будь ласка</code> = please / you\'re welcome','<code>вибачте</code> = excuse me / sorry','<code>так</code> / <code>ні</code> = yes / no'] },
    { id:3, title:'Numbers 1–10', focus:'один · два · три · десять',
      steps:[
        {t:'say',text:'Numbers are the fastest win. Listen and repeat: <span class="inline-tr">один, два, три</span> — one, two, three.',tr:'один'},
        {t:'words',items:[{tr:'один',pr:'oh-DYN',en:'1'},{tr:'два',pr:'dvah',en:'2',link:'≈ English two'},{tr:'три',pr:'try',en:'3',link:'≈ English three'},{tr:'чотири',pr:'CHOH-ty-ry',en:'4'},{tr:'п\'ять',pr:'pyat',en:'5'},{tr:'шість',pr:'sheest',en:'6'},{tr:'сім',pr:'seem',en:'7'},{tr:'вісім',pr:'VEE-seem',en:'8'},{tr:'дев\'ять',pr:'DEH-vyat',en:'9'},{tr:'десять',pr:'DEH-syat',en:'10',link:'≈ English ten'}]},
        {t:'chal',en:'Two coffees, please',tr:'Дві кави, будь ласка',pr:'dvee KAH-vy, bool LAHS-kah',morph:['дві = two (feminine)','кави = coffees','будь ласка = please']},
        {t:'say',text:'<span class="inline-tr">Скільки коштує?</span> = how much does it cost? The key shopping phrase.',tr:'Скільки коштує?'},
        {t:'chal',en:'How much is it?',tr:'Скільки коштує?',pr:'SKEEL-ky kosh-TOO-yeh',morph:['скільки = how much','коштує = does it cost']},
        {t:'chal',en:'It\'s five hryvnias',tr:'П\'ять гривень',pr:'pyat HREE-ven',morph:['п\'ять = five','гривень = hryvnias (the currency)']}
      ],
      blocks:['<code>один</code> … <code>десять</code> = 1–10','<code>скільки коштує?</code> = how much is it?','<code>гривня</code> = the hryvnia (Ukrainian currency)'] },
    { id:4, title:'"I want" — хочу & потрібно', focus:'я хочу · мені потрібно · можна',
      steps:[
        {t:'say',text:'The phrase to order anything: <span class="inline-tr">я хочу</span> — I want. It\'s a little direct, but you\'ll hear it all the time.',tr:'я хочу'},
        {t:'say',text:'A very useful, polite way to ask for something: <span class="inline-tr">Мені потрібно…</span> — I need….',tr:'Мені потрібно'},
        {t:'chal',en:'I need help',tr:'Мені потрібна допомога',pr:'meh-NEE po-TREEB-nah doh-poh-MOH-hah',morph:['мені = to me','потрібна = needed','допомога = help']},
        {t:'say',text:'<span class="inline-tr">Можна…?</span> = may I…? / is it possible to…? — the polite request form.',tr:'Можна?'},
        {t:'chal',en:'May I have some water?',tr:'Можна води?',pr:'MOZH-nah vo-DY',morph:['можна = may I','води = some water']},
        {t:'chal',en:'I need a taxi',tr:'Мені потрібне таксі',pr:'meh-NEE po-TREEB-neh tak-SEE',morph:['мені потрібне = I need','таксі = taxi'],link:'≈ English taxi'}
      ],
      blocks:['<code>я хочу</code> = I want','<code>мені потрібно</code> = I need','<code>можна…?</code> = may I…?'] },
    { id:5, title:'Food & drink', focus:'кава · вода · хліб · меню',
      steps:[
        {t:'say',text:'Eating out? Key words: <span class="inline-tr">кава</span> (coffee), <span class="inline-tr">вода</span> (water), <span class="inline-tr">хліб</span> (bread).',tr:'кава'},
        {t:'words',items:[{tr:'кава',pr:'KAH-vah',en:'coffee',link:'≈ English coffee (café)'},{tr:'вода',pr:'vo-DAH',en:'water'},{tr:'хліб',pr:'khleeb',en:'bread'},{tr:'меню',pr:'meh-NOO',en:'the menu',link:'≈ English menu'},{tr:'чай',pr:'chai',en:'tea'}]},
        {t:'chal',en:'A coffee and water, please',tr:'Кава і вода, будь ласка',pr:'KAH-vah ee vo-DAH, bool LAHS-kah',morph:['кава = coffee','і = and','вода = water','будь ласка = please']},
        {t:'chal',en:'May I have the menu?',tr:'Можна меню?',pr:'MOZH-nah meh-NOO',morph:['можна = may I have','меню = the menu']},
        {t:'say',text:'<span class="inline-tr">Дуже смачно</span> = it\'s delicious. Say it and you\'ll make the chef\'s day.',tr:'Дуже смачно'},
        {t:'chal',en:'It\'s delicious!',tr:'Дуже смачно!',pr:'DOO-zheh SMAHCH-noh',morph:['дуже = very','смачно = tasty / delicious']}
      ],
      blocks:['<code>кава</code>, <code>вода</code>, <code>хліб</code> = coffee, water, bread','<code>меню</code> = the menu','<code>дуже смачно</code> = delicious'] },
    { id:6, title:'Getting around', focus:'де? · направо · наліво · вокзал',
      steps:[
        {t:'say',text:'The most useful question in any city: <span class="inline-tr">Де…?</span> — where is…?',tr:'Де?'},
        {t:'words',items:[{tr:'Де...?',pr:'deh',en:'Where is...?'},{tr:'направо',pr:'nah-PRAH-voh',en:'to the right'},{tr:'наліво',pr:'nah-LEE-voh',en:'to the left'},{tr:'прямо',pr:'PRYAH-moh',en:'straight ahead'},{tr:'вокзал',pr:'vok-ZAHL',en:'the station'},{tr:'зупинка',pr:'zoo-PEEN-kah',en:'the stop'}]},
        {t:'chal',en:'Where is the station?',tr:'Де вокзал?',pr:'deh vok-ZAHL',morph:['де = where','вокзал = the station']},
        {t:'chal',en:'Where is the bathroom?',tr:'Де туалет?',pr:'deh too-AH-let',morph:['де = where','туалет = the bathroom'],link:'≈ English toilet'},
        {t:'say',text:'<span class="inline-tr">Направо</span> and <span class="inline-tr">наліво</span> tell you which way to turn.',tr:'направо'},
        {t:'chal',en:'Turn right',tr:'Поверніть направо',pr:'poh-ver-NEET nah-PRAH-voh',morph:['поверніть = turn','направо = to the right']}
      ],
      blocks:['<code>де…?</code> = where is…?','<code>направо</code> / <code>наліво</code> = right / left','<code>прямо</code> = straight ahead'] },
    { id:7, title:'Questions & "do you have…?"', focus:'у вас є? · чи є · можна',
      steps:[
        {t:'say',text:'To ask if someone has something: <span class="inline-tr">У вас є…?</span> — do you have…? (polite). For a friend: <span class="inline-tr">У тебе є…?</span>',tr:'У вас є?'},
        {t:'chal',en:'Do you have a table?',tr:'У вас є столик?',pr:'oo vas yeh STOH-lyk',morph:['у вас є = do you have','столик = a table']},
        {t:'say',text:'<span class="inline-tr">Чи є…?</span> = is there…? Very useful for what\'s available.',tr:'Чи є?'},
        {t:'chal',en:'Is there wifi?',tr:'Чи є Wi-Fi?',pr:'chy yeh WEE-fee',morph:['чи є = is there','Wi-Fi = wifi']},
        {t:'say',text:'<span class="inline-tr">Можна…?</span> asks permission: may I…?',tr:'Можна?'},
        {t:'chal',en:'May I pay?',tr:'Можна заплатити?',pr:'MOZH-nah zah-plah-TY-ty',morph:['можна = may I','заплатити = to pay']},
        {t:'chal',en:'Can I pay by card?',tr:'Можна карткою?',pr:'MOZH-nah KAHRT-koyu',morph:['можна = is it possible','карткою = by card']}
      ],
      blocks:['<code>у вас є…?</code> = do you have…?','<code>чи є…?</code> = is there…?','<code>можна…?</code> = may I…?'] },
    { id:8, title:'Family & people', focus:'сім\'я · мама · тато · друг',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">сім\'я</span> (family), <span class="inline-tr">мама</span> (mother), <span class="inline-tr">тато</span> (father).',tr:'сім\'я'},
        {t:'words',items:[{tr:'сім\'я',pr:'see-MYA',en:'family'},{tr:'мама',pr:'MAH-mah',en:'mom',link:'≈ English mama / mom'},{tr:'тато',pr:'TAH-toh',en:'dad'},{tr:'друг',pr:'drooh',en:'friend'},{tr:'брат',pr:'brat',en:'brother',link:'≈ English brother'},{tr:'сестра',pr:'ses-TRAH',en:'sister',link:'≈ English sister'}]},
        {t:'chal',en:'This is my family',tr:'Це моя сім\'я',pr:'tseh mo-YAH see-MYA',morph:['це = this is','моя = my','сім\'я = family']},
        {t:'say',text:'<span class="inline-tr">У мене є…</span> = I have… — the key way to say what you\'ve got.',tr:'У мене є'},
        {t:'chal',en:'I have a friend',tr:'У мене є друг',pr:'oo meh-NEH yeh drooh',morph:['у мене є = I have','друг = a friend']},
        {t:'say',text:'Note the gender: <span class="inline-tr">моя</span> (my, feminine) vs <span class="inline-tr">мій</span> (my, masculine).',tr:'мій'}
      ],
      blocks:['<code>мама</code> / <code>тато</code> = mom / dad','<code>сім\'я</code> = family','<code>у мене є</code> = I have'] },
    { id:9, title:'Time, days & weather', focus:'сьогодні · завтра · яка погода?',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">сьогодні</span>, tomorrow is <span class="inline-tr">завтра</span>.',tr:'сьогодні'},
        {t:'words',items:[{tr:'сьогодні',pr:'syoh-HOD-nee',en:'today'},{tr:'завтра',pr:'ZAHV-trah',en:'tomorrow'},{tr:'вчора',pr:'VCHOH-rah',en:'yesterday'},{tr:'яка погода?',pr:'yah-KAH poh-HOH-dah',en:'what\'s the weather?'}]},
        {t:'chal',en:'See you tomorrow',tr:'До завтра',pr:'doh ZAHV-trah',morph:['до = until','завтра = tomorrow']},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">Яка сьогодні погода?</span>',tr:'Яка сьогодні погода?'},
        {t:'chal',en:'It\'s cold today',tr:'Сьогодні холодно',pr:'syoh-HOD-nee KHOH-lod-noh',morph:['сьогодні = today','холодно = it\'s cold']},
        {t:'chal',en:'It\'s sunny',tr:'Сонячно',pr:'SON-yach-noh',morph:['сонячно = it\'s sunny']}
      ],
      blocks:['<code>сьогодні</code> / <code>завтра</code> = today / tomorrow','<code>яка погода?</code> = what\'s the weather?','<code>холодно</code> = it\'s cold'] },
    { id:10, title:'Small talk & your name', focus:'мене звати · як вас звати? · приємно',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">Мене звати…</span> = my name is…, and <span class="inline-tr">Дуже приємно</span> = pleased to meet you.',tr:'Мене звати'},
        {t:'chal',en:'My name is __NAME__',tr:'Мене звати __NAME__',pr:'meh-NEH ZVA-ty __NAME__',morph:['мене звати = my name is','__NAME__ = your name']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">Як вас звати?</span> (polite) or <span class="inline-tr">Як тебе звати?</span> (informal).',tr:'Як вас звати?'},
        {t:'chal',en:'What\'s your name?',tr:'Як вас звати?',pr:'yak vas ZVA-ty',morph:['як = how','вас звати = they call you (polite)']},
        {t:'chal',en:'Pleased to meet you',tr:'Дуже приємно',pr:'DOO-zheh pry-YEHM-noh',morph:['дуже = very','приємно = pleased']},
        {t:'say',text:'Where are you from? <span class="inline-tr">Звідки ви?</span> — reply <span class="inline-tr">Я з…</span> + your country.',tr:'Звідки ви?'}
      ],
      blocks:['<code>мене звати…</code> = my name is…','<code>як вас звати?</code> = what\'s your name?','<code>дуже приємно</code> = pleased to meet you'] },
    { id:11, title:'Health & emergency', focus:'допомога · лікар · аптека',
      steps:[
        {t:'say',text:'The most important words if you need help: <span class="inline-tr">допомога</span> (help), <span class="inline-tr">лікар</span> (doctor), <span class="inline-tr">аптека</span> (pharmacy).',tr:'допомога'},
        {t:'words',items:[{tr:'допомога',pr:'doh-poh-MOH-hah',en:'help'},{tr:'лікар',pr:'LEE-kahr',en:'doctor'},{tr:'аптека',pr:'ap-TEH-kah',en:'pharmacy'},{tr:'швидка',pr:'shveed-KAH',en:'ambulance'},{tr:'я не розумію',pr:'ya neh roh-ZOO-mee-yoo',en:'I don\'t understand'}]},
        {t:'chal',en:'Help!',tr:'Допомога!',pr:'doh-poh-MOH-hah',morph:['допомога = help']},
        {t:'chal',en:'I don\'t understand',tr:'Я не розумію',pr:'ya neh roh-ZOO-mee-yoo',morph:['я = I','не = not','розумію = I understand']},
        {t:'say',text:'To say you feel unwell: <span class="inline-tr">Мені погано</span> — I feel bad.',tr:'Мені погано'},
        {t:'chal',en:'I need a doctor',tr:'Мені потрібен лікар',pr:'meh-NEE po-TREE-ben LEE-kahr',morph:['мені потрібен = I need','лікар = doctor']},
        {t:'chal',en:'Call a doctor, please',tr:'Викличте лікаря, будь ласка',pr:'VY-klych-teh LEE-kah-rya, bool LAHS-kah',morph:['викличте = call','лікаря = doctor','будь ласка = please']}
      ],
      blocks:['<code>допомога</code> = help','<code>лікар</code> = doctor','<code>я не розумію</code> = I don\'t understand','<code>мені погано</code> = I feel unwell'] },
    { id:12, title:'Tying it together', focus:'я хочу · мені потрібно · скільки коштує?',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolbox. This capstone uses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello, how are you?',tr:'Привіт, як справи?',pr:'pry-VEET, yak SPRA-vy',morph:['привіт = hi','як справи? = how are you?']},
        {t:'chal',en:'I need a coffee, please',tr:'Мені потрібна кава, будь ласка',pr:'meh-NEE po-TREEB-nah KAH-vah, bool LAHS-kah',morph:['мені потрібна = I need','кава = coffee','будь ласка = please']},
        {t:'chal',en:'Where is the station?',tr:'Де вокзал?',pr:'deh vok-ZAHL',morph:['де = where','вокзал = the station']},
        {t:'chal',en:'How much is it?',tr:'Скільки коштує?',pr:'SKEEL-ky kosh-TOO-yeh',morph:['скільки = how much','коштує = costs']},
        {t:'chal',en:'Delicious! Thank you!',tr:'Дуже смачно! Дякую!',pr:'DOO-zheh SMAHCH-noh, DYAH-koo',morph:['дуже смачно = delicious','дякую = thank you']}
      ],
      blocks:['You built: greetings, ordering, asking for help, directions, prices and thanks — a full day out in Ukrainian.'] },
    { id:13, title:'Airport & tickets', focus:'аеропорт · паспорт · квиток · рейс',
      steps:[
        {t:'say',text:'You have landed. The building is the <span class="inline-tr">аеропорт</span>. Your document is a <span class="inline-tr">паспорт</span>.',tr:'аеропорт'},
        {t:'words',items:[{tr:'аеропорт',pr:'ah-eh-roh-PORT',en:'the airport'},{tr:'паспорт',pr:'PAHS-port',en:'the passport'},{tr:'квиток',pr:'kvee-TOHK',en:'the ticket'},{tr:'рейс',pr:'rays',en:'the flight'},{tr:'вихід',pr:'VY-khid',en:'the gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'Де аеропорт?',pr:'deh ah-eh-roh-PORT',morph:['де = where','аеропорт = the airport']},
        {t:'chal',en:'Here is my passport',tr:'Ось мій паспорт',pr:'ohs\' meey PAHS-port',morph:['ось = here is','мій паспорт = my passport']},
        {t:'chal',en:'A ticket, please',tr:'Квиток, будь ласка',pr:'kvee-TOHK, bood\' LAHS-kah',morph:['квиток = ticket','будь ласка = please']},
        {t:'chal',en:'Where is the gate?',tr:'Де вихід?',pr:'deh VY-khid',morph:['де = where','вихід = the gate']}
      ],
      blocks:['<code>аеропорт</code> = airport','<code>паспорт</code> = passport','<code>квиток</code> = ticket','<code>вихід</code> = gate'] },
    { id:14, title:'The taxi', focus:'таксі · їхати · готель · зупиніться',
      steps:[
        {t:'say',text:'The driver is waiting. <span class="inline-tr">таксі</span> is the word you need. Tell them where to go with <span class="inline-tr">я хочу їхати</span>.',tr:'таксі'},
        {t:'words',items:[{tr:'таксі',pr:'tahk-SEE',en:'the taxi'},{tr:'водій',pr:'voh-DEEY',en:'the driver'},{tr:'я хочу їхати',pr:'yah KHO-choo YEE-khah-ty',en:'I want to go'},{tr:'зупиніться тут',pr:'zoo-py-NEET-sya toot',en:'stop here'}]},
        {t:'chal',en:'Taxi, please',tr:'Таксі, будь ласка',pr:'tahk-SEE, bood\' LAHS-kah',morph:['таксі = taxi','будь ласка = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'Я хочу їхати до готелю',pr:'yah KHO-choo YEE-khah-ty doh hoh-TEH-lyu',morph:['я хочу їхати = I want to go','до готелю = to the hotel']},
        {t:'chal',en:'Stop here, please',tr:'Зупиніться тут, будь ласка',pr:'zoo-py-NEET-sya toot, bood\' LAHS-kah',morph:['зупиніться тут = stop here','будь ласка = please']},
        {t:'chal',en:'How much is it?',tr:'Скільки це коштує?',pr:'SKEEL-ky tseh kosh-TOO-yeh',morph:['скільки = how much','це коштує? = does this cost?']}
      ],
      blocks:['<code>я хочу їхати до …</code> = I want to go to …','<code>зупиніться тут</code> = stop here'] },
    { id:15, title:'The hotel', focus:'бронювання · номер · ключ · ніч',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">У мене є бронювання</span> — I have a reservation.',tr:'бронювання'},
        {t:'words',items:[{tr:'готель',pr:'hoh-TEL',en:'the hotel'},{tr:'бронювання',pr:'broh-nyu-VAHN-nya',en:'the reservation'},{tr:'номер',pr:'NOH-mer',en:'the room'},{tr:'ключ',pr:'klyooch',en:'the key'},{tr:'одну ніч',pr:'ohd-NOO neech',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'У мене є бронювання',pr:'oo MEH-neh yeh broh-nyu-VAHN-nya',morph:['у мене є = I have','бронювання = a reservation']},
        {t:'chal',en:'A room for one night, please',tr:'Номер на одну ніч, будь ласка',pr:'NOH-mer nah ohd-NOO neech, bood\' LAHS-kah',morph:['номер = a room','на одну ніч = for one night','будь ласка = please']},
        {t:'chal',en:'The key, please',tr:'Ключ, будь ласка',pr:'klyooch, bood\' LAHS-kah',morph:['ключ = the key','будь ласка = please']},
        {t:'chal',en:'Where is my room?',tr:'Де мій номер?',pr:'deh meey NOH-mer',morph:['де = where','мій номер = my room']}
      ],
      blocks:['<code>бронювання</code> = reservation','<code>номер</code> = room','<code>ключ</code> = key'] },
    { id:16, title:'Ask for help', focus:'не розумію · повільніше · англійською',
      steps:[
        {t:'say',text:'When the language is too fast: <span class="inline-tr">Повільніше, будь ласка</span> — slower, please.',tr:'Повільніше, будь ласка'},
        {t:'words',items:[{tr:'повільніше',pr:'poh-VEEL-nee-she',en:'slower'},{tr:'ще раз',pr:'shcheh rahz',en:'again'},{tr:'англійською',pr:'ahn-HLEEY-s\'koo-yoo',en:'English'},{tr:'ви можете допомогти?',pr:'vy MOH-zhe-te doh-poh-moh-HTY',en:'can you help?'}]},
        {t:'chal',en:'I don\'t understand',tr:'Я не розумію',pr:'yah neh roh-zoo-MEE-yoo',morph:['я = I','не = not','розумію = understand']},
        {t:'chal',en:'Slower, please',tr:'Повільніше, будь ласка',pr:'poh-VEEL-nee-she, bood\' LAHS-kah',morph:['повільніше = slower','будь ласка = please']},
        {t:'chal',en:'Can you help me?',tr:'Ви можете допомогти?',pr:'vy MOH-zhe-te doh-poh-moh-HTY',morph:['ви можете = can you','допомогти = help']},
        {t:'chal',en:'Do you speak English?',tr:'Ви говорите англійською?',pr:'vy hoh-VOH-ry-te ahn-HLEEY-s\'koo-yoo',morph:['ви говорите = do you speak','англійською = English']}
      ],
      blocks:['<code>повільніше</code> = slower','<code>Ви говорите англійською?</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'cafe', title:'☕ At a café', emoji:'☕', turns:[
      {who:'You',tr:'Добрий день! Одну каву, будь ласка.',pr:'DOH-bryi den, OD-noo KAH-voo, bool LAHS-kah',en:'Good day! One coffee, please.'},
      {who:'Barista',tr:'Будь ласка. На винос чи на місці?',pr:'bool LAHS-kah, na VY-nos chy na MEES-tsi',en:'Here you go. To go or for here?'},
      {who:'You',tr:'На винос, дякую.',pr:'na VY-nos, DYAH-koo',en:'To go, thanks.'},
      {who:'Barista',tr:'Ось. З вас тридцять гривень.',pr:'os, z vas TRY-dtsyat HREE-ven',en:'Here. That\'s thirty hryvnias.'},
      {who:'You',tr:'Дуже дякую!',pr:'DOO-zheh DYAH-koo',en:'Thank you very much!'}
    ]},
    { id:'transport', title:'🚉 At the station', emoji:'🚉', turns:[
      {who:'You',tr:'Вибачте, де вокзал?',pr:'VY-bach-teh, deh vok-ZAHL',en:'Excuse me, where\'s the station?'},
      {who:'Local',tr:'Он там, прямо.',pr:'on tam, PRYAH-moh',en:'Over there, straight ahead.'},
      {who:'You',tr:'Дякую. Один квиток до Києва, будь ласка.',pr:'DYAH-koo, oh-DYN kveet-TOK doh KYEH-vah, bool LAHS-kah',en:'Thanks. One ticket to Kyiv, please.'},
      {who:'Ticket',tr:'Двісті гривень. Поїзд о дев\'ятій.',pr:'DVIS-ti HREE-ven, PO-yizd oh deh-VYAT-yi',en:'Two hundred hryvnias. The train is at nine.'}
    ]},
    { id:'restaurant', title:'🍽️ At a restaurant', emoji:'🍽️', turns:[
      {who:'Waiter',tr:'Добрий вечір! У вас є бронювання?',pr:'DOH-bryi VEH-cheer, oo vas yeh broh-noo-VAN-nyah',en:'Good evening! Do you have a reservation?'},
      {who:'You',tr:'Так, на двох.',pr:'tak, na dvoh',en:'Yes, for two.'},
      {who:'You',tr:'Меню, будь ласка.',pr:'meh-NOO, bool LAHS-kah',en:'The menu, please.'},
      {who:'You',tr:'Я хочу борщ і чай.',pr:'ya KHO-chu borshch i chai',en:'I\'d like borscht and tea.'},
      {who:'Waiter',tr:'Чудовий вибір! Смачного!',pr:'choo-DOH-vyi VY-beer, smach-NOH-hoh',en:'Excellent choice! Enjoy your meal!'}
    ]},
    { id:'shopping', title:'🛍️ Shopping', emoji:'🛍️', turns:[
      {who:'You',tr:'Скільки коштує?',pr:'SKEEL-ky kosh-TOO-yeh',en:'How much is this?'},
      {who:'Seller',tr:'П\'ятсот гривень.',pr:'pyat-SOT HREE-ven',en:'Five hundred hryvnias.'},
      {who:'You',tr:'Дорого. Можна приміряти?',pr:'DOH-roh-oh, MOZH-nah pry-mee-RYAH-ty',en:'It\'s expensive. Can I try it on?'},
      {who:'Seller',tr:'Звісно! Примірочна ось там.',pr:'ZVEES-noh, pry-mee-ROCH-nah os tam',en:'Of course! The fitting room is over there.'},
      {who:'You',tr:'Добре, я беру.',pr:'DOH-breh, ya BEH-roo',en:'OK, I\'ll take it.'}
    ]}
  ],
  pocket: [
    {tr:'Привіт',pr:'pry-VEET',en:'Hello',c:'Greetings'},
    {tr:'Добрий день',pr:'DOH-bryi den',en:'Good day / hello',c:'Greetings'},
    {tr:'До побачення',pr:'doh poh-BAH-chen-nyah',en:'Goodbye',c:'Greetings'},
    {tr:'Як справи?',pr:'yak SPRA-vy',en:'How are you?',c:'Greetings'},
    {tr:'Дякую',pr:'DYAH-koo',en:'Thank you',c:'Courtesy'},
    {tr:'Дуже дякую',pr:'DOO-zheh DYAH-koo',en:'Thank you very much',c:'Courtesy'},
    {tr:'Будь ласка',pr:'bool LAHS-kah',en:'Please / you\'re welcome',c:'Courtesy'},
    {tr:'Вибачте',pr:'VY-bach-teh',en:'Excuse me / sorry',c:'Courtesy'},
    {tr:'Так',pr:'tak',en:'Yes',c:'Courtesy'},
    {tr:'Ні',pr:'nee',en:'No',c:'Courtesy'},
    {tr:'Один',pr:'oh-DYN',en:'1',c:'Numbers'},
    {tr:'Два',pr:'dvah',en:'2',c:'Numbers'},
    {tr:'Три',pr:'try',en:'3',c:'Numbers'},
    {tr:'П\'ять',pr:'pyat',en:'5',c:'Numbers'},
    {tr:'Десять',pr:'DEH-syat',en:'10',c:'Numbers'},
    {tr:'Кава',pr:'KAH-vah',en:'coffee',c:'Food'},
    {tr:'Вода',pr:'vo-DAH',en:'water',c:'Food'},
    {tr:'Хліб',pr:'khleeb',en:'bread',c:'Food'},
    {tr:'Меню',pr:'meh-NOO',en:'the menu',c:'Food'},
    {tr:'Чай',pr:'chai',en:'tea',c:'Food'},
    {tr:'Де...?',pr:'deh',en:'Where is...?',c:'Directions'},
    {tr:'Направо',pr:'nah-PRAH-voh',en:'to the right',c:'Directions'},
    {tr:'Наліво',pr:'nah-LEE-voh',en:'to the left',c:'Directions'},
    {tr:'Прямо',pr:'PRYAH-moh',en:'straight ahead',c:'Directions'},
    {tr:'Вокзал',pr:'vok-ZAHL',en:'the station',c:'Directions'},
    {tr:'Скільки коштує?',pr:'SKEEL-ky kosh-TOO-yeh',en:'how much is it?',c:'Shopping'},
    {tr:'Дорого',pr:'DOH-roh-oh',en:'it\'s expensive',c:'Shopping'},
    {tr:'Можна приміряти?',pr:'MOZH-nah pry-mee-RYAH-ty',en:'can I try it on?',c:'Shopping'},
    {tr:'Допомога!',pr:'doh-poh-MOH-hah',en:'Help!',c:'Emergency'},
    {tr:'Я не розумію',pr:'ya neh roh-ZOO-mee-yoo',en:'I don\'t understand',c:'Emergency'},
    {tr:'Мені потрібна допомога',pr:'meh-NEE po-TREEB-nah doh-poh-MOH-hah',en:'I need help',c:'Emergency'},
    {tr:'Лікар',pr:'LEE-kahr',en:'doctor',c:'Emergency'},
    {tr:'Де туалет?',pr:'deh too-AH-let',en:'Where is the bathroom?',c:'Emergency'},
    {tr:'Сьогодні',pr:'syoh-HOD-nee',en:'today',c:'Time'},
    {tr:'Завтра',pr:'ZAHV-trah',en:'tomorrow',c:'Time'},
    {tr:'Аеропорт',pr:'ah-eh-roh-PORT',en:'the airport',c:'Travel'},
    {tr:'Паспорт',pr:'PAHS-port',en:'the passport',c:'Travel'},
    {tr:'Квиток',pr:'kvee-TOHK',en:'the ticket',c:'Travel'},
    {tr:'Таксі',pr:'tahk-SEE',en:'the taxi',c:'Travel'},
    {tr:'Готель',pr:'hoh-TEL',en:'the hotel',c:'Travel'},
    {tr:'У мене є бронювання',pr:'oo MEH-neh yeh broh-nyu-VAHN-nya',en:'I have a reservation',c:'Travel'},
    {tr:'Повільніше, будь ласка',pr:'poh-VEEL-nee-she, bood\' LAHS-kah',en:'Slower, please',c:'Travel'},
    {tr:'Ви говорите англійською?',pr:'vy hoh-VOH-ry-te ahn-HLEEY-s\'koo-yoo',en:'Do you speak English?',c:'Travel'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Shopping','Emergency','Time','Travel'],
  culture: [
    {icon:'🥟',title:'Cooking is love',body:'Ukrainian hospitality means a full table: borscht (борщ), verenyky (вареники) filled with potato or cherries, and bread with salo. Refusing food outright can seem cold — accept a small portion and say "дякую".'},
    {icon:'☕',title:'Coffee culture',body:'Cafés and кава are everywhere in the cities. Order a "кава" (coffee) or "американо". It\'s perfectly normal to sit and talk for a while — nobody rushes you.'},
    {icon:'🤝',title:'Warm but formal at first',body:'Greet strangers with "Добрий день" and use the polite "ви" form. On first meeting, "пан" (sir) and "пані" (ma\'am) are a sign of respect until people warm up.'},
    {icon:'🌻',title:'Symbols of pride',body:'The вишиванка (embroidered shirt) and писанки (decorated eggs) are national symbols worn and displayed on holidays. Naming them shows real respect for the culture.'},
    {icon:'🗣️',title:'A little UKrainian goes far',body:'A "дякую" and "будь ласка" open every door. Ukrainians light up when visitors try their language — effort matters far more than perfect endings.'},
    {icon:'🚇',title:'Cities & transport',body:'Ukrainian cities have clean, efficient metros and cheap marshrutka minibuses. In the metro, keep to the right on the escalator and let people off before you get on.'}
  ],
  sounds: [
    {l:'и',say:'a short "y" as in "bit" — never a long English "ee"',ex:'син = seen (son) · вода = vo-dah (water)',voice:'син'},
    {l:'і',say:'a clear "ee" as in "see"',ex:'літо = LEE-toh (summer) · кіт = keet (cat)',voice:'кіт'},
    {l:'ї',say:'"yi" — a soft i with a "y" glide at the start',ex:'їжа = YEE-zha (food) · мої = mo-YEE (my)',voice:'мої'},
    {l:'є',say:'"ye" as in "yes"',ex:'є = yeh (there is) · моє = mo-YEH (mine)',voice:'моє'},
    {l:'ґ',say:'a hard "g" as in "go" — a rare letter',ex:'ґанок = GAH-nok (porch)',voice:'ґанок'},
    {l:'\'',say:'apostrophe — keeps a consonant hard before a soft vowel (я/ю/є/ї)',ex:'п\'ять = pyat (five) · сім\'я = see-MYA (family)',voice:'п\'ять'},
    {l:'ь',say:'soft sign — softens (palatalizes) the consonant before it',ex:'день = den (day) · сіль = seel (salt)',voice:'день'},
    {l:'х',say:'a deep "kh" as in "Bach" — almost no English equivalent',ex:'хліб = khleeb (bread) · добре = DOH-breh (good)',voice:'хліб'}
  ],
  resources: [
    {icon:'🗣️',t:'Easy Ukrainian',d:'Real street interviews with native speakers and subtitles — ideal for natural Ukrainian.',q:'Easy Ukrainian street interviews'},
    {icon:'🐢',t:'Ukrainian Lessons',d:'Clear, slow and friendly everyday-Ukrainian videos for beginners.',q:'Ukrainian lessons for beginners'},
    {icon:'📚',t:'Speak Ukrainian',d:'Conversational Ukrainian built from real situations, not grammar tables.',q:'Speak Ukrainian lessons'},
    {icon:'🎧',t:'Ukrainian podcasts',d:'Easy listening for learners — perfect for a walk or commute.',q:'Ukrainian podcast for learners'},
    {icon:'🔤',t:'Ukrainian alphabet',d:'A quick, fun intro to reading Cyrillic — the fastest route to independent reading.',q:'Ukrainian alphabet pronunciation'}
  ]
};
