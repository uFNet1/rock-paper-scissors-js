let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const random = Math.random();

  if (random <= 0.3) return "rock";
  else if (random > 0.3 && random < 0.6) return "paper";
  else if (random >= 0.6) return "scissors";
}
function getUserChoice() {
  const user = prompt("Type your answer");
  return user;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = String(humanChoice).toLowerCase();

  if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats Rock");
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beats Paper");
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beats Scissors");
  } else if (humanChoice === computerChoice) {
    console.log("Tie!");
  } else {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  }
}

const humanSelection = getUserChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
