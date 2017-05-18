   /*
   $(document).ready(function(){     
       $(window).scroll(function() {
         if ($(window).scrollTop() > 930) {
             $('.auxJS').addClass('menuSecond');
             $('.auxJS2').addClass('firstMenu');
             $('.auxJS').removeClass('firstMenu');
             //$('.auxJS2').css('background','linear-gradient(to left, #C33764 , #1D2671) !important')
             //$('.auxJS2').css('background','-webkit-linear-gradient(to left, #C33764 , #1D2671) !important')
             //$('.navbar-brand').css({'background-image':'url(../../img/header/logo3.png)'});
         }
         else {
             $('.auxJS').addClass('firstMenu');
             $('.auxJS').removeClass('menuSecond');
             $('.auxJS2').removeClass('firstMenu');
             //$('.navbar-brand').css({'background-image':'url(../../img/header/logo.png)'});
         }
    });
/*
$('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top - 50}, 1500, 'easeInOutExpo');
    event.preventDefault();
});*/
});
