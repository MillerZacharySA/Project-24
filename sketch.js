const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paperBall;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	paperBall = new Paper(400,450,40);
	ground = new Ground(800,690);

	dustbin = new Dustbin(1200,630.5,1330,630.5,1265,670);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paperBall.display();
  ground.display();
  dustbin.display();

  keyPressed();

  console.log(keyCode);
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:40,y:-40});
	}

	keyCode = 0;
}



