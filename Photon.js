class Photon{
   constructor(x, y){
      this.pos = createVector(x, y);
      this.vel = createVector(-c, 0);
   }
   
   update(){
      const deltaV = this.vel.copy();
      deltaV.mult(dt);
      this.pos.add(deltaV); 
   }
   
   show() {
     strokeWeight(2);
     stroke(255, 0, 0);
      point(this.pos.x, this.pos.y); 
   }
}
