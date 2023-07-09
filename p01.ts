const secretNumber = Math.floor(Math.random() * 100) + 1;
let guesses = 0;

while (true) {
  const input = prompt("Guess a number between 1 and 100:");

  if (input === null || input === "") {
    console.log("Invalid input. Please enter a valid number.");
    continue;
  }

  const guess = parseInt(input);

  if (isNaN(guess)) {
    console.log("Invalid input. Please enter a valid number.");
    continue;
  }

  guesses++;

  if (guess === secretNumber) {
    console.log(`Congratulations! You guessed the number correctly in ${guesses} attempts.`);
    break;
  } else if (guess < secretNumber) {
    console.log("Too low! Try again.");
  } else {
    console.log("Too high! Try again.");
  }
}
