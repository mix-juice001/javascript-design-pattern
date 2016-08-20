var myModule = (function() {
  var module = {},
  privateVariable = 'Hello world';

  function privateMethod() {}

  module.publicProperty = "FooBar";
  module.publicMethod = function() {
    console.log(privateVariable);
  };
})();
