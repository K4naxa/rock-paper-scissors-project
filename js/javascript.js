function computerChoice() {
  min = Math.ceil(0);
  max = Math.floor(2);
  num = Math.floor(Math.random() * (max - min) + min);

  switch (num) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissor";
    default:
      console.log("Switch ERROR");
  }
}

function game() {
  alert("Hello, lets play a game of rock, paper, scissors.");

  let computer = computerChoice();
  let playerHand = prompt("Pick one: Rock, Paper or Scissor");

  if (computer == "rock") {
    if (playerHand == "rock") alert("Draw");
    else if (playerHand == "paper") alert("You Won");
    else if (playerHand == "Scissors") alert("You Lost");
  } else if (computer == "paper") {
    if (playerHand == "rock") alert("You Lost");
    else if (playerHand == "paper") alert("Draw");
    else if (playerHand == "Scissors") alert("You Won");
  } else if (computer == "scissors") {
    if (playerHand == "rock") alert("You Won");
    else if (playerHand == "paper") alert("You lost");
    else if (playerHand == "Scissors") alert("Draw");
  }
}

game();
