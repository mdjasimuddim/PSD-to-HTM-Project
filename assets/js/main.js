$(document).ready(function(){
    //CounterUp
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    //Mangific Popup image
    $('.image-link').magnificPopup({
        type:'image',
        gallery:{
            enabled:true
        }
    });
     //Projects Popup image
     $('.project-link').magnificPopup({
        type:'image',
        gallery:{
            enabled:true
        }
    });
    //Mangific Popup video
    $('.video-link').magnificPopup({
        type:'iframe'
    });
    //Testimonials Slider
    $('.testimonials').slick({
        arrows:false,
        dots:true,
        autoplay:true,
        loop:true,
        autoplaySpeed: 2000
    });
    //slick slider
    $('.clients').slick({
        arrows:false,
        dots:false,
        autoplay:true,
        loop:true,
        autoplaySpeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive:[
            {
                breakpoint: 480,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    });
    //Isotope Filter
    var $grid = $('.projects-item').isotope({
        //options
    })
    $('.projects-menu').on('click', 'li', function(){
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            // options
            filter:filterValue
          });
    })
    $('.projects-menu').on('click', 'li', function(){
        $(this).siblings(".active").removeClass('active');
        $(this).addClass("active")
    })
    
})