$(function(){
    var $btn = $('.burger-btn');
    var $nav = $('.header-nav');
    $btn.click(function(){
        $nav.fadeToggle(300);
        $btn.toggleClass('cross');
        $('body').toggleClass('noscroll');
    });
    if($(window).width()<768){
        $('.header-nav-item>a').click(function(){
            $nav.fadeOut(500);
            $btn.removeClass('cross');
            $('body').removeClass('noscroll');
        });
    }

    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        arrows: false,
    });

    var $win = $(window);
    var $header = $('.home-header');
    var fvHeight = $('.slider').outerHeight();
    
    $win.scroll(function(){
        var value = $(window).scrollTop();
        if(value > fvHeight){
            $header.addClass('change');
        } else {
            $header.removeClass('change');
        }

    });
});