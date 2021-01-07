$(document).ready(function(){
    // Card animation
    new WOW().init();

    // Projects card "View App" buttons
    $("#card-one-btn").on("click", function(event){
        event.preventDefault();
        window.open("https://pitch-it-adventures.herokuapp.com/");
    });

    $("#card-two-btn").on("click", function(event){
        event.preventDefault();
        window.open("https://yummy-burger-logger.herokuapp.com/");
    });

    $("#card-three-btn").on("click", function(event){
        event.preventDefault();
        window.open("https://instagram-clone-71013.web.app/");
    });

    // About me button slow scroll
    $(".about-btn").click(function() {
        $('html, body').animate({
            scrollTop: $(".intro-container").offset().top
        }, 1000);
    });
    // Projects button slow scroll
    $(".projects-btn").click(function() {
        $('html, body').animate({
            scrollTop: $(".card-container").offset().top
        }, 1000);
    });
    // Contact button slow scroll
    $(".contact-btn").click(function() {
        $('html, body').animate({
            scrollTop: $(".contact-container").offset().top
        }, 1000);
    });
});