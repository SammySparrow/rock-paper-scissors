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
  humanChoice = humanChoice.toLowerCase();
  let result;

  if (
    (humanChoice === "rock" && computerChoice === "rock") ||
    (humanChoice === "paper" && computerChoice === "paper") ||
    (humanChoice === "scissors" && computerChoice === "scissors")
  ) {
    result = "Draw.";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
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

  console.log(`You chose ${humanChoice}, computer chose ${computerChoice}. ${result}
    The current score is:
    Player - ${humanScore}
    Computer - ${computerScore}`);
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }
}

playGame();

// round should run 5 times
// game run 5 times = false
// after, set to true then return?
