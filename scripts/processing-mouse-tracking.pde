// Modified Processing.js example. from http://processingjs.org/learning/

// Global variables
float radius = 100.0;
int X, Y;
int nX, nY;
int delay = 16;

// Setup the Processing Canvas
void setup(){
  size( 300, 300 );
  strokeWeight( 10 );
  frameRate( 15 );
  X = width / 2;
  Y = width / 2;
  nX = X;
  nY = Y;
}

// Main draw loop
void draw(){

  radius = radius + sin( frameCount / 4 );

  // Track circle to new destination
  X+=(nX-X)/delay;
  Y+=(nY-Y)/delay;

  // Fill canvas grey
  background( 100 );

  // Set fill-color to blue
  fill(136, 109, 255, 200);

  // Set stroke-color white
  stroke(255);

  // Draw circle
  ellipse( X, Y, radius, radius/1.25 );
}


// Set circle's next destination
void mouseMoved(){
  nY = mouseX;
  nX = mouseY;
}
