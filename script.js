let options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}


const buttonsDiv = document.querySelector("#buttons");

const rock= document.createElement("button");

rock.textContent = "Rock";

buttonsDiv.appendChild(rock);

const paper= document.createElement("button");

paper.textContent = "Paper";
buttonsDiv.appendChild(paper);
const scissors= document.createElement("button");

scissors.textContent = "Scissors";
buttonsDiv.appendChild(scissors);

const result= document.querySelector("#results");

rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click",  playRound);



function getHumanChoice(e) {
    if (e.target === rock) {
        return "rock";
    } else if (e.target === paper) {
        return "paper";
    } else if (e.target === scissors) {
        return "scissors";
    }
    
}

let humanscore = 0;
let computerscore = 0;
let roundCount = 0;



function playRound(e) {
    let humanChoice = getHumanChoice(e);
    let computerChoice = getComputerChoice();

     determineWinner(humanChoice, computerChoice);

      roundCount++;
      result.textContent = `Round ${roundCount}:  (You: ${humanscore} vs Computer: ${computerscore})`;
   
      if (roundCount === 5) {
        declareOverallWinner();
        humanscore = 0;
        computerscore = 0;
        roundCount = 0;
    }
}

function determineWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanscore++;
        result.textContent = "You win this round!";
    } else {
        computerscore++;
        result.textContent = "Computer wins this round!";
    }
}

function declareOverallWinner() {
    if (humanscore > computerscore) {
        console.log("Human wins the game!");
    } else if (computerscore > humanscore) {
       result.textContent = "Computer wins the game!";
    } else {
       result.textContent = "The game is a tie!";
    }
}




