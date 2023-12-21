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

function getPlayerChoice(choice) {
    return choice.toLowerCase();
}

const buttons = document.querySelectorAll('button');
const scorePlayer = document.querySelector('#my_score');
const scoreCPU = document.querySelector('#cpu_score');
const gameResult = document.querySelector('#game_result');
const matchResult = document.querySelector('#match_result');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(getPlayerChoice(button.innerHTML), getComputerChoice());
    });
});

function playRound(playerSelection, computerSelection) {
    // Game is a tie, play again
    if (playerSelection === computerSelection){
        matchResult.textContent = 'Tie! Re-match!';
    }

    // Compare results
    else if (playerSelection === `rock`){
        if (computerSelection === `paper`) {
            computerScore++;
            matchResult.textContent = 'You Lose! Paper beats Rock!';
            scorePlayer.textContent = 'Player Score: ' + playerScore;
            scoreCPU.textContent = 'CPU Score: ' + computerScore;
        } else {
            playerScore++;
            matchResult.textContent = 'You Win! Rock beats Scissors!';
            scorePlayer.textContent = 'Player Score: ' + playerScore;
            scoreCPU.textContent = 'CPU Score: ' + computerScore;
        }
    } else if (playerSelection === `paper`) {
        if (computerSelection === `scissors`) {
            computerScore++;
            matchResult.textContent = 'You Lose! Scissors beat Paper!';
            scorePlayer.textContent = 'Player Score: ' + playerScore;
            scoreCPU.textContent = 'CPU Score: ' + computerScore;
        } else {
            playerScore++;
            matchResult.textContent = 'You Win! Paper beats Rock!';
            scorePlayer.textContent = 'Player Score: ' + playerScore;
            scoreCPU.textContent = 'CPU Score: ' + computerScore;
        }
    } else if (playerSelection === `scissors`) {
        if (computerSelection === `rock`) {
            computerScore++;
            matchResult.textContent = 'You Lose! Rock beats Scissors!';
            scorePlayer.textContent = 'Player Score: ' + playerScore;
            scoreCPU.textContent = 'CPU Score: ' + computerScore;
        } else {
            playerScore++;
            matchResult.textContent = 'You Win! Scissors beat Paper!';
            scorePlayer.textContent = 'Player Score: ' + playerScore;
            scoreCPU.textContent = 'CPU Score: ' + computerScore;
        }
    }

    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore) {
            gameResult.textContent = 'Congratulations! You Won!';
        } else {
            gameResult.textContent = 'Too bad! You Lost!';
        }
    }
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;
