const getComputerChoice = () => {
    let choice = Math.floor(Math.random()*3);
    if(choice == 0){
        return "rock";
    }
    else if(choice == 1){
        return "paper";
    }
    else{
        return "scissors"
    }
};
const getHumanChoice = () => { return prompt("Rock, Paper, Scissors").toLowerCase();};
let computerScore = 0;
let humanScore = 0;
const playRound = (humanChoice, computerChoice) => {
    if(humanChoice===computerChoice){
        console.log("Draw!");
    }
    else if((humanChoice==="rock"&&computerChoice==="paper")||(humanChoice==="paper"&&computerChoice==="scissors")||(humanChoice==="scissors"&&computerChoice==="rock")){
        console.log("You lose");
        computerScore++;

    }
    else{
        console.log("You win");
        humanScore++;
    }
};

const playGame = () => {
    for(let i=0; i<5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
};

playGame();