const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground,ground1,ground2,polygon,slingshot
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,
box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,
box21,box22,box23,box24,box25,box26,box27,box28,box29,box30,
box31,box32,box33,box34,box35,box36,box37,box38,box39,box40,
box41,box42,box43,box44,box45,box46,box47,box48,box49,box50,
box51,box52,box53,box54,box55,box56,box57,box58,box59,box60,box61,box62


function preload() {  
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

 polygon=new Polygon(250,190,50,50)



    ground = new Ground(600,height,1200,20);
    ground1 = new Ground(965,280,255,15);
    ground2 = new Ground(600,350,300,15);

    box1=new Box(465,330,30,30)
    box2=new Box(495,330,30,30)
    box3=new Box(525,330,30,30)
    box4=new Box(555,330,30,30)
    box5=new Box(585,330,30,30)
    box6=new Box(615,330,30,30)
    box7=new Box(645,330,30,30)
    box8=new Box(675,330,30,30)
    box9=new Box(705,330,30,30)
    box10=new Box(735,330,30,30)
    box11=new Box2(495,300,30,30)
    box12=new Box2(525,300,30,30)
    box13=new Box2(555,300,30,30)
    box14=new Box2(585,300,30,30)
    box15=new Box2(615,300,30,30)
    box16=new Box2(645,300,30,30)
    box17=new Box2(675,300,30,30)
    box18=new Box2(705,300,30,30)
    box19=new Box(525,270,30,30)
    box20=new Box(555,270,30,30)
    box21=new Box(585,270,30,30)
    box22=new Box(615,270,30,30)
    box23=new Box(645,270,30,30)
    box24=new Box(675,270,30,30)
    box25=new Box2(555,240,30,30)
    box26=new Box2(585,240,30,30)
    box27=new Box2(615,240,30,30)
    box28=new Box2(645,240,30,30) 
    box29=new Box(585,210,30,30)
    box30=new Box(615,210,30,30)
    box31=new Box2(600,180,30,30)
    box32=new Box(865,260,30,30)
    box33=new Box(895,260,30,30)
    box34=new Box(925,260,30,30)
    box35=new Box(955,260,30,30)
    box36=new Box(985,260,30,30)
    box37=new Box(1015,260,30,30)
    box38=new Box(1045,260,30,30)
    box39=new Box(1075,260,30,30)
    box40=new Box(2005,260,30,30)
    box41=new Box(2035,260,30,30)
    box42=new Box2(865,230,30,30)
    box43=new Box2(895,230,30,30)
    box44=new Box2(925,230,30,30)
    box45=new Box2(955,230,30,30)
    box46=new Box2(985,230,30,30)
    box47=new Box2(1015,230,30,30)
    box48=new Box2(1045,230,30,30)
    box49=new Box2(1075,230,30,30)
    box50=new Box(895,200,30,30)
    box51=new Box(925,200,30,30)
    box52=new Box(955,200,30,30)
    box53=new Box(985,200,30,30)
    box54=new Box(1015,200,30,30)
    box55=new Box(1045,200,30,30)
    box56=new Box2(955,170,30,30)
    box57=new Box2(985,170,30,30)
    box58=new Box2(1015,170,30,30) 
    box59=new Box2(925,170,30,30)
    box60=new Box(955,130,30,30)
    box61=new Box(985,130,30,30)

    box62=new Box2(970,100,30,30)

   slingshot = new Slingshot (polygon.body,{x:220, y:280});

}

function draw(){
    background(0);
    Engine.update(engine);
    strokeWeight(4);

   // rect(250,190,50,50);

    ground.display();
    ground1.display();
    ground2.display();
    polygon.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    box33.display();
    box34.display();
    box35.display();
    box36.display();
    box37.display();
    box38.display();
    box39.display();
    box40.display();
    box41.display();
    box42.display();
    box43.display();
    box44.display();
    box45.display();
    box46.display();
    box47.display();
    box48.display();
    box49.display();
    box50.display();
    box51.display();
    box52.display();
    box53.display();
    box54.display();
    box55.display();
    box56.display();
    box57.display();
    box58.display();
    box59.display();
    box60.display();
    box61.display();
    box62.display();
  
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}


function keyPressed(){
    if(keyCode===32){
       slingshot.attach(polygon.body);
    }
       
   }