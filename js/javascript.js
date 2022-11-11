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

function playRound() {
  let computer = computerChoice();
  let playerHand = prompt("Pick one: Rock, Paper or Scissor");
  playerHand = playerHand.toLowerCase();

  switch (playerHand) {
    case "rock":
      switch (computer) {
        case "rock":
          alert("Draw");
          return "draw";

        case "paper":
          alert("You Lost");
          return "lost";

        case "scissor":
          alert("You Won");
          return "won";
      }
      break;
    case "paper":
      switch (computer) {
        case "rock":
          alert("You Won!");
          return "won";

        case "paper":
          alert("Draw");
          return "draw";

        case "scissor":
          alert("You Lost");
          return "lost";
      }
      break;
    case "scissor":
      switch (computer) {
        case "rock":
          alert("You Lost");
          return "lost";

        case "paper":
          alert("You Won");
          return "won";

        case "scissor":
          alert("Draw");
          return "draw";
      }
      break;
  }
}

function game() {
  alert("Hello, lets play a game of rock, paper, scissor.\n\n Best of 5 wins");
  let playerScore = 0,
    computerScore = 0;

  while (true) {
    switch (playRound()) {
      case "draw":
        break;
      case "won":
        ++playerScore;
        break;
      case "lost":
        ++computerScore;
        break;
    }
    if (playerScore == 3) {
      alert(`You Won the GAME ${playerScore} - ${computerScore}`);
      return;
    }
    if (computerScore == 3) {
      alert(`You Lost the GAME ${playerScore} - ${computerScore}`);
      return;
    }
  }
}

game();
