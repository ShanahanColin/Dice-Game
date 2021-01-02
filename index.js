


function rollDice(){
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
}
