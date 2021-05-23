var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var fnaf,ball,circ,fox,fred;

var ballImg,circImg,foxImg,fredImg,trackImg,groundImg;


function preload()
{  
  ballImg = loadImage("images/ballor.png");
  circ2Img = loadImage("images/circ.png");
  foxImg = loadImage("images/fox.png");
  fredImg = loadImage("images/fred.png");
  trackImg = loadImage("images/track.png");
  groundImg = loadImage("ground.png");
}



function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}





function draw(){
  if(playerCount === 4){
    game.update(1);




  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2)
  {
    game.end();
  }
}

