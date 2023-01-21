var randomNumber1 = Math.floor(Math.random()*6)+1;
var randonImage = "dice"+randomNumber1+".png";
var randomImageSource = "images/"+randonImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randonImage = "dice"+randomNumber2+".png";
var randomImageSource = "images/"+randonImage;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player1 Wins";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player2 Wins";
}
else{
    document.querySelector("h1").innerHTML = "draw";

}