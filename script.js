const log = console.log;

const choices = ["ROCK", "PAPER", "SCISSORS"];
let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 100);
  if (choice < 33) return 0;
  if (choice < 66) return 1;
  return 2;
}

function getPlayerChoice() {
  const input = prompt(
    `Pick your choice. Insert 0 for "ROCK", 1 for "PAPER" and 2 for "SCISSORS".`
  );
  if (input === "0") return 0;
  if (input === "1") return 1;
  return 2;
}

function playRound(computerChoice, playerChoice) {
  if (computerChoice === playerChoice) {
    log("It's a tie! Nobody wins this round.");
  }
  if (
    (computerChoice === 0 && playerChoice === 1) ||
    (computerChoice === 1 && playerChoice === 2) ||
    (computerChoice === 2 && playerChoice === 0)
  ) {
    log(
      `You win this round! ${choices[playerChoice]} beats ${choices[computerChoice]}!`
    );
    playerScore++;
  }
  if (
    (computerChoice === 0 && playerChoice === 2) ||
    (computerChoice === 1 && playerChoice === 0) ||
    (computerChoice === 2 && playerChoice === 1)
  ) {
    log(
      `Computer wins this round! ${choices[computerChoice]} beats ${choices[playerChoice]}!`
    );
    computerScore++;
  }
}

const computer = getComputerChoice();
const player = getPlayerChoice();

log("Computer picked ", choices[computer], ".");
log("You picked ", choices[player], ".");

playRound(computer, player);
