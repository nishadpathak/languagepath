/* ---- sinhala ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["sinhala"] = {
  name: 'Sinhala',
  flag: '🇱🇰',
  tts: 'si-LK',
  dir: 'ltr',
  native: 'සිංහල',
  soundTitle: 'Sinhala sounds & script',
  soundIntro: 'Sinhala is written in its own beautiful round script. Learn these letters and you can sound out almost any word aloud.',
  grammar: '<p>Sinhala (<span class="inline-tr">සිංහල</span>) is an Indo-Aryan language — a cousin of Hindi and a close relative of Pali and Sanskrit, the sacred languages of Buddhism. It is <b>not</b> related to Tamil, which belongs to a different language family. Word order is subject-verb-object, much like English, and the verb usually comes last: <i>maṭa mēka ōna</i> — to me this is wanted — means I want this. There are no articles. Vowels come in short and long pairs (<i>a/ā, i/ī, u/ū</i>), and retroflex consonants curl the tongue back.</p>',
  bridges: '<div class="note">🌏 <b>Sinhala ≠ Tamil.</b> Sri Lanka has two main languages and they are unrelated: Sinhala is Indo-Aryan (like Hindi and Sanskrit), Tamil is Dravidian (like Malayalam). Different scripts, different grammar, different vocabulary — but many Sri Lankans speak both.</div><div class="note">🧘 <b>Pali & Sanskrit roots.</b> Because Buddhism reached Sri Lanka through Pali and Sanskrit, Sinhala borrowed a huge bank of religious and everyday words from them.</div><div class="note">☕ <b>Easy loans.</b> English words turned straight into Sinhala: කෝපි (coffee), තේ (tea), බස් (bus), ටැක්සි (taxi).</div>',
  lessons: [
    { id:1, title:'Greetings — ආයුබෝවන්', focus:'ආයුබෝවන් · සුබ උදෑසනක් · කොහොමද?',
      steps:[
        {t:'say',text:'The very first word you\'ll hear in Sri Lanka: <span class="inline-tr">ආයුබෝවන්</span> (ayubōvan) — hello and welcome. Say it with a warm smile.',tr:'ආයුබෝවන්'},
        {t:'words',items:[{tr:'ආයුබෝවන්',pr:'AH-yoo-BOH-van',en:'hello / welcome'},{tr:'සුබ උදෑසනක්',pr:'SOO-bah oo-DAE-sah-nak',en:'good morning'},{tr:'සුබ සැන්දෑවක්',pr:'SOO-bah SAN-dae-vak',en:'good evening'},{tr:'ඔව්',pr:'ov',en:'yes'},{tr:'නැත',pr:'NAE-thah',en:'no'}]},
        {t:'chal',en:'Hello, thank you',tr:'ආයුබෝවන්, ස්තූතියි',pr:'AH-yoo-BOH-van, STOO-tee-yee',morph:['ආයුබෝවන් = hello','ස්තූතියි = thank you']},
        {t:'say',text:'To ask how someone is: <span class="inline-tr">කොහොමද?</span> (kohomada?). The reply: <span class="inline-tr">හොඳින්, ස්තූතියි</span> — well, thanks.',tr:'කොහොමද?'},
        {t:'words',items:[{tr:'කොහොමද?',pr:'koh-hoh-MAH-dah',en:'How are you?'},{tr:'හොඳින්, ස්තූතියි',pr:'HON-din, STOO-tee-yee',en:'Well, thanks'},{tr:'ආයුබෝවන්',pr:'AH-yoo-BOH-van',en:'goodbye'}]},
        {t:'chal',en:'Hello, how are you?',tr:'ආයුබෝවන්, කොහොමද?',pr:'AH-yoo-BOH-van, koh-hoh-MAH-dah',morph:['ආයුබෝවන් = hello','කොහොමද? = how are you?']}
      ],
      blocks:['<code>ආයුබෝවන්</code> = hello / welcome','<code>සුබ උදෑසනක්</code> = good morning','<code>ස්තූතියි</code> = thank you'] },
    { id:2, title:'Being polite — ස්තූතියි & කරුණාකර', focus:'ස්තූතියි · කරුණාකර · සමාවෙන්න',
      steps:[
        {t:'say',text:'Two magic words: <span class="inline-tr">ස්තූතියි</span> (s-tuthiyi) = thank you, and <span class="inline-tr">කරුණාකර</span> (karunākara) = please. Use them everywhere.',tr:'ස්තූතියි'},
        {t:'say',text:'Say <span class="inline-tr">සමාවෙන්න</span> (samāvenna) for sorry or excuse me.',tr:'සමාවෙන්න'},
        {t:'words',items:[{tr:'ස්තූතියි',pr:'STOO-tee-yee',en:'thank you'},{tr:'කරුණාකර',pr:'KAH-roo-NAH-kah-rah',en:'please'},{tr:'සමාවෙන්න',pr:'sah-MAH-ven-nah',en:'sorry / excuse me'},{tr:'ඔව්',pr:'ov',en:'yes'},{tr:'නැත',pr:'NAE-thah',en:'no'}]},
        {t:'chal',en:'A tea, please',tr:'තේ එකක්, කරුණාකර',pr:'thay EH-kak, KAH-roo-NAH-kah-rah',morph:['තේ = tea','එකක් = a / one','කරුණාකර = please']},
        {t:'chal',en:'Thank you very much',tr:'බොහොම ස්තූතියි',pr:'BOH-hoh-mah STOO-tee-yee',morph:['බොහොම = very much','ස්තූතියි = thank you']}
      ],
      blocks:['<code>ස්තූතියි</code> = thank you','<code>කරුණාකර</code> = please','<code>සමාවෙන්න</code> = sorry / excuse me'] },
    { id:3, title:'Numbers 1–10', focus:'එක · දෙක · තුන · දහය',
      steps:[
        {t:'say',text:'Numbers are the fastest win. Listen and repeat: <span class="inline-tr">එක, දෙක, තුන</span>.',tr:'එක'},
        {t:'words',items:[{tr:'එක',pr:'EH-kah',en:'1'},{tr:'දෙක',pr:'DEH-kah',en:'2'},{tr:'තුන',pr:'TOO-nah',en:'3'},{tr:'හතර',pr:'HAH-thah-rah',en:'4'},{tr:'පහ',pr:'PAH-hah',en:'5'},{tr:'හය',pr:'HAH-yah',en:'6'},{tr:'හත',pr:'HAH-thah',en:'7'},{tr:'අට',pr:'AH-tah',en:'8'},{tr:'නවය',pr:'NAH-vah-yah',en:'9'},{tr:'දහය',pr:'DAH-hah-yah',en:'10'}]},
        {t:'chal',en:'Two teas, please',tr:'තේ දෙකක්, කරුණාකර',pr:'thay DEH-kak, KAH-roo-NAH-kah-rah',morph:['තේ = tea','දෙක = two','කරුණාකර = please']},
        {t:'say',text:'To ask a price: <span class="inline-tr">කීයද?</span> (kīyada?) — how much is it?',tr:'කීයද?'},
        {t:'chal',en:'How much is it?',tr:'කීයද?',pr:'KEE-yah-dah',morph:['කීයද? = how much is it?']},
        {t:'chal',en:'Five, please',tr:'පහක්, කරුණාකර',pr:'PAH-hak, KAH-roo-NAH-kah-rah',morph:['පහ = five','කරුණාකර = please']}
      ],
      blocks:['එක, දෙක, තුන, හතර, පහ = 1–5','<code>කීයද?</code> = how much is it?'] },
    { id:4, title:'"I want" — මට ... ඕන', focus:'මට ... ඕන · මට ... එපා',
      steps:[
        {t:'say',text:'The phrase to ask for anything: <span class="inline-tr">මට ... ඕන</span> (maṭa ... ōna) = to me ... is wanted = I want. <b>මට</b> = to me.',tr:'මට'},
        {t:'say',text:'<span class="inline-tr">ඕන</span> (ōna) = want / need. Put it at the end: <b>මට වතුර ඕන</b> = I want water.',tr:'ඕන'},
        {t:'chal',en:'I want water',tr:'මට වතුර ඕන',pr:'MAH-tah WAH-thoo-rah OH-nah',morph:['මට = to me','වතුර = water','ඕන = want']},
        {t:'chal',en:'I want tea',tr:'මට තේ ඕන',pr:'MAH-tah thay OH-nah',morph:['මට = to me','තේ = tea','ඕන = want']},
        {t:'say',text:'To politely decline: <span class="inline-tr">මට එපා</span> (maṭa epā) — I don\'t want it / that\'s enough.',tr:'මට එපා'},
        {t:'chal',en:'I don\'t want coffee',tr:'මට කෝපි එපා',pr:'MAH-tah KOH-pee eh-PAH',morph:['මට = to me','කෝපි = coffee','එපා = don\'t want it']}
      ],
      blocks:['<code>මට ... ඕන</code> = I want ...','<code>ඕන</code> = want / need','<code>මට එපා</code> = I don\'t want it'] },
    { id:5, title:'Food & drink', focus:'වතුර · බත් · තේ · කෝපි',
      steps:[
        {t:'say',text:'Eating in Sri Lanka? Key words: <span class="inline-tr">වතුර</span> (water), <span class="inline-tr">බත්</span> (rice), <span class="inline-tr">තේ</span> (tea), <span class="inline-tr">කෝපි</span> (coffee).',tr:'වතුර'},
        {t:'words',items:[{tr:'වතුර',pr:'WAH-thoo-rah',en:'water'},{tr:'බත්',pr:'bath',en:'rice'},{tr:'තේ',pr:'thay',en:'tea',link:'≈ English tea (loan)'},{tr:'කෝපි',pr:'KOH-pee',en:'coffee',link:'≈ English coffee (loan)'},{tr:'කිරි',pr:'KEE-ree',en:'milk'}]},
        {t:'chal',en:'I want rice',tr:'මට බත් ඕන',pr:'MAH-tah bath OH-nah',morph:['මට = to me','බත් = rice','ඕන = want']},
        {t:'chal',en:'Water and tea, please',tr:'වතුර සහ තේ, කරුණාකර',pr:'WAH-thoo-rah sah thay, KAH-roo-NAH-kah-rah',morph:['වතුර = water','සහ = and','තේ = tea']},
        {t:'say',text:'<span class="inline-tr">රසයි!</span> (rasayi) = delicious!',tr:'රසයි'},
        {t:'chal',en:'It\'s delicious!',tr:'රසයි!',pr:'RAH-sah-yee',morph:['රසයි = delicious']}
      ],
      blocks:['<code>වතුර</code>, <code>බත්</code>, <code>තේ</code> = water, rice, tea','<code>කෝපි</code> = coffee (loan)','<code>රසයි</code> = delicious'] },
    { id:6, title:'Getting around', focus:'කොහෙද? · දකුණට · වමට · බස්',
      steps:[
        {t:'say',text:'The most useful question anywhere: <span class="inline-tr">කොහෙද?</span> (koheda?) — where is…?',tr:'කොහෙද?'},
        {t:'words',items:[{tr:'කොහෙද...?',pr:'koh-HEH-dah',en:'Where is...?'},{tr:'දකුණට',pr:'DAH-koo-nah-tah',en:'to the right'},{tr:'වමට',pr:'WAH-mah-tah',en:'to the left'},{tr:'කෙළින්ම',pr:'KEH-leen-mah',en:'straight ahead'},{tr:'බස් නැවතුම',pr:'bas NAE-wah-thoo-mah',en:'the bus stop',link:'≈ English bus (loan)'}]},
        {t:'chal',en:'Where is the bus stop?',tr:'බස් නැවතුම කොහෙද?',pr:'bas NAE-wah-thoo-mah koh-HEH-dah',morph:['බස් නැවතුම = bus stop','කොහෙද? = where is?']},
        {t:'chal',en:'Where is the bathroom?',tr:'වැසිකිළිය කොහෙද?',pr:'WAE-see-kee-lee-yah koh-HEH-dah',morph:['වැසිකිළිය = bathroom','කොහෙද? = where is?']},
        {t:'say',text:'<span class="inline-tr">දකුණට</span> (right) and <span class="inline-tr">වමට</span> (left) tell you which way to turn.',tr:'දකුණට'},
        {t:'chal',en:'Straight ahead',tr:'කෙළින්ම',pr:'KEH-leen-mah',morph:['කෙළින්ම = straight ahead']}
      ],
      blocks:['<code>කොහෙද...?</code> = where is…?','<code>දකුණට</code> / <code>වමට</code> = right / left','<code>බස්</code> = bus (loan)'] },
    { id:7, title:'Questions', focus:'මොකක්ද? · කොහෙද? · කවුද? · කවදාද?',
      steps:[
        {t:'say',text:'Question words are your best friends: <span class="inline-tr">මොකක්ද?</span> (what?), <span class="inline-tr">කොහෙද?</span> (where?), <span class="inline-tr">කවුද?</span> (who?), <span class="inline-tr">කවදාද?</span> (when?), <span class="inline-tr">කොහොමද?</span> (how?).',tr:'මොකක්ද?'},
        {t:'words',items:[{tr:'මොකක්ද?',pr:'MOH-kak-dah',en:'what?'},{tr:'කොහෙද?',pr:'koh-HEH-dah',en:'where?'},{tr:'කවුද?',pr:'KAH-voo-dah',en:'who?'},{tr:'කවදාද?',pr:'KAH-vah-dah-dah',en:'when?'},{tr:'කොහොමද?',pr:'koh-hoh-MAH-dah',en:'how?'}]},
        {t:'chal',en:'What is this?',tr:'මේක මොකක්ද?',pr:'MAY-kah MOH-kak-dah',morph:['මේක = this','මොකක්ද? = what?']},
        {t:'chal',en:'Who is that?',tr:'ඒ කවුද?',pr:'ay KAH-voo-dah',morph:['ඒ = that','කවුද? = who?']},
        {t:'say',text:'To ask "is there…?": <span class="inline-tr">තියෙනවද?</span> (tiyenawadā?).',tr:'තියෙනවද?'},
        {t:'chal',en:'Is there wifi?',tr:'වයිෆයි තියෙනවද?',pr:'WY-fy tee-YEH-nah-vah-dah',morph:['වයිෆයි = wifi','තියෙනවද? = is there?']}
      ],
      blocks:['<code>මොකක්ද?</code> = what?','<code>කොහෙද?</code> / <code>කවුද?</code> = where? / who?','<code>තියෙනවද?</code> = is there…?'] },
    { id:8, title:'Family & people', focus:'පවුල · අම්මා · තාත්තා · මිත්රයා',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">පවුල</span> (pawula = family), <span class="inline-tr">අම්මා</span> (ammā = mother), <span class="inline-tr">තාත්තා</span> (thāththā = father).',tr:'පවුල'},
        {t:'words',items:[{tr:'පවුල',pr:'PAH-woo-lah',en:'family'},{tr:'අම්මා',pr:'AHM-mah',en:'mother'},{tr:'තාත්තා',pr:'THATH-thah',en:'father'},{tr:'අක්කා',pr:'AK-kah',en:'elder sister'},{tr:'මිත්රයා',pr:'MIT-rah-yah',en:'friend',link:'≈ Sanskrit mitra (cognate root)'}]},
        {t:'chal',en:'I have a family',tr:'මට පවුලක් තියෙනවා',pr:'MAH-tah PAH-woo-lak tee-YEH-nah-vah',morph:['මට = to me','පවුලක් = a family','තියෙනවා = there is / I have']},
        {t:'chal',en:'She is my mother',tr:'ඇය මගේ අම්මා',pr:'AE-yah MAH-gay AHM-mah',morph:['ඇය = she','මගේ = my','අම්මා = mother']}
      ],
      blocks:['<code>පවුල</code> = family','<code>අම්මා</code> / <code>තාත්තා</code> = mother / father','<code>මිත්රයා</code> = friend (Sanskrit cognate)'] },
    { id:9, title:'Time, days & weather', focus:'අද · හෙට · ඊයේ · වැස්ස',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">අද</span>, tomorrow is <span class="inline-tr">හෙට</span>, yesterday is <span class="inline-tr">ඊයේ</span>.',tr:'අද'},
        {t:'words',items:[{tr:'අද',pr:'AH-dah',en:'today'},{tr:'හෙට',pr:'HEH-tah',en:'tomorrow'},{tr:'ඊයේ',pr:'EE-yay',en:'yesterday'},{tr:'වැස්ස',pr:'WAS-sah',en:'rain'},{tr:'උණුසුම්',pr:'OO-noo-soom',en:'hot'}]},
        {t:'chal',en:'See you tomorrow',tr:'හෙට හමුවෙමු',pr:'HEH-tah HAH-moo-way-moo',morph:['හෙට = tomorrow','හමුවෙමු = let\'s meet']},
        {t:'chal',en:'It will rain today',tr:'අද වැස්ස',pr:'AH-dah WAS-sah',morph:['අද = today','වැස්ස = rain']},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">කාලගුණය කොහොමද?</span> — how\'s the weather?',tr:'කාලගුණය කොහොමද?'}
      ],
      blocks:['<code>අද</code> / <code>හෙට</code> = today / tomorrow','<code>වැස්ස</code> = rain','<code>උණුසුම්</code> = hot'] },
    { id:10, title:'Your name — මගේ නම', focus:'මගේ නම · ඔබේ නම මොකක්ද?',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">මගේ නම __NAME__</span> = my name is __NAME__.',tr:'මගේ නම __NAME__'},
        {t:'chal',en:'My name is __NAME__',tr:'මගේ නම __NAME__',pr:'MAH-gay nam __NAME__',morph:['මගේ = my','නම = name','__NAME__ = your name']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">ඔබේ නම මොකක්ද?</span>',tr:'ඔබේ නම මොකක්ද?'},
        {t:'chal',en:'What\'s your name?',tr:'ඔබේ නම මොකක්ද?',pr:'oh-BAY nam MOH-kak-dah',morph:['ඔබේ = your','නම = name','මොකක්ද? = what?']},
        {t:'say',text:'To say pleased to meet you: <span class="inline-tr">ඔබව දැකීම සතුටක්</span>.',tr:'ඔබව දැකීම සතුටක්'},
        {t:'chal',en:'Pleased to meet you',tr:'ඔබව දැකීම සතුටක්',pr:'oh-BAH-wah DAE-kee-mah SAH-too-tak',morph:['ඔබව = you','දැකීම = seeing','සතුටක් = a joy']}
      ],
      blocks:['<code>මගේ නම __NAME__</code> = my name is…','<code>ඔබේ නම මොකක්ද?</code> = what\'s your name?','<code>සතුටක්</code> = a pleasure'] },
    { id:11, title:'Health & emergency', focus:'උදව්! · රෝහල · මට තේරෙන්නේ නැහැ',
      steps:[
        {t:'say',text:'The most important words if you need help: <span class="inline-tr">උදව්!</span> (help!), <span class="inline-tr">රෝහල</span> (hospital), <span class="inline-tr">පොලිසිය</span> (police).',tr:'උදව්!'},
        {t:'words',items:[{tr:'උදව්!',pr:'OO-dahv',en:'help!'},{tr:'රෝහල',pr:'ROH-hah-lah',en:'the hospital'},{tr:'පොලිසිය',pr:'poh-LEE-see-yah',en:'the police'},{tr:'මට තේරෙන්නේ නැහැ',pr:'mah-tah THAY-ren-nay NAE-hae',en:'I don\'t understand'}]},
        {t:'chal',en:'Help!',tr:'උදව්!',pr:'OO-dahv',morph:['උදව් = help']},
        {t:'chal',en:'I need help',tr:'මට උදව් ඕන',pr:'MAH-tah OO-dahv OH-nah',morph:['මට = to me','උදව් = help','ඕන = want / need']},
        {t:'chal',en:'I don\'t understand',tr:'මට තේරෙන්නේ නැහැ',pr:'mah-tah THAY-ren-nay NAE-hae',morph:['මට = to me','තේරෙන්නේ = understand','නැහැ = not']}
      ],
      blocks:['<code>උදව්!</code> = help!','<code>රෝහල</code> = hospital','<code>මට තේරෙන්නේ නැහැ</code> = I don\'t understand'] },
    { id:12, title:'Tying it together', focus:'greetings · politeness · ordering · directions — a capstone',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolkit. This capstone uses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello, how are you?',tr:'ආයුබෝවන්, කොහොමද?',pr:'AH-yoo-BOH-van, koh-hoh-MAH-dah',morph:['ආයුබෝවන් = hello','කොහොමද? = how are you?']},
        {t:'chal',en:'I want tea, please',tr:'මට තේ ඕන, කරුණාකර',pr:'MAH-tah thay OH-nah, KAH-roo-NAH-kah-rah',morph:['මට ... ඕන = I want','තේ = tea','කරුණාකර = please']},
        {t:'chal',en:'Where is the bus stop?',tr:'බස් නැවතුම කොහෙද?',pr:'bas NAE-wah-thoo-mah koh-HEH-dah',morph:['බස් නැවතුම = bus stop','කොහෙද? = where is?']},
        {t:'chal',en:'How much is it?',tr:'කීයද?',pr:'KEE-yah-dah',morph:['කීයද? = how much is it?']},
        {t:'chal',en:'Delicious! Thank you!',tr:'රසයි! ස්තූතියි!',pr:'RAH-sah-yee, STOO-tee-yee',morph:['රසයි = delicious','ස්තූතියි = thank you']}
      ],
      blocks:['You built: greetings, politeness, ordering, directions, prices, names — a full day out in Sinhala.'] },
    { id:13, title:'Airport & tickets', focus:'ගුවන්තොටුපළ · ගමන් බලපත්‍රය · ටිකට්',
      steps:[
        {t:'say',text:'You have landed. The building is the <span class="inline-tr">ගුවන්තොටුපළ</span>. Your document is a <span class="inline-tr">ගමන් බලපත්‍රය</span>.',tr:'ගුවන්තොටුපළ'},
        {t:'words',items:[{tr:'ගුවන්තොටුපළ',pr:'goo-WAHN-toh-too-pah-lah',en:'the airport'},{tr:'ගමන් බලපත්‍රය',pr:'GAH-mahn BAH-lah-path-rah-yah',en:'the passport'},{tr:'ටිකට් පත',pr:'tee-KAT pah-thah',en:'the ticket'},{tr:'ගුවන් යානය',pr:'goo-WAHN YAH-nah-yah',en:'the flight'},{tr:'ගේට්ටුව',pr:'GAYT-too-wah',en:'the gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'ගුවන්තොටුපළ කොහෙද?',pr:'goo-WAHN-toh-too-pah-lah koh-HEH-dah',morph:['ගුවන්තොටුපළ = the airport','කොහෙද? = where is?']},
        {t:'chal',en:'Here is my passport',tr:'මෙන්න මගේ ගමන් බලපත්‍රය',pr:'MEN-nah MAH-gay GAH-mahn BAH-lah-path-rah-yah',morph:['මෙන්න = here is','මගේ = my','ගමන් බලපත්‍රය = passport']},
        {t:'chal',en:'A ticket, please',tr:'ටිකට් පතක්, කරුණාකර',pr:'tee-KAT pah-thak, KAH-roo-NAH-kah-rah',morph:['ටිකට් පතක් = a ticket','කරුණාකර = please']},
        {t:'chal',en:'Where is the gate?',tr:'ගේට්ටුව කොහෙද?',pr:'GAYT-too-wah koh-HEH-dah',morph:['ගේට්ටුව = the gate','කොහෙද? = where is?']}
      ],
      blocks:['<code>ගුවන්තොටුපළ</code> = airport','<code>ගමන් බලපත්‍රය</code> = passport','<code>ටිකට් පත</code> = ticket','<code>ගේට්ටුව</code> = gate'] },
    { id:14, title:'The taxi', focus:'ටැක්සි · යන්න · හෝටල් · නවත්තන්න',
      steps:[
        {t:'say',text:'The driver is waiting. <span class="inline-tr">ටැක්සි</span> is the word you need. Tell them where to go with <span class="inline-tr">මට යන්න ඕන</span>.',tr:'ටැක්සි'},
        {t:'words',items:[{tr:'ටැක්සි',pr:'TAK-see',en:'the taxi'},{tr:'රියදුරු',pr:'ree-yah-DOO-roo',en:'the driver'},{tr:'මට යන්න ඕන',pr:'MAH-tah YAN-nah OH-nah',en:'I want to go'},{tr:'මෙතන නවත්තන්න',pr:'MEH-thah-nah nah-WAT-tan-nah',en:'stop here'}]},
        {t:'chal',en:'Taxi, please',tr:'ටැක්සියක්, කරුණාකර',pr:'TAK-see-yak, KAH-roo-NAH-kah-rah',morph:['ටැක්සියක් = a taxi','කරුණාකර = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'මට හෝටල් එකට යන්න ඕන',pr:'MAH-tah HOH-tal EH-kah-tah YAN-nah OH-nah',morph:['මට ... ඕන = I want','හෝටල් එකට = to the hotel','යන්න = to go']},
        {t:'chal',en:'Stop here, please',tr:'මෙතන නවත්තන්න, කරුණාකර',pr:'MEH-thah-nah nah-WAT-tan-nah, KAH-roo-NAH-kah-rah',morph:['මෙතන = here','නවත්තන්න = stop','කරුණාකර = please']},
        {t:'chal',en:'How much is it?',tr:'කීයද?',pr:'KEE-yah-dah',morph:['කීයද? = how much is it?']}
      ],
      blocks:['<code>මට … යන්න ඕන</code> = I want to go to …','<code>මෙතන නවත්තන්න</code> = stop here'] },
    { id:15, title:'The hotel', focus:'වෙන්කිරීම · කාමරය · යතුර · රැය',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">මට වෙන්කිරීමක් තියෙනවා</span> — I have a reservation.',tr:'වෙන්කිරීම'},
        {t:'words',items:[{tr:'හෝටල්',pr:'HOH-tal',en:'the hotel'},{tr:'වෙන්කිරීම',pr:'wen-kee-REE-mah',en:'the reservation'},{tr:'කාමරය',pr:'KAH-mah-rah-yah',en:'the room'},{tr:'යතුර',pr:'YAH-thoo-rah',en:'the key'},{tr:'එක රැයක්',pr:'EH-kah RAY-yak',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'මට වෙන්කිරීමක් තියෙනවා',pr:'MAH-tah wen-kee-REE-mak tee-YEH-nah-vah',morph:['මට = to me','වෙන්කිරීමක් = a reservation','තියෙනවා = there is']},
        {t:'chal',en:'A room for one night, please',tr:'එක රැයකට කාමරයක්, කරුණාකර',pr:'EH-kah RAY-yah-kah-tah KAH-mah-rah-yak, KAH-roo-NAH-kah-rah',morph:['එක රැයකට = for one night','කාමරයක් = a room','කරුණාකර = please']},
        {t:'chal',en:'The key, please',tr:'යතුර, කරුණාකර',pr:'YAH-thoo-rah, KAH-roo-NAH-kah-rah',morph:['යතුර = the key','කරුණාකර = please']},
        {t:'chal',en:'Where is my room?',tr:'මගේ කාමරය කොහෙද?',pr:'MAH-gay KAH-mah-rah-yah koh-HEH-dah',morph:['මගේ = my','කාමරය = room','කොහෙද? = where is?']}
      ],
      blocks:['<code>වෙන්කිරීම</code> = reservation','<code>කාමරය</code> = room','<code>යතුර</code> = key'] },
    { id:16, title:'Ask for help', focus:'තේරෙන්නේ නැහැ · හෙමින් · ඉංග්‍රීසි',
      steps:[
        {t:'say',text:'When the language is too fast: <span class="inline-tr">හෙමින් කියන්න, කරුණාකර</span> — slower, please.',tr:'හෙමින් කියන්න, කරුණාකර'},
        {t:'words',items:[{tr:'හෙමින්',pr:'HEH-min',en:'slower'},{tr:'ආයෙත්',pr:'AH-yeth',en:'again'},{tr:'ඉංග්‍රීසි',pr:'ing-GREE-see',en:'English'},{tr:'උදව් කරන්න පුළුවන්ද?',pr:'OO-dahv KAR-nan POO-loo-wan-dah',en:'can you help?'}]},
        {t:'chal',en:'I don\'t understand',tr:'මට තේරෙන්නේ නැහැ',pr:'mah-tah THAY-ren-nay NAE-hae',morph:['මට = to me','තේරෙන්නේ = understand','නැහැ = not']},
        {t:'chal',en:'Slower, please',tr:'හෙමින් කියන්න, කරුණාකර',pr:'HEH-min kee-YAN-nah, KAH-roo-NAH-kah-rah',morph:['හෙමින් = slowly','කියන්න = speak','කරුණාකර = please']},
        {t:'chal',en:'Can you help me?',tr:'මට උදව් කරන්න පුළුවන්ද?',pr:'MAH-tah OO-dahv KAR-nan POO-loo-wan-dah',morph:['මට = to me','උදව් කරන්න = help','පුළුවන්ද? = can you?']},
        {t:'chal',en:'Do you speak English?',tr:'ඔබ ඉංග්‍රීසි කතා කරනවද?',pr:'oh-BAH ing-GREE-see kah-TAH kah-rah-nah-vah-dah',morph:['ඔබ = you','ඉංග්‍රීසි = English','කතා කරනවද? = do you speak?']}
      ],
      blocks:['<code>හෙමින්</code> = slower','<code>ඔබ ඉංග්‍රීසි කතා කරනවද?</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'tea', title:'☕ At a tea shop', emoji:'☕', turns:[
      {who:'You',tr:'ආයුබෝවන්! තේ එකක්, කරුණාකර.',pr:'AH-yoo-BOH-van! thay EH-kak, KAH-roo-NAH-kah-rah',en:'Hello! A tea, please.'},
      {who:'Shopkeeper',tr:'හරි. කිරි එක්කද? නැද්ද?',pr:'HAH-ree. KEE-ree EK-kah-dah? NAD-dah?',en:'Sure. With milk, or without?'},
      {who:'You',tr:'කිරි එක්ක, ස්තූතියි.',pr:'KEE-ree EK-kah, STOO-tee-yee',en:'With milk, thanks.'},
      {who:'Shopkeeper',tr:'මෙන්න. පණහයි.',pr:'MEN-nah. PAH-nah-yee',en:'Here you go. Fifty rupees.'},
      {who:'You',tr:'බොහොම ස්තූතියි!',pr:'BOH-hoh-mah STOO-tee-yee',en:'Thank you very much!'}
    ]},
    { id:'transport', title:'🚌 Bus & tuk-tuk', emoji:'🚌', turns:[
      {who:'You',tr:'සමාවෙන්න, බස් නැවතුම කොහෙද?',pr:'sah-MAH-ven-nah, bas NAE-wah-thoo-mah koh-HEH-dah',en:'Excuse me, where is the bus stop?'},
      {who:'Local',tr:'එච්චර දුර නෑ. කෙළින්ම යන්න.',pr:'ECH-chah-ra doo-rah noh. KEH-leen-mah YAN-nah',en:'It\'s not far. Go straight.'},
      {who:'You',tr:'ස්තූතියි. මට ත්රීරෝදයක් ඕන.',pr:'STOO-tee-yee. MAH-tah three-ROH-dah-yak OH-nah',en:'Thanks. I need a tuk-tuk.'},
      {who:'Driver',tr:'කොහෙද යන්නේ?',pr:'koh-HEH-dah YAN-nay',en:'Where to?'},
      {who:'You',tr:'ගාලු මුවදොරට, කරුණාකර.',pr:'GAH-loo moo-WAH-doh-rah-tah, KAH-roo-NAH-kah-rah',en:'To Galle Face, please.'}
    ]},
    { id:'restaurant', title:'🍛 At a restaurant', emoji:'🍛', turns:[
      {who:'Waiter',tr:'ආයුබෝවන්! මොනවද කන්නේ?',pr:'AH-yoo-BOH-van! MOH-nah-vah-dah KAN-nay',en:'Hello! What will you eat?'},
      {who:'You',tr:'බත් සහ මාළුවක්, කරුණාකර.',pr:'bath sah MAH-loo-vak, KAH-roo-NAH-kah-rah',en:'Rice and a fish curry, please.'},
      {who:'Waiter',tr:'හොඳයි. බොන්න මොනවද?',pr:'HON-dy. BON-nah MOH-nah-vah-dah',en:'Great. What to drink?'},
      {who:'You',tr:'වතුර, ස්තූතියි.',pr:'WAH-thoo-rah, STOO-tee-yee',en:'Water, thanks.'},
      {who:'Waiter',tr:'මෙන්න. රසයි නේද?',pr:'MEN-nah. RAH-sah-yee NAY-dah',en:'Here. Delicious, isn\'t it?'},
      {who:'You',tr:'රසයි! බොහොම ස්තූතියි!',pr:'RAH-sah-yee! BOH-hoh-mah STOO-tee-yee',en:'Delicious! Thank you very much!'}
    ]},
    { id:'market', title:'🛍️ At the market', emoji:'🛍️', turns:[
      {who:'You',tr:'සුබ උදෑසනක්! මේක කීයද?',pr:'SOO-bah oo-DAE-sah-nak! MAY-kah KEE-yah-dah',en:'Good morning! How much is this?'},
      {who:'Seller',tr:'දෙසියයි.',pr:'DEH-see-yah-yee',en:'Two hundred rupees.'},
      {who:'You',tr:'මිල අඩු කරන්න පුළුවන්ද?',pr:'MEE-lah AH-doo KAR-nan POO-loo-wan-dah',en:'Can you lower the price?'},
      {who:'Seller',tr:'හරි, එක්සිය පනහයි.',pr:'HAH-ree, EK-see-yah PAH-nah-yee',en:'OK, one hundred and fifty.'},
      {who:'You',tr:'හරි. මම ගන්නවා. ස්තූතියි!',pr:'HAH-ree. mah-mah GAN-nah-vah. STOO-tee-yee',en:'OK. I\'ll take it. Thanks!'}
    ]}
  ],
  pocket: [
    {tr:'ආයුබෝවන්',pr:'AH-yoo-BOH-van',en:'Hello / welcome',c:'Greetings'},
    {tr:'සුබ උදෑසනක්',pr:'SOO-bah oo-DAE-sah-nak',en:'Good morning',c:'Greetings'},
    {tr:'සුබ සැන්දෑවක්',pr:'SOO-bah SAN-dae-vak',en:'Good evening',c:'Greetings'},
    {tr:'කොහොමද?',pr:'koh-hoh-MAH-dah',en:'How are you?',c:'Greetings'},
    {tr:'හොඳින්, ස්තූතියි',pr:'HON-din, STOO-tee-yee',en:'Well, thanks',c:'Greetings'},
    {tr:'මගේ නම __NAME__',pr:'MAH-gay nam __NAME__',en:'My name is...',c:'Greetings'},
    {tr:'ස්තූතියි',pr:'STOO-tee-yee',en:'Thank you',c:'Courtesy'},
    {tr:'බොහොම ස්තූතියි',pr:'BOH-hoh-mah STOO-tee-yee',en:'Thanks a lot',c:'Courtesy'},
    {tr:'කරුණාකර',pr:'KAH-roo-NAH-kah-rah',en:'Please',c:'Courtesy'},
    {tr:'සමාවෙන්න',pr:'sah-MAH-ven-nah',en:'Sorry / excuse me',c:'Courtesy'},
    {tr:'ඔව්',pr:'ov',en:'Yes',c:'Courtesy'},
    {tr:'නැත',pr:'NAE-thah',en:'No',c:'Courtesy'},
    {tr:'එක',pr:'EH-kah',en:'1',c:'Numbers'},
    {tr:'දෙක',pr:'DEH-kah',en:'2',c:'Numbers'},
    {tr:'තුන',pr:'TOO-nah',en:'3',c:'Numbers'},
    {tr:'හතර',pr:'HAH-thah-rah',en:'4',c:'Numbers'},
    {tr:'පහ',pr:'PAH-hah',en:'5',c:'Numbers'},
    {tr:'දහය',pr:'DAH-hah-yah',en:'10',c:'Numbers'},
    {tr:'වතුර',pr:'WAH-thoo-rah',en:'water',c:'Food'},
    {tr:'බත්',pr:'bath',en:'rice',c:'Food'},
    {tr:'තේ',pr:'thay',en:'tea',c:'Food'},
    {tr:'කෝපි',pr:'KOH-pee',en:'coffee',c:'Food'},
    {tr:'කිරි',pr:'KEE-ree',en:'milk',c:'Food'},
    {tr:'කොහෙද...?',pr:'koh-HEH-dah',en:'Where is...?',c:'Directions'},
    {tr:'දකුණට',pr:'DAH-koo-nah-tah',en:'to the right',c:'Directions'},
    {tr:'වමට',pr:'WAH-mah-tah',en:'to the left',c:'Directions'},
    {tr:'කෙළින්ම',pr:'KEH-leen-mah',en:'straight ahead',c:'Directions'},
    {tr:'බස් නැවතුම',pr:'bas NAE-wah-thoo-mah',en:'the bus stop',c:'Directions'},
    {tr:'කීයද?',pr:'KEE-yah-dah',en:'how much is it?',c:'Shopping'},
    {tr:'මේක කීයද?',pr:'MAY-kah KEE-yah-dah',en:'how much is this?',c:'Shopping'},
    {tr:'මට මේක ඕන',pr:'MAH-tah MAY-kah OH-nah',en:'I want this',c:'Shopping'},
    {tr:'උදව්!',pr:'OO-dahv',en:'Help!',c:'Emergency'},
    {tr:'මට උදව් ඕන',pr:'MAH-tah OO-dahv OH-nah',en:'I need help',c:'Emergency'},
    {tr:'මට තේරෙන්නේ නැහැ',pr:'mah-tah THAY-ren-nay NAE-hae',en:'I don\'t understand',c:'Emergency'},
    {tr:'රෝහල',pr:'ROH-hah-lah',en:'the hospital',c:'Emergency'},
    {tr:'අද',pr:'AH-dah',en:'today',c:'Time'},
    {tr:'හෙට',pr:'HEH-tah',en:'tomorrow',c:'Time'},
    {tr:'ඊයේ',pr:'EE-yay',en:'yesterday',c:'Time'},
    {tr:'ගුවන්තොටුපළ',pr:'goo-WAHN-toh-too-pah-lah',en:'the airport',c:'Travel'},
    {tr:'ගමන් බලපත්‍රය',pr:'GAH-mahn BAH-lah-path-rah-yah',en:'the passport',c:'Travel'},
    {tr:'ටිකට් පත',pr:'tee-KAT pah-thah',en:'the ticket',c:'Travel'},
    {tr:'ටැක්සි',pr:'TAK-see',en:'the taxi',c:'Travel'},
    {tr:'හෝටල්',pr:'HOH-tal',en:'the hotel',c:'Travel'},
    {tr:'මට වෙන්කිරීමක් තියෙනවා',pr:'MAH-tah wen-kee-REE-mak tee-YEH-nah-vah',en:'I have a reservation',c:'Travel'},
    {tr:'හෙමින් කියන්න, කරුණාකර',pr:'HEH-min kee-YAN-nah, KAH-roo-NAH-kah-rah',en:'Slower, please',c:'Travel'},
    {tr:'ඔබ ඉංග්‍රීසි කතා කරනවද?',pr:'oh-BAH ing-GREE-see kah-TAH kah-rah-nah-vah-dah',en:'Do you speak English?',c:'Travel'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Shopping','Emergency','Time','Travel'],
  culture: [
    {icon:'🙏',title:'Ayubowan — the greeting',body:'ආයුබෝවන් (ayubōvan) means "may you live long". Welcomers often press their palms together in a slight bow. Greeting this way shows respect — and a warm smile goes a long way.'},
    {icon:'🍛',title:'Rice & curry',body:'The classic meal is rice with several curries — dhal, vegetables, fish and sambol. Sri Lankan food loves spice, coconut and lime. බත් (rice) is the heart of nearly every plate.'},
    {icon:'🍵',title:'Ceylon tea',body:'Sri Lanka is famous for high-grown Ceylon tea. Locals drink it strong with milk and sugar, often all day at tea shops. A tea stop is a social ritual, not just a drink.'},
    {icon:'☸️',title:'Buddhism & temples',body:'Theravada Buddhism shapes daily life in the Sinhala-speaking south. At a temple, remove your shoes, cover shoulders and knees, and never point your feet at Buddha statues. Walk around stupas clockwise.'},
    {icon:'🦶',title:'Head & feet',body:'The head is the most sacred part of the body and the feet the lowest — so never touch a person\'s head, and don\'t point your feet at someone or a shrine. A small habit that shows big respect.'},
    {icon:'🗣️',title:'Two languages, one island',body:'Sinhala (Indo-Aryan) and Tamil (Dravidian) are unrelated languages that share Sri Lanka. Most Sri Lankans speak Sinhala; Tamil is common in the north and east. A few Sinhala words greet you anywhere.'}
  ],
  sounds: [
    {l:'අ / a',say:'short "a" — as in "but"',ex:'අම්මා = ammā = mother',voice:'අම්මා'},
    {l:'ආ / ā',say:'long "ā" — as in "father"',ex:'ආයුබෝවන් = ayubōvan = hello',voice:'ආයුබෝවන්'},
    {l:'ඇ / æ',say:'"æ" — between a and e, as in "cat"',ex:'ඇපල් = æpal = apple',voice:'ඇපල්'},
    {l:'ඉ / i',say:'short "i" — as in "bit"',ex:'කිරි = kiri = milk',voice:'කිරි'},
    {l:'උ / u',say:'short "u" — as in "put"',ex:'කුකුළු = kukuḷu = chicken',voice:'කුකුළු'},
    {l:'ට / ṭ',say:'retroflex "t" — tongue curls back',ex:'කට = kaṭa = mouth',voice:'කට'},
    {l:'ඩ / ḍ',say:'retroflex "ḍ" — tongue curls back',ex:'කඩ = kaḍa = shop',voice:'කඩ'},
    {l:'ණ / ṇ',say:'retroflex nasal "n" (dental න = na)',ex:'ණ = ṇa  vs  න = na',voice:'බණ'}
  ],
  resources: [
    {icon:'🗣️',t:'Sinhala basics for beginners',d:'Slow, clear Sinhala lessons teaching everyday words and phrases for new learners.',q:'Learn Sinhala for beginners'},
    {icon:'🐢',t:'The Sinhala alphabet',d:'Step-by-step guides to reading and writing the Sinhala script.',q:'Sinhala alphabet lessons'},
    {icon:'💬',t:'Sinhala phrases with pronunciation',d:'Practical travel phrases with native-speaker pronunciation.',q:'basic Sinhala phrases with pronunciation'},
    {icon:'📚',t:'Sinhala for travelers to Sri Lanka',d:'Essential Sinhala for getting around Sri Lanka as a visitor.',q:'Sinhala phrases for travelers Sri Lanka'},
    {icon:'🎧',t:'Conversational Sinhala',d:'Real Sinhala conversations with subtitles — great for listening practice.',q:'Sinhala conversation for beginners'}
  ]
};
