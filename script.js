$(document).ready(function(){
  var $container = $('.container');

  var streamTweets = function(i) {
    var index = streams.home.length - 1;
    while(i <= index){
      var tweet = streams.home[i];
      var $tweet = $('<div class="twt"></div>');
      $tweet.append("<span class='twtusr'>" + i + '  @' + tweet.user + "</span>" +
        "<span class='date'>" + " - " + moment(tweet.created_at).fromNow() + "</span>"  + 
        "<p class='twtmsg'>" + tweet.message + "</p>");
      $tweet.prependTo($container);
      i += 1;
    }
  };
  
  streamTweets(0);

  //Refresh Button - appends new tweets to $container
  $('.refresh').click(function() {
    var tweetsShown = $('.twt').length;
    streamTweets(tweetsShown);
  });

  //Highlight hovered tweet
  $('.twt').mouseenter(function() {
    $(this).addClass('hoveredtwt');
  });

  $('.twt').mouseleave(function() {
    $(this).removeClass('hoveredtwt');
  });
  
  //Click User Name for more tweets from thats user
  $('.twtusr').click(function() {

  });
});



