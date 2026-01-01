let options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}
function getHumanChoice() {
    let userInput = prompt("choose rock, paper or scissors");
    if (userInput === null) {
        return null;
    }
    userInput = userInput.toLowerCase().trim();
    while (!options.includes(userInput)) {
        userInput = prompt("Invalid choice. Choose rock, paper or scissors");
        if (userInput === null) {
            return null;
        }
        userInput = userInput.toLowerCase().trim();
    }
    return userInput;
}
let humanscore = 0;
let computerscore = 0;

 function determineWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanscore++;
        return "You win this round!";
    } else {
       computerscore++;
       return "Computer wins this round!";
    }
}
function playRound() {
    let humanChoice = getHumanChoice();
    if (humanChoice === null) {
        console.log("Round skipped.");
        return;
    }
    let computerChoice = getComputerChoice();
    let result = determineWinner(humanChoice, computerChoice);
    console.log("You chose: " + humanChoice + ", Computer chose: " + computerChoice);
    console.log(result);
    console.log("Human Score: " + humanscore);
    console.log("Computer Score: " + computerscore);
}

 for (let i = 0; i < 5; i++) {
    playRound();
}
declareOverallWinner();
function declareOverallWinner() {
    if (humanscore > computerscore) {
        console.log("Human wins the game!");
    } else if (computerscore > humanscore) {
        console.log("Computer wins the game!");
    } else {
        console.log("The game is a tie!");
    }   
}