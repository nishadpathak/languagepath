/* ---- oromo ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["oromo"] = {
  name: 'Oromo',
  flag: '🇪🇹',
  tts: 'om-ET',
  dir: 'ltr',
  native: 'Afaan Oromoo',
  script: 'Latin',
  soundTitle: 'Oromo sounds & spelling (Qubee)',
  soundIntro: 'Oromo — Afaan Oromoo — is written in the Latin alphabet called Qubee, and it\'s beautifully regular. Every word is said as it is written. Master these few sounds and you can read any Oromo word aloud.',
  grammar: '<p>Oromo — its own speakers call it <b>Afaan Oromoo</b> — is a <b>Cushitic</b> language in the Afro-Asiatic family, and the most widely spoken native language in Ethiopia. Word order is <b>subject–object–verb</b>, and there are <b>no articles</b>: <i>bishaan</i> can mean \'water\', \'a water\' or \'the water\'. The five vowels (<i>a, e, i, o, u</i>) are pure and can be short or long. To say you want something, use <b>ani barbaada</b> = I want (from the verb <i>barbaaduu</i>, to search for). Oromo is <b>not</b> related to Amharic — Amharic is a Semitic language, Oromo is Cushitic, a different branch of the same big family. A warm <i>galatoomaa</i> (thank you) and <i>maaloo</i> (please) open every door.</p>',
  bridges: '<div class="note">🌍 <b>Cushitic, not Semitic.</b> Despite both being Ethiopian, Oromo and Amharic are <b>not</b> close relatives. Oromo is <b>Cushitic</b> (a branch of the Afro-Asiatic family it shares with Somali and Afar); Amharic is <b>Semitic</b> (cousin of Arabic and Hebrew). Different branch, different grammar, different sounds — trying your Oromo is always a warm gesture.</div><div class="note">☕ <b>Where coffee comes from.</b> Ethiopia is the birthplace of the coffee bean, and the Oromo heartland is coffee country. The loanword <i>kofee</i> looks just like English <i>coffee</i>, and in the <b>coffee ceremony</b> the beans are roasted, ground and brewed fresh in a clay pot to share with guests.</div><div class="note">🇬🇧 <b>English loans.</b> Oromo borrows everyday words you\'ll recognize: <i>kofee</i> (coffee), <i>shaayee</i> (tea, from <i>chai</i>), <i>doktora</i> (doctor), <i>haaspiitala</i> (hospital), <i>isteishinii</i> (station).</div>',
  lessons: [
    { id:1, title:'Greetings & welcome', focus:'akkam · baga nagaan dhuftan · nagaatti',
      steps:[
        {t:'say',text:'Let\'s start with the very first word you\'ll hear everywhere: <span class="inline-tr">akkam</span> — hello (and how are you?). Say it out loud.',tr:'akkam'},
        {t:'words',items:[{tr:'akkam',pr:'AHK-kam',en:'hello / how are you?'},{tr:'baga nagaan dhuftan',pr:'BAH-gah nah-GAHN dhoof-tahn',en:'welcome (glad you came in peace)'},{tr:'nagaatti',pr:'nah-GAHT-tee',en:'goodbye'},{tr:'nagaan',pr:'nah-GAHN',en:'in peace / I\'m fine'}]},
        {t:'chal',en:'Hello!',tr:'Akkam!',pr:'AHK-kam',morph:['akkam = hello']},
        {t:'say',text:'When you arrive, greet with the warm <span class="inline-tr">baga nagaan dhuftan</span> — welcome, literally "glad you came in peace". It\'s the standard welcome.',tr:'baga nagaan dhuftan'},
        {t:'words',items:[{tr:'akkam jirtu?',pr:'AHK-kam jeer-too',en:'How are you? (formal)'},{tr:'nagaan',pr:'nah-GAHN',en:'I\'m fine / in peace'},{tr:'galatoomaa',pr:'gah-lah-TOH-mah',en:'thank you'}]},
        {t:'chal',en:'Hello, how are you?',tr:'Akkam, akkam jirtu?',pr:'AHK-kam, AHK-kam jeer-too',morph:['akkam = hello','akkam jirtu? = how are you?']}
      ],
      blocks:['<code>akkam</code> = hello','<code>baga nagaan dhuftan</code> = welcome','<code>nagaatti</code> = goodbye'] },
    { id:2, title:'Polite phrases', focus:'galatoomaa · maaloo · tola',
      steps:[
        {t:'say',text:'The magic words of courtesy: <span class="inline-tr">galatoomaa</span> — thank you — and <span class="inline-tr">maaloo</span> — please.',tr:'galatoomaa'},
        {t:'words',items:[{tr:'galatoomaa',pr:'gah-lah-TOH-mah',en:'thank you'},{tr:'galatoomaa baay\'ee',pr:'gah-lah-TOH-mah BAY-ay',en:'thank you very much'},{tr:'maaloo',pr:'MAH-loh',en:'please'},{tr:'waantokkoo hin taane',pr:'WAHN-tok-koh heen TAH-neh',en:'you\'re welcome (it\'s nothing)'}]},
        {t:'chal',en:'Thank you very much',tr:'Galatoomaa baay\'ee',pr:'gah-lah-TOH-mah BAY-ay',morph:['galatoomaa = thank you','baay\'ee = very much']},
        {t:'say',text:'To make a request polite, pop <span class="inline-tr">maaloo</span> (please) on the end — just like in English.',tr:'maaloo'},
        {t:'chal',en:'A coffee, please',tr:'Kofee tokko, maaloo',pr:'koh-FAY TOK-koh, MAH-loh',morph:['kofee = coffee','tokko = one','maaloo = please']},
        {t:'say',text:'<span class="inline-tr">tola</span> = okay / fine. A handy word for agreeing to anything.',tr:'tola'},
        {t:'chal',en:'Alright, thank you',tr:'Tola, galatoomaa',pr:'TOH-lah, gah-lah-TOH-mah',morph:['tola = okay','galatoomaa = thank you']}
      ],
      blocks:['<code>galatoomaa</code> = thank you','<code>galatoomaa baay\'ee</code> = thank you very much','<code>maaloo</code> = please · <code>tola</code> = okay'] },
    { id:3, title:'Numbers 1–10', focus:'tokko · lama · sadi · kudhan',
      steps:[
        {t:'say',text:'Numbers are the fastest win. Listen and repeat: <span class="inline-tr">tokko, lama, sadi</span>.',tr:'tokko'},
        {t:'words',items:[{tr:'tokko',pr:'TOK-koh',en:'1'},{tr:'lama',pr:'LAH-mah',en:'2'},{tr:'sadi',pr:'SAH-dee',en:'3'},{tr:'afur',pr:'AH-foor',en:'4'},{tr:'shan',pr:'shahn',en:'5'},{tr:'jaa',pr:'jah',en:'6'},{tr:'torba',pr:'TOR-bah',en:'7'},{tr:'saddeet',pr:'sahd-DEHT',en:'8'},{tr:'sagal',pr:'SAH-gahl',en:'9'},{tr:'kudhan',pr:'koo-DHAHN',en:'10'}]},
        {t:'chal',en:'Two coffees, please',tr:'Kofee lama, maaloo',pr:'koh-FAY LAH-mah, MAH-loh',morph:['kofee = coffee','lama = two','maaloo = please']},
        {t:'say',text:'<span class="inline-tr">meeqa?</span> — how much is it? A key phrase for shopping. Count first, then ask the price.',tr:'meeqa?'},
        {t:'chal',en:'How much is it?',tr:'Meeqa?',pr:'MEH-kah',morph:['meeqa = how much']},
        {t:'chal',en:'It\'s five birr',tr:'Birr shan',pr:'beer shahn',morph:['birr = birr (money)','shan = five']}
      ],
      blocks:['tokko, lama, sadi, afur, shan = 1–5','<code>meeqa?</code> = how much is it?','jaa, torba, saddeet, sagal, kudhan = 6–10'] },
    { id:4, title:'"I want" — ani barbaada', focus:'ani barbaada · bishaan · buddeena · maaloo',
      steps:[
        {t:'say',text:'The magic phrase to order anything: <span class="inline-tr">ani barbaada</span> — I want. Say it out loud.',tr:'ani barbaada'},
        {t:'chal',en:'I want water',tr:'Ani bishaan barbaada',pr:'AH-nee bee-SHAHN bar-BAH-dah',morph:['ani = I','bishaan = water','barbaada = I want']},
        {t:'chal',en:'I want bread',tr:'Ani buddeena barbaada',pr:'AH-nee bood-DAY-nah bar-BAH-dah',morph:['ani = I','buddeena = bread','barbaada = I want']},
        {t:'say',text:'The verb <span class="inline-tr">barbaaduu</span> means "to search for". That\'s why <span class="inline-tr">barbaada</span> becomes "I want / I need".',tr:'barbaaduu'},
        {t:'chal',en:'I want water, please',tr:'Ani bishaan barbaada, maaloo',pr:'AH-nee bee-SHAHN bar-BAH-dah, MAH-loh',morph:['ani = I','bishaan = water','barbaada = I want','maaloo = please']}
      ],
      blocks:['<code>ani barbaada</code> = I want','<code>bishaan</code> / <code>buddeena</code> = water / bread','<code>maaloo</code> = please'] },
    { id:5, title:'Food & drink', focus:'bishaan · buddeena · shaayee · kofee',
      steps:[
        {t:'say',text:'The staples: <span class="inline-tr">bishaan</span> (water), <span class="inline-tr">buddeena</span> (bread), <span class="inline-tr">shaayee</span> (tea), <span class="inline-tr">kofee</span> (coffee).',tr:'bishaan'},
        {t:'words',items:[{tr:'bishaan',pr:'bee-SHAHN',en:'water'},{tr:'buddeena',pr:'bood-DAY-nah',en:'bread'},{tr:'shaayee',pr:'SHAH-yay',en:'tea',link:'≈ chai (via Arabic)'},{tr:'kofee',pr:'koh-FAY',en:'coffee',link:'≈ English coffee'}]},
        {t:'chal',en:'Water and tea, please',tr:'Bishaan fi shaayee, maaloo',pr:'bee-SHAHN fee SHAH-yay, MAH-loh',morph:['bishaan = water','fi = and','shaayee = tea','maaloo = please']},
        {t:'chal',en:'I want coffee',tr:'Ani kofee barbaada',pr:'AH-nee koh-FAY bar-BAH-dah',morph:['ani = I','kofee = coffee','barbaada = I want']},
        {t:'say',text:'<span class="inline-tr">mi\'aawaadha</span> — it\'s delicious. Say it to a cook and watch them smile.',tr:'mi\'aawaadha'},
        {t:'chal',en:'It\'s delicious!',tr:'Mi\'aawaadha!',pr:'mee-A-wah-dah',morph:['mi\'aawaadha = it\'s delicious']}
      ],
      blocks:['<code>bishaan</code> = water · <code>buddeena</code> = bread','<code>shaayee</code> = tea · <code>kofee</code> = coffee','<code>mi\'aawaadha</code> = it\'s delicious'] },
    { id:6, title:'Directions', focus:'eessa? · gara mirgaati · gara bitaati · fuuldura',
      steps:[
        {t:'say',text:'The most useful question on the move: <span class="inline-tr">eessa?</span> — where is…? Say it out loud.',tr:'eessa?'},
        {t:'words',items:[{tr:'eessa?',pr:'EH-sah',en:'Where is...?'},{tr:'gara mirgaati',pr:'GAH-rah meer-GAH-tee',en:'to the right'},{tr:'gara bitaati',pr:'GAH-rah bee-TAH-tee',en:'to the left'},{tr:'fuuldura',pr:'FOOL-doo-rah',en:'straight ahead'},{tr:'isteishinii',pr:'iss-tay-SHEE-nee',en:'the station',link:'≈ English station'}]},
        {t:'chal',en:'Where is the station?',tr:'Eessa isteishinii?',pr:'EH-sah iss-tay-SHEE-nee',morph:['eessa = where is','isteishinii = the station'],link:'≈ English station'},
        {t:'chal',en:'Where is the bathroom?',tr:'Eessa mana fincaanii?',pr:'EH-sah MAH-nah feen-CHAH-nee',morph:['eessa = where is','mana fincaanii = the bathroom']},
        {t:'say',text:'<span class="inline-tr">gara mirgaati</span> = to the right, <span class="inline-tr">gara bitaati</span> = to the left. Straight ahead is <span class="inline-tr">fuuldura</span>.',tr:'gara mirgaati'},
        {t:'chal',en:'Straight ahead',tr:'Fuuldura',pr:'FOOL-doo-rah',morph:['fuuldura = straight ahead']}
      ],
      blocks:['<code>eessa…?</code> = where is…?','<code>gara mirgaati</code> / <code>gara bitaati</code> = right / left','<code>fuuldura</code> = straight ahead'] },
    { id:7, title:'Questions & "do you have…?"', focus:'qabdaa? · jiraa? · maal · eenyu',
      steps:[
        {t:'say',text:'To ask someone if they have something: <span class="inline-tr">qabdaa?</span> — do you have…?',tr:'qabdaa?'},
        {t:'chal',en:'Do you have a table?',tr:'Minjaala qabdaa?',pr:'meen-JAH-lah kab-DAH',morph:['minjaala = table','qabdaa? = do you have?']},
        {t:'say',text:'<span class="inline-tr">jiraa?</span> = is there…? The reply <span class="inline-tr">jira</span> = there is. Very useful.',tr:'jiraa?'},
        {t:'chal',en:'Is there wifi?',tr:'Wifi jiraa?',pr:'WEE-fee jee-RAH',morph:['wifi = wifi','jiraa? = is there?'],link:'≈ English wifi'},
        {t:'say',text:'Other question words: <span class="inline-tr">maal</span> (what), <span class="inline-tr">eenyu</span> (who), <span class="inline-tr">yoom</span> (when), <span class="inline-tr">eessa</span> (where).',tr:'maal'},
        {t:'words',items:[{tr:'maal',pr:'MAHL',en:'what'},{tr:'eenyu',pr:'AYN-yoo',en:'who'},{tr:'yoom',pr:'YOHM',en:'when'},{tr:'eessa',pr:'EH-sah',en:'where'},{tr:'meeqa',pr:'MEH-kah',en:'how much'}]},
        {t:'chal',en:'What is this?',tr:'Kun maal?',pr:'koon MAHL',morph:['kun = this','maal = what']},
        {t:'chal',en:'Do you have bread?',tr:'Buddeena qabdaa?',pr:'bood-DAY-nah kab-DAH',morph:['buddeena = bread','qabdaa? = do you have?']}
      ],
      blocks:['<code>qabdaa…?</code> = do you have…?','<code>jiraa…?</code> = is there…?','<code>maal / eenyu / yoom / eessa</code> = what / who / when / where'] },
    { id:8, title:'Family & people', focus:'maatii · haadha · abbaa · hiriyyaa',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">maatii</span> (family), <span class="inline-tr">haadha</span> (mother), <span class="inline-tr">abbaa</span> (father).',tr:'maatii'},
        {t:'words',items:[{tr:'maatii',pr:'MAH-tee',en:'family'},{tr:'haadha',pr:'HAA-da',en:'mother'},{tr:'abbaa',pr:'AB-baa',en:'father'},{tr:'obbolessa',pr:'ob-boh-LES-sah',en:'brother'},{tr:'obboleettii',pr:'ob-boh-LEC-tee',en:'sister'},{tr:'hiriyyaa',pr:'heer-ee-YAA',en:'friend'}]},
        {t:'chal',en:'I have a brother',tr:'Ani obbolessa qabadha',pr:'AH-nee ob-boh-LES-sah kah-BA-dah',morph:['ani = I','obbolessa = brother','qabadha = I have']},
        {t:'say',text:'<span class="inline-tr">ani qabadha</span> = I have. It\'s the key verb to say what you\'ve got.',tr:'ani qabadha'},
        {t:'chal',en:'I have a family',tr:'Ani maatii qabadha',pr:'AH-nee MAH-tee kah-BA-dah',morph:['ani = I','maatii = family','qabadha = I have']},
        {t:'chal',en:'This is my friend',tr:'Kun hiriyyaa koo',pr:'koon heer-ee-YAA koh',morph:['kun = this','hiriyyaa = friend','koo = my']}
      ],
      blocks:['<code>haadha</code> / <code>abbaa</code> = mother / father','<code>obbolessa</code> / <code>obboleettii</code> = brother / sister','<code>ani qabadha</code> = I have'] },
    { id:9, title:'Time, days & weather', focus:'har\'a · boru · kaleessa · qilleensa',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">har\'a</span>, tomorrow is <span class="inline-tr">boru</span>, yesterday is <span class="inline-tr">kaleessa</span>.',tr:'har\'a'},
        {t:'words',items:[{tr:'har\'a',pr:'HAHR-ah',en:'today'},{tr:'boru',pr:'BOH-roo',en:'tomorrow'},{tr:'kaleessa',pr:'kah-LES-sah',en:'yesterday'},{tr:'guyyaa',pr:'GOO-yah',en:'day'},{tr:'qilleensa',pr:'kee-LEEN-sah',en:'weather / air'}]},
        {t:'chal',en:'See you tomorrow',tr:'Boru wal agarra',pr:'BOH-roo wahl ah-GAH-rah',morph:['boru = tomorrow','wal agarra = we\'ll see each other']},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">qilleensi akkam?</span> — how is the weather?',tr:'qilleensi akkam?'},
        {t:'chal',en:'It\'s raining',tr:'Rooba jira',pr:'ROH-bah jee-RAH',morph:['rooba = rain','jira = there is']}
      ],
      blocks:['<code>har\'a</code> / <code>boru</code> / <code>kaleessa</code> = today / tomorrow / yesterday','<code>qilleensi akkam?</code> = how\'s the weather?'] },
    { id:10, title:'Small talk & your name', focus:'maqaan koo __NAME__ · maqaan kee eenyu?',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">maqaan koo __NAME__</span> — my name is __NAME__.',tr:'maqaan koo __NAME__'},
        {t:'chal',en:'My name is __NAME__',tr:'Maqaan koo __NAME__',pr:'mah-KAHN koh __NAME__',morph:['maqaan koo = my name','__NAME__ = your name']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">maqaan kee eenyu?</span> — what is your name?',tr:'maqaan kee eenyu?'},
        {t:'chal',en:'What\'s your name?',tr:'Maqaan kee eenyu?',pr:'mah-KAHN kay AYN-yoo',morph:['maqaan kee = your name','eenyu = who']},
        {t:'chal',en:'Pleased to meet you',tr:'Ani gammadde!',pr:'AH-nee gahm-MAD-deh',morph:['ani = I','gammadde = I\'m pleased']},
        {t:'say',text:'To ask where someone\'s from: <span class="inline-tr">eessa dhufte?</span> — where are you from? Reply <span class="inline-tr">ani … dhufe</span>.',tr:'eessa dhufte?'},
        {t:'chal',en:'I come from America',tr:'Ani Ameerikaa dhufe',pr:'AH-nee ah-may-REE-kah DOO-feh',morph:['ani = I','Ameerikaa = America','dhufe = I came']}
      ],
      blocks:['<code>maqaan koo __NAME__</code> = my name is…','<code>maqaan kee eenyu?</code> = what\'s your name?','<code>eessa dhufte?</code> = where are you from?'] },
    { id:11, title:'Emergency & health', focus:'gargaarsaa! · doktora · ani hin hubanne',
      steps:[
        {t:'say',text:'The most important word if you need help: <span class="inline-tr">gargaarsaa!</span> — help!',tr:'gargaarsaa!'},
        {t:'words',items:[{tr:'gargaarsaa!',pr:'gar-gaar-SAA',en:'Help!'},{tr:'doktora',pr:'dok-TOH-rah',en:'the doctor',link:'≈ English doctor'},{tr:'haaspiitala',pr:'hahs-pee-TAH-lah',en:'the hospital',link:'≈ English hospital'},{tr:'mana dawaa',pr:'MAH-nah dah-WAH',en:'the pharmacy'},{tr:'Ani hin hubanne',pr:'AH-nee heen hoo-BAHN-neh',en:'I don\'t understand'}]},
        {t:'chal',en:'Help!',tr:'Gargaarsaa!',pr:'gar-gaar-SAA',morph:['gargaarsaa = help']},
        {t:'say',text:'To say you need help: <span class="inline-tr">ani gargaarsa barbaada</span> — I need help.',tr:'ani gargaarsa barbaada'},
        {t:'chal',en:'I need help',tr:'Ani gargaarsa barbaada',pr:'AH-nee gar-gaar-SAH bar-BAH-dah',morph:['ani = I','gargaarsa = help','barbaada = I want / need']},
        {t:'chal',en:'I don\'t understand',tr:'Ani hin hubanne',pr:'AH-nee heen hoo-BAHN-neh',morph:['ani = I','hin hubanne = I don\'t understand']},
        {t:'say',text:'If you\'re unwell, say <span class="inline-tr">ani dhukkuba</span> — I\'m sick. And <span class="inline-tr">doktora barbaada</span> — I need a doctor.',tr:'ani dhukkuba'},
        {t:'chal',en:'I\'m sick',tr:'Ani dhukkuba',pr:'AH-nee duk-KOO-bah',morph:['ani = I','dhukkuba = sick']}
      ],
      blocks:['<code>gargaarsaa!</code> = help!','<code>doktora</code> = the doctor','<code>ani hin hubanne</code> = I don\'t understand'] },
    { id:12, title:'Tying it together', focus:'ani barbaada · akkam · meeqa? · galatoomaa',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolbox. This capstone uses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello, how are you?',tr:'Akkam, akkam jirtu?',pr:'AHK-kam, AHK-kam jeer-too',morph:['akkam = hello','akkam jirtu? = how are you?']},
        {t:'chal',en:'I\'d like water, please',tr:'Ani bishaan barbaada, maaloo',pr:'AH-nee bee-SHAHN bar-BAH-dah, MAH-loh',morph:['ani = I','bishaan = water','barbaada = I want','maaloo = please']},
        {t:'chal',en:'Where is the station?',tr:'Eessa isteishinii?',pr:'EH-sah iss-tay-SHEE-nee',morph:['eessa = where is','isteishinii = the station']},
        {t:'chal',en:'How much is it?',tr:'Meeqa?',pr:'MEH-kah',morph:['meeqa = how much']},
        {t:'chal',en:'It\'s delicious! Thank you!',tr:'Mi\'aawaadha! Galatoomaa!',pr:'mee-A-wah-dah, gah-lah-TOH-mah',morph:['mi\'aawaadha = delicious','galatoomaa = thank you']}
      ],
      blocks:['You built: greetings, ordering, directions, prices, thanks — a full day out in Oromo.'] },
    { id:13, title:'Airport & tickets', focus:'buufata xiyyaaraa · paaspoortii · tikeetii · keessummaa',
      steps:[
        {t:'say',text:'You have landed. The building is the <span class="inline-tr">buufata xiyyaaraa</span>. Your document is a <span class="inline-tr">paaspoortii</span>.',tr:'buufata xiyyaaraa'},
        {t:'words',items:[{tr:'buufata xiyyaaraa',pr:'BOO-fa-ta hee-YAA-raa',en:'airport'},{tr:'paaspoortii',pr:'PAAS-por-tee',en:'passport'},{tr:'tikeetii',pr:'ti-KAY-tee',en:'ticket'},{tr:'keessummaa',pr:'KAY-soom-maa',en:'gate / entrance'}]},
        {t:'chal',en:'Where is the airport?',tr:'Eessa buufata xiyyaaraa?',pr:'EH-sah BOO-fa-ta hee-YAA-raa',morph:['eessa = where is','buufata xiyyaaraa = airport']},
        {t:'chal',en:'Here is my passport',tr:'Kun paaspoortii koo',pr:'koon PAAS-por-tee koh',morph:['kun = this','paaspoortii = passport','koo = my']},
        {t:'chal',en:'A ticket, please',tr:'Tikeetii, maaloo',pr:'ti-KAY-tee, MAH-loh',morph:['tikeetii = ticket','maaloo = please']},
        {t:'chal',en:'Where is the gate?',tr:'Eessa keessummaa?',pr:'EH-sah KAY-soom-maa',morph:['eessa = where is','keessummaa = gate']}
      ],
      blocks:['<code>buufata xiyyaaraa</code> = airport','<code>paaspoortii</code> = passport','<code>tikeetii</code> = ticket'] },
    { id:14, title:'The taxi', focus:'taaksii · deemuu · hoteela · dhaabi',
      steps:[
        {t:'say',text:'The driver is waiting. <span class="inline-tr">taaksii</span> is a loanword. Tell them <span class="inline-tr">ani gara hoteelaa deemuu barbaada</span>.',tr:'taaksii'},
        {t:'words',items:[{tr:'taaksii',pr:'TAAK-see',en:'taxi'},{tr:'konkolaachisaa',pr:'kon-ko-laa-CHEE-saa',en:'driver'},{tr:'ani deemuu barbaada',pr:'AH-nee DAY-moo bar-BAH-dah',en:'I want to go'},{tr:'asitti dhaabi',pr:'ah-SIT-tee DHAA-bee',en:'stop here'}]},
        {t:'chal',en:'Taxi, please',tr:'Taaksii, maaloo',pr:'TAAK-see, MAH-loh',morph:['taaksii = taxi','maaloo = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'Ani gara hoteelaa deemuu barbaada',pr:'AH-nee GAH-rah ho-TAY-laa DAY-moo bar-BAH-dah',morph:['ani = I','gara hoteelaa = to the hotel','deemuu barbaada = I want to go']},
        {t:'chal',en:'Stop here, please',tr:'Asitti dhaabi, maaloo',pr:'ah-SIT-tee DHAA-bee, MAH-loh',morph:['asitti = here','dhaabi = stop','maaloo = please']},
        {t:'chal',en:'How much is it?',tr:'Meeqa?',pr:'MEH-kah',morph:['meeqa = how much']}
      ],
      blocks:['<code>ani gara … deemuu barbaada</code> = I want to go to …','<code>asitti dhaabi</code> = stop here'] },
    { id:15, title:'The hotel', focus:'qabxiinsa · kutaa · furtuu · halkan',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">ani qabxiinsa qaba</span> — I have a reservation.',tr:'qabxiinsa'},
        {t:'words',items:[{tr:'hoteela',pr:'ho-TAY-la',en:'hotel'},{tr:'qabxiinsa',pr:'kab-HEEN-sa',en:'reservation'},{tr:'kutaa',pr:'koo-TAA',en:'room'},{tr:'furtuu',pr:'foor-TOO',en:'key'},{tr:'halkan tokko',pr:'HAL-kan TOH-koh',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'Ani qabxiinsa qaba',pr:'AH-nee kab-HEEN-sa KAH-ba',morph:['ani = I','qabxiinsa = reservation','qaba = I have']},
        {t:'chal',en:'A room for one night, please',tr:'Kutaa halkan tokkoof, maaloo',pr:'koo-TAA HAL-kan TOH-kohf, MAH-loh',morph:['kutaa = room','halkan tokkoof = for one night','maaloo = please']},
        {t:'chal',en:'The key, please',tr:'Furtuu, maaloo',pr:'foor-TOO, MAH-loh',morph:['furtuu = key','maaloo = please']},
        {t:'chal',en:'Where is my room?',tr:'Eessa kutaa koo?',pr:'EH-sah koo-TAA koh',morph:['eessa = where is','kutaa koo = my room']}
      ],
      blocks:['<code>qabxiinsa</code> = reservation','<code>kutaa</code> = room','<code>furtuu</code> = key'] },
    { id:16, title:'Ask for help', focus:'hin hubadhu · suuta · Ingiliffaa',
      steps:[
        {t:'say',text:'When Oromo is too fast: <span class="inline-tr">suuta dubbadhaa, maaloo</span> — speak slowly, please.',tr:'suuta'},
        {t:'words',items:[{tr:'suuta dubbadhaa',pr:'SOO-ta doob-BA-dhaa',en:'speak slowly'},{tr:'irra deebi\'i',pr:'ir-ra DAY-bi-ee',en:'again'},{tr:'Ingiliffaa',pr:'in-gil-IF-faa',en:'English'},{tr:'na gargaaraa?',pr:'nah gar-GAA-raa',en:'can you help me?'}]},
        {t:'chal',en:'I don\'t understand',tr:'Ani hin hubadhu',pr:'AH-nee hin hoo-BA-dhoo',morph:['ani = I','hin hubadhu = I don\'t understand']},
        {t:'chal',en:'Speak slowly, please',tr:'Suuta dubbadhaa, maaloo',pr:'SOO-ta doob-BA-dhaa, MAH-loh',morph:['suuta = slowly','dubbadhaa = speak','maaloo = please']},
        {t:'chal',en:'Can you help me?',tr:'Na gargaaraa?',pr:'nah gar-GAA-raa',morph:['na = me','gargaaraa? = will you help?']},
        {t:'chal',en:'Do you speak English?',tr:'Ingiliffaa ni dubbattaa?',pr:'in-gil-IF-faa nee doob-BAT-taa',morph:['Ingiliffaa = English','ni dubbattaa? = do you speak?']}
      ],
      blocks:['<code>suuta dubbadhaa</code> = speak slowly','<code>Ingiliffaa ni dubbattaa?</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'cafe', title:'☕ At a café', emoji:'☕', turns:[
      {who:'You',tr:'Akkam! Kofee tokko, maaloo.',pr:'AHK-kam, koh-FAY TOK-koh, MAH-loh',en:'Hello! A coffee, please.'},
      {who:'Server',tr:'Baga nagaan dhuftan!',pr:'BAH-gah nah-GAHN dhoof-tahn',en:'Welcome!'},
      {who:'You',tr:'Meeqa?',pr:'MEH-kah',en:'How much is it?'},
      {who:'Server',tr:'Birr lama.',pr:'beer LAH-mah',en:'Two birr.'},
      {who:'You',tr:'Tola, galatoomaa!',pr:'TOH-lah, gah-lah-TOH-mah',en:'OK, thank you!'}
    ]},
    { id:'transport', title:'🚌 On the bus', emoji:'🚌', turns:[
      {who:'You',tr:'Akkam! Ani isteishinii deemuu barbaada.',pr:'AHK-kam, AH-nee iss-tay-SHEE-nee DAY-moo bar-BAH-dah',en:'Hello! I want to go to the station.'},
      {who:'Driver',tr:'Tola, koottu.',pr:'TOH-lah, KOHT-tuu',en:'OK, come along.'},
      {who:'You',tr:'Meeqa?',pr:'MEH-kah',en:'How much is it?'},
      {who:'Driver',tr:'Birr shan.',pr:'beer shahn',en:'Five birr.'},
      {who:'You',tr:'Tola, galatoomaa!',pr:'TOH-lah, gah-lah-TOH-mah',en:'OK, thank you!'}
    ]},
    { id:'restaurant', title:'🍽️ At a restaurant', emoji:'🍽️', turns:[
      {who:'Waiter',tr:'Baga nagaan dhuftan! Maal barbaadda?',pr:'BAH-gah nah-GAHN dhoof-tahn, MAHL bar-BAHD-dah',en:'Welcome! What would you like?'},
      {who:'You',tr:'Ani buddeena fi shaayee barbaada.',pr:'AH-nee bood-DAY-nah fee SHAH-yay bar-BAH-dah',en:'I\'d like bread and tea.'},
      {who:'Waiter',tr:'Tola, wanti biraa?',pr:'TOH-lah, WAHN-tee bee-RAH',en:'OK, anything else?'},
      {who:'You',tr:'Kofee tokko, maaloo. Meeqa?',pr:'koh-FAY TOK-koh, MAH-loh, MEH-kah',en:'One coffee, please. How much is it?'},
      {who:'Waiter',tr:'Birr afur.',pr:'beer AH-foor',en:'Four birr.'},
      {who:'You',tr:'Mi\'aawaadha! Galatoomaa!',pr:'mee-A-wah-dah, gah-lah-TOH-mah',en:'Delicious! Thank you!'}
    ]},
    { id:'market', title:'🧺 At the market', emoji:'🧺', turns:[
      {who:'You',tr:'Kun meeqa?',pr:'koon MEH-kah',en:'How much is this?'},
      {who:'Seller',tr:'Birr shan.',pr:'beer shahn',en:'Five birr.'},
      {who:'You',tr:'Baay\'ee qaalii. Birr afur ta\'aa?',pr:'BAY-ay kah-LEE, beer AH-foor tah-AH',en:'That\'s too expensive. Can it be four birr?'},
      {who:'Seller',tr:'Tola, birr afur.',pr:'TOH-lah, beer AH-foor',en:'OK, four birr.'},
      {who:'You',tr:'Tola, ani fudhadha. Galatoomaa!',pr:'TOH-lah, AH-nee foo-DHAH-dah, gah-lah-TOH-mah',en:'OK, I\'ll take it. Thank you!'}
    ]}
  ],
  pocket: [
    {tr:'Akkam',pr:'AHK-kam',en:'Hello / how are you?',c:'Greetings'},
    {tr:'Baga nagaan dhuftan',pr:'BAH-gah nah-GAHN dhoof-tahn',en:'Welcome',c:'Greetings'},
    {tr:'Nagaatti',pr:'nah-GAHT-tee',en:'Goodbye',c:'Greetings'},
    {tr:'Akkam jirtu?',pr:'AHK-kam jeer-too',en:'How are you?',c:'Greetings'},
    {tr:'Nagaan',pr:'nah-GAHN',en:'I\'m fine',c:'Greetings'},
    {tr:'Maqaan koo __NAME__',pr:'mah-KAHN koh',en:'My name is...',c:'Greetings'},
    {tr:'Galatoomaa',pr:'gah-lah-TOH-mah',en:'Thank you',c:'Courtesy'},
    {tr:'Galatoomaa baay\'ee',pr:'gah-lah-TOH-mah BAY-ay',en:'Thanks a lot',c:'Courtesy'},
    {tr:'Maaloo',pr:'MAH-loh',en:'Please',c:'Courtesy'},
    {tr:'Tola',pr:'TOH-lah',en:'OK / fine',c:'Courtesy'},
    {tr:'Waantokkoo hin taane',pr:'WAHN-tok-koh heen TAH-neh',en:'You\'re welcome',c:'Courtesy'},
    {tr:'Tokko',pr:'TOK-koh',en:'1',c:'Numbers'},
    {tr:'Lama',pr:'LAH-mah',en:'2',c:'Numbers'},
    {tr:'Sadi',pr:'SAH-dee',en:'3',c:'Numbers'},
    {tr:'Afur',pr:'AH-foor',en:'4',c:'Numbers'},
    {tr:'Shan',pr:'shahn',en:'5',c:'Numbers'},
    {tr:'Kudhan',pr:'koo-DHAHN',en:'10',c:'Numbers'},
    {tr:'Bishaan',pr:'bee-SHAHN',en:'water',c:'Food'},
    {tr:'Buddeena',pr:'bood-DAY-nah',en:'bread',c:'Food'},
    {tr:'Shaayee',pr:'SHAH-yay',en:'tea',c:'Food'},
    {tr:'Kofee',pr:'koh-FAY',en:'coffee',c:'Food'},
    {tr:'Mi\'aawaadha',pr:'mee-A-wah-dah',en:'it\'s delicious',c:'Food'},
    {tr:'Eessa?',pr:'EH-sah',en:'Where is...?',c:'Directions'},
    {tr:'Gara mirgaati',pr:'GAH-rah meer-GAH-tee',en:'to the right',c:'Directions'},
    {tr:'Gara bitaati',pr:'GAH-rah bee-TAH-tee',en:'to the left',c:'Directions'},
    {tr:'Fuuldura',pr:'FOOL-doo-rah',en:'straight ahead',c:'Directions'},
    {tr:'Isteishinii',pr:'iss-tay-SHEE-nee',en:'the station',c:'Directions'},
    {tr:'Meeqa?',pr:'MEH-kah',en:'how much is it?',c:'Shopping'},
    {tr:'Ani barbaada',pr:'AH-nee bar-BAH-dah',en:'I want',c:'Shopping'},
    {tr:'Birr',pr:'beer',en:'money / birr',c:'Shopping'},
    {tr:'Baay\'ee qaalii',pr:'BAY-ay kah-LEE',en:'too expensive',c:'Shopping'},
    {tr:'Gargaarsaa!',pr:'gar-gaar-SAA',en:'Help!',c:'Emergency'},
    {tr:'Doktora',pr:'dok-TOH-rah',en:'the doctor',c:'Emergency'},
    {tr:'Ani hin hubanne',pr:'AH-nee heen hoo-BAHN-neh',en:'I don\'t understand',c:'Emergency'},
    {tr:'Ani gargaarsa barbaada',pr:'AH-nee gar-gaar-SAH bar-BAH-dah',en:'I need help',c:'Emergency'},
    {tr:'Mana fincaanii',pr:'MAH-nah feen-CHAH-nee',en:'the bathroom',c:'Emergency'},
    {tr:'Har\'a',pr:'HAHR-ah',en:'today',c:'Time'},
    {tr:'Boru',pr:'BOH-roo',en:'tomorrow',c:'Time'},
    {tr:'Kaleessa',pr:'kah-LES-sah',en:'yesterday',c:'Time'},
    {tr:'Buufata xiyyaaraa',pr:'BOO-fa-ta hee-YAA-raa',en:'airport',c:'Travel'},
    {tr:'Paaspoortii',pr:'PAAS-por-tee',en:'passport',c:'Travel'},
    {tr:'Ani gara hoteelaa deemuu barbaada',pr:'AH-nee GAH-rah ho-TAY-laa DAY-moo bar-BAH-dah',en:'I want to go to the hotel',c:'Travel'},
    {tr:'Ani qabxiinsa qaba',pr:'AH-nee kab-HEEN-sa KAH-ba',en:'I have a reservation',c:'Travel'},
    {tr:'Suuta dubbadhaa, maaloo',pr:'SOO-ta doob-BA-dhaa, MAH-loh',en:'Speak slowly, please',c:'Travel'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Shopping','Emergency','Time', 'Travel'],
  culture: [
    {icon:'☕',title:'Coffee is a ceremony',body:'Ethiopia is the birthplace of coffee, and the Oromo heartland is coffee country. The coffee ceremony is a beloved ritual: fresh beans are roasted, ground by hand and brewed three times in a clay pot to share with guests. In Oromo it\'s <b>buna</b> — and the busy <i>kofee</i> of a café is the everyday shortcut.'},
    {icon:'🌍',title:'Ethiopia\'s largest language',body:'Oromo — Afaan Oromoo — is the most widely spoken native language in Ethiopia, with tens of millions of speakers, and the largest Cushitic language in the world. It\'s spoken across the Oromia region and far beyond, and it\'s growing fast online and in broadcast media.'},
    {icon:'🗳️',title:'The Gadaa system',body:'The Gadaa system is Oromo\'s indigenous democratic system of governance — leaders are elected and serve in eight-year cycles, with power passing peacefully between generations. In 2016 UNESCO recognised it as a piece of Intangible Cultural Heritage.'},
    {icon:'🌳',title:'The Oda tree',body:'The Oda — the sycamore fig — is a powerful symbol of Oromo identity. Under its wide shade, community councils and Gadaa assemblies have gathered for generations to debate and reach agreement, making the tree a symbol of unity and free speech.'},
    {icon:'🤝',title:'Greetings come first',body:'Never jump straight to business. Greet first — a warm "Akkam?" and a handshake set the tone, and elders are always shown extra respect. A little effort with the greeting earns you enormous goodwill.'},
    {icon:'🗣️',title:'Oromo is not Amharic',body:'Both are Ethiopian languages, but they\'re from different branches of the Afro-Asiatic family: Oromo is <b>Cushitic</b>, Amharic is <b>Semitic</b>. They\'re not mutually intelligible. Try your Oromo with a smile — effort matters far more than perfection.'}
  ],
  sounds: [
    {l:'a e i o u',say:'five pure vowels — "ah, eh, ee, oh, oo", never glided',ex:'bishaan = bee-SHAHN (water)',voice:'bishaan'},
    {l:'aa ee ii oo uu',say:'long vowels are held longer, which can change the meaning',ex:'galatoomaa = gah-lah-TOH-mah',voice:'galatoomaa'},
    {l:'c (ch)',say:'"ch" as in church',ex:'cimaa = CHI-maa (strong)',voice:'cimaa'},
    {l:'dh',say:'an implosive "d" made with a soft catch in the throat',ex:'dhugaa = dhoo-GAH (drink!)',voice:'dhugaa'},
    {l:'x',say:'an ejective "t" — pushed out with a small burst of air',ex:'xiqqaa = tih-KAH (small)',voice:'xiqqaa'},
    {l:'q',say:'an ejective "k" — a hard k caught deep in the throat',ex:'qilleensa = kee-LEEN-sah (weather / air)',voice:'qilleensa'},
    {l:'ny',say:'like "ny" in canyon',ex:'nyaata = NYAH-tah (food)',voice:'nyaata'},
    {l:'sh',say:'"sh" as in shoe',ex:'shaayee = SHAH-yay (tea)',voice:'shaayee'}
  ],
  resources: [
    {icon:'🗣️',t:'Easy Oromo',d:'Real street interviews with native Oromo speakers and subtitles — natural everyday conversation.',q:'Easy Oromo street interviews'},
    {icon:'🐢',t:'OromoPod101',d:'Structured beginner audio and video lessons with clear word lists and repetition.',q:'OromoPod101 beginner lessons'},
    {icon:'📚',t:'FSI Oromo',d:'The classic free Foreign Service Institute course — thorough and a great free workbook.',q:'FSI Oromo course'},
    {icon:'🎧',t:'Oromo conversation practice',d:'Slow, clear dialogues for listening — perfect for a walk or commute.',q:'slow Oromo conversation for learners'},
    {icon:'🎶',t:'Oromo music with lyrics',d:'Learn through Ethiopian Oromo songs with subtitles — catchy and memorable.',q:'Oromo songs with lyrics'}
  ]
};
