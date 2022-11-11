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
          break;
        case "paper":
          alert("You Lost");
          break;
        case "scissor":
          alert("You Won");
          break;
      }
      break;
    case "paper":
      switch (computer) {
        case "rock":
          alert("You Won!");
          break;
        case "paper":
          alert("Draw");
          break;
        case "scissor":
          alert("You Lost");
          break;
      }
      break;
    case "scissor":
      switch (computer) {
        case "rock":
          alert("You Won");
          break;
        case "paper":
          alert("You Won");
          break;
        case "scissor":
          alert("Draw");
          break;
      }
      break;
  }
}

game();
