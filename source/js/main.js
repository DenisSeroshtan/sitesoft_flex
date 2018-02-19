//preloader
window.onload = function() {
  document.querySelector('.wrapper').classList.add('loaded');
};


$(function() {
  (function() {
    $('.features__slider').mySlider({
      buttons: false,
      autoSlide: true,
      duration: 3000,
      equalHeights: true
    });
  })();

  (function() {
    $('.footer__slider').mySlider({
      buttons: true,
      dots: false,
      btnArray: ['',''],
    });
  })();

  (function () {
    /*=================
     smooth scroll to header
     =================*/
    $('a[href^="#js"]').on('click', function(e) {
      e.preventDefault();
      var target = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 'slow', 'swing');
    });

  })();

  /*=================
   mobile menu
   =================*/
  (function () {
    $('.hamburger').on('click', function (e) {
      e.preventDefault();
      var $this = $(this),
          menu = $this.attr('href'),
          elemMenu = $(menu);
      elemMenu.slideToggle(600, function () {
        if(elemMenu.css('display') === "none") {
          elemMenu.removeAttr('style');
        }
      });
      $this.toggleClass('is-active');
    })
  })();

  /*=================
   accordeon features
   =================*/
  $(".acco__item-title").on('click', function (e) {
    e.preventDefault();

    var
        $this = $(this),
        currentText = $this.next(),
        container = $this.closest('.features__acco');
        item = container.find('.acco__item'),
        content = item.find('.acco__item-content'),
        title = item.find('.acco__item-title');

    $this.toggleClass('icon-up icon-down');
    currentText.stop(true, true).slideToggle();

    content.not(currentText).slideUp();
    title.not($this).removeClass('icon-down').addClass('icon-up');

  });

});