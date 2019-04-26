$(window).on("load", function() {
  $(".loader .inner").fadeOut(1000, function () {
    $(".loader").fadeOut(250);
  });
})

const nav = $("#navigation");
const navTop = nav.offset().top;

$("#navigation li a").click(function(e) {
  e.preventDefault();

  var targetElement = $(this).attr("href");
  var targetPosition = $(targetElement).offset().top;
  $("html, body").animate({ scrollTop: targetPosition - 79}, "slow");
});
