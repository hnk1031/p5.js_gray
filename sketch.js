function setup() {
  // put setup code here
  createCanvas(390, 240);
  capture = createCapture(VIDEO);
  capture.size(390, 240);
}

function draw() {
  // put drawing code here
  background(255);
  image(capture, 0, 0, 390, 240);
  filter(GRAY);
}