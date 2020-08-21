let luckyNumber = 7;

let userGuess = Number(prompt('Guess the lucky number!'));

if (userGuess === luckyNumber) {
  alert('We have a winner! You\'ve guessed the correct number!');
} else if (userGuess < luckyNumber) {
  alert('Your guess is too low!');
} else if (userGuess > luckyNumber) {
  alert('Your guess is too high!');
} else {
  alert('That isn\'t a number!');
}