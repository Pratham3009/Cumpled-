
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper, paperImage;
var dustbin1, dustbin2, dustbin3, dustbin4;
function preload()
{

	paperImage = loadImage("paper.png");
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	dustbin1 = createSprite(550,590,140,10);
	isStatic:true;
	dustbin2 = createSprite(480,500,10,200);
	isStatic:true;
	dustbin3 = createSprite(620,500,10,200);
	isStatic:true;

	ground = createSprite(400,600,800,10);
	ground.shapeColor = color("yellow");
	isStatic:true;

	paper = createSprite(100,570,10,10);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  paper.addImage(paperImage);
  paper.scale = 0.3;
  
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  paper.display();
  

  if(keyCode === UP_ARROW){
	paper.x=540;
	paper.y=575;
}

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === 32) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:500,y:550});
	}
}


