var ball 

function setup() {
  createCanvas(400,400);
  ball = createSprite(200,200,10,10)
}

function draw() 
{
  background(30);
drawSprites()

if (keyDown(RIGHT)){
  ball.position.x=ball.position.x+5
}
if (keyDown(LEFT)){
  ball.position.x=ball.position.x-5
}
if (keyDown(UP_ARROW)){
  ball.velocityY=-5
}
if (keyDown(DOWN_ARROW)){
  ball.velocityY=+5
}
}




