
// document.querySelector("p").innerText= "You will be propted with a question. You can answer with yes or no. You will recieve an extra point if correct";
function rollDice(){
document.querySelector("p").innerText= "";

// var player1Guess = prompt('PLAYER 1: Do you bet that you will win?') ;
// var player2Guess = prompt('PLAYER 2: Do you bet that you will win?');

var randomNumber1 = Math.floor(Math.random() * 6)+1;
var randomNumber2 = Math.floor(Math.random() * 6)+1;

document.querySelector("img.img1").setAttribute("src","images/dice"+ randomNumber1 +".png");
document.querySelector("img.img2").setAttribute("src","images/dice"+ randomNumber2 +".png");

var player1Wins = "Player 1 wins!!!";
var player2Wins = "Player 2 wins!!!";

if(randomNumber1 > randomNumber2){
  document.querySelector("h2").innerText ="Player 1 WINS!!!";
}else {
    document.querySelector("h2").innerText ="Player 2 WINS!!!";
}
if(randomNumber1 == randomNumber2){
  document.querySelector("h2").innerText ="Draw";
}

// if(randomNumber1 > randomNumber2){
//   document.querySelector("h4").innerText = "Player 1 Receives 1 Point";
// }else if (randomNumber1 < randomNumber2) {
//   document.querySelector("h4").innerText = "Player 2 Receives 1 Point";
// } else {
//   document.querySelector("h4").innerText = "No Points Received";
// }



// if (player1Guess = "no" && randomNumber1 > randomNumber2 ) {
// document.querySelector("h4").innerText = "Player 1 Receives 1 Point";}
//
// else if (player2Guess = "no" && randomNumber1 < randomNumber2 ) {
// document.querySelector("h4").innerText = "Player 2 Receives 1 Point";}
//
// else if (player1Guess = "yes" && randomNumber1 < randomNumber2 ) {
// document.querySelector("h4").innerText = "Player 2 Receives 1 Point";}
//
// else if (player2Guess = "yes" && randomNumber1 > randomNumber2 ) {
// document.querySelector("h4").innerText = "Player 1 Receives 1 Point";}
//
// else if (player1Guess = "no" && randomNumber1 < randomNumber2 ) {
// document.querySelector("h4").innerText = "Player 2 Receives 1 Point";}
//
// else if (player2Guess = "yes" && randomNumber1 < randomNumber2 ) {
// document.querySelector("h4").innerText = "Player 2 Receives 2 Point";}
// else if (player1Guess = "yes" && randomNumber1 > randomNumber2 ) {
// document.querySelector("h4").innerText = "Player 1 Receives 2 Point";}
//
// else if ( randomNumber1 == randomNumber2 ) {
// document.querySelector("h4").innerText = "No Points Received";}





// if (player1Guess = "yes" && player2Guess = "yes" && randomNumber1 > randomNumber2 ) {
// document.querySelector("h4").innerText = "Player 1 Receives 2 Points";}
//
// else if (player1Guess = "yes" && player2Guess = "yes" && randomNumber1 < randomNumber2 ) {
// document.querySelector("h4").innerText = "Player 2 Receives 2 Points";}
//
// else if (player1Guess = "no" && player2Guess = "no" && randomNumber1 > randomNumber2 ) {
// document.querySelector("h4").innerText = "Player 1 Receives 1 Point";}
//
// else if (player1Guess = "no" && player2Guess = "no" && randomNumber1 < randomNumber2 ) {
// document.querySelector("h4").innerText = "Player 2 Receives 1 Point";}
//
// else if (player1Guess = "yes" && player2Guess = "no" && randomNumber1 > randomNumber2 ) {
// document.querySelector("h4").innerText = "Player 1 Receives 2 Points";}
//
// else if (player1Guess = "yes" && player2Guess = "no" && randomNumber1 < randomNumber2 ) {
// document.querySelector("h4").innerText = "Player 2 Receives 1 Point1";}
//
// else if (player1Guess = "no" && player2Guess = "yes" && randomNumber1 > randomNumber2 ) {
// document.querySelector("h4").innerText = "Player 1 Receives 1 Point";}
//
// else {
// document.querySelector("h4").innerText = "Player 2 Receives 2 Points";}


}
