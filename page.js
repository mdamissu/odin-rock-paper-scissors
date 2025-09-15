const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const numRound = document.getElementById("rounds");

const submitBtn = document.getElementById("subm");

const hiddenSection = document.querySelector(".hidden");
const groupSection = document.querySelector(".group");

const nameEl = document.querySelector(".humanName");
const humanScoreEl = document.querySelector(".humanScore");
const botScoreEl = document.querySelector(".botScore");

let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
let totalRounds = 0;

const choices = document.getElementsByClassName("choice");

const getComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
};

const playRound = (humanChoice, computerChoice) => {
    alert(`Human: ${humanChoice}, Bot: ${computerChoice}`);

    if(humanChoice === computerChoice){
        alert("Draw!");
    } else if(
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")
    ){
        alert("You lose this round!");
        computerScore++;
        botScoreEl.textContent = computerScore;
    } else {
        alert("You win this round!");
        humanScore++;
        humanScoreEl.textContent = humanScore;
    }

    roundsPlayed++;
    if(roundsPlayed === totalRounds){
        if(humanScore > computerScore){
            alert(`Game over! You win ${humanScore} - ${computerScore}`);
        } else if(humanScore < computerScore){
            alert(`Game over! You lose ${humanScore} - ${computerScore}`);
        } else {
            alert(`Game over! It's a draw ${humanScore} - ${computerScore}`);
        }
    }
};

for(let i = 0; i < choices.length; i++){
    choices[i].addEventListener("click", (e) => {
        if(roundsPlayed >= totalRounds){
            alert("Game over! Refresh to play again.");
            return;
        }
        const humanChoice = e.target.value;
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
}

submitBtn.addEventListener("click", () => {
    totalRounds = Number(numRound.value);
    if(isNaN(totalRounds) || totalRounds <= 0){
        alert("Please fill a natural number!");
        return;
    }

    const humanName = firstName.value + " " + lastName.value + ":";
    nameEl.textContent = humanName;

    hiddenSection.style.display = "block";
    groupSection.style.display = "none";

    humanScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    humanScoreEl.textContent = humanScore;
    botScoreEl.textContent = computerScore;
});
