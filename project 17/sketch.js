var satelitte, satelitteImg;
var earth, earthImg;
var groundStationLeft, groundStationRight;
var groundStationLeftImg, groundStationRightImg;
var upLinkLeft, upLinkLeftImg;
var uplinkRight,uplinkRightImg
var downLinkRight, downLinkRightImg
var  downLinkleft, downLinkleftImg


function preload(){
  groundStationRightImg=loadImage('other/gstation1.png')
  groundStationLeftImg=loadImage('other/gstation2.png')
  earthImg=loadImage('other/earth1.png')//,'earth2.png','earth3.png','earth4.png','earth5.png')
  
upLinkLeftImg=loadImage('leftu/upleft1.png')  
  
  uplinkRightImg=loadImage('rightu/upright1.png')
  
  satelitteImg=loadImage('other/satellite.png')
  
   downLinkRightImg=loadImage('rightd/dright1.png')
  
   downLinkleftImg=loadImage('leftd/dleft1.png')

  
}

function setup(){
  createCanvas(700,500);
  
  satellitte=createSprite(290,102,10,10)
  satellitte.addImage(satelitteImg)
  satellitte.scale=0.1
  
  earth=createSprite(260,570,20,20)
  earth.addImage(earthImg)
  earth.scale=0.4
  
  groundStationRight=createSprite(60,300,10,10)
  groundStationRight.addImage(groundStationRightImg)
  groundStationRight.scale=0.05
  
  groundStationLeft=createSprite(460,300,10,10)
  groundStationLeft.addImage(groundStationLeftImg)
  groundStationLeft.scale=0.05
  
  upLinkLeft=createSprite(110,220,20,20)
  upLinkLeft.addImage(upLinkLeftImg)
  upLinkLeft.scale=0.05
  
  uplinkRight=createSprite(410,220,10,10)
  uplinkRight.addImage(uplinkRightImg)
  uplinkRight.scale=0.05
  
   downLinkRight=createSprite(400,200,10,10)
   downLinkRight.addImage( downLinkRightImg)
    downLinkRight.scale=0.05
  
    
   downLinkleft=createSprite(110,210,10,10)
   downLinkleft.addImage(downLinkleftImg)
   downLinkleft.scale=0.05
  
}

function draw(){
  background("black")
  
  fill('white')
  text('press L&R keys',5,15)
  text('- to request data from the satetllite',5,30)
  text('press left & right arrow keys',5,50)
  text('-to receive the data from the satetllite',5,65)
  if(keyDown('L')){
    text('requesting data from the satetllite',10,300)
  }
   if(keyDown('R')){
    text('requesting data from the satetllite',300,300)
  }

   if(keyDown('LEFT_ARROW')){
    text('requesting data from the satetllite',10,300)
  }
   if(keyDown('RIGHT_ARROW')){
    text('requesting data from the satetllite',490,300)
  }
  upLinkLeft.visible=false
   uplinkRight.visible=false
   downLinkleft.visible=false
   downLinkRight.visible=false
  
  if(keyDown('L')){
    upLinkLeft.visible=true
  }
  if(keyDown('R')){
    uplinkRight.visible=true
  }
  if(keyDown('LEFT_ARROW')){
    downLinkleft.visible=true
  }
    if(keyDown('RIGHT_ARROW')){
    downLinkRight.visible=true
  }



  
  
  drawSprites();
}