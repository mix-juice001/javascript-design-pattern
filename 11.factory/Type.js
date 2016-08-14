// Type.js 裏でつかわれるコンストラクタ

function Car (options) {
  this.doors = options.doors || 4;
  this.state = oprions.state || "brand new";
  this.color = options.color || "silver";
}

function Truck (options) {
  this.state = options.state || "used";
  this.wheelSize = options.wheelSize || "large";
  this.color = options.color || "blue";
}
