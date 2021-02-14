const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    responsive: {
        320: {
          edgePadding: 20,
          gutter: 20,
          items: 1,
          nav: true
        },
        768: {
          items: 1,
          nav: false
        }
    }
});


$(document).ready(function() {
    var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    if(iOS){
        $(".call-ordering").css("font-size","10px");
    }
});


document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});

$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
  $(this)
    .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
    .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
});

function toggleSlide(item) {
  $(item).each(function(i) {
    $(this).on('click', function(e) {
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    })
  });
}
toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item__back');

//modal
$('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
});

$('.modal__close').on('click', function() {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
});

$('.button_mini').each(function(i) {
    $(this).on('click', function() {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    })
});


$('input[name=phone]').mask("+7 (999) 999-99-99");

//validations

$('.button_submit').on("click",function() {

    $name = $("#name").val();
    $phone = $("#phone").val();
    $email = $("#email").val();

    if($name != "" && $phone != "" && $email != ""){
          $.ajax({
              type: "POST",
              url: "mailer/smart.php",
              data: {name : $name, email: $email, phone: $phone }
          }).done(function() {
              $(this).find("input").val("");
              $('#consultation, #order').fadeOut();
              $('form').trigger('reset');
          }).success(function(){
            $.notify("success");
            $('.overlay, #thanks').fadeIn('slow');
          });
    }else{
      $.notify("error");
    }
});

// pageup and smooth scroll

$(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn();    
    } else {
      $('.pageup').fadeOut();
    }
});

$("#up-button").click(function(){
  $("html, body").animate({scrollTop: $("#up").offset().top+"px"});
  return false;
});

// animations

new WOW().init();

