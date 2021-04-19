
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var dustbin1, dustbin2, dustbin3, dustbin4;
var paper;
var launcher;

function preload()
{
  dustbinnn = loadImage('dustbin.png');
}

function setup() {
	var Canvas = createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

    ground = new Ground(400,670,800,10)

	dustbin1 = new Dustbin(667,600,15,130)
	dustbin2 = new Dustbin(533,600,15,130)
	dustbin3 = new Dustbin(600,657,150,15)

	paper = new Paper(200,400,60,60)

	dustbin4 = new Dustbin(600, 600,0.01,0.01)
	//dustbin4.addImage("dustbin.png",dustbinnn);
	
	launcher = new Launcher(paper.body,{x:450, y:320})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  Engine.update(engine);

 
    ground.display();

		dustbin1.display();
	dustbin2.display();
	dustbin3.display();

	dustbin4.display();
    
	paper.display();

	launcher.display();
	image (dustbinnn, 520, 485, 160,180)
	drawSprites();
 
}


function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
      launcher.fly();
}



