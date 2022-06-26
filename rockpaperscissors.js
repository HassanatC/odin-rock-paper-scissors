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
        return("Invalid input, sir. We prefer doing things our own way around here.")
    }


}

// fourth function to "play" the game ( 5 rounds )

function playGame() {

    for (i = 0; i < 5; i++) {
        computerChoice();
        playerChoice();
        console.log(compareChoice(playerGuess, cpuGuess));
    }
    
    if (playerScore > cpuScore) {
        console.log("Player wins the game.")
    } else if (cpuScore > playerScore) {
        console.log("CPU wins the game.")
    } else {
        console.log("Tie.")
    }


}

playGame();