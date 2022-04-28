const CHOICE_ARRAY = ["rock", "paper", "scissors"];

// let playerSelection = prompt("take your pick.");
const playerSelection = "rock";
const computerSelection = computerPlay(CHOICE_ARRAY);
let playerWins = 0;
let computerWins = 0;

function computerPlay(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerWins++;
    return `you win. ${playerSelection} beats ${computerSelection}.`;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    computerWins++;
    return `you lose. ${computerSelection} beats ${playerSelection}.`;
  } else {
    return `tie game. you have both chosen ${computerSelection}`;
  }
}
