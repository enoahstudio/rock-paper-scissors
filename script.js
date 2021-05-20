// HTML DOM
const resultHtml = document.querySelector(".result");
const playerScoreHtml = document.getElementById("player-score");
const computerScoreHtml = document.getElementById("computer-score");
const selectionHtml = document.querySelectorAll(".selection-symbol");
const playerSelectionHtml = document.getElementById("player-selection");
const computerSelectionHtml = document.getElementById("computer-selection");
const resetHtml = document.querySelector(".reset");

// Default Variables
let playerScore = 0;
let computerScore = 0;

// Rock, Paper, Scissors Selectors
selectionHtml.forEach(selection => selection.addEventListener("click", function(){
    if (playerScore >= 5 || computerScore >= 5) {
        return;
    }
    game(selection.id);
}));


// Reset
resetHtml.addEventListener("click", function(){
    playerScore = 0;
    computerScore = 0;
    playerScoreHtml.innerHTML = playerScore;
    computerScoreHtml.innerHTML = computerScore;
    playerSelectionHtml.classList.remove("loser");
    computerSelectionHtml.classList.remove("loser");
    resultHtml.classList.remove("winner-text","loser-text","draw-text");
    resultHtml.innerHTML = "Rock Paper Scissors";
    playerSelectionHtml.innerHTML = "🤜";
    computerSelectionHtml.innerHTML = "🤛";
})

// Game (5 rounds)
function game(playerSelection) {
    resultHtml.classList.remove("winner-text","loser-text","draw-text");
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    playerSelectionHtml.innerHTML = emoji(playerSelection);
    computerSelectionHtml.innerHTML = emoji(computerSelection);
    if (playerScore >= 5) {
        resultHtml.innerHTML = "YOU WON! 🎊";
    } else if (computerScore >= 5) {
        resultHtml.innerHTML = "YOU LOST! 😭";
    }
}

// Random Computer Selection
function computerPlay() {
    let computerSelection = ["rock", "paper", "scissors"];
    return computerSelection[Math.floor(Math.random()*3)]
}

// Game Logic
function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        roundWin(playerSelection, computerSelection)
    } else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
    ) {
        roundLose(playerSelection, computerSelection)
    } else if (playerSelection === computerSelection){
        roundDraw(playerSelection, computerSelection)
    } else {
        resultSummaryHtml.innerHTML = "Something went wrong..."
    }
}

// Round Win
function roundWin(player, computer) {
    resultHtml.classList.add("winner-text");
    resultHtml.innerHTML = `${capitalize(player)} ${beat(player)} ${capitalize(computer)}`;
    playerScore++;
    playerScoreHtml.innerHTML = playerScore;
    playerSelectionHtml.classList.remove("loser");
    computerSelectionHtml.classList.add("loser");
}

// Round Lose
function roundLose(player, computer) {
    resultHtml.classList.add("loser-text");
    resultHtml.innerHTML = `${capitalize(computer)} ${beat(computer)} ${capitalize(player)}`;
    computerScore++;
    computerScoreHtml.innerHTML = computerScore;
    playerSelectionHtml.classList.add("loser");
    computerSelectionHtml.classList.remove("loser");
}

// Round Draw
function roundDraw(player, computer) {
    resultHtml.classList.add("draw-text");
    resultHtml.innerHTML = "It's a Draw";
    playerSelectionHtml.classList.add("loser");
    computerSelectionHtml.classList.add("loser");
}

// Emoji Converter
function emoji(selection){
    switch(selection) {
        case "rock":
            return "✊";
        case "paper":
            return "✋";
        case "scissors":
            return "✌️";
    }
}

// Capitalize
function capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1)
}

// Beat or Beats
function beat(selection) {
    switch(selection){
        case "scissors":
            return "beat";
        default:
            return "beats";
    }
}