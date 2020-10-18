$(document).ready(function(){
    
//Scroll to  top
    $(window).scroll(function(){
        if($(this).scrollTop()>250){
            $('#scrollToUp').fadeIn();
        } else {
            $('#scrollToUp').fadeOut();
        }
    });

    $('#scrollToUp').click(function(){
        $("html, body").animate({
            scrollTop:0}, 2000);
    });


$("#sticker").sticky({topSpacing:0});




});