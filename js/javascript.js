const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
const playBtn = document.querySelector(".play");
const rockBtn = document.querySelector(".button-rock");
const paperBtn = document.querySelector(".button-paper");
const scissorBtn = document.querySelector(".button-scissor");
const scoreBoard = document.querySelector(".score");
const scoreTxt = document.querySelector(".scoreTxt");

const winTxt = document.createTextNode("YOU WON");
const lostTxt = document.createTextNode("YOU LOST");

function computerChoice() {
  min = Math.ceil(0);
  max = Math.floor(3);
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
function checkWinner() {
  if (playerScore.textContent == 3) {
    scoreTxt.appendChild(winTxt);
    return true;
  } else if (computerScore.textContent == 3) {
    scoreTxt.appendChild(lostTxt);
    return true;
  } else return false;
}
function playRound(playerHand) {
  let computerHand = computerChoice();

  switch (playerHand) {
    case "rock":
      switch (computerHand) {
        case "rock":
          return "draw";

        case "paper":
          ++computerScore.textContent;
          checkWinner();
          return;

        case "scissor":
          ++playerScore.textContent;
          checkWinner();
          return;
      }
      break;
    case "paper":
      switch (computerHand) {
        case "rock":
          ++playerScore.textContent;
          checkWinner();
          return;

        case "paper":
          return "draw";

        case "scissor":
          ++computerScore.textContent;
          checkWinner();
          return;
      }
      break;
    case "scissor":
      switch (computerHand) {
        case "rock":
          ++computerScore.textContent;
          checkWinner();
          return;

        case "paper":
          ++playerScore.textContent;
          checkWinner();
          return;

        case "scissor":
          return "draw";
      }
      break;
  }
}

function game() {
  rockBtn.addEventListener("click", function () {
    playRound("rock");
  });
  paperBtn.addEventListener("click", function () {
    playRound("paper");
  });
  scissorBtn.addEventListener("click", function () {
    playRound("scissor");
  });
}

playBtn.addEventListener("click", () => {
  (playerScore.textContent = 0), (computerScore.textContent = 0);
  if (scoreTxt.hasChildNodes()) {
    scoreTxt.removeChild(winTxt);
    scoreTxt.removeChild(lostTxt);
  }
  game();
});
