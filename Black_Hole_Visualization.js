const c = 30;
const G = 6;
const dt = 0.1;

let blackhole;

const objects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(RADIUS);
  blackhole = new BlackHole(width/2, height/2, 3000);
  
  let start = height/2;
  let end = height/2 - blackhole.rs*2.6;
  for(let y = 0; y < start; y+=10){
     objects.push(new Photon(width-20, y)); 
  }
}

function draw() {
  background(255);
  blackhole.show();
  for(let obj of objects){
    blackhole.pull(obj);
    obj.update();
    obj.show();
  }
}
