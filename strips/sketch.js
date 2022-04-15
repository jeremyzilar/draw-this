let circleMask;
let myImage;

let img;
function preload() {
  img = loadImage('../assets/abiquiu.jpeg');
}

function setup() {
  let canvas = createCanvas(600, 600);
	noLoop();
}

function draw() {
	background(0);
	image(img, 0, 0);

	for (let y=0; y<height; y+=20) {
		// pick a y point to get the strip from
    let stripYPosition = int(random(0, img.height/4));

    // use get() to extract a strip of the image
    let strip = img.get(0, stripYPosition, img.width, 20);
		console.log(img.height);
    image(strip, 0, y);
	}
}

function keyTyped() {
  if (key === 's') {
		saveCanvas(canvas, 'myCanvas', 'jpg');
  }
}