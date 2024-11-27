//alert("Hello, world!, Love, TypeScript");
let userScore: number = 0;
let computerScore: number = 0;
let counter: number = 0;

enum moves {
  Rock,
  Paper,
  Scissors,
}

function startGame(): void {
  userScore = 0;
  computerScore = 0;
  counter = 0;
  outputMessage("The game has begun!");
  hideStartButton();
  enableOptions();
}

function outputMessage(message: string): void {
  let output: HTMLDivElement = document.querySelector(".output");
  output.innerHTML += `<p>${message}</p>`;
}

function clearOutput(): void {
  let output: HTMLDivElement = document.querySelector(".output");
  output.innerHTML = ``;
}

function clearWinner(): void {
  let winnerMsg: HTMLDivElement = document.querySelector(".winner-msg");
  winnerMsg.innerHTML = ``;
}

function hideStartButton(): void {
  let startButton: HTMLButtonElement = document.querySelector(".start-button");
  let gameButtons: HTMLDivElement = document.querySelector(".game-buttons");
  startButton.style.display = "none";
  gameButtons.style.display = "block";
}

function showStartButton(): void {
  let startButton: HTMLButtonElement = document.querySelector(".start-button");
  let gameButtons: HTMLDivElement = document.querySelector(".game-buttons");
  startButton.style.display = "inline";
  gameButtons.style.display = "none";
}

function enableOptions(): void {
  let options: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll(".option");
  for (let i = 0; i < options.length; i++) {
    options[i].disabled = false;
  }
}

function disableOptions(): void {
  let options: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll(".option");
  for (let i = 0; i < options.length; i++) {
    options[i].disabled = true;
  }
}

interface guess {
  move: number;
  player: string;
}

function getComputerMove(): guess {
  let move = Math.floor(Math.random() * 3);
  return {
    move: move,
    player: "Computer",
  };
}

function handleUserChoice(choice: number): void {
  let userGuess: guess = {
    move: choice,
    player: "User",
  };
  let computerGuess: guess = getComputerMove();
  let winner: guess = calculateWinner(userGuess, computerGuess);
  outputMessage(`You chose ${moves[userGuess.move]}`);
  outputMessage(`Computer chose ${moves[computerGuess.move]}`);
  if (winner.player === "User") {
    userScore++;
  }
  if (winner.player === "Computer") {
    computerScore++;
  }
  outputMessage(`${winner.player} wins with ${moves[winner.move]}`);
  checkProgress();
}

function calculateWinner(guessOne: guess, guessTwo: guess): guess {
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

function checkProgress(): void {
  let resetButton: HTMLDivElement = document.querySelector(".reset-button");
  let winnerMsg: HTMLDivElement = document.querySelector(".winner-msg");
  if (userScore === 2) {
    winnerMsg.innerHTML = `<p>User wins best of three!</p>`;
    resetButton.style.display = "inline";
    disableOptions();
  } else if (computerScore === 2) {
    winnerMsg.innerHTML = `<p>Computer wins best of three</p>`;
    resetButton.style.display = "inline";
    disableOptions();
  }
}

function reset(): void {
  clearOutput();
  clearWinner();
  showStartButton();
  let resetButton: HTMLDivElement = document.querySelector(".reset-button");
  resetButton.style.display = "none";
}
// let computerGuess: guess = getComputerMove();
// console.log(computerGuess);
