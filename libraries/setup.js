function setup() {
  let canvas = createCanvas(600, 600);
	noStroke();
  noLoop();
  rectMode(CENTER);
  imageMode(CENTER);
  angleMode(DEGREES);
}

function keyTyped() {
  if (key === 's') {
		saveCanvas(canvas, 'myCanvas', 'jpg');
  }
}