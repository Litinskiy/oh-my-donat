// $(document).ready(function () {
//   $('.slider').slick({
//     arrows: true,
//     dots: false,
//     slidesToShow: 3,
//     autoplay: true,
//     speed: 1000,
//     autoplaySpeed: 800,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 550,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   });
//   if ($(this).find('.item').length > 1) {
//     $(this).siblings('.slides-numbers').show();
//   }

//   $(this).on('afterChange', function (event, slick, currentSlide) {
//     $sliderParent
//       .find('.slides-numbers .active')
//       .html(helpers.addZeros(currentSlide + 1));
//   });

//   var sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
//   $sliderParent
//     .find('.slides-numbers .total')
//     .html(helpers.addZeros(sliderItemsNum));
// });
var helpers = {
  addZeros: function (n) {
    return n < 10 ? '0' + n : '' + n;
  },
};

function sliderInit() {
  var $slider = $('.slider');
  $slider.each(function () {
    var $sliderParent = $(this).parent();
    $(this).slick({
      arrows: true,
      dots: false,
      slidesToShow: 3,
      // autoplay: true,
      speed: 1000,
      autoplaySpeed: 800,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

    // if ($(this).find('.slider__item').length > 1) {
    //   $(this).siblings('.slides-numbers').show();
    // }

    // $(this).on('afterChange', function (event, slick, currentSlide) {
    //   $sliderParent
    //     .find('.slides-numbers .active')
    //     .html(helpers.addZeros(currentSlide + 1));
    // });

    // var sliderItemsNum = $(this)
    //   .find('.slick-slide')
    //   .not('.slick-cloned').length;
    // $sliderParent
    //   .find('.slides-numbers .total')
    //   .html(helpers.addZeros(sliderItemsNum));
  });
}

sliderInit();

var $status = $('.pagingInfo');
var $slickElement = $('.slider');

$slickElement.on(
  'init reInit afterChange',
  function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + '/' + slick.slideCount);
  }
);
