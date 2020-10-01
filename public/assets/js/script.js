$(document).ready(function(){
    // Card animation
    new WOW().init();

    // Projects card "Read More" buttons
    $("#card-one-btn").on("click", function(event){
        event.preventDefault();
        window.open("https://pitchitadventures.herokuapp.com");
    });

    $("#card-two-btn").on("click", function(event){
        event.preventDefault();
        window.open("https://yummy-burger-logger.herokuapp.com/");
    });

    $("#card-three-btn").on("click", function(event){
        event.preventDefault();
        window.open("https://github.com/cburkett22/12-Employee-Tracker");
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

    // Node Mailer
    
});