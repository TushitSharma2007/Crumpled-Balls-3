var groundObject;
var rightSide;
var leftSide;
var bottomSide;
var ball;
var slingshot;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundObject=new ground(width/2,670,width,20);
	rightSide=new Dustbin(600,620,20,80);
	leftSide=new Dustbin(500,620,20,80);
	bottomSide=new Dustbin(550,650,120,20)
	ball=new Paper(200,250,12);
  slingshot = new SlingShot(ball.body,{x:200, y:250});
}


function draw() { 
  Engine.update(engine);
  background(0);
  rectMode(CENTER);
  groundObject.display();
  rightSide.display();
  leftSide.display();
  bottomSide.display();
  ball.display();
  //console.log(ball.body.position.x,ball.body.position.y); 
 }

function mouseDragged(){
	Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
} 

function mouseReleased(){
  slingshot.fly();
}