let options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}
function getHumanChoice() {
    let userInput= prompt( "choose rock, paper or scissors");
    userInput = userInput.toLowerCase();
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
    } else {
       computerscore;
    }
}
function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    let result = determineWinner(humanChoice, computerChoice);
    console.log("Human Score: " + humanscore);
    console.log("Computer Score: " + computerscore);
}

 for (let i = 0; i < 5; i++) {
    playRound();
}
    if (humanscore > computerscore) {
    console.log("Human wins the game!");
} else if (computerscore > humanscore) {
    console.log("Computer wins the game!");
} else {
    console.log("The game is a tie!");
}