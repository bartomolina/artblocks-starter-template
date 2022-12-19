function setup() {
    // create a canvas element and set its dimensions
    createCanvas(400, 400);
    // set the background color to white
    background(255);
  }
  
  function draw() {
    // set the fill color to random shades of red, orange, and yellow
    fill(random(100, 256), random(50, 256), random(0, 50));
    // draw a rectangle with a random size and position
    rect(random(0, width), random(0, height), random(10, 50), random(10, 50));
  }
  
  // run the draw function repeatedly to create a mosaic-like pattern
  function mousePressed() {
    draw();
  }