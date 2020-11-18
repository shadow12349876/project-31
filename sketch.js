const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;

const MouseConstraint = Matter.MouseConstraint;

var world, engine, canvas;
var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;
var sling1, sling2, sling3, sling4, sling5;
var mConstraint;

function setup() {
  canvas = createCanvas(windowWidth / 2, windowHeight / 1.5);
  engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  };
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);

  pendulum1 = new Pendulum(200, 350, "red");
  pendulum2 = new Pendulum(260, 350, "blue");
  pendulum3 = new Pendulum(320, 350, "green");
  pendulum4 = new Pendulum(380, 350, "orange");
  pendulum5 = new Pendulum(440, 350, "gold");

  sling1 = new Sling(pendulum1.body, { x: 200, y: 100 });
  sling2 = new Sling(pendulum2.body, { x: 260, y: 100 });
  sling3 = new Sling(pendulum3.body, { x: 320, y: 100 });
  sling4 = new Sling(pendulum4.body, { x: 380, y: 100 });
  sling5 = new Sling(pendulum5.body, { x: 440, y: 100 });
}

function draw() {
  background(0);
  Engine.update(engine);
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
}

function mouseDragged() {
  Matter.Body.setPosition(pendulum1.body, { x: mouseX, y: mouseY });
}
