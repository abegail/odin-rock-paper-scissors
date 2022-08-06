// Create a function that will randomly return either "Rock", "Paper", or Scissors
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// Create a function that will play one single round
function playRound(playerSelection, computerSelection) {
    let whatPlayerSelected = playerSelection.toLowerCase();

    if (whatPlayerSelected === computerSelection) {
        return "It's a draw!";
    }

    if (whatPlayerSelected === "rock") {
        if (computerSelection === "paper") {
            return "You lose! Paper beats rock.";
        } else {
            return "You win! Rock beats scissors."
        }
    }

    if (whatPlayerSelected === "paper") {
        if (computerSelection === "rock") {
            return "You win! Paper beats rock.";
        } else {
            return "You lose! Scissors beat paper.";
        }
    }

    if(whatPlayerSelected === "scissors") {
        if (computerSelection === "rock") {
            return "You lose! Rock beats scissors";
        } else {
            return "You win! Paper beats rock."
        }
    }
    
  
}

const playerSelection = "PAPER";
const computerSelection = getComputerChoice();

console.log(`Player selection is: ${playerSelection}`);
console.log(`Computer selection is: ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));