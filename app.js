function getComputerChoice() {
  const random = Math.random();

  if (random <= 0.3) return "rock";
  else if (random > 0.3 && random < 0.6) return "paper";
  else if (random >= 0.6) return "scissors";
}
