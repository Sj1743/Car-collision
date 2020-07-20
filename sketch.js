var car, wall;
var speed, weight;
var deformation;

function setup() {

  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50,200,50,50);
  car.velocityX = speed;

  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = ("grey");

  deformation = 0.5*weight*speed*speed/22500;

}

function draw() {

  background(255,255,255);  

  if (((car.x - wall.x) < (car.width + wall.width)/2) && ((wall.x - car.x) < (car.width + wall.width)/2)){
    car.x = wall.x - (car.width + wall.width)/2;
    if(deformation < 100){
      car.shapeColor = "green";
    }else if(deformation < 180){
      car.shapeColor = "yellow";
    }else{
      car.shapeColor = "red";
    }
  }

  drawSprites();
}