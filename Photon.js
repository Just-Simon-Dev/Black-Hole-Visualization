class Photon{
   constructor(x, y){
      this.pos = createVector(x, y);
      this.vel = createVector(-c, 0);
      this.history = [];
      this.stopped = false;
   }
   
   atop() {
     this.stopped = true;
   }
   
   update(){
     this.history.push(this.pos.copy());
      const deltaV = this.vel.copy();
      deltaV.mult(dt);
      this.pos.add(deltaV); 
      if(this.history.length > 100){
         this.history.splice(0,1); 
      }
   }
   
   show() {
     strokeWeight(2);
     stroke(255, 0, 0);
      point(this.pos.x, this.pos.y);
      
      stroke(0);
      strokeWeight(1);
      noFill();
      beginShape();
      for(let h of this.history){
         vertex(h.x, h.y); 
      }
      endShape();
   }
}
