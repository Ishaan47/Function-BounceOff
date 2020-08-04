var fixedRect, movingRect;
var rect1, rect2;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  IsTouching(movingRect, fixedRect);
  drawSprites();
}

function bounceOff(dummyRect1, dummyRect2)  
{
  if (dummyRect1.x - dummyRect2.x < dummyRect2.width/2 + dummyRect1.width/2
    && dummyRect2.x - dummyRect1.x < dummyRect2.width/2 + dummyRect1.width/2) {
  dummyRect1.velocityX = dummyRect1.velocityX * (-1);
  dummyRect2.velocityX = dummyRect2.velocityX * (-1);
}
if (dummyRect1.y - dummyRect2.y < dummyRect2.height/2 + dummyRect1.height/2
  && dummyRect2.y - dummyRect1.y < dummyRect2.height/2 + dummyRect1.height/2){
  dummyRect1.velocityY = dummyRect1.velocityY * (-1);
  dummyRect2.velocityY = dummyRect2.velocityY * (-1);
}
 
}


function IsTouching(dummyRect1, dummyRect2) 
{

  if (dummyRect2.x-dummyRect1.x<= dummyRect1.width/2 + dummyRect2.width/2 && 
    dummyRect1.x-dummyRect2.x<= dummyRect1.width/2 + dummyRect2.width/2 && 
    dummyRect2.y-dummyRect1.y<= dummyRect1.height/2 + dummyRect2.height/2 && 
      dummyRect1.y-dummyRect2.y<= dummyRect1.height/2 + dummyRect2.height/2 ) {
   dummyRect2.shapeColor = "red";
   dummyRect1.shapeColor = "green";

}
 else 
 {
  dummyRect2.shapeColor = "gold";
  dummyRect1.shapeColor = "gold";

 } 




}