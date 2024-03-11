$(document).ready(function () {

    // Implementación de smooth scroll con Jquery
    
    $('a.nav-link').on('click', function (e) {
        e.preventDefault();
        var target = this.hash;
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800, function () {
            window.location.hash = target;
        });
    });


});