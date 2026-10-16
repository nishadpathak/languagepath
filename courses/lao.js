/* ---- lao ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["lao"] = {
  name: 'Lao',
  flag: '🇱🇦',
  tts: 'lo-LA',
  dir: 'ltr',
  native: 'ລາວ',
  soundTitle: 'Lao sounds & tones',
  soundIntro: 'Lao is a tonal language with its own alphabet — a close cousin of Thai script. Learn a few key letters and the six tones and you can sound out most words on a sign.',
  grammar: '<p>Lao is a wonderfully beginner-friendly language: no articles, no plurals, no verb endings, and no gender. Word order is subject-verb-object, just like English, so ຂ້ອຍ (I) + ຢາກ (want) + ກາເຟ (coffee) = ຂ້ອຍຢາກກາເຟ (I want coffee). You often make a yes/no question by simply adding ບໍ່ (baw) at the end. The one real challenge is the <b>six tones</b>, which change a word\'s meaning — but context, a smile, and the catchphrase ບໍ່ເປັນຫຍັງ (baw pen yang, "no problem") get you far.</p>',
  bridges: '<div class="note">🇹🇭 <b>Thai.</b> Lao and Thai are close cousins. If you know any Thai you already know a lot of Lao: ນ້ຳ/น้ำ (water), ເຂົ້າ/ข้าว (rice), ກາເຟ/กาแฟ (coffee), ສະຖານີ/สถานี (station). A Thai speaker picks up Lao especially fast — the scripts and a huge amount of vocabulary line up.</div><div class="note">🎵 <b>Tones.</b> Lao is tonal, so this pack\'s romanization tells you how to say the word, but the tones come from the sounds section. Don\'t overthink it — context and a friendly tone beat perfect pitch.</div>',
  lessons: [
    { id:1, title:'Greetings — ສະບາຍດີ', focus:'sabaidee · sabaidee baw · laa kon',
      steps:[
        {t:'say',text:'The very first word you\'ll use: <span class="inline-tr">ສະບາຍດີ</span> — sabaidee — hello (and goodbye). Say it out loud.',tr:'ສະບາຍດີ'},
        {t:'words',items:[{tr:'ສະບາຍດີ',pr:'sa-baai-dee',en:'hello / goodbye'},{tr:'ສະບາຍດີບໍ່',pr:'sa-baai-dee baw',en:'How are you?'},{tr:'ຂ້ອຍສະບາຍດີ',pr:'khoy sa-baai-dee',en:'I\'m fine / well'},{tr:'ລາກ່ອນ',pr:'laa kon',en:'goodbye',link:'≈ Thai ลาก่อน'}]},
        {t:'chal',en:'Hello, how are you?',tr:'ສະບາຍດີ, ສະບາຍດີບໍ່',pr:'sa-baai-dee, sa-baai-dee baw',morph:['ສະບາຍດີ = hello','ສະບາຍດີບໍ່ = how are you?']},
        {t:'say',text:'The little word <span class="inline-tr">ບໍ່</span> (baw) at the end turns a statement into a yes/no question. It\'s the same trick as Thai\'s ไหม (mai). It also means "no" or "not".',tr:'ບໍ່'},
        {t:'chal',en:'I\'m fine, thanks',tr:'ຂ້ອຍສະບາຍດີ, ຂອບໃຈ',pr:'khoy sa-baai-dee, khawp jai',morph:['ຂ້ອຍ = I','ສະບາຍດີ = well','ຂອບໃຈ = thank you']}
      ],
      blocks:['<code>ສະບາຍດີ</code> = hello','<code>ສະບາຍດີບໍ່</code> = how are you?','<code>ບໍ່</code> = no / question particle'] },
    { id:2, title:'Being polite', focus:'khawp jai · kaluna · baw pen yang',
      steps:[
        {t:'say',text:'Thank you is <span class="inline-tr">ຂອບໃຈ</span> — khawp jai. Literally "accept the heart", the same idea as Thai ขอบใจ.',tr:'ຂອບໃຈ'},
        {t:'words',items:[{tr:'ຂອບໃຈ',pr:'khawp jai',en:'thank you',link:'≈ Thai ขอบใจ'},{tr:'ຂອບໃຈຫຼາຍໆ',pr:'khawp jai lai lai',en:'thanks a lot'},{tr:'ກະລຸນາ',pr:'ka-lu-naa',en:'please',link:'≈ Thai กรุณາ'},{tr:'ບໍ່ເປັນຫຍັງ',pr:'baw pen yang',en:'no problem / you\'re welcome',link:'≈ Thai ไม่เป็นไร'}]},
        {t:'chal',en:'Thanks a lot!',tr:'ຂອບໃຈຫຼາຍໆ!',pr:'khawp jai lai lai',morph:['ຂອບໃຈ = thank you','ຫຼາຍໆ = a lot']},
        {t:'say',text:'Please, before a request, is <span class="inline-tr">ກະລຸນາ</span> — kaluna. It\'s a polished book-word borrowed from Pali/Sanskrit.',tr:'ກະລຸນາ'},
        {t:'chal',en:'A coffee, please',tr:'ກາເຟ, ກະລຸນາ',pr:'ka-fae, ka-lu-naa',morph:['ກາເຟ = coffee','ກະລຸນາ = please']},
        {t:'say',text:'For "you\'re welcome", Lao people usually say <span class="inline-tr">ບໍ່ເປັນຫຍັງ</span> — baw pen yang — "no problem". It\'s the country\'s favourite phrase.',tr:'ບໍ່ເປັນຫຍັງ'}
      ],
      blocks:['<code>ຂອບໃຈ</code> = thank you','<code>ກະລຸນາ</code> = please','<code>ບໍ່ເປັນຫຍັງ</code> = you\'re welcome'] },
    { id:3, title:'Numbers 1–10', focus:'nung · song · sam · sip',
      steps:[
        {t:'say',text:'Numbers are the fastest win. Listen and repeat: <span class="inline-tr">ໜຶ່ງ, ສອງ, ສາມ</span> — one, two, three.',tr:'ໜຶ່ງ'},
        {t:'words',items:[{tr:'ໜຶ່ງ',pr:'nung',en:'1',link:'≈ Thai หนึ่ง'},{tr:'ສອງ',pr:'song',en:'2',link:'≈ Thai สอง'},{tr:'ສາມ',pr:'sam',en:'3',link:'≈ Thai สาม'},{tr:'ສີ່',pr:'sii',en:'4'},{tr:'ຫ້າ',pr:'haa',en:'5'},{tr:'ສິບ',pr:'sip',en:'10',link:'≈ Thai สิบ'}]},
        {t:'chal',en:'Two coffees, please',tr:'ກາເຟສອງ, ກະລຸນາ',pr:'ka-fae song, ka-lu-naa',morph:['ກາເຟ = coffee','ສອງ = two','ກະລຸນາ = please']},
        {t:'say',text:'To ask the price: <span class="inline-tr">ລາຄາເທົ່າໃດ?</span> — laakha thao dai — "how much is it?". ລາຄາ (laakha) = price, ເທົ່າໃດ (thao dai) = how much.',tr:'ລາຄາເທົ່າໃດ?'},
        {t:'chal',en:'How much is it?',tr:'ລາຄາເທົ່າໃດ?',pr:'laa-khaa thao dai',morph:['ລາຄາ = price','ເທົ່າໃດ = how much']},
        {t:'chal',en:'It\'s five thousand kip',tr:'ຫ້າພັນກີບ',pr:'haa phan kip',morph:['ຫ້າ = five','ພັນ = thousand','ກີບ = kip (Lao money)']}
      ],
      blocks:['ໜຶ່ງ, ສອງ, ສາມ = 1–3','<code>ລາຄາເທົ່າໃດ?</code> = how much is it?'] },
    { id:4, title:'"I want" — ຂ້ອຍຢາກ', focus:'khoy yaak · khoy baw yaak',
      steps:[
        {t:'say',text:'To order anything, say <span class="inline-tr">ຂ້ອຍຢາກ</span> — khoy yaak — "I want". Word-for-word it\'s ຂ້ອຍ (I) + ຢາກ (want).',tr:'ຂ້ອຍຢາກ'},
        {t:'words',items:[{tr:'ຂ້ອຍ',pr:'khoy',en:'I'},{tr:'ຢາກ',pr:'yaak',en:'want'},{tr:'ກາເຟ',pr:'ka-fae',en:'coffee'},{tr:'ນ້ຳ',pr:'nam',en:'water'}]},
        {t:'chal',en:'I want a coffee',tr:'ຂ້ອຍຢາກກາເຟ',pr:'khoy yaak ka-fae',morph:['ຂ້ອຍ = I','ຢາກ = want','ກາເຟ = coffee']},
        {t:'chal',en:'I want water',tr:'ຂ້ອຍຢາກນ້ຳ',pr:'khoy yaak nam',morph:['ຂ້ອຍ = I','ຢາກ = want','ນ້ຳ = water']},
        {t:'say',text:'To say "no / not", put <span class="inline-tr">ບໍ່</span> (baw) before the verb: ຂ້ອຍບໍ່ຢາກ = I don\'t want.',tr:'ຂ້ອຍບໍ່ຢາກ'},
        {t:'chal',en:'I don\'t want it',tr:'ຂ້ອຍບໍ່ຢາກ',pr:'khoy baw yaak',morph:['ຂ້ອຍ = I','ບໍ່ = not','ຢາກ = want']}
      ],
      blocks:['<code>ຂ້ອຍຢາກ</code> = I want','<code>ຂ້ອຍບໍ່ຢາກ</code> = I don\'t want'] },
    { id:5, title:'Food & drink', focus:'nam · khao · ka-fae · saa',
      steps:[
        {t:'say',text:'Eating in Laos? Key words: <span class="inline-tr">ເຂົ້າ</span> (khao, rice — it also means "to eat") and <span class="inline-tr">ນ້ຳ</span> (nam, water).',tr:'ເຂົ້າ'},
        {t:'words',items:[{tr:'ນ້ຳ',pr:'nam',en:'water',link:'≈ Thai น้ำ'},{tr:'ເຂົ້າ',pr:'khao',en:'rice',link:'≈ Thai ข้าว'},{tr:'ກາເຟ',pr:'ka-fae',en:'coffee',link:'≈ Thai กาแฟ'},{tr:'ຊາ',pr:'saa',en:'tea',link:'≈ Thai ชา'},{tr:'ເບຍ',pr:'bia',en:'beer',link:'≈ Thai เบียร์'}]},
        {t:'chal',en:'Water, please',tr:'ນ້ຳ, ກະລຸນາ',pr:'nam, ka-lu-naa',morph:['ນ້ຳ = water','ກະລຸນາ = please']},
        {t:'chal',en:'I want coffee',tr:'ຂ້ອຍຢາກກາເຟ',pr:'khoy yaak ka-fae',morph:['ຂ້ອຍຢາກ = I want','ກາເຟ = coffee']},
        {t:'say',text:'Delicious is <span class="inline-tr">ແຊບ</span> — saep. Say it and you\'ll make the cook\'s whole day.',tr:'ແຊບ'},
        {t:'chal',en:'Delicious!',tr:'ແຊບ!',pr:'saep',morph:['ແຊບ = delicious']}
      ],
      blocks:['<code>ນ້ຳ</code>, <code>ເຂົ້າ</code> = water, rice','<code>ກາເຟ</code>, <code>ຊາ</code> = coffee, tea','<code>ແຊບ</code> = delicious'] },
    { id:6, title:'Getting around', focus:'bong dai · khwaa · saai · sa-thaa-nii',
      steps:[
        {t:'say',text:'The most useful question in any town: <span class="inline-tr">ບ່ອນໃດ?</span> — bong dai? — where? In full it\'s ຢູ່ໃສ? (yu sai?).',tr:'ບ່ອນໃດ?'},
        {t:'words',items:[{tr:'ບ່ອນໃດ?',pr:'bong dai',en:'where?'},{tr:'ຂວາ',pr:'khwaa',en:'right'},{tr:'ຊ້າຍ',pr:'saai',en:'left'},{tr:'ສະຖານີ',pr:'sa-thaa-nii',en:'the station',link:'≈ Thai สถานี'},{tr:'ຫ້ອງນ້ຳ',pr:'hong nam',en:'the bathroom',link:'≈ Thai ห้องน้ำ'}]},
        {t:'chal',en:'Where is the station?',tr:'ສະຖານີຢູ່ໃສ?',pr:'sa-thaa-nii yu sai',morph:['ສະຖານີ = station','ຢູ່ໃສ = where is']},
        {t:'chal',en:'Where is the bathroom?',tr:'ຫ້ອງນ້ຳຢູ່ໃສ?',pr:'hong nam yu sai',morph:['ຫ້ອງນ້ຳ = bathroom','ຢູ່ໃສ = where is']},
        {t:'say',text:'<span class="inline-tr">ຂວາ</span> (khwaa) = right, <span class="inline-tr">ຊ້າຍ</span> (saai) = left. "Straight ahead" is <span class="inline-tr">ກົງ</span> (kong).',tr:'ກົງ'},
        {t:'chal',en:'Go straight',tr:'ໄປກົງ',pr:'pai kong',morph:['ໄປ = go','ກົງ = straight']}
      ],
      blocks:['<code>ບ່ອນໃດ?</code> = where?','<code>ຂວາ</code> / <code>ຊ້າຍ</code> = right / left','<code>ໄປກົງ</code> = go straight'] },
    { id:7, title:'Questions & "is there…?"', focus:'mii · thao dai · baw',
      steps:[
        {t:'say',text:'The verb <span class="inline-tr">ມີ</span> (mii) means "there is / have". Ask if something exists with ມີ...ບໍ່?',tr:'ມີ'},
        {t:'words',items:[{tr:'ມີ',pr:'mii',en:'there is / have',link:'≈ Thai มี'},{tr:'ບໍ່ມີ',pr:'baw mii',en:'there isn\'t / don\'t have'},{tr:'ເທົ່າໃດ',pr:'thao dai',en:'how much / how many'}]},
        {t:'chal',en:'Do you have a table?',tr:'ມີໂຕະບໍ່?',pr:'mii toh baw',morph:['ມີ = have','ໂຕະ = table','ບໍ່ = question particle']},
        {t:'say',text:'For prices, the phrase is <span class="inline-tr">ລາຄາເທົ່າໃດ?</span> — laakha thao dai? — "how much is it?". We met it in numbers.',tr:'ລາຄາເທົ່າໃດ?'},
        {t:'chal',en:'How much is it?',tr:'ລາຄາເທົ່າໃດ?',pr:'laa-khaa thao dai',morph:['ລາຄາ = price','ເທົ່າໃດ = how much']},
        {t:'chal',en:'Is there a bathroom?',tr:'ມີຫ້ອງນ້ຳບໍ່?',pr:'mii hong nam baw',morph:['ມີ = is there','ຫ້ອງນ້ຳ = bathroom','ບໍ່ = question particle']}
      ],
      blocks:['<code>ມີ</code> = there is / have','<code>ລາຄາເທົ່າໃດ?</code> = how much?','<code>ບໍ່</code> = question particle'] },
    { id:8, title:'Family & people', focus:'khob-khua · mae · pho · phuean',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">ຄອບຄົວ</span> (khob-khua, family), <span class="inline-tr">ແມ່</span> (mae, mother), <span class="inline-tr">ພໍ່</span> (pho, father).',tr:'ຄອບຄົວ'},
        {t:'words',items:[{tr:'ຄອບຄົວ',pr:'khob-khua',en:'family',link:'≈ Thai ครอบครัว'},{tr:'ແມ່',pr:'mae',en:'mother'},{tr:'ພໍ່',pr:'pho',en:'father'},{tr:'ອ້າຍ',pr:'aai',en:'older brother'},{tr:'ເອື້ອຍ',pr:'euai',en:'older sister'},{tr:'ເພື່ອນ',pr:'phuean',en:'friend',link:'≈ Thai เพื่อน'}]},
        {t:'chal',en:'I have a friend',tr:'ຂ້ອຍມີເພື່ອນ',pr:'khoy mii phuean',morph:['ຂ້ອຍ = I','ມີ = have','ເພື່ອນ = friend']},
        {t:'say',text:'<span class="inline-tr">ມີ</span> (mii) = "have". So ຂ້ອຍມີ... = "I have...". Drop a number after a noun: ຂ້ອຍມີເພື່ອນສອງ = I have two friends.',tr:'ຂ້ອຍມີ'},
        {t:'chal',en:'I have a family',tr:'ຂ້ອຍມີຄອບຄົວ',pr:'khoy mii khob-khua',morph:['ຂ້ອຍ = I','ມີ = have','ຄອບຄົວ = family']}
      ],
      blocks:['<code>ແມ່</code> / <code>ພໍ່</code> = mother / father','<code>ເພື່ອນ</code> = friend','<code>ຂ້ອຍມີ</code> = I have'] },
    { id:9, title:'Time & weather', focus:'muu nii · muu uen · a-kaat',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">ມື້ນີ້</span> (muu nii), tomorrow is <span class="inline-tr">ມື້ອື່ນ</span> (muu uen).',tr:'ມື້ນີ້'},
        {t:'words',items:[{tr:'ມື້ນີ້',pr:'muu nii',en:'today'},{tr:'ມື້ອື່ນ',pr:'muu uen',en:'tomorrow'},{tr:'ອາກາດ',pr:'a-kaat',en:'weather',link:'≈ Thai อากาศ'},{tr:'ຝົນ',pr:'fon',en:'rain',link:'≈ Thai ฝน'}]},
        {t:'chal',en:'See you tomorrow',tr:'ພົບກັນມື້ອື່ນ',pr:'phop kan muu uen',morph:['ພົບກັນ = see each other','ມື້ອື່ນ = tomorrow']},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">ອາກາດເປັນແນວໃດ?</span> — a-kaat pen naew dai? — "how\'s the weather?".',tr:'ອາກາດເປັນແນວໃດ?'},
        {t:'chal',en:'It\'s hot',tr:'ອາກາດຮ້ອນ',pr:'a-kaat hon',morph:['ອາກາດ = weather','ຮ້ອນ = hot']},
        {t:'say',text:'Hot is <span class="inline-tr">ຮ້ອນ</span> (hon), cold is <span class="inline-tr">ເຢັນ</span> (yen).',tr:'ເຢັນ'}
      ],
      blocks:['<code>ມື້ນີ້</code> / <code>ມື້ອື່ນ</code> = today / tomorrow','<code>ອາກາດ</code> = weather','<code>ຮ້ອນ</code> / <code>ເຢັນ</code> = hot / cold'] },
    { id:10, title:'Your name — ຂ້ອຍຊື່', focus:'khoy suu · jao suu yang',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">ຂ້ອຍຊື່…</span> — khoy suu… — "my name is…". ຊື່ (suu) = name.',tr:'ຂ້ອຍຊື່'},
        {t:'chal',en:'My name is __NAME__',tr:'ຂ້ອຍຊື່ __NAME__',pr:'khoy suu __NAME__',morph:['ຂ້ອຍ = I','ຊື່ = name','__NAME__ = your name']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">ເຈົ້າຊື່ຫຍັງ?</span> — jao suu yang? — "what\'s your name?". ເຈົ້າ (jao) = you, ຫຍັງ (yang) = what.',tr:'ເຈົ້າຊື່ຫຍັງ?'},
        {t:'chal',en:'What\'s your name?',tr:'ເຈົ້າຊື່ຫຍັງ?',pr:'jao suu yang',morph:['ເຈົ້າ = you','ຊື່ = name','ຫຍັງ = what']},
        {t:'say',text:'<span class="inline-tr">ເຈົ້າ</span> (jao) is the friendly "you" for a peer or friend. Lao often makes things polite through the right pronoun and a warm tone rather than extra words.',tr:'ເຈົ້າ'},
        {t:'chal',en:'Nice to meet you',tr:'ຍິນດີທີ່ໄດ້ຮູ້ຈັກ',pr:'nyin dii thii dai hu-jak',morph:['ຍິນດີ = glad','ຮູ້ຈັກ = to know (someone)']}
      ],
      blocks:['<code>ຂ້ອຍຊື່…</code> = my name is…','<code>ເຈົ້າຊື່ຫຍັງ?</code> = what\'s your name?','<code>ຍິນດີ</code> = nice to meet you'] },
    { id:11, title:'Health & emergency', focus:'suay duay · thaan mo · baw khao jai',
      steps:[
        {t:'say',text:'If you need help, shout <span class="inline-tr">ຊ່ວຍ!</span> — suay! — help! Or the fuller ຊ່ວຍດ້ວຍ! (suay duay!).',tr:'ຊ່ວຍ!'},
        {t:'words',items:[{tr:'ຊ່ວຍດ້ວຍ!',pr:'suay duay',en:'help!'},{tr:'ທ່ານຫມໍ',pr:'thaan mo',en:'the doctor',link:'≈ Thai หมอ'},{tr:'ຫ້ອງນ້ຳ',pr:'hong nam',en:'the bathroom',link:'≈ Thai ห้องน้ำ'},{tr:'ບໍ່ເຂົ້າໃຈ',pr:'baw khao jai',en:'I don\'t understand',link:'≈ Thai ไม่เข้าใจ'}]},
        {t:'chal',en:'Help!',tr:'ຊ່ວຍດ້ວຍ!',pr:'suay duay',morph:['ຊ່ວຍ = help','ດ້ວຍ = please (softener)']},
        {t:'chal',en:'I don\'t understand',tr:'ຂ້ອຍບໍ່ເຂົ້າໃຈ',pr:'khoy baw khao jai',morph:['ຂ້ອຍ = I','ບໍ່ = not','ເຂົ້າໃຈ = understand']},
        {t:'say',text:'To say you need help: <span class="inline-tr">ຂ້ອຍຕ້ອງການຄວາມຊ່ວຍເຫຼືອ</span> — khoy tong kaan khuaam suay luea — "I need help".',tr:'ຂ້ອຍຕ້ອງການຄວາມຊ່ວຍເຫຼືອ'}
      ],
      blocks:['<code>ຊ່ວຍດ້ວຍ!</code> = help!','<code>ທ່ານຫມໍ</code> = the doctor','<code>ບໍ່ເຂົ້າໃຈ</code> = I don\'t understand'] },
    { id:12, title:'Tying it together', focus:'a capstone day out in Lao',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolbox. This capstone uses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello, how are you?',tr:'ສະບາຍດີ, ສະບາຍດີບໍ່',pr:'sa-baai-dee, sa-baai-dee baw',morph:['ສະບາຍດີ = hello','ສະບາຍດີບໍ່ = how are you?']},
        {t:'chal',en:'I want water, please',tr:'ຂ້ອຍຢາກນ້ຳ, ກະລຸນາ',pr:'khoy yaak nam, ka-lu-naa',morph:['ຂ້ອຍຢາກ = I want','ນ້ຳ = water','ກະລຸນາ = please']},
        {t:'chal',en:'Where is the station?',tr:'ສະຖານີຢູ່ໃສ?',pr:'sa-thaa-nii yu sai',morph:['ສະຖານີ = station','ຢູ່ໃສ = where is']},
        {t:'chal',en:'How much is it?',tr:'ລາຄາເທົ່າໃດ?',pr:'laa-khaa thao dai',morph:['ລາຄາ = price','ເທົ່າໃດ = how much']},
        {t:'chal',en:'Delicious! Thank you!',tr:'ແຊບ! ຂອບໃຈ!',pr:'saep! khawp jai!',morph:['ແຊບ = delicious','ຂອບໃຈ = thank you']}
      ],
      blocks:['You built: greetings, ordering, directions, prices, thanks — a full day out in Lao.'] },
    { id:13, title:'Airport & tickets', focus:'ສະໜາມບິນ · ໜັງສືຜ່ານແດນ · ປີ້ · ປະຕູ',
      steps:[
        {t:'say',text:'You have landed. The building is the <span class="inline-tr">ສະໜາມບິນ</span> — sa-naam bin. Your document is a <span class="inline-tr">ໜັງສືຜ່ານແດນ</span>.',tr:'ສະໜາມບິນ'},
        {t:'words',items:[{tr:'ສະໜາມບິນ',pr:'sa-naam bin',en:'airport'},{tr:'ໜັງສືຜ່ານແດນ',pr:'nang-seu phan daen',en:'passport'},{tr:'ປີ້',pr:'pii',en:'ticket'},{tr:'ປະຕູ',pr:'pa-tuu',en:'gate / door'}]},
        {t:'chal',en:'Where is the airport?',tr:'ສະໜາມບິນຢູ່ໃສ?',pr:'sa-naam bin yu sai',morph:['ສະໜາມບິນ = airport','ຢູ່ໃສ = where is']},
        {t:'chal',en:'Here is my passport',tr:'ນີ້ໜັງສືຜ່ານແດນຂອງຂ້ອຍ',pr:'nii nang-seu phan daen khong khoy',morph:['ນີ້ = this','ໜັງສືຜ່ານແດນ = passport','ຂອງຂ້ອຍ = of mine']},
        {t:'chal',en:'A ticket, please',tr:'ປີ້, ກະລຸນາ',pr:'pii, ka-lu-naa',morph:['ປີ້ = ticket','ກະລຸນາ = please']},
        {t:'chal',en:'Where is the gate?',tr:'ປະຕູຢູ່ໃສ?',pr:'pa-tuu yu sai',morph:['ປະຕູ = gate','ຢູ່ໃສ = where is']}
      ],
      blocks:['<code>ສະໜາມບິນ</code> = airport','<code>ໜັງສືຜ່ານແດນ</code> = passport','<code>ປີ້</code> = ticket'] },
    { id:14, title:'The taxi', focus:'ລົດແທັກຊີ · ໄປ · ໂຮງແຮມ · ຢຸດ',
      steps:[
        {t:'say',text:'The driver is waiting. <span class="inline-tr">ລົດແທັກຊີ</span> — lot taek-sii. Tell them <span class="inline-tr">ໄປໂຮງແຮມ</span>.',tr:'ລົດແທັກຊີ'},
        {t:'words',items:[{tr:'ລົດແທັກຊີ',pr:'lot taek-sii',en:'taxi'},{tr:'ຂັບ',pr:'khap',en:'driver / to drive'},{tr:'ຂ້ອຍຢາກໄປ',pr:'khoy yaak pai',en:'I want to go'},{tr:'ຢຸດທີ່ນີ້',pr:'yut thii nii',en:'stop here'}]},
        {t:'chal',en:'Taxi, please',tr:'ລົດແທັກຊີ, ກະລຸນາ',pr:'lot taek-sii, ka-lu-naa',morph:['ລົດແທັກຊີ = taxi','ກະລຸນາ = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'ຂ້ອຍຢາກໄປໂຮງແຮມ',pr:'khoy yaak pai hong haem',morph:['ຂ້ອຍຢາກ = I want','ໄປ = to go','ໂຮງແຮມ = hotel']},
        {t:'chal',en:'Stop here, please',tr:'ຢຸດທີ່ນີ້, ກະລຸນາ',pr:'yut thii nii, ka-lu-naa',morph:['ຢຸດ = stop','ທີ່ນີ້ = here','ກະລຸນາ = please']},
        {t:'chal',en:'How much is it?',tr:'ລາຄາເທົ່າໃດ?',pr:'laa-khaa thao dai',morph:['ລາຄາ = price','ເທົ່າໃດ = how much']}
      ],
      blocks:['<code>ຂ້ອຍຢາກໄປ…</code> = I want to go to …','<code>ຢຸດທີ່ນີ້</code> = stop here'] },
    { id:15, title:'The hotel', focus:'ຈອງ · ຫ້ອງ · ກະແຈ · ຄືນ',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">ຂ້ອຍຈອງໄວ້ແລ້ວ</span> — I have a reservation.',tr:'ຈອງ'},
        {t:'words',items:[{tr:'ໂຮງແຮມ',pr:'hong haem',en:'hotel'},{tr:'ຈອງ',pr:'jawng',en:'reservation / to book'},{tr:'ຫ້ອງ',pr:'hong',en:'room'},{tr:'ກະແຈ',pr:'ka-jae',en:'key'},{tr:'ໜຶ່ງຄືນ',pr:'nung kheun',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'ຂ້ອຍຈອງໄວ້ແລ້ວ',pr:'khoy jawng wai laew',morph:['ຂ້ອຍ = I','ຈອງໄວ້ = booked','ແລ້ວ = already']},
        {t:'chal',en:'A room for one night, please',tr:'ຫ້ອງໜຶ່ງຄືນ, ກະລຸນາ',pr:'hong nung kheun, ka-lu-naa',morph:['ຫ້ອງ = room','ໜຶ່ງຄືນ = one night','ກະລຸນາ = please']},
        {t:'chal',en:'The key, please',tr:'ກະແຈ, ກະລຸນາ',pr:'ka-jae, ka-lu-naa',morph:['ກະແຈ = key','ກະລຸນາ = please']},
        {t:'chal',en:'Where is my room?',tr:'ຫ້ອງຂອງຂ້ອຍຢູ່ໃສ?',pr:'hong khong khoy yu sai',morph:['ຫ້ອງຂອງຂ້ອຍ = my room','ຢູ່ໃສ = where is']}
      ],
      blocks:['<code>ຈອງ</code> = reservation','<code>ຫ້ອງ</code> = room','<code>ກະແຈ</code> = key'] },
    { id:16, title:'Ask for help', focus:'ບໍ່ເຂົ້າໃຈ · ເວົ້າ ຊ້າ · ອັງກິດ',
      steps:[
        {t:'say',text:'When Lao is too fast: <span class="inline-tr">ເວົ້າຊ້າໆ, ກະລຸນາ</span> — speak slowly, please.',tr:'ເວົ້າຊ້າໆ'},
        {t:'words',items:[{tr:'ເວົ້າຊ້າໆ',pr:'wao saa saa',en:'speak slowly'},{tr:'ອີກຄັ້ງ',pr:'eek khang',en:'again'},{tr:'ພາສາອັງກິດ',pr:'phaa-saa ang-kit',en:'English'},{tr:'ຊ່ວຍໄດ້ບໍ່?',pr:'suay dai baw',en:'can you help?'}]},
        {t:'chal',en:'I don\'t understand',tr:'ຂ້ອຍບໍ່ເຂົ້າໃຈ',pr:'khoy baw khao jai',morph:['ຂ້ອຍ = I','ບໍ່ = not','ເຂົ້າໃຈ = understand']},
        {t:'chal',en:'Speak slowly, please',tr:'ເວົ້າຊ້າໆ, ກະລຸນາ',pr:'wao saa saa, ka-lu-naa',morph:['ເວົ້າ = speak','ຊ້າໆ = slowly','ກະລຸນາ = please']},
        {t:'chal',en:'Can you help me?',tr:'ຊ່ວຍຂ້ອຍໄດ້ບໍ່?',pr:'suay khoy dai baw',morph:['ຊ່ວຍ = help','ຂ້ອຍ = me','ໄດ້ບໍ່ = can you?']},
        {t:'chal',en:'Do you speak English?',tr:'ເຈົ້າເວົ້າພາສາອັງກິດບໍ່?',pr:'jao wao phaa-saa ang-kit baw',morph:['ເຈົ້າ = you','ເວົ້າ = speak','ພາສາອັງກິດ = English','ບໍ່ = question']}
      ],
      blocks:['<code>ເວົ້າຊ້າໆ</code> = speak slowly','<code>ເຈົ້າເວົ້າພາສາອັງກິດບໍ່?</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'cafe', title:'☕ At a café', emoji:'☕', turns:[
      {who:'You',tr:'ສະບາຍດີ! ກາເຟ, ກະລຸນາ.',pr:'sa-baai-dee! ka-fae, ka-lu-naa',en:'Hello! A coffee, please.'},
      {who:'Barista',tr:'ເອົາກັບບໍ່?',pr:'ao kap baw',en:'Is that to go?'},
      {who:'You',tr:'ເອົາກັບ, ຂອບໃຈ.',pr:'ao kap, khawp jai',en:'To go, thanks.'},
      {who:'Barista',tr:'ເອົາ. ສອງໝື່ນກີບ.',pr:'ao. song meun kip',en:'Here. That\'s twenty thousand kip.'},
      {who:'You',tr:'ຂອບໃຈຫຼາຍໆ!',pr:'khawp jai lai lai',en:'Thanks a lot!'}
    ]},
    { id:'transport', title:'🚉 At the station', emoji:'🚉', turns:[
      {who:'You',tr:'ຂໍໂທດ, ສະຖານີຢູ່ໃສ?',pr:'kho toot, sa-thaa-nii yu sai',en:'Excuse me, where\'s the station?'},
      {who:'Local',tr:'ຢູ່ທາງຂວາ.',pr:'yu thaang khwaa',en:'It\'s over on the right.'},
      {who:'You',tr:'ຂອບໃຈ. ປີ້ລົດໄຟ, ກະລຸນາ.',pr:'khawp jai. pii lot-fai, ka-lu-naa',en:'Thanks. A train ticket, please.'},
      {who:'Clerk',tr:'ສາມໝື່ນກີບ. ລົດໄຟອອກເກົ້າໂມງ.',pr:'saam meun kip. lot-fai ok kao mong',en:'Thirty thousand kip. The train leaves at nine.'}
    ]},
    { id:'restaurant', title:'🍜 At a restaurant', emoji:'🍜', turns:[
      {who:'Waiter',tr:'ສະບາຍດີ! ກິນຫຍັງແດ່?',pr:'sa-baai-dee! kin yang dae',en:'Hello! What would you like to eat?'},
      {who:'You',tr:'ເຂົ້າໜຽວ ແລະ ຕຳຫຼາກ, ກະລຸນາ.',pr:'khao niaw lae tam mak, ka-lu-naa',en:'Sticky rice and papaya salad, please.'},
      {who:'Waiter',tr:'ເອົານ້ຳບໍ່?',pr:'ao nam baw',en:'Would you like some water?'},
      {who:'You',tr:'ເອົາ, ຂອບໃຈ.',pr:'ao, khawp jai',en:'Yes, thanks.'},
      {who:'Waiter',tr:'ແຊບບໍ່?',pr:'saep baw',en:'Is it delicious?'},
      {who:'You',tr:'ແຊບຫຼາຍ!',pr:'saep lai',en:'Very delicious!'}
    ]},
    { id:'market', title:'🛍️ At the market', emoji:'🛍️', turns:[
      {who:'You',tr:'ອັນນີ້ລາຄາເທົ່າໃດ?',pr:'an nii laa-khaa thao dai',en:'How much is this?'},
      {who:'Seller',tr:'ໜຶ່ງໝື່ນກີບ.',pr:'nung meun kip',en:'Ten thousand kip.'},
      {who:'You',tr:'ລາຄາແພງເກີນໄປ.',pr:'laa-khaa phaeng koen pai',en:'That\'s too expensive.'},
      {who:'Seller',tr:'ຫຼຸດໃຫ້ໄດ້ແປດພັນກີບ.',pr:'lut hai dai paet phan kip',en:'I can let it go for eight thousand kip.'},
      {who:'You',tr:'ຕົກລົງ! ເອົາ.',pr:'tok long! ao',en:'Deal! I\'ll take it.'}
    ]}
  ],
  pocket: [
    {tr:'ສະບາຍດີ',pr:'sa-baai-dee',en:'Hello',c:'Greetings'},
    {tr:'ສະບາຍດີບໍ່',pr:'sa-baai-dee baw',en:'How are you?',c:'Greetings'},
    {tr:'ລາກ່ອນ',pr:'laa kon',en:'Goodbye',c:'Greetings'},
    {tr:'ຂ້ອຍສະບາຍດີ',pr:'khoy sa-baai-dee',en:'I\'m fine',c:'Greetings'},
    {tr:'ຂ້ອຍຊື່ __NAME__',pr:'khoy suu',en:'My name is...',c:'Greetings'},
    {tr:'ກະລຸນາ',pr:'ka-lu-naa',en:'Please',c:'Courtesy'},
    {tr:'ຂອບໃຈ',pr:'khawp jai',en:'Thank you',c:'Courtesy'},
    {tr:'ຂອບໃຈຫຼາຍໆ',pr:'khawp jai lai lai',en:'Thanks a lot',c:'Courtesy'},
    {tr:'ບໍ່ເປັນຫຍັງ',pr:'baw pen yang',en:'You\'re welcome',c:'Courtesy'},
    {tr:'ຂໍໂທດ',pr:'kho toot',en:'Excuse me / sorry',c:'Courtesy'},
    {tr:'ໜຶ່ງ',pr:'nung',en:'1',c:'Numbers'},
    {tr:'ສອງ',pr:'song',en:'2',c:'Numbers'},
    {tr:'ສາມ',pr:'sam',en:'3',c:'Numbers'},
    {tr:'ສີ່',pr:'sii',en:'4',c:'Numbers'},
    {tr:'ຫ້າ',pr:'haa',en:'5',c:'Numbers'},
    {tr:'ສິບ',pr:'sip',en:'10',c:'Numbers'},
    {tr:'ນ້ຳ',pr:'nam',en:'water',c:'Food'},
    {tr:'ເຂົ້າ',pr:'khao',en:'rice',c:'Food'},
    {tr:'ເຂົ້າໜຽວ',pr:'khao niaw',en:'sticky rice',c:'Food'},
    {tr:'ກາເຟ',pr:'ka-fae',en:'coffee',c:'Food'},
    {tr:'ຊາ',pr:'saa',en:'tea',c:'Food'},
    {tr:'ແຊບ',pr:'saep',en:'delicious',c:'Food'},
    {tr:'ບ່ອນໃດ?',pr:'bong dai',en:'Where?',c:'Directions'},
    {tr:'ຂວາ',pr:'khwaa',en:'to the right',c:'Directions'},
    {tr:'ຊ້າຍ',pr:'saai',en:'to the left',c:'Directions'},
    {tr:'ກົງ',pr:'kong',en:'straight ahead',c:'Directions'},
    {tr:'ສະຖານີ',pr:'sa-thaa-nii',en:'the station',c:'Directions'},
    {tr:'ລາຄາເທົ່າໃດ?',pr:'laa-khaa thao dai',en:'how much is it?',c:'Shopping'},
    {tr:'ແພງ',pr:'phaeng',en:'expensive',c:'Shopping'},
    {tr:'ຂ້ອຍຢາກ...',pr:'khoy yaak',en:'I want...',c:'Shopping'},
    {tr:'ຊ່ວຍດ້ວຍ!',pr:'suay duay',en:'Help!',c:'Emergency'},
    {tr:'ທ່ານຫມໍ',pr:'thaan mo',en:'the doctor',c:'Emergency'},
    {tr:'ຫ້ອງນ້ຳ',pr:'hong nam',en:'the bathroom',c:'Emergency'},
    {tr:'ບໍ່ເຂົ້າໃຈ',pr:'baw khao jai',en:'I don\'t understand',c:'Emergency'},
    {tr:'ມື້ນີ້',pr:'muu nii',en:'today',c:'Time'},
    {tr:'ມື້ອື່ນ',pr:'muu uen',en:'tomorrow',c:'Time'},
    {tr:'ສະໜາມບິນ',pr:'sa-naam bin',en:'airport',c:'Travel'},
    {tr:'ໜັງສືຜ່ານແດນ',pr:'nang-seu phan daen',en:'passport',c:'Travel'},
    {tr:'ຂ້ອຍຢາກໄປໂຮງແຮມ',pr:'khoy yaak pai hong haem',en:'I want to go to the hotel',c:'Travel'},
    {tr:'ຂ້ອຍຈອງໄວ້ແລ້ວ',pr:'khoy jawng wai laew',en:'I have a reservation',c:'Travel'},
    {tr:'ເວົ້າຊ້າໆ, ກະລຸນາ',pr:'wao saa saa, ka-lu-naa',en:'Speak slowly, please',c:'Travel'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Shopping','Emergency','Time','Travel'],
  culture: [
    {icon:'🍚',title:'Sticky rice is the heart',body:'Lao meals centre on ເຂົ້າໜຽວ (khao niaw) — sticky rice, pinched into little balls and dipped into shared dishes. It\'s served in a woven basket and eaten with the hands. Most food words line up with Thai, so your Thai helps here too.'},
    {icon:'🙏',title:'The nop greeting',body:'Like Thailand, Laos greets with the ນັບ (nap) — hands pressed together in a prayer-like gesture, often with a small bow. You don\'t have to do it, but returning one is warm and respectful.'},
    {icon:'🐢',title:'"Sabai sabai" & "baw pen yang"',body:'Lao culture is famously relaxed. ສະບາຍໆ (sabai sabai) means "easy-going / chilled", and ບໍ່ເປັນຫຍັງ (baw pen yang = "no problem") is the national catchphrase. Take it slow — that\'s part of the charm.'},
    {icon:'🗣️',title:'Lao ≈ Thai — your head start',body:'Lao and Thai are close cousins. A Thai speaker learns to read Lao quickly, and a huge amount of everyday vocabulary is the same: ນ້ຳ/น้ำ (water), ເຂົ້າ/ข้าว (rice), ກາເຟ/กาแฟ (coffee), ສະຖານີ/สถานี (station). Many words are near-identical.'},
    {icon:'🛕',title:'Temples & respect',body:'Laos, like Thailand, is Theravada Buddhist. When you visit a ວັດ (vat, temple), dress modestly, remove your shoes, and cover your shoulders — the same etiquette as Thai wats. A quiet, respectful demeanour goes a long way.'},
    {icon:'🕐',title:'Coffee & shared meals',body:'ກາເຟ (kafe) and ຊາ (saa) are everywhere — from street stalls to homes with home-roasted beans. Meals are shared, with dishes laid in the centre for everyone. Accepting a drink with ຂອບໃຈ (khawp jai) and a smile is the polite move.'}
  ],
  sounds: [
    {l:'ສ / ຊ',say:'Both make an "s" sound — Lao keeps just one s (unlike Thai\'s 4).',ex:'ສາມ = sam (three) · ຊາ = saa (tea)',voice:'ສາມ'},
    {l:'ຂ / ຄ',say:'Both are "kh" — a breathy, aspirated k. ຂ carries a high tone, ຄ a low tone.',ex:'ຂອບໃຈ = khawp jai (thank you)',voice:'ຂອບໃຈ'},
    {l:'ງ',say:'"ng" as in "song" — and in Lao it can start a word, which English speakers find tricky.',ex:'ງາມ = ngam (beautiful)',voice:'ງາມ'},
    {l:'ປ / ບ',say:'"p" and "b", both said without the puff of air English adds.',ex:'ປາ = paa (fish) · ບໍ່ = baw (no)',voice:'ປາ'},
    {l:'ພ',say:'A breathy, aspirated "p" — a strongly puffy p.',ex:'ພໍ່ = pho (father)',voice:'ພໍ່'},
    {l:'ລ / ຣ',say:'"l" vs a light "r". Many Lao speakers blend r toward l, so ລາວ sounds like "laaw".',ex:'ລາວ = laaw (Lao)',voice:'ລາວ'},
    {l:'tone marks',say:'Lao is tonal — six tones in the central dialect. A different pitch can mean a different word, so listen and then imitate.',ex:'ສະບາຍດີ (sa-baai-dee) — let the tone guide you',voice:'ສະບາຍດີ'},
    {l:'ຫ',say:'A silent "h" that raises the tone of the syllable that follows (a tone-modifier, not a real consonant).',ex:'ຫ້າ = haa (five) · ຫົກ = hok (six)',voice:'ຫ້າ'}
  ],
  resources: [
    {icon:'🗣️',t:'Learn Lao: everyday phrases',d:'Native-speaker basics with subtitles — greetings, numbers and daily survival phrases.',q:'learn Lao language for beginners'},
    {icon:'🇱🇦',t:'Lao street life & travel',d:'Real conversation filmed in Laos, subtitled for learners — great for hearing the tones in context.',q:'Laos travel learn Lao phrases'},
    {icon:'📚',t:'Thai lessons for the head start',d:'Since Lao and Thai are so close, beginner-Thai lessons transfer a lot of vocabulary. Use them side by side.',q:'learn Thai for beginners'},
    {icon:'💬',t:'Lao pronunciation & tones',d:'Tone and pronunciation walkthroughs — listen and repeat to get the six tones and the key consonants.',q:'Lao tones pronunciation lesson'},
    {icon:'🎙️',t:'Southeast Asian listening practice',d:'Easy podcasts on Laos and Lao phrases — perfect for a walk or commute.',q:'Lao language podcast learning'}
  ]
};
