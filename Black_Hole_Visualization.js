const c = 30;
const G = 1;
const dt = 0.1;


let numObj = 10
let type = "Planet"
let BlackHoleMass = 100


let blackhole;

const objects = [];



function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(RADIUS);
  
  document.getElementById("ObjectNumber").addEventListener("change", () => {window.location.reload();})
  document.getElementById("Mass").addEventListener("change", () => {window.location.reload();})


  numObj = document.getElementById("ObjectNumber").value
  BlackHoleMass = document.getElementById("Mass").value
  console.log(numObj)

  blackhole = new BlackHole(width/2, height/2, BlackHoleMass);
  let start = height/2;
  let end = height/2 - blackhole.rs*2.6;
  for(let y = 0; y < numObj; y++){
     objects.push(new SpaceObject(width-20, y*(height/numObj/2), type, 10, type == "Photon" ? c : 20));
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
