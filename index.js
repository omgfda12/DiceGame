var one= prompt("Enter Player 1 Name");
var two= prompt("Enter Player 2 Name");
document.querySelector("h2.Pone").innerHTML=one;
document.querySelector("h2.Ptwo").innerHTML=two;
var randomNo1=Math.floor(Math.random()*6)+1;
document.querySelectorAll("img")[0].setAttribute("src","images/dice"+randomNo1+".png");

var randomNo2=Math.floor(Math.random()*6)+1;
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+randomNo2+".png");

if(randomNo1==randomNo2)
{
document.querySelector("h1.head").innerHTML="Ohh It's Tie";
}
if(randomNo1>randomNo2)
{
document.querySelector("h1.head").innerHTML=one+" Wins";
}
if(randomNo1<randomNo2)
{
document.querySelector("h1.head").innerHTML=two+" Wins";
}