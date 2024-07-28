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

//playRound function returns 0 if tied, 1 if player wins, 2 if computer wins
function playRound(humanChoice, computerChoice) {
    let result = "";
    if (humanChoice == computerChoice) {
        result = "It's a tie!";
        console.log(result);
        return 0;
    } else if ((humanChoice == "rock" && computerChoice == "scissors") ||
            (humanChoice == "paper" && computerChoice == "rock") ||
            (humanChoice == "scissors" && computerChoice == "paper")) {
        result = `You win! ${humanChoice} beats ${computerChoice}`;
        console.log(result);
        return 1;
    } else {
        result = `You lose! ${computerChoice} beats ${humanChoice}`;
        console.log(result);
        return 2;
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    let result = playRound(getHumanChoice(), getComputerChoice())

    if (result == 1) {
        humanScore++;
    } else if (result == 2) {
        computerScore++;
    } 


    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);

    if (humanScore > computerScore) {
        console.log("You are the winner!");
    } else if (humanScore < computerScore) {
        console.log("You are the loser!");
    } else {
        console.log("It's a tie!");
    }
}

playGame();