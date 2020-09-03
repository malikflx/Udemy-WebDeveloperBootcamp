let p1Button = document.getElementById('p1');
let p2Button = document.getElementById('p2');
let resetButton = document.getElementById('reset');
let scoreInput = document.querySelector('input');
let winningScoreDisplay = document.querySelector('p span');
let p1Point = document.getElementById('p1Point');
let p2Point = document.getElementById('p2Point');
let gameOver = false;
let winningScore = 5;

let p1Score = 0;
let p2Score = 0;

p1Button.addEventListener('click', function(){
  if (!gameOver) {
    p1Score++;
    if(p1Score === winningScore) {
      gameOver = true;
      p1Point.classList.add('winner');
      p2Point.classList.add('loser');
    } 
    p1Point.textContent = p1Score;
  }
});

p2Button.addEventListener('click', function(){
  if(!gameOver){
    p2Score++;
    if(p2Score === winningScore) {
      gameOver = true;
      p2Point.classList.add('winner');
      p1Point.classList.add('loser');
    }
    p2Point.textContent = p2Score;
  }
});

resetButton.addEventListener('click', function(){
  p1Score = 0;
  p2Score = 0;
  p1Point.textContent = 0;
  p2Point.textContent = 0;
  p1Point.classList.remove('winner');
  p2Point.classList.remove('winner');
  p1Point.classList.remove('loser');
  p2Point.classList.remove('loser');
  gameOver = false;
});

function reset(){
  p1Score = 0;
  p2Score = 0;
  p1Point.textContent = 0;
  p2Point.textContent = 0;
  p1Point.classList.remove('winner');
  p2Point.classList.remove('winner');
  p1Point.classList.remove('loser');
  p2Point.classList.remove('loser');
  gameOver = false;
};

scoreInput.addEventListener('change', function(){
  winningScoreDisplay.textContent = scoreInput.value;
  winningScore = Number(scoreInput.value);
  reset();
});
