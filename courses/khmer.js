/* ---- khmer ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["khmer"] = {
  name: 'Khmer',
  flag: '🇰🇭',
  tts: 'km-KH',
  dir: 'ltr',
  native: 'ខ្មែរ',
  soundTitle: 'Khmer sounds & spelling',
  soundIntro: 'Khmer has a beautiful script and a rich vowel system. Master a few key sounds — the two consonant registers and the aspirated/unaspirated pairs — and you can read any word aloud.',
  grammar: '<p>Khmer is written in its own script, and it is very regular to learn because there are no verb tenses, no plurals, and no tricky word endings. Word order is <b>Subject-Verb-Object</b>, just like English: <i>ខ្ញុំចង់បានទឹក</i> (I want water). The two big things to know: Khmer consonants come in <b>two series</b> that change the vowel that follows, and there are pairs of <b>aspirated</b> and <b>unaspirated</b> sounds (ក vs ខ). Add the magic politeness word <b>សូម</b> (please) and you can ask for anything politely.</p>',
  bridges: '<div class="note">🇬🇧 <b>English.</b> Cambodia has borrowed a few everyday words from the wider world: <b>កាហ្វេ</b> (kafe) coffee and <b>នំប៉័ង</b> (nompang) bread come from French, as does <b>ប៉ូលីស</b> (polis) police. Money is <b>ដុល្លារ</b> (dollar).</div><div class="note">🇹🇭 <b>Thai.</b> Khmer and Thai share centuries of history — a few words sound familiar, though the scripts and grammar differ.</div>',
  lessons: [
    { id:1, title:'Greetings & being polite', focus:'chom reap suor · akun · saum · lea haoy',
      steps:[
        {t:'say',text:'Let\'s start with the first word you\'ll say: <span class="inline-tr">ជំរាបសួរ</span> — hello (polite). Say it out loud.',tr:'ជំរាបសួរ'},
        {t:'words',items:[{tr:'ជំរាបសួរ',pr:'chom reap suor',en:'hello (polite)'},{tr:'អរគុណ',pr:'akun',en:'thank you'},{tr:'សូម',pr:'saum',en:'please'},{tr:'លាហើយ',pr:'lea haoy',en:'goodbye'}]},
        {t:'chal',en:'Hello, thank you',tr:'ជំរាបសួរ, អរគុណ',pr:'chom reap suor, akun',morph:['ជំរាបសួរ = hello','អរគុណ = thank you']},
        {t:'say',text:'To ask how someone is: <span class="inline-tr">សុខសប្បាយទេ?</span> The reply is <span class="inline-tr">សុខសប្បាយ</span> — well, thanks.',tr:'សុខសប្បាយទេ?'},
        {t:'words',items:[{tr:'សុខសប្បាយទេ?',pr:'sok sabay te?',en:'How are you?'},{tr:'សុខសប្បាយ',pr:'sok sabay',en:'I\'m fine (well)'},{tr:'អរគុណច្រើន',pr:'akun craen',en:'thank you very much'}]},
        {t:'chal',en:'Hi, how are you?',tr:'ជំរាបសួរ, សុខសប្បាយទេ?',pr:'chom reap suor, sok sabay te?',morph:['ជំរាបសួរ = hello','សុខសប្បាយទេ? = how are you?']}
      ],
      blocks:['<code>ជំរាបសួរ</code> = hello','<code>អរគុណ</code> = thank you · <code>សូម</code> = please','<code>លាហើយ</code> = goodbye'] },
    { id:2, title:'Numbers 1–10', focus:'muay · pir · bei · dop',
      steps:[
        {t:'say',text:'Numbers are the fastest win. Listen and repeat: <span class="inline-tr">មួយ, ពីរ, បី</span>.',tr:'មួយ'},
        {t:'words',items:[{tr:'មួយ',pr:'muay',en:'1'},{tr:'ពីរ',pr:'pir',en:'2'},{tr:'បី',pr:'bei',en:'3'},{tr:'បួន',pr:'buon',en:'4'},{tr:'ប្រាំ',pr:'pram',en:'5'},{tr:'ដប់',pr:'dop',en:'10'}]},
        {t:'chal',en:'Two coffees, please',tr:'កាហ្វេពីរ, សូម',pr:'kafe pir, saum',morph:['កាហ្វេ = coffee','ពីរ = two','សូម = please']},
        {t:'say',text:'To ask the price: <span class="inline-tr">ថ្លៃប៉ុន្មាន?</span> = how much? A key phrase for shopping.',tr:'ថ្លៃប៉ុន្មាន?'},
        {t:'chal',en:'How much is this?',tr:'តើនេះថ្លៃប៉ុន្មាន?',pr:'tae nih thlai ponman?',morph:['នេះ = this','ថ្លៃ = price','ប៉ុន្មាន = how much']},
        {t:'chal',en:'It\'s five dollars',tr:'ប្រាំដុល្លារ',pr:'pram dohlar',morph:['ប្រាំ = five','ដុល្លារ = dollars']}
      ],
      blocks:['មួយ, ពីរ, បី, បួន, ប្រាំ = 1–5','<code>ថ្លៃប៉ុន្មាន?</code> = how much is it?'] },
    { id:3, title:'"I want" — the verb to want', focus:'khnhom chng ban · saum · khnhom',
      steps:[
        {t:'say',text:'The magic phrase to order anything: <span class="inline-tr">ខ្ញុំចង់បាន</span> — I want. ',tr:'ខ្ញុំចង់បាន'},
        {t:'say',text:'To ask politely, put <span class="inline-tr">សូម</span> (please) before the thing you want.',tr:'សូម'},
        {t:'chal',en:'I want water',tr:'ខ្ញុំចង់បានទឹក',pr:'khnhom chng ban tuk',morph:['ខ្ញុំចង់បាន = I want','ទឹក = water']},
        {t:'chal',en:'I\'d like a coffee, please',tr:'សូមកាហ្វេ',pr:'saum kafe',morph:['សូម = please','កាហ្វេ = coffee']},
        {t:'say',text:'<span class="inline-tr">ខ្ញុំ</span> = I. <span class="inline-tr">ចង់បាន</span> = want. Combine them and you\'re unstoppable.',tr:'ចង់បាន'},
        {t:'chal',en:'I want tea',tr:'ខ្ញុំចង់បានតែ',pr:'khnhom chng ban te',morph:['ខ្ញុំចង់បាន = I want','តែ = tea']}
      ],
      blocks:['<code>ខ្ញុំចង់បាន</code> = I want','<code>ខ្ញុំ</code> = I','<code>សូម</code> = please (polite)'] },
    { id:4, title:'Food & drink', focus:'tuk · bay · kafe · te',
      steps:[
        {t:'say',text:'Feeling hungry? Key words: <span class="inline-tr">ទឹក</span> (water), <span class="inline-tr">បាយ</span> (rice), <span class="inline-tr">កាហ្វេ</span> (coffee), <span class="inline-tr">តែ</span> (tea).',tr:'ទឹក'},
        {t:'words',items:[{tr:'ទឹក',pr:'tuk',en:'water'},{tr:'បាយ',pr:'bay',en:'cooked rice'},{tr:'កាហ្វេ',pr:'kafe',en:'coffee',link:'≈ from French café'},{tr:'តែ',pr:'te',en:'tea'},{tr:'នំប៉័ង',pr:'nompang',en:'bread',link:'≈ from French pain'}]},
        {t:'chal',en:'Water and rice, please',tr:'សូមទឹកនិងបាយ',pr:'saum tuk neung bay',morph:['សូម = please','ទឹក = water','និង = and','បាយ = rice']},
        {t:'chal',en:'I want coffee and tea',tr:'ខ្ញុំចង់បានកាហ្វេនិងតែ',pr:'khnhom chng ban kafe neung te',morph:['ខ្ញុំចង់បាន = I want','កាហ្វេ = coffee','និង = and','តែ = tea']},
        {t:'say',text:'<span class="inline-tr">ឆ្ងាញ់</span> = delicious. Say it and you\'ll make the cook\'s day.',tr:'ឆ្ងាញ់'},
        {t:'chal',en:'It\'s delicious!',tr:'ឆ្ងាញ់ណាស់!',pr:'chnanh nah!',morph:['ឆ្ងាញ់ = delicious','ណាស់ = very']}
      ],
      blocks:['<code>ទឹក</code>, <code>បាយ</code> = water, rice','<code>កាហ្វេ</code>, <code>តែ</code> = coffee, tea','<code>ឆ្ងាញ់</code> = delicious'] },
    { id:5, title:'Getting around', focus:'now ae na? · stani · bot sdam · bot chveang',
      steps:[
        {t:'say',text:'The most useful question in any city: <span class="inline-tr">នៅឯណា…?</span> — where is…?',tr:'នៅឯណា…?'},
        {t:'words',items:[{tr:'នៅឯណា…?',pr:'now ae na…?',en:'Where is…?'},{tr:'ស្ថានីយ៍',pr:'stani',en:'station'},{tr:'បត់ស្តាំ',pr:'bot sdam',en:'turn right'},{tr:'បត់ឆ្វេង',pr:'bot chveang',en:'turn left'},{tr:'បន្ទប់ទឹក',pr:'bantob tuk',en:'bathroom'}]},
        {t:'chal',en:'Where is the station?',tr:'ស្ថានីយ៍នៅឯណា?',pr:'stani now ae na?',morph:['ស្ថានីយ៍ = station','នៅឯណា? = where is?']},
        {t:'chal',en:'Where is the bathroom?',tr:'បន្ទប់ទឹកនៅឯណា?',pr:'bantob tuk now ae na?',morph:['បន្ទប់ទឹក = bathroom','នៅឯណា? = where is?']},
        {t:'say',text:'<span class="inline-tr">បត់ស្តាំ</span> = turn right, <span class="inline-tr">បត់ឆ្វេង</span> = turn left. Straight ahead is <span class="inline-tr">ត្រង់</span>.',tr:'ត្រង់'},
        {t:'chal',en:'Turn left',tr:'បត់ឆ្វេង',pr:'bot chveang',morph:['បត់ = turn','ឆ្វេង = left']}
      ],
      blocks:['<code>នៅឯណា…?</code> = where is…?','<code>បត់ស្តាំ</code> / <code>បត់ឆ្វេង</code> = turn right / left'] },
    { id:6, title:'Questions & "do you have…?"', focus:'tae anak mean…? · mean · tae mean…?',
      steps:[
        {t:'say',text:'To ask someone if they have something: <span class="inline-tr">តើអ្នកមាន…?</span> — do you have…?',tr:'តើអ្នកមាន…?'},
        {t:'chal',en:'Do you have a table?',tr:'តើអ្នកមានតុទេ?',pr:'tae anak mean tok te?',morph:['តើ = question marker','អ្នកមាន = you have','តុ = table','ទេ = ?']},
        {t:'say',text:'<span class="inline-tr">មាន</span> = have. It\'s the key verb for \'do you have…?\'.',tr:'មាន'},
        {t:'say',text:'To ask \'is there…?\', say <span class="inline-tr">តើមាន…ទេ?</span>.',tr:'តើមាន…ទេ?'},
        {t:'chal',en:'Is there wifi?',tr:'តើមានវ៉ាយហ្វាយទេ?',pr:'tae mean wifi te?',morph:['តើមាន…ទេ? = is there…?','វ៉ាយហ្វាយ = wifi']},
        {t:'chal',en:'Do you have a menu?',tr:'តើអ្នកមានម៉ឺនុយទេ?',pr:'tae anak mean menuy te?',morph:['អ្នកមាន = you have','ម៉ឺនុយ = menu']}
      ],
      blocks:['<code>តើអ្នកមាន…?</code> = do you have…?','<code>មាន</code> = have','<code>តើមាន…ទេ?</code> = is there…?'] },
    { id:7, title:'Family & people', focus:'kruosa · mae · ovpuk · mit',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">គ្រួសារ</span> (family), <span class="inline-tr">ម៉ែ</span> (mother), <span class="inline-tr">ឪពុក</span> (father).',tr:'គ្រួសារ'},
        {t:'words',items:[{tr:'គ្រួសារ',pr:'kruosa',en:'family'},{tr:'ម៉ែ',pr:'mae',en:'mother'},{tr:'ឪពុក',pr:'ovpuk',en:'father'},{tr:'មិត្ត',pr:'mit',en:'friend'},{tr:'បងប្អូន',pr:'bang paun',en:'siblings'}]},
        {t:'chal',en:'This is my family',tr:'នេះគ្រួសារខ្ញុំ',pr:'nih kruosa khnhom',morph:['នេះ = this','គ្រួសារ = family','ខ្ញុំ = my/I']},
        {t:'chal',en:'I have a friend',tr:'ខ្ញុំមានមិត្តម្នាក់',pr:'khnhom mean mit mneak',morph:['ខ្ញុំ = I','មាន = have','មិត្ត = friend','ម្នាក់ = one (person)']},
        {t:'chal',en:'He is my father',tr:'គាត់ជាឪពុកខ្ញុំ',pr:'keat chea ovpuk khnhom',morph:['គាត់ = he/she','ជា = is','ឪពុក = father','ខ្ញុំ = my']}
      ],
      blocks:['<code>គ្រួសារ</code> = family','<code>ម៉ែ</code> / <code>ឪពុក</code> = mother / father','<code>មិត្ត</code> = friend'] },
    { id:8, title:'Time, days & weather', focus:'thngay nih · thngay saek · akasathot',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">ថ្ងៃនេះ</span>, tomorrow is <span class="inline-tr">ថ្ងៃស្អែក</span>.',tr:'ថ្ងៃនេះ'},
        {t:'words',items:[{tr:'ថ្ងៃនេះ',pr:'thngay nih',en:'today'},{tr:'ថ្ងៃស្អែក',pr:'thngay saek',en:'tomorrow'},{tr:'ម្សិលមិញ',pr:'msel minh',en:'yesterday'},{tr:'អាកាសធាតុ',pr:'akasathot',en:'weather'},{tr:'ថ្ងៃ',pr:'thngay',en:'day'}]},
        {t:'chal',en:'See you tomorrow',tr:'ជួបគ្នាថ្ងៃស្អែក',pr:'chuap knea thngay saek',morph:['ជួបគ្នា = see each other','ថ្ងៃស្អែក = tomorrow']},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">អាកាសធាតុយ៉ាងម៉េច?</span>',tr:'អាកាសធាតុយ៉ាងម៉េច?'},
        {t:'chal',en:'It\'s raining',tr:'ភ្លៀងធ្លាក់',pr:'pliang thlak',morph:['ភ្លៀង = rain','ធ្លាក់ = falls']}
      ],
      blocks:['<code>ថ្ងៃនេះ</code> / <code>ថ្ងៃស្អែក</code> = today / tomorrow','<code>អាកាសធាតុ</code> = weather'] },
    { id:9, title:'Introducing yourself', focus:'khnhom chhmueh · chhmueh anak avai?',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">ខ្ញុំឈ្មោះ…</span> = my name is… and <span class="inline-tr">សូម</span> keeps it polite.',tr:'ខ្ញុំឈ្មោះ…'},
        {t:'chal',en:'My name is __NAME__',tr:'ខ្ញុំឈ្មោះ __NAME__',pr:'khnhom chhmueh __NAME__',morph:['ខ្ញុំឈ្មោះ = my name is','__NAME__ = your name']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">ឈ្មោះអ្នកអ្វី?</span>',tr:'ឈ្មោះអ្នកអ្វី?'},
        {t:'chal',en:'What\'s your name?',tr:'ឈ្មោះអ្នកអ្វី?',pr:'chhmueh anak avai?',morph:['ឈ្មោះ = name','អ្នក = you','អ្វី? = what?']},
        {t:'chal',en:'I\'m from America',tr:'ខ្ញុំមកពីអាមេរិក',pr:'khnhom mok pi Amerik',morph:['ខ្ញុំ = I','មកពី = come from','អាមេរិក = America']}
      ],
      blocks:['<code>ខ្ញុំឈ្មោះ…</code> = my name is…','<code>ឈ្មោះអ្នកអ្វី?</code> = what\'s your name?'] },
    { id:10, title:'Health & emergency', focus:'chuay! · kru pet · osothstan · min yol',
      steps:[
        {t:'say',text:'The most important words if you need help: <span class="inline-tr">ជួយ!</span> (help), <span class="inline-tr">គ្រូពេទ្យ</span> (doctor), <span class="inline-tr">ឱសថស្ថាន</span> (pharmacy).',tr:'ជួយ!'},
        {t:'words',items:[{tr:'ជួយ!',pr:'chuay!',en:'help!'},{tr:'គ្រូពេទ្យ',pr:'kru pet',en:'doctor'},{tr:'ឱសថស្ថាន',pr:'osothstan',en:'pharmacy'},{tr:'ប៉ូលីស',pr:'polis',en:'police',link:'≈ from French police'},{tr:'ខ្ញុំមិនយល់ទេ',pr:'khnhom min yol te',en:'I don\'t understand'}]},
        {t:'chal',en:'Help!',tr:'ជួយ!',pr:'chuay!',morph:['ជួយ! = help!']},
        {t:'chal',en:'I don\'t understand',tr:'ខ្ញុំមិនយល់ទេ',pr:'khnhom min yol te',morph:['ខ្ញុំ = I','មិន = not','យល់ = understand','ទេ = no/-']},
        {t:'say',text:'To say you need something: <span class="inline-tr">ខ្ញុំត្រូវការ…</span> = I need….',tr:'ខ្ញុំត្រូវការ…'},
        {t:'chal',en:'I need a doctor',tr:'ខ្ញុំត្រូវការគ្រូពេទ្យ',pr:'khnhom trauv kar kru pet',morph:['ខ្ញុំត្រូវការ = I need','គ្រូពេទ្យ = doctor']}
      ],
      blocks:['<code>ជួយ!</code> = help','<code>គ្រូពេទ្យ</code> = the doctor','<code>ខ្ញុំមិនយល់ទេ</code> = I don\'t understand'] },
    { id:11, title:'Describing things', focus:'saht · thom · touc · nah',
      steps:[
        {t:'say',text:'Adjectives are easy: <span class="inline-tr">ស្អាត</span> (beautiful), <span class="inline-tr">ធំ</span> (big), <span class="inline-tr">តូច</span> (small).',tr:'ស្អាត'},
        {t:'words',items:[{tr:'ស្អាត',pr:'saht',en:'beautiful'},{tr:'ធំ',pr:'thom',en:'big'},{tr:'តូច',pr:'touc',en:'small'},{tr:'ណាស់',pr:'nah',en:'very / a lot'},{tr:'សណ្ឋាគារ',pr:'sonthakear',en:'hotel',link:'≈ Sino loanword (hotel)'}]},
        {t:'chal',en:'Very beautiful',tr:'ស្អាតណាស់',pr:'saht nah',morph:['ស្អាត = beautiful','ណាស់ = very']},
        {t:'chal',en:'A big coffee',tr:'កាហ្វេធំ',pr:'kafe thom',morph:['កាហ្វេ = coffee','ធំ = big']},
        {t:'chal',en:'The hotel is big',tr:'សណ្ឋាគារធំ',pr:'sonthakear thom',morph:['សណ្ឋាគារ = hotel','ធំ = big']}
      ],
      blocks:['<code>ស្អាត</code> = beautiful','<code>ធំ</code> / <code>តូច</code> = big / small','<code>ណាស់</code> = very'] },
    { id:12, title:'Tying it together', focus:'a capstone day in Khmer',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolbox. This capstone uses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello, how are you?',tr:'ជំរាបសួរ, សុខសប្បាយទេ?',pr:'chom reap suor, sok sabay te?',morph:['ជំរាបសួរ = hello','សុខសប្បាយទេ? = how are you?']},
        {t:'chal',en:'I\'d like a coffee, please',tr:'សូមកាហ្វេ',pr:'saum kafe',morph:['សូម = please','កាហ្វេ = coffee']},
        {t:'chal',en:'Where is the station?',tr:'ស្ថានីយ៍នៅឯណា?',pr:'stani now ae na?',morph:['ស្ថានីយ៍ = station','នៅឯណា? = where is?']},
        {t:'chal',en:'How much is this?',tr:'តើនេះថ្លៃប៉ុន្មាន?',pr:'tae nih thlai ponman?',morph:['នេះ = this','ថ្លៃ = price','ប៉ុន្មាន = how much']},
        {t:'chal',en:'Delicious! Thank you!',tr:'ឆ្ងាញ់ណាស់! អរគុណ!',pr:'chnanh nah! akun!',morph:['ឆ្ងាញ់ណាស់ = delicious','អរគុណ = thank you']}
      ],
      blocks:['You built: greetings, ordering, directions, prices, thanks — a full day out in Khmer.'] },
    { id:13, title:'Airport & tickets', focus:'ព្រលានយន្តហោះ · លិខិតឆ្លងដែន · សំបុត្រ · ច្រក',
      steps:[
        {t:'say',text:'You have landed. The building is the <span class="inline-tr">ព្រលានយន្តហោះ</span>. Your document is a <span class="inline-tr">លិខិតឆ្លងដែន</span>.',tr:'ព្រលានយន្តហោះ'},
        {t:'words',items:[{tr:'ព្រលានយន្តហោះ',pr:'prulian yont hoah',en:'airport'},{tr:'លិខិតឆ្លងដែន',pr:'likhet chlang daen',en:'passport'},{tr:'សំបុត្រ',pr:'sambot',en:'ticket'},{tr:'ជើងហោះហើរ',pr:'cheung hoah haeu',en:'flight'},{tr:'ច្រក',pr:'chrok',en:'gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'ព្រលានយន្តហោះនៅហៈណា?',pr:'prulian yont hoah now ae na?',morph:['ព្រលានយន្តហោះ = airport','នៅហៈណា? = where is?']},
        {t:'chal',en:'Here is my passport',tr:'នេះលិខិតឆ្លងដែនខ្ញុំ',pr:'nih likhet chlang daen khnhom',morph:['នេះ = this','លិខិតឆ្លងដែន = passport','ខ្ញុំ = my']},
        {t:'chal',en:'A ticket, please',tr:'សូមសំបុត្រមួយ',pr:'saum sambot muay',morph:['សូម = please','សំបុត្រ = ticket','មួយ = one']},
        {t:'chal',en:'Where is the gate?',tr:'ច្រកនៅហៈណា?',pr:'chrok now ae na?',morph:['ច្រក = gate','នៅហៈណា? = where is?']}
      ],
      blocks:['<code>ព្រលានយន្តហោះ</code> = airport','<code>លិខិតឆ្លងដែន</code> = passport','<code>សំបុត្រ</code> = ticket','<code>ច្រក</code> = gate'] },
    { id:14, title:'The taxi', focus:'តាក់ស៊ី · ខ្ញុំចង់ទៅ · សណ្ឋាគារ · សូមឈប់',
      steps:[
        {t:'say',text:'The driver is waiting. <span class="inline-tr">តាក់ស៊ី</span> is taxi. Tell them where to go with <span class="inline-tr">ខ្ញុំចង់ទៅសណ្ឋាគារ</span>.',tr:'តាក់ស៊ី'},
        {t:'words',items:[{tr:'តាក់ស៊ី',pr:'taksi',en:'taxi'},{tr:'អ្នកបើកបរ',pr:'anak baek ba',en:'driver'},{tr:'ខ្ញុំចង់ទៅ',pr:'khnhom chng toh',en:'I want to go'},{tr:'សូមឈប់ទីនេះ',pr:'saum chhup ti nih',en:'please stop here'}]},
        {t:'chal',en:'Taxi, please',tr:'សូមតាក់ស៊ី',pr:'saum taksi',morph:['សូម = please','តាក់ស៊ី = taxi']},
        {t:'chal',en:'I want to go to the hotel',tr:'ខ្ញុំចង់ទៅសណ្ឋាគារ',pr:'khnhom chng toh sonthakear',morph:['ខ្ញុំចង់ទៅ = I want to go','សណ្ឋាគារ = hotel']},
        {t:'chal',en:'Stop here, please',tr:'សូមឈប់ទីនេះ',pr:'saum chhup ti nih',morph:['សូម = please','ឈប់ = stop','ទីនេះ = here']},
        {t:'chal',en:'How much is it?',tr:'តើនេះថ្លៃប៉ុន្មាន?',pr:'tae nih thlai ponman?',morph:['នេះ = this','ថ្លៃ = price','ប៉ុន្មាន = how much']}
      ],
      blocks:['<code>ខ្ញុំចង់ទៅ…</code> = I want to go to …','<code>សូមឈប់ទីនេះ</code> = please stop here'] },
    { id:15, title:'The hotel', focus:'ការកក់ · បន្ទប់ · សោ · យប់',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">ខ្ញុំមានការកក់</span> — I have a reservation.',tr:'ការកក់'},
        {t:'words',items:[{tr:'សណ្ឋាគារ',pr:'sonthakear',en:'hotel'},{tr:'ការកក់',pr:'kar kak',en:'reservation'},{tr:'បន្ទប់',pr:'bantob',en:'room'},{tr:'សោ',pr:'sao',en:'key'},{tr:'មួយយប់',pr:'muay yob',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'ខ្ញុំមានការកក់',pr:'khnhom mean kar kak',morph:['ខ្ញុំ = I','មាន = have','ការកក់ = reservation']},
        {t:'chal',en:'A room for one night, please',tr:'សូមបន្ទប់មួយយប់',pr:'saum bantob muay yob',morph:['សូម = please','បន្ទប់ = room','មួយយប់ = one night']},
        {t:'chal',en:'The key, please',tr:'សូមសោ',pr:'saum sao',morph:['សូម = please','សោ = key']},
        {t:'chal',en:'Where is my room?',tr:'បន្ទប់ខ្ញុំនៅហៈណា?',pr:'bantob khnhom now ae na?',morph:['បន្ទប់ខ្ញុំ = my room','នៅហៈណា? = where is?']}
      ],
      blocks:['<code>ការកក់</code> = reservation','<code>បន្ទប់</code> = room','<code>សោ</code> = key'] },
    { id:16, title:'Ask for help', focus:'ខ្ញុំមិនយល់ទេ · យឺតៗ · អង់គ្លេស',
      steps:[
        {t:'say',text:'When the language is too fast: <span class="inline-tr">សូមនិយាយយឺតៗ</span> — please speak slower.',tr:'សូមនិយាយយឺតៗ'},
        {t:'words',items:[{tr:'យឺតៗ',pr:'yeut yeut',en:'slower'},{tr:'ម្ដងទៀត',pr:'mdong tiet',en:'again'},{tr:'អង់គ្លេស',pr:'angkles',en:'English'},{tr:'តើអ្នកអាចជួយបានទេ?',pr:'tae anak ach chuay ban te?',en:'can you help?'}]},
        {t:'chal',en:'I don\'t understand',tr:'ខ្ញុំមិនយល់ទេ',pr:'khnhom min yol te',morph:['ខ្ញុំ = I','មិន = not','យល់ = understand','ទេ = no']},
        {t:'chal',en:'Slower, please',tr:'សូមនិយាយយឺតៗ',pr:'saum niyeay yeut yeut',morph:['សូម = please','និយាយ = speak','យឺតៗ = slower']},
        {t:'chal',en:'Can you help me?',tr:'តើអ្នកអាចជួយខ្ញុំបានទេ?',pr:'tae anak ach chuay khnhom ban te?',morph:['តើអ្នកអាច = can you','ជួយខ្ញុំ = help me']},
        {t:'chal',en:'Do you speak English?',tr:'តើអ្នកនិយាយអង់គ្លេសទេ?',pr:'tae anak niyeay angkles te?',morph:['តើអ្នកនិយាយ = do you speak','អង់គ្លេស = English']}
      ],
      blocks:['<code>យឺតៗ</code> = slower','<code>តើអ្នកនិយាយអង់គ្លេសទេ?</code> = do you speak English?'] },
  ],
  dialogues: [
    { id:'cafe', title:'☕ At a café', emoji:'☕', turns:[
      {who:'You',tr:'ជំរាបសួរ! កាហ្វេមួយ, សូម។',pr:'chom reap suor! kafe muay, saum.',en:'Hello! One coffee, please.'},
      {who:'Barista',tr:'បាន។ នៅទីនេះ ឬ យកទៅ?',pr:'ban. now ti nih, beuy yok to?',en:'OK. For here or to go?'},
      {who:'You',tr:'យកទៅ, អរគុណ។',pr:'yok to, akun.',en:'To go, thanks.'},
      {who:'Barista',tr:'នេះ។ ពីរដុល្លារ។',pr:'nih. pir dohlar.',en:'Here. That\'s two dollars.'},
      {who:'You',tr:'អរគុណច្រើន!',pr:'akun craen!',en:'Thanks a lot!'}
    ]},
    { id:'tuktuk', title:'🛺 A tuk-tuk ride', emoji:'🛺', turns:[
      {who:'You',tr:'ជំរាបសួរ! ទៅស្ថានីយ៍។',pr:'chom reap suor! toh stani.',en:'Hello! To the station.'},
      {who:'Driver',tr:'បាន។ ដប់ដុល្លារ។',pr:'ban. dop dohlar.',en:'OK. Ten dollars.'},
      {who:'You',tr:'ថ្លៃពេកហើយ។ ប្រាំដុល្លារ?',pr:'thlai pek haoy. pram dohlar?',en:'Too expensive. Five dollars?'},
      {who:'Driver',tr:'បាន។ ឡើងមក!',pr:'ban. laeng mok!',en:'OK. Get in!'},
      {who:'You',tr:'សូមទៅស្ថានីយ៍, អរគុណ។',pr:'saum toh stani, akun.',en:'Please go to the station, thanks.'}
    ]},
    { id:'restaurant', title:'🍜 At a restaurant', emoji:'🍜', turns:[
      {who:'Waiter',tr:'ជំរាបសួរ! តើអ្នកមានការកក់ទេ?',pr:'chom reap suor! tae anak mean kar kak te?',en:'Hello! Do you have a reservation?'},
      {who:'You',tr:'បាទ, សម្រាប់ពីរនាក់។',pr:'bait, samrab pir neak.',en:'Yes, for two people.'},
      {who:'You',tr:'សូមម៉ឺនុយ។',pr:'saum menuy.',en:'The menu, please.'},
      {who:'You',tr:'ខ្ញុំចង់បានបាយនិងស៊ុប។',pr:'khnhom chng ban bay neung sup.',en:'I\'d like rice and soup.'},
      {who:'Waiter',tr:'ជម្រើសល្អណាស់! សូមឱ្យបានឆ្ងាញ់!',pr:'chomreus lah nah! saum aoy ban chnanh!',en:'Excellent choice! Enjoy your meal.'}
    ]},
    { id:'market', title:'🍌 At the market', emoji:'🍌', turns:[
      {who:'You',tr:'តើនេះថ្លៃប៉ុន្មាន?',pr:'tae nih thlai ponman?',en:'How much is this?'},
      {who:'Seller',tr:'បីដុល្លារ។',pr:'bei dohlar.',en:'Three dollars.'},
      {who:'You',tr:'ថ្លៃពេកហើយ។ ពីរដុល្លារ?',pr:'thlai pek haoy. pir dohlar?',en:'Too expensive. Two dollars?'},
      {who:'Seller',tr:'បាន។',pr:'ban.',en:'OK.'},
      {who:'You',tr:'អរគុណ!',pr:'akun!',en:'Thanks!'}
    ]}
  ],
  pocket: [
    {tr:'ជំរាបសួរ',pr:'chom reap suor',en:'Hello',c:'Greetings'},
    {tr:'លាហើយ',pr:'lea haoy',en:'Goodbye',c:'Greetings'},
    {tr:'សុខសប្បាយទេ?',pr:'sok sabay te?',en:'How are you?',c:'Greetings'},
    {tr:'សុខសប្បាយ',pr:'sok sabay',en:'Well, thanks',c:'Greetings'},
    {tr:'ខ្ញុំឈ្មោះ __NAME__',pr:'khnhom chhmueh __NAME__',en:'My name is...',c:'Greetings'},
    {tr:'អរគុណ',pr:'akun',en:'Thank you',c:'Courtesy'},
    {tr:'អរគុណច្រើន',pr:'akun craen',en:'Thanks a lot',c:'Courtesy'},
    {tr:'សូម',pr:'saum',en:'Please',c:'Courtesy'},
    {tr:'សូមទោស',pr:'saum toh',en:'Sorry / excuse me',c:'Courtesy'},
    {tr:'បាទ',pr:'bait',en:'Yes (polite)',c:'Courtesy'},
    {tr:'ពេលអត់ទេ',pr:'te',en:'No',c:'Courtesy'},
    {tr:'មួយ',pr:'muay',en:'1',c:'Numbers'},
    {tr:'ពីរ',pr:'pir',en:'2',c:'Numbers'},
    {tr:'បី',pr:'bei',en:'3',c:'Numbers'},
    {tr:'បួន',pr:'buon',en:'4',c:'Numbers'},
    {tr:'ប្រាំ',pr:'pram',en:'5',c:'Numbers'},
    {tr:'ដប់',pr:'dop',en:'10',c:'Numbers'},
    {tr:'ទឹក',pr:'tuk',en:'water',c:'Food'},
    {tr:'បាយ',pr:'bay',en:'rice',c:'Food'},
    {tr:'កាហ្វេ',pr:'kafe',en:'coffee',c:'Food'},
    {tr:'តែ',pr:'te',en:'tea',c:'Food'},
    {tr:'នំប៉័ង',pr:'nompang',en:'bread',c:'Food'},
    {tr:'នៅឯណា…?',pr:'now ae na…?',en:'Where is...?',c:'Directions'},
    {tr:'បត់ស្តាំ',pr:'bot sdam',en:'turn right',c:'Directions'},
    {tr:'បត់ឆ្វេង',pr:'bot chveang',en:'turn left',c:'Directions'},
    {tr:'ត្រង់',pr:'trong',en:'straight ahead',c:'Directions'},
    {tr:'ស្ថានីយ៍',pr:'stani',en:'station',c:'Directions'},
    {tr:'តើនេះថ្លៃប៉ុន្មាន?',pr:'tae nih thlai ponman?',en:'how much is this?',c:'Shopping'},
    {tr:'ថ្លៃពេកហើយ',pr:'thlai pek haoy',en:'too expensive',c:'Shopping'},
    {tr:'ខ្ញុំចង់បាន',pr:'khnhom chng ban',en:'I want',c:'Shopping'},
    {tr:'ម៉ឺនុយ',pr:'menuy',en:'menu',c:'Shopping'},
    {tr:'ជួយ!',pr:'chuay!',en:'Help!',c:'Emergency'},
    {tr:'គ្រូពេទ្យ',pr:'kru pet',en:'doctor',c:'Emergency'},
    {tr:'ឱសថស្ថាន',pr:'osothstan',en:'pharmacy',c:'Emergency'},
    {tr:'ខ្ញុំមិនយល់ទេ',pr:'khnhom min yol te',en:'I don\'t understand',c:'Emergency'},
    {tr:'ថ្ងៃនេះ',pr:'thngay nih',en:'today',c:'Time'},
    {tr:'ថ្ងៃស្អែក',pr:'thngay saek',en:'tomorrow',c:'Time'},
    {tr:'អាកាសធាតុ',pr:'akasathot',en:'weather',c:'Time'},
    {tr:'ព្រលានយន្តហោះ',pr:'prulian yont hoah',en:'airport',c:'Travel'},
    {tr:'លិខិតឆ្លងដែន',pr:'likhet chlang daen',en:'passport',c:'Travel'},
    {tr:'សូមតាក់ស៊ី',pr:'saum taksi',en:'Taxi, please',c:'Travel'},
    {tr:'ខ្ញុំមានការកក់',pr:'khnhom mean kar kak',en:'I have a reservation',c:'Travel'},
    {tr:'សូមនិយាយយឺតៗ',pr:'saum niyeay yeut yeut',en:'Slower, please',c:'Travel'},
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Shopping','Emergency','Time', 'Travel'],
  culture: [
    {icon:'☕',title:'Coffee runs deep',body:'Cambodia loves its coffee. The classic is iced coffee with sweetened condensed milk (កាហ្វេទឹកដោះគោ), a legacy of French and Vietnamese influence. Try one street-side — it\'s cheap, cooling and delicious.'},
    {icon:'🙏',title:'The sampeah greeting',body:'The traditional greeting is សំពះ (sampeah): palms pressed together at your chest. The higher your hands, the more respect you show. A small sampeah to equals is a warm, polite hello.'},
    {icon:'🛺',title:'Tuk-tuks over taxis',body:'Three-wheeled tuk-tuks are the easiest way to get around. There are no meters — always agree the price before you get in. A friendly haggle is expected and enjoyed.'},
    {icon:'🍜',title:'Rice is the meal',body:'បាយ (bay, cooked rice) is the heart of every Cambodian meal. Dishes come family-style and are shared. You\'ll get your own plate of rice, with small dishes to go with it.'},
    {icon:'💵',title:'Two currencies',body:'Cambodia uses both the riel and the US dollar. Dollars are common for bigger prices, riel for small change. Prices are often quoted in dollars — ask if unsure.'},
    {icon:'😊',title:'The land of smiles',body:'Khmer culture values calm and non-confrontational manners. A smile (ញញឹម, nhnhoem) smooths over awkward moments, and a friendly \'chom reap suor\' and \'akun\' open every door.'}
  ],
  sounds: [
    {l:'ក vs ខ',say:'UNASPIRATED vs ASPIRATED: ក is a clean "k" with no puff of air. ខ adds a strong breathy puff — "kh".',ex:'កាហ្វេ = KAFE (coffee) · ខ្ញុំ = KHNHOM (I)',voice:'កាហ្វេ'},
    {l:'ត vs ថ',say:'The same trick for the "t" sound: ត is unaspirated, ថ is aspirated (breathy "th").',ex:'តែ = TE (tea) · ថ្ងៃ = THNGAY (day)',voice:'តែ'},
    {l:'ប vs ផ',say:'Unaspirated "b/p" against aspirated "ph" — the second has a puff of air.',ex:'បាយ = BAY (rice) · ផ្កា = PHKA (flower)',voice:'បាយ'},
    {l:'The two registers',say:'Khmer consonants come in two SERIES. A series-2 (voiced) consonant changes the vowel that follows, shifting its sound and length.',ex:'គ = KO (series 2) vs ក = KA (series 1)',voice:'គ'},
    {l:'អា (aa)',say:'The long open "aa" as in "father" — written with the aa vowel sign.',ex:'កាហ្វេ = KAFE (coffee) · បាយ = BAY (rice)',voice:'បាយ'},
    {l:'អូ (ou)',say:'The long rounded "oo/ou" as in "moon" — as in សូម (please).',ex:'សូម = SOUM (please) · គ្រូ = KRU (teacher)',voice:'សូម'},
    {l:'អិ vs អី (i/ei)',say:'Short "i" as in "bit" vs the long "ei" as in "say". Vowel length changes the word.',ex:'មិន = MIN (not) · តី = TEI',voice:'មិន'},
    {l:'ង (ng)',say:'The soft final "ng" is everywhere in Khmer. Don\'t stress it — let it end softly.',ex:'ថ្ងៃ = THNGAY (day) · ក្មេង = KMAENG (child)',voice:'ថ្ងៃ'}
  ],
  resources: [
    {icon:'🗣️',t:'Learn Khmer with Khmer Lesson',d:'Structured beginner videos with Romanization and Khmer script together — perfect for the first steps.',q:'Khmer lesson for beginners'},
    {icon:'🐢',t:'Learn Khmer Now',d:'Slow, patient walkthroughs of everyday vocabulary and conversation.',q:'Learn Khmer Now channel'},
    {icon:'🎧',t:'Khmer dialogues & listening',d:'Real dialogues with subtitles to build your ear for rapid natural speech.',q:'Khmer dialogue with subtitles'},
    {icon:'📚',t:'Khmer alphabet & script',d:'A systematic breakdown of the Khmer alphabet and the vowel registers.',q:'Khmer alphabet vowels tutorial'},
    {icon:'💬',t:'Survival phrases for travellers',d:'Quick phrase lists for a walk or commute — grab the basics fast.',q:'Khmer survival phrases for travelers'}
  ]
};
