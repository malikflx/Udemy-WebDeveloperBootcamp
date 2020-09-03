let button = document.querySelector('button');
let isTurquoise = false;

button.addEventListener('click', function(){
  if (isTurquoise) {
    document.body.style.background = "white";
  } else {
    document.body.style.background = 'turquoise';
  }
  isTurquoise = !isTurquoise;
});