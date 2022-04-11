// Generate a random number from 1 to 6
const firstRandomNumber = Math.floor(Math.random() *6) +1;

// images/dice1.png up to images/dice6.png
const firstDiceImage = 'assets/dice' +  firstRandomNumber + '.png';

document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage);


// Generate a random number from 1 to 6
const secondRandomNumber = Math.floor(Math.random() *6) +1;

// images/dice1.png up to images/dice6.png
const secondDiceImage = 'assets/dice' +  secondRandomNumber + '.png';
 
document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage);

// generate the logic for the winner
if (firstRandomNumber > secondRandomNumber) {
    document.querySelector('h1').innerHTML = 'The Winner is User 1!';
} else if (firstRandomNumber < secondRandomNumber) {
    document.querySelector('h1').innerHTML = 'The Winner is User 2!';
} else {
    document.querySelector('h1').innerHTML = "It's a draw!";
}