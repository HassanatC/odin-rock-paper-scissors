let cpuScore = 0;
let playerScore = 0;

let cpuChoice;
let cpuGuess;

let playerGuess;

// First function is used to randomly generate the CPU's choice.

function computerChoice() {

    // this line makes a random number 1-3. Each number is intended to later represent variables 'Rock, Paper or Scissors' in string form 

    cpuChoice = Math.floor((Math.random() * 3) + 1);
    
    // using the cpuChoice to set rock paper or scissors

    switch (cpuChoice) {
        case 1:
            cpuGuess = "rock";
            break;
        case 2:
            cpuGuess = "paper";
            break;
        case 3:
            cpuGuess = "scissors";
            break;
        default:
            console.log("There has been an unexpected error.");

    }

}

// Second function is to guess player choice

function playerChoice() {
    console.log("Player Score: " + playerScore);
    console.log("CPU Score: " + cpuScore);

    playerGuess = prompt("Enter your choice: Rock, Paper or Scissors!");
    playerGuess = playerGuess.toLowerCase();

    console.log(playerGuess);

}

// Third function compares player choice versus cpu choice

function compareChoice(playerGuess, cpuGuess) {
    if (playerGuess == "rock" && cpuGuess == "rock") {
        
        return("Tie - Both player and CPU chose Rock.")

    } else if (playerGuess == "rock" && cpuGuess == "paper") {
        cpuScore++;
        return("Lose - Player chose Rock, CPU chose Paper.")

    } else if (playerGuess == "rock" && cpuGuess == "scissors") {
        playerScore++;
        return("Win - Player chose Rock, CPU chose Scissors.")
        

    } else if (playerGuess == "paper" && cpuGuess == "rock") {
        playerScore++;
        return("Win - Player chose Paper, CPU chose Rock.")


    } else if (playerGuess == "paper" && cpuGuess == "paper") {
        return("Tie - Player and CPU chose Paper.")

    } else if (playerGuess == "paper" && cpuGuess == "scissors") {
        cpuScore++;
        return("Lose - Player chose Paper, CPU chose Scissors.")
        
        
    } else if (playerGuess == "scissors" && cpuGuess == "rock") {
        cpuScore++;
        return("Lose - Player chose Scissors, CPU chose Rock.")
        

    } else if (playerGuess == "scissors" && cpuGuess == "paper") {
        playerScore++;
        return("Win - Player chose Scissors, CPU chose Paper.")
        

    } else if (playerGuess == "scissors" && cpuGuess == "scissors") {
        return("Tie - Player and CPU chose Scissors.")
    } else {
        return("Invalid input.")
    }


}

// to refer to the result div, so that the result can be appended onto page.


const resultDiv = document.getElementById('result');

const rockButton = document.getElementById('rock');

const playerScoreDiv = document.getElementById('playerScore');

const cpuScoreDiv = document.getElementById('cpuScore');

rockButton.addEventListener('click', selectRock);


function selectRock() {

    computerChoice();

    playerGuess = 'rock';
    resultDiv.textContent = compareChoice(playerGuess, cpuGuess);
    playerScoreDiv.textContent = ("Player Score: " + playerScore);
    cpuScoreDiv.textContent = ("CPU Score: " + cpuScore);

    finalGameResult();

}




const paperButton = document.getElementById('paper');
paperButton.addEventListener('click', selectPaper);



function selectPaper() {

    computerChoice();

    playerGuess = 'paper';
    resultDiv.textContent = compareChoice(playerGuess, cpuGuess);
    playerScoreDiv.textContent = ("Player Score: " + playerScore);
    cpuScoreDiv.textContent = ("CPU Score: " + cpuScore);

    finalGameResult();


}




const scissorsButton = document.getElementById('scissors');
scissorsButton.addEventListener('click', selectScissors);




function selectScissors() {

    computerChoice();

    playerGuess = 'scissors';
    resultDiv.textContent = compareChoice(playerGuess, cpuGuess);
    playerScoreDiv.textContent = ("Player Score: " + playerScore);
    cpuScoreDiv.textContent = ("CPU Score: " + cpuScore);

    finalGameResult();
}




// this will be the code to display the result.





const finalresultDiv = document.getElementById('finalResult');
const ehrmantrautPic = document.getElementById('ehrmantraut');

function finalGameResult() {

    if (playerScore === 5) {

        finalresultDiv.style.visibility = 'visible';
        resetButton.style.visibility = 'visible';
        rockButton.removeEventListener('click', selectRock);
        paperButton.removeEventListener('click', selectPaper);
        scissorsButton.removeEventListener('click', selectScissors);
        document.getElementById('finalResult').textContent = ("The player has won!");
    
    } else if (cpuScore === 5) {

        finalresultDiv.style.visibility = 'visible';
        resetButton.style.visibility = 'visible';
        rockButton.removeEventListener('click', selectRock);
        paperButton.removeEventListener('click', selectPaper);
        scissorsButton.removeEventListener('click', selectScissors);

        document.getElementById('finalResult').textContent = ("You are done.");

        ehrmantrautPic.style.visibility = 'visible';
    }



}


const resetDiv = document.getElementById('reset');
const resetButton = document.getElementById('reset');

resetButton.setAttribute('id', 'playAgain');

resetButton.textContent = 'Reset';

resetButton.addEventListener('click', resetGame);




function resetGame() {

    playerScore = 0;
    cpuScore = 0;

    rockButton.addEventListener('click', selectRock);
    paperButton.addEventListener('click', selectPaper);
    scissorsButton.addEventListener('click', selectScissors);
    
    resetButton.addEventListener('click', resetGame);


    document.getElementById('resetButton');
    document.getElementById('playerScore').textContent = ("Player Score: " + playerScore);
    document.getElementById('cpuScore').textContent = ("CPU Score: " + cpuScore);
    document.getElementById('result').textContent = ("Game has been reset! Play again.");

    resetDiv.style.visibility = 'hidden';

    ehrmantrautPic.style.visibility = 'hidden';
    finalresultDiv.style.visibility = 'hidden';


}



