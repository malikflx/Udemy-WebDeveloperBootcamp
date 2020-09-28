let colors = [
  'rgb(255, 0, 0)',
  'rgb(255, 255, 0)',
  'rgb(0, 255, 0)',
  'rgb(0, 255, 255)',
  'rgb(0, 0, 255)',
  'rgb(255, 0, 255)'
]

let squares = document.querySelectorAll('.square');

let pickedColor = colors[3];
let colorDisplay = document.getElementById('colorDisplay');

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
      alert('correct!');
    } else {
      alert('wrong');
    }
  });
}