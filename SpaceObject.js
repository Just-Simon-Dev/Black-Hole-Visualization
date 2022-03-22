class SpaceObject{
   constructor(x, y, type, m, v){
      this.pos = createVector(x, y);
      this.vel = createVector(-v, 0);
      this.m = m;
      this.history = [];
      this.stopped = false;
      this.type = type;
   }
   
   stop() {
     this.stopped = true;
   }
   update(){
       this.history.push(this.pos.copy());
        const deltaV = this.vel.copy();
        deltaV.mult(dt);
        this.pos.add(deltaV);
      if(this.history.length > 500){
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
