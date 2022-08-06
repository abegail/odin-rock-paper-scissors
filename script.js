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
    
    // I wonder if there's a shorter implementation of the code below. Some parts feel redundant.
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
            return "You win! Scissors beat paper."
        }
    }
}

// Create a function that will play a 5-round game and keep score for each game
function game() {
    let playerSelection;
    let computerSelection;
    let result;

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Enter your choice:");
        computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);

        console.log(`Player selection is: ${playerSelection}`);
        console.log(`Computer selection is: ${computerSelection}`);
        console.log(result);
        alert(`\nYou selected: ${playerSelection} \nComputer selected: ${computerSelection} \n\n${result}`);
        
    }
}

game();