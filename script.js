$(document).ready(function(){
  var $body = $('body');
  $body.html('');

  var index = streams.home.length - 1;
  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<div></div>');
    $tweet.append('@' + tweet.user + "<p>" + tweet.message + "</p>");
    $tweet.appendTo($body);
    index -= 1;
  }

});