const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var slingShot;
var box1,box2,box3,box4,box5,box6,box7,box8;

function setup() {
  createCanvas(3000,800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();

  ball = new Ball(200,200,50);

  sling = new Slingshot(ball.body,{x:500,y:50});

  box1 = new Block(900,598,80,80);
  box2 = new Block(900,510,80,80);
  box3 = new Block(900,430,80,80);
  box4 = new Block(900,350,80,80);
  box5 = new Block(900,270,80,80);
  box6 = new Block(900,190,80,80);
  box7 = new Block(900,110,80,80);
  box8 = new Block(900,30,80,80);


}
function draw() {
  background(56,44,44); 
 
  //Engine.update(engine);

  ground.display();

  sling.display();

  ball.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();

}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
