
const header = document.querySelector("#header");
const intro = document.querySelector("#intro");
const introH = intro.offsetHeight;
const scrollBtn = document.querySelectorAll('[data-scroll]');
const navToggle = document.querySelector('#navToggle');
const nav = document.querySelector('#nav');
const navItem = document.querySelectorAll('nav a');
const accordionHeader = document.querySelectorAll('[data-name="accordeon-header"]');


// -- fixed header
window.onscroll = function() {
    if (window.pageYOffset >= introH - 67) {
        header.classList.add("fixed"); 
    } else {
        header.classList.remove("fixed");
    }
};


// -- scroll getElement
scrollBtn.forEach(function(item) {
    item.addEventListener('click', function(event) {
        event.preventDefault();

        const blockId = document.querySelector('#' + this.dataset.scroll);
        const blockOfset = blockId.offsetTop - 67;
        window.scrollTo({ top: blockOfset, behavior: 'smooth' })
        
        navItem.forEach(function(item) {
            item.classList.remove('active');
            nav.classList.remove('active');
            navToggle.classList.remove('active');
        });
        this.classList.add('active');
    });
});


// -- nav toggle
navToggle.addEventListener('click', function(event) {
    event.preventDefault();

    nav.classList.toggle('active');
    this.classList.toggle('active');
});


// -- accordion
accordionHeader.forEach(function(item) {
    item.addEventListener('click', function() {
        this.closest('.accordion__item').classList.toggle('active');
    });
});


// -- slider 
new Swiper('.swiper1', {
    slidesPerView: 'auto',
    loop: true,
    loopedSlides: 2,
    spaceBetween: 200,
    centeredSlides: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },

    navigation: {
        nextEl: '.reviews__btn--next',
        prevEl: '.reviews__btn--prev'
    },
});

new Swiper('.swiper2', {
    slidesPerView: 'auto',
    loop: true,
    loopedSlides: 2,
    spaceBetween: 200,
    centeredSlides: true,

    navigation: {
        nextEl: '.reviews__btn--next',
        prevEl: '.reviews__btn--prev'
    },
});































