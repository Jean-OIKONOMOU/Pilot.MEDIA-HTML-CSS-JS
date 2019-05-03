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


  var url = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffeed.pippa.io%2Fpublic%2Fshows%2Fwords-matter&api_key=gxhefr3me3gps8jxc4oyinpybuokklciigkqfbfm&count=100";
fetch(url)
.then(function(resp) {
return resp.json();
})
.then(function(json) {

//console.log(json);

for (var i = 0; i<json.items.length; i++) {

var object = json.items[i];



chien.insertAdjacentHTML('afterbegin',

  `  <div id="truc2" class="swiper-wrapper">
     <div id= "truc" class="swiper-slide">
       <div class="imgBx">
         <audio controls id="lecteur" src=${object.enclosure.link} type="audio/mp3" preload="none"> </audio>
       </div>
       <div class="details pb-1">
         <h4>${object.title}</span></h4>
       </div>
     </div>
     </div>`

);
}


})
