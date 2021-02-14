const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__counter-title-procent'),
      lines = document.querySelectorAll('.skills__counter-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});     

document.querySelector(".menu__list").addEventListener("click",function(e) {
    menu.classList.remove('active');
});
