!function(){$(document).ready((function(){$(".slider").slick({arrows:!0,dots:!1,slidesToShow:3,autoplay:!0,centerPadding:"10px",centerMode:!0,speed:1e3,autoplaySpeed:800,responsive:[{breakpoint:1279,settings:{centerMode:!0,centerPadding:"10px",slidesToShow:3}},{breakpoint:767,settings:{slidesToShow:1,centerPadding:"10px",centerMode:!0}}]})}));var e=$(".pagingInfo");$(".slider").on("init reInit afterChange",(function(n,t,o,i){var d=(o||0)+1;e.text(d+"/"+t.slideCount)}))}();
//# sourceMappingURL=index.3621bdcf.js.map