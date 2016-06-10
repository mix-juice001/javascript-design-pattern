var publish = {};

var pubsub = publish;
(function(q) {
  var topics = {};
  var subUid = -1;

  q.publish = function(topic, args) {
    if (!topics[topic]) {
      return false;
    }

    var subscibers = topics[topic];
    var len = subscibers ? subscibers.length : 0;

    while (len--) {
      subscibers[len].func(topic, args);
    }
    return this;
  };

  q.subscribe = function(topic, func) {
    if (!topics[topic]) {
      topics[topic] = [];
    }
    var token = (++subUid).toString();
    topics[topic].push({
      token: token,
      func: func
    });
    return token;
  };

  q.unsubscribe = function(token) {
    for (var m in topics) {
      if (topics[m]) {
        for (var i = 0, j = topics[m].length; i < j; i++) {
          if (topics[m][i].token === token) {
            topics[m].splice(i, 1);
            return token;
          }
        }
      }
    }
    return this;
  };
})(publish);


//------
var messageLogger = function(topics, data) {
  console.log("Logging: " + topics + ": " + data);
};

var subscription = pubsub.subscribe("inbox/newMessage", messageLogger);

pubsub.publish("inbox/newMessage", "hello world!!");

pubsub.publish("inbox/newMessage", ["test", "a", "b", "c"]);

pubsub.publish("inbox/newMessage", {
  sender: "hello@google.com",
  body: "hey again!"
});

pubsub.unsubscribe(subscription);

pubsub.publish("inbox/newMessage", "Hello! are you still there?");
