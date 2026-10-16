/* ---- korean ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["korean"] = {
  name: 'Korean',
  flag: '🇰🇷',
  tts: 'ko-KR',
  dir: 'ltr',
  native: '한국어',
  script: 'Hangul',
  soundTitle: 'Korean sounds & Hangul',
  soundIntro: 'Hangul is a logical alphabet invented in the 1400s — not Chinese characters. Each block is a syllable built from a consonant and a vowel. Learn a few letters and you can sound out almost any word.',
  grammar: '<p>Korean is written in the clear, logical <b>Hangul</b> alphabet, so anyone can learn to read in a day. Word order is <b>Subject–Object–Verb</b> (English is Subject–Verb–Object): <b>저는 커피를 마셔요</b> = "I drink coffee". Instead of genders or articles, Korean uses small particles like <b>은/는</b> (subject) and <b>을/를</b> (object). There are two number systems — Sino-Korean for money and time, native Korean for counting things. Verbs change to the polite ending <b>-요</b> (everyday) or <b>-습니다</b> (formal).</p>',
  bridges: '<div class="note">🇬🇧 <b>English.</b> Korean has borrowed many everyday words from English: 커피 (ko-pee = coffee), 버스 (beo-seu = bus), 택시 (taek-si = taxi), 호텔 (ho-tel = hotel), 인터넷 (in-teo-net = internet).</div><div class="note">🇨🇳 <b>Chinese.</b> A lot of Korean vocabulary comes from Chinese characters (한자), so you\'ll meet some familiar-sounding words. Focus on Hangul though — it\'s designed to be easy to learn.</div>',
  lessons: [
    { id:1, title:'Greetings & hello', focus:'안녕하세요 · 감사합니다 · 네 · 아니요',
      steps:[
        {t:'say',text:'Start with the greeting you\'ll use all day: <span class="inline-tr">안녕하세요</span> — hello (it works any time of day). Say it out loud.',tr:'안녕하세요'},
        {t:'words',items:[{tr:'안녕하세요',pr:'annyeonghaseyo',en:'hello'},{tr:'감사합니다',pr:'gamsahamnida',en:'thank you'},{tr:'안녕히 가세요',pr:'annyeonghi gaseyo',en:'goodbye (to someone leaving)'},{tr:'죄송합니다',pr:'joesonghamnida',en:'I\'m sorry'}]},
        {t:'chal',en:'Hello!',tr:'안녕하세요!',pr:'annyeonghaseyo!',morph:['안녕하세요 = hello']},
        {t:'say',text:'Yes and no: <span class="inline-tr">네</span> (yes) and <span class="inline-tr">아니요</span> (no).',tr:'네'},
        {t:'words',items:[{tr:'네',pr:'ne',en:'yes'},{tr:'아니요',pr:'aniyo',en:'no'},{tr:'실례합니다',pr:'sillyehamnida',en:'excuse me'}]},
        {t:'chal',en:'Thank you!',tr:'감사합니다!',pr:'gamsahamnida!',morph:['감사합니다 = thank you']}
      ],
      blocks:['<code>안녕하세요</code> = hello','<code>감사합니다</code> = thank you','<code>네</code> = yes · <code>아니요</code> = no'] },
    { id:2, title:'Being polite', focus:'감사합니다 · 죄송합니다 · 괜찮아요 · -요',
      steps:[
        {t:'say',text:'Korean politeness lives at the END of the sentence. The everyday polite ending is <span class="inline-tr">-요</span>; the more formal one is <span class="inline-tr">-습니다</span>.',tr:'합니다'},
        {t:'words',items:[{tr:'감사합니다',pr:'gamsahamnida',en:'thank you'},{tr:'죄송합니다',pr:'joesonghamnida',en:'I\'m sorry'},{tr:'실례합니다',pr:'sillyehamnida',en:'excuse me'}]},
        {t:'chal',en:'I\'m sorry',tr:'죄송합니다',pr:'joesonghamnida',morph:['죄송합니다 = I\'m sorry']},
        {t:'say',text:'When someone thanks you, reply <span class="inline-tr">괜찮아요</span> — it\'s fine / no problem.',tr:'괜찮아요'},
        {t:'chal',en:'It\'s fine, thank you',tr:'괜찮아요, 감사합니다',pr:'gwaenchanayo, gamsahamnida',morph:['괜찮아요 = it\'s fine','감사합니다 = thank you']},
        {t:'chal',en:'Thank you very much',tr:'정말 감사합니다',pr:'jeongmal gamsahamnida',morph:['정말 = really','감사합니다 = thank you']}
      ],
      blocks:['<code>감사합니다</code> = thank you','<code>죄송합니다</code> = I\'m sorry','<code>괜찮아요</code> = it\'s fine / no problem'] },
    { id:3, title:'Numbers 1–10', focus:'일 · 이 · 삼 · 사 · 오 · 십',
      steps:[
        {t:'say',text:'Korean has TWO number systems. Start with the Sino-Korean ones (from Chinese) — they\'re used for money, time and phone numbers.',tr:'일'},
        {t:'words',items:[{tr:'일',pr:'il',en:'1'},{tr:'이',pr:'i',en:'2'},{tr:'삼',pr:'sam',en:'3'},{tr:'사',pr:'sa',en:'4'},{tr:'오',pr:'o',en:'5'},{tr:'십',pr:'sip',en:'10'}]},
        {t:'chal',en:'One, two, three',tr:'일, 이, 삼',pr:'il, i, sam',morph:['일 = 1','이 = 2','삼 = 3']},
        {t:'say',text:'To count objects (people, cups, things), Koreans use the native numbers: <span class="inline-tr">하나, 둘, 셋, 넷, 다섯</span>.',tr:'하나'},
        {t:'words',items:[{tr:'하나',pr:'hana',en:'1 (native)'},{tr:'둘',pr:'dul',en:'2 (native)'},{tr:'셋',pr:'set',en:'3 (native)'},{tr:'넷',pr:'net',en:'4 (native)'},{tr:'다섯',pr:'daseot',en:'5 (native)'}]},
        {t:'chal',en:'It\'s five thousand won',tr:'오천 원이에요',pr:'ocheon wonieyo',morph:['오천 = five thousand','원 = won (Korean money)','이에요 = it is']}
      ],
      blocks:['Sino-Korean (money & time): <code>일…십</code> = 1–10','Native (counting): <code>하나, 둘, 셋, 넷, 다섯</code> = 1–5','<code>원</code> = won'] },
    { id:4, title:'"I want" — the verb 주세요', focus:'주세요 · 원해요 · 커피 · 물 · 을/를',
      steps:[
        {t:'say',text:'The magic ordering word: <span class="inline-tr">주세요</span> — please give me. Stick it after any food or item.',tr:'주세요'},
        {t:'words',items:[{tr:'주세요',pr:'juseyo',en:'please give me'},{tr:'커피',pr:'keopi',en:'coffee',link:'≈ English coffee'},{tr:'물',pr:'mul',en:'water'}]},
        {t:'chal',en:'Water, please',tr:'물 주세요',pr:'mul juseyo',morph:['물 = water','주세요 = please give me']},
        {t:'say',text:'To say "I want" something, use <span class="inline-tr">원해요</span>. Mark the object with the particle <span class="inline-tr">을</span> after a consonant, or <span class="inline-tr">를</span> after a vowel.',tr:'원해요'},
        {t:'words',items:[{tr:'원해요',pr:'wonhaeyo',en:'I want'},{tr:'커피를 원해요',pr:'keopireul wonhaeyo',en:'I want coffee'}]},
        {t:'chal',en:'I want water',tr:'물을 원해요',pr:'mureul wonhaeyo',morph:['물 = water','을 = object particle','원해요 = I want']}
      ],
      blocks:['<code>주세요</code> = please give me','<code>원해요</code> = I want','<code>을 / 를</code> = the object particle'] },
    { id:5, title:'Food & drink', focus:'밥 · 김치 · 커피 · 얼마예요? · 맛있어요',
      steps:[
        {t:'say',text:'Eating in Korea? <span class="inline-tr">밥</span> = rice (and any meal), and <span class="inline-tr">김치</span> = kimchi, the spicy pickled cabbage that comes with everything.',tr:'밥'},
        {t:'words',items:[{tr:'밥',pr:'bap',en:'rice / a meal'},{tr:'김치',pr:'kimchi',en:'kimchi',link:'≈ English kimchi'},{tr:'물',pr:'mul',en:'water'},{tr:'맥주',pr:'maekju',en:'beer'},{tr:'불고기',pr:'bulgogi',en:'bulgogi (grilled beef)',link:'≈ English bulgogi'}]},
        {t:'chal',en:'Kimchi, please',tr:'김치 주세요',pr:'kimchi juseyo',morph:['김치 = kimchi','주세요 = please give me']},
        {t:'say',text:'To ask the price: <span class="inline-tr">얼마예요?</span> — how much is it?',tr:'얼마예요?'},
        {t:'chal',en:'How much is it?',tr:'얼마예요?',pr:'eolmayeyo?',morph:['얼마 = how much','예요? = is it?']},
        {t:'say',text:'<span class="inline-tr">맛있어요</span> = delicious. It\'s the fastest way to win over any cook.',tr:'맛있어요'},
        {t:'chal',en:'It\'s delicious!',tr:'맛있어요!',pr:'masisseoyo!',morph:['맛있어요 = delicious']}
      ],
      blocks:['<code>밥</code> = rice / meal · <code>김치</code> = kimchi','<code>얼마예요?</code> = how much is it?','<code>맛있어요</code> = delicious'] },
    { id:6, title:'Getting around', focus:'어디예요? · 오른쪽 · 왼쪽 · 직진 · 역',
      steps:[
        {t:'say',text:'The most useful question when you\'re lost: <span class="inline-tr">어디예요?</span> — where is it?',tr:'어디예요?'},
        {t:'words',items:[{tr:'어디예요?',pr:'eodiyeyo?',en:'where is it?'},{tr:'오른쪽',pr:'oreunjjok',en:'the right'},{tr:'왼쪽',pr:'oenjjok',en:'the left'},{tr:'직진',pr:'jikjin',en:'straight ahead'},{tr:'역',pr:'yeok',en:'station'},{tr:'화장실',pr:'hwajangsil',en:'the bathroom'}]},
        {t:'chal',en:'Where is the station?',tr:'역이 어디예요?',pr:'yeogi eodiyeyo?',morph:['역 = station','어디예요? = where is it?']},
        {t:'chal',en:'Where is the bathroom?',tr:'화장실이 어디예요?',pr:'hwajangsiri eodiyeyo?',morph:['화장실 = bathroom','어디예요? = where is it?']},
        {t:'say',text:'<span class="inline-tr">오른쪽</span> = right, <span class="inline-tr">왼쪽</span> = left, and <span class="inline-tr">직진</span> = straight ahead.',tr:'오른쪽'},
        {t:'chal',en:'Straight ahead',tr:'직진',pr:'jikjin',morph:['직진 = straight ahead']}
      ],
      blocks:['<code>어디예요?</code> = where is it?','<code>오른쪽</code> / <code>왼쪽</code> = right / left','<code>직진</code> = straight ahead'] },
    { id:7, title:'Questions & "do you have…?"', focus:'있어요 · 없어요',
      steps:[
        {t:'say',text:'<span class="inline-tr">있어요</span> = there is / I have. Ask it as a question (<span class="inline-tr">있어요?</span>) to mean "is there…? / do you have…?"',tr:'있어요'},
        {t:'words',items:[{tr:'있어요',pr:'isseoyo',en:'there is / I have'},{tr:'없어요',pr:'eopseoyo',en:'there isn\'t / I don\'t have'}]},
        {t:'chal',en:'Do you have kimchi?',tr:'김치 있어요?',pr:'kimchi isseoyo?',morph:['김치 = kimchi','있어요? = do you have?']},
        {t:'chal',en:'Is there a bathroom?',tr:'화장실 있어요?',pr:'hwajangsil isseoyo?',morph:['화장실 = bathroom','있어요? = is there?']},
        {t:'say',text:'To say you DON\'T have it: <span class="inline-tr">없어요</span>. Handy when the shop is out of stock.',tr:'없어요'},
        {t:'chal',en:'There isn\'t / I don\'t have it',tr:'없어요',pr:'eopseoyo',morph:['없어요 = there isn\'t / I don\'t have']}
      ],
      blocks:['<code>있어요?</code> = is there? / do you have?','<code>없어요</code> = there isn\'t / I don\'t have'] },
    { id:8, title:'Family & people', focus:'가족 · 엄마 · 아빠 · 친구 · 제',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">가족</span> = family. <span class="inline-tr">엄마</span> = mom and <span class="inline-tr">아빠</span> = dad.',tr:'가족'},
        {t:'words',items:[{tr:'가족',pr:'gajok',en:'family'},{tr:'엄마',pr:'eomma',en:'mom',link:'≈ mama (universal)'},{tr:'아빠',pr:'appa',en:'dad',link:'≈ papa/dada (universal)'},{tr:'친구',pr:'chingu',en:'friend'},{tr:'동생',pr:'dongsaeng',en:'younger sibling'}]},
        {t:'chal',en:'My family',tr:'제 가족',pr:'je gajok',morph:['제 = my','가족 = family']},
        {t:'say',text:'<span class="inline-tr">제</span> = my (polite). Just put it before a noun.',tr:'제'},
        {t:'chal',en:'My mom',tr:'제 엄마',pr:'je eomma',morph:['제 = my','엄마 = mom']},
        {t:'chal',en:'I have a friend',tr:'친구가 있어요',pr:'chinguga isseoyo',morph:['친구 = friend','가 = subject particle','있어요 = I have']}
      ],
      blocks:['<code>가족</code> = family','<code>엄마</code> / <code>아빠</code> = mom / dad','<code>제</code> = my (polite)','<code>친구</code> = friend'] },
    { id:9, title:'Time, days & weather', focus:'오늘 · 내일 · 어제 · -요일 · 날씨',
      steps:[
        {t:'say',text:'Today = <span class="inline-tr">오늘</span>, tomorrow = <span class="inline-tr">내일</span>, yesterday = <span class="inline-tr">어제</span>.',tr:'오늘'},
        {t:'words',items:[{tr:'오늘',pr:'oneul',en:'today'},{tr:'내일',pr:'naeil',en:'tomorrow'},{tr:'어제',pr:'eoje',en:'yesterday'},{tr:'날씨',pr:'nalssi',en:'weather'}]},
        {t:'chal',en:'See you tomorrow',tr:'내일 봐요',pr:'naeil bwayo',morph:['내일 = tomorrow','봐요 = see you']},
        {t:'say',text:'Days of the week end in <span class="inline-tr">-요일</span>: 월요일 Mon, 화요일 Tue, 수요일 Wed, 목요일 Thu, 금요일 Fri, 토요일 Sat, 일요일 Sun.',tr:'월요일'},
        {t:'words',items:[{tr:'월요일',pr:'woryoil',en:'Monday'},{tr:'금요일',pr:'geumyoil',en:'Friday'},{tr:'토요일',pr:'toyoil',en:'Saturday'},{tr:'일요일',pr:'ilyoil',en:'Sunday'}]},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">날씨가 어때요?</span> A common answer: <span class="inline-tr">비가 와요</span> — it\'s raining.',tr:'날씨가 어때요?'},
        {t:'chal',en:'It\'s raining',tr:'비가 와요',pr:'biga wayo',morph:['비 = rain','와요 = comes']}
      ],
      blocks:['<code>오늘</code> / <code>내일</code> / <code>어제</code> = today / tomorrow / yesterday','<code>-요일</code> = the day-of-week ending','<code>비가 와요</code> = it\'s raining'] },
    { id:10, title:'Small talk & your name', focus:'저는 __NAME__입니다 · 이름이 뭐예요? · 만나서 반가워요',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">저는 __NAME__입니다</span> — I am __NAME__. <span class="inline-tr">저는</span> = I (polite).',tr:'저는'},
        {t:'chal',en:'My name is __NAME__',tr:'저는 __NAME__입니다',pr:'jeoneun __NAME__imnida',morph:['저는 = I','__NAME__ = your name','입니다 = am']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">이름이 뭐예요?</span>',tr:'이름이 뭐예요?'},
        {t:'chal',en:'What\'s your name?',tr:'이름이 뭐예요?',pr:'ireumi mwoyeyo?',morph:['이름 = name','뭐예요? = what is it?']},
        {t:'say',text:'Pleased to meet you: <span class="inline-tr">만나서 반가워요</span>.',tr:'만나서 반가워요'},
        {t:'chal',en:'Nice to meet you',tr:'만나서 반가워요',pr:'mannaseo bangawoyo',morph:['만나서 = meeting you','반가워요 = glad']}
      ],
      blocks:['<code>저는 __NAME__입니다</code> = I am __NAME__','<code>이름이 뭐예요?</code> = what\'s your name?','<code>만나서 반가워요</code> = nice to meet you'] },
    { id:11, title:'Health & emergency', focus:'도와주세요 · 아파요 · 약국 · 모르겠어요',
      steps:[
        {t:'say',text:'If you need help: <span class="inline-tr">도와주세요</span> — please help me. It\'s one of the most important phrases to know.',tr:'도와주세요'},
        {t:'words',items:[{tr:'도와주세요',pr:'dowajuseyo',en:'help me, please'},{tr:'아파요',pr:'apayo',en:'it hurts / I\'m sick'},{tr:'의사',pr:'uisa',en:'doctor'},{tr:'약국',pr:'yakguk',en:'pharmacy'},{tr:'모르겠어요',pr:'moreugesseoyo',en:'I don\'t understand'}]},
        {t:'chal',en:'Please help me!',tr:'도와주세요!',pr:'dowajuseyo!',morph:['도와주세요 = please help me']},
        {t:'chal',en:'It hurts',tr:'아파요',pr:'apayo',morph:['아파요 = it hurts']},
        {t:'say',text:'<span class="inline-tr">모르겠어요</span> = I don\'t understand. Combine it with pointing at what you need.',tr:'모르겠어요'},
        {t:'chal',en:'I don\'t understand',tr:'모르겠어요',pr:'moreugesseoyo',morph:['모르겠어요 = I don\'t understand']}
      ],
      blocks:['<code>도와주세요</code> = please help me','<code>아파요</code> = it hurts','<code>모르겠어요</code> = I don\'t understand'] },
    { id:12, title:'Putting it together', focus:'greet · order · ask the way · pay · thank',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolkit. This capstone only uses words and phrases you\'ve already met. Build each line yourself before revealing it.'},
        {t:'chal',en:'Hello!',tr:'안녕하세요!',pr:'annyeonghaseyo!',morph:['안녕하세요 = hello']},
        {t:'chal',en:'Coffee, please',tr:'커피 주세요',pr:'keopi juseyo',morph:['커피 = coffee','주세요 = please give me']},
        {t:'chal',en:'Where is the station?',tr:'역이 어디예요?',pr:'yeogi eodiyeyo?',morph:['역 = station','어디예요? = where is it?']},
        {t:'chal',en:'How much is it?',tr:'얼마예요?',pr:'eolmayeyo?',morph:['얼마 = how much','예요? = is it?']},
        {t:'chal',en:'It\'s delicious! Thank you!',tr:'맛있어요! 감사합니다!',pr:'masisseoyo! gamsahamnida!',morph:['맛있어요 = delicious','감사합니다 = thank you']}
      ],
      blocks:['You built: greeting, ordering, directions, prices and thanks — a full day out in Korean.'] },
    { id:13, title:'Airport & tickets', focus:'공항 · 여권 · 표 · 게이트',
      steps:[
        {t:'say',text:'You have landed. The building is the <span class="inline-tr">공항</span>. Your document is a <span class="inline-tr">여권</span>.',tr:'공항'},
        {t:'words',items:[{tr:'공항',pr:'gonghang',en:'airport'},{tr:'여권',pr:'yeogwon',en:'passport'},{tr:'표',pr:'pyo',en:'ticket'},{tr:'비행기',pr:'bihaenggi',en:'airplane / flight'},{tr:'게이트',pr:'geiteu',en:'gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'공항이 어디예요?',pr:'gonghangi eodiyeyo?',morph:['공항 = airport','이 = subject particle','어디예요? = where is it?']},
        {t:'chal',en:'Here is my passport',tr:'여기 제 여권이요',pr:'yeogi je yeogwonyo',morph:['여기 = here','제 = my (polite)','여권 = passport','이요 = polite ending']},
        {t:'chal',en:'A ticket, please',tr:'표 주세요',pr:'pyo juseyo',morph:['표 = ticket','주세요 = please give me']},
        {t:'chal',en:'Where is the gate?',tr:'게이트가 어디예요?',pr:'geiteuga eodiyeyo?',morph:['게이트 = gate','가 = subject particle','어디예요? = where is it?']}
      ],
      blocks:['<code>공항</code> = airport','<code>여권</code> = passport','<code>표</code> = ticket','<code>게이트</code> = gate'] },
    { id:14, title:'The taxi', focus:'택시 · 가 주세요 · 호텔 · 세워 주세요',
      steps:[
        {t:'say',text:'The driver is waiting. <span class="inline-tr">택시</span> is a loanword. Tell them where to go with <span class="inline-tr">…에 가 주세요</span>.',tr:'택시'},
        {t:'words',items:[{tr:'택시',pr:'taeksi',en:'taxi'},{tr:'기사님',pr:'gisanim',en:'driver (polite)'},{tr:'가 주세요',pr:'ga juseyo',en:'please go'},{tr:'여기서 세워 주세요',pr:'yeogiseo sewo juseyo',en:'please stop here'}]},
        {t:'chal',en:'Taxi, please',tr:'택시 주세요',pr:'taeksi juseyo',morph:['택시 = taxi','주세요 = please']},
        {t:'chal',en:'Please go to the hotel',tr:'호텔에 가 주세요',pr:'hotele ga juseyo',morph:['호텔 = hotel','에 = to','가 주세요 = please go']},
        {t:'chal',en:'Stop here, please',tr:'여기서 세워 주세요',pr:'yeogiseo sewo juseyo',morph:['여기서 = here','세워 주세요 = please stop']},
        {t:'chal',en:'How much is it?',tr:'얼마예요?',pr:'eolmayeyo?',morph:['얼마 = how much','예요? = is it?']}
      ],
      blocks:['<code>…에 가 주세요</code> = please go to …','<code>여기서 세워 주세요</code> = please stop here'] },
    { id:15, title:'The hotel', focus:'예약 · 방 · 열쇠 · 하룻밤',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">예약이 있어요</span> — I have a reservation.',tr:'예약이 있어요'},
        {t:'words',items:[{tr:'호텔',pr:'hotel',en:'hotel'},{tr:'예약',pr:'yeyak',en:'reservation'},{tr:'방',pr:'bang',en:'room'},{tr:'열쇠',pr:'yeolsoe',en:'key'},{tr:'하룻밤',pr:'harutbam',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'예약이 있어요',pr:'yeyagi isseoyo',morph:['예약 = reservation','이 = subject particle','있어요 = I have']},
        {t:'chal',en:'A room for one night, please',tr:'하룻밤 방 주세요',pr:'harutbam bang juseyo',morph:['하룻밤 = one night','방 = room','주세요 = please give me']},
        {t:'chal',en:'The key, please',tr:'열쇠 주세요',pr:'yeolsoe juseyo',morph:['열쇠 = key','주세요 = please give me']},
        {t:'chal',en:'Where is my room?',tr:'제 방이 어디예요?',pr:'je bangi eodiyeyo?',morph:['제 = my','방 = room','어디예요? = where is it?']}
      ],
      blocks:['<code>예약</code> = reservation','<code>방</code> = room','<code>열쇠</code> = key'] },
    { id:16, title:'Ask for help', focus:'모르겠어요 · 천천히 · 영어',
      steps:[
        {t:'say',text:'When Korean is too fast: <span class="inline-tr">천천히 말씀해 주세요</span> — please speak slowly.',tr:'천천히 말씀해 주세요'},
        {t:'words',items:[{tr:'천천히',pr:'cheoncheonhi',en:'slowly'},{tr:'다시 한 번요',pr:'dasi han beonyo',en:'once more, please'},{tr:'영어',pr:'yeongeo',en:'English'},{tr:'도와주세요',pr:'dowajuseyo',en:'please help me'}]},
        {t:'chal',en:'I don\'t understand',tr:'모르겠어요',pr:'moreugesseoyo',morph:['모르겠어요 = I don\'t understand']},
        {t:'chal',en:'Please speak slowly',tr:'천천히 말씀해 주세요',pr:'cheoncheonhi malsseumhae juseyo',morph:['천천히 = slowly','말씀해 주세요 = please speak (polite)']},
        {t:'chal',en:'Can you help me?',tr:'도와주실 수 있어요?',pr:'dowajusil su isseoyo?',morph:['도와주실 수 = can you help','있어요? = is it possible?']},
        {t:'chal',en:'Do you speak English?',tr:'영어 하세요?',pr:'yeongeo haseyo?',morph:['영어 = English','하세요? = do you speak?']}
      ],
      blocks:['<code>천천히 말씀해 주세요</code> = please speak slowly','<code>영어 하세요?</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'cafe', title:'☕ At a café', emoji:'☕', turns:[
      {who:'You',tr:'안녕하세요! 커피 주세요.',pr:'annyeonghaseyo! keopi juseyo.',en:'Hello! Coffee, please.'},
      {who:'Barista',tr:'네, 여기 있어요.',pr:'ne, yeogi isseoyo.',en:'Sure, here you go.'},
      {who:'You',tr:'감사합니다. 얼마예요?',pr:'gamsahamnida. eolmayeyo?',en:'Thank you. How much is it?'},
      {who:'Barista',tr:'사천 원이에요.',pr:'sacheon wonieyo.',en:'It\'s 4,000 won.'},
      {who:'You',tr:'네, 여기요.',pr:'ne, yeogiyo.',en:'Here you go.'}
    ]},
    { id:'transport', title:'🚇 At the subway station', emoji:'🚇', turns:[
      {who:'You',tr:'실례합니다. 지하철역이 어디예요?',pr:'sillyehamnida. jihacheoryeogi eodiyeyo?',en:'Excuse me, where is the subway station?'},
      {who:'Local',tr:'저기, 오른쪽이에요.',pr:'jeogi, oreunjjogieyo.',en:'It\'s over there, on the right.'},
      {who:'You',tr:'감사합니다. 서울역까지 표 주세요.',pr:'gamsahamnida. seoulyeokkkaji pyo juseyo.',en:'Thanks. One ticket to Seoul Station, please.'},
      {who:'Clerk',tr:'네, 천오백 원이에요.',pr:'ne, cheonobaek wonieyo.',en:'Sure, that\'s 1,500 won.'}
    ]},
    { id:'restaurant', title:'🍲 At a restaurant', emoji:'🍲', turns:[
      {who:'Waiter',tr:'어서 오세요. 뭐 드릴까요?',pr:'eoseo oseyo. mwo deurilkkayo?',en:'Welcome. What can I get you?'},
      {who:'You',tr:'불고기 주세요.',pr:'bulgogi juseyo.',en:'Bulgogi, please.'},
      {who:'You',tr:'물도 주세요.',pr:'muldo juseyo.',en:'Water too, please.'},
      {who:'Waiter',tr:'네, 잠시만요.',pr:'ne, jamsimanyo.',en:'Sure, just a moment.'},
      {who:'You',tr:'맛있어요! 감사합니다.',pr:'masisseoyo! gamsahamnida.',en:'It\'s delicious! Thank you.'}
    ]},
    { id:'shopping', title:'🛍️ Shopping', emoji:'🛍️', turns:[
      {who:'You',tr:'이거 얼마예요?',pr:'igeo eolmayeyo?',en:'How much is this?'},
      {who:'Seller',tr:'오천 원이에요.',pr:'ocheon wonieyo.',en:'It\'s 5,000 won.'},
      {who:'You',tr:'좀 비싸요.',pr:'jom bissayo.',en:'It\'s a bit expensive.'},
      {who:'Seller',tr:'그럼, 사천 원이에요.',pr:'geureom, sacheon wonieyo.',en:'Then, 4,000 won.'},
      {who:'You',tr:'좋아요, 이거 주세요.',pr:'joayo, igeo juseyo.',en:'OK, I\'ll take this.'}
    ]}
  ],
  pocket: [
    {tr:'안녕하세요',pr:'annyeonghaseyo',en:'Hello',c:'Greetings'},
    {tr:'안녕히 가세요',pr:'annyeonghi gaseyo',en:'Goodbye (to someone leaving)',c:'Greetings'},
    {tr:'만나서 반가워요',pr:'mannaseo bangawoyo',en:'Nice to meet you',c:'Greetings'},
    {tr:'네',pr:'ne',en:'Yes',c:'Greetings'},
    {tr:'아니요',pr:'aniyo',en:'No',c:'Greetings'},
    {tr:'감사합니다',pr:'gamsahamnida',en:'Thank you',c:'Courtesy'},
    {tr:'죄송합니다',pr:'joesonghamnida',en:'I\'m sorry',c:'Courtesy'},
    {tr:'실례합니다',pr:'sillyehamnida',en:'Excuse me',c:'Courtesy'},
    {tr:'괜찮아요',pr:'gwaenchanayo',en:'It\'s OK / no problem',c:'Courtesy'},
    {tr:'주세요',pr:'juseyo',en:'Please (give me)',c:'Courtesy'},
    {tr:'일',pr:'il',en:'1',c:'Numbers'},
    {tr:'이',pr:'i',en:'2',c:'Numbers'},
    {tr:'삼',pr:'sam',en:'3',c:'Numbers'},
    {tr:'사',pr:'sa',en:'4',c:'Numbers'},
    {tr:'오',pr:'o',en:'5',c:'Numbers'},
    {tr:'십',pr:'sip',en:'10',c:'Numbers'},
    {tr:'커피',pr:'keopi',en:'coffee',c:'Food'},
    {tr:'물',pr:'mul',en:'water',c:'Food'},
    {tr:'밥',pr:'bap',en:'rice / a meal',c:'Food'},
    {tr:'김치',pr:'kimchi',en:'kimchi',c:'Food'},
    {tr:'맛있어요',pr:'masisseoyo',en:'delicious',c:'Food'},
    {tr:'어디예요?',pr:'eodiyeyo?',en:'Where is...?',c:'Directions'},
    {tr:'오른쪽',pr:'oreunjjok',en:'to the right',c:'Directions'},
    {tr:'왼쪽',pr:'oenjjok',en:'to the left',c:'Directions'},
    {tr:'직진',pr:'jikjin',en:'straight ahead',c:'Directions'},
    {tr:'화장실',pr:'hwajangsil',en:'the bathroom',c:'Directions'},
    {tr:'얼마예요?',pr:'eolmayeyo?',en:'How much is it?',c:'Shopping'},
    {tr:'이거 주세요',pr:'igeo juseyo',en:'I\'ll take this',c:'Shopping'},
    {tr:'비싸요',pr:'bissayo',en:'It\'s expensive',c:'Shopping'},
    {tr:'도와주세요',pr:'dowajuseyo',en:'Help, please',c:'Emergency'},
    {tr:'아파요',pr:'apayo',en:'It hurts',c:'Emergency'},
    {tr:'의사',pr:'uisa',en:'doctor',c:'Emergency'},
    {tr:'모르겠어요',pr:'moreugesseoyo',en:'I don\'t understand',c:'Emergency'},
    {tr:'오늘',pr:'oneul',en:'today',c:'Time'},
    {tr:'내일',pr:'naeil',en:'tomorrow',c:'Time'},
    {tr:'지금',pr:'jigeum',en:'now',c:'Time'},
    {tr:'공항',pr:'gonghang',en:'airport',c:'Travel'},
    {tr:'여권',pr:'yeogwon',en:'passport',c:'Travel'},
    {tr:'호텔에 가 주세요',pr:'hotele ga juseyo',en:'Please go to the hotel',c:'Travel'},
    {tr:'예약이 있어요',pr:'yeyagi isseoyo',en:'I have a reservation',c:'Travel'},
    {tr:'천천히 말씀해 주세요',pr:'cheoncheonhi malsseumhae juseyo',en:'Please speak slowly',c:'Travel'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Shopping','Emergency','Time','Travel'],
  culture: [
    {icon:'🙇',title:'Bows & politeness',body:'A small bow or a nod is the standard greeting. Korean has several politeness levels — the everyday -요 and the formal -습니다 you\'ll hear in shops and announcements. When in doubt, the polite form is always safe.'},
    {icon:'🍚',title:'Rice is life',body:'밥 (bap) means both "rice" and "a meal". Whether it\'s breakfast, lunch or dinner, a Korean table almost always has rice, a soup and banchan (side dishes) to share.'},
    {icon:'🌶️',title:'The spice of Korea',body:'Kimchi, gochujang (red pepper paste) and gochugaru (chili flakes) show up everywhere. Korean food is often bold, spicy and served family-style, meant for the whole table.'},
    {icon:'💰',title:'No tipping expected',body:'Tipping is not customary in Korea. Prices are as marked, and a polite 감사합니다 (thank you) is the best "tip" you can give. Some cafés have you order at a kiosk or counter first.'},
    {icon:'👥',title:'Age shapes your words',body:'Language shifts with age and closeness. Younger women call an older sister 언니, younger men call an older brother 형, and so on. When unsure, the polite -요 ending is always fine.'},
    {icon:'📱',title:'Ordering apps & cards',body:'Korea is hyper-connected. Most payments happen by card, and many places rely on kiosks and local apps. A little Korean — ordering, "to go", a thank-you — still makes everything smoother.'}
  ],
  sounds: [
    {l:'ㄱ · ㅋ',say:'ㄱ is a soft "g" (as in go); ㅋ is a strong "k" with a puff of air.',ex:'가 = ga · 커피 = keo-pi',voice:'커피'},
    {l:'ㄷ · ㅌ',say:'ㄷ is a soft "d" (as in day); ㅌ is a strong "t" with a puff of air.',ex:'다 = da · 토마토 = to-ma-to',voice:'토마토'},
    {l:'ㅂ · ㅍ',say:'ㅂ is a soft "b" (as in bat); ㅍ is a strong "p" with a puff of air.',ex:'바 = ba · 포도 = po-do',voice:'포도'},
    {l:'final consonants',say:'A syllable ends on one consonant that "closes" it — you can\'t add a vowel after it.',ex:'밥 = bap · 물 = mul',voice:'밥'},
    {l:'ㅓ · ㅗ',say:'ㅓ is a wide, unrounded "uh/eu" sound; ㅗ is a round "o" with the lips forward.',ex:'어 = eo · 오 = o',voice:'오'},
    {l:'ㅡ',say:'ㅡ is a flat sound with no rounding, like the "u" in "sir" (but no r).',ex:'으 = eu · 그 = geu',voice:'그'},
    {l:'ㅅ · ㅆ',say:'ㅅ is an "s" — a soft "sh" before ㅣ; ㅆ is a tense, sharper "s".',ex:'사 = sa · 시 = si · 씨 = ssi',voice:'사'}
  ],
  resources: [
    {icon:'🗣️',t:'Talk To Me In Korean',d:'Clear, structured beginner lessons with friendly native audio — the classic starting point for Korean.',q:'Talk To Me In Korean level 1'},
    {icon:'🎧',t:'KoreanClass101',d:'Short, native-audio lessons built around everyday phrases and real conversations.',q:'KoreanClass101 beginner Korean lessons'},
    {icon:'📺',t:'Go Billy Korean',d:'Warm, simple breakdowns of Hangul and grammar aimed straight at absolute beginners.',q:'Learn Hangul Go Billy Korean'},
    {icon:'🐢',t:'Slow Korean listening',d:'Slow, clear Korean read aloud with subtitles — perfect for training your ear.',q:'slow Korean listening for beginners'},
    {icon:'💬',t:'90 Day Korean',d:'Small, themed lessons that break Hangul and essential phrases into easy daily steps.',q:'90 Day Korean phrases for beginners'}
  ]
};
