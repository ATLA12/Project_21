const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;	
var ground;
var leftSide;
var rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.1,
		friction:0,
		density:1.2
	}

	var ground_options={
		isStatic:true
	}

	//Create the Bodies Here.

	ground = Bodies.rectangle(400,width-150,1500,20,ground_options);
	World.add(world,ground);
	leftSide = Bodies.rectangle(700,width-200,20,100,ground_options);
	World.add(world,leftSide);
	rightSide = Bodies.rectangle(500,width-200,20,100,ground_options);
	World.add(world,rightSide);
	ball = Bodies.circle(100,10,20,ball_options);
	World.add(world,ball);

	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
  background(0);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20);
  rect(leftSide.position.x,leftSide.position.y,20,100);
  rect(rightSide.position.x,rightSide.position.y,20,100);
  rect(ground.position.x,ground.position.y,width,20);
  keyPressed();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.2,y:1});
	}
}



