//alert("Hello, world!, Love, TypeScript");
var userScore = 0;
var computerScore = 0;
var counter = 0;
function startGame() {
    userScore = 0;
    computerScore = 0;
    counter = 0;
    outputMessage("The game has begun!");
    hideStartButton();
}
function outputMessage(message) {
    var output = document.querySelector(".output");
    output.innerHTML += "<p>".concat(message, "</p>");
}
function hideStartButton() {
    var startButton = document.querySelector(".start-button");
    var gameButtons = document.querySelector(".game-buttons");
    startButton.style.display = "none";
    gameButtons.style.display = "block";
}
function getComputerMove() {
    var move = Math.floor(Math.random() * 3);
    return {
        move: move,
        player: "Computer",
    };
}
function handleUserChoice(choice) {
    var userGuess = {
        move: choice,
        player: "User",
    };
}
// let computerGuess: guess = getComputerMove();
// console.log(computerGuess);
//# sourceMappingURL=game.js.map