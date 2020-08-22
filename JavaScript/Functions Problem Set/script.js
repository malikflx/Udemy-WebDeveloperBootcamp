console.log('Write a function isEven() which takes a single numeric argument and returns true if the number is even, and false otherwise.');

function isEven(num) {
  return num % 2 === 0;

  //   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
};

isEven(4);
isEven(27);

console.log('Write a function factorial() which takes a single numeric argument and returns the factorial of that number.');

function factorial(num) {
  //define a result variable
  var result = 1;
  //calculate factorial and store value in result
  for(var i = 1; i <= num; i++) {
    result *= i;
  }
  //return the result variable
  return result;
}

console.log('Write a function kebabToSnake() which takes a single kebab-cased string argument and returns the snake_cased version.');

function kebabToSnake(str) {
  //replace all '-' with "_"
  var newStr = str.replace(/-/g , "_");
  //return str
  return newStr;
}