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
    // еффект переключення слайдів
    
});