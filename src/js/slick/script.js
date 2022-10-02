$(document).ready(function () {
  $('.slider').slick({
    arrows: true,
    dots: false,
    slidesToShow: 3,
    // autoplay: true,
    centerPadding: '10px',
    centerMode: true,
    speed: 1000,
    autoplaySpeed: 800,
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          centerMode: true,
          centerPadding: '10px',
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerPadding: '10px',
          centerMode: true,
        },
      },
    ],
  });
});

var $status = $('.pagingInfo');
var $slickElement = $('.slider');

$slickElement.on(
  'init reInit afterChange',
  function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + '/' + slick.slideCount);
  }
);
