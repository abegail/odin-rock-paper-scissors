const body = document.querySelector('body');
const message = document.querySelector('#message');
const weaponChoice = document.querySelector('#weaponChoice');
const choiceContainer = document.querySelector('#choiceContainer');
const score = document.querySelector('#score');
const humanChoice = document.createElement('p');
const computerChoice = document.createElement('p');
const humanScore = document.createElement('p');
const computerScore = document.createElement('p');

const rock = document.createElement('button');
rock.textContent = "Rock";
const paper = document.createElement('button');
paper.textContent = "Paper";
const scissors = document.createElement('button');
scissors.textContent = "Scissors";

// Translate button clicks
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

const startButton = document.querySelector('#newGame');
startButton.addEventListener('click', startGame);

function startGame() {
    // Transition to game page
    message.textContent = "Pick your weapon:"
    body.removeChild(startButton);

    //Create choice summary
    humanChoice.textContent = 'Your choice: ';
    computerChoice.textContent = 'Computer\'s choice: ';
    weaponChoice.appendChild(humanChoice);
    weaponChoice.appendChild(computerChoice);

    //Create score tally
    humanScore.textContent = 'Your score: ';
    computerScore.textContent = 'Computer score: ';
    score.appendChild(humanScore);
    score.appendChild(computerScore);

    // Create weapon buttons
    choiceContainer.appendChild(rock);
    choiceContainer.appendChild(paper);
    choiceContainer.appendChild(scissors);
}

function playRound(playerSelection) {
    computerSelection = getComputerChoice();
    let result = message.textContent = compareWeapons(playerSelection, computerSelection);
    humanChoice.textContent = `Your choice: ${playerSelection}`;
    computerChoice.textContent = `Computer\'s choice: ${computerSelection}`;

    // Increment and update scores
    if (result.includes("win")) humanScoreNumber += 1;
    else if (result.includes("lose")) computerScoreNumber += 1;
    humanScore.textContent = `Your score: ${humanScoreNumber}`;
    computerScore.textContent = `Computer score: ${computerScoreNumber}`;

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
        weaponChoice.removeChild(humanChoice);
        weaponChoice.removeChild(computerChoice);
        choiceContainer.removeChild(rock);
        choiceContainer.removeChild(paper);
        choiceContainer.removeChild(scissors);
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