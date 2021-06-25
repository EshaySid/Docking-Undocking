var backdrop;
var astronaut;
var astronaut1;
var astronaut2;
var astronaut3;
var astronaut4;
var astronaut5;

function preload(){
  bg=loadImage("Images/iss.png");
  sleep=loadAnimation("Images/sleep.png");
  brush=loadAnimation("Images/brush.png");
  drink=loadAnimation("Images/drink1.png","Images/drink2.png");
  eat=loadAnimation("Images/eat1.png","Images/eat2.png");
  bath=loadAnimation("Images/bath1.png","Images/bath2.png");
  gym=loadAnimation("Images/gym1.png","Images/gym2.png");
  move=loadAnimation("Images/move.png","Images/move1.png");
}

function setup() {
  createCanvas(800,400);
  backdrop=createSprite(400, 200, 50, 50);
  backdrop.addImage("background",bg);
  backdrop.scale=0.17;

  astronaut=createSprite(400,200,20,20);
  astronaut.addAnimation("sleep1",sleep);
  astronaut.scale=0.1

}

function draw() {
  background(225,225,225);  
  
  createEdgeSprites();

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y=300;
    astronaut.x=400;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gyming",gym);
    astronaut.changeAnimation("gyming");
    astronaut.y=300;
    astronaut.x=400;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y=300;
    astronaut.x=200;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.y=230;
    astronaut.x=400;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown("m")){
    astronaut.velocityX=3;
    astronaut.velocityY=4;
    //astronaut.bounceOff(edges);
  }


  drawSprites();
}