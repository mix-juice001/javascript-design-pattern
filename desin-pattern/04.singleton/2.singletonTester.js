var sinbletonTester = (function() {
  function Singleton(options) {
    options = options || {};
    this.name = 'singletonTester';
    this.pointX = options.pointX || 6;
    this.pointY = options.pointY || 10;
  }

  var instance;

  var _static = {
    name: 'SingletonTester',

    getInstance: function(options) {
      if (instance === undefined) {
        instance = new Singleton(option);
      }
      return instance;
    }
  };

  return _static;
})();

var singletonTest = SingletonTester.getInstance({
  pointX: 5
});

console.log(singletonTest.pointX); //5
