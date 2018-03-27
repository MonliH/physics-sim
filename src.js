// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];

function setup() {
    createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;
    engine.positionIterations = 5;
    engine.velocityIterations = 5;
    ground = new Boundary(200, height, width, 3);
    wall1 = new Boundary(0, 0, 3, height*2);
    wall2 = new Boundary(0, width, 3, height*2);
    World.add(world, ground, wall1);
    //Engine.run(engine);
}

function mouseDragged() {
  boxes.push(new Box(mouseX, mouseY, 20, 20));
}

function mousePressed() {
  boxes.push(new Box(mouseX, mouseY, 20, 20));
}

function draw() {
    background(51);
    Engine.update(engine);
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].show();
    }
    ground.show();
    wall1.show();
}
