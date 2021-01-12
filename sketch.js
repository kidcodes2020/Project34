const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
const Mouse=Matter.Mouse;
const MouseConstraint=Matter.MouseConstraint

var bob1, bob2, bob3, bob4,bob5,ground1;
var engine, world;

function setup()
{
    createCanvas(1600,800);
    engine=Engine.create();
    world=engine.world;

    let canvasmouse=Mouse.create(canvas.elt);
    canvasmouse.pixelRatio=pixelDensity();
    let options={
        mouse:canvasmouse
    }

    mConstraint= MouseConstraint.create(engine,options);
    World.add(world,mConstraint);

    bob1=new Pendulum(400,100,"violet");
    bob2=new Pendulum(600,100,"indigo");
    bob3=new Pendulum(800,100,"blue");
    bob4=new Pendulum(1000,100,"green");
    bob5=new Pendulum(1200,100,"yellow");
        
    sling1= new  Sling(bob1.body,{x:400,y:100});
    sling2= new  Sling(bob2.body,{x:600,y:100});
    sling3= new  Sling(bob3.body,{x:850,y:100});
    sling4= new  Sling(bob4.body,{x:1000,y:100});
    sling5= new  Sling(bob5.body,{x:1200,y:100});
  
	Engine.run(engine);
  
}


function draw() {
  background("black");

  rectMode(CENTER);
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
 

  //keyPressed();
  drawSprites ();
}

/*function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-130,y:-100}); } 
}
*/

function mouseDragged()
{
    Matter.Body.setPosition(bob1.body,{x:mouseX, y:mouseY});
}