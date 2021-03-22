
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    holder=new Hold(500,100,550,30)
    bob1=new Bob(270,600)
	bob2=new Bob(390,600)
	bob3=new Bob(510,600)
	bob4=new Bob(630,600)
	bob5=new Bob(750,600)
	rp1=new Cons(bob1.body,holder.body,-230,0)
    rp2=new Cons(bob2.body,holder.body,-120,0)
	rp3=new Cons(bob3.body,holder.body,-10,0)
	rp4=new Cons(bob4.body,holder.body,110,0)
	rp5=new Cons(bob5.body,holder.body,220,0)
	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background("white");
  holder.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  rp1.display()
  rp2.display()
  rp3.display()
  rp4.display()
  rp5.display()
  if(keyDown(UP_ARROW)){
	  Body.applyForce(bob1.body,bob1.body.position,{x:-30,y:0})
  }
}