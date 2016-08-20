Function.prototype.implementsFor = function(parentClassOrObject) {
  if (parentClassOrObject.constructor === Function) {
    //通常の継承
    this.prototype = new parentClassOrObject();
    this.prototype.constructor = this;
    this.prototype.parent = parentClassOrObject.prototype;
  } else {
    //純粋仮想継承
    this.prototype = parentClassOrObject;
    this.prototype.constructor = this;
    this.prototype.parent = parentClassOrObject;
  }
  return this;
};

//Flyweight Object
var CoffeeOrder =  {
  //interface
  serveCoffee: function(context) {},
  getFlavor: function() {}
};

//Concrete Flyweight Object
function CoffeeFlavor(newFlavor) {
  var flavor = newFlavor;

  //機能に対するインターフェースが定義されていれば、その機能を実装する
  if (typeof this.getFlavor === "function") {
    this.getFlavor = function() {
      return flavor;
    };
  }

  if (typeof this.serveCoffee === "function") {
    this.serveCoffee = function(context) {
      console.log("Serving Coffee Flavor " + flavor + " to table number " + context.getTable());
    };
  }
}

//CoffeeOrderのためのインターフェースを実装する
CoffeeFlavor.implementsFor(CoffeeOrder);

// コーヒーの注文を受けたテーブルの番号を扱う ヘルパークラス
function CoffeeOrderContext(tableNumber) {
  return {
    getTable: function() {
      return tableNumber;
    }
  };
}

//Flyweight Factory Object
function CoffeeFlavorFactory() {
  var flavors = [];

  return {
    getCoffeeFlavor: function(flavorName) {
      var flavor = flavors[flavorName];
      if (flavor === undefined) {
        flavor = new CoffeeFlavor(flavorName);
        flavors.push([flavorName, flavor]);
      }
      return flavor;
    },
    getTotalCoffeeFlavorsMade: function() {
      return flavors.length;
    }
  };
}

// how to use
// testFlyweight()
function testFlyweight() {
  //注文されたコーヒーの種類
  var flavors = new CoffeeFlavor();
  //注文があったテーブル
  var tables = new CoffeeOrderContext();
  //注文数
  var ordersMade = 0;
  var flavorFactory;

  function takeOrders(flavorIn, table) {
    flavors[ordersMade] = flavorFactory.getCoffeeFlavor(flavorIn);
    tables[ordersMade++] = new CoffeeOrderContext(table);
  }

  flavorFactory = new CoffeeFlavorFactory();

  takeOrders("Cappuccino", 2);
  takeOrders("Cappuccino", 2);
  takeOrders("Frappe", 1);
  takeOrders("Frappe", 1);
  takeOrders("Xpresso", 1);
  takeOrders("Frappe", 897);
  takeOrders("Cappuccino", 97);
  takeOrders("Cappuccino", 97);
  takeOrders("Frappe", 3);
  takeOrders("Xpresso", 3);
  takeOrders("Cappuccino", 3);
  takeOrders("Xpresso", 96);
  takeOrders("Frappe", 552);
  takeOrders("Cappuccino", 121);
  takeOrders("Xpresso", 121);

  for (var i = 0; i < ordersMade; i++) {
    flavors[i].serveCoffee(tables[i]);
  }
  console.log("");
  console.log("total CoffeeFlavor objects made: " + flavorFactory.getTotalCoffeeFlavorsMade());
}
testFlyweight();
