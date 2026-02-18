let options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function getHumanChoice() {
    let userInput = prompt("Choose rock, paper, or scissors (or type 'quit' to exit):");
    if (userInput === null || userInput.toLowerCase().trim() === "quit") {
        return null; // Allow the user to quit the game
    }
    userInput = userInput.toLowerCase().trim();
    while (!options.includes(userInput)) {
        userInput = prompt("Invalid choice. Choose rock, paper, or scissors (or type 'quit' to exit):");
        if (userInput === null || userInput.toLowerCase().trim() === "quit") {
            return null; // Allow quitting
        }
        userInput = userInput.toLowerCase().trim();
    }
    return userInput;
}

let humanscore = 0;
let computerscore = 0;
let roundCount = 0;

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
        console.log("Game ended.");
        return false; // Game ends early if user quits or cancels
    }
    let computerChoice = getComputerChoice();
    let result = determineWinner(humanChoice, computerChoice);
    roundCount++;
    console.log(`Round ${roundCount}: You chose: ${humanChoice}, Computer chose: ${computerChoice}`);
    console.log(result);
    console.log("Human Score: " + humanscore);
    console.log("Computer Score: " + computerscore);
    return true; // Round played successfully
}

function declareOverallWinner() {
    if (humanscore > computerscore) {
        console.log("Human wins the game!");
    } else if (computerscore > humanscore) {
        console.log("Computer wins the game!");
    } else {
        console.log("The game is a tie!");
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const gameContinued = playRound();
        if (!gameContinued) break; // Exit the game early if player quits
    }
    declareOverallWinner();
}

playGame();
