

//always creaet variables here
var bg, bg_img;
var redb,blueb,greenb,pinkb,bow;
var red_img, blue_img, green_img, pink_img;
var bow , bow_img
function preload(){
 //load your images here 
  bg_img = loadImage("background0.png");
  red_img = loadImage("red_balloon0.png");
  blue_img = loadImage("blue_balloon0.png");
  green_img = loadImage("green_balloon0.png");
  pink_img = loadImage("pink_balloon0.png");
  bow_img = loadImage("bow0.png");
}

function setup() {
  createCanvas(600, 500);
  //add code here
  //create bg sprite
  bg = createSprite(300, 80, 600, 500);
  bg.addImage("bg", bg_img);
  bg.scale = 2.5;
  bg.velocityX = -2;

  bow=createSprite(550,200,20,20);
  bow.addImage("bow",bow_img)
  
  redballoon();
  blueballoon();
  pinkballoon();
  greenballoon();
}

function draw() {

  background("skyblue");

  
  //add code here
  //conditional programming
  if (bg.x < 100) {
    bg.x = width/2
  }

  //move the bow with the mouse 
bow.y=mouseY;
  
  drawSprites();
}

function redballoon() {
  //set of instructions
  for (var y = 60; y < 450; y = y + 80){
    redb = createSprite(50, y, 20, 20);
    redb.addImage("red", red_img);
    redb.scale = 0.1;

  }
}

function blueballoon(){
  for (var  y = 100; y < 400; y=y + 80){
    blueb = createSprite(100,y,20,20);
    blueb.addImage("blue",blue_img);
    blueb.scale = 0.1;
  }
}

function pinkballoon(){
  for (var  y = 150; y < 350; y = y + 80){
    pinkb = createSprite(150,y,20,20);
    pinkb.addImage("pink",pink_img);
    pinkb.scale = 1.2;
  }
}

function greenballoon(){
  for (var  y = 200; y < 300; y=y + 80){
    greenb = createSprite(200,y,20,20);
    greenb.addImage("green",green_img);
    greenb.scale = 0.09;
  }
}
