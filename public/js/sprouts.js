// YOUR CODE GOES HERE

var page = 2

$(window).scroll(function() {
  if($(window).scrollTop() + (window).innerHeight == $(document).height()) {
    $.get("/tweets.json?page=" + page, function(tweets) {
      if ( tweets.length > 0 ){
        page++;
      }
      tweets.forEach(function(tweets) {
        $('.tweets').append('<li class="tweet"><div class="body">'
        + tweets.text + '</div><div class="user">' + tweets.username
        + '</div></li>');
      });
    });
  };
});



// var page = 2;
//
// $(function() {
//
//   $(".more-sprouts").on("click", function() {
//     event.preventDefault();
//
//     $.ajax({
//     type: 'get',
//     dataType: 'json',
//     url: '/tweets.json?page=' + page,
//     success: function(tweets) {
//       page++;
//
//       tweets.forEach(function(tweets) {
//         $('.tweets').append('<li class="tweet"><div class="body">'
//         + tweets.text + '</div><div class="user">' + tweets.username
//         + '</div></li>');
//
//       });
//     }
//   });
//   });
// });
