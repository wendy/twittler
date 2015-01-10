$(document).ready(function(){
  var $container = $('.container');
  var $timeline = $('.timeline');
  
  //Append tweets to container Function
  var streamTweets = function(i) {
    var index = streams.home.length - 1;
    while(i <= index){
      var tweet = streams.home[i];
      var $tweet = $('<div class="twt"></div>');
      $tweet.append("<span class='twtusrdate'>" + '@' + "<span class='twtusr'>" + tweet.user + "</span>" +
        "<span class='date'>" + moment(tweet.created_at).fromNow() + "</span>" + "</span>" + 
        "<p class='twtmsg'>" + tweet.message + "</p>");
      $tweet.data('time', tweet.created_at);
      $tweet.prependTo($container);
      $tweet.fadeIn('slow');
      i += 1;
    }
  };
  
  streamTweets(0);

  //Refresh Function - appends new tweets to container & updates time 
  var refreshTwts = function() {
    var tweetsShown = $('.twt');
    for(var i = 0; i < tweetsShown.length; i++) {
      var $tweet = $(tweetsShown[i]); 
      $tweet.find('.date').text(moment($tweet.data('time')).fromNow());
    }
    streamTweets(tweetsShown.length);
  };

  //Auto Refresh 
  window.setInterval(function() {
    refreshTwts();
  }, 10000)

  //Refresh Button
  $('.refresh').click(function() {
    refreshTwts();
  });

  //Input guest's tweet
  streams.users.guest = [];
  var $guestMsg = $(".guestmsg");
  $guestMsg.on('keypress',function(e) {
    if(e.keyCode == 13){
      e.preventDefault();
      var message = $(".guestmsg").val();
      var tweet = {};
      tweet.user = "guest";
      tweet.message = message;
      tweet.created_at = new Date();
      addTweet(tweet);

      refreshTwts();
      $guestMsg.val('');
    }
  });

  //timeline function
  var indivTweets = function(user) {
    $timeline.empty();
    var index = streams.users[user].length - 1;
    while (index >= 0) {
      var tweet = streams.users[user][index];
      var $tweet = $('<div class ="indivtwt"></div>');
      $tweet.append(moment(tweet.created_at).format("h:mm a") + "\n" + tweet.message);
      $tweet.appendTo($timeline);
      index -= 1;
    }
  };

  //Click tweet for timeline for that user
  $container.on('click', '.twt', function() {
    var username = $(this).find('.twtusr').text();
    indivTweets(username);

    $(this).find('.twtmsg').after($timeline);


    // $(this).find('.twtusr')
  })

});



