// EL Games for Content Teachers: game data
// c = category id, s = subject (category "subject" only), n = name, h = how it works,
// w = EL win or sentence frame, l = levels (E Emerging, P Progressing, A All), p = prep (None/Low/Med)
const CATEGORIES = [
  { id: "vocab",   name: "Vocabulary",           blurb: "These games work best when students have to use the word in a sentence, not just match it. Pre-teach 5–8 key terms first." },
  { id: "talk",    name: "Academic talk",        blurb: "Structured talk gives ELs the out-loud practice they need before they can write it. Post a frame for every round." },
  { id: "read",    name: "Reading & listening",  blurb: "These turn a textbook passage into a puzzle. Students read the same text several times, and that repeated reading builds comprehension." },
  { id: "write",   name: "Writing",              blurb: "Short, social writing gets more words on the page than a solo prompt does. Most of these run on mini whiteboards." },
  { id: "subject", name: "By subject",           blurb: "These build on each discipline's own way of talking: math justifies, science explains cause, history weighs evidence." },
  { id: "digital", name: "Digital platforms",    blurb: "Most digital quiz games only test recognition. Turn timers off, play in team mode, add images, and follow up with \"explain your answer to your partner.\"" }
];

const GAMES = [
  // ---------- Vocabulary ----------
  {c:"vocab",n:"Word on My Head",h:"One student holds a term card to their forehead. The team describes it in English without saying it.",w:"Forces circumlocution with content words",l:"P",p:"Low"},
  {c:"vocab",n:"Taboo",h:"Describe the term without using the 3 \"forbidden\" words listed on the card.",w:"Pushes past the easy synonym",l:"P",p:"Med"},
  {c:"vocab",n:"Pictionary / Draw It",h:"One student draws the term; the team guesses.",w:"Visual link to meaning; strong recall",l:"E P",p:"None"},
  {c:"vocab",n:"Charades / Act It Out",h:"Act out a process or verb (erode, migrate, divide).",w:"Total Physical Response; no English needed to start",l:"E",p:"None"},
  {c:"vocab",n:"Password",h:"A partner gives one-word clues until the other guesses the term.",w:"Builds word associations",l:"P",p:"None"},
  {c:"vocab",n:"Vocabulary Bingo",h:"Teacher reads a definition or shows a picture; students mark the term.",w:"Listening to academic definitions",l:"E P",p:"Low"},
  {c:"vocab",n:"Swat / Fly Swatter",h:"Terms are on the board. Read a definition; two students race to swat the right term.",w:"Fast listening; high energy",l:"E P",p:"None"},
  {c:"vocab",n:"I Have… Who Has…?",h:"Each card reads \"I have [term]. Who has [definition]?\" The chain runs around the room.",w:"Every student reads aloud with a script",l:"E P",p:"Med"},
  {c:"vocab",n:"Quiz-Quiz-Trade",h:"Each student holds a term card. Pair up, quiz each other, trade cards, find a new partner.",w:"Repeated oral practice with many partners",l:"A",p:"Med"},
  {c:"vocab",n:"Vocabulary Jenga",h:"Number the blocks. Pull one, then define, use in a sentence or draw the term with that number.",w:"Low pressure; the game buys thinking time",l:"A",p:"Low"},
  {c:"vocab",n:"Concentration / Memory",h:"Flip cards to match term + picture or term + definition.",w:"Visual matching for newcomers",l:"E",p:"Med"},
  {c:"vocab",n:"Odd One Out",h:"Show 4 terms. Students pick the one that doesn't belong and justify it.",w:"\"___ doesn't belong because ___.\"",l:"A",p:"None"},
  {c:"vocab",n:"Word Sort (open or closed)",h:"Groups sort term cards into categories they name or that you give.",w:"Shows how concepts relate",l:"A",p:"Med"},
  {c:"vocab",n:"Frayer Model Race",h:"Teams complete a Frayer box (definition, traits, example, non-example) against the clock.",w:"Deep word knowledge",l:"P",p:"Low"},
  {c:"vocab",n:"Hot Seat",h:"One student faces away from the board. The team gives clues for the term written behind them.",w:"Word on My Head for the whole class",l:"P",p:"None"},
  {c:"vocab",n:"Cognate Hunt",h:"Partners find English–Spanish cognates in a text (photosynthesis / fotosíntesis). Watch for false cognates.",w:"Uses home-language strength",l:"A",p:"None"},
  {c:"vocab",n:"Vocab Scattergories",h:"A letter plus a category (\"P — parts of a cell\"). Unique answers score.",w:"Retrieval under light time pressure",l:"P",p:"Low"},
  {c:"vocab",n:"Four Corners Vocab",h:"Post 4 terms in the corners. Read a clue; students walk to the matching term.",w:"Movement; no speaking required at first",l:"E",p:"None"},
  {c:"vocab",n:"Word Wall Tic-Tac-Toe",h:"A grid of terms. To claim a square, use that term correctly in a sentence.",w:"Production with choice",l:"P",p:"Low"},
  {c:"vocab",n:"Mystery Word / 20 Questions",h:"Teacher holds a hidden term. The class asks yes/no questions to find it.",w:"Question formation with content attributes",l:"P",p:"None"},

  // ---------- Academic talk ----------
  {c:"talk",n:"Inside–Outside Circle",h:"Two circles face each other. Answer a prompt, then the outer circle rotates to a new partner.",w:"\"My answer is ___ because ___.\"",l:"A",p:"None"},
  {c:"talk",n:"Find Someone Who",h:"Students mingle with a grid of content questions and find a classmate who can answer each one.",w:"\"Can you explain ___?\"",l:"A",p:"Low"},
  {c:"talk",n:"Four Corners",h:"Corners are labeled Agree / Disagree / Strongly / Not sure. Students move, then defend their choice.",w:"\"I chose ___ because ___.\"",l:"A",p:"None"},
  {c:"talk",n:"Two Truths and a Lie",h:"Students write 2 true facts and 1 false one about the content. Teammates find the lie.",w:"\"I think ___ is false because ___.\"",l:"P",p:"None"},
  {c:"talk",n:"Numbered Heads Together",h:"Teams number off and discuss. The teacher calls a number; that student answers for the team.",w:"\"Our team thinks ___.\"",l:"A",p:"None"},
  {c:"talk",n:"Think-Pair-Share (timed)",h:"Think for 30 seconds, tell a partner for 60, then share with the class.",w:"\"My partner said ___.\"",l:"A",p:"None"},
  {c:"talk",n:"Speed Dating / Stand Up–Hand Up–Pair Up",h:"Fast partner swaps on review questions, 1 minute each.",w:"Rotate the frame each round",l:"A",p:"None"},
  {c:"talk",n:"Would You Rather (content)",h:"\"Would you rather live in the Arctic or the desert?\" Students choose and justify with content facts.",w:"\"I would rather ___ because ___.\"",l:"A",p:"None"},
  {c:"talk",n:"Philosophical Chairs",h:"Two sides of the room for a debatable claim. Students may switch sides when persuaded.",w:"\"I changed my mind because ___.\"",l:"P",p:"Low"},
  {c:"talk",n:"Line-Ups / Value Lines",h:"Students line up by how strongly they hold an opinion, then fold the line to talk to someone opposite.",w:"\"I'm at ___ because ___.\"",l:"A",p:"None"},
  {c:"talk",n:"Talking Chips",h:"Each student gets 3 chips and spends one each time they speak. Nobody talks again until all chips are spent.",w:"Equalizes airtime",l:"A",p:"Low"},
  {c:"talk",n:"Just a Minute",h:"Speak for 30–45 seconds on a content topic without stopping.",w:"Fluency with known content",l:"P",p:"None"},
  {c:"talk",n:"Mix-Freeze-Pair",h:"Music plays and students mingle; when it stops they pair with the nearest person and answer.",w:"Any frame",l:"A",p:"None"},
  {c:"talk",n:"Fishbowl",h:"A small inner group discusses while the outer group tracks evidence, then they swap.",w:"\"I agree with ___ and want to add ___.\"",l:"P",p:"Low"},
  {c:"talk",n:"Expert Interview",h:"One student is \"the expert\" (a scientist, a historical figure). Classmates interview them.",w:"Question words: who, what, why, how",l:"P",p:"Low"},
  {c:"talk",n:"Barrier Game",h:"Partners sit back to back. One describes a diagram or map; the other draws it.",w:"Precise descriptive language",l:"A",p:"Low"},
  {c:"talk",n:"Info Gap",h:"Each partner holds half the data and must ask questions to complete the chart.",w:"\"What is the ___ of ___?\"",l:"A",p:"Med"},
  {c:"talk",n:"Gallery Walk with Talk",h:"Posters around the room. Pairs rotate, discuss each one and leave sticky-note comments.",w:"\"I notice ___. I wonder ___.\"",l:"A",p:"Med"},

  // ---------- Reading & listening ----------
  {c:"read",n:"Running Dictation",h:"The text is posted in the hall. A runner reads a line, returns, and dictates it to a scribe. Roles swap.",w:"All 4 domains in one game",l:"A",p:"Low"},
  {c:"read",n:"Sentence Strip Sequencing",h:"Cut a process or event summary into strips. Teams put them in order.",w:"Signal words: first, then, as a result",l:"A",p:"Low"},
  {c:"read",n:"Jigsaw",h:"Each group member reads one section, meets with the other \"experts\" on it, then teaches their home group.",w:"Shorter text load; a reason to speak",l:"P",p:"Low"},
  {c:"read",n:"Text Scavenger Hunt",h:"Teams hunt the chapter for answers, text features or vocabulary in context.",w:"Navigating textbook features",l:"A",p:"Low"},
  {c:"read",n:"Mystery Envelope",h:"Clues (quotes, images, data) in envelopes. Teams read them and infer the topic or answer.",w:"Inference with support",l:"P",p:"Med"},
  {c:"read",n:"Listen and Draw",h:"Teacher reads a description (a cell, a landform, a battle map); students sketch it.",w:"Listening for detail",l:"E P",p:"None"},
  {c:"read",n:"Stand Up / Sit Down True–False",h:"Read statements about the text. Students stand if true, sit if false.",w:"Low-risk comprehension check",l:"E",p:"None"},
  {c:"read",n:"Read-Around Relay",h:"Teams answer text-dependent questions one at a time and run each answer to the teacher.",w:"Re-reading with a purpose",l:"A",p:"Low"},
  {c:"read",n:"Highlighter Race",h:"The first team to highlight the evidence sentence for a claim scores.",w:"Close reading, finding evidence",l:"P",p:"None"},
  {c:"read",n:"Text Feature Bingo",h:"Bingo squares are text features (caption, bold word, graph). Find each one in the chapter.",w:"Uses supports ELs often skip",l:"E P",p:"Low"},
  {c:"read",n:"Headline Match",h:"Match summaries or headlines to paragraphs.",w:"Main idea",l:"P",p:"Low"},
  {c:"read",n:"Cloze Race",h:"A passage with key terms blanked out. Teams fill it in from a word bank.",w:"Vocabulary in context",l:"E P",p:"Low"},

  // ---------- Writing ----------
  {c:"write",n:"Whiteboard Showdown",h:"Teacher asks a question. Everyone writes an answer, then all boards flip up at once.",w:"Everyone answers; no single student is spotlighted",l:"A",p:"None"},
  {c:"write",n:"Sentence Scramble",h:"The words of a key sentence are cut apart. Teams rebuild it.",w:"Academic syntax",l:"E P",p:"Low"},
  {c:"write",n:"Round Robin Write",h:"A paper passes around the group. Each student adds one sentence to the explanation.",w:"Builds on peers' language",l:"P",p:"None"},
  {c:"write",n:"Chain Notes / Graffiti Wall",h:"Chart paper with a question at each station. Groups write answers and respond to earlier groups.",w:"Low-stakes written discussion",l:"A",p:"Low"},
  {c:"write",n:"Sentence Builder Dice",h:"Dice faces show subjects, verbs and connectors. Roll and write a content sentence.",w:"Complex sentences with because / although",l:"P",p:"Med"},
  {c:"write",n:"Exit Ticket Auction",h:"Teams bid points on whether a written sentence is correct, then fix it.",w:"Grammar in content writing",l:"P",p:"Low"},
  {c:"write",n:"Fix-It Sentence Race",h:"Display a sentence with errors in both facts and grammar. The first team to fix both wins.",w:"Editing for accuracy",l:"P",p:"None"},
  {c:"write",n:"Six-Word Summary",h:"Summarize the lesson in exactly 6 words, then share.",w:"Precise word choice",l:"A",p:"None"},
  {c:"write",n:"Post from History",h:"Write a 280-character post in the voice of a historical figure or a cell organelle.",w:"Voice plus content, short length",l:"P",p:"None"},
  {c:"write",n:"Paragraph Puzzle",h:"Each member writes one part (topic sentence, evidence, conclusion), then the group assembles them.",w:"Paragraph structure",l:"P",p:"Low"},
  {c:"write",n:"Word Count Challenge",h:"Write a summary that must use 5 listed terms. Bonus points for linking words.",w:"Required academic vocabulary",l:"A",p:"None"},

  // ---------- By subject: Math ----------
  {c:"subject",s:"Math",n:"Which One Doesn't Belong?",h:"Show 4 numbers, graphs or shapes. Any answer counts if it is justified.",w:"\"___ doesn't belong because it's the only one that ___.\"",l:"A",p:"Low"},
  {c:"subject",s:"Math",n:"Always, Sometimes, Never",h:"Students judge a statement (\"A rectangle is a square\") and prove it with an example or counterexample.",w:"\"It is sometimes true because ___.\"",l:"P",p:"Low"},
  {c:"subject",s:"Math",n:"Math Taboo",h:"Describe \"perpendicular\" without saying lines, 90 or right angle.",w:"Precise math description",l:"P",p:"Med"},
  {c:"subject",s:"Math",n:"Word Problem Rewrite",h:"Teams strip a word problem to its math, then write a new one for another team.",w:"\"We need to find ___.\"",l:"P",p:"Low"},
  {c:"subject",s:"Math",n:"Number Talks",h:"Show a problem, students solve it mentally, then share their strategies.",w:"\"First I ___, then I ___.\"",l:"A",p:"None"},
  {c:"subject",s:"Math",n:"Error Analysis Detective",h:"A worked problem has a mistake. Teams find it and explain it.",w:"\"The mistake is in step ___.\"",l:"P",p:"Low"},
  {c:"subject",s:"Math",n:"Math Pictionary",h:"Draw \"slope\" or \"vertex\"; the team names it.",w:"Visual math vocabulary",l:"E",p:"None"},
  {c:"subject",s:"Math",n:"Estimation Challenge",h:"A daily estimate from a photo, with \"too low / too high\" reasoning.",w:"\"Too high would be ___.\"",l:"A",p:"Low"},
  // Science
  {c:"subject",s:"Science",n:"CER Card Sort",h:"Sort claim, evidence and reasoning cards into complete arguments.",w:"\"This evidence supports ___ because ___.\"",l:"P",p:"Med"},
  {c:"subject",s:"Science",n:"Process Charades",h:"Act out a cycle (water, mitosis, rock cycle) in order.",w:"\"First ___, next ___.\"",l:"E",p:"None"},
  {c:"subject",s:"Science",n:"Who Am I?",h:"An organism, element or organelle card goes on your back. Ask yes/no questions to find out what you are.",w:"\"Do I ___?\"",l:"P",p:"Low"},
  {c:"subject",s:"Science",n:"Predict–Observe–Explain Bets",h:"Teams bet points on a demo's outcome, then explain the result.",w:"\"We predicted ___ because ___.\"",l:"A",p:"Low"},
  {c:"subject",s:"Science",n:"Lab Safety Spot-It",h:"Show a picture of a messy lab. Teams list and name the hazards.",w:"\"___ is unsafe because ___.\"",l:"E P",p:"Low"},
  {c:"subject",s:"Science",n:"Food Web Toss",h:"A yarn ball passes between organism cards to build a web. Students say each relationship.",w:"\"The ___ eats the ___.\"",l:"A",p:"Low"},
  {c:"subject",s:"Science",n:"Element Bingo / Periodic Battleship",h:"Call symbols, properties or coordinates on a periodic table grid.",w:"Symbol and property vocabulary",l:"E P",p:"Low"},
  // Social studies
  {c:"subject",s:"Social studies",n:"Timeline Line-Up",h:"Each student holds an event card. The class lines up in order and explains the links.",w:"\"___ happened before ___, which led to ___.\"",l:"A",p:"Low"},
  {c:"subject",s:"Social studies",n:"Primary Source Detective",h:"Groups analyze a photo or document with an observe–infer–question chart.",w:"\"I see ___. This tells me ___.\"",l:"A",p:"Low"},
  {c:"subject",s:"Social studies",n:"Hot Seat: Historical Figure",h:"A student in role answers questions from the class.",w:"\"Why did you ___?\"",l:"P",p:"Low"},
  {c:"subject",s:"Social studies",n:"Map Battleship",h:"Find locations using latitude and longitude or map grid coordinates.",w:"\"Is it at ___?\"",l:"E P",p:"Low"},
  {c:"subject",s:"Social studies",n:"Cause and Effect Dominoes",h:"Match cause cards to effect cards in a chain.",w:"\"Because of ___, ___.\"",l:"P",p:"Med"},
  {c:"subject",s:"Social studies",n:"Mock Trial / Debate Lite",h:"Roles plus evidence cards on a historical question.",w:"\"The evidence shows ___.\"",l:"P",p:"Med"},
  {c:"subject",s:"Social studies",n:"Geography Guess Who",h:"Guess the country or region from its features.",w:"\"Is it in ___?\"",l:"A",p:"Low"},
  // ELA
  {c:"subject",s:"ELA",n:"Character Hot Seat",h:"A student answers in character about the choices they made in the text.",w:"\"I did ___ because ___.\"",l:"P",p:"None"},
  {c:"subject",s:"ELA",n:"Literary Device Swat",h:"Read an example; students swat the device it shows on the board.",w:"Device vocabulary",l:"P",p:"Low"},
  {c:"subject",s:"ELA",n:"Quote Match",h:"Match quotes to the character who said them or the theme they show.",w:"\"This quote shows ___.\"",l:"P",p:"Low"},
  {c:"subject",s:"ELA",n:"Plot Mountain Sort",h:"Sequence event cards onto a plot diagram.",w:"\"The climax is ___ because ___.\"",l:"A",p:"Low"},
  {c:"subject",s:"ELA",n:"Book Talk Speed Dating",h:"1-minute book pitches with a new partner each round.",w:"\"You should read it because ___.\"",l:"P",p:"None"},
  // Electives & CTE
  {c:"subject",s:"Electives & CTE",n:"Tool / Equipment ID Race",h:"Name each tool or piece of equipment from pictures and state its function.",w:"\"A ___ is used to ___.\"",l:"E P",p:"Low"},
  {c:"subject",s:"Electives & CTE",n:"Steps Relay",h:"Sequence the steps of a recipe or procedure under time pressure.",w:"\"After you ___, you ___.\"",l:"A",p:"Low"},
  {c:"subject",s:"Electives & CTE",n:"Simon Says (PE, health, art)",h:"Commands use target vocabulary (\"touch your hamstring\").",w:"Listening comprehension",l:"E",p:"None"},
  {c:"subject",s:"Electives & CTE",n:"Customer Service Role-Play",h:"Pairs act out workplace scenario cards.",w:"\"How can I help you with ___?\"",l:"P",p:"Low"},

  // ---------- Digital ----------
  {c:"digital",n:"Quizlet (Flashcards, Match, Blast, Live)",h:"Term–definition practice. In Live, students play in teams and must collaborate.",w:"Audio read-aloud, images on cards, team play. Learn and Test modes need Quizlet Plus.",l:"E P",p:"Low",u:"https://quizlet.com"},
  {c:"digital",n:"Gimkit",h:"Spiral review that runs live or student-paced.",w:"Student-paced homework mode removes speed pressure",l:"P",p:"Low",u:"https://www.gimkit.com"},
  {c:"digital",n:"Blooket",h:"Engaging review with many game modes.",w:"Pick modes without a speed race",l:"A",p:"Low",u:"https://www.blooket.com"},
  {c:"digital",n:"Kahoot!",h:"Whole-class review and quick checks.",w:"Team mode, longer timers, images",l:"A",p:"Low",u:"https://kahoot.com"},
  {c:"digital",n:"Wordwall",h:"Teacher-made matching, sorting, labeled diagrams and wheels.",w:"Diagram-labeling templates; printable versions",l:"E P",p:"Low",u:"https://wordwall.net"},
  {c:"digital",n:"Wayground (formerly Quizizz)",h:"Self-paced quizzes with memes and power-ups.",w:"Read-aloud and translate options; untimed mode",l:"A",p:"Low",u:"https://wayground.com"},
  {c:"digital",n:"Pear Deck / Nearpod drawing slides",h:"Draw-your-answer and drag-and-drop checks.",w:"Drawing responses for newcomers",l:"E",p:"Med"},
  {c:"digital",n:"Flip / voice recorders",h:"Recorded speaking practice.",w:"Students rehearse before posting",l:"P",p:"Low"}
];

const QUICK = [
  ["No prep, today","Pictionary, Charades, Four Corners Vocab","Word on My Head, Two Truths and a Lie, Just a Minute","Inside–Outside Circle, Whiteboard Showdown, Which One Doesn't Belong?"],
  ["Warm-up (5 min)","Stand Up / Sit Down True–False","Odd One Out, Always–Sometimes–Never","Think-Pair-Share, Six-Word Summary"],
  ["New vocabulary","Concentration, Vocabulary Bingo, Listen and Draw","Taboo, Frayer Model Race","Quiz-Quiz-Trade, Cognate Hunt"],
  ["Text-heavy lesson","Cloze Race, Text Feature Bingo","Jigsaw, Highlighter Race","Running Dictation, Sentence Strip Sequencing"],
  ["Unit review","Swat, I Have… Who Has…?","Hot Seat, Fix-It Sentence Race","Vocabulary Jenga, Gallery Walk, a team-mode digital game"],
  ["Argument & reasoning","Four Corners (point + one word)","Philosophical Chairs, CER Card Sort","Line-Ups, Fishbowl"]
];
