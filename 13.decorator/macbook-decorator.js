function MacBook() {
  this.cost = function() {
    return 997;
  };
  this.screenSize = function() {
    return 11.6;
  };
}
//decorator
function Memory(macBook) {
  var v = macBook.cost();
  macBook.cost = function() {
    return v + 75;
  };
}

//decorator
function Engraving(macBook) {
  var v = macBook.cost();
  macBook.cost = function() {
    return v + 250;
  };
}

//decorator
function Insurance(macBook) {
  var v = macBook.cost();
  macBook.cost = function() {
    return v + 200;
  }
}

var mb = new MacBook();
Memory(mb);
Engraving(mb);
Insurance(mb);

console.log(mb.cost());
console.log(mb.screenSize());
