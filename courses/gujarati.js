/* ---- gujarati ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["gujarati"] = {
  name: 'Gujarati',
  flag: '🇮🇳',
  tts: 'gu-IN',
  dir: 'ltr',
  native: 'ગુજરાતી',
  script: 'Gujarati',
  soundTitle: 'Gujarati sounds & script',
  soundIntro: 'Gujarati is written left to right in its own alphabet and is close to phonetic — most letters are said the way they are written. Learn a few and you can read any word.',
  grammar: '<p>Gujarati is written in its own script, left to right, and is mostly phonetic: each letter is said the way it is written. A key feature is the built-in <b>a</b> vowel — <b>ક</b> alone sounds like <i>ka</i>. Words like <b>છ</b> give a \'chh\' sound (<i>chha</i>), <b>જ</b> is \'j\' (<i>jamne</i>), and <b>શ</b> is \'sh\' (<i>shubh</i>). The verb usually comes at the end, so <i>મને પાણી જોઈએ છે</i> literally means \'to me water is wanted\' — which is simply \'I want water\'.</p>',
  bridges: '<div class="note">🇬🇧 <b>English.</b> Gujarati uses several everyday words borrowed straight from English: station, bill, menu, table, doctor, hospital, police, coffee, tea.</div><div class="note">🇮🇳 <b>Hindi.</b> Gujarati shares a script family and a lot of vocabulary with Hindi, so learning one gives you a big head start on the other.</div>',
  lessons: [
    { id:1, title:'Greetings & being polite', focus:'નમસ્તે · કેમ છો? · આભાર · આવજો',
      steps:[
        {t:'say',text:'Let\'s start with the very first word you\'ll use: <span class="inline-tr">નમસ્તે</span> (namaste) — hello and goodbye. Say it out loud.',tr:'નમસ્તે'},
        {t:'words',items:[{tr:'નમસ્તે',pr:'namaste',en:'hi / bye',link:'≈ Sanskrit नमस्ते'},{tr:'આવજો',pr:'aavjo',en:'goodbye'},{tr:'સુપ્રભાત',pr:'suprabhaat',en:'good morning'},{tr:'શુભ સાંજ',pr:'shubh saanj',en:'good evening'},{tr:'આભાર',pr:'aabhaar',en:'thank you'}]},
        {t:'chal',en:'Hello, thank you',tr:'નમસ્તે, આભાર',pr:'namaste, aabhaar',morph:['નમસ્તે = hello','આભાર = thank you']},
        {t:'say',text:'To ask how someone is: <span class="inline-tr">કેમ છો?</span> (kem chho?). The reply is <span class="inline-tr">સારું છું, આભાર</span> — I\'m fine, thanks.',tr:'કેમ છો?'},
        {t:'words',items:[{tr:'કેમ છો?',pr:'kem chho?',en:'How are you?'},{tr:'સારું છું, આભાર',pr:'saaru chhu, aabhaar',en:'I\'m fine, thanks'},{tr:'મજામાં',pr:'majaama',en:'in good spirits'}]},
        {t:'chal',en:'Hi, how are you?',tr:'નમસ્તે, કેમ છો?',pr:'namaste, kem chho?',morph:['નમસ્તે = hello','કેમ છો? = how are you?']}
      ],
      blocks:['<code>નમસ્તે</code> = hi / bye','<code>કેમ છો?</code> = how are you? · <code>સારું છું, આભાર</code> = I\'m fine, thanks','<code>આભાર</code> = thank you'] },
    { id:2, title:'Please, thanks & sorry', focus:'કૃપા કરીને · આભાર · માફ કરશો',
      steps:[
        {t:'say',text:'The word for \'please\': <span class="inline-tr">કૃપા કરીને</span> (krupaa karine):',tr:'કૃપા કરીને'},
        {t:'words',items:[{tr:'કૃપા કરીને',pr:'krupaa karine',en:'please'},{tr:'આભાર',pr:'aabhaar',en:'thank you'},{tr:'ખૂબ આભાર',pr:'khoob aabhaar',en:'thanks a lot'},{tr:'માફ કરશો',pr:'maaph karsho',en:'sorry / excuse me'},{tr:'હા',pr:'haa',en:'yes'},{tr:'ના',pr:'naa',en:'no'}]},
        {t:'chal',en:'Yes, please',tr:'હા, કૃપા કરીને',pr:'haa, krupaa karine',morph:['હા = yes','કૃપા કરીને = please']},
        {t:'say',text:'To say sorry or excuse yourself: <span class="inline-tr">માફ કરશો</span> (maaph karsho).',tr:'માફ કરશો'},
        {t:'chal',en:'Sorry / Excuse me',tr:'માફ કરશો',pr:'maaph karsho',morph:['માફ કરશો = sorry / excuse me']},
        {t:'say',text:'To thank someone extra warmly: <span class="inline-tr">ખૂબ આભાર</span> (khoob aabhaar) — thanks a lot.',tr:'ખૂબ આભાર'},
        {t:'chal',en:'Thank you very much',tr:'ખૂબ આભાર',pr:'khoob aabhaar',morph:['ખૂબ = a lot','આભાર = thank you']}
      ],
      blocks:['<code>કૃપા કરીને</code> = please','<code>આભાર</code> = thank you · <code>ખૂબ આભાર</code> = thanks a lot','<code>માફ કરશો</code> = sorry / excuse me'] },
    { id:3, title:'Numbers 1–10', focus:'એક · બે · ત્રણ · દસ',
      steps:[
        {t:'say',text:'Numbers are the fastest win. Listen and repeat: <span class="inline-tr">એક, બે, ત્રણ</span>.',tr:'એક'},
        {t:'words',items:[{tr:'એક',pr:'ek',en:'1'},{tr:'બે',pr:'be',en:'2'},{tr:'ત્રણ',pr:'tran',en:'3'},{tr:'ચાર',pr:'chaar',en:'4'},{tr:'પાંચ',pr:'paanch',en:'5'},{tr:'દસ',pr:'das',en:'10'}]},
        {t:'chal',en:'Two teas, please',tr:'બે ચા, કૃપા કરીને',pr:'be chaa, krupaa karine',morph:['બે = two','ચા = tea','કૃપા કરીને = please']},
        {t:'say',text:'To ask the price: <span class="inline-tr">કેટલી કિંમત છે?</span> (ketli keemat chhe?) — how much is it?',tr:'કેટલી કિંમત છે?'},
        {t:'chal',en:'How much is it?',tr:'કેટલી કિંમત છે?',pr:'ketli keemat chhe?',morph:['કેટલી = how much','કિંમત = price','છે = is']},
        {t:'chal',en:'It\'s five rupees',tr:'પાંચ રૂપિયા',pr:'paanch rupiyaa',morph:['પાંચ = five','રૂપિયા = rupees']}
      ],
      blocks:['એક, બે, ત્રણ, ચાર, પાંચ = 1–5','<code>કેટલી કિંમત છે?</code> = how much is it?'] },
    { id:4, title:'"I want" — મને … જોઈએ છે', focus:'મને … જોઈએ છે · પાણી · ચા',
      steps:[
        {t:'say',text:'The magic phrase to ask for anything: <span class="inline-tr">મને … જોઈએ છે</span> (mane … joie chhe) — I want. It literally means \'to me … is wanted\'.',tr:'મને … જોઈએ છે'},
        {t:'say',text:'The verb comes at the end. So \'I want water\' is <span class="inline-tr">મને પાણી જોઈએ છે</span>.',tr:'મને પાણી જોઈએ છે'},
        {t:'chal',en:'I want water',tr:'મને પાણી જોઈએ છે',pr:'mane paani joie chhe',morph:['મને = to me','પાણી = water','જોઈએ છે = is wanted / I want']},
        {t:'chal',en:'I want tea',tr:'મને ચા જોઈએ છે',pr:'mane chaa joie chhe',morph:['મને = to me','ચા = tea','જોઈએ છે = I want']},
        {t:'say',text:'The same phrase works for needs: <span class="inline-tr">મને મદદ જોઈએ છે</span> (mane madad joie chhe) — I need help.',tr:'મને મદદ જોઈએ છે'},
        {t:'chal',en:'I need help',tr:'મને મદદ જોઈએ છે',pr:'mane madad joie chhe',morph:['મને = to me','મદદ = help','જોઈએ છે = is needed']}
      ],
      blocks:['<code>મને … જોઈએ છે</code> = I want …','<code>પાણી</code> = water','<code>મદદ</code> = help'] },
    { id:5, title:'Food & drink', focus:'પાણી · ચા · કોફી · બિલ',
      steps:[
        {t:'say',text:'Eating out? Key words: <span class="inline-tr">પાણી</span> (paani), <span class="inline-tr">ચા</span> (chaa), <span class="inline-tr">દૂધ</span> (doodh).',tr:'પાણી'},
        {t:'words',items:[{tr:'પાણી',pr:'paani',en:'water',link:'≈ Hindi पानी'},{tr:'ચા',pr:'chaa',en:'tea'},{tr:'કોફી',pr:'kaafee',en:'coffee',link:'= English \'coffee\''},{tr:'દૂધ',pr:'doodh',en:'milk'},{tr:'રોટલી',pr:'rotli',en:'bread'},{tr:'બિલ',pr:'bill',en:'bill',link:'= English \'bill\''}]},
        {t:'chal',en:'Water and bread, please',tr:'પાણી અને રોટલી, કૃપા કરીને',pr:'paani ane rotli, krupaa karine',morph:['પાણી = water','અને = and','રોટલી = bread','કૃપા કરીને = please']},
        {t:'chal',en:'I want a coffee',tr:'મને કોફી જોઈએ છે',pr:'mane kaafee joie chhe',morph:['મને = to me','કોફી = coffee','જોઈએ છે = I want']},
        {t:'say',text:'To say \'delicious\': <span class="inline-tr">ખૂબ સ્વાદિષ્ટ છે</span> (khoob swaadisht chhe). Say it and you\'ll make the chef\'s day.',tr:'ખૂબ સ્વાદિષ્ટ છે'},
        {t:'chal',en:'It\'s delicious!',tr:'ખૂબ સ્વાદિષ્ટ છે!',pr:'khoob swaadisht chhe!',morph:['ખૂબ = very','સ્વાદિષ્ટ = tasty','છે = is']}
      ],
      blocks:['<code>પાણી</code>, <code>ચા</code>, <code>કોફી</code> = water, tea, coffee','<code>રોટલી</code> = bread','<code>ખૂબ સ્વાદિષ્ટ છે</code> = it\'s delicious'] },
    { id:6, title:'Getting around', focus:'ક્યાં? · જમણે · ડાબે · સીધું',
      steps:[
        {t:'say',text:'The most useful question in any city: <span class="inline-tr">ક્યાં છે?</span> (kyaan chhe?) — where is…?',tr:'ક્યાં છે?'},
        {t:'words',items:[{tr:'ક્યાં?',pr:'kyaan?',en:'Where?'},{tr:'જમણે',pr:'jamne',en:'to the right'},{tr:'ડાબે',pr:'daabe',en:'to the left'},{tr:'સીધું',pr:'seedhu',en:'straight ahead'},{tr:'શૌચાલય',pr:'shauchaalay',en:'bathroom'}]},
        {t:'chal',en:'Where is the station?',tr:'સ્ટેશન ક્યાં છે?',pr:'station kyaan chhe?',morph:['સ્ટેશન = station','ક્યાં = where','છે = is'],link:'= English \'station\''},
        {t:'chal',en:'Where is the bathroom?',tr:'શૌચાલય ક્યાં છે?',pr:'shauchaalay kyaan chhe?',morph:['શૌચાલય = the bathroom','ક્યાં = where','છે = is']},
        {t:'say',text:'<span class="inline-tr">જમણે</span> (jamne) = to the right, <span class="inline-tr">ડાબે</span> (daabe) = to the left. \'Straight ahead\' is <span class="inline-tr">સીધું</span>.',tr:'જમણે'},
        {t:'chal',en:'To the right',tr:'જમણે',pr:'jamne',morph:['જમણે = to the right']}
      ],
      blocks:['<code>ક્યાં છે?</code> = where is…?','<code>જમણે</code> / <code>ડાબે</code> = right / left','<code>શૌચાલય</code> = the bathroom'] },
    { id:7, title:'Questions & "do you have…?"', focus:'તમારી પાસે … છે? · શું? · ક્યાં?',
      steps:[
        {t:'say',text:'To ask if someone has something: <span class="inline-tr">તમારી પાસે … છે?</span> (tamaari paase … chhe?) — do you have…?',tr:'તમારી પાસે … છે?'},
        {t:'chal',en:'Do you have a table?',tr:'તમારી પાસે ટેબલ છે?',pr:'tamaari paase table chhe?',morph:['તમારી પાસે = do you have','ટેબલ = table','છે = is']},
        {t:'say',text:'Key question words: <span class="inline-tr">શું?</span> (what?), <span class="inline-tr">ક્યારે?</span> (when?), <span class="inline-tr">કેમ?</span> (why?), <span class="inline-tr">કેટલું?</span> (how much?).',tr:'શું?'},
        {t:'words',items:[{tr:'શું?',pr:'shun?',en:'What?'},{tr:'ક્યારે?',pr:'kyaare?',en:'When?'},{tr:'કેમ?',pr:'kem?',en:'Why?'},{tr:'કેટલું?',pr:'ketlu?',en:'How much?'},{tr:'ક્યાં?',pr:'kyaan?',en:'Where?'}]},
        {t:'chal',en:'Do you have wifi?',tr:'તમારી પાસે વાઇફાઇ છે?',pr:'tamaari paase wifi chhe?',morph:['તમારી પાસે = do you have','વાઇફાઇ = wifi','છે = is']},
        {t:'chal',en:'What is this?',tr:'આ શું છે?',pr:'aa shun chhe?',morph:['આ = this','શું = what','છે = is']}
      ],
      blocks:['<code>તમારી પાસે … છે?</code> = do you have…?','<code>શું?</code> = what?','<code>ક્યાં?</code> = where?'] },
    { id:8, title:'Family & people', focus:'પરિવાર · મા · પિતા · દોસ્ત',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">પરિવાર</span> (parivaar), <span class="inline-tr">મા</span> (maa), <span class="inline-tr">પિતા</span> (pitaa).',tr:'પરિવાર'},
        {t:'words',items:[{tr:'પરિવાર',pr:'parivaar',en:'family'},{tr:'મા',pr:'maa',en:'mother'},{tr:'પિતા',pr:'pitaa',en:'father'},{tr:'ભાઈ',pr:'bhaai',en:'brother',link:'≈ Hindi भाई'},{tr:'બહેન',pr:'bahen',en:'sister'},{tr:'દોસ્ત',pr:'dost',en:'friend'}]},
        {t:'chal',en:'I have a friend',tr:'મારો એક દોસ્ત છે',pr:'maaro ek dost chhe',morph:['મારો = my','એક = a','દોસ્ત = friend','છે = is']},
        {t:'say',text:'To say \'my\': <span class="inline-tr">મારો</span> (masculine), <span class="inline-tr">મારી</span> (feminine), <span class="inline-tr">મારું</span> (neutral).',tr:'મારું'},
        {t:'chal',en:'This is my family',tr:'આ મારું કુટુંબ છે',pr:'aa maarun kutumb chhe',morph:['આ = this','મારું = my','કુટુંબ = family','છે = is']}
      ],
      blocks:['<code>મા</code> / <code>પિતા</code> = mother / father','<code>ભાઈ</code> / <code>બહેન</code> = brother / sister','<code>દોસ્ત</code> = friend'] },
    { id:9, title:'Time, days & weather', focus:'આજે · આવતીકાલ · હવામાન કેવું છે?',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">આજે</span> (aaje), tomorrow is <span class="inline-tr">આવતીકાલ</span> (aavtikaal).',tr:'આજે'},
        {t:'words',items:[{tr:'આજે',pr:'aaje',en:'today'},{tr:'આવતીકાલ',pr:'aavtikaal',en:'tomorrow'},{tr:'ગઈકાલ',pr:'gaikaal',en:'yesterday'},{tr:'હવામાન કેવું છે?',pr:'havaamaan kevu chhe?',en:'what\'s the weather?'},{tr:'સોમવાર',pr:'somvaar',en:'Monday'}]},
        {t:'chal',en:'See you tomorrow',tr:'આવતીકાલ મળીશું',pr:'aavtikaal maliishu',morph:['આવતીકાલ = tomorrow','મળીશું = we\'ll meet']},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">હવામાન કેવું છે?</span> (havaamaan kevu chhe?) — what\'s the weather?',tr:'હવામાન કેવું છે?'},
        {t:'chal',en:'It\'s raining',tr:'વરસાદ પડે છે',pr:'varsaad pade chhe',morph:['વરસાદ = rain','પડે છે = is falling']}
      ],
      blocks:['<code>આજે</code> / <code>આવતીકાલ</code> = today / tomorrow','<code>હવામાન કેવું છે?</code> = what\'s the weather?'] },
    { id:10, title:'Small talk & your name', focus:'મારું નામ … છે · તમારું નામ શું છે?',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">મારું નામ __NAME__ છે</span> (maarun naam __NAME__ chhe) — my name is…',tr:'મારું નામ __NAME__ છે'},
        {t:'chal',en:'My name is __NAME__',tr:'મારું નામ __NAME__ છે',pr:'maarun naam __NAME__ chhe',morph:['મારું = my','નામ = name','__NAME__ = your name','છે = is']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">તમારું નામ શું છે?</span> (tamaarun naam shun chhe?).',tr:'તમારું નામ શું છે?'},
        {t:'chal',en:'What\'s your name?',tr:'તમારું નામ શું છે?',pr:'tamaarun naam shun chhe?',morph:['તમારું = your','નામ = name','શું = what','છે = is']},
        {t:'chal',en:'Pleased to meet you',tr:'તમને મળીને આનંદ થયો',pr:'tamane maliine aanand thayo',morph:['તમને = to you','મળીને = meeting','આનંદ = joy','થયો = happened']}
      ],
      blocks:['<code>મારું નામ __NAME__ છે</code> = my name is…','<code>તમારું નામ શું છે?</code> = what\'s your name?','<code>તમને મળીને આનંદ થયો</code> = pleased to meet you'] },
    { id:11, title:'Health & emergency', focus:'મદદ! · ડૉક્ટર · હોસ્પિટલ · મને સમજાતું નથી',
      steps:[
        {t:'say',text:'The most important words if you need help: <span class="inline-tr">મદદ!</span> (madad!), <span class="inline-tr">ડૉક્ટર</span> (doctor), <span class="inline-tr">હોસ્પિટલ</span> (hospital).',tr:'મદદ!'},
        {t:'words',items:[{tr:'મદદ!',pr:'madad!',en:'help!',link:'≈ Hindi मदद'},{tr:'ડૉક્ટર',pr:'doctor',en:'doctor',link:'= English \'doctor\''},{tr:'હોસ્પિટલ',pr:'hospital',en:'hospital',link:'= English \'hospital\''},{tr:'મને સમજાતું નથી',pr:'mane samjaatu nathi',en:'I don\'t understand'},{tr:'પોલીસ',pr:'police',en:'police',link:'= English \'police\''}]},
        {t:'chal',en:'Help!',tr:'મદદ!',pr:'madad!',morph:['મદદ = help']},
        {t:'chal',en:'I don\'t understand',tr:'મને સમજાતું નથી',pr:'mane samjaatu nathi',morph:['મને = to me','સમજાતું = understood','નથી = not']},
        {t:'say',text:'To say you need a doctor: <span class="inline-tr">મને ડૉક્ટર જોઈએ છે</span> (mane doctor joie chhe).',tr:'મને ડૉક્ટર જોઈએ છે'},
        {t:'chal',en:'I need a doctor',tr:'મને ડૉક્ટર જોઈએ છે',pr:'mane doctor joie chhe',morph:['મને = to me','ડૉક્ટર = doctor','જોઈએ છે = I need']}
      ],
      blocks:['<code>મદદ!</code> = help','<code>ડૉક્ટર</code> / <code>હોસ્પિટલ</code> = doctor / hospital','<code>મને સમજાતું નથી</code> = I don\'t understand'] },
    { id:12, title:'Tying it together', focus:'મને … જોઈએ છે · ક્યાં? · a capstone scene',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolbox. This capstone uses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello, how are you?',tr:'નમસ્તે, કેમ છો?',pr:'namaste, kem chho?',morph:['નમસ્તે = hello','કેમ છો? = how are you?']},
        {t:'chal',en:'I want a tea, please',tr:'મને ચા જોઈએ છે, કૃપા કરીને',pr:'mane chaa joie chhe, krupaa karine',morph:['મને = to me','ચા = tea','જોઈએ છે = I want','કૃપા કરીને = please']},
        {t:'chal',en:'Where is the station?',tr:'સ્ટેશન ક્યાં છે?',pr:'station kyaan chhe?',morph:['સ્ટેશન = station','ક્યાં = where','છે = is']},
        {t:'chal',en:'How much is it?',tr:'કેટલી કિંમત છે?',pr:'ketli keemat chhe?',morph:['કેટલી = how much','કિંમત = price','છે = is']},
        {t:'chal',en:'Delicious! Thank you!',tr:'ખૂબ સ્વાદિષ્ટ છે! આભાર!',pr:'khoob swaadisht chhe! aabhaar!',morph:['ખૂબ સ્વાદિષ્ટ = delicious','આભાર = thank you']}
      ],
      blocks:['You built: greetings, ordering, directions, prices, thanks — a full day out in Gujarati.'] },
    { id:13, title:'Airport & tickets', focus:'એરપોર્ટ · પાસપોર્ટ · ટિકિટ · ગેટ',
      steps:[
        {t:'say',text:'You have landed. The building is the <span class="inline-tr">એરપોર્ટ</span>. Your document is a <span class="inline-tr">પાસપોર્ટ</span>.',tr:'એરપોર્ટ'},
        {t:'words',items:[{tr:'એરપોર્ટ',pr:'airport',en:'airport'},{tr:'પાસપોર્ટ',pr:'passport',en:'passport'},{tr:'ટિકિટ',pr:'ticket',en:'ticket'},{tr:'ફ્લાઇટ',pr:'flight',en:'flight'},{tr:'ગેટ',pr:'gate',en:'gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'એરપોર્ટ ક્યાં છે?',pr:'airport kyaan chhe?',morph:['એરપોર્ટ = airport','ક્યાં = where','છે = is']},
        {t:'chal',en:'Here is my passport',tr:'આ મારો પાસપોર્ટ છે',pr:'aa maaro passport chhe',morph:['આ = this','મારો = my','પાસપોર્ટ = passport','છે = is']},
        {t:'chal',en:'A ticket, please',tr:'એક ટિકિટ, કૃપા કરીને',pr:'ek ticket, krupaa karine',morph:['એક ટિકિટ = a ticket','કૃપા કરીને = please']},
        {t:'chal',en:'Where is the gate?',tr:'ગેટ ક્યાં છે?',pr:'gate kyaan chhe?',morph:['ગેટ = gate','ક્યાં = where','છે = is']}
      ],
      blocks:['<code>એરપોર્ટ</code> = airport','<code>પાસપોર્ટ</code> = passport','<code>ટિકિટ</code> = ticket','<code>ગેટ</code> = gate'] },
    { id:14, title:'The taxi', focus:'ટેક્સી · જવું · હોટેલ · અહીં ઊભા રહો',
      steps:[
        {t:'say',text:'The driver is waiting. <span class="inline-tr">ટેક્સી</span> is the same word. Tell them where to go with <span class="inline-tr">મને … જવું છે</span>.',tr:'ટેક્સી'},
        {t:'words',items:[{tr:'ટેક્સી',pr:'taxi',en:'taxi'},{tr:'ડ્રાઇવર',pr:'driver',en:'driver'},{tr:'મને જવું છે',pr:'mane javu chhe',en:'I want to go'},{tr:'અહીં ઊભા રહો',pr:'ahiin ubhaa raho',en:'stop here'}]},
        {t:'chal',en:'Taxi, please',tr:'ટેક્સી, કૃપા કરીને',pr:'taxi, krupaa karine',morph:['ટેક્સી = taxi','કૃપા કરીને = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'મને હોટેલ જવું છે',pr:'mane hotel javu chhe',morph:['મને = to me','હોટેલ = hotel','જવું છે = is to go']},
        {t:'chal',en:'Stop here, please',tr:'અહીં ઊભા રહો, કૃપા કરીને',pr:'ahiin ubhaa raho, krupaa karine',morph:['અહીં = here','ઊભા રહો = stop','કૃપા કરીને = please']},
        {t:'chal',en:'How much is it?',tr:'કેટલી કિંમત છે?',pr:'ketli keemat chhe?',morph:['કેટલી = how much','કિંમત = price','છે = is']}
      ],
      blocks:['<code>મને … જવું છે</code> = I want to go to …','<code>અહીં ઊભા રહો</code> = stop here'] },
    { id:15, title:'The hotel', focus:'બુકિંગ · રૂમ · ચાવી · રાત',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">મારું બુકિંગ છે</span> — I have a reservation.',tr:'બુકિંગ'},
        {t:'words',items:[{tr:'હોટેલ',pr:'hotel',en:'hotel'},{tr:'બુકિંગ',pr:'booking',en:'reservation'},{tr:'રૂમ',pr:'room',en:'room'},{tr:'ચાવી',pr:'chaavi',en:'key'},{tr:'એક રાત',pr:'ek raat',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'મારું બુકિંગ છે',pr:'maarun booking chhe',morph:['મારું = my','બુકિંગ = reservation','છે = is']},
        {t:'chal',en:'A room for one night, please',tr:'એક રાતનો રૂમ, કૃપા કરીને',pr:'ek raatno room, krupaa karine',morph:['એક રાતનો = for one night','રૂમ = room','કૃપા કરીને = please']},
        {t:'chal',en:'The key, please',tr:'ચાવી, કૃપા કરીને',pr:'chaavi, krupaa karine',morph:['ચાવી = key','કૃપા કરીને = please']},
        {t:'chal',en:'Where is my room?',tr:'મારો રૂમ ક્યાં છે?',pr:'maaro room kyaan chhe?',morph:['મારો રૂમ = my room','ક્યાં = where','છે = is']}
      ],
      blocks:['<code>બુકિંગ</code> = reservation','<code>રૂમ</code> = room','<code>ચાવી</code> = key'] },
    { id:16, title:'Ask for help', focus:'મને સમજાતું નથી · ધીમે · અંગ્રેજી',
      steps:[
        {t:'say',text:'When the language is too fast: <span class="inline-tr">ધીમે, કૃપા કરીને</span> — slower, please.',tr:'ધીમે, કૃપા કરીને'},
        {t:'words',items:[{tr:'ધીમે',pr:'dheeme',en:'slower'},{tr:'ફરી',pr:'fari',en:'again'},{tr:'અંગ્રેજી',pr:'angreji',en:'English'},{tr:'તમે મદદ કરશો?',pr:'tame madad karsho?',en:'can you help?'}]},
        {t:'chal',en:'I don\'t understand',tr:'મને સમજાતું નથી',pr:'mane samjaatu nathi',morph:['મને = to me','સમજાતું = understood','નથી = not']},
        {t:'chal',en:'Slower, please',tr:'ધીમે, કૃપા કરીને',pr:'dheeme, krupaa karine',morph:['ધીમે = slower','કૃપા કરીને = please']},
        {t:'chal',en:'Can you help me?',tr:'તમે મને મદદ કરશો?',pr:'tame mane madad karsho?',morph:['તમે = you (formal)','મને = me','મદદ કરશો = will help']},
        {t:'chal',en:'Do you speak English?',tr:'તમે અંગ્રેજી બોલો છો?',pr:'tame angreji bolo chho?',morph:['તમે = you','અંગ્રેજી = English','બોલો છો = speak']}
      ],
      blocks:['<code>ધીમે</code> = slower','<code>તમે અંગ્રેજી બોલો છો?</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'cafe', title:'☕ At a café', emoji:'☕', turns:[
      {who:'You',tr:'નમસ્તે! એક ચા, કૃપા કરીને.',pr:'namaste! ek chaa, krupaa karine',en:'Hello! A tea, please.'},
      {who:'Waiter',tr:'તરત. અહીં કે લે જવી છે?',pr:'tarat. ahiin ke le javi chhe?',en:'Right away. For here or to go?'},
      {who:'You',tr:'લે જવી છે, આભાર.',pr:'le javi chhe, aabhaar',en:'To go, thanks.'},
      {who:'Waiter',tr:'લો. બે રૂપિયા થયા.',pr:'lo. be rupiyaa thayaa',en:'Here. That\'s two rupees.'},
      {who:'You',tr:'ખૂબ આભાર!',pr:'khoob aabhaar!',en:'Thanks a lot!'}
    ]},
    { id:'transport', title:'🚉 At the train station', emoji:'🚉', turns:[
      {who:'You',tr:'માફ કરશો, સ્ટેશન ક્યાં છે?',pr:'maaph karsho, station kyaan chhe?',en:'Excuse me, where\'s the station?'},
      {who:'Local',tr:'ત્યાં, જમણી બાજુ.',pr:'tyaam, jamni baaju',en:'It\'s there, on the right.'},
      {who:'You',tr:'આભાર. એક ટિકિટ અમદાવાદ માટે, કૃપા કરીને.',pr:'aabhaar. ek ticket amdavaad maate, krupaa karine',en:'Thanks. A ticket to Ahmedabad, please.'},
      {who:'Ticket',tr:'પંદર રૂપિયા. ટ્રેન નવ વાગ્યે છે.',pr:'pandar rupiyaa. train nav vaagye chhe',en:'Fifteen rupees. The train is at nine.'}
    ]},
    { id:'restaurant', title:'🍛 At a restaurant', emoji:'🍛', turns:[
      {who:'Waiter',tr:'શુભ સાંજ! તમે બુકિંગ કર્યું છે?',pr:'shubh saanj! tame booking karyu chhe?',en:'Good evening! Do you have a reservation?'},
      {who:'You',tr:'હા, બે લોકો માટે.',pr:'haa, be loko maate',en:'Yes, for two people.'},
      {who:'You',tr:'મેનુ, કૃપા કરીને.',pr:'menu, krupaa karine',en:'The menu, please.'},
      {who:'You',tr:'મને રોટલી અને શાક જોઈએ છે.',pr:'mane rotli ane shaak joie chhe',en:'I\'d like bread and a curry.'},
      {who:'Waiter',tr:'સરસ પસંદગી!',pr:'saras pasandgi!',en:'Nice choice!'}
    ]},
    { id:'shop', title:'🛍️ Shopping', emoji:'🛍️', turns:[
      {who:'You',tr:'આની કિંમત કેટલી છે?',pr:'aani keemat ketli chhe?',en:'How much is this?'},
      {who:'Seller',tr:'વીસ રૂપિયા.',pr:'vees rupiyaa',en:'Twenty rupees.'},
      {who:'You',tr:'ખૂબ મોંઘું છે.',pr:'khoob monghu chhe',en:'It\'s too expensive.'},
      {who:'Seller',tr:'ઠીક છે, પંદર.',pr:'thiik chhe, pandar',en:'OK, fifteen.'},
      {who:'You',tr:'સરસ, હું લઉં છું.',pr:'saras, hun lau chhun',en:'Alright, I\'ll take it.'}
    ]}
  ],
  pocket: [
    {tr:'નમસ્તે',pr:'namaste',en:'Hello',c:'Greetings'},
    {tr:'આવજો',pr:'aavjo',en:'Goodbye',c:'Greetings'},
    {tr:'કેમ છો?',pr:'kem chho?',en:'How are you?',c:'Greetings'},
    {tr:'સારું છું, આભાર',pr:'saaru chhu, aabhaar',en:'I\'m fine, thanks',c:'Greetings'},
    {tr:'સુપ્રભાત',pr:'suprabhaat',en:'Good morning',c:'Greetings'},
    {tr:'શુભ સાંજ',pr:'shubh saanj',en:'Good evening',c:'Greetings'},
    {tr:'કૃપા કરીને',pr:'krupaa karine',en:'Please',c:'Courtesy'},
    {tr:'આભાર',pr:'aabhaar',en:'Thank you',c:'Courtesy'},
    {tr:'માફ કરશો',pr:'maaph karsho',en:'Sorry / Excuse me',c:'Courtesy'},
    {tr:'હા',pr:'haa',en:'Yes',c:'Courtesy'},
    {tr:'ના',pr:'naa',en:'No',c:'Courtesy'},
    {tr:'એક',pr:'ek',en:'1',c:'Numbers'},
    {tr:'બે',pr:'be',en:'2',c:'Numbers'},
    {tr:'ત્રણ',pr:'tran',en:'3',c:'Numbers'},
    {tr:'ચાર',pr:'chaar',en:'4',c:'Numbers'},
    {tr:'પાંચ',pr:'paanch',en:'5',c:'Numbers'},
    {tr:'દસ',pr:'das',en:'10',c:'Numbers'},
    {tr:'પાણી',pr:'paani',en:'water',c:'Food'},
    {tr:'ચા',pr:'chaa',en:'tea',c:'Food'},
    {tr:'કોફી',pr:'kaafee',en:'coffee',c:'Food'},
    {tr:'દૂધ',pr:'doodh',en:'milk',c:'Food'},
    {tr:'રોટલી',pr:'rotli',en:'bread',c:'Food'},
    {tr:'બિલ',pr:'bill',en:'bill',c:'Food'},
    {tr:'ક્યાં?',pr:'kyaan?',en:'Where?',c:'Directions'},
    {tr:'જમણે',pr:'jamne',en:'to the right',c:'Directions'},
    {tr:'ડાબે',pr:'daabe',en:'to the left',c:'Directions'},
    {tr:'સીધું',pr:'seedhu',en:'straight ahead',c:'Directions'},
    {tr:'શૌચાલય',pr:'shauchaalay',en:'bathroom',c:'Directions'},
    {tr:'કેટલી કિંમત છે?',pr:'ketli keemat chhe?',en:'How much is it?',c:'Shopping'},
    {tr:'ખૂબ મોંઘું',pr:'khoob monghu',en:'too expensive',c:'Shopping'},
    {tr:'મદદ!',pr:'madad!',en:'Help!',c:'Emergency'},
    {tr:'મને સમજાતું નથી',pr:'mane samjaatu nathi',en:'I don\'t understand',c:'Emergency'},
    {tr:'મને મદદ જોઈએ છે',pr:'mane madad joie chhe',en:'I need help',c:'Emergency'},
    {tr:'આજે',pr:'aaje',en:'today',c:'Time'},
    {tr:'આવતીકાલ',pr:'aavtikaal',en:'tomorrow',c:'Time'},
    {tr:'હવામાન કેવું છે?',pr:'havaamaan kevu chhe?',en:'What\'s the weather?',c:'Time'},
    {tr:'એરપોર્ટ',pr:'airport',en:'airport',c:'Travel'},
    {tr:'પાસપોર્ટ',pr:'passport',en:'passport',c:'Travel'},
    {tr:'ટેક્સી, કૃપા કરીને',pr:'taxi, krupaa karine',en:'Taxi, please',c:'Travel'},
    {tr:'મારું બુકિંગ છે',pr:'maarun booking chhe',en:'I have a reservation',c:'Travel'},
    {tr:'ધીમે, કૃપા કરીને',pr:'dheeme, krupaa karine',en:'Slower, please',c:'Travel'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Shopping','Emergency','Time','Travel'],
  culture: [
    {icon:'🪔',title:'A land of festivals',body:'Gujarat loves to celebrate. Navratri brings nine nights of dandiya raas and garba dance, Diwali lights up every home, and Uttarayan fills the sky with kites. If you visit in autumn, join in — it\'s warm and joyful.'},
    {icon:'🍛',title:'Mostly vegetarian thalis',body:'Much of Gujarat is vegetarian. A \'thali\' is a big platter with rice, rotli (bread), dal and a few shaaks (curries). Meals are eaten with the right hand — a real insider skill.'},
    {icon:'🙏',title:'Namaste & respect',body:'The namaste greeting (palms brought together) is a sign of respect. You\'ll also hear \'Jai Shri Krishna\' as a friendly hello, especially among elders. A smile goes a long way.'},
    {icon:'🤝',title:'Generous hospitality',body:'Guests are treated warmly — offering something to eat or drink is how locals show welcome. Refusing food outright can seem cold, so a polite \'a little, please\' is often the right move.'},
    {icon:'💰',title:'Bargaining is normal',body:'In markets and small shops, gentle haggling over the price is expected. Prices are in rupees (રૂપિયા). A friendly smile and a calm tone work better than a hard bargain.'},
    {icon:'🗣️',title:'Gujarati today',body:'Over fifty million people speak Gujarati. It\'s the language of Mahatma Gandhi, and it\'s heard around the world in a large diaspora — a small effort opens huge doors.'}
  ],
  sounds: [
    {l:'અ',say:'the built-in "a" — like "a" in about',ex:'નમસ્તે = namaste · ક = ka',voice:'નમસ્તે'},
    {l:'ક',say:'hard "k"',ex:'કોફી = kaafee · ક્યાં? = kyaan?',voice:'કોફી'},
    {l:'જ',say:'"j" as in jam',ex:'જમણે = jamne (right)',voice:'જમણે'},
    {l:'શ',say:'"sh" as in she',ex:'શુભ = shubh · શું? = shun?',voice:'શુભ'},
    {l:'ણ',say:'retroflex "n" — tongue curls back',ex:'પાણી = paani (water)',voice:'પાણી'},
    {l:'છ',say:'"chh" — a breathy "ch"',ex:'છ = chha (six)',voice:'છ'},
    {l:'વ',say:'"v" — sounds halfway to "w"',ex:'વીસ = vees (twenty)',voice:'વીસ'}
  ],
  resources: [
    {icon:'🗣️',t:'Gujarati for beginners',d:'Simple everyday phrases with a native speaker, step by step.',q:'learn Gujarati phrases for beginners'},
    {icon:'🔢',t:'Numbers & counting',d:'Learn to count and use numbers for shopping and travel.',q:'Gujarati numbers 1 to 10'},
    {icon:'🐢',t:'Everyday Gujarati conversation',d:'Short clips of real conversations, subtitled for learners.',q:'everyday Gujarati conversation for beginners'},
    {icon:'🗣️',t:'Gujarati pronunciation guide',d:'Break down the script and sounds so you can read anything.',q:'Gujarati pronunciation guide for beginners'},
    {icon:'📚',t:'Core words to get talking',d:'A focused core-vocabulary video to get you talking fast.',q:'common Gujarati words and phrases'}
  ]
};
