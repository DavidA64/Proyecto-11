var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var bomba1
var gamestate = "playing"
var bombaExplo

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  bomba1 = loadImage("bomb.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Mover el fondo
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//crear sprite de niño corriendo
boy = createSprite(180,340,30,30);
boy.scale=0.06;
boy.addAnimation("JakeRunning",boyImg);

bombaExplo = new Group()


leftBoundary=createSprite(0,0,100,800);

leftBoundary.invisible = false;
leftBoundary.visible = true;
leftBoundary.invisible = true;
 leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
if(gamestate === "playing"){
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
 


  if(path.y > 400 ){
    path.y = height/2;
  }

  if(path.y > 400 ){
   
  path.y = height/2;
  }

  if(path.y > 400 ){
path.y = height/2;}

if(path.y > 400 ){path.y = height/2;}



}

if(gamestate === "gameover"){
  lost()
}


  
  //código para reiniciar el fondo

  if(path.y > 400 ){
    path.y = height/2;
  }

  if(path.y > 400 ){
   
  path.y = height/2;
  }

  if(path.y > 400 ){
path.y = height/2;}

if(path.y > 400 ){path.y = height/2;}
  
  drawSprites();
  bombas()
  if(boy.isTouching(bombaExplo)){
    gamestate = "gameover"
  
  }

  }








function bombas(){
  if(frameCount%100 === 0){
  var bomba
  bomba = createSprite(200,10,20,20)
  bomba.velocityY = 5
  bomba.scale = 0.08
  bomba.addImage("explosion", bomba1)
bomba.x = Math.round(random(50,350))
 bomba.lifetime = 200
 bombaExplo.add(bomba)
}
}

function lost(){

boy.destroy()
path.velocityY = 0
bombaExplo.destroyEach()
}