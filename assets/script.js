$(document).ready(function(){
    // Card animation
    new WOW().init();

    // Portfolio card "Read More" buttons
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
    // Portfolio button slow scroll
    $(".portfolio-btn").click(function() {
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
    function validateForm() {
        const name =  $("#name").value;
        if (name == "") {
            $(".status").innerHTML = "Name cannot be empty";
            return false;
        }
        const email =  $("#email").value;
        if (email == "") {
            $(".status").innerHTML = "Email cannot be empty";
            return false;
        } else {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!re.test(email)){
                $(".status").innerHTML = "Email format invalid";
                return false;
            }
        }
        const subject =  $("#subject").value;
        if (subject == "") {
            $(".status").innerHTML = "Subject cannot be empty";
            return false;
        }
        const message =  $("#message").value;
        if (message == "") {
            $(".status").innerHTML = "Message cannot be empty";
            return false;
        }
        $(".status").innerHTML = "Sending...";
      }
});