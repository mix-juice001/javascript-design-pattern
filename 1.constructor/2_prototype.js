function Car(model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;
}

//prototype オブジェクトの再定義をさけるため、
//Object.prototype ではなく、Object.prototype.newMethod を使用している
Car.prototype.toString = function() {
  return this.model + " has done " + this.miles + " miles";
};

var civic = new Car("Honda Civic", 2009, 20000);
var mondeo = new Car("Ford Mondeo", 2010, 5000);

console.log(civic.toString());
console.log(mondeo.toString());
