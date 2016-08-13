(function($) {
  $.extend($, pubsub);
  //extend(new Observer(), check);
  console.log($);
  $.subscribe('/new/user', function(e, data) {
    var compiledTemplate;
    if (data) {
      compiledTemplate = _.template($("#userTemplate").html());
      $('#users').append(compiledTemplate(data));
    }
  });

  $.subscribe("/new/rating", function(e, data) {
    var compiledTemplate;
    if (data) {
      compiledTemplate = _.template($("#ratingsTemplate").html());
      $("#ratings").append(compiledTemplate(data));
    }
  });

  $("#add").on("click", function(event) {
    event.preventDefault();

    var strUser = $("#twitter_handler").val();
    var strMovie = $("#movie_seen").val();
    var strRating = $("#movie_rating").val();

    $.publish("/new/user", {name: strUser});
    $.publish("/new/rating", {title: strMovie, rating: strRating});

  });

})(jQuery);
