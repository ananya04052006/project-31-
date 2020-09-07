const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//var particles = [];
//var plinkos = [];
//var divisions = [];
 
function setup() {
  createCanvas(500, 600);
 
  engine = Engine.create();
  world = engine.world;
 
  //createSprite(400, 200, 50, 50);
  ground = new Ground(250, 590, 500, 20);
  division1 = new Divisions(5, 480, 10, 300);
  division2 = new Divisions(105, 480, 10, 300);
  division3 = new Divisions(205, 480, 10, 300);
  division4 = new Divisions(305, 480, 10, 300);
  division5 = new Divisions(405, 480, 10, 300);
  division6 = new Divisions(495, 480, 10, 300);
  plinko1 = new Plinko(100, 100, 10);
  plinko33 = new Plinko(50, 100, 10);
  plinko20 = new Plinko(200, 100, 10);
  plinko19= new Plinko(250, 100, 10);
  plinko18 = new Plinko(300, 100, 10);
  plinko17 = new Plinko(350, 100, 10);
  plinko2 = new Plinko(150, 100, 10);
  plinko3 = new Plinko(400, 100, 10);
  plinko4 = new Plinko(450, 100, 10);
  plinko5 = new Plinko(100, 150, 10);
  plinko34 = new Plinko(50, 150, 10);
  plinko24 = new Plinko(200, 150, 10);
  plinko23 = new Plinko(250, 150, 10);
  plinko22 = new Plinko(300, 150, 10);
  plinko21 = new Plinko(350, 150, 10);
  plinko6 = new Plinko(150, 150, 10);
  plinko7 = new Plinko(400, 150, 10);
  plinko8 = new Plinko(450, 150, 10);
  plinko9 = new Plinko(100, 200, 10);
  plinko35 = new Plinko(50, 200, 10);
  plinko28 = new Plinko(200, 200, 10);
  plinko27 = new Plinko(250, 200, 10);
  plinko26 = new Plinko(300, 200, 10);
  plinko25 = new Plinko(350, 200, 10);
  plinko10 = new Plinko(150, 200, 10);
  plinko11 = new Plinko(400, 200, 10);
  plinko12 = new Plinko(450, 200, 10);
  plinko13 = new Plinko(100, 250, 10);
  plinko36 = new Plinko(50, 250, 10);
  plinko32 = new Plinko(200, 250, 10);
  plinko31 = new Plinko(250, 250, 10);
  plinko30 = new Plinko(300, 250, 10);
  plinko29 = new Plinko(350, 250, 10);
  plinko14 = new Plinko(150, 250, 10);
  plinko15 = new Plinko(400, 250, 10);
  plinko16 = new Plinko(450, 250, 10);
  particle1 = new Particle(300, 300, 10);

  //for (var j = 0; j < particles.length; j++) {
    //particles[j].display();
  //}

  //for (var k = 0; k < divisions.length; k++) {
    //divisions[k].display();
  //}

  //for (var l = 40; l <= width; l = l + 50) {
    //plinkos.push(new Plinko(l, 75, 10));
  //}

  //for (var l = 15; l <= width - 10; l = l + 50) {
    //plinkos.push(new Plinko(l, 175, 10));
  //}
}
 
function draw() {
  background(0);
 
  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();
  plinko18.display();
  plinko19.display();
  plinko20.display();
  plinko21.display();
  plinko22.display();
  plinko23.display();
  plinko24.display();
  plinko25.display();
  plinko26.display();
  plinko27.display();
  plinko28.display();
  plinko29.display();
  plinko30.display();
  plinko31.display();
  plinko32.display();
  plinko33.display();
  plinko34.display();
  plinko35.display();
  plinko36.display();
  particle1.display();
  console.log(particle1);

  drawSprites();
}