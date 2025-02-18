function startGame() {
    alert("Welcome to the Hidden Number Game!");

    // Select difficulty level
    let difficulty = prompt("Choose a difficulty level:\n1-Easy \n2-Medium \n3-Hard").toLowerCase();

    let maxAttempts, maxNumber;

    switch (difficulty) {
        case "1":
            maxAttempts = 10;
            maxNumber = 100;
            break;
        case "2":
            maxAttempts = 7;
            maxNumber = 50;
            break;
        case "3":
            maxAttempts = 5;
            maxNumber = 20;
            break;
        default:
            alert("Invalid level! 'Easy' mode will be used by default.");
            maxAttempts = 10;
            maxNumber = 100;
    }

    let randomNumber = Math.floor(Math.random() * maxNumber) + 1;
    let attempts = 0;
    let guessedCorrectly = false;

    while (attempts < maxAttempts) {
        let userGuess = prompt(`Guess a number between 1 and ${maxNumber} (${maxAttempts - attempts} attempts left)`);

        
        if (userGuess === null) {
            alert("Game over!");
            return;
        } else {
            userGuess = parseInt(userGuess);
            if (isNaN(userGuess) || userGuess < 1 || userGuess > maxNumber) {
                alert("Please enter a valid number.");
                continue;
                //continue here ensures that the user is given another chance to enter a number
                //without incrementing the attempts.
            }

            attempts++;

            if (userGuess === randomNumber) {
                alert(`Congratulations! You found the number ${randomNumber} in ${attempts} attempts.`);
                guessedCorrectly = true;
                break;
            } else if (userGuess < randomNumber) {
                alert("Too low! Try again.");
            } else {
                alert("Too high! Try again.");
            }
        }
    }

    if (!guessedCorrectly) {
        alert(`Game over! The number was ${randomNumber}.`);
    }

    // Ask if the user wants to play again
    if (confirm("Do you want to play again?")) {
        startGame();
    }
}
