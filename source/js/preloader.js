//preloader
window.onload = function() {
  document.querySelector('.wrapper').classList.add('loaded');
};


$(function() {
  $('.features__slider').mySlider({
    buttons: false,
    autoSlide: true,
    duration: 3000,
    equalHeights: true
  });

  /*=================
   accordeon features
   =================*/
  $(".acco__title-link").on('click', function (e) {
    e.preventDefault();

    var
        $this = $(this),
        item = $this.closest('.acco__item-title'),
        currentText = item.next();

    item.toggleClass('icon-up icon-down');
    currentText.stop(true, true).slideToggle();
  });

});