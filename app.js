const definitions = [
  { 
    word: "ami", 
    definition: "personne pour laquelle on éprouve de l'amitié", 
    englishWord: "friend", 
    englishDef: "person for whom one feels friendship" 
  },
  { 
    word: "amour", 
    definition: "sentiment intense d'affection", 
    englishWord: "love", 
    englishDef: "intense feeling of affection" 
  },
  { 
    word: "arbre", 
    definition: "végétal ligneux", 
    englishWord: "tree", 
    englishDef: "woody plant" 
  },
  { 
    word: "argent", 
    definition: "métal précieux ou monnaie", 
    englishWord: "money", 
    englishDef: "precious metal or currency" 
  },
  { 
    word: "beauté", 
    definition: "qualité de ce qui est beau", 
    englishWord: "beauty", 
    englishDef: "quality of being beautiful" 
  },
  { 
    word: "chien", 
    definition: "animal domestique", 
    englishWord: "dog", 
    englishDef: "domestic animal" 
  },
  { 
    word: "chat", 
    definition: "animal domestique félin", 
    englishWord: "cat", 
    englishDef: "domestic feline animal" 
  },
  { 
    word: "école", 
    definition: "établissement où l'on enseigne", 
    englishWord: "school", 
    englishDef: "place where teaching is done" 
  },
  { 
    word: "enfant", 
    definition: "jeune être humain", 
    englishWord: "child", 
    englishDef: "young human being" 
  },
  { 
    word: "famille", 
    definition: "ensemble de personnes liées par le sang ou le mariage", 
    englishWord: "family", 
    englishDef: "group of people related by blood or marriage" 
  },
  { 
    word: "femme", 
    definition: "être humain de sexe féminin", 
    englishWord: "woman", 
    englishDef: "female human being" 
  },
  { 
    word: "fleur", 
    definition: "organe reproducteur des plantes", 
    englishWord: "flower", 
    englishDef: "reproductive organ of plants" 
  },
  { 
    word: "guerre", 
    definition: "conflit armé entre des groupes", 
    englishWord: "war", 
    englishDef: "armed conflict between groups" 
  },
  { 
    word: "homme", 
    definition: "être humain de sexe masculin", 
    englishWord: "man", 
    englishDef: "male human being" 
  },
  { 
    word: "jour", 
    definition: "période de 24 heures", 
    englishWord: "day", 
    englishDef: "period of 24 hours" 
  },
  { 
    word: "maison", 
    definition: "bâtiment servant de logement", 
    englishWord: "house", 
    englishDef: "building serving as a residence" 
  },
  { 
    word: "mer", 
    definition: "vaste étendue d'eau salée", 
    englishWord: "sea", 
    englishDef: "vast expanse of salt water" 
  },
  { 
    word: "monde", 
    definition: "ensemble de tout ce qui existe", 
    englishWord: "world", 
    englishDef: "all that exists" 
  },
  { 
    word: "nuit", 
    definition: "période de l'obscurité entre le coucher et le lever du soleil", 
    englishWord: "night", 
    englishDef: "period of darkness between sunset and sunrise" 
  },
  { 
    word: "paix", 
    definition: "absence de guerre", 
    englishWord: "peace", 
    englishDef: "absence of war" 
  },
  { 
    word: "père", 
    definition: "homme qui a engendré un enfant", 
    englishWord: "father", 
    englishDef: "man who has fathered a child" 
  },
  { 
    word: "peur", 
    definition: "sentiment d'appréhension", 
    englishWord: "fear", 
    englishDef: "feeling of apprehension" 
  },
  { 
    word: "pluie", 
    definition: "eau qui tombe du ciel", 
    englishWord: "rain", 
    englishDef: "water falling from the sky" 
  },
  { 
    word: "rêve", 
    definition: "suite d'images produites pendant le sommeil", 
    englishWord: "dream", 
    englishDef: "sequence of images produced during sleep" 
  },
  { 
    word: "roi", 
    definition: "chef d'État monarchique", 
    englishWord: "king", 
    englishDef: "monarchical head of state" 
  },
  { 
    word: "route", 
    definition: "voie de circulation", 
    englishWord: "road", 
    englishDef: "traffic route" 
  },
  { 
    word: "saison", 
    definition: "période de l'année", 
    englishWord: "season", 
    englishDef: "period of the year" 
  },
  { 
    word: "sang", 
    definition: "liquide rouge circulant dans les veines", 
    englishWord: "blood", 
    englishDef: "red liquid circulating in veins" 
  },
  { 
    word: "santé", 
    definition: "état de bon fonctionnement de l'organisme", 
    englishWord: "health", 
    englishDef: "state of good functioning of the body" 
  },
  { 
    word: "soeur", 
    definition: "fille des mêmes parents qu'une autre personne", 
    englishWord: "sister", 
    englishDef: "girl of the same parents as another person" 
  },
  { 
    word: "soleil", 
    definition: "astre lumineux qui éclaire la Terre", 
    englishWord: "sun", 
    englishDef: "luminous star that lights the Earth" 
  },
  { 
    word: "temps", 
    definition: "mesure de la durée", 
    englishWord: "time", 
    englishDef: "measure of duration" 
  },
  { 
    word: "terre", 
    definition: "planète où nous vivons", 
    englishWord: "Earth", 
    englishDef: "planet where we live" 
  },
  { 
    word: "travail", 
    definition: "activité professionnelle", 
    englishWord: "work", 
    englishDef: "professional activity" 
  },
  { 
    word: "vie", 
    definition: "existence d'un être vivant", 
    englishWord: "life", 
    englishDef: "existence of a living being" 
  },
  { 
    word: "ville", 
    definition: "agglomération urbaine", 
    englishWord: "city", 
    englishDef: "urban agglomeration" 
  },
  { 
    word: "voiture", 
    definition: "véhicule à moteur", 
    englishWord: "car", 
    englishDef: "motor vehicle" 
  },
  { 
    word: "eau", 
    definition: "liquide vital incolore", 
    englishWord: "water", 
    englishDef: "colorless vital liquid" 
  },
  { 
    word: "lumière", 
    definition: "énergie visible qui éclaire", 
    englishWord: "light", 
    englishDef: "visible energy that illuminates" 
  },
  { 
    word: "ombre", 
    definition: "zone sombre créée par un objet", 
    englishWord: "shadow", 
    englishDef: "dark area created by an object" 
  },
  { 
    word: "feu", 
    definition: "combustion produisant chaleur et lumière", 
    englishWord: "fire", 
    englishDef: "combustion producing heat and light" 
  },
  { 
    word: "ciel", 
    definition: "espace au-dessus de la terre", 
    englishWord: "sky", 
    englishDef: "space above the earth" 
  },
  { 
    word: "vent", 
    definition: "mouvement de l'air", 
    englishWord: "wind", 
    englishDef: "movement of air" 
  },
  { 
    word: "montagne", 
    definition: "relief élevé", 
    englishWord: "mountain", 
    englishDef: "elevated terrain" 
  },
  { 
    word: "rivière", 
    definition: "cours d'eau", 
    englishWord: "river", 
    englishDef: "watercourse" 
  },
  { 
    word: "jardin", 
    definition: "terrain où l'on cultive des plantes", 
    englishWord: "garden", 
    englishDef: "land where plants are cultivated" 
  },
  { 
    word: "pont", 
    definition: "construction permettant de franchir un obstacle", 
    englishWord: "bridge", 
    englishDef: "structure allowing crossing of an obstacle" 
  },
  { 
    word: "voix", 
    definition: "son produit par les cordes vocales", 
    englishWord: "voice", 
    englishDef: "sound produced by vocal cords" 
  },
  { 
    word: "livre", 
    definition: "ensemble de pages reliées", 
    englishWord: "book", 
    englishDef: "set of bound pages" 
  },
  { 
    word: "lettre", 
    definition: "caractère d'écriture", 
    englishWord: "letter", 
    englishDef: "character of writing" 
  },
  { 
    word: "musique", 
    definition: "art des sons", 
    englishWord: "music", 
    englishDef: "art of sounds" 
  },
  { 
    word: "chanson", 
    definition: "composition musicale vocale", 
    englishWord: "song", 
    englishDef: "vocal musical composition" 
  },
  // Verbs
  { 
    word: "aimer", 
    definition: "éprouver de l'amour", 
    englishWord: "to love", 
    englishDef: "to feel love" 
  },
  { 
    word: "aller", 
    definition: "se déplacer vers un lieu", 
    englishWord: "to go", 
    englishDef: "to move to a place" 
  },
  { 
    word: "apporter", 
    definition: "amener quelque chose", 
    englishWord: "to bring", 
    englishDef: "to bring something" 
  },
  { 
    word: "attendre", 
    definition: "rester en un lieu jusqu'à l'arrivée de quelqu'un ou quelque chose", 
    englishWord: "to wait", 
    englishDef: "to stay in a place until someone or something arrives" 
  },
  { 
    word: "avoir", 
    definition: "posséder", 
    englishWord: "to have", 
    englishDef: "to possess" 
  },
  { 
    word: "chanter", 
    definition: "produire des sons musicaux avec la voix", 
    englishWord: "to sing", 
    englishDef: "to produce musical sounds with the voice" 
  },
  { 
    word: "chercher", 
    definition: "essayer de trouver", 
    englishWord: "to look for", 
    englishDef: "to try to find" 
  },
  { 
    word: "comprendre", 
    definition: "saisir le sens de quelque chose", 
    englishWord: "to understand", 
    englishDef: "to grasp the meaning of something" 
  },
  { 
    word: "connaître", 
    definition: "avoir la connaissance de quelque chose", 
    englishWord: "to know", 
    englishDef: "to have knowledge of something" 
  },
  { 
    word: "courir", 
    definition: "se déplacer rapidement avec les jambes", 
    englishWord: "to run", 
    englishDef: "to move quickly with the legs" 
  },
  { 
    word: "créer", 
    definition: "produire quelque chose de nouveau", 
    englishWord: "to create", 
    englishDef: "to produce something new" 
  },
  { 
    word: "croire", 
    definition: "tenir pour vrai", 
    englishWord: "to believe", 
    englishDef: "to hold something as true" 
  },
  { 
    word: "demander", 
    definition: "solliciter quelque chose", 
    englishWord: "to ask", 
    englishDef: "to request something" 
  },
  { 
    word: "dire", 
    definition: "exprimer par des mots", 
    englishWord: "to say", 
    englishDef: "to express with words" 
  },
  { 
    word: "donner", 
    definition: "transmettre quelque chose à quelqu'un", 
    englishWord: "to give", 
    englishDef: "to pass something to someone" 
  },
  { 
    word: "écrire", 
    definition: "tracer des signes graphiques représentant des mots", 
    englishWord: "to write", 
    englishDef: "to draw graphic signs representing words" 
  },
  { 
    word: "écouter", 
    definition: "prêter attention à des sons", 
    englishWord: "to listen", 
    englishDef: "to pay attention to sounds" 
  },
  { 
    word: "entrer", 
    definition: "pénétrer dans un lieu", 
    englishWord: "to enter", 
    englishDef: "to penetrate into a place" 
  },
  { 
    word: "envoyer", 
    definition: "faire parvenir quelque chose à quelqu'un", 
    englishWord: "to send", 
    englishDef: "to make something reach someone" 
  },
  { 
    word: "être", 
    definition: "exister", 
    englishWord: "to be", 
    englishDef: "to exist" 
  },
  { 
    word: "faire", 
    definition: "effectuer une action", 
    englishWord: "to do", 
    englishDef: "to perform an action" 
  },
  { 
    word: "fermer", 
    definition: "clore une ouverture", 
    englishWord: "to close", 
    englishDef: "to shut an opening" 
  },
  { 
    word: "finir", 
    definition: "arriver au terme de quelque chose", 
    englishWord: "to finish", 
    englishDef: "to reach the end of something" 
  },
  { 
    word: "jouer", 
    definition: "participer à un jeu", 
    englishWord: "to play", 
    englishDef: "to take part in a game" 
  },
  { 
    word: "lire", 
    definition: "déchiffrer des signes graphiques", 
    englishWord: "to read", 
    englishDef: "to decipher graphic signs" 
  },
  { 
    word: "manger", 
    definition: "consommer des aliments", 
    englishWord: "to eat", 
    englishDef: "to consume food" 
  },
  { 
    word: "marcher", 
    definition: "se déplacer à pied", 
    englishWord: "to walk", 
    englishDef: "to move on foot" 
  },
  { 
    word: "mettre", 
    definition: "placer quelque chose quelque part", 
    englishWord: "to put", 
    englishDef: "to place something somewhere" 
  },
  { 
    word: "ouvrir", 
    definition: "dégager une ouverture", 
    englishWord: "to open", 
    englishDef: "to clear an opening" 
  },
  { 
    word: "parler", 
    definition: "communiquer par la parole", 
    englishWord: "to speak", 
    englishDef: "to communicate through speech" 
  },
  { 
    word: "partir", 
    definition: "quitter un lieu", 
    englishWord: "to leave", 
    englishDef: "to leave a place" 
  },
  { 
    word: "penser", 
    definition: "avoir des pensées", 
    englishWord: "to think", 
    englishDef: "to have thoughts" 
  },
  { 
    word: "pouvoir", 
    definition: "avoir la capacité de faire quelque chose", 
    englishWord: "to be able to", 
    englishDef: "to have the ability to do something" 
  },
  { 
    word: "prendre", 
    definition: "se saisir de quelque chose", 
    englishWord: "to take", 
    englishDef: "to seize something" 
  },
  { 
    word: "regarder", 
    definition: "diriger ses yeux vers quelque chose", 
    englishWord: "to look at", 
    englishDef: "to direct one's eyes towards something" 
  },
  { 
    word: "rester", 
    definition: "demeurer en un lieu", 
    englishWord: "to stay", 
    englishDef: "to remain in a place" 
  },
  { 
    word: "savoir", 
    definition: "avoir la connaissance de quelque chose", 
    englishWord: "to know", 
    englishDef: "to have knowledge of something" 
  }
]


let index
let current
// ON PAGE LOAD
// Assign a random number to current index variable
// assign current question variable
// create the div and render the definition

const initialize = () => {
  updateScore()
  index = Math.floor(Math.random() * definitions.length)
  current = definitions[index]
  console.log(current)
  let div = document.createElement("div")
  div.innerHTML = current.definition
  definition.prepend(div)
}

// WHEN GUESSED
// check if input is equal to current.word
// if yes alert "correct"
// add currentIndes to correct_answers array
// change currentIndex to something that is not in correct_answers array
// update html to show new definition

// if no alert "wrong"

// WHEN SKIPPED
  // ALERT correct word
  //change currentIndex
  // update html to show new definition


let correctWords = []

const definition = document.getElementById("definition")
const input = document.getElementById("input")
const submit = document.getElementById("submit")
const skip = document.getElementById("skip")
const translateDef = document.getElementById("translateDef")
const translateToggle = document.getElementById("translateToggle")
const score_element = document.getElementById("score")
const show = document.getElementById("show")
translateToggle.addEventListener('change', (e) => toggleTranslation(e))
,


submit.addEventListener("click", () => checkGuess())
skip.addEventListener("click", () => giveUp())
show.addEventListener("click", () => showWord())
input.addEventListener("keypress", (e) => {
  if(e.key == "Enter") {
    checkGuess()
  }
})

const showWord = () => {
  alert(current.word)
}

const toggleTranslation = (e) => {
  if(e.currentTarget.checked) {
    definition.innerHTML = current.englishDef
    translateToggle.nextElementSibling.innerText = "Français"
  } else {
    definition.innerHTML = current.definition
    translateToggle.nextElementSibling.innerText = "English"
  }
}

const giveUp = () => {
  reInitialize()
}



const translateDefinition = () => {
  console.log(current.englishDef)
}

const reInitialize = () => {
  // get a new index but make sure it isn't already in correctWords array
  index = Math.floor(Math.random() * definitions.length)
  // also make sure not all the words are in correctWords
  if(correctWords.includes(index) && correctWords.length < definitions.length) {
    return reInitialize()
  } else if(correctWords.length == definitions.length) {
    alert("YOU BEAT THE GAME")
    return false
  } else {
    // reassign current to the new random number that wasn't in the correctWords array
    current = definitions[index]
    definition.innerText = current.definition
    input.value = ""
  }
  updateScore()
}

const updateScore = () => {
  score_element.innerHTML = `${correctWords.length} / ${definitions.length}`
}

const checkGuess = () => {
  if(input.value.toLowerCase() == current.word) {
    alert("CORRECT!")
    correctWords.push(index)
    reInitialize()
  } else {
    alert("NO! try again or skip it")
  }
}

window.onLoad = initialize()