$(document).ready(function(){
  var $container = $('.container');

  var streamTweets = function(i) {
    var index = streams.home.length - 1;
    while(i <= index){
      var tweet = streams.home[i];
      var $tweet = $('<div class="twt"></div>');
      $tweet.append("<p class='twtusr'>" + '@' + tweet.user + " - " + 
        "<span class='date'>" + moment(tweet.created_at).fromNow() + "</span>" + "</p>" + 
        "<p class='twtmsg'>" + tweet.message + "</p>");
      $tweet.prependTo($container);
      i += 1;
    }
  };
  
  streamTweets(0);


  $('button').click(function() {
    var tweetShown = $('div').length
    streamTweets(tweetShown);
  });
});



