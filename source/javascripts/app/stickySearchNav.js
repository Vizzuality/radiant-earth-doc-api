(function (global) {
  'use strict';

  var sticky = function() {
    var heightLimit = $('.c-header').height();

    if (window.scrollY > heightLimit) {
      $('.tocify-wrapper').addClass('-fixed');
      $('.lang-selector').addClass('-fixed');
    }

    if (window.scrollY < heightLimit) {
      $('.tocify-wrapper').removeClass('-fixed');
      $('.lang-selector').removeClass('-fixed');
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
