

// const getUserChoice = (userInput) => {
//     if (
//         userInput === "rock" ||
//         userInput === "paper" ||
//         userInput === "scissors" ||
//         userInput === "bomb"
//     ) {
//         return userInput;
//     } else {
//         console.log("Error!");
//     }
// };

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    // switch (randomNumber) {
    //     case 0:
    //         return "rock";
    //         break;
    //     case 1:
    //         return "paper";
    //         break;
    //     case 2:
    //         return "scissors";
    //         break;
    // }

    const computerChoices = {
        0: "rock",
        1: "paper",
        2: "scissors",
    }

    return computerChoices[randomNumber]

};

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "The game is a tie!";
    } else if (userChoice === "rock") {
        if (computerChoice === "paper") {
            return "You have lost!";
        } else {
            return "You have won!";
        }
    } else if (userChoice === "paper") {
        if (computerChoice === "rock") {
            return "You have won!";
        } else {
            return "You have Lost!";
        }
    } else if (userChoice === "scissors") {
        if (computerChoice === "paper") {
            return "You have won!";
        } else {
            ("You have lost!");
        }
    } else if (userChoice === "bomb") {
        return "YOU HAVE KILLIN IT!"
    }
};

const playGame = (userChoice) => {
    const computerChoice = getComputerChoice();
    console.log(`You threw: ${userChoice}`);
    console.log(`The computer threw: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
};



window.addEventListener("load", () => {
    const selectElement = document.querySelector(".ice-cream")
    selectElement.addEventListener('change', (event) => {
        playGame(event.target.value);
    });
})
