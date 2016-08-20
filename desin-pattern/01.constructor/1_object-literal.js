var mymodule = {
  myProperty: "someValue",

  myConfig: {
    useCaching: true,
    language: 'en'
  },

  myMethod: function() {
    console.log('Where in the world is paul Irish today?');
  },

  myMethod2: function() {
    console.log('Caching is:' + (this.myConfig.useCaching) ? 'enabled' : 'disabled');
  },

  myMethod3: function(newConfig) {
    if (typeof newConfig === "object") {
      this.myConfig = newConfig;
      console.log(this.myConfig.language);
    }
  }
};

mymodule.myMethod(); // Where in the world is paul Irish today?

mymodule.myMethod2();//enabled

mymodule.myMethod3({
  language:'fr',
  useCaching:false
});//fr
