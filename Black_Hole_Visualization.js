const c = 30;
const G = 1;
const dt = 0.1;

let type = "Planet"
let numObj = 10
let BlackHoleMass = 100
let objVel = 20
let objMass = 10


let blackhole;

const objects = [];



function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(RADIUS);
  
  document.getElementById("type").addEventListener("change", () => {window.location.reload();})
  document.getElementById("ObjectNumber").addEventListener("change", () => {window.location.reload();})
  document.getElementById("Mass").addEventListener("change", () => {window.location.reload();})
  document.getElementById("ObjectMass").addEventListener("change", () => {window.location.reload();})
  document.getElementById("ObjectVel").addEventListener("change", () => {window.location.reload();})

  type = document.getElementById("type").value
  numObj = document.getElementById("ObjectNumber").value
  BlackHoleMass = document.getElementById("Mass").value
  objVel = document.getElementById("ObjectVel").value
  objMass = document.getElementById("ObjectMass").value

  blackhole = new BlackHole(width/2, height/2, BlackHoleMass);
  let start = height/2;
  let end = height/2 - blackhole.rs*2.6;
  for(let y = 0; y < numObj; y++){
     objects.push(new SpaceObject(width-20, y*(height/numObj/2), type, objMass, type == "Photon" ? c : objVel));
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
