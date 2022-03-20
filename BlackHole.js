class BlackHole{
  constructor(x, y, m){
     this.pos = createVector(x,y);
     this.mass = m;
     this.rs = (2 * G * this.mass) / (c*c);
  }
  
  pull(obj){
     const force = p5.Vector.sub(this.pos, obj.pos);
     const r = force.mag();
     const fg = (G * this.mass * obj.m) / ( r * r );
     force.setMag(fg);
     
     obj.vel.add(force);
     if(obj.type == "Photon") {
       obj.vel.setMag(c);
     }
     if(r < this.rs){
        obj.stop(); 
     }
  }
  
  show() {
    fill(0);
    noStroke();
    circle(this.pos.x, this.pos.y, this.rs);
    
    noFill();
    stroke(100, 100 );
    strokeWeight(16);
    circle(this.pos.x, this.pos.y, this.rs*3 + 8);
    
    stroke(255, 150, 0);
    strokeWeight(8);
    circle(this.pos.x, this.pos.y, this.rs*1.5 + 4);
  }
}
