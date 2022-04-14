const c = 30;
const realC = 299792458;
const G = 1;
const dt = 0.1;

let type = "Planet"
let numObj = 10
let BlackHoleMass = 100
let objVel = 20
let objMass = 10

let blackhole;
let objects = [];

let blackHoleImg
let ObjectImg

function initialization(){
  objects = [];

  type = document.getElementById("type").value;
  numObj = document.getElementById("ObjectNumber").value;
  BlackHoleMass = document.getElementById("Mass").value;
  objVel = (document.getElementById("ObjectVel").value / realC) * c;
  objMass = document.getElementById("ObjectMass").value;
  
  if(type != "Photon"){ 
    ObjectImg = loadImage('assets/'+type.toLowerCase() + ".png");
  }else{
    ObjectImg = loadImage('assets/star.png');
  }

  blackhole = new BlackHole(width/2, height/2, BlackHoleMass, blackHoleImg);
  
  for(let y = 0; y < numObj; y++){
     objects.push(new SpaceObject(width-20, y*(height/numObj/2), type, objMass, (type == "Photon" ? c : objVel), ObjectImg));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(RADIUS);
  
  blackHoleImg = loadImage('assets/black_hole.png');
  
  document.getElementById("type").addEventListener("change", () => {initialization();})
  document.getElementById("ObjectNumber").addEventListener("input", () => {
    let val = document.getElementById("ObjectNumber").value;
    if(val < 1 && val != ""){
      document.getElementById("ObjectNumber").value = 1;
    }
    else if(val > 200){
      document.getElementById("ObjectNumber").value = 200;
    }
    initialization();
  })
  document.getElementById("Mass").addEventListener("input", () => {
    let val = document.getElementById("Mass").value;
    if(val < 1 && val != ""){
      document.getElementById("Mass").value = 1;
    }
    initialization();
  })
  document.getElementById("ObjectMass").addEventListener("input", () => {
    let val = document.getElementById("ObjectMass").value;
    if(val < 1 && val != ""){
      document.getElementById("ObjectMass").value = 1;
    }
    initialization();
  })
  document.getElementById("ObjectVel").addEventListener("input", () => {
    let val = document.getElementById("ObjectVel").value;
    if(val < 1 && val != ""){
      document.getElementById("ObjectVel").value = 1;
    }
    else if(val > realC){
      document.getElementById("ObjectVel").value = realC;
    }
    initialization();
  })
  document.querySelector('.increment').addEventListener("click", () => {
    let val = document.getElementById("ObjectNumber").value;
    if(val < 200){
      document.getElementById("ObjectNumber").stepUp();
    }
    initialization();
  })
  document.querySelector('.decrement').addEventListener("click", () => {
    let val = document.getElementById("ObjectNumber").value;
    if(val > 1){
      document.getElementById("ObjectNumber").stepDown();
    }
    initialization();
  })

  initialization();
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
