function VehicleFactory() {}

VehicleFactory.prototype.vehicleClass = Car;

VehicleFactory.prototype.createVehicle = function (options) {
  if (options.vehicleType === "Car") {
    this.vehicleClass = Car;
  } else {
    this.vehicleClass = Truck;
  }
  return new this.vehicleClass(options);
}

var carFactory = new VehicleFactory();

var car = carFactory.createVehicle({
  vehicleType: "car",
  color: "yellow",
  doors: 6
});

console.log(car instanceOf Car);
console.log(car);

var movingTruck = carFactory.createVehicle({
  vehicleType: "Truck",
  state: "like new",
  color: "red",
  wheelSize: "small"
});

console.log(movingTruck instanceOf Truck);
console.log(movingTruck);

//TruckFactory を VehicleFactoryのサブクラスとして生成
function TruckFactory() {}
TruckFactory.prototype = new VehicleFactory();
TruckFactory.prototype.vehicleClass = Truck;

var truckFactory = new TruckFactory();
var myBigTruck = truckFactory.createVehicle({
  state: "omg..so bad.",
  color: "pink",
  wheelSize: "so big"
});
console.log(myBigTruck instanceOf Truck);
console.log(myBigTruck);
