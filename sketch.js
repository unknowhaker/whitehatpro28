
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
let land,tree,stone,boy,slingShot;
let mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8, mango9, mango;

function preload()
{
	
}

function setup() {
	createCanvas(1200,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	land = new Ground(600,650,1200,50);
	tree = new Tree(900,5,400,600);
	stone = new Stone(100,100,20);
	boy = new Boy(300,590,150,300);
	slingShot = new SlingShot(stone.body,{x: 255,y: 525});
	mango = new Mango(1100,300,11);
	mango1 = new Mango(1000,270,8);
	mango2 = new Mango(1100,270,7);
	mango3 = new Mango(950,200,11);
	mango4 = new Mango(800,310,6);
	mango5 = new Mango(900,250,8);
	mango6 = new Mango(1000,130,7);
	mango7 = new Mango(900,150,10);
	mango8 = new Mango(1000,320,10);
	mango9 = new Mango(1050,200,10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  touching(stone,mango);
  touching(stone,mango1);
  touching(stone,mango2);
  touching(stone,mango3);
  touching(stone,mango4);
  touching(stone,mango5);
  touching(stone,mango6);
  touching(stone,mango7);
  touching(stone,mango8);
  touching(stone,mango9);
  land.display();
  tree.display();
  stone.display();
  boy.display();
  slingShot.display();
  mango.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  drawSprites();
 
}
function mouseDragged (){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
}

function mouseReleased (){
    slingShot.fly();
}
function touching(lstone,lmango) {
	mangoBodyPosition=lmango.body.position;
	lstoneBodyPosition=lstone.body.position;
	
	let distance = dist(lstoneBodyPosition.x,lstoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if (distance<=lmango.r+lstone.r) {
		Matter.Body.setStatic(lmango.body,false);
	}
}
function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x:300,y:590});
		slingShot.attach(stone.body);	
	}
}