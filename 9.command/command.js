(function() {
  var carManager = {
    requestInfo: function(model, id) {
      return "The information for " + model + ' with ID ' + id + ' is foobar';
    },
    buyVehicle: function(model, id) {
      return "You have successfully purchased Item " + id + ', a ' + model;
    },
    arrageViewing: function(model, id) {
      return "You have successfully booked a viewing of " model + ' (' + id + ')';
    }
  }
})();

//-----
CarManager.execute = function(name) {
  return CarManager[name] && CarManager[name].apply(CarManager, [].slice.call(arguments, 1));
}
CarManager.execute("arrageViewing", "Ferrari", "14523");
CarManager.execute("requestInfo", "Ford Mondeo", "54323");
CarManager.execute("requestInfo", "Ford Escort", "34232");
CarManager.execute("buyVehicle", "Ford Escort", "34232");
