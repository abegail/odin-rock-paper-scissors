// Map html elements
const body = document.querySelector('body');
const message = document.querySelector('#message');
const weaponsContainer = document.querySelector('#weaponsContainer');
const statsContainer = document.querySelector('#statsContainer');

// Game stats (score, weapon selection)
const humanStats = document.querySelector('#humanStats');
const computerStats = document.querySelector('#computerStats');
const humanPlayer = document.querySelector('#humanStats>.player');
const humanPlayerScore = document.querySelector('#humanStats>.score');
const humanPlayerSelection = document.querySelector('#humanStats>.selection');
const computerPlayer = document.querySelector('#computerStats>.player');
const computerPlayerScore = document.querySelector('#computerStats>.score');
const computerPlayerSelection = document.querySelector('#computerStats>.selection');

// Create weapon selection
const rock = document.createElement('button');
rock.textContent = "Rock";
const paper = document.createElement('button');
paper.textContent = "Paper";
const scissors = document.createElement('button');
scissors.textContent = "Scissors";

// Translate button clicks
const startButton = document.querySelector('#newGame');
startButton.addEventListener('click', startGame);

rock.addEventListener('click', () => {
    playRound('rock');
});

paper.addEventListener('click', () => {
    playRound('paper');
});

scissors.addEventListener('click', () => {
    playRound('scissors');
});

let humanScoreNumber = 0;
let computerScoreNumber = 0;

function startGame() {
    // Transition to game page
    message.textContent = "Pick your weapon:"

    // Create weapon buttons
    weaponsContainer.appendChild(rock);
    weaponsContainer.appendChild(paper);
    weaponsContainer.appendChild(scissors);

    // Show stats
    humanPlayer.textContent = 'You';
    computerPlayer.textContent = 'Computer';

    humanPlayerScore.textContent = humanScoreNumber;
    computerPlayerScore.textContent = computerScoreNumber;

    body.removeChild(startButton);
}

function playRound(playerSelection) {
    computerSelection = getComputerChoice();
    let result = message.textContent = compareWeapons(playerSelection, computerSelection);
    humanPlayerSelection.textContent = playerSelection;
    computerPlayerSelection.textContent = computerSelection;

    // Increment and update scores
    if (result.includes("win")) humanScoreNumber += 1;
    else if (result.includes("lose")) computerScoreNumber += 1;
    humanPlayerScore.textContent = humanScoreNumber;
    computerPlayerScore.textContent = computerScoreNumber;

    checkEndGame();
}

function checkEndGame() {
    let gameOver = false;
    if (humanScoreNumber === 5) {
        message.textContent = "You win the game!";
        gameOver = true;
    } else if (computerScoreNumber === 5) {
        message.textContent = "Computer wins. You lose the game."
        gameOver = true;
    }

    if (gameOver) {
        weaponsContainer.removeChild(rock);
        weaponsContainer.removeChild(paper);
        weaponsContainer.removeChild(scissors);
        startButton.textContent = 'New Game';
        body.appendChild(startButton);
        humanScoreNumber = 0;
        computerScoreNumber = 0;
    }
}

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
function compareWeapons(playerSelection, computerSelection) {
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