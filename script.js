let Runner = document.getElementById("Runner")
let BoxObst = document.getElementById("BoxObst")
let RedBull = document.getElementById("RedBull")
let BackGround = document.getElementById("BackGround")
let Cloud = document.getElementById("Clouds")
let point = 0
let boosted = 0
let startvalue = 250;
let leftstar = startvalue + "px"

var hitsound = document.getElementById("HitSound")
var BoostSound = document.getElementById("BoostSound")
document.getElementById("Runner").style.backgroundImage = "url(imgs/Standingsar.png)";
document.getElementById("Runner").style.left = (leftstar)
function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    
}


function moving(){
    startpoints()
    Obstacle()
    BackGround.classList.add("BackGroundMove")
    Cloud.classList.add("CloudMove")
    document.getElementById("Runner").style.backgroundImage = "url(imgs/runnergif/1.gif)";
    setTimeout(function(){ Runner.classList.add("BoxObst") }, 1000);

}

function boost(){
    
    if (boosted < 13){
    boosted++
    console.log(boosted)
    startvalue = startvalue + 120
    Runner.classList.add("Boost")
    document.getElementById("Runner").style.left = (startvalue + "px")
    setTimeout(function(){ Runner.classList.remove("Boost") }, 400);}
    else {
        console.log("relax speed demon!")
    }
}

function KnockBack(){
    
    if (boosted < 13){
    boosted++
    console.log(boosted)
    startvalue = startvalue + 120
    Runner.classList.add("Boost")
    document.getElementById("Runner").style.left = (startvalue + "px")
    setTimeout(function(){ Runner.classList.remove("Boost") }, 400);}
    else {
        console.log("relax speed demon!")
    }
}

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        var RunnerUp = parseInt(window.getComputedStyle(Runner).getPropertyValue("top"));
        
        if (RunnerUp  >= 460)
        document.getElementById("Runner").style.backgroundImage = "url(imgs/jumpgif/2.gif)";
        Runner.classList.add("jump") 
    setTimeout(function(){ Runner.classList.remove("jump") }, 1000);
        setTimeout(function(){ document.getElementById("Runner").style.backgroundImage = "url(imgs/runnergif/1.gif)"; }, 600);
    }
    else {
        console.log("allready jumping!")
    }
}

function jump(){
    
    Runner.classList.add("jump")
    setTimeout(function(){ Runner.classList.remove("jump") }, 600);

}


var CheckHit = setInterval(function(){
    var RunnerTop = parseInt(window.getComputedStyle(Runner).getPropertyValue("top"));
    var RunnerLeft = parseInt(window.getComputedStyle(Runner).getPropertyValue("left"));

    var BoxLeft = parseInt(window.getComputedStyle(BoxObst).getPropertyValue("left"));
    var RedBullLeft = parseInt(window.getComputedStyle(RedBull).getPropertyValue("left"));
    console.log(RunnerTop)


    if (RedBullLeft < startvalue+30 && RedBullLeft>startvalue && RunnerTop <=420)
    {
        
        BoostSound.play();
        startvalue = startvalue + 120
    Runner.classList.add("Boost")
    document.getElementById("Runner").style.left = (startvalue + "px")
    setTimeout(function(){ Runner.classList.remove("Boost") }, 420);
        point = point + 100
    }

    if (BoxLeft < startvalue+30 && BoxLeft>startvalue && RunnerTop >=390)
    {
        startvalue = startvalue - 120
        hitsound.play();
    Runner.classList.add("Boost")
    document.getElementById("Runner").style.left = (startvalue + "px")
    setTimeout(function(){ Runner.classList.remove("Boost") }, 400);
        point = point + 100
    }

    if (RunnerLeft <= 240){
        location.reload();
    }
    
},10);

function startpoints(){

var Points = setInterval(function(){

    if (point < 100){
    point = point + 1
    document.getElementById("Points").innerHTML = point
}

if (point >= 100 && point < 1000){
    point = point + 2
    document.getElementById("Points").innerHTML = point
}

if (point >= 1000 && point < 10000){
    point = point + 3
    document.getElementById("Points").innerHTML = point
}
},200);}



function Obstacle(){
    var Rand = generateRandomIntegerInRange(1, 2);
    
    if (Rand === 1){
        RedBull.classList.add("BoxObst")
        BoxObst.classList.add("BoxObst1")
    }

    if (Rand === 2){
        BoxObst.classList.add("BoxObst")
        RedBull.classList.add("BoxObst1")
    }
}
