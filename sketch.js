var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600 ,400);
 // createSprite(400, 200, 50, 50);
  speed=random(55,90);
  weight=random(400,1500);
  car = createSprite(50,200,100,50);
 // car.shapeColor=color(128,0,128);
  wall=createSprite(1500,200,60,height/2);   
  wall.shapeColor=color(80,80,80);
  car.velocityX=speed;
  car.shapeColor=color(255,255,255);
}

function draw() {
  background(0,0,0);  
  
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;  
    var deformation = 0.5*weight*speed*speed/22500;
    textSize(20);
    fill("orange");
    text("Deformation = "+deformation,200,200);
    fill("white");
    text("Weight = "+weight,200,230);
    fill("green");
    text("Speed = "+speed,200,260 );

    if(deformation>180){
      car.shapeColor=color(255,0,0);
    }

    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
    }

    if(deformation<100){
      car.shapeColor=color(0,255,0);
    }
  }

  drawSprites();
}