  var wall,thickness;
  var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

  //speed,weight,thickness
  thickness = random(23,83);
  speed=random(223,312);
  weight=random(30,52);

  //creating bullet
  bullet=createSprite(200, 200, 50, 10);
  bullet.shapeColor=(255, 255, 255);
  
  //creating wall
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  
  


  
 
}

function draw() {
  background(0,0,0);
  
  bullet.velocityX=speed;
  

if (wall.x-bullet.x < (bullet.width+wall.width)/2) {
    bullet.velocityX=0;
    
    var damage= 0.5 * weight * speed *speed / (thickness * thickness* thickness) ;

  }

  if(damage>10) {
    wall.shapeColor = color(255,0,0);
  }
  if(damage<10) { 
    wall.shapeColor = color(0,255,0);
  }

  bullet.depth=wall.depth;
  bullet.depth=bullet.depth+1;

  

  drawSprites();
}