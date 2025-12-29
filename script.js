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

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

let result = determineWinner(humanChoice, computerChoice);
console.log("You chose: " + humanChoice);
console.log("Computer chose: " + computerChoice);
console.log(result);



 function determineWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}