// Inicialización de los tooltips de Bootstrap

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Inicialización de jQuery


$(document).ready(function () {

    // Implementación de smooth scroll
    
    $('a.nav-link').on('click', function (e) {
        e.preventDefault();
        var target = this.hash;
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800, function () {
            window.location.hash = target;
        });
    });

    // Implementación de alert al presionar enviar

    $('#enviarCorreo').click(function() {
        alert('El correo fue enviado correctamente...');
    });


});