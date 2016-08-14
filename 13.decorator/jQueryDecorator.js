var decoratorApp = decoratorApp || {};

decoratorApp = {
  defaults: {
    validate: false,
    limit: 5,
    name: "foo",
    welcome: function() {
      console.log("welcome!!");
    }
  },
  options: {
    validate: true,
    name: "bar",
    helloWorld: function() {
      console.log("hello world!!");
    }
  },
  settings: {},
  printObject: function(obj) {
    var array = [];
    var next;
    $.each(obj, function (key, val) {
      next = key + ": ";
      next += $.isPlainObject(val) ? printObject(val) : val;
      array.push(next);
    });
    return "{" + array.join(", ") + "}";
  }
};

decoratorApp.settings = $.extend({}, decoratorApp.defaults, decoratorApp.options);

$("#log")
  .append(decoratorApp.printObject(decoratorApp.settings) +
          decoratorApp.printObject(decoratorApp.options) +
          decoratorApp.printObject(decoratorApp.defaults));
