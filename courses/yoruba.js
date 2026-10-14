/* ---- yoruba ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["yoruba"] = {
  name: 'Yoruba',
  flag: '🇳🇬',
  tts: 'yo-NG',
  dir: 'ltr',
  native: 'Yorùbá',
  soundTitle: 'Yoruba sounds & tones',
  soundIntro: 'Yoruba is a tone language — the same syllable can carry different meanings depending on the pitch. Master these sounds and the tune, and you can read almost any word.',
  grammar: '<p>Yoruba is a <b>tone language</b>: the pitch you use changes the meaning of a word, so <i>ọ̀kan</i> (one) and the same syllable at a different pitch are different words entirely. Word order is <b>subject – verb – object</b> and is very consistent: <i>mo fẹ́ omi</i> = I want water. Numbers follow the noun (<i>kọfí méjì</i> = two coffees). Many everyday words are borrowings you already know — <i>kọfí</i> (coffee), <i>tíì</i> (tea), <i>búrẹ́dì</i> (bread).</p>',
  bridges: '<div class="note">🇬🇧 <b>English.</b> Yoruba is a <b>tone language</b>, like Chinese: the pitch of a syllable carries meaning, not just its letters. Learn the melody as you learn the word. You also already know some Yoruba words — <b>kọfí</b> is coffee, <b>tíì</b> is tea, <b>búrẹ́dì</b> is bread, all borrowed from English.</div><div class="note">📍 <b>Nigeria.</b> Yoruba is one of the great languages of West Africa, spoken by tens of millions. Greet with <b>ẹ káàbọ̀</b> (welcome) and <b>ẹ ṣé</b> (thank you) and you\'ll be warmly received.</div>',
  lessons: [
    { id:1, title:'Greetings & being polite', focus:'ẹ káàbọ̀ · bawo ni · ẹ ṣé · ẹ jọ̀wọ́',
      steps:[
        {t:'say',text:'Start with the word you\'ll use most: <span class="inline-tr">ẹ káàbọ̀</span> — welcome (also used as a warm hello). The <b>ẹ</b> shows respect, so say it to anyone.',tr:'ẹ káàbọ̀'},
        {t:'words',items:[{tr:'Ẹ káàbọ̀',pr:'eh-KAH-baw',en:'welcome'},{tr:'Bawo ni?',pr:'BAH-wah nee',en:'How are you?'},{tr:'Ẹ ṣé',pr:'eh-SHEH',en:'thank you'},{tr:'Ẹ jọ̀wọ́',pr:'eh-JAW-waw',en:'please'},{tr:'Ó dàbọ̀',pr:'aw-DAH-baw',en:'goodbye'}]},
        {t:'chal',en:'Welcome, thank you',tr:'Ẹ káàbọ̀, ẹ ṣé',pr:'eh-KAH-baw, eh-SHEH',morph:['ẹ káàbọ̀ = welcome','ẹ ṣé = thank you']},
        {t:'say',text:'Two more essentials: <span class="inline-tr">ẹ ṣé</span> (thank you) and <span class="inline-tr">ẹ jọ̀wọ́</span> (please). They get you a long way.',tr:'ẹ ṣé'},
        {t:'words',items:[{tr:'Ẹ káàrọ́',pr:'eh-KAH-raw',en:'good morning'},{tr:'Ẹ káàsán',pr:'eh-KAH-sahn',en:'good afternoon'},{tr:'Ẹ káalẹ́',pr:'eh-KAH-leh',en:'good evening'}]},
        {t:'chal',en:'Good morning, how are you?',tr:'Ẹ káàrọ́, bawo ni?',pr:'eh-KAH-raw, BAH-wah nee',morph:['ẹ káàrọ́ = good morning','bawo ni? = how are you?']}
      ],
      blocks:['<code>ẹ káàbọ̀</code> = welcome','<code>ẹ ṣé</code> = thank you · <code>ẹ jọ̀wọ́</code> = please','<code>bawo ni?</code> = how are you?','<code>ẹ káàrọ́</code> = good morning'] },
    { id:2, title:'Numbers 1–10', focus:'ọ̀kan · èjì · ẹ̀ta · mẹ́wàá',
      steps:[
        {t:'say',text:'Numbers are the fastest win. Listen and repeat the tune — each has its own pitch pattern: <span class="inline-tr">ọ̀kan, èjì, ẹ̀ta</span>.',tr:'ọ̀kan'},
        {t:'words',items:[{tr:'ọ̀kan',pr:'AW-kahn',en:'1'},{tr:'èjì',pr:'EH-jee',en:'2'},{tr:'ẹ̀ta',pr:'EH-tah',en:'3'},{tr:'ẹ̀rin',pr:'EH-reen',en:'4'},{tr:'márùn-ún',pr:'MAH-run-oon',en:'5'},{tr:'mẹ́fà',pr:'MEH-fah',en:'6'},{tr:'mẹ́je',pr:'MEH-jeh',en:'7'},{tr:'mẹ́jọ',pr:'MEH-jaw',en:'8'},{tr:'mẹ́sàn-án',pr:'MEH-sahn-ahn',en:'9'},{tr:'mẹ́wàá',pr:'MEH-wah-ah',en:'10'}]},
        {t:'say',text:'In Yoruba the number comes <b>after</b> the thing: <span class="inline-tr">kọfí méjì</span> = two coffees.',tr:'kọfí méjì'},
        {t:'chal',en:'How much is it?',tr:'Ẹló ni?',pr:'eh-LAW nee',morph:['ẹló ni? = how much is it?']},
        {t:'chal',en:'Two, please',tr:'Méjì, ẹ jọ̀wọ́',pr:'MEH-jee, eh-JAW-waw',morph:['méjì = two','ẹ jọ̀wọ́ = please']},
        {t:'chal',en:'Three coffees, please',tr:'Kọfí mẹ́ta, ẹ jọ̀wọ́',pr:'kaw-FEE MEH-tah, eh-JAW-waw',morph:['kọfí = coffee','mẹ́ta = three','ẹ jọ̀wọ́ = please']}
      ],
      blocks:['ọ̀kan, èjì, ẹ̀ta, ẹ̀rin, márùn-ún = 1–5','mẹ́fà … mẹ́wàá = 6–10','<code>kọfí méjì</code> = two coffees'] },
    { id:3, title:'"I want" — mo fẹ́', focus:'mo fẹ́ · fẹ́',
      steps:[
        {t:'say',text:'The magic phrase to order or ask for anything: <span class="inline-tr">mo fẹ́</span> — I want. Say it then add the thing.',tr:'mo fẹ́'},
        {t:'say',text:'<span class="inline-tr">fẹ́</span> can also mean \'to love\'. Context tells you which. For now, think <b>mo fẹ́</b> = I want.',tr:'mo fẹ́'},
        {t:'chal',en:'I want water',tr:'Mo fẹ́ omi',pr:'moh FEH aw-mee',morph:['mo fẹ́ = I want','omi = water']},
        {t:'chal',en:'I want coffee',tr:'Mo fẹ́ kọfí',pr:'moh FEH kaw-FEE',morph:['mo fẹ́ = I want','kọfí = coffee']},
        {t:'chal',en:'I want bread, please',tr:'Mo fẹ́ búrẹ́dì, ẹ jọ̀wọ́',pr:'moh FEH BOO-reh-dee, eh-JAW-waw',morph:['mo fẹ́ = I want','búrẹ́dì = bread','ẹ jọ̀wọ́ = please']}
      ],
      blocks:['<code>mo fẹ́</code> = I want','<code>mo fẹ́ + noun</code> = I want…'] },
    { id:4, title:'Food & drink', focus:'omi · búrẹ́dì · kọfí · tíì',
      steps:[
        {t:'say',text:'Eating or drinking? Start with <span class="inline-tr">omi</span> (water), then the things you already half-know from English: <span class="inline-tr">kọfí</span> (coffee), <span class="inline-tr">tíì</span> (tea).',tr:'omi'},
        {t:'words',items:[{tr:'omi',pr:'aw-mee',en:'water'},{tr:'búrẹ́dì',pr:'BOO-reh-dee',en:'bread',link:'≈ English bread'},{tr:'kọfí',pr:'kaw-FEE',en:'coffee',link:'≈ English coffee'},{tr:'tíì',pr:'TEE',en:'tea',link:'≈ English tea'},{tr:'oúnjẹ',pr:'OON-jeh',en:'food'},{tr:'ẹran',pr:'EH-ran',en:'meat'}]},
        {t:'chal',en:'Water and bread, please',tr:'Omi àti búrẹ́dì, ẹ jọ̀wọ́',pr:'aw-mee AH-tee BOO-reh-dee, eh-JAW-waw',morph:['omi = water','àti = and','búrẹ́dì = bread','ẹ jọ̀wọ́ = please']},
        {t:'chal',en:'I want tea',tr:'Mo fẹ́ tíì',pr:'moh FEH TEE',morph:['mo fẹ́ = I want','tíì = tea']},
        {t:'say',text:'To say something tastes great: <span class="inline-tr">Ó dùn</span> — it is sweet / delicious.',tr:'Ó dùn'},
        {t:'chal',en:'It\'s delicious!',tr:'Ó dùn!',pr:'aw DOON',morph:['ó dùn = it\'s delicious']}
      ],
      blocks:['<code>omi</code> = water','<code>kọfí</code> = coffee · <code>tíì</code> = tea','<code>búrẹ́dì</code> = bread','<code>ó dùn!</code> = delicious!'] },
    { id:5, title:'Getting around', focus:'ibo ni · sọ́tùn · sí òsì · níwájú',
      steps:[
        {t:'say',text:'The most useful question in any city: <span class="inline-tr">ibo ni…?</span> — where is…?',tr:'ibo ni'},
        {t:'words',items:[{tr:'Ibo ni...?',pr:'EE-boh nee',en:'Where is...?'},{tr:'Sọ́tùn',pr:'SAW-toon',en:'to the right'},{tr:'Sí òsì',pr:'SEE aw-SEE',en:'to the left'},{tr:'Níwájú',pr:'nee-WAH-joo',en:'straight ahead'},{tr:'Ọjà',pr:'aw-JAH',en:'market'},{tr:'Ilé',pr:'EE-leh',en:'house / home'}]},
        {t:'chal',en:'Where is the market?',tr:'Nibo ni ọjà?',pr:'nee-BOH nee aw-JAH',morph:['nibo ni = where is','ọjà = market']},
        {t:'chal',en:'Where is the house?',tr:'Nibo ni ilé?',pr:'nee-BOH nee EE-leh',morph:['nibo ni = where is','ilé = house']},
        {t:'say',text:'<span class="inline-tr">Sọ́tùn</span> (right) and <span class="inline-tr">sí òsì</span> (left) tell you which way to turn. Straight ahead is <span class="inline-tr">níwájú</span>.',tr:'níwájú'},
        {t:'chal',en:'Straight ahead, to the right',tr:'Níwájú, sọ́tùn',pr:'nee-WAH-joo, SAW-toon',morph:['níwájú = straight ahead','sọ́tùn = to the right']}
      ],
      blocks:['<code>ibo ni…?</code> = where is…?','<code>sọ́tùn</code> / <code>sí òsì</code> = right / left','<code>níwájú</code> = straight ahead'] },
    { id:6, title:'Questions', focus:'kí ni · ṣé · ẹló ni · ta ni',
      steps:[
        {t:'say',text:'The key question word: <span class="inline-tr">kí ni?</span> = what is…?',tr:'kí ni'},
        {t:'words',items:[{tr:'Kí ni?',pr:'KEE nee',en:'what?'},{tr:'Ṣé...?',pr:'SHEH',en:'is it...? (yes/no question)'},{tr:'Ẹló ni?',pr:'eh-LAW nee',en:'how much is it?'},{tr:'Ibo ni?',pr:'EE-boh nee',en:'where?'},{tr:'Ta ni?',pr:'TAH nee',en:'who?'},{tr:'Nígbà wo?',pr:'nee-GBAH waw',en:'when?'}]},
        {t:'chal',en:'What is this?',tr:'Kí ni èyí?',pr:'KEE nee EH-yee',morph:['kí ni = what','èyí = this']},
        {t:'say',text:'<span class="inline-tr">Ṣé…?</span> turns a statement into a yes/no question. <span class="inline-tr">Ṣé omi wà?</span> = is there water?',tr:'Ṣé'},
        {t:'chal',en:'Is there water?',tr:'Ṣé omi wà?',pr:'SHEH aw-mee wah',morph:['ṣé = is it?','omi = water','wà = there is']},
        {t:'chal',en:'Who is this?',tr:'Ta ni èyí?',pr:'TAH nee EH-yee',morph:['ta ni = who','èyí = this']}
      ],
      blocks:['<code>kí ni?</code> = what?','<code>ṣé…?</code> = is it…? (yes/no)','<code>ẹló ni?</code> = how much?','<code>ibo ni?</code> = where?'] },
    { id:7, title:'Family & people', focus:'ìdílé · ìyá · bàbá · ọ̀rẹ́',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">ìdílé</span> (family), <span class="inline-tr">ìyá</span> (mother), <span class="inline-tr">bàbá</span> (father).',tr:'ìdílé'},
        {t:'words',items:[{tr:'ìdílé',pr:'ee-DEE-leh',en:'family'},{tr:'ìyá',pr:'ee-YAH',en:'mother'},{tr:'bàbá',pr:'bah-BAH',en:'father'},{tr:'ọ̀rẹ́',pr:'aw-REH',en:'friend'},{tr:'ọmọ',pr:'aw-MAW',en:'child'}]},
        {t:'chal',en:'I have a friend',tr:'Mo ní ọ̀rẹ́',pr:'moh NEE aw-REH',morph:['mo = I','ní = have','ọ̀rẹ́ = friend']},
        {t:'say',text:'<span class="inline-tr">mo ní</span> = I have. It\'s the verb for anything you\'ve got.',tr:'mo ní'},
        {t:'chal',en:'I have a family',tr:'Mo ní ìdílé',pr:'moh NEE ee-DEE-leh',morph:['mo = I','ní = have','ìdílé = family']},
        {t:'chal',en:'Where is mother?',tr:'Nibo ni ìyá?',pr:'nee-BOH nee ee-YAH',morph:['nibo ni = where is','ìyá = mother']}
      ],
      blocks:['<code>ìyá</code> / <code>bàbá</code> = mother / father','<code>ọ̀rẹ́</code> = friend','<code>mo ní</code> = I have'] },
    { id:8, title:'Time, days & weather', focus:'lónìí · lọ́la · ojú ọjọ́',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">lónìí</span>, tomorrow is <span class="inline-tr">lọ́la</span>.',tr:'lónìí'},
        {t:'words',items:[{tr:'lónìí',pr:'loh-NEE-ee',en:'today'},{tr:'lọ́la',pr:'LAW-lah',en:'tomorrow'},{tr:'áná',pr:'AH-nah',en:'yesterday'},{tr:'ojú ọjọ́',pr:'aw-JOO aw-JAW',en:'the weather'},{tr:'ọjọ́',pr:'aw-JAW',en:'day'}]},
        {t:'chal',en:'Today and tomorrow',tr:'Lónìí àti lọ́la',pr:'loh-NEE-ee AH-tee LAW-lah',morph:['lónìí = today','àti = and','lọ́la = tomorrow']},
        {t:'say',text:'Ask about the weather with <span class="inline-tr">ojú ọjọ́</span> — \'the weather\'.',tr:'ojú ọjọ́'},
        {t:'chal',en:'The weather is good',tr:'Ojú ọjọ́ dára',pr:'aw-JOO aw-JAW DAH-rah',morph:['ojú ọjọ́ = the weather','dára = is good']}
      ],
      blocks:['<code>lónìí</code> / <code>lọ́la</code> = today / tomorrow','<code>ojú ọjọ́</code> = the weather'] },
    { id:9, title:'Your name', focus:'orúkọ mi ni · kí ni orúkọ rẹ',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">Orúkọ mi ni…</span> = my name is…',tr:'Orúkọ mi ni'},
        {t:'chal',en:'My name is __NAME__',tr:'Orúkọ mi ni __NAME__',pr:'aw-ROO-kaw mee nee __NAME__',morph:['orúkọ = name','mi = my','ni = is','__NAME__ = your name']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">Kí ni orúkọ rẹ?</span>',tr:'Kí ni orúkọ rẹ?'},
        {t:'chal',en:'What\'s your name?',tr:'Kí ni orúkọ rẹ?',pr:'KEE nee aw-ROO-kaw reh',morph:['kí ni = what','orúkọ = name','rẹ = your']},
        {t:'say',text:'Pleased to meet you: <span class="inline-tr">Ó dùn láti bá ọ pàdé</span> — it is sweet to meet you.',tr:'Ó dùn láti bá ọ pàdé'},
        {t:'chal',en:'Nice to meet you',tr:'Ó dùn láti bá ọ pàdé',pr:'aw DOON LAH-tee bah aw pah-DEH',morph:['ó dùn = it\'s sweet','láti bá ọ pàdé = to meet you']}
      ],
      blocks:['<code>orúkọ mi ni…</code> = my name is…','<code>kí ni orúkọ rẹ?</code> = what\'s your name?'] },
    { id:10, title:'Health & emergency', focus:'ègbè · ẹ̀ràn · ilé ìwòsàn',
      steps:[
        {t:'say',text:'The most important words if something goes wrong: <span class="inline-tr">ègbè!</span> (help!), <span class="inline-tr">ẹ̀ràn!</span> (fire!).',tr:'ègbè'},
        {t:'words',items:[{tr:'Ègbè!',pr:'EH-gbeh',en:'help!'},{tr:'Ẹ̀ràn!',pr:'EH-rahn',en:'fire!'},{tr:'ilé ìwòsàn',pr:'EE-leh EE-waw-sahn',en:'the hospital'},{tr:'oníṣègùn',pr:'oh-nee-SHEH-goon',en:'a doctor'},{tr:'Mo fẹ́ ìrànlọ́wọ́',pr:'moh FEH ee-rahn-LAW-waw',en:'I need help'},{tr:'Kò yé mi',pr:'KOH yeh mee',en:'I don\'t understand'}]},
        {t:'chal',en:'Help!',tr:'Ègbè!',pr:'EH-gbeh',morph:['ègbè = help']},
        {t:'chal',en:'I need help',tr:'Mo fẹ́ ìrànlọ́wọ́',pr:'moh FEH ee-rahn-LAW-waw',morph:['mo fẹ́ = I want','ìrànlọ́wọ́ = help']},
        {t:'chal',en:'Fire!',tr:'Ẹ̀ràn!',pr:'EH-rahn',morph:['ẹ̀ràn = fire']},
        {t:'chal',en:'I don\'t understand',tr:'Kò yé mi',pr:'KOH yeh mee',morph:['kò = not','yé mi = it is clear to me']}
      ],
      blocks:['<code>ègbè!</code> = help!','<code>ẹ̀ràn!</code> = fire!','<code>ilé ìwòsàn</code> = the hospital','<code>kò yé mi</code> = I don\'t understand'] },
    { id:11, title:'Describing things', focus:'dára · ńlá · kékeré · púpọ̀',
      steps:[
        {t:'say',text:'Adjectives are easy to add: <span class="inline-tr">dára</span> (good / beautiful), <span class="inline-tr">ńlá</span> (big), <span class="inline-tr">kékeré</span> (small).',tr:'dára'},
        {t:'words',items:[{tr:'dára',pr:'DAH-rah',en:'good / beautiful'},{tr:'ńlá',pr:'EN-lah',en:'big'},{tr:'kékeré',pr:'KEH-keh-reh',en:'small'},{tr:'púpọ̀',pr:'POO-paw',en:'very / a lot'},{tr:'tútù',pr:'TOO-too',en:'cold'},{tr:'gbóná',pr:'GBAW-nah',en:'hot'}]},
        {t:'chal',en:'Very good',tr:'Dára púpọ̀',pr:'DAH-rah POO-paw',morph:['dára = good','púpọ̀ = very']},
        {t:'chal',en:'The water is cold',tr:'Omi tútù',pr:'aw-mee TOO-too',morph:['omi = water','tútù = cold']},
        {t:'chal',en:'A big house',tr:'Ilé ńlá',pr:'EE-leh EN-lah',morph:['ilé = house','ńlá = big']}
      ],
      blocks:['<code>dára</code> = good / beautiful','<code>ńlá</code> / <code>kékeré</code> = big / small','<code>púpọ̀</code> = very'] },
    { id:12, title:'Tying it together', focus:'a capstone scene',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolbox. This capstone uses only words you\'ve already met. Build each line yourself before revealing it.'},
        {t:'chal',en:'Welcome, how are you?',tr:'Ẹ káàbọ̀, bawo ni?',pr:'eh-KAH-baw, BAH-wah nee',morph:['ẹ káàbọ̀ = welcome','bawo ni? = how are you?']},
        {t:'chal',en:'I want water, please',tr:'Mo fẹ́ omi, ẹ jọ̀wọ́',pr:'moh FEH aw-mee, eh-JAW-waw',morph:['mo fẹ́ = I want','omi = water','ẹ jọ̀wọ́ = please']},
        {t:'chal',en:'Where is the market?',tr:'Nibo ni ọjà?',pr:'nee-BOH nee aw-JAH',morph:['nibo ni = where is','ọjà = market']},
        {t:'chal',en:'How much is it?',tr:'Ẹló ni?',pr:'eh-LAW nee',morph:['ẹló ni? = how much is it?']},
        {t:'chal',en:'Thank you!',tr:'Ẹ ṣé!',pr:'eh-SHEH',morph:['ẹ ṣé = thank you']}
      ],
      blocks:['You built: greetings, ordering, directions, prices and thanks — a full day out in Yoruba.'] },
    { id:13, title:'Airport & tickets', focus:'pápá ọkọ̀ òfurufú · ìwé ìrìnnà · tíkẹ́ẹ̀tì',
      steps:[
        {t:'say',text:'You have landed. The building is the <span class="inline-tr">pápá ọkọ̀ òfurufú</span>. Your document is a <span class="inline-tr">ìwé ìrìnnà</span>.',tr:'pápá ọkọ̀ òfurufú'},
        {t:'words',items:[{tr:'pápá ọkọ̀ òfurufú',pr:'PAH-pah AW-kaw oh-foo-roo-FOO',en:'the airport'},{tr:'ìwé ìrìnnà',pr:'ee-WAY ee-REEN-nah',en:'the passport'},{tr:'tíkẹ́ẹ̀tì',pr:'tee-KEH-tee',en:'the ticket'},{tr:'ọkọ̀ òfurufú',pr:'AW-kaw oh-foo-roo-FOO',en:'the flight'},{tr:'ẹnu ọ̀nà',pr:'EH-noo AW-nah',en:'the gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'Pápá ọkọ̀ òfurufú wà níbo?',pr:'PAH-pah AW-kaw oh-foo-roo-FOO wah NEE-boh',morph:['pápá ọkọ̀ òfurufú = the airport','wà níbo? = where is it?']},
        {t:'chal',en:'Here is my passport',tr:'Èyí ni ìwé ìrìnnà mi',pr:'EH-yee nee ee-WAY ee-REEN-nah mee',morph:['èyí ni = here is','ìwé ìrìnnà mi = my passport']},
        {t:'chal',en:'A ticket, please',tr:'Tíkẹ́ẹ̀tì kan, jọ̀wọ́',pr:'tee-KEH-tee kahn, JAW-waw',morph:['tíkẹ́ẹ̀tì kan = a ticket','jọ̀wọ́ = please']},
        {t:'chal',en:'Where is the gate?',tr:'Ẹnu ọ̀nà wà níbo?',pr:'EH-noo AW-nah wah NEE-boh',morph:['ẹnu ọ̀nà = the gate','wà níbo? = where is it?']}
      ],
      blocks:['<code>pápá ọkọ̀ òfurufú</code> = airport','<code>ìwé ìrìnnà</code> = passport','<code>tíkẹ́ẹ̀tì</code> = ticket','<code>ẹnu ọ̀nà</code> = gate'] },
    { id:14, title:'The taxi', focus:'tàksí · lọ · họ́tẹ́ẹ̀lì · dúró',
      steps:[
        {t:'say',text:'The driver is waiting. <span class="inline-tr">tàksí</span> is the word you need. Tell them where to go with <span class="inline-tr">mo fẹ́ lọ</span>.',tr:'tàksí'},
        {t:'words',items:[{tr:'tàksí',pr:'TAHK-see',en:'the taxi'},{tr:'awakọ̀',pr:'ah-wah-KAW',en:'the driver'},{tr:'mo fẹ́ lọ',pr:'moh FEH law',en:'I want to go'},{tr:'dúró níbí',pr:'DOO-roh nee-BEE',en:'stop here'}]},
        {t:'chal',en:'Taxi, please',tr:'Tàksí, jọ̀wọ́',pr:'TAHK-see, JAW-waw',morph:['tàksí = taxi','jọ̀wọ́ = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'Mo fẹ́ lọ sí họ́tẹ́ẹ̀lì',pr:'moh FEH law see HOH-teh-lee',morph:['mo fẹ́ lọ = I want to go','sí họ́tẹ́ẹ̀lì = to the hotel']},
        {t:'chal',en:'Stop here, please',tr:'Dúró níbí, jọ̀wọ́',pr:'DOO-roh nee-BEE, JAW-waw',morph:['dúró níbí = stop here','jọ̀wọ́ = please']},
        {t:'chal',en:'How much is it?',tr:'Elo ni?',pr:'EH-loh nee',morph:['elo ni? = how much is it?']}
      ],
      blocks:['<code>mo fẹ́ lọ sí …</code> = I want to go to …','<code>dúró níbí</code> = stop here'] },
    { id:15, title:'The hotel', focus:'ìforúkọsílẹ̀ · yàrá · kọ́kọ́rọ́ · alẹ́',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">Mo ní ìforúkọsílẹ̀</span> — I have a reservation.',tr:'ìforúkọsílẹ̀'},
        {t:'words',items:[{tr:'họ́tẹ́ẹ̀lì',pr:'HOH-teh-lee',en:'the hotel'},{tr:'ìforúkọsílẹ̀',pr:'ee-foh-roo-kaw-SEE-leh',en:'the reservation'},{tr:'yàrá',pr:'yah-RAH',en:'the room'},{tr:'kọ́kọ́rọ́',pr:'KAW-kaw-raw',en:'the key'},{tr:'alẹ́ kan',pr:'ah-LEH kahn',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'Mo ní ìforúkọsílẹ̀',pr:'moh nee ee-foh-roo-kaw-SEE-leh',morph:['mo ní = I have','ìforúkọsílẹ̀ = a reservation']},
        {t:'chal',en:'A room for one night, please',tr:'Yàrá fún alẹ́ kan, jọ̀wọ́',pr:'yah-RAH foon ah-LEH kahn, JAW-waw',morph:['yàrá = a room','fún alẹ́ kan = for one night','jọ̀wọ́ = please']},
        {t:'chal',en:'The key, please',tr:'Kọ́kọ́rọ́, jọ̀wọ́',pr:'KAW-kaw-raw, JAW-waw',morph:['kọ́kọ́rọ́ = the key','jọ̀wọ́ = please']},
        {t:'chal',en:'Where is my room?',tr:'Yàrá mi wà níbo?',pr:'yah-RAH mee wah NEE-boh',morph:['yàrá mi = my room','wà níbo? = where is it?']}
      ],
      blocks:['<code>ìforúkọsílẹ̀</code> = reservation','<code>yàrá</code> = room','<code>kọ́kọ́rọ́</code> = key'] },
    { id:16, title:'Ask for help', focus:'mi ò ye · díẹ̀díẹ̀ · Gẹ̀ẹ́sì',
      steps:[
        {t:'say',text:'When the language is too fast: <span class="inline-tr">Díẹ̀díẹ̀, jọ̀wọ́</span> — slower, please.',tr:'Díẹ̀díẹ̀, jọ̀wọ́'},
        {t:'words',items:[{tr:'díẹ̀díẹ̀',pr:'dee-EH-dee-EH',en:'slower'},{tr:'lẹ́ẹ̀kan sí i',pr:'LEH-kahn see ee',en:'again'},{tr:'Gẹ̀ẹ́sì',pr:'GEH-see',en:'English'},{tr:'ṣé o lè ràn mí lọ́wọ́?',pr:'sheh oh leh rahn mee LAW-waw',en:'can you help?'}]},
        {t:'chal',en:'I don\'t understand',tr:'Mi ò ye',pr:'mee oh yeh',morph:['mi ò = I don\'t','ye = understand']},
        {t:'chal',en:'Slower, please',tr:'Díẹ̀díẹ̀, jọ̀wọ́',pr:'dee-EH-dee-EH, JAW-waw',morph:['díẹ̀díẹ̀ = slower','jọ̀wọ́ = please']},
        {t:'chal',en:'Can you help me?',tr:'Ṣé o lè ràn mí lọ́wọ́?',pr:'sheh oh leh rahn mee LAW-waw',morph:['ṣé o lè = can you','ràn mí lọ́wọ́ = help me']},
        {t:'chal',en:'Do you speak English?',tr:'Ṣé o ń sọ Gẹ̀ẹ́sì?',pr:'sheh oh n saw GEH-see',morph:['ṣé o ń sọ = do you speak','Gẹ̀ẹ́sì = English']}
      ],
      blocks:['<code>díẹ̀díẹ̀</code> = slower','<code>Ṣé o ń sọ Gẹ̀ẹ́sì?</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'cafe', title:'☕ At a café', emoji:'☕', turns:[
      {who:'You',tr:'Ẹ káàrọ́! Kọfí, ẹ jọ̀wọ́.',pr:'eh-KAH-raw, kaw-FEE, eh-JAW-waw',en:'Good morning! A coffee, please.'},
      {who:'Server',tr:'Kọfí tàbí tíì?',pr:'kaw-FEE TAH-bee TEE',en:'Coffee or tea?'},
      {who:'You',tr:'Kọfí, ẹ ṣé.',pr:'kaw-FEE, eh-SHEH',en:'Coffee, thank you.'},
      {who:'You',tr:'Ẹló ni?',pr:'eh-LAW nee',en:'How much is it?'},
      {who:'Server',tr:'Ẹgbẹ̀rún náírà.',pr:'eh-GBEH-roon NAH-ee-rah',en:'One thousand naira.'},
      {who:'You',tr:'Ẹ ṣé!',pr:'eh-SHEH',en:'Thank you!'}
    ]},
    { id:'transport', title:'🚌 Getting around', emoji:'🚌', turns:[
      {who:'You',tr:'Ẹ jọ̀wọ́, ibo ni ọkọ̀?',pr:'eh-JAW-waw, EE-boh nee aw-KAW',en:'Excuse me, where is the bus?'},
      {who:'Local',tr:'Níwájú, sọ́tùn.',pr:'nee-WAH-joo, SAW-toon',en:'Straight ahead, to the right.'},
      {who:'You',tr:'Ẹ ṣé. Ẹló ni?',pr:'eh-SHEH, eh-LAW nee',en:'Thank you. How much is it?'},
      {who:'Local',tr:'Igba náírà.',pr:'EEG-bah NAH-ee-rah',en:'Two hundred naira.'},
      {who:'You',tr:'Ó dàbọ̀!',pr:'aw-DAH-baw',en:'Goodbye!'}
    ]},
    { id:'restaurant', title:'🍲 At a restaurant', emoji:'🍲', turns:[
      {who:'Waiter',tr:'Ẹ káàbọ̀! Ṣé ẹ fẹ́ oúnjẹ?',pr:'eh-KAH-baw, SHEH eh FEH OON-jeh',en:'Welcome! Do you want food?'},
      {who:'You',tr:'Bẹ́ẹ̀ ni, ẹ ṣé. Mo fẹ́ oúnjẹ.',pr:'BEH-eh nee, eh-SHEH. moh FEH OON-jeh',en:'Yes, thank you. I want food.'},
      {who:'Waiter',tr:'Kí ni ẹ fẹ́?',pr:'KEE nee eh FEH',en:'What do you want?'},
      {who:'You',tr:'Mo fẹ́ omi àti búrẹ́dì.',pr:'moh FEH aw-mee AH-tee BOO-reh-dee',en:'I want water and bread.'},
      {who:'You',tr:'Ó dùn, ẹ ṣé!',pr:'aw DOON, eh-SHEH',en:'It\'s delicious, thank you!'}
    ]},
    { id:'market', title:'🛍️ At the market', emoji:'🛍️', turns:[
      {who:'You',tr:'Ẹ káàrọ́! Ẹló ni èyí?',pr:'eh-KAH-raw, eh-LAW nee EH-yee',en:'Good morning! How much is this?'},
      {who:'Seller',tr:'Ẹgbẹ̀rún náírà.',pr:'eh-GBEH-roon NAH-ee-rah',en:'One thousand naira.'},
      {who:'You',tr:'Ó wọ́n, ẹ jọ̀wọ́.',pr:'aw WON, eh-JAW-waw',en:'It\'s expensive, please.'},
      {who:'Seller',tr:'Ó dára púpọ̀!',pr:'aw DAH-rah POO-paw',en:'It\'s very good!'},
      {who:'You',tr:'Bẹ́ẹ̀ ni, mo fẹ́ èyí.',pr:'BEH-eh nee, moh FEH EH-yee',en:'Yes, I want this.'},
      {who:'Seller',tr:'Ẹ ṣé! Ó dàbọ̀.',pr:'eh-SHEH, aw-DAH-baw',en:'Thank you! Goodbye.'}
    ]}
  ],
  pocket: [
    {tr:'Ẹ káàbọ̀',pr:'eh-KAH-baw',en:'welcome',c:'Greetings'},
    {tr:'Ẹ káàrọ́',pr:'eh-KAH-raw',en:'good morning',c:'Greetings'},
    {tr:'Ẹ káàsán',pr:'eh-KAH-sahn',en:'good afternoon',c:'Greetings'},
    {tr:'Ẹ káalẹ́',pr:'eh-KAH-leh',en:'good evening',c:'Greetings'},
    {tr:'Bawo ni?',pr:'BAH-wah nee',en:'How are you?',c:'Greetings'},
    {tr:'Ó dàbọ̀',pr:'aw-DAH-baw',en:'goodbye',c:'Greetings'},
    {tr:'Orúkọ mi ni __NAME__',pr:'aw-ROO-kaw mee nee __NAME__',en:'My name is...',c:'Greetings'},
    {tr:'Ẹ ṣé',pr:'eh-SHEH',en:'thank you',c:'Courtesy'},
    {tr:'Ẹ jọ̀wọ́',pr:'eh-JAW-waw',en:'please',c:'Courtesy'},
    {tr:'Bẹ́ẹ̀ ni',pr:'BEH-eh nee',en:'yes',c:'Courtesy'},
    {tr:'Ó dára',pr:'aw DAH-rah',en:'OK / it\'s good',c:'Courtesy'},
    {tr:'ọ̀kan',pr:'AW-kahn',en:'1',c:'Numbers'},
    {tr:'èjì',pr:'EH-jee',en:'2',c:'Numbers'},
    {tr:'ẹ̀ta',pr:'EH-tah',en:'3',c:'Numbers'},
    {tr:'márùn-ún',pr:'MAH-run-oon',en:'5',c:'Numbers'},
    {tr:'mẹ́wàá',pr:'MEH-wah-ah',en:'10',c:'Numbers'},
    {tr:'omi',pr:'aw-mee',en:'water',c:'Food'},
    {tr:'búrẹ́dì',pr:'BOO-reh-dee',en:'bread',c:'Food'},
    {tr:'kọfí',pr:'kaw-FEE',en:'coffee',c:'Food'},
    {tr:'tíì',pr:'TEE',en:'tea',c:'Food'},
    {tr:'oúnjẹ',pr:'OON-jeh',en:'food',c:'Food'},
    {tr:'Ó dùn',pr:'aw DOON',en:'it\'s delicious',c:'Food'},
    {tr:'Ibo ni...?',pr:'EE-boh nee',en:'Where is...?',c:'Directions'},
    {tr:'Sọ́tùn',pr:'SAW-toon',en:'to the right',c:'Directions'},
    {tr:'Sí òsì',pr:'SEE aw-SEE',en:'to the left',c:'Directions'},
    {tr:'Níwájú',pr:'nee-WAH-joo',en:'straight ahead',c:'Directions'},
    {tr:'Ọjà',pr:'aw-JAH',en:'market',c:'Directions'},
    {tr:'Kí ni?',pr:'KEE nee',en:'what?',c:'Questions'},
    {tr:'Ẹló ni?',pr:'eh-LAW nee',en:'how much is it?',c:'Questions'},
    {tr:'Ṣé...?',pr:'SHEH',en:'is it...? (yes/no)',c:'Questions'},
    {tr:'Ta ni?',pr:'TAH nee',en:'who?',c:'Questions'},
    {tr:'ìdílé',pr:'ee-DEE-leh',en:'family',c:'People'},
    {tr:'ìyá',pr:'ee-YAH',en:'mother',c:'People'},
    {tr:'bàbá',pr:'bah-BAH',en:'father',c:'People'},
    {tr:'ọ̀rẹ́',pr:'aw-REH',en:'friend',c:'People'},
    {tr:'Ègbè!',pr:'EH-gbeh',en:'Help!',c:'Emergency'},
    {tr:'Ẹ̀ràn!',pr:'EH-rahn',en:'Fire!',c:'Emergency'},
    {tr:'Kò yé mi',pr:'KOH yeh mee',en:'I don\'t understand',c:'Emergency'},
    {tr:'Ilé ìwòsàn',pr:'EE-leh EE-waw-sahn',en:'hospital',c:'Emergency'},
    {tr:'Mo fẹ́ ìrànlọ́wọ́',pr:'moh FEH ee-rahn-LAW-waw',en:'I need help',c:'Emergency'},
    {tr:'Pápá ọkọ̀ òfurufú',pr:'PAH-pah AW-kaw oh-foo-roo-FOO',en:'the airport',c:'Travel'},
    {tr:'Ìwé ìrìnnà',pr:'ee-WAY ee-REEN-nah',en:'the passport',c:'Travel'},
    {tr:'Tíkẹ́ẹ̀tì',pr:'tee-KEH-tee',en:'the ticket',c:'Travel'},
    {tr:'Tàksí',pr:'TAHK-see',en:'the taxi',c:'Travel'},
    {tr:'Họ́tẹ́ẹ̀lì',pr:'HOH-teh-lee',en:'the hotel',c:'Travel'},
    {tr:'Mo ní ìforúkọsílẹ̀',pr:'moh nee ee-foh-roo-kaw-SEE-leh',en:'I have a reservation',c:'Travel'},
    {tr:'Díẹ̀díẹ̀, jọ̀wọ́',pr:'dee-EH-dee-EH, JAW-waw',en:'Slower, please',c:'Travel'},
    {tr:'Ṣé o ń sọ Gẹ̀ẹ́sì?',pr:'sheh oh n saw GEH-see',en:'Do you speak English?',c:'Travel'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Questions','People','Emergency','Travel'],
  culture: [
    {icon:'🗣️',title:'Tone changes the meaning',body:'Yoruba is a tone language, so the pitch of a syllable can turn one word into a different word entirely. Just like Chinese, the tune is part of the meaning. Listen to the melody and copy it — accuracy in tone is what gets you understood.'},
    {icon:'👨‍👩‍👧',title:'Family & the elders',body:'Family is at the heart of Yoruba life, and elders are treated with deep respect. Greet older people first, use the polite form, and a warm greeting is never a small thing. A single ẹ káàbọ̀ (welcome) opens doors.'},
    {icon:'🤝',title:'The honorific ẹ',body:'Yoruba has two forms of "you": ẹ (polite / plural) and o (informal). Use ẹ with elders, strangers and anyone you don\'t know well. It\'s baked right into words like ẹ ṣé (thank you) and ẹ jọ̀wọ́ (please).'},
    {icon:'🎵',title:'Say it with music',body:'Tones make Yoruba sound musical. Add nasal vowels (an, ẹn, ọ) and distinctive sounds like gb and ṣ and you get a wonderful rhythm. Don\'t chase perfection — just keep the tune and you\'ll be understood.'},
    {icon:'🍲',title:'Food is shared',body:'Meals in Yoruba homes are communal. A typical plate brings together pounded yam (iyán) or a swallow like fufu with a rich soup (ọbẹ̀) and meat or fish, often eaten together by hand. Saying ẹ ṣé for what you\'re given shows warmth.'},
    {icon:'✍️',title:'Names mean something',body:'Yoruba names often carry a whole sentence of meaning. Ayọ̀ = joy, Àdé = crown, Túndé = a son returns home. When you introduce yourself with "orúkọ mi ni __NAME__", you\'re joining a deep and beautiful naming tradition.'}
  ],
  sounds: [
    {l:'a',say:'mid tone: level and unmarked, the default',ex:'bawo = how',voice:'bawo'},
    {l:'á',say:'high tone: sharp, at the top of your pitch',ex:'náà = it (emphatic)',voice:'náà'},
    {l:'à',say:'low tone: deep and relaxed, the pitch drops',ex:'òsì = left',voice:'òsì'},
    {l:'ẹ',say:'open "e" as in "set", tongue low',ex:'ẹ ṣé = thank you',voice:'ẹ ṣé'},
    {l:'ọ',say:'open "o" as in "hot", not "go"',ex:'ọjà = market',voice:'ọjà'},
    {l:'gb',say:'say "g" and "b" together as one sound',ex:'gbóná = hot',voice:'gbóná'},
    {l:'ṣ',say:'like "sh" in "shop"',ex:'ṣé...? = is it...?',voice:'ṣé'},
    {l:'n',say:'nasal vowel: let the sound go through your nose',ex:'ọnà = way / path',voice:'ọnà'}
  ],
  resources: [
    {icon:'🗣️',t:'Yoruba for beginners',d:'Slow, clear videos with subtitles from native speakers to train your ear on tones.',q:'Yoruba lessons for beginners'},
    {icon:'🎙️',t:'Learn Yoruba with music',d:'Songs and chants make tones and rhythm much easier to remember.',q:'learn Yoruba with music'},
    {icon:'📚',t:'Yoruba conversation practice',d:'Everyday dialogues showing how greetings and phrases really sound.',q:'Yoruba conversation practice'},
    {icon:'🌍',t:'Yoruba alphabet & sounds',d:'The alphabet, tones and sounds — a great starting point for reading Yoruba.',q:'Yoruba alphabet tones sounds'},
    {icon:'💬',t:'Speak Yoruba with natives',d:'Real speakers and everyday talk to build confidence fast.',q:'speak Yoruba native speakers'}
  ]
};
