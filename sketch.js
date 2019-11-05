var x = 100
var y = 50
var z = 30
var diameter = 150
var speed;

var x2 = 50;
var y2 = 70;
var diameter2 = 50;
var speed2;

var movement


function setup() {
  createCanvas(800,600);
  movement = Math.floor(Math.random() * 10) + 1;
  speed2 = Math.floor(Math.random() * 10) + 1;
 
}

function draw() {
  background(220);
  ellipse(200,200,45,60);
  circle(200,170,40);
  ellipse(200,180,90,20);
  circle(200,210,5);
  line(200, 300, 200, 230);
  line(200, 250, 210, 230);
  line(200, 250, 190, 230);
  line(200,300,190,330);
  line(200,300,210,330)
  point(193,199);
  point(203,199);
  triangle(190, 170, 200, 160, 210, 170);
  textSize(z);
    text('Portrait of me in a hat!', 10, 30);
  if(z<35)
  {
    z++
  }
  if(z>=35)
  {z= -5
  }
  

  textSize(15);
    text('Kyra Becker', 10, 385);
  circle(x,y,30);
  circle(x,300,15);
  circle(x,150,40);
  if(x >= 800 || x <= 0)
  {
     movement *= -1;
  }

   x+=movement;
  
   if(y >= 600 || y <= 0)
   {
      speed2 *= -1;
   }
 
   
  circle(20,y,30);
  circle(100,y,80);
  y += movement;
}
