$(document).ready(function(){
  var $body = $('body');

  var index = streams.home.length - 1;
  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<div></div>');
    $tweet.append('@' + tweet.user + " - " + moment(tweet.created_at).fromNow() + "<p>" + tweet.message + "</p>");
    $tweet.appendTo($body);
    index -= 1;
  }

});



