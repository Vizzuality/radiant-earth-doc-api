(function (global) {
  'use strict';

  var sticky = function() {
    var heightLimit = $('.c-header').height();

    if (window.scrollY > heightLimit) {
      $('.tocify-wrapper').addClass('-fixed');
      $('.lang-selector').addClass('-fixed');
      $('#nav-button').addClass('-fixed');
      $('.lang-selector-contain__text').addClass('-hidden');
    }

    if (window.scrollY < heightLimit) {
      $('.tocify-wrapper').removeClass('-fixed');
      $('.lang-selector').removeClass('-fixed');
      $('#nav-button').removeClass('-fixed');
      $('.lang-selector-contain__text').removeClass('-hidden');
    }
  };

  var boxResize = function() {
    var minWidth = ($('.dark-box').width());
    $('.lang-selector').css('width', minWidth);
  };

  $(window).scroll(function() {
    $(sticky);
  });

  $( window ).resize(function() {
    $(boxResize);
  });

  $(boxResize);

})(window);
