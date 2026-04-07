// Typing
var typed = new Typed(".typing", {
    strings: ["Web Developer", "Laravel Enthusiast", "UI Designer"],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true
});

// AOS
AOS.init();

// Particles
particlesJS("particles-js", {
    particles: {
        number: { value: 60 },
        size: { value: 3 },
        move: { speed: 2 },
        line_linked: { enable: true }
    }
});