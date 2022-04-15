let img;
let mask;

function preload() {
  img = loadImage('../assets/abiquiu-mesa.png');
  img2 = loadImage('../assets/abiquiu-mesa-2.png');
}

function isOdd(num) { 
  return num % 2 == 1 ? true : false;
}


function draw() {
	background(230);
	image(img, width/2, height/2, width, height);

  let size = 600; // size of the first outer crop
  let num = 15; // number of crops
  let startingAngle = 20; // angle of each crop
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
    isOdd(i) === true ? img.mask(mask) : img2.mask(mask);

    // Sets the origin point of the objects
    translate(width/2, height/2);
    rotate(angle); // rotates the object
    // + add to the rotation
    angle = angle+=startingAngle;
    
    // tint(255, 25*angle, 100, 150);
    // tint(5*angle, 5*angle, 5*angle, 5*angle);

    // places the image on the page
    isOdd(i) === true ? image(img, 0, 0, width, width) : image(img2, 0, 0, width, width);
    pop();

  }
}


