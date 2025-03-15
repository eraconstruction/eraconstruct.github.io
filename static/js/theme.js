  $(function(){

  /*==== Mobile Menu  ====*/
  $('.mobile_menu .inner_mobile_nav_itmes').meanmenu({
  meanScreenWidth: "991",
  meanMenuContainer: ".mobile_menu",
  onePage: true,
  });

  /*=============== sticky menu ================= */
  var header = $('.main_menu_area');
  $(window).on('scroll',function(){
    if($(window).scrollTop()>50){
        $('.main_menu_area').addClass('sticky');
    }
    else{
        header.removeClass('sticky');
    }
  });

  /*============= main nav icons popup  ===========*/
  $('.main_nav_icons i').click(function(){
  $('.nav_icon_popup').addClass('icon_popup');
  });
  $('.inner_nav_icon_popup i').click(function(){
  $('.nav_icon_popup').removeClass('icon_popup');
  });

  new WOW().init();

  /*========== slider active js =============*/
  $('.slider_actives').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        }
      }
    ]
  });
 /*========== slider active js =============*/


 /*========== shop slider js =============*/
 $('.img_active').slick({

  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 3000,
  arrows: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: true,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        arrows: false,
      }
    }
  ]
  });

   /*========== brand active js =============*/
 $('.brand_active').slick({

  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 3000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,

      }
    }
  ]
  });
   /*========== testimnial active js =============*/
 $('.testimonial_active').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 3000,
  arrows: true,
  dots:false,
  responsive:[
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        arrows: false,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrows: false,
      }
    },
  ]
  });

  /*========== testimnial active js =============*/
  $('.all_color_testimonial').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 3000,
    arrows: true,
    dots:false,
    responsive:[
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
    });
  /*========== blog  js =============*/
 $('.blog_slid').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 3000,
  arrows: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        arrows: false,
      }
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        slidesToShow: 1,
      }
    }
  ]
});
/*============== blog js ============== */

/*============== hover 3d js ============== */
$(".ab_single_item").hover3d({
    selector:".inner_ab",
    shine:true,
});


/*========== h2 p slider js =============*/
 $('.port_active').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 3000,
  arrows: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    },
  ]
  });
  /*========= countdown js ==========*/
$('[data-countdown]').each(function() {
  var $this = $(this), finalDate = $(this).data('countdown');
  $this.countdown(finalDate, function(event) {
    $this.html(event.strftime('<div class="tx_single_countdown"><span class="witr_digit">%-D</span> <p>Days</p></div><div class="tx_single_countdown"><span class="witr_digit">%-H</span> <p>Hours</p></div> <div class="tx_single_countdown"><span class="witr_digit">%M</span> <p>Minutes</p></div> <div class="tx_single_countdown"><span class="witr_digit">%S</span> <p>Seconds</p></div>'));
  });
});
  /*============== counter js ============== */
  $('.counter').counterUp({
    delay: 20,
    time: 3000
  });

  /* ========== veno box js ========= */
  new VenoBox({
    selector: '.s_video',
  });
  /*========= direction hover ===========*/
  $(".snake").snakeify({
  speed: 400
  });

  /*========= isotope active ==========*/
  /* portfolio active */
  function twrportfolio(){
  var portfolio = $(".grid");
  if( portfolio.length ){
      portfolio.imagesLoaded( function() {
          portfolio.isotope({
              itemSelector: ".pitem",
              layoutMode: 'masonry',
              filter:"*",
              animationOptions :{
                  duration:1000
              },
              hiddenStyle: {
                  opacity: 0,
                  transform: 'scale(.4)rotate(60deg)',
              },
              visibleStyle: {
                  opacity: 1,
                  transform: 'scale(1)rotate(0deg)',
              },
              stagger: 0,
              transitionDuration: '0.9s',
              masonry: {}
          });
          $(".portfolio_nav ul li").on('click',function(){
              $(".portfolio_nav ul li").removeClass("current_menu_item");
              $(this).addClass("current_menu_item");

              var selector = $(this).attr("data-filter");
              portfolio.isotope({
                  filter: selector,
                  animationOptions: {
                      animationDuration: 750,
                      easing: 'linear',
                      queue: false
                  }
              });
              return false;
          });

      });
  }
  }
  twrportfolio();

  /*==== scrollUp  ====*/
  $.scrollUp({
    scrollText: '<i class="icofont-thin-up"></i>',
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade'
  });

  // var siteCarousel = function () {
  //   $('.gallery-section').owlCarousel({
  //     center: false,
  //     items: 1,
  //     loop: true,
  //     stagePadding: 0,
  //     margin: 0,
  //     autoplay: true,
  //     // nav: true,
  //   });
  // }
  // siteCarousel();

  $('.gallery-section').magnificPopup({
    delegate: '.preview_img', // child items selector, by clicking on it popup will open
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile',
    image: {
      verticalFit: true,
    },
  });


  });

  let __semio__params = {
    graphcommentId: "<site-id>", // make sure the id is yours

    behaviour: {
        // HIGHLY RECOMMENDED
        uid: "<page-id>", // uniq identifer for the comments thread on your page (ex: your page id)
    },

    // configure your variables here
}

/* - - - DON'T EDIT BELOW THIS LINE - - - */

function __semio__onload() {
    __semio__gc_graphlogin(__semio__params)
}

(function () {
    let gc = document.createElement('script');
    gc.type = 'text/javascript';
    gc.async = true;
    gc.onload = __semio__onload;
    gc.defer = true;
    gc.src = 'https://integration.graphcomment.com/gc_graphlogin.js?' + Date.now();
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(gc);
})();
