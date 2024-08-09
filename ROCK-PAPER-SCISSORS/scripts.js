const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultDisplay = document.getElementById("result");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");

const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];

  let result;
  if (playerChoice === randomChoice) {
    result = "It's a tie!";
  } else if (playerChoice === "rock" && randomChoice === "scissors" ||
             playerChoice === "paper" && randomChoice === "rock" ||
             playerChoice === "scissors" && randomChoice === "paper") {
    result = "You win!";
    playerScore++;
  } else {
    result = "You lose!";
    computerScore++;
  }

  resultDisplay.textContent = `You chose ${playerChoice}. Computer chose ${randomChoice}. ${result}`;
  updateScore();
}

function updateScore() {
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
}

rockButton.addEventListener("click", function() {
  playGame("rock");
});

paperButton.addEventListener("click", function() {
  playGame("paper");
});

scissorsButton.addEventListener("click", function() {
  playGame("scissors");
});


