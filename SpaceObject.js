class SpaceObject{
   constructor(x, y, type, m, v, img){
      this.pos = createVector(x, y);
      this.vel = createVector(-v, 0);
      this.type = type;
      this.m = (type == "Photon" ? 1 : m);
      this.history = [];
      this.stopped = false;
      this.img = img;
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

     if(this.type == "Photon"){
        point(this.pos.x, this.pos.y);
     }else{
         image(this.img, this.pos.x-25, this.pos.y-25, 50, 50);
     }
      
      
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
