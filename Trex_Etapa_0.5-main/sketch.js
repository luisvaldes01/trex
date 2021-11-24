var trex, trex_running, edges;
var groundImage;
var suelo;
var sueloinvisible;
var nubeImagen;
var obj1,obj2,obj3,obj4,obj5,obj6;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png");
  nubeImage=loadImage("cloud.png");
  obj1=loadImge("obstacle1.png");
  obj2=loadImge("obstacle2.png");
  obj3=loadImge("obstacle3.png");
  obj4=loadImge("obstacle4.png");
  obj5=loadImge("obstacle5.png");
  obj6=loadImge("obstacle6.png");
}

function setup(){
  createCanvas(600,200);
  
  //crear sprite de Trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //agregar tamaño y posición al Trex
  trex.scale = 0.5;
  trex.x = 50
  suelo=createSprite(180,180,400,30);
  suelo.addImage("suelo",groundImage);
  suelo.velocityX=-3;
  sueloinvisible=createSprite(200,200,400,30);
  sueloinvisible.visible = false;
}


function draw(){
  //establecer color de fondo.
  background("white");
  if(suelo.x<0){
    suelo.x=suelo.width/2;
  }
  //cargar la posición Y del Trex
  console.log(trex.y)
  
  //hacer que el Trex salte al presionar la barra espaciadora
  if(keyDown("space")&&trex.y>=160){
    trex.velocityY = -10;

  }
  
  trex.velocityY = trex.velocityY + 0.5;
  
  //evitar que el Trex caiga
  trex.collide(sueloinvisible);
  cactus();
  clouds();
  drawSprites();
}
function clouds(){
  if(frameCount%60===0){
    cloud=createSprite(600,50,50,10);
  cloud.velocityX=-3;
  cloud.addImage(nubeImage);
  cloud.y = Math.round(random(10,60));
  cloud.depth = trex.depth;
   trex.depth = trex.depth +1;
   cloud.lifetime =200;
  }
  

}
function cactus(){
if(frameCount%60===0){
  var cactuss=createSprite(400,150,10,50);
  cactuss.velocityX=-5;
  var rand=Math.round(random(1,6));
  switch(rand){
    case 1: cactuss.addImage(obj1);
    break;
    case 2: cactuss.addImage(obj2);
    break;
    case 3: cactuss.addImage(obj3);
    break;
    case 4: cactuss.addImage(obj4);
    break;
    case 5: cactuss.addImage(obj5);
    break;
    case 6: cactuss.addImage(obj6);
    break;
    default:
      break;
  }
}
}