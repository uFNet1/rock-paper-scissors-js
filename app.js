let humanScore = 0;
let computerScore = 0;

const ROUNDS_TO_PLAY = 1;

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
    return "lose";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beats Paper");
    return "lose";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beats Scissors");
    return "lose";
  } else if (humanChoice === computerChoice) {
    console.log("Tie!");
    return "tie";
  } else {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    return "win";
  }
}

function playGame() {
  for (let index = 0; index < ROUNDS_TO_PLAY; index++) {
    const humanSelection = getUserChoice();
    const computerSelection = getComputerChoice();

    const result = playRound(humanSelection, computerSelection);

    if (result === "win") humanScore += 1;
    if (result === "lose") computerScore += 1;
  }
  if (humanScore > computerScore) console.log("You are winner!");
  else if (computerScore > humanScore) console.log("You lost.");
  else console.log("This is a Tie!");
}
playGame();
