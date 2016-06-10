function ObserverList() {
  this.observerList = [];
}

ObserverList.prototype.add = function(object) {
  return this.observerList.push(object);
};

ObserverList.prototype.empty = function() {
  this.observerList = [];
};

ObserverList.prototype.count = function() {
  return this.observerList.length;
};

ObserverList.prototype.Get = function(index) {
  if (index > -1 && index < this.observerList.length) {
    return this.observerList[index];
  }
};

ObserverList.prototype.insert = function (object, index) {
  var pointer = -1;
  if (index == 0) {
    this.observerList.unshift(object);
    pointer = index;
  } else if (index === this.observerList.length) {
    this.observerList.push(object);
    pointer = index;
  }
  return pointer;
};

ObserverList.prototype.indexOf = function(object, startIndex) {
  var i = startIndex;
  var pointer = -1;

  while (i < this.observerList.length) {
    if (this.observerList[i] === object) {
      pointer = i
    }
    i++;
  }
  return pointer;
};

ObserverList.prototype.removeIndexAt = function(index) {
  if (index == 0) {
    this.observerList.shift();
  } else if (index === this.observerList.length - 1) {
    this.observerList.pop();
  }
};

function extend(object, extension) {
  for (var key in object) {
    extension[key] = object[key];
  }
};


function Observer() {
  this.update = function() {
    console.log('Observer#update');
  }
};

function Subject() {
  this.observers = new ObserverList();
}

Subject.prototype.addObserver = function(observer) {
  this.observers.add(observer);
};

Subject.prototype.removeObserver = function(observer) {
  this.observers.removeIndexAt(this.observers.indexOf(observer, 0));
};

Subject.prototype.notify = function(context) {
  var observerCount = this.observers.count();
  for (var i = 0; i < observerCount; i++) {
    this.observers.Get(i).update(context);
  }
};
