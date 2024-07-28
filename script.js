function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else if (choice == 2) {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?");
    return choice.toLowerCase();
}

const result = document.querySelector("#result");

//playRound function returns 0 if tied, 1 if player wins, 2 if computer wins
function playRound(humanChoice, computerChoice) {
    let text = "";
    if (humanChoice == computerChoice) {
        text = "It's a tie!";
        result.textContent = text;
        return 0;
    } else if ((humanChoice == "rock" && computerChoice == "scissors") ||
            (humanChoice == "paper" && computerChoice == "rock") ||
            (humanChoice == "scissors" && computerChoice == "paper")) {
        text = `You win! ${humanChoice} beats ${computerChoice}`;
        result.textContent = text;
        return 1;
    } else {
        text = `You lose! ${computerChoice} beats ${humanChoice}`;
        result.textContent = text;
        return 2;
    }
}

let humanScore = 0;
let computerScore = 0;

const score = document.querySelector("#score");
const showHumanScore = document.createElement("p");
const showComputerScore = document.createElement("p");
const final = document.createElement("h2");
score.appendChild(showHumanScore);
score.appendChild(showComputerScore);
score.appendChild(final);

const replay = document.createElement("button");
replay.textContent = "Reset";
replay.addEventListener("click", () => {
    gameOver = false;
    humanScore = 0;
    computerScore = 0;
    result.textContent = "";
    showHumanScore.textContent = "";
    showComputerScore.textContent = "";
    final.textContent = "";
    score.removeChild(replay);
});

let gameOver = false;

function playGame(humanChoice) {
    if (!gameOver) {
        let result = playRound(humanChoice, getComputerChoice())

        if (result == 1) {
            humanScore++;
        } else if (result == 2) {
            computerScore++;
        } 
        showHumanScore.textContent = `Your Score: ${humanScore}`;
        showComputerScore.textContent = `Computer Score: ${computerScore}`;
    }
    if (humanScore == 5) {
        final.textContent = "YOU WIN!";
        final.style.color = "blue";
        gameOver = true;
        score.appendChild(replay);
    } else if (computerScore == 5) {
        final.textContent = "YOU LOSE!";
        final.style.color = "red";
        gameOver = true;
        score.appendChild(replay);
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playGame(button.id);
    });
});