function blueMoney(x, y) {
  this.x = x;
  this.y = y;
  this.col= color(100, 250, 139);
  this.dead = true;
  this.count = 0;

  this.display = function(person) {

    //   console.log("person" + person.pos.x + "y" + person.pos.y)
    // console.log("money" + this.x + "y" + this.y)
    // print(person.pos.x + "person x = money x" + this.x );
    //print(person.pos.y + "person x = money x" + this.y );





    if ((person.pos.x < this.x + 35 && person.pos.x > this.x && person.pos.y  < this.y + 30)&&this.dead) {
      print("is true");
      this.col=color(200, 200, 200);
      this.dead = false;
      person.score += 500;
      this.x-=400;
      this.y-=400;
    } else {
      this.col=color(0, 0, 0);
      fill(this.col);
      rect(this.x, this.y, 35, 20);
    }
  };
}
