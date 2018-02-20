// slider.js
;$(document).ready(function(){
  $('#slider--works').slick({
    lazyLoad: 'ondemand',
    dots: true,
    nextArrow: '<svg class="slick-next works__arrow"><use xlink:href="./img/svg-icons.svg#arrow-right" /></svg>',
    prevArrow: '<svg class="slick-prev works__arrow"><use xlink:href="./img/svg-icons.svg#arrow-left" /></svg>',
  });
  $('#slider--teams').slick({
    dots: true,
    nextArrow: '<svg class="slick-next team__arrow"><use xlink:href="./img/svg-icons.svg#arrow-right" /></svg>',
    prevArrow: '<svg class="slick-prev team__arrow"><use xlink:href="./img/svg-icons.svg#arrow-left" /></svg>',
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
  });
});
// slider.js END