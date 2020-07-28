var paperball,dustbin,ground,dustbin1,dustbin2,slingshot;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Events = Matter.Events;



function setup() {
	createCanvas(800, 800);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,680,800,20);



	//Create the Bodies Here.


	Engine.run(engine);
  
	dustbin = new Dustbin(600,570,10,10);
	dustbin1 = new Ground(700,610,10,120);
	dustbin2 = new Ground(600,610,10,120);

	paperball = new Paperball(200,350,20);
	slingshot = new SlingShot(paperball.body,{x:200,y:350});
	
}


function draw() {
  
  background(211,211,211);
  Engine.update(engine);
  strokeWeight(4);
  dustbin.display();
  paperball.display();
  ground.display();	
  slingshot.display();
  dustbin1.display();
  dustbin2.display();
  
	
	
}



function mouseDragged(){
   
	Events.on(engine, 'afterUpdate', function() { 
		Matter.Body.setPosition(paperball.body, {x: mouseX , y: mouseY}); });
	}
	
	function mouseReleased() {
		engine.events = {};
		slingshot.fly();
	}