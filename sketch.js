var bg,astro;
var bathimg,brushimg,drinkimg,eatimg,gymimg,moveimg,sleepimg,bgimg,astroimg;


function preload(){
 bgimg = loadImage("./Images/iss.png");
 bathimg = loadAnimation("./Images/bath1.png","./Images/bath2.png");
 brushimg = loadAnimation("./Images/brush.png");
 drinkimg = loadAnimation("./Images/drink1.png","./Images/drink2.png");
 eatimg = loadAnimation("./Images/eat1.png","./Images/eat2.png");
 gymimg = loadAnimation("./Images/gym1.png","./Images/gym2.png");
 moveimg = loadAnimation("./Images/move.png","./Images/move1.png");
 sleepimg = loadAnimation("./Images/sleep.png");
}

function setup() {
  createCanvas(800,400);

  bg = createSprite(400,200);
  bg.addImage("back",bgimg);
  bg.scale = 0.1;

  astro = createSprite(300,200);
  astro.addAnimation("still",sleepimg);
  astro.scale = 0.1;
}

function draw() {
  background(255,255,255);  

if (keyDown(UP_ARROW)) {
  astro.addAnimation("brush",brushimg);
  astro.changeAnimation("brush",brushimg);
  astro.y = 200;
  astro.velocityX = 0;
  astro.velocityY = 0;
}

if (keyDown(RIGHT_ARROW)) {
  astro.addAnimation("bath",bathimg);
  astro.changeAnimation("bath",bathimg);
  astro.y = 200;
  astro.velocityX = 0;
  astro.velocityY = 0;
}

if (keyDown("D")) {
  astro.addAnimation("drink",drinkimg);
  astro.changeAnimation("drink",drinkimg);
  astro.y = 200;
  astro.velocityX = 0;
  astro.velocityY = 0;
}

if (keyDown(LEFT_ARROW)) {
  astro.addAnimation("eat",eatimg);
  astro.changeAnimation("eat",eatimg);
  astro.y = 200;
  astro.velocityX = 0;
  astro.velocityY = 0;
}

if (keyDown(DOWN_ARROW)) {
  astro.addAnimation("gym",gymimg);
  astro.changeAnimation("gym",gymimg);
  astro.y = 200;
  astro.velocityX = 0;
  astro.velocityY = 0;
}

if (keyDown("M")) {
  astro.addAnimation("move",moveimg);
  astro.changeAnimation("move",moveimg);
  astro.y = 200;
  astro.velocityX = 0;
  astro.velocityY = 0;
}
  createEdgeSprites();
  drawSprites();
  
  //astro.bounceOff("edges");
}