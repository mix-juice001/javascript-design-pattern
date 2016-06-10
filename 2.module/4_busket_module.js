var basketModule = (function(){
  var basket = [];
  function doSomeThingPrivate() {console.log('do something private...');};
  function doSomeThingElsePrivate() {console.log('do something else private...');};

  return {
    addItem: function(values) {
      basket.push(values);
    },
    getItemCount: function() {
      return basket.length;
    },

    dosomething: doSomeThingPrivate,

    getTotal: function() {
      var itemCount = this.getItemCount();
      var total = 0;
      while (itemCount--) {
        total += basket[itemCount].price;
      }
      return total;
    }
  };
})();

basketModule.addItem({
  item: 'bread',
  price: 0.5
});
basketModule.addItem({
  item: 'butter',
  price: 0.3
});

console.log(basketModule.getItemCount());//2
console.log(basketModule.getTotal());//8

console.log(basketModule.basket);//undefined
console.log(basket);
