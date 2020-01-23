//creates the bridge
function bridge(x, y, xS, yS, img) {
  this.x = x;
  this.y = y;
  this.xS = xS;
  this.yS = yS;
  this.pic = img;
 
  image(this.pic);
  this.display = function() {
    fill(101, 67, 33);
    rect(this.x, this.y, this.xS, this.yS);
  };

}
