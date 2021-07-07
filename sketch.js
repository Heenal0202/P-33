const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg
var snow=[]

function preload(){
  bg=loadImage("snow3.jpg")

}
function setup() {
  createCanvas(800,400);

    engine = Engine.create();
    world = engine.world;
  
 // createSprite(400, 200, 50, 50);
}

function draw() {
  background(bg);  

  Engine.update(engine);
  if (frameCount%15 === 0){
      snow.push(new Snow(random(0,width),10))
  }

  for(var i = 0;i<snow.length;i++){
    snow[i].display()
  }
  drawSprites();
}