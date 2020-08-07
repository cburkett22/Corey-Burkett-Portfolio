$(document).ready(function(){
    // card animation
    new WOW().init();

    // about me button slow scroll
    $(".about-btn").click(function() {
        $('html, body').animate({
            scrollTop: $(".intro-container").offset().top
        }, 1000);
    });
    // portfolio button slow scroll
    $(".portfolio-btn").click(function() {
        $('html, body').animate({
            scrollTop: $(".card-container").offset().top
        }, 1000);
    });
    //contact button slow scroll
    $(".contact-btn").click(function() {
        $('html, body').animate({
            scrollTop: $(".contact-container").offset().top
        }, 1000);
    });

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