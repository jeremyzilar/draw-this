let img;
let mask;

function preload() {
  img = loadImage('../assets/abiquiu-sq.png');
  // img = loadImage('assets/bqe.png');
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
	background(230);
	image(img, width/2, height/2, width, height);

  let size = 500; // size of the first outer crop
  let num = 10; // number of crops
  let startingAngle = 10; // angle of each crop
  let angle = startingAngle; // used to calulate each angle in the loop
  const steps = width / num;

  for (let i = 0; i < num; i++) {

    push();
    // create the mask
    mask = createGraphics(width, height);
    mask.noStroke();
    mask.fill(255);
    // Positions the mast in the middle and sets the size of the mask as a diminishing size based on the number of steps in the loop
    mask.circle(width/2, height/2, size - i * steps);
    // applies the mask to the original image
    img.mask(mask);

    // Sets the origin point of the objects
    translate(width/2, height/2);
    rotate(angle); // rotates the object
    // + add to the rotation
    angle = angle+=startingAngle;
    
    // tint(255, 30*angle, 100, 100);
    // tint(5*angle, 5*angle, 5*angle, 5*angle);

    // places the image on the page
    image(img, 0, 0, width, width);

    
    pop();

  }
}


function keyTyped() {
  if (key === 's') {
		saveCanvas(canvas, 'myCanvas', 'jpg');
  }
}