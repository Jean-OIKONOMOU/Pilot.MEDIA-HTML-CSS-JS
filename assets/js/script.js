$(window).on("load", function() {
  $(".loader").fadeOut(1000);

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
          mousewheel: true,
          slideShadows : true,
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          hide: true,
        },
        keyboard: {
        enabled: true,
        },

        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: true,
        },
      })
})


// GET API

var url = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffeed.pippa.io%2Fpublic%2Fshows%2Fwords-matter&api_key=gxhefr3me3gps8jxc4oyinpybuokklciigkqfbfm&count=100";
fetch(url)
.then(function(resp) {
return resp.json();
})
.then(function(json) {

//console.log(json);

for (var i = 0; i<json.items.length; i++) {

var object = json.items[i];


truc.insertAdjacentHTML('afterbegin',

  `

    <div  class="swiper-slide">
    <div class="details pb-1">

    </div>

      <div class="imgBx">
           <img height="170px" src="https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/1/a/7/f/299c-cc9b-4e71-901a-0652162ae3e5">
          <iframe width=\"100%\" height=\"120\" src=\"https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2FMOMBO%2Fmombo-11-clubbers-radio-show-feb19%2F&amp;hide_cover=1\" frameborder=\"0\"></iframe>\n
      </div>


    </div>


  `
);
}
})
