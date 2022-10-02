$(".slider").each((function(){$(this).parent(),$(this).slick({arrows:!0,dots:!1,slidesToShow:3,speed:1e3,autoplaySpeed:800,responsive:[{breakpoint:768,settings:{slidesToShow:3}},{breakpoint:767,settings:{slidesToShow:1}}]})}));var e=$(".pagingInfo");$(".slider").on("init reInit afterChange",(function(s,i,t,n){var o=(t||0)+1;e.text(o+"/"+i.slideCount)}));
//# sourceMappingURL=index.c2d29efd.js.map
