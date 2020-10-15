let colors = generateRandomColors(6);
let squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
let colorDisplay = document.getElementById('colorDisplay');
let messageDisplay = document.querySelector('#message');

colorDisplay.textContent = pickedColor;

for(let i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  //add click event listeners for squares
  squares[i].addEventListener('click', function() {
    //get color of clicked square
    let clickedColor = this.style.backgroundColor;
    //compare color to picked color
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = 'Correct!';
      changeColors(clickedColor);
    } else {
      this.style.backgroundColor = "#3A3A3A";
      messageDisplay.textContent = 'Try Again';
    }
  });
}

function changeColors(color) {
  //loop through all squares
  for(let i = 0; i < squares.length; i++) {
  //change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
 let random = Math.floor(Math.random() * colors.length);
 return colors[random];
};

function generateRandomColors(num){
  //make an array
  let arr = []
  //repeat num times
  for(let i = 0; i < num; i++) {
    //get random color and push into arr
  }
  //return that array
  return arr;
}