const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var myengine, myworld;
var box1;
var ground
var bird
var pig
var log

function setup(){
    var canvas = createCanvas(1200,400);
    myengine = Engine.create();
    myworld = myengine.world;
    ground = new Ground(600,height,1200,20)
    bird = new Bird(50,100)
    pig = new Pig(810,350)
    pig1 = new Pig(810,220);
    log = new Log(810, 260, 300, PI/2);
    log1 = new Log(810,180,300,PI/2);
    log2 = new Log(795, 120, 150, PI/7);
    log3 = new Log(840, 120, 150, -PI/7);


    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700, 240, 70, 70);
    box4 = new Box(920, 240, 70, 70);  
    box5 = new Box(810, 160, 70, 70);

    
}

function draw(){
    background(0);
    Engine.update(myengine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    bird.display();
    pig.display();
    log.display();
    pig1.display();
    box3.display();
    box4.display();
    log1.display();
    log2.display();
    log3.display();
    box5.display();

}