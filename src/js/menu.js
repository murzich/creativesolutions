// menu.js
;$(window).scroll(function() {

  if ($(window).scrollTop() > 100) {
      $('.menu').addClass('_scroll');
  } else {
      $('.menu').removeClass('_scroll');
  }
});

;$(document).ready(function(){
  $('.menu__toggler').click(function() {
    $('.navbar-collapse').toggleClass('collapse _show');
    $('body').toggleClass('_active-menu');
  });
  $('.menu__link').click(function() {
    $('.navbar-collapse').removeClass('_show').addClass('collapse');
    $('body').removeClass('_active-menu');    
  });
});

;$(document).ready(function(){
  // Hide Header on on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('.menu').outerHeight();

  $(window).scroll(function(event){
      didScroll = true;
  });

  setInterval(function() {
      if (didScroll) {
          hasScrolled();
          didScroll = false;
      }
  }, 250);

  function hasScrolled() {
      var st = $(this).scrollTop();
      
      // Make sure they scroll more than delta
      if(Math.abs(lastScrollTop - st) <= delta)
          return;
      
      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
      if (st > lastScrollTop && st > navbarHeight){
          // Scroll Down
          $('.menu').removeClass('nav-down').addClass('nav-up');
          $('a').blur();
      } else {
          // Scroll Up
          if(st + $(window).height() < $(document).height()) {
              $('.menu').removeClass('nav-up').addClass('nav-down');
          }
      }
      
      lastScrollTop = st;
  }
});
// menu.js END