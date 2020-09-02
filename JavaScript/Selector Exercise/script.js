// 4 different ways to select the first <p> tag

let optionOne = document.querySelector('#first');
console.log(optionOne);

let optionTwo = document.getElementById('first');
console.log(optionTwo);

let optionThree = document.querySelector('p');
console.log(optionThree);

let optionFour = document.getElementsByClassName('special')[0];
console.log(optionFour);