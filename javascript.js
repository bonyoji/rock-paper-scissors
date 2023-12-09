// Rock Paper Scissors 

function getComputerChoice() {
    // Randomly choose an option between 'Rock', 'Paper, or 'Scissors'
    let randomNum = Math.floor(Math.random()*3);
    if (randomNum == 1) {
        return `rock`;
    } else if (randomNum == 2) {
        return `paper`;
    } else {
        return `scissors`;
    }
}
console.log(getComputerChoice());

function getPlayerChoice() {
    // Get player choice
    let userChoice = prompt(`'Rock, Paper, or Scissors' ?`).toLowerCase();
    return userChoice;
}

function playRound(playerSelection, computerSelection) {
    // Game is a tie, play again
    if (playerSelection === computerSelection){
        playAgain();
    }

    function playAgain() {
        playRound(getPlayerChoice(), getComputerChoice());
    }

    // Compare results
    if (playerSelection === `rock`){
        if (computerSelection === `paper`) {
            return 'You Lose! Paper beats Rock!';
        } else if (computerSelection === `scissors`) {
            return 'You Win! Rock beats Scissors!';
    }
}



const playerSelection = 'getPlayerChoice()';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));