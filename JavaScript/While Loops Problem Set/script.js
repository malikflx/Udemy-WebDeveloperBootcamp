let one = console.log('Print all numbers between -10 and 19');
let numberOne = -10;

while (numberOne <= 19) {
  console.log(numberOne);
  numberOne++;
}

let two = console.log('Print all even numbers between 10 and 40');
let numberTwo = 10;

//This works but does not check if number is actually even
while (numberTwo <= 40) {
  console.log(numberTwo);
  numberTwo+= 2;
}

let three = console.log('Print all odd numbers between 300 and 333');
let numberThree = 301;

while(numberThree <= 333) {
  console.log(numberThree);
  numberThree+= 2;
}

let four = console.log('Print all numbers divisible by 5 AND 3 between 5 and 50');
let numberFour = 5;

//Unlike what I did for numberTwo, this checks if a number is actually divisible by 5 and 3
while(numberFour <= 50) {
  if(numberFour % 5 === 0 && numberFour % 3 === 0) {
    console.log(numberFour);
  }
  numberFour++;
}

