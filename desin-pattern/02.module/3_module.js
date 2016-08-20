var testModule = (function() {
  var counter = 0;
  return {
    incrementCounter: function() {
      return ++counter;
    },
    resetCounter: function() {
      console.log('counter value prior to reset:' + counter);
      counter = 0;
    }
  }
})();

testModule.incrementCounter();

testModule.resetCounter();//1

// -----------------

var myNamespace = (function() {
  var privateCounter = 0;
  var myPrivateMethod: function(foo) {
    console.log(foo);
  };

  return {
    myPublicVar = 'foo',
    myPublicFunction: function(bar) {
      myPrivateVar++;
      myPrivateMethod(bar);
    }
  }
})();
