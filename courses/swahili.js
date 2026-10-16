/* ---- swahili ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["swahili"] = {
  name: 'Swahili',
  flag: '🇰🇪',
  tts: 'sw-KE',
  dir: 'ltr',
  native: 'Kiswahili',
  script: 'Latin',
  soundTitle: 'Swahili sounds & spelling',
  soundIntro: 'Swahili is beautifully phonetic — every letter is said the way it is written. Master these few sounds and you can read any word aloud.',
  grammar: '<p>Swahili is wonderfully regular and every word is pronounced as it is written. There are no gender articles; instead nouns come in "classes" whose prefix changes for singular and plural: <i>mtoto</i> (a/the child) → <i>watoto</i> (children). Verbs take a subject prefix instead of a separate pronoun: <b>ni-</b> = I, <b>u-</b> = you, <b>a-</b> = he/she. So <i>nataka</i> = I want, <i>unataka</i> = you want. Word order is subject–verb–object, and a single word often covers both "a" and "the". A warm <i>tafadhali</i> (please) and <i>asante</i> (thank you) go a long way.</p>',
  bridges: '<div class="note">🇸🇦 <b>Arabic.</b> A large share of Swahili vocabulary comes from Arabic: <i>kitabu</i> (book), <i>safari</i> (journey), <i>habari</i> (news), <i>shule</i> (school), <i>asante</i> (thank you).</div><div class="note">🇬🇧 <b>English.</b> Modern everyday words are borrowed straight from English: <i>basi</i> (bus), <i>hoteli</i> (hotel), <i>redio</i> (radio), <i>penseli</i> (pencil).</div>',
  lessons: [
    { id:1, title:'Greetings', focus:'jambo · habari · karibu · kwaheri',
      steps:[
        {t:'say',text:'Let\'s start with the word you\'ll hear (and use) most: <span class="inline-tr">jambo</span> — hello. It works for both "hi" and a friendly opening. Say it out loud.',tr:'jambo'},
        {t:'words',items:[{tr:'jambo',pr:'JAHM-boh',en:'hello'},{tr:'habari',pr:'hah-BAH-ree',en:'hello / how are things?',link:'≈ Arabic khabar (news)'},{tr:'karibu',pr:'kah-REE-boo',en:'welcome'},{tr:'kwaheri',pr:'kwah-HEH-ree',en:'goodbye'}]},
        {t:'chal',en:'Hello!',tr:'Jambo!',pr:'JAHM-boh',morph:['jambo = hello']},
        {t:'say',text:'To greet someone properly, ask <span class="inline-tr">habari yako?</span> — how are you? And reply <span class="inline-tr">nzuri, asante</span> — fine, thanks.',tr:'habari yako?'},
        {t:'words',items:[{tr:'Habari yako?',pr:'hah-BAH-ree YAH-koh',en:'How are you?'},{tr:'Nzuri, asante',pr:'N-zoo-ree, ah-SAHN-teh',en:'Fine, thanks'},{tr:'Salama',pr:'sah-LAH-mah',en:'peaceful / fine'}]},
        {t:'chal',en:'Hello, how are you?',tr:'Jambo! Habari yako?',pr:'JAHM-boh, hah-BAH-ree YAH-koh',morph:['jambo = hello','habari yako? = how are you?']}
      ],
      blocks:['<code>jambo</code> = hello','<code>habari?</code> = hello / how are things?','<code>karibu</code> = welcome · <code>kwaheri</code> = goodbye'] },
    { id:2, title:'Polite phrases', focus:'asante · tafadhali · samahani · sawa',
      steps:[
        {t:'say',text:'The magic words of courtesy: <span class="inline-tr">asante</span> (thank you) and <span class="inline-tr">tafadhali</span> (please).',tr:'asante'},
        {t:'words',items:[{tr:'asante',pr:'ah-SAHN-teh',en:'thank you'},{tr:'asante sana',pr:'ah-SAHN-teh SAH-nah',en:'thank you very much'},{tr:'tafadhali',pr:'tah-fah-DHAH-lee',en:'please'},{tr:'samahani',pr:'sah-mah-HAH-nee',en:'excuse me / sorry'}]},
        {t:'chal',en:'Thank you very much',tr:'Asante sana',pr:'ah-SAHN-teh SAH-nah',morph:['asante = thanks','sana = very']},
        {t:'say',text:'<span class="inline-tr">karibu</span> doubles as "welcome" and "you\'re welcome", so it pops up everywhere.',tr:'karibu'},
        {t:'chal',en:'A coffee, please',tr:'Kahawa, tafadhali',pr:'kah-HAH-wah, tah-fah-DHAH-lee',morph:['kahawa = coffee','tafadhali = please']},
        {t:'say',text:'To say yes: <span class="inline-tr">ndiyo</span>. No: <span class="inline-tr">hapana</span>. And <span class="inline-tr">sawa</span> = okay / alright.',tr:'sawa'},
        {t:'words',items:[{tr:'ndiyo',pr:'N-dee-yoh',en:'yes'},{tr:'hapana',pr:'hah-PAH-nah',en:'no'},{tr:'sawa',pr:'SAH-wah',en:'okay'}]},
        {t:'chal',en:'Thank you, okay',tr:'Asante, sawa',pr:'ah-SAHN-teh, SAH-wah',morph:['asante = thanks','sawa = okay']}
      ],
      blocks:['<code>asante</code> = thank you','<code>tafadhali</code> = please','<code>samahani</code> = excuse me / sorry','<code>ndiyo / hapana</code> = yes / no'] },
    { id:3, title:'Numbers 1–10', focus:'moja · mbili · tatu · kumi',
      steps:[
        {t:'say',text:'Numbers are the fastest win. Listen and repeat: <span class="inline-tr">moja, mbili, tatu</span>.',tr:'moja'},
        {t:'words',items:[{tr:'moja',pr:'MOH-jah',en:'1'},{tr:'mbili',pr:'M-bee-lee',en:'2'},{tr:'tatu',pr:'TAH-too',en:'3'},{tr:'nne',pr:'nn-eh',en:'4'},{tr:'tano',pr:'TAH-noh',en:'5'},{tr:'sita',pr:'SEE-tah',en:'6'},{tr:'saba',pr:'SAH-bah',en:'7'},{tr:'nane',pr:'NAH-neh',en:'8'},{tr:'tisa',pr:'TEE-sah',en:'9'},{tr:'kumi',pr:'KOO-mee',en:'10'}]},
        {t:'chal',en:'Two coffees, please',tr:'Kahawa mbili, tafadhali',pr:'kah-HAH-wah M-bee-lee, tah-fah-DHAH-lee',morph:['kahawa = coffee','mbili = two','tafadhali = please']},
        {t:'say',text:'Notice the <span class="inline-tr">mb</span> at the start of <span class="inline-tr">mbili</span> — say both letters together with no vowel between them.',tr:'mbili'},
        {t:'chal',en:'I have five',tr:'Nina tano',pr:'NEE-nah TAH-noh',morph:['nina = I have','tano = five']},
        {t:'chal',en:'Five bananas',tr:'Ndizi tano',pr:'N-dee-zee TAH-noh',morph:['ndizi = banana(s)','tano = five']}
      ],
      blocks:['<code>moja, mbili, tatu, nne, tano</code> = 1–5','<code>sita, saba, nane, tisa, kumi</code> = 6–10'] },
    { id:4, title:'"I want" — nataka', focus:'nataka · ningependa · ni-',
      steps:[
        {t:'say',text:'The key verb to order anything: <span class="inline-tr">nataka</span> — I want. Use it to ask for whatever you need.',tr:'nataka'},
        {t:'say',text:'<span class="inline-tr">ningependa</span> — I would like — is the more polite version, perfect in restaurants and shops.',tr:'ningependa'},
        {t:'chal',en:'I want water',tr:'Nataka maji',pr:'nah-TAH-kah MAH-jee',morph:['nataka = I want','maji = water']},
        {t:'chal',en:'I\'d like a coffee',tr:'Ningependa kahawa',pr:'nee-ngeh-PEN-dah kah-HAH-wah',morph:['ningependa = I would like','kahawa = coffee']},
        {t:'say',text:'Here the prefix <span class="inline-tr">ni-</span> means "I". <b>u-</b> = you, <b>a-</b> = he/she. Combine: <span class="inline-tr">unataka</span> = you want.',tr:'ni-'},
        {t:'chal',en:'I want bread',tr:'Nataka mkate',pr:'nah-TAH-kah M-kah-teh',morph:['nataka = I want','mkate = bread']}
      ],
      blocks:['<code>nataka</code> = I want','<code>ningependa</code> = I would like (polite)','<code>ni-</code> = I · <code>u-</code> = you · <code>a-</code> = he/she'] },
    { id:5, title:'Food & drink', focus:'maji · kahawa · mkate · samaki',
      steps:[
        {t:'say',text:'Eating out? Key words: <span class="inline-tr">maji</span> (water), <span class="inline-tr">chai</span> (tea), <span class="inline-tr">mkate</span> (bread).',tr:'maji'},
        {t:'words',items:[{tr:'maji',pr:'MAH-jee',en:'water'},{tr:'chai',pr:'chai',en:'tea',link:'≈ English chai (tea)'},{tr:'kahawa',pr:'kah-HAH-wah',en:'coffee',link:'≈ Arabic qahwa (coffee)'},{tr:'mkate',pr:'M-kah-teh',en:'bread'},{tr:'nyama',pr:'NYAH-mah',en:'meat'},{tr:'samaki',pr:'sah-MAH-kee',en:'fish'},{tr:'wali',pr:'WAH-lee',en:'rice'}]},
        {t:'chal',en:'Tea and rice, please',tr:'Chai na wali, tafadhali',pr:'chai nah WAH-lee, tah-fah-DHAH-lee',morph:['chai = tea','na = and','wali = rice','tafadhali = please']},
        {t:'say',text:'To order, use <span class="inline-tr">nataka</span> or more politely <span class="inline-tr">ningependa</span>. <b>na</b> = and.',tr:'ningependa'},
        {t:'chal',en:'I\'d like fish',tr:'Ningependa samaki',pr:'nee-ngeh-PEN-dah sah-MAH-kee',morph:['ningependa = I would like','samaki = fish']},
        {t:'say',text:'Delicious is <span class="inline-tr">tamu sana</span>. Say it to a cook and watch them smile.',tr:'tamu sana'},
        {t:'chal',en:'It\'s delicious!',tr:'Tamu sana!',pr:'TAH-moo SAH-nah',morph:['tamu = tasty / sweet','sana = very']}
      ],
      blocks:['<code>maji</code>, <code>chai</code>, <code>kahawa</code> = water, tea, coffee','<code>mkate</code> = bread · <code>nyama</code> = meat · <code>samaki</code> = fish','<code>tamu sana</code> = delicious'] },
    { id:6, title:'Directions', focus:'wapi? · kulia · kushoto · moja kwa moja',
      steps:[
        {t:'say',text:'The most useful question on the move: <span class="inline-tr">…wapi?</span> — where is…? Pair it with a place.',tr:'wapi?'},
        {t:'words',items:[{tr:'...wapi?',pr:'WAH-pee',en:'where is...?'},{tr:'kulia',pr:'koo-LEE-ah',en:'to the right'},{tr:'kushoto',pr:'koo-SHOH-toh',en:'to the left'},{tr:'moja kwa moja',pr:'MOH-jah kwah MOH-jah',en:'straight ahead'},{tr:'kituo',pr:'kee-TOO-oh',en:'the station'},{tr:'mji',pr:'M-jee',en:'town / city'}]},
        {t:'chal',en:'Where is the station?',tr:'Kituo kiko wapi?',pr:'kee-TOO-oh KEE-koh WAH-pee',morph:['kituo = station','kiko wapi? = where is it?']},
        {t:'chal',en:'Where is the bathroom?',tr:'Choo kiko wapi?',pr:'choh KEE-koh WAH-pee',morph:['choo = toilet','kiko wapi? = where is it?']},
        {t:'say',text:'<span class="inline-tr">kulia</span> = to the right and <span class="inline-tr">kushoto</span> = to the left. Straight ahead is <span class="inline-tr">moja kwa moja</span>.',tr:'kulia'},
        {t:'chal',en:'Straight ahead',tr:'Moja kwa moja',pr:'MOH-jah kwah MOH-jah',morph:['moja kwa moja = straight ahead']}
      ],
      blocks:['<code>…wapi?</code> = where is…?','<code>kulia</code> / <code>kushoto</code> = right / left','<code>moja kwa moja</code> = straight ahead'] },
    { id:7, title:'Questions & "do you have…?"', focus:'una? · kuna? · nini · wapi',
      steps:[
        {t:'say',text:'To ask someone if they have something: <span class="inline-tr">una…?</span> (one person) or <span class="inline-tr">mna…?</span> (a group).',tr:'una?'},
        {t:'chal',en:'Do you have a table?',tr:'Una meza?',pr:'OO-nah MEH-zah',morph:['una = do you have','meza = table']},
        {t:'say',text:'<span class="inline-tr">kuna…?</span> = is there…? Great for asking what\'s available.',tr:'kuna?'},
        {t:'chal',en:'Is there wifi?',tr:'Kuna wifi?',pr:'KOO-nah WEE-fee',morph:['kuna = is there','wifi = wifi'],link:'≈ English wifi'},
        {t:'say',text:'Other question words: <span class="inline-tr">nini</span> (what), <span class="inline-tr">nani</span> (who), <span class="inline-tr">lini</span> (when), <span class="inline-tr">wapi</span> (where).',tr:'nini'},
        {t:'words',items:[{tr:'nini',pr:'NEE-nee',en:'what'},{tr:'nani',pr:'NAH-nee',en:'who'},{tr:'lini',pr:'LEE-nee',en:'when'},{tr:'wapi',pr:'WAH-pee',en:'where'},{tr:'kwa nini',pr:'kwah NEE-nee',en:'why'}]},
        {t:'chal',en:'What is this?',tr:'Hii ni nini?',pr:'HEE-ee nee NEE-nee',morph:['hii = this','ni = is','nini = what']},
        {t:'chal',en:'Do you have bread?',tr:'Una mkate?',pr:'OO-nah M-kah-teh',morph:['una = do you have','mkate = bread']}
      ],
      blocks:['<code>una…?</code> = do you have…?','<code>kuna…?</code> = is there…?','<code>nini / nani / wapi / lini</code> = what / who / where / when'] },
    { id:8, title:'Family', focus:'familia · mama · baba · rafiki',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">familia</span> (family), <span class="inline-tr">mama</span> (mother), <span class="inline-tr">baba</span> (father).',tr:'familia'},
        {t:'words',items:[{tr:'familia',pr:'fah-MEE-lee-ah',en:'family',link:'≈ English family'},{tr:'mama',pr:'MAH-mah',en:'mother'},{tr:'baba',pr:'BAH-bah',en:'father'},{tr:'mtoto',pr:'M-toh-toh',en:'child'},{tr:'rafiki',pr:'rah-FEE-kee',en:'friend',link:'≈ Arabic rafiq (friend)'}]},
        {t:'chal',en:'I have a friend',tr:'Nina rafiki',pr:'NEE-nah rah-FEE-kee',morph:['nina = I have','rafiki = friend']},
        {t:'say',text:'<span class="inline-tr">nina</span> = I have, from <b>ni-</b> (I). Use it to say what you\'ve got.',tr:'nina'},
        {t:'chal',en:'I have a family',tr:'Nina familia',pr:'NEE-nah fah-MEE-lee-ah',morph:['nina = I have','familia = family']},
        {t:'chal',en:'This is my mother',tr:'Mama yangu',pr:'MAH-mah YAHN-goo',morph:['mama = mother','yangu = my']}
      ],
      blocks:['<code>mama</code> / <code>baba</code> = mother / father','<code>mtoto</code> = child · <code>rafiki</code> = friend','<code>nina</code> = I have'] },
    { id:9, title:'Time, days & weather', focus:'leo · kesho · jana · hali ya hewa',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">leo</span>, tomorrow is <span class="inline-tr">kesho</span>, yesterday is <span class="inline-tr">jana</span>.',tr:'leo'},
        {t:'words',items:[{tr:'leo',pr:'LEH-oh',en:'today'},{tr:'kesho',pr:'KEH-shoh',en:'tomorrow'},{tr:'jana',pr:'JAH-nah',en:'yesterday'},{tr:'hali ya hewa',pr:'HAH-lee yah HEH-wah',en:'weather'},{tr:'siku',pr:'SEE-koo',en:'day'}]},
        {t:'chal',en:'See you tomorrow',tr:'Tutaonana kesho',pr:'too-tah-oh-NAH-nah KEH-shoh',morph:['tutaonana = we\'ll meet','kesho = tomorrow']},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">Hali ya hewa ikoje?</span> — how is the weather?',tr:'hali ya hewa ikoje?'},
        {t:'chal',en:'It\'s raining',tr:'Kuna mvua',pr:'KOO-nah M-voo-ah',morph:['kuna = there is','mvua = rain']},
        {t:'say',text:'Days of the week start with <span class="inline-tr">Juma</span>: <span class="inline-tr">Jumatatu</span> (Monday), <span class="inline-tr">Jumanne</span> (Tuesday), and so on.',tr:'Jumatatu'},
        {t:'words',items:[{tr:'Jumatatu',pr:'joo-mah-TAH-too',en:'Monday'},{tr:'Jumanne',pr:'joo-MAHN-neh',en:'Tuesday'},{tr:'Ijumaa',pr:'ee-JOO-mah',en:'Friday'},{tr:'Jumapili',pr:'joo-mah-PEE-lee',en:'Sunday'}]}
      ],
      blocks:['<code>leo</code> / <code>kesho</code> / <code>jana</code> = today / tomorrow / yesterday','<code>hali ya hewa</code> = weather','<code>Juma…</code> = the days stem'] },
    { id:10, title:'Small talk & your name', focus:'jina langu ni __NAME__ · jina lako nani?',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">Jina langu ni…</span> = my name is…, then say your name.',tr:'Jina langu ni __NAME__'},
        {t:'chal',en:'My name is __NAME__',tr:'Jina langu ni __NAME__',pr:'JEE-nah LAHN-goo nee __NAME__',morph:['jina = name','langu = my','ni = is','__NAME__ = your name']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">Jina lako nani?</span>',tr:'Jina lako nani?'},
        {t:'chal',en:'What\'s your name?',tr:'Jina lako nani?',pr:'JEE-nah LAH-koh NAH-nee',morph:['jina = name','lako = your','nani = who']},
        {t:'chal',en:'Pleased to meet you',tr:'Ninafurahi kukutana',pr:'nee-nah-foo-RAH-hee koo-koo-TAH-nah',morph:['ninafurahi = I\'m pleased','kukutana = to meet you']},
        {t:'say',text:'To say where you\'re from: <span class="inline-tr">Unatoka wapi?</span> — you come from where? Reply <span class="inline-tr">Ninatoka…</span>.',tr:'Unatoka wapi?'},
        {t:'chal',en:'I come from America',tr:'Ninatoka Marekani',pr:'nee-nah-TOH-kah mah-reh-KAH-nee',morph:['ninatoka = I come from','Marekani = America']}
      ],
      blocks:['<code>jina langu ni __NAME__</code> = my name is __NAME__','<code>jina lako nani?</code> = what\'s your name?','<code>ninatoka…</code> = I come from…'] },
    { id:11, title:'Emergency & health', focus:'msaada! · daktari · hospitali · sielewi',
      steps:[
        {t:'say',text:'The most important word if you need help: <span class="inline-tr">msaada!</span> — help!',tr:'msaada!'},
        {t:'words',items:[{tr:'msaada!',pr:'M-sah-AH-dah',en:'Help!'},{tr:'daktari',pr:'dahk-TAH-ree',en:'the doctor',link:'≈ English doctor'},{tr:'hospitali',pr:'hos-pee-TAH-lee',en:'the hospital',link:'≈ English hospital'},{tr:'duka la dawa',pr:'DOO-kah lah DAH-wah',en:'the pharmacy'},{tr:'Sielewi',pr:'see-eh-LEH-wee',en:'I don\'t understand'}]},
        {t:'chal',en:'Help!',tr:'Msaada!',pr:'M-sah-AH-dah',morph:['msaada = help']},
        {t:'say',text:'To say you are unwell: <span class="inline-tr">Ninaumwa</span> (I\'m sick). To say you need a doctor: <span class="inline-tr">Nahitaji daktari</span>.',tr:'Nahitaji daktari'},
        {t:'chal',en:'I need a doctor',tr:'Nahitaji daktari',pr:'nah-hee-TAH-jee dahk-TAH-ree',morph:['nahitaji = I need','daktari = doctor'],link:'≈ English doctor'},
        {t:'chal',en:'I\'m sick',tr:'Ninaumwa',pr:'nee-nah-OOM-wah',morph:['ninaumwa = I am sick']},
        {t:'chal',en:'Where is the pharmacy?',tr:'Duka la dawa liko wapi?',pr:'DOO-kah lah DAH-wah LEE-koh WAH-pee',morph:['duka la dawa = pharmacy','liko wapi? = where is it?']}
      ],
      blocks:['<code>msaada!</code> = help!','<code>daktari</code> = doctor · <code>hospitali</code> = hospital','<code>sielewi</code> = I don\'t understand'] },
    { id:12, title:'Tying it together', focus:'nataka · ningependa · a capstone scene',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolbox. This capstone uses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello, how are you?',tr:'Jambo! Habari yako?',pr:'JAHM-boh, hah-BAH-ree YAH-koh',morph:['jambo = hello','habari yako? = how are you?']},
        {t:'chal',en:'I\'d like water, please',tr:'Ningependa maji, tafadhali',pr:'nee-ngeh-PEN-dah MAH-jee, tah-fah-DHAH-lee',morph:['ningependa = I would like','maji = water','tafadhali = please']},
        {t:'chal',en:'How much is it?',tr:'Bei ni ngapi?',pr:'BAY-ee nee NGAH-pee',morph:['bei = price','ni = is','ngapi = how much']},
        {t:'chal',en:'Where is the station?',tr:'Kituo kiko wapi?',pr:'kee-TOO-oh KEE-koh WAH-pee',morph:['kituo = station','kiko wapi? = where is it?']},
        {t:'chal',en:'It\'s delicious! Thank you!',tr:'Tamu sana! Asante!',pr:'TAH-moo SAH-nah, ah-SAHN-teh',morph:['tamu sana = delicious','asante = thank you']}
      ],
      blocks:['You built: greetings, ordering, directions, prices, thanks — a full day out in Swahili.'] },
    { id:13, title:'Airport & tickets', focus:'uwanja wa ndege · pasipoti · tiketi · ndege',
      steps:[
        {t:'say',text:'You have landed. The building is the <span class="inline-tr">uwanja wa ndege</span>. Your document is a <span class="inline-tr">pasipoti</span>.',tr:'uwanja wa ndege'},
        {t:'words',items:[{tr:'uwanja wa ndege',pr:'oo-WAHN-jah wah N-deh-geh',en:'the airport'},{tr:'pasipoti',pr:'pah-see-POH-tee',en:'the passport'},{tr:'tiketi',pr:'tee-KEH-tee',en:'the ticket'},{tr:'ndege',pr:'N-deh-geh',en:'the flight'},{tr:'lango',pr:'LAHN-goh',en:'the gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'Uwanja wa ndege uko wapi?',pr:'oo-WAHN-jah wah N-deh-geh OO-koh WAH-pee',morph:['uwanja wa ndege = the airport','uko wapi? = where is it?']},
        {t:'chal',en:'Here is my passport',tr:'Hapa pasipoti yangu',pr:'HAH-pah pah-see-POH-tee YAHN-goo',morph:['hapa = here is','pasipoti yangu = my passport']},
        {t:'chal',en:'A ticket, please',tr:'Tiketi, tafadhali',pr:'tee-KEH-tee, tah-fah-DHAH-lee',morph:['tiketi = ticket','tafadhali = please']},
        {t:'chal',en:'Where is the gate?',tr:'Lango liko wapi?',pr:'LAHN-goh LEE-koh WAH-pee',morph:['lango = the gate','liko wapi? = where is it?']}
      ],
      blocks:['<code>uwanja wa ndege</code> = airport','<code>pasipoti</code> = passport','<code>tiketi</code> = ticket','<code>lango</code> = gate'] },
    { id:14, title:'The taxi', focus:'teksi · kwenda · hoteli · simama',
      steps:[
        {t:'say',text:'The driver is waiting. <span class="inline-tr">teksi</span> is the word you need. Tell them where to go with <span class="inline-tr">nataka kwenda</span>.',tr:'teksi'},
        {t:'words',items:[{tr:'teksi',pr:'TEK-see',en:'the taxi'},{tr:'dereva',pr:'deh-REH-vah',en:'the driver'},{tr:'nataka kwenda',pr:'nah-TAH-kah KWEHN-dah',en:'I want to go'},{tr:'simama hapa',pr:'see-MAH-mah HAH-pah',en:'stop here'}]},
        {t:'chal',en:'Taxi, please',tr:'Teksi, tafadhali',pr:'TEK-see, tah-fah-DHAH-lee',morph:['teksi = taxi','tafadhali = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'Nataka kwenda hoteli',pr:'nah-TAH-kah KWEHN-dah hoh-TEH-lee',morph:['nataka kwenda = I want to go','hoteli = hotel']},
        {t:'chal',en:'Stop here, please',tr:'Simama hapa, tafadhali',pr:'see-MAH-mah HAH-pah, tah-fah-DHAH-lee',morph:['simama hapa = stop here','tafadhali = please']},
        {t:'chal',en:'How much is it?',tr:'Bei ni ngapi?',pr:'BAY-ee nee NGAH-pee',morph:['bei = price','ni = is','ngapi = how much']}
      ],
      blocks:['<code>nataka kwenda …</code> = I want to go to …','<code>simama hapa</code> = stop here'] },
    { id:15, title:'The hotel', focus:'reservation · chumba · ufunguo · usiku',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">Nina reservation</span> — I have a reservation.',tr:'reservation'},
        {t:'words',items:[{tr:'hoteli',pr:'hoh-TEH-lee',en:'the hotel'},{tr:'reservation',pr:'reh-sehr-VAY-shohn',en:'the reservation'},{tr:'chumba',pr:'CHOOM-bah',en:'the room'},{tr:'ufunguo',pr:'oo-foon-GOO-oh',en:'the key'},{tr:'usiku mmoja',pr:'oo-SEE-koo M-moh-jah',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'Nina reservation',pr:'NEE-nah reh-sehr-VAY-shohn',morph:['nina = I have','reservation = a reservation']},
        {t:'chal',en:'A room for one night, please',tr:'Chumba cha usiku mmoja, tafadhali',pr:'CHOOM-bah chah oo-SEE-koo M-moh-jah, tah-fah-DHAH-lee',morph:['chumba = a room','usiku mmoja = one night','tafadhali = please']},
        {t:'chal',en:'The key, please',tr:'Ufunguo, tafadhali',pr:'oo-foon-GOO-oh, tah-fah-DHAH-lee',morph:['ufunguo = the key','tafadhali = please']},
        {t:'chal',en:'Where is my room?',tr:'Chumba changu kiko wapi?',pr:'CHOOM-bah CHAHN-goo KEE-koh WAH-pee',morph:['chumba changu = my room','kiko wapi? = where is it?']}
      ],
      blocks:['<code>reservation</code> = reservation','<code>chumba</code> = room','<code>ufunguo</code> = key'] },
    { id:16, title:'Ask for help', focus:'sielewi · polepole · Kiingereza',
      steps:[
        {t:'say',text:'When the language is too fast: <span class="inline-tr">Polepole, tafadhali</span> — slower, please.',tr:'Polepole, tafadhali'},
        {t:'words',items:[{tr:'polepole',pr:'poh-leh-POH-leh',en:'slower'},{tr:'tena',pr:'TEH-nah',en:'again'},{tr:'Kiingereza',pr:'kee-een-geh-REH-zah',en:'English'},{tr:'unaweza kunisaidia?',pr:'oo-nah-WEH-zah koo-nee-sah-DEE-ah',en:'can you help?'}]},
        {t:'chal',en:'I don\'t understand',tr:'Sielewi',pr:'see-eh-LEH-wee',morph:['sielewi = I don\'t understand']},
        {t:'chal',en:'Slower, please',tr:'Polepole, tafadhali',pr:'poh-leh-POH-leh, tah-fah-DHAH-lee',morph:['polepole = slower','tafadhali = please']},
        {t:'chal',en:'Can you help me?',tr:'Unaweza kunisaidia?',pr:'oo-nah-WEH-zah koo-nee-sah-DEE-ah',morph:['unaweza = can you','kunisaidia = help me']},
        {t:'chal',en:'Do you speak English?',tr:'Unazungumza Kiingereza?',pr:'oo-nah-zoon-GOOM-zah kee-een-geh-REH-zah',morph:['unazungumza = do you speak','Kiingereza = English']}
      ],
      blocks:['<code>polepole</code> = slower','<code>Unazungumza Kiingereza?</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'cafe', title:'☕ At a café (duka)', emoji:'☕', turns:[
      {who:'You',tr:'Habari! Nipe kahawa, tafadhali.',pr:'hah-BAH-ree, NEE-peh kah-HAH-wah, tah-fah-DHAH-lee',en:'Hello! Give me a coffee, please.'},
      {who:'Server',tr:'Karibu. Kahawa na nini?',pr:'kah-REE-boo, kah-HAH-wah nah NEE-nee',en:'Welcome. Coffee with what?'},
      {who:'You',tr:'Kahawa na mkate, asante.',pr:'kah-HAH-wah nah M-kah-teh, ah-SAHN-teh',en:'Coffee and bread, thank you.'},
      {who:'Server',tr:'Haya. Ni shilingi mia tano.',pr:'HAH-yah, nee shee-LEEN-gee MEE-ah TAH-noh',en:'OK. That\'s five hundred shillings.'},
      {who:'You',tr:'Asante sana!',pr:'ah-SAHN-teh SAH-nah',en:'Thank you very much!'}
    ]},
    { id:'matatu', title:'🚌 On the matatu', emoji:'🚌', turns:[
      {who:'You',tr:'Samahani, matatu hii inaenda mjini?',pr:'sah-mah-HAH-nee, mah-TAH-too HEE-ee ee-nah-EHN-dah M-jee-nee',en:'Excuse me, does this matatu go to town?'},
      {who:'Driver',tr:'Ndiyo, ingia.',pr:'N-dee-yoh, een-GEE-ah',en:'Yes, get in.'},
      {who:'You',tr:'Nataka kwenda kituo. Nauli ngapi?',pr:'nah-TAH-kah KWEHN-dah kee-TOO-oh, nah-OO-lee NGAH-pee',en:'I want to go to the station. How much is the fare?'},
      {who:'Driver',tr:'Shilingi mia mbili.',pr:'shee-LEEN-gee MEE-ah M-bee-lee',en:'Two hundred shillings.'},
      {who:'You',tr:'Haya. Nifike kituo, tafadhali.',pr:'HAH-yah, nee-FEE-kah kee-TOO-oh, tah-fah-DHAH-lee',en:'OK. Take me to the station, please.'}
    ]},
    { id:'restaurant', title:'🍽️ At a restaurant', emoji:'🍽️', turns:[
      {who:'Waiter',tr:'Karibu! Una nini leo?',pr:'kah-REE-boo, OO-nah NEE-nee LEH-oh',en:'Welcome! What will you have today?'},
      {who:'You',tr:'Nataka samaki na wali.',pr:'nah-TAH-kah sah-MAH-kee nah WAH-lee',en:'I want fish and rice.'},
      {who:'Waiter',tr:'Na kinywaji?',pr:'nah kee-nyah-WAH-jee',en:'And a drink?'},
      {who:'You',tr:'Maji, tafadhali.',pr:'MAH-jee, tah-fah-DHAH-lee',en:'Water, please.'},
      {who:'Waiter',tr:'Haya. Chakula kiko tayari hivi karibuni.',pr:'HAH-yah, chah-KOO-lah KEE-koh tah-YAH-ree HEE-vee kah-ree-BOO-nee',en:'OK. The food will be ready soon.'}
    ]},
    { id:'shop', title:'🛍️ At the market', emoji:'🛍️', turns:[
      {who:'You',tr:'Hii ni bei gani?',pr:'HEE-ee nee BAY-ee GAH-nee',en:'What is the price of this?'},
      {who:'Seller',tr:'Shilingi elfu tano.',pr:'shee-LEEN-gee EL-foo TAH-noh',en:'Five thousand shillings.'},
      {who:'You',tr:'Ni ghali sana. Naweza kupunguzwa?',pr:'nee GHAH-lee SAH-nah, nah-WEH-zah koo-poon-GOO-zwah',en:'It\'s very expensive. Can you lower it?'},
      {who:'Seller',tr:'Haya, elfu nne.',pr:'HAH-yah, EL-foo nn-eh',en:'OK, four thousand.'},
      {who:'You',tr:'Sawa, nichukue.',pr:'SAH-wah, nee-CHOO-kweh',en:'OK, I\'ll take it.'}
    ]}
  ],
  pocket: [
    {tr:'Jambo',pr:'JAHM-boh',en:'Hello',c:'Greetings'},
    {tr:'Habari!',pr:'hah-BAH-ree',en:'Hello / how are things?',c:'Greetings'},
    {tr:'Karibu',pr:'kah-REE-boo',en:'Welcome',c:'Greetings'},
    {tr:'Kwaheri',pr:'kwah-HEH-ree',en:'Goodbye',c:'Greetings'},
    {tr:'Habari yako?',pr:'hah-BAH-ree YAH-koh',en:'How are you?',c:'Greetings'},
    {tr:'Jina langu ni __NAME__',pr:'JEE-nah LAHN-goo nee',en:'My name is...',c:'Greetings'},
    {tr:'Asante',pr:'ah-SAHN-teh',en:'Thank you',c:'Courtesy'},
    {tr:'Asante sana',pr:'ah-SAHN-teh SAH-nah',en:'Thank you very much',c:'Courtesy'},
    {tr:'Tafadhali',pr:'tah-fah-DHAH-lee',en:'Please',c:'Courtesy'},
    {tr:'Samahani',pr:'sah-mah-HAH-nee',en:'Excuse me / sorry',c:'Courtesy'},
    {tr:'Ndiyo',pr:'N-dee-yoh',en:'Yes',c:'Courtesy'},
    {tr:'Hapana',pr:'hah-PAH-nah',en:'No',c:'Courtesy'},
    {tr:'Moja',pr:'MOH-jah',en:'1',c:'Numbers'},
    {tr:'Mbili',pr:'M-bee-lee',en:'2',c:'Numbers'},
    {tr:'Tatu',pr:'TAH-too',en:'3',c:'Numbers'},
    {tr:'Nne',pr:'nn-eh',en:'4',c:'Numbers'},
    {tr:'Tano',pr:'TAH-noh',en:'5',c:'Numbers'},
    {tr:'Kumi',pr:'KOO-mee',en:'10',c:'Numbers'},
    {tr:'Maji',pr:'MAH-jee',en:'water',c:'Food'},
    {tr:'Chai',pr:'chai',en:'tea',c:'Food'},
    {tr:'Kahawa',pr:'kah-HAH-wah',en:'coffee',c:'Food'},
    {tr:'Mkate',pr:'M-kah-teh',en:'bread',c:'Food'},
    {tr:'Samaki',pr:'sah-MAH-kee',en:'fish',c:'Food'},
    {tr:'...wapi?',pr:'WAH-pee',en:'where is...?',c:'Directions'},
    {tr:'Kulia',pr:'koo-LEE-ah',en:'to the right',c:'Directions'},
    {tr:'Kushoto',pr:'koo-SHOH-toh',en:'to the left',c:'Directions'},
    {tr:'Moja kwa moja',pr:'MOH-jah kwah MOH-jah',en:'straight ahead',c:'Directions'},
    {tr:'Kituo',pr:'kee-TOO-oh',en:'the station',c:'Directions'},
    {tr:'Hii ni bei gani?',pr:'HEE-ee nee BAY-ee GAH-nee',en:'how much is this?',c:'Shopping'},
    {tr:'Nataka',pr:'nah-TAH-kah',en:'I want',c:'Shopping'},
    {tr:'Msaada!',pr:'M-sah-AH-dah',en:'Help!',c:'Emergency'},
    {tr:'Daktari',pr:'dahk-TAH-ree',en:'the doctor',c:'Emergency'},
    {tr:'Sielewi',pr:'see-eh-LEH-wee',en:'I don\'t understand',c:'Emergency'},
    {tr:'Leo',pr:'LEH-oh',en:'today',c:'Time'},
    {tr:'Kesho',pr:'KEH-shoh',en:'tomorrow',c:'Time'},
    {tr:'Uwanja wa ndege',pr:'oo-WAHN-jah wah N-deh-geh',en:'the airport',c:'Travel'},
    {tr:'Pasipoti',pr:'pah-see-POH-tee',en:'the passport',c:'Travel'},
    {tr:'Tiketi',pr:'tee-KEH-tee',en:'the ticket',c:'Travel'},
    {tr:'Teksi',pr:'TEK-see',en:'the taxi',c:'Travel'},
    {tr:'Hoteli',pr:'hoh-TEH-lee',en:'the hotel',c:'Travel'},
    {tr:'Nina reservation',pr:'NEE-nah reh-sehr-VAY-shohn',en:'I have a reservation',c:'Travel'},
    {tr:'Polepole, tafadhali',pr:'poh-leh-POH-leh, tah-fah-DHAH-lee',en:'Slower, please',c:'Travel'},
    {tr:'Unazungumza Kiingereza?',pr:'oo-nah-zoon-GOOM-zah kee-een-geh-REH-zah',en:'Do you speak English?',c:'Travel'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Shopping','Emergency','Time','Travel'],
  culture: [
    {icon:'🤝',title:'Karibu',body:'Hospitality is central to the culture. Karibu ("welcome") is said warmly and often — you\'ll hear it constantly in shops and homes. It also means "you\'re welcome" after thanks.'},
    {icon:'🗣️',title:'A language of the road',body:'Swahili is the lingua franca of East Africa — spoken across Kenya, Tanzania, Uganda, Rwanda and beyond. A friendly greeting in Swahili opens doors almost everywhere in the region.'},
    {icon:'🌈',title:'Hakuna matata',body:'Hakuna matata — "no worries" — captures the relaxed, upbeat spirit of the coast. Say it with a smile and a laugh; it\'s the go-easy motto of everyday life.'},
    {icon:'🚌',title:'Matatu culture',body:'Colourful matatus (shared minibuses) are how most people get around Kenyan cities. They often blast music, and a conductor calls the route. Choose your matatu wisely and agree the fare before you board.'},
    {icon:'🎉',title:'Greetings matter',body:'Greet before you ask anything — start with a warm "Habari?" or "Jambo!". Jumping straight to business without a greeting is seen as rude.'},
    {icon:'🌍',title:'Many dialects, one language',body:'Standard Swahili is taught in schools, but local varieties differ — Zanzibar\'s coastal dialect and Kenyan slang each add colour. Hear a word you don\'t know? Just ask "Hii ina maana gani?" (what does this mean?).'}
  ],
  sounds: [
    {l:'a e i o u',say:'pure vowels — "ah, eh, ee, oh, oo", never glided',ex:'asante = ah-SAHN-teh',voice:'asante'},
    {l:'ng\'',say:'nasal "ng" as in "singer" — no hard g',ex:'ng\'ombe = ng-OHM-beh (cow)',voice:'ngombe'},
    {l:'r',say:'lightly rolled r',ex:'rafiki = rah-FEE-kee',voice:'rafiki'},
    {l:'mb / nd / nz',say:'nasal + consonant together, no vowel in between',ex:'mbili = M-bee-lee · ndizi = N-dee-zee',voice:'mbili'},
    {l:'sh',say:'"sh" as in shoe',ex:'shilingi = shee-LEEN-gee',voice:'shilingi'},
    {l:'ch',say:'"ch" as in church',ex:'chai = chai',voice:'chai'},
    {l:'ny',say:'"ny" as in "canyon"',ex:'nyama = NYAH-mah',voice:'nyama'}
  ],
  resources: [
    {icon:'🗣️',t:'Easy Swahili',d:'Real street interviews with native speakers and subtitles — natural everyday Swahili.',q:'Easy Swahili street interviews'},
    {icon:'🐢',t:'SwahiliPod101',d:'Structured audio and video lessons with a clear beginner track and word lists.',q:'SwahiliPod101 beginner lessons'},
    {icon:'📚',t:'FSI Swahili',d:'The classic free Foreign Service Institute course — thorough and a great free workbook.',q:'FSI Swahili course'},
    {icon:'🎬',t:'Swahili fairy tales',d:'Simple, slow stories in Swahili with visuals — easy listening for beginners.',q:'Swahili fairy tales for learners'},
    {icon:'🎧',t:'Kiswahili podcasts',d:'Easy-listening Kiswahili audio — perfect for a walk or commute.',q:'Kiswahili podcast for learners'}
  ]
};
