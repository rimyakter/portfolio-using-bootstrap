
//iframe video popup>>magnificPopup.js

jQuery(document).ready(function(){

    $('#video-link').magnificPopup({
        type:'inline',
        midClick: true
    });
});

// team section slider>>owl carousel

$(document).ready(function(){
    $('#team-right').owlCarousel({
        items: 2,
        loop: true,
        autoplay: true,
        smartSpeed: 700,
        autoplayHoverPause: true,
        dots: true,
        responsive: {
            0:{
                items: 1
            },
            480: {
                items: 2
            }
        }
    });

});

//progress-bar>>waypoint.js

$(document).ready(function(){
    $("#progress-element").waypoint(function(){
        $(".progress-bar").each(function(){
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);
        });
        this.distroy();
    },{
        offset: 'bottom-in-view'
    });
});

//service-item>>responsive tabs
$(function(){
    $('#service-tabs').responsiveTabs({
        animate: 'slide'
    });
});

//service-item>>wow.js

$(function(){
    document.documentElement.style.setProperty('--animate-duration', '1s');
});

  //gallary>>magnetic-popup

  $('.gallery').magnificPopup({
    delegate: '.pop-img',
    type: 'image',
    gallery: {
        enabled: true
      }
  });

  //gallary>>mixitUp
  
  var mixer = mixitup('.gallery');

  //testimonial>>owl-carousel

  $(document).ready(function(){
    $('#testimonial-main-slider').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        smartSpeed: 700,
        autoplayHoverPause: true,
        dots: true,
    });

});