let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  let result;

  if (choice === 0) {
    return (result = "rock");
  } else if (choice === 1) {
    return (result = "paper");
  } else {
    return (result = "scissors");
  }
}

function getHumanChoice() {
  return prompt("Select rock, paper, or scissors");
}

function playRound(humanChoice, computerChoice) {
  let humanChoiceLower = humanChoice.toLowerCase();
  let result;

  if (
    (humanChoiceLower === "rock" && computerChoice === "rock") ||
    (humanChoiceLower === "paper" && computerChoice === "paper") ||
    (humanChoiceLower === "scissors" && computerChoice === "scissors")
  ) {
    result = "Draw.";
  } else if (
    (humanChoiceLower === "rock" && computerChoice === "scissors") ||
    (humanChoiceLower === "paper" && computerChoice === "rock") ||
    (humanChoiceLower === "scissors" && computerChoice === "paper")
  ) {
    result = "You win!";
  } else {
    result = "You lose...";
  }

  if (result === "You win!") {
    humanScore++;
  } else if (result === "You lose...") {
    computerScore++;
  }

  console.log(`You chose ${humanChoiceLower}, computer chose ${computerChoice}. ${result}
    The current score is:
    Player - ${humanScore}
    Computer - ${computerScore}`);
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
