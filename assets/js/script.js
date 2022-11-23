/* Particles.init({
    //options
    selector: '.background',
    maxParticles: 150,
    color: '#153462',
    speed: 0.3,
    connectParticles: true
}); */

$(document).click(function(e) {
    $("ul.navbar-nav > li").removeClass("active");
    $(this).addClass("active");
});