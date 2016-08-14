var MacBook = new Interface("MacBook", ["addEngraving", "addParallels", "add4GBRam", "add8GBRam", "addCase"]);

var MacBookPro = function() {
  //MacBookを実装
};

MacBookPro.prototype = {
  addEngraving: function() {

  },
  addparallels: function() {

  },
  add4GBRam: function() {

  },
  add8GBRam: function() {

  },
  addCase: function() {
    // 基本価格
    return 900.00;
  }
}

var MacBookDecorator = function(macBook) {
  Interface.ensureImplements(macBook, MacBook);
  this.macBook = macBook;
}

MacBookDecorator.prototype = {
  addEngraving: function() {
    return this.macBook.addEngraving();
  },
  addParallels: function() {
    return this.macBook.addParallels();
  },
  add4GBRam: function() {
    return this.macBook.add4GBRam();
  },
  add8GBRam: function() {
    return this.macBook.add8GBRam();
  },
  addCase: function() {
    return this.macBook.addCase();
  },
  getPrice: function() {
    return this.mac.getPrice();
  }
};


var CaseDecorator = function(macBook) {
  this.superclass.constructor(macBook);
};

extend(CaseDecorator, MacBookDecorator);

CaseDecorator.prototype.addCase = function() {
  return this.macBook.addCase() + "Adding case to macbook";
};

CaseDecorator.prototype.getPrice = function() {
    return this.macBook.getPrice() + 45.00;
}

var myMacBookPro = new MacBookPro();

console.log(myMacBookPro.getPrice());

myMacBookPro = new CaseDecorator(myMacBookPro);
console.log(myMacBookPro.getPrice());
