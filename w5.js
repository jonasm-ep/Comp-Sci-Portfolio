/**
* Created with Week 5 Project.
* User: OCULUS
* Date: 2015-03-09
* Time: 05:50 PM
* To change this template use Tools | Templates.
*/
//the function for everything that should appear or disappear after clicking the start button
var gameOverEfx = document.getElementById("gameOverEfx");
var shotEfx = document.getElementById("shootingEfx");
var gameStartEfx = document.getElementById("gameStartEfx");
var gameMusic = [document.getElementById("gameMusic"), document.getElementById("pokemonMusic"), /*document.getElementById("pokemonMusic3")*/ document.getElementById("theEdgeGreenMusic"), document.getElementById("stickWarsMusic")];
var hitEfx = document.getElementById("hitEfx");
var musicSelect = document.getElementById("musicDropDown");
//plays the music, this is the function for the drop down menu
function playMusic(){
    for (var i = 0; i < gameMusic.length; i++) {
        gameMusic[i].pause();
    }
    
    var index = musicSelect.selectedIndex;
    if (index === 0) return;
    gameMusic[index - 1].play();
}
//this is the function for the start button where things disappear and appear
function startButton() {
    var header = document.getElementById("header");
    header.innerHTML = "";
    var button = document.getElementById("button");
    button.style.visibility = "hidden"; // When the button is pressed, this disappears.
    var soliderImg = document.getElementById("soldierImg");
    soldierImg.style.visibility = "hidden";
    var player1 = document.getElementById("player1");
    player1.style.visibility = "visible"; // When button is pressed, this appears.
    var player2 = document.getElementById("player2");
    player2.style.visibility = "visible";  
    var resetButton = document.getElementById("resetButton");
    resetButton.style.visibility = "visible";
    var instructionVar = document.getElementById("instructions");
    instructions.style.visibility = "hidden";
    var smallNote = document.getElementById("note");
    note.style.visibility = "hidden";
    var navBar = document.getElementById("navbar");
    navBar.style.visibility = "hidden";
    var lifeBarA = document.getElementById("livesA");
    lifeBarA.style.visibility = "visible";
    var livesBarB = document.getElementById("livesB");
    livesBarB.style.visibility = "visible";
    livesA[0] = document.getElementById("lives1");
    livesA[0].style.visibility = "visible";
    livesA[1] = document.getElementById("lives2");
    livesA[1].style.visibility = "visible";
    livesA[2] = document.getElementById("lives3");
    livesA[2].style.visibility = "visible";
    livesB[0] = document.getElementById("lives4");
    livesB[0].style.visibility = "visible";
    livesB[1] = document.getElementById("lives5");
    livesB[1].style.visibility = "visible";
    livesB[2] =document.getElementById("lives6");
    livesB[2].style.visibility = "visible";
    var lives = document.getElementById("lives");
    lives.style.visibility = "visible";
    var note2 = document.getElementById("note2");
    note2.style.visibility = "hidden";
    var musicPlayerDiv = document.getElementById("musicPlayerDiv");
    musicPlayerDiv.style.visibility = "visible";
    gameStartEfx.play();
    musicSelect.style.visibility = "visible";
    gameLoop();
}

var player1Up = false;
var player1Down = false;
var player2Up = false;
var player2Down = false;
var waitTime = .4 * 60
var player1Wait = waitTime
var player2Wait = waitTime
var livesA = [];
var livesB = [];
    
//does something if a key is pressed
document.onkeydown = function (e){
    e = e || window.event;
    switch (e.keyCode) {
        case 65:
            player1Down = true;
            break;
        case 81:
            player1Up = true;
            break;
        case 80:
            player2Down = true;
            break;
        case 76:
            player2Up = true;
             break;
        case 83:
            if(player1Wait > 0){ 
                break;
              }
            var bullet = new Bullet(parseInt(player1.style.left) + 67 +"px", parseInt(player1.style.top) + 24 + "px");
            bullet.initialize("bullet1");
            shootingEfx.play();
            player1Wait = waitTime
            shootingEfx.play();
            break;
        case 75:
            if(player2Wait > 0){
                break;
            }
            var bulletTwo = new Bullet(parseInt(player2.style.left) - 10 +"px", parseInt(player2.style.top) + 24 +"px");
            bulletTwo.initialize("bullet2");
            player2Wait = waitTime
            shootingEfx.play();
            break;
        
    }
    
};
//stops the player from moving when a key is not pressed
document.onkeyup =function (e){
    e = e || window.event;
    switch (e.keyCode) {
        case 65:
            player1Down = false;
            break;
        case 81:
            player1Up = false;
            break;
        case 80:
            player2Down = false;
            break;
        case 76:
            player2Up = false;
             break;
    }
};
//movement
function animate() {
    if (player1Up && parseInt(player1.style.top) > 19) {
        player1.style.top = parseInt(player1.style.top) - 5 +"px";
    }
    if (player1Down && parseInt(player1.style.top) < 455) {
        player1.style.top = parseInt(player1.style.top) + 5 +"px";
    }
    if (player2Up && parseInt(player2.style.top) < 455) {
        player2.style.top = parseInt(player2.style.top) + 5 +"px";
    }
    if (player2Down && parseInt(player2.style.top) > 19) {
        player2.style.top = parseInt(player2.style.top) - 5 +"px";
    }
    for(i = 0; i < bullets.length; i++){
        bullets[i].move();
    }
    
};

//setInterval(animate, 25); //player movement speed

//Contains all the bullets
var bullets = [];
 

// This makes bullets when they are shot!
function Bullet(xpos, ypos){
    this.xpos = xpos;
    this.ypos = ypos;
    
    
    // creates the bullet element and puts it on the DOM
    this.initialize = function(type){
        this.elem = document.createElement("div");
        this.elem.classList.add(type);
        this.type = type       
        this.elem.style.position = "absolute";
        document.body.appendChild(this.elem);
        this.elem.style.left = this.xpos;
        this.elem.style.top = this.ypos;
        bullets.push(this)
     }
    //this makes the bullets move across the screen
    this.move = function(){
        var moveDir = 6;
        if (this.type === "bullet2") {
           moveDir = -6
        }
        
        //Store the current style left in a temp variable
        var bulletTemp = this.elem.style.left;
        bulletTemp = parseInt(bulletTemp) + moveDir +"px"
        this.elem.style.left = bulletTemp;
        
        
        //set temp to the parsed int from temp
        
        //increase the value
        
        //change it to a string with 'px' at the end
        
        //set the actual value to the new temp value
        
    }
    //checks if a bullet hits a player
    this.checkHit = function(){
        if(this.type === "bullet1" && isColliding(player2, this) ){
          this.elem.parentNode.removeChild(this.elem) ;
            bullets.splice(bullets.indexOf(this),1);
            hitEfx.play();
        if (livesB.length === 1) {
            livesB[livesB.length - 1].style.visibility = "hidden";
            livesB.splice(livesB.length -1, 1);
            player2.style.visibility = "hidden";
            var p1Wins = document.getElementById("p1Wins")
            p1Wins.style.visibility = "visible";
            gameOverEfx.play();
            Bullet = false;
            gameLoop = false;
		
          } else {
               livesB[livesB.length - 1].style.visibility = "hidden";
               livesB.splice(livesB.length - 1, 1);
            }
        }   
        if(this.type === "bullet2" && isColliding(player1, this) ){
          this.elem.parentNode.removeChild(this.elem) ;
            bullets.splice(bullets.indexOf(this),1);
            hitEfx.play();
            if (livesA.length === 1) {
                livesA[livesA.length - 1].style.visibility = "hidden";
                livesA.splice(livesA.length - 1, 1);             
                player1.style.visibility = "hidden";
                var p2Wins = document.getElementById("p2Wins")
                p2Wins.style.visibility = "visible";
                gameOverEfx.play();
                Bullet = false;
                gameLoop = false; 
            } else {
                livesA[livesA.length - 1].style.visibility = "hidden";
                livesA.splice(livesA.length - 1, 1);
            }
        }
    }
}; 
//takes the coordinates for detecting where a bullet has hit, the top, right, left, or bottom of the player
function isColliding(player, projectile){ 
    var above = parseInt(player.style.top) > parseInt(projectile.elem.style.top) + 9;
    var below = parseInt(player.style.top) + 60 < parseInt(projectile.elem.style.top);
    var rightOf = parseInt(player.style.left) + 60 < parseInt(projectile.elem.style.left);
    var leftOf = parseInt(player.style.left) > parseInt(projectile.elem.style.left) + 9;  
    if(above || below || rightOf || leftOf) return false;
    else return true;
    
};
//this is the function of the entire game code that is runs the code 60x per sec
function gameLoop(){
    animate();
    player1Wait--; 
    player2Wait--;
    for(var bullet of bullets){ 
        bullet.move();
        bullet.checkHit();        
        //Dom saver
         if(parseInt(bullet.elem.style.left) > 1340/*amount you want bullet to travel before disapearing*/) {
            bullet.elem.parentNode.removeChild(bullet.elem) ;
            bullets.splice(bullets.indexOf(bullet), 1);
         }
    }
    
    window.requestAnimationFrame(gameLoop);//runs all the animations used in the game: bullet movement, player movement etc.
};


