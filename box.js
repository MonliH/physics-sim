
function Box(x, y, w, h) {
  options = {
    friction: 0.2,
    restitution: 0.5
  }
  this.body = Bodies.rectangle(x, y, w, h, options);
  this.w = w;
  this.h = h;
  World.add(world, this.body);
  
  this.show = function() {
    var pos = this.body.position;
    var angle = this.body.angle;
    
    push();
    rectMode(CENTER);
    strokeWeight(1);
    stroke(255);
    fill(127);
    translate(pos.x, pos.y);
    rotate(angle);
    rect(0, 0, this.w, this.h);
    pop();
    
  }
  
}