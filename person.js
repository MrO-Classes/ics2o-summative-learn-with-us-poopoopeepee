// makes the person
function Person(/*x,y,m*/ img) {
  this.pos = createVector(50, height);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 8);
  this.score =0;
  this.pic = img;


  this.applyForce = function(force) {
    this.acc.add(force);
  };
  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  };
  this.display = function(bill) {
    fill(255);
    stroke(255);
    image(this.pic, this.pos.x - 25, this.pos.y - 100, 50,100);
    //rect(this.pos.x, this.pos.y - 53, 20, 50);
  // the score counter
   this.count=this.score;
    this.x = person.x + 350;
    this.y = person.y - 345;
    text(floor(this.score/100) + "." + this.score%100, this.pos.x-30, this.pos.y-100);
    //this.display = function() {
    //  fill(100);
    //  text(bill.count + " $", this.x, this.y);
    //};
  };
    //lets him walk on platforms and the bridge
    this.edges = function(stage) {
      if (this.pos.y > height) {
        this.vel.y *= -0.5;
        this.pos.y = height;
      }
      if (this.pos.y > stage.y && this.pos.x > stage.x && this.pos.x < stage.x + stage.xS && this.vel.y > 0 && this.pos.y < stage.y + stage.yS) {
        this.vel.y = 0;
        this.pos.y = stage.y;
      }
    };
  }
  
