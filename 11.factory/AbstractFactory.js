var AbstractVehicleFactory = (function() {
  var types = {};
  return {
    getVehicle: function(type, customizations) {
      var Vehicle = types[type];
      return (Vehicle) ? new Vehicle(customizations) : null;
    },
    registerVehicle: function(type, Vehicle) {
      var proto = Vehicle.prototype;

      //Vehicle規約を満足するクラスを登録する
      if (proto.driver && proto.breakDown) {
        types[type] = Vehile;
      }
      return AbstractVehicleFactory;
    }
  };
})();

// how to use
AbstractVehicleFactory.registerVehicle("car", Car);
AbstractVehicleFactory.registerVehicle("truck", Truck);

var car = AbstractVehicleFactory.getVehicle("car", {
  color: "lime green",
  state: "like new"
});

var truck = AbstractVehicleFactory.getVehicle("truck", {
  wheelSize: "medium",
  color: "neon yellow"
});

console.log(car);
console.log(truck);
