var ship, ship1
var sea , sea1
function preload(){



 ship1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png",)
sea1=loadImage("sea.png")
}


function setup() {
  createCanvas(600,300);
 
//creating the sea
sea = createSprite (600,300)
sea.addImage("running", sea1)
sea.scale=0.5
sea.velocityX=-1;

//creating the ship
ship = createSprite(50,200,100,200);
ship.addAnimation("running", ship1)


//adding scale and position to ship
ship.scale= 0.25;
}







function draw() {
  
  background("blue");

drawSprites()





}
