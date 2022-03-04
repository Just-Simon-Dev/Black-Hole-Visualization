const c = 30;
const G = 6;

let blackhole;

function setup() {
  createCanvas(600, 600);
  ellipseMode(RADIUS);
  blackhole = new BlackHole(100, 320, 3000);
}
 

function draw() {
  background(255);
  blackhole.show();
}
