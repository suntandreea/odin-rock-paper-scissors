const log = console.log;

const choices = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 100);
  if (choice < 33) return 0;
  if (choice < 66) return 1;
  return 2;
}

function getPlayerChoice() {
  const input = prompt(`Pick your choice. Insert 0 for "ROCK", 1 for "PAPER" and 2 for "SCISSORS".`);
  if (input === "0") return 0;
  if (input === "1") return 1;
  return 2;
}

const computer = getComputerChoice();
const player = getPlayerChoice();

log("Computer picked ", choices[computer], ".");
log("You picked ", choices[player], ".");