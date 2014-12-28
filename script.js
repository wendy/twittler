$(document).ready(function(){
  var $container = $('.container');
  var $timeline = $('.timeline');

  var streamTweets = function(i) {
    var index = streams.home.length - 1;
    while(i <= index){
      var tweet = streams.home[i];
      var $tweet = $('<div class="twt"></div>');
      $tweet.append(i + '  @' + "<span class='twtusr'>" + tweet.user + "</span>" +
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
  //Click User Name for more tweets from thats user
  // $container.on('click', '.twtusr', function(){
  //   var username = $(this).text();
  //   indivTweets(username);
  // });


});



