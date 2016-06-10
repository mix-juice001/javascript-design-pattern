var mySingleton = (function() {
  var instance;
  function init() {
    function privateMethod() {
      console.log('I am private');
    }

    var privateVariable = 'I am also private';

    return {
      publicMethod: function() {
        console.log('The public can see me!');
      },
      publicProperty: 'I am also public';
    };
  };

  return {
    getInstance: function() {
      if (!instance) {
        instance.init();
      }
      return instance;
    }
  };
})();

var singletonA = mySingleton;
var singletonB = mySingleton;
console.log(singletonA === singletonB); // true
