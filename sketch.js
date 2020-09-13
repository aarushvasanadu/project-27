
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world
var bobDiameter = 40


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	bar = new Bar(220,100,300,50)
	bob1 = new Bob(100,300,20,20)
	bob2 = new Bob(160,300,20,20)
	bob3 = new Bob(220,300,20,20)
	bob4 = new Bob(280,300,20,20)
	bob5 = new Bob(340,300,20,20)
	rope1 = new Rope(bob1.body,bar.body,-80,0)
	rope2 = new Rope(bob2.body,bar.body,-40,0)
	rope3 = new Rope(bob3.body,bar.body,0,0)
	rope4 = new Rope(bob4.body,bar.body,40,0)
	rope5 = new Rope(bob5.body,bar.body,80,0)



	//Create the Bodies Here.


	
  
}


function draw() {
  
  background('white');
  Engine.update(engine);
  bar.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  rope1.display()  
  rope2.display()  
  rope3.display()  
  rope4.display()  
  rope5.display()  


 
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-45,y:-10})
	}
}


