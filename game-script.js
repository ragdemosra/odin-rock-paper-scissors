const CHOICE_ARRAY = ["rock", "paper", "scissors"];

// let playerSelection = prompt("take your pick.");
let playerWins = 0;
let computerWins = 0;
let gameTies = 0;

function randomPlay(array) {
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
    gameTies++;
    return `tie game. you have both chosen ${computerSelection}`;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerChoice = randomPlay(CHOICE_ARRAY);
    let computerChoice = randomPlay(CHOICE_ARRAY);

    if (playerChoice === computerChoice) {
      continue;
    } else {
      playRound(playerChoice, computerChoice);
    }
  }

  console.log(`player wins: ${playerWins}`);
  console.log(`computer wins: ${computerWins}`);
  console.log(`game ties: ${gameTies}`);
}

game();
