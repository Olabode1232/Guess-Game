'use strict'
// Math.random gives you a random decimal number while
// Math.trunc makes it a whole number...N.B we use Math.trunc to get a whole number
let secretNumber = Math.trunc( Math.random() * 20 + 1 );

// before reducing a number in your dom you have to declear a variale that would hold 
// the value and then transfer it to the dom
let score = 20;
score--;
 let highscore = 0;


document.querySelector('.button').addEventListener('click' , function () {
let input = Number( document.querySelector('.input').value );
console.log(input, typeof input);
// when there is no guess
if (!input) {
  document.querySelector('.start').innerHTML = 'No number';
} 
// when input is equal to the secretNumber
else if (input === secretNumber){
    document.querySelector('.start').innerHTML = 'Correct number';
    document.querySelector('.start').style.color = "green";
    document.querySelector('.start').innerHTML = 'Wow, You won!!!';
    document.querySelector('.start').style.color = 'whitesmoke';
    document.querySelector('.guess').innerHTML = 'Congratulations <br> You Win!';
    document.querySelector('body').style.backgroundColor = 'green';

    if (score > highscore) {
       highscore = score;
       document.querySelector('.highScore').innerHTML = highscore
    }

    
let number = document.querySelector('.number');
number.innerHTML = secretNumber
} 
// when input is greater than the secretNumber
else if (input > secretNumber){
    document.querySelector('.start').innerHTML = 'Too high';
    document.querySelector('.start').style.color = "red";
    score--;
    document.querySelector('.twenty').innerHTML = score;
    if (score < 1) {
        document.querySelector('.start').innerHTML = 'Game Over';
        document.querySelector('.start').style.color = 'whitesmoke';
        document.querySelector('.guess').innerHTML = 'You lost the game <br> Game over!';
        document.querySelector('body').style.backgroundColor = "red";
        document.querySelector('.twenty').innerHTML = 0;

    } 
} 
// when input is less than the secretNumber
else if (input < secretNumber){
    document.querySelector('.start').innerHTML = 'Too low';
    document.querySelector('.start').style.color = "red";
    score-- ;
    document.querySelector('.twenty').innerHTML = score;
    if (score < 1) {
        document.querySelector('.start').innerHTML = 'Game Over';
        document.querySelector('.start').style.color = 'whitesmoke';
        document.querySelector('.guess').innerHTML = 'You lost the game <br> Game over!';
        document.querySelector('body').style.backgroundColor = "red";
        document.querySelector('.twenty').innerHTML = 0;

    }   
}

});

document.querySelector('.Again').addEventListener('click', function () {
    document.querySelector('.start').innerHTML = 'Start guessing...';
    document.querySelector('.start').style.color = "whitesmoke";
    document.querySelector('.twenty').innerHTML = 20;
    document.querySelector('.guess').innerHTML = 'Guess My Number!';
    document.querySelector('body').style.backgroundColor = "  rgb(29, 25, 25)";
    document.querySelector('.input').value = "";
    secretNumber = Math.trunc( Math.random() * 20 + 1 );
})