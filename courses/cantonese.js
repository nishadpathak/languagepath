/* ---- cantonese ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["cantonese"] = {
  name: 'Cantonese',
  flag: '🇭🇰',
  tts: 'yue-HK',
  dir: 'ltr',
  native: '廣東話',
  soundTitle: 'Cantonese sounds & the six tones',
  soundIntro: 'Cantonese is built on tone. Say the same syllable at six different pitches and you get six different words. Nail the tones and locals will understand you even with an accent.',
  grammar: '<p>Cantonese is a tonal language: the same syllable at a different pitch means a different word, so <b>tone is essential</b> — there are six. Verbs don\'t change for person or tense: <b>我食</b> ngo5 sik6 can mean "I eat" or "I ate". Word order is subject–verb–object (你好 = you good). Chinese characters are the writing system, here in the traditional Hong Kong form. Nouns are counted with <b>measure words</b> (一杯 jat1 bui1 = one cup), and little end particles such as <b>呀</b> (aa3) soften a sentence or mark a question.</p>',
  bridges: '<div class="note">🇨🇳 <b>Mandarin.</b> Cantonese and Mandarin share the same written characters (this course uses the traditional forms, as in Hong Kong), but they are <b>not</b> mutually intelligible when spoken — same writing idea, very different tones and vocabulary. If you know Mandarin characters you have a head start reading; you\'ll still learn Cantonese from scratch to speak it.</div><div class="note">🇬🇧 <b>English.</b> Cantonese borrows from English: 的士 dik1 si2 = taxi, 巴士 baa1 si2 = bus, 咖啡 gaa3 fe1 = coffee, 飛 fei1 = ticket (from "fare"). English borrowed back too: 茶 caa4 → tea.</div>',
  lessons: [
    { id:1, title:'Greetings & being polite', focus:'你好 · 唔該 · 多謝 · 對唔住',
      steps:[
        {t:'say',text:'The first word you\'ll ever use: <span class="inline-tr">你好</span> — hello. It\'s said "nei5 hou2". Say it out loud.',tr:'你好'},
        {t:'words',items:[{tr:'你好',pr:'nei5 hou2',en:'hello'},{tr:'早晨',pr:'zou2 san4',en:'good morning'},{tr:'再見',pr:'zoi3 gin3',en:'goodbye'},{tr:'你哋好',pr:'nei5 dei6 hou2',en:'hello (to a group)'}]},
        {t:'chal',en:'Hello',tr:'你好',pr:'nei5 hou2',morph:['你好 = hello']},
        {t:'say',text:'To say please, to get attention, or to thank someone for a service, use <span class="inline-tr">唔該</span> (m4 goi1).',tr:'唔該'},
        {t:'words',items:[{tr:'唔該',pr:'m4 goi1',en:'please / excuse me / thanks'},{tr:'多謝',pr:'do1 ze6',en:'thank you (for a gift)'},{tr:'對唔住',pr:'deoi3 m4 zyu6',en:'sorry'}]},
        {t:'chal',en:'Please / excuse me',tr:'唔該',pr:'m4 goi1',morph:['唔該 = please / excuse me']},
        {t:'chal',en:'Hello, thank you',tr:'你好，唔該',pr:'nei5 hou2, m4 goi1',morph:['你好 = hello','唔該 = thanks (for a service)']}
      ],
      blocks:['<code>你好</code> = hello','<code>早晨</code> = good morning','<code>唔該</code> = please / thanks (service) · <code>多謝</code> = thanks (gift)','<code>對唔住</code> = sorry'] },
    { id:2, title:'Numbers 1–10', focus:'一 二 三 · 幾多錢 · 蚊',
      steps:[
        {t:'say',text:'Numbers are the fastest win. Listen and repeat: <span class="inline-tr">一</span> 二 三.',tr:'一'},
        {t:'words',items:[{tr:'一',pr:'jat1',en:'1'},{tr:'二',pr:'ji6',en:'2'},{tr:'三',pr:'saam1',en:'3'},{tr:'四',pr:'sei3',en:'4'},{tr:'五',pr:'ng5',en:'5'},{tr:'六',pr:'luk6',en:'6'},{tr:'七',pr:'cat1',en:'7'},{tr:'八',pr:'baat3',en:'8'},{tr:'九',pr:'gau2',en:'9'},{tr:'十',pr:'sap6',en:'10'}]},
        {t:'chal',en:'Two coffees, please',tr:'兩杯咖啡，唔該',pr:'loeng5 bui1 gaa3 fe1, m4 goi1',morph:['兩 = two (before a measure word)','杯 = cup','咖啡 = coffee','唔該 = please']},
        {t:'say',text:'To ask the price: <span class="inline-tr">幾多錢</span> (gei2 do1 cin2) — how much?',tr:'幾多錢'},
        {t:'chal',en:'How much is it?',tr:'幾多錢呀？',pr:'gei2 do1 cin2 aa3',morph:['幾多錢 = how much money','呀 = question particle']},
        {t:'chal',en:'It\'s five dollars',tr:'五蚊',pr:'ng5 man1',morph:['五 = five','蚊 = dollar (HK)']}
      ],
      blocks:['一 二 三 四 五 = 1–5','六 七 八 九 十 = 6–10','<code>幾多錢</code> = how much?','<code>蚊</code> = dollar'] },
    { id:3, title:'"I want" — 我想要', focus:'我想要 · 一杯 · 詞序',
      steps:[
        {t:'say',text:'The magic phrase to order anything: <span class="inline-tr">我想要</span> (ngo5 soeng2 jiu3) — I want.',tr:'我想要'},
        {t:'words',items:[{tr:'我想要',pr:'ngo5 soeng2 jiu3',en:'I want'},{tr:'我想',pr:'ngo5 soeng2',en:'I would like to'},{tr:'要',pr:'jiu3',en:'to want'},{tr:'唔該，我想要...',pr:'m4 goi1, ngo5 soeng2 jiu3...',en:'excuse me, I\'d like...'}]},
        {t:'chal',en:'I want water',tr:'我想要水',pr:'ngo5 soeng2 jiu3 seoi2',morph:['我想要 = I want','水 = water']},
        {t:'say',text:'Add <span class="inline-tr">一</span> plus a measure word to count things: 一杯 (jat1 bui1) = one cup.',tr:'一杯'},
        {t:'chal',en:'I\'d like a cup of tea',tr:'我想要一杯茶',pr:'ngo5 soeng2 jiu3 jat1 bui1 caa4',morph:['我想要 = I want','一杯 = one cup','茶 = tea']},
        {t:'chal',en:'Excuse me, I want one coffee',tr:'唔該，我想要一杯咖啡',pr:'m4 goi1, ngo5 soeng2 jiu3 jat1 bui1 gaa3 fe1',morph:['唔該 = excuse me','我想要 = I want','一杯 = one cup','咖啡 = coffee']}
      ],
      blocks:['<code>我想要</code> = I want','<code>一杯</code> = one cup','count with 一 + measure word + noun'] },
    { id:4, title:'Food & drink', focus:'水 · 飯 · 茶 · 咖啡 · 好食',
      steps:[
        {t:'say',text:'Eating out? Key words: <span class="inline-tr">水</span> (water), <span class="inline-tr">飯</span> (rice), <span class="inline-tr">茶</span> (tea).',tr:'水'},
        {t:'words',items:[{tr:'水',pr:'seoi2',en:'water'},{tr:'飯',pr:'faan6',en:'rice'},{tr:'茶',pr:'caa4',en:'tea',link:'≈ English tea'},{tr:'咖啡',pr:'gaa3 fe1',en:'coffee',link:'≈ English coffee'},{tr:'奶茶',pr:'naai5 caa4',en:'milk tea'}]},
        {t:'chal',en:'Water and tea, please',tr:'水同埋茶，唔該',pr:'seoi2 tung4 maai4 caa4, m4 goi1',morph:['水 = water','同埋 = and','茶 = tea','唔該 = please']},
        {t:'say',text:'<span class="inline-tr">好食</span> (hou2 sik6) = delicious. Say it and every cook in Hong Kong lights up.',tr:'好食'},
        {t:'chal',en:'It\'s delicious!',tr:'好食！',pr:'hou2 sik6!',morph:['好 = good','食 = eat','好食 = delicious']},
        {t:'chal',en:'I want an iced coffee',tr:'我想要一杯凍咖啡',pr:'ngo5 soeng2 jiu3 jat1 bui1 dung3 gaa3 fe1',morph:['我想要 = I want','一杯 = one cup','凍 = iced','咖啡 = coffee']}
      ],
      blocks:['<code>水</code> / <code>飯</code> / <code>茶</code> = water / rice / tea','<code>咖啡</code> = coffee (≈ English)','<code>好食</code> = delicious'] },
    { id:5, title:'Getting around', focus:'邊度 · 左邊 · 右邊 · 直行',
      steps:[
        {t:'say',text:'The most useful question anywhere: <span class="inline-tr">邊度</span> (bin1 dou6) — where?',tr:'邊度'},
        {t:'words',items:[{tr:'邊度',pr:'bin1 dou6',en:'where'},{tr:'左邊',pr:'zo2 bin1',en:'left'},{tr:'右邊',pr:'jau6 bin1',en:'right'},{tr:'直行',pr:'zik6 haang4',en:'go straight'},{tr:'地鐵站',pr:'dei6 tit3 zaam6',en:'MTR / metro station',link:'≈ MTR'}]},
        {t:'chal',en:'Where is the MTR station?',tr:'地鐵站喺邊度？',pr:'dei6 tit3 zaam6 hai2 bin1 dou6',morph:['地鐵站 = MTR station','喺 = at','邊度 = where']},
        {t:'chal',en:'Go straight, then turn right',tr:'直行，然後轉右',pr:'zik6 haang4, jin4 hau6 zyun3 jau6',morph:['直行 = go straight','然後 = then','轉右 = turn right']},
        {t:'say',text:'To ask where the bathroom is: <span class="inline-tr">廁所喺邊度？</span>',tr:'廁所喺邊度？'},
        {t:'chal',en:'Where is the bathroom?',tr:'廁所喺邊度？',pr:'ci3 so2 hai2 bin1 dou6',morph:['廁所 = bathroom','喺邊度 = where is']}
      ],
      blocks:['<code>邊度</code> = where','<code>左邊</code> / <code>右邊</code> = left / right','<code>直行</code> = go straight'] },
    { id:6, title:'Questions & "is it?"', focus:'幾多 · 邊個 · 幾時 · 係唔係',
      steps:[
        {t:'say',text:'Ask how much or how many: <span class="inline-tr">幾多</span> (gei2 do1).',tr:'幾多'},
        {t:'words',items:[{tr:'幾多錢',pr:'gei2 do1 cin2',en:'how much?'},{tr:'幾時',pr:'gei2 si4',en:'when?'},{tr:'邊個',pr:'bin1 go3',en:'who?'},{tr:'點樣',pr:'dim2 joeng2',en:'how?'},{tr:'係唔係',pr:'hai6 m4 hai6',en:'is it? / right?'}]},
        {t:'chal',en:'Is this the bus stop?',tr:'呢個係唔係巴士站？',pr:'ni1 go3 hai6 m4 hai6 baa1 si2 zaam6',morph:['呢個 = this','係唔係 = is it?','巴士站 = bus stop']},
        {t:'say',text:'To say you don\'t know: <span class="inline-tr">唔知</span> (m4 zi1).',tr:'唔知'},
        {t:'chal',en:'I don\'t know',tr:'唔知',pr:'m4 zi1',morph:['唔 = not','知 = know']},
        {t:'chal',en:'How much is this?',tr:'呢個幾多錢？',pr:'ni1 go3 gei2 do1 cin2',morph:['呢個 = this','幾多錢 = how much']}
      ],
      blocks:['<code>幾多</code> = how many/much','<code>邊個</code> / <code>幾時</code> = who / when','<code>係唔係</code> = is it?'] },
    { id:7, title:'Family & people', focus:'屋企人 · 爸爸 · 媽媽 · 朋友',
      steps:[
        {t:'say',text:'Family: <span class="inline-tr">屋企人</span> (uk1 kei2 jan4) = family. Take your time with it.',tr:'屋企人'},
        {t:'words',items:[{tr:'屋企人',pr:'uk1 kei2 jan4',en:'family'},{tr:'爸爸',pr:'baa4 baa1',en:'father'},{tr:'媽媽',pr:'maa4 maa1',en:'mother'},{tr:'哥哥',pr:'go4 go1',en:'older brother'},{tr:'家姐',pr:'gaa1 ze1',en:'older sister'},{tr:'朋友',pr:'pang4 jau5',en:'friend'}]},
        {t:'chal',en:'This is my friend',tr:'呢個係我朋友',pr:'ni1 go3 hai6 ngo5 pang4 jau5',morph:['呢個 = this','係 = is','我 = my','朋友 = friend']},
        {t:'say',text:'To say "I have": <span class="inline-tr">我有</span> (ngo5 jau5).',tr:'我有'},
        {t:'chal',en:'I have a family',tr:'我有屋企人',pr:'ngo5 jau5 uk1 kei2 jan4',morph:['我有 = I have','屋企人 = family']}
      ],
      blocks:['<code>屋企人</code> = family','<code>爸爸</code> / <code>媽媽</code> = dad / mum','<code>朋友</code> = friend','<code>我有</code> = I have'] },
    { id:8, title:'Time, days & weather', focus:'今日 · 聽日 · 幾點 · 天氣',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">今日</span> (gam1 jat6), tomorrow is <span class="inline-tr">聽日</span> (ting1 jat6).',tr:'今日'},
        {t:'words',items:[{tr:'今日',pr:'gam1 jat6',en:'today'},{tr:'聽日',pr:'ting1 jat6',en:'tomorrow'},{tr:'而家',pr:'ji4 gaa1',en:'now'},{tr:'幾點',pr:'gei2 dim2',en:'what time?'},{tr:'天氣',pr:'tin1 hei3',en:'weather'}]},
        {t:'chal',en:'See you tomorrow',tr:'聽日見',pr:'ting1 jat6 gin3',morph:['聽日 = tomorrow','見 = see']},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">今日天氣點呀？</span> — how\'s the weather today?',tr:'今日天氣點呀？'},
        {t:'words',items:[{tr:'好熱',pr:'hou2 jit6',en:'hot'},{tr:'好凍',pr:'hou2 dung3',en:'cold'},{tr:'落雨',pr:'lok6 jyu5',en:'raining'}]},
        {t:'chal',en:'It\'s raining',tr:'落雨',pr:'lok6 jyu5',morph:['落 = fall','雨 = rain','落雨 = raining']}
      ],
      blocks:['<code>今日</code> / <code>聽日</code> = today / tomorrow','<code>幾點</code> = what time?','<code>好熱</code> / <code>好凍</code> = hot / cold'] },
    { id:9, title:'Small talk & introducing yourself', focus:'我叫 · 你叫咩名 · 幸會',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">我叫</span> (ngo5 giu3) — my name is.',tr:'我叫'},
        {t:'chal',en:'My name is __NAME__',tr:'我叫 __NAME__',pr:'ngo5 giu3 __NAME__',morph:['我叫 = my name is','__NAME__ = your name']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">你叫咩名？</span> (nei5 giu3 me1 meng2?)',tr:'你叫咩名？'},
        {t:'chal',en:'What\'s your name?',tr:'你叫咩名？',pr:'nei5 giu3 me1 meng2',morph:['你叫 = you\'re called','咩 = what','名 = name']},
        {t:'say',text:'Pleased to meet you: <span class="inline-tr">幸會</span> (hang6 wui6).',tr:'幸會'},
        {t:'chal',en:'My name is __NAME__, pleased to meet you',tr:'我叫 __NAME__。幸會。',pr:'ngo5 giu3 __NAME__; hang6 wui6',morph:['我叫 = my name is','__NAME__ = your name','幸會 = pleased to meet you']}
      ],
      blocks:['<code>我叫 __NAME__</code> = my name is __NAME__','<code>你叫咩名？</code> = what\'s your name?','<code>幸會</code> = pleased to meet you'] },
    { id:10, title:'Health & emergency', focus:'救命呀 · 醫院 · 幫我 · 我唔明',
      steps:[
        {t:'say',text:'The most important word if you need help: <span class="inline-tr">救命</span> (gau3 meng6) — help, save me!',tr:'救命'},
        {t:'words',items:[{tr:'救命呀',pr:'gau3 meng6 aa3',en:'help!'},{tr:'醫院',pr:'ji1 jyun2',en:'hospital'},{tr:'警察',pr:'ging2 caat3',en:'police'},{tr:'幫我',pr:'bong1 ngo5',en:'help me'},{tr:'我唔明',pr:'ngo5 m4 ming4',en:'I don\'t understand'}]},
        {t:'chal',en:'Help!',tr:'救命呀！',pr:'gau3 meng6 aa3!',morph:['救命 = save [my] life','呀 = emphasis particle']},
        {t:'say',text:'To say you\'re unwell: <span class="inline-tr">我唔舒服</span> (ngo5 m4 syu1 fuk6).',tr:'我唔舒服'},
        {t:'chal',en:'I feel unwell',tr:'我唔舒服',pr:'ngo5 m4 syu1 fuk6',morph:['我 = I','唔 = not','舒服 = comfortable/well']},
        {t:'chal',en:'I don\'t understand',tr:'我唔明',pr:'ngo5 m4 ming4',morph:['我 = I','唔 = not','明 = understand']}
      ],
      blocks:['<code>救命呀</code> = help!','<code>醫院</code> / <code>警察</code> = hospital / police','<code>我唔明</code> = I don\'t understand'] },
    { id:11, title:'Describing things', focus:'好 · 大 · 細 · 太貴',
      steps:[
        {t:'say',text:'Adjectives are easy: <span class="inline-tr">好</span> (good/very), <span class="inline-tr">大</span> (big), <span class="inline-tr">細</span> (small).',tr:'好'},
        {t:'words',items:[{tr:'好',pr:'hou2',en:'good / very'},{tr:'大',pr:'daai6',en:'big'},{tr:'細',pr:'sai3',en:'small'},{tr:'靚',pr:'leng3',en:'pretty'},{tr:'貴',pr:'gwai3',en:'expensive'},{tr:'平',pr:'peng4',en:'cheap'}]},
        {t:'chal',en:'Very big',tr:'好大',pr:'hou2 daai6',morph:['好 = very','大 = big']},
        {t:'say',text:'To say "too expensive": <span class="inline-tr">太貴</span> (taai3 gwai3).',tr:'太貴'},
        {t:'chal',en:'It\'s too expensive',tr:'太貴啦',pr:'taai3 gwai3 laa3',morph:['太 = too','貴 = expensive','啦 = particle']},
        {t:'chal',en:'This is very good',tr:'呢個好好',pr:'ni1 go3 hou2 hou2',morph:['呢個 = this','好好 = very good']}
      ],
      blocks:['<code>好</code> = good / very','<code>大</code> / <code>細</code> = big / small','<code>太貴</code> = too expensive'] },
    { id:12, title:'Tying it together', focus:'a capstone outing',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolbox. This capstone uses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello!',tr:'你好！',pr:'nei5 hou2!',morph:['你好 = hello']},
        {t:'chal',en:'I want a cup of tea, please',tr:'我想要一杯茶，唔該',pr:'ngo5 soeng2 jiu3 jat1 bui1 caa4, m4 goi1',morph:['我想要 = I want','一杯 = one cup','茶 = tea','唔該 = please']},
        {t:'chal',en:'Where is the MTR station?',tr:'地鐵站喺邊度？',pr:'dei6 tit3 zaam6 hai2 bin1 dou6',morph:['地鐵站 = MTR station','喺邊度 = where is']},
        {t:'chal',en:'How much is it?',tr:'幾多錢呀？',pr:'gei2 do1 cin2 aa3',morph:['幾多錢 = how much','呀 = question particle']},
        {t:'chal',en:'Delicious! Thank you!',tr:'好食！多謝！',pr:'hou2 sik6! do1 ze6!',morph:['好食 = delicious','多謝 = thank you']}
      ],
      blocks:['You built: greetings, ordering, directions, prices, thanks — a full cha chaan teng outing in Cantonese.'] },
    { id:13, title:'Airport & tickets', focus:'機場 · 護照 · 機票 · 航班',
      steps:[
        {t:'say',text:'You have landed in Hong Kong. The building is the <span class="inline-tr">機場</span>. Your document is a <span class="inline-tr">護照</span>.',tr:'機場'},
        {t:'words',items:[{tr:'機場',pr:'gei1 coeng4',en:'the airport'},{tr:'護照',pr:'wu6 ziu3',en:'the passport'},{tr:'機票',pr:'gei1 piu3',en:'the plane ticket'},{tr:'航班',pr:'hong4 baan1',en:'the flight'},{tr:'閘口',pr:'zaap6 hau2',en:'the gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'機場喺邊度？',pr:'gei1 coeng4 hai2 bin1 dou6',morph:['機場 = the airport','喺邊度 = where is']},
        {t:'chal',en:'Here is my passport',tr:'呢度係我護照',pr:'ni1 dou6 hai6 ngo5 wu6 ziu3',morph:['呢度係 = here is','我護照 = my passport']},
        {t:'chal',en:'A ticket, please',tr:'一張機票，唔該',pr:'jat1 zoeng1 gei1 piu3, m4 goi1',morph:['一張機票 = one ticket','唔該 = please']},
        {t:'chal',en:'Where is the gate?',tr:'閘口喺邊度？',pr:'zaap6 hau2 hai2 bin1 dou6',morph:['閘口 = the gate','喺邊度 = where is']}
      ],
      blocks:['<code>機場</code> = airport','<code>護照</code> = passport','<code>機票</code> = ticket'] },
    { id:14, title:'The taxi', focus:'的士 · 去 · 酒店 · 停',
      steps:[
        {t:'say',text:'Hong Kong says <span class="inline-tr">的士</span> for taxi. Tell the driver <span class="inline-tr">我要去酒店</span> — I want to go to the hotel.',tr:'的士'},
        {t:'words',items:[{tr:'的士',pr:'dik1 si2',en:'the taxi'},{tr:'司機',pr:'si1 gei1',en:'the driver'},{tr:'我要去',pr:'ngo5 jiu3 heoi3',en:'I want to go'},{tr:'响呢度停',pr:'haang2 ni1 dou6 ting4',en:'stop here'}]},
        {t:'chal',en:'A taxi, please',tr:'的士，唔該',pr:'dik1 si2, m4 goi1',morph:['的士 = taxi','唔該 = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'我要去酒店',pr:'ngo5 jiu3 heoi3 zau2 dim3',morph:['我要 = I want','去 = to go','酒店 = hotel']},
        {t:'chal',en:'Stop here, please',tr:'响呢度停，唔該',pr:'haang2 ni1 dou6 ting4, m4 goi1',morph:['响呢度停 = stop here','唔該 = please']},
        {t:'chal',en:'How much is it?',tr:'幾多錢呀？',pr:'gei2 do1 cin2 aa3',morph:['幾多錢 = how much','呀 = question']}
      ],
      blocks:['<code>我要去 …</code> = I want to go to …','<code>响呢度停</code> = stop here'] },
    { id:15, title:'The hotel', focus:'預訂 · 房 · 鎖匙 · 一晚',
      steps:[
        {t:'say',text:'At the desk in Central: <span class="inline-tr">我有預訂</span> — I have a reservation.',tr:'預訂'},
        {t:'words',items:[{tr:'酒店',pr:'zau2 dim3',en:'the hotel'},{tr:'預訂',pr:'jyu6 deng6',en:'the reservation'},{tr:'房',pr:'fong2',en:'the room'},{tr:'鎖匙',pr:'so2 si4',en:'the key'},{tr:'一晚',pr:'jat1 maan5',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'我有預訂',pr:'ngo5 jau5 jyu6 deng6',morph:['我有 = I have','預訂 = a reservation']},
        {t:'chal',en:'A room for one night, please',tr:'一晚一間房，唔該',pr:'jat1 maan5 jat1 gaan1 fong2, m4 goi1',morph:['一晚 = one night','一間房 = a room','唔該 = please']},
        {t:'chal',en:'The key, please',tr:'鎖匙，唔該',pr:'so2 si4, m4 goi1',morph:['鎖匙 = the key','唔該 = please']},
        {t:'chal',en:'Where is my room?',tr:'我間房喺邊度？',pr:'ngo5 gaan1 fong2 hai2 bin1 dou6',morph:['我間房 = my room','喺邊度 = where is']}
      ],
      blocks:['<code>預訂</code> = reservation','<code>房</code> = room','<code>鎖匙</code> = key'] },
    { id:16, title:'Ask for help', focus:'我唔明 · 講慢啲 · 英文',
      steps:[
        {t:'say',text:'When Cantonese is too fast: <span class="inline-tr">講慢啲，唔該</span> — speak slower, please.',tr:'講慢啲，唔該'},
        {t:'words',items:[{tr:'講慢啲',pr:'gong2 maan6 di1',en:'speak slower'},{tr:'再講一次',pr:'zoi3 gong2 jat1 ci3',en:'say it again'},{tr:'英文',pr:'jing1 man2',en:'English'},{tr:'可唔可以幫我',pr:'ho2 m4 ho2 ji5 bong1 ngo5',en:'can you help me?'}]},
        {t:'chal',en:'I don\'t understand',tr:'我唔明',pr:'ngo5 m4 ming4',morph:['我 = I','唔 = not','明 = understand']},
        {t:'chal',en:'Slower, please',tr:'講慢啲，唔該',pr:'gong2 maan6 di1, m4 goi1',morph:['講慢啲 = speak slower','唔該 = please']},
        {t:'chal',en:'Can you help me?',tr:'可唔可以幫我？',pr:'ho2 m4 ho2 ji5 bong1 ngo5',morph:['可唔可以 = can you','幫我 = help me']},
        {t:'chal',en:'Do you speak English?',tr:'你識唔識講英文？',pr:'nei5 sik1 m4 sik1 gong2 jing1 man2',morph:['你識唔識講 = do you know how to speak','英文 = English']}
      ],
      blocks:['<code>講慢啲</code> = speak slower','<code>你識唔識講英文？</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'cafe', title:'🥢 At a cha chaan teng', emoji:'🥢', turns:[
      {who:'You',tr:'唔該，一杯凍奶茶。',pr:'m4 goi1, jat1 bui1 dung3 naai5 caa4',en:'Excuse me, an iced milk tea, please.'},
      {who:'Waiter',tr:'好，即刻嚟。要唔要菠蘿油？',pr:'hou2, zik1 hak1 lai4. jiu3 m4 jiu3 bo1 lo4 jau4',en:'Sure, coming right up. Would you like a pineapple bun with butter?'},
      {who:'You',tr:'好呀，一個菠蘿油。',pr:'hou2 aa3, jat1 go3 bo1 lo4 jau4',en:'Yes, one pineapple bun with butter.'},
      {who:'You',tr:'買單，唔該。',pr:'maai5 daan1, m4 goi1',en:'The bill, please.'},
      {who:'Waiter',tr:'多謝晒！一共廿四蚊。',pr:'do1 ze6 saai3! jat1 gung6 jaa6 sei3 man1',en:'Thanks! That\'s twenty-four dollars.'}
    ]},
    { id:'mtr', title:'🚇 On the MTR', emoji:'🚇', turns:[
      {who:'You',tr:'唔該，我哋去旺角點去呀？',pr:'m4 goi1, ngo5 dei6 heoi3 wong6 gok3 dim2 heoi3 aa3',en:'Excuse me, how do we get to Mong Kok?'},
      {who:'Staff',tr:'你坐荃灣綫，喺旺角站落車就得。',pr:'nei5 co5 cyun4 waan1 sin3, hai2 wong6 gok3 zaam6 lok6 ce1 zau6 dak1',en:'Take the Tsuen Wan line and get off at Mong Kok station.'},
      {who:'You',tr:'幾多錢一張飛？',pr:'gei2 do1 cin2 jat1 zoeng1 fei1',en:'How much is one ticket?'},
      {who:'Staff',tr:'八蚊。下一班車三分鐘之後嚟。',pr:'baat3 man1. haa6 jat1 baan1 ce1 saam1 fan1 zung1 zi1 hau6 lai4',en:'Eight dollars. The next train comes in three minutes.'}
    ]},
    { id:'restaurant', title:'🍚 At a restaurant', emoji:'🍚', turns:[
      {who:'Waiter',tr:'唔該，幾位呀？',pr:'m4 goi1, gei2 wai2 aa3',en:'Excuse me, how many people?'},
      {who:'You',tr:'兩位，唔該。',pr:'loeng5 wai2, m4 goi1',en:'Two people, please.'},
      {who:'Waiter',tr:'呢度係餐牌。',pr:'ni1 dou6 hai6 caan1 paai4',en:'Here\'s the menu.'},
      {who:'You',tr:'唔該，我想要一碟炒飯同埋一杯茶。',pr:'m4 goi1, ngo5 soeng2 jiu3 jat1 dip6 caau2 faan6 tung4 maai4 jat1 bui1 caa4',en:'Excuse me, I\'d like a plate of fried rice and a cup of tea.'},
      {who:'Waiter',tr:'好，即刻到你。',pr:'hou2, zik1 hak1 dou3 nei5',en:'Sure, right away.'}
    ]},
    { id:'market', title:'🥬 At a market', emoji:'🥬', turns:[
      {who:'You',tr:'呢個幾多錢呀？',pr:'ni1 go3 gei2 do1 cin2 aa3',en:'How much is this?'},
      {who:'Seller',tr:'三十蚊一斤。',pr:'saam1 sap6 man1 jat1 gan1',en:'Thirty dollars a catty.'},
      {who:'You',tr:'太貴啦，平啲得唔得？',pr:'taai3 gwai3 laa3, peng4 di1 dak1 m4 dak1',en:'Too expensive, can you go lower?'},
      {who:'Seller',tr:'廿五蚊，最後價。',pr:'jaa6 ng5 man1, zeoi3 hau6 gaa3',en:'Twenty-five, final price.'},
      {who:'You',tr:'好，我要呢個。',pr:'hou2, ngo5 jiu3 ni1 go3',en:'OK, I\'ll take this.'}
    ]}
  ],
  pocket: [
    {tr:'你好',pr:'nei5 hou2',en:'Hello',c:'Greetings'},
    {tr:'早晨',pr:'zou2 san4',en:'Good morning',c:'Greetings'},
    {tr:'再見',pr:'zoi3 gin3',en:'Goodbye',c:'Greetings'},
    {tr:'唔該',pr:'m4 goi1',en:'Please / excuse me / thanks',c:'Courtesy'},
    {tr:'多謝',pr:'do1 ze6',en:'Thank you',c:'Courtesy'},
    {tr:'對唔住',pr:'deoi3 m4 zyu6',en:'Sorry',c:'Courtesy'},
    {tr:'係',pr:'hai6',en:'Yes',c:'Courtesy'},
    {tr:'唔該晒',pr:'m4 goi1 saai3',en:'Thanks a lot',c:'Courtesy'},
    {tr:'一',pr:'jat1',en:'1',c:'Numbers'},
    {tr:'二',pr:'ji6',en:'2',c:'Numbers'},
    {tr:'三',pr:'saam1',en:'3',c:'Numbers'},
    {tr:'四',pr:'sei3',en:'4',c:'Numbers'},
    {tr:'五',pr:'ng5',en:'5',c:'Numbers'},
    {tr:'六',pr:'luk6',en:'6',c:'Numbers'},
    {tr:'十',pr:'sap6',en:'10',c:'Numbers'},
    {tr:'水',pr:'seoi2',en:'water',c:'Food & Drink'},
    {tr:'飯',pr:'faan6',en:'rice',c:'Food & Drink'},
    {tr:'茶',pr:'caa4',en:'tea',c:'Food & Drink'},
    {tr:'咖啡',pr:'gaa3 fe1',en:'coffee',c:'Food & Drink'},
    {tr:'奶茶',pr:'naai5 caa4',en:'milk tea',c:'Food & Drink'},
    {tr:'飲',pr:'jam2',en:'to drink',c:'Food & Drink'},
    {tr:'邊度',pr:'bin1 dou6',en:'Where?',c:'Directions'},
    {tr:'左邊',pr:'zo2 bin1',en:'to the left',c:'Directions'},
    {tr:'右邊',pr:'jau6 bin1',en:'to the right',c:'Directions'},
    {tr:'直行',pr:'zik6 haang4',en:'go straight',c:'Directions'},
    {tr:'地鐵站',pr:'dei6 tit3 zaam6',en:'MTR station',c:'Directions'},
    {tr:'幾多錢',pr:'gei2 do1 cin2',en:'How much?',c:'Shopping'},
    {tr:'好貴',pr:'hou2 gwai3',en:'too expensive',c:'Shopping'},
    {tr:'我要呢個',pr:'ngo5 jiu3 ni1 go3',en:'I\'ll take this',c:'Shopping'},
    {tr:'救命呀',pr:'gau3 meng6 aa3',en:'Help!',c:'Health & Emergency'},
    {tr:'醫院',pr:'ji1 jyun2',en:'hospital',c:'Health & Emergency'},
    {tr:'幫我',pr:'bong1 ngo5',en:'help me',c:'Health & Emergency'},
    {tr:'我唔明',pr:'ngo5 m4 ming4',en:'I don\'t understand',c:'Health & Emergency'},
    {tr:'今日',pr:'gam1 jat6',en:'today',c:'Time & Weather'},
    {tr:'聽日',pr:'ting1 jat6',en:'tomorrow',c:'Time & Weather'},
    {tr:'落雨',pr:'lok6 jyu5',en:'it\'s raining',c:'Time & Weather'},
    {tr:'機場',pr:'gei1 coeng4',en:'airport',c:'Travel'},
    {tr:'的士',pr:'dik1 si2',en:'taxi',c:'Travel'},
    {tr:'酒店',pr:'zau2 dim3',en:'hotel',c:'Travel'},
    {tr:'响呢度停',pr:'haang2 ni1 dou6 ting4',en:'stop here',c:'Travel'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food & Drink','Directions','Shopping','Health & Emergency','Time & Weather','Travel'],
  culture: [
    {icon:'🏙️',title:'The 24-hour city',body:'Hong Kong is dense, vertical and always in motion: skyscrapers, street markets and the harbour. Locals move fast and eat late — dinner at 8pm is normal.'},
    {icon:'🥟',title:'Dim sum is a ritual',body:'Yum cha literally means "drink tea". You share small steamed or fried plates — har gow (shrimp dumplings), siu mai, char siu bao — around a big table with endless tea. The trolleys keep coming.'},
    {icon:'🚇',title:'The MTR is the way',body:'Hong Kong\'s metro is clean, fast and brilliantly signposted in English. With an Octopus card in hand it\'s the easiest city on earth to get around — stations even tell you which exit to take.'},
    {icon:'🍵',title:'Tea culture & milk tea',body:'Hong Kong-style milk tea (奶茶) is bold and silky, brewed with a sock-like cloth filter. Tea water comes with almost every meal, and tea is the heart of yum cha — hence "drink tea".'},
    {icon:'🎵',title:'The six tones',body:'Cantonese has six tones: the same syllable pitched differently becomes a completely different word. Tones feel natural to natives, so they\'ll happily slow down while you find the right pitch.'},
    {icon:'💬',title:'A living language',body:'Cantonese is the everyday language of Hong Kong and the Guangdong region, distinct from Mandarin. Locals love it when visitors try — even a perfect 你好 breaks the ice.'}
  ],
  sounds: [
    {l:'tone 1',say:'high and level, like a held note',ex:'詩 si1 = poem',voice:'si1'},
    {l:'tone 2',say:'rises from the middle, like a question',ex:'史 si2 = history',voice:'si2'},
    {l:'tone 3',say:'mid, level and even',ex:'試 si3 = to try',voice:'si3'},
    {l:'tone 4',say:'falls from low, a grumbling fall',ex:'時 si4 = time',voice:'si4'},
    {l:'tone 5',say:'rises from low, a slow rise',ex:'市 si5 = market',voice:'si5'},
    {l:'tone 6',say:'low, level and flat',ex:'是 si6 = yes',voice:'si6'},
    {l:'ng',say:'the nasal ng at the start, like "sing"',ex:'五 ng5 = five',voice:'ng5'},
    {l:'p · t · k',say:'aspirated p/t/k like English "pin", plus the stopped finals -p/-t/-k said short and clipped',ex:'茶 caa4 = tea · 八 baat3 = eight · 六 luk6 = six',voice:'caa4'}
  ],
  resources: [
    {icon:'🗣️',t:'CantoneseClass101',d:'Structured beginner lessons with free audio tracks and short dialogues.',q:'CantoneseClass101'},
    {icon:'🚇',t:'The Canton Bee',d:'Everyday Cantonese phrases and Hong Kong slang from a local speaker.',q:'The Canton Bee Cantonese'},
    {icon:'🔍',t:'Learn Cantonese in Hong Kong',d:'Street interviews and real-life conversation, ideal for hearing natural speed.',q:'Learn Cantonese Hong Kong street interviews'},
    {icon:'🎧',t:'Slow Cantonese podcasts',d:'Easy listening for learners — perfect for a walk or commute.',q:'slow Cantonese podcast for learners'},
    {icon:'💬',t:'Easy Cantonese',d:'Street interviews with subtitles — natural Cantonese in context.',q:'Easy Cantonese street interviews'}
  ]
};
