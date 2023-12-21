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

// function getPlayerChoice() {
//     // Get player choice
//     let userChoice = prompt(`'Rock, Paper, or Scissors' ?`).toLowerCase();
//     return userChoice;
// }

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log('Clicked');
        console.log(button.innerHTML.toLowerCase());
    });
});

function playRound(playerSelection, computerSelection) {
    // Game is a tie, play again
    if (playerSelection === computerSelection){
        console.log('Tie! Re-match!');
        return playRound('rock', getComputerChoice());
    }

    // Compare results
    else if (playerSelection === `rock`){
        if (computerSelection === `paper`) {
            computerScore++;
            return 'You Lose! Paper beats Rock!';
        } else {
            playerScore++;
            return 'You Win! Rock beats Scissors!';
        }
    } else if (playerSelection === `paper`) {
        if (computerSelection === `scissors`) {
            computerScore++;
            return 'You Lose! Scissors beat Paper!';
        } else {
            playerScore++;
            return 'You Win! Paper beats Rock!';
        }
    } else if (playerSelection === `scissors`) {
        if (computerSelection === `rock`) {
            computerScore++;
            return 'You Lose! Rock beats Scissors!';
        } else {
            playerScore++;
            return 'You Win! Scissors beat Paper!';
        }
    }
}

// function game() {
//     // Repeat 5 times
//     for (let i = 0; i < 5; i++ ) {
//         console.log(playRound(getPlayerChoice(), getComputerChoice()));
//     }
//     if (playerScore > computerScore) {
//         console.log('Congratulations! You Won!');
//     } else {
//         console.log('Too bad! You Lost!');
//     }
// }

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

// playRound();

//game();
