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

console.log(getComputerChoice());
