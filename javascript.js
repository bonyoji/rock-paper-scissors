// Rock Paper Scissors 

function getComputerChoice() {
    // Randomly choose an option between 'Rock', 'Paper, or 'Scissors'
    let randomNum = Math.floor(Math.random()*3);
    if (randomNum === 1) {
        return `rock`;
    } else if (randomNum === 2) {
        return `paper`;
    } else {
        return `scissors`;
    }
}

function getPlayerChoice() {
    // Get player choice
    let userChoice = prompt(`'Rock, Paper, or Scissors' ?`).toLowerCase();
    return userChoice;
}

function playRound(playerSelection, computerSelection) {
    // Game is a tie, play again
    if (playerSelection === computerSelection){
        return playRound(getPlayerChoice(), getComputerChoice());
    }

    // Compare results
    else if (playerSelection === `rock`){
        if (computerSelection === `paper`) {
            return 'You Lose! Paper beats Rock!';
        } else {
            return 'You Win! Rock beats Scissors!';
        }
    } else if (playerSelection === `paper`) {
        if (computerSelection === `scissors`) {
            return 'You Lose! Scissors beat Paper!';
        } else {
            return 'You Win! Paper beats Rock!';
        }
    } else if (playerSelection === `scissors`) {
        if (computerSelection === `rock`) {
            return 'You Lose! Rock beats Scissors!';
        } else {
            return 'You Win! Scissors beat Paper!';
        }
    }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));