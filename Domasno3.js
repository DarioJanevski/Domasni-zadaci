let words = ["student", "fakultet", "program", "drvo", "jabolka", "voda", "zgrada", "patika", "papuca", "stolica","ekran","monitor","staklo", "hartija"
            , "kutija", "penkalo", "miris", "glava", "kamera", "telefon"];

let selectedWord = "";
let partialWord = "";
let attempts = 5;

function startGame() {
    selectedWord = chooseWord();
    partialWord = getRandomStart(selectedWord) + "_".repeat(selectedWord.length - 3);
    attempts = 5;

    document.getElementById("game-container").style.display = "block";
    document.getElementById("current-word").innerText = "Tekoven zbor: " + partialWord;
    document.getElementById("attempts").innerText = "Preostanati obidi: " + attempts;

    document.getElementById("guess-input").value = "";
}

function chooseWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function getRandomStart(word) {
    let start = "";
    for (let i = 0; i < 3; i++) {
        start += word[Math.floor(Math.random() * word.length)];
    }
    return start;
}

function checkGuess() {
    let guess = document.getElementById("guess-input").value.toLowerCase();

    if (guess === selectedWord) {
        showPopup("Cestitki! Go pogodivte zborot.");
    } else {
        attempts--;
        document.getElementById("attempts").innerText = "Preostanati obidi: " + attempts;

        if (attempts === 0) {
            showPopup("Zalam, nemate povekje obidi. Tocniot zbor e: " + selectedWord);
        }
    }
}

function showPopup(message) {
    document.getElementById("popup-message").innerText = message;
    document.getElementById("result-popup").style.display = "flex";
}

function resetGame() {
    document.getElementById("result-popup").style.display = "none";
    document.getElementById("game-container").style.display = "none";
    startGame();
}

// Start the game when the page loads
window.onload = startGame;