var bgImg;
var cat ;
function preload() {
    //load the images here
    bgImg = loadImage("garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    catImg2  = loadAnimation("cat2.png","cat3.png");
    mouseImg2 = loadAnimation("mouse2.png","mouse3.png");
    

}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(1000,400);
    cat.addAnimation("tom",catImg1)


}

function draw() {

   
    background("garden",bgImg);
if(cat.x - mouse,x<(cat.width - mouse.width)/2){
    cat.velocityX = 0;
    cat.setAnimation("catRunning",catImg2);
    cat.changeAnimation("catRunning");
}
    drawSprites();
}


function keyPressed(){

    //For moving and changing animation write code here
    
  if(keyCode===LEFT_ARROW){
      mouse.addAnimation("mouseTeasing",mouseImg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;
  } 
  
  }
  