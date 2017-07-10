(function (global) {
  'use strict';

  var openMenu= function() {
    $('.c-header__open-menu').click(function() {
      $('.c-mobile-menu').addClass('-open');
    });
  };

  var closeMenu= function() {
    $('.c-header__close-menu').click(function() {
      $('.c-mobile-menu').removeClass('-open');
    });
  };

  $(openMenu);
  $(closeMenu);


})(window);
