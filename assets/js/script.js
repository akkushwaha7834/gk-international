(function ($) {
  "use strict";
  //
  var i = 0;
  var txt = "Gauravi International: Your Global Textile Partner";
  var speed = 50;

  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("banner-head").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  };

  document.addEventListener("DOMContentLoaded", (event) => {
    typeWriter();
  });
  // mobile menu dropdows
  $(".moblie-dropdwon").on("click", function () {
    var current_dropdown = $(this).next(".dropdown-mb-menu");
    $(".dropdown-mb-menu").not(current_dropdown).slideUp();
    current_dropdown.slideToggle();
    return false;
  });

 

  // WOW JS
  if ($(".wow").length) {
    var wow = new WOW({
      mobile: false,
    });
    wow.init();
  }
})(jQuery);


$(document).ready(function() {
const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
    effect: 'slide',
});

});