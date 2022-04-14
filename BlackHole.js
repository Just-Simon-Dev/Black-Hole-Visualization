class BlackHole{
  constructor(x, y, m, img){
     this.pos = createVector(x,y);
     this.mass = m;
     this.rs = (2 * G * this.mass) / (c*c);
     this.img = img;
  }
  
  pull(obj){
     const force = p5.Vector.sub(this.pos, obj.pos);
     const r = force.mag();
     const fg = (G * this.mass * obj.m) / ( r * r );
     force.setMag(fg);
     
     obj.vel.add(force);
     if(obj.type == "Photon"){
	      obj.vel.setMag(c);
     }else{
	      obj.vel.limit(c);
     }
     if(r < this.rs){
        obj.stop(); 
     }
  }
  
  show() {
    
    fill(0);
    noStroke();
    image(this.img, this.pos.x, this.pos.y, this.rs*2, this.rs*2);
    
    noFill();
    stroke(100, 100 );
    strokeWeight(16);
    circle(this.pos.x, this.pos.y, this.rs*3 + 8);
    
    stroke(255, 150, 0);
    strokeWeight(8);
    circle(this.pos.x, this.pos.y, this.rs*1.5 + 4);
  }
}
