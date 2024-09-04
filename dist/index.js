"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function playTheChoice(choice) {
    const choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = '';
    if (choice === computerChoice) {
        result = "Its a tie!";
    }
    else if (choice === "rock" && computerChoice === "paper") {
        result = "Computer got paper. You lost!";
    }
    else if (choice === "rock" && computerChoice === "scissors") {
        result = "Computer got scissors. You won!";
    }
    else if (choice === "paper" && computerChoice === "scissors") {
        result = "Computer got scissors. You lost!";
    }
    else if (choice === "paper" && computerChoice === "rock") {
        result = "Computer got rock. You won!";
    }
    else if (choice === "scissors" && computerChoice === "rock") {
        result = "Computer got rock. You lost!";
    }
    else if (choice === "scissors" && computerChoice === "paper") {
        result = "Computer got paper. You won!";
    }
    ;
    let resultDiv = document.getElementById("result");
    resultDiv.textContent = result;
}
document.getElementById("rock").addEventListener('click', () => playTheChoice("rock"));
document.getElementById("paper").addEventListener('click', () => playTheChoice("paper"));
document.getElementById("scissors").addEventListener('click', () => playTheChoice("scissors"));
//# sourceMappingURL=index.js.map