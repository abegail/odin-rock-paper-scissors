// Generate the computer's choice
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

// Play one single round
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

// Play a 5-round game and keep score for each round
function game() {
    let playerSelection;
    let computerSelection;
    let result;
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Enter your choice:");
        computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);

        // Increment score of winner
        if (result.includes("win")) playerScore += 1;
        else if (result.includes("lose")) computerScore += 1;

        console.log(`Player selection is: ${playerSelection}`);
        console.log(`Computer selection is: ${computerSelection}`);
        console.log(result);
        alert(`\nYou selected: ${playerSelection} \nComputer selected: ${computerSelection} \n\n${result}\n\nYour score: ${playerScore}\nComputer score: ${computerScore}`);
        
    }

    // Display final game winner
    if (playerScore === computerScore) alert("It's a draw.");
    else if (playerScore > computerScore) alert("You're awesome!");
    else alert("You suck.");
}

game();