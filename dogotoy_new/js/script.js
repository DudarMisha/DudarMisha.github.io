// ініціалізація слайдера
new Swiper('.image-slider',{
    // стрілки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    // навігація та булети
    pagination: {
        el: '.swiper-pagination',
        // булети
        clickable: true,    
    },
    // курсор перетягування
    grabCursor: true,
    // автовисота
    autoHeight: true,
    // бескінечність прокручування
    loop: true,
    // швидкість переключення слайдів
    speed: 900,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        577: {
            slidesPerView: 2,
            spaceBetween: 2
        },
        769: {
            slidesPerView: 1,
        },
        1200: {
            slidesPerView: 2,
            spaceBetween: -30
        }
    } 
});

///validate

function validateForms(form) {
    $(form).validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: "required",
            check: "required"
        },
        messages: {
            name: {
                required: "Введіть ваше ім'я",
                minlength: jQuery.validator.format("Введіть {0} символи!")
            },
            phone: "Введіть ваш номер телефону",
            check: "Поставте відмітку"
        }
    }); 
};

validateForms('#consultation');

$('form').submit(function(e) {
    e.preventDefault();

    if (!$(this).valid()) {
        return;
    }

    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('.overlay, #thanks').fadeIn('slow');
        $('.modal__close').on('click', function() {
            $('.overlay, #thanks').fadeOut('slow');
        });

        $('form').trigger('reset');
    });
    return false;
});

/// paralax 

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

/// akordeon

$('.question__wrapper-item-title').click(function(event) {
    if($('.question__wrapper').hasClass('one')) {
        $('.question__wrapper-item-title').not($(this)).removeClass('active');
        $('.question__wrapper-item-text').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
});



