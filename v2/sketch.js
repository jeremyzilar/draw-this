let img;
let mask;

function preload() {
  img = loadImage('../assets/bqe.png');
}

function setup() {
  let canvas = createCanvas(600, 600);
	noStroke();
  noLoop();
  rectMode(CENTER);
  imageMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
	background(220);
	image(img, width/2, height/2, width, height);

  let xPosition = 0;
  let yPosition = 0;
  let size = 400;
  let num = 5;
  let startingAngle = 10;
  let angle = startingAngle;
  const steps = size / num;

  for (let i = 0; i < num; i++) {

    push();
    // create the mask
    mask = createGraphics(width, height);
    mask.noStroke();
    mask.fill(255);
    mask.circle(width/2,width/2, width);
    img.mask(mask);

    // Sets the origin point of the objects
    translate(width/2, height/2);
    rotate(angle); // rotates the object
    
    // Create the image
    image(img, 0, 0, size - i * steps, size - i * steps); 

    // adds to the rotation
    angle = angle+=startingAngle;
    pop();

  }
}


function keyTyped() {
  if (key === 's') {
		saveCanvas(canvas, 'myCanvas', 'jpg');
  }
}