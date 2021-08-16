var pathImg
var boyImg
var leftBoundary
var rightBoundary

function preload() {
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup() {
  createCanvas(400,400);
  path = createSprite(200, 200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  boy = createSprite(200, 360);
  boy.addAnimation("boy", boyImg);
  boy.scale = 0.1;

  leftBoundary = createSprite(0, 0, 100, 800);
  leftBoundary.visible = false;

  rightBoundary = createSprite(400, 400, 100, 800);
  rightBoundary.visible = false;
}

function draw() {
  background(0);
  drawSprites();
  
  if(path.y > 400) {
    path.y = height/2;
  }

  boy.x = mouseX
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  edges = createEdgeSprites();
  boy.collide(edges[3]);
}