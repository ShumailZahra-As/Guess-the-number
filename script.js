let secretNumber; //This variable will store the randomly generated number that the player needs to guess.
let attempts = 0; // This keeps track of how many times the player has guessed

function startGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1; //This generates a random number between 1 and 100 (inclusive). Math.random() gives a number between 0 and 1, so multiplying by 100 and applying Math.floor() rounds it down to an integer between 0 and 99. Adding 1 ensures the number is between 1 and 100.
    attempts = 0; // Resets the attempt count to zero.

    document.getElementById("message").textContent = ''; //Clears the message displayed on the page when the game starts.
    document.getElementById("attempts").textContent = ''; //Clears the attempt count on the page when the game starts.
    document.getElementById("reset").style.display = 'none'; //Hides the "Play Again" button when the game starts.
}

function checkGuess() {
    const userGuess = parseInt(document.getElementById("guess").value);
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        document.getElementById("message").textContent = 'Please enter a number between 1 and 100.';
        return;
    }
    
    attempts++;
    if (userGuess === secretNumber) {
        document.getElementById("message").textContent = 'Congratulations! You guessed it right!';
        document.getElementById("reset").style.display = 'block';
    } else if (userGuess < secretNumber) {
        document.getElementById("message").textContent = 'Too low! Try again.';
    } else {
        document.getElementById("message").textContent = 'Too high! Try again.';
    }
    
    document.getElementById("attempts").textContent = `Attempts: ${attempts}`;
}
// const userGuess = parseInt(document.getElementById("guess").value);: Retrieves the value entered by the user in the input field (id "guess"), and converts it to an integer using parseInt(). The user input is expected to be a number.
// if (isNaN(userGuess) || userGuess < 1 || userGuess > 100): This checks if the user's input is not a number (isNaN(userGuess)), or if it's outside the valid range (1–100). If any of these conditions are true, an error message is displayed.
// attempts++;: Increments the number of attempts by 1 after each guess.
// if (userGuess === secretNumber): Checks if the user’s guess matches the secret number. If it does, a congratulatory message is shown, and the "Play Again" button becomes visible.
// else if (userGuess < secretNumber): If the guess is lower than the secret number, it shows a message saying the guess is too low.
// else: If the guess is higher than the secret number, it shows a message saying the guess is too high.
// document.getElementById("attempts").textContent = Attempts: ${attempts};: Updates the attempt counter on the page after each guess.
function resetGame() {
    startGame();
    document.getElementById("guess").value = '';
}
// startGame();: Calls the startGame() function to reset the game by generating a new random number and resetting the attempts and messages.
// document.getElementById("guess").value = '';: Clears the value entered in the input field so the user can enter a new guess.
startGame();  // Initialize the game when the page loads
//This line automatically starts the game when the page is loaded, initializing the secret number, resetting the attempts, and clearing any previous messages.


// Summary of the Flow:
// When the page loads, the game is initialized with a random secret number.
// The user guesses a number by entering it in the input box and clicking the "Submit Guess" button.
// The app checks if the guess is valid and provides feedback (too low, too high, or correct).
// The number of attempts is tracked and displayed.
// If the user guesses correctly, they can click "Play Again" to restart the game with a new number.