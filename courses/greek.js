/* ---- greek ---- */
window.LP_COURSES = window.LP_COURSES || {};
window.LP_COURSES["greek"] = {
  name: 'Greek',
  flag: '🇬🇷',
  tts: 'el-GR',
  dir: 'ltr',
  soundTitle: 'Greek sounds & spelling',
  soundIntro: 'Greek has its own alphabet, but it\'s very regular: once you learn a few letters — θ, δ, χ and a couple of vowel combinations — you can sound out almost any word.',
  grammar: '<p>Greek uses its own alphabet, but it\'s very regular to sound out. Every vowel is short and pure, and the stress always falls where the little accent mark (τόνος) is written — put the emphasis there, as in <b>ευχαριστώ</b>. Greek has three genders — masculine <b>ο</b>, feminine <b>η</b>, neuter <b>το</b> — and the small word for \'the\' changes to match: <b>ο</b> σταθμός, <b>η</b> τουαλέτα, <b>το</b> ψωμί. Word order is flexible, so once you know a handful of phrases you can start combining them.</p>',
  bridges: '<div class="note">🇬🇧 <b>English.</b> Greek words are hidden all over your vocabulary: <i>phone</i> (φωνή, voice), <i>theatre</i> (θέατρο), <i>problem</i> (πρόβλημα), <i>psychology</i>, <i>economy</i>, <i>democracy</i>, even <i>alphabet</i> comes from the first two Greek letters.</div><div class="note">🔬 <b>Science &amp; math.</b> Greek loans are everywhere: <i>geometry</i>, <i>biology</i>, <i>geography</i>, <i>telephone</i>, and <i>octopus</i> from οκτώ (eight).</div>',
  lessons: [
    { id:1, title:'Greetings & saying hello', focus:'Γειά σου · Καλημέρα · Καλησπέρα',
      steps:[
        {t:'say',text:'The first word you\'ll ever need: <span class="inline-tr">Γειά σου</span> — hello. It\'s informal, for friends and people your own age.',tr:'Γειά σου'},
        {t:'words',items:[{tr:'Γειά σου',pr:'yah soo',en:'hi / bye (informal)'},{tr:'Καλημέρα',pr:'ka-lee-MEH-ra',en:'good morning'},{tr:'Καλησπέρα',pr:'ka-lee-SPEH-ra',en:'good evening'},{tr:'Γειά σας',pr:'yah sas',en:'hello (formal / plural)'},{tr:'Αντίο',pr:'an-DEE-o',en:'goodbye'}]},
        {t:'chal',en:'Hello!',tr:'Γειά σου!',pr:'yah soo',morph:['γειά σου = hello (informal)']},
        {t:'say',text:'For the morning, use <span class="inline-tr">Καλημέρα</span> — literally \'good day\'.',tr:'Καλημέρα'},
        {t:'chal',en:'Good morning!',tr:'Καλημέρα!',pr:'ka-lee-MEH-ra',morph:['καλημέρα = good morning']},
        {t:'say',text:'To be polite with strangers or elders, use <span class="inline-tr">Γειά σας</span> — the formal \'you\'.',tr:'Γειά σας'},
        {t:'chal',en:'Hello (formal)',tr:'Γειά σας',pr:'yah sas',morph:['γειά σας = hello (formal)']}
      ],
      blocks:['<code>Γειά σου</code> = hi / bye (informal)','<code>Καλημέρα</code> = good morning','<code>Καλησπέρα</code> = good evening','<code>Γειά σας</code> = hello (formal)'] },
    { id:2, title:'Being polite', focus:'ευχαριστώ · παρακαλώ · συγνώμη',
      steps:[
        {t:'say',text:'The all-important <span class="inline-tr">Ευχαριστώ</span> — thank you. You\'ll say it a hundred times a day in Greece.',tr:'Ευχαριστώ'},
        {t:'words',items:[{tr:'Ευχαριστώ',pr:'ef-kha-ree-STOH',en:'thank you'},{tr:'Παρακαλώ',pr:'pa-ra-ka-LOH',en:'please / you\'re welcome'},{tr:'Συγνώμη',pr:'see-GNO-mee',en:'sorry / excuse me'},{tr:'Ναι',pr:'neh',en:'yes'},{tr:'Όχι',pr:'O-khee',en:'no'}]},
        {t:'chal',en:'Thank you',tr:'Ευχαριστώ',pr:'ef-kha-ree-STOH',morph:['ευχαριστώ = thank you']},
        {t:'say',text:'<span class="inline-tr">Παρακαλώ</span> does double duty: \'please\' and \'you\'re welcome\'.',tr:'Παρακαλώ'},
        {t:'chal',en:'You\'re welcome',tr:'Παρακαλώ',pr:'pa-ra-ka-LOH',morph:['παρακαλώ = you\'re welcome / please']},
        {t:'say',text:'To get someone\'s attention or apologize: <span class="inline-tr">Συγνώμη</span> — sorry / excuse me.',tr:'Συγνώμη'},
        {t:'chal',en:'Sorry / excuse me',tr:'Συγνώμη',pr:'see-GNO-mee',morph:['συγνώμη = sorry / excuse me']}
      ],
      blocks:['<code>ευχαριστώ</code> = thank you','<code>παρακαλώ</code> = please / you\'re welcome','<code>συγνώμη</code> = sorry / excuse me','<code>ναι / όχι</code> = yes / no'] },
    { id:3, title:'Numbers 1–10', focus:'ένα · δύο · τρία · δέκα',
      steps:[
        {t:'say',text:'Numbers unlock prices and times. Listen and repeat: <span class="inline-tr">ένα, δύο, τρία</span>.',tr:'ένα'},
        {t:'words',items:[{tr:'ένα',pr:'EH-na',en:'1'},{tr:'δύο',pr:'DHEE-o',en:'2'},{tr:'τρία',pr:'TREE-a',en:'3',link:'≈ English tri- (triangle, trio)'},{tr:'τέσσερα',pr:'TEH-se-ra',en:'4'},{tr:'πέντε',pr:'PEN-de',en:'5'},{tr:'δέκα',pr:'DHEH-ka',en:'10'}]},
        {t:'chal',en:'Two coffees, please',tr:'Δύο καφέδες, παρακαλώ',pr:'DHEE-o ka-FEH-dhes, pa-ra-ka-LOH',morph:['δύο = two','καφέδες = coffees','παρακαλώ = please']},
        {t:'say',text:'To shop, you\'ll need <span class="inline-tr">Πόσο κάνει;</span> — how much is it?',tr:'Πόσο κάνει;'},
        {t:'chal',en:'How much is it?',tr:'Πόσο κάνει;',pr:'PO-so KA-nee',morph:['πόσο = how much','κάνει = does it cost']},
        {t:'chal',en:'It\'s five euros',tr:'Πέντε ευρώ',pr:'PEN-de EV-ro',morph:['πέντε = five','ευρώ = euros']}
      ],
      blocks:['ένα, δύο, τρία, τέσσερα, πέντε = 1–5','<code>πόσο κάνει;</code> = how much is it?'] },
    { id:4, title:'"I want" — the verb θέλω', focus:'θέλω · θέλουμε · έναν / μία',
      steps:[
        {t:'say',text:'To say what you want: <span class="inline-tr">θέλω</span> — I want.',tr:'θέλω'},
        {t:'say',text:'<span class="inline-tr">έναν</span> is \'a\' for masculine nouns, <span class="inline-tr">μία</span> for feminine. A coffee is masculine → <span class="inline-tr">έναν καφέ</span>.',tr:'έναν'},
        {t:'chal',en:'I want a coffee',tr:'Θέλω έναν καφέ',pr:'THEH-lo EH-nan ka-FEH',morph:['θέλω = I want','έναν καφέ = a coffee']},
        {t:'chal',en:'I want water',tr:'Θέλω νερό',pr:'THEH-lo ne-RO',morph:['θέλω = I want','νερό = water']},
        {t:'say',text:'For \'we want\', change the ending: <span class="inline-tr">θέλουμε</span>.',tr:'θέλουμε'},
        {t:'chal',en:'We want a table',tr:'Θέλουμε ένα τραπέζι',pr:'THEH-loo-meh EH-na tra-PE-zee',morph:['θέλουμε = we want','ένα τραπέζι = a table']},
        {t:'chal',en:'I want the bill',tr:'Θέλω τον λογαριασμό',pr:'THEH-lo ton lo-gha-ree-az-MO',morph:['θέλω = I want','τον λογαριασμό = the bill']}
      ],
      blocks:['<code>θέλω</code> = I want','<code>θέλουμε</code> = we want','<code>έναν / μία</code> = a (masc / fem)'] },
    { id:5, title:'Food & drink', focus:'νερό · ψωμί · καφές · το μενού',
      steps:[
        {t:'say',text:'Hungry? Key words: <span class="inline-tr">νερό</span> (water), <span class="inline-tr">ψωμί</span> (bread), <span class="inline-tr">καφές</span> (coffee).',tr:'νερό'},
        {t:'words',items:[{tr:'νερό',pr:'ne-RO',en:'water'},{tr:'ψωμί',pr:'pso-MEE',en:'bread'},{tr:'καφές',pr:'ka-FEH',en:'coffee',link:'≈ English coffee'},{tr:'κρασί',pr:'kra-SEE',en:'wine'},{tr:'το μενού',pr:'to me-NOO',en:'the menu',link:'≈ English menu'},{tr:'ο λογαριασμός',pr:'o lo-gha-ree-az-MOS',en:'the bill'}]},
        {t:'chal',en:'Water and bread, please',tr:'Νερό και ψωμί, παρακαλώ',pr:'ne-RO ke pso-MEE, pa-ra-ka-LOH',morph:['νερό = water','και = and','ψωμί = bread']},
        {t:'chal',en:'I want the menu',tr:'Θέλω το μενού',pr:'THEH-lo to me-NOO',morph:['θέλω = I want','το μενού = the menu']},
        {t:'say',text:'<span class="inline-tr">νόστιμο</span> = delicious. Say it and the chef will love you.',tr:'νόστιμο'},
        {t:'chal',en:'It\'s delicious!',tr:'Είναι νόστιμο!',pr:'EE-ne NO-stee-mo',morph:['είναι = it is','νόστιμο = delicious']}
      ],
      blocks:['<code>νερό</code>, <code>ψωμί</code>, <code>καφές</code> = water, bread, coffee','<code>ο λογαριασμός</code> = the bill','<code>νόστιμο</code> = delicious'] },
    { id:6, title:'Getting around', focus:'πού είναι; · δεξιά · αριστερά · ευθεία',
      steps:[
        {t:'say',text:'The most useful question anywhere: <span class="inline-tr">Πού είναι…;</span> — where is…?',tr:'Πού είναι…'},
        {t:'words',items:[{tr:'Πού είναι...?',pr:'poo EE-ne',en:'Where is...?'},{tr:'δεξιά',pr:'dhe-KSIA',en:'to the right'},{tr:'αριστερά',pr:'a-ree-ste-RA',en:'to the left'},{tr:'ευθεία',pr:'ef-THEE-a',en:'straight ahead'},{tr:'ο σταθμός',pr:'o stath-MOS',en:'the station'},{tr:'η τουαλέτα',pr:'ee too-a-LE-ta',en:'the bathroom',link:'≈ English toilet'}]},
        {t:'chal',en:'Where is the station?',tr:'Πού είναι ο σταθμός;',pr:'poo EE-ne o stath-MOS',morph:['πού = where','είναι = is','ο σταθμός = the station']},
        {t:'chal',en:'Where is the bathroom?',tr:'Πού είναι η τουαλέτα;',pr:'poo EE-ne ee too-a-LE-ta',morph:['πού = where','είναι = is','η τουαλέτα = the bathroom']},
        {t:'say',text:'<span class="inline-tr">δεξιά</span> and <span class="inline-tr">αριστερά</span> tell you which way to turn. Straight ahead is <span class="inline-tr">ευθεία</span>.',tr:'ευθεία'},
        {t:'chal',en:'Straight ahead',tr:'Ευθεία',pr:'ef-THEE-a',morph:['ευθεία = straight ahead']}
      ],
      blocks:['<code>πού είναι…?</code> = where is…?','<code>δεξιά / αριστερά</code> = right / left','<code>ευθεία</code> = straight ahead'] },
    { id:7, title:'Questions & "do you have…?"', focus:'έχετε; · υπάρχει; · μπορώ;',
      steps:[
        {t:'say',text:'To ask if someone has something: <span class="inline-tr">Έχεις…;</span> (informal) or <span class="inline-tr">Έχετε…;</span> (formal / plural).',tr:'Έχετε'},
        {t:'chal',en:'Do you have a table?',tr:'Έχετε τραπέζι;',pr:'EH-khe-te tra-PE-zee',morph:['έχετε = do you have','τραπέζι = a table']},
        {t:'say',text:'<span class="inline-tr">Υπάρχει…;</span> = is there…? Very handy.',tr:'Υπάρχει'},
        {t:'chal',en:'Is there wifi?',tr:'Υπάρχει wifi;',pr:'ee-PAR-khee wifi',morph:['υπάρχει = is there','wifi = wifi']},
        {t:'say',text:'<span class="inline-tr">Μπορώ…;</span> = may I…? Use it for polite requests.',tr:'Μπορώ'},
        {t:'chal',en:'May I pay?',tr:'Μπορώ να πληρώσω;',pr:'bo-RO na plee-RO-so',morph:['μπορώ = may I','να πληρώσω = to pay']}
      ],
      blocks:['<code>έχετε…?</code> = do you have…?','<code>υπάρχει…?</code> = is there…?','<code>μπορώ…?</code> = may I…?'] },
    { id:8, title:'Family & people', focus:'οικογένεια · μητέρα · πατέρας · φίλος',
      steps:[
        {t:'say',text:'Family words: <span class="inline-tr">οικογένεια</span> (family), <span class="inline-tr">μητέρα</span> (mother), <span class="inline-tr">πατέρας</span> (father).',tr:'οικογένεια'},
        {t:'words',items:[{tr:'η οικογένεια',pr:'ee ee-ko-YEH-nee-a',en:'the family'},{tr:'η μητέρα',pr:'ee mee-TEH-ra',en:'the mother'},{tr:'ο πατέρας',pr:'o pa-TEH-ras',en:'the father'},{tr:'η αδερφή',pr:'ee a-dher-FEE',en:'the sister'},{tr:'ο αδερφός',pr:'o a-dher-FOS',en:'the brother'},{tr:'ο φίλος',pr:'o FEE-los',en:'the friend',link:'≈ English phil(o)- (philosophy)'}]},
        {t:'chal',en:'I have a friend',tr:'Έχω έναν φίλο',pr:'EH-kho EH-nan FEE-lo',morph:['έχω = I have','έναν φίλο = a friend']},
        {t:'say',text:'<span class="inline-tr">Έχω</span> = I have. It\'s the key verb for saying what you\'ve got.',tr:'Έχω'},
        {t:'chal',en:'I have a family',tr:'Έχω μια οικογένεια',pr:'EH-kho mya ee-ko-YEH-nee-a',morph:['έχω = I have','μια οικογένεια = a family']}
      ],
      blocks:['<code>μητέρα / πατέρας</code> = mother / father','<code>αδερφή / αδερφός</code> = sister / brother','<code>φίλος</code> = friend','<code>έχω</code> = I have'] },
    { id:9, title:'Time & weather', focus:'σήμερα · αύριο · τι καιρό κάνει;',
      steps:[
        {t:'say',text:'Today is <span class="inline-tr">σήμερα</span>, tomorrow is <span class="inline-tr">αύριο</span>.',tr:'σήμερα'},
        {t:'words',items:[{tr:'σήμερα',pr:'SEE-me-ra',en:'today'},{tr:'αύριο',pr:'AV-ree-o',en:'tomorrow'},{tr:'τώρα',pr:'TO-ra',en:'now'},{tr:'τι καιρό κάνει;',pr:'tee ke-RO KA-nee',en:'what\'s the weather like?'},{tr:'βρέχει',pr:'VRE-khee',en:'it\'s raining'}]},
        {t:'chal',en:'See you tomorrow',tr:'Τα λέμε αύριο',pr:'ta LE-me AV-ree-o',morph:['τα λέμε = see you','αύριο = tomorrow']},
        {t:'say',text:'Ask about the weather: <span class="inline-tr">Τι καιρό κάνει;</span>',tr:'Τι καιρό κάνει;'},
        {t:'chal',en:'It\'s raining',tr:'Βρέχει',pr:'VRE-khee',morph:['βρέχει = it\'s raining']}
      ],
      blocks:['<code>σήμερα / αύριο</code> = today / tomorrow','<code>τι καιρό κάνει;</code> = what\'s the weather?','<code>βρέχει</code> = it\'s raining.'] },
    { id:10, title:'Small talk & your name', focus:'με λένε · πώς σε λένε; · χαίρω πολύ',
      steps:[
        {t:'say',text:'Introduce yourself: <span class="inline-tr">Με λένε…</span> = my name is…, and <span class="inline-tr">Χαίρω πολύ</span> = pleased to meet you.',tr:'Με λένε'},
        {t:'chal',en:'My name is __NAME__',tr:'Με λένε __NAME__',pr:'me LE-ne __NAME__',morph:['με λένε = my name is','__NAME__ = your name']},
        {t:'say',text:'To ask someone\'s name: <span class="inline-tr">Πώς σε λένε;</span>',tr:'Πώς σε λένε;'},
        {t:'chal',en:'What\'s your name?',tr:'Πώς σε λένε;',pr:'pos se LE-ne',morph:['πώς = how','σε λένε = do they call you?']},
        {t:'say',text:'To ask where someone is from: <span class="inline-tr">Από πού είσαι;</span>',tr:'Από πού είσαι;'},
        {t:'chal',en:'I\'m from England',tr:'Είμαι από την Αγγλία',pr:'EE-me a-PO teen an-GLEE-a',morph:['είμαι = I am','από την Αγγλία = from England']},
        {t:'chal',en:'Pleased to meet you',tr:'Χαίρω πολύ',pr:'KHE-ro po-LEE',morph:['χαίρω πολύ = pleased to meet you']}
      ],
      blocks:['<code>με λένε…</code> = my name is…','<code>πώς σε λένε;</code> = what\'s your name?','<code>χαίρω πολύ</code> = pleased to meet you'] },
    { id:11, title:'Health & emergency', focus:'βοήθεια · γιατρός · φαρμακείο · δεν καταλαβαίνω',
      steps:[
        {t:'say',text:'If you need help, shout <span class="inline-tr">Βοήθεια!</span> Then: <span class="inline-tr">ο γιατρός</span> (doctor), <span class="inline-tr">το φαρμακείο</span> (pharmacy).',tr:'Βοήθεια'},
        {t:'words',items:[{tr:'Βοήθεια!',pr:'vo-EE-thee-a',en:'Help!'},{tr:'ο γιατρός',pr:'o ya-TROS',en:'the doctor',link:'≈ English -iatrics (psychiatry)'},{tr:'το φαρμακείο',pr:'to far-ma-KEE-o',en:'the pharmacy',link:'≈ English pharmacy'},{tr:'Δεν καταλαβαίνω',pr:'dhen ka-ta-la-VE-no',en:'I don\'t understand'},{tr:'Πονάει εδώ',pr:'po-NA-ee e-THO',en:'it hurts here'}]},
        {t:'chal',en:'Help!',tr:'Βοήθεια!',pr:'vo-EE-thee-a',morph:['βοήθεια = help']},
        {t:'chal',en:'I don\'t understand',tr:'Δεν καταλαβαίνω',pr:'dhen ka-ta-la-VE-no',morph:['δεν = not','καταλαβαίνω = I understand']},
        {t:'say',text:'To say you need help: <span class="inline-tr">Χρειάζομαι βοήθεια</span>.',tr:'Χρειάζομαι βοήθεια'},
        {t:'chal',en:'I need help',tr:'Χρειάζομαι βοήθεια',pr:'khree-A-zo-me vo-EE-thee-a',morph:['χρειάζομαι = I need','βοήθεια = help']}
      ],
      blocks:['<code>βοήθεια</code> = help','<code>ο γιατρός</code> = the doctor','<code>το φαρμακείο</code> = the pharmacy','<code>δεν καταλαβαίνω</code> = I don\'t understand'] },
    { id:12, title:'Tying it together', focus:'a capstone conversation with what you\'ve learned',
      steps:[
        {t:'say',text:'Great — you\'ve built a real toolbox. This capstone uses only words you\'ve met. Build each line yourself before revealing.'},
        {t:'chal',en:'Hello, how are you?',tr:'Γειά σου, τι κάνεις;',pr:'yah soo, tee KA-nees',morph:['γειά σου = hi','τι κάνεις; = how are you?']},
        {t:'chal',en:'I\'d like a coffee, please',tr:'Θέλω έναν καφέ, παρακαλώ',pr:'THEH-lo EH-nan ka-FEH, pa-ra-ka-LOH',morph:['θέλω = I want','έναν καφέ = a coffee','παρακαλώ = please']},
        {t:'chal',en:'Where is the station?',tr:'Πού είναι ο σταθμός;',pr:'poo EE-ne o stath-MOS',morph:['πού = where','είναι = is','ο σταθμός = the station']},
        {t:'chal',en:'How much is it?',tr:'Πόσο κάνει;',pr:'PO-so KA-nee',morph:['πόσο = how much','κάνει = does it cost']},
        {t:'chal',en:'Thank you very much!',tr:'Ευχαριστώ πολύ!',pr:'ef-kha-ree-STOH po-LEE',morph:['ευχαριστώ = thank you','πολύ = very much'],link:'πολύ ≈ English poly- (much)'}
      ],
      blocks:['You built: greetings, ordering, directions, prices, thanks — a full day out in Greek.'] },
    { id:13, title:'Airport & tickets', focus:'αεροδρόμιο · διαβατήριο · εισιτήριο · πύλη',
      steps:[
        {t:'say',text:'You have landed. The building is the <span class="inline-tr">αεροδρόμιο</span>. Your document is a <span class="inline-tr">διαβατήριο</span>.',tr:'αεροδρόμιο'},
        {t:'words',items:[{tr:'το αεροδρόμιο',pr:'to a-e-ro-DRO-mee-o',en:'the airport'},{tr:'το διαβατήριο',pr:'to dya-va-TEE-ree-o',en:'the passport'},{tr:'το εισιτήριο',pr:'to ee-see-TEE-ree-o',en:'the ticket'},{tr:'η πτήση',pr:'ee PTEE-see',en:'the flight'},{tr:'η πύλη',pr:'ee PEE-lee',en:'the gate'}]},
        {t:'chal',en:'Where is the airport?',tr:'Πού είναι το αεροδρόμιο;',pr:'poo EE-ne to a-e-ro-DRO-mee-o',morph:['πού είναι = where is','το αεροδρόμιο = the airport']},
        {t:'chal',en:'Here is my passport',tr:'Ορίστε το διαβατήριό μου',pr:'o-REE-ste to dya-va-TEE-ree-O moo',morph:['ορίστε = here is','το διαβατήριό μου = my passport']},
        {t:'chal',en:'A ticket, please',tr:'Ένα εισιτήριο, παρακαλώ',pr:'EH-na ee-see-TEE-ree-o, pa-ra-ka-LOH',morph:['ένα εισιτήριο = a ticket','παρακαλώ = please']},
        {t:'chal',en:'Where is the gate?',tr:'Πού είναι η πύλη;',pr:'poo EE-ne ee PEE-lee',morph:['πού είναι = where is','η πύλη = the gate']}
      ],
      blocks:['<code>αεροδρόμιο</code> = airport','<code>διαβατήριο</code> = passport','<code>εισιτήριο</code> = ticket','<code>πύλη</code> = gate'] },
    { id:14, title:'The taxi', focus:'ταξί · πάω · ξενοδοχείο · σταματήστε',
      steps:[
        {t:'say',text:'The driver is waiting. <span class="inline-tr">Ταξί</span> is the same idea. Tell them where to go with <span class="inline-tr">θέλω να πάω</span>.',tr:'ταξί'},
        {t:'words',items:[{tr:'το ταξί',pr:'to ta-KSEE',en:'the taxi'},{tr:'ο οδηγός',pr:'o o-dee-GHOS',en:'the driver'},{tr:'θέλω να πάω',pr:'THEH-lo na PA-o',en:'I want to go'},{tr:'σταματήστε εδώ',pr:'sta-ma-TEE-ste e-THO',en:'stop here (formal)'}]},
        {t:'chal',en:'Taxi, please',tr:'Ένα ταξί, παρακαλώ',pr:'EH-na ta-KSEE, pa-ra-ka-LOH',morph:['ένα ταξί = a taxi','παρακαλώ = please']},
        {t:'chal',en:'I want to go to the hotel',tr:'Θέλω να πάω στο ξενοδοχείο',pr:'THEH-lo na PA-o sto kse-no-dho-KHEE-o',morph:['θέλω = I want','να πάω = to go','στο ξενοδοχείο = to the hotel']},
        {t:'chal',en:'Stop here, please',tr:'Σταματήστε εδώ, παρακαλώ',pr:'sta-ma-TEE-ste e-THO, pa-ra-ka-LOH',morph:['σταματήστε = stop (formal)','εδώ = here','παρακαλώ = please']},
        {t:'chal',en:'How much is it?',tr:'Πόσο κάνει;',pr:'PO-so KA-nee',morph:['πόσο = how much','κάνει = does it cost']}
      ],
      blocks:['<code>θέλω να πάω στο …</code> = I want to go to …','<code>σταματήστε εδώ</code> = stop here'] },
    { id:15, title:'The hotel', focus:'κράτηση · δωμάτιο · κλειδί · νύχτα',
      steps:[
        {t:'say',text:'At the desk: <span class="inline-tr">έχω κράτηση</span> — I have a reservation.',tr:'κράτηση'},
        {t:'words',items:[{tr:'το ξενοδοχείο',pr:'to kse-no-dho-KHEE-o',en:'the hotel'},{tr:'η κράτηση',pr:'ee KRA-tee-se',en:'the reservation'},{tr:'το δωμάτιο',pr:'to dho-MA-tee-o',en:'the room'},{tr:'το κλειδί',pr:'to klee-DHEE',en:'the key'},{tr:'μία νύχτα',pr:'MEE-a NEE-khta',en:'one night'}]},
        {t:'chal',en:'I have a reservation',tr:'Έχω κράτηση',pr:'EH-kho KRA-tee-se',morph:['έχω = I have','κράτηση = reservation']},
        {t:'chal',en:'A room for one night, please',tr:'Ένα δωμάτιο για μία νύχτα, παρακαλώ',pr:'EH-na dho-MA-tee-o ya MEE-a NEE-khta, pa-ra-ka-LOH',morph:['ένα δωμάτιο = a room','για μία νύχτα = for one night','παρακαλώ = please']},
        {t:'chal',en:'The key, please',tr:'Το κλειδί, παρακαλώ',pr:'to klee-DHEE, pa-ra-ka-LOH',morph:['το κλειδί = the key','παρακαλώ = please']},
        {t:'chal',en:'Where is my room?',tr:'Πού είναι το δωμάτιό μου;',pr:'poo EE-ne to dho-MA-tee-O moo',morph:['πού είναι = where is','το δωμάτιό μου = my room']}
      ],
      blocks:['<code>κράτηση</code> = reservation','<code>δωμάτιο</code> = room','<code>κλειδί</code> = key'] },
    { id:16, title:'Ask for help', focus:'δεν καταλαβαίνω · πιο αργά · αγγλικά',
      steps:[
        {t:'say',text:'When the language is too fast: <span class="inline-tr">Πιο αργά, παρακαλώ</span> — slower, please.',tr:'Πιο αργά, παρακαλώ'},
        {t:'words',items:[{tr:'πιο αργά',pr:'pyo ar-GHA',en:'slower'},{tr:'πάλι',pr:'PA-lee',en:'again'},{tr:'αγγλικά',pr:'ang-glee-KA',en:'English'},{tr:'μπορείτε να βοηθήσετε;',pr:'bo-REE-te na vo-ee-THEE-se-te',en:'can you help? (formal)'}]},
        {t:'chal',en:'I don\'t understand',tr:'Δεν καταλαβαίνω',pr:'dhen ka-ta-la-VE-no',morph:['δεν = not','καταλαβαίνω = I understand']},
        {t:'chal',en:'Slower, please',tr:'Πιο αργά, παρακαλώ',pr:'pyo ar-GHA, pa-ra-ka-LOH',morph:['πιο αργά = slower','παρακαλώ = please']},
        {t:'chal',en:'Can you help me?',tr:'Μπορείτε να με βοηθήσετε;',pr:'bo-REE-te na me vo-ee-THEE-se-te',morph:['μπορείτε = can you (formal)','να με βοηθήσετε = to help me']},
        {t:'chal',en:'Do you speak English?',tr:'Μιλάτε αγγλικά;',pr:'mee-LA-te ang-glee-KA',morph:['μιλάτε = do you speak (formal)','αγγλικά = English']}
      ],
      blocks:['<code>πιο αργά</code> = slower','<code>μιλάτε αγγλικά;</code> = do you speak English?'] }
  ],
  dialogues: [
    { id:'cafe', title:'☕ At a café', emoji:'☕', turns:[
      {who:'You',tr:'Καλημέρα! Έναν καφέ, παρακαλώ.',pr:'ka-lee-MEH-ra, EH-nan ka-FEH, pa-ra-ka-LOH',en:'Good morning! A coffee, please.'},
      {who:'Barista',tr:'Εδώ ή για το δρόμο;',pr:'e-THO ee ya to DRO-mo',en:'For here or to go?'},
      {who:'You',tr:'Για το δρόμο, ευχαριστώ.',pr:'ya to DRO-mo, ef-kha-ree-STOH',en:'To go, thanks.'},
      {who:'Barista',tr:'Ορίστε. Είναι πέντε ευρώ.',pr:'o-REE-ste, EE-ne PEN-de EV-ro',en:'Here you go. That\'s five euros.'},
      {who:'You',tr:'Ευχαριστώ πολύ!',pr:'ef-kha-ree-STOH po-LEE',en:'Thanks a lot!'}
    ]},
    { id:'train', title:'🚉 At the station', emoji:'🚉', turns:[
      {who:'You',tr:'Συγνώμη, πού είναι ο σταθμός;',pr:'see-GNO-mee, poo EE-ne o stath-MOS',en:'Excuse me, where is the station?'},
      {who:'Local',tr:'Εκεί, στα δεξιά.',pr:'e-KEE, sta dhe-KSIA',en:'It\'s there, on the right.'},
      {who:'You',tr:'Ευχαριστώ. Ένα εισιτήριο για την Αθήνα, παρακαλώ.',pr:'ef-kha-ree-STOH, EH-na ee-see-TEE-ree-o ya teen a-THEE-na, pa-ra-ka-LOH',en:'Thanks. A ticket to Athens, please.'},
      {who:'Ticket seller',tr:'Δέκα ευρώ. Το τρένο φεύγει στις οκτώ.',pr:'DHEH-ka EV-ro, to TRE-no FEV-yee stis ok-TO',en:'Ten euros. The train leaves at eight.'}
    ]},
    { id:'restaurant', title:'🍝 At a restaurant', emoji:'🍝', turns:[
      {who:'Waiter',tr:'Καλησπέρα! Έχετε κράτηση;',pr:'ka-lee-SPEH-ra, EH-khe-te KRA-tee-se',en:'Good evening! Do you have a reservation?'},
      {who:'You',tr:'Ναι, για δύο άτομα.',pr:'neh, ya DHEE-o A-to-ma',en:'Yes, for two people.'},
      {who:'You',tr:'Το μενού, παρακαλώ.',pr:'to me-NOO, pa-ra-ka-LOH',en:'The menu, please.'},
      {who:'You',tr:'Θέλω το ψητό και ένα κρασί.',pr:'THEH-lo to psee-TO ke EH-na kra-SEE',en:'I\'d like the roast and a wine.'},
      {who:'Waiter',tr:'Πολύ καλή επιλογή! Καλή όρεξη.',pr:'po-LEE ka-LEE e-pee-lo-YEE, ka-LEE O-re-ksee',en:'Great choice! Enjoy your meal.'}
    ]},
    { id:'shop', title:'🛍️ Shopping', emoji:'🛍️', turns:[
      {who:'You',tr:'Πόσο κάνει αυτό;',pr:'PO-so KA-nee af-TO',en:'How much is this?'},
      {who:'Seller',tr:'Είκοσι ευρώ.',pr:'EE-ko-see EV-ro',en:'Twenty euros.'},
      {who:'You',tr:'Είναι πολύ ακριβό. Μπορώ να το δοκιμάσω;',pr:'EE-ne po-LEE a-kree-VO, bo-RO na to dho-kee-MA-so',en:'It\'s too expensive. Can I try it on?'},
      {who:'Seller',tr:'Βεβαίως! Το δοκιμαστήριο είναι εκεί.',pr:'ve-VE-os, to dho-kee-ma-STEE-ree-o EE-ne e-KEE',en:'Of course! The fitting room is there.'},
      {who:'You',tr:'Εντάξει, το παίρνω.',pr:'en-TA-ksee, to PE-rno',en:'OK, I\'ll take it.'}
    ]}
  ],
  pocket: [
    {tr:'Γειά σου',pr:'yah soo',en:'Hello (informal)',c:'Greetings'},
    {tr:'Καλημέρα',pr:'ka-lee-MEH-ra',en:'Good morning',c:'Greetings'},
    {tr:'Καλησπέρα',pr:'ka-lee-SPEH-ra',en:'Good evening',c:'Greetings'},
    {tr:'Αντίο',pr:'an-DEE-o',en:'Goodbye',c:'Greetings'},
    {tr:'Τι κάνεις;',pr:'tee KA-nees',en:'How are you?',c:'Greetings'},
    {tr:'Με λένε __NAME__',pr:'me LE-ne',en:'My name is...',c:'Greetings'},
    {tr:'Παρακαλώ',pr:'pa-ra-ka-LOH',en:'Please',c:'Courtesy'},
    {tr:'Ευχαριστώ',pr:'ef-kha-ree-STOH',en:'Thank you',c:'Courtesy'},
    {tr:'Ευχαριστώ πολύ',pr:'ef-kha-ree-STOH po-LEE',en:'Thanks a lot',c:'Courtesy'},
    {tr:'Συγνώμη',pr:'see-GNO-mee',en:'Sorry',c:'Courtesy'},
    {tr:'Ναι',pr:'neh',en:'Yes',c:'Courtesy'},
    {tr:'Όχι',pr:'O-khee',en:'No',c:'Courtesy'},
    {tr:'Ένα',pr:'EH-na',en:'1',c:'Numbers'},
    {tr:'Δύο',pr:'DHEE-o',en:'2',c:'Numbers'},
    {tr:'Τρία',pr:'TREE-a',en:'3',c:'Numbers'},
    {tr:'Πέντε',pr:'PEN-de',en:'5',c:'Numbers'},
    {tr:'Δέκα',pr:'DHEH-ka',en:'10',c:'Numbers'},
    {tr:'Νερό',pr:'ne-RO',en:'water',c:'Food'},
    {tr:'Ψωμί',pr:'pso-MEE',en:'bread',c:'Food'},
    {tr:'Καφές',pr:'ka-FEH',en:'coffee',c:'Food'},
    {tr:'Κρασί',pr:'kra-SEE',en:'wine',c:'Food'},
    {tr:'Ο λογαριασμός',pr:'o lo-gha-ree-az-MOS',en:'the bill',c:'Food'},
    {tr:'Πού είναι...?',pr:'poo EE-ne',en:'Where is...?',c:'Directions'},
    {tr:'Δεξιά',pr:'dhe-KSIA',en:'to the right',c:'Directions'},
    {tr:'Αριστερά',pr:'a-ree-ste-RA',en:'to the left',c:'Directions'},
    {tr:'Ευθεία',pr:'ef-THEE-a',en:'straight ahead',c:'Directions'},
    {tr:'Ο σταθμός',pr:'o stath-MOS',en:'the station',c:'Directions'},
    {tr:'Πόσο κάνει;',pr:'PO-so KA-nee',en:'how much is it?',c:'Shopping'},
    {tr:'Θέλω αυτό',pr:'THEH-lo af-TO',en:'I want this',c:'Shopping'},
    {tr:'Βοήθεια!',pr:'vo-EE-thee-a',en:'Help!',c:'Emergency'},
    {tr:'Δεν καταλαβαίνω',pr:'dhen ka-ta-la-VE-no',en:'I don\'t understand',c:'Emergency'},
    {tr:'Χρειάζομαι βοήθεια',pr:'khree-A-zo-me vo-EE-thee-a',en:'I need help',c:'Emergency'},
    {tr:'Ο γιατρός',pr:'o ya-TROS',en:'the doctor',c:'Emergency'},
    {tr:'Σήμερα',pr:'SEE-me-ra',en:'today',c:'Time'},
    {tr:'Αύριο',pr:'AV-ree-o',en:'tomorrow',c:'Time'},
    {tr:'Τώρα',pr:'TO-ra',en:'now',c:'Time'},
    {tr:'Το αεροδρόμιο',pr:'to a-e-ro-DRO-mee-o',en:'the airport',c:'Travel'},
    {tr:'Το διαβατήριο',pr:'to dya-va-TEE-ree-o',en:'the passport',c:'Travel'},
    {tr:'Ένα ταξί, παρακαλώ',pr:'EH-na ta-KSEE, pa-ra-ka-LOH',en:'A taxi, please',c:'Travel'},
    {tr:'Έχω κράτηση',pr:'EH-kho KRA-tee-se',en:'I have a reservation',c:'Travel'},
    {tr:'Πιο αργά, παρακαλώ',pr:'pyo ar-GHA, pa-ra-ka-LOH',en:'Slower, please',c:'Travel'}
  ],
  pocketCats: ['Greetings','Courtesy','Numbers','Food','Directions','Shopping','Emergency','Time','Travel'],
  culture: [
    {icon:'🫒',title:'Hospitality is sweet',body:'Greeks welcome guests with a cold glass of water and a spoon of sweet jam (glyko, γλυκό). Accepting it — with a sincere \'ευχαριστώ\' — is the polite thing and shows respect for the host.'},
    {icon:'💡',title:'Two greetings for the day',body:'Καλημέρα (kalimera) is used until roughly noon or early afternoon, then Καλησπέρα (kalispera) takes over for the evening. Get those right and you\'ll sound instantly more natural.'},
    {icon:'🤷',title:'Body language talks',body:'A gentle downward nod or a quiet \'ne\' means yes; a slight head tilt with \'ochi\'(όχι) means no. Greeks also click their tongue to show mild disapproval — you\'ll hear it more than you think.'},
    {icon:'☕',title:'Coffee is a ritual',body:'Greeks linger over coffee — a strong little Greek coffee (ελληνικός) or an iced freddo espresso in summer. It\'s meant to be savoured slowly, usually with a glass of cold water.'},
    {icon:'📅',title:'Name days, not birthdays',body:'In Greece, people often celebrate their name day — the feast day of the saint they\'re named after — more than their birthday. Wishing someone \'χρόνια πολλά\' is a lovely gesture.'},
    {icon:'🗣️',title:'Effort opens doors',body:'Greeks are delighted when visitors try their language. A warm \'Καλημέρα\' and a sincere \'Ευχαριστώ\' go a long way — effort matters far more than perfect pronunciation.'}
  ],
  sounds: [
    {l:'θ',say:'like the "th" in think — a soft, breathy th',ex:'θέλω = THEH-lo',voice:'θέλω'},
    {l:'δ',say:'like the "th" in this — a voiced th',ex:'δύο = DHEE-o',voice:'δύο'},
    {l:'χ',say:'raspy "ch" as in loch, from the back of the throat',ex:'ευχαριστώ = ef-kha-ree-STOH',voice:'ευχαριστώ'},
    {l:'γ',say:'soft "gh"; before e/i it sounds like "y"',ex:'γεια = yah',voice:'γεια σου'},
    {l:'ξ',say:'"ks" as in foxes',ex:'έξι = EH-ksee',voice:'έξι'},
    {l:'ψ',say:'"ps" as in lips',ex:'ψωμί = pso-MEE',voice:'ψωμί'},
    {l:'ρ',say:'rolled r, like the Spanish r',ex:'Ελλάδα = el-LA-tha',voice:'Ελλάδα'},
    {l:'vowels',say:'pure and short: α=a, ε=e, ι/η=ee, ο/ω=o, ου=oo',ex:'καλημέρα = ka-lee-MEH-ra',voice:'καλημέρα'}
  ],
  resources: [
    {icon:'🗣️',t:'Easy Greek',d:'Real street interviews with Greek speakers and subtitles — great for natural, everyday Greek.',q:'Easy Greek street interviews'},
    {icon:'🐢',t:'Learn Greek with Lina',d:'Clear, slow and friendly beginner videos from a Greek teacher.',q:'Learn Greek with Lina'},
    {icon:'🎧',t:'GreekPod101',d:'Structured audio and video lessons for beginners, from the absolute basics up.',q:'GreekPod101 beginner'},
    {icon:'💬',t:'Omilo Greek',d:'Short, practical Greek lessons with a warm, local feel and slow, clear speech.',q:'Omilo learn Greek'},
    {icon:'📚',t:'Langfocus Greek',d:'Clear overviews of Greek grammar and vocabulary in an accessible style.',q:'Langfocus Greek language'}
  ]
};
