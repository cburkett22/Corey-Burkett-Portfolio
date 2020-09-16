$(document).ready(function(){
    // Card animation
    new WOW().init();

    // Projects card "Read More" buttons
    $("#card-one-btn").on("click", function(event){
        event.preventDefault();
        window.open("https://cburkett22.github.io/03-Password-Generator/");
    });

    $("#card-two-btn").on("click", function(event){
        event.preventDefault();
        window.open("https://cburkett22.github.io/04-Code-Quiz/");
    });

    $("#card-three-btn").on("click", function(event){
        event.preventDefault();
        window.open("https://cburkett22.github.io/05-Day-Planner/");
    });

    $("#card-four-btn").on("click", function(event){
        event.preventDefault();
        window.open("https://cburkett22.github.io/06-Server-Side-APIs/");
    });

    $("#card-five-btn").on("click", function(event){
        event.preventDefault();
        window.open("https://jandrews16.github.io/virtual-cookbook/");
    });

    $("#card-six-btn").on("click", function(event){
        event.preventDefault();
        window.open("https://cburkett22.github.io/10-Team-Profile-Generator/");
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

    // Contact
    
});