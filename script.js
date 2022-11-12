console.log("hi");

const getUserChoice = (userInput) => {
    if (
        userInput === "rock" ||
        userInput === "paper" ||
        userInput === "scissors" ||
        userInput === "bomb"
    ) {
        return userInput;
    } else {
        console.log("Error!");
    }
};

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
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

const playGame = (choice) => {
    const userChoice = getUserChoice(choice);
    const computerChoice = getComputerChoice();
    console.log(`You threw: ${userChoice}`);
    console.log(`The computer threw: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
};
playGame("rock");
