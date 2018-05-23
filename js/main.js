// results slider
$(document).ready(function(){
  $('.results-slider').slick({
    inifite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
      }
      }
    ]
  });
});
// burger menu
$(document).ready(function(){
  var burgerMenu = $('.header-top__nav');
  var burgerMenuBtn = $('.responsive-menu__btn');
  
  burgerMenuBtn.on('click', function () {
    burgerMenu.slideToggle('header-top__nav-list--active');
  })

});
