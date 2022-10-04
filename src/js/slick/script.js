$(document).ready(function () {
  $('.slider').slick({
    arrows: true,
    infinity: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    centerPadding: '10px',
    centerMode: true,
    speed: 1600,
    autoplaySpeed: 1400,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '-40px',
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
