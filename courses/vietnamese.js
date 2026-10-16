/* ---- vietnamese ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["vietnamese"] = {
  name: 'Vietnamese',
  flag: '🇻🇳',
  tts: 'vi-VN',
  dir: 'ltr',
  native: 'Tiếng Việt',
  soundTitle: 'Vietnamese sounds & spelling',
  soundIntro: 'Vietnamese is a tonal language — the same syllable said with a different tone means a different word, so the accent marks matter. Nail the six tones and a few key sounds and you can read almost any word.',
  grammar: '<p>Vietnamese is a tonal language — the tone of a syllable changes its meaning, so the accent marks matter. The letters are mostly read as written. <b>đ</b> sounds like the English \'d\' but with a flatter tongue, and <b>ng</b> is like the \'ng\' in <i>sing</i>. Vietnamese has no articles (no \'the\' or \'a\'), so <i>cà phê</i> can mean coffee or the coffee. Use <b>tôi</b> (I) for yourself, and add <b>ạ</b> to sound extra polite.</p>',
  bridges: '<div class="note">🇬🇧 <b>English.</b> Vietnamese uses the Latin alphabet, so some words look familiar: <i>cà phê</i> (coffee, from French <i>café</i>), <i>ga</i> (train station, from French <i>gare</i>), <i>mì</i> (noodles). You already know more than you think.</div><div class="note">🎵 <b>Tones.</b> The hardest thing is the tones. The same syllable said five different ways means five different words. Listen closely to each sound card and copy the melody — not just the letters.</div>',
  lessons: [
    { id:1, title:'Greetings', focus:'Xin chào · chào · tạm biệt · cảm ơn',
      steps:[
        {t:'say',text:'Let\'s start with the word you\'ll use every day: <span class="inline-tr">Xin chào</span> — hello. Say it out loud.',tr:'Xin chào'},
        {t:'words',items:[{tr:'Xin chào',pr:'sin chow',en:'hello'},{tr:'Chào',pr:'chow',en:'hi (casual)'},{tr:'Tạm biệt',pr:'tam byeet',en:'goodbye'},{tr:'Chào buổi sáng',pr:'chow boo-ee sang',en:'good morning'},{tr:'Chào buổi tối',pr:'chow boo-ee toy',en:'good evening'}]},
        {t:'chal',en:'Hello, thank you',tr:'Xin chào, cảm ơn',pr:'sin chow, gum uhn',morph:['xin chào = hello','cảm ơn = thank you']},
        {t:'say',text:'A big difference in politeness: <span class="inline-tr">vâng</span> is a plain yes, but <span class="inline-tr">dạ</span> is the polite yes. Adding <span class="inline-tr">ạ</span> to the end of anything you say makes it gentler and more respectful.',tr:'dạ'},
        {t:'chal',en:'Hello, how are you?',tr:'Xin chào, bạn khỏe không?',pr:'sin chow, ban khweh kong',morph:['xin chào = hello','bạn = you','khỏe không? = are you well?']}
      ],
      blocks:['<code>Xin chào</code> = hello','<code>Tạm biệt</code> = goodbye','<code>cảm ơn</code> = thank you'] },
    { id:2, title:'Polite phrases', focus:'cảm ơn · xin lỗi · vâng · không',
      steps:[
        {t:'say',text:'<span class="inline-tr">Cảm ơn</span> is thank you. You\'ll hear it all day — and you\'ll say it constantly. Add <span class="inline-tr">ạ</span> to be extra polite: <span class="inline-tr">Cảm ơn ạ</span>.',tr:'Cảm ơn'},
        {t:'words',items:[{tr:'Cảm ơn',pr:'gum uhn',en:'thank you'},{tr:'Cảm ơn nhiều',pr:'gum uhn nyew',en:'thanks a lot'},{tr:'Xin lỗi',pr:'sin loy',en:'sorry / excuse me'},{tr:'Vâng',pr:'vuhng',en:'yes'},{tr:'Không',pr:'kong',en:'no / not'}]},
        {t:'chal',en:'Thank you very much',tr:'Cảm ơn nhiều',pr:'gum uhn nyew',morph:['cảm ơn = thank you','nhiều = a lot']},
        {t:'say',text:'<span class="inline-tr">Xin lỗi</span> does double duty as \'sorry\' and \'excuse me\' — use it to politely get someone\'s attention.',tr:'Xin lỗi'},
        {t:'chal',en:'Excuse me / Sorry',tr:'Xin lỗi',pr:'sin loy',morph:['xin lỗi = sorry / excuse me']}
      ],
      blocks:['<code>cảm ơn</code> = thank you','<code>xin lỗi</code> = sorry / excuse me','<code>vâng</code> = yes · <code>không</code> = no'] },
    { id:3, title:'Numbers 1–10', focus:'một · hai · ba · mười',
      steps:[
        {t:'say',text:'Numbers are the fastest win. Listen and repeat: <span class="inline-tr">một, hai, ba</span>.',tr:'một'},
        {t:'words',items:[{tr:'một',pr:'moht',en:'1'},{tr:'hai',pr:'high',en:'2'},{tr:'ba',pr:'bah',en:'3'},{tr:'bốn',pr:'bohn',en:'4'},{tr:'năm',pr:'nam',en:'5'},{tr:'sáu',pr:'sow',en:'6'},{tr:'bảy',pr:'by-ee',en:'7'},{tr:'tám',pr:'tahm',en:'8'},{tr:'chín',pr:'chin',en:'9'},{tr:'mười',pr:'moo-ee',en:'10'}]},
        {t:'chal',en:'Two coffees, please',tr:'Hai cà phê, làm ơn',pr:'high kah feh, lam uhn',morph:['hai = two','cà phê = coffee','làm ơn = please']},
        {t:'say',text:'To ask a price, use <span class="inline-tr">Bao nhiêu tiền?</span> — how much?',tr:'Bao nhiêu tiền?'},
        {t:'chal',en:'How much is it?',tr:'Bao nhiêu tiền?',pr:'bow nyew tyen',morph:['bao nhiêu = how much','tiền = money']},
        {t:'chal',en:'It\'s five thousand',tr:'Năm nghìn',pr:'nam ngeen',morph:['năm = five','nghìn = thousand']}
      ],
      blocks:['một, hai, ba, bốn, năm = 1–5','<code>bao nhiêu tiền?</code> = how much is it?'] },
    { id:4, title:'"I want" — tôi muốn', focus:'tôi muốn · cho tôi · một',
      steps:[
        {t:'say',text:'The key verb for ordering anything: <span class="inline-tr">Tôi muốn</span> — I want.',tr:'Tôi muốn'},
        {t:'words',items:[{tr:'tôi muốn',pr:'toy moo-uhn',en:'I want'},{tr:'tôi',pr:'toy',en:'I / me'},{tr:'một',pr:'moht',en:'a / one'},{tr:'làm ơn',pr:'lam uhn',en:'please'},{tr:'thực đơn',pr:'thuk duhn',en:'the menu'}]},
        {t:'chal',en:'I want a coffee',tr:'Tôi muốn một cà phê',pr:'toy moo-uhn moht kah feh',morph:['tôi = I','muốn = want','một cà phê = a coffee']},
        {t:'say',text:'For a gentler \'give me / for me\', use <span class="inline-tr">Cho tôi</span>. <b>Cho tôi một nước</b> = a water, please.',tr:'cho tôi'},
        {t:'chal',en:'Give me a water, please',tr:'Cho tôi một nước, làm ơn',pr:'chaw toy moht nook, lam uhn',morph:['cho tôi = give me','một nước = a water','làm ơn = please']},
        {t:'chal',en:'I want the menu',tr:'Tôi muốn thực đơn',pr:'toy moo-uhn thuk duhn',morph:['tôi muốn = I want','thực đơn = the menu']}
      ],
      blocks:['<code>tôi muốn</code> = I want','<code>cho tôi</code> = give me / for me','<code>một</code> = a / one'] },
    { id:5, title:'Food & drink', focus:'phở · cà phê · nước · cơm',
      steps:[
        {t:'say',text:'Welcome to a phở shop: <span class="inline-tr">Phở</span> is Vietnam\'s famous noodle soup and <span class="inline-tr">cà phê</span> is coffee.',tr:'Phở'},
        {t:'words',items:[{tr:'phở',pr:'fuh',en:'beef noodle soup'},{tr:'cà phê',pr:'kah feh',en:'coffee',link:'≈ French café'},{tr:'nước',pr:'nook',en:'water'},{tr:'cơm',pr:'kuhm',en:'rice'},{tr:'thực đơn',pr:'thuk duhn',en:'the menu'}]},
        {t:'chal',en:'A phở and a coffee, please',tr:'Một phở và một cà phê, làm ơn',pr:'moht fuh vah moht kah feh, lam uhn',morph:['một = a','phở = noodle soup','và = and','cà phê = coffee','làm ơn = please']},
        {t:'say',text:'<span class="inline-tr">Ngon</span> = delicious. Say it after a great meal — Vietnamese people love the compliment.',tr:'Ngon'},
        {t:'chal',en:'Delicious!',tr:'Ngon quá!',pr:'ngon kwah',morph:['ngon = delicious','quá = very (intensifier)']},
        {t:'chal',en:'The bill, please',tr:'Tính tiền, làm ơn',pr:'tin tyen, lam uhn',morph:['tính tiền = the bill','làm ơn = please']}
      ],
      blocks:['<code>phở</code> = beef noodle soup','<code>cà phê</code> = coffee','<code>nước</code> = water','<code>tính tiền</code> = the bill'] },
    { id:6, title:'Directions', focus:'Ở đâu? · bên trái · bên phải · thẳng',
      steps:[
        {t:'say',text:'The most useful question in any city: <span class="inline-tr">Ở đâu?</span> — where is…?',tr:'Ở đâu?'},
        {t:'words',items:[{tr:'Ở đâu?',pr:'uh dow',en:'Where is...?'},{tr:'bên trái',pr:'ben chai',en:'to the left'},{tr:'bên phải',pr:'ben fai',en:'to the right'},{tr:'thẳng',pr:'thung',en:'straight ahead'},{tr:'nhà vệ sinh',pr:'nyah veh sing',en:'the bathroom'}]},
        {t:'chal',en:'Where is the bathroom?',tr:'Nhà vệ sinh ở đâu?',pr:'nyah veh sing uh dow',morph:['nhà vệ sinh = bathroom','ở đâu = where']},
        {t:'say',text:'<span class="inline-tr">Rẽ trái</span> (turn left) and <span class="inline-tr">rẽ phải</span> (turn right) tell you which way to go.',tr:'rẽ phải'},
        {t:'chal',en:'Where is the bus stop?',tr:'Trạm xe buýt ở đâu?',pr:'cham seh bweet uh dow',link:'≈ French bus',morph:['trạm xe buýt = bus stop','ở đâu = where']},
        {t:'chal',en:'Go straight, then turn left',tr:'Đi thẳng, rồi rẽ trái',pr:'dee thung, roy chai',morph:['đi = to go','thẳng = straight','rồi = then','rẽ trái = turn left']}
      ],
      blocks:['<code>ở đâu?</code> = where is…?','<code>bên trái</code> / <code>bên phải</code> = left / right','<code>thẳng</code> = straight ahead'] },
    { id:7, title:'Questions & "do you have"', focus:'có…? · không? · bao nhiêu? · gì?',
      steps:[
        {t:'say',text:'To ask if someone has something or if something exists, use <span class="inline-tr">có</span> (to have) and finish with <span class="inline-tr">không</span> (the question marker).',tr:'có'},
        {t:'chal',en:'Do you have a menu?',tr:'Có thực đơn không?',pr:'kaw thuk duhn kong',morph:['có = have','thực đơn = menu','không = question marker']},
        {t:'chal',en:'Do you have a table?',tr:'Có bàn không?',pr:'kaw ban kong',morph:['có = have','bàn = table','không = question marker']},
        {t:'say',text:'<span class="inline-tr">Bao nhiêu?</span> = how much/how many, and <span class="inline-tr">gì?</span> = what. Perfect for prices.',tr:'gì?'},
        {t:'chal',en:'How much is this?',tr:'Cái này bao nhiêu?',pr:'kai nyay bow nyew',morph:['cái này = this','bao nhiêu = how much']},
        {t:'chal',en:'What\'s your name?',tr:'Bạn tên gì?',pr:'ban ten zee',morph:['bạn = you','tên = name','gì = what']}
      ],
      blocks:['<code>có…?</code> = do you have…?','<code>không</code> = question marker','<code>bao nhiêu?</code> = how much?'] },
    { id:8, title:'Family & people', focus:'gia đình · bố · mẹ · anh · em',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">gia đình</span> (family), <span class="inline-tr">bố</span> (dad), <span class="inline-tr">mẹ</span> (mom).',tr:'gia đình'},
        {t:'words',items:[{tr:'gia đình',pr:'yah dinh',en:'family'},{tr:'bố',pr:'boh',en:'dad'},{tr:'mẹ',pr:'meh',en:'mom'},{tr:'anh',pr:'ahn',en:'older brother'},{tr:'em',pr:'em',en:'younger sibling'}]},
        {t:'chal',en:'I have a family',tr:'Tôi có gia đình',pr:'toy kaw yah dinh',morph:['tôi = I','có = have','gia đình = family']},
        {t:'say',text:'<span class="inline-tr">Có</span> means to have. Vietnamese often drops \'I\' in casual speech, but it\'s nice to keep it clear.',tr:'có'},
        {t:'chal',en:'I have an older brother',tr:'Tôi có anh trai',pr:'toy kaw ahn chai',morph:['tôi = I','có = have','anh trai = older brother']},
        {t:'chal',en:'Do you have a family?',tr:'Bạn có gia đình không?',pr:'ban kaw yah dinh kong',morph:['bạn = you','có = have','gia đình = family','không = question marker']}
      ],
      blocks:['<code>gia đình</code> = family','<code>bố</code> / <code>mẹ</code> = dad / mom','<code>có</code> = I have'] },
    { id:9, title:'Time, days & weather', focus:'hôm nay · ngày mai · trời · mưa · nắng',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">hôm nay</span>, tomorrow is <span class="inline-tr">ngày mai</span>, yesterday is <span class="inline-tr">hôm qua</span>.',tr:'hôm nay'},
        {t:'words',items:[{tr:'hôm nay',pr:'hom nai',en:'today'},{tr:'ngày mai',pr:'ngai my',en:'tomorrow'},{tr:'hôm qua',pr:'hom kwah',en:'yesterday'},{tr:'mưa',pr:'muh-ah',en:'rain'},{tr:'nắng',pr:'nahng',en:'sunny'},{tr:'lạnh',pr:'lahn',en:'cold'}]},
        {t:'chal',en:'See you tomorrow',tr:'Hẹn gặp lại ngày mai',pr:'hen gap lai ngai my',morph:['hẹn gặp lại = see you again','ngày mai = tomorrow']},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">Trời hôm nay thế nào?</span> — what\'s the weather today?',tr:'Trời hôm nay thế nào?'},
        {t:'chal',en:'It\'s raining',tr:'Trời đang mưa',pr:'choy dang muh-ah',morph:['trời = the sky/weather','đang = (ongoing)','mưa = rain']},
        {t:'chal',en:'It\'s sunny and hot',tr:'Trời nắng và nóng',pr:'choy nahng vah nawng',morph:['trời = weather','nắng = sunny','và = and','nóng = hot']}
      ],
      blocks:['<code>hôm nay</code> / <code>ngày mai</code> = today / tomorrow','<code>trời</code> = the weather','<code>mưa</code> / <code>nắng</code> = rain / sunny'] },
    { id:10, title:'Small talk & your name', focus:'tôi tên là · bạn tên gì? · rất vui',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">Tôi tên là…</span> — my name is…',tr:'Tôi tên là'},
        {t:'chal',en:'My name is __NAME__',tr:'Tôi tên là __NAME__',pr:'toy ten lah __NAME__',morph:['tôi = I','tên = name','là = is','__NAME__ = your name']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">Bạn tên gì?</span> And to say you\'re glad to meet them: <span class="inline-tr">Rất vui được gặp bạn</span>.',tr:'Bạn tên gì?'},
        {t:'chal',en:'What\'s your name?',tr:'Bạn tên gì?',pr:'ban ten zee',morph:['bạn = you','tên = name','gì = what']},
        {t:'chal',en:'Nice to meet you',tr:'Rất vui được gặp bạn',pr:'zut vwee duhk gap ban',morph:['rất vui = very glad','được gặp = to meet','bạn = you']}
      ],
      blocks:['<code>tôi tên là…</code> = my name is…','<code>bạn tên gì?</code> = what\'s your name?','<code>rất vui được gặp bạn</code> = nice to meet you'] },
    { id:11, title:'Health & emergency', focus:'cứu tôi! · bác sĩ · hiệu thuốc · tôi không hiểu',
      steps:[
        {t:'say',text:'The words that matter if you need help: <span class="inline-tr">Cứu tôi!</span> (help!), <span class="inline-tr">bác sĩ</span> (doctor), <span class="inline-tr">hiệu thuốc</span> (pharmacy).',tr:'Cứu tôi!'},
        {t:'words',items:[{tr:'Cứu tôi!',pr:'goo toy',en:'help!'},{tr:'bác sĩ',pr:'bahk see',en:'doctor'},{tr:'hiệu thuốc',pr:'hyew thook',en:'pharmacy'},{tr:'Tôi không hiểu',pr:'toy kong hyew',en:'I don\'t understand'},{tr:'Tôi bị ốm',pr:'toy bee ohm',en:'I\'m sick'}]},
        {t:'chal',en:'Help!',tr:'Cứu tôi!',pr:'goo toy',morph:['cứu = to rescue','tôi = me']},
        {t:'chal',en:'I don\'t understand',tr:'Tôi không hiểu',pr:'toy kong hyew',morph:['tôi = I','không = not','hiểu = to understand']},
        {t:'chal',en:'I need a doctor',tr:'Tôi cần bác sĩ',pr:'toy kuhn bahk see',morph:['tôi = I','cần = to need','bác sĩ = doctor']}
      ],
      blocks:['<code>cứu tôi!</code> = help!','<code>bác sĩ</code> = doctor','<code>tôi không hiểu</code> = I don\'t understand'] },
    { id:12, title:'Tying it together', focus:'a capstone scene · greetings · ordering · directions',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolbox. This capstone uses only words you\'ve met. Build each line yourself before revealing.',tr:'Xin chào'},
        {t:'chal',en:'Hello, how are you?',tr:'Xin chào, bạn khỏe không?',pr:'sin chow, ban khweh kong',morph:['xin chào = hello','bạn khỏe không? = are you well?']},
        {t:'chal',en:'I want a phở and a coffee, please',tr:'Tôi muốn một phở và một cà phê, làm ơn',pr:'toy moo-uhn moht fuh vah moht kah feh, lam uhn',morph:['tôi muốn = I want','một phở = a phở','và = and','cà phê = coffee','làm ơn = please']},
        {t:'chal',en:'Where is the bathroom?',tr:'Nhà vệ sinh ở đâu?',pr:'nyah veh sing uh dow',morph:['nhà vệ sinh = bathroom','ở đâu = where']},
        {t:'chal',en:'How much is it?',tr:'Cái này bao nhiêu tiền?',pr:'kai nyay bow nyew tyen',morph:['cái này = this','bao nhiêu = how much','tiền = money']},
        {t:'chal',en:'Delicious! Thank you!',tr:'Ngon quá! Cảm ơn!',pr:'ngon kwah, gum uhn',morph:['ngon quá = delicious','cảm ơn = thank you']}
      ],
      blocks:['You built: greetings, ordering, directions, prices, thanks — a full day out in Vietnamese.'] },
    { id:13, title:'Airport & tickets', focus:'sân bay · hộ chiếu · vé · chuyến bay',
      steps:[
        {t:'say',text:'You have landed. The building is the <span class="inline-tr">sân bay</span>. Your document is a <span class="inline-tr">hộ chiếu</span>.',tr:'sân bay'},
        {t:'words',items:[{tr:'sân bay',pr:'sun bye',en:'the airport'},{tr:'hộ chiếu',pr:'hoh chee-ow',en:'the passport'},{tr:'vé',pr:'veh',en:'the ticket'},{tr:'chuyến bay',pr:'chwee-un bye',en:'the flight'},{tr:'cổng',pr:'kohm',en:'the gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'Sân bay ở đâu?',pr:'sun bye uh doh',morph:['sân bay = the airport','ở đâu? = where is it?']},
        {t:'chal',en:'Here is my passport',tr:'Đây là hộ chiếu của tôi',pr:'day lah hoh chee-ow koo-uh toy',morph:['đây là = here is','hộ chiếu của tôi = my passport']},
        {t:'chal',en:'A ticket, please',tr:'Một vé, làm ơn',pr:'moht veh, lahm uhn',morph:['một vé = a ticket','làm ơn = please']},
        {t:'chal',en:'Where is the gate?',tr:'Cổng ở đâu?',pr:'kohm uh doh',morph:['cổng = the gate','ở đâu? = where is it?']}
      ],
      blocks:['<code>sân bay</code> = airport','<code>hộ chiếu</code> = passport','<code>vé</code> = ticket','<code>cổng</code> = gate'] },
    { id:14, title:'The taxi', focus:'taxi · đi · khách sạn · dừng',
      steps:[
        {t:'say',text:'The driver is waiting. <span class="inline-tr">taxi</span> is the word you need. Tell them where to go with <span class="inline-tr">tôi muốn đi</span>.',tr:'taxi'},
        {t:'words',items:[{tr:'taxi',pr:'TAHK-see',en:'the taxi'},{tr:'tài xế',pr:'tai say',en:'the driver'},{tr:'tôi muốn đi',pr:'toy moo-un dee',en:'I want to go'},{tr:'dừng ở đây',pr:'zung uh day',en:'stop here'}]},
        {t:'chal',en:'Taxi, please',tr:'Taxi, làm ơn',pr:'TAHK-see, lahm uhn',morph:['taxi = taxi','làm ơn = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'Tôi muốn đi khách sạn',pr:'toy moo-un dee khak sahn',morph:['tôi muốn đi = I want to go','khách sạn = hotel']},
        {t:'chal',en:'Stop here, please',tr:'Dừng ở đây, làm ơn',pr:'zung uh day, lahm uhn',morph:['dừng ở đây = stop here','làm ơn = please']},
        {t:'chal',en:'How much is it?',tr:'Bao nhiêu tiền?',pr:'bao nyew tee-un',morph:['bao nhiêu = how much','tiền = money']}
      ],
      blocks:['<code>tôi muốn đi …</code> = I want to go to …','<code>dừng ở đây</code> = stop here'] },
    { id:15, title:'The hotel', focus:'đặt phòng · phòng · chìa khóa · đêm',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">Tôi có đặt phòng</span> — I have a reservation.',tr:'đặt phòng'},
        {t:'words',items:[{tr:'khách sạn',pr:'khak sahn',en:'the hotel'},{tr:'đặt phòng',pr:'dat fohng',en:'the reservation'},{tr:'phòng',pr:'fohng',en:'the room'},{tr:'chìa khóa',pr:'chee-uh khwah',en:'the key'},{tr:'một đêm',pr:'moht dem',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'Tôi có đặt phòng',pr:'toy koh dat fohng',morph:['tôi có = I have','đặt phòng = a reservation']},
        {t:'chal',en:'A room for one night, please',tr:'Một phòng một đêm, làm ơn',pr:'moht fohng moht dem, lahm uhn',morph:['một phòng = a room','một đêm = one night','làm ơn = please']},
        {t:'chal',en:'The key, please',tr:'Chìa khóa, làm ơn',pr:'chee-uh khwah, lahm uhn',morph:['chìa khóa = the key','làm ơn = please']},
        {t:'chal',en:'Where is my room?',tr:'Phòng của tôi ở đâu?',pr:'fohng koo-uh toy uh doh',morph:['phòng của tôi = my room','ở đâu? = where is it?']}
      ],
      blocks:['<code>đặt phòng</code> = reservation','<code>phòng</code> = room','<code>chìa khóa</code> = key'] },
    { id:16, title:'Ask for help', focus:'không hiểu · chậm hơn · tiếng Anh',
      steps:[
        {t:'say',text:'When the language is too fast: <span class="inline-tr">Chậm hơn, làm ơn</span> — slower, please.',tr:'Chậm hơn, làm ơn'},
        {t:'words',items:[{tr:'chậm hơn',pr:'chum hurn',en:'slower'},{tr:'lại',pr:'lai',en:'again'},{tr:'tiếng Anh',pr:'tee-ung ahn',en:'English'},{tr:'bạn có thể giúp không?',pr:'ban koh the yoop khohng',en:'can you help?'}]},
        {t:'chal',en:'I don\'t understand',tr:'Tôi không hiểu',pr:'toy khohng hee-ow',morph:['tôi = I','không = not','hiểu = understand']},
        {t:'chal',en:'Slower, please',tr:'Chậm hơn, làm ơn',pr:'chum hurn, lahm uhn',morph:['chậm hơn = slower','làm ơn = please']},
        {t:'chal',en:'Can you help me?',tr:'Bạn có thể giúp không?',pr:'ban koh the yoop khohng',morph:['bạn có thể = can you','giúp không? = help?']},
        {t:'chal',en:'Do you speak English?',tr:'Bạn nói tiếng Anh không?',pr:'ban noy tee-ung ahn khohng',morph:['bạn nói = do you speak','tiếng Anh = English']}
      ],
      blocks:['<code>chậm hơn</code> = slower','<code>Bạn nói tiếng Anh không?</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'cafe', title:'🍜 At a phở shop', emoji:'🍜', turns:[
      {who:'You',tr:'Xin chào! Một phở, một cà phê, làm ơn.',pr:'sin chow, moht fuh, moht kah feh, lam uhn',en:'Hello! A phở and a coffee, please.'},
      {who:'Server',tr:'Mời bạn ngồi. Ăn ở đây hay mang về?',pr:'moy ban ngoy, an uh day high mang vay',en:'Please sit down. Eat here or take away?'},
      {who:'You',tr:'Ăn ở đây, cảm ơn.',pr:'an uh day, gum uhn',en:'Eat here, thanks.'},
      {who:'Server',tr:'Đây ạ. Một phở và một cà phê.',pr:'day ah, moht fuh vah moht kah feh',en:'Here you are. One phở and one coffee.'},
      {who:'You',tr:'Ngon quá! Tính tiền, làm ơn.',pr:'ngon kwah, tin tyen, lam uhn',en:'Delicious! The bill, please.'}
    ]},
    { id:'transport', title:'🚌 Getting around', emoji:'🚌', turns:[
      {who:'You',tr:'Xin lỗi, trạm xe buýt ở đâu?',pr:'sin loy, cham seh bweet uh dow',en:'Excuse me, where\'s the bus stop?'},
      {who:'Local',tr:'Ở kia, rẽ phải.',pr:'uh kee-ah, chaw fai',en:'Over there, turn right.'},
      {who:'You',tr:'Cảm ơn. Vé đến chợ Bến Thành giá bao nhiêu?',pr:'gum uhn, veh den chuh ben tanh zah bow nyew',en:'Thanks. How much is a ticket to Ben Thanh market?'},
      {who:'Driver',tr:'Chín nghìn đồng.',pr:'chin ngeen dohng',en:'Nine thousand dong.'},
      {who:'You',tr:'Cho tôi một vé, làm ơn.',pr:'chaw toy moht veh, lam uhn',en:'Give me a ticket, please.'}
    ]},
    { id:'restaurant', title:'🍚 At a restaurant', emoji:'🍚', turns:[
      {who:'Waiter',tr:'Xin chào! Mời hai bạn ngồi.',pr:'sin chow, moy hai ban ngoy',en:'Hello! Take a seat, you two.'},
      {who:'You',tr:'Cảm ơn. Cho xin thực đơn.',pr:'gum uhn, chaw sin thuk duhn',en:'Thanks. The menu, please.'},
      {who:'Waiter',tr:'Đây ạ. Hôm nay có phở gà rất ngon.',pr:'day ah, hom nai kaw fuh gah zuht ngon',en:'Here you are. Today we have very tasty chicken phở.'},
      {who:'You',tr:'Cho tôi một phở gà và nước.',pr:'chaw toy moht fuh gah vah nook',en:'I\'ll have a chicken phở and some water.'},
      {who:'You',tr:'Ngon quá! Tính tiền, làm ơn.',pr:'ngon kwah, tin tyen, lam uhn',en:'Delicious! The bill, please.'}
    ]},
    { id:'shop', title:'🛍️ Shopping', emoji:'🛍️', turns:[
      {who:'You',tr:'Cái này bao nhiêu tiền?',pr:'kai nyay bow nyew tyen',en:'How much is this?'},
      {who:'Seller',tr:'Hai trăm nghìn đồng.',pr:'high cham ngeen dohng',en:'Two hundred thousand dong.'},
      {who:'You',tr:'Đắt quá! Có rẻ hơn không?',pr:'dat kwah, kaw zay huhn kong',en:'Too expensive! Is there anything cheaper?'},
      {who:'Seller',tr:'Cái này một trăm năm mươi nghìn, bạn ạ.',pr:'kai nyay moht cham nam moo-ee ngeen, ban ah',en:'This one is one hundred fifty thousand.'},
      {who:'You',tr:'Được, tôi lấy cái này.',pr:'duhk, toy lay kai nyay',en:'OK, I\'ll take this one.'}
    ]}
  ],
  pocket: [
    {tr:'Xin chào',pr:'sin chow',en:'Hello',c:'Greetings'},
    {tr:'Chào buổi sáng',pr:'chow boo-ee sang',en:'Good morning',c:'Greetings'},
    {tr:'Tạm biệt',pr:'tam byeet',en:'Goodbye',c:'Greetings'},
    {tr:'Bạn khỏe không?',pr:'ban khweh kong',en:'How are you?',c:'Greetings'},
    {tr:'Tôi tên là __NAME__',pr:'toy ten lah',en:'My name is...',c:'Greetings'},
    {tr:'Cảm ơn',pr:'gum uhn',en:'Thank you',c:'Courtesy'},
    {tr:'Cảm ơn nhiều',pr:'gum uhn nyew',en:'Thanks a lot',c:'Courtesy'},
    {tr:'Xin lỗi',pr:'sin loy',en:'Sorry / excuse me',c:'Courtesy'},
    {tr:'Vâng',pr:'vuhng',en:'Yes',c:'Courtesy'},
    {tr:'Không',pr:'kong',en:'No',c:'Courtesy'},
    {tr:'Làm ơn',pr:'lam uhn',en:'Please',c:'Courtesy'},
    {tr:'Một',pr:'moht',en:'1',c:'Numbers'},
    {tr:'Hai',pr:'high',en:'2',c:'Numbers'},
    {tr:'Ba',pr:'bah',en:'3',c:'Numbers'},
    {tr:'Bốn',pr:'bohn',en:'4',c:'Numbers'},
    {tr:'Năm',pr:'nam',en:'5',c:'Numbers'},
    {tr:'Mười',pr:'moo-ee',en:'10',c:'Numbers'},
    {tr:'Phở',pr:'fuh',en:'beef noodle soup',c:'Food'},
    {tr:'Cà phê',pr:'kah feh',en:'coffee',c:'Food'},
    {tr:'Nước',pr:'nook',en:'water',c:'Food'},
    {tr:'Tính tiền',pr:'tin tyen',en:'the bill',c:'Food'},
    {tr:'Ở đâu?',pr:'uh dow',en:'Where is...?',c:'Directions'},
    {tr:'Bên trái',pr:'ben chai',en:'to the left',c:'Directions'},
    {tr:'Bên phải',pr:'ben fai',en:'to the right',c:'Directions'},
    {tr:'Thẳng',pr:'thung',en:'straight ahead',c:'Directions'},
    {tr:'Nhà vệ sinh',pr:'nyah veh sing',en:'the bathroom',c:'Directions'},
    {tr:'Cái này bao nhiêu tiền?',pr:'kai nyay bow nyew tyen',en:'how much is this?',c:'Shopping'},
    {tr:'Đắt quá',pr:'dat kwah',en:'too expensive',c:'Shopping'},
    {tr:'Tôi lấy cái này',pr:'toy lay kai nyay',en:'I\'ll take this',c:'Shopping'},
    {tr:'Cứu tôi!',pr:'goo toy',en:'Help!',c:'Emergency'},
    {tr:'Tôi không hiểu',pr:'toy kong hyew',en:'I don\'t understand',c:'Emergency'},
    {tr:'Bác sĩ',pr:'bahk see',en:'doctor',c:'Emergency'},
    {tr:'Hiệu thuốc',pr:'hyew thook',en:'pharmacy',c:'Emergency'},
    {tr:'Hôm nay',pr:'hom nai',en:'today',c:'Time'},
    {tr:'Ngày mai',pr:'ngai my',en:'tomorrow',c:'Time'},
    {tr:'Trời đang mưa',pr:'choy dang muh-ah',en:'it\'s raining',c:'Time'},
    {tr:'Sân bay',pr:'sun bye',en:'the airport',c:'Travel'},
    {tr:'Hộ chiếu',pr:'hoh chee-ow',en:'the passport',c:'Travel'},
    {tr:'Vé',pr:'veh',en:'the ticket',c:'Travel'},
    {tr:'Taxi',pr:'TAHK-see',en:'the taxi',c:'Travel'},
    {tr:'Khách sạn',pr:'khak sahn',en:'the hotel',c:'Travel'},
    {tr:'Tôi có đặt phòng',pr:'toy koh dat fohng',en:'I have a reservation',c:'Travel'},
    {tr:'Chậm hơn, làm ơn',pr:'chum hurn, lahm uhn',en:'Slower, please',c:'Travel'},
    {tr:'Bạn nói tiếng Anh không?',pr:'ban noy tee-ung ahn khohng',en:'Do you speak English?',c:'Travel'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Shopping','Emergency','Time','Travel'],
  culture: [
    {icon:'🍜',title:'Phở is a way of life',body:'Phở is Vietnam\'s iconic breakfast — a bowl of aromatic broth, rice noodles and herbs. Locals judge a shop by its broth, simmered for hours. Go early; many places sell out by midday.'},
    {icon:'☕',title:'Vietnam\'s coffee is special',body:'Cà phê sữa đá — Vietnamese iced coffee with sweetened condensed milk — is a national obsession. It\'s thick, sweet and served over ice, often dripped slowly through a small metal filter.'},
    {icon:'🏍️',title:'Bikes rule the road',body:'Motorbikes are the main way around. Traffic can look chaotic, but locals move in a flowing rhythm. To cross, walk slow and steady — drivers steer around you.'},
    {icon:'🙏',title:'Respect with hands',body:'A slight bow with palms together (chắp tay) is a warm, respectful greeting, especially to elders. Adding "ạ" to your words — like dạ or vâng ạ — makes you sound much more polite.'},
    {icon:'🎉',title:'Tết is everything',body:'Tết, the Lunar New Year, is the biggest holiday of the year. Families reunite, share bánh chưng (sticky rice cakes), and give lucky money in red envelopes. Travel gets very busy then.'},
    {icon:'🗣️',title:'A little Vietnamese goes far',body:'A "xin chào" and "cảm ơn" open every door. Vietnamese people light up when visitors try their language — effort and tone matter far more than perfect grammar.'}
  ],
  sounds: [
    {l:'ngang',say:'the flat tone — level and steady, no mark',ex:'ma = ghost',voice:'ma'},
    {l:'sắc',say:'the rising tone — sharp, like an excited question',ex:'má = mother',voice:'má'},
    {l:'huyền',say:'the falling tone — low and a little breathy',ex:'mà = but',voice:'mà'},
    {l:'hỏi',say:'the hook tone — dips down then rises',ex:'mả = a grave',voice:'mả'},
    {l:'ngã',say:'the creaky tone — rises with a glottal catch',ex:'mã = a code',voice:'mã'},
    {l:'nặng',say:'the heavy tone — short, low and cut off',ex:'mạ = rice seedling',voice:'mạ'},
    {l:'đ',say:'like English "d" but with a flatter tongue, no puff of air',ex:'đi = to go',voice:'đi'},
    {l:'nh',say:'like "ny" in canyon',ex:'nhà = house',voice:'nhà'}
  ],
  resources: [
    {icon:'🗣️',t:'Learn Vietnamese with Annie',d:'Real-life vocabulary and conversations with native speakers, explained simply for beginners.',q:'Learn Vietnamese with Annie'},
    {icon:'🐢',t:'VietnamesePod101',d:'Structured audio lessons from true beginner to everyday phrases, in short episodes.',q:'VietnamesePod101'},
    {icon:'📚',t:'Tiếng Việt cho người mới bắt đầu',d:'Clear, slow grammar and vocabulary videos made specifically for beginners.',q:'học tiếng Việt cho người mới bắt đầu'},
    {icon:'💬',t:'Southern Vietnamese practice',d:'Focus on the southern accent and common real-life phrases used in Vietnam.',q:'learn Vietnamese southern accent for beginners'},
    {icon:'🎧',t:'Slow Vietnamese podcasts',d:'Easy listening to build your ear for tones and everyday speech.',q:'slow Vietnamese podcast for learners'}
  ]
};
