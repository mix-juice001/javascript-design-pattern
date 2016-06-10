var myRevealingmodule = function() {
  var privateVar = 'Ben Cherry';
  var publicVar = 'Hey there!';

  function privateFunction() {
    console.log('name: ' + privateVar);
  }
  function publicSetName(name) {
    privateVar = name;
  }
  function publicGetName() {
    privateFunction();
  }

  return {
    setName: publicSetName,
    greeting: publicVar,
    getName: publicGetName;
  }
}
