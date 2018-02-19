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
  $(".acco__item-title").on('click', function (e) {
    e.preventDefault();

    var
        $this = $(this),
        currentText = $this.next();

    $this.toggleClass('icon-up icon-down');
    currentText.stop(true, true).slideToggle();
  });

});