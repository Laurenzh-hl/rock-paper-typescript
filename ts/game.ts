//alert("Hello, world!, Love, TypeScript");
let userScore: number = 0;
let computerScore: number = 0;
let counter: number = 0;

function startGame(): void {
  userScore = 0;
  computerScore = 0;
  counter = 0;
  outputMessage("The game has begun!");
  hideStartButton();
}

function outputMessage(message: string): void {
  let output: HTMLDivElement = document.querySelector(".output");
  output.innerHTML += `<p>${message}</p>`;
}

function hideStartButton(): void {
  let startButton: HTMLButtonElement = document.querySelector(".start-button");
  let gameButtons: HTMLDivElement = document.querySelector(".game-buttons");
  startButton.style.display = "none";
  gameButtons.style.display = "block";
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
}

// let computerGuess: guess = getComputerMove();
// console.log(computerGuess);
