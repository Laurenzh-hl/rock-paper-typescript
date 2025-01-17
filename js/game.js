//alert("Hello, world!, Love, TypeScript");
var userScore = 0;
var computerScore = 0;
var counter = 0;
var moves;
(function (moves) {
    moves[moves["Rock"] = 0] = "Rock";
    moves[moves["Paper"] = 1] = "Paper";
    moves[moves["Scissors"] = 2] = "Scissors";
})(moves || (moves = {}));
function startGame() {
    userScore = 0;
    computerScore = 0;
    counter = 0;
    outputMessage("The game has begun!");
    hideStartButton();
    enableOptions();
}
function outputMessage(message) {
    var output = document.querySelector(".output");
    output.innerHTML += "<p>".concat(message, "</p>");
}
function clearOutput() {
    var output = document.querySelector(".output");
    output.innerHTML = "";
}
function clearWinner() {
    var winnerMsg = document.querySelector(".winner-msg");
    winnerMsg.innerHTML = "";
}
function hideStartButton() {
    var startButton = document.querySelector(".start-button");
    var gameButtons = document.querySelector(".game-buttons");
    startButton.style.display = "none";
    gameButtons.style.display = "block";
}
function showStartButton() {
    var startButton = document.querySelector(".start-button");
    var gameButtons = document.querySelector(".game-buttons");
    startButton.style.display = "inline";
    gameButtons.style.display = "none";
}
function enableOptions() {
    var options = document.querySelectorAll(".option");
    for (var i = 0; i < options.length; i++) {
        options[i].disabled = false;
    }
}
function disableOptions() {
    var options = document.querySelectorAll(".option");
    for (var i = 0; i < options.length; i++) {
        options[i].disabled = true;
    }
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
    var computerGuess = getComputerMove();
    var winner = calculateWinner(userGuess, computerGuess);
    outputMessage("You chose ".concat(moves[userGuess.move]));
    outputMessage("Computer chose ".concat(moves[computerGuess.move]));
    if (winner.player === "User") {
        userScore++;
    }
    if (winner.player === "Computer") {
        computerScore++;
    }
    outputMessage("".concat(winner.player, " wins with ").concat(moves[winner.move]));
    checkProgress();
}
function calculateWinner(guessOne, guessTwo) {
    if (guessOne.move == guessTwo.move)
        return { player: "Neither", move: guessOne.move };
    switch (guessOne.move) {
        case moves.Rock:
            if (guessTwo.move === moves.Paper) {
                return guessTwo;
            }
            break;
        case moves.Paper:
            if (guessTwo.move === moves.Scissors) {
                return guessTwo;
            }
            break;
        case moves.Scissors:
            if (guessTwo.move === moves.Rock) {
                return guessTwo;
            }
            break;
        default:
            return guessOne;
    }
    return guessOne;
}
function checkProgress() {
    var resetButton = document.querySelector(".reset-button");
    var winnerMsg = document.querySelector(".winner-msg");
    if (userScore === 2) {
        winnerMsg.innerHTML = "<p>User wins best of three!</p>";
        resetButton.style.display = "inline";
        disableOptions();
    }
    else if (computerScore === 2) {
        winnerMsg.innerHTML = "<p>Computer wins best of three</p>";
        resetButton.style.display = "inline";
        disableOptions();
    }
}
function reset() {
    clearOutput();
    clearWinner();
    showStartButton();
    var resetButton = document.querySelector(".reset-button");
    resetButton.style.display = "none";
}
// let computerGuess: guess = getComputerMove();
// console.log(computerGuess);
//# sourceMappingURL=game.js.map