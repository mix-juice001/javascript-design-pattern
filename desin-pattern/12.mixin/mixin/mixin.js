var myMixins = {
  moveUp: function() {
    console.log("move up");
  },
  moveDown: function() {
    console.log("move down");
  },
  stop: function() {
    console.log("stop! in the name of love!");
  }
};

function CarAnimator() {
  this.moveleft = function() {
    console.log("move left");
  };
}

function PersonAnimator() {
  this.moveRandomly = function() {
    /*..*/
  };
}

//mix in で両方のコンストラクタを拡張
_.extend(CarAnimator.prototype, myMixins);
_.extend(PersonAnimator.prototype, myMixins);

var myAnimator = new CarAnimator();
myAnimator.moveleft();
myAnimator.moveUp();
myAnimator.moveDown();
myAnimator.stop();
