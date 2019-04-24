$(window).on("load", function() {
  $(".loader .inner").fadeOut(1000, function () {
    $(".loader").fadeOut(250);
  });

  var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 45,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows : true,
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: true,
        },
      })
})



const nav = $("#navigation");
const navTop = nav.offset().top;

$("#navigation li a").click(function(e) {
  e.preventDefault();

  var targetElement = $(this).attr("href");
  var targetPosition = $(targetElement).offset().top;
  $("html, body").animate({ scrollTop: targetPosition - 79}, "slow");
});

var randomimage = faker.image.image(); // Caitlyn Kerluke

var matches = document.querySelectorAll("div.imgBx > img");

for (var i = 0; i<matches.length; i++) {
  matches[i].src = randomimage;
};

var url = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffeed.pippa.io%2Fpublic%2Fshows%2Fwords-matter";
fetch(url)
  .then(function(resp) {
    return resp.json();
  })
  .then(function(data) {
    console.log(data);
    console.log(data.items[0].title);
  })
