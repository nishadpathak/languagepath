/* ---- serbian ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["serbian"] = {
  name: 'Serbian',
  flag: '🇷🇸',
  tts: 'sr-RS',
  dir: 'ltr',
  native: 'Српски (also written in Latin: Srpski)',
  soundTitle: 'Serbian sounds & spelling',
  soundIntro: 'Serbian is very phonetic — every letter says one sound, in both the Cyrillic and Latin alphabets. Learn a handful of special characters and you can read almost any word.',
  grammar: '<p>Serbian is written in Cyrillic (and often Latin). It is one South Slavic language shared by Serbia, Croatia and Bosnia — often called <b>Serbo-Croatian</b>. It\'s a cousin of Russian and Polish, so <b>вода</b> (water), <b>хлеб</b> (bread) and <b>брат</b> (brother) look familiar if you know Russian. Spelling is predictable: each letter says one sound, and the stress usually falls on the <i>first</i> syllable, so say it clearly and the rest flows.</p>',
  bridges: '<div class="note">🇬🇧 <b>English (loans).</b> Serbian borrows plenty of words you already know: <i>кафа</i> (coffee), <i>хотел</i> (hotel), <i>такси</i> (taxi), <i>телефон</i> (telephone), <i>ресторан</i> (restaurant), <i>полиција</i> (police).</div><div class="note">🇷🇺 <b>Russian.</b> Serbian and Russian are close cousins — you\'ll spot it quickly: вода = вода, хлеб = хлеб, брат = брат.</div><div class="note">🇧🇦 <b>Bosnian / Croatian.</b> Serbian is one language with Bosnian and Croatian — the same words, three names. What you learn here works in all three countries.</div>',
  lessons: [
    { id:1, title:'Greetings & being polite', focus:'здраво · добар дан · хвала · молим',
      steps:[
        {t:'say',text:'Let\'s start with the very first word you\'ll use: <span class="inline-tr">здраво</span> — hello. Say it out loud.',tr:'здраво'},
        {t:'words',items:[{tr:'здраво',pr:'ZDRAH-voh',en:'hello'},{tr:'добар дан',pr:'DOH-bahr dahn',en:'good day (formal)'},{tr:'хвала',pr:'HVAH-lah',en:'thank you'},{tr:'молим',pr:'MOH-leem',en:'please / you\'re welcome'}]},
        {t:'chal',en:'Hello, thank you',tr:'Здраво, хвала',pr:'ZDRAH-voh, HVAH-lah',morph:['здраво = hello','хвала = thank you']},
        {t:'say',text:'Later in the day use <span class="inline-tr">добро вече</span> (good evening). To say goodbye: <span class="inline-tr">довиђења</span>.',tr:'добро вече'},
        {t:'words',items:[{tr:'добро вече',pr:'DOH-broh VEH-cheh',en:'good evening'},{tr:'довиђења',pr:'doh-VEE-dyeh-nyah',en:'goodbye'},{tr:'како си?',pr:'KAH-koh see',en:'how are you? (informal)'},{tr:'добро, хвала',pr:'DOH-broh, HVAH-lah',en:'well, thanks'}]},
        {t:'chal',en:'How are you? Well, thanks.',tr:'Како си? Добро, хвала.',pr:'KAH-koh see? DOH-broh, HVAH-lah',morph:['како си? = how are you?','добро = well','хвала = thanks']}
      ],
      blocks:['<code>здраво</code> = hello','<code>добар дан</code> = good day (formal)','<code>хвала</code> = thank you · <code>молим</code> = please / you\'re welcome'] },
    { id:2, title:'Numbers 1–10', focus:'један · два · три · десет',
      steps:[
        {t:'say',text:'Numbers are the fastest win. Listen and repeat: <span class="inline-tr">један, два, три</span>.',tr:'један'},
        {t:'words',items:[{tr:'један',pr:'YEH-dahn',en:'1'},{tr:'два',pr:'dvah',en:'2'},{tr:'три',pr:'tree',en:'3'},{tr:'четири',pr:'CHEH-tee-ree',en:'4'},{tr:'пет',pr:'peht',en:'5'},{tr:'шест',pr:'shest',en:'6'},{tr:'седам',pr:'SEH-dahm',en:'7'},{tr:'осам',pr:'OH-sahm',en:'8'},{tr:'девет',pr:'DEH-veht',en:'9'},{tr:'десет',pr:'DEH-seht',en:'10'}]},
        {t:'chal',en:'Two coffees, please',tr:'Две кафе, молим',pr:'dveh KAH-feh, MOH-leem',morph:['две = two','кафе = coffees','молим = please']},
        {t:'say',text:'To ask the price: <span class="inline-tr">Колико кошта?</span> — how much does it cost?',tr:'Колико кошта?'},
        {t:'chal',en:'How much is it?',tr:'Колико кошта?',pr:'koh-LEE-koh KOSH-tah',morph:['колико = how much','кошта = costs']},
        {t:'chal',en:'It\'s five dinars',tr:'Пет динара',pr:'peht DEE-nah-rah',morph:['пет = five','динара = dinars']}
      ],
      blocks:['<code>један, два, три</code> = 1–3','<code>шест … десет</code> = 6–10','<code>колико кошта?</code> = how much is it?'] },
    { id:3, title:'"I want" — желим & хоћу', focus:'желим · хоћу · волео бих',
      steps:[
        {t:'say',text:'To ask for anything, the key word is <span class="inline-tr">желим</span> — I want. Say it out loud.',tr:'желим'},
        {t:'say',text:'<span class="inline-tr">хоћу</span> also means "I want", but a touch stronger and more direct.',tr:'хоћу'},
        {t:'chal',en:'I want a coffee',tr:'Желим кафу',pr:'ZHEH-leem KAH-foo',morph:['желим = I want','кафу = coffee (object form)']},
        {t:'chal',en:'I want a water',tr:'Хоћу воду',pr:'HOH-choo VOH-doo',morph:['хоћу = I want','воду = water (object form)']},
        {t:'say',text:'To be polite, use <span class="inline-tr">волео бих</span> — I would like.',tr:'волео бих'},
        {t:'chal',en:'I\'d like a tea',tr:'Волео бих чај',pr:'VOH-leh-oh beekh chai',morph:['волео бих = I would like','чај = tea']}
      ],
      blocks:['<code>желим</code> = I want','<code>хоћу</code> = I want (stronger)','<code>волео бих</code> = I would like'] },
    { id:4, title:'Food & drink', focus:'вода · хлеб · кафа · рачун',
      steps:[
        {t:'say',text:'Eating out? Key words: <span class="inline-tr">вода</span> (water), <span class="inline-tr">хлеб</span> (bread), <span class="inline-tr">кафа</span> (coffee).',tr:'вода'},
        {t:'words',items:[{tr:'вода',pr:'VOH-dah',en:'water',link:'≈ Russian вода'},{tr:'хлеб',pr:'hlehb',en:'bread',link:'≈ Russian хлеб'},{tr:'кафа',pr:'KAH-fah',en:'coffee',link:'≈ English coffee'},{tr:'чај',pr:'chai',en:'tea'},{tr:'пиво',pr:'PEE-voh',en:'beer'},{tr:'рачун',pr:'RAH-choon',en:'the bill'}]},
        {t:'chal',en:'Water and bread, please',tr:'Воду и хлеб, молим',pr:'VOH-doo ee hlehb, MOH-leem',morph:['воду = water','и = and','хлеб = bread','молим = please']},
        {t:'chal',en:'I\'d like the bill',tr:'Волео бих рачун',pr:'VOH-leh-oh beekh RAH-choon',morph:['волео бих = I would like','рачун = the bill']},
        {t:'say',text:'<span class="inline-tr">Укусно!</span> = delicious. Say it and you\'ll make the chef\'s day.',tr:'Укусно!'},
        {t:'chal',en:'It\'s delicious!',tr:'Укусно!',pr:'oo-KOO-snoh',morph:['укусно = delicious']}
      ],
      blocks:['<code>вода</code>, <code>хлеб</code>, <code>кафа</code> = water, bread, coffee','<code>рачун</code> = the bill','<code>укусно</code> = delicious'] },
    { id:5, title:'Getting around', focus:'где је · десно · лево · право',
      steps:[
        {t:'say',text:'The most useful question in any city: <span class="inline-tr">Где је…?</span> — where is…?',tr:'Где је?'},
        {t:'words',items:[{tr:'Где је...?',pr:'gdeh yeh',en:'Where is...?'},{tr:'десно',pr:'DEH-snoh',en:'to the right'},{tr:'лево',pr:'LEH-voh',en:'to the left'},{tr:'право',pr:'PRAH-voh',en:'straight ahead',link:'≈ English point / direct'},{tr:'станица',pr:'STAH-nee-tsah',en:'the station'},{tr:'аутобуска станица',pr:'ow-TOH-boos-kah STAH-nee-tsah',en:'the bus station'}]},
        {t:'chal',en:'Where is the station?',tr:'Где је станица?',pr:'gdeh yeh STAH-nee-tsah',morph:['где је = where is','станица = the station']},
        {t:'chal',en:'Where is the bathroom?',tr:'Где је тоалет?',pr:'gdeh yeh toh-AH-leht',morph:['где је = where is','тоалет = the bathroom']},
        {t:'say',text:'<span class="inline-tr">Десно</span> and <span class="inline-tr">лево</span> tell you which way to turn. "Straight ahead" is <span class="inline-tr">право</span>.',tr:'право'},
        {t:'chal',en:'Straight ahead, then left',tr:'Право, затим лево',pr:'PRAH-voh, ZAH-teem LEH-voh',morph:['право = straight','затим = then','лево = left']}
      ],
      blocks:['<code>где је…?</code> = where is…?','<code>десно</code> / <code>лево</code> = right / left','<code>право</code> = straight ahead'] },
    { id:6, title:'Questions & "do you have…?"', focus:'да ли · имате ли · могу ли',
      steps:[
        {t:'say',text:'To turn a sentence into a yes/no question, Serbian often starts with <span class="inline-tr">да ли</span> — or you can just raise your voice.',tr:'да ли'},
        {t:'chal',en:'Do you have a table?',tr:'Имате ли сто?',pr:'EE-mah-teh lee stoh',morph:['имате = you have','ли = question marker','сто = a table']},
        {t:'say',text:'To ask "is there…?" use <span class="inline-tr">има ли…?</span> Very useful.',tr:'има ли'},
        {t:'chal',en:'Is there wifi?',tr:'Има ли ви-фај?',pr:'EE-mah lee VEE-fai',morph:['има ли = is there','ви-фај = wifi']},
        {t:'say',text:'For polite requests: <span class="inline-tr">Могу ли…?</span> — may I…?',tr:'Могу ли?'},
        {t:'chal',en:'May I pay?',tr:'Могу ли да платим?',pr:'MOH-goo lee dah PLAH-teem',morph:['могу ли = may I','да платим = to pay']}
      ],
      blocks:['<code>да ли</code> = yes/no question marker','<code>имате ли…?</code> = do you have…?','<code>могу ли…?</code> = may I…?'] },
    { id:7, title:'Family & people', focus:'породица · мама · тата · пријатељ',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">породица</span> (family), <span class="inline-tr">мама</span> (mom), <span class="inline-tr">тата</span> (dad).',tr:'породица'},
        {t:'words',items:[{tr:'породица',pr:'poh-ROH-dee-tsah',en:'family'},{tr:'мама',pr:'MAH-mah',en:'mom',link:'≈ English mama'},{tr:'тата',pr:'TAH-tah',en:'dad'},{tr:'брат',pr:'braht',en:'brother',link:'≈ Russian брат'},{tr:'сестра',pr:'SEHS-trah',en:'sister',link:'≈ Russian сестра'},{tr:'пријатељ',pr:'PREE-yah-tehl',en:'friend'}]},
        {t:'chal',en:'I have a friend',tr:'Имам пријатеља',pr:'EE-mahm PREE-yah-teh-lyah',morph:['имам = I have','пријатеља = a friend']},
        {t:'say',text:'<span class="inline-tr">имам</span> = I have. It\'s the key verb to say what you\'ve got.',tr:'имам'},
        {t:'chal',en:'I have a big family',tr:'Имам велику породицу',pr:'EE-mahm VEH-lee-koo poh-ROH-dee-tsoo',morph:['имам = I have','велику = big (object)','породицу = family (object)']}
      ],
      blocks:['<code>мама</code> / <code>тата</code> = mom / dad','<code>брат</code> / <code>сестра</code> = brother / sister','<code>имам</code> = I have'] },
    { id:8, title:'Time, days & weather', focus:'данас · сутра · недеља · време',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">данас</span>, tomorrow is <span class="inline-tr">сутра</span>.',tr:'данас'},
        {t:'words',items:[{tr:'данас',pr:'DAH-nahs',en:'today'},{tr:'сутра',pr:'SOO-trah',en:'tomorrow'},{tr:'јуче',pr:'YOO-cheh',en:'yesterday'},{tr:'недеља',pr:'NEH-deh-lyah',en:'Sunday / week'},{tr:'време',pr:'VREH-meh',en:'time / weather'}]},
        {t:'chal',en:'See you tomorrow',tr:'Видимо се сутра',pr:'VEE-dee-moh seh SOO-trah',morph:['видимо се = see you','сутра = tomorrow']},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">Какво је време?</span>',tr:'Какво је време?'},
        {t:'chal',en:'It\'s raining',tr:'Пада киша',pr:'PAH-dah KEE-shah',morph:['пада = falls','киша = rain']}
      ],
      blocks:['<code>данас</code> / <code>сутра</code> = today / tomorrow','<code>недеља</code> = Sunday / week','<code>какво је време?</code> = what\'s the weather?'] },
    { id:9, title:'Introducing yourself', focus:'моје име је · како се зовеш · драго ми је',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">Моје име је…</span> = my name is…, and <span class="inline-tr">Драго ми је</span> = pleased to meet you.',tr:'Моје име је'},
        {t:'chal',en:'My name is __NAME__',tr:'Моје име је __NAME__',pr:'MOH-yeh EE-meh yeh __NAME__',morph:['моје име је = my name is','__NAME__ = your name']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">Како се зовеш?</span>',tr:'Како се зовеш?'},
        {t:'chal',en:'What\'s your name?',tr:'Како се зовеш?',pr:'KAH-koh seh ZOH-vehsh',morph:['како = how','зовеш = do you call yourself?']},
        {t:'chal',en:'Pleased to meet you',tr:'Драго ми је',pr:'DRAH-goh mee yeh',morph:['драго ми је = pleased to meet you']}
      ],
      blocks:['<code>моје име је…</code> = my name is…','<code>како се зовеш?</code> = what\'s your name?','<code>драго ми је</code> = pleased to meet you'] },
    { id:10, title:'Health & emergency', focus:'упомоћ · лекар · апотека · не разумем',
      steps:[
        {t:'say',text:'The most important words if you need help: <span class="inline-tr">Упомоћ!</span> (help!), <span class="inline-tr">лекар</span> (doctor), <span class="inline-tr">апотека</span> (pharmacy).',tr:'упомоћ'},
        {t:'words',items:[{tr:'Упомоћ!',pr:'oo-POH-moch',en:'Help!'},{tr:'лекар',pr:'LEH-kahr',en:'the doctor'},{tr:'апотека',pr:'ah-poh-TEH-kah',en:'the pharmacy'},{tr:'Не разумем',pr:'neh RAH-zoo-mehm',en:'I don\'t understand'},{tr:'полиција',pr:'poh-LEE-tsee-yah',en:'the police',link:'≈ English police'}]},
        {t:'chal',en:'Help!',tr:'Упомоћ!',pr:'oo-POH-moch',morph:['упомоћ = help']},
        {t:'chal',en:'I don\'t understand',tr:'Не разумем',pr:'neh RAH-zoo-mehm',morph:['не = not','разумем = I understand']},
        {t:'say',text:'To say you need help: <span class="inline-tr">Треба ми помоћ</span>.',tr:'Треба ми помоћ'},
        {t:'chal',en:'I need help',tr:'Треба ми помоћ',pr:'TREH-bah mee POH-moch',morph:['треба ми = I need','помоћ = help']}
      ],
      blocks:['<code>упомоћ!</code> = help','<code>лекар</code> = the doctor','<code>не разумем</code> = I don\'t understand'] },
    { id:11, title:'Describing things', focus:'лепо · велико · мало · врло',
      steps:[
        {t:'say',text:'Adjectives are easy: <span class="inline-tr">лепо</span> (beautiful/nice), <span class="inline-tr">велико</span> (big), <span class="inline-tr">мало</span> (small).',tr:'лепо'},
        {t:'words',items:[{tr:'лепо',pr:'LEH-poh',en:'beautiful / nice'},{tr:'велико',pr:'VEH-lee-koh',en:'big'},{tr:'мало',pr:'MAH-loh',en:'small'},{tr:'врло',pr:'VR-loh',en:'very'},{tr:'добро',pr:'DOH-broh',en:'good'}]},
        {t:'chal',en:'Very nice',tr:'Врло лепо',pr:'VR-loh LEH-poh',morph:['врло = very','лепо = nice']},
        {t:'chal',en:'It\'s very good',tr:'Врло је добро',pr:'VR-loh yeh DOH-broh',morph:['врло = very','је = is','добро = good']}
      ],
      blocks:['<code>лепо</code> = beautiful','<code>велико</code> / <code>мало</code> = big / small','<code>врло</code> = very'] },
    { id:12, title:'Tying it together', focus:'a capstone scene in Serbian',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolbox. This capstone uses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello, how are you?',tr:'Здраво, како си?',pr:'ZDRAH-voh, KAH-koh see',morph:['здраво = hello','како си? = how are you?']},
        {t:'chal',en:'I\'d like a coffee, please',tr:'Желим кафу, молим',pr:'ZHEH-leem KAH-foo, MOH-leem',morph:['желим = I want','кафу = coffee','молим = please']},
        {t:'chal',en:'Where is the station?',tr:'Где је станица?',pr:'gdeh yeh STAH-nee-tsah',morph:['где је = where is','станица = the station']},
        {t:'chal',en:'How much is it?',tr:'Колико кошта?',pr:'koh-LEE-koh KOSH-tah',morph:['колико кошта? = how much is it?']},
        {t:'chal',en:'Delicious! Thank you!',tr:'Укусно! Хвала!',pr:'oo-KOO-snoh, HVAH-lah',morph:['укусно = delicious','хвала = thank you']}
      ],
      blocks:['You built: greetings, ordering, directions, prices, thanks — a full day out in Serbian.'] },
    { id:13, title:'Airport & tickets', focus:'аеродром · пасош · карта · лет',
      steps:[
        {t:'say',text:'You have landed. The building is the <span class="inline-tr">аеродром</span>. Your document is a <span class="inline-tr">пасош</span>.',tr:'аеродром'},
        {t:'words',items:[{tr:'аеродром',pr:'ah-eh-ROH-drom',en:'the airport'},{tr:'пасош',pr:'PAH-sosh',en:'the passport'},{tr:'карта',pr:'KAHR-tah',en:'the ticket'},{tr:'лет',pr:'leht',en:'the flight'},{tr:'гејт',pr:'gayt',en:'the gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'Где је аеродром?',pr:'gdeh yeh ah-eh-ROH-drom',morph:['где је = where is','аеродром = the airport']},
        {t:'chal',en:'Here is my passport',tr:'Ево мог пасоша',pr:'EH-voh mohg PAH-soh-shah',morph:['ево = here is','мог пасоша = my passport']},
        {t:'chal',en:'A ticket, please',tr:'Једну карту, молим',pr:'YEH-dnoo KAHR-too, MOH-leem',morph:['једну карту = a ticket','молим = please']},
        {t:'chal',en:'Where is the gate?',tr:'Где је гејт?',pr:'gdeh yeh gayt',morph:['где је = where is','гејт = the gate']}
      ],
      blocks:['<code>аеродром</code> = airport','<code>пасош</code> = passport','<code>карта</code> = ticket','<code>гејт</code> = gate'] },
    { id:14, title:'The taxi', focus:'такси · ићи · хотел · стани',
      steps:[
        {t:'say',text:'The driver is waiting. <span class="inline-tr">такси</span> is the word you need. Tell them where to go with <span class="inline-tr">желим да идем</span>.',tr:'такси'},
        {t:'words',items:[{tr:'такси',pr:'TAHK-see',en:'the taxi'},{tr:'возач',pr:'VOH-zahch',en:'the driver'},{tr:'желим да идем',pr:'ZHEH-leem dah EE-dem',en:'I want to go'},{tr:'стани овде',pr:'STAH-nee OHV-deh',en:'stop here'}]},
        {t:'chal',en:'Taxi, please',tr:'Такси, молим',pr:'TAHK-see, MOH-leem',morph:['такси = taxi','молим = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'Желим да идем у хотел',pr:'ZHEH-leem dah EE-dem oo hoh-TEL',morph:['желим да идем = I want to go','у хотел = to the hotel']},
        {t:'chal',en:'Stop here, please',tr:'Стани овде, молим',pr:'STAH-nee OHV-deh, MOH-leem',morph:['стани овде = stop here','молим = please']},
        {t:'chal',en:'How much is it?',tr:'Колико кошта?',pr:'koh-LEE-koh KOSH-tah',morph:['колико = how much','кошта = costs']}
      ],
      blocks:['<code>желим да идем у …</code> = I want to go to …','<code>стани овде</code> = stop here'] },
    { id:15, title:'The hotel', focus:'резервација · соба · кључ · ноћ',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">Имам резервацију</span> — I have a reservation.',tr:'резервација'},
        {t:'words',items:[{tr:'хотел',pr:'hoh-TEL',en:'the hotel'},{tr:'резервација',pr:'reh-zehr-VAH-tsee-yah',en:'the reservation'},{tr:'соба',pr:'SOH-bah',en:'the room'},{tr:'кључ',pr:'klyooch',en:'the key'},{tr:'једна ноћ',pr:'YEH-dnah noch',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'Имам резервацију',pr:'EE-mahm reh-zehr-VAH-tsee-yoo',morph:['имам = I have','резервацију = a reservation']},
        {t:'chal',en:'A room for one night, please',tr:'Собу за једну ноћ, молим',pr:'SOH-boo zah YEH-dnoo noch, MOH-leem',morph:['собу = a room','за једну ноћ = for one night','молим = please']},
        {t:'chal',en:'The key, please',tr:'Кључ, молим',pr:'klyooch, MOH-leem',morph:['кључ = the key','молим = please']},
        {t:'chal',en:'Where is my room?',tr:'Где је моја соба?',pr:'gdeh yeh MOH-yah SOH-bah',morph:['где је = where is','моја соба = my room']}
      ],
      blocks:['<code>резервација</code> = reservation','<code>соба</code> = room','<code>кључ</code> = key'] },
    { id:16, title:'Ask for help', focus:'не разумем · спорије · енглески',
      steps:[
        {t:'say',text:'When the language is too fast: <span class="inline-tr">Спорије, молим</span> — slower, please.',tr:'Спорије, молим'},
        {t:'words',items:[{tr:'спорије',pr:'SPOH-ree-yeh',en:'slower'},{tr:'поново',pr:'POH-noh-voh',en:'again'},{tr:'енглески',pr:'ENG-lehs-kee',en:'English'},{tr:'можете ли да помогнете?',pr:'MOH-zheh-teh lee dah poh-MOG-neh-teh',en:'can you help?'}]},
        {t:'chal',en:'I don\'t understand',tr:'Не разумем',pr:'neh RAH-zoo-mehm',morph:['не = not','разумем = I understand']},
        {t:'chal',en:'Slower, please',tr:'Спорије, молим',pr:'SPOH-ree-yeh, MOH-leem',morph:['спорије = slower','молим = please']},
        {t:'chal',en:'Can you help me?',tr:'Можете ли да ми помогнете?',pr:'MOH-zheh-teh lee dah mee poh-MOG-neh-teh',morph:['можете ли = can you','ми = me','помогнете = help']},
        {t:'chal',en:'Do you speak English?',tr:'Говорите ли енглески?',pr:'goh-VOH-ree-teh lee ENG-lehs-kee',morph:['говорите ли = do you speak','енглески = English']}
      ],
      blocks:['<code>спорије</code> = slower','<code>Говорите ли енглески?</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'kafana', title:'☕ In a kafana', emoji:'☕', turns:[
      {who:'You',tr:'Добар дан! Једну кафу, молим.',pr:'DOH-bahr dahn! YEH-dnoo KAH-foo, MOH-leem',en:'Good day! A coffee, please.'},
      {who:'Waiter',tr:'Одмах. Да ли још нешто?',pr:'OD-mahkh. dah lee yosh NEH-shtoh',en:'Right away. Anything else?'},
      {who:'You',tr:'Једну воду, молим.',pr:'YEH-dnoo VOH-doo, MOH-leem',en:'A water, please.'},
      {who:'Waiter',tr:'Изволите. То је двеста динара.',pr:'eez-VOH-lee-teh. toh yeh DVEH-stah DEE-nah-rah',en:'Here you are. That\'s two hundred dinars.'},
      {who:'You',tr:'Хвала лепо!',pr:'HVAH-lah LEH-poh',en:'Thanks a lot!'}
    ]},
    { id:'transport', title:'🚉 On the tram / bus', emoji:'🚉', turns:[
      {who:'You',tr:'Извините, где је станица?',pr:'eez-VEE-nee-teh, gdeh yeh STAH-nee-tsah',en:'Excuse me, where\'s the stop?'},
      {who:'Local',tr:'Тамо, десно.',pr:'TAH-moh, DEH-snoh',en:'There, on the right.'},
      {who:'You',tr:'Хвала. Једну карту до центра.',pr:'HVAH-lah. YEH-dnoo KAHR-too doh TSEN-trah',en:'Thanks. One ticket to the centre.'},
      {who:'Ticket',tr:'Педесет динара. Аутобус иде сваких пет минута.',pr:'PEH-deh-seht DEE-nah-rah. OW-toh-boos EE-deh svah-KEECH peht MEE-noo-tah',en:'Fifty dinars. The bus comes every five minutes.'},
      {who:'You',tr:'Видимо се!',pr:'VEE-dee-moh seh',en:'See you!'}
    ]},
    { id:'restaurant', title:'🍽️ At a restaurant', emoji:'🍽️', turns:[
      {who:'Waiter',tr:'Добро вече! Имате ли резервацију?',pr:'DOH-broh VEH-cheh! EE-mah-teh lee reh-zehr-VAH-tsee-yoo',en:'Good evening! Do you have a reservation?'},
      {who:'You',tr:'Да, за двоје.',pr:'dah, zah DVOH-yeh',en:'Yes, for two.'},
      {who:'You',tr:'Мени, молим.',pr:'MEH-nee, MOH-leem',en:'The menu, please.'},
      {who:'You',tr:'Желим ћевапе и једно пиво.',pr:'ZHEH-leem CHEH-vah-peh ee YEH-dnoh PEE-voh',en:'I\'d like ćevapi and a beer.'},
      {who:'Waiter',tr:'Одличан избор! Пријатно!',pr:'od-LEE-chahn eez-BOHR! PREE-yah-tnoh',en:'Excellent choice! Enjoy!'}
    ]},
    { id:'pijaca', title:'🧺 At the market (pijaca)', emoji:'🧺', turns:[
      {who:'You',tr:'Колико кошта парадајз?',pr:'koh-LEE-koh KOSH-tah pah-rah-DAIS',en:'How much are the tomatoes?'},
      {who:'Seller',tr:'Двеста динара по кило.',pr:'DVEH-stah DEE-nah-rah poh KEE-loh',en:'Two hundred dinars a kilo.'},
      {who:'You',tr:'Дајте ми пола кило.',pr:'DAI-teh mee POH-lah KEE-loh',en:'Give me half a kilo.'},
      {who:'Seller',tr:'Изволите. Још нешто?',pr:'eez-VOH-lee-teh. yosh NEH-shtoh',en:'Here you are. Anything else?'},
      {who:'You',tr:'Не, хвала. Колико је све?',pr:'neh, HVAH-lah. koh-LEE-koh yeh sveh',en:'No, thanks. How much is everything?'}
    ]}
  ],
  pocket: [
    {tr:'Здраво',pr:'ZDRAH-voh',en:'Hello',c:'Greetings'},
    {tr:'Добар дан',pr:'DOH-bahr dahn',en:'Good day',c:'Greetings'},
    {tr:'Добро вече',pr:'DOH-broh VEH-cheh',en:'Good evening',c:'Greetings'},
    {tr:'Довиђења',pr:'doh-VEE-dyeh-nyah',en:'Goodbye',c:'Greetings'},
    {tr:'Како си?',pr:'KAH-koh see',en:'How are you?',c:'Greetings'},
    {tr:'Молим',pr:'MOH-leem',en:'Please / you\'re welcome',c:'Courtesy'},
    {tr:'Хвала',pr:'HVAH-lah',en:'Thank you',c:'Courtesy'},
    {tr:'Хвала лепо',pr:'HVAH-lah LEH-poh',en:'Thanks a lot',c:'Courtesy'},
    {tr:'Извините',pr:'eez-VEE-nee-teh',en:'Excuse me / sorry',c:'Courtesy'},
    {tr:'Да',pr:'dah',en:'Yes',c:'Courtesy'},
    {tr:'Не',pr:'neh',en:'No',c:'Courtesy'},
    {tr:'Један',pr:'YEH-dahn',en:'1',c:'Numbers'},
    {tr:'Два',pr:'dvah',en:'2',c:'Numbers'},
    {tr:'Три',pr:'tree',en:'3',c:'Numbers'},
    {tr:'Четири',pr:'CHEH-tee-ree',en:'4',c:'Numbers'},
    {tr:'Пет',pr:'peht',en:'5',c:'Numbers'},
    {tr:'Десет',pr:'DEH-seht',en:'10',c:'Numbers'},
    {tr:'Вода',pr:'VOH-dah',en:'water',c:'Food'},
    {tr:'Хлеб',pr:'hlehb',en:'bread',c:'Food'},
    {tr:'Кафа',pr:'KAH-fah',en:'coffee',c:'Food'},
    {tr:'Пиво',pr:'PEE-voh',en:'beer',c:'Food'},
    {tr:'Рачун',pr:'RAH-choon',en:'the bill',c:'Food'},
    {tr:'Где је...?',pr:'gdeh yeh',en:'Where is...?',c:'Directions'},
    {tr:'Десно',pr:'DEH-snoh',en:'to the right',c:'Directions'},
    {tr:'Лево',pr:'LEH-voh',en:'to the left',c:'Directions'},
    {tr:'Право',pr:'PRAH-voh',en:'straight ahead',c:'Directions'},
    {tr:'Станица',pr:'STAH-nee-tsah',en:'the station',c:'Directions'},
    {tr:'Тоалет',pr:'toh-AH-leht',en:'the bathroom',c:'Directions'},
    {tr:'Колико кошта?',pr:'koh-LEE-koh KOSH-tah',en:'how much is it?',c:'Shopping'},
    {tr:'Дајте ми...',pr:'DAI-teh mee',en:'give me...',c:'Shopping'},
    {tr:'Имате ли...?',pr:'EE-mah-teh lee',en:'do you have...?',c:'Shopping'},
    {tr:'Упомоћ!',pr:'oo-POH-moch',en:'Help!',c:'Emergency'},
    {tr:'Лекар',pr:'LEH-kahr',en:'the doctor',c:'Emergency'},
    {tr:'Апотека',pr:'ah-poh-TEH-kah',en:'the pharmacy',c:'Emergency'},
    {tr:'Не разумем',pr:'neh RAH-zoo-mehm',en:'I don\'t understand',c:'Emergency'},
    {tr:'Данас',pr:'DAH-nahs',en:'today',c:'Time'},
    {tr:'Сутра',pr:'SOO-trah',en:'tomorrow',c:'Time'},
    {tr:'Јуче',pr:'YOO-cheh',en:'yesterday',c:'Time'},
    {tr:'Недеља',pr:'NEH-deh-lyah',en:'Sunday / week',c:'Time'},
    {tr:'Аеродром',pr:'ah-eh-ROH-drom',en:'the airport',c:'Travel'},
    {tr:'Пасош',pr:'PAH-sosh',en:'the passport',c:'Travel'},
    {tr:'Карта',pr:'KAHR-tah',en:'the ticket',c:'Travel'},
    {tr:'Такси',pr:'TAHK-see',en:'the taxi',c:'Travel'},
    {tr:'Хотел',pr:'hoh-TEL',en:'the hotel',c:'Travel'},
    {tr:'Имам резервацију',pr:'EE-mahm reh-zehr-VAH-tsee-yoo',en:'I have a reservation',c:'Travel'},
    {tr:'Спорије, молим',pr:'SPOH-ree-yeh, MOH-leem',en:'Slower, please',c:'Travel'},
    {tr:'Говорите ли енглески?',pr:'goh-VOH-ree-teh lee ENG-lehs-kee',en:'Do you speak English?',c:'Travel'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Shopping','Emergency','Time','Travel'],
  culture: [
    {icon:'🎉',title:'Slava — the family saint',body:'Almost every Serbian family celebrates its <b>slava</b>, the feast day of its patron saint. It\'s the most important day of the year — guests come, a special bread (<i>slavski kolač</i>) is cut, and no one leaves hungry.'},
    {icon:'☕',title:'Kafana culture',body:'The <b>kafana</b> is Serbia\'s traditional coffee house: strong coffee, live music and long conversations. Order a <i>domaća kafa</i> (Turkish-style coffee in a small cup) and take your time.'},
    {icon:'🥃',title:'Rakija',body:'<b>Rakija</b> is a strong fruit brandy, usually made from grapes or plums (<i>šljivovica</i>). It\'s served in tiny glasses and is a symbol of hospitality — being offered one means you\'re welcome.'},
    {icon:'🔤',title:'Two alphabets',body:'Serbian is written in both <b>ćirilica</b> (Cyrillic) and <b>latinica</b> (Latin). Both are official — signs come in either. Learning Cyrillic unlocks the signs, but Latin will get you by almost everywhere.'},
    {icon:'🍽️',title:'Ćevapi & sarma',body:'<b>Ćevapi</b> (grilled minced-meat rolls) and <b>sarma</b> (cabbage rolls) are national favourites, usually served with kajmak (a creamy dairy spread) and fresh bread.'},
    {icon:'🤝',title:'A guest is sacred',body:'Serbian hospitality runs deep: a <i>gost</i> (guest) is treated like family. Offering food, drink and a warm welcome is a point of pride — accept what\'s offered and you\'ll earn a friend for life.'}
  ],
  sounds: [
    {l:'č',say:'like "ch" as in church',ex:'човек (čovek) = CHOH-vek',voice:'човек'},
    {l:'ć',say:'softer "ch" — between "ch" and "t", jaw pushed forward',ex:'хоћу (hoću) = HOH-choo',voice:'хоћу'},
    {l:'đ',say:'like "j" as in job (softer)',ex:'ђак (đak) = JAHK',voice:'ђак'},
    {l:'š',say:'like "sh" as in she',ex:'школа (škola) = SHKOH-lah',voice:'школа'},
    {l:'ž',say:'like "zh" as in measure',ex:'жена (žena) = ZHEH-nah',voice:'жена'},
    {l:'r',say:'rolled r, tongue tip against the ridge',ex:'Србија (Srbija) = SR-bee-yah',voice:'Србија'},
    {l:'lj',say:'like "ly" as in million',ex:'љубав (ljubav) = LYOO-bahv',voice:'љубав'},
    {l:'nj',say:'like "ny" as in canyon',ex:'њега (njega) = NYEH-gah',voice:'њега'}
  ],
  resources: [
    {icon:'🗣️',t:'Easy Serbian',d:'Real street interviews with native speakers and subtitles — ideal for natural Serbian.',q:'Easy Serbian street interviews'},
    {icon:'🐢',t:'Learn Serbian slowly',d:'Clear, slow everyday-Serbian lessons from native speakers for beginners.',q:'learn Serbian for beginners slow'},
    {icon:'🔤',t:'Serbian Cyrillic alphabet',d:'A focused video to master the Cyrillic letters used on signs and menus.',q:'Serbian Cyrillic alphabet explained'},
    {icon:'🍽️',t:'Serbian phrases for travel',d:'The key words and phrases to survive a trip to Serbia.',q:'Serbian phrases for travel'},
    {icon:'🎧',t:'Slow Serbian podcasts',d:'Easy listening for learners — perfect for a walk or commute.',q:'slow Serbian podcast for learners'}
  ]
};
