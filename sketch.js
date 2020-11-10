var fixedRect, movingRect;
var o1,o2,o3,o4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  o1 = createSprite(100, 600, 50, 50);
  o1.shapeColor = "green";
  o1.debug = true;
  o2 = createSprite(300,600,50,50);
  o2.shapeColor = "green";
  o2.debug = true;
  o3 = createSprite(500, 600, 50, 50);
  o3.shapeColor = "green";
  o3.debug = true;
  o4 = createSprite(700,600,50,50);
  o4.shapeColor = "green";
  o4.debug = true;

  o3.velocityX = -5;
  o2.velocityX = +5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  //functions - argument/input for input
  //           return /answers
  if(isTouching(o1,movingRect)){
    movingRect.shapeColor = "red";
    o1.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    o1.shapeColor = "green";
  }
bounceOff(o2,o3);
  drawSprites();
}

