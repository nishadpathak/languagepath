/* LanguagePath course + phrase data.
   This file is loaded before index.html's main script; every top-level const here is
   a shared global. Keeping the (large, mostly-static) language content out of index.html
   keeps the app shell small and easier to maintain. */

const COURSES={
 mandarin:{ name:"Mandarin Chinese", flag:"🇨🇳", tts:"zh-CN",
  blurb:"Survival Mandarin, built the reason-it-out way. Characters carry the audio; the pinyin shows you the sound. From Lesson 31 the word machine kicks in: you start deriving words nobody taught you.",
  note:"Mandarin has <b>4 tones</b> — pitch changes meaning (mā = mother, mà = scold). Don't memorize rules: tap 🔊 and copy the melody, your ear learns it fast. Pinyin under each phrase is just the sound; characters are what the voice reads.",
  resources:[
   {icon:"🗣️",t:"Easy Mandarin (Easy Languages)",d:"Street interviews with subtitles — real spoken Mandarin.",q:"Easy Mandarin Easy Languages"},
   {icon:"🌱",t:"Mandarin Corner",d:"Graded comprehensible-input videos, slow building to natural.",q:"Mandarin Corner"},
   {icon:"☕",t:"Comprehensible Chinese",d:"Beginner stories told visually — understand from day one.",q:"Comprehensible Chinese"},
   {icon:"📚",t:"ChineseClass101",d:"Structured lessons, core vocab and pronunciation.",q:"ChineseClass101"},
   {icon:"🎵",t:"Pinyin & tones practice",d:"Drill the four tones with audio until they stick.",q:"Mandarin pinyin tones for beginners"}
  ],
  lessons:[
   {id:1,title:"Greetings",focus:"你好 · 谢谢 · 你好吗",steps:[
    {t:"say",text:"Mandarin starts tiny and logical. Tap the audio and mimic the tune — that's the whole method here."},
    {t:"words",items:[{tr:"你好",pr:"nǐ hǎo · nee-HOW",en:"hello"},{tr:"谢谢",pr:"xièxie · SYEH-syeh",en:"thanks"},{tr:"再见",pr:"zàijiàn · dzye-JYEN",en:"goodbye"}]},
    {t:"chal",en:"Hello",tr:"你好",pr:"nǐ hǎo (nee-HOW)",morph:["你 nǐ = you","好 hǎo = good"],note:"Literally 'you good'."},
    {t:"chal",en:"Thank you",tr:"谢谢",pr:"xièxie (SYEH-syeh)",morph:["谢谢 = thanks"]},
    {t:"say",text:"Add 吗 <b>ma</b> to the end to make a yes/no question. 你好吗？= 'you good?' = how are you?"},
    {t:"chal",en:"How are you?",tr:"你好吗？",pr:"nǐ hǎo ma",morph:["你好 = hello","吗 ma = ?"]},
    {t:"say",text:"'I' is 我 <b>wǒ</b>, 'very' is 很 <b>hěn</b>. So 'I'm fine' = 我很好."},
    {t:"chal",en:"I'm fine",tr:"我很好",pr:"wǒ hěn hǎo",morph:["我 wǒ = I","很 hěn = very","好 hǎo = good"]},
    {t:"chal",en:"Goodbye",tr:"再见",pr:"zàijiàn (dzye-JYEN)",morph:["再见 = see you again"]}
   ],blocks:["你好 = hello","谢谢 = thanks","吗 ma = turns it into a question","我 wǒ = I · 很 hěn = very · 好 hǎo = good"]},
   {id:2,title:"\"I want\" 我要",focus:"我要 · 咖啡 · 多少钱",steps:[
    {t:"say",text:"'I want' is 我要 <b>wǒ yào</b>. And coffee is 咖啡 <b>kāfēi</b> — say it, it's a loanword you already know!"},
    {t:"chal",en:"I want coffee",tr:"我要咖啡",pr:"wǒ yào kāfēi",morph:["我要 = I want","咖啡 kāfēi = coffee"],link:"咖啡 kāfēi ≈ coffee"},
    {t:"say",text:"Tea is 茶 <b>chá</b> — basically 'chai'! Water is 水 <b>shuǐ</b>."},
    {t:"chal",en:"I want tea",tr:"我要茶",pr:"wǒ yào chá",morph:["我要 = I want","茶 chá = tea"],link:"茶 chá ≈ chai!"},
    {t:"chal",en:"I want water",tr:"我要水",pr:"wǒ yào shuǐ",morph:["我要 = I want","水 shuǐ = water"]},
    {t:"say",text:"'This one' is 这个 <b>zhège</b> — point and say it."},
    {t:"chal",en:"I want this",tr:"我要这个",pr:"wǒ yào zhège",morph:["我要 = I want","这个 zhège = this one"]},
    {t:"say",text:"To ask the price: 多少钱 <b>duōshao qián</b> = 'how much money?'"},
    {t:"chal",en:"How much?",tr:"多少钱？",pr:"duōshao qián (dwor-shao chyen)",morph:["多少 = how much","钱 qián = money"]},
    {t:"say",text:"'Not' is 不 <b>bù</b>, so 'I don't want' = 我不要."},
    {t:"chal",en:"I don't want",tr:"我不要",pr:"wǒ bú yào",morph:["不 bù = not","要 yào = want"]}
   ],blocks:["我要 = I want · 我不要 = I don't want","咖啡 coffee · 茶 tea · 水 water","这个 = this one","多少钱？ = how much?"]},
   {id:3,title:"Numbers & prices",focus:"一 to 十 · 块",steps:[
    {t:"words",items:[{tr:"一",pr:"yī",en:"1"},{tr:"二",pr:"èr",en:"2"},{tr:"三",pr:"sān",en:"3"},{tr:"四",pr:"sì",en:"4"},{tr:"五",pr:"wǔ",en:"5"}]},
    {t:"words",items:[{tr:"六",pr:"liù",en:"6"},{tr:"七",pr:"qī",en:"7"},{tr:"八",pr:"bā",en:"8"},{tr:"九",pr:"jiǔ",en:"9"},{tr:"十",pr:"shí",en:"10"}]},
    {t:"say",text:"Beautifully logical: 11 = 十一 (ten-one), 12 = 十二 (ten-two). And 20 = 二十 (two-ten)."},
    {t:"chal",en:"12",tr:"十二",pr:"shí'èr",morph:["十 ten","二 two"]},
    {t:"chal",en:"20",tr:"二十",pr:"èrshí",morph:["二 two","十 ten"]},
    {t:"chal",en:"50",tr:"五十",pr:"wǔshí",morph:["五 five","十 ten"]},
    {t:"say",text:"100 is 百 <b>bǎi</b>. In speech, money is counted in 块 <b>kuài</b>."},
    {t:"chal",en:"How much is this?",tr:"这个多少钱？",pr:"zhège duōshao qián",morph:["这个 = this","多少钱 = how much"]}
   ],blocks:["一二三四五六七八九十 = 1–10","teens = 十+digit · tens = digit+十","百 bǎi = 100 · 块 kuài = (money unit)"]},
   {id:4,title:"Food",focus:"菜单 · 我不吃肉 · 买单",steps:[
    {t:"words",items:[{tr:"菜单",pr:"càidān",en:"menu"},{tr:"米饭",pr:"mǐfàn",en:"rice"},{tr:"鸡肉",pr:"jīròu",en:"chicken"}]},
    {t:"chal",en:"I want the menu",tr:"我要菜单",pr:"wǒ yào càidān",morph:["我要 = I want","菜单 = menu"]},
    {t:"say",text:"'Eat' is 吃 <b>chī</b>, 'meat' is 肉 <b>ròu</b>. So 'I don't eat meat' = 我不吃肉."},
    {t:"chal",en:"I don't eat meat",tr:"我不吃肉",pr:"wǒ bù chī ròu",morph:["不 bù = not","吃 chī = eat","肉 ròu = meat"]},
    {t:"say",text:"'Delicious' is 好吃 <b>hǎochī</b> — literally 'good-to-eat'. Add 很 hěn for 'very'."},
    {t:"chal",en:"Very delicious",tr:"很好吃",pr:"hěn hǎochī",morph:["很 hěn = very","好吃 = delicious"]},
    {t:"say",text:"To get the bill, just say 买单 <b>mǎidān</b> ('check, please')."},
    {t:"chal",en:"The bill, please",tr:"买单",pr:"mǎidān",morph:["买 = buy / settle","单 = the slip / bill"]}
   ],blocks:["我要菜单 = I want the menu","我不吃肉 = I don't eat meat","很好吃 = very delicious","买单 = the bill"]},
   {id:5,title:"Getting around",focus:"在哪里 · 左/右 · 去",steps:[
    {t:"say",text:"'Where?' is 在哪里 <b>zài nǎlǐ</b>. 'Toilet' is 厕所 <b>cèsuǒ</b>."},
    {t:"chal",en:"Where is the toilet?",tr:"厕所在哪里？",pr:"cèsuǒ zài nǎlǐ",morph:["厕所 = toilet","在哪里 = where"]},
    {t:"words",items:[{tr:"左",pr:"zuǒ",en:"left"},{tr:"右",pr:"yòu",en:"right"},{tr:"直走",pr:"zhízǒu",en:"go straight"}]},
    {t:"say",text:"'Go' is 去 <b>qù</b>, 'hotel' is 酒店 <b>jiǔdiàn</b>. So 'I want to go to the hotel' = 我要去酒店."},
    {t:"chal",en:"I want to go to the hotel",tr:"我要去酒店",pr:"wǒ yào qù jiǔdiàn",morph:["我要 = I want","去 qù = go","酒店 = hotel"]},
    {t:"chal",en:"Where is the airport?",tr:"机场在哪里？",pr:"jīchǎng zài nǎlǐ",morph:["机场 = airport","在哪里 = where"]},
    {t:"chal",en:"I want a taxi",tr:"我要打车",pr:"wǒ yào dǎchē",morph:["我要 = I want","打车 = hail a taxi"]},
    {t:"say",text:"If you're lost: 'I don't understand' = 我不懂 <b>wǒ bù dǒng</b>."},
    {t:"chal",en:"I don't understand",tr:"我不懂",pr:"wǒ bù dǒng",morph:["不 bù = not","懂 dǒng = understand"]}
   ],blocks:["在哪里？ = where?","左 left · 右 right · 直走 straight","去 qù = go · 酒店 hotel · 机场 airport · 打车 taxi","我不懂 = I don't understand"]},
   {id:6,title:"\"I have / is there\" 有",focus:"有 · 没有 · …吗",steps:[
    {t:"say",text:"One verb covers 'to have' and 'there is': 有 <b>yǒu</b>. Its negative is 没有 <b>méiyǒu</b> (don't have / there isn't)."},
    {t:"words",items:[{tr:"有",pr:"yǒu",en:"have / there is"},{tr:"没有",pr:"méiyǒu",en:"don't have / there isn't"}]},
    {t:"chal",en:"I have a question (问题)",tr:"我有问题",pr:"wǒ yǒu wèntí",morph:["我 = I","有 = have","问题 wèntí = question"]},
    {t:"say",text:"Add 吗 <b>ma</b> to ask. 'Is there tea?' = 有茶吗？"},
    {t:"chal",en:"Is there tea?",tr:"有茶吗？",pr:"yǒu chá ma",morph:["有 = there is","茶 = tea","吗 = ?"]},
    {t:"chal",en:"Is there wifi?",tr:"有wifi吗？",pr:"yǒu wifi ma",morph:["有 = is there","吗 = ?"]},
    {t:"chal",en:"I don't have money (钱)",tr:"我没有钱",pr:"wǒ méiyǒu qián",morph:["没有 = don't have","钱 qián = money"]}
   ],blocks:["有 yǒu = have / there is","没有 méiyǒu = don't have / there isn't","…有…吗？ = is there…?"]},
   {id:7,title:"Talking about the past 了",focus:"了 · 过 · 没",steps:[
    {t:"say",text:"Good news: Mandarin verbs <b>never conjugate</b>. To mark a finished action, just add 了 <b>le</b> after the verb. 我去 (I go) → 我去了 (I went)."},
    {t:"chal",en:"I ate (吃)",tr:"我吃了",pr:"wǒ chī le",morph:["我 = I","吃 chī = eat","了 le = (completed)"]},
    {t:"chal",en:"I went to the hotel",tr:"我去了酒店",pr:"wǒ qù le jiǔdiàn",morph:["去 qù = go","了 = (completed)","酒店 = hotel"]},
    {t:"say",text:"A classic greeting literally asks 'have you eaten?' — 你吃了吗？"},
    {t:"chal",en:"Have you eaten?",tr:"你吃了吗？",pr:"nǐ chī le ma",morph:["你 = you","吃了 = ate","吗 = ?"]},
    {t:"say",text:"For the negative past, use 没 <b>méi</b> (not 不): 我没去 = I didn't go."},
    {t:"chal",en:"I didn't go",tr:"我没去",pr:"wǒ méi qù",morph:["没 méi = didn't","去 = go"]}
   ],blocks:["了 le = completed action","没 méi = didn't (negative past)","你吃了吗？ = have you eaten? (a greeting)"]},
   {id:8,title:"Mine & yours 的",focus:"我的 · 你的",steps:[
    {t:"say",text:"'My / your / his' is simply the pronoun + 的 <b>de</b>. 我的 = my, 你的 = your, 他的 = his."},
    {t:"chal",en:"mine (my)",tr:"我的",pr:"wǒ de",morph:["我 = I","的 de = 's"]},
    {t:"chal",en:"This is my bag (包)",tr:"这是我的包",pr:"zhè shì wǒ de bāo",morph:["这是 = this is","我的 = my","包 bāo = bag"]},
    {t:"chal",en:"my friend (朋友)",tr:"我的朋友",pr:"wǒ de péngyou",morph:["我的 = my","朋友 = friend"]},
    {t:"say",text:"With family the 的 is often dropped: 我妈妈 = my mum."},
    {t:"chal",en:"What's your name?",tr:"你叫什么名字？",pr:"nǐ jiào shénme míngzi",morph:["你叫 = you are called","什么 = what","名字 = name"]}
   ],blocks:["我的 = my · 你的 = your · 他的 = his","pronoun + 的 de","family often drops 的: 我妈妈 = my mum"]},
   {id:9,title:"Time & when",focus:"今天 · 现在 · 几点",steps:[
    {t:"say",text:"Time words: 今天 <b>jīntiān</b> (today), 明天 <b>míngtiān</b> (tomorrow), 昨天 <b>zuótiān</b> (yesterday), 现在 <b>xiànzài</b> (now)."},
    {t:"words",items:[{tr:"今天",pr:"jīntiān",en:"today"},{tr:"明天",pr:"míngtiān",en:"tomorrow"},{tr:"现在",pr:"xiànzài",en:"now"}]},
    {t:"say",text:"Big rule: in Mandarin the <b>time word comes before the verb</b>. 'I'll go tomorrow' = 我明天去 (I / tomorrow / go)."},
    {t:"chal",en:"I'll go tomorrow",tr:"我明天去",pr:"wǒ míngtiān qù",morph:["我 = I","明天 = tomorrow","去 = go"]},
    {t:"say",text:"'What time?' is 几点 <b>jǐ diǎn</b> (点 = o'clock)."},
    {t:"chal",en:"What time is it now?",tr:"现在几点？",pr:"xiànzài jǐ diǎn",morph:["现在 = now","几点 = what o'clock"]},
    {t:"chal",en:"at 8 o'clock",tr:"八点",pr:"bā diǎn",morph:["八 = 8","点 = o'clock"]},
    {t:"chal",en:"I'll eat now",tr:"我现在吃",pr:"wǒ xiànzài chī",morph:["我 = I","现在 = now","吃 = eat"]}
   ],blocks:["今天 today · 明天 tomorrow · 现在 now","time word goes BEFORE the verb","几点？ = what time? · 点 = o'clock"]},
   {id:10,title:"The question words",focus:"什么 · 哪里 · 谁 · 为什么",steps:[
    {t:"say",text:"Mandarin keeps normal word order and just drops in a question word — no reshuffling. 什么 what, 哪里 where, 谁 who."},
    {t:"words",items:[{tr:"什么",pr:"shénme",en:"what"},{tr:"哪里",pr:"nǎlǐ",en:"where"},{tr:"谁",pr:"shéi",en:"who"}]},
    {t:"chal",en:"What is this?",tr:"这是什么？",pr:"zhè shì shénme",morph:["这是 = this is","什么 = what"]},
    {t:"chal",en:"Where are you going?",tr:"你去哪里？",pr:"nǐ qù nǎlǐ",morph:["你 = you","去 = go","哪里 = where"]},
    {t:"chal",en:"Who is he?",tr:"他是谁？",pr:"tā shì shéi",morph:["他是 = he is","谁 = who"]},
    {t:"say",text:"'Why' is 为什么 <b>wèishénme</b>; 'how' is 怎么 <b>zěnme</b>. 'How do you say…?' = …怎么说？"},
    {t:"chal",en:"How do you say this?",tr:"这个怎么说？",pr:"zhège zěnme shuō",morph:["这个 = this","怎么 = how","说 = say"]}
   ],blocks:["什么 what · 哪里 where · 谁 who","为什么 why · 怎么 how","word order stays the same — just swap in the question word"]},
   {id:11,title:"Where things are — 在",focus:"在 · 这里 · 附近",steps:[
    {t:"say",text:"在 <b>zài</b> = 'at / in / located'. 我在酒店 = I'm at the hotel."},
    {t:"chal",en:"I'm at the hotel",tr:"我在酒店",pr:"wǒ zài jiǔdiàn",morph:["我 = I","在 = at","酒店 = hotel"]},
    {t:"words",items:[{tr:"这里",pr:"zhèlǐ",en:"here"},{tr:"那里",pr:"nàlǐ",en:"there"},{tr:"附近",pr:"fùjìn",en:"nearby"}]},
    {t:"chal",en:"The toilet is here",tr:"厕所在这里",pr:"cèsuǒ zài zhèlǐ",morph:["厕所 = toilet","在 = is at","这里 = here"]},
    {t:"say",text:"Combine with 有 (there is) for 'is there … nearby?'. 银行 = bank."},
    {t:"chal",en:"Is there a bank nearby?",tr:"附近有银行吗？",pr:"fùjìn yǒu yínháng ma",morph:["附近 = nearby","有 = there is","银行 = bank","吗 = ?"]},
    {t:"chal",en:"Where is the station? (车站)",tr:"车站在哪里？",pr:"chēzhàn zài nǎlǐ",morph:["车站 = station","在哪里 = where"]}
   ],blocks:["在 zài = at / in / located","这里 here · 那里 there · 附近 nearby","X 在哪里？ = where is X?"]},
   {id:12,title:"Want, can & may",focus:"想 · 会 · 可以 · 需要",steps:[
    {t:"say",text:"Four handy helper-verbs: 想 <b>xiǎng</b> (would like to), 会 <b>huì</b> (can — a learned skill), 可以 <b>kěyǐ</b> (may — permission), 需要 <b>xūyào</b> (need)."},
    {t:"chal",en:"I'd like to go",tr:"我想去",pr:"wǒ xiǎng qù",morph:["我 = I","想 = would like to","去 = go"]},
    {t:"chal",en:"I'd like to eat",tr:"我想吃",pr:"wǒ xiǎng chī",morph:["想 = would like to","吃 = eat"]},
    {t:"say",text:"会 is for skills: 我会说中文 = I can speak Chinese."},
    {t:"chal",en:"I can speak a little Chinese",tr:"我会说一点中文",pr:"wǒ huì shuō yìdiǎn zhōngwén",morph:["会 = can (skill)","说 = speak","一点 = a little","中文 = Chinese"]},
    {t:"say",text:"可以 asks permission — end with 吗？"},
    {t:"chal",en:"May I sit here?",tr:"我可以坐这里吗？",pr:"wǒ kěyǐ zuò zhèlǐ ma",morph:["可以 = may","坐 = sit","这里 = here","吗 = ?"]}
   ],blocks:["想 = would like to · 会 = can (skill)","可以 = may (permission) · 需要 = need","我会说中文 = I can speak Chinese"]},
   {id:13,title:"Shopping & bargaining",focus:"买 · 太贵了 · 便宜一点",steps:[
    {t:"say",text:"'To buy' is 买 <b>mǎi</b>. Combine with 想: 我想买这个 = I'd like to buy this."},
    {t:"chal",en:"I'd like to buy this",tr:"我想买这个",pr:"wǒ xiǎng mǎi zhège",morph:["想买 = would like to buy","这个 = this"]},
    {t:"say",text:"The bargaining phrases: 太贵了 <b>tài guì le</b> (too expensive!), 便宜一点 <b>piányi yìdiǎn</b> (a bit cheaper)."},
    {t:"chal",en:"Too expensive!",tr:"太贵了！",pr:"tài guì le",morph:["太…了 = too …","贵 = expensive"]},
    {t:"chal",en:"A bit cheaper?",tr:"便宜一点？",pr:"piányi yìdiǎn",morph:["便宜 = cheap","一点 = a bit"]},
    {t:"say",text:"'In total' is 一共 <b>yígòng</b>."},
    {t:"chal",en:"How much in total?",tr:"一共多少钱？",pr:"yígòng duōshao qián",morph:["一共 = in total","多少钱 = how much"]},
    {t:"chal",en:"OK, I'll take it",tr:"好，我要了",pr:"hǎo, wǒ yào le",morph:["好 = OK","我要了 = I'll take it"]}
   ],blocks:["买 = buy · 想买 = would like to buy","太贵了 = too expensive · 便宜一点 = a bit cheaper","一共多少钱？ = how much in total?"]},
   {id:14,title:"Help & emergencies",focus:"帮忙 · 医院 · 疼 · 报警",steps:[
    {t:"say",text:"'To help' is 帮 <b>bāng</b> / 帮忙 bāngmáng. 'Can you help me?' = 你可以帮我吗？"},
    {t:"chal",en:"Can you help me?",tr:"你可以帮我吗？",pr:"nǐ kěyǐ bāng wǒ ma",morph:["可以 = can","帮我 = help me","吗 = ?"]},
    {t:"say",text:"医院 <b>yīyuàn</b> hospital, 药店 <b>yàodiàn</b> pharmacy, 生病 <b>shēngbìng</b> to be sick, 疼 <b>téng</b> to hurt."},
    {t:"chal",en:"I'm sick",tr:"我生病了",pr:"wǒ shēngbìng le",morph:["生病 = get sick","了 = (change of state)"]},
    {t:"chal",en:"Where is the hospital?",tr:"医院在哪里？",pr:"yīyuàn zài nǎlǐ",morph:["医院 = hospital","在哪里 = where"]},
    {t:"chal",en:"My stomach hurts (肚子)",tr:"我肚子疼",pr:"wǒ dùzi téng",morph:["肚子 = stomach","疼 = hurts"]},
    {t:"say",text:"'Call the police' is 报警 <b>bàojǐng</b>; the emergency number is 110."},
    {t:"chal",en:"Call the police!",tr:"报警！",pr:"bàojǐng",morph:["报 = report","警 = police"]}
   ],blocks:["帮我 = help me · 你可以帮我吗？","医院 hospital · 药店 pharmacy · 疼 hurts","我生病了 = I'm sick · 报警 = call the police"]},
   {id:15,title:"Measure words",focus:"个 · 杯 · 瓶 · 张 · 本",steps:[
    {t:"say",text:"Chinese puts a 'measure word' between a number and a noun. The all-purpose one is 个 <b>gè</b>: 一个人 = one person."},
    {t:"words",items:[{tr:"个",pr:"gè",en:"(general)"},{tr:"杯",pr:"bēi",en:"(cups)"},{tr:"瓶",pr:"píng",en:"(bottles)"},{tr:"张",pr:"zhāng",en:"(flat things)"},{tr:"本",pr:"běn",en:"(books)"}]},
    {t:"chal",en:"three people",tr:"三个人",pr:"sān gè rén",morph:["三 = 3","个 = (measure)","人 = person"]},
    {t:"say",text:"Important: for 'two + measure word' use 两 <b>liǎng</b>, not 二. 'Two cups of coffee' = 两杯咖啡."},
    {t:"chal",en:"two cups of coffee",tr:"两杯咖啡",pr:"liǎng bēi kāfēi",morph:["两 = two (before measure)","杯 = cup","咖啡 = coffee"]},
    {t:"chal",en:"a bottle of water",tr:"一瓶水",pr:"yì píng shuǐ",morph:["一 = one","瓶 = bottle","水 = water"]},
    {t:"chal",en:"two tickets",tr:"两张票",pr:"liǎng zhāng piào",morph:["两 = two","张 = (flat)","票 = ticket"]}
   ],blocks:["number + measure word + noun","个 general · 杯 cups · 瓶 bottles · 张 flat · 本 books","use 两 (not 二) before a measure word"]},
   {id:16,title:"Joining ideas",focus:"和 · 也 · 但是 · 很/太/非常",steps:[
    {t:"say",text:"Connectors unlock longer sentences: 和 <b>hé</b> (and, for nouns), 也 <b>yě</b> (also), 但是 <b>dànshì</b> (but)."},
    {t:"chal",en:"coffee and tea",tr:"咖啡和茶",pr:"kāfēi hé chá",morph:["咖啡 = coffee","和 = and","茶 = tea"]},
    {t:"chal",en:"I also want this",tr:"我也要这个",pr:"wǒ yě yào zhège",morph:["我 = I","也 = also","要 = want","这个 = this"]},
    {t:"chal",en:"I want tea, but I don't want coffee",tr:"我要茶，但是我不要咖啡",pr:"wǒ yào chá, dànshì wǒ bú yào kāfēi",morph:["要茶 = want tea","但是 = but","不要 = don't want"]},
    {t:"say",text:"Degree words: 很 <b>hěn</b> (very), 太 <b>tài</b> (too), 非常 <b>fēicháng</b> (extremely)."},
    {t:"chal",en:"very good",tr:"很好",pr:"hěn hǎo",morph:["很 = very","好 = good"]},
    {t:"chal",en:"extremely delicious",tr:"非常好吃",pr:"fēicháng hǎochī",morph:["非常 = extremely","好吃 = delicious"]}
   ],blocks:["和 and · 也 also · 但是 but","因为 because · 所以 so","很 very · 太 too · 非常 extremely"]},
   {id:17,title:"Family & people",focus:"家人 · 妈妈 · 孩子",steps:[
    {t:"say",text:"家人 <b>jiārén</b> = family. 妈妈 <b>māma</b> mum, 爸爸 <b>bàba</b> dad, 孩子 <b>háizi</b> child, 朋友 <b>péngyou</b> friend."},
    {t:"words",items:[{tr:"妈妈",pr:"māma",en:"mum"},{tr:"爸爸",pr:"bàba",en:"dad"},{tr:"孩子",pr:"háizi",en:"child"},{tr:"朋友",pr:"péngyou",en:"friend"}]},
    {t:"chal",en:"This is my mum",tr:"这是我妈妈",pr:"zhè shì wǒ māma",morph:["这是 = this is","我妈妈 = my mum (的 dropped for family)"]},
    {t:"chal",en:"I have three children",tr:"我有三个孩子",pr:"wǒ yǒu sān gè háizi",morph:["有 = have","三个 = three","孩子 = children"]},
    {t:"say",text:"太太 <b>tàitai</b> wife, 先生 <b>xiānsheng</b> husband/Mr; 女儿 daughter, 儿子 son."},
    {t:"chal",en:"my wife",tr:"我太太",pr:"wǒ tàitai",morph:["我 = my","太太 = wife"]},
    {t:"chal",en:"This is my friend",tr:"这是我的朋友",pr:"zhè shì wǒ de péngyou",morph:["这是 = this is","我的 = my","朋友 = friend"]}
   ],blocks:["家人 family · 妈妈 mum · 爸爸 dad","孩子 child · 朋友 friend · 太太 wife","family drops 的: 我妈妈 = my mum"]},
   {id:18,title:"Colours & describing",focus:"颜色 · 红/蓝 · 大/小",steps:[
    {t:"say",text:"颜色 <b>yánsè</b> = colour. 红色 red, 蓝色 blue, 白色 white, 黑色 black."},
    {t:"words",items:[{tr:"红色",pr:"hóngsè",en:"red"},{tr:"蓝色",pr:"lánsè",en:"blue"},{tr:"白色",pr:"báisè",en:"white"},{tr:"黑色",pr:"hēisè",en:"black"}]},
    {t:"chal",en:"I want the red one",tr:"我要红色的",pr:"wǒ yào hóngsè de",morph:["要 = want","红色 = red","的 = the … one"]},
    {t:"say",text:"大 <b>dà</b> big, 小 <b>xiǎo</b> small, 漂亮 <b>piàoliang</b> pretty."},
    {t:"chal",en:"too big",tr:"太大了",pr:"tài dà le",morph:["太…了 = too …","大 = big"]},
    {t:"chal",en:"very pretty",tr:"很漂亮",pr:"hěn piàoliang",morph:["很 = very","漂亮 = pretty"]},
    {t:"chal",en:"Do you have another colour?",tr:"有别的颜色吗？",pr:"yǒu bié de yánsè ma",morph:["有 = have","别的 = another","颜色 = colour","吗 = ?"]},
    {t:"say",text:"To compare: 更 <b>gèng</b> = more, 比 <b>bǐ</b> = compared to, 最 <b>zuì</b> = most. \"A 比 B 更 [adj]\" = A is more [adj] than B."},
    {t:"words",items:[{tr:"更",pr:"gèng",en:"more"},{tr:"比",pr:"bǐ",en:"than / compared to"},{tr:"最",pr:"zuì",en:"most"}]},
    {t:"chal",en:"This one is bigger than that one",tr:"这个比那个更大",pr:"zhège bǐ nàge gèng dà",morph:["这个 = this one","比 = than","那个 = that one","更大 = bigger"]},
    {t:"chal",en:"This is the biggest",tr:"这是最大的",pr:"zhè shì zuì dà de",morph:["这是 = this is","最大 = biggest","的 = (the ~one)"]}
   ],blocks:["颜色 colour · 红/蓝/白/黑色","大 big · 小 small · 漂亮 pretty","红色的 = the red one (noun + 的)","比…更 = more…than · 最 = most"]},
   {id:19,title:"At the restaurant",focus:"点菜 · 不要辣 · 我吃素",steps:[
    {t:"say",text:"To order is 点菜 <b>diǎncài</b>; the waiter is 服务员 <b>fúwùyuán</b> (just call it out to get attention)."},
    {t:"chal",en:"I'd like to order",tr:"我要点菜",pr:"wǒ yào diǎncài",morph:["要 = want","点菜 = to order food"]},
    {t:"say",text:"辣 <b>là</b> = spicy. Sichuan food is very spicy, so this is gold: 不要辣 = not spicy."},
    {t:"chal",en:"Not spicy, please",tr:"不要辣",pr:"bú yào là",morph:["不要 = don't want","辣 = spicy"]},
    {t:"say",text:"'I'm vegetarian' is 我吃素 <b>wǒ chī sù</b> (literally 'I eat vegetarian')."},
    {t:"chal",en:"I'm vegetarian",tr:"我吃素",pr:"wǒ chī sù",morph:["吃 = eat","素 = vegetarian"]},
    {t:"chal",en:"The bill, please",tr:"结账",pr:"jiézhàng",morph:["结 = settle","账 = the bill"]},
    {t:"say",text:"And a toast when drinking: 干杯 <b>gānbēi</b> — 'cheers!' (dry the cup)."}
   ],blocks:["点菜 = to order · 服务员 = waiter","不要辣 = not spicy · 我吃素 = I'm vegetarian","结账 / 买单 = the bill · 干杯 = cheers"]},
   {id:20,title:"Days, dates & months",focus:"星期 · 号 · 月",steps:[
    {t:"say",text:"Week is 星期 <b>xīngqī</b>, and days are just numbered: 星期一 = Monday ('week-one'), 星期二 Tuesday… 星期天 Sunday."},
    {t:"words",items:[{tr:"星期一",pr:"xīngqīyī",en:"Monday"},{tr:"星期五",pr:"xīngqīwǔ",en:"Friday"},{tr:"星期天",pr:"xīngqītiān",en:"Sunday"}]},
    {t:"chal",en:"What day is it today?",tr:"今天星期几？",pr:"jīntiān xīngqī jǐ",morph:["今天 = today","星期几 = which weekday"]},
    {t:"say",text:"Months are numbered too: 月 <b>yuè</b> = month, so 一月 = January ('month one'). The date is 号 <b>hào</b>."},
    {t:"chal",en:"What's the date today?",tr:"今天几号？",pr:"jīntiān jǐ hào",morph:["今天 = today","几号 = which date"]},
    {t:"chal",en:"January",tr:"一月",pr:"yīyuè",morph:["一 = 1","月 = month"]}
   ],blocks:["星期一…星期天 = Mon…Sun (numbered)","一月 = January (month + number)","今天几号？ = what's the date?"]},
   {id:21,title:"Weather & small talk",focus:"天气 · 热/冷 · 下雨",steps:[
    {t:"say",text:"天气 <b>tiānqì</b> = weather. 热 <b>rè</b> hot, 冷 <b>lěng</b> cold."},
    {t:"chal",en:"It's very hot today",tr:"今天很热",pr:"jīntiān hěn rè",morph:["今天 = today","很 = very","热 = hot"]},
    {t:"chal",en:"It's a bit cold",tr:"有点冷",pr:"yǒudiǎn lěng",morph:["有点 = a bit","冷 = cold"]},
    {t:"say",text:"'To rain' is 下雨 <b>xiàyǔ</b>. Add 了 for 'it's (started) raining'."},
    {t:"chal",en:"It's raining",tr:"下雨了",pr:"xiàyǔ le",morph:["下雨 = rain","了 = (now)"]},
    {t:"say",text:"'What's it like?' is 怎么样 <b>zěnmeyàng</b> — great for small talk."},
    {t:"chal",en:"How's the weather today?",tr:"今天天气怎么样？",pr:"jīntiān tiānqì zěnmeyàng",morph:["今天 = today","天气 = weather","怎么样 = how / what's it like"]}
   ],blocks:["天气 weather · 热 hot · 冷 cold","下雨了 = it's raining","怎么样？ = how is it? / what's it like?"]},
   {id:22,title:"Transport & tickets",focus:"地铁 · 怎么去 · 多远",steps:[
    {t:"say",text:"To hail a cab is 打车 <b>dǎchē</b>. 地铁 subway, 公交车 bus, 火车 train."},
    {t:"words",items:[{tr:"地铁",pr:"dìtiě",en:"subway"},{tr:"公交车",pr:"gōngjiāochē",en:"bus"},{tr:"火车",pr:"huǒchē",en:"train"},{tr:"机场",pr:"jīchǎng",en:"airport"}]},
    {t:"say",text:"'To take' transport uses 坐 <b>zuò</b> (sit). 我要坐地铁 = I want to take the subway."},
    {t:"chal",en:"I want to take the subway",tr:"我要坐地铁",pr:"wǒ yào zuò dìtiě",morph:["要 = want","坐 = take (sit)","地铁 = subway"]},
    {t:"say",text:"'How do I get to…?' is …怎么去？"},
    {t:"chal",en:"How do I get to the airport?",tr:"机场怎么去？",pr:"jīchǎng zěnme qù",morph:["机场 = airport","怎么 = how","去 = go"]},
    {t:"chal",en:"How far is it?",tr:"多远？",pr:"duō yuǎn",morph:["多 = how","远 = far"]},
    {t:"chal",en:"I want to buy a ticket",tr:"我要买票",pr:"wǒ yào mǎi piào",morph:["买 = buy","票 = ticket"]}
   ],blocks:["打车 hail a taxi · 地铁 subway · 公交车 bus","坐 = take (transport) · 我要坐地铁","…怎么去？ = how to get to…? · 多远？ = how far?"]},
   {id:23,title:"Money & prices",focus:"百 · 千 · 块",steps:[
    {t:"say",text:"Bigger numbers stay logical: 百 <b>bǎi</b> = 100, 千 <b>qiān</b> = 1000, 万 <b>wàn</b> = 10,000. In speech, money is counted in 块 <b>kuài</b>."},
    {t:"words",items:[{tr:"百",pr:"bǎi",en:"100"},{tr:"千",pr:"qiān",en:"1,000"},{tr:"万",pr:"wàn",en:"10,000"}]},
    {t:"chal",en:"three hundred",tr:"三百",pr:"sānbǎi",morph:["三 = 3","百 = hundred"]},
    {t:"chal",en:"fifty yuan",tr:"五十块",pr:"wǔshí kuài",morph:["五十 = 50","块 = yuan"]},
    {t:"chal",en:"This is a hundred yuan",tr:"这个一百块",pr:"zhège yìbǎi kuài",morph:["这个 = this","一百块 = 100 yuan"]},
    {t:"say",text:"Almost everyone pays by phone. 'Can I pay by WeChat?' = 可以微信支付吗？"},
    {t:"chal",en:"Can I pay by WeChat?",tr:"可以微信支付吗？",pr:"kěyǐ wēixìn zhīfù ma",morph:["可以 = can","微信 = WeChat","支付 = pay","吗 = ?"]}
   ],blocks:["百 100 · 千 1,000 · 万 10,000","块 = yuan (in speech)","可以微信支付吗？ = can I pay by WeChat?"]},
   {id:24,title:"Hotel & booking",focus:"预订 · 房间 · 钥匙",steps:[
    {t:"say",text:"预订 <b>yùdìng</b> reservation, 房间 <b>fángjiān</b> room, 一个晚上 = one night."},
    {t:"chal",en:"I have a reservation",tr:"我有预订",pr:"wǒ yǒu yùdìng",morph:["有 = have","预订 = reservation"]},
    {t:"chal",en:"I'd like a room",tr:"我要一个房间",pr:"wǒ yào yí gè fángjiān",morph:["要 = want","一个 = a","房间 = room"]},
    {t:"chal",en:"for one night",tr:"一个晚上",pr:"yí gè wǎnshàng",morph:["一个 = one","晚上 = night"]},
    {t:"say",text:"钥匙 <b>yàoshi</b> key, 退房 <b>tuìfáng</b> check out, 空调 <b>kōngtiáo</b> air-con."},
    {t:"chal",en:"Where is the key?",tr:"钥匙在哪里？",pr:"yàoshi zài nǎlǐ",morph:["钥匙 = key","在哪里 = where"]},
    {t:"chal",en:"Is there air-conditioning?",tr:"有空调吗？",pr:"yǒu kōngtiáo ma",morph:["有 = is there","空调 = air-con","吗 = ?"]}
   ],blocks:["预订 reservation · 房间 room","一个晚上 = one night · 退房 = check out","钥匙 key · 空调 air-con"]},
   {id:25,title:"Phone & internet",focus:"手机 · 微信 · 扫码",steps:[
    {t:"say",text:"China runs on the phone: 手机 <b>shǒujī</b> phone, 微信 <b>Wēixìn</b> WeChat, 二维码 <b>èrwéimǎ</b> QR code, 扫码 <b>sǎomǎ</b> = scan the code."},
    {t:"words",items:[{tr:"手机",pr:"shǒujī",en:"mobile phone"},{tr:"微信",pr:"Wēixìn",en:"WeChat"},{tr:"二维码",pr:"èrwéimǎ",en:"QR code"}]},
    {t:"chal",en:"What's your phone number?",tr:"你的电话号码是多少？",pr:"nǐ de diànhuà hàomǎ shì duōshao",morph:["电话号码 = phone number","多少 = what/how much"]},
    {t:"chal",en:"Can I add you on WeChat?",tr:"可以加微信吗？",pr:"kěyǐ jiā wēixìn ma",morph:["加 = add","微信 = WeChat","吗 = ?"]},
    {t:"chal",en:"Scan the code",tr:"扫码",pr:"sǎomǎ",morph:["扫 = scan","码 = code"]},
    {t:"chal",en:"What's the wifi password?",tr:"wifi密码是什么？",pr:"wifi mìmǎ shì shénme",morph:["密码 = password","什么 = what"]}
   ],blocks:["手机 phone · 微信 WeChat · 二维码 QR code","扫码 = scan the code","可以加微信吗？ = add me on WeChat?"]},
   {id:26,title:"How I feel",focus:"累 · 饿 · 渴 · 高兴",steps:[
    {t:"say",text:"State words take 很 in front (even for 'a bit'): 累 <b>lèi</b> tired, 饿 <b>è</b> hungry, 渴 <b>kě</b> thirsty, 高兴 <b>gāoxìng</b> happy."},
    {t:"words",items:[{tr:"累",pr:"lèi",en:"tired"},{tr:"饿",pr:"è",en:"hungry"},{tr:"渴",pr:"kě",en:"thirsty"},{tr:"高兴",pr:"gāoxìng",en:"happy"}]},
    {t:"chal",en:"I'm tired",tr:"我很累",pr:"wǒ hěn lèi",morph:["我 = I","很 = (very)","累 = tired"]},
    {t:"chal",en:"I'm hungry",tr:"我很饿",pr:"wǒ hěn è",morph:["很 = (very)","饿 = hungry"]},
    {t:"chal",en:"I'm thirsty",tr:"我很渴",pr:"wǒ hěn kě",morph:["很 = (very)","渴 = thirsty"]},
    {t:"chal",en:"I'm very happy",tr:"我很高兴",pr:"wǒ hěn gāoxìng",morph:["很 = very","高兴 = happy"]}
   ],blocks:["累 tired · 饿 hungry · 渴 thirsty · 高兴 happy","use 很 before the state word","我很累 = I'm tired"]},
   {id:27,title:"Everyday verbs",focus:"喜欢 · 喝 · 住 · 来/去",steps:[
    {t:"say",text:"Handy daily verbs: 来 <b>lái</b> come, 去 <b>qù</b> go, 喝 <b>hē</b> drink, 喜欢 <b>xǐhuan</b> like, 住 <b>zhù</b> live/stay."},
    {t:"chal",en:"I like tea",tr:"我喜欢茶",pr:"wǒ xǐhuan chá",morph:["喜欢 = like","茶 = tea"]},
    {t:"chal",en:"I'd like to drink water",tr:"我想喝水",pr:"wǒ xiǎng hē shuǐ",morph:["想 = would like to","喝 = drink","水 = water"]},
    {t:"chal",en:"Come here",tr:"来这里",pr:"lái zhèlǐ",morph:["来 = come","这里 = here"]},
    {t:"say",text:"住 pairs with 在 for 'I live in…'."},
    {t:"chal",en:"I live in Dubai",tr:"我住在迪拜",pr:"wǒ zhù zài díbài",morph:["住 = live","在 = in","迪拜 = Dubai"]}
   ],blocks:["来 come · 去 go · 喝 drink","喜欢 like · 住 live","我住在迪拜 = I live in Dubai"]},
   {id:28,title:"Feeling ill",focus:"头疼 · 发烧 · 感冒 · 药",steps:[
    {t:"say",text:"Body + 疼 (téng, hurts) tells a doctor everything: 头 <b>tóu</b> head, 肚子 <b>dùzi</b> stomach, 牙 <b>yá</b> tooth."},
    {t:"chal",en:"I have a headache",tr:"我头疼",pr:"wǒ tóu téng",morph:["头 = head","疼 = hurts"]},
    {t:"chal",en:"I have a toothache",tr:"我牙疼",pr:"wǒ yá téng",morph:["牙 = tooth","疼 = hurts"]},
    {t:"say",text:"发烧 <b>fāshāo</b> = a fever, 感冒 <b>gǎnmào</b> = a cold, 药 <b>yào</b> = medicine."},
    {t:"chal",en:"I have a fever",tr:"我发烧了",pr:"wǒ fāshāo le",morph:["发烧 = fever","了 = (now)"]},
    {t:"chal",en:"I have a cold",tr:"我感冒了",pr:"wǒ gǎnmào le",morph:["感冒 = cold","了 = (now)"]},
    {t:"chal",en:"I need medicine",tr:"我需要药",pr:"wǒ xūyào yào",morph:["需要 = need","药 = medicine"]}
   ],blocks:["头/肚子/牙 + 疼 = … hurts","发烧 fever · 感冒 cold · 药 medicine","我发烧了 = I have a fever"]},
   {id:29,title:"Countries & languages",focus:"中国 · 印度 · 中文/英文",steps:[
    {t:"say",text:"Nationality is country + 人 (rén, person). 中国 China, 印度 India → 我是印度人 = I'm Indian."},
    {t:"chal",en:"I'm Indian",tr:"我是印度人",pr:"wǒ shì yìndù rén",morph:["我是 = I am","印度 = India","人 = person"]},
    {t:"chal",en:"I come from India",tr:"我从印度来",pr:"wǒ cóng yìndù lái",morph:["从 = from","印度 = India","来 = come"]},
    {t:"say",text:"Language is often 中文 <b>Zhōngwén</b> (Chinese), 英文 <b>Yīngwén</b> (English)."},
    {t:"chal",en:"Can you speak English?",tr:"你会说英文吗？",pr:"nǐ huì shuō yīngwén ma",morph:["会说 = can speak","英文 = English","吗 = ?"]},
    {t:"chal",en:"I can speak a little Chinese",tr:"我会说一点中文",pr:"wǒ huì shuō yìdiǎn zhōngwén",morph:["会说 = can speak","一点 = a little","中文 = Chinese"]}
   ],blocks:["country + 人 = nationality (印度人 = Indian)","从…来 = come from…","中文 Chinese · 英文 English"]},
   {id:30,title:"Politeness & survival",focus:"没关系 · 慢一点 · 再说一遍",steps:[
    {t:"say",text:"The social glue: 没关系 <b>méi guānxi</b> = 'it's OK / no worries'; 不客气 <b>bú kèqi</b> = 'you're welcome'."},
    {t:"chal",en:"No worries / it's OK",tr:"没关系",pr:"méi guānxi",morph:["没关系 = it doesn't matter"]},
    {t:"chal",en:"You're welcome",tr:"不客气",pr:"bú kèqi",morph:["不客气 = don't be polite → you're welcome"]},
    {t:"say",text:"To get help politely: 麻烦你 <b>máfan nǐ</b> ('sorry to trouble you'), 等一下 <b>děng yíxià</b> ('one moment')."},
    {t:"chal",en:"Please wait a moment",tr:"等一下",pr:"děng yíxià",morph:["等 = wait","一下 = a moment"]},
    {t:"say",text:"And the two lifesavers when they speak too fast:"},
    {t:"chal",en:"Please speak slower",tr:"请慢一点",pr:"qǐng màn yìdiǎn",morph:["请 = please","慢 = slow","一点 = a bit"]},
    {t:"chal",en:"Please say it again",tr:"请再说一遍",pr:"qǐng zài shuō yíbiàn",morph:["再 = again","说 = say","一遍 = one time"]},
    {t:"say",text:"Last two things that unlock real conversation: saying what <b>you</b> think, and putting events in order. 我觉得 <b>wǒ juéde</b> = I think; 先...然后 <b>xiān...ránhòu</b> = first...then."},
    {t:"words",items:[{tr:"我觉得",pr:"wǒ juéde",en:"I think"},{tr:"我同意",pr:"wǒ tóngyì",en:"I agree"},{tr:"真的吗？",pr:"zhēn de ma",en:"really?"},{tr:"我也是",pr:"wǒ yěshì",en:"me too"},{tr:"先 / 然后 / 之后",pr:"xiān / ránhòu / zhīhòu",en:"first / then / after that"}]},
    {t:"chal",en:"I think it's a good idea",tr:"我觉得这是个好主意",pr:"wǒ juéde zhè shì ge hǎo zhǔyi",morph:["我觉得 = I think","这是个好主意 = this is a good idea"]},
    {t:"chal",en:"First we eat, then we go",tr:"我们先吃饭，然后走",pr:"wǒmen xiān chīfàn, ránhòu zǒu",morph:["先 = first","吃饭 = eat","然后 = then","走 = go"]}
   ],blocks:["没关系 = no worries · 不客气 = you're welcome","麻烦你 = excuse me (trouble you) · 等一下 = one moment","请慢一点 slower · 请再说一遍 say it again","我觉得 = I think · 先...然后 = first...then"]}
  ]},
 german:{ name:"German", flag:"🇩🇪", tts:"de-DE",
  blurb:"Traveller's German, built the reason-it-out way. It leans hard on English — German's close cousin — so a lot will feel familiar. From Lesson 31 the compound machine kicks in: those famously long words become decodable.",
  note:"German shares huge vocabulary with English (Wasser≈water, Brot≈bread), and its ö/ü are the same sounds as in Turkish. Nouns are capitalized and carry der/die/das, but in speech you'll be understood with einen/ein. Tap 🔊 and copy the sound.",
  resources:[
   {icon:"🗣️",t:"Easy German",d:"Excellent street interviews with subtitles — natural spoken German.",q:"Easy German"},
   {icon:"🏆",t:"DW — Nicos Weg",d:"Deutsche Welle's free A1–B1 video course (the gold standard).",q:"Nicos Weg DW Learn German A1"},
   {icon:"📚",t:"Learn German with Anja",d:"Lively, clear grammar and vocab lessons.",q:"Learn German with Anja"},
   {icon:"🧑‍🏫",t:"Deutsch für Euch",d:"Friendly explanations aimed at learners.",q:"Deutsch für Euch"},
   {icon:"☕",t:"Coffee Break German",d:"Bite-size audio lessons for the commute.",q:"Coffee Break German"}
  ],
  lessons:[
{id:1,title:"Greetings",focus:"Hallo · Danke · Guten Tag",steps:[
    {t:"words",items:[{tr:"Hallo",pr:"HAH-loh",en:"hello"},{tr:"Danke",pr:"DAN-kuh",en:"thanks"},{tr:"Tschüss",pr:"chewss",en:"bye (casual)"}]},
    {t:"chal",en:"Good morning",tr:"Guten Morgen",pr:"GOO-ten MOR-gen",morph:["guten = good","Morgen = morning"]},
    {t:"chal",en:"Good day / hello",tr:"Guten Tag",pr:"GOO-ten tahk",morph:["guten = good","Tag = day"]},
    {t:"say",text:"Please = <b>bitte</b>, thank you very much = <b>danke schön</b>, you're welcome = <b>bitte schön</b>."},
    {t:"chal",en:"Thank you very much",tr:"Danke schön",pr:"DAN-kuh shurn",morph:["danke = thanks","schön = nicely"]},
    {t:"chal",en:"Goodbye (formal)",tr:"Auf Wiedersehen",pr:"owf VEE-der-zane",morph:["auf Wiedersehen = until we meet again"]},
    {t:"chal",en:"Excuse me, please",tr:"Entschuldigung, bitte",pr:"ent-SHOOL-di-goong BIT-tuh",morph:["Entschuldigung = excuse me","bitte = please"]}
   ],blocks:["Hallo · Guten Morgen · Guten Tag","bitte = please · danke = thanks","Auf Wiedersehen = goodbye","Entschuldigung = excuse me"]},
{id:2,title:"\"I'd like\" Ich möchte",focus:"Ich möchte · Wie viel",steps:[
    {t:"say",text:"The polite traveller verb: <b>Ich möchte</b> = 'I would like'."},
    {t:"chal",en:"I'd like a coffee",tr:"Ich möchte einen Kaffee",pr:"ish MURSH-tuh INE-en KAH-fey",morph:["Ich möchte = I'd like","einen Kaffee = a coffee"]},
    {t:"chal",en:"I'd like a water",tr:"Ich möchte ein Wasser",pr:"ish MURSH-tuh ine VAH-ser",morph:["Ich möchte = I'd like","ein Wasser = a water"]},
    {t:"chal",en:"I'd like a tea",tr:"Ich möchte einen Tee",pr:"ish MURSH-tuh INE-en tay",morph:["Ich möchte = I'd like","einen Tee = a tea"]},
    {t:"say",text:"To ask the price: <b>Wie viel kostet das?</b>"},
    {t:"chal",en:"How much is that?",tr:"Wie viel kostet das?",pr:"vee feel KOS-tet das",morph:["wie viel = how much","kostet = costs","das = that"]},
    {t:"chal",en:"The bill, please",tr:"Die Rechnung, bitte",pr:"dee RESH-noong BIT-tuh",morph:["die Rechnung = the bill","bitte = please"]}
   ],blocks:["Ich möchte … = I'd like …","einen/ein = a","Wie viel kostet das? = how much?","Die Rechnung, bitte = the bill, please"]},
{id:3,title:"Numbers",focus:"eins–zehn · zwanzig",steps:[
    {t:"words",items:[{tr:"eins",pr:"ines",en:"1"},{tr:"zwei",pr:"tsvy",en:"2"},{tr:"drei",pr:"dry",en:"3"},{tr:"vier",pr:"feer",en:"4"},{tr:"fünf",pr:"fewnf",en:"5"}]},
    {t:"words",items:[{tr:"sechs",pr:"zeks",en:"6"},{tr:"sieben",pr:"ZEE-ben",en:"7"},{tr:"acht",pr:"ahkht",en:"8"},{tr:"neun",pr:"noyn",en:"9"},{tr:"zehn",pr:"tsayn",en:"10"}]},
    {t:"chal",en:"twenty",tr:"zwanzig",pr:"TSVAN-tsig",morph:["zwanzig = 20"]},
    {t:"chal",en:"one hundred",tr:"hundert",pr:"HOON-dert",morph:["hundert = 100"]},
    {t:"chal",en:"How much is that?",tr:"Wie viel kostet das?",pr:"vee feel KOS-tet das",morph:["recall from lesson 2"]}
   ],blocks:["eins–zehn = 1–10","zwanzig = 20 · hundert = 100"]},
{id:4,title:"Food",focus:"Speisekarte · kein Fleisch",steps:[
    {t:"words",items:[{tr:"die Speisekarte",pr:"dee SHPY-zuh-kar-tuh",en:"the menu"},{tr:"das Wasser",pr:"das VAH-ser",en:"water"},{tr:"das Brot",pr:"das broht",en:"bread"}]},
    {t:"chal",en:"The menu, please",tr:"Die Speisekarte, bitte",pr:"dee SHPY-zuh-kar-tuh BIT-tuh",morph:["die Speisekarte = the menu","bitte = please"]},
    {t:"say",text:"'I eat no meat' — German says it neatly: <b>Ich esse kein Fleisch</b>."},
    {t:"chal",en:"I don't eat meat",tr:"Ich esse kein Fleisch",pr:"ish ES-suh kine flysh",morph:["esse = eat","kein = no","Fleisch = meat"]},
    {t:"chal",en:"Very delicious",tr:"Sehr lecker",pr:"zair LEK-er",morph:["sehr = very","lecker = tasty"]},
    {t:"chal",en:"Enjoy your meal",tr:"Guten Appetit",pr:"GOO-ten ah-puh-TEET",morph:["Guten Appetit = bon appétit"]}
   ],blocks:["Die Speisekarte, bitte = the menu","Ich esse kein Fleisch = I don't eat meat","Sehr lecker = very tasty","Guten Appetit = enjoy"]},
{id:5,title:"Getting around",focus:"Wo ist…? · links/rechts",steps:[
    {t:"say",text:"'Where is…?' = <b>Wo ist…?</b>"},
    {t:"chal",en:"Where is the toilet?",tr:"Wo ist die Toilette?",pr:"voh ist dee twa-LET-tuh",morph:["Wo ist = where is","die Toilette = the toilet"]},
    {t:"words",items:[{tr:"links",pr:"links",en:"left"},{tr:"rechts",pr:"reshts",en:"right"},{tr:"geradeaus",pr:"guh-RAH-duh-ows",en:"straight ahead"}]},
    {t:"chal",en:"Where is the train station?",tr:"Wo ist der Bahnhof?",pr:"voh ist dair BAHN-hofe",morph:["Wo ist = where is","der Bahnhof = the station"]},
    {t:"chal",en:"Where is the airport?",tr:"Wo ist der Flughafen?",pr:"voh ist dair FLOOG-hah-fen",morph:["Wo ist = where is","der Flughafen = the airport"]},
    {t:"chal",en:"A taxi, please",tr:"Ein Taxi, bitte",pr:"ine TAK-see BIT-tuh",morph:["ein Taxi = a taxi","bitte = please"]},
    {t:"chal",en:"I don't understand",tr:"Ich verstehe nicht",pr:"ish fer-SHTAY-uh nisht",morph:["verstehe = understand","nicht = not"]}
   ],blocks:["Wo ist…? = where is…?","links / rechts / geradeaus","Ein Taxi, bitte · Wo ist der Flughafen?","Ich verstehe nicht = I don't understand"]},
{id:6,title:"\"I have / there is\"",focus:"Ich habe · es gibt · Haben Sie…?",steps:[
    {t:"say",text:"'I have' is <b>Ich habe</b>. 'There is / are' is <b>es gibt</b>. 'Do you have…?' is <b>Haben Sie…?</b>"},
    {t:"chal",en:"I have a question (eine Frage)",tr:"Ich habe eine Frage",pr:"ish HAH-buh INE-uh FRAH-guh",morph:["Ich habe = I have","eine Frage = a question"]},
    {t:"chal",en:"Do you have wifi? (WLAN)",tr:"Haben Sie WLAN?",pr:"HAH-ben zee vay-lahn",morph:["Haben Sie = do you have","WLAN = wifi"]},
    {t:"say",text:"For 'is there…?' use <b>Gibt es…?</b>"},
    {t:"chal",en:"Is there a toilet here?",tr:"Gibt es hier eine Toilette?",pr:"gipt es heer INE-uh twa-LET-tuh",morph:["Gibt es = is there","hier = here","eine Toilette = a toilet"]},
    {t:"chal",en:"I don't have time (Zeit)",tr:"Ich habe keine Zeit",pr:"ish HAH-buh KINE-uh tsite",morph:["Ich habe = I have","keine = no","Zeit = time"]}
   ],blocks:["Ich habe… = I have…","es gibt / Gibt es…? = there is / is there?","Haben Sie…? = do you have?","keine = no (none)"]},
{id:7,title:"Talking about the past",focus:"habe … gegessen · bin … gegangen",steps:[
    {t:"say",text:"In speech, German's past is the 'Perfekt': <b>haben</b> + a past participle. 'I have eaten' = Ich habe gegessen (and that's how you say 'I ate')."},
    {t:"chal",en:"I ate",tr:"Ich habe gegessen",pr:"ish HAH-buh guh-GES-sen",morph:["Ich habe = I have","gegessen = eaten"]},
    {t:"chal",en:"I saw (it)",tr:"Ich habe gesehen",pr:"ish HAH-buh guh-ZAY-en",morph:["habe = have","gesehen = seen"]},
    {t:"say",text:"Verbs of <i>motion</i> use <b>sein</b> (to be) instead: 'I went' = Ich bin gegangen."},
    {t:"chal",en:"I went",tr:"Ich bin gegangen",pr:"ish bin guh-GANG-en",morph:["Ich bin = I am","gegangen = gone"]},
    {t:"chal",en:"I was in Berlin",tr:"Ich war in Berlin",pr:"ish var in ber-LEEN",morph:["war = was","in Berlin"]}
   ],blocks:["Perfekt = haben/sein + participle","Ich habe gegessen = I ate","Ich bin gegangen = I went","Ich war = I was"]},
{id:8,title:"Mine & yours",focus:"mein · Ihr",steps:[
    {t:"say",text:"'My' is <b>mein</b> (mein/meine); 'your' (polite) is <b>Ihr</b> (Ihr/Ihre)."},
    {t:"chal",en:"my name",tr:"mein Name",pr:"mine NAH-muh",morph:["mein = my","Name = name"]},
    {t:"chal",en:"This is my bag (Tasche)",tr:"Das ist meine Tasche",pr:"das ist MINE-uh TASH-uh",morph:["Das ist = this is","meine = my","Tasche = bag"]},
    {t:"chal",en:"your passport (Reisepass)",tr:"Ihr Reisepass",pr:"eer RYE-zuh-pass",morph:["Ihr = your","Reisepass = passport"]},
    {t:"chal",en:"my friend (Freund)",tr:"mein Freund",pr:"mine froynt",morph:["mein = my","Freund = friend"]}
   ],blocks:["mein / meine = my","Ihr / Ihre = your (polite)","the ending matches the noun's gender"]},
{id:9,title:"Time & when",focus:"heute · jetzt · Wie spät?",steps:[
    {t:"say",text:"Time words: <b>heute</b> today, <b>morgen</b> tomorrow, <b>gestern</b> yesterday, <b>jetzt</b> now."},
    {t:"words",items:[{tr:"heute",pr:"HOY-tuh",en:"today"},{tr:"morgen",pr:"MOR-gen",en:"tomorrow"},{tr:"jetzt",pr:"yetst",en:"now"}]},
    {t:"chal",en:"today",tr:"heute",pr:"HOY-tuh",morph:["heute = today"]},
    {t:"chal",en:"now",tr:"jetzt",pr:"yetst",morph:["jetzt = now"]},
    {t:"say",text:"'What time is it?' is <b>Wie spät ist es?</b> (literally 'how late is it?')."},
    {t:"chal",en:"What time is it?",tr:"Wie spät ist es?",pr:"vee shpayt ist es",morph:["wie spät = how late","ist es = is it"]},
    {t:"chal",en:"tomorrow",tr:"morgen",pr:"MOR-gen",morph:["morgen = tomorrow"]}
   ],blocks:["heute today · morgen tomorrow · jetzt now","Wie spät ist es? = what time is it?"]},
{id:10,title:"The question words",focus:"was · wer · warum · wie",steps:[
    {t:"say",text:"The W-words: was <b>what</b>, wo <b>where</b>, wer <b>who</b>, warum <b>why</b>, wie <b>how</b>."},
    {t:"words",items:[{tr:"was",pr:"vas",en:"what"},{tr:"wer",pr:"vair",en:"who"},{tr:"wie",pr:"vee",en:"how"}]},
    {t:"chal",en:"What is this?",tr:"Was ist das?",pr:"vas ist das",morph:["was = what","ist das = is that"]},
    {t:"chal",en:"Who is that?",tr:"Wer ist das?",pr:"vair ist das",morph:["wer = who","ist das = is that"]},
    {t:"chal",en:"Why?",tr:"Warum?",pr:"vah-ROOM",morph:["warum = why"]},
    {t:"chal",en:"How are you?",tr:"Wie geht es Ihnen?",pr:"vee gayt es EE-nen",morph:["wie geht es = how goes it","Ihnen = to you"]}
   ],blocks:["was what · wer who · wie how · warum why","Wie geht es Ihnen? = how are you?"]},
{id:11,title:"Where things are",focus:"in / im · hier · in der Nähe",steps:[
    {t:"say",text:"'in the' is <b>im</b>. Ich bin im Hotel = I'm at the hotel. hier <b>here</b>, dort <b>there</b>."},
    {t:"chal",en:"I'm at the hotel",tr:"Ich bin im Hotel",pr:"ish bin im ho-TEL",morph:["Ich bin = I am","im = in the","Hotel = hotel"]},
    {t:"chal",en:"here",tr:"hier",pr:"heer",morph:["hier = here"]},
    {t:"chal",en:"The toilet is here",tr:"Die Toilette ist hier",pr:"dee twa-LET-tuh ist heer",morph:["die Toilette = the toilet","ist hier = is here"]},
    {t:"say",text:"'nearby' is <b>in der Nähe</b>."},
    {t:"chal",en:"Is there a bank nearby?",tr:"Gibt es eine Bank in der Nähe?",pr:"gipt es INE-uh bank in dair NAY-uh",morph:["Gibt es = is there","eine Bank = a bank","in der Nähe = nearby"]}
   ],blocks:["im = in the · hier here · dort there","in der Nähe = nearby","Gibt es … in der Nähe? = is there … nearby?"]},
{id:12,title:"Need & can",focus:"Ich brauche · Kann ich · Können Sie",steps:[
    {t:"say",text:"'I need' is <b>Ich brauche…</b>; 'can I…?' is <b>Kann ich…?</b>; 'can you…?' is <b>Können Sie…?</b>"},
    {t:"chal",en:"I need help (Hilfe)",tr:"Ich brauche Hilfe",pr:"ish BROW-khuh HIL-fuh",morph:["Ich brauche = I need","Hilfe = help"]},
    {t:"chal",en:"I need a doctor",tr:"Ich brauche einen Arzt",pr:"ish BROW-khuh INE-en artst",morph:["Ich brauche = I need","einen Arzt = a doctor"]},
    {t:"chal",en:"Can I sit here?",tr:"Kann ich hier sitzen?",pr:"kan ish heer ZIT-sen",morph:["Kann ich = can I","hier = here","sitzen = sit"]},
    {t:"chal",en:"Can you help me?",tr:"Können Sie mir helfen?",pr:"KUR-nen zee meer HEL-fen",morph:["Können Sie = can you","mir = me","helfen = help"]}
   ],blocks:["Ich brauche… = I need…","Kann ich…? = can I? · Können Sie…? = can you?","Können Sie mir helfen? = can you help me?"]},
{id:13, title:"Word order & \"because\"", focus:"weil · denn, aber, und", steps:[
{t:"say",text:"Little joining words like <b>und</b> (and), <b>aber</b> (but), <b>denn</b> (for/because) keep normal word order."},
{t:"words",items:[
{tr:"und",pr:"oont",en:"and"},
{tr:"aber",pr:"AH-ber",en:"but"},
{tr:"auch",pr:"owkh",en:"also",link:"auch≈eke/also"},
{tr:"denn",pr:"den",en:"because / for"},
{tr:"weil",pr:"vyl",en:"because"}
]},
{t:"say",text:"But <b>weil</b> is special: it sends the verb to the very <b>end</b>. \"Ich bleibe, weil ich müde <b>bin</b>.\""},
{t:"chal",en:"I am tired, but happy.",tr:"Ich bin müde, aber glücklich.",pr:"ikh bin MEW-de, AH-ber GLEWK-likh",morph:["müde = tired","aber = but","glücklich = happy"]},
{t:"chal",en:"I stay because I am tired.",tr:"Ich bleibe, weil ich müde bin.",pr:"ikh BLY-be, vyl ikh MEW-de bin",morph:["bleibe = stay","weil = because","bin goes to the end"]},
{t:"chal",en:"I eat because I am hungry.",tr:"Ich esse, weil ich hungrig bin.",pr:"ikh ES-se, vyl ikh HOONG-rikh bin",morph:["esse = eat","weil = because","bin at the end"]},
{t:"chal",en:"I come, for I have time.",tr:"Ich komme, denn ich habe Zeit.",pr:"ikh KOM-me, den ikh HAH-be tsyt",morph:["denn = for/because (normal order)","habe = have","Zeit = time"]},
{t:"chal",en:"I also want coffee.",tr:"Ich will auch Kaffee.",pr:"ikh vil owkh ka-FAY",morph:["will = want","auch = also","Kaffee = coffee"]}
], blocks:["Ich bin müde, aber glücklich.","Ich bleibe, weil ich müde bin.","Ich will auch Kaffee."]},
{id:14,title:"Shopping & bargaining",focus:"kaufen · zu teuer · billiger",steps:[
    {t:"say",text:"'To buy' is <b>kaufen</b>. 'Too expensive' is <b>zu teuer</b>; 'cheaper' is <b>billiger</b>."},
    {t:"chal",en:"I'd like to buy this",tr:"Ich möchte das kaufen",pr:"ish MURSH-tuh das KOW-fen",morph:["Ich möchte = I'd like","das = this","kaufen = to buy"]},
    {t:"chal",en:"Too expensive",tr:"Zu teuer",pr:"tsoo TOY-er",morph:["zu = too","teuer = expensive"]},
    {t:"chal",en:"Do you have something cheaper?",tr:"Haben Sie etwas Billigeres?",pr:"HAH-ben zee ET-vas BIL-ig-er-es",morph:["Haben Sie = do you have","etwas = something","Billigeres = cheaper"]},
    {t:"chal",en:"I'll take it",tr:"Ich nehme das",pr:"ish NAY-muh das",morph:["Ich nehme = I take","das = it/this"]}
   ],blocks:["kaufen = to buy","zu teuer = too expensive · billiger = cheaper","Ich nehme das = I'll take it"]},
{id:15,title:"Help & emergencies",focus:"Hilfe · Arzt · Polizei",steps:[
    {t:"say",text:"Hilfe! <b>help!</b>, Arzt <b>doctor</b>, Krankenhaus <b>hospital</b>, Polizei <b>police</b>."},
    {t:"chal",en:"Help, please!",tr:"Hilfe, bitte!",pr:"HIL-fuh BIT-tuh",morph:["Hilfe = help","bitte = please"]},
    {t:"chal",en:"I'm sick",tr:"Ich bin krank",pr:"ish bin krank",morph:["Ich bin = I am","krank = sick"]},
    {t:"chal",en:"Call a doctor",tr:"Rufen Sie einen Arzt",pr:"ROO-fen zee INE-en artst",morph:["Rufen Sie = call","einen Arzt = a doctor"]},
    {t:"chal",en:"Where is the hospital?",tr:"Wo ist das Krankenhaus?",pr:"voh ist das KRANK-en-howss",morph:["Wo ist = where is","Krankenhaus = hospital"]},
    {t:"chal",en:"Call the police",tr:"Rufen Sie die Polizei",pr:"ROO-fen zee dee po-li-TSY",morph:["Rufen Sie = call","die Polizei = the police"]}
   ],blocks:["Hilfe! = help! · Ich bin krank = I'm sick","Rufen Sie einen Arzt = call a doctor","Krankenhaus hospital · Polizei police"]},
{id:16,title:"Family & people",focus:"Familie · Frau · Kinder",steps:[
    {t:"say",text:"Familie <b>family</b>, Frau <b>wife/woman</b>, Kinder <b>children</b>, Freund <b>friend</b>."},
    {t:"chal",en:"my family",tr:"meine Familie",pr:"MINE-uh fah-MEE-lee-uh",morph:["meine = my","Familie = family"]},
    {t:"chal",en:"my wife",tr:"meine Frau",pr:"MINE-uh frow",morph:["meine = my","Frau = wife"]},
    {t:"chal",en:"I have three children",tr:"Ich habe drei Kinder",pr:"ish HAH-buh dry KIN-der",morph:["Ich habe = I have","drei = three","Kinder = children"]},
    {t:"chal",en:"This is my friend",tr:"Das ist mein Freund",pr:"das ist mine froynt",morph:["Das ist = this is","mein = my","Freund = friend"]}
   ],blocks:["meine Familie = my family","Frau wife · Kinder children · Freund friend","Ich habe drei Kinder = I have three children"]},
{id:17,title:"Colours & describing",focus:"Farbe · rot · groß/klein",steps:[
    {t:"say",text:"Farbe <b>colour</b>. rot red, blau blue, weiß white, schwarz black."},
    {t:"words",items:[{tr:"rot",pr:"roht",en:"red"},{tr:"blau",pr:"blow",en:"blue"},{tr:"weiß",pr:"vice",en:"white"}]},
    {t:"chal",en:"red",tr:"rot",pr:"roht",morph:["rot = red"]},
    {t:"chal",en:"big",tr:"groß",pr:"grohss",morph:["groß = big"]},
    {t:"chal",en:"small",tr:"klein",pr:"kline",morph:["klein = small"]},
    {t:"chal",en:"very beautiful",tr:"sehr schön",pr:"zair shurn",morph:["sehr = very","schön = beautiful"]},
    {t:"say",text:"To compare: <b>größer</b> = bigger, <b>am größten</b> = biggest, <b>als</b> = than. German just adds -er / am -sten to most adjectives."},
    {t:"words",items:[{tr:"größer",pr:"GRUR-ser",en:"bigger"},{tr:"am größten",pr:"am GRUR-sten",en:"biggest"},{tr:"als",pr:"als",en:"than"}]},
    {t:"chal",en:"This one is bigger than that one",tr:"Dieser ist größer als jener",pr:"DEE-zer ist GRUR-ser als YAY-ner",morph:["dieser = this one","größer = bigger","als = than","jener = that one"]},
    {t:"chal",en:"This is the biggest",tr:"Das ist am größten",pr:"das ist am GRUR-sten",morph:["das ist = this is","am größten = the biggest"]}
   ],blocks:["Farbe colour · rot/blau/weiß/schwarz","groß big · klein small · schön beautiful","größer…als = bigger…than · am größten = biggest"]}
]},
 arabic:{ name:"Arabic", flag:"🇸🇦", tts:"ar-SA", dir:"rtl",
  blurb:"Traveller's Modern Standard Arabic — and you'll recognise a surprising amount from Hindi/Urdu. Same build-from-pieces approach. From Lesson 31 the root machine kicks in: three consonants unlock whole families of words.",
  note:"Arabic reads <b>right-to-left</b>. We show the script (which the voice reads) plus a transliteration (the sound). Sounds: <b>kh</b> like the 'ch' in Scottish loch, <b>ḥ</b> a breathy h, <b>ʿ</b>/<b>ʾ</b> a soft throat catch. Just copy the audio — and notice how many words you already know. <b>A note on dialect:</b> the lessons teach Modern Standard Arabic (MSA) — it's understood everywhere and is what's written, but no one actually chats in it. Where you see a <span style='color:var(--teal)'>🗣️ in everyday speech</span> line under a phrase, that's the everyday Gulf-colloquial version people actually say out loud — a starting point, not exhaustively verified against every Gulf dialect, so treat it as a helpful lean rather than gospel until a native speaker's confirmed it for your specific context.",
  resources:[
   {icon:"🗣️",t:"Easy Arabic",d:"Street interviews with subtitles (note: often dialect, not MSA).",q:"Easy Arabic Easy Languages"},
   {icon:"📚",t:"ArabicPod101",d:"Structured lessons in MSA and dialects.",q:"ArabicPod101"},
   {icon:"👩‍🏫",t:"Learn Arabic with Maha",d:"Clear beginner lessons (Egyptian + MSA).",q:"Learn Arabic with Maha"},
   {icon:"🌱",t:"Comprehensible-input Arabic",d:"Slow, understandable Arabic to train your ear.",q:"comprehensible input Arabic for beginners"},
   {icon:"🔤",t:"Arabic alphabet & sounds",d:"Learn the script and the tricky throat sounds.",q:"Arabic alphabet for beginners"}
  ],
  lessons:[
{id:1,title:"Greetings",focus:"مرحبا · شكرا · السلام عليكم",steps:[
    {t:"words",items:[{tr:"مرحبا",pr:"marḥaban",en:"hello"},{tr:"شكرا",pr:"shukran",en:"thanks"},{tr:"مع السلامة",pr:"maʿa s-salāma",en:"goodbye"}]},
    {t:"chal",en:"Hello",tr:"مرحبا",pr:"marḥaban",morph:["مرحبا = hello"]},
    {t:"chal",en:"Thank you",tr:"شكرا",pr:"shukran",morph:["شكرا = thanks"],link:"shukran ≈ shukriya (Hindi/Urdu)"},
    {t:"say",text:"The universal greeting is <b>As-salāmu ʿalaykum</b> ('peace be upon you'). The reply flips it: wa ʿalaykum as-salām."},
    {t:"chal",en:"Peace be upon you (hello)",tr:"السلام عليكم",pr:"as-salāmu ʿalaykum",morph:["salām = peace"],link:"you'll know this one already!"},
    {t:"say",text:"Please = <b>min faḍlak</b> to a man, <b>min faḍlik</b> to a woman (in the Gulf you will also hear <b>law samaḥt</b>). Yes = naʿam, no = lā."},
    {t:"chal",en:"Please (to a man)",tr:"من فضلك",pr:"min faḍlak",morph:["min = from","faḍlak = your kindness (to a man; to a woman: faḍlik)"],spoken:{tr:"لو سمحت",pr:"law samaḥt"}},
    {t:"chal",en:"Good morning",tr:"صباح الخير",pr:"ṣabāḥ al-khayr",morph:["ṣabāḥ = morning","khayr = good"]},
    {t:"chal",en:"Excuse me, please",tr:"آسف، من فضلك",pr:"āsif, min faḍlak",morph:["آسف = sorry","من فضلك = please"]}
   ],blocks:["مرحبا = hello · شكرا = thanks","السلام عليكم = peace be upon you","من فضلك = please · نعم naʿam = yes · لا lā = no","صباح الخير = good morning"]},
{id:2,title:"\"I want\" أريد",focus:"أريد · قهوة · بكم",steps:[
    {t:"say",text:"'I want' is <b>urīd</b> (أريد). And coffee is <b>qahwa</b> (قهوة) — the very word Turkish 'kahve' and English 'coffee' come from!"},
    {t:"chal",en:"I want coffee",tr:"أريد قهوة",pr:"urīd qahwa",morph:["urīd = I want","qahwa = coffee"],link:"qahwa ≈ kahve / coffee",spoken:{tr:"أبغى قهوة",pr:"abgha gahwa"}},
    {t:"say",text:"Water = <b>māʾ</b> (ماء), tea = <b>shāy</b> (شاي) — chai again!"},
    {t:"chal",en:"I want tea",tr:"أريد شاي",pr:"urīd shāy",morph:["urīd = I want","shāy = tea"],link:"shāy ≈ chai!",spoken:{tr:"أبغى شاي",pr:"abgha shāy"}},
    {t:"chal",en:"I want water",tr:"أريد ماء",pr:"urīd māʾ",morph:["urīd = I want","māʾ = water"],spoken:{tr:"أبغى موية",pr:"abgha moya"}},
    {t:"say",text:"To ask a price: <b>bikam hādhā?</b> = 'for how much, this?'"},
    {t:"chal",en:"How much is this?",tr:"بكم هذا؟",pr:"bikam hādhā",morph:["bikam = how much","hādhā = this"]},
    {t:"say",text:"'I don't want' = <b>lā urīd</b> (لا = not)."},
    {t:"chal",en:"I don't want",tr:"لا أريد",pr:"lā urīd",morph:["lā = not","urīd = want"]}
   ],blocks:["أريد urīd = I want · لا أريد = I don't want","قهوة coffee · شاي tea · ماء water","بكم هذا؟ = how much is this?"]},
{id:3,title:"Numbers",focus:"واحد to عشرة",steps:[
    {t:"words",items:[{tr:"واحد",pr:"wāḥid",en:"1"},{tr:"اثنان",pr:"ithnān",en:"2"},{tr:"ثلاثة",pr:"thalātha",en:"3"},{tr:"أربعة",pr:"arbaʿa",en:"4"},{tr:"خمسة",pr:"khamsa",en:"5"}]},
    {t:"words",items:[{tr:"ستة",pr:"sitta",en:"6"},{tr:"سبعة",pr:"sabʿa",en:"7"},{tr:"ثمانية",pr:"thamāniya",en:"8"},{tr:"تسعة",pr:"tisʿa",en:"9"},{tr:"عشرة",pr:"ʿashara",en:"10"}]},
    {t:"chal",en:"ten",tr:"عشرة",pr:"ʿashara",morph:["عشرة = 10"]},
    {t:"say",text:"One hundred is <b>miʾa</b> (مئة)."},
    {t:"chal",en:"one hundred",tr:"مئة",pr:"miʾa",morph:["مئة = 100"]}
   ],blocks:["واحد–عشرة = 1–10","مئة miʾa = 100"]},
{id:4,title:"Food",focus:"القائمة · لا آكل اللحم · الحساب",steps:[
    {t:"words",items:[{tr:"القائمة",pr:"al-qāʾima",en:"the menu"},{tr:"خبز",pr:"khubz",en:"bread"},{tr:"ماء",pr:"māʾ",en:"water"}]},
    {t:"chal",en:"The menu, please",tr:"القائمة من فضلك",pr:"al-qāʾima min faḍlak",morph:["al-qāʾima = the menu","min faḍlak = please"]},
    {t:"say",text:"'I don't eat meat' = <b>lā ākul al-laḥm</b> (laḥm = meat)."},
    {t:"chal",en:"I don't eat meat",tr:"لا آكل اللحم",pr:"lā ākul al-laḥm",morph:["lā = not","ākul = I eat","al-laḥm = the meat"]},
    {t:"chal",en:"It's delicious",tr:"إنه لذيذ",pr:"innahu ladhīdh",morph:["إنه = it is","لذيذ = delicious"]},
    {t:"say",text:"The bill is <b>al-ḥisāb</b> (الحساب) — exactly 'hisaab'!"},
    {t:"chal",en:"The bill, please",tr:"الحساب من فضلك",pr:"al-ḥisāb min faḍlak",morph:["الحساب = the bill","من فضلك = please"],link:"ḥisāb ≈ hisaab (Hindi/Urdu)"}
   ],blocks:["القائمة = the menu","لا آكل اللحم = I don't eat meat","لذيذ = delicious","الحساب = the bill (hisaab!)"]},
{id:5,title:"Getting around",focus:"أين · يمين/يسار · المطار",steps:[
    {t:"say",text:"'Where?' is <b>ayna</b> (أين). 'Bathroom' is al-ḥammām (الحمام)."},
    {t:"chal",en:"Where is the bathroom?",tr:"أين الحمام؟",pr:"ayna al-ḥammām",morph:["ayna = where","al-ḥammām = the bathroom"]},
    {t:"words",items:[{tr:"يمين",pr:"yamīn",en:"right"},{tr:"يسار",pr:"yasār",en:"left"},{tr:"على طول",pr:"ʿalā ṭūl",en:"straight ahead"}]},
    {t:"chal",en:"I want a taxi",tr:"أريد سيارة أجرة",pr:"urīd sayyārat ujra",morph:["urīd = I want","سيارة = car","أجرة = hire"]},
    {t:"chal",en:"Where is the airport?",tr:"أين المطار؟",pr:"ayna al-maṭār",morph:["أين = where","المطار = the airport"]},
    {t:"say",text:"If lost: 'I don't understand' = <b>lā afham</b> (لا أفهم)."},
    {t:"chal",en:"I don't understand",tr:"لا أفهم",pr:"lā afham",morph:["lā = not","afham = I understand"]}
   ],blocks:["أين؟ = where?","يمين right · يسار left · على طول straight","أريد سيارة أجرة = I want a taxi","أين المطار؟ = where is the airport?","لا أفهم = I don't understand"]},
{id:6,title:"\"I have / do you have\" عندي",focus:"عندي · هل عندك · لا مشكلة",steps:[
    {t:"say",text:"'I have' is <b>عندي</b> (ʿindī) — literally 'at-me'. 'Do you have…?' is <b>هل عندك…؟</b> (hal ʿindak)."},
    {t:"chal",en:"I have a question (سؤال)",tr:"عندي سؤال",pr:"ʿindī suʾāl",morph:["عندي = I have (at me)","سؤال = a question"]},
    {t:"chal",en:"Do you have water?",tr:"هل عندك ماء؟",pr:"hal ʿindak māʾ",morph:["هل = (question)","عندك = you have","ماء = water"]},
    {t:"say",text:"A phrase you'll hear and use a lot: <b>لا مشكلة</b> (lā mushkila) = 'no problem'."},
    {t:"chal",en:"No problem",tr:"لا مشكلة",pr:"lā mushkila",morph:["لا = no","مشكلة = problem"]},
    {t:"chal",en:"I don't have time (وقت)",tr:"ليس عندي وقت",pr:"laysa ʿindī waqt",morph:["ليس = not","عندي = I have","وقت = time"]}
   ],blocks:["عندي = I have · هل عندك…؟ = do you have?","ليس عندي = I don't have","لا مشكلة = no problem"]},
{id:7,title:"Talking about the past",focus:"-تُ = I … (past)",steps:[
    {t:"say",text:"Arabic past tense adds an ending for 'I': <b>-tu</b>. 'he went' ذهب (dhahaba) → 'I went' ذهبت (dhahabtu)."},
    {t:"chal",en:"I went",tr:"ذهبت",pr:"dhahabtu",morph:["ذهب = went","-tu = I"]},
    {t:"chal",en:"I ate",tr:"أكلت",pr:"akaltu",morph:["أكل = ate","-tu = I"]},
    {t:"chal",en:"I saw",tr:"رأيت",pr:"raʾaytu",morph:["رأى = saw","-tu = I"]},
    {t:"say",text:"Add a place with إلى (ilā = to)."},
    {t:"chal",en:"I went to the airport",tr:"ذهبت إلى المطار",pr:"dhahabtu ilā al-maṭār",morph:["ذهبت = I went","إلى = to","المطار = the airport"]}
   ],blocks:["-تُ (-tu) = I … (past)","ذهبت I went · أكلت I ate · رأيت I saw","إلى ilā = to"]},
{id:8,title:"Mine & yours",focus:"-ي = my · -ك = your",steps:[
    {t:"say",text:"'My' is the suffix <b>-ī</b> (ـي) stuck on the noun. اسم (ism = name) → اسمي (ismī = my name)."},
    {t:"chal",en:"my name",tr:"اسمي",pr:"ismī",morph:["اسم = name","-ī = my"]},
    {t:"chal",en:"my book (كتاب)",tr:"كتابي",pr:"kitābī",morph:["كتاب = book","-ī = my"],link:"كتاب kitāb ≈ kitaab"},
    {t:"say",text:"'Your (to a man)' is the suffix <b>-ak</b> (ـك): اسمك = your name."},
    {t:"chal",en:"your name",tr:"اسمك",pr:"ismak",morph:["اسم = name","-ak = your"]},
    {t:"chal",en:"my passport (جواز)",tr:"جوازي",pr:"jawāzī",morph:["جواز = passport","-ī = my"]}
   ],blocks:["-ي (-ī) = my","-ك (-ak) = your (to a man)","the possessor is a suffix on the noun"]},
{id:9,title:"Time & when",focus:"اليوم · الآن · كم الساعة",steps:[
    {t:"say",text:"Time words: اليوم <b>al-yawm</b> today, غدا <b>ghadan</b> tomorrow, أمس <b>ams</b> yesterday, الآن <b>al-ān</b> now."},
    {t:"words",items:[{tr:"اليوم",pr:"al-yawm",en:"today"},{tr:"غدا",pr:"ghadan",en:"tomorrow"},{tr:"الآن",pr:"al-ān",en:"now"}]},
    {t:"chal",en:"today",tr:"اليوم",pr:"al-yawm",morph:["اليوم = today"]},
    {t:"chal",en:"now",tr:"الآن",pr:"al-ān",morph:["الآن = now"]},
    {t:"say",text:"'What time is it?' is <b>كم الساعة؟</b> (kam as-sāʿa) — literally 'how much the hour?'"},
    {t:"chal",en:"What time is it?",tr:"كم الساعة؟",pr:"kam as-sāʿa",morph:["كم = how much","الساعة = the hour"]},
    {t:"chal",en:"tomorrow",tr:"غدا",pr:"ghadan",morph:["غدا = tomorrow"]}
   ],blocks:["اليوم today · غدا tomorrow · الآن now","كم الساعة؟ = what time is it?"]},
{id:10,title:"The question words",focus:"ما · من · لماذا · كيف",steps:[
    {t:"say",text:"ما / ماذا <b>mā/mādhā</b> what, أين <b>ayna</b> where, من <b>man</b> who, لماذا <b>limādhā</b> why, كيف <b>kayfa</b> how."},
    {t:"words",items:[{tr:"ماذا",pr:"mādhā",en:"what"},{tr:"من",pr:"man",en:"who"},{tr:"كيف",pr:"kayfa",en:"how"}]},
    {t:"chal",en:"What is this?",tr:"ما هذا؟",pr:"mā hādhā",morph:["ما = what","هذا = this"]},
    {t:"chal",en:"Who is this?",tr:"من هذا؟",pr:"man hādhā",morph:["من = who","هذا = this"]},
    {t:"chal",en:"Why?",tr:"لماذا؟",pr:"limādhā",morph:["لماذا = why"]},
    {t:"chal",en:"How are you?",tr:"كيف حالك؟",pr:"kayfa ḥālak",morph:["كيف = how","حالك = your state"]}
   ],blocks:["ما what · من who · كيف how · لماذا why","كيف حالك؟ = how are you?"]},
{id:11,title:"Where things are",focus:"في · هنا · قريب",steps:[
    {t:"say",text:"'In / at' is <b>في</b> (fī). أنا في الفندق = I'm at the hotel. هنا <b>hunā</b> here, هناك <b>hunāka</b> there."},
    {t:"chal",en:"I'm at the hotel",tr:"أنا في الفندق",pr:"anā fī al-funduq",morph:["أنا = I","في = at","الفندق = the hotel"]},
    {t:"chal",en:"here",tr:"هنا",pr:"hunā",morph:["هنا = here"]},
    {t:"chal",en:"The bathroom is here",tr:"الحمام هنا",pr:"al-ḥammām hunā",morph:["الحمام = the bathroom","هنا = here"]},
    {t:"say",text:"قريب <b>qarīb</b> = near. Combine with 'is there' (يوجد, yūjad)."},
    {t:"chal",en:"Is there a bank nearby?",tr:"هل يوجد بنك قريب؟",pr:"hal yūjad bank qarīb",morph:["هل = (question)","يوجد = there is","بنك = bank","قريب = near"]}
   ],blocks:["في fī = in / at","هنا here · هناك there · قريب near","هل يوجد…؟ = is there…?"]},
{id:12,title:"Need & can",focus:"أحتاج · هل يمكنني",steps:[
    {t:"say",text:"'I need' is <b>أحتاج</b> (aḥtāj). 'Can I…?' is <b>هل يمكنني…؟</b> (hal yumkinunī)."},
    {t:"chal",en:"I need help (مساعدة)",tr:"أحتاج مساعدة",pr:"aḥtāj musāʿada",morph:["أحتاج = I need","مساعدة = help"]},
    {t:"chal",en:"I need a taxi",tr:"أحتاج سيارة أجرة",pr:"aḥtāj sayyārat ujra",morph:["أحتاج = I need","سيارة أجرة = taxi"]},
    {t:"chal",en:"Can I sit here?",tr:"هل يمكنني الجلوس هنا؟",pr:"hal yumkinunī al-julūs hunā",morph:["هل يمكنني = can I","الجلوس = sitting","هنا = here"]},
    {t:"chal",en:"Can you help me?",tr:"هل يمكنك مساعدتي؟",pr:"hal yumkinuka musāʿadatī",morph:["هل يمكنك = can you","مساعدتي = help me"]}
   ],blocks:["أحتاج = I need","هل يمكنني…؟ = can I…?","هل يمكنك مساعدتي؟ = can you help me?"]},
{id:13, title:"Because, but & joining ideas", focus:"لأن · لكن · أيضاً", steps:[
 {t:"say", text:"Connectors let you link ideas: <b>because</b>, <b>but</b>, <b>also</b> and <b>and</b>. \"Very\" adds emphasis."},
 {t:"words", items:[
  {tr:"لأن", pr:"li-ANN", en:"because"},
  {tr:"لكن", pr:"LAA-kin", en:"but"},
  {tr:"أيضاً", pr:"AY-dan", en:"also/too"},
  {tr:"و", pr:"wa", en:"and"},
  {tr:"جداً", pr:"JID-dan", en:"very"},
  {tr:"لذلك", pr:"li-ZAA-lik", en:"so/therefore"}
 ]},
 {t:"chal", en:"I want water because I am thirsty", tr:"أريد ماءً لأنني عطشان", pr:"u-REED MAA-an li-AN-na-nee 'aT-SHAAN", morph:["أريد ماءً = I want water","لأنني = because I","عطشان = thirsty"]},
 {t:"chal", en:"The food is good but expensive", tr:"الطعام جيد لكن غالٍ", pr:"aT-Ta-'AAM JAY-yid LAA-kin GHAA-lin", morph:["الطعام = the food","جيد = good","لكن = but","غالٍ = expensive"]},
 {t:"chal", en:"I also want coffee", tr:"أريد القهوة أيضاً", pr:"u-REED al-QAH-wa AY-dan", morph:["أريد = I want","القهوة = the coffee","أيضاً = also"]},
 {t:"chal", en:"This is very delicious", tr:"هذا لذيذ جداً", pr:"HAA-za la-ZEEZ JID-dan", morph:["هذا = this","لذيذ = delicious","جداً = very"]},
 {t:"chal", en:"Tea and coffee", tr:"شاي وقهوة", pr:"SHAAY wa-QAH-wa", morph:["شاي = tea","و = and","قهوة = coffee"]}
], blocks:["الطعام جيد لكن غالٍ","هذا لذيذ جداً","أريد القهوة أيضاً"]},
{id:14,title:"Shopping & bargaining",focus:"غالي · أرخص · خصم",steps:[
    {t:"say",text:"'This one' is هذا (hādhā). 'Too expensive' is <b>غالي جدا</b> (ghālī jiddan); 'cheaper' is <b>أرخص</b> (arkhaṣ)."},
    {t:"chal",en:"I want this",tr:"أريد هذا",pr:"urīd hādhā",morph:["أريد = I want","هذا = this"]},
    {t:"chal",en:"Too expensive",tr:"غالي جدا",pr:"ghālī jiddan",morph:["غالي = expensive","جدا = very"]},
    {t:"chal",en:"Is there a cheaper one?",tr:"هل يوجد أرخص؟",pr:"hal yūjad arkhaṣ",morph:["هل يوجد = is there","أرخص = cheaper"]},
    {t:"chal",en:"A discount, please",tr:"خصم من فضلك",pr:"khaṣm min faḍlak",morph:["خصم = discount","من فضلك = please"]}
   ],blocks:["غالي جدا = too expensive","أرخص = cheaper · خصم = discount","هل يوجد أرخص؟ = is there a cheaper one?"]},
{id:15,title:"Help & emergencies",focus:"النجدة · طبيب · الشرطة",steps:[
    {t:"say",text:"The words you hope not to need: النجدة <b>an-najda</b> help!, طبيب <b>ṭabīb</b> doctor, مستشفى <b>mustashfā</b> hospital, شرطة <b>shurṭa</b> police."},
    {t:"chal",en:"Help, please!",tr:"النجدة من فضلك!",pr:"an-najda min faḍlak",morph:["النجدة = help","من فضلك = please"]},
    {t:"chal",en:"I'm sick",tr:"أنا مريض",pr:"anā marīḍ",morph:["أنا = I","مريض = sick"]},
    {t:"chal",en:"I need a doctor",tr:"أحتاج طبيب",pr:"aḥtāj ṭabīb",morph:["أحتاج = I need","طبيب = doctor"]},
    {t:"chal",en:"Where is the hospital?",tr:"أين المستشفى؟",pr:"ayna al-mustashfā",morph:["أين = where","المستشفى = the hospital"]},
    {t:"chal",en:"Call the police",tr:"اتصل بالشرطة",pr:"ittaṣil bish-shurṭa",morph:["اتصل = call","بالشرطة = the police"]}
   ],blocks:["النجدة! = help! · أنا مريض = I'm sick","طبيب doctor · مستشفى hospital · شرطة police","اتصل بالشرطة = call the police"]},
{id:16,title:"Family & people",focus:"عائلة · زوجتي · أطفال",steps:[
    {t:"say",text:"عائلة <b>ʿāʾila</b> family. With the -ī 'my' suffix: عائلتي = my family."},
    {t:"chal",en:"my family",tr:"عائلتي",pr:"ʿāʾilatī",morph:["عائلة = family","-ī = my"]},
    {t:"chal",en:"my wife",tr:"زوجتي",pr:"zawjatī",morph:["زوجة = wife","-ī = my"]},
    {t:"chal",en:"I have three children",tr:"عندي ثلاثة أطفال",pr:"ʿindī thalāthat aṭfāl",morph:["عندي = I have","ثلاثة = three","أطفال = children"]},
    {t:"chal",en:"This is my friend",tr:"هذا صديقي",pr:"hādhā ṣadīqī",morph:["هذا = this","صديقي = my friend"]}
   ],blocks:["عائلتي = my family · زوجتي = my wife","أطفال = children · صديق = friend","عندي ثلاثة أطفال = I have three children"]},
{id:17,title:"Colours & describing",focus:"لون · أحمر · كبير/صغير",steps:[
    {t:"say",text:"لون <b>lawn</b> = colour. أحمر red, أزرق blue, أبيض white, أسود black."},
    {t:"words",items:[{tr:"أحمر",pr:"aḥmar",en:"red"},{tr:"أزرق",pr:"azraq",en:"blue"},{tr:"أبيض",pr:"abyaḍ",en:"white"}]},
    {t:"chal",en:"red",tr:"أحمر",pr:"aḥmar",morph:["أحمر = red"]},
    {t:"chal",en:"big",tr:"كبير",pr:"kabīr",morph:["كبير = big"]},
    {t:"chal",en:"small",tr:"صغير",pr:"ṣaghīr",morph:["صغير = small"]},
    {t:"chal",en:"very beautiful",tr:"جميل جدا",pr:"jamīl jiddan",morph:["جميل = beautiful","جدا = very"]},
    {t:"say",text:"To compare: <b>أكبر</b> (akbar) = bigger, <b>الأكبر</b> (al-akbar) = the biggest, <b>من</b> (min) = than."},
    {t:"words",items:[{tr:"أكبر",pr:"akbar",en:"bigger"},{tr:"الأكبر",pr:"al-akbar",en:"the biggest"},{tr:"من",pr:"min",en:"than"}]},
    {t:"chal",en:"This is bigger than that",tr:"هذا أكبر من ذلك",pr:"hādhā akbar min dhālik",morph:["هذا = this","أكبر = bigger","من = than","ذلك = that"]},
    {t:"chal",en:"This is the biggest",tr:"هذا الأكبر",pr:"hādhā al-akbar",morph:["هذا = this","الأكبر = the biggest"]}
   ],blocks:["لون colour · أحمر/أزرق/أبيض/أسود","كبير big · صغير small · جميل beautiful","أكبر من = bigger than · الأكبر = the biggest"]}
]},
 telugu:{ name:"Telugu", flag:"🇮🇳", tts:"te-IN", dir:"ltr",
  blurb:"Survival Telugu, built the reason-it-out way. Telugu's verb-last, glue-on-endings logic feels a lot like Turkish.",
  note:"Telugu is a Dravidian language with its own rounded script. We show the script (which the voice reads) plus a transliteration. Tap 🔊 and copy — and notice the grammar works like Turkish: verb last, endings glued on.",
  resources:[
   {icon:"🗣️",t:"Learn Telugu (beginner)",d:"Beginner Telugu through English.",q:"learn Telugu for beginners through English"},
   {icon:"💬",t:"Telugu conversation practice",d:"Everyday spoken Telugu phrases.",q:"Telugu conversation practice for beginners"},
   {icon:"🔤",t:"Telugu alphabet & script",d:"Read and write the Telugu script.",q:"Telugu alphabet for beginners"},
   {icon:"🧳",t:"Telugu for travellers",d:"Survival phrases for visiting Andhra/Telangana.",q:"Telugu phrases for travelers"},
   {icon:"🎵",t:"Telugu with songs & stories",d:"Pick up vocabulary the fun way.",q:"learn Telugu through stories"}
  ],
  lessons:[
   {id:1,title:"Greetings",focus:"నమస్కారం · ధన్యవాదాలు",steps:[
    {t:"say",text:"Telugu starts gently. Tap the audio and copy the sound — the transliteration under each phrase is just the pronunciation."},
    {t:"words",items:[{tr:"నమస్కారం",pr:"namaskāram",en:"hello",link:"≈ namaskār (Hindi/Marathi)"},{tr:"ధన్యవాదాలు",pr:"dhanyavādālu",en:"thank you",link:"≈ dhanyavād"},{tr:"సెలవు",pr:"selavu",en:"goodbye"}]},
    {t:"chal",en:"Hello",tr:"నమస్కారం",pr:"namaskāram",morph:["నమస్కారం = a respectful hello"]},
    {t:"chal",en:"Thank you",tr:"ధన్యవాదాలు",pr:"dhanyavādālu",morph:["ధన్యవాదాలు = thanks"]},
    {t:"say",text:"'Yes' is <b>అవును</b> (avunu), 'no' is <b>కాదు</b> (kādu), 'please' is <b>దయచేసి</b> (dayachēsi)."},
    {t:"chal",en:"Please",tr:"దయచేసి",pr:"dayachēsi",morph:["దయ = kindness","చేసి = having done"]},
    {t:"chal",en:"Yes",tr:"అవును",pr:"avunu",morph:["అవును = yes"]},
    {t:"chal",en:"Excuse me, please",tr:"క్షమించండి, దయచేసి",pr:"kshaminchaṇḍi, dayachēsi",morph:["క్షమించండి = sorry","దయచేసి = please"]}
   ],blocks:["నమస్కారం = hello","ధన్యవాదాలు = thanks","అవును yes · కాదు no · దయచేసి please"]},
   {id:2,title:"\"I want\" నాకు కావాలి",focus:"నాకు కావాలి · ఎంత",steps:[
    {t:"say",text:"'I want' is <b>నాకు కావాలి</b> (nāku kāvāli) — literally 'to-me needed'. Like Turkish, the verb comes at the end."},
    {t:"words",items:[{tr:"నీళ్లు",pr:"nīḷḷu",en:"water"},{tr:"టీ",pr:"ṭī",en:"tea"},{tr:"కాఫీ",pr:"kāphī",en:"coffee",link:"≈ coffee"}]},
    {t:"chal",en:"I want water",tr:"నాకు నీళ్లు కావాలి",pr:"nāku nīḷḷu kāvāli",morph:["నాకు = to me","నీళ్లు = water","కావాలి = needed"]},
    {t:"chal",en:"I want tea",tr:"నాకు టీ కావాలి",pr:"nāku ṭī kāvāli",morph:["నాకు = to me","టీ = tea","కావాలి = needed"]},
    {t:"say",text:"'This' is <b>ఇది</b> (idi); 'how much' is <b>ఎంత</b> (enta)."},
    {t:"chal",en:"How much is this?",tr:"ఇది ఎంత?",pr:"idi enta",morph:["ఇది = this","ఎంత = how much"]},
    {t:"say",text:"'I don't want' is <b>నాకు వద్దు</b> (nāku vaddu)."},
    {t:"chal",en:"I don't want",tr:"నాకు వద్దు",pr:"nāku vaddu",morph:["నాకు = to me","వద్దు = not wanted"]}
   ],blocks:["నాకు … కావాలి = I want …","నాకు వద్దు = I don't want","ఇది ఎంత? = how much is this?"]},
   {id:3,title:"Numbers",focus:"ఒకటి to పది",steps:[
    {t:"words",items:[{tr:"ఒకటి",pr:"okaṭi",en:"1"},{tr:"రెండు",pr:"reṇḍu",en:"2"},{tr:"మూడు",pr:"mūḍu",en:"3"},{tr:"నాలుగు",pr:"nālugu",en:"4"},{tr:"ఐదు",pr:"aidu",en:"5"}]},
    {t:"words",items:[{tr:"ఆరు",pr:"āru",en:"6"},{tr:"ఏడు",pr:"ēḍu",en:"7"},{tr:"ఎనిమిది",pr:"enimidi",en:"8"},{tr:"తొమ్మిది",pr:"tommidi",en:"9"},{tr:"పది",pr:"padi",en:"10"}]},
    {t:"chal",en:"ten",tr:"పది",pr:"padi",morph:["పది = 10"]},
    {t:"say",text:"One hundred is <b>వంద</b> (vanda)."},
    {t:"chal",en:"one hundred",tr:"వంద",pr:"vanda",morph:["వంద = 100"]}
   ],blocks:["ఒకటి–పది = 1–10","వంద = 100"]},
   {id:4,title:"Food",focus:"అన్నం · బిల్లు",steps:[
    {t:"words",items:[{tr:"అన్నం",pr:"annam",en:"food / rice"},{tr:"రొట్టె",pr:"roṭṭe",en:"bread",link:"≈ roti"},{tr:"నీళ్లు",pr:"nīḷḷu",en:"water"}]},
    {t:"chal",en:"I want food",tr:"నాకు అన్నం కావాలి",pr:"nāku annam kāvāli",morph:["నాకు = to me","అన్నం = food","కావాలి = needed"]},
    {t:"say",text:"'I don't eat meat' is <b>నేను మాంసం తినను</b> (nēnu mānsam tinanu)."},
    {t:"chal",en:"I don't eat meat",tr:"నేను మాంసం తినను",pr:"nēnu mānsam tinanu",morph:["నేను = I","మాంసం = meat","తినను = don't eat"]},
    {t:"chal",en:"It's delicious",tr:"రుచిగా ఉంది",pr:"ruchigā undi",morph:["రుచిగా = tasty","ఉంది = it is"]},
    {t:"say",text:"The bill is <b>బిల్లు</b> (billu)."},
    {t:"chal",en:"The bill, please",tr:"బిల్లు, దయచేసి",pr:"billu, dayachēsi",morph:["బిల్లు = bill","దయచేసి = please"]}
   ],blocks:["నాకు అన్నం కావాలి = I want food","నేను మాంసం తినను = I don't eat meat","రుచిగా ఉంది = delicious","బిల్లు = the bill"]},
   {id:5,title:"Getting around",focus:"ఎక్కడ · ఎడమ/కుడి",steps:[
    {t:"say",text:"'Where?' is <b>ఎక్కడ</b> (ekkaḍa). Telugu just says '[thing] where?'."},
    {t:"chal",en:"Where is the toilet?",tr:"టాయిలెట్ ఎక్కడ?",pr:"ṭāyileṭ ekkaḍa",morph:["టాయిలెట్ = toilet","ఎక్కడ = where"]},
    {t:"words",items:[{tr:"ఎడమ",pr:"eḍama",en:"left"},{tr:"కుడి",pr:"kuḍi",en:"right"},{tr:"నేరుగా",pr:"nērugā",en:"straight"}]},
    {t:"chal",en:"Where is the hotel?",tr:"హోటల్ ఎక్కడ?",pr:"hōṭal ekkaḍa",morph:["హోటల్ = hotel","ఎక్కడ = where"]},
    {t:"chal",en:"Where is the airport?",tr:"విమానాశ్రయం ఎక్కడ?",pr:"vimānāśrayam ekkaḍa",morph:["విమానాశ్రయం = airport","ఎక్కడ = where"]},
    {t:"chal",en:"I want a taxi",tr:"నాకు టాక్సీ కావాలి",pr:"nāku ṭāksī kāvāli",morph:["నాకు = to me","టాక్సీ = taxi","కావాలి = needed"]},
    {t:"chal",en:"I need help",tr:"నాకు సహాయం కావాలి",pr:"nāku sahāyam kāvāli",morph:["నాకు = to me","సహాయం = help","కావాలి = needed"]},
    {t:"say",text:"If you're lost: 'I don't understand' is <b>నాకు అర్థం కాలేదు</b> (nāku artham kālēdu)."},
    {t:"chal",en:"I don't understand",tr:"నాకు అర్థం కాలేదు",pr:"nāku artham kālēdu",morph:["నాకు = to me","అర్థం = meaning","కాలేదు = didn't come"]}
   ],blocks:["ఎక్కడ? = where?","ఎడమ left · కుడి right · నేరుగా straight","విమానాశ్రయం airport · టాక్సీ taxi · సహాయం help","నాకు అర్థం కాలేదు = I don't understand"]},
   {id:6,title:"\"I have / is there\" ఉంది",focus:"నా దగ్గర ఉంది · ఉందా · లేదు",steps:[
    {t:"say",text:"'I have' is <b>నా దగ్గర ఉంది</b> (nā daggara undi) — literally 'near me it-is'. To ask 'is there?', use <b>ఉందా?</b> (undā)."},
    {t:"chal",en:"I have money (డబ్బు)",tr:"నా దగ్గర డబ్బు ఉంది",pr:"nā daggara ḍabbu undi",morph:["నా దగ్గర = near me","డబ్బు = money","ఉంది = it is"]},
    {t:"chal",en:"Is there tea?",tr:"టీ ఉందా?",pr:"ṭī undā",morph:["టీ = tea","ఉందా = is there?"]},
    {t:"chal",en:"Is there a room? (గది)",tr:"గది ఉందా?",pr:"gadi undā",morph:["గది = room","ఉందా = is there?"]},
    {t:"say",text:"'There isn't / I don't have' is <b>లేదు</b> (lēdu)."},
    {t:"chal",en:"I don't have time (సమయం)",tr:"నా దగ్గర సమయం లేదు",pr:"nā daggara samayam lēdu",morph:["నా దగ్గర = near me","సమయం = time","లేదు = isn't"]}
   ],blocks:["నా దగ్గర … ఉంది = I have …","… ఉందా? = is there …?","లేదు = isn't / don't have"]},
   {id:7,title:"Talking about the past",focus:"-ను = I … (past)",steps:[
    {t:"say",text:"Telugu marks 'I did' with the ending <b>-ను</b> (-nu). 'I go' వెళ్తాను → 'I went' వెళ్ళాను (veḷḷānu)."},
    {t:"chal",en:"I went",tr:"నేను వెళ్ళాను",pr:"nēnu veḷḷānu",morph:["నేను = I","వెళ్ళాను = went"]},
    {t:"chal",en:"I ate",tr:"నేను తిన్నాను",pr:"nēnu tinnānu",morph:["నేను = I","తిన్నాను = ate"]},
    {t:"chal",en:"I saw",tr:"నేను చూశాను",pr:"nēnu chūśānu",morph:["నేను = I","చూశాను = saw"]},
    {t:"say",text:"To ask 'did you…?', use the ending <b>-ారా</b> (-ārā): తిన్నారా? = did you eat?"},
    {t:"chal",en:"Did you eat?",tr:"తిన్నారా?",pr:"tinnārā",morph:["తిన్న = ate","-ారా = did you?"]}
   ],blocks:["-ను (-nu) = I … (past)","వెళ్ళాను went · తిన్నాను ate · చూశాను saw","-ారా (-ārā) = did you…?"]},
   {id:8,title:"Mine & yours",focus:"నా = my · మీ = your",steps:[
    {t:"say",text:"'My' is <b>నా</b> (nā), 'your' is <b>మీ</b> (mī) — placed before the noun. 'my name' = నా పేరు (nā pēru)."},
    {t:"chal",en:"my name",tr:"నా పేరు",pr:"nā pēru",morph:["నా = my","పేరు = name"]},
    {t:"chal",en:"This is my bag (బ్యాగ్)",tr:"ఇది నా బ్యాగ్",pr:"idi nā byāg",morph:["ఇది = this","నా = my","బ్యాగ్ = bag"]},
    {t:"chal",en:"your name",tr:"మీ పేరు",pr:"mī pēru",morph:["మీ = your","పేరు = name"]},
    {t:"chal",en:"my friend (స్నేహితుడు)",tr:"నా స్నేహితుడు",pr:"nā snēhitudu",morph:["నా = my","స్నేహితుడు = friend"]}
   ],blocks:["నా = my · మీ = your","placed before the noun","నా పేరు = my name"]}
  ]},
 farsi:{ name:"Farsi", flag:"🇮🇷", tts:"fa-IR", dir:"rtl",
  blurb:"Persian (Farsi) — and you'll be amazed how much you already know from Hindi/Urdu. Same build-from-pieces approach.",
  note:"Persian reads <b>right-to-left</b> in the Arabic script, but it's an Indo-European language — grammatically close to Hindi/Urdu and far simpler than Arabic. We show the script (which the voice reads) plus a transliteration. Notice how many words you already know.",
  resources:[
   {icon:"🗣️",t:"Easy Persian",d:"Street interviews with subtitles — natural spoken Farsi.",q:"Easy Persian Easy Languages"},
   {icon:"☕",t:"Chai and Conversation",d:"Friendly Persian lessons & podcast for beginners.",q:"Chai and Conversation Persian"},
   {icon:"📚",t:"Learn Persian with Nahid",d:"Clear beginner grammar and vocabulary.",q:"Learn Persian with Nahid"},
   {icon:"🔤",t:"Persian alphabet",d:"Read and write the Perso-Arabic script.",q:"Persian alphabet for beginners"},
   {icon:"🧳",t:"Farsi for travellers",d:"Survival phrases for Iran.",q:"Farsi phrases for travelers"}
  ],
  lessons:[
   {id:1,title:"Greetings",focus:"سلام · ممنون · خداحافظ",steps:[
    {t:"say",text:"Persian is full of words you already know. Tap each and copy the sound."},
    {t:"words",items:[{tr:"سلام",pr:"salām",en:"hello",link:"≈ salaam (Urdu/Hindi)"},{tr:"ممنون",pr:"mamnun",en:"thank you"},{tr:"خداحافظ",pr:"khodāhāfez",en:"goodbye",link:"≈ khuda hafiz!"}]},
    {t:"chal",en:"Hello",tr:"سلام",pr:"salām",morph:["سلام = hello"],link:"you already say this"},
    {t:"chal",en:"Thank you",tr:"ممنون",pr:"mamnun",morph:["ممنون = thanks"]},
    {t:"say",text:"'Yes' is <b>بله</b> (bale), 'no' is <b>نه</b> (na), 'please' is <b>لطفا</b> (lotfan)."},
    {t:"chal",en:"Please",tr:"لطفا",pr:"lotfan",morph:["لطف = kindness","-ا = adverb"]},
    {t:"chal",en:"Goodbye",tr:"خداحافظ",pr:"khodāhāfez",morph:["khodā = God","hāfez = protector"],link:"khuda hafiz — exactly the Urdu phrase"},
    {t:"chal",en:"Excuse me, please",tr:"ببخشید لطفا",pr:"bebakhshid lotfan",morph:["ببخشید = excuse me","لطفا = please"]}
   ],blocks:["سلام = hello · ممنون = thanks","خداحافظ = goodbye (khuda hafiz)","بله yes · نه no · لطفا please"]},
   {id:2,title:"\"I want\" می‌خواهم",focus:"می‌خواهم · چای · چند",steps:[
    {t:"say",text:"'I want' is <b>می‌خواهم</b> (mikhāham). And tea is <b>چای</b> (chāy) — chai!"},
    {t:"chal",en:"I want tea",tr:"چای می‌خواهم",pr:"chāy mikhāham",morph:["چای = tea","می‌خواهم = I want"],link:"چای = chai"},
    {t:"say",text:"Water is <b>آب</b> (āb), coffee is <b>قهوه</b> (qahve)."},
    {t:"chal",en:"I want water",tr:"آب می‌خواهم",pr:"āb mikhāham",morph:["آب = water","می‌خواهم = I want"],link:"āb = water, as in Urdu"},
    {t:"say",text:"'This' is <b>این</b> (in); 'how much is it?' is <b>چند است؟</b> (chand ast)."},
    {t:"chal",en:"How much is this?",tr:"این چند است؟",pr:"in chand ast",morph:["این = this","چند = how much","است = is"]},
    {t:"say",text:"'I don't want' is <b>نمی‌خواهم</b> (nemikhāham)."},
    {t:"chal",en:"I don't want",tr:"نمی‌خواهم",pr:"nemikhāham",morph:["نمی = not","می‌خواهم = I want"]}
   ],blocks:["می‌خواهم = I want · نمی‌خواهم = I don't want","چای tea · آب water · قهوه coffee","این چند است؟ = how much is this?"]},
   {id:3,title:"Numbers",focus:"یک to ده",steps:[
    {t:"say",text:"Persian numbers are very close to Hindi/Urdu — listen!"},
    {t:"words",items:[{tr:"یک",pr:"yek",en:"1"},{tr:"دو",pr:"do",en:"2",link:"= do!"},{tr:"سه",pr:"se",en:"3"},{tr:"چهار",pr:"chahār",en:"4",link:"≈ chār"},{tr:"پنج",pr:"panj",en:"5",link:"= panj/paanch"}]},
    {t:"words",items:[{tr:"شش",pr:"shesh",en:"6",link:"≈ chhe"},{tr:"هفت",pr:"haft",en:"7",link:"≈ saat"},{tr:"هشت",pr:"hasht",en:"8",link:"≈ aath"},{tr:"نه",pr:"noh",en:"9"},{tr:"ده",pr:"dah",en:"10",link:"= das/dah"}]},
    {t:"chal",en:"two",tr:"دو",pr:"do",morph:["دو = 2"],link:"identical to Hindi do"},
    {t:"say",text:"One hundred is <b>صد</b> (sad)."},
    {t:"chal",en:"one hundred",tr:"صد",pr:"sad",morph:["صد = 100"]}
   ],blocks:["یک–ده = 1–10 (close to Hindi!)","صد = 100"]},
   {id:4,title:"Food",focus:"نان · حساب",steps:[
    {t:"words",items:[{tr:"غذا",pr:"ghazā",en:"food"},{tr:"نان",pr:"nān",en:"bread",link:"= naan!"},{tr:"آب",pr:"āb",en:"water"}]},
    {t:"chal",en:"The menu, please",tr:"منو لطفا",pr:"menu lotfan",morph:["منو = menu","لطفا = please"]},
    {t:"say",text:"'I don't eat meat' is <b>گوشت نمی‌خورم</b> (gusht nemikhoram) — gusht ≈ gosht!"},
    {t:"chal",en:"I don't eat meat",tr:"گوشت نمی‌خورم",pr:"gusht nemikhoram",morph:["گوشت = meat","نمی‌خورم = I don't eat"],link:"گوشت gusht ≈ gosht"},
    {t:"chal",en:"Delicious",tr:"خوشمزه",pr:"khoshmaze",morph:["خوش = good","مزه = taste"]},
    {t:"say",text:"The bill is <b>حساب</b> (hesāb) — hisaab!"},
    {t:"chal",en:"The bill, please",tr:"حساب لطفا",pr:"hesāb lotfan",morph:["حساب = bill","لطفا = please"],link:"حساب hesāb ≈ hisaab"}
   ],blocks:["نان = bread (naan)","گوشت نمی‌خورم = I don't eat meat","خوشمزه = delicious","حساب = the bill (hisaab)"]},
   {id:5,title:"Getting around",focus:"کجا · چپ/راست",steps:[
    {t:"say",text:"'Where?' is <b>کجا</b> (kojā). Bathroom is <b>دستشویی</b> (dastshui)."},
    {t:"chal",en:"Where is the bathroom?",tr:"دستشویی کجاست؟",pr:"dastshui kojāst",morph:["دستشویی = bathroom","کجاست = where is"]},
    {t:"words",items:[{tr:"چپ",pr:"chap",en:"left",link:"≈ chap (Hindi)"},{tr:"راست",pr:"rāst",en:"right",link:"≈ raast"},{tr:"مستقیم",pr:"mostaghim",en:"straight"}]},
    {t:"chal",en:"To the right",tr:"به راست",pr:"be rāst",morph:["به = to","راست = right"]},
    {t:"chal",en:"Where is the airport?",tr:"فرودگاه کجاست؟",pr:"forudgāh kojāst",morph:["فرودگاه = airport","کجاست = where is"]},
    {t:"chal",en:"I want a taxi",tr:"تاکسی می‌خواهم",pr:"tāksi mikhāham",morph:["تاکسی = taxi","می‌خواهم = I want"]},
    {t:"chal",en:"Where is the hotel?",tr:"هتل کجاست؟",pr:"hotel kojāst",morph:["هتل = hotel","کجاست = where is"]},
    {t:"chal",en:"I need help",tr:"کمک می‌خواهم",pr:"komak mikhāham",morph:["کمک = help","می‌خواهم = I want"]},
    {t:"say",text:"If lost: 'I don't understand' is <b>نمی‌فهمم</b> (nemifahmam)."},
    {t:"chal",en:"I don't understand",tr:"نمی‌فهمم",pr:"nemifahmam",morph:["نمی = not","فهمم = I understand"],link:"fahm ≈ samajh/fahm"}
   ],blocks:["کجا؟ = where?","چپ left · راست right · مستقیم straight","فرودگاه = airport · تاکسی = taxi · هتل = hotel","کمک می‌خواهم = I need help","نمی‌فهمم = I don't understand"]},
   {id:6,title:"\"I have / do you have\" دارم",focus:"دارم · دارید · هست · ندارم",steps:[
    {t:"say",text:"'I have' is <b>دارم</b> (dāram); 'do you have?' is <b>دارید؟</b> (dārid). These are close to Hindi/Urdu 'rakhnā/dāram'."},
    {t:"chal",en:"I have a question (سوال)",tr:"سوال دارم",pr:"soʾāl dāram",morph:["سوال = question","دارم = I have"],link:"soʾāl ≈ sawāl (Hindi/Urdu)"},
    {t:"chal",en:"Do you have tea?",tr:"چای دارید؟",pr:"chāy dārid",morph:["چای = tea","دارید = do you have"]},
    {t:"say",text:"'There is' is <b>هست</b> (hast); 'I don't have' is <b>ندارم</b> (nadāram)."},
    {t:"chal",en:"Is there wifi?",tr:"وای‌فای هست؟",pr:"wifi hast",morph:["وای‌فای = wifi","هست = is there"]},
    {t:"chal",en:"I don't have time (وقت)",tr:"وقت ندارم",pr:"vaght nadāram",morph:["وقت = time","ندارم = I don't have"],link:"vaght ≈ waqt"}
   ],blocks:["دارم = I have · دارید؟ = do you have?","هست = there is · ندارم = I don't have","soʾāl ≈ sawāl · vaght ≈ waqt"]},
   {id:7,title:"Talking about the past",focus:"رفتم · خوردم · دیدم",steps:[
    {t:"say",text:"Persian past is beautifully regular: take the past stem and add <b>-am</b> for 'I'. رفتن (raftan, to go) → رفتم (raftam, I went). Very close to Hindi!"},
    {t:"chal",en:"I went",tr:"رفتم",pr:"raftam",morph:["رفت = went","-am = I"]},
    {t:"chal",en:"I ate",tr:"خوردم",pr:"khordam",morph:["خورد = ate","-am = I"]},
    {t:"chal",en:"I saw",tr:"دیدم",pr:"didam",morph:["دید = saw","-am = I"]},
    {t:"say",text:"'You went' is رفتی (rafti). Add a place with به (be = to)."},
    {t:"chal",en:"I went to the airport",tr:"به فرودگاه رفتم",pr:"be forudgāh raftam",morph:["به = to","فرودگاه = airport","رفتم = I went"]}
   ],blocks:["past stem + -am = I … (past)","رفتم went · خوردم ate · دیدم saw","به be = to"]},
   {id:8,title:"Mine & yours",focus:"اسم من · مال من",steps:[
    {t:"say",text:"The easiest 'my' is <b>… من</b> (… -e man), 'of me'. اسم من (esm-e man) = my name; کتاب من = my book."},
    {t:"chal",en:"my name",tr:"اسم من",pr:"esm-e man",morph:["اسم = name","من = my (of me)"]},
    {t:"chal",en:"my book (کتاب)",tr:"کتاب من",pr:"ketāb-e man",morph:["کتاب = book","من = my"],link:"ketāb ≈ kitaab"},
    {t:"chal",en:"your name",tr:"اسم شما",pr:"esm-e shomā",morph:["اسم = name","شما = your (polite)"]},
    {t:"chal",en:"my friend (دوست)",tr:"دوست من",pr:"dust-e man",morph:["دوست = friend","من = my"],link:"dust = friend (≈ dost)"}
   ],blocks:["… من = my (… -e man)","… شما = your (polite)","اسم من = my name · دوست من = my friend"]}
  ]},
 portuguese:{ name:"Portuguese", flag:"🇵🇹", tts:"pt-PT", dir:"ltr",
  blurb:"European Portuguese, built the reason-it-out way — and your fluent Italian is a huge head start: they're close Romance cousins.",
  note:"Portuguese is a Romance language, so if you speak Italian you already recognise a great deal (água≈acqua, pão≈pane, quanto custa≈quanto costa). Nouns are o/a (masculine/feminine). European Portuguese swallows some vowels and 's' at word-end sounds like 'sh' — copy the audio.",
  resources:[
   {icon:"🗣️",t:"Easy Portuguese",d:"Street interviews with subtitles — real European Portuguese.",q:"Easy Portuguese Easy Languages"},
   {icon:"📚",t:"Practice Portuguese",d:"European Portuguese lessons & podcast for beginners.",q:"Practice Portuguese European"},
   {icon:"☕",t:"Portuguese With Leo",d:"Native Lisbon teacher, culture and pronunciation.",q:"Portuguese With Leo"},
   {icon:"🧳",t:"Portuguese for travellers",d:"Survival phrases for a trip to Portugal.",q:"European Portuguese phrases for travelers"},
   {icon:"🔤",t:"Portuguese sounds",d:"Master the nasal ã/õ and the EP accent.",q:"European Portuguese pronunciation for beginners"}
  ],
  lessons:[
{id:1,title:"Greetings",focus:"Olá · Obrigado · Bom dia",steps:[
    {t:"say",text:"If you speak Italian, Portuguese will feel familiar fast. Tap 🔊 and copy the European accent."},
    {t:"words",items:[{tr:"Olá",pr:"oh-LAH",en:"hello"},{tr:"Obrigado",pr:"oh-bree-GAH-doo",en:"thank you (said by a man)"},{tr:"Adeus",pr:"ah-DEH-oosh",en:"goodbye"}]},
    {t:"chal",en:"Hello",tr:"Olá",pr:"oh-LAH",morph:["Olá = hi"]},
    {t:"chal",en:"Good morning",tr:"Bom dia",pr:"bong DEE-ah",morph:["bom = good","dia = day"],link:"≈ Italian buongiorno"},
    {t:"say",text:"You (as a man) say <b>Obrigado</b>; a woman says <b>Obrigada</b>. 'Please' is <b>por favor</b>, 'yes' <b>sim</b>, 'no' <b>não</b>."},
    {t:"chal",en:"Thank you",tr:"Obrigado",pr:"oh-bree-GAH-doo",morph:["Obrigado = thanks (m)"]},
    {t:"chal",en:"Please",tr:"Por favor",pr:"poor fah-VOR",morph:["por = for","favor = favor"],link:"≈ per favore"},
    {t:"chal",en:"Excuse me, please",tr:"Desculpe, por favor",pr:"desh-KOOL-puh poor fah-VOR",morph:["Desculpe = sorry","por favor = please"]}
   ],blocks:["Olá = hi · Bom dia = good morning","Obrigado (m) / Obrigada (f) = thanks","sim yes · não no · por favor please"]},
{id:2,title:"\"I'd like\" Queria",focus:"Queria · água · Quanto custa",steps:[
    {t:"say",text:"The polite traveller phrase is <b>Queria</b> (kuh-REE-uh) = 'I'd like'. ('Quero' = I want.)"},
    {t:"words",items:[{tr:"água",pr:"AH-gwah",en:"water",link:"≈ acqua"},{tr:"chá",pr:"shah",en:"tea",link:"≈ chai"},{tr:"café",pr:"kah-FEH",en:"coffee",link:"≈ caffè"}]},
    {t:"chal",en:"I'd like a coffee",tr:"Queria um café",pr:"kuh-REE-uh oong kah-FEH",morph:["Queria = I'd like","um = a","café = coffee"]},
    {t:"chal",en:"I'd like a water",tr:"Queria uma água",pr:"kuh-REE-uh OO-mah AH-gwah",morph:["Queria = I'd like","uma = a (feminine)","água = water"]},
    {t:"say",text:"To ask the price: <b>Quanto custa?</b> — almost Italian!"},
    {t:"chal",en:"How much is it?",tr:"Quanto custa?",pr:"KWAN-too KOOSH-tah",morph:["quanto = how much","custa = costs"],link:"≈ quanto costa"},
    {t:"say",text:"'I don't want' is <b>Não quero</b>."},
    {t:"chal",en:"I don't want",tr:"Não quero",pr:"nowng KEH-roo",morph:["não = not","quero = I want"]}
   ],blocks:["Queria = I'd like · Quero = I want","um / uma = a (m/f)","Quanto custa? = how much?"]},
{id:3,title:"Numbers",focus:"um to dez",steps:[
    {t:"words",items:[{tr:"um",pr:"oong",en:"1"},{tr:"dois",pr:"doysh",en:"2"},{tr:"três",pr:"traysh",en:"3"},{tr:"quatro",pr:"KWAH-troo",en:"4"},{tr:"cinco",pr:"SEEN-koo",en:"5"}]},
    {t:"words",items:[{tr:"seis",pr:"saysh",en:"6"},{tr:"sete",pr:"SEH-tuh",en:"7"},{tr:"oito",pr:"OY-too",en:"8"},{tr:"nove",pr:"NOH-vuh",en:"9"},{tr:"dez",pr:"desh",en:"10"}]},
    {t:"chal",en:"twenty",tr:"vinte",pr:"VEEN-tuh",morph:["vinte = 20"]},
    {t:"chal",en:"one hundred",tr:"cem",pr:"seng",morph:["cem = 100"]},
    {t:"chal",en:"How much is this?",tr:"Quanto custa isto?",pr:"KWAN-too KOOSH-tah EESH-too",morph:["isto = this"]}
   ],blocks:["um–dez = 1–10 (like Italian!)","vinte = 20 · cem = 100"]},
{id:4,title:"Food",focus:"a ementa · a conta",steps:[
    {t:"words",items:[{tr:"a ementa",pr:"uh ee-MEN-tuh",en:"the menu"},{tr:"pão",pr:"powng",en:"bread",link:"≈ pane"},{tr:"água",pr:"AH-gwah",en:"water"}]},
    {t:"chal",en:"The menu, please",tr:"A ementa, por favor",pr:"uh ee-MEN-tuh poor fah-VOR",morph:["a ementa = the menu","por favor = please"]},
    {t:"say",text:"'I don't eat meat' is <b>Não como carne</b>."},
    {t:"chal",en:"I don't eat meat",tr:"Não como carne",pr:"nowng KOH-moo KAR-nuh",morph:["não = not","como = I eat","carne = meat"]},
    {t:"chal",en:"It's delicious",tr:"Está delicioso",pr:"shtah dlee-SYOH-zoo",morph:["está = it is","delicioso = delicious"],link:"≈ delizioso"},
    {t:"say",text:"The bill is <b>a conta</b>."},
    {t:"chal",en:"The bill, please",tr:"A conta, por favor",pr:"ah KON-tah poor fah-VOR",morph:["a conta = the bill","por favor = please"]}
   ],blocks:["A ementa = the menu","Não como carne = I don't eat meat","Está delicioso = it's delicious","A conta = the bill"]},
{id:5,title:"Getting around",focus:"Onde é · esquerda/direita",steps:[
    {t:"say",text:"'Where is…?' is <b>Onde é…?</b> or <b>Onde fica…?</b> The toilet (EP) is <b>a casa de banho</b>."},
    {t:"chal",en:"Where is the toilet?",tr:"Onde é a casa de banho?",pr:"ON-duh eh ah KAH-zah duh BAH-nyoo",morph:["onde é = where is","casa de banho = toilet"]},
    {t:"words",items:[{tr:"à esquerda",pr:"ah shkerr-dah",en:"to the left"},{tr:"à direita",pr:"ah dee-RAY-tah",en:"to the right"},{tr:"em frente",pr:"eng FREN-tuh",en:"straight ahead"}]},
    {t:"chal",en:"I'd like to go to the airport",tr:"Queria ir ao aeroporto",pr:"kuh-REE-uh eer ow ah-eh-roo-POR-too",morph:["Queria = I'd like","ir = to go","ao = to the","aeroporto = airport"]},
    {t:"chal",en:"a taxi, please",tr:"um táxi, por favor",pr:"oong TAK-see poor fah-VOR",morph:["um táxi = a taxi","por favor = please"]},
    {t:"chal",en:"To the left, please",tr:"À esquerda, por favor",pr:"ah shkerr-dah poor fah-VOR",morph:["à esquerda = to the left","por favor = please"]},
    {t:"say",text:"If lost: 'I don't understand' is <b>Não percebo</b> (European) or Não entendo."},
    {t:"chal",en:"I don't understand",tr:"Não percebo",pr:"nowng per-SEH-boo",morph:["não = not","percebo = I understand (EP)"]}
   ],blocks:["Onde é…? = where is…?","à esquerda left · à direita right · em frente straight","Não percebo = I don't understand"]},
{id:6,title:"\"I have / there is\"",focus:"tenho · há · tem…?",steps:[
    {t:"say",text:"'I have' is <b>tenho</b>; 'there is/are' is <b>há</b>; 'do you have…?' is <b>Tem…?</b>"},
    {t:"chal",en:"I have a reservation (reserva)",tr:"Tenho uma reserva",pr:"TEH-nyoo OO-mah ruh-ZEHR-vuh",morph:["tenho = I have","uma reserva = a reservation"]},
    {t:"chal",en:"Do you have water?",tr:"Tem água?",pr:"teng AH-gwah",morph:["Tem = do you have","água = water"]},
    {t:"say",text:"'Is there…?' also uses <b>há</b>: Há wi-fi?"},
    {t:"chal",en:"Is there wi-fi?",tr:"Há wi-fi?",pr:"ah wee-fee",morph:["há = is there"]},
    {t:"chal",en:"I don't have time (tempo)",tr:"Não tenho tempo",pr:"nowng TEH-nyoo TEM-poo",morph:["não tenho = I don't have","tempo = time"]}
   ],blocks:["tenho = I have · não tenho = I don't have","há = there is / Há…? = is there?","Tem…? = do you have?"]},
{id:7,title:"Talking about the past",focus:"fui · comi · vi",steps:[
    {t:"say",text:"The simple past (like Italian's passato remoto for these): <b>fui</b> = I went, <b>comi</b> = I ate, <b>vi</b> = I saw."},
    {t:"chal",en:"I went",tr:"Fui",pr:"fwee",morph:["fui = I went"]},
    {t:"chal",en:"I ate",tr:"Comi",pr:"koo-MEE",morph:["comi = I ate"],link:"≈ mangiai / ho mangiato"},
    {t:"chal",en:"I saw",tr:"Vi",pr:"vee",morph:["vi = I saw"]},
    {t:"say",text:"Add a place with <b>ao/à</b> (to the)."},
    {t:"chal",en:"I went to the hotel",tr:"Fui ao hotel",pr:"fwee ow oh-TEL",morph:["fui = I went","ao = to the","hotel = hotel"]}
   ],blocks:["fui = I went · comi = I ate · vi = I saw","ao / à = to the (m/f)"]},
{id:8,title:"Mine & yours",focus:"o meu · o seu",steps:[
    {t:"say",text:"'My' is <b>o meu / a minha</b> (matching the noun); 'your' (polite) is <b>o seu / a sua</b>."},
    {t:"chal",en:"my name",tr:"o meu nome",pr:"oo MEH-oo NOH-muh",morph:["o meu = my","nome = name"],link:"≈ il mio nome"},
    {t:"chal",en:"This is my bag (mala)",tr:"Esta é a minha mala",pr:"ESH-tah eh ah MEE-nyah MAH-lah",morph:["esta é = this is","a minha = my (f)","mala = bag"]},
    {t:"chal",en:"your passport (passaporte)",tr:"o seu passaporte",pr:"oo SEH-oo pah-sah-POR-tuh",morph:["o seu = your","passaporte = passport"]},
    {t:"say",text:"'My name is…' is also <b>Chamo-me…</b> (I call myself…)."},
    {t:"chal",en:"My name is __NAME__",tr:"Chamo-me __NAME__",pr:"SHAH-moo-muh __NAME__",morph:["chamo-me = I'm called"]}
   ],blocks:["o meu / a minha = my","o seu / a sua = your (polite)","Chamo-me… = my name is…"]},
{id:9,title:"Time & when",focus:"hoje · agora · Que horas são?",steps:[
    {t:"say",text:"Time words (very Italian!): hoje <b>hoje</b> today, amanhã <b>amanhã</b> tomorrow, ontem <b>ontem</b> yesterday, agora <b>agora</b> now."},
    {t:"words",items:[{tr:"hoje",pr:"OZH",en:"today"},{tr:"amanhã",pr:"ah-mah-NYAH",en:"tomorrow"},{tr:"agora",pr:"ah-GOH-rah",en:"now"}]},
    {t:"chal",en:"today",tr:"hoje",pr:"OZH",morph:["hoje = today"]},
    {t:"chal",en:"now",tr:"agora",pr:"ah-GOH-rah",morph:["agora = now"],link:"≈ ora (Italian)"},
    {t:"say",text:"'What time is it?' is <b>Que horas são?</b>"},
    {t:"chal",en:"What time is it?",tr:"Que horas são?",pr:"kuh OH-rahsh sowng",morph:["que horas = what hours","são = are"]},
    {t:"chal",en:"tomorrow",tr:"amanhã",pr:"ah-mah-NYAH",morph:["amanhã = tomorrow"]}
   ],blocks:["hoje today · amanhã tomorrow · agora now","Que horas são? = what time is it?"]},
{id:10,title:"The question words",focus:"o que · quem · porquê · como",steps:[
    {t:"say",text:"o que <b>what</b>, onde <b>where</b>, quem <b>who</b>, porquê <b>why</b>, como <b>how</b>."},
    {t:"words",items:[{tr:"o que",pr:"oo kee",en:"what"},{tr:"quem",pr:"keng",en:"who"},{tr:"como",pr:"KOH-moo",en:"how"}]},
    {t:"chal",en:"What is this?",tr:"O que é isto?",pr:"oo kee eh EESH-too",morph:["o que = what","é = is","isto = this"]},
    {t:"chal",en:"Who is it?",tr:"Quem é?",pr:"keng eh",morph:["quem = who","é = is"]},
    {t:"chal",en:"Why?",tr:"Porquê?",pr:"poor-KEH",morph:["porquê = why"]},
    {t:"chal",en:"How are you?",tr:"Como está?",pr:"KOH-moo shtah",morph:["como = how","está = are you"]}
   ],blocks:["o que what · quem who · como how · porquê why","Como está? = how are you?"]},
{id:11,title:"Where things are",focus:"em/no · aqui · perto",steps:[
    {t:"say",text:"'in/at the' is <b>no/na</b>. Estou no hotel = I'm at the hotel. aqui <b>here</b>, ali <b>there</b>, perto <b>near</b>."},
    {t:"chal",en:"I'm at the hotel",tr:"Estou no hotel",pr:"shtoh noo oh-TEL",morph:["estou = I am","no = in the","hotel = hotel"]},
    {t:"chal",en:"here",tr:"aqui",pr:"ah-KEE",morph:["aqui = here"]},
    {t:"chal",en:"The toilet is here",tr:"A casa de banho é aqui",pr:"ah KAH-zah duh BAH-nyoo eh ah-KEE",morph:["casa de banho = toilet","é aqui = is here"]},
    {t:"chal",en:"Is there a bank nearby?",tr:"Há um banco aqui perto?",pr:"ah oong BAN-koo ah-kee PER-too",morph:["há = is there","banco = bank","aqui perto = nearby"]}
   ],blocks:["no / na = in/at the","aqui here · ali there · perto near","Há … aqui perto? = is there … nearby?"]},
{id:12,title:"Need & can",focus:"Preciso de · Posso · Pode",steps:[
    {t:"say",text:"'I need' is <b>Preciso de…</b>; 'can I…?' is <b>Posso…?</b>; 'can you…?' is <b>Pode…?</b>"},
    {t:"chal",en:"I need help (ajuda)",tr:"Preciso de ajuda",pr:"pruh-SEE-zoo duh ah-ZHOO-dah",morph:["preciso de = I need","ajuda = help"]},
    {t:"chal",en:"I need a doctor",tr:"Preciso de um médico",pr:"pruh-SEE-zoo duh oong MEH-dee-koo",morph:["preciso de = I need","médico = doctor"]},
    {t:"chal",en:"Can I sit here?",tr:"Posso sentar-me aqui?",pr:"POH-soo sen-TAR-muh ah-kee",morph:["posso = can I","sentar-me = sit","aqui = here"]},
    {t:"chal",en:"Can you help me?",tr:"Pode ajudar-me?",pr:"POH-duh ah-zhoo-DAR-muh",morph:["pode = can you","ajudar-me = help me"]}
   ],blocks:["Preciso de… = I need…","Posso…? = can I…? · Pode…? = can you…?","Pode ajudar-me? = can you help me?"]},
{id:13, title:"Because, but & joining ideas", focus:"porque · mas · também", steps:[
{t:"say",text:"Join ideas with <b>e</b> (and), <b>mas</b> (but), <b>porque</b> (because), <b>também</b> (also)."},
{t:"words",items:[
{tr:"porque",pr:"poor-KEH",en:"because",link:"≈ perché (Italian)"},
{tr:"mas",pr:"mahsh",en:"but",link:"≈ ma (Italian)"},
{tr:"também",pr:"tam-BENG",en:"also / too",link:"≈ también (Spanish)"},
{tr:"e",pr:"ee",en:"and",link:"≈ e (Italian)"},
{tr:"muito",pr:"MWEENG-too",en:"very / a lot",link:"≈ molto (Italian)"}
]},
{t:"say",text:"Note: <b>porquê?</b> (with accent) means 'why?', while <b>porque</b> means 'because'."},
{t:"chal",en:"I want a coffee because I am tired.",tr:"Quero um café porque estou cansado.",pr:"KEH-roo oong kah-FEH poor-KEH shtoh kan-SAH-doo",morph:["quero = I want","um café = a coffee","porque = because","estou cansado = I am tired"]},
{t:"chal",en:"I like Lisbon, but it is expensive.",tr:"Gosto de Lisboa, mas é cara.",pr:"GOSH-too duh leezh-BOH-uh, mahsh eh KAH-rah",morph:["gosto de = I like","Lisboa = Lisbon","mas = but","é cara = it is expensive"]},
{t:"chal",en:"I speak Portuguese and also English.",tr:"Falo português e também inglês.",pr:"FAH-loo poor-too-GESH ee tam-BENG eeng-GLESH",morph:["falo = I speak","português = Portuguese","e também = and also","inglês = English"]},
{t:"chal",en:"It is very good but very expensive.",tr:"É muito bom mas muito caro.",pr:"eh MWEENG-too bong mahsh MWEENG-too KAH-roo",morph:["é = it is","muito bom = very good","mas = but","muito caro = very expensive"]},
{t:"chal",en:"Why? Because I like it.",tr:"Porquê? Porque gosto.",pr:"poor-KEH? poor-KEH GOSH-too",morph:["porquê = why","porque = because","gosto = I like it"]}
], blocks:["porque","mas","também","e"]},
{id:14,title:"Shopping & bargaining",focus:"comprar · muito caro · barato",steps:[
    {t:"say",text:"'To buy' is <b>comprar</b>. 'Too expensive' is <b>muito caro</b>; 'cheaper' is <b>mais barato</b>."},
    {t:"chal",en:"I'd like to buy this",tr:"Queria comprar isto",pr:"kuh-REE-uh kong-PRAR EESH-too",morph:["Queria = I'd like","comprar = to buy","isto = this"]},
    {t:"chal",en:"Too expensive",tr:"Muito caro",pr:"MOOEE-too KAH-roo",morph:["muito = very","caro = expensive"]},
    {t:"chal",en:"Is there a cheaper one?",tr:"Há mais barato?",pr:"ah mah-eesh bah-RAH-too",morph:["há = is there","mais barato = cheaper"]},
    {t:"chal",en:"I'll take this one",tr:"Levo este",pr:"LEH-voo ESH-tuh",morph:["levo = I take","este = this one"]}
   ],blocks:["comprar = to buy","muito caro = too expensive · mais barato = cheaper","Levo este = I'll take this one"]},
{id:15,title:"Help & emergencies",focus:"Socorro · médico · polícia",steps:[
    {t:"say",text:"Socorro! <b>help!</b>, médico <b>doctor</b>, hospital, polícia <b>police</b>."},
    {t:"chal",en:"Help, please!",tr:"Socorro, por favor!",pr:"soo-KOH-rroo poor fah-VOR",morph:["Socorro = help","por favor = please"]},
    {t:"chal",en:"I'm sick",tr:"Estou doente",pr:"shtoh doo-EN-tuh",morph:["estou = I am","doente = sick"]},
    {t:"chal",en:"Call a doctor",tr:"Chame um médico",pr:"SHAH-muh oong MEH-dee-koo",morph:["chame = call","médico = doctor"]},
    {t:"chal",en:"Where is the hospital?",tr:"Onde é o hospital?",pr:"ON-duh eh oo osh-pee-TAL",morph:["onde é = where is","o hospital"]},
    {t:"chal",en:"Call the police",tr:"Chame a polícia",pr:"SHAH-muh ah poo-LEE-see-ah",morph:["chame = call","a polícia = the police"]}
   ],blocks:["Socorro! = help! · Estou doente = I'm sick","Chame um médico = call a doctor","Onde é o hospital? = where is the hospital?"]},
{id:16,title:"Family & people",focus:"família · esposa · filhos",steps:[
    {t:"say",text:"família <b>family</b>, esposa/mulher <b>wife</b>, filhos <b>children</b>, amigo <b>friend</b>."},
    {t:"chal",en:"my family",tr:"a minha família",pr:"ah MEE-nyah fah-MEE-lee-ah",morph:["a minha = my (f)","família = family"]},
    {t:"chal",en:"my wife",tr:"a minha esposa",pr:"ah MEE-nyah she-POH-zah",morph:["a minha = my","esposa = wife"]},
    {t:"chal",en:"I have three children",tr:"Tenho três filhos",pr:"TEH-nyoo traysh FEE-lyoosh",morph:["tenho = I have","três = three","filhos = children"]},
    {t:"chal",en:"This is my friend",tr:"Este é o meu amigo",pr:"ESH-tuh eh oo MEH-oo ah-MEE-goo",morph:["este é = this is","o meu = my","amigo = friend"]}
   ],blocks:["a minha família = my family","esposa wife · filhos children · amigo friend","Tenho três filhos = I have three children"]},
{id:17,title:"Colours & describing",focus:"cor · vermelho · grande/pequeno",steps:[
    {t:"say",text:"cor <b>colour</b>. vermelho red, azul blue, branco white, preto black."},
    {t:"words",items:[{tr:"vermelho",pr:"ver-MEH-lyoo",en:"red"},{tr:"azul",pr:"ah-ZOOL",en:"blue"},{tr:"branco",pr:"BRAN-koo",en:"white"}]},
    {t:"chal",en:"red",tr:"vermelho",pr:"ver-MEH-lyoo",morph:["vermelho = red"]},
    {t:"chal",en:"big",tr:"grande",pr:"GRAN-duh",morph:["grande = big"],link:"≈ grande (Italian)"},
    {t:"chal",en:"small",tr:"pequeno",pr:"puh-KAY-noo",morph:["pequeno = small"],link:"≈ piccolo"},
    {t:"chal",en:"very beautiful",tr:"muito bonito",pr:"MOOEE-too boo-NEE-too",morph:["muito = very","bonito = beautiful"]},
    {t:"say",text:"To compare: <b>maior</b> = bigger, <b>o maior</b> = the biggest, <b>que</b> = than."},
    {t:"words",items:[{tr:"maior",pr:"mah-YOR",en:"bigger"},{tr:"o maior",pr:"oo mah-YOR",en:"the biggest"},{tr:"que",pr:"keh",en:"than"}]},
    {t:"chal",en:"This one is bigger than that one",tr:"Este é maior que aquele",pr:"ESHT eh mah-YOR kuh uh-KEL",morph:["este é = this one is","maior = bigger","que = than","aquele = that one"]},
    {t:"chal",en:"This is the biggest",tr:"Este é o maior",pr:"ESHT eh oo mah-YOR",morph:["este é = this is","o maior = the biggest"]}
   ],blocks:["cor colour · vermelho/azul/branco/preto","grande big · pequeno small · bonito beautiful","maior…que = bigger…than · o maior = the biggest"]}
]}
};
function withUrl(arr){return (arr||[]).map(r=>({...r,url:"https://www.youtube.com/results?search_query="+encodeURIComponent(r.q)}));}

/* ---- Turkish method/sounds copy ---- */
const TR_BRIDGES=`<div class="note">🇩🇪 <b>German.</b> Turkish ö and ü are the exact German sounds you already own.</div>
  <div class="note">🇮🇳 <b>Hindi/Marathi.</b> Shared Persian-Arabic words: çay≈chai, hesap≈hisaab, şeker≈shakkar, dünya≈duniya, insan≈insaan.</div>
  <div class="note">🇮🇹🇬🇧 <b>Italian/English.</b> otel, taksi, restoran, telefon, problem, bilet, pasaport — free vocabulary.</div>`;
const TR_GRAMMAR=`Endings shift their vowel to echo the last vowel of the word, so everything flows — that's why "to the hotel" is <b>otele</b> but "to Istanbul" is <b>İstanbul'a</b>. Just copy the patterns; your ear picks it up.`;

/* ---- MANDARIN ---- */
const ZH_DIALOGUES=[
 {id:"cafe",title:"☕ Ordering tea",emoji:"☕",turns:[
  {who:"Server",tr:"你好，要什么？",pr:"nǐ hǎo, yào shénme",en:"Hello, what would you like?"},
  {who:"You",tr:"我要一杯茶。",pr:"wǒ yào yì bēi chá",en:"I'd like a (cup of) tea."},
  {who:"Server",tr:"还要别的吗？",pr:"hái yào bié de ma",en:"Anything else?"},
  {who:"You",tr:"多少钱？",pr:"duōshao qián",en:"How much?"},
  {who:"Server",tr:"十五块。",pr:"shíwǔ kuài",en:"Fifteen kuai."},
  {who:"You",tr:"谢谢！",pr:"xièxie",en:"Thanks!"}
 ]},
 {id:"taxi",title:"🚕 Taking a taxi",emoji:"🚕",turns:[
  {who:"You",tr:"你好，我要去机场。",pr:"nǐ hǎo, wǒ yào qù jīchǎng",en:"Hello, I want to go to the airport."},
  {who:"Driver",tr:"好的。",pr:"hǎo de",en:"OK."},
  {who:"You",tr:"多长时间？",pr:"duō cháng shíjiān",en:"How long does it take?"},
  {who:"Driver",tr:"二十分钟。",pr:"èrshí fēnzhōng",en:"Twenty minutes."},
  {who:"You",tr:"在这里停，谢谢。",pr:"zài zhèlǐ tíng, xièxie",en:"Stop here, thanks."}
 ]},
 {id:"meet",title:"🤝 Meeting someone",emoji:"🤝",turns:[
  {who:"Local",tr:"你好！你叫什么名字？",pr:"nǐ hǎo! nǐ jiào shénme míngzi",en:"Hello! What's your name?"},
  {who:"You",tr:"我叫__NAME__。",pr:"wǒ jiào __NAME__",en:"My name is __NAME__."},
  {who:"Local",tr:"你是哪国人？",pr:"nǐ shì nǎ guó rén",en:"What country are you from?"},
  {who:"You",tr:"我是印度人。",pr:"wǒ shì yìndù rén",en:"I'm Indian."},
  {who:"Local",tr:"欢迎！",pr:"huānyíng",en:"Welcome!"}
 ]},
 {id:"shop",title:"🛍️ Shopping & bargaining",emoji:"🛍️",turns:[
  {who:"Seller",tr:"你要买什么？",pr:"nǐ yào mǎi shénme",en:"What would you like to buy?"},
  {who:"You",tr:"这个多少钱？",pr:"zhège duōshao qián",en:"How much is this?"},
  {who:"Seller",tr:"一百块。",pr:"yìbǎi kuài",en:"A hundred kuai."},
  {who:"You",tr:"太贵了！便宜一点？",pr:"tài guì le! piányi yìdiǎn",en:"Too expensive! A bit cheaper?"},
  {who:"Seller",tr:"八十块。",pr:"bāshí kuài",en:"Eighty kuai."},
  {who:"You",tr:"好，我要了。谢谢！",pr:"hǎo, wǒ yào le, xièxie",en:"OK, I'll take it. Thanks!"}
 ]},
 {id:"hotel",title:"🏨 Hotel check-in",emoji:"🏨",turns:[
  {who:"You",tr:"你好，我有预订。",pr:"nǐ hǎo, wǒ yǒu yùdìng",en:"Hello, I have a reservation."},
  {who:"Reception",tr:"您的名字？",pr:"nín de míngzi",en:"Your name?"},
  {who:"You",tr:"我叫__NAME__，住一个晚上。",pr:"wǒ jiào __NAME__, zhù yí gè wǎnshàng",en:"I'm __NAME__, staying one night."},
  {who:"Reception",tr:"好的，这是钥匙。",pr:"hǎo de, zhè shì yàoshi",en:"OK, here's the key."},
  {who:"You",tr:"有wifi吗？密码是什么？",pr:"yǒu wifi ma? mìmǎ shì shénme",en:"Is there wifi? What's the password?"},
  {who:"Reception",tr:"密码在这里。",pr:"mìmǎ zài zhèlǐ",en:"The password is here."},
  {who:"You",tr:"谢谢！",pr:"xièxie",en:"Thanks!"}
 ]},
 {id:"restaurant",title:"🍜 At the restaurant",emoji:"🍜",turns:[
  {who:"Waiter",tr:"欢迎光临！几位？",pr:"huānyíng guānglín! jǐ wèi",en:"Welcome! How many people?"},
  {who:"You",tr:"两位。",pr:"liǎng wèi",en:"Two."},
  {who:"Waiter",tr:"请坐，这是菜单。",pr:"qǐng zuò, zhè shì càidān",en:"Please sit, here's the menu."},
  {who:"You",tr:"我吃素。有素菜吗？",pr:"wǒ chī sù, yǒu sùcài ma",en:"I'm vegetarian. Are there vegetable dishes?"},
  {who:"Waiter",tr:"有，这个很好吃。",pr:"yǒu, zhège hěn hǎochī",en:"Yes, this one is delicious."},
  {who:"You",tr:"好，我要这个。不要辣。",pr:"hǎo, wǒ yào zhège, bú yào là",en:"OK, I'll have this. Not spicy."},
  {who:"You",tr:"结账，谢谢。",pr:"jiézhàng, xièxie",en:"The bill, thanks."}
 ]}
];
const ZH_POCKET=[
 {tr:"你好",pr:"nǐ hǎo",en:"hello",c:"Greetings"},{tr:"谢谢",pr:"xièxie",en:"thank you",c:"Greetings"},
 {tr:"请",pr:"qǐng",en:"please",c:"Greetings"},{tr:"再见",pr:"zàijiàn",en:"goodbye",c:"Greetings"},
 {tr:"对不起",pr:"duìbuqǐ",en:"sorry",c:"Greetings"},{tr:"是",pr:"shì",en:"yes / is",c:"Greetings"},{tr:"不是",pr:"bú shì",en:"no",c:"Greetings"},
 {tr:"一",pr:"yī",en:"1",c:"Numbers"},{tr:"二",pr:"èr",en:"2",c:"Numbers"},{tr:"三",pr:"sān",en:"3",c:"Numbers"},{tr:"十",pr:"shí",en:"10",c:"Numbers"},{tr:"百",pr:"bǎi",en:"100",c:"Numbers"},
 {tr:"水",pr:"shuǐ",en:"water",c:"Food"},{tr:"茶",pr:"chá",en:"tea",c:"Food"},{tr:"米饭",pr:"mǐfàn",en:"rice",c:"Food"},{tr:"买单",pr:"mǎidān",en:"the bill",c:"Food"},{tr:"好吃",pr:"hǎochī",en:"delicious",c:"Food"},
 {tr:"在哪里？",pr:"zài nǎlǐ",en:"where?",c:"Directions"},{tr:"左",pr:"zuǒ",en:"left",c:"Directions"},{tr:"右",pr:"yòu",en:"right",c:"Directions"},{tr:"厕所",pr:"cèsuǒ",en:"toilet",c:"Directions"},{tr:"机场",pr:"jīchǎng",en:"airport",c:"Directions"},
 {tr:"救命！",pr:"jiùmìng",en:"Help!",c:"Emergency"},{tr:"我不懂",pr:"wǒ bù dǒng",en:"I don't understand",c:"Emergency"},{tr:"医院",pr:"yīyuàn",en:"hospital",c:"Emergency"},{tr:"警察",pr:"jǐngchá",en:"police",c:"Emergency"},
 // Time
 {tr:"今天",pr:"jīntiān",en:"today",c:"Time"},{tr:"明天",pr:"míngtiān",en:"tomorrow",c:"Time"},{tr:"现在",pr:"xiànzài",en:"now",c:"Time"},{tr:"现在几点？",pr:"xiànzài jǐ diǎn",en:"what time is it?",c:"Time"},{tr:"分钟",pr:"fēnzhōng",en:"minute(s)",c:"Time"},
 // Shopping
 {tr:"我想买这个",pr:"wǒ xiǎng mǎi zhège",en:"I'd like to buy this",c:"Shopping"},{tr:"太贵了",pr:"tài guì le",en:"too expensive",c:"Shopping"},{tr:"便宜一点",pr:"piányi yìdiǎn",en:"a bit cheaper",c:"Shopping"},{tr:"一共多少钱？",pr:"yígòng duōshao qián",en:"how much in total?",c:"Shopping"},{tr:"我要了",pr:"wǒ yào le",en:"I'll take it",c:"Shopping"},
 // Health
 {tr:"你可以帮我吗？",pr:"nǐ kěyǐ bāng wǒ ma",en:"can you help me?",c:"Health"},{tr:"我生病了",pr:"wǒ shēngbìng le",en:"I'm sick",c:"Health"},{tr:"药店",pr:"yàodiàn",en:"pharmacy",c:"Health"},{tr:"疼",pr:"téng",en:"it hurts",c:"Health"},{tr:"报警",pr:"bàojǐng",en:"call the police",c:"Health"}
];
const ZH_CULTURE=[
 {icon:"🥢",title:"Chopstick etiquette",body:"Never stand chopsticks upright in a bowl of rice — it echoes incense at funerals. Rest them flat on the holder or bowl edge."},
 {icon:"🎁",title:"Use both hands",body:"Offer and receive business cards, gifts and money with <b>both hands</b> — a simple gesture that reads as respectful."},
 {icon:"🔢",title:"Lucky & unlucky numbers",body:"8 (bā) sounds like 'prosper' and is lucky; 4 (sì) sounds like 'death' and is avoided. You'll see it in prices and floors."},
 {icon:"🤝",title:"Saving face",body:"Avoid blunt 'no' and public criticism. Keep things indirect and harmonious — a smile and 'maybe' often means no."},
 {icon:"💳",title:"Everything is by phone",body:"WeChat Pay and Alipay QR codes rule; cash is increasingly rare. As a visitor, carry some cash as backup."},
 {icon:"🍵",title:"The finger-tap thanks",body:"When someone pours your tea, lightly tapping two fingers on the table is a quiet 'thank you'."}
];
const ZH_SOUNDS=[
 {l:"Tones",say:"4 tones — pitch changes meaning. Always copy the audio.",ex:"mā má mǎ mà = mother / hemp / horse / scold",voice:"妈"},
 {l:"q",say:"like 'ch' with the tongue forward",ex:"qǐng (please) = ching",voice:"请"},
 {l:"x",say:"a soft 'sh'",ex:"xièxie (thanks) = syeh-syeh",voice:"谢谢"},
 {l:"zh",say:"like 'j' in jump",ex:"zhège (this) = juh-guh",voice:"这个"},
 {l:"c",say:"like 'ts' in cats",ex:"cèsuǒ (toilet) = tsuh-swor",voice:"厕所"},
 {l:"r",say:"a buzzy 'r', tongue curled back",ex:"rén (person) = run",voice:"人"},
 {l:"ai / ao",say:"ai = 'eye', ao = 'ow'",ex:"zàijiàn = dzye-jyen",voice:"再见"},
 {l:"ü",say:"German ü / 'ew' (you know it!)",ex:"nǚ (female) = new",voice:"女"}
];
const ZH_GRAMMAR=`Mandarin has <b>no tenses, plurals or genders</b> — context carries them. Word order is Subject-Verb-Object, like English. The real work is tones: the same syllable at a different pitch is a different word, so copy the melody from the audio every time.`;
const ZH_BRIDGES=`<div class="note">☕ <b>Loanwords:</b> 咖啡 kāfēi ≈ coffee, 沙发 shāfā ≈ sofa.</div>
  <div class="note">🔢 <b>Logic is your friend:</b> numbers and grammar are simple and regular — your focus is tones and characters, both trained by the audio.</div>`;

/* ---- GERMAN ---- */
const DE_DIALOGUES=[
 {id:"cafe",title:"☕ Ordering a tea",emoji:"☕",turns:[
  {who:"Server",tr:"Hallo, was möchten Sie?",pr:"HAH-loh, vas MURSH-ten zee",en:"Hello, what would you like?"},
  {who:"You",tr:"Ich möchte einen Tee, bitte.",pr:"ish MURSH-tuh INE-en tay BIT-tuh",en:"I'd like a tea, please."},
  {who:"Server",tr:"Sonst noch etwas?",pr:"zonst nokh ET-vas",en:"Anything else?"},
  {who:"You",tr:"Wie viel kostet das?",pr:"vee feel KOS-tet das",en:"How much is it?"},
  {who:"Server",tr:"Drei Euro.",pr:"dry OY-roh",en:"Three euros."},
  {who:"You",tr:"Danke schön!",pr:"DAN-kuh shurn",en:"Thank you!"}
 ]},
 {id:"taxi",title:"🚕 Taking a taxi",emoji:"🚕",turns:[
  {who:"You",tr:"Hallo, ich möchte zum Flughafen.",pr:"HAH-loh, ish MURSH-tuh tsoom FLOOK-hah-fen",en:"Hello, I'd like to go to the airport."},
  {who:"Driver",tr:"Gerne.",pr:"GAIR-nuh",en:"Gladly."},
  {who:"You",tr:"Wie lange dauert es?",pr:"vee LANG-uh DOW-ert es",en:"How long does it take?"},
  {who:"Driver",tr:"Zwanzig Minuten.",pr:"TSVAN-tsig mi-NOO-ten",en:"Twenty minutes."},
  {who:"You",tr:"Halten Sie hier, bitte. Danke.",pr:"HAL-ten zee heer, BIT-tuh, DAN-kuh",en:"Stop here, please. Thanks."}
 ]},
 {id:"meet",title:"🤝 Meeting someone",emoji:"🤝",turns:[
  {who:"Local",tr:"Hallo! Wie heißen Sie?",pr:"HAH-loh! vee HY-sen zee",en:"Hello! What's your name?"},
  {who:"You",tr:"Ich heiße __NAME__.",pr:"ish HY-suh __NAME__",en:"My name is __NAME__."},
  {who:"Local",tr:"Woher kommen Sie?",pr:"vo-HAIR KOM-en zee",en:"Where are you from?"},
  {who:"You",tr:"Ich komme aus Indien.",pr:"ish KOM-uh ows IN-dee-en",en:"I'm from India."},
  {who:"Local",tr:"Willkommen!",pr:"VIL-kom-en",en:"Welcome!"}
 ]}
];
const DE_POCKET=[
 {tr:"Hallo",pr:"HAH-loh",en:"hello",c:"Greetings"},{tr:"Danke",pr:"DAN-kuh",en:"thanks",c:"Greetings"},
 {tr:"Bitte",pr:"BIT-tuh",en:"please / you're welcome",c:"Greetings"},{tr:"Tschüss",pr:"chewss",en:"bye",c:"Greetings"},
 {tr:"Ja",pr:"yah",en:"yes",c:"Greetings"},{tr:"Nein",pr:"nine",en:"no",c:"Greetings"},{tr:"Entschuldigung",pr:"ent-SHOOL-di-goong",en:"excuse me",c:"Greetings"},
 {tr:"eins",pr:"ines",en:"1",c:"Numbers"},{tr:"zwei",pr:"tsvy",en:"2",c:"Numbers"},{tr:"drei",pr:"dry",en:"3",c:"Numbers"},{tr:"zehn",pr:"tsayn",en:"10",c:"Numbers"},{tr:"hundert",pr:"HOON-dert",en:"100",c:"Numbers"},
 {tr:"Wasser",pr:"VAH-ser",en:"water",c:"Food"},{tr:"Tee",pr:"tay",en:"tea",c:"Food"},{tr:"Brot",pr:"broht",en:"bread",c:"Food"},{tr:"Die Rechnung, bitte",pr:"dee RESH-noong",en:"the bill, please",c:"Food"},{tr:"lecker",pr:"LEK-er",en:"tasty",c:"Food"},
 {tr:"Wo ist…?",pr:"voh ist",en:"where is…?",c:"Directions"},{tr:"links",pr:"links",en:"left",c:"Directions"},{tr:"rechts",pr:"reshts",en:"right",c:"Directions"},{tr:"die Toilette",pr:"dee twa-LET-tuh",en:"the toilet",c:"Directions"},{tr:"der Flughafen",pr:"dair FLOOK-hah-fen",en:"the airport",c:"Directions"},
 {tr:"Hilfe!",pr:"HIL-fuh",en:"Help!",c:"Emergency"},{tr:"Ich verstehe nicht",pr:"ish fer-SHTAY-uh nisht",en:"I don't understand",c:"Emergency"},{tr:"Ich brauche einen Arzt",pr:"ish BROW-khuh INE-en artst",en:"I need a doctor",c:"Emergency"},{tr:"die Polizei",pr:"dee po-li-TSY",en:"the police",c:"Emergency"}
];
const DE_CULTURE=[
 {icon:"⏰",title:"Punctuality is respect",body:"Being on time — even a few minutes early — matters in Germany. Arriving late without warning reads as rude."},
 {icon:"🗣️",title:"Sie vs. du",body:"Use the formal <b>Sie</b> with strangers, officials and elders until you're invited to switch to the casual <b>du</b>."},
 {icon:"💶",title:"Cash is still king",body:"Many bakeries, cafés and small shops are cash-only or prefer it. Always carry some euros."},
 {icon:"🍺",title:"Eye contact when you toast",body:"Clinking glasses? Look the person in the eye as you say <b>Prost!</b> — skipping it is said to bring bad luck."},
 {icon:"♻️",title:"Quiet hours & recycling",body:"Sundays and late evenings are 'Ruhezeit' (quiet time) — keep noise down. And sort your rubbish; Germans take recycling seriously."},
 {icon:"🚲",title:"Mind the bike lanes",body:"Don't walk in the red-paved bike lanes — cyclists move fast and have right of way."}
];
const DE_SOUNDS=[
 {l:"ä",say:"like 'e' in bed",ex:"Mädchen (girl)",voice:"Mädchen"},
 {l:"ö",say:"like 'u' in fur — same as Turkish ö",ex:"schön (nice)",voice:"schön"},
 {l:"ü",say:"German ü / 'ew'",ex:"über (over)",voice:"über"},
 {l:"ß",say:"a sharp 'ss'",ex:"Straße (street)",voice:"Straße"},
 {l:"ch",say:"breathy h (like 'loch'), or soft 'sh'",ex:"ich (I) = ish",voice:"ich"},
 {l:"w",say:"like English 'v'",ex:"Wasser (water) = VAH-ser",voice:"Wasser"},
 {l:"v",say:"like English 'f'",ex:"vier (four) = feer",voice:"vier"},
 {l:"z",say:"like 'ts'",ex:"zehn (ten) = tsayn",voice:"zehn"},
 {l:"ei / ie",say:"ei = 'eye', ie = 'ee'",ex:"nein = nine, vier = feer",voice:"nein"},
 {l:"r",say:"soft, in the throat",ex:"rot (red)",voice:"rot"}
];
const DE_GRAMMAR=`German has three genders (<b>der/die/das</b>) and capitalizes every noun. The verb usually comes second; cases tweak the articles (der→den…). For travel you'll be understood without perfect cases — focus on vocabulary and word order.`;
const DE_BRIDGES=`<div class="note">🇬🇧 <b>English is your bridge</b> — German is its close cousin: Wasser≈water, Brot≈bread, Haus≈house, gut≈good, trinken≈drink, Hand≈hand.</div>
  <div class="note">🇮🇹🇹🇷 The European loanwords you know from Italian (Hotel, Taxi, Restaurant) appear here too, and the ö/ü are identical to Turkish.</div>`;

/* ---- ARABIC ---- */
const AR_DIALOGUES=[
 {id:"cafe",title:"☕ Ordering a tea",emoji:"☕",turns:[
  {who:"Server",tr:"مرحبا، ماذا تريد؟",pr:"marḥaban, mādhā turīd",en:"Hello, what would you like?"},
  {who:"You",tr:"أريد شاي من فضلك.",pr:"urīd shāy min faḍlak",en:"I'd like a tea, please."},
  {who:"Server",tr:"شيء آخر؟",pr:"shayʾ ākhar",en:"Anything else?"},
  {who:"You",tr:"بكم؟",pr:"bikam",en:"How much?"},
  {who:"Server",tr:"خمسة عشر.",pr:"khamsata ʿashar",en:"Fifteen."},
  {who:"You",tr:"شكرا!",pr:"shukran",en:"Thanks!"}
 ]},
 {id:"taxi",title:"🚕 Taking a taxi",emoji:"🚕",turns:[
  {who:"You",tr:"مرحبا، أريد الذهاب إلى المطار.",pr:"marḥaban, urīd adh-dhahāb ilā al-maṭār",en:"Hello, I want to go to the airport."},
  {who:"Driver",tr:"حسنا.",pr:"ḥasanan",en:"OK."},
  {who:"You",tr:"كم من الوقت؟",pr:"kam min al-waqt",en:"How long does it take?"},
  {who:"Driver",tr:"عشرون دقيقة.",pr:"ʿishrūn daqīqa",en:"Twenty minutes."},
  {who:"You",tr:"قف هنا من فضلك. شكرا.",pr:"qif hunā min faḍlak, shukran",en:"Stop here, please. Thanks."}
 ]},
 {id:"meet",title:"🤝 Meeting someone",emoji:"🤝",turns:[
  {who:"Local",tr:"مرحبا! ما اسمك؟",pr:"marḥaban! mā ismuk",en:"Hello! What's your name?"},
  {who:"You",tr:"اسمي __NAME__.",pr:"ismī __NAME__",en:"My name is __NAME__."},
  {who:"Local",tr:"من أين أنت؟",pr:"min ayna anta",en:"Where are you from?"},
  {who:"You",tr:"أنا من الهند.",pr:"anā min al-hind",en:"I'm from India."},
  {who:"Local",tr:"أهلا وسهلا!",pr:"ahlan wa sahlan",en:"Welcome!"}
 ]}
];
const AR_POCKET=[
 {tr:"مرحبا",pr:"marḥaban",en:"hello",c:"Greetings"},{tr:"شكرا",pr:"shukran",en:"thank you",c:"Greetings"},
 {tr:"من فضلك",pr:"min faḍlak (to a man) / min faḍlik (to a woman)",en:"please",c:"Greetings"},{tr:"مع السلامة",pr:"maʿa s-salāma",en:"goodbye",c:"Greetings"},
 {tr:"نعم",pr:"naʿam",en:"yes",c:"Greetings"},{tr:"لا",pr:"lā",en:"no",c:"Greetings"},{tr:"آسف",pr:"āsif",en:"sorry",c:"Greetings"},
 {tr:"واحد",pr:"wāḥid",en:"1",c:"Numbers"},{tr:"اثنان",pr:"ithnān",en:"2",c:"Numbers"},{tr:"ثلاثة",pr:"thalātha",en:"3",c:"Numbers"},{tr:"عشرة",pr:"ʿashara",en:"10",c:"Numbers"},{tr:"مئة",pr:"miʾa",en:"100",c:"Numbers"},
 {tr:"ماء",pr:"māʾ",en:"water",c:"Food"},{tr:"شاي",pr:"shāy",en:"tea",c:"Food"},{tr:"خبز",pr:"khubz",en:"bread",c:"Food"},{tr:"الحساب",pr:"al-ḥisāb",en:"the bill",c:"Food"},{tr:"لذيذ",pr:"ladhīdh",en:"delicious",c:"Food"},
 {tr:"أين؟",pr:"ayna",en:"where?",c:"Directions"},{tr:"يسار",pr:"yasār",en:"left",c:"Directions"},{tr:"يمين",pr:"yamīn",en:"right",c:"Directions"},{tr:"الحمام",pr:"al-ḥammām",en:"bathroom",c:"Directions"},{tr:"المطار",pr:"al-maṭār",en:"airport",c:"Directions"},
 {tr:"النجدة!",pr:"an-najda",en:"Help!",c:"Emergency"},{tr:"لا أفهم",pr:"lā afham",en:"I don't understand",c:"Emergency"},{tr:"أحتاج طبيب",pr:"aḥtāj ṭabīb",en:"I need a doctor",c:"Emergency"},{tr:"مستشفى",pr:"mustashfā",en:"hospital",c:"Emergency"},{tr:"الشرطة",pr:"ash-shurṭa",en:"police",c:"Emergency"}
];
const AR_CULTURE=[
 {icon:"🤝",title:"The right hand",body:"Eat, give and receive with your <b>right hand</b>. The left is traditionally considered unclean."},
 {icon:"👕",title:"Dress modestly",body:"Cover shoulders and knees, especially at mosques and religious or rural areas. Women may need a headscarf to enter a mosque."},
 {icon:"🕌",title:"Prayer times",body:"Prayer happens five times a day; some shops pause briefly. Be quiet and respectful during the call to prayer (adhan)."},
 {icon:"🌙",title:"During Ramadan",body:"Avoid eating, drinking or smoking in public during daylight in the fasting month. The evening iftar is a warm, social occasion."},
 {icon:"☕",title:"Accept the hospitality",body:"Coffee, tea or dates are offered generously — accepting (even a little) is polite. Expect friendly small talk before business."},
 {icon:"👣",title:"Feet & photos",body:"Don't point the soles of your feet at people, and ask before photographing locals — especially women."}
];
const AR_SOUNDS=[
 {l:"ح  ḥ",say:"a breathy h from deep in the throat",ex:"ḥisāb (bill)",voice:"حساب"},
 {l:"خ  kh",say:"like the 'ch' in Scottish loch",ex:"khubz (bread)",voice:"خبز"},
 {l:"ع  ʿayn",say:"a tight catch in the throat",ex:"ʿashara (ten)",voice:"عشرة"},
 {l:"غ  gh",say:"like a French throaty 'r'",ex:"ghadan (tomorrow)",voice:"غدا"},
 {l:"ق  q",say:"a 'k' from deep in the throat",ex:"qahwa (coffee)",voice:"قهوة"},
 {l:"ص ض ط",say:"'heavy' s, d, t — deeper and fuller",ex:"ṣabāḥ (morning)",voice:"صباح"},
 {l:"ء  hamza",say:"a glottal stop (the catch in 'uh-oh')",ex:"māʾ (water)",voice:"ماء"},
 {l:"↤ RTL",say:"Arabic reads right-to-left",ex:"start from the right",voice:"مرحبا"}
];
const AR_GRAMMAR=`Arabic reads right-to-left and is built from 3-letter roots: <b>k-t-b</b> gives kitāb (book), maktab (office), kātib (writer). 'The' is <b>al-</b> stuck on the front, and there's no 'is/are' in the present — "the house big" means "the house is big". Short vowels usually aren't written; the audio fills them in.`;
const AR_BRIDGES=`<div class="note">🇮🇳 <b>Huge overlap with your Hindi/Urdu:</b> شكرا shukran≈shukriya, حساب ḥisāb≈hisaab, قهوة qahwa≈coffee/kahve, دنيا dunyā≈duniya, كتاب kitāb≈kitaab, قلم qalam≈qalam (pen).</div>
  <div class="note">🇹🇷 And via Turkish: many shared Arabic-origin words you already met. You half-know hundreds of words.</div>`;

/* ---- TELUGU ---- */
const TE_DIALOGUES=[
 {id:"cafe",title:"☕ Ordering tea",emoji:"☕",turns:[
  {who:"Server",tr:"నమస్కారం, ఏం కావాలి?",pr:"namaskāram, ēm kāvāli",en:"Hello, what do you want?"},
  {who:"You",tr:"నాకు ఒక టీ కావాలి.",pr:"nāku oka ṭī kāvāli",en:"I'd like a tea."},
  {who:"Server",tr:"ఇంకేమైనా?",pr:"inkēmainā",en:"Anything else?"},
  {who:"You",tr:"ఇది ఎంత?",pr:"idi enta",en:"How much is it?"},
  {who:"Server",tr:"యాభై రూపాయలు.",pr:"yābhai rūpāyalu",en:"Fifty rupees."},
  {who:"You",tr:"ధన్యవాదాలు!",pr:"dhanyavādālu",en:"Thanks!"}
 ]},
 {id:"dir",title:"🧭 Asking directions",emoji:"🧭",turns:[
  {who:"You",tr:"క్షమించండి, స్టేషన్ ఎక్కడ?",pr:"kshaminchaṇḍi, sṭēshan ekkaḍa",en:"Excuse me, where's the station?"},
  {who:"Local",tr:"నేరుగా వెళ్ళండి.",pr:"nērugā veḷḷaṇḍi",en:"Go straight."},
  {who:"You",tr:"దగ్గరా?",pr:"daggarā",en:"Is it near?"},
  {who:"Local",tr:"అవును, దగ్గరే.",pr:"avunu, daggarē",en:"Yes, it's near."},
  {who:"You",tr:"ధన్యవాదాలు!",pr:"dhanyavādālu",en:"Thanks!"}
 ]},
 {id:"meet",title:"🤝 Meeting someone",emoji:"🤝",turns:[
  {who:"Local",tr:"మీ పేరు ఏమిటి?",pr:"mī pēru ēmiṭi",en:"What's your name?"},
  {who:"You",tr:"నా పేరు __NAME__.",pr:"nā pēru __NAME__",en:"My name is __NAME__."},
  {who:"Local",tr:"మీరు ఎక్కడి నుంచి?",pr:"mīru ekkaḍi nunchi",en:"Where are you from?"},
  {who:"You",tr:"నేను దుబాయ్ నుంచి.",pr:"nēnu dubāy nunchi",en:"I'm from Dubai."},
  {who:"Local",tr:"స్వాగతం!",pr:"svāgatam",en:"Welcome!"}
 ]}
];
const TE_POCKET=[
 {tr:"నమస్కారం",pr:"namaskāram",en:"hello",c:"Greetings"},{tr:"ధన్యవాదాలు",pr:"dhanyavādālu",en:"thank you",c:"Greetings"},
 {tr:"దయచేసి",pr:"dayachēsi",en:"please",c:"Greetings"},{tr:"అవును",pr:"avunu",en:"yes",c:"Greetings"},{tr:"కాదు",pr:"kādu",en:"no",c:"Greetings"},
 {tr:"సెలవు",pr:"selavu",en:"goodbye",c:"Greetings"},{tr:"క్షమించండి",pr:"kshaminchaṇḍi",en:"sorry",c:"Greetings"},
 {tr:"ఒకటి",pr:"okaṭi",en:"1",c:"Numbers"},{tr:"రెండు",pr:"reṇḍu",en:"2",c:"Numbers"},{tr:"మూడు",pr:"mūḍu",en:"3",c:"Numbers"},{tr:"పది",pr:"padi",en:"10",c:"Numbers"},{tr:"వంద",pr:"vanda",en:"100",c:"Numbers"},
 {tr:"నీళ్లు",pr:"nīḷḷu",en:"water",c:"Food"},{tr:"టీ",pr:"ṭī",en:"tea",c:"Food"},{tr:"అన్నం",pr:"annam",en:"food / rice",c:"Food"},{tr:"బిల్లు",pr:"billu",en:"the bill",c:"Food"},{tr:"రుచిగా ఉంది",pr:"ruchigā undi",en:"delicious",c:"Food"},
 {tr:"ఎక్కడ?",pr:"ekkaḍa",en:"where?",c:"Directions"},{tr:"ఎడమ",pr:"eḍama",en:"left",c:"Directions"},{tr:"కుడి",pr:"kuḍi",en:"right",c:"Directions"},{tr:"టాయిలెట్",pr:"ṭāyileṭ",en:"toilet",c:"Directions"},{tr:"విమానాశ్రయం",pr:"vimānāśrayam",en:"airport",c:"Directions"},
 {tr:"సహాయం!",pr:"sahāyam",en:"Help!",c:"Emergency"},{tr:"నాకు అర్థం కాలేదు",pr:"nāku artham kālēdu",en:"I don't understand",c:"Emergency"},{tr:"డాక్టర్",pr:"ḍākṭar",en:"doctor",c:"Emergency"},{tr:"పోలీసు",pr:"pōlīsu",en:"police",c:"Emergency"}
];
const TE_CULTURE=[
 {icon:"🍌",title:"Banana-leaf feasts",body:"Traditional Telugu meals are served on a banana leaf and eaten with the right hand — a full thali of rice, dal and pickles."},
 {icon:"🙏",title:"Namaskāram",body:"Palms together with a slight bow is the respectful greeting, especially toward elders."},
 {icon:"👣",title:"Respect for elders",body:"Younger people may touch an elder's feet to seek blessings; using 'gāru' after a name shows respect."},
 {icon:"🌶️",title:"Among India's spiciest",body:"Andhra food is fiery. Ask for less spice with 'kāram takkuva' (కారం తక్కువ)."},
 {icon:"👟",title:"Shoes off",body:"Remove footwear before entering homes and temples."},
 {icon:"🪔",title:"Festivals",body:"Sankranti, Ugadi and Bathukamma are big — expect rangoli, lamps, kites and sweets."}
];
const TE_SOUNDS=[
 {l:"Script",say:"Telugu's round script — we show the sound too",ex:"నమస్కారం = namaskāram",voice:"నమస్కారం"},
 {l:"ట / డ (ṭ/ḍ)",say:"retroflex t/d — curl the tongue back",ex:"టీ (tea) = ṭī",voice:"టీ"},
 {l:"ళ (ḷ)",say:"a retroflex 'l'",ex:"నీళ్లు (water) = nīḷḷu",voice:"నీళ్లు"},
 {l:"క్ష (ksha)",say:"a 'ksh' cluster",ex:"క్షమించండి = kshaminchaṇḍi",voice:"క్షమించండి"},
 {l:"dh / bh",say:"aspirated — with a puff of air",ex:"ధన్యవాదాలు = dhanyavādālu",voice:"ధన్యవాదాలు"},
 {l:"long vowels",say:"holding a vowel can change the word",ex:"పది padi (ten)",voice:"పది"},
 {l:"ఎ / ఏ",say:"short e vs long ē",ex:"ఏడు (seven) = ēḍu",voice:"ఏడు"},
 {l:"verb-last",say:"verbs go at the end, like Turkish",ex:"నాకు టీ కావాలి = to-me tea needed",voice:"నాకు టీ కావాలి"}
];
const TE_GRAMMAR=`Telugu is Dravidian and <b>agglutinative</b> — like Turkish, it glues endings onto words and puts the verb last (Subject-Object-Verb). 'To-me tea is-needed' = నాకు టీ కావాలి. No articles. A lot of Sanskrit vocabulary overlaps with Hindi/Marathi.`;
const TE_BRIDGES=`<div class="note">🇮🇳 <b>Shared Sanskrit roots:</b> namaskāram ≈ namaskār, dhanyavādālu ≈ dhanyavād, roṭṭe ≈ roti, kāphī ≈ coffee.</div>
  <div class="note">🇹🇷 <b>Grammar like Turkish:</b> verb-last and endings glued on — the same build-from-pieces logic transfers directly.</div>`;

/* ---- FARSI ---- */
const FA_DIALOGUES=[
 {id:"cafe",title:"☕ Ordering tea",emoji:"☕",turns:[
  {who:"Server",tr:"سلام، چی می‌خواهید؟",pr:"salām, chi mikhāhid",en:"Hello, what would you like?"},
  {who:"You",tr:"یک چای می‌خواهم، لطفا.",pr:"yek chāy mikhāham, lotfan",en:"I'd like a tea, please."},
  {who:"Server",tr:"چیز دیگری؟",pr:"chiz-e digari",en:"Anything else?"},
  {who:"You",tr:"چند است؟",pr:"chand ast",en:"How much is it?"},
  {who:"Server",tr:"پنج هزار تومان.",pr:"panj hezār tomān",en:"Five thousand toman."},
  {who:"You",tr:"ممنون!",pr:"mamnun",en:"Thanks!"}
 ]},
 {id:"taxi",title:"🚕 Taking a taxi",emoji:"🚕",turns:[
  {who:"You",tr:"سلام، فرودگاه می‌روم.",pr:"salām, forudgāh miravam",en:"Hello, I'm going to the airport."},
  {who:"Driver",tr:"بله، بفرمایید.",pr:"bale, befarmāyid",en:"Yes, please get in."},
  {who:"You",tr:"چقدر طول می‌کشد؟",pr:"cheghadr tul mikeshad",en:"How long does it take?"},
  {who:"Driver",tr:"بیست دقیقه.",pr:"bist daghighe",en:"Twenty minutes."},
  {who:"You",tr:"همین‌جا نگه دارید. ممنون.",pr:"haminjā negah dārid, mamnun",en:"Stop here. Thanks."}
 ]},
 {id:"meet",title:"🤝 Meeting someone",emoji:"🤝",turns:[
  {who:"Local",tr:"سلام! اسم شما چیست؟",pr:"salām! esm-e shomā chist",en:"Hello! What's your name?"},
  {who:"You",tr:"اسم من __NAME__ است.",pr:"esm-e man __NAME__ ast",en:"My name is __NAME__."},
  {who:"Local",tr:"اهل کجا هستید؟",pr:"ahl-e kojā hastid",en:"Where are you from?"},
  {who:"You",tr:"من از هند هستم.",pr:"man az hend hastam",en:"I'm from India."},
  {who:"Local",tr:"خوش آمدید!",pr:"khosh āmadid",en:"Welcome!"}
 ]}
];
const FA_POCKET=[
 {tr:"سلام",pr:"salām",en:"hello",c:"Greetings"},{tr:"ممنون",pr:"mamnun",en:"thank you",c:"Greetings"},
 {tr:"لطفا",pr:"lotfan",en:"please",c:"Greetings"},{tr:"بله",pr:"bale",en:"yes",c:"Greetings"},{tr:"نه",pr:"na",en:"no",c:"Greetings"},
 {tr:"خداحافظ",pr:"khodāhāfez",en:"goodbye",c:"Greetings"},{tr:"ببخشید",pr:"bebakhshid",en:"sorry / excuse me",c:"Greetings"},
 {tr:"یک",pr:"yek",en:"1",c:"Numbers"},{tr:"دو",pr:"do",en:"2",c:"Numbers"},{tr:"سه",pr:"se",en:"3",c:"Numbers"},{tr:"ده",pr:"dah",en:"10",c:"Numbers"},{tr:"صد",pr:"sad",en:"100",c:"Numbers"},
 {tr:"آب",pr:"āb",en:"water",c:"Food"},{tr:"چای",pr:"chāy",en:"tea",c:"Food"},{tr:"نان",pr:"nān",en:"bread",c:"Food"},{tr:"حساب",pr:"hesāb",en:"the bill",c:"Food"},{tr:"خوشمزه",pr:"khoshmaze",en:"delicious",c:"Food"},
 {tr:"کجا؟",pr:"kojā",en:"where?",c:"Directions"},{tr:"چپ",pr:"chap",en:"left",c:"Directions"},{tr:"راست",pr:"rāst",en:"right",c:"Directions"},{tr:"دستشویی",pr:"dastshui",en:"toilet",c:"Directions"},{tr:"فرودگاه",pr:"forudgāh",en:"airport",c:"Directions"},
 {tr:"کمک!",pr:"komak",en:"Help!",c:"Emergency"},{tr:"نمی‌فهمم",pr:"nemifahmam",en:"I don't understand",c:"Emergency"},{tr:"دکتر",pr:"doktor",en:"doctor",c:"Emergency"},{tr:"پلیس",pr:"polis",en:"police",c:"Emergency"}
];
const FA_CULTURE=[
 {icon:"🤝",title:"Taarof (ritual politeness)",body:"Offers are made and politely refused several times before accepting. A shopkeeper may even say 'it's nothing' (ghābel nadāre) — insist gently and pay."},
 {icon:"🌹",title:"Lavish hospitality",body:"Guests are deeply honoured. If invited, bring flowers or sweets, and expect to be fed generously."},
 {icon:"👞",title:"Shoes off",body:"Always remove your shoes when entering an Iranian home."},
 {icon:"🍵",title:"Endless chāy",body:"Tea is offered constantly, often with sugar cubes or dates. Accepting is warm and expected."},
 {icon:"🧕",title:"Modest dress",body:"Dress modestly; in Iran women cover their hair with a headscarf in public."},
 {icon:"🌱",title:"Nowruz",body:"Persian New Year (around 21 March) is the great celebration — spring, family visits and the haft-sin table."}
];
const FA_SOUNDS=[
 {l:"↤ RTL",say:"Persian reads right-to-left (Arabic script)",ex:"start from the right",voice:"سلام"},
 {l:"خ kh",say:"like the 'ch' in Scottish loch",ex:"khodāhāfez (bye)",voice:"خداحافظ"},
 {l:"ق gh/q",say:"a throaty g/k from the back",ex:"qahve (coffee)",voice:"قهوه"},
 {l:"آ ā",say:"a long 'aa' as in father",ex:"āb (water) = aab",voice:"آب"},
 {l:"و",say:"sometimes 'v', sometimes 'oo'",ex:"do (two)",voice:"دو"},
 {l:"ه h",say:"a soft h, often silent at the end",ex:"qahve",voice:"قهوه"},
 {l:"چ / پ / گ / ژ",say:"the four letters Persian adds to Arabic: ch, p, g, zh",ex:"چای chāy (tea)",voice:"چای"},
 {l:"stress",say:"stress usually falls on the last syllable",ex:"sal-ĀM",voice:"سلام"}
];
const FA_GRAMMAR=`Persian is <b>Indo-European</b> — grammatically close to Hindi/Urdu and far simpler than Arabic, despite the shared script. No grammatical gender, no cases, regular plurals (add -hā), and the verb goes last. 'I tea want' = چای می‌خواهم. You'll recognise a huge amount of vocabulary.`;
const FA_BRIDGES=`<div class="note">🇮🇳 <b>Enormous overlap with Hindi/Urdu:</b> salām, خداحافظ khodāhāfez ≈ khuda hafiz, حساب hesāb ≈ hisaab, چای chāy ≈ chai, نان nān ≈ naan, گوشت gusht ≈ gosht, دوست dust = friend.</div>
  <div class="note">🔢 <b>Numbers are nearly identical:</b> do, se, panj, shesh, haft, hasht, dah.</div>`;

/* ---- PORTUGUESE ---- */
const PT_DIALOGUES=[
 {id:"cafe",title:"☕ Ordering at a café",emoji:"☕",turns:[
  {who:"Server",tr:"Boa tarde, o que deseja?",pr:"boh-ah TAR-duh, oo kuh duh-ZAY-zhuh",en:"Good afternoon, what would you like?"},
  {who:"You",tr:"Queria um café, por favor.",pr:"kuh-REE-uh oong kah-FEH poor fah-VOR",en:"I'd like a coffee, please."},
  {who:"Server",tr:"Mais alguma coisa?",pr:"mah-eez al-GOO-mah KOY-zah",en:"Anything else?"},
  {who:"You",tr:"Quanto custa?",pr:"KWAN-too KOOSH-tah",en:"How much is it?"},
  {who:"Server",tr:"Um euro e meio.",pr:"oong EH-oo-roo ee MAY-oo",en:"One euro fifty."},
  {who:"You",tr:"Obrigado!",pr:"oh-bree-GAH-doo",en:"Thank you!"}
 ]},
 {id:"taxi",title:"🚕 Taking a taxi",emoji:"🚕",turns:[
  {who:"You",tr:"Boa tarde, queria ir ao aeroporto.",pr:"boh-ah TAR-duh, kuh-REE-uh eer ow ah-eh-roo-POR-too",en:"Good afternoon, I'd like to go to the airport."},
  {who:"Driver",tr:"Com certeza.",pr:"kong ser-TEH-zah",en:"Of course."},
  {who:"You",tr:"Quanto tempo demora?",pr:"KWAN-too TEM-poo duh-MOH-ruh",en:"How long does it take?"},
  {who:"Driver",tr:"Vinte minutos.",pr:"VEEN-tuh mee-NOO-toosh",en:"Twenty minutes."},
  {who:"You",tr:"Pare aqui, por favor. Obrigado.",pr:"PAH-ruh ah-KEE poor fah-VOR, oh-bree-GAH-doo",en:"Stop here, please. Thanks."}
 ]},
 {id:"meet",title:"🤝 Meeting someone",emoji:"🤝",turns:[
  {who:"Local",tr:"Olá! Como se chama?",pr:"oh-LAH! KOH-moo suh SHAH-mah",en:"Hello! What's your name?"},
  {who:"You",tr:"Chamo-me __NAME__.",pr:"SHAH-moo-muh __NAME__",en:"My name is __NAME__."},
  {who:"Local",tr:"De onde é?",pr:"duh ON-duh eh",en:"Where are you from?"},
  {who:"You",tr:"Sou da Índia, mas vivo no Dubai.",pr:"soh dah EEN-dee-ah, mahsh VEE-voo noo doo-BYE",en:"I'm from India, but I live in Dubai."},
  {who:"Local",tr:"Bem-vindo!",pr:"beng-VEEN-doo",en:"Welcome!"}
 ]}
];
const PT_POCKET=[
 {tr:"Olá",pr:"oh-LAH",en:"hello",c:"Greetings"},{tr:"Obrigado",pr:"oh-bree-GAH-doo",en:"thank you (m)",c:"Greetings"},
 {tr:"Por favor",pr:"poor fah-VOR",en:"please",c:"Greetings"},{tr:"Sim",pr:"seeng",en:"yes",c:"Greetings"},{tr:"Não",pr:"nowng",en:"no",c:"Greetings"},
 {tr:"Adeus",pr:"ah-DEH-oosh",en:"goodbye",c:"Greetings"},{tr:"Desculpe",pr:"desh-KOOL-puh",en:"sorry / excuse me",c:"Greetings"},
 {tr:"um",pr:"oong",en:"1",c:"Numbers"},{tr:"dois",pr:"doysh",en:"2",c:"Numbers"},{tr:"três",pr:"traysh",en:"3",c:"Numbers"},{tr:"dez",pr:"desh",en:"10",c:"Numbers"},{tr:"cem",pr:"seng",en:"100",c:"Numbers"},
 {tr:"água",pr:"AH-gwah",en:"water",c:"Food"},{tr:"chá",pr:"shah",en:"tea",c:"Food"},{tr:"pão",pr:"powng",en:"bread",c:"Food"},{tr:"A conta, por favor",pr:"ah KON-tah poor fah-VOR",en:"the bill, please",c:"Food"},{tr:"delicioso",pr:"dlee-SYOH-zoo",en:"delicious",c:"Food"},
 {tr:"Onde é…?",pr:"ON-duh eh",en:"where is…?",c:"Directions"},{tr:"à esquerda",pr:"ah shkerr-dah",en:"left",c:"Directions"},{tr:"à direita",pr:"ah dee-RAY-tah",en:"right",c:"Directions"},{tr:"a casa de banho",pr:"ah KAH-zah duh BAH-nyoo",en:"toilet",c:"Directions"},{tr:"o aeroporto",pr:"oo ah-eh-roo-POR-too",en:"airport",c:"Directions"},
 {tr:"Socorro!",pr:"soo-KOH-rroo",en:"Help!",c:"Emergency"},{tr:"Não percebo",pr:"nowng per-SEH-boo",en:"I don't understand",c:"Emergency"},{tr:"Preciso de um médico",pr:"pruh-SEE-zoo duh oong MEH-dee-koo",en:"I need a doctor",c:"Emergency"},{tr:"a polícia",pr:"ah poo-LEE-see-ah",en:"police",c:"Emergency"}
];
const PT_CULTURE=[
 {icon:"😙",title:"Two kisses",body:"Greeting socially, people give two kisses (cheek to cheek, right first). Men usually shake hands or hug; two kisses are common between women, or a man and woman."},
 {icon:"🙏",title:"Obrigado vs obrigada",body:"Say thanks according to <b>your own</b> gender: a man says <b>obrigado</b>, a woman <b>obrigada</b> — regardless of who you're thanking."},
 {icon:"🍽️",title:"Late, unhurried meals",body:"Lunch is ~1pm, dinner often after 8pm. Meals are relaxed; don't expect the bill until you ask ('a conta, por favor')."},
 {icon:"☕",title:"Coffee culture",body:"Ask for <b>um café</b> and you'll get an espresso ('uma bica' in Lisbon). A 'meia de leite' is a milky coffee. Have it standing at the balcão (counter)."},
 {icon:"🪙",title:"Modest tipping",body:"Tipping is light — round up or leave 5–10% for good service. Not obligatory."},
 {icon:"🎵",title:"Saudade & fado",body:"'Saudade' — a wistful longing — is central to Portuguese culture, expressed in fado music. Catching a fado night in Lisbon or Porto is unforgettable."}
];
const PT_SOUNDS=[
 {l:"ã / õ",say:"nasal vowels — say them through the nose",ex:"pão (bread) = powng",voice:"pão"},
 {l:"ão",say:"a nasal 'owng'",ex:"não (no) = nowng",voice:"não"},
 {l:"lh",say:"like 'lli' in million",ex:"toalha (towel)",voice:"toalha"},
 {l:"nh",say:"like 'ny' in canyon",ex:"banho (bath) = BAH-nyoo",voice:"banho"},
 {l:"ç / c(e,i)",say:"a soft 's'",ex:"praça (square)",voice:"praça"},
 {l:"s (end)",say:"at word-end sounds like 'sh' in EP",ex:"dois (two) = doysh",voice:"dois"},
 {l:"r / rr",say:"a strong, throaty r (like French)",ex:"carro (car)",voice:"carro"},
 {l:"vowels",say:"European Portuguese swallows unstressed vowels",ex:"telefone ≈ t'lefon",voice:"telefone"}
];
const PT_GRAMMAR=`Portuguese is a <b>Romance</b> language — if you know Italian, you already have a running start (água≈acqua, pão≈pane, cem≈cento). Nouns are masculine (o) or feminine (a), and adjectives and 'my/your' agree with them. Verbs conjugate; for travel, 'Queria…' (I'd like) and 'Tem…?' (do you have) get you a long way.`;
const PT_BRIDGES=`<div class="note">🇮🇹 <b>Your Italian is the key</b> — Portuguese is its close cousin: água≈acqua, pão≈pane, leite≈latte, café≈caffè, quanto custa≈quanto costa, por favor≈per favore, delicioso≈delizioso, and the numbers (um/dois/três ≈ uno/due/tre).</div>
  <div class="note">🍵 <b>chá</b> (tea) ≈ chai — and English loanwords (hotel, táxi) carry straight over.</div>`;


/* ===== FRENCH course (hand-built, free) ===== */
const FR_DIALOGUES=[
{id:"cafe", title:"☕ Ordering at a café", emoji:"☕", turns:[
{who:"Server", tr:"Bonjour ! Vous désirez ?", pr:"bon-ZHOOR! voo day-zee-RAY?", en:"Hello! What would you like?"},
{who:"You", tr:"Bonjour. Je voudrais un café, s'il vous plaît.", pr:"bon-ZHOOR. zhuh voo-DRAY ung kah-FAY, seel voo PLEH.", en:"Hello. I'd like a coffee, please."},
{who:"Server", tr:"Très bien. Et avec ça ?", pr:"treh bee-AN. ay ah-VEK sah?", en:"Very good. Anything else?"},
{who:"You", tr:"Une eau aussi, merci. C'est combien ?", pr:"oon oh oh-SEE, mair-SEE. say kom-bee-AN?", en:"A water too, thank you. How much is it?"},
{who:"Server", tr:"Quatre euros, s'il vous plaît.", pr:"KAH-truh uh-ROH, seel voo PLEH.", en:"Four euros, please."},
{who:"You", tr:"Voici. Merci beaucoup !", pr:"vwah-SEE. mair-SEE boh-KOO!", en:"Here you go. Thank you very much!"}
]},
{id:"taxi", title:"🚕 Taking a taxi", emoji:"🚕", turns:[
{who:"Driver", tr:"Bonjour, où allez-vous ?", pr:"bon-ZHOOR, oo ah-lay-VOO?", en:"Hello, where are you going?"},
{who:"You", tr:"À l'aéroport, s'il vous plaît.", pr:"ah lah-ay-roh-POR, seel voo PLEH.", en:"To the airport, please."},
{who:"Driver", tr:"Très bien. C'est parti.", pr:"treh bee-AN. say par-TEE.", en:"Very good. Off we go."},
{who:"You", tr:"C'est combien pour aller à l'aéroport ?", pr:"say kom-bee-AN poor ah-LAY ah lah-ay-roh-POR?", en:"How much is it to the airport?"},
{who:"Driver", tr:"Environ trente euros.", pr:"ahn-vee-RONG trahnt uh-ROH.", en:"About thirty euros."},
{who:"You", tr:"D'accord, merci. Est-ce que c'est loin ?", pr:"dah-KOR, mair-SEE. ess-kuh say LWANG?", en:"Okay, thank you. Is it far?"},
{who:"Driver", tr:"Non, ce n'est pas loin. Vingt minutes.", pr:"nong, suh nay pah LWANG. vang mee-NOOT.", en:"No, it's not far. Twenty minutes."}
]},
{id:"meeting", title:"🤝 Meeting someone", emoji:"🤝", turns:[
{who:"Them", tr:"Bonjour ! Comment vous appelez-vous ?", pr:"bon-ZHOOR! koh-MONG voo zah-play-VOO?", en:"Hello! What's your name?"},
{who:"You", tr:"Je m'appelle __NAME__.", pr:"zhuh mah-PELL __NAME__", en:"My name is __NAME__."},
{who:"Them", tr:"Enchanté ! D'où venez-vous ?", pr:"ahn-shahn-TAY! doo vuh-nay-VOO?", en:"Nice to meet you! Where are you from?"},
{who:"You", tr:"Enchanté. Je viens des États-Unis.", pr:"ahn-shahn-TAY. zhuh vee-AN day zay-tah-zoo-NEE.", en:"Nice to meet you. I'm from the United States."},
{who:"Them", tr:"Parlez-vous français ?", pr:"par-lay-VOO frahn-SEH?", en:"Do you speak French?"},
{who:"You", tr:"Un peu. J'apprends. Parlez-vous anglais ?", pr:"ung PUH. zhah-PRAHN. par-lay-VOO ahn-GLEH?", en:"A little. I'm learning. Do you speak English?"},
{who:"Them", tr:"Oui, un peu. Bienvenue !", pr:"wee, ung PUH. bee-an-vuh-NOO!", en:"Yes, a little. Welcome!"}
]}
];
const FR_POCKET=[
{tr:"Bonjour", pr:"bon-ZHOOR", en:"hello / good day", c:"Greetings"},
{tr:"Merci", pr:"mair-SEE", en:"thank you", c:"Greetings"},
{tr:"S'il vous plaît", pr:"seel voo PLEH", en:"please", c:"Greetings"},
{tr:"Oui / Non", pr:"wee / nong", en:"yes / no", c:"Greetings"},
{tr:"Au revoir", pr:"oh ruh-VWAR", en:"goodbye", c:"Greetings"},
{tr:"Pardon", pr:"par-DONG", en:"excuse me / sorry", c:"Greetings"},
{tr:"un / deux / trois", pr:"ung / duh / trwah", en:"one / two / three", c:"Numbers"},
{tr:"quatre / cinq", pr:"KAH-truh / sank", en:"four / five", c:"Numbers"},
{tr:"dix", pr:"deess", en:"ten", c:"Numbers"},
{tr:"vingt / cent", pr:"vang / sahng", en:"twenty / hundred", c:"Numbers"},
{tr:"C'est combien ?", pr:"say kom-bee-AN?", en:"how much is it?", c:"Numbers"},
{tr:"Je voudrais…", pr:"zhuh voo-DRAY", en:"I would like…", c:"Food"},
{tr:"le menu", pr:"luh muh-NOO", en:"the menu", c:"Food"},
{tr:"une eau", pr:"oon oh", en:"a water", c:"Food"},
{tr:"l'addition", pr:"lah-dee-see-ONG", en:"the bill", c:"Food"},
{tr:"C'est délicieux", pr:"say day-lee-see-UH", en:"it's delicious", c:"Food"},
{tr:"Où est… ?", pr:"oo eh?", en:"where is…?", c:"Directions"},
{tr:"à gauche / à droite", pr:"ah GOHSH / ah DRWAT", en:"left / right", c:"Directions"},
{tr:"tout droit", pr:"too DRWAH", en:"straight ahead", c:"Directions"},
{tr:"les toilettes", pr:"lay twah-LET", en:"the toilets", c:"Directions"},
{tr:"Au secours !", pr:"oh suh-KOOR!", en:"help!", c:"Emergency"},
{tr:"Appelez un médecin", pr:"ah-play ung mayd-SAN", en:"call a doctor", c:"Emergency"},
{tr:"Je suis perdu(e)", pr:"zhuh swee pair-DOO", en:"I'm lost", c:"Emergency"},
{tr:"la police", pr:"lah poh-LEESS", en:"the police", c:"Emergency"}
];
const FR_CULTURE=[
{icon:"🥖", title:"The daily bread", body:"The <b>baguette</b> is bought fresh daily. A traditional one is protected by law and made with just flour, water, yeast and salt. Say <b>\"une baguette, s'il vous plaît\"</b> at any boulangerie."},
{icon:"😘", title:"La bise", body:"Friends greet with <b>cheek kisses</b> (la bise) — usually two, but the number varies by region. In formal settings, a handshake is safer. When in doubt, follow the other person's lead."},
{icon:"🍽️", title:"Bon appétit", body:"Meals are social and unhurried. Wait for everyone to be served and say <b>\"bon appétit\"</b> before eating. The bill (l'addition) won't come until you ask — it's considered rude to rush you."},
{icon:"👔", title:"Vous vs tu", body:"French has two words for \"you\": formal <b>vous</b> and familiar <b>tu</b>. Use <b>vous</b> with strangers, elders, and in shops. Wait to be invited to use <b>tu</b>."},
{icon:"🕐", title:"Politeness first", body:"Always open with <b>\"Bonjour\"</b> before asking anything — walking into a shop and asking straight away can seem rude. A <b>\"Bonjour\"</b> and <b>\"merci\"</b> transform every interaction."},
{icon:"🇫🇷", title:"French beyond France", body:"French is official in <b>29 countries</b> — from Canada and Belgium to Senegal and Côte d'Ivoire. Accents and slang vary, but standard French is understood everywhere you go."}
];
const FR_SOUNDS=[
{l:"on / an / in", say:"nasal vowels — let the sound resonate in the nose, don't fully pronounce the n", ex:"bon, blanc, vin", voice:"bon"},
{l:"r", say:"a soft guttural r made in the back of the throat, like a light gargle", ex:"merci (thank you)", voice:"merci"},
{l:"é", say:"a closed 'ay' sound, like the e in 'café'", ex:"café (coffee)", voice:"café"},
{l:"è", say:"an open 'eh' sound, like the e in 'bet'", ex:"très (very)", voice:"très"},
{l:"silent finals", say:"most final consonants are silent — you don't say the last letter", ex:"petit sounds like 'puh-TEE'", voice:"petit"},
{l:"u", say:"round your lips to say 'oo' but try to say 'ee' — a tight front vowel", ex:"tu (you)", voice:"tu"},
{l:"ou", say:"a simple 'oo' like in 'food'", ex:"vous (you)", voice:"vous"},
{l:"liaison", say:"a normally silent final consonant links onto a following vowel", ex:"les amis sounds like 'lay-zah-MEE'", voice:"vous avez"},
{l:"ç", say:"the cedilla makes a c sound like 's' before a, o, u", ex:"français (French)", voice:"français"}
];
const FR_GRAMMAR=`French is a <b>Romance language</b> descended from Latin, so it shares its DNA with Spanish, Italian and — through centuries of borrowing — English. Every noun has a <b>gender</b>, masculine or feminine, which controls the article: <b>le/la</b> ("the") and <b>un/une</b> ("a"). Adjectives and articles <b>agree</b> with their noun in gender and number (un <i>petit</i> café, une <i>petite</i> table). Verbs <b>conjugate</b> by person, but as a traveler you can go remarkably far with a handful of ready-made frames: <b>"Je voudrais…"</b> (I'd like…) for anything you want, <b>"Est-ce qu'il y a…?"</b> (Is there…?) and <b>"Avez-vous…?"</b> (Do you have…?) to ask. Word order is close to English (subject–verb–object). Best of all, English borrowed <b>thousands</b> of French words — <i>restaurant, menu, information, impossible, nation</i> — so you already recognize a huge slice of the vocabulary; just say it the French way.`;
const FR_BRIDGES=`<div class="note">🇬🇧 <b>You already know thousands of French words</b> — English borrowed them: table, restaurant, menu, information, impossible, important, nation, question, animal, orange… Endings map cleanly: -tion↔-tion, -ité↔-ity (université≈university), -eur↔-or. Say them the French way and you're understood.</div>`;
const FR_COURSE={name:"French",flag:"🇫🇷",tts:"fr-FR",dir:"ltr",blurb:"Reason your way into French — the language you half-know already.",note:"French shares thousands of words with English, so you start ahead. We build sentences by reasoning, not memorizing: learn a few pieces, then snap them together. Focus on the sounds early — nasal vowels and the throaty r — and the rest follows.",resources:[
{icon:"🗣️",t:"Easy French",d:"Street interviews with subtitles.",q:"Easy French Easy Languages"},
{icon:"🎧",t:"Coffee Break French",d:"Bite-sized audio lessons for commutes.",q:"Coffee Break French podcast"},
{icon:"📺",t:"InnerFrench",d:"Slow, clear French on interesting topics.",q:"InnerFrench podcast"},
{icon:"📱",t:"TV5MONDE Apprendre",d:"Free graded listening exercises from real TV.",q:"TV5MONDE apprendre le français"},
{icon:"📖",t:"Lawless French",d:"Clear free grammar and vocabulary reference.",q:"Lawless French grammar"}
],lessons:[
{id:1, title:"Greetings", focus:"Bonjour · Merci · S'il vous plaît", steps:[
{t:"say", text:"French politeness starts with one word: <b>bonjour</b>. Literally <i>bon</i> (good) + <i>jour</i> (day). Say it before anything else."},
{t:"words", items:[
{tr:"bonjour", pr:"bon-ZHOOR", en:"hello / good day", link:"bon = good, jour = day"},
{tr:"merci", pr:"mair-SEE", en:"thank you", link:"think of 'mercy'"},
{tr:"oui", pr:"wee", en:"yes"},
{tr:"non", pr:"nong", en:"no"}
]},
{t:"chal", en:"Hello (good day)", tr:"Bonjour", pr:"bon-ZHOOR", morph:["bon = good","jour = day"]},
{t:"chal", en:"Thank you", tr:"Merci", pr:"mair-SEE", morph:["merci = thanks"], link:"like English 'mercy'"},
{t:"say", text:"To be polite when asking, add <b>s'il vous plaît</b> — literally 'if it pleases you'. And to say goodbye, <b>au revoir</b>."},
{t:"words", items:[
{tr:"s'il vous plaît", pr:"seel voo PLEH", en:"please", link:"s'il = if it, vous = you, plaît = pleases"},
{tr:"au revoir", pr:"oh ruh-VWAR", en:"goodbye"},
{tr:"pardon", pr:"par-DONG", en:"excuse me / sorry", link:"= English 'pardon'"}
]},
{t:"chal", en:"Please (formal)", tr:"S'il vous plaît", pr:"seel voo PLEH", morph:["s'il = if it","vous = you","plaît = pleases"]},
{t:"chal", en:"Goodbye", tr:"Au revoir", pr:"oh ruh-VWAR", morph:["au revoir = until seeing again"]},
{t:"chal", en:"Excuse me, please", tr:"Pardon, s'il vous plaît", pr:"par-DONG, seel voo PLEH", morph:["pardon = excuse me","s'il vous plaît = please"], link:"identical to English 'pardon'"}
], blocks:["Say hello","Say thank you and please","Say goodbye"]},
{id:2, title:"\"I'd like\"", focus:"Je voudrais · un café · une eau", steps:[
{t:"say", text:"The traveler's magic phrase: <b>Je voudrais…</b> — 'I would like…'. Add any noun and you can order anything politely."},
{t:"words", items:[
{tr:"je voudrais", pr:"zhuh voo-DRAY", en:"I would like", link:"softer, more polite than 'je veux' (I want)"},
{tr:"un café", pr:"ung kah-FAY", en:"a coffee", link:"café = English 'café'"},
{tr:"une eau", pr:"oon oh", en:"a water", link:"'eau' as in eau de toilette"},
{tr:"un thé", pr:"ung TAY", en:"a tea", link:"thé ≈ 'tea'"}
]},
{t:"say", text:"Notice <b>un</b> (masculine 'a') with café, but <b>une</b> (feminine 'a') with eau. Every noun has a gender — you'll pick it up by ear."},
{t:"chal", en:"I would like a coffee", tr:"Je voudrais un café", pr:"zhuh voo-DRAY ung kah-FAY", morph:["je voudrais = I'd like","un = a (masc.)","café = coffee"]},
{t:"chal", en:"I would like a water", tr:"Je voudrais une eau", pr:"zhuh voo-DRAY oon oh", morph:["je voudrais = I'd like","une = a (fem.)","eau = water"]},
{t:"say", text:"To ask for the bill at the end, request <b>l'addition</b>. The <i>l'</i> is 'the' before a vowel."},
{t:"chal", en:"I would like the bill, please", tr:"Je voudrais l'addition, s'il vous plaît", pr:"zhuh voo-DRAY lah-dee-see-ONG, seel voo PLEH", morph:["je voudrais = I'd like","l'addition = the bill","s'il vous plaît = please"]},
{t:"chal", en:"I would like a tea, please", tr:"Je voudrais un thé, s'il vous plaît", pr:"zhuh voo-DRAY ung TAY, seel voo PLEH", morph:["je voudrais = I'd like","un thé = a tea","s'il vous plaît = please"]}
], blocks:["Order a coffee","Order a water","Ask for the bill"]},
{id:3, title:"Numbers", focus:"un–dix · vingt · C'est combien ?", steps:[
{t:"say", text:"Count from one to five: <b>un, deux, trois, quatre, cinq</b>. These appear everywhere — prices, addresses, times."},
{t:"words", items:[
{tr:"un", pr:"ung", en:"one"},
{tr:"deux", pr:"duh", en:"two", link:"'deux' → 'duo'"},
{tr:"trois", pr:"trwah", en:"three", link:"'trois' → 'trio'"},
{tr:"quatre", pr:"KAH-truh", en:"four", link:"'quatre' → 'quart'"},
{tr:"cinq", pr:"sank", en:"five"}
]},
{t:"words", items:[
{tr:"six", pr:"seess", en:"six"},
{tr:"sept", pr:"set", en:"seven", link:"'sept' → 'September' (the old Roman 7th month)"},
{tr:"huit", pr:"weet", en:"eight"},
{tr:"neuf", pr:"nuhf", en:"nine"},
{tr:"dix", pr:"deess", en:"ten", link:"'dix' → 'decimal'"}
]},
{t:"chal", en:"Three", tr:"Trois", pr:"trwah", morph:["trois = three"], link:"'trio'"},
{t:"chal", en:"Ten", tr:"Dix", pr:"deess", morph:["dix = ten"]},
{t:"say", text:"Bigger jumps: <b>vingt</b> (20) and <b>cent</b> (100). To ask a price: <b>C'est combien ?</b> — 'It's how much?'"},
{t:"words", items:[
{tr:"vingt", pr:"vang", en:"twenty"},
{tr:"cent", pr:"sahng", en:"hundred", link:"'cent' → 'century, percent'"},
{tr:"c'est combien", pr:"say kom-bee-AN", en:"how much is it", link:"c'est = it is, combien = how much"}
]},
{t:"chal", en:"How much is it?", tr:"C'est combien ?", pr:"say kom-bee-AN?", morph:["c'est = it is","combien = how much"]},
{t:"chal", en:"Twenty euros", tr:"Vingt euros", pr:"vang uh-ROH", morph:["vingt = twenty","euros = euros"]}
], blocks:["Count one to ten","Say twenty and hundred","Ask how much"]},
{id:4, title:"Food", focus:"le menu · l'addition · c'est délicieux", steps:[
{t:"say", text:"At a restaurant, ask for <b>le menu</b> (or <i>la carte</i>). Then use <b>Je voudrais…</b> from before to order."},
{t:"words", items:[
{tr:"le menu", pr:"luh muh-NOO", en:"the menu", link:"= English 'menu'"},
{tr:"la viande", pr:"lah vee-AHND", en:"the meat"},
{tr:"le poisson", pr:"luh pwah-SONG", en:"the fish"},
{tr:"délicieux", pr:"day-lee-see-UH", en:"delicious", link:"≈ 'delicious'"}
]},
{t:"say", text:"Vegetarian? Say <b>Je ne mange pas de viande</b> — 'I don't eat meat'. The frame <i>ne … pas</i> wraps the verb to make it negative."},
{t:"chal", en:"I don't eat meat", tr:"Je ne mange pas de viande", pr:"zhuh nuh MAHNZH pah duh vee-AHND", morph:["je = I","ne … pas = not","mange = eat","de viande = (any) meat"]},
{t:"chal", en:"It's delicious", tr:"C'est délicieux", pr:"say day-lee-see-UH", morph:["c'est = it is","délicieux = delicious"], link:"≈ English 'delicious'"},
{t:"chal", en:"I would like the menu, please", tr:"Je voudrais le menu, s'il vous plaît", pr:"zhuh voo-DRAY luh muh-NOO, seel voo PLEH", morph:["je voudrais = I'd like","le menu = the menu","s'il vous plaît = please"]},
{t:"chal", en:"The bill, please", tr:"L'addition, s'il vous plaît", pr:"lah-dee-see-ONG, seel voo PLEH", morph:["l'addition = the bill","s'il vous plaît = please"]}
], blocks:["Ask for the menu","Say you don't eat meat","Say it's delicious","Ask for the bill"]},
{id:5, title:"Getting around", focus:"Où est… ? · à gauche/à droite · tout droit", steps:[
{t:"say", text:"To find anything, ask <b>Où est… ?</b> — 'Where is…?'. Then listen for directions: left, right, or straight ahead."},
{t:"words", items:[
{tr:"où est", pr:"oo eh", en:"where is", link:"où = where, est = is"},
{tr:"à gauche", pr:"ah GOHSH", en:"to the left"},
{tr:"à droite", pr:"ah DRWAT", en:"to the right", link:"'droite' → 'adroit'"},
{tr:"tout droit", pr:"too DRWAH", en:"straight ahead"}
]},
{t:"words", items:[
{tr:"les toilettes", pr:"lay twah-LET", en:"the toilets", link:"= 'toilets'"},
{tr:"l'aéroport", pr:"lah-ay-roh-POR", en:"the airport", link:"≈ 'airport'"},
{tr:"un taxi", pr:"ung tak-SEE", en:"a taxi", link:"= 'taxi'"}
]},
{t:"chal", en:"Where are the toilets?", tr:"Où sont les toilettes ?", pr:"oo song lay twah-LET?", morph:["où = where","sont = are","les toilettes = the toilets"]},
{t:"chal", en:"Where is the airport?", tr:"Où est l'aéroport ?", pr:"oo eh lah-ay-roh-POR?", morph:["où est = where is","l'aéroport = the airport"]},
{t:"chal", en:"Where is the hotel?", tr:"Où est l'hôtel ?", pr:"oo eh lo-TEL?", morph:["où est = where is","l'hôtel = the hotel"]},
{t:"chal", en:"To the right, then straight ahead", tr:"À droite, puis tout droit", pr:"ah DRWAT, pwee too DRWAH", morph:["à droite = to the right","puis = then","tout droit = straight ahead"]},
{t:"chal", en:"I would like a taxi, please", tr:"Je voudrais un taxi, s'il vous plaît", pr:"zhuh voo-DRAY ung tak-SEE, seel voo PLEH", morph:["je voudrais = I'd like","un taxi = a taxi","s'il vous plaît = please"]}
], blocks:["Ask where something is","Say left / right / straight","Ask for the airport, hotel, or a taxi"]},
{id:6, title:"I have / there is", focus:"j'ai · il y a · avez-vous… ?", steps:[
{t:"say", text:"Two workhorse phrases: <b>j'ai</b> ('I have') and <b>il y a</b> ('there is / there are'). Together they express possession and existence."},
{t:"words", items:[
{tr:"j'ai", pr:"zhay", en:"I have", link:"je + ai squeezed together"},
{tr:"il y a", pr:"eel-YAH", en:"there is / there are"},
{tr:"avez-vous", pr:"ah-vay-VOO", en:"do you have", link:"literally 'have you'"},
{tr:"je n'ai pas", pr:"zhuh nay PAH", en:"I don't have", link:"ne … pas around 'ai'"}
]},
{t:"chal", en:"I have a reservation", tr:"J'ai une réservation", pr:"zhay oon ray-zair-vah-SYONG", morph:["j'ai = I have","une réservation = a reservation"]},
{t:"chal", en:"Is there a menu?", tr:"Il y a un menu ?", pr:"eel-YAH ung muh-NOO?", morph:["il y a = there is","un menu = a menu"]},
{t:"chal", en:"Do you have water?", tr:"Avez-vous de l'eau ?", pr:"ah-vay-VOO duh LOH?", morph:["avez-vous = do you have","de l'eau = (some) water"]},
{t:"chal", en:"I don't have money", tr:"Je n'ai pas d'argent", pr:"zhuh nay PAH dar-ZHONG", morph:["je n'ai pas = I don't have","d'argent = (any) money"]},
{t:"say", text:"See the pattern? <b>ne … pas</b> wraps the verb. With <i>ai</i> it becomes <b>n'ai pas</b> because 'ne' drops its e before a vowel."}
], blocks:["Say 'I have'","Say 'there is'","Ask 'do you have?'"]},
{id:7, title:"Talking about the past", focus:"j'ai mangé · je suis allé · j'ai vu", steps:[
{t:"say", text:"To speak of the past, French often uses <b>j'ai</b> (I have) + a past participle. <i>J'ai mangé</i> = 'I ate' (literally 'I have eaten')."},
{t:"words", items:[
{tr:"j'ai mangé", pr:"zhay mahn-ZHAY", en:"I ate / I have eaten", link:"j'ai = I have, mangé = eaten"},
{tr:"j'ai vu", pr:"zhay VOO", en:"I saw", link:"vu = seen"},
{tr:"j'ai visité", pr:"zhay vee-zee-TAY", en:"I visited", link:"≈ 'visited'"},
{tr:"je suis allé", pr:"zhuh swee zah-LAY", en:"I went", link:"movement verbs use 'suis' (am) instead of 'ai'"}
]},
{t:"chal", en:"I ate at the restaurant", tr:"J'ai mangé au restaurant", pr:"zhay mahn-ZHAY oh res-toh-RONG", morph:["j'ai mangé = I ate","au restaurant = at the restaurant"]},
{t:"chal", en:"I visited Paris", tr:"J'ai visité Paris", pr:"zhay vee-zee-TAY pah-REE", morph:["j'ai visité = I visited","Paris = Paris"]},
{t:"chal", en:"I went to the airport", tr:"Je suis allé à l'aéroport", pr:"zhuh swee zah-LAY ah lah-ay-roh-POR", morph:["je suis allé = I went","à l'aéroport = to the airport"]},
{t:"chal", en:"I saw the menu", tr:"J'ai vu le menu", pr:"zhay VOO luh muh-NOO", morph:["j'ai vu = I saw","le menu = the menu"]}
], blocks:["Say 'I ate'","Say 'I went'","Say 'I saw / visited'"]},
{id:8, title:"Mine & yours", focus:"mon/ma · votre · c'est à moi", steps:[
{t:"say", text:"'My' changes with the noun's gender: <b>mon</b> (masc.) and <b>ma</b> (fem.). 'Your' (formal) is <b>votre</b> for either."},
{t:"words", items:[
{tr:"mon café", pr:"mong kah-FAY", en:"my coffee", link:"mon before masculine"},
{tr:"ma table", pr:"mah TAH-bluh", en:"my table", link:"ma before feminine"},
{tr:"votre menu", pr:"VOH-truh muh-NOO", en:"your menu", link:"votre = your (formal)"},
{tr:"c'est à moi", pr:"say tah MWAH", en:"it's mine", link:"literally 'it is to me'"}
]},
{t:"chal", en:"It's my coffee", tr:"C'est mon café", pr:"say mong kah-FAY", morph:["c'est = it is","mon café = my coffee"]},
{t:"chal", en:"It's mine", tr:"C'est à moi", pr:"say tah MWAH", morph:["c'est = it is","à moi = to me / mine"]},
{t:"chal", en:"Where is your table?", tr:"Où est votre table ?", pr:"oo eh VOH-truh TAH-bluh?", morph:["où est = where is","votre table = your table"]},
{t:"chal", en:"It's my water", tr:"C'est mon eau", pr:"say mong-NOH", morph:["c'est = it is","mon eau = my water"], link:"'mon' used before eau for smoother sound"}
], blocks:["Say 'my' (mon/ma)","Say 'your' (votre)","Say 'it's mine'"]},
{id:9, title:"Time & when", focus:"aujourd'hui · maintenant · quelle heure est-il ?", steps:[
{t:"say", text:"Anchor yourself in time: <b>aujourd'hui</b> (today), <b>maintenant</b> (now), <b>demain</b> (tomorrow), <b>hier</b> (yesterday)."},
{t:"words", items:[
{tr:"aujourd'hui", pr:"oh-zhoor-DWEE", en:"today"},
{tr:"maintenant", pr:"mant-NONG", en:"now"},
{tr:"demain", pr:"duh-MAN", en:"tomorrow"},
{tr:"hier", pr:"ee-AIR", en:"yesterday"}
]},
{t:"say", text:"To ask the time: <b>Quelle heure est-il ?</b> — 'What hour is it?'. <i>Heure</i> ≈ 'hour'."},
{t:"chal", en:"What time is it?", tr:"Quelle heure est-il ?", pr:"kel UHR eh-TEEL?", morph:["quelle = what","heure = hour","est-il = is it"]},
{t:"chal", en:"I'm going to the airport now", tr:"Je vais à l'aéroport maintenant", pr:"zhuh vay ah lah-ay-roh-POR mant-NONG", morph:["je vais = I go","à l'aéroport = to the airport","maintenant = now"]},
{t:"chal", en:"Tomorrow, not today", tr:"Demain, pas aujourd'hui", pr:"duh-MAN, pah oh-zhoor-DWEE", morph:["demain = tomorrow","pas = not","aujourd'hui = today"]},
{t:"chal", en:"I ate there yesterday", tr:"J'ai mangé là-bas hier", pr:"zhay mahn-ZHAY lah-BAH ee-AIR", morph:["j'ai mangé = I ate","là-bas = over there","hier = yesterday"]}
], blocks:["Say today / now","Say tomorrow / yesterday","Ask the time"]},
{id:10, title:"Question words", focus:"qui · où · quoi · pourquoi · quand · comment", steps:[
{t:"say", text:"Master the question words and you can ask anything: <b>qui</b> (who), <b>où</b> (where), <b>quoi/qu'est-ce que</b> (what), <b>pourquoi</b> (why), <b>quand</b> (when), <b>comment</b> (how)."},
{t:"words", items:[
{tr:"qui", pr:"kee", en:"who"},
{tr:"où", pr:"oo", en:"where"},
{tr:"qu'est-ce que", pr:"kess-kuh", en:"what (what is it that)"},
{tr:"pourquoi", pr:"poor-KWAH", en:"why", link:"pour = for, quoi = what"}
]},
{t:"words", items:[
{tr:"quand", pr:"kahng", en:"when"},
{tr:"comment", pr:"koh-MONG", en:"how", link:"also 'comment' as in 'how do you say'"}
]},
{t:"chal", en:"When?", tr:"Quand ?", pr:"kahng?", morph:["quand = when"]},
{t:"chal", en:"Why not?", tr:"Pourquoi pas ?", pr:"poor-KWAH pah?", morph:["pourquoi = why","pas = not"]},
{t:"chal", en:"What is it?", tr:"Qu'est-ce que c'est ?", pr:"kess-kuh SAY?", morph:["qu'est-ce que = what","c'est = it is"]},
{t:"chal", en:"How much is it?", tr:"C'est combien ?", pr:"say kom-bee-AN?", morph:["c'est = it is","combien = how much"]}
], blocks:["List the question words","Ask 'why?' and 'when?'","Ask 'what is it?'"]},
{id:11, title:"Can / want / must", focus:"je peux · je veux · je dois · il faut", steps:[
{t:"say", text:"Three power verbs, each followed by another verb: <b>je peux</b> (I can), <b>je veux</b> (I want), <b>je dois</b> (I must). Add <b>il faut</b> for 'it's necessary'."},
{t:"words", items:[
{tr:"je peux", pr:"zhuh PUH", en:"I can", link:"peux → 'potent, possible'"},
{tr:"je veux", pr:"zhuh VUH", en:"I want"},
{tr:"je dois", pr:"zhuh DWAH", en:"I must / I have to"},
{tr:"il faut", pr:"eel FOH", en:"it is necessary / one must"}
]},
{t:"chal", en:"I want to eat", tr:"Je veux manger", pr:"zhuh VUH mahn-ZHAY", morph:["je veux = I want","manger = to eat"]},
{t:"chal", en:"I must go", tr:"Je dois aller", pr:"zhuh DWAH ah-LAY", morph:["je dois = I must","aller = to go"]},
{t:"chal", en:"Can I pay?", tr:"Je peux payer ?", pr:"zhuh PUH pay-YAY?", morph:["je peux = I can","payer = to pay"]},
{t:"chal", en:"You have to turn right", tr:"Il faut tourner à droite", pr:"eel FOH toor-NAY ah DRWAT", morph:["il faut = one must","tourner = to turn","à droite = to the right"]}
], blocks:["Say 'I can / want / must'","Ask 'can I…?'","Say 'it's necessary'"]},
{id:12, title:"Joining ideas & getting by", focus:"et · mais · parce que · Je ne comprends pas", steps:[
{t:"say", text:"Connect your thoughts: <b>et</b> (and), <b>mais</b> (but), <b>aussi</b> (also), <b>parce que</b> (because), <b>très</b> (very)."},
{t:"words", items:[
{tr:"et", pr:"ay", en:"and"},
{tr:"mais", pr:"meh", en:"but"},
{tr:"aussi", pr:"oh-SEE", en:"also / too"},
{tr:"parce que", pr:"par-suh-KUH", en:"because"},
{tr:"très", pr:"treh", en:"very"}
]},
{t:"say", text:"And your survival phrases: <b>Je ne comprends pas</b> (I don't understand) and <b>Parlez-vous anglais ?</b> (Do you speak English?)."},
{t:"chal", en:"A coffee and a water", tr:"Un café et une eau", pr:"ung kah-FAY ay oon OH", morph:["un café = a coffee","et = and","une eau = a water"]},
{t:"chal", en:"It's good but very expensive", tr:"C'est bon mais très cher", pr:"say BONG meh treh SHAIR", morph:["c'est bon = it's good","mais = but","très cher = very expensive"]},
{t:"chal", en:"I don't understand", tr:"Je ne comprends pas", pr:"zhuh nuh kom-PRAHN pah", morph:["je = I","ne … pas = not","comprends = understand"]},
{t:"chal", en:"Can you help me?", tr:"Pouvez-vous m'aider ?", pr:"poo-vay-VOO meh-DAY?", morph:["pouvez-vous = can you","m'aider = help me"]},
{t:"chal", en:"Do you speak English?", tr:"Parlez-vous anglais ?", pr:"par-lay-VOO ahn-GLEH?", morph:["parlez-vous = do you speak","anglais = English"]}
], blocks:["Join with et / mais","Say 'because' and 'very'","Say 'I don't understand'","Ask 'do you speak English?'"]}
]};
/* ===== SPANISH course (hand-built, free) ===== */
const ES_DIALOGUES=[
{id:"cafe", title:"☕ Ordering at a café", emoji:"☕", turns:[
{who:"Server", tr:"¡Hola! ¿Qué desea?", pr:"OH-lah, keh deh-SEH-ah", en:"Hello! What would you like?"},
{who:"You", tr:"Hola. Quiero un café, por favor.", pr:"OH-lah. kee-EH-roh oon kah-FEH, por fah-VOR", en:"Hello. I want a coffee, please."},
{who:"Server", tr:"¿Algo más?", pr:"AHL-goh mahs", en:"Anything else?"},
{who:"You", tr:"Sí, un vaso de agua también.", pr:"see, oon BAH-soh deh AH-gwah tahm-bee-EN", en:"Yes, a glass of water too."},
{who:"Server", tr:"Muy bien. Son tres euros.", pr:"mwee bee-EN. sohn trehs EH-oo-rohs", en:"Very good. That's three euros."},
{who:"You", tr:"Aquí tiene. Gracias.", pr:"ah-KEE tee-EH-neh. GRAH-see-ahs", en:"Here you go. Thank you."}
]},
{id:"taxi", title:"🚕 Taking a taxi", emoji:"🚕", turns:[
{who:"Driver", tr:"Buenas tardes. ¿A dónde va?", pr:"BWEH-nahs TAR-dehs. ah DOHN-deh vah", en:"Good afternoon. Where are you going?"},
{who:"You", tr:"Al aeropuerto, por favor.", pr:"ahl ah-eh-roh-PWER-toh, por fah-VOR", en:"To the airport, please."},
{who:"Driver", tr:"Muy bien. ¿Tiene prisa?", pr:"mwee bee-EN. tee-EH-neh PREE-sah", en:"Very good. Are you in a hurry?"},
{who:"You", tr:"Sí, un poco. ¿Cuánto cuesta?", pr:"see, oon POH-koh. KWAHN-toh KWEHS-tah", en:"Yes, a little. How much does it cost?"},
{who:"Driver", tr:"Veinte euros, más o menos.", pr:"VAYN-teh EH-oo-rohs, mahs oh MEH-nohs", en:"Twenty euros, more or less."},
{who:"You", tr:"Está bien. Gracias.", pr:"ehs-TAH bee-EN. GRAH-see-ahs", en:"That's fine. Thank you."}
]},
{id:"meeting", title:"👋 Meeting someone", emoji:"👋", turns:[
{who:"Person", tr:"Hola, ¿cómo te llamas?", pr:"OH-lah, KOH-moh teh YAH-mahs", en:"Hello, what's your name?"},
{who:"You", tr:"Me llamo __NAME__.", pr:"meh YAH-moh __NAME__", en:"My name is __NAME__."},
{who:"Person", tr:"Mucho gusto. ¿De dónde eres?", pr:"MOO-choh GOOS-toh. deh DOHN-deh EH-rehs", en:"Nice to meet you. Where are you from?"},
{who:"You", tr:"Soy de Estados Unidos. ¿Y tú?", pr:"soy deh ehs-TAH-dohs oo-NEE-dohs. ee too", en:"I'm from the United States. And you?"},
{who:"Person", tr:"Soy de México. ¡Bienvenido!", pr:"soy deh MEH-hee-koh. bee-en-veh-NEE-doh", en:"I'm from Mexico. Welcome!"},
{who:"You", tr:"Gracias. Mucho gusto.", pr:"GRAH-see-ahs. MOO-choh GOOS-toh", en:"Thank you. Nice to meet you."}
]}
];
const ES_POCKET=[
{tr:"Hola", pr:"OH-lah", en:"hello", c:"Greetings"},
{tr:"Buenos días", pr:"BWEH-nohs DEE-ahs", en:"good morning", c:"Greetings"},
{tr:"Gracias", pr:"GRAH-see-ahs", en:"thank you", c:"Greetings"},
{tr:"Por favor", pr:"por fah-VOR", en:"please", c:"Greetings"},
{tr:"Adiós", pr:"ah-dee-OHS", en:"goodbye", c:"Greetings"},
{tr:"Perdón", pr:"per-DOHN", en:"sorry / excuse me", c:"Greetings"},
{tr:"Uno", pr:"OO-noh", en:"one", c:"Numbers"},
{tr:"Dos", pr:"dohs", en:"two", c:"Numbers"},
{tr:"Tres", pr:"trehs", en:"three", c:"Numbers"},
{tr:"Diez", pr:"dee-EHS", en:"ten", c:"Numbers"},
{tr:"Cien", pr:"see-EN", en:"one hundred", c:"Numbers"},
{tr:"¿Cuánto cuesta?", pr:"KWAHN-toh KWEHS-tah", en:"how much does it cost?", c:"Numbers"},
{tr:"El menú", pr:"ehl meh-NOO", en:"the menu", c:"Food"},
{tr:"La cuenta", pr:"lah KWEN-tah", en:"the bill", c:"Food"},
{tr:"Agua", pr:"AH-gwah", en:"water", c:"Food"},
{tr:"Está delicioso", pr:"ehs-TAH deh-lee-see-OH-soh", en:"it's delicious", c:"Food"},
{tr:"¿Dónde está el baño?", pr:"DOHN-deh ehs-TAH ehl BAH-nyoh", en:"where is the bathroom?", c:"Directions"},
{tr:"A la izquierda", pr:"ah lah ees-kee-ER-dah", en:"to the left", c:"Directions"},
{tr:"A la derecha", pr:"ah lah deh-REH-chah", en:"to the right", c:"Directions"},
{tr:"Todo recto", pr:"TOH-doh REK-toh", en:"straight ahead", c:"Directions"},
{tr:"Ayuda", pr:"ah-YOO-dah", en:"help", c:"Emergency"},
{tr:"Necesito un médico", pr:"neh-seh-SEE-toh oon MEH-dee-koh", en:"I need a doctor", c:"Emergency"},
{tr:"Llame a la policía", pr:"YAH-meh ah lah poh-lee-SEE-ah", en:"call the police", c:"Emergency"},
{tr:"No entiendo", pr:"noh en-tee-EN-doh", en:"I don't understand", c:"Emergency"}
];
const ES_CULTURE=[
{icon:"🌮", title:"Meals run late", body:"In Spain lunch (<b>la comida</b>) is often 2–3pm and dinner after 9pm. In Latin America times vary, but a leisurely shared meal is the norm everywhere."},
{icon:"👋", title:"Two kisses hello", body:"In Spain people greet with a light kiss on <b>each cheek</b>. In much of Latin America it's one kiss or a handshake. When unsure, a friendly <b>hola</b> and a smile always work."},
{icon:"⏰", title:"Relaxed time", body:"Social events often start later than stated. Being 15–30 minutes late to a party is normal and not rude — but for business, punctuality is expected."},
{icon:"🗣️", title:"Tú vs. usted", body:"Spanish has a casual <b>tú</b> and a formal <b>usted</b>. Use <b>usted</b> with elders, officials, and strangers; switch to <b>tú</b> once invited to."},
{icon:"🌎", title:"One language, many flavors", body:"A <b>banana</b> is <i>plátano</i>, <i>banana</i>, or <i>guineo</i> depending on the country. Vocabulary varies, but neutral Spanish is understood everywhere."},
{icon:"🎉", title:"Warm and expressive", body:"Spanish speakers tend to stand closer, touch more, and speak with lively hands. Warmth and friendliness go a long way — don't be shy about a big <b>¡Hola!</b>"}
];
const ES_SOUNDS=[
{l:"ñ", say:"like 'ny' in canyon", ex:"mañana (tomorrow)", voice:"mañana"},
{l:"rr", say:"a strongly rolled/trilled r", ex:"perro (dog)", voice:"perro"},
{l:"j", say:"a throaty h, from the back of the throat", ex:"jamón (ham)", voice:"jamón"},
{l:"g (before e, i)", say:"same throaty h sound as j", ex:"gente (people)", voice:"gente"},
{l:"ll / y", say:"like the 'y' in yes", ex:"llave (key)", voice:"llave"},
{l:"a e i o u", say:"pure, short vowels: ah, eh, ee, oh, oo — always the same", ex:"mesa (table)", voice:"mesa"},
{l:"h", say:"always silent", ex:"hola (hello)", voice:"hola"},
{l:"z / c (before e, i)", say:"like 's' in Latin America ('th' in much of Spain)", ex:"gracias (thank you)", voice:"gracias"}
];
const ES_GRAMMAR=`Spanish is a <b>Romance language</b> descended from Latin and is beautifully <b>phonetic</b> — once you learn the sounds, you can read almost anything aloud correctly. Nouns are <b>masculine or feminine</b>: <i>el</i>/<i>la</i> mean "the" and <i>un</i>/<i>una</i> mean "a" (<i>el libro</i>, <i>la mesa</i>). Articles and adjectives <b>agree</b> with the noun in gender and number (<i>un coche rojo</i>, <i>una casa roja</i>). Verbs <b>conjugate</b> to match who is doing the action, so the ending changes (<i>hablo</i> = I speak, <i>habla</i> = he/she speaks). For travel you'll go far with <b>"Quiero…"</b> (I want) and the politer <b>"Me gustaría…"</b> (I'd like), plus <b>"¿Hay…?"</b> (Is there…?) and <b>"¿Tiene…?"</b> (Do you have…?). Best of all, English and Spanish share a <b>huge vocabulary</b> through Latin — thousands of words are nearly identical. One quirk: questions and exclamations open with an <b>inverted ¿ and ¡</b> (¿Cómo estás? ¡Hola!).`;
const ES_BRIDGES=`<div class="note">🇬🇧 <b>You already know thousands of Spanish words</b> via Latin: información, importante, posible, restaurante, animal, hospital, doctor, familia… Endings map: -tion↔-ción (nation≈nación), -ty↔-dad (city≈ciudad), -ous↔-oso. Say them the Spanish way and you're understood.</div>`;
const ES_COURSE={name:"Spanish",flag:"🇪🇸",tts:"es-US",dir:"ltr",blurb:"Reason your way into the world's second-most-spoken native language.",note:"Spanish is spoken by over 500 million people across Spain and Latin America. It's phonetic, shares thousands of words with English, and rewards you fast — a handful of patterns unlocks real conversations. We'll build sentences by reasoning, not memorizing.",resources:[
{icon:"🗣️",t:"Easy Spanish",d:"Street interviews with subtitles.",q:"Easy Spanish Easy Languages"},
{icon:"🎧",t:"Coffee Break Spanish",d:"Bite-size lessons for commuters.",q:"Coffee Break Spanish podcast"},
{icon:"📱",t:"SpanishDict",d:"Dictionary, conjugator, and lessons.",q:"SpanishDict"},
{icon:"📺",t:"Dreaming Spanish",d:"Comprehensible input videos for all levels.",q:"Dreaming Spanish"},
{icon:"📖",t:"StoryLearning Spanish",d:"Learn through stories and comprehensible input.",q:"StoryLearning Spanish Olly Richards"}
],lessons:[
{id:1, title:"Greetings", focus:"Hola · Gracias · Por favor", steps:[
{t:"say", text:"Let's start with the words that open every door. Spanish greetings are warm and short — say them with a smile."},
{t:"words", items:[
{tr:"hola", pr:"OH-lah", en:"hello (the h is silent)"},
{tr:"gracias", pr:"GRAH-see-ahs", en:"thank you"},
{tr:"por favor", pr:"por fah-VOR", en:"please", link:"≈ 'for favor'"},
{tr:"sí", pr:"see", en:"yes"},
{tr:"no", pr:"noh", en:"no"},
{tr:"adiós", pr:"ah-dee-OHS", en:"goodbye", link:"≈ 'a-dios', to God"},
{tr:"perdón", pr:"per-DOHN", en:"sorry / excuse me", link:"≈ pardon"}
]},
{t:"chal", en:"Hello", tr:"Hola", pr:"OH-lah", morph:["hola = hello"]},
{t:"chal", en:"Thank you", tr:"Gracias", pr:"GRAH-see-ahs", morph:["gracias = thank you"], link:"related to 'gratitude'"},
{t:"chal", en:"Yes, please", tr:"Sí, por favor", pr:"see, por fah-VOR", morph:["sí = yes","por favor = please"]},
{t:"chal", en:"No, thank you", tr:"No, gracias", pr:"noh, GRAH-see-ahs", morph:["no = no","gracias = thank you"]},
{t:"chal", en:"Excuse me, please", tr:"Perdón, por favor", pr:"per-DOHN, por fah-VOR", morph:["perdón = excuse me","por favor = please"], link:"≈ pardon"}
], blocks:["Say hello and thank you","Say please and goodbye","Say yes and no politely"]},
{id:2, title:"I want / I'd like", focus:"Quiero… · Me gustaría… · la cuenta", steps:[
{t:"say", text:"Two phrases unlock ordering anything: <b>Quiero</b> (I want) and the politer <b>Me gustaría</b> (I'd like). Add a noun and you're in business."},
{t:"words", items:[
{tr:"quiero", pr:"kee-EH-roh", en:"I want"},
{tr:"me gustaría", pr:"meh goos-tah-REE-ah", en:"I would like"},
{tr:"un café", pr:"oon kah-FEH", en:"a coffee", link:"≈ café"},
{tr:"agua", pr:"AH-gwah", en:"water"},
{tr:"un vaso de agua", pr:"oon BAH-soh deh AH-gwah", en:"a glass of water"},
{tr:"la cuenta", pr:"lah KWEN-tah", en:"the bill", link:"≈ 'account'"}
]},
{t:"say", text:"Notice <b>un</b> (masculine) vs <b>una</b> (feminine) for 'a'. Café is masculine, so <i>un café</i>. For water, just say <b>agua</b> — or <b>un vaso de agua</b> for a glass. Skip the English calque <i>un agua</i>."},
{t:"chal", en:"I want a coffee", tr:"Quiero un café", pr:"kee-EH-roh oon kah-FEH", morph:["quiero = I want","un café = a coffee"]},
{t:"chal", en:"I'd like a coffee, please", tr:"Me gustaría un café, por favor", pr:"meh goos-tah-REE-ah oon kah-FEH, por fah-VOR", morph:["me gustaría = I'd like","un café = a coffee","por favor = please"]},
{t:"chal", en:"I want water", tr:"Quiero agua", pr:"kee-EH-roh AH-gwah", morph:["quiero = I want","agua = water"]},
{t:"chal", en:"I want a glass of water", tr:"Quiero un vaso de agua", pr:"kee-EH-roh oon BAH-soh deh AH-gwah", morph:["quiero = I want","un vaso = a glass","de agua = of water"]},
{t:"chal", en:"I'd like the bill, please", tr:"Me gustaría la cuenta, por favor", pr:"meh goos-tah-REE-ah lah KWEN-tah, por fah-VOR", morph:["me gustaría = I'd like","la cuenta = the bill","por favor = please"]}
], blocks:["Order a coffee two ways","Ask for water (agua / un vaso de agua)","Ask for the bill politely"]},
{id:3, title:"Numbers", focus:"uno–diez · veinte · cien · ¿Cuánto cuesta?", steps:[
{t:"say", text:"Numbers get you prices, quantities, and rooms. Learn one to ten, then a couple of big ones."},
{t:"words", items:[
{tr:"uno", pr:"OO-noh", en:"one"},
{tr:"dos", pr:"dohs", en:"two"},
{tr:"tres", pr:"trehs", en:"three"},
{tr:"cuatro", pr:"KWAH-troh", en:"four"},
{tr:"cinco", pr:"SEEN-koh", en:"five"},
{tr:"seis", pr:"sayss", en:"six"},
{tr:"siete", pr:"see-EH-teh", en:"seven"},
{tr:"ocho", pr:"OH-choh", en:"eight"},
{tr:"nueve", pr:"NWEH-veh", en:"nine"},
{tr:"diez", pr:"dee-EHS", en:"ten"},
{tr:"veinte", pr:"VAYN-teh", en:"twenty"},
{tr:"cien", pr:"see-EN", en:"one hundred", link:"≈ 'century'"}
]},
{t:"say", text:"To ask a price, say <b>¿Cuánto cuesta?</b> — literally 'how much does it cost?'"},
{t:"chal", en:"How much does it cost?", tr:"¿Cuánto cuesta?", pr:"KWAHN-toh KWEHS-tah", morph:["cuánto = how much","cuesta = it costs"]},
{t:"chal", en:"Two coffees, please", tr:"Dos cafés, por favor", pr:"dohs kah-FEHS, por fah-VOR", morph:["dos = two","cafés = coffees","por favor = please"]},
{t:"chal", en:"Ten euros", tr:"Diez euros", pr:"dee-EHS EH-oo-rohs", morph:["diez = ten","euros = euros"]},
{t:"chal", en:"I want three, please", tr:"Quiero tres, por favor", pr:"kee-EH-roh trehs, por fah-VOR", morph:["quiero = I want","tres = three","por favor = please"]}
], blocks:["Count one to ten","Ask how much something costs","Say twenty and one hundred"]},
{id:4, title:"Food", focus:"el menú · no como carne · está rico · la cuenta", steps:[
{t:"say", text:"Eating well is half of travel. These words handle menus, preferences, and compliments to the chef."},
{t:"words", items:[
{tr:"el menú", pr:"ehl meh-NOO", en:"the menu", link:"≈ menu"},
{tr:"como", pr:"KOH-moh", en:"I eat"},
{tr:"carne", pr:"KAR-neh", en:"meat", link:"≈ 'carnivore'"},
{tr:"está rico", pr:"ehs-TAH REE-koh", en:"it's tasty"},
{tr:"está delicioso", pr:"ehs-TAH deh-lee-see-OH-soh", en:"it's delicious", link:"≈ delicious"},
{tr:"la cuenta", pr:"lah KWEN-tah", en:"the bill"}
]},
{t:"say", text:"To say you don't eat something, put <b>no</b> before the verb: <i>no como carne</i> = I don't eat meat."},
{t:"chal", en:"The menu, please", tr:"El menú, por favor", pr:"ehl meh-NOO, por fah-VOR", morph:["el menú = the menu","por favor = please"]},
{t:"chal", en:"I don't eat meat", tr:"No como carne", pr:"noh KOH-moh KAR-neh", morph:["no = not","como = I eat","carne = meat"]},
{t:"chal", en:"It's delicious", tr:"Está delicioso", pr:"ehs-TAH deh-lee-see-OH-soh", morph:["está = it is","delicioso = delicious"]},
{t:"chal", en:"The bill, please", tr:"La cuenta, por favor", pr:"lah KWEN-tah, por fah-VOR", morph:["la cuenta = the bill","por favor = please"]}
], blocks:["Ask for the menu and the bill","Say you don't eat meat","Compliment the food"]},
{id:5, title:"Getting around", focus:"¿Dónde está…? · izquierda/derecha · el baño", steps:[
{t:"say", text:"When you're lost, one question saves the day: <b>¿Dónde está…?</b> (Where is…?). Then understand the answer."},
{t:"words", items:[
{tr:"¿dónde está?", pr:"DOHN-deh ehs-TAH", en:"where is?"},
{tr:"a la izquierda", pr:"ah lah ees-kee-ER-dah", en:"to the left"},
{tr:"a la derecha", pr:"ah lah deh-REH-chah", en:"to the right"},
{tr:"todo recto", pr:"TOH-doh REK-toh", en:"straight ahead"},
{tr:"el baño", pr:"ehl BAH-nyoh", en:"the bathroom (ñ = ny)"},
{tr:"el aeropuerto", pr:"ehl ah-eh-roh-PWER-toh", en:"the airport", link:"≈ aeroport"},
{tr:"un taxi", pr:"oon TAHK-see", en:"a taxi", link:"≈ taxi"}
]},
{t:"chal", en:"Where is the bathroom?", tr:"¿Dónde está el baño?", pr:"DOHN-deh ehs-TAH ehl BAH-nyoh", morph:["dónde está = where is","el baño = the bathroom"]},
{t:"chal", en:"Where is the airport?", tr:"¿Dónde está el aeropuerto?", pr:"DOHN-deh ehs-TAH ehl ah-eh-roh-PWER-toh", morph:["dónde está = where is","el aeropuerto = the airport"]},
{t:"chal", en:"To the left, please", tr:"A la izquierda, por favor", pr:"ah lah ees-kee-ER-dah, por fah-VOR", morph:["a la izquierda = to the left","por favor = please"]},
{t:"chal", en:"I want a taxi", tr:"Quiero un taxi", pr:"kee-EH-roh oon TAHK-see", morph:["quiero = I want","un taxi = a taxi"]},
{t:"chal", en:"Straight ahead", tr:"Todo recto", pr:"TOH-doh REK-toh", morph:["todo = all","recto = straight"]}
], blocks:["Ask where the bathroom is","Understand left, right, straight","Ask for the airport or a taxi"]},
{id:6, title:"I have / there is", focus:"tengo · hay · ¿tiene…? · no tengo", steps:[
{t:"say", text:"Two power verbs: <b>tengo</b> (I have) and <b>hay</b> (there is / there are). And to ask a shop, <b>¿tiene…?</b> (do you have…?)."},
{t:"words", items:[
{tr:"tengo", pr:"TEN-goh", en:"I have"},
{tr:"no tengo", pr:"noh TEN-goh", en:"I don't have"},
{tr:"hay", pr:"eye", en:"there is / there are"},
{tr:"¿tiene?", pr:"tee-EH-neh", en:"do you have?"},
{tr:"una reserva", pr:"OO-nah reh-SER-vah", en:"a reservation", link:"≈ reservation"}
]},
{t:"chal", en:"I have a reservation", tr:"Tengo una reserva", pr:"TEN-goh OO-nah reh-SER-vah", morph:["tengo = I have","una reserva = a reservation"]},
{t:"chal", en:"Is there a bathroom?", tr:"¿Hay un baño?", pr:"eye oon BAH-nyoh", morph:["hay = is there","un baño = a bathroom"]},
{t:"chal", en:"Do you have coffee?", tr:"¿Tiene café?", pr:"tee-EH-neh kah-FEH", morph:["tiene = do you have","café = coffee"]},
{t:"chal", en:"I don't have the bill", tr:"No tengo la cuenta", pr:"noh TEN-goh lah KWEN-tah", morph:["no tengo = I don't have","la cuenta = the bill"]}
], blocks:["Say you have a reservation","Ask if there is a bathroom","Ask a shop if they have something"]},
{id:7, title:"Talking about the past", focus:"comí · fui · vi", steps:[
{t:"say", text:"A light touch of the past tense (the <b>pretérito</b>) lets you tell what you did. Notice the stressed final vowel."},
{t:"words", items:[
{tr:"comí", pr:"koh-MEE", en:"I ate"},
{tr:"fui", pr:"fwee", en:"I went / I was"},
{tr:"vi", pr:"vee", en:"I saw"},
{tr:"ayer", pr:"ah-YER", en:"yesterday"},
{tr:"un restaurante", pr:"oon rehs-tow-RAHN-teh", en:"a restaurant", link:"≈ restaurant"}
]},
{t:"say", text:"<b>Fui</b> does double duty: 'I went' and 'I was' — context tells which."},
{t:"chal", en:"I ate at a restaurant", tr:"Comí en un restaurante", pr:"koh-MEE en oon rehs-tow-RAHN-teh", morph:["comí = I ate","en = at/in","un restaurante = a restaurant"]},
{t:"chal", en:"Yesterday I went to the airport", tr:"Ayer fui al aeropuerto", pr:"ah-YER fwee ahl ah-eh-roh-PWER-toh", morph:["ayer = yesterday","fui = I went","al aeropuerto = to the airport"]},
{t:"chal", en:"I saw the menu", tr:"Vi el menú", pr:"vee ehl meh-NOO", morph:["vi = I saw","el menú = the menu"]},
{t:"chal", en:"I ate meat yesterday", tr:"Comí carne ayer", pr:"koh-MEE KAR-neh ah-YER", morph:["comí = I ate","carne = meat","ayer = yesterday"]}
], blocks:["Say what you ate","Say where you went yesterday","Say what you saw"]},
{id:8, title:"Mine & yours", focus:"mi/mis · su · es mío", steps:[
{t:"say", text:"Possessives are small and mighty. <b>Mi</b> = my (one thing), <b>mis</b> = my (more than one), <b>su</b> = your/his/her."},
{t:"words", items:[
{tr:"mi", pr:"mee", en:"my (one thing)"},
{tr:"mis", pr:"mees", en:"my (several)"},
{tr:"su", pr:"soo", en:"your / his / her"},
{tr:"es mío", pr:"ehs MEE-oh", en:"it's mine"},
{tr:"la maleta", pr:"lah mah-LEH-tah", en:"the suitcase"}
]},
{t:"chal", en:"My coffee", tr:"Mi café", pr:"mee kah-FEH", morph:["mi = my","café = coffee"]},
{t:"chal", en:"It's mine", tr:"Es mío", pr:"ehs MEE-oh", morph:["es = it is","mío = mine"]},
{t:"chal", en:"Where is my suitcase?", tr:"¿Dónde está mi maleta?", pr:"DOHN-deh ehs-TAH mee mah-LEH-tah", morph:["dónde está = where is","mi maleta = my suitcase"]},
{t:"chal", en:"Is it your suitcase?", tr:"¿Es su maleta?", pr:"ehs soo mah-LEH-tah", morph:["es = is it","su = your","maleta = suitcase"]}
], blocks:["Say my coffee and it's mine","Ask where your suitcase is","Ask if something is theirs"]},
{id:9, title:"Time & when", focus:"hoy · ahora · ¿qué hora es? · mañana · ayer", steps:[
{t:"say", text:"Anchor yourself in time. These words tell when things happen — now, today, tomorrow, yesterday."},
{t:"words", items:[
{tr:"hoy", pr:"oy", en:"today"},
{tr:"ahora", pr:"ah-OH-rah", en:"now"},
{tr:"mañana", pr:"mah-NYAH-nah", en:"tomorrow / morning"},
{tr:"ayer", pr:"ah-YER", en:"yesterday"},
{tr:"¿qué hora es?", pr:"keh OH-rah ehs", en:"what time is it?"}
]},
{t:"say", text:"<b>Mañana</b> means both 'tomorrow' and 'morning' — <i>por la mañana</i> is 'in the morning'."},
{t:"chal", en:"What time is it?", tr:"¿Qué hora es?", pr:"keh OH-rah ehs", morph:["qué = what","hora = hour","es = is it"]},
{t:"chal", en:"I want it now", tr:"Lo quiero ahora", pr:"loh kee-EH-roh ah-OH-rah", morph:["lo = it","quiero = I want","ahora = now"]},
{t:"chal", en:"Tomorrow I go to the airport", tr:"Mañana voy al aeropuerto", pr:"mah-NYAH-nah voy ahl ah-eh-roh-PWER-toh", morph:["mañana = tomorrow","voy = I go","al aeropuerto = to the airport"]},
{t:"chal", en:"Today, please", tr:"Hoy, por favor", pr:"oy, por fah-VOR", morph:["hoy = today","por favor = please"]}
], blocks:["Ask what time it is","Say now, today, tomorrow","Say what you'll do tomorrow"]},
{id:10, title:"Question words", focus:"quién · dónde · qué · por qué · cuándo · cómo", steps:[
{t:"say", text:"Master the question words and you can ask about anything. Each carries a written accent."},
{t:"words", items:[
{tr:"quién", pr:"kee-EN", en:"who"},
{tr:"dónde", pr:"DOHN-deh", en:"where"},
{tr:"qué", pr:"keh", en:"what"},
{tr:"por qué", pr:"por KEH", en:"why"},
{tr:"cuándo", pr:"KWAHN-doh", en:"when"},
{tr:"cómo", pr:"KOH-moh", en:"how"}
]},
{t:"say", text:"Note: <b>por qué</b> (two words) = why; <b>porque</b> (one word) = because."},
{t:"chal", en:"Where is the taxi?", tr:"¿Dónde está el taxi?", pr:"DOHN-deh ehs-TAH ehl TAHK-see", morph:["dónde está = where is","el taxi = the taxi"]},
{t:"chal", en:"How are you?", tr:"¿Cómo estás?", pr:"KOH-moh ehs-TAHS", morph:["cómo = how","estás = are you"]},
{t:"chal", en:"When?", tr:"¿Cuándo?", pr:"KWAHN-doh", morph:["cuándo = when"]},
{t:"chal", en:"What is it?", tr:"¿Qué es?", pr:"keh ehs", morph:["qué = what","es = is it"]}
], blocks:["Ask who, where, what","Ask why and when","Ask how someone is"]},
{id:11, title:"Can / want / must", focus:"puedo · quiero · tengo que · necesito", steps:[
{t:"say", text:"These four verbs express ability, desire, and obligation. Follow each with another verb in its base form."},
{t:"words", items:[
{tr:"puedo", pr:"PWEH-doh", en:"I can"},
{tr:"quiero", pr:"kee-EH-roh", en:"I want"},
{tr:"tengo que", pr:"TEN-goh keh", en:"I have to"},
{tr:"necesito", pr:"neh-seh-SEE-toh", en:"I need", link:"≈ 'necessity'"},
{tr:"pagar", pr:"pah-GAR", en:"to pay"},
{tr:"ir", pr:"eer", en:"to go"}
]},
{t:"chal", en:"I can pay", tr:"Puedo pagar", pr:"PWEH-doh pah-GAR", morph:["puedo = I can","pagar = to pay"]},
{t:"chal", en:"I have to go", tr:"Tengo que ir", pr:"TEN-goh keh eer", morph:["tengo que = I have to","ir = to go"]},
{t:"chal", en:"I need a taxi", tr:"Necesito un taxi", pr:"neh-seh-SEE-toh oon TAHK-see", morph:["necesito = I need","un taxi = a taxi"]},
{t:"chal", en:"I want to pay now", tr:"Quiero pagar ahora", pr:"kee-EH-roh pah-GAR ah-OH-rah", morph:["quiero = I want","pagar = to pay","ahora = now"]}
], blocks:["Say you can pay","Say you have to go","Say you need something"]},
{id:12, title:"Joining ideas & getting by", focus:"y · pero · también · porque · muy · No entiendo", steps:[
{t:"say", text:"Connectors turn words into real sentences, and a few survival phrases keep any conversation going."},
{t:"words", items:[
{tr:"y", pr:"ee", en:"and"},
{tr:"pero", pr:"PEH-roh", en:"but"},
{tr:"también", pr:"tahm-bee-EN", en:"also / too"},
{tr:"porque", pr:"POR-keh", en:"because"},
{tr:"muy", pr:"mwee", en:"very"},
{tr:"no entiendo", pr:"noh en-tee-EN-doh", en:"I don't understand"},
{tr:"¿habla inglés?", pr:"AH-blah een-GLEHS", en:"do you speak English?"}
]},
{t:"chal", en:"I don't understand", tr:"No entiendo", pr:"noh en-tee-EN-doh", morph:["no = not","entiendo = I understand"]},
{t:"chal", en:"Do you speak English?", tr:"¿Habla inglés?", pr:"AH-blah een-GLEHS", morph:["habla = do you speak","inglés = English"]},
{t:"chal", en:"A coffee and a water", tr:"Un café y un vaso de agua", pr:"oon kah-FEH ee oon BAH-soh deh AH-gwah", morph:["un café = a coffee","y = and","un vaso de agua = a glass of water"]},
{t:"chal", en:"It's very delicious", tr:"Está muy delicioso", pr:"ehs-TAH mwee deh-lee-see-OH-soh", morph:["está = it is","muy = very","delicioso = delicious"]},
{t:"chal", en:"I want coffee but no meat", tr:"Quiero café pero no carne", pr:"kee-EH-roh kah-FEH PEH-roh noh KAR-neh", morph:["quiero = I want","café = coffee","pero = but","no carne = no meat"]}
], blocks:["Join two ideas with y and pero","Say you don't understand","Ask if they speak English"]}
]};


/* ===== SPANISH lessons 13-30 (extends to 30, free) ===== */
const ES_MORE=[
{id:13, title:"Shopping & bargaining", focus:"¿Cuánto vale? · barato · caro · me lo llevo", steps:[
  {t:"say", text:"Two ways to ask a price: <b>¿Cuánto vale?</b> and <b>¿Cuánto cuesta?</b> Both mean 'how much is it?'"},
  {t:"words", items:[
    {tr:"barato", pr:"bah-RAH-toh", en:"cheap"},
    {tr:"caro", pr:"KAH-roh", en:"expensive", link:"like Italian 'caro' / 'dear' = expensive"},
    {tr:"la talla", pr:"lah TAH-yah", en:"the size (clothes)"},
    {tr:"probarse", pr:"proh-BAR-seh", en:"to try on", link:"'probe' = to test"}
  ]},
  {t:"chal", en:"How much is it?", tr:"¿Cuánto vale?", pr:"KWAN-toh VAH-leh", morph:["cuánto = how much","vale = it's worth"]},
  {t:"chal", en:"How much does it cost?", tr:"¿Cuánto cuesta?", pr:"KWAN-toh KWESS-tah", morph:["cuánto = how much","cuesta = it costs","'cost' hides inside cuesta"]},
  {t:"chal", en:"It's very expensive.", tr:"Es muy caro.", pr:"ess mwee KAH-roh", morph:["es = it is","muy = very","caro = expensive"]},
  {t:"chal", en:"Is there anything cheaper?", tr:"¿Hay algo más barato?", pr:"eye AHL-goh mahss bah-RAH-toh", morph:["hay = is there","algo = something","más = more","barato = cheap → más barato = cheaper"]},
  {t:"chal", en:"I'll take it.", tr:"Me lo llevo.", pr:"meh loh YEH-voh", morph:["me = for myself","lo = it","llevo = I carry/take"]},
  {t:"chal", en:"Can I try it on?", tr:"¿Puedo probarme esto?", pr:"PWEH-doh proh-BAR-meh ESS-toh", morph:["puedo = I can","probarme = try on myself","esto = this"]}
], blocks:["¿Cuánto vale?","más barato","Me lo llevo."]},

{id:14, title:"Family & people", focus:"la familia · madre/padre · hermano · mayor/menor", steps:[
  {t:"say", text:"Family words often pair male/female: <b>-o</b> for male, <b>-a</b> for female."},
  {t:"words", items:[
    {tr:"la familia", pr:"lah fah-MEE-lyah", en:"the family", link:"= family"},
    {tr:"la madre", pr:"lah MAH-dreh", en:"mother", link:"'maternal'"},
    {tr:"el padre", pr:"el PAH-dreh", en:"father", link:"'paternal'"},
    {tr:"el hijo / la hija", pr:"el EE-hoh / lah EE-hah", en:"son / daughter"},
    {tr:"el hermano / la hermana", pr:"el air-MAH-noh / lah air-MAH-nah", en:"brother / sister"},
    {tr:"el esposo / la esposa", pr:"el ess-POH-soh / lah ess-POH-sah", en:"husband / wife", link:"'spouse'"},
    {tr:"mayor / menor", pr:"mah-YOR / meh-NOR", en:"older / younger", link:"'major' / 'minor'"}
  ]},
  {t:"chal", en:"This is my family.", tr:"Esta es mi familia.", pr:"ESS-tah ess mee fah-MEE-lyah", morph:["esta = this","es = is","mi = my","familia = family"]},
  {t:"chal", en:"I have two children.", tr:"Tengo dos hijos.", pr:"TEN-goh dohss EE-hohss", morph:["tengo = I have","dos = two","hijos = children (mixed uses male form)"]},
  {t:"chal", en:"My brother is older.", tr:"Mi hermano es mayor.", pr:"mee air-MAH-noh ess mah-YOR", morph:["mi = my","hermano = brother","es = is","mayor = older"]},
  {t:"chal", en:"This is my wife.", tr:"Esta es mi esposa.", pr:"ESS-tah ess mee ess-POH-sah", morph:["esta = this","mi esposa = my wife (female -a)"]},
  {t:"chal", en:"Do you have brothers or sisters?", tr:"¿Tiene hermanos?", pr:"TYEH-neh air-MAH-nohss", morph:["tiene = do you have","hermanos = siblings (male form covers both)"]}
], blocks:["mi familia","mi hermano mayor","dos hijos"]},

{id:15, title:"Colours & describing", focus:"rojo/azul/verde · grande/pequeño · agreement -o/-a", steps:[
  {t:"say", text:"Adjectives <b>agree</b> with the noun: rojo → roj<b>a</b> for feminine, roj<b>os</b>/roj<b>as</b> for plural."},
  {t:"words", items:[
    {tr:"rojo", pr:"ROH-hoh", en:"red"},
    {tr:"azul", pr:"ah-SOOL", en:"blue", link:"'azure'"},
    {tr:"verde", pr:"BAIR-deh", en:"green", link:"'verdant'"},
    {tr:"blanco / negro", pr:"BLAHN-koh / NEH-groh", en:"white / black", link:"'blank' / 'negro'"},
    {tr:"grande", pr:"GRAHN-deh", en:"big", link:"'grand'"},
    {tr:"pequeño", pr:"peh-KEH-nyoh", en:"small", link:"'petite'"}
  ]},
  {t:"chal", en:"The red car.", tr:"El coche rojo.", pr:"el KOH-cheh ROH-hoh", morph:["el = the","coche = car","rojo = red (male noun → rojo)"]},
  {t:"chal", en:"The red house.", tr:"La casa roja.", pr:"lah KAH-sah ROH-hah", morph:["la casa = the house (female)","roja = red with -a to agree"]},
  {t:"chal", en:"A big blue house.", tr:"Una casa azul grande.", pr:"OO-nah KAH-sah ah-SOOL GRAHN-deh", morph:["una casa = a house","azul = blue","grande = big (no gender change)"]},
  {t:"chal", en:"The green shoes.", tr:"Los zapatos verdes.", pr:"lohss sah-PAH-tohss BAIR-dess", morph:["los zapatos = the shoes (plural)","verdes = green + s for plural"]},
  {t:"chal", en:"It's too small.", tr:"Es muy pequeño.", pr:"ess mwee peh-KEH-nyoh", morph:["es = it is","muy = very","pequeño = small"]},
  {t:"say", text:"To compare: <b>más grande que</b> = bigger than, <b>el más grande</b> = the biggest."},
  {t:"words", items:[{tr:"más grande que",pr:"mahs GRAHN-deh keh",en:"bigger than"},{tr:"el más grande",pr:"el mahs GRAHN-deh",en:"the biggest"}]},
  {t:"chal", en:"This one is bigger than that one.", tr:"Este es más grande que ese.", pr:"ES-teh es mahs GRAHN-deh keh EH-seh", morph:["este es = this one is","más grande que = bigger than","ese = that one"]},
  {t:"chal", en:"This is the biggest.", tr:"Este es el más grande.", pr:"ES-teh es el mahs GRAHN-deh", morph:["este es = this is","el más grande = the biggest"]}
], blocks:["el coche rojo","la casa roja","muy pequeño","más grande que = bigger than · el más grande = the biggest"]},

{id:16, title:"At the restaurant", focus:"reservar · una mesa para dos · de primero · para llevar", steps:[
  {t:"say", text:"Menus split into courses: <b>de primero</b> (first course) and <b>de segundo</b> (main)."},
  {t:"words", items:[
    {tr:"reservar", pr:"reh-sair-BAR", en:"to reserve", link:"'reserve'"},
    {tr:"una mesa", pr:"OO-nah MEH-sah", en:"a table", link:"'mesa'"},
    {tr:"de primero / de segundo", pr:"deh pree-MEH-roh / deh seh-GOON-doh", en:"as a first course / main", link:"'primary' / 'second'"},
    {tr:"la especialidad", pr:"lah ess-peh-syah-lee-DAHD", en:"the speciality", link:"= speciality"},
    {tr:"para llevar", pr:"PAH-rah yeh-BAR", en:"to take away", link:"llevar = to carry"}
  ]},
  {t:"chal", en:"I want to reserve a table.", tr:"Quiero reservar una mesa.", pr:"KYEH-roh reh-sair-BAR OO-nah MEH-sah", morph:["quiero = I want","reservar = to reserve","una mesa = a table"]},
  {t:"chal", en:"A table for two, please.", tr:"Una mesa para dos, por favor.", pr:"OO-nah MEH-sah PAH-rah dohss por fah-BOR", morph:["una mesa = a table","para dos = for two","por favor = please"]},
  {t:"chal", en:"As a first course, I want soup.", tr:"De primero, quiero sopa.", pr:"deh pree-MEH-roh KYEH-roh SOH-pah", morph:["de primero = as first course","quiero = I want","sopa = soup"]},
  {t:"chal", en:"What is the speciality?", tr:"¿Cuál es la especialidad?", pr:"kwahl ess lah ess-peh-syah-lee-DAHD", morph:["cuál = which/what","es = is","la especialidad = the speciality"]},
  {t:"chal", en:"It's to take away.", tr:"Es para llevar.", pr:"ess PAH-rah yeh-BAR", morph:["es = it is","para llevar = to take away"]},
  {t:"chal", en:"Is it included?", tr:"¿Está incluido?", pr:"ess-TAH een-kloo-EE-doh", morph:["está = is","incluido = included"]}
], blocks:["una mesa para dos","de primero","para llevar"]},

{id:17, title:"Days, dates & months", focus:"días de la semana · meses · ¿qué día es? · el fin de semana", steps:[
  {t:"say", text:"Days and months are <b>not capitalised</b> in Spanish: lunes, enero."},
  {t:"words", items:[
    {tr:"lunes, martes, miércoles", pr:"LOO-ness, MAR-tess, MYAIR-koh-less", en:"Mon, Tue, Wed"},
    {tr:"jueves, viernes", pr:"HWEH-bess, BYAIR-ness", en:"Thu, Fri"},
    {tr:"sábado, domingo", pr:"SAH-bah-doh, doh-MEEN-goh", en:"Sat, Sun"},
    {tr:"el mes / enero", pr:"el mess / eh-NEH-roh", en:"month / January", link:"'January'"},
    {tr:"el fin de semana", pr:"el feen deh seh-MAH-nah", en:"the weekend", link:"fin = end, semana = week"}
  ]},
  {t:"chal", en:"What day is it today?", tr:"¿Qué día es hoy?", pr:"keh DEE-ah ess oy", morph:["qué = what","día = day","es = is","hoy = today"]},
  {t:"chal", en:"Today is Monday.", tr:"Hoy es lunes.", pr:"oy ess LOO-ness", morph:["hoy = today","es = is","lunes = Monday"]},
  {t:"chal", en:"On Friday I'm going to the restaurant.", tr:"El viernes voy al restaurante.", pr:"el BYAIR-ness boy ahl ress-tow-RAHN-teh", morph:["el viernes = on Friday","voy = I go","al = to the","restaurante = restaurant"]},
  {t:"chal", en:"The weekend.", tr:"El fin de semana.", pr:"el feen deh seh-MAH-nah", morph:["el fin = the end","de semana = of week"]},
  {t:"chal", en:"See you tomorrow.", tr:"Hasta mañana.", pr:"AHSS-tah mah-NYAH-nah", morph:["hasta = until","mañana = tomorrow"]}
], blocks:["¿Qué día es hoy?","el fin de semana","Hasta mañana."]},

{id:18, title:"Weather & small talk", focus:"hace calor/frío · llueve · ¿qué tiempo hace? · ¿cómo estás?", steps:[
  {t:"say", text:"Weather uses <b>hace</b> (it makes): hace calor = it's hot. Rain is its own verb: <b>llueve</b>."},
  {t:"words", items:[
    {tr:"hace calor / frío", pr:"AH-seh kah-LOR / FREE-oh", en:"it's hot / cold", link:"calor ≈ 'calorie', frío ≈ 'frigid'"},
    {tr:"hace sol", pr:"AH-seh sohl", en:"it's sunny", link:"sol = 'solar'"},
    {tr:"llueve", pr:"YWEH-veh", en:"it's raining", link:"'pluvial' = rainy"},
    {tr:"el tiempo", pr:"el TYEM-poh", en:"the weather / time"},
    {tr:"bien, gracias", pr:"byen GRAH-syahss", en:"well, thanks"}
  ]},
  {t:"chal", en:"What's the weather like?", tr:"¿Qué tiempo hace?", pr:"keh TYEM-poh AH-seh", morph:["qué = what","tiempo = weather","hace = it makes"]},
  {t:"chal", en:"It's very hot today.", tr:"Hoy hace mucho calor.", pr:"oy AH-seh MOO-choh kah-LOR", morph:["hoy = today","hace = it makes","mucho = a lot of","calor = heat"]},
  {t:"chal", en:"It's raining.", tr:"Llueve.", pr:"YWEH-veh", morph:["llueve = it rains (single word)"]},
  {t:"chal", en:"How are you?", tr:"¿Cómo estás?", pr:"KOH-moh ess-TAHSS", morph:["cómo = how","estás = you are (state)"]},
  {t:"chal", en:"Well, thanks, and you?", tr:"Bien, gracias, ¿y tú?", pr:"byen GRAH-syahss ee too", morph:["bien = well","gracias = thanks","y tú = and you"]}
], blocks:["¿Qué tiempo hace?","hace calor","¿Cómo estás?"]},

{id:19, title:"Transport & tickets", focus:"el autobús · el tren · un billete · ¿a qué hora sale?", steps:[
  {t:"say", text:"To ask when something leaves: <b>¿A qué hora sale?</b> (sale = it leaves)."},
  {t:"words", items:[
    {tr:"el autobús", pr:"el ow-toh-BOOSS", en:"the bus", link:"= autobus"},
    {tr:"el tren / el metro", pr:"el tren / el MEH-troh", en:"the train / subway", link:"= train / metro"},
    {tr:"un billete", pr:"oon bee-YEH-teh", en:"a ticket"},
    {tr:"la parada", pr:"lah pah-RAH-dah", en:"the stop", link:"parar = to stop"},
    {tr:"la próxima", pr:"lah PROHK-see-mah", en:"the next", link:"'proximate'"}
  ]},
  {t:"chal", en:"Where is the bus stop?", tr:"¿Dónde está la parada del autobús?", pr:"DOHN-deh ess-TAH lah pah-RAH-dah del ow-toh-BOOSS", morph:["dónde está = where is","la parada = the stop","del autobús = of the bus"]},
  {t:"chal", en:"I want a ticket for the train.", tr:"Quiero un billete para el tren.", pr:"KYEH-roh oon bee-YEH-teh PAH-rah el tren", morph:["quiero = I want","un billete = a ticket","para el tren = for the train"]},
  {t:"chal", en:"What time does it leave?", tr:"¿A qué hora sale?", pr:"ah keh OH-rah SAH-leh", morph:["a qué hora = at what time","sale = it leaves"]},
  {t:"chal", en:"Is this the next stop?", tr:"¿Es la próxima parada?", pr:"ess lah PROHK-see-mah pah-RAH-dah", morph:["es = is it","la próxima = the next","parada = stop"]},
  {t:"chal", en:"I need the subway.", tr:"Necesito el metro.", pr:"neh-seh-SEE-toh el MEH-troh", morph:["necesito = I need","el metro = the subway"]}
], blocks:["un billete","¿A qué hora sale?","la próxima parada"]},

{id:20, title:"Money & prices", focus:"cien→mil · el efectivo · la tarjeta · el cambio", steps:[
  {t:"say", text:"Big numbers: <b>cien</b> (100), <b>doscientos</b> (200), <b>mil</b> (1000)."},
  {t:"words", items:[
    {tr:"cien / doscientos", pr:"syen / dohss-SYEN-tohss", en:"100 / 200", link:"'cent' / 'two hundred'"},
    {tr:"mil", pr:"meel", en:"a thousand", link:"'mile' / 'millennium'"},
    {tr:"el efectivo", pr:"el eh-fek-TEE-boh", en:"cash"},
    {tr:"la tarjeta", pr:"lah tar-HEH-tah", en:"the card"},
    {tr:"el cambio", pr:"el KAHM-byoh", en:"the change", link:"'change'"}
  ]},
  {t:"chal", en:"It costs a hundred euros.", tr:"Cuesta cien euros.", pr:"KWESS-tah syen eh-OO-rohss", morph:["cuesta = it costs","cien = one hundred","euros = euros"]},
  {t:"chal", en:"Can I pay with card?", tr:"¿Puedo pagar con tarjeta?", pr:"PWEH-doh pah-GAR kohn tar-HEH-tah", morph:["puedo = can I","pagar = to pay","con tarjeta = with card"]},
  {t:"chal", en:"I'll pay in cash.", tr:"Pago en efectivo.", pr:"PAH-goh en eh-fek-TEE-boh", morph:["pago = I pay","en efectivo = in cash"]},
  {t:"chal", en:"Here is the change.", tr:"Aquí está el cambio.", pr:"ah-KEE ess-TAH el KAHM-byoh", morph:["aquí = here","está = is","el cambio = the change"]},
  {t:"chal", en:"Two thousand, please.", tr:"Dos mil, por favor.", pr:"dohss meel por fah-BOR", morph:["dos = two","mil = thousand → dos mil = 2000"]}
], blocks:["con tarjeta","en efectivo","el cambio"]},

{id:21, title:"Hotel & booking", focus:"una habitación · para dos noches · la llave · ¿está incluido?", steps:[
  {t:"say", text:"A hotel room is <b>una habitación</b>. To say 'for two nights': <b>para dos noches</b>."},
  {t:"words", items:[
    {tr:"una habitación", pr:"OO-nah ah-bee-tah-SYON", en:"a room", link:"'habitation'"},
    {tr:"la noche", pr:"lah NOH-cheh", en:"the night", link:"'nocturnal'"},
    {tr:"la llave", pr:"lah YAH-veh", en:"the key", link:"'clavis' → clef"},
    {tr:"el desayuno", pr:"el deh-sah-YOO-noh", en:"breakfast"},
    {tr:"incluido", pr:"een-kloo-EE-doh", en:"included", link:"'included'"}
  ]},
  {t:"chal", en:"I want a room for two nights.", tr:"Quiero una habitación para dos noches.", pr:"KYEH-roh OO-nah ah-bee-tah-SYON PAH-rah dohss NOH-chess", morph:["quiero = I want","una habitación = a room","para dos noches = for two nights"]},
  {t:"chal", en:"A room with a bathroom.", tr:"Una habitación con baño.", pr:"OO-nah ah-bee-tah-SYON kohn BAH-nyoh", morph:["una habitación = a room","con = with","baño = bathroom"]},
  {t:"chal", en:"Here is the key.", tr:"Aquí está la llave.", pr:"ah-KEE ess-TAH lah YAH-veh", morph:["aquí está = here is","la llave = the key"]},
  {t:"chal", en:"Is breakfast included?", tr:"¿Está incluido el desayuno?", pr:"ess-TAH een-kloo-EE-doh el deh-sah-YOO-noh", morph:["está incluido = is included","el desayuno = breakfast"]},
  {t:"chal", en:"Is the wifi included?", tr:"¿Está incluido el wifi?", pr:"ess-TAH een-kloo-EE-doh el WEE-fee", morph:["está incluido = is included","el wifi = the wifi"]}
], blocks:["una habitación","para dos noches","¿Está incluido?"]},

{id:22, title:"Phone, internet & staying in touch", focus:"el móvil · el wifi · la contraseña · llamar · un mensaje", steps:[
  {t:"say", text:"'Phone' is <b>el móvil</b> in Spain (el celular in Latin America). Password is <b>la contraseña</b>."},
  {t:"words", items:[
    {tr:"el móvil", pr:"el MOH-beel", en:"mobile phone", link:"'mobile'"},
    {tr:"el wifi", pr:"el WEE-fee", en:"the wifi"},
    {tr:"la contraseña", pr:"lah kohn-trah-SEH-nyah", en:"the password"},
    {tr:"llamar", pr:"yah-MAR", en:"to call", link:"'clamor' = to call out"},
    {tr:"un mensaje", pr:"oon men-SAH-heh", en:"a message", link:"= message"}
  ]},
  {t:"chal", en:"What's the wifi password?", tr:"¿Cuál es la contraseña del wifi?", pr:"kwahl ess lah kohn-trah-SEH-nyah del WEE-fee", morph:["cuál es = what is","la contraseña = the password","del wifi = of the wifi"]},
  {t:"chal", en:"I need to call my family.", tr:"Necesito llamar a mi familia.", pr:"neh-seh-SEE-toh yah-MAR ah mee fah-MEE-lyah", morph:["necesito = I need","llamar = to call","a mi familia = my family"]},
  {t:"chal", en:"I'm going to send a message.", tr:"Voy a enviar un mensaje.", pr:"boy ah en-BYAR oon men-SAH-heh", morph:["voy a = I'm going to","enviar = to send","un mensaje = a message"]},
  {t:"chal", en:"What's your number?", tr:"¿Cuál es tu número?", pr:"kwahl ess too NOO-meh-roh", morph:["cuál es = what is","tu = your","número = number"]},
  {t:"chal", en:"There is no wifi.", tr:"No hay wifi.", pr:"noh eye WEE-fee", morph:["no = not","hay = there is","wifi = wifi"]}
], blocks:["la contraseña del wifi","llamar","¿Cuál es tu número?"]},

{id:23, title:"Ser vs Estar — the two 'to be'", focus:"ser (permanent: soy, es) vs estar (state/location: estoy, está)", steps:[
  {t:"say", text:"Spanish has <b>two</b> verbs for 'to be'. <b>Ser</b> = permanent identity (who/what you are). <b>Estar</b> = temporary state or location (how/where you are)."},
  {t:"say", text:"Reason it out: <i>I am a doctor</i> = identity → <b>soy</b>. <i>I am tired</i> = passing state → <b>estoy</b>. <i>The bank is here</i> = location → <b>está</b>."},
  {t:"words", items:[
    {tr:"soy / eres / es", pr:"soy / EH-ress / ess", en:"I am / you are / it is (ser)"},
    {tr:"estoy / estás / está", pr:"ess-TOY / ess-TAHSS / ess-TAH", en:"I am / you are / it is (estar)"}
  ]},
  {t:"chal", en:"I am a doctor. (identity → ser)", tr:"Soy médico.", pr:"soy MEH-dee-koh", morph:["identity, permanent → ser","soy = I am","médico = doctor"], link:"job = who you are → ser"},
  {t:"chal", en:"I am tired. (state → estar)", tr:"Estoy cansado.", pr:"ess-TOY kahn-SAH-doh", morph:["a passing state → estar","estoy = I am","cansado = tired"], link:"you won't be tired forever → estar"},
  {t:"chal", en:"Where is the bathroom? (location → estar)", tr:"¿Dónde está el baño?", pr:"DOHN-deh ess-TAH el BAH-nyoh", morph:["location → estar","dónde = where","está = is","el baño = the bathroom"]},
  {t:"chal", en:"She is Spanish. (identity → ser)", tr:"Es española.", pr:"ess ess-pah-NYOH-lah", morph:["nationality is identity → ser","es = she is","española = Spanish (female)"]},
  {t:"chal", en:"The food is cold. (state → estar)", tr:"La comida está fría.", pr:"lah koh-MEE-dah ess-TAH FREE-ah", morph:["current state → estar","la comida = the food","está = is","fría = cold"]}
], blocks:["soy = ser (identity)","estoy = estar (state/place)","¿Dónde está…?"]},

{id:24, title:"The near future — voy a", focus:"voy a / vas a / va a + infinitive · mañana voy a…", steps:[
  {t:"say", text:"To talk about the future, use <b>ir a</b> + an infinitive: literally 'I go to do'. Just like English 'I'm going to…'."},
  {t:"words", items:[
    {tr:"voy a", pr:"boy ah", en:"I'm going to"},
    {tr:"vas a", pr:"bahss ah", en:"you're going to"},
    {tr:"va a", pr:"bah ah", en:"he/she is going to"},
    {tr:"comer / dormir / viajar", pr:"koh-MAIR / dor-MEER / byah-HAR", en:"to eat / sleep / travel", link:"'dormant' / 'voyage'"}
  ]},
  {t:"chal", en:"I'm going to eat.", tr:"Voy a comer.", pr:"boy ah koh-MAIR", morph:["voy a = I'm going to","comer = to eat"]},
  {t:"chal", en:"Tomorrow I'm going to travel.", tr:"Mañana voy a viajar.", pr:"mah-NYAH-nah boy ah byah-HAR", morph:["mañana = tomorrow","voy a = I'm going to","viajar = to travel"]},
  {t:"chal", en:"Are you going to eat?", tr:"¿Vas a comer?", pr:"bahss ah koh-MAIR", morph:["vas a = are you going to","comer = to eat"]},
  {t:"chal", en:"She's going to sleep.", tr:"Va a dormir.", pr:"bah ah dor-MEER", morph:["va a = he/she is going to","dormir = to sleep"]},
  {t:"chal", en:"I'm going to pay with card.", tr:"Voy a pagar con tarjeta.", pr:"boy ah pah-GAR kohn tar-HEH-tah", morph:["voy a = I'm going to","pagar = to pay","con tarjeta = with card"]}
], blocks:["voy a comer","mañana voy a…","¿Vas a…?"]},

{id:25, title:"Gustar & feelings", focus:"me gusta / me gustan · me encanta · tener hambre/sed", steps:[
  {t:"say", text:"<b>Gustar</b> doesn't mean 'to like' directly — it means 'to be pleasing'. So <i>me gusta</i> = 'it is pleasing to me'. That's why the ending changes with the <b>thing</b>, not you."},
  {t:"say", text:"One thing → <b>me gusta</b>. Many things → <b>me gustan</b>. Reason it out: the verb agrees with what pleases you."},
  {t:"words", items:[
    {tr:"me gusta / me gustan", pr:"meh GOOSS-tah / meh GOOSS-tahn", en:"I like (one / many)", link:"'gusto' = taste"},
    {tr:"me encanta", pr:"meh en-KAHN-tah", en:"I love it", link:"'enchant'"},
    {tr:"tener hambre / sed", pr:"teh-NAIR AHM-breh / sed", en:"to be hungry / thirsty"},
    {tr:"tener sueño / miedo", pr:"teh-NAIR SWEH-nyoh / MYEH-doh", en:"to be sleepy / afraid"}
  ]},
  {t:"chal", en:"I like the food. (one thing → gusta)", tr:"Me gusta la comida.", pr:"meh GOOSS-tah lah koh-MEE-dah", morph:["me = to me","gusta = it is pleasing (singular)","la comida = the food"]},
  {t:"chal", en:"I like tacos. (many → gustan)", tr:"Me gustan los tacos.", pr:"meh GOOSS-tahn lohss TAH-kohss", morph:["plural things → gustan","los tacos = the tacos"], link:"tacos are plural → gustan"},
  {t:"chal", en:"I love Spain.", tr:"Me encanta España.", pr:"meh en-KAHN-tah ess-PAH-nyah", morph:["me encanta = I love","España = Spain"]},
  {t:"say", text:"Quick note: Spanish has <b>two</b> words for \"you\" — <b>usted</b> (formal — strangers, staff, anyone you'd address politely) and <b>tú</b> (informal — friends, family, people your own age). Everything so far has used usted, the safe default — the next line switches to <b>tú/te</b> for a casual, chatting-with-a-friend scene. Use usted until it's clearly a casual setting, or when in doubt."},
  {t:"chal", en:"Do you like coffee?", tr:"¿Te gusta el café?", pr:"teh GOOSS-tah el kah-FEH", morph:["te = to you (informal)","gusta = is pleasing","el café = the coffee"]},
  {t:"chal", en:"I'm hungry.", tr:"Tengo hambre.", pr:"TEN-goh AHM-breh", morph:["tengo = I have","hambre = hunger → literally 'I have hunger'"]},
  {t:"chal", en:"I'm thirsty.", tr:"Tengo sed.", pr:"TEN-goh sed", morph:["tengo = I have","sed = thirst"]}
], blocks:["me gusta / me gustan","me encanta","Tengo hambre."]},

{id:26, title:"Everyday verbs & routines", focus:"me levanto · me ducho · desayuno · trabajo · todos los días", steps:[
  {t:"say", text:"Some daily verbs are <b>reflexive</b> — the action returns to you, marked with <b>me</b>: me levanto = 'I get myself up'."},
  {t:"words", items:[
    {tr:"me levanto", pr:"meh leh-BAHN-toh", en:"I get up", link:"'levitate' = rise"},
    {tr:"me ducho", pr:"meh DOO-choh", en:"I shower", link:"'douche' = shower"},
    {tr:"desayuno", pr:"deh-sah-YOO-noh", en:"I have breakfast"},
    {tr:"trabajo", pr:"trah-BAH-hoh", en:"I work", link:"'travail'"},
    {tr:"me acuesto", pr:"meh ah-KWESS-toh", en:"I go to bed"},
    {tr:"todos los días", pr:"TOH-dohss lohss DEE-ahss", en:"every day"}
  ]},
  {t:"chal", en:"I get up at seven.", tr:"Me levanto a las siete.", pr:"meh leh-BAHN-toh ah lahss SYEH-teh", morph:["me levanto = I get up","a las siete = at seven"]},
  {t:"chal", en:"Every day I have breakfast.", tr:"Todos los días desayuno.", pr:"TOH-dohss lohss DEE-ahss deh-sah-YOO-noh", morph:["todos los días = every day","desayuno = I have breakfast"]},
  {t:"chal", en:"I work in the morning.", tr:"Trabajo por la mañana.", pr:"trah-BAH-hoh por lah mah-NYAH-nah", morph:["trabajo = I work","por la mañana = in the morning"]},
  {t:"chal", en:"I shower and then I work.", tr:"Me ducho y luego trabajo.", pr:"meh DOO-choh ee LWEH-goh trah-BAH-hoh", morph:["me ducho = I shower","y = and","luego = then","trabajo = I work"]},
  {t:"chal", en:"I go to bed late.", tr:"Me acuesto tarde.", pr:"meh ah-KWESS-toh TAR-deh", morph:["me acuesto = I go to bed","tarde = late"]}
], blocks:["me levanto","todos los días","me acuesto"]},

{id:27, title:"Feeling ill / at the doctor", focus:"me duele · estoy enfermo · necesito un médico · la farmacia", steps:[
  {t:"say", text:"To say something hurts, use <b>me duele</b> (it hurts me) + the body part."},
  {t:"words", items:[
    {tr:"me duele", pr:"meh DWEH-leh", en:"it hurts me", link:"'dolor' = pain"},
    {tr:"la cabeza", pr:"lah kah-BEH-sah", en:"the head"},
    {tr:"el estómago", pr:"el ess-TOH-mah-goh", en:"the stomach", link:"= stomach"},
    {tr:"estoy enfermo", pr:"ess-TOY en-FAIR-moh", en:"I'm ill", link:"'infirm'"},
    {tr:"el médico / la farmacia", pr:"el MEH-dee-koh / lah far-MAH-syah", en:"the doctor / the pharmacy", link:"'medic' / 'pharmacy'"}
  ]},
  {t:"chal", en:"My head hurts.", tr:"Me duele la cabeza.", pr:"meh DWEH-leh lah kah-BEH-sah", morph:["me duele = it hurts me","la cabeza = the head"]},
  {t:"chal", en:"My stomach hurts.", tr:"Me duele el estómago.", pr:"meh DWEH-leh el ess-TOH-mah-goh", morph:["me duele = it hurts me","el estómago = the stomach"]},
  {t:"chal", en:"I'm ill. (state → estar)", tr:"Estoy enfermo.", pr:"ess-TOY en-FAIR-moh", morph:["a temporary state → estar","estoy = I am","enfermo = ill"]},
  {t:"chal", en:"I need a doctor.", tr:"Necesito un médico.", pr:"neh-seh-SEE-toh oon MEH-dee-koh", morph:["necesito = I need","un médico = a doctor"]},
  {t:"chal", en:"Where is the pharmacy?", tr:"¿Dónde está la farmacia?", pr:"DOHN-deh ess-TAH lah far-MAH-syah", morph:["dónde está = where is","la farmacia = the pharmacy"]}
], blocks:["me duele la cabeza","estoy enfermo","necesito un médico"]},

{id:28, title:"Countries, nationalities & languages", focus:"soy de… · ¿de dónde eres? · español/española · hablo…", steps:[
  {t:"say", text:"To say where you're from: <b>soy de</b> + place (using <b>ser</b>, because origin is identity)."},
  {t:"words", items:[
    {tr:"soy de", pr:"soy deh", en:"I'm from"},
    {tr:"¿de dónde eres?", pr:"deh DOHN-deh EH-ress", en:"where are you from?"},
    {tr:"español / española", pr:"ess-pah-NYOHL / ess-pah-NYOH-lah", en:"Spanish (m/f)"},
    {tr:"hablo", pr:"AH-bloh", en:"I speak", link:"'able to speak'"},
    {tr:"un poco de", pr:"oon POH-koh deh", en:"a little of"}
  ]},
  {t:"chal", en:"Where are you from?", tr:"¿De dónde eres?", pr:"deh DOHN-deh EH-ress", morph:["de dónde = from where","eres = you are (ser)"]},
  {t:"chal", en:"I'm from India.", tr:"Soy de la India.", pr:"soy deh lah EEN-dyah", morph:["soy = I am (ser)","de = from","la India = India"]},
  {t:"chal", en:"She is Spanish.", tr:"Es española.", pr:"ess ess-pah-NYOH-lah", morph:["es = she is","española = Spanish (female -a)"]},
  {t:"chal", en:"I speak English.", tr:"Hablo inglés.", pr:"AH-bloh een-GLESS", morph:["hablo = I speak","inglés = English"]},
  {t:"chal", en:"I speak a little Spanish.", tr:"Hablo un poco de español.", pr:"AH-bloh oon POH-koh deh ess-pah-NYOHL", morph:["hablo = I speak","un poco de = a little of","español = Spanish"]}
], blocks:["soy de…","¿De dónde eres?","hablo un poco de español"]},

{id:29, title:"Making plans & suggestions", focus:"¿Quieres…? · ¿Vamos a…? · ¿Te apetece…? · quedar · vale", steps:[
  {t:"say", text:"To suggest doing something together: <b>¿Vamos a…?</b> (Shall we…?). To ask if someone fancies it: <b>¿Te apetece…?</b>"},
  {t:"words", items:[
    {tr:"¿quieres…?", pr:"KYEH-ress", en:"do you want…?"},
    {tr:"¿vamos a…?", pr:"BAH-mohss ah", en:"shall we…?"},
    {tr:"¿te apetece…?", pr:"teh ah-peh-TEH-seh", en:"do you fancy…?"},
    {tr:"quedar", pr:"keh-DAR", en:"to meet up"},
    {tr:"vale / de acuerdo", pr:"BAH-leh / deh ah-KWAIR-doh", en:"okay / agreed", link:"'accord'"}
  ]},
  {t:"chal", en:"Do you want to eat something?", tr:"¿Quieres comer algo?", pr:"KYEH-ress koh-MAIR AHL-goh", morph:["quieres = do you want","comer = to eat","algo = something"]},
  {t:"chal", en:"Shall we go to the restaurant?", tr:"¿Vamos al restaurante?", pr:"BAH-mohss ahl ress-tow-RAHN-teh", morph:["vamos = shall we go","al = to the","restaurante = restaurant"]},
  {t:"chal", en:"Do you fancy a coffee?", tr:"¿Te apetece un café?", pr:"teh ah-peh-TEH-seh oon kah-FEH", morph:["te apetece = do you fancy","un café = a coffee"]},
  {t:"chal", en:"At what time shall we meet?", tr:"¿A qué hora quedamos?", pr:"ah keh OH-rah keh-DAH-mohss", morph:["a qué hora = at what time","quedamos = shall we meet"]},
  {t:"chal", en:"Okay, agreed.", tr:"Vale, de acuerdo.", pr:"BAH-leh deh ah-KWAIR-doh", morph:["vale = okay","de acuerdo = agreed"]},
  {t:"say", text:"Two more things that unlock real conversation: saying what <b>you</b> think, and putting plans in order. <b>Creo que</b> = I think that. <b>Primero… luego… después</b> = first… then… after that."},
  {t:"words", items:[{tr:"creo que", pr:"KREH-oh keh", en:"I think that"},{tr:"estoy de acuerdo", pr:"ess-TOY deh ah-KWAIR-doh", en:"I agree"},{tr:"¿en serio?", pr:"en SEH-ree-oh", en:"really?"},{tr:"yo también", pr:"yoh tam-BYEN", en:"me too"},{tr:"primero / luego / después", pr:"pree-MEH-roh / LWEH-goh / dess-PWESS", en:"first / then / after"}]},
  {t:"chal", en:"I think it's a good idea", tr:"Creo que es una buena idea", pr:"KREH-oh keh ess OO-nah BWEH-nah ee-DEH-ah", morph:["creo que = I think that","es una buena idea = it's a good idea"]},
  {t:"chal", en:"First we eat, then we go", tr:"Primero comemos, luego vamos", pr:"pree-MEH-roh koh-MEH-mohss, LWEH-goh BAH-mohss", morph:["primero = first","comemos = we eat","luego = then","vamos = we go"]}
], blocks:["¿Vamos a…?","¿Te apetece…?","Vale.","Creo que… = I think that…","primero…luego…después = first…then…after"]},

{id:30, title:"Politeness & survival", focus:"por favor · perdone · ¿podría…? · lo siento · ¿me puede ayudar?", steps:[
  {t:"say", text:"<b>¿Podría…?</b> is the polite 'could you…?'. Use it to soften any request."},
  {t:"words", items:[
    {tr:"perdone / disculpe", pr:"pair-DOH-neh / deess-KOOL-peh", en:"excuse me (to get attention)", link:"'pardon'"},
    {tr:"¿podría…?", pr:"poh-DREE-ah", en:"could you…?"},
    {tr:"con permiso", pr:"kohn pair-MEE-soh", en:"excuse me (to pass)", link:"'permission'"},
    {tr:"lo siento", pr:"loh SYEN-toh", en:"I'm sorry"},
    {tr:"¿me puede ayudar?", pr:"meh PWEH-deh ah-yoo-DAR", en:"can you help me?", link:"'aid'"}
  ]},
  {t:"chal", en:"Excuse me, where is the bathroom?", tr:"Perdone, ¿dónde está el baño?", pr:"pair-DOH-neh DOHN-deh ess-TAH el BAH-nyoh", morph:["perdone = excuse me","dónde está = where is","el baño = the bathroom"]},
  {t:"chal", en:"Could you help me?", tr:"¿Podría ayudarme?", pr:"poh-DREE-ah ah-yoo-DAR-meh", morph:["podría = could you","ayudarme = help me"]},
  {t:"chal", en:"Can you help me, please?", tr:"¿Me puede ayudar, por favor?", pr:"meh PWEH-deh ah-yoo-DAR por fah-BOR", morph:["me puede = can you (to me)","ayudar = help","por favor = please"]},
  {t:"chal", en:"I'm very sorry.", tr:"Lo siento mucho.", pr:"loh SYEN-toh MOO-choh", morph:["lo siento = I'm sorry","mucho = a lot"]},
  {t:"chal", en:"Excuse me (to get by).", tr:"Con permiso.", pr:"kohn pair-MEE-soh", morph:["con = with","permiso = permission"]},
  {t:"chal", en:"Cheers!", tr:"¡Salud!", pr:"sah-LOOD", morph:["salud = health → toast 'to health!'"], link:"'salute' / salutary"}
], blocks:["por favor","¿Podría…?","Lo siento.","¿Me puede ayudar?"]},
{id:31, title:"Final scene — put it all together", focus:"a capstone scene: no new words, just everything you've built", steps:[
  {t:"say", text:"This is where the method pays off. Every line below uses only words and patterns you've already met — build each one yourself before revealing."},
  {t:"chal", en:"Hello! How's the weather today?", tr:"¡Hola! ¿Qué tiempo hace hoy?", pr:"OH-lah keh tyem-poh AH-seh oy", morph:["hola = hello","qué tiempo hace = what's the weather like","hoy = today"]},
  {t:"chal", en:"It's very hot. Shall we go to the restaurant?", tr:"Hace mucho calor. ¿Vamos al restaurante?", pr:"AH-seh MOO-choh kah-LOR BAH-mohss al res-tow-RAHN-teh", morph:["hace mucho calor = it's very hot","vamos al restaurante = shall we go to the restaurant"]},
  {t:"chal", en:"I'd like a coffee and a tea, please.", tr:"Quiero un café y un té, por favor.", pr:"KYEH-roh oon kah-FEH ee oon teh por fah-VOR", morph:["quiero = I want","un café y un té = a coffee and a tea","por favor = please"]},
  {t:"chal", en:"This is very good!", tr:"¡Está muy bien!", pr:"es-TAH mwee byen", morph:["está = it is","muy bien = very good"]},
  {t:"chal", en:"Thank you for today. See you tomorrow!", tr:"Gracias por hoy. ¡Hasta mañana!", pr:"GRAH-syahss por oy AHS-tah mah-NYAH-nah", morph:["gracias por hoy = thanks for today","hasta mañana = see you tomorrow"]}
], blocks:["You just built a full scene — greeting, weather, a plan, an order, an opinion, a goodbye — from nothing but pieces you already owned.","Keep them all alive in Recall and Shadow."]}
];
ES_COURSE.lessons=ES_COURSE.lessons.concat(ES_MORE);

