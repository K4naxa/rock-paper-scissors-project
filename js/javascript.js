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
  alert("Hello, lets play a game of rock, paper, scissor.");

  let computer = computerChoice();
  let playerHand = prompt("Pick one: Rock, Paper or Scissor");
  playerHand = playerHand.toLowerCase();

  switch (playerHand) {
    case "rock":
      switch (computer) {
        case "rock":
          alert("Draw");
          return "Draw";

        case "paper":
          alert("You Lost");
          return "lost";

        case "scissor":
          alert("You Won");
          return "Won";
      }
      break;
    case "paper":
      switch (computer) {
        case "rock":
          alert("You Won!");

        case "paper":
          alert("Draw");
          return "Draw";

        case "scissor":
          alert("You Lost");
          return "lost";
      }
      break;
    case "scissor":
      switch (computer) {
        case "rock":
          alert("You Won");
          return "Won";

        case "paper":
          alert("You Won");
          return "Won";

        case "scissor":
          alert("Draw");
          return "Draw";
      }
      break;
  }
}

game();
