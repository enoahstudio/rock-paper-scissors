const resultHtml = document.querySelector(".result>h2");
const rockHtml = document.getElementById("rock");
const paperHtml = document.getElementById("paper");
const scissorsHtml = document.getElementById("scissors");
const playerScoreHtml = document.getElementById("player-score");
const computerScoreHtml = document.getElementById("computer-score");
let playerScore = 0;
let computerScore = 0;

function game() {
        rockHtml.addEventListener('click', function(){
            Round("Rock")
        });
        paperHtml.addEventListener('click', function(){
            Round("Paper")
        });
        scissorsHtml.addEventListener('click', function(){
            Round("Scissors")
        });
}

function Round(playerSelection){
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}

function computerPlay() {
    let computerSelection = ["Rock", "Paper", "Scissors"];
    return computerSelection[Math.floor(Math.random()*3)]
}

function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Paper" && computerSelection == "Rock") ||
        (playerSelection == "Scissors" && computerSelection == "Paper")
    ) {
        roundWin(playerSelection, computerSelection)
    } else if (
        (playerSelection == "Rock" && computerSelection == "Paper") ||
        (playerSelection == "Paper" && computerSelection == "Scissors") ||
        (playerSelection == "Scissors" && computerSelection == "Rock")
    ) {
        roundLose(playerSelection, computerSelection)
    } else if (playerSelection == computerSelection){
        roundDraw(playerSelection, computerSelection)
    } else {
        return "Invalid Selection!"
    }

    console.log(playerScore);
    console.log(computerScore);
}

function roundWin(player, computer) {
   resultHtml.innerHTML = `You Win! ${player} beats ${computer}`;
   playerScore++;
   playerScoreHtml.innerHTML = playerScore;
}

function roundLose(player, computer) {
    resultHtml.innerHTML = `You Lose! ${computer} beats ${player}`;
    computerScore++;
    computerScoreHtml.innerHTML = computerScore;
}

function roundDraw(player, computer) {
    resultHtml.innerHTML = `It's a Tie!`;
}

game()