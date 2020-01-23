//creates the platforms
function platform(x, y, xS, yS) {
  this.x = x;
  this.y = y;
  this.xS = xS;
  this.yS = yS;

  this.display = function() {
    fill(150, 255, 50);
    rect(this.x, this.y, this.xS, this.yS);
  };

}
