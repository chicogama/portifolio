/* Particles.init({
    //options
    selector: '.background',
    maxParticles: 150,
    color: '#f9f9f9',
    speed: 0.3,
    connectParticles: true
}); */

$(document).ready(function() {
    $('ul.navbar-nav > li')
        .click(function(e) {
            $('ul.navbar-nav > li')
                .removeClass('active');
            $(this).addClass('active');
        });
});