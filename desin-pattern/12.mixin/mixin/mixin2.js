var Car = function(settings) {
  this.model = settings.model || "no model provided";
  this.color = settings.color || "no color provided"
};

// mix in
var Mixin = function() {};
Mixin.prototype = {
  driveForword: function() {
    console.log("drive forward");
  },
  driveBackword: function() {
    console.log("drive backward");
  },
  driveSideways: function() {
    console.log("drive sideways");
  }
};

//既存オブジェクトを拡張して、他のオブジェクトのメソッドを追加する
function augment(receivingClass, givingClass) {
  // 特定のメソッドだけを提供
  if (arguments[2]) {
    for (var i = 2, len = arguments.length;i < len; i++) {
      receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
    }
  }
  //すべてのメソッドを提供
  else {
    for (var methodName in givingClass.prototype) {
      if (!Object.hasOwnProperty(receivingClass.prototype, methodName)) {
        receivingClass.prototype[methodName] = givingClass.prototype[methodName];
      }

      //代替案
      /*
      if (!receivingClass.prototype[methodName]) {
        receivingClass.prototype[methodName] = givingClass.prototype[methodName]
      }
      */
    }
  }
}


augment(Car, Mixin, "driveForword", "driveBackword");

var myCar = new Car({
  model: "Ford Escort",
  color: "blue"
});

myCar.driveForword();
myCar.driveBackword();

augment(Car, Mixin);

var mySportsCar = new Car({
  model: "porsche",
  color: "red"
});

mySportsCar.driveSideways();
