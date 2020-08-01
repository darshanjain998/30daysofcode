function play()
{
var randomNumber1=Math.floor(Math.random()*6+1);
document.getElementsByClassName("img1")[0].setAttribute("src","images"+"/dice"+randomNumber1+".png");
var randomNumber2=Math.floor(Math.random()*6+1);
document.getElementsByClassName("img2")[0].setAttribute("src","images"+"/dice"+randomNumber2+".png");
document.getElementById("try").textContent="try again!";

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").textContent="player1 wins!";
}
else if(randomNumber2>randomNumber1)
{
    document.getElementsByTagName("h1")[0].textContent="Player2 wins!";
}
else {
    document.getElementsByTagName("h1")[0].textContent="Draw!";

}
}

