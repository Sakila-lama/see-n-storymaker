// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = 'This is the text string that you will generate with your script';
var speakButton = document.querySelector('button');


/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
	speakNow(textToSpeak);
}

//Arrays for generating random phrases
var nouns1 = ['cat', 'dog', 'bird', 'tree', 'house'];
var verbs = ['runs', 'jumps', 'flies', 'grows', 'builds'];
var adjectives = ['happy', 'sad', 'fast', 'slow', 'brights'];
var nouns2 = ['theme', 'on the boat', 'like a plane', 'like a bike', 'train'];
var places = ['park', 'beach', 'mountain', 'in a forest', 'city'];

var activeArrays = [];

var textToSpeak = '';
var activeButton = null;
var currentIndex = 0;

function updateDisplay() {
    document.getElementById('output').textContent = textToSpeak;
    speakNow(textToSpeak);
}

function setActiveButton(buttonId, wordArray) {
    if (activeButton) {
        // Remove the first button's array
        var indexToRemove = activeArrays.indexOf(activeButton);
        if (indexToRemove !== -1) {
            activeArrays.splice(indexToRemove, 1);
        }
        document.getElementById(activeButton).classList.remove('active');
    }
    // Add the current button's array
    activeArrays.push(buttonId);
    activeButton = buttonId;
    document.getElementById(buttonId).classList.add('active');

    // Get the word from the array based on the current index
    textToSpeak = wordArray[currentIndex];
    updateDisplay();
}

document.getElementById('nounButton1').onclick = function() {
    setActiveButton('nounButton1', nouns1);
    currentIndex = (currentIndex + 1) % nouns1.length;
};

document.getElementById('verbButton').onclick = function() {
    setActiveButton('verbButton', verbs);
    currentIndex = (currentIndex + 1) % verbs.length;
};

document.getElementById('adjButton').onclick = function() {
    setActiveButton('adjButton', adjectives);
    currentIndex = (currentIndex + 1) % adjectives.length;
};

document.getElementById('nounButton2').onclick = function() {
    setActiveButton('nounButton2', nouns2);
    currentIndex = (currentIndex + 1) % nouns2.length;
};

document.getElementById('placeButton').onclick = function() {
    setActiveButton('placeButton', places);
    currentIndex = (currentIndex + 1) % places.length;
};

document.getElementById('randomButton').onclick = function() {
    var randomNoun1 = getRandomWord(nouns1);
    var randomVerb = getRandomWord(verbs);
    var randomAdjective = getRandomWord(adjectives);
    var randomNoun2 = getRandomWord(nouns2);
    var randomPlace = getRandomWord(places);
    
    textToSpeak = `${randomNoun1} ${randomVerb} ${randomAdjective} ${randomNoun2} ${randomPlace}`;
    updateDisplay();
};

document.getElementById('settingButton').onclick = function() {
    // Reset all active arrays
    activeArrays.forEach(function(buttonId) {
        document.getElementById(buttonId).classList.remove('active');
    });
    activeArrays = [];
    activeButton = null;
    textToSpeak = '';
    currentIndex = 0;
    updateDisplay();
};

function getRandomWord(wordArray) {
    return wordArray[Math.floor(Math.random() * wordArray.length)];
}

function speakNow(string) {
    var synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance(string);
    synth.speak(utterThis);
}
