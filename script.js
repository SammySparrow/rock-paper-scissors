let humanScore = 0;
let computerScore = 0;

const resultDisplay = document.querySelector(".results");
const choices = document.querySelector(".buttons");

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function playRound(humanChoice, computerChoice) {
  let resultArray = [
    ["Draw.", "You Lose...", "You Win!"],
    ["You Win!", "Draw.", "You Lose..."],
    ["You Lose...", "You Win!", "Draw."],
  ];
  let result = resultArray[humanChoice][computerChoice];
  let display = ["rock", "paper", "scissors"];

  console.log(result);
  if (result == "You Win!") {
    humanScore += 1;
  } else if (result == "You Lose...") {
    computerScore += 1;
  }
  resultDisplay.textContent = `You chose ${display[humanChoice]}, computer chose ${display[computerChoice]}. 
  ${result} Your score: ${humanScore} Computer score: ${computerScore}`;
}

choices.addEventListener("click", (e) => {
  let target = e.target;
  let choice;
  let comChoice = getComputerChoice();

  switch (target.id) {
    case "rock":
      choice = 0;
      playRound(choice, comChoice);
      break;
    case "paper":
      choice = 1;
      playRound(choice, comChoice);
      break;
    case "scissors":
      choice = 2;
      playRound(choice, comChoice);
      break;
  }
});
