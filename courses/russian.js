/* ---- russian ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["russian"] = {
  name: 'Russian',
  flag: '🇷🇺',
  tts: 'ru-RU',
  dir: 'ltr',
  native: 'Русский',
  soundTitle: 'Russian sounds & alphabet',
  soundIntro: 'Russian is written in Cyrillic. A handful of letters match English exactly — learn the ones that differ and you can read almost any word aloud.',
  grammar: '<p>Russian has no words for <b>a</b> or <b>the</b> — <i>кофе</i> can mean "coffee", "a coffee" or "the coffee". The verb <i>to be</i> is usually dropped in the present: <i>Он студент</i> = he (is) a student. Word order is flexible, so you can move words around for emphasis. One thing to practise: <b>stress</b>. It moves from word to word, so learn each word with its stressed vowel marked — it\'s the key to being understood.</p>',
  bridges: '<div class="note">🎈 <b>English.</b> Russian has borrowed plenty of words you\'ll recognise: <i>компьютер</i> (computer), <i>такси</i> (taxi), <i>интернет</i> (internet), <i>кофе</i> (coffee), <i>мама</i> (mum).</div><div class="note">🇺🇦 <b>Ukrainian.</b> Russian and Ukrainian are close cousins — much of the alphabet and vocabulary lines up, and a lot of Ukrainian speakers understand Russian (and vice versa). What you learn here will help you in both.</div>',
  lessons: [
    { id:1, title:'Greetings — hello', focus:'Здравствуйте · Привет · До свидания',
      steps:[
        {t:'say',text:'Russian has two ways to say hello. The formal <span class="inline-tr">Здравствуйте</span> is for strangers, shops and work. The informal <span class="inline-tr">Привет</span> is for friends.',tr:'Здравствуйте'},
        {t:'words',items:[{tr:'Здравствуйте',pr:'ZDRAST-vwee-tyeh',en:'hello (formal)'},{tr:'Привет',pr:'pree-VYET',en:'hi (informal)'},{tr:'До свидания',pr:'dah svee-DAH-nee-yuh',en:'goodbye'},{tr:'Доброе утро',pr:'DOH-brah-yeh OO-trah',en:'good morning'}]},
        {t:'chal',en:'Hello (formal)',tr:'Здравствуйте',pr:'ZDRAST-vwee-tyeh',morph:['здравствуйте = hello (formal)']},
        {t:'say',text:'Shorter and friendlier: <span class="inline-tr">Привет</span> — hi.',tr:'Привет'},
        {t:'chal',en:'Hi',tr:'Привет',pr:'pree-VYET',morph:['привет = hi (informal)']},
        {t:'say',text:'To ask how someone is: <span class="inline-tr">Как дела?</span> — literally "how are things?".',tr:'Как дела?'},
        {t:'words',items:[{tr:'Как дела?',pr:'kak dee-LAH',en:'How are you?'},{tr:'Хорошо',pr:'hah-rah-SHOH',en:'well / good'},{tr:'Спасибо',pr:'spah-SEE-bah',en:'thank you'}]},
        {t:'chal',en:'Hello! How are you?',tr:'Здравствуйте! Как дела?',pr:'ZDRAST-vwee-tyeh! kak dee-LAH?',morph:['здравствуйте = hello','как дела? = how are you?']}
      ],
      blocks:['<code>Здравствуйте</code> = hello (formal)','<code>Привет</code> = hi (informal)','<code>До свидания</code> = goodbye','<code>Как дела?</code> = how are you?'] },
    { id:2, title:'Polite phrases', focus:'Спасибо · Пожалуйста · Извините',
      steps:[
        {t:'say',text:'The word you\'ll use every single day: <span class="inline-tr">Спасибо</span> — thank you.',tr:'Спасибо'},
        {t:'words',items:[{tr:'Спасибо',pr:'spah-SEE-bah',en:'thank you'},{tr:'Пожалуйста',pr:'pah-ZHAH-loos-tah',en:'please / you\'re welcome'},{tr:'Извините',pr:'eez-vee-NEE-tyeh',en:'excuse me / sorry'},{tr:'Да',pr:'dah',en:'yes'},{tr:'Нет',pr:'nyeht',en:'no'}]},
        {t:'chal',en:'Thank you',tr:'Спасибо',pr:'spah-SEE-bah',morph:['спасибо = thank you']},
        {t:'say',text:'<span class="inline-tr">Пожалуйста</span> does two jobs — it means both "please" and "you\'re welcome".',tr:'Пожалуйста'},
        {t:'chal',en:'A coffee, please',tr:'Кофе, пожалуйста',pr:'KOH-feh, pah-ZHAH-loos-tah',morph:['кофе = coffee','пожалуйста = please']},
        {t:'say',text:'To get someone\'s attention or apologise: <span class="inline-tr">Извините</span> — excuse me / sorry.',tr:'Извините'},
        {t:'chal',en:'Yes / No',tr:'Да / Нет',pr:'dah / nyeht',morph:['да = yes','нет = no']}
      ],
      blocks:['<code>Спасибо</code> = thank you','<code>Пожалуйста</code> = please / you\'re welcome','<code>Извините</code> = excuse me / sorry','<code>Да / Нет</code> = yes / no'] },
    { id:3, title:'Numbers 1–10', focus:'Один · Два · Три · Десять',
      steps:[
        {t:'say',text:'Numbers are the fastest win. Listen and repeat the first five: <span class="inline-tr">Один, два, три, четыре, пять</span>.',tr:'Один'},
        {t:'words',items:[{tr:'один',pr:'ah-DEEN',en:'1'},{tr:'два',pr:'dvah',en:'2'},{tr:'три',pr:'tree',en:'3'},{tr:'четыре',pr:'chee-TIH-ree',en:'4'},{tr:'пять',pr:'pyat',en:'5'}]},
        {t:'chal',en:'Two coffees, please',tr:'Два кофе, пожалуйста',pr:'dvah KOH-feh, pah-ZHAH-loos-tah',morph:['два = two','кофе = coffee','пожалуйста = please']},
        {t:'say',text:'Now 6 to 10: <span class="inline-tr">Шесть, семь, восемь, девять, десять</span>.',tr:'Шесть'},
        {t:'words',items:[{tr:'шесть',pr:'shest',en:'6'},{tr:'семь',pr:'syem',en:'7'},{tr:'восемь',pr:'VOH-syem',en:'8'},{tr:'девять',pr:'DYEH-vyet',en:'9'},{tr:'десять',pr:'DYEH-syet',en:'10'}]},
        {t:'chal',en:'Three coffees, please',tr:'Три кофе, пожалуйста',pr:'tree KOH-feh, pah-ZHAH-loos-tah',morph:['три = three','кофе = coffee','пожалуйста = please']},
        {t:'chal',en:'It\'s five rubles',tr:'Пять рублей',pr:'pyat roo-BLAY',morph:['пять = five','рублей = rubles']}
      ],
      blocks:['<code>один</code>, <code>два</code>, <code>три</code>, <code>четыре</code>, <code>пять</code> = 1–5','<code>шесть</code> … <code>десять</code> = 6–10'] },
    { id:4, title:'"I want" — хочу & нужно', focus:'Я хочу · Мне нужно · Можно',
      steps:[
        {t:'say',text:'The magic phrase to ask for anything: <span class="inline-tr">Я хочу</span> — I want.',tr:'Я хочу'},
        {t:'chal',en:'I want tea',tr:'Я хочу чай',pr:'ya hah-CHOO chai',morph:['я = I','хочу = I want','чай = tea']},
        {t:'say',text:'To say you need something, use <span class="inline-tr">Мне нужно</span> — I need. For a feminine noun the word changes slightly, e.g. <span class="inline-tr">мне нужна вода</span> — same idea.',tr:'Мне нужно'},
        {t:'chal',en:'I need water',tr:'Мне нужна вода',pr:'mnyeh noozh-NAH vah-DAH',morph:['мне нужна = I need (fem. object)','вода = water']},
        {t:'say',text:'To ask for permission, use <span class="inline-tr">Можно?</span> — may I? / is it OK?',tr:'Можно?'},
        {t:'chal',en:'May I?',tr:'Можно?',pr:'MOHZH-nah',morph:['можно = may I / is it allowed']}
      ],
      blocks:['<code>Я хочу</code> = I want','<code>Мне нужно</code> = I need','<code>Можно?</code> = may I? (is it OK?)'] },
    { id:5, title:'Food & drink', focus:'Вода · Хлеб · Чай · Кофе · Счёт',
      steps:[
        {t:'say',text:'Eating out? The essentials: <span class="inline-tr">вода</span> (water), <span class="inline-tr">хлеб</span> (bread), <span class="inline-tr">чай</span> (tea), <span class="inline-tr">кофе</span> (coffee).',tr:'вода'},
        {t:'words',items:[{tr:'вода',pr:'vah-DAH',en:'water'},{tr:'хлеб',pr:'khlyep',en:'bread'},{tr:'чай',pr:'chai',en:'tea'},{tr:'кофе',pr:'KOH-feh',en:'coffee',link:'≈ English coffee'},{tr:'молоко',pr:'mah-lah-KOH',en:'milk'},{tr:'вино',pr:'vee-NOH',en:'wine',link:'≈ English wine'}]},
        {t:'chal',en:'Water and bread, please',tr:'Вода и хлеб, пожалуйста',pr:'vah-DAH ee khlyep, pah-ZHAH-loos-tah',morph:['вода = water','и = and','хлеб = bread','пожалуйста = please']},
        {t:'say',text:'To order the menu or ask for the bill: <span class="inline-tr">меню</span> and <span class="inline-tr">счёт</span>.',tr:'счёт'},
        {t:'words',items:[{tr:'меню',pr:'meh-NYOO',en:'the menu',link:'≈ English menu'},{tr:'счёт',pr:'schyot',en:'the bill'},{tr:'вкусно',pr:'VKOOS-nah',en:'tasty / delicious'}]},
        {t:'chal',en:'The bill, please',tr:'Счёт, пожалуйста',pr:'schyot, pah-ZHAH-loos-tah',morph:['счёт = the bill','пожалуйста = please']}
      ],
      blocks:['<code>вода</code>, <code>хлеб</code>, <code>чай</code>, <code>кофе</code> = water, bread, tea, coffee','<code>счёт</code> = the bill','<code>вкусно</code> = tasty / delicious'] },
    { id:6, title:'Getting around', focus:'Где? · Налево · Направо · Прямо',
      steps:[
        {t:'say',text:'The most useful question in any city: <span class="inline-tr">Где…?</span> — where is…?',tr:'Где?'},
        {t:'words',items:[{tr:'Где...?',pr:'gdyeh',en:'Where is...?'},{tr:'налево',pr:'nah-LYEH-vah',en:'to the left'},{tr:'направо',pr:'nah-PRAH-vah',en:'to the right'},{tr:'прямо',pr:'PRYAH-mah',en:'straight ahead'},{tr:'вокзал',pr:'vahg-ZAHL',en:'the station'},{tr:'туалет',pr:'too-ah-LYET',en:'the bathroom',link:'≈ English toilet'}]},
        {t:'chal',en:'Where is the station?',tr:'Где вокзал?',pr:'gdyeh vahg-ZAHL?',morph:['где = where','вокзал = the station']},
        {t:'chal',en:'Where is the bathroom?',tr:'Где туалет?',pr:'gdyeh too-ah-LYET?',morph:['где = where','туалет = the bathroom']},
        {t:'say',text:'<span class="inline-tr">Налево</span> and <span class="inline-tr">направо</span> tell you which way to turn. <span class="inline-tr">Прямо</span> is straight ahead.',tr:'направо'},
        {t:'chal',en:'Straight ahead, then left',tr:'Прямо, потом налево',pr:'PRYAH-mah, pah-TOM nah-LYEH-vah',morph:['прямо = straight ahead','потом = then','налево = to the left']}
      ],
      blocks:['<code>Где…?</code> = where is…?','<code>налево</code> / <code>направо</code> = left / right','<code>прямо</code> = straight ahead'] },
    { id:7, title:'Questions & "do you have…?"', focus:'У вас есть…? · Сколько стоит? · Это',
      steps:[
        {t:'say',text:'To ask if someone has something: <span class="inline-tr">У вас есть…?</span> (formal). With friends, use <span class="inline-tr">У тебя есть…?</span>',tr:'У вас есть…?'},
        {t:'chal',en:'Do you have a table?',tr:'У вас есть стол?',pr:'oo vahs yest stol?',morph:['у вас есть = do you have','стол = a table']},
        {t:'say',text:'To ask the price: <span class="inline-tr">Сколько стоит?</span> — how much does it cost?',tr:'Сколько стоит?'},
        {t:'chal',en:'How much is this?',tr:'Сколько это стоит?',pr:'SKOL-kah EH-tah STOH-eet?',morph:['сколько = how much','это = this','стоит = it costs']},
        {t:'say',text:'<span class="inline-tr">Это</span> = this / it — a very handy little word in shops.',tr:'Это'},
        {t:'chal',en:'Do you have tea?',tr:'У вас есть чай?',pr:'oo vahs yest chai?',morph:['у вас есть = do you have','чай = tea']}
      ],
      blocks:['<code>у вас есть…?</code> = do you have…? (formal)','<code>у тебя есть…?</code> = do you have…? (informal)','<code>сколько стоит?</code> = how much does it cost?'] },
    { id:8, title:'Family & people', focus:'Семья · Мама · Папа · Друг',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">семья</span> (family), <span class="inline-tr">мама</span> (mum), <span class="inline-tr">папа</span> (dad).',tr:'семья'},
        {t:'words',items:[{tr:'семья',pr:'seem-YAH',en:'family'},{tr:'мама',pr:'MAH-mah',en:'mum'},{tr:'папа',pr:'PAH-pah',en:'dad'},{tr:'брат',pr:'braht',en:'brother',link:'≈ English brother'},{tr:'сестра',pr:'sees-TRAH',en:'sister',link:'≈ English sister'},{tr:'друг',pr:'droog',en:'friend'}]},
        {t:'chal',en:'This is my family',tr:'Это моя семья',pr:'EH-tah mah-YAH seem-YAH',morph:['это = this is','моя = my (fem.)','семья = family']},
        {t:'say',text:'<span class="inline-tr">Мой</span> = my (masculine), <span class="inline-tr">моя</span> = my (feminine). <b>семья</b> is feminine, so <b>моя семья</b>.',tr:'моя'},
        {t:'chal',en:'This is my friend',tr:'Это мой друг',pr:'EH-tah moy droog',morph:['это = this is','мой = my (masc.)','друг = friend']}
      ],
      blocks:['<code>мама</code> / <code>папа</code> = mum / dad','<code>брат</code> / <code>сестра</code> = brother / sister','<code>мой / моя</code> = my (masc / fem)'] },
    { id:9, title:'Time, days & weather', focus:'Сегодня · Завтра · Какая погода?',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">сегодня</span>, tomorrow is <span class="inline-tr">завтра</span>, now is <span class="inline-tr">сейчас</span>.',tr:'сегодня'},
        {t:'words',items:[{tr:'сегодня',pr:'see-GOHD-nya',en:'today'},{tr:'завтра',pr:'ZAHF-trah',en:'tomorrow'},{tr:'вчера',pr:'fchee-RAH',en:'yesterday'},{tr:'сейчас',pr:'see-CHAS',en:'now'},{tr:'день',pr:'dyen',en:'day'}]},
        {t:'chal',en:'See you tomorrow',tr:'До завтра',pr:'dah ZAHF-trah',morph:['до = until','завтра = tomorrow']},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">Какая погода?</span>',tr:'Какая погода?'},
        {t:'words',items:[{tr:'Какая погода?',pr:'kah-KAH-yah pah-GOH-dah',en:'what\'s the weather?'},{tr:'дождь',pr:'dohzhd',en:'rain'},{tr:'снег',pr:'snyek',en:'snow'},{tr:'солнце',pr:'SOHN-tseh',en:'sun'}]},
        {t:'chal',en:'It\'s raining',tr:'Идёт дождь',pr:'ee-DYOT dohzhd',morph:['идёт = goes / falls','дождь = rain']}
      ],
      blocks:['<code>сегодня / завтра</code> = today / tomorrow','<code>какая погода?</code> = what\'s the weather?','<code>идёт дождь</code> = it\'s raining'] },
    { id:10, title:'Introducing yourself', focus:'Меня зовут · Как вас зовут? · Очень приятно',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">Меня зовут…</span> = my name is…. It literally means "they call me…".',tr:'Меня зовут'},
        {t:'chal',en:'My name is __NAME__',tr:'Меня зовут __NAME__',pr:'mee-NYAH zah-VOOT __NAME__',morph:['меня = me','зовут = they call','__NAME__ = your name']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">Как вас зовут?</span> (formal). For friends: <span class="inline-tr">Как тебя зовут?</span>',tr:'Как вас зовут?'},
        {t:'chal',en:'What\'s your name?',tr:'Как вас зовут?',pr:'kahk vahs zah-VOOT?',morph:['как = how','вас = you (formal)','зовут = (they) call']},
        {t:'say',text:'<span class="inline-tr">Очень приятно</span> = pleased to meet you. Lovely to say when you meet someone new.',tr:'Очень приятно'},
        {t:'chal',en:'Pleased to meet you',tr:'Очень приятно',pr:'OH-cheen pree-YAHT-nah',morph:['очень = very','приятно = pleased / nice']}
      ],
      blocks:['<code>меня зовут…</code> = my name is…','<code>как вас зовут?</code> = what\'s your name?','<code>очень приятно</code> = pleased to meet you'] },
    { id:11, title:'Health & emergency', focus:'Помогите! · Врач · Аптека · Я не понимаю',
      steps:[
        {t:'say',text:'The most important words if you need help: <span class="inline-tr">Помогите!</span> (help!), <span class="inline-tr">врач</span> (doctor), <span class="inline-tr">аптека</span> (pharmacy).',tr:'Помогите!'},
        {t:'words',items:[{tr:'Помогите!',pr:'pah-mah-GHEE-tyeh',en:'Help!'},{tr:'врач',pr:'vrach',en:'the doctor'},{tr:'аптека',pr:'ahp-TYEH-kah',en:'the pharmacy'},{tr:'больница',pr:'bahl-NEE-tsa',en:'the hospital'},{tr:'полиция',pr:'pah-LEE-tsee-ya',en:'the police',link:'≈ English police'}]},
        {t:'chal',en:'Help!',tr:'Помогите!',pr:'pah-mah-GHEE-tyeh',morph:['помогите = help']},
        {t:'say',text:'If you don\'t understand: <span class="inline-tr">Я не понимаю</span> — I don\'t understand.',tr:'Я не понимаю'},
        {t:'chal',en:'I don\'t understand',tr:'Я не понимаю',pr:'ya neh pah-nee-MAH-yoo',morph:['я = I','не = not','понимаю = I understand']},
        {t:'chal',en:'I need a doctor',tr:'Мне нужен врач',pr:'mnyeh NOO-zhen vrach',morph:['мне нужен = I need (masc. object)','врач = a doctor']}
      ],
      blocks:['<code>Помогите!</code> = help!','<code>врач</code> = the doctor','<code>аптека</code> = the pharmacy','<code>я не понимаю</code> = I don\'t understand'] },
    { id:12, title:'Tying it together', focus:'A full day in Russian',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolbox. This capstone uses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello! How are you?',tr:'Здравствуйте! Как дела?',pr:'ZDRAST-vwee-tyeh! kak dee-LAH?',morph:['здравствуйте = hello','как дела? = how are you?']},
        {t:'chal',en:'I want tea, please',tr:'Я хочу чай, пожалуйста',pr:'ya hah-CHOO chai, pah-ZHAH-loos-tah',morph:['я хочу = I want','чай = tea','пожалуйста = please']},
        {t:'chal',en:'Where is the station?',tr:'Где вокзал?',pr:'gdyeh vahg-ZAHL?',morph:['где = where','вокзал = the station']},
        {t:'chal',en:'How much is this?',tr:'Сколько это стоит?',pr:'SKOL-kah EH-tah STOH-eet?',morph:['сколько стоит = how much','это = this']},
        {t:'chal',en:'Thank you very much!',tr:'Спасибо большое!',pr:'bahl-SHO-yeh spah-SEE-bah',morph:['спасибо = thank you','большое = big / very']}
      ],
      blocks:['You built: greetings, ordering, directions, prices, thanks — a full day out in Russian.'] },
    { id:13, title:'Airport & tickets', focus:'аэропорт · паспорт · билет · рейс',
      steps:[
        {t:'say',text:'You have landed. The building is the <span class="inline-tr">аэропорт</span>. Your document is a <span class="inline-tr">паспорт</span>.',tr:'аэропорт'},
        {t:'words',items:[{tr:'аэропорт',pr:'ah-eh-rah-PORT',en:'the airport'},{tr:'паспорт',pr:'PAS-part',en:'the passport'},{tr:'билет',pr:'bee-LYET',en:'the ticket'},{tr:'рейс',pr:'rayss',en:'the flight'},{tr:'выход',pr:'VIH-khat',en:'the gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'Где аэропорт?',pr:'gdyeh ah-eh-rah-PORT',morph:['где = where','аэропорт = the airport']},
        {t:'chal',en:'Here is my passport',tr:'Вот мой паспорт',pr:'voht moy PAS-part',morph:['вот = here is','мой = my','паспорт = passport']},
        {t:'chal',en:'A ticket, please',tr:'Билет, пожалуйста',pr:'bee-LYET, pah-ZHAH-loos-tah',morph:['билет = ticket','пожалуйста = please']},
        {t:'chal',en:'Where is the gate?',tr:'Где выход?',pr:'gdyeh VIH-khat',morph:['где = where','выход = the gate']}
      ],
      blocks:['<code>аэропорт</code> = airport','<code>паспорт</code> = passport','<code>билет</code> = ticket','<code>выход</code> = gate'] },
    { id:14, title:'The taxi', focus:'такси · ехать · отель · остановитесь',
      steps:[
        {t:'say',text:'The driver is waiting. <span class="inline-tr">такси</span> is the word you need. Tell them where to go with <span class="inline-tr">я хочу ехать</span>.',tr:'такси'},
        {t:'words',items:[{tr:'такси',pr:'tak-SEE',en:'the taxi'},{tr:'водитель',pr:'vah-DEE-teel',en:'the driver'},{tr:'я хочу ехать',pr:'ya hah-CHOO YE-khat',en:'I want to go'},{tr:'остановитесь здесь',pr:'ah-stah-nah-VEE-tes zdyehs',en:'stop here'}]},
        {t:'chal',en:'Taxi, please',tr:'Такси, пожалуйста',pr:'tak-SEE, pah-ZHAH-loos-tah',morph:['такси = taxi','пожалуйста = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'Я хочу ехать в отель',pr:'ya hah-CHOO YE-khat v ah-TEL',morph:['я хочу ехать = I want to go','в отель = to the hotel']},
        {t:'chal',en:'Stop here, please',tr:'Остановитесь здесь, пожалуйста',pr:'ah-stah-nah-VEE-tes zdyehs, pah-ZHAH-loos-tah',morph:['остановитесь = stop','здесь = here','пожалуйста = please']},
        {t:'chal',en:'How much is it?',tr:'Сколько это стоит?',pr:'SKOL-kah EH-tah STOH-eet',morph:['сколько = how much','это = it','стоит = costs']}
      ],
      blocks:['<code>я хочу ехать в …</code> = I want to go to …','<code>остановитесь здесь</code> = stop here'] },
    { id:15, title:'The hotel', focus:'бронь · номер · ключ · ночь',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">У меня бронь</span> — I have a reservation.',tr:'бронь'},
        {t:'words',items:[{tr:'отель',pr:'ah-TEL',en:'the hotel'},{tr:'бронь',pr:'bron',en:'the reservation'},{tr:'номер',pr:'NOH-mer',en:'the room'},{tr:'ключ',pr:'klyooch',en:'the key'},{tr:'одна ночь',pr:'ahd-NAH noch',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'У меня бронь',pr:'oo mee-NYAH bron',morph:['у меня = I have','бронь = a reservation']},
        {t:'chal',en:'A room for one night, please',tr:'Номер на одну ночь, пожалуйста',pr:'NOH-mer nah ahd-NOO noch, pah-ZHAH-loos-tah',morph:['номер = a room','на одну ночь = for one night','пожалуйста = please']},
        {t:'chal',en:'The key, please',tr:'Ключ, пожалуйста',pr:'klyooch, pah-ZHAH-loos-tah',morph:['ключ = the key','пожалуйста = please']},
        {t:'chal',en:'Where is my room?',tr:'Где мой номер?',pr:'gdyeh moy NOH-mer',morph:['где = where','мой номер = my room']}
      ],
      blocks:['<code>бронь</code> = reservation','<code>номер</code> = room','<code>ключ</code> = key'] },
    { id:16, title:'Ask for help', focus:'я не понимаю · медленнее · английский',
      steps:[
        {t:'say',text:'When the language is too fast: <span class="inline-tr">Медленнее, пожалуйста</span> — slower, please.',tr:'Медленнее, пожалуйста'},
        {t:'words',items:[{tr:'медленнее',pr:'MYED-lee-nee-yeh',en:'slower'},{tr:'ещё раз',pr:'eh-SHCHYOH rahs',en:'again'},{tr:'английский',pr:'ahn-GLEEY-skee',en:'English'},{tr:'вы можете помочь?',pr:'vi MOH-zheh-tyeh pah-MOCH',en:'can you help?'}]},
        {t:'chal',en:'I don\'t understand',tr:'Я не понимаю',pr:'ya neh pah-nee-MAH-yoo',morph:['я = I','не = not','понимаю = I understand']},
        {t:'chal',en:'Slower, please',tr:'Медленнее, пожалуйста',pr:'MYED-lee-nee-yeh, pah-ZHAH-loos-tah',morph:['медленнее = slower','пожалуйста = please']},
        {t:'chal',en:'Can you help me?',tr:'Вы можете мне помочь?',pr:'vi MOH-zheh-tyeh mnyeh pah-MOCH',morph:['вы можете = can you','мне = me','помочь = help']},
        {t:'chal',en:'Do you speak English?',tr:'Вы говорите по-английски?',pr:'vi gah-vah-REE-tyeh pah ahn-GLEEY-skee',morph:['вы говорите = do you speak','по-английски = in English']}
      ],
      blocks:['<code>медленнее</code> = slower','<code>Вы говорите по-английски?</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'cafe', title:'☕ At a café', emoji:'☕', turns:[
      {who:'You',tr:'Здравствуйте! Один кофе, пожалуйста.',pr:'ZDRAST-vwee-tyeh! ah-DEEN KOH-feh, pah-ZHAH-loos-tah',en:'Hello! One coffee, please.'},
      {who:'Barista',tr:'Пожалуйста. Что-нибудь ещё?',pr:'pah-ZHAH-loos-tah. shtoh-NEE-boot eh-SHCHYOH?',en:'Here you are. Anything else?'},
      {who:'You',tr:'Нет, спасибо. Сколько это стоит?',pr:'nyeht, spah-SEE-bah. SKOL-kah EH-tah STOH-eet?',en:'No, thanks. How much is that?'},
      {who:'Barista',tr:'Двести рублей.',pr:'DVYEH-stee roob-LYAY',en:'Two hundred rubles.'},
      {who:'You',tr:'Спасибо большое!',pr:'bahl-SHO-yeh spah-SEE-bah',en:'Thank you very much!'}
    ]},
    { id:'transport', title:'🚉 At the station', emoji:'🚉', turns:[
      {who:'You',tr:'Извините, где вокзал?',pr:'eez-vee-NEE-tyeh, gdyeh vahg-ZAHL?',en:'Excuse me, where\'s the station?'},
      {who:'Local',tr:'Прямо, потом налево.',pr:'PRYAH-mah, pah-TOM nah-LYEH-vah',en:'Straight ahead, then left.'},
      {who:'You',tr:'Спасибо. Один билет до Москвы, пожалуйста.',pr:'spah-SEE-bah. ah-DEEN bee-LYET dah mahs-KVEE, pah-ZHAH-loos-tah',en:'Thanks. One ticket to Moscow, please.'},
      {who:'Clerk',tr:'Пятьсот рублей. Поезд в три часа.',pr:'peet-SOHT roob-LYAY. POH-yezd f tree chee-SAH',en:'Five hundred rubles. The train at three o\'clock.'}
    ]},
    { id:'restaurant', title:'🍲 At a restaurant', emoji:'🍲', turns:[
      {who:'Waiter',tr:'Добрый вечер! Столик на двоих?',pr:'DOH-bree VYEH-cheer! STOH-leek nah dvah-EEKH?',en:'Good evening! A table for two?'},
      {who:'You',tr:'Да, пожалуйста.',pr:'dah, pah-ZHAH-loos-tah',en:'Yes, please.'},
      {who:'You',tr:'Я хочу борщ и чай.',pr:'ya hah-CHOO borzhch ee chai',en:'I want borscht and tea.'},
      {who:'Waiter',tr:'Отличный выбор!',pr:'aht-LEECH-nee VEE-bahr!',en:'Excellent choice!'},
      {who:'You',tr:'Счёт, пожалуйста.',pr:'schyot, pah-ZHAH-loos-tah',en:'The bill, please.'}
    ]},
    { id:'shop', title:'🛍️ Shopping', emoji:'🛍️', turns:[
      {who:'You',tr:'Сколько стоит это?',pr:'SKOL-kah STOH-eet EH-tah?',en:'How much is this?'},
      {who:'Seller',tr:'Три тысячи рублей.',pr:'tree TIH-sya-chee roob-LYAY',en:'Three thousand rubles.'},
      {who:'You',tr:'Это дорого. Можно дешевле?',pr:'EH-tah DOH-rah-gah. MOHZH-nah dee-SHEHV-leh?',en:'That\'s expensive. Can it be cheaper?'},
      {who:'Seller',tr:'Хорошо, две тысячи.',pr:'hah-rah-SHOH, dvyeh TIH-sya-chee',en:'OK, two thousand.'},
      {who:'You',tr:'Хорошо, я беру.',pr:'hah-rah-SHOH, ya bee-ROO',en:'OK, I\'ll take it.'}
    ]}
  ],
  pocket: [
    {tr:'Здравствуйте',pr:'ZDRAST-vwee-tyeh',en:'Hello (formal)',c:'Greetings'},
    {tr:'Привет',pr:'pree-VYET',en:'Hi',c:'Greetings'},
    {tr:'До свидания',pr:'dah svee-DAH-nee-yuh',en:'Goodbye',c:'Greetings'},
    {tr:'Как дела?',pr:'kak dee-LAH',en:'How are you?',c:'Greetings'},
    {tr:'Пожалуйста',pr:'pah-ZHAH-loos-tah',en:'Please / you\'re welcome',c:'Courtesy'},
    {tr:'Спасибо',pr:'spah-SEE-bah',en:'Thank you',c:'Courtesy'},
    {tr:'Извините',pr:'eez-vee-NEE-tyeh',en:'Excuse me / sorry',c:'Courtesy'},
    {tr:'Да',pr:'dah',en:'Yes',c:'Courtesy'},
    {tr:'Нет',pr:'nyeht',en:'No',c:'Courtesy'},
    {tr:'один',pr:'ah-DEEN',en:'1',c:'Numbers'},
    {tr:'два',pr:'dvah',en:'2',c:'Numbers'},
    {tr:'три',pr:'tree',en:'3',c:'Numbers'},
    {tr:'четыре',pr:'chee-TIH-ree',en:'4',c:'Numbers'},
    {tr:'пять',pr:'pyat',en:'5',c:'Numbers'},
    {tr:'вода',pr:'vah-DAH',en:'water',c:'Food'},
    {tr:'хлеб',pr:'khlyep',en:'bread',c:'Food'},
    {tr:'чай',pr:'chai',en:'tea',c:'Food'},
    {tr:'кофе',pr:'KOH-feh',en:'coffee',c:'Food'},
    {tr:'меню',pr:'meh-NYOO',en:'the menu',c:'Food'},
    {tr:'счёт',pr:'schyot',en:'the bill',c:'Food'},
    {tr:'Где...?',pr:'gdyeh',en:'Where is...?',c:'Directions'},
    {tr:'налево',pr:'nah-LYEH-vah',en:'to the left',c:'Directions'},
    {tr:'направо',pr:'nah-PRAH-vah',en:'to the right',c:'Directions'},
    {tr:'прямо',pr:'PRYAH-mah',en:'straight ahead',c:'Directions'},
    {tr:'вокзал',pr:'vahg-ZAHL',en:'the station',c:'Directions'},
    {tr:'Сколько стоит?',pr:'SKOL-kah STOH-eet',en:'How much is it?',c:'Shopping'},
    {tr:'У вас есть...?',pr:'oo vahs yest',en:'Do you have...?',c:'Shopping'},
    {tr:'дорого',pr:'DOH-rah-gah',en:'expensive',c:'Shopping'},
    {tr:'Я беру',pr:'ya bee-ROO',en:'I\'ll take it',c:'Shopping'},
    {tr:'Помогите!',pr:'pah-mah-GHEE-tyeh',en:'Help!',c:'Emergency'},
    {tr:'Врач',pr:'vrach',en:'the doctor',c:'Emergency'},
    {tr:'Аптека',pr:'ahp-TYEH-kah',en:'the pharmacy',c:'Emergency'},
    {tr:'Я не понимаю',pr:'ya neh pah-nee-MAH-yoo',en:'I don\'t understand',c:'Emergency'},
    {tr:'сегодня',pr:'see-GOHD-nya',en:'today',c:'Time'},
    {tr:'завтра',pr:'ZAHF-trah',en:'tomorrow',c:'Time'},
    {tr:'Какая погода?',pr:'kah-KAH-yah pah-GOH-dah',en:'What\'s the weather?',c:'Time'},
    {tr:'Аэропорт',pr:'ah-eh-rah-PORT',en:'the airport',c:'Travel'},
    {tr:'Паспорт',pr:'PAS-part',en:'the passport',c:'Travel'},
    {tr:'Билет',pr:'bee-LYET',en:'the ticket',c:'Travel'},
    {tr:'Такси',pr:'tak-SEE',en:'the taxi',c:'Travel'},
    {tr:'Отель',pr:'ah-TEL',en:'the hotel',c:'Travel'},
    {tr:'У меня бронь',pr:'oo mee-NYAH bron',en:'I have a reservation',c:'Travel'},
    {tr:'Медленнее, пожалуйста',pr:'MYED-lee-nee-yeh, pah-ZHAH-loos-tah',en:'Slower, please',c:'Travel'},
    {tr:'Вы говорите по-английски?',pr:'vi gah-vah-REE-tyeh pah ahn-GLEEY-skee',en:'Do you speak English?',c:'Travel'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Shopping','Emergency','Time','Travel'],
  culture: [
    {icon:'🔤',title:'Cyrillic is your friend',body:'Don\'t be scared — a lot of Cyrillic letters match Latin: А, Е, К, М, О, Т look identical to English. You already know half the alphabet; the rest is around 15 new shapes. Learn the sounds below and you can read almost anything.'},
    {icon:'🤝',title:'ты vs вы',body:'Use <b>вы</b> (vy) with strangers, elders and in shops. Use <b>ты</b> (ty) with friends and children. When in doubt, start with <b>вы</b> — moving to <b>ты</b> is a warm sign of friendship, not a slur.'},
    {icon:'😊',title:'Smiling is reserved',body:'Russians often don\'t smile at strangers or on the street — it\'s not rudeness. A smile is a real signal of warmth, not a customer-service habit. Don\'t take it personally!'},
    {icon:'🍲',title:'What\'s on the plate',body:'Borscht (борщ), pelmeni dumplings, blini crepes and olivier salad are classics. Tea is a big deal too — offered generously with sweets. Say <b>приятного аппетита</b> — enjoy your meal.'},
    {icon:'💐',title:'Flowers have rules',body:'If you\'re invited to someone\'s home, bring an <b>odd</b> number of flowers — 1, 3, 5… Even numbers are for funerals. It\'s one of the most-remembered etiquette points.'},
    {icon:'🙏',title:'A little Russian goes far',body:'A "здравствуйте" and "спасибо" open doors. Russians warm up fast to visitors who try their language — effort matters far more than perfect grammar.'}
  ],
  sounds: [
    {l:'ы',say:'A deep "i" with the tongue pulled back and the lips relaxed — there is no English match. Copy the audio.',ex:'мы = mih · вы = vih',voice:'мы'},
    {l:'э',say:'A crisp, open "e" as in "get" — with no "y" glide before it.',ex:'это = EH-tah · этот = EH-taht',voice:'это'},
    {l:'й',say:'A short "y" as in "yes". It always follows a vowel and never stands alone.',ex:'чай = chai · дай = dai',voice:'чай'},
    {l:'ь / ъ',say:'Not sounded on their own. The soft sign ь softens the consonant before it (palatalised); ъ is the rare hard sign.',ex:'пять = pyat · подъезд = pahd-YEHZD',voice:'пять'},
    {l:'ж',say:'Like the "s" in "measure" — a voiced "zh".',ex:'жизнь = zheezn · уже = oo-ZHEH',voice:'жизнь'},
    {l:'ш',say:'Like "sh" in "ship" — but with the tongue tip pulled back, a little deeper.',ex:'школа = SHKOH-lah · хорошо = hah-rah-SHOH',voice:'школа'},
    {l:'щ',say:'A long, soft "shch" — like "fresh cheese" squeezed together. It is always soft.',ex:'борщ = borshch · ещё = eh-SHCHYOH',voice:'борщ'},
    {l:'ц',say:'A crisp "ts" as in "cats" — never a plain "s".',ex:'царь = tsar · улица = OO-lee-tsa',voice:'царь'}
  ],
  resources: [
    {icon:'🗣️',t:'Easy Russian',d:'Real street interviews with native speakers and subtitles — ideal for natural spoken Russian.',q:'Easy Russian street interviews'},
    {icon:'🐢',t:'Real Russian Club',d:'Slow, clear Russian for beginners with stories and vocabulary you\'ll actually use.',q:'Real Russian Club learn Russian'},
    {icon:'📚',t:'Russian with Max',d:'Everyday conversational Russian built from real situations with clear explanations.',q:'Russian with Max learn Russian'},
    {icon:'💬',t:'Be Fluent in Russian',d:'Friendly grammar and vocabulary lessons in short, digestible videos.',q:'Be Fluent in Russian learn Russian'},
    {icon:'🎧',t:'Slow Russian podcast',d:'Easy listening at a gentle pace — perfect for a walk or commute.',q:'slow Russian podcast for learners'}
  ]
};
