
var r = 50;
var g = 50;
var b = 50; 


// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b

function setup(){
  createCanvas(1200,400);
 
 }



function draw(){
 
  // change the value of Red based on the mouse movement about the X axis
  r = map(mouseX,100,400,50,150);
  r1= map(mouseY,100,400,50,150);
  
   
  // change the value of Green based on the mouse movement about the X axis
  g = map(mouseX,600,400,90,150);
  g1= map(mouseX,600,400,90,150);
 
  // change the value of Blue based on the mouse movement about the X axis
  b = map(mouseX,1200,400,100,150);
  b1= map(mouseX,1200,400,100,150);
  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.
  background(r,r1,g,g1,b,b1);

  
  // Remember to fill the canvas with white paint before creating the ellipse.
  fill(255);

  // Create an ellipse that will move around with you mouse about the X axis.
  ellipse(mouseX,350,50,50);

  

drawSprites();
}
