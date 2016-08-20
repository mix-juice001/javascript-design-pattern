var Person = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.gender = "male";
}

var clark = new Person("Clark", "Kent");

var SuperHero = function(firstName, lastName, power) {
  //新規オブジェクトでスーパークラスのコンストラクタを呼び出す
  //次にcall()を使って、オブジェクトのメソッドとしてコンストラクタを呼び出し、
  //オブジェクトを初期化する
  Person.call(this, firstName, lastName);
  this.power = power;
}

SuperHero.prototype = Object.create(Person.prototype);
var superman = new SuperHero("clark", "Kent", ["flight", "heat-vision"]);
console.log(superman);
