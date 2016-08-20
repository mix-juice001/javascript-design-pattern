var myModule = (function(jQuery, _) {
  function privateMethod() {
    jQuery(".container").html("test");
  }
  function privateMethod2() {
    console.log(_min([10, 5, 100, 2, 1000]));
  }

  return {
    publicMethod: function() {
      privateMethod();
    }
  };
})(jQuery, _);

myModule.publicMethod();
