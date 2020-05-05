// create function 'getIsersChoice' with a 
// parameter of 'userInput'
let getUsersChoice = function (userInput) {
    userInput = userInput.toLowerCase();
    if (userInput == 'bear' || userInput == 'human' || userInput == 'gun') {
        return userInput;
    }
    else {
        console.log("Please Enter A Valid Option")
    }
}

let getComputerChoice = function () {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'bear';
    }
    else if (randomNumber === 1) {
        return 'human';
    }
    else {
        return 'gun';
    }
}

let determineWinner = function (userChoice, ComputerChoice) {

    if (userChoice === ComputerChoice) {
        return 'It is a Tie';
    }
    // if user selects 'human'
    if (userChoice == 'human') {
        //if computer selects 'bear'
        if (ComputerChoice == 'bear') {
            return 'You have been mauled by a bear';
        }
        //if computer selects 'gun'
        if (ComputerChoice == 'gun') {
            return 'You have disarmed a gun';
        }
    }
    // if user selects 'gun'
    if (userChoice == 'gun') {
        //if computer selects 'human'
        if (ComputerChoice == 'human') {
            return 'Your gun has been disarmed';
        }
        //if computer selects 'bear'
        if (ComputerChoice == 'bear') {
            return 'You have shot a bear';
        }
    }
    // if user selects 'bear'
    if (userChoice == 'bear') {
        //if computer selects 'human'
        if (ComputerChoice == 'human') {
            return 'You have mauled a human';
        }
        //if computer selects 'gun'
        if (ComputerChoice == 'gun') {
            return 'You have been shot by the gun';
        }
    }
}

let playGame = function () {
    var promptUserChoice = prompt(" Please choose bear , human or gun ");
    var userChoice = getUsersChoice(promptUserChoice);
    var ComputerChoice = getComputerChoice();
    console.log(`userChoice : ${userChoice}`);
    console.log(`ComputerChoice : ${ComputerChoice}`);
    console.log(determineWinner(userChoice, ComputerChoice));

}

playGame();
