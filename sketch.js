var sword,swordimage
var monster,monsterimage
var fruit1,fruit1image
var fruit2,fruit2image
var fruit3,fruit3image
var fruit4,fruit4image
var score=0

function preload(){
  swordimage=
    loadImage("sword.png")
 monsterimage=
   loadImage("alien1.png")
  fruit1image=
    loadImage("fruit1.png")
  fruit2image=
    loadImage("fruit2.png")
  fruit3image=
    loadImage("fruit3.png")
  fruit4image=
    loadImage("fruit4.png")
}

function setup(){
  createCanvas(600,450);
  
  sword = createSprite(300,225,10,10)
  sword.addAnimation("aaron",swordimage)
  sword.scale=0.5
  
}


function draw(){
  background("lightblue");
  score=score+1
  drawSprites()
  text("score=0",250,50)
  populatesword()
  populatemonster()
  populatefruit1()
  populatefruit2()
  populatefruit3()
  populatefruit4()
  sword.y=mouseY 
  sword.x=mouseX  
     
   
      
  }
function populatesword()
{
  
}
function populatemonster()
{
  if (frameCount%90==0)
    {
 monster= createSprite(550,30,10,10)
  monster.addImage("aaron",monsterimage)
   monster.velocityX=-2;
  monster.y=random(300,100,200,40)
    } 
  
} 
  
 function populatefruit1()
{
  if (frameCount%90==0)
    {
 fruit1= createSprite(590,500,10,10)
fruit1.addImage("aaron",fruit1image)
   fruit1.velocityX=-6;
  fruit1.y=random(500,400)
      fruit1.scale=0.2
    } 
  
}  
function populatefruit2()
{
  if (frameCount%90==0)
    {
 fruit2= createSprite(590,400,10,10)
fruit2.addImage("aaron",fruit2image)
   fruit2.velocityX=-7;
  fruit2.y=random(400,300)
      fruit2.scale=0.2
    } 
  
}  
function populatefruit3()
{
  if (frameCount%90==0)
    {
 fruit3= createSprite(590,300,10,10)
fruit3.addImage("aaron",fruit3image)
   fruit3.velocityX=-8;
  fruit3.y=random(300,200)
      fruit3.scale=0.2
    } 
  
}  
function populatefruit4()
{
  if (frameCount%90==0)
    {
 fruit4= createSprite(590,200,10,10)
fruit4.addImage("aaron",fruit4image)
   fruit4.velocityX=-9;
  fruit4.y=random(200,100)
      fruit4.scale=0.2
    } 
  
}  
 
  
  
  