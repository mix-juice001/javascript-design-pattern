
getCurrentTime = function() {
  var date = new Date();
  var m = date.getMonth() + 1;
  var d = date.getDate();
  var y = date.getFullYear();
  var t = date.toLocaleTimeString().toLowerCase();

  return (m + "/" + d + "/" + y + " " + t);
}

function addGridRow(data) {
  //ui.grid.addRow(data);
  console.log("updated grid componet with:" + data);
}

function updateCounter(data) {
  //ui.grid.updatelastChanged(getCurrentTime());
  console.log("data last updated at " + getCurrentTime() + " with " + data);
}

gridUpdate = function(topic, data) {
  if (data !== "undefined") {
    //grid.addGridRow(data);
    //grid.updateCounter(data);
    addGridRow(data);
    updateCounter(data);
  }
};

var suscriber = pubsub.subscribe("newDataAvailable", gridUpdate);

pubsub.publish("newDataAvailable", {
  summary: "Apple made $5 billion.",
  identifier: "APPL",
  stockPrice: 570.91
});

pubsub.publish("newDataAvailable", {
  summary: "Microsoft made $20million",
  identifier: "MSFT",
  stockPrice: 30.85
});
