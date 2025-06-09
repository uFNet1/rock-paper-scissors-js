let humanScore = 0;
let computerScore = 0;

const ROUNDS_TO_PLAY = 1;

const humanScoreDiv = document.querySelector("#humanScore");
const computerScoreDiv = document.querySelector("#computerScore");
const winAnnouncementDiv = document.querySelector("#win-announcement");

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

function playGame(humanChoice) {
  const humanSelection = humanChoice;
  const computerSelection = getComputerChoice();

  const result = playRound(humanSelection, computerSelection);

  if (result === "win") {
    humanScore += 1;
    humanScoreDiv.textContent = Number(humanScoreDiv.textContent) + 1;
  }
  if (result === "lose") {
    computerScore += 1;
    computerScoreDiv.textContent = Number(computerScoreDiv.textContent) + 1;
  }
  if (humanScore >= 5 || computerScore >= 5) {
    winAnnouncementDiv.style.display = "inline";
    if (humanScore > computerScore) {
      console.log("You are winner!");
      winAnnouncementDiv.textContent = "You are winner!";
      winAnnouncementDiv.style.color = "#2dca2d";
    } else if (computerScore > humanScore) {
      console.log("You lost.");
      winAnnouncementDiv.textContent = "You lost.";
      winAnnouncementDiv.style.color = "#e42d2d";
    } else {
      console.log("This is a Tie!");
      winAnnouncementDiv.textContent = "This is a Tie!";
    }
  }
}

function initializeGame() {
  document.querySelector("#rock").addEventListener("click", () => {
    playGame("rock");
  });
  document.querySelector("#paper").addEventListener("click", () => {
    playGame("paper");
  });
  document.querySelector("#scissors").addEventListener("click", () => {
    playGame("scissors");
  });

  humanScoreDiv.textContent = "0";
  computerScoreDiv.textContent = "0";
}
initializeGame();
// adding listeners to buttons
// calling play round with button result as a parameter for human choice
//
