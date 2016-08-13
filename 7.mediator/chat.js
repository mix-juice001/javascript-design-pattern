$("#chatForm").on("submit", function(event) {
  event.preventDefault();

  //UIからchatの詳細を取得する
  var text = $("#chatBox").val();
  var from = $("#fromBox").val();
  var to = $("#toBox").val();

  //chatからnewMessageトピックにデータを発行する
  mediator.publish("newMessage", {message: text, from: from, to: to});
});

//新規メッセージが到着したら追加する
function displayChat(topic, data) {
  var date = new Date();
  var msg = data.from + ' said \"' + data.message + '\" to ' + data.to;

  $("#chatResult").prepend('' + msg + ' (' + date.toLocaleTimeString() + ')');
}

//メッセージのログ出力
function logChat(data) {
  if (window.console) {
    console.log(data);
  }
}

//送信される新規チャットメッセージをmediatorを介して購読する
mediator.subscribe("newMessage", displayChat);
mediator.subscribe("newMessage", logChat);

//以下の実装はより高度な実装を使った場合だけ動作する
function amITalkingToMyself(data) {
  return data.from === data.to;
}

function iAmClearlyCrazy(data) {
  $("chatResult").prepend('' + data.from + ' is talking to himself.');
}

mediator.subscribe(amITalkingToMyself, iAmClearlyCrazy);
