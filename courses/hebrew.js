/* ---- hebrew ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["hebrew"] = {
  name: 'Hebrew',
  flag: '🇮🇱',
  tts: 'he-IL',
  dir: 'rtl',
  native: 'עברית',
  script: 'Hebrew',
  soundTitle: 'Hebrew letters & sounds',
  soundIntro: 'Hebrew is written and read right to left, and it uses a few guttural sounds English doesn\'t have. The letters below are your keys — learn them and you can sound out almost any word.',
  grammar: '<p>Hebrew is written and read <b>right to left</b>. Most vowels aren\'t written — you learn to read word shapes and context. A letter changes shape at the end of a word (the "final forms" like <b>ך</b>), which is why <b>כ</b> and <b>ך</b> are the same sound in different positions. The good news: once you know a word\'s sounds, spelling is very consistent.</p>',
  bridges: '<div class="note">🇬🇧 <b>English.</b> Hebrew words you may already know: <i>amen</i>, <i>hallelujah</i>, <i>kosher</i>, <i>shalom</i>, <i>sabbath</i> — plus Jewish greetings that appear all over the world.</div><div class="note">🇸🇦 <b>Arabic.</b> Hebrew and Arabic are cousin languages in the same Semitic family. Some roots line up, like <b>שלום</b> / <i>salām</i> — both mean "peace".</div>',
  lessons: [
    { id:1, title:'Greetings & being polite', focus:'שלום · בוקר טוב · ערב טוב · להתראות',
      steps:[
        {t:'say',text:'Let\'s start with the most famous Hebrew word: <span class="inline-tr">שלום</span> — hello, goodbye and peace, all in one. Say it out loud.',tr:'שלום'},
        {t:'words',items:[{tr:'שלום',pr:'sha-LOM',en:'hello / goodbye',link:'≈ Arabic salām (peace)'},{tr:'בוקר טוב',pr:'BO-ker tov',en:'good morning'},{tr:'ערב טוב',pr:'E-rev tov',en:'good evening'},{tr:'להתראות',pr:'le-hit-RA-ot',en:'goodbye / see you'},{tr:'מה שלומך?',pr:'ma shlom-KHA',en:'how are you?'}]},
        {t:'chal',en:'Hello, how are you?',tr:'שלום, מה שלומך?',pr:'sha-LOM, ma shlom-KHA',morph:['שלום = hello','מה שלומך? = how are you?']},
        {t:'say',text:'<span class="inline-tr">טוב</span> means good. Add it to time words to greet people: <span class="inline-tr">בוקר טוב</span> (good morning), <span class="inline-tr">ערב טוב</span> (good evening).',tr:'טוב'},
        {t:'words',items:[{tr:'טוב',pr:'tov',en:'good'},{tr:'בוקר',pr:'BO-ker',en:'morning'},{tr:'ערב',pr:'E-rev',en:'evening'}]},
        {t:'chal',en:'Good morning!',tr:'בוקר טוב!',pr:'BO-ker tov',morph:['בוקר = morning','טוב = good']},
        {t:'chal',en:'Goodbye!',tr:'להתראות!',pr:'le-hit-RA-ot',morph:['להתראות = goodbye / see you later']}
      ],
      blocks:['<code>שלום</code> = hello / goodbye / peace','<code>בוקר טוב</code> = good morning','<code>ערב טוב</code> = good evening','<code>מה שלומך?</code> = how are you?'] },
    { id:2, title:'Polite phrases', focus:'תודה · בבקשה · סליחה · כן / לא',
      steps:[
        {t:'say',text:'The two magic words: <span class="inline-tr">תודה</span> (thank you) and <span class="inline-tr">בבקשה</span> (please / you\'re welcome).',tr:'תודה'},
        {t:'words',items:[{tr:'תודה',pr:'to-DA',en:'thank you'},{tr:'תודה רבה',pr:'to-DA ra-BA',en:'thank you very much'},{tr:'בבקשה',pr:'be-va-ka-SHA',en:'please / you\'re welcome'},{tr:'סליחה',pr:'sli-KHA',en:'sorry / excuse me'}]},
        {t:'chal',en:'Thank you very much!',tr:'תודה רבה!',pr:'to-DA ra-BA',morph:['תודה = thank you','רבה = a lot / much']},
        {t:'say',text:'To say sorry or excuse me, use <span class="inline-tr">סליחה</span>. Handy on a busy street or in a crowd.',tr:'סליחה'},
        {t:'chal',en:'Excuse me, please',tr:'סליחה, בבקשה',pr:'sli-KHA, be-va-ka-SHA',morph:['סליחה = excuse me','בבקשה = please']},
        {t:'say',text:'Yes is <span class="inline-tr">כן</span>, no is <span class="inline-tr">לא</span>. Two tiny words that answer most questions.',tr:'לא'},
        {t:'words',items:[{tr:'כן',pr:'ken',en:'yes'},{tr:'לא',pr:'lo',en:'no'}]},
        {t:'chal',en:'Yes, thank you',tr:'כן, תודה',pr:'ken, to-DA',morph:['כן = yes','תודה = thank you']}
      ],
      blocks:['<code>תודה</code> = thank you','<code>בבקשה</code> = please / you\'re welcome','<code>סליחה</code> = sorry / excuse me','<code>כן</code> = yes · <code>לא</code> = no'] },
    { id:3, title:'Numbers 1–10', focus:'אחת · שתיים · שלוש · עשר',
      steps:[
        {t:'say',text:'Numbers are the fastest win. Listen and repeat: <span class="inline-tr">אחת, שתיים, שלוש</span>.',tr:'אחת'},
        {t:'words',items:[{tr:'אחת',pr:'a-CHAT',en:'1'},{tr:'שתיים',pr:'sh-ta-YIM',en:'2'},{tr:'שלוש',pr:'sha-LOSH',en:'3'},{tr:'ארבע',pr:'ar-BA',en:'4'},{tr:'חמש',pr:'cha-MESH',en:'5'},{tr:'עשר',pr:'E-ser',en:'10'}]},
        {t:'chal',en:'Two coffees, please',tr:'שני קפה, בבקשה',pr:'shney ka-FE, be-va-ka-SHA',morph:['שני = two (masc.)','קפה = coffee','בבקשה = please']},
        {t:'say',text:'Money questions come next: <span class="inline-tr">כמה עולה?</span> = how much is it?',tr:'כמה עולה?'},
        {t:'chal',en:'How much is it?',tr:'כמה עולה?',pr:'ka-MA o-LE',morph:['כמה = how much','עולה = does it cost']},
        {t:'chal',en:'It\'s five shekels',tr:'חמישה שקלים',pr:'cha-mi-SHA shka-LIM',morph:['חמישה = five','שקלים = shekels (money)']}
      ],
      blocks:['<code>אחת, שתיים, שלוש</code> = 1, 2, 3','<code>ארבע, חמש, עשר</code> = 4, 5, 10','<code>כמה עולה?</code> = how much is it?'] },
    { id:4, title:'"I want" — אני רוצה', focus:'אני רוצה · מים · קפה · לחם',
      steps:[
        {t:'say',text:'To ask for almost anything: <span class="inline-tr">אני רוצה</span> — I want. Say it out loud.',tr:'אני רוצה'},
        {t:'say',text:'<span class="inline-tr">אני</span> = I, and <span class="inline-tr">רוצה</span> = want (masculine form). Add the thing you want right after.',tr:'אני'},
        {t:'chal',en:'I want water',tr:'אני רוצה מים',pr:'a-NI ro-TSE ma-YIM',morph:['אני = I','רוצה = want','מים = water']},
        {t:'chal',en:'I want coffee',tr:'אני רוצה קפה',pr:'a-NI ro-TSE ka-FE',morph:['אני = I','רוצה = want','קפה = coffee']},
        {t:'say',text:'Softening it with <span class="inline-tr">בבקשה</span> (please) turns a demand into a polite request.',tr:'בבקשה'},
        {t:'chal',en:'I want bread, please',tr:'אני רוצה לחם, בבקשה',pr:'a-NI ro-TSE LE-chem, be-va-ka-SHA',morph:['אני רוצה = I want','לחם = bread','בבקשה = please']}
      ],
      blocks:['<code>אני רוצה</code> = I want','<code>אני</code> = I · <code>רוצה</code> = want','<code>מים / קפה / לחם</code> = water / coffee / bread'] },
    { id:5, title:'Food & drink', focus:'מים · לחם · קפה · חשבון',
      steps:[
        {t:'say',text:'Eating out? Key words: <span class="inline-tr">מים</span> (water), <span class="inline-tr">לחם</span> (bread), <span class="inline-tr">קפה</span> (coffee).',tr:'מים'},
        {t:'words',items:[{tr:'מים',pr:'ma-YIM',en:'water',link:'≈ Arabic mā (water)'},{tr:'לחם',pr:'LE-chem',en:'bread'},{tr:'קפה',pr:'ka-FE',en:'coffee',link:'≈ English coffee (from Turkish kahve)'},{tr:'תה',pr:'te',en:'tea',link:'≈ English tea'},{tr:'יין',pr:'ya-YIN',en:'wine',link:'≈ English wine (ancient shared root)'}]},
        {t:'chal',en:'Coffee and tea, please',tr:'קפה ותה, בבקשה',pr:'ka-FE ve-TE, be-va-ka-SHA',morph:['קפה = coffee','ו + תה = and tea','בבקשה = please']},
        {t:'say',text:'To get the menu, ask for <span class="inline-tr">תפריט</span>. The bill is <span class="inline-tr">חשבון</span>.',tr:'תפריט'},
        {t:'words',items:[{tr:'תפריט',pr:'taf-RIT',en:'the menu'},{tr:'חשבון',pr:'chesh-BON',en:'the bill'}]},
        {t:'chal',en:'I want the bill, please',tr:'אני רוצה את החשבון, בבקשה',pr:'a-NI ro-TSE et ha-chesh-BON, be-va-ka-SHA',morph:['אני רוצה = I want','את החשבון = the bill','בבקשה = please']},
        {t:'chal',en:'It\'s delicious!',tr:'טעים מאוד!',pr:'ta\'IM me\'OD',morph:['טעים = tasty / delicious','מאוד = very']}
      ],
      blocks:['<code>מים / לחם / קפה</code> = water / bread / coffee','<code>תפריט</code> = the menu · <code>חשבון</code> = the bill','<code>טעים מאוד</code> = delicious'] },
    { id:6, title:'Getting around', focus:'איפה · ימינה · שמאלה · ישר',
      steps:[
        {t:'say',text:'The most useful question in any city: <span class="inline-tr">איפה…?</span> — where is…?',tr:'איפה'},
        {t:'words',items:[{tr:'איפה...?',pr:'ei-FO',en:'Where is...?'},{tr:'ימינה',pr:'yami-NA',en:'to the right'},{tr:'שמאלה',pr:'smol-A',en:'to the left'},{tr:'ישר',pr:'ya-SHAR',en:'straight ahead'},{tr:'תחנה',pr:'tacha-NA',en:'the station'}]},
        {t:'chal',en:'Where is the station?',tr:'איפה התחנה?',pr:'ei-FO ha-tacha-NA',morph:['איפה = where','התחנה = the station']},
        {t:'chal',en:'Where is the bathroom?',tr:'איפה השירותים?',pr:'ei-FO ha-she-ru-TIM',morph:['איפה = where','השירותים = the toilets / bathroom']},
        {t:'say',text:'<span class="inline-tr">ימינה</span> and <span class="inline-tr">שמאלה</span> tell you which way to turn. Straight ahead is <span class="inline-tr">ישר</span>.',tr:'ישר'},
        {t:'chal',en:'Straight ahead, please',tr:'ישר, בבקשה',pr:'ya-SHAR, be-va-ka-SHA',morph:['ישר = straight ahead','בבקשה = please']}
      ],
      blocks:['<code>איפה...?</code> = where is...?','<code>ימינה</code> / <code>שמאלה</code> = right / left','<code>ישר</code> = straight ahead'] },
    { id:7, title:'Questions & "do you have…?"', focus:'יש לך · כמה · מתי · איפה',
      steps:[
        {t:'say',text:'To ask if someone has something: <span class="inline-tr">יש לך…?</span> — do you have…?',tr:'יש לך'},
        {t:'say',text:'<span class="inline-tr">יש</span> = there is / have, and <span class="inline-tr">לך</span> = to you. So <span class="inline-tr">יש לך</span> literally means "there is to you." Add the item after.',tr:'יש'},
        {t:'chal',en:'Do you have coffee?',tr:'יש לך קפה?',pr:'yesh le-KHA ka-FE',morph:['יש לך = do you have','קפה = coffee']},
        {t:'chal',en:'Do you have a menu?',tr:'יש לך תפריט?',pr:'yesh le-KHA taf-RIT',morph:['יש לך = do you have','תפריט = menu']},
        {t:'say',text:'Question words: <span class="inline-tr">כמה</span> (how much), <span class="inline-tr">איפה</span> (where), <span class="inline-tr">מתי</span> (when), <span class="inline-tr">למה</span> (why).',tr:'כמה'},
        {t:'words',items:[{tr:'כמה',pr:'ka-MA',en:'how much'},{tr:'איפה',pr:'ei-FO',en:'where'},{tr:'מתי',pr:'ma-TAI',en:'when'},{tr:'למה',pr:'la-MA',en:'why'}]},
        {t:'chal',en:'Is there a pharmacy here?',tr:'יש כאן בית מרקחת?',pr:'yesh kan beit mer-ka-CHAT',morph:['יש = there is','כאן = here','בית מרקחת = pharmacy']}
      ],
      blocks:['<code>יש לך…?</code> = do you have…?','<code>כמה</code> = how much · <code>איפה</code> = where','<code>יש כאן</code> = is there (here)?'] },
    { id:8, title:'Family & people', focus:'משפחה · אמא · אבא · יש לי',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">משפחה</span> (family), <span class="inline-tr">אמא</span> (mother), <span class="inline-tr">אבא</span> (father).',tr:'משפחה'},
        {t:'words',items:[{tr:'משפחה',pr:'mish-pa-CHA',en:'family'},{tr:'אמא',pr:'i-MA',en:'mother',link:'≈ Arabic umm (mother)'},{tr:'אבא',pr:'a-BA',en:'father',link:'≈ Arabic ab (father)'},{tr:'אח',pr:'ach',en:'brother',link:'≈ Arabic akh (brother)'},{tr:'אחות',pr:'a-CHOT',en:'sister',link:'≈ Arabic ukht (sister)'},{tr:'חבר',pr:'cha-VER',en:'friend'}]},
        {t:'say',text:'To say "I have", Hebrew flips it around: <span class="inline-tr">יש לי</span> = "there is to me." No word for "have" — just <span class="inline-tr">יש לי</span>.',tr:'יש לי'},
        {t:'chal',en:'I have a friend',tr:'יש לי חבר',pr:'yesh li cha-VER',morph:['יש לי = I have','חבר = friend']},
        {t:'chal',en:'I have a family',tr:'יש לי משפחה',pr:'yesh li mish-pa-CHA',morph:['יש לי = I have','משפחה = family']},
        {t:'chal',en:'I have a brother',tr:'יש לי אח',pr:'yesh li ach',morph:['יש לי = I have','אח = brother']}
      ],
      blocks:['<code>אמא</code> / <code>אבא</code> = mother / father','<code>אח</code> / <code>אחות</code> = brother / sister','<code>יש לי</code> = I have'] },
    { id:9, title:'Time, days & weather', focus:'היום · מחר · מה מזג האוויר?',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">היום</span>, tomorrow is <span class="inline-tr">מחר</span>, and now is <span class="inline-tr">עכשיו</span>.',tr:'היום'},
        {t:'words',items:[{tr:'היום',pr:'ha-YOM',en:'today'},{tr:'מחר',pr:'ma-CHAR',en:'tomorrow'},{tr:'עכשיו',pr:'ach-SHAV',en:'now'},{tr:'חם',pr:'cham',en:'hot',link:'≈ Arabic ḥārr (hot)'},{tr:'קר',pr:'kar',en:'cold'}]},
        {t:'chal',en:'See you tomorrow',tr:'להתראות מחר',pr:'le-hit-RA-ot ma-CHAR',morph:['להתראות = see you','מחר = tomorrow']},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">מה מזג האוויר?</span>',tr:'מה מזג האוויר?'},
        {t:'chal',en:'What\'s the weather?',tr:'מה מזג האוויר?',pr:'ma ME-zeg ha-a-VIR',morph:['מה = what','מזג האוויר = the weather']},
        {t:'chal',en:'It\'s hot!',tr:'חם!',pr:'cham',morph:['חם = hot']}
      ],
      blocks:['<code>היום</code> / <code>מחר</code> = today / tomorrow','<code>עכשיו</code> = now','<code>מה מזג האוויר?</code> = what\'s the weather?'] },
    { id:10, title:'Small talk & your name', focus:'קוראים לי · איך קוראים לך? · נעים מאוד',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">קוראים לי…</span> = my name is…, literally "they call me…"',tr:'קוראים לי'},
        {t:'chal',en:'My name is __NAME__',tr:'קוראים לי __NAME__',pr:'ko-rim li __NAME__',morph:['קוראים לי = my name is','__NAME__ = your name']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">איך קוראים לך?</span>',tr:'איך קוראים לך?'},
        {t:'chal',en:'What\'s your name?',tr:'איך קוראים לך?',pr:'EICH ko-rim le-KHA',morph:['איך = how','קוראים לך = do they call you?']},
        {t:'say',text:'<span class="inline-tr">נעים מאוד</span> = pleased to meet you. The standard reply after exchanging names.',tr:'נעים מאוד'},
        {t:'chal',en:'Pleased to meet you',tr:'נעים מאוד',pr:'na\'IM me\'OD',morph:['נעים = pleasant','מאוד = very']}
      ],
      blocks:['<code>קוראים לי…</code> = my name is…','<code>איך קוראים לך?</code> = what\'s your name?','<code>נעים מאוד</code> = pleased to meet you'] },
    { id:11, title:'Health & emergency', focus:'עזרה · רופא · אני לא מבין',
      steps:[
        {t:'say',text:'The most important word if you need help: <span class="inline-tr">עזרה</span> — help. Say it clearly and loudly.',tr:'עזרה'},
        {t:'words',items:[{tr:'עזרה',pr:'ez-RA',en:'help!'},{tr:'רופא',pr:'ro-FE',en:'doctor'},{tr:'בית חולים',pr:'beit cho-LIM',en:'hospital'},{tr:'בית מרקחת',pr:'beit mer-ka-CHAT',en:'pharmacy'},{tr:'אני לא מבין',pr:'a-NI lo me-VIN',en:'I don\'t understand'}]},
        {t:'chal',en:'Help!',tr:'עזרה!',pr:'ez-RA',morph:['עזרה = help']},
        {t:'chal',en:'I need a doctor',tr:'אני צריך רופא',pr:'a-NI tza-RICH ro-FE',morph:['אני צריך = I need','רופא = doctor']},
        {t:'say',text:'To say you don\'t understand: <span class="inline-tr">אני לא מבין</span>.',tr:'אני לא מבין'},
        {t:'chal',en:'I don\'t understand',tr:'אני לא מבין',pr:'a-NI lo me-VIN',morph:['אני = I','לא = not','מבין = understand']},
        {t:'chal',en:'It hurts',tr:'כואב לי',pr:'ko-EV li',morph:['כואב = it hurts','לי = to me']}
      ],
      blocks:['<code>עזרה</code> = help','<code>רופא</code> = doctor · <code>בית חולים</code> = hospital','<code>אני לא מבין</code> = I don\'t understand'] },
    { id:12, title:'Tying it together', focus:'שלום · אני רוצה · איפה · כמה עולה?',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolbox. This capstone uses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello, how are you?',tr:'שלום, מה שלומך?',pr:'sha-LOM, ma shlom-KHA',morph:['שלום = hello','מה שלומך? = how are you?']},
        {t:'chal',en:'I want a coffee, please',tr:'אני רוצה קפה, בבקשה',pr:'a-NI ro-TSE ka-FE, be-va-ka-SHA',morph:['אני רוצה = I want','קפה = coffee','בבקשה = please']},
        {t:'chal',en:'Where is the station?',tr:'איפה התחנה?',pr:'ei-FO ha-tacha-NA',morph:['איפה = where','התחנה = the station']},
        {t:'chal',en:'How much is it?',tr:'כמה עולה?',pr:'ka-MA o-LE',morph:['כמה עולה? = how much is it?']},
        {t:'chal',en:'Delicious! Thank you!',tr:'טעים מאוד! תודה!',pr:'ta\'IM me\'OD, to-DA',morph:['טעים מאוד = delicious','תודה = thank you']}
      ],
      blocks:['You built: greetings, ordering, directions, prices, thanks — a full day out in Hebrew.'] },
    { id:13, title:'Airport & tickets', focus:'נמל תעופה · דרכון · כרטיס · שער',
      steps:[
        {t:'say',text:'You have landed. The building is the <span class="inline-tr">נמל תעופה</span>. Your document is a <span class="inline-tr">דרכון</span>.',tr:'נמל תעופה'},
        {t:'words',items:[{tr:'נמל תעופה',pr:'ne-MAL te-u-FA',en:'airport'},{tr:'דרכון',pr:'dar-KON',en:'passport'},{tr:'כרטיס',pr:'kar-TIS',en:'ticket'},{tr:'טיסה',pr:'ti-SA',en:'flight'},{tr:'שער',pr:'SHA-ar',en:'gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'איפה נמל התעופה?',pr:'ei-FO ne-MAL ha-te-u-FA',morph:['איפה = where','נמל התעופה = the airport']},
        {t:'chal',en:'Here is my passport',tr:'הנה הדרכון שלי',pr:'hi-NE ha-dar-KON she-LI',morph:['הנה = here is','הדרכון שלי = my passport']},
        {t:'chal',en:'A ticket, please',tr:'כרטיס, בבקשה',pr:'kar-TIS, be-va-ka-SHA',morph:['כרטיס = ticket','בבקשה = please']},
        {t:'chal',en:'Where is the gate?',tr:'איפה השער?',pr:'ei-FO ha-SHA-ar',morph:['איפה = where','השער = the gate']}
      ],
      blocks:['<code>נמל תעופה</code> = airport','<code>דרכון</code> = passport','<code>כרטיס</code> = ticket','<code>שער</code> = gate'] },
    { id:14, title:'The taxi', focus:'מונית · לנסוע · מלון · עצור כאן',
      steps:[
        {t:'say',text:'The driver is waiting. <span class="inline-tr">מונית</span> is a taxi. Tell them where to go with <span class="inline-tr">אני רוצה לנסוע</span>.',tr:'מונית'},
        {t:'words',items:[{tr:'מונית',pr:'mo-NIT',en:'taxi'},{tr:'נהג',pr:'na-HAG',en:'driver'},{tr:'אני רוצה לנסוע',pr:'a-NI ro-TSE li-NSO-a',en:'I want to go'},{tr:'עצור כאן',pr:'a-TZOR kan',en:'stop here'}]},
        {t:'chal',en:'Taxi, please',tr:'מונית, בבקשה',pr:'mo-NIT, be-va-ka-SHA',morph:['מונית = taxi','בבקשה = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'אני רוצה לנסוע למלון',pr:'a-NI ro-TSE li-NSO-a la-ma-LON',morph:['אני רוצה = I want','לנסוע = travel','למלון = to the hotel']},
        {t:'chal',en:'Stop here, please',tr:'עצור כאן, בבקשה',pr:'a-TZOR kan, be-va-ka-SHA',morph:['עצור = stop','כאן = here','בבקשה = please']},
        {t:'chal',en:'How much is it?',tr:'כמה עולה?',pr:'ka-MA o-LE',morph:['כמה = how much','עולה = does it cost']}
      ],
      blocks:['<code>אני רוצה לנסוע ל…</code> = I want to go to …','<code>עצור כאן</code> = stop here'] },
    { id:15, title:'The hotel', focus:'הזמנה · חדר · מפתח · לילה',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">יש לי הזמנה</span> — I have a reservation.',tr:'הזמנה'},
        {t:'words',items:[{tr:'מלון',pr:'ma-LON',en:'hotel'},{tr:'הזמנה',pr:'haz-ma-NA',en:'reservation'},{tr:'חדר',pr:'CHE-der',en:'room'},{tr:'מפתח',pr:'maf-TE-ach',en:'key'},{tr:'לילה אחד',pr:'LAI-la e-CHAD',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'יש לי הזמנה',pr:'yesh li haz-ma-NA',morph:['יש לי = I have','הזמנה = reservation']},
        {t:'chal',en:'A room for one night, please',tr:'חדר ללילה אחד, בבקשה',pr:'CHE-der le-LAI-la e-CHAD, be-va-ka-SHA',morph:['חדר = room','ללילה אחד = for one night','בבקשה = please']},
        {t:'chal',en:'The key, please',tr:'את המפתח, בבקשה',pr:'et ha-maf-TE-ach, be-va-ka-SHA',morph:['את המפתח = the key','בבקשה = please']},
        {t:'chal',en:'Where is my room?',tr:'איפה החדר שלי?',pr:'ei-FO ha-CHE-der she-LI',morph:['איפה = where','החדר שלי = my room']}
      ],
      blocks:['<code>הזמנה</code> = reservation','<code>חדר</code> = room','<code>מפתח</code> = key'] },
    { id:16, title:'Ask for help', focus:'אני לא מבין · לאט יותר · אנגלית',
      steps:[
        {t:'say',text:'When the language is too fast: <span class="inline-tr">לאט יותר, בבקשה</span> — slower, please.',tr:'לאט יותר, בבקשה'},
        {t:'words',items:[{tr:'לאט יותר',pr:'le-AT yo-TER',en:'slower'},{tr:'שוב',pr:'shuv',en:'again'},{tr:'אנגלית',pr:'ang-LIT',en:'English'},{tr:'אתה יכול לעזור?',pr:'a-TA ya-CHOL la-a-ZOR',en:'can you help?'}]},
        {t:'chal',en:'I don\'t understand',tr:'אני לא מבין',pr:'a-NI lo me-VIN',morph:['אני = I','לא = not','מבין = understand']},
        {t:'chal',en:'Slower, please',tr:'לאט יותר, בבקשה',pr:'le-AT yo-TER, be-va-ka-SHA',morph:['לאט יותר = slower','בבקשה = please']},
        {t:'chal',en:'Can you help me?',tr:'אתה יכול לעזור לי?',pr:'a-TA ya-CHOL la-a-ZOR li',morph:['אתה יכול = can you','לעזור = help','לי = me']},
        {t:'chal',en:'Do you speak English?',tr:'אתה מדבר אנגלית?',pr:'a-TA me-da-BER ang-LIT',morph:['אתה מדבר = do you speak','אנגלית = English']}
      ],
      blocks:['<code>לאט יותר</code> = slower','<code>אתה מדבר אנגלית?</code> = do you speak English?'] },

  ],
  dialogues: [
    { id:'cafe', title:'☕ At a café', emoji:'☕', turns:[
      {who:'You',tr:'שלום, אני רוצה קפה, בבקשה.',pr:'sha-LOM, a-NI ro-TSE ka-FE, be-va-ka-SHA',en:'Hello, I want a coffee, please.'},
      {who:'Barista',tr:'לשתות כאן או לקחת?',pr:'le-sh-TOT kan o le-ka-CHAT?',en:'For here or to go?'},
      {who:'You',tr:'לקחת, תודה.',pr:'le-ka-CHAT, to-DA',en:'To go, thanks.'},
      {who:'Barista',tr:'הנה. עשרה שקלים.',pr:'hi-NE, a-SA-ra shka-LIM',en:'Here. Ten shekels.'},
      {who:'You',tr:'תודה רבה!',pr:'to-DA ra-BA',en:'Thank you very much!'}
    ]},
    { id:'train', title:'🚉 At the train station', emoji:'🚉', turns:[
      {who:'You',tr:'סליחה, איפה התחנה?',pr:'sli-KHA, ei-FO ha-tacha-NA',en:'Excuse me, where\'s the station?'},
      {who:'Local',tr:'שם, ימינה.',pr:'sham, yami-NA',en:'It\'s there, on the right.'},
      {who:'You',tr:'תודה. כרטיס לתל אביב, בבקשה.',pr:'to-DA, kar-TIS le-Tel-av-EEV, be-va-ka-SHA',en:'Thanks. A ticket to Tel Aviv, please.'},
      {who:'Clerk',tr:'עשרה שקלים. הרכבת בשמונה.',pr:'a-SA-ra shka-LIM, ha-ra-KE-vet b\'shmo-NA',en:'Ten shekels. The train is at eight.'}
    ]},
    { id:'restaurant', title:'🍝 At a restaurant', emoji:'🍝', turns:[
      {who:'Waiter',tr:'ערב טוב! האם יש לכם הזמנה?',pr:'E-rev tov, ha-IM yesh la-KHEM ha-zma-NA?',en:'Good evening! Do you have a reservation?'},
      {who:'You',tr:'כן, לשניים.',pr:'ken, la-shna-YIM',en:'Yes, for two.'},
      {who:'You',tr:'תפריט, בבקשה.',pr:'taf-RIT, be-va-ka-SHA',en:'The menu, please.'},
      {who:'You',tr:'אני רוצה פסטה ויין.',pr:'a-NI ro-TSE PA-sta ve YA-yin',en:'I\'d like the pasta and a wine.'},
      {who:'Waiter',tr:'בחירה מצוינת! בתיאבון.',pr:'bchi-RA met-su-YE-net, be-te-a-VON',en:'Excellent choice! Enjoy your meal.'}
    ]},
    { id:'shop', title:'🛍️ Shopping', emoji:'🛍️', turns:[
      {who:'You',tr:'כמה עולה זה?',pr:'ka-MA o-LE ze',en:'How much is this?'},
      {who:'Seller',tr:'עשרים שקלים.',pr:'es-RIM shka-LIM',en:'Twenty shekels.'},
      {who:'You',tr:'יקר מדי. אפשר למדוד?',pr:'ya-KAR me-DAI, ef-SHAR le-m-DOD?',en:'It\'s too expensive. Can I try it on?'},
      {who:'Seller',tr:'בטח! חדר מדידה שם.',pr:'ba-TUCH, che-DER me-di-DA sham',en:'Of course! The fitting room is there.'},
      {who:'You',tr:'בסדר, אני לוקח.',pr:'be-SE-der, a-NI lo-KE-ach',en:'OK, I\'ll take it.'}
    ]}
  ],
  pocket: [
    {tr:'שלום',pr:'sha-LOM',en:'Hello',c:'Greetings'},
    {tr:'בוקר טוב',pr:'BO-ker tov',en:'Good morning',c:'Greetings'},
    {tr:'ערב טוב',pr:'E-rev tov',en:'Good evening',c:'Greetings'},
    {tr:'להתראות',pr:'le-hit-RA-ot',en:'Goodbye',c:'Greetings'},
    {tr:'מה שלומך?',pr:'ma shlom-KHA',en:'How are you?',c:'Greetings'},
    {tr:'תודה',pr:'to-DA',en:'Thank you',c:'Courtesy'},
    {tr:'תודה רבה',pr:'to-DA ra-BA',en:'Thank you very much',c:'Courtesy'},
    {tr:'בבקשה',pr:'be-va-ka-SHA',en:'Please / you\'re welcome',c:'Courtesy'},
    {tr:'סליחה',pr:'sli-KHA',en:'Sorry / excuse me',c:'Courtesy'},
    {tr:'כן',pr:'ken',en:'Yes',c:'Courtesy'},
    {tr:'לא',pr:'lo',en:'No',c:'Courtesy'},
    {tr:'אחת',pr:'a-CHAT',en:'1',c:'Numbers'},
    {tr:'שתיים',pr:'sh-ta-YIM',en:'2',c:'Numbers'},
    {tr:'שלוש',pr:'sha-LOSH',en:'3',c:'Numbers'},
    {tr:'ארבע',pr:'ar-BA',en:'4',c:'Numbers'},
    {tr:'חמש',pr:'cha-MESH',en:'5',c:'Numbers'},
    {tr:'עשר',pr:'E-ser',en:'10',c:'Numbers'},
    {tr:'מים',pr:'ma-YIM',en:'water',c:'Food'},
    {tr:'לחם',pr:'LE-chem',en:'bread',c:'Food'},
    {tr:'קפה',pr:'ka-FE',en:'coffee',c:'Food'},
    {tr:'תה',pr:'te',en:'tea',c:'Food'},
    {tr:'חשבון',pr:'chesh-BON',en:'the bill',c:'Food'},
    {tr:'איפה...?',pr:'ei-FO',en:'Where is...?',c:'Directions'},
    {tr:'ימינה',pr:'yami-NA',en:'to the right',c:'Directions'},
    {tr:'שמאלה',pr:'smol-A',en:'to the left',c:'Directions'},
    {tr:'ישר',pr:'ya-SHAR',en:'straight ahead',c:'Directions'},
    {tr:'תחנה',pr:'tacha-NA',en:'the station',c:'Directions'},
    {tr:'כמה עולה?',pr:'ka-MA o-LE',en:'How much is it?',c:'Shopping'},
    {tr:'אני רוצה',pr:'a-NI ro-TSE',en:'I want',c:'Shopping'},
    {tr:'זה',pr:'ze',en:'this',c:'Shopping'},
    {tr:'עזרה!',pr:'ez-RA',en:'Help!',c:'Emergency'},
    {tr:'אני לא מבין',pr:'a-NI lo me-VIN',en:'I don\'t understand',c:'Emergency'},
    {tr:'רופא',pr:'ro-FE',en:'doctor',c:'Emergency'},
    {tr:'היום',pr:'ha-YOM',en:'today',c:'Time'},
    {tr:'מחר',pr:'ma-CHAR',en:'tomorrow',c:'Time'},
    {tr:'חם',pr:'cham',en:'hot',c:'Time'},
    {tr:'נמל תעופה',pr:'ne-MAL te-u-FA',en:'airport',c:'Travel'},
    {tr:'דרכון',pr:'dar-KON',en:'passport',c:'Travel'},
    {tr:'מונית, בבקשה',pr:'mo-NIT, be-va-ka-SHA',en:'Taxi, please',c:'Travel'},
    {tr:'יש לי הזמנה',pr:'yesh li haz-ma-NA',en:'I have a reservation',c:'Travel'},
    {tr:'לאט יותר, בבקשה',pr:'le-AT yo-TER, be-va-ka-SHA',en:'Slower, please',c:'Travel'},
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Shopping','Emergency','Time','Travel'],
  culture: [
    {icon:'🕯️',title:'Shabbat',body:'From Friday evening to Saturday evening is Shabbat, the day of rest. Many shops, cafés and transport close — plan ahead. Signalling "shabbat shalom" as a greeting is a warm touch.'},
    {icon:'🍽️',title:'Kosher food',body:'Kosher rules keep meat and dairy separate and forbid pork and shellfish. Many cafés or restaurants are kosher; when in doubt, ask "האם זה כשר?" (is it kosher?).'},
    {icon:'📖',title:'Right to left',body:'Hebrew is written and read right to left, and vowels are often left out. It looks intimidating at first, but the letter sounds are very consistent once you learn them.'},
    {icon:'🧆',title:'Hummus & falafel',body:'Street food is everywhere and often excellent — hummus, falafel and shawarma in a pita. It\'s cheap, fast and a perfect way to practise a few words at the counter.'},
    {icon:'💬',title:'Direct & warm',body:'Israelis speak plainly and skip formality. A quick "toda" and a smile go a long way. What can feel blunt is just a warm, direct style — not rudeness.'},
    {icon:'😎',title:'"Sababa!"',body:'Sababa means "cool", "great" or "no problem" — a cheerful everyday word you\'ll hear constantly. A little slang like this makes locals light up.'}
  ],
  sounds: [
    {l:'א',say:'aleph — usually silent or a slight catch in the throat; the "ah" you hear is the vowel, not the letter',ex:'אני = a-NI (I)',voice:'אני'},
    {l:'ח',say:'chet — a deep "ch" from the throat, like the Scottish "loch"',ex:'חלב = cha-LAV (milk)',voice:'חלב'},
    {l:'ע',say:'ayin — a deep guttural sound from the very back of the throat, unique to Hebrew',ex:'ערב = E-rev (evening)',voice:'ערב'},
    {l:'ר',say:'resh — a guttural rolled r, softer and from the back of the mouth',ex:'רוח = RU-ach (wind)',voice:'רוח'},
    {l:'כ (ך)',say:'kaf — a hard "k", but at the end of a word it softens to "ch" like loch (the final form ך)',ex:'מלך = ME-lech (king)',voice:'מלך'},
    {l:'ש',say:'shin — "sh" when the dot is on the right, "s" when it\'s on the left',ex:'שלום = sha-LOM (hello) · שמש = SHE-mesh (sun)',voice:'שלום'},
    {l:'ה',say:'heh — a soft "h"; often silent at the end of a word',ex:'בוקר = BO-ker (morning) · היא = hi (she)',voice:'היא'},
    {l:'צ',say:'tsadi — "ts" as in "cats"',ex:'צדק = TSE-dek (justice)',voice:'צדק'}
  ],
  resources: [
    {icon:'🗣️',t:'Easy Hebrew',d:'Real street interviews with native speakers and subtitles — ideal for natural, everyday Hebrew.',q:'Easy Hebrew street interviews'},
    {icon:'🐢',t:'Piece of Hebrew',d:'Slow, clear Hebrew read aloud with subtitles — perfect for hearing the sounds slowly.',q:'Piece of Hebrew slow Hebrew'},
    {icon:'📚',t:'HebrewPod101',d:'Structured beginner lessons in short, digestible bite-size episodes with audio.',q:'HebrewPod101 beginner Hebrew lessons'},
    {icon:'🎧',t:'Learn Hebrew Pod',d:'Conversational Hebrew built around real dialogues — great for a walk or commute.',q:'Learn Hebrew Pod conversations'},
    {icon:'💬',t:'Michel Thomas Hebrew',d:'A no-notes, listen-and-repeat audio method that gets you speaking quickly.',q:'Michel Thomas Hebrew course'}
  ]
};
