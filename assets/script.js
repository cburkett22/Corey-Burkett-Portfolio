$(document).ready(function(){
    $(".about-btn").click(function() {
        $('html, body').animate({
            scrollTop: $(".intro-container").offset().top
        }, 1000);
    });

    $(".portfolio-btn").click(function() {
        $('html, body').animate({
            scrollTop: $(".card-container").offset().top
        }, 1000);
    });

    $(".contact-btn").click(function() {
        $('html, body').animate({
            scrollTop: $(".contact-container").offset().top
        }, 1000);
    });

});