// define a color palette
let colors = [  [255, 0, 0],   // red
  [255, 128, 0], // orange
  [255, 255, 0], // yellow
  [0, 255, 0],   // green
  [0, 0, 255],   // blue
  [128, 0, 255], // purple
];

function setup() {
  // create a canvas element and set its dimensions
  createCanvas(400, 400);
  // set the background color to white
  background(255);
  // create a button to save the image
  createButton('Save Image').mousePressed(saveImage);
}

function draw() {
  // set the fill color to a random color from the palette
  fill(random(colors));
  // draw a rectangle with a random size and position
  rect(random(0, width), random(0, height), random(10, 50), random(10, 50));
}

// run the draw function repeatedly to create a mosaic-like pattern
function mousePressed() {
  draw();
}

// save the image as a PNG file
function saveImage() {
  save('mudejar.png');
}