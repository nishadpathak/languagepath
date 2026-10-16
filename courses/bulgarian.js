/* ---- bulgarian ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["bulgarian"] = {
  name: 'Bulgarian',
  flag: '🇧🇬',
  tts: 'bg-BG',
  dir: 'ltr',
  native: 'Български',
  soundTitle: 'Bulgarian sounds & the Cyrillic script',
  soundIntro: 'Bulgarian is written phonetically in Cyrillic — once you know the letters, you can read almost any word. These are the sounds to watch.',
  grammar: '<p>Bulgarian is written in <b>Cyrillic</b> and is a South Slavic language — a cousin of Serbian and Russian, so some words look familiar. Two things to notice: it has a <b>suffix definite article</b> (<i>къща</i> = house, <i>къщата</i> = the house), and verbs have <b>no infinitive</b> in the usual sense — you learn a form like <i>искам</i> (I want) and build from there. Stress can fall anywhere, so listen and repeat.</p>',
  bridges: '<div class="note">🇷🇺 <b>Russian.</b> Bulgarian is a South Slavic sibling of Russian, so many words line up: <i>брат</i> (brother), <i>вода</i> (water), <i>добър ден</i> (good day).</div><div class="note">🇷🇸 <b>Serbian.</b> Also South Slavic — <i>хляб</i> (bread) and <i>гара</i> (station) feel familiar to a Serbian speaker.</div>',
  lessons: [
    { id:1, title:'Greetings & first words', focus:'здравей · добър ден · довиждане',
      steps:[
        {t:'say',text:'The first greeting to learn: <span class="inline-tr">Здравей</span> — hello (informal, to a friend). Say it out loud.',tr:'Здравей'},
        {t:'words',items:[{tr:'Здравей',pr:'zdrah-VEY',en:'hello (informal)'},{tr:'Добър ден',pr:'DOH-bər den',en:'good day (formal)'},{tr:'Добро утро',pr:'doh-BROH OO-troh',en:'good morning'},{tr:'Довиждане',pr:'doh-veezh-DAH-neh',en:'goodbye'},{tr:'Да',pr:'dah',en:'yes'},{tr:'Не',pr:'neh',en:'no'}]},
        {t:'chal',en:'Hello, how are you?',tr:'Здравей, как си?',pr:'zdrah-VEY, kahk see',morph:['здравей = hello','как си? = how are you?']},
        {t:'say',text:'To ask how someone is: <span class="inline-tr">Как си?</span> (informal). The reply is <span class="inline-tr">Добре, благодаря</span> — well, thanks.',tr:'Как си?'},
        {t:'words',items:[{tr:'Как си?',pr:'kahk see',en:'how are you?'},{tr:'Добре, благодаря',pr:'doh-BREH, blah-goh-DAH-ryah',en:'well, thanks'},{tr:'Приятно ми е',pr:'pree-YAHT-noh mee e',en:'pleased to meet you'}]},
        {t:'chal',en:'Good day, how are you?',tr:'Добър ден, как си?',pr:'DOH-bər den, kahk see',morph:['добър ден = good day','как си? = how are you?']}
      ],
      blocks:['<code>Здравей</code> = hello','<code>Добър ден</code> = good day','<code>Да</code> / <code>Не</code> = yes / no','<code>Как си?</code> = how are you?'] },
    { id:2, title:'Being polite', focus:'благодаря · моля · извинете',
      steps:[
        {t:'say',text:'The two words that open every door: <span class="inline-tr">Благодаря</span> (thank you) and <span class="inline-tr">моля</span> (please / you\'re welcome).',tr:'Благодаря'},
        {t:'words',items:[{tr:'Благодаря',pr:'blah-goh-DAH-ryah',en:'thank you'},{tr:'Моля',pr:'MOH-lyah',en:'please / you\'re welcome'},{tr:'Извинете',pr:'eez-vee-NEH-teh',en:'excuse me (formal)'},{tr:'Съжалявам',pr:'suh-zhyah-LYAH-vahm',en:'I\'m sorry'}]},
        {t:'chal',en:'Thank you very much',tr:'Много благодаря',pr:'MNOH-goh blah-goh-DAH-ryah',morph:['много = very','благодаря = thank you']},
        {t:'say',text:'<span class="inline-tr">Извинете</span> is your \'excuse me\' for getting attention. <span class="inline-tr">Моля</span> works both as \'please\' and as the reply to \'thank you\'.',tr:'Извинете'},
        {t:'chal',en:'Excuse me, please',tr:'Извинете, моля',pr:'eez-vee-NEH-teh, MOH-lyah',morph:['извинете = excuse me','моля = please']}
      ],
      blocks:['<code>Благодаря</code> = thank you','<code>Моля</code> = please / you\'re welcome','<code>Извинете</code> = excuse me','<code>Съжалявам</code> = sorry'] },
    { id:3, title:'Numbers 1–10', focus:'едно · две · три · десет',
      steps:[
        {t:'say',text:'Numbers are the fastest win. Listen and repeat: <span class="inline-tr">едно, две, три</span>.',tr:'едно'},
        {t:'words',items:[{tr:'едно',pr:'EHD-noh',en:'1'},{tr:'две',pr:'dveh',en:'2'},{tr:'три',pr:'tree',en:'3'},{tr:'четири',pr:'CHEH-tee-ree',en:'4'},{tr:'пет',pr:'peht',en:'5'},{tr:'десет',pr:'DEH-seht',en:'10'}]},
        {t:'chal',en:'Two coffees, please',tr:'Две кафета, моля',pr:'dveh kah-FEH-tah, MOH-lyah',morph:['две = two','кафета = coffees','моля = please']},
        {t:'say',text:'<span class="inline-tr">Колко струва?</span> = how much does it cost? The essential question for shopping.',tr:'Колко струва?'},
        {t:'chal',en:'How much is it?',tr:'Колко струва?',pr:'KOL-koh STROO-vah',morph:['колко = how much','струва = it costs']},
        {t:'chal',en:'It\'s five leva',tr:'Пет лева',pr:'peht LEH-vah',morph:['пет = five','лева = leva (currency)']}
      ],
      blocks:['<code>едно, две, три</code> = 1, 2, 3','<code>колко струва?</code> = how much is it?','<code>лева</code> = leva (currency)'] },
    { id:4, title:'"I want" — the verb искам', focus:'искам · бих искал · трябва ми',
      steps:[
        {t:'say',text:'The magic word to ask for anything: <span class="inline-tr">искам</span> — I want.',tr:'искам'},
        {t:'say',text:'More polite: <span class="inline-tr">бих искал</span> — I would like. Use it when ordering.',tr:'бих искал'},
        {t:'chal',en:'I want coffee',tr:'Искам кафе',pr:'EES-kahm kah-FEH',morph:['искам = I want','кафе = coffee']},
        {t:'chal',en:'I would like water, please',tr:'Бих искал вода, моля',pr:'beekh EES-kahl voh-DAH, MOH-lyah',morph:['бих искал = I would like','вода = water','моля = please']},
        {t:'say',text:'For \'I need\', Bulgarians say <span class="inline-tr">трябва ми</span>.',tr:'трябва ми'},
        {t:'chal',en:'I need help',tr:'Трябва ми помощ',pr:'TRYAHB-vah mee POH-mohsht',morph:['трябва ми = I need','помощ = help']}
      ],
      blocks:['<code>искам</code> = I want','<code>бих искал</code> = I would like','<code>трябва ми</code> = I need'] },
    { id:5, title:'Food & drink', focus:'вода · хляб · кафе · чай',
      steps:[
        {t:'say',text:'Key food words: <span class="inline-tr">вода</span> (water), <span class="inline-tr">хляб</span> (bread), <span class="inline-tr">кафе</span> (coffee), <span class="inline-tr">чай</span> (tea).',tr:'вода'},
        {t:'words',items:[{tr:'вода',pr:'voh-DAH',en:'water',link:'≈ English water & German Wasser'},{tr:'хляб',pr:'hlyahp',en:'bread'},{tr:'кафе',pr:'kah-FEH',en:'coffee',link:'≈ English coffee'},{tr:'чай',pr:'chah-ee',en:'tea',link:'≈ English tea'},{tr:'бира',pr:'bee-RAH',en:'beer'},{tr:'менюто',pr:'meh-NYOO-toh',en:'the menu',link:'≈ English menu'}]},
        {t:'chal',en:'Water and bread, please',tr:'Вода и хляб, моля',pr:'voh-DAH ee hlyahp, MOH-lyah',morph:['вода = water','и = and','хляб = bread','моля = please']},
        {t:'chal',en:'One coffee, please',tr:'Едно кафе, моля',pr:'EHD-noh kah-FEH, MOH-lyah',morph:['едно = one','кафе = coffee','моля = please']},
        {t:'say',text:'To ask for the bill: <span class="inline-tr">Сметката, моля</span> — the bill, please.',tr:'Сметката, моля'},
        {t:'chal',en:'The bill, please',tr:'Сметката, моля',pr:'SMEHT-kah-tah, MOH-lyah',morph:['сметката = the bill','моля = please']}
      ],
      blocks:['<code>вода</code>, <code>хляб</code>, <code>кафе</code> = water, bread, coffee','<code>сметката</code> = the bill','<code>менюто</code> = the menu'] },
    { id:6, title:'Getting around', focus:'къде е · наляво · надясно · направо',
      steps:[
        {t:'say',text:'The most useful question in any city: <span class="inline-tr">Къде е…?</span> — where is…?',tr:'Къде е...?'},
        {t:'words',items:[{tr:'Къде е...?',pr:'kuh-DEH eh',en:'where is...?'},{tr:'наляво',pr:'nah-LYAH-voh',en:'to the left'},{tr:'надясно',pr:'nah-DYAH-snoh',en:'to the right'},{tr:'направо',pr:'nah-PRAH-voh',en:'straight ahead'},{tr:'гарата',pr:'GAH-rah-tah',en:'the station',link:'≈ English station (via French gare)'},{tr:'банята',pr:'BAH-nyah-tah',en:'the bathroom',link:'≈ English bath'}]},
        {t:'chal',en:'Where is the station?',tr:'Къде е гарата?',pr:'kuh-DEH eh GAH-rah-tah',morph:['къде е = where is','гарата = the station']},
        {t:'chal',en:'Where is the bathroom?',tr:'Къде е банята?',pr:'kuh-DEH eh BAH-nyah-tah',morph:['къде е = where is','банята = the bathroom']},
        {t:'say',text:'<span class="inline-tr">Наляво</span>, <span class="inline-tr">надясно</span> and <span class="inline-tr">направо</span> steer you: left, right, straight ahead.',tr:'направо'},
        {t:'chal',en:'Straight ahead',tr:'Направо',pr:'nah-PRAH-voh',morph:['направо = straight ahead']}
      ],
      blocks:['<code>къде е…?</code> = where is…?','<code>наляво</code> / <code>надясно</code> = left / right','<code>направо</code> = straight ahead'] },
    { id:7, title:'Questions & "do you have…?"', focus:'имате ли · има ли · мога ли',
      steps:[
        {t:'say',text:'To ask if someone has something: <span class="inline-tr">Имате ли…?</span> — do you have…? (formal).',tr:'Имате ли...?'},
        {t:'chal',en:'Do you have a table?',tr:'Имате ли маса?',pr:'ee-MAH-teh lee MAH-sah',morph:['имате ли = do you have','маса = table']},
        {t:'say',text:'<span class="inline-tr">Има ли…?</span> = is there…? Very handy.',tr:'Има ли...?'},
        {t:'chal',en:'Is there wifi?',tr:'Има ли уифи?',pr:'ee-MAH lee wee-FEE',morph:['има ли = is there','уифи = wifi']},
        {t:'say',text:'<span class="inline-tr">Мога ли…?</span> = may I…? For polite requests.',tr:'Мога ли...?'},
        {t:'chal',en:'May I pay?',tr:'Мога ли да платя?',pr:'MOH-gah lee dah plah-TYAH',morph:['мога ли = may I','да платя = to pay']},
        {t:'say',text:'And to ask a price again: <span class="inline-tr">Колко струва?</span>',tr:'Колко струва?'},
        {t:'chal',en:'How much does it cost?',tr:'Колко струва?',pr:'KOL-koh STROO-vah',morph:['колко = how much','струва = it costs']}
      ],
      blocks:['<code>имате ли…?</code> = do you have…?','<code>има ли…?</code> = is there…?','<code>мога ли…?</code> = may I…?'] },
    { id:8, title:'Family & people', focus:'семейство · майка · баща · брат',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">семейство</span> (family), <span class="inline-tr">майка</span> (mother), <span class="inline-tr">баща</span> (father).',tr:'семейство'},
        {t:'words',items:[{tr:'семейство',pr:'seh-MEY-stvoh',en:'family'},{tr:'майка',pr:'MY-kah',en:'mother'},{tr:'баща',pr:'bah-SHTA',en:'father'},{tr:'брат',pr:'braht',en:'brother',link:'≈ English brother'},{tr:'сестра',pr:'ses-TRAH',en:'sister'},{tr:'приятел',pr:'pree-YAH-tehl',en:'friend (m.)'}]},
        {t:'chal',en:'I have a brother',tr:'Имам брат',pr:'EE-mahm braht',morph:['имам = I have','брат = brother']},
        {t:'say',text:'<span class="inline-tr">Имам</span> = I have. The key verb to say what you\'ve got.',tr:'имам'},
        {t:'chal',en:'I have a family',tr:'Имам семейство',pr:'EE-mahm seh-MEY-stvoh',morph:['имам = I have','семейство = family']}
      ],
      blocks:['<code>майка</code> / <code>баща</code> = mother / father','<code>брат</code> / <code>сестра</code> = brother / sister','<code>имам</code> = I have'] },
    { id:9, title:'Time, days & weather', focus:'днес · утре · какво е времето?',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">днес</span>, tomorrow is <span class="inline-tr">утре</span>, yesterday is <span class="inline-tr">вчера</span>.',tr:'днес'},
        {t:'words',items:[{tr:'днес',pr:'dnehs',en:'today'},{tr:'утре',pr:'OO-treh',en:'tomorrow'},{tr:'вчера',pr:'VCHER-ah',en:'yesterday'},{tr:'сега',pr:'seh-GAH',en:'now'},{tr:'Какво е времето?',pr:'KAHK-voh eh VREH-meh-toh',en:'what\'s the weather?'}]},
        {t:'chal',en:'See you tomorrow',tr:'До утре',pr:'doh OO-treh',morph:['до = until','утре = tomorrow']},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">Какво е времето?</span>',tr:'Какво е времето?'},
        {t:'chal',en:'It\'s raining',tr:'Вали',pr:'VAH-lee',morph:['вали = it rains']},
        {t:'chal',en:'It\'s sunny',tr:'Слънчево е',pr:'SLUHN-cheh-voh e',morph:['слънчево = sunny','е = is']}
      ],
      blocks:['<code>днес</code> / <code>утре</code> = today / tomorrow','<code>какво е времето?</code> = what\'s the weather?','<code>слънчево</code> = sunny'] },
    { id:10, title:'Saying your name', focus:'казвам се · как се казваш · приятно ми е',
      steps:[
        {t:'say',text:'Say your name: <span class="inline-tr">Казвам се…</span> — my name is….',tr:'Казвам се'},
        {t:'chal',en:'My name is __NAME__',tr:'Казвам се __NAME__',pr:'KAHZ-vahm se __NAME__',morph:['казвам се = my name is','__NAME__ = your name']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">Как се казваш?</span>',tr:'Как се казваш?'},
        {t:'chal',en:'What\'s your name?',tr:'Как се казваш?',pr:'kahk se KAHZ-vahsh',morph:['как = how','се казваш = do you call yourself?']},
        {t:'say',text:'<span class="inline-tr">Приятно ми е</span> = pleased to meet you.',tr:'Приятно ми е'},
        {t:'chal',en:'Pleased to meet you',tr:'Приятно ми е',pr:'pree-YAHT-noh mee e',morph:['приятно ми е = pleased to meet you']},
        {t:'say',text:'To ask where someone is from: <span class="inline-tr">Откъде си?</span>',tr:'Откъде си?'},
        {t:'chal',en:'Where are you from?',tr:'Откъде си?',pr:'ot-KUH-deh see',morph:['откъде = from where','си = are you']},
        {t:'say',text:'<span class="inline-tr">Аз съм от…</span> — I am from…',tr:'Аз съм от'},
        {t:'chal',en:'I am from England',tr:'Аз съм от Англия',pr:'ahz suhm oht AHNG-lee-ah',morph:['аз съм = I am','от = from','Англия = England']}
      ],
      blocks:['<code>казвам се…</code> = my name is…','<code>как се казваш?</code> = what\'s your name?','<code>приятно ми е</code> = pleased to meet you'] },
    { id:11, title:'Health & emergency', focus:'помощ · лекар · не разбирам',
      steps:[
        {t:'say',text:'The words that matter most in a crisis: <span class="inline-tr">Помощ!</span> (help), <span class="inline-tr">лекар</span> (doctor), <span class="inline-tr">болница</span> (hospital).',tr:'Помощ!'},
        {t:'words',items:[{tr:'Помощ!',pr:'POH-mohsht',en:'help!'},{tr:'лекар',pr:'leh-KAR',en:'doctor'},{tr:'болница',pr:'bohl-NEE-tsah',en:'hospital'},{tr:'аптека',pr:'ahp-TEH-kah',en:'pharmacy',link:'≈ English pharmacy (from Greek apotheke)'},{tr:'полиция',pr:'poh-LEE-tsee-ya',en:'police',link:'≈ English police'},{tr:'Не разбирам',pr:'neh rahz-BEE-rahm',en:'I don\'t understand'}]},
        {t:'chal',en:'Help!',tr:'Помощ!',pr:'POH-mohsht',morph:['помощ = help']},
        {t:'chal',en:'I don\'t understand',tr:'Не разбирам',pr:'neh rahz-BEE-rahm',morph:['не = not','разбирам = I understand']},
        {t:'say',text:'Ask if someone speaks English: <span class="inline-tr">Говорите ли английски?</span>',tr:'Говорите ли английски?'},
        {t:'chal',en:'Do you speak English?',tr:'Говорите ли английски?',pr:'goh-voh-REE-teh lee ahn-GLEE-skee',morph:['говорите ли = do you speak','английски = English']},
        {t:'say',text:'To request a doctor: <span class="inline-tr">Трябва ми лекар</span> — I need a doctor.',tr:'Трябва ми лекар'},
        {t:'chal',en:'I need a doctor',tr:'Трябва ми лекар',pr:'TRYAHB-vah mee leh-KAR',morph:['трябва ми = I need','лекар = doctor']}
      ],
      blocks:['<code>Помощ!</code> = help','<code>лекар</code> = the doctor','<code>не разбирам</code> = I don\'t understand','<code>говорите ли английски?</code> = do you speak English?'] },
    { id:12, title:'Tying it together', focus:'a capstone scene',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolkit. This capstone uses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello, how are you?',tr:'Здравей, как си?',pr:'zdrah-VEY, kahk see',morph:['здравей = hello','как си? = how are you?']},
        {t:'chal',en:'I would like coffee, please',tr:'Бих искал кафе, моля',pr:'beekh EES-kahl kah-FEH, MOH-lyah',morph:['бих искал = I would like','кафе = coffee','моля = please']},
        {t:'chal',en:'Where is the station?',tr:'Къде е гарата?',pr:'kuh-DEH eh GAH-rah-tah',morph:['къде е = where is','гарата = the station']},
        {t:'chal',en:'How much is it?',tr:'Колко струва?',pr:'KOL-koh STROO-vah',morph:['колко струва? = how much is it?']},
        {t:'chal',en:'Thank you, goodbye!',tr:'Благодаря, довиждане!',pr:'blah-goh-DAH-ryah, doh-veezh-DAH-neh',morph:['благодаря = thank you','довиждане = goodbye']}
      ],
      blocks:['You built: greetings, ordering, directions, prices, thanks — a full day out in Bulgarian.'] },
    { id:13, title:'Airport & tickets', focus:'летище · паспорт · билет · полет',
      steps:[
        {t:'say',text:'You have landed in Sofia. The building is the <span class="inline-tr">летище</span>. Your document is a <span class="inline-tr">паспорт</span>.',tr:'летище'},
        {t:'words',items:[{tr:'летището',pr:'leh-TEESH-teh-toh',en:'the airport'},{tr:'паспортът',pr:'PAHS-port-ut',en:'the passport'},{tr:'билетът',pr:'bee-LET-ut',en:'the ticket'},{tr:'полетът',pr:'po-LET-ut',en:'the flight'},{tr:'изходът',pr:'eez-HOD-ut',en:'the gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'Къде е летището?',pr:'kuh-DEH eh leh-TEESH-teh-toh',morph:['къде е = where is','летището = the airport']},
        {t:'chal',en:'Here is my passport',tr:'Ето моя паспорт',pr:'EH-toh MO-yah PAHS-port',morph:['ето = here is','моя паспорт = my passport']},
        {t:'chal',en:'A ticket, please',tr:'Един билет, моля',pr:'eh-DEEN bee-LET, MOH-lyah',morph:['един билет = one ticket','моля = please']},
        {t:'chal',en:'Where is the gate?',tr:'Къде е изходът?',pr:'kuh-DEH eh eez-HOD-ut',morph:['къде е = where is','изходът = the gate']}
      ],
      blocks:['<code>летище</code> = airport','<code>паспорт</code> = passport','<code>билет</code> = ticket'] },
    { id:14, title:'The taxi', focus:'такси · да отида · хотел · спрете',
      steps:[
        {t:'say',text:'Bulgarian has no infinitive, so you say <span class="inline-tr">искам да отида до хотела</span> — I want that I go to the hotel.',tr:'такси'},
        {t:'words',items:[{tr:'таксито',pr:'tahk-SEE-toh',en:'the taxi'},{tr:'шофьорът',pr:'sho-FYOR-ut',en:'the driver'},{tr:'искам да отида',pr:'EES-kahm dah oh-TEE-dah',en:'I want to go'},{tr:'спрете тук',pr:'SPREH-teh took',en:'stop here (formal)'}]},
        {t:'chal',en:'A taxi, please',tr:'Такси, моля',pr:'tahk-SEE, MOH-lyah',morph:['такси = taxi','моля = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'Искам да отида до хотела',pr:'EES-kahm dah oh-TEE-dah doh ho-TEH-lah',morph:['искам = I want','да отида = to go','до хотела = to the hotel']},
        {t:'chal',en:'Stop here, please',tr:'Спрете тук, моля',pr:'SPREH-teh took, MOH-lyah',morph:['спрете тук = stop here','моля = please']},
        {t:'chal',en:'How much is it?',tr:'Колко струва?',pr:'KOL-koh STROO-vah',morph:['колко = how much','струва = it costs']}
      ],
      blocks:['<code>искам да отида до …</code> = I want to go to …','<code>спрете тук</code> = stop here (formal Вие)'] },
    { id:15, title:'The hotel', focus:'резервация · стая · ключ · нощувка',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">имам резервация</span> — I have a reservation.',tr:'резервация'},
        {t:'words',items:[{tr:'хотелът',pr:'ho-TEL-ut',en:'the hotel'},{tr:'резервация',pr:'reh-zer-vah-TSEE-yah',en:'the reservation'},{tr:'стаята',pr:'STAH-yah-tah',en:'the room'},{tr:'ключът',pr:'klyooch-ut',en:'the key'},{tr:'една нощувка',pr:'ed-NAH NO-shtoof-kah',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'Имам резервация',pr:'EE-mahm reh-zer-vah-TSEE-yah',morph:['имам = I have','резервация = a reservation']},
        {t:'chal',en:'A room for one night, please',tr:'Стая за една нощувка, моля',pr:'STAH-yah zah ed-NAH NO-shtoof-kah, MOH-lyah',morph:['стая = a room','за една нощувка = for one night','моля = please']},
        {t:'chal',en:'The key, please',tr:'Ключът, моля',pr:'klyooch-ut, MOH-lyah',morph:['ключът = the key','моля = please']},
        {t:'chal',en:'Where is my room?',tr:'Къде е моята стая?',pr:'kuh-DEH eh MO-yah-tah STAH-yah',morph:['къде е = where is','моята стая = my room']}
      ],
      blocks:['<code>резервация</code> = reservation','<code>стая</code> = room','<code>ключ</code> = key'] },
    { id:16, title:'Ask for help', focus:'не разбирам · по-бавно · английски',
      steps:[
        {t:'say',text:'When Bulgarian is too fast: <span class="inline-tr">По-бавно, моля</span> — slower, please. Formal <span class="inline-tr">Вие</span> is safer with staff.',tr:'По-бавно, моля'},
        {t:'words',items:[{tr:'по-бавно',pr:'po-BAHV-noh',en:'slower'},{tr:'отново',pr:'ot-NO-voh',en:'again'},{tr:'английски',pr:'ahn-GLEE-skee',en:'English'},{tr:'можете ли да ми помогнете?',pr:'MO-zheh-teh lee dah mee po-MOG-neh-teh',en:'can you help me? (formal)'}]},
        {t:'chal',en:'I don\'t understand',tr:'Не разбирам',pr:'neh rahz-BEE-rahm',morph:['не = not','разбирам = I understand']},
        {t:'chal',en:'Slower, please',tr:'По-бавно, моля',pr:'po-BAHV-noh, MOH-lyah',morph:['по-бавно = slower','моля = please']},
        {t:'chal',en:'Can you help me?',tr:'Можете ли да ми помогнете?',pr:'MO-zheh-teh lee dah mee po-MOG-neh-teh',morph:['можете ли = can you (formal)','да ми помогнете = to help me']},
        {t:'chal',en:'Do you speak English?',tr:'Говорите ли английски?',pr:'goh-voh-REE-teh lee ahn-GLEE-skee',morph:['говорите ли = do you speak (formal)','английски = English']}
      ],
      blocks:['<code>по-бавно</code> = slower','<code>говорите ли английски?</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'cafe', title:'☕ At a café', emoji:'☕', turns:[
      {who:'You',tr:'Добър ден! Едно кафе, моля.',pr:'DOH-bər den, EHD-noh kah-FEH, MOH-lyah',en:'Good day! One coffee, please.'},
      {who:'Barista',tr:'За тук или за вкъщи?',pr:'zah took ee-lee zah VKUH-shtee',en:'For here or to go?'},
      {who:'You',tr:'За вкъщи, благодаря.',pr:'zah VKUH-shtee, blah-goh-DAH-ryah',en:'To go, thanks.'},
      {who:'Barista',tr:'Ето. Две лева.',pr:'EH-toh, dveh LEH-vah',en:'Here. Two leva.'},
      {who:'You',tr:'Много благодаря!',pr:'MNOH-goh blah-goh-DAH-ryah',en:'Thanks a lot!'}
    ]},
    { id:'transport', title:'🚆 On the train', emoji:'🚆', turns:[
      {who:'You',tr:'Извинете, къде е гарата?',pr:'eez-vee-NEH-teh, kuh-DEH eh GAH-rah-tah',en:'Excuse me, where is the station?'},
      {who:'Local',tr:'Там е, надясно.',pr:'tahm eh, nah-DYAH-snoh',en:'It\'s there, on the right.'},
      {who:'You',tr:'Благодаря. Един билет до Варна, моля.',pr:'blah-goh-DAH-ryah, EH-deen bee-LET doh VAHR-nah, MOH-lyah',en:'Thanks. One ticket to Varna, please.'},
      {who:'Ticket',tr:'Петнадесет лева. Влакът тръгва в девет.',pr:'peht-nah-DEH-seht LEH-vah, VLAH-kət TRUHG-vah v de-VEHT',en:'Fifteen leva. The train leaves at nine.'}
    ]},
    { id:'restaurant', title:'🍽️ At a restaurant', emoji:'🍽️', turns:[
      {who:'Waiter',tr:'Добър вечер! Имате ли резервация?',pr:'DOH-bər VEH-cher, ee-MAH-teh lee reh-sehr-vah-tsee-YAH',en:'Good evening! Do you have a reservation?'},
      {who:'You',tr:'Да, за двама.',pr:'dah, zah DVAH-mah',en:'Yes, for two.'},
      {who:'You',tr:'Менюто, моля.',pr:'meh-NYOO-toh, MOH-lyah',en:'The menu, please.'},
      {who:'You',tr:'Искам салата и една бира.',pr:'EES-kahm sah-LAH-tah ee ehd-NAH bee-RAH',en:'I want a salad and a beer.'},
      {who:'Waiter',tr:'Чудесен избор! Приятен апетит.',pr:'choo-DEH-sehn eez-BOR, pree-YAH-tehn ah-peh-TEET',en:'Excellent choice! Enjoy your meal.'}
    ]},
    { id:'market', title:'🥕 At the market', emoji:'🥕', turns:[
      {who:'You',tr:'Колко струва това?',pr:'KOL-koh STROO-vah toh-VAH',en:'How much is this?'},
      {who:'Seller',tr:'Десет лева.',pr:'DEH-seht LEH-vah',en:'Ten leva.'},
      {who:'You',tr:'Твърде скъпо. Мога ли да опитам?',pr:'TVUR-deh SKUH-poh, MOH-gah lee dah oh-PEE-tahm',en:'Too expensive. Can I try it?'},
      {who:'Seller',tr:'Разбира се! Ето.',pr:'rahz-BEE-rah seh, EH-toh',en:'Of course! Here.'},
      {who:'You',tr:'Добре, вземам го.',pr:'doh-BREH, VZEH-mahm goh',en:'OK, I\'ll take it.'}
    ]}
  ],
  pocket: [
    {tr:'Здравей',pr:'zdrah-VEY',en:'hello',c:'Greetings'},
    {tr:'Добър ден',pr:'DOH-bər den',en:'good day',c:'Greetings'},
    {tr:'Добро утро',pr:'doh-BROH OO-troh',en:'good morning',c:'Greetings'},
    {tr:'Довиждане',pr:'doh-veezh-DAH-neh',en:'goodbye',c:'Greetings'},
    {tr:'Казвам се __NAME__',pr:'KAHZ-vahm se',en:'my name is...',c:'Greetings'},
    {tr:'Добре, благодаря',pr:'doh-BREH, blah-goh-DAH-ryah',en:'well, thanks',c:'Greetings'},
    {tr:'Благодаря',pr:'blah-goh-DAH-ryah',en:'thank you',c:'Courtesy'},
    {tr:'Моля',pr:'MOH-lyah',en:'please / you\'re welcome',c:'Courtesy'},
    {tr:'Извинете',pr:'eez-vee-NEH-teh',en:'excuse me',c:'Courtesy'},
    {tr:'Съжалявам',pr:'suh-zhyah-LYAH-vahm',en:'I\'m sorry',c:'Courtesy'},
    {tr:'Да',pr:'dah',en:'yes',c:'Courtesy'},
    {tr:'Не',pr:'neh',en:'no',c:'Courtesy'},
    {tr:'Едно',pr:'EHD-noh',en:'1',c:'Numbers'},
    {tr:'Две',pr:'dveh',en:'2',c:'Numbers'},
    {tr:'Три',pr:'tree',en:'3',c:'Numbers'},
    {tr:'Пет',pr:'peht',en:'5',c:'Numbers'},
    {tr:'Десет',pr:'DEH-seht',en:'10',c:'Numbers'},
    {tr:'Вода',pr:'voh-DAH',en:'water',c:'Food'},
    {tr:'Хляб',pr:'hlyahp',en:'bread',c:'Food'},
    {tr:'Кафе',pr:'kah-FEH',en:'coffee',c:'Food'},
    {tr:'Чай',pr:'chah-ee',en:'tea',c:'Food'},
    {tr:'Бира',pr:'bee-RAH',en:'beer',c:'Food'},
    {tr:'Сметката, моля',pr:'SMEHT-kah-tah, MOH-lyah',en:'the bill, please',c:'Food'},
    {tr:'Къде е...?',pr:'kuh-DEH eh',en:'where is...?',c:'Directions'},
    {tr:'Наляво',pr:'nah-LYAH-voh',en:'to the left',c:'Directions'},
    {tr:'Надясно',pr:'nah-DYAH-snoh',en:'to the right',c:'Directions'},
    {tr:'Направо',pr:'nah-PRAH-voh',en:'straight ahead',c:'Directions'},
    {tr:'Гарата',pr:'GAH-rah-tah',en:'the station',c:'Directions'},
    {tr:'Колко струва?',pr:'KOL-koh STROO-vah',en:'how much is it?',c:'Questions'},
    {tr:'Имате ли...?',pr:'ee-MAH-teh lee',en:'do you have...?',c:'Questions'},
    {tr:'Помощ!',pr:'POH-mohsht',en:'help!',c:'Emergency'},
    {tr:'Лекар',pr:'leh-KAR',en:'doctor',c:'Emergency'},
    {tr:'Не разбирам',pr:'neh rahz-BEE-rahm',en:'I don\'t understand',c:'Emergency'},
    {tr:'Говорите ли английски?',pr:'goh-voh-REE-teh lee ahn-GLEE-skee',en:'do you speak English?',c:'Emergency'},
    {tr:'Днес',pr:'dnehs',en:'today',c:'Time'},
    {tr:'Утре',pr:'OO-treh',en:'tomorrow',c:'Time'},
    {tr:'летището',pr:'leh-TEESH-teh-toh',en:'airport',c:'Travel'},
    {tr:'такси',pr:'tahk-SEE',en:'taxi',c:'Travel'},
    {tr:'хотелът',pr:'ho-TEL-ut',en:'hotel',c:'Travel'},
    {tr:'спрете тук',pr:'SPREH-teh took',en:'stop here',c:'Travel'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Questions','Emergency','Time','Travel'],
  culture: [
    {icon:'🔤',title:'The Cyrillic script',body:'Bulgarian is written in Cyrillic — and it\'s actually this region\'s gift to the world, developed in the 9th century. Learn a few letters and signs suddenly unlock: З = "z", Т = "t", Д = "d", И = "i", М = "m".'},
    {icon:'🌹',title:'The Rose Valley',body:'Bulgaria is one of the biggest producers of rose oil in the world, centred on the Rose Valley below the Balkan mountains. The town of Kazanlak hosts a rose festival each year. It takes a huge number of petals to make a single drop — which is why it is so prized.'},
    {icon:'⛪',title:'Orthodox faith',body:'Most Bulgarians are Eastern Orthodox, and the richly painted churches with their icons and gold domes are part of everyday life. Look out for Рождество (Christmas) and especially Великден (Easter) — the biggest celebration of the year.'},
    {icon:'🙂',title:'The reversed nod',body:'In Bulgaria, a slow side-to-side head shake can mean "yes" and a small nod can mean "no" — roughly the opposite of what you might expect. Watch for the first few times and you\'ll pick it up fast.'},
    {icon:'🌷',title:'Martenitsa & Baba Marta',body:'On the 1st of March Bulgarians exchange martenitsi — red-and-white threads worn for health and luck — to welcome Baba Marta (\'Grandma March\'). The custom is to wear one until you see a blossoming tree, then tie it on a branch.'},
    {icon:'🥣',title:'Banitsa & shopska',body:'Banitsa is a flaky cheese pastry, and ice-cold yoghurt is a national obsession. The iconic shopska salad (with tomato, cucumber and grated sirene cheese) is a signature of Bulgarian cuisine and a light, refreshing way to start any meal.'}
  ],
  sounds: [
    {l:'ъ',say:'like the vowel in "cut" — the short schwa sound',ex:'български = bəl-GAR-skee',voice:'български'},
    {l:'щ',say:'a soft "sht"',ex:'баща = bah-SHTA',voice:'баща'},
    {l:'ж',say:'like the "s" in "pleasure"',ex:'жаба = ZHAH-ba',voice:'жаба'},
    {l:'дж',say:'like the "j" in "jam"',ex:'джоб = job',voice:'джоб'},
    {l:'х',say:'a breathy "h" from the throat',ex:'хляб = hlyahp',voice:'хляб'},
    {l:'ч',say:'like the "ch" in "cheese"',ex:'чай = chah-ee',voice:'чай'},
    {l:'ц',say:'like the "ts" in "cats"',ex:'цена = tseh-NAH',voice:'цена'},
    {l:'й',say:'like the "y" in "yes" — it also softens the consonant before it',ex:'майка = MY-kah',voice:'майка'}
  ],
  resources: [
    {icon:'🗣️',t:'BulgarianPod101',d:'Structured audio and video lessons from complete beginner up — great for vocabulary drills and listening.',q:'BulgarianPod101'},
    {icon:'🐢',t:'Slow Bulgarian for beginners',d:'Clear, slow lessons that walk you through the Cyrillic alphabet and first conversations.',q:'learn Bulgarian for beginners slow'},
    {icon:'📚',t:'Bulgarian lesson playlists',d:'Short lesson bites on grammar, the script and everyday phrases.',q:'Bulgarian language lessons playlist'},
    {icon:'🎧',t:'Bulgarian music & karaoke',d:'Singing along to Bulgarian songs is a fantastic way to drill rhythm, stress and pronunciation.',q:'Bulgarian songs with lyrics'},
    {icon:'💬',t:'Street interviews in Bulgarian',d:'Watch real Bulgarians talk — fast, but superb ear-training once you have the basics.',q:'street interview Bulgarian'}
  ]
};
