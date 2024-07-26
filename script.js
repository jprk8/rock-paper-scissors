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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        let result = "";
        if (humanChoice == computerChoice) {
            result = "It's a tie!";
        } else if (humanChoice == "rock") {
            if (computerChoice == "paper") {
                result = "You lose! Paper beats Rock";
                computerScore++;
            } else if (computerChoice == "scissors") {
                result = "You win! Rock beats Scissors";
                humanScore++;
            }
        } else if (humanChoice == "paper") {
            if (computerChoice == "rock") {
                result = "You win! Paper beats Rock";
                humanScore++;
            } else if (computerChoice == "scissors") {
                result = "You lose! Scissors beat paper";
                computerScore++;
            }
        } else if (humanChoice == "scissors") {
            if (computerChoice == "rock") {
                result = "You lose! Rock beats Scissors";
                computerScore++;
            } else if (computerChoice == "paper") {
                result = "You win! Scissors beat paper";
                humanScore++;
            }
        }
        console.log(result);
    }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);

    if (humanScore > computerScore) {
        console.log("You win!");
    } else if (humanScore < computerScore) {
        console.log("You loser!");
    } else {
        console.log("It's a tie!");
    }
}

playGame();