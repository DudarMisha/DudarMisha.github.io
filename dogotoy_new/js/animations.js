$("#btnNewOrder").click(function() {
    $('html, body').animate({
        scrollTop: $("#order__section").offset().top
    }, 2000);
});

$("#btnNewMore").click(function() {
    $('html, body').animate({
        scrollTop: $("#advantages__section").offset().top
    }, 2000);
});

window.sr = ScrollReveal({
    reset: true
});

//3анімація під логотип

sr.reveal('#header__logo', {
    duration: 1500,
    origin: 'top',
    distance: '100px',
});

//анімація під заголовок

sr.reveal('.promo__title', {
    duration: 1500,
    origin: 'left',
    distance: '100px',
});

//animation for subtitle

sr.reveal('.promo__subtitle', {
    duration: 2000,
    origin: 'top',
    distance: '50px',
});

sr.reveal('.order__wrapper-item-round', {
    duration: 2000,
    origin: 'bottom',
    distance: '50px',
    scale: 1.3
});