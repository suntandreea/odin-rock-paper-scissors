const log = console.log;

const choices = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 100);
  if (choice < 33) return 0;
  if (choice < 66) return 1;
  return 2;
}

const computer = getComputerChoice();