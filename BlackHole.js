class BlackHole{
  constructor(x, y, m){
     this.pos = createVector(x,y);
     this.mass = m;
     this.rs = (2 * G * this.mass) / (c*c);
  }
  
  pull(photon){
     const force = p5.Vector.sub(this.pos, photon.pos);
     const r = force.mag();
     const fg = (G * this.mass) / ( r * r );
     force.setMag(fg);
     
     photon.vel.add(force);
     photon.vel.limit(c);
  }
  
  show() {
    fill(0);
    noStroke();
    circle(this.pos.x, this.pos.y, this.rs);
    console.log(this.rs);
    
    noFill();
    stroke(100, 100 );
    strokeWeight(16);
    circle(this.pos.x, this.pos.y, this.rs*3 + 8);
    
    stroke(255, 150, 0);
    strokeWeight(8);
    circle(this.pos.x, this.pos.y, this.rs*1.5 + 4);
  }
}
