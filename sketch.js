
var mvOval,fxOval,fxOval2;

var oval1,oval2;


function setup() { 
  createCanvas(400,400);

  fxOval = new Ellipse(200,200,50,100);
  fxOval.shapeColor = "red";

  fxOval2 = new Ellipse(200,100,50,50);
  fxOval2.shapeColor = "blue";

  mvOval = new Ellipse(200,200,100,50);
  mvOval.shapeColor = "red";

  oval1 = new Ellipse(50,300,50,50);
  oval1.vx = 5;
  oval2 = new Ellipse(350,300,50,50);
  oval2.vx = -5;

 


}

function draw() {
  background(0);  

  mvOval.x = mouseX;
  mvOval.y = mouseY;

  fxOval.display();
  fxOval2.display();
  mvOval.display();

  oval1.display();
  oval2.display();

  oval1.bounceOff(oval2);

  if(fxOval.isTouching(mvOval)){
    fxOval.shapeColor = "green";
    mvOval.shapeColor = "green";
    
  }
  else {
    fxOval.shapeColor = "red";
    mvOval.shapeColor = "red";

  }
  

}