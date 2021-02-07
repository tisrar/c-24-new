
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var ground;
var stone;
var rubber;



function setup() {
	var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


	ground = new Ground(600,height,1200,20);

	stone = new Stone(700,320,100,100);

	//Create the Bodies Here.
	hammer = new Hammer(10, 100);


	//hammer = new Hammer(400,300,170,40)
	//hammer.shapeColor = "orange"

	rubber = new Rubber(900,450,70);

	Engine.run(engine);
  
}


function draw() {

  background("red");

  Engine.update(engine)
 

  hammer.display();  
  ground.display();
  stone.display();
  rubber.display();
 // drawSprites();
}

