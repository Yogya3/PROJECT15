
var PLAY =1;
var score=0;
var END = 0;
var gameState=1;
var swordImage,sword
var fruitImage,fruitImage2,fruitImage3,fruitImage4,alienImage1,alienImage2
var gameoverimage
function preload(){
  
  swordImage=loadImage("sword.png");
  fruitImage=loadImage("fruit1.png");
  fruitImage2=loadImage("fruit2.png");
  fruitImage3=loadImage("fruit3.png");
  fruitImage4=loadImage("fruit4.png");
  alienImage1=loadImage("alien1.png");
  alienImage2=loadImage("alien2.png")
  gameoverimage=loadImage("gameover.png")
  
  
}
function setup() {
  createCanvas(400, 400);
  
  swordg=new Group();
   fruit1=new Group() ;
  fruit2=new Group();
  fruit3=new Group();
  fruit4=new Group();
  alieng=new Group();
  alieng2=new Group();
  
  
  sword=createSprite(40,200,20,20)
  sword.addImage(swordImage);
  sword.scale=0.5;
  swordg.add(sword);
  
  
}





function draw() {
  background("black");
  
  sword.y=World.mouseY;
  sword.x=World.mouseX;
  
 if(gameState === PLAY){
   
   sword.y=World.mouseY;
  sword.x=World.mouseX;
   
    var select_fruit = Math.round(random(1,6));
  
  if (World.frameCount % 100 == 0) {
    if (select_fruit == 1) {
      orange();
    } else if (select_fruit == 2) {
      apple();
    } else if (select_fruit == 3) {
     pear();
    } else if (select_fruit == 4){
      alien11();
    }else if (select_fruit == 5){
      alien22();
    }
    else{ 
      banana();
    }
  }
   
   
   if (sword.isTouching(fruit1)){
    
    fruit1.destroyEach();
    
    score=score+1;}
  
  if (sword.isTouching(fruit2)){
    
    fruit2.destroyEach();
    
    score=score+1;}
  
  if (sword.isTouching(fruit3)){
    
    fruit3.destroyEach();
    
    score=score+1;}
  
  if (sword.isTouching(fruit4)){
    
    fruit4.destroyEach();
    
    score=score+1;}
  
    }
  
  if (sword.isTouching(alieng)){
    
    sword.addImage(gameoverimage);
    sword.x=200;
    sword.y=200;
    gameState=END;
    
    }
  
  
  if (sword.isTouching(alieng2)){
    
    
    gameState=END}
    
   if (gameState === END){
   
    sword.addImage(gameoverimage);
    sword.x=200;
    sword.y=200;
   }
  
  
  drawSprites();
  textSize(20);
  text("Score: "+ score, 250,30);
  
}


function orange(){
  var fruit= createSprite(370, 50, 60, 10);
  
  fruit.velocityX=-6
  fruit.addImage(fruitImage);
  fruit.scale = 0.2;
  fruit.lifetime=250;
  fruit1.add(fruit);
  
}


function apple(){
  var fruit22= createSprite(370, 140, 60, 10);
  fruit22.velocityX=-6;
  fruit22.addImage(fruitImage2);
  fruit22.scale = 0.2;
  fruit22.lifetime=250;
  fruit2.add(fruit22);
}


function pear(){
  var fruit33= createSprite(370, 230,60, 10);
  fruit33.velocityX=-6;
  fruit33.addImage(fruitImage3);
  fruit33.scale = 0.2;
  fruit33.lifetime=250;
  fruit3.add(fruit33);
  
}

function banana(){
  var fruit44= createSprite(360, 330,60, 10);
  fruit44.velocityX=-5;
  fruit44.addImage(fruitImage4);
  fruit44.scale = 0.2;
  fruit44.lifetime=350;
  fruit4.add(fruit44);
}

function alien11(){
  var alien1=createSprite(360,90,60,10);
  alien1.velocityX=-5;
  alien1.addImage(alienImage1);
  alien1.scale=0.6
  alien1.lifetime=350;
   alieng.add(alien1);
}
function alien22(){
  var alien2=createSprite(360,278,60,10);
  alien2.velocityX=-5;
  alien2.addImage(alienImage2);
  alien2.scale=0.6
  alien2.lifetime=350;
   alieng2.add(alien2);
}



















