//will make the loonie
function loonie(x, y) {
  this.x = x;
  this.y = y;
  this.col= color(100,250,139);
  this.dead = true;
  this.count = 0;

    this.display = function(person) {
    fill(212, 175, 55);
      ellipse(this.x, this.y, 40, 40);


      if ((person.pos.x < this.x + 35 && person.pos.x > this.x && person.pos.y  < this.y + 30)&&this.dead) {
      print("is true");
      this.col=color(200, 200, 200);
      this.dead = false;
      person.score += 100;
      this.x-=400;
      this.y-=400;
          }else{
      this.col=color(0,0,0);
          fill(this.col);
    
    }
  };
}
