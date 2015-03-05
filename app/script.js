$(function() {

  $("button").click(function() {
    var url = $(this).attr("id");

    $.get(url, function(response) {
      var resText;

      if (typeof response === "object") {
        resText = response.setup + ": " + response.punchline;
      } else {
        resText = response;
      }

      $("#ajax-text").text(resText);
    });

  });
});
