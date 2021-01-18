const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world;
var ground,stand1,stand2,wall,cityImage;
var brick1, brick2, brick3, brick4, brick5, brick6, brick7, brick8, brick9, brick10, brick11, brick12, brick13, brick14, brick15;
var t2b1, t2b2, t2b3, t2b4, t2b5, t2b6, t2b7, t2b8, t2b9, t2b10;
var bg;
var score = 0;
var slingShot, hexagon;

function preload(){
    getBackgroundImg()
    //cityImage = loadImage("city2.png");
}

function setup(){
    var canvas = createCanvas(888,600);

    engine = Engine.create();
    world = engine.world;

    ground = new Base(444,585,888,10);
    wall = new Base(880,300,10,600);
    stand1 = new Base(450,400,200,10);
    stand2 = new Base(700,300,200,10);

    //Tower number 1
    brick1 = new PinkBlock(415,365);
    brick2 = new PinkBlock(425,365);
    brick3 = new PinkBlock(435,365);
    brick4 = new PinkBlock(445,365);
    brick5 = new PinkBlock(455,365);
    brick6 = new PinkBlock(465,365);
    brick7 = new PinkBlock(475,365);
    brick8 = new PinkBlock(410,315);
    brick9 = new PinkBlock(445,315);
    brick10 = new PinkBlock(450,270);
    brick11 = new PinkBlock(450,315);
    brick12 = new PinkBlock(475,315);
    brick13 = new PinkBlock(400,270);
    brick14 = new PinkBlock(450,270);
    brick15 = new PinkBlock(450,280);

    //Tower number 2
    t2b1 = new PinkBlock(700,285);
    t2b2 = new PinkBlock(670,285);
    t2b3 = new PinkBlock(730,285);
    t2b4 = new PinkBlock(687,285);
    t2b5 = new PinkBlock(713,285);
    t2b6 = new PinkBlock(700,285);
    t2b7 = new PinkBlock(687,235);
    t2b8 = new PinkBlock(713,235);
    t2b9 = new PinkBlock(700,220);
    t2b10 = new PinkBlock(700,195);

    hexagon = new Polygon(100,100);
    slingShot = new RubberBand(hexagon.body, {x:100, y:85});

    Engine.run(engine);
}

function draw(){
    if (cityImage){
        background(cityImage);
    }

    Engine.update(engine);

    ground.display();
    wall.display();
    stand1.display();
    stand2.display();
    fill("red");
    brick1.display();
    brick2.display();
    brick3.display();
    brick4.display();
    brick5.display();
    brick6.display();
    brick7.display();
    fill("orange");
    brick8.display();
    brick9.display();
    brick11.display();
    brick12.display();
    fill("yellow");
    brick10.display();
    brick13.display();
    brick14.display();
    brick15.display();
    fill("purple");
    t2b1.display();
    t2b2.display();
    t2b3.display();
    t2b4.display();
    t2b5.display();
    t2b6.display();
    fill("violet");
    t2b7.display();
    t2b8.display();
    t2b9.display();
    fill("pink");
    t2b10.display();

    brick1.score();
    brick2.score();
    brick3.score();
    brick4.score();
    brick5.score();
    brick6.score();
    brick7.score();
    brick8.score();
    brick9.score();
    brick10.score();
    brick11.score();
    brick12.score();
    brick13.score();
    brick14.score();
    brick15.score();
    t2b1.score();
    t2b2.score();
    t2b3.score();
    t2b4.score();
    t2b5.score();
    t2b6.score();
    t2b7.score();
    t2b8.score();
    t2b9.score();
    t2b10.score();

    hexagon.display();
    slingShot.display();

    textSize(30);
    fill("black");
    text("Score : "+score,620,100);

    drawSprites();
    textSize(30);
    fill("green");
    textSize(30);
    text("Drag the hexagon and launch towards the towers to break them.",20,50);
    fill("orange");
    text("Press space bar to get another chance to play !",20,550);
}

function mouseDragged(){
    Matter.Body.setPosition(hexagon.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if (keyCode === 32){
        slingShot.attach(hexagon.body);
    }
}

async function getBackgroundImg(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/kolkata");
    var responseJSON = await response.json();
    var dateTime = responseJSON.datetime;
    var hour = dateTime.slice(11,13);
    if (hour>=06 &&hour<=18){
        bg = "city2.png"
    }else{
        bg = "city.jpg"
    }
    cityImage = loadImage(bg);
}