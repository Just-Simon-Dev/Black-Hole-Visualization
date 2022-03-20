const c = 30;
const G = 6;
const dt = 0.1;
let type = "Planet"

let blackhole;

const objects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(RADIUS);
  blackhole = new BlackHole(width/2, height/2, 3000);
  
  let start = height/2;
  let end = height/2 - blackhole.rs*2.6;
  for(let y = 0; y < start; y+=5){
     objects.push(new SpaceObject(width-20, y, type, 10)); 
  }
}

function draw() {
  background(255);
  blackhole.show();
  for(let obj of objects){
    if(!obj.stopped){
      blackhole.pull(obj);
      obj.update();
      obj.show();
    }
  }
}
