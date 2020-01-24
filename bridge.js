//creates the bridge
function bridge(x, y, xS, yS, ) {
  this.x = x;
  this.y = y;
  this.xS = xS;
  this.yS = yS;
 
 
  this.display = function() {
    fill(101, 67, 33);
    rect(this.x, this.y, this.xS, this.yS);
  };

}
