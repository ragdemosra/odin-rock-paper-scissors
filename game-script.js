const CHOICE_ARRAY = ["rock", "paper", "scissors"];

// let playerSelection = prompt("take your pick.");
let playerWins = 0;
let computerWins = 0;
let tieGames = 0;

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
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    computerWins++;
  } else {
    tieGames++;
  }
}

function game() {
  while (true) {
    let playerChoice = randomPlay(CHOICE_ARRAY);
    let computerChoice = randomPlay(CHOICE_ARRAY);

    if (playerWins === 5) {
      console.log("the player wins!");
      break;
    } else if (computerWins === 5) {
      console.log("the computer wins!");
      break;
    } else {
      playRound(playerChoice, computerChoice);
    }
  }

  console.log(`player wins: ${playerWins}`);
  console.log(`computer wins: ${computerWins}`);
  console.log(`tie games: ${tieGames}`);
}

game();
