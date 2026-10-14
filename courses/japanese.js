/* ---- japanese ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["japanese"] = {
  name: 'Japanese',
  flag: '🇯🇵',
  tts: 'ja-JP',
  dir: 'ltr',
  native: '日本語',
  soundTitle: 'Japanese sounds & kana',
  soundIntro: 'Japanese has very few sounds and every syllable is said the same length. Get these right and the whole language becomes pronounceable.',
  grammar: '<p>Japanese has just five pure vowels (あ a, い i, う u, え e, お o) plus consonant + vowel syllables, and each syllable takes the same length — there is no stress, so pitch carries meaning. Grammar comes from small <b>particles</b> like <b>は (wa)</b> and <b>を (o)</b> rather than from word order, and the verb goes at the end. The polite endings <b>です (desu)</b> and <b>〜ます (masu)</b> make any sentence kind and correct.</p>',
  bridges: '<div class="note">🇬🇧 <b>English.</b> Japanese sentences end with the verb (e.g. <i>koohii o kudasai</i> = coffee, please) and the subject is often left out when it\'s obvious. Small task-words called particles, like <b>は (wa)</b> and <b>を (o)</b>, do the work that word order does in English.</div><div class="note">🇨🇳 <b>Chinese.</b> Japanese borrowed <b>kanji</b> (漢字) from Chinese long ago, so you will recognize many characters — but the readings and grammar are quite different, and Japanese also uses two phonetic alphabets, <b>hiragana</b> and <b>katakana</b>.</div>',
  lessons: [
    { id:1, title:'Greetings & being polite', focus:'こんにちは · おはよう · ありがとう',
      steps:[
        {t:'say',text:'Let\'s start with the greeting you\'ll use most: <span class="inline-tr">こんにちは</span> — hello / good afternoon. Say it out loud.',tr:'こんにちは'},
        {t:'words',items:[{tr:'こんにちは',pr:'konnichiwa',en:'hello / good afternoon'},{tr:'おはようございます',pr:'ohayou gozaimasu',en:'good morning (polite)'},{tr:'こんばんは',pr:'konbanwa',en:'good evening'},{tr:'さようなら',pr:'sayounara',en:'goodbye'},{tr:'はい',pr:'hai',en:'yes'}]},
        {t:'chal',en:'Hello, good afternoon',tr:'こんにちは',pr:'konnichiwa',morph:['こんにちは = hello (afternoon)']},
        {t:'say',text:'For the morning: <span class="inline-tr">おはようございます</span> = good morning (polite).',tr:'おはようございます'},
        {t:'chal',en:'Good morning',tr:'おはようございます',pr:'ohayou gozaimasu',morph:['おはよう = morning','ございます = polite ending']},
        {t:'chal',en:'Good evening',tr:'こんばんは',pr:'konbanwa',morph:['こんばんは = good evening']}
      ],
      blocks:['<code>こんにちは</code> = hello / good afternoon','<code>おはようございます</code> = good morning','<code>こんばんは</code> = good evening','<code>さようなら</code> = goodbye'] },
    { id:2, title:'Polite phrases: thanks & sorry', focus:'ありがとう · すみません · おねがいします',
      steps:[
        {t:'say',text:'The word you\'ll say constantly: <span class="inline-tr">ありがとう</span> — thank you.',tr:'ありがとう'},
        {t:'words',items:[{tr:'ありがとう',pr:'arigatou',en:'thank you'},{tr:'ありがとうございます',pr:'arigatou gozaimasu',en:'thank you (formal)'},{tr:'すみません',pr:'sumimasen',en:'excuse me / sorry'},{tr:'おねがいします',pr:'onegaishimasu',en:'please'},{tr:'いいえ',pr:'iie',en:'no'}]},
        {t:'chal',en:'Thank you (formal)',tr:'ありがとうございます',pr:'arigatou gozaimasu',morph:['ありがとう = thanks','ございます = polite ending']},
        {t:'say',text:'<span class="inline-tr">すみません</span> does double duty — \'excuse me\' and \'sorry\'.',tr:'すみません'},
        {t:'chal',en:'Excuse me / sorry',tr:'すみません',pr:'sumimasen',morph:['すみません = excuse me / sorry']},
        {t:'say',text:'When you ask for something (a favour): <span class="inline-tr">おねがいします</span>.',tr:'おねがいします'},
        {t:'chal',en:'Please (making a request)',tr:'おねがいします',pr:'onegaishimasu',morph:['おねがい = a request','します = do (polite)']}
      ],
      blocks:['<code>ありがとう</code> / <code>ありがとうございます</code> = thanks / thank you','<code>すみません</code> = excuse me / sorry','<code>おねがいします</code> = please'] },
    { id:3, title:'Numbers 1–10', focus:'いち · に · さん · じゅう',
      steps:[
        {t:'say',text:'Numbers are a fast win. Listen and repeat: <span class="inline-tr">いち、に、さん</span>.',tr:'いち'},
        {t:'words',items:[{tr:'いち',pr:'ichi',en:'1'},{tr:'に',pr:'ni',en:'2'},{tr:'さん',pr:'san',en:'3'},{tr:'し (or よん)',pr:'shi / yon',en:'4'},{tr:'ご',pr:'go',en:'5'},{tr:'じゅう',pr:'juu',en:'10'}]},
        {t:'chal',en:'One, two, three',tr:'いち、に、さん',pr:'ichi, ni, san',morph:['いち = one','に = two','さん = three']},
        {t:'say',text:'<span class="inline-tr">じゅう</span> = ten. Put a number before it to build the teens: <b>にじゅう</b> = twenty.',tr:'じゅう'},
        {t:'chal',en:'Ten',tr:'じゅう',pr:'juu',morph:['じゅう = ten']},
        {t:'say',text:'The key shopping phrase: <span class="inline-tr">いくらですか？</span> — how much is it?',tr:'いくらですか？'},
        {t:'chal',en:'How much is it?',tr:'いくらですか？',pr:'ikura desu ka?',morph:['いくら = how much','です = is','か = question marker']},
        {t:'chal',en:'It\'s five yen',tr:'ごえんです',pr:'go en desu',morph:['ご = five','えん = yen','です = is (polite)']}
      ],
      blocks:['<code>いち、に、さん、し、ご</code> = 1–5','<code>じゅう</code> = 10','<code>いくらですか？</code> = how much is it?'] },
    { id:4, title:'"I want" — ください & ほしい', focus:'〜をください · 〜がほしいです',
      steps:[
        {t:'say',text:'The magic phrase to order anything: <span class="inline-tr">〜をください</span> — please give me ….',tr:'ください'},
        {t:'say',text:'The little word <span class="inline-tr">を</span> (o) marks the object — it points at the thing being ordered.',tr:'を (o)'},
        {t:'chal',en:'Water, please',tr:'みずをください',pr:'mizu o kudasai',morph:['みず = water','を = object marker','ください = please give me']},
        {t:'chal',en:'Coffee, please',tr:'コーヒーをください',pr:'koohii o kudasai',morph:['コーヒー = coffee','を = object marker','ください = please give me'],link:'≈ English coffee'},
        {t:'say',text:'To say you <i>want</i> something: <span class="inline-tr">〜がほしいです</span>.',tr:'ほしいです'},
        {t:'chal',en:'I want water',tr:'みずがほしいです',pr:'mizu ga hoshii desu',morph:['みず = water','が = subject marker','ほしい = want','です = polite ending']}
      ],
      blocks:['<code>〜をください</code> = please give me …','<code>を</code> = object marker','<code>〜がほしいです</code> = I want …'] },
    { id:5, title:'Food & drink', focus:'ごはん · みず · おいしい',
      steps:[
        {t:'say',text:'At a restaurant. Key words: <span class="inline-tr">ごはん</span> (rice / meal), <span class="inline-tr">みず</span> (water), <span class="inline-tr">おちゃ</span> (green tea).',tr:'ごはん'},
        {t:'words',items:[{tr:'ごはん',pr:'gohan',en:'rice / meal'},{tr:'みず',pr:'mizu',en:'water'},{tr:'おちゃ',pr:'ocha',en:'green tea'},{tr:'おいしい',pr:'oishii',en:'delicious'},{tr:'メニュー',pr:'menyuu',en:'menu',link:'≈ English menu'}]},
        {t:'chal',en:'Rice, please',tr:'ごはんをください',pr:'gohan o kudasai',morph:['ごはん = rice / meal','をください = please give me']},
        {t:'say',text:'Before you eat, say <span class="inline-tr">いただきます</span> — \'I humbly receive\'.',tr:'いただきます'},
        {t:'chal',en:'This is delicious!',tr:'おいしいです！',pr:'oishii desu!',morph:['おいしい = delicious','です = polite ending']},
        {t:'say',text:'To get the menu: <span class="inline-tr">メニューをください</span>.',tr:'メニュー'},
        {t:'chal',en:'The menu, please',tr:'メニューをください',pr:'menyuu o kudasai',morph:['メニュー = menu','をください = please give me'],link:'≈ English menu'}
      ],
      blocks:['<code>ごはん</code>, <code>みず</code>, <code>おちゃ</code> = rice, water, tea','<code>おいしい</code> = delicious','<code>いただきます</code> = said before eating'] },
    { id:6, title:'Getting around', focus:'どこですか · みぎ · ひだり',
      steps:[
        {t:'say',text:'The most useful question in any city: <span class="inline-tr">〜はどこですか？</span> — where is … ?',tr:'どこですか？'},
        {t:'words',items:[{tr:'〜はどこですか？',pr:'doko desu ka?',en:'where is ...?'},{tr:'みぎ',pr:'migi',en:'right'},{tr:'ひだり',pr:'hidari',en:'left'},{tr:'まっすぐ',pr:'massugu',en:'straight ahead'},{tr:'えき',pr:'eki',en:'station'},{tr:'トイレ',pr:'toire',en:'toilet',link:'≈ English toilet'}]},
        {t:'chal',en:'Where is the station?',tr:'えきはどこですか？',pr:'eki wa doko desu ka?',morph:['えき = station','は = topic marker','どこですか = where is it?']},
        {t:'chal',en:'Where is the toilet?',tr:'トイレはどこですか？',pr:'toire wa doko desu ka?',morph:['トイレ = toilet','は = topic marker','どこですか = where is it?'],link:'≈ English toilet'},
        {t:'say',text:'<span class="inline-tr">みぎ</span> = right, <span class="inline-tr">ひだり</span> = left, <span class="inline-tr">まっすぐ</span> = straight ahead.',tr:'まっすぐ'},
        {t:'chal',en:'It\'s to the right',tr:'みぎです',pr:'migi desu',morph:['みぎ = right','です = is']}
      ],
      blocks:['<code>〜はどこですか？</code> = where is … ?','<code>みぎ</code> / <code>ひだり</code> = right / left','<code>まっすぐ</code> = straight ahead'] },
    { id:7, title:'Questions & "do you have…?"', focus:'〜はありますか · います',
      steps:[
        {t:'say',text:'To ask if something is available: <span class="inline-tr">〜はありますか？</span> — is there … ? / do you have … ?',tr:'ありますか？'},
        {t:'chal',en:'Is there a table?',tr:'テーブルはありますか？',pr:'teeburu wa arimasu ka?',morph:['テーブル = table','は = topic marker','あります = there is (things)','か = question marker'],link:'≈ English table'},
        {t:'say',text:'For services you can\'t see, like wifi: <span class="inline-tr">ワイファイはありますか？</span>.',tr:'ワイファイはありますか？'},
        {t:'chal',en:'Is there wifi?',tr:'ワイファイはありますか？',pr:'waifai wa arimasu ka?',morph:['ワイファイ = wifi','は = topic marker','ありますか = is there?'],link:'≈ English wifi'},
        {t:'say',text:'For people and animals you use <span class="inline-tr">います</span> instead of <span class="inline-tr">あります</span>.',tr:'います'},
        {t:'chal',en:'Do you have a menu?',tr:'メニューはありますか？',pr:'menyuu wa arimasu ka?',morph:['メニュー = menu','は = topic marker','ありますか = do you have?']}
      ],
      blocks:['<code>〜はありますか？</code> = is there … ?','<code>あります</code> = there is (things)','<code>います</code> = there is (people / animals)'] },
    { id:8, title:'Family & people', focus:'かぞく · ちち · はは',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">かぞく</span> (family), <span class="inline-tr">ちち</span> (my father), <span class="inline-tr">はは</span> (my mother).',tr:'かぞく'},
        {t:'words',items:[{tr:'かぞく',pr:'kazoku',en:'family'},{tr:'ちち',pr:'chichi',en:'(my) father'},{tr:'はは',pr:'haha',en:'(my) mother'},{tr:'おかあさん',pr:'okaasan',en:'mother (someone else\'s)'},{tr:'ともだち',pr:'tomodachi',en:'friend'}]},
        {t:'chal',en:'I have a family',tr:'かぞくがいます',pr:'kazoku ga imasu',morph:['かぞく = family','が = subject marker','います = there is (people)']},
        {t:'say',text:'<span class="inline-tr">ちち</span> and <span class="inline-tr">はは</span> are used for your own family; to speak about someone else\'s father you say <span class="inline-tr">おとうさん</span>.',tr:'ちち'},
        {t:'chal',en:'My father and my mother',tr:'ちちとはは',pr:'chichi to haha',morph:['ちち = my father','と = and','はは = my mother']},
        {t:'say',text:'Friend is <span class="inline-tr">ともだち</span>.',tr:'ともだち'},
        {t:'chal',en:'I have a friend',tr:'ともだちがいます',pr:'tomodachi ga imasu',morph:['ともだち = friend','がいます = there is (people)']}
      ],
      blocks:['<code>かぞく</code> = family','<code>ちち</code> / <code>はは</code> = my father / mother','<code>ともだち</code> = friend'] },
    { id:9, title:'Time, days & weather', focus:'きょう · あした · てんき',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">きょう</span>, tomorrow is <span class="inline-tr">あした</span>, yesterday is <span class="inline-tr">きのう</span>.',tr:'きょう'},
        {t:'words',items:[{tr:'きょう',pr:'kyou',en:'today'},{tr:'あした',pr:'ashita',en:'tomorrow'},{tr:'きのう',pr:'kinou',en:'yesterday'},{tr:'てんき',pr:'tenki',en:'weather'},{tr:'あめ',pr:'ame',en:'rain'}]},
        {t:'chal',en:'See you tomorrow',tr:'またあした',pr:'mata ashita',morph:['また = again','あした = tomorrow']},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">てんきはどうですか？</span> — how\'s the weather?',tr:'てんきはどうですか？'},
        {t:'chal',en:'It\'s raining',tr:'あめがふっています',pr:'ame ga futte imasu',morph:['あめ = rain','が = subject marker','ふっています = is falling']},
        {t:'say',text:'Days of the week end in <span class="inline-tr">ようび</span>: げつようび (Monday) … にちようび (Sunday).',tr:'ようび'}
      ],
      blocks:['<code>きょう</code> / <code>あした</code> / <code>きのう</code> = today / tomorrow / yesterday','<code>てんきはどうですか？</code> = how\'s the weather?','<code>〜ようび</code> = day of the week'] },
    { id:10, title:'Small talk & your name', focus:'わたしは___です · おなまえは',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">わたしは___です</span> — I am … . <b>わたし</b> = I, <b>です</b> = am.',tr:'わたしは__NAME__です'},
        {t:'chal',en:'My name is __NAME__',tr:'わたしは__NAME__です',pr:'watashi wa __NAME__ desu',morph:['わたし = I','は = topic marker','です = am / is']},
        {t:'say',text:'Ask their name: <span class="inline-tr">おなまえは？</span> — what\'s your name?',tr:'おなまえは？'},
        {t:'chal',en:'What\'s your name?',tr:'おなまえは？',pr:'o-namae wa?',morph:['おなまえ = name (polite)','は = topic marker']},
        {t:'say',text:'<span class="inline-tr">はじめまして</span> = nice to meet you. Pair it with your name and a small bow.',tr:'はじめまして'},
        {t:'chal',en:'Nice to meet you. I\'m Anna.',tr:'はじめまして。わたしはアンナです。',pr:'hajimemashite. watashi wa Anna desu.',morph:['はじめまして = nice to meet you','わたしは…です = I am …']}
      ],
      blocks:['<code>わたしは…です</code> = I am …','<code>おなまえは？</code> = what\'s your name?','<code>はじめまして</code> = nice to meet you'] },
    { id:11, title:'Health & emergency', focus:'たすけて · わかりません · びょういん',
      steps:[
        {t:'say',text:'The most important words if you need help: <span class="inline-tr">たすけて</span> (help!), <span class="inline-tr">びょういん</span> (hospital), <span class="inline-tr">くすり</span> (medicine).',tr:'たすけて'},
        {t:'words',items:[{tr:'たすけて',pr:'tasukete',en:'help!'},{tr:'びょういん',pr:'byouin',en:'hospital'},{tr:'くすり',pr:'kusuri',en:'medicine / drugstore'},{tr:'わかりません',pr:'wakarimasen',en:'I don\'t understand'},{tr:'いしゃ',pr:'isha',en:'doctor'}]},
        {t:'chal',en:'Help!',tr:'たすけて！',pr:'tasukete!',morph:['たすけて = help!']},
        {t:'chal',en:'I don\'t understand',tr:'わかりません',pr:'wakarimasen',morph:['わかり = understand','ません = not (polite)']},
        {t:'say',text:'To ask for help: <span class="inline-tr">たすけてください</span>. First, where is the hospital? <span class="inline-tr">びょういんはどこですか？</span>',tr:'たすけてください'},
        {t:'chal',en:'Where is the hospital?',tr:'びょういんはどこですか？',pr:'byouin wa doko desu ka?',morph:['びょういん = hospital','は = topic marker','どこですか = where is it?']}
      ],
      blocks:['<code>たすけて</code> = help','<code>びょういん</code> = hospital','<code>わかりません</code> = I don\'t understand'] },
    { id:12, title:'Tying it together', focus:'ください · どこですか · ありがとう',
      steps:[
        {t:'say',text:'You\'ve built a real toolbox. This capstone uses only words you\'ve met — build each line yourself before revealing.'},
        {t:'chal',en:'Hello! Good morning.',tr:'こんにちは！おはようございます。',pr:'konnichiwa! ohayou gozaimasu.',morph:['こんにちは = hello','おはようございます = good morning']},
        {t:'chal',en:'Coffee, please',tr:'コーヒーをください',pr:'koohii o kudasai',morph:['コーヒー = coffee','をください = please give me'],link:'≈ English coffee'},
        {t:'chal',en:'Where is the station?',tr:'えきはどこですか？',pr:'eki wa doko desu ka?',morph:['えき = station','どこですか = where is it?']},
        {t:'chal',en:'How much is it?',tr:'いくらですか？',pr:'ikura desu ka?',morph:['いくら = how much','ですか = is it?']},
        {t:'chal',en:'Thank you very much!',tr:'ありがとうございます！',pr:'arigatou gozaimasu!',morph:['ありがとう = thanks','ございます = polite ending']}
      ],
      blocks:['You built: greetings, ordering, directions, prices, thanks — a full day out in Japanese.'] },
    { id:13, title:'Airport & tickets', focus:'くうこう · パスポート · きっぷ · ゲート',
      steps:[
        {t:'say',text:'You have landed. The building is the <span class="inline-tr">くうこう</span>. Your document is a <span class="inline-tr">パスポート</span>.',tr:'くうこう'},
        {t:'words',items:[{tr:'くうこう',pr:'kuukou',en:'airport'},{tr:'パスポート',pr:'pasupooto',en:'passport'},{tr:'きっぷ',pr:'kippu',en:'ticket'},{tr:'ひこうき',pr:'hikouki',en:'flight / plane'},{tr:'ゲート',pr:'geeto',en:'gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'くうこうはどこですか？',pr:'kuukou wa doko desu ka?',morph:['くうこう = airport','は = topic marker','どこですか = where is it?']},
        {t:'chal',en:'Here is my passport',tr:'パスポートです',pr:'pasupooto desu',morph:['パスポート = passport','です = is (polite)']},
        {t:'chal',en:'A ticket, please',tr:'きっぷをください',pr:'kippu o kudasai',morph:['きっぷ = ticket','をください = please give me']},
        {t:'chal',en:'Where is the gate?',tr:'ゲートはどこですか？',pr:'geeto wa doko desu ka?',morph:['ゲート = gate','は = topic marker','どこですか = where is it?']}
      ],
      blocks:['<code>くうこう</code> = airport','<code>パスポート</code> = passport','<code>きっぷ</code> = ticket','<code>ゲート</code> = gate'] },
    { id:14, title:'The taxi', focus:'タクシー · いきたいです · ホテル · とめてください',
      steps:[
        {t:'say',text:'The driver is waiting. <span class="inline-tr">タクシー</span> is taxi. Tell them where to go with <span class="inline-tr">ホテルにいきたいです</span>.',tr:'タクシー'},
        {t:'words',items:[{tr:'タクシー',pr:'takushii',en:'taxi'},{tr:'うんてんしゅ',pr:'untenshu',en:'driver'},{tr:'いきたいです',pr:'ikitai desu',en:'I want to go (polite)'},{tr:'ここでとめてください',pr:'koko de tomete kudasai',en:'please stop here'}]},
        {t:'chal',en:'Taxi, please',tr:'タクシーをおねがいします',pr:'takushii o onegaishimasu',morph:['タクシー = taxi','をおねがいします = please (polite request)']},
        {t:'chal',en:'I want to go to the hotel',tr:'ホテルにいきたいです',pr:'hoteru ni ikitai desu',morph:['ホテル = hotel','に = to','いきたいです = want to go (polite)']},
        {t:'chal',en:'Stop here, please',tr:'ここでとめてください',pr:'koko de tomete kudasai',morph:['ここで = here','とめてください = please stop']},
        {t:'chal',en:'How much is it?',tr:'いくらですか？',pr:'ikura desu ka?',morph:['いくら = how much','ですか = is it?']}
      ],
      blocks:['<code>ホテルにいきたいです</code> = I want to go to the hotel','<code>ここでとめてください</code> = please stop here'] },
    { id:15, title:'The hotel', focus:'よやく · へや · かぎ · ひとばん',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">よやくがあります</span> — I have a reservation.',tr:'よやく'},
        {t:'words',items:[{tr:'ホテル',pr:'hoteru',en:'hotel'},{tr:'よやく',pr:'yoyaku',en:'reservation'},{tr:'へや',pr:'heya',en:'room'},{tr:'かぎ',pr:'kagi',en:'key'},{tr:'ひとばん',pr:'hitoban',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'よやくがあります',pr:'yoyaku ga arimasu',morph:['よやく = reservation','が = subject marker','あります = there is (polite)']},
        {t:'chal',en:'A room for one night, please',tr:'ひとばんへやをおねがいします',pr:'hitoban heya o onegaishimasu',morph:['ひとばん = one night','へや = room','をおねがいします = please']},
        {t:'chal',en:'The key, please',tr:'かぎをください',pr:'kagi o kudasai',morph:['かぎ = key','をください = please give me']},
        {t:'chal',en:'Where is my room?',tr:'へやはどこですか？',pr:'heya wa doko desu ka?',morph:['へや = room','は = topic marker','どこですか = where is it?']}
      ],
      blocks:['<code>よやく</code> = reservation','<code>へや</code> = room','<code>かぎ</code> = key'] },
    { id:16, title:'Ask for help', focus:'わかりません · ゆっくり · えいご',
      steps:[
        {t:'say',text:'When the language is too fast: <span class="inline-tr">ゆっくりおねがいします</span> — slower, please.',tr:'ゆっくりおねがいします'},
        {t:'words',items:[{tr:'ゆっくり',pr:'yukkuri',en:'slower / slowly'},{tr:'もういちど',pr:'mou ichido',en:'once more'},{tr:'えいご',pr:'eigo',en:'English'},{tr:'てつだってください',pr:'tetsudatte kudasai',en:'please help me'}]},
        {t:'chal',en:'I don\'t understand',tr:'わかりません',pr:'wakarimasen',morph:['わかり = understand','ません = not (polite)']},
        {t:'chal',en:'Slower, please',tr:'ゆっくりおねがいします',pr:'yukkuri onegaishimasu',morph:['ゆっくり = slower','おねがいします = please (polite)']},
        {t:'chal',en:'Can you help me?',tr:'てつだってください',pr:'tetsudatte kudasai',morph:['てつだって = help','ください = please']},
        {t:'chal',en:'Do you speak English?',tr:'えいごをはなしますか？',pr:'eigo o hanashimasu ka?',morph:['えいご = English','をはなしますか = do you speak? (polite)']}
      ],
      blocks:['<code>ゆっくり</code> = slower','<code>えいごをはなしますか？</code> = do you speak English?'] },
  ],
  dialogues: [
    { id:'cafe', title:'☕ At a café', emoji:'☕', turns:[
      {who:'You',tr:'すみません、コーヒーをください。',pr:'sumimasen, koohii o kudasai.',en:'Excuse me, a coffee, please.'},
      {who:'Staff',tr:'はい、かしこまりました。',pr:'hai, kashikomarimashita.',en:'Yes, certainly.'},
      {who:'You',tr:'ありがとうございます。いくらですか？',pr:'arigatou gozaimasu. ikura desu ka?',en:'Thank you. How much is it?'},
      {who:'Staff',tr:'450円です。',pr:'yonhyaku gojuu en desu.',en:'That\'s 450 yen.'},
      {who:'You',tr:'はい、どうぞ。',pr:'hai, douzo.',en:'Here you are (paying).'}
    ]},
    { id:'train', title:'🚉 At the station', emoji:'🚉', turns:[
      {who:'You',tr:'すみません、えきはどこですか？',pr:'sumimasen, eki wa doko desu ka?',en:'Excuse me, where is the station?'},
      {who:'Local',tr:'あそこです。みぎです。',pr:'asoko desu. migi desu.',en:'It\'s over there, on the right.'},
      {who:'You',tr:'ありがとうございます。東京まで切符をください。',pr:'arigatou gozaimasu. toukyou made kippu o kudasai.',en:'Thank you. A ticket to Tokyo, please.'},
      {who:'Agent',tr:'500円です。電車は9時です。',pr:'gohyaku en desu. densha wa ku-ji desu.',en:'That\'s 500 yen. The train is at nine.'},
      {who:'You',tr:'わかりました。ありがとうございます。',pr:'wakarimashita. arigatou gozaimasu.',en:'I see. Thank you.'}
    ]},
    { id:'restaurant', title:'🍜 At a restaurant', emoji:'🍜', turns:[
      {who:'Waiter',tr:'いらっしゃいませ。何名様ですか？',pr:'irasshaimase. nanmei-sama desu ka?',en:'Welcome. How many people?'},
      {who:'You',tr:'二人です。メニューをください。',pr:'futari desu. menyuu o kudasai.',en:'Two people. The menu, please.'},
      {who:'You',tr:'ラーメンとお茶をください。',pr:'raamen to ocha o kudasai.',en:'Ramen and tea, please.'},
      {who:'Waiter',tr:'かしこまりました。少々お待ちください。',pr:'kashikomarimashita. shoushou omachi kudasai.',en:'Certainly. Just a moment, please.'},
      {who:'You',tr:'おいしいです！',pr:'oishii desu!',en:'It\'s delicious!'}
    ]},
    { id:'shop', title:'🛍️ Shopping', emoji:'🛍️', turns:[
      {who:'You',tr:'これはいくらですか？',pr:'kore wa ikura desu ka?',en:'How much is this?'},
      {who:'Seller',tr:'千円です。',pr:'sen en desu.',en:'A thousand yen.'},
      {who:'You',tr:'高いですね。もっと安いのはありますか？',pr:'takai desu ne. motto yasui no wa arimasu ka?',en:'That\'s expensive. Do you have something cheaper?'},
      {who:'Seller',tr:'じゃあ、800円はどうですか？',pr:'jaa, happyaku en wa dou desu ka?',en:'Then how about 800 yen?'},
      {who:'You',tr:'じゃあ、これをください。',pr:'jaa, kore o kudasai.',en:'Then I\'ll take this.'}
    ]}
  ],
  pocket: [
    {tr:'こんにちは',pr:'konnichiwa',en:'Hello / good afternoon',c:'Greetings'},
    {tr:'こんばんは',pr:'konbanwa',en:'Good evening',c:'Greetings'},
    {tr:'おはようございます',pr:'ohayou gozaimasu',en:'Good morning',c:'Greetings'},
    {tr:'さようなら',pr:'sayounara',en:'Goodbye',c:'Greetings'},
    {tr:'ありがとうございます',pr:'arigatou gozaimasu',en:'Thank you',c:'Courtesy'},
    {tr:'すみません',pr:'sumimasen',en:'Excuse me / sorry',c:'Courtesy'},
    {tr:'おねがいします',pr:'onegaishimasu',en:'Please',c:'Courtesy'},
    {tr:'はい',pr:'hai',en:'Yes',c:'Courtesy'},
    {tr:'いいえ',pr:'iie',en:'No',c:'Courtesy'},
    {tr:'いち',pr:'ichi',en:'1',c:'Numbers'},
    {tr:'に',pr:'ni',en:'2',c:'Numbers'},
    {tr:'さん',pr:'san',en:'3',c:'Numbers'},
    {tr:'し',pr:'shi',en:'4',c:'Numbers'},
    {tr:'ご',pr:'go',en:'5',c:'Numbers'},
    {tr:'じゅう',pr:'juu',en:'10',c:'Numbers'},
    {tr:'ごはん',pr:'gohan',en:'rice / meal',c:'Food'},
    {tr:'みず',pr:'mizu',en:'water',c:'Food'},
    {tr:'おちゃ',pr:'ocha',en:'green tea',c:'Food'},
    {tr:'コーヒー',pr:'koohii',en:'coffee',c:'Food'},
    {tr:'おいしい',pr:'oishii',en:'delicious',c:'Food'},
    {tr:'〜はどこですか？',pr:'doko desu ka?',en:'Where is ...?',c:'Directions'},
    {tr:'みぎ',pr:'migi',en:'right',c:'Directions'},
    {tr:'ひだり',pr:'hidari',en:'left',c:'Directions'},
    {tr:'まっすぐ',pr:'massugu',en:'straight ahead',c:'Directions'},
    {tr:'えき',pr:'eki',en:'station',c:'Directions'},
    {tr:'いくらですか？',pr:'ikura desu ka?',en:'how much is it?',c:'Shopping'},
    {tr:'これをください',pr:'kore o kudasai',en:'this, please',c:'Shopping'},
    {tr:'高い',pr:'takai',en:'expensive',c:'Shopping'},
    {tr:'安い',pr:'yasui',en:'cheap',c:'Shopping'},
    {tr:'たすけて！',pr:'tasukete!',en:'Help!',c:'Emergency'},
    {tr:'わかりません',pr:'wakarimasen',en:'I don\'t understand',c:'Emergency'},
    {tr:'びょういん',pr:'byouin',en:'hospital',c:'Emergency'},
    {tr:'くすり',pr:'kusuri',en:'medicine / drugstore',c:'Emergency'},
    {tr:'きょう',pr:'kyou',en:'today',c:'Time'},
    {tr:'あした',pr:'ashita',en:'tomorrow',c:'Time'},
    {tr:'てんき',pr:'tenki',en:'weather',c:'Time'},
    {tr:'くうこう',pr:'kuukou',en:'airport',c:'Travel'},
    {tr:'パスポート',pr:'pasupooto',en:'passport',c:'Travel'},
    {tr:'タクシーをおねがいします',pr:'takushii o onegaishimasu',en:'Taxi, please',c:'Travel'},
    {tr:'よやくがあります',pr:'yoyaku ga arimasu',en:'I have a reservation',c:'Travel'},
    {tr:'ゆっくりおねがいします',pr:'yukkuri onegaishimasu',en:'Slower, please',c:'Travel'},
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Shopping','Emergency','Time', 'Travel'],
  culture: [
    {icon:'🙇',title:'Bowing is the greeting',body:'A small nod or bow is the everyday hello. The deeper the bow, the more respect — for friends a quick dip is enough. Pair it with こんにちは and you\'ll fit right in.'},
    {icon:'🍜',title:'Slurping is a compliment',body:'It\'s normal — and kind — to slurp ramen and soba noodles. It shows you\'re enjoying the meal. Just don\'t leave your chopsticks standing upright in the rice: that\'s a funeral ritual.'},
    {icon:'🕐',title:'Punctuality is everything',body:'Trains and buses often run to the second. If you say you\'ll meet at three, be there at three. Being late, even a little, is a real inconvenience to others.'},
    {icon:'💴',title:'Cash & IC cards',body:'Small shops, shrines and local cafés often prefer cash. Pick up an IC card (Suica or Pasmo) at the station to tap through trains and convenience stores.'},
    {icon:'🍚',title:'Itadakimasu',body:'Say いただきます before a meal — \'I humbly receive\' — and ごちそうさまでした after. It\'s how people thank the food and the cook every single day.'},
    {icon:'🤫',title:'Quiet in public',body:'Trains and buses are usually quiet. People chat softly and keep phones on silent — so save the loud call for the platform, not the carriage.'}
  ],
  sounds: [
    {l:'あ・い・う・え・お',say:'five pure vowels, all the same length: a=ah, i=ee, u=oo (unrounded lips), e=eh, o=oh. No English glide.',ex:'さけ = sake · かめ = kame (turtle)',voice:'sake'},
    {l:'ら・り・る・れ・ろ (r)',say:'a light tap, not a rolled English r — flick the tip of your tongue off the ridge behind your teeth, halfway between "r" and "l".',ex:'さくら = sakura (cherry blossom) · ありがとう = arigatou',voice:'sakura'},
    {l:'ふ (fu)',say:'blow the air out with your lips relaxed, not rounded — closer to "hu" than the English f.',ex:'ふじ = Fuji · ふゆ = fuyu (winter)',voice:'fuji'},
    {l:'ん (n)',say:'a hummed nasal sound at the end of a syllable, soft and barely closed, like the "n" in "sing".',ex:'こんにちは = konnichiwa · ほん = hon (book)',voice:'konnichiwa'},
    {l:'long vowels',say:'hold the vowel about twice as long — length can change the meaning, so stretch it.',ex:'おはよう = ohayou · おばあさん = obaasan (grandmother)',voice:'ohayou'},
    {l:'っ (small tsu)',say:'a silent pause that doubles the next consonant: say it, stop, then release with a small pop.',ex:'がっこう = gakkou (school) · きって = kitte (stamp)',voice:'gakkou'},
    {l:'つ・す (ts / s)',say:'つ is a crisp "tsu" (like in tsunami); す is a softer "su".',ex:'つくえ = tsukue (desk) · すし = sushi',voice:'sushi'}
  ],
  resources: [
    {icon:'🗣️',t:'Easy Japanese',d:'Real street interviews with native speakers, with subtitles — great for natural, everyday Japanese.',q:'Easy Japanese street interviews'},
    {icon:'🍙',t:'JapanesePod101',d:'Structured beginner lessons in short audio and video episodes, from absolute zero up.',q:'JapanesePod101 beginner Japanese'},
    {icon:'🐢',t:'Puni Puni Japan',d:'Fun, bright, simple animations that teach kana and first phrases with a gentle sense of humour.',q:'Puni Puni Japan Japanese'},
    {icon:'📚',t:'Nihongo no Mori',d:'Clear grammar lessons and JLPT-style explanations from friendly Japanese teachers.',q:'Nihongo no Mori grammar JLPT'},
    {icon:'🎧',t:'Slow Japanese podcasts',d:'Easy-listening audio for a walk or commute — perfect for training your ear.',q:'slow Japanese podcast for beginners'}
  ]
};
