AOS.init({ once: true });

let menuicon = document.querySelector(".menu-icon");
let menulist = document.querySelector(".menu-list");
let body = document.body;

menuicon.addEventListener("click", function () {
    menuicon.classList.toggle("active-icon");
    menulist.classList.toggle("show-heading");
    body.classList.toggle("overflow-lg-hidden");
});

let navheading = document.querySelectorAll(".nav-heading");

navheading.forEach((e) => {
    e.addEventListener("click", () => {
        menuicon.classList.remove("active-icon");
        menulist.classList.remove("show-heading");
        body.classList.remove("overflow-lg-hidden");
    })
});

let play = document.querySelectorAll(".play-btn");

play.forEach((e) => {
    e.addEventListener("click", function () {
        e.closest(".img-box").lastElementChild.classList.toggle("z-2");
    });
});

let accordionheading = document.querySelectorAll(".accordion-heading");

accordionheading.forEach((e) => {
    e.addEventListener("click", function () {
        let accordion = document.querySelector(".accordion1.active-accordion");
        e.parentElement.classList.toggle("active-accordion");
        accordion && accordion.classList.remove("active-accordion");
    });
});

let accordionicon = document.querySelectorAll(".accordion-icon");

accordionicon.forEach((a) => {
    a.addEventListener("click", function () {
        a.parentElement.classList.remove("active-accordion")
    });
});

var gallerySlider = new Swiper('.gallery-slider', {
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'coverflow',
    loop: true,
    centeredSlides: true,
    slidesPerView: 2.5,
    coverflowEffect: {
        rotate: 0,
        stretch: 100,
        depth: 150,
        modifier: 1.5,
        slideShadows: false,
    }
});


let tickbox = document.querySelector(".tick-box");

tickbox.addEventListener("click", function () {
    tickbox.classList.toggle("acitve-tick");
});

let preloader = document.querySelector(".preloader");

body.classList.add("overflow-hidden");
preloader.classList.add("d-grid");

setTimeout(() => {
    body.classList.remove("overflow-hidden");
    preloader.classList.remove("d-grid");
}, 2000);

let scrolltopbtn = document.querySelector(".scrolltop");

scrolltopbtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
    });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        scrolltopbtn.classList.add("d-grid");
    }
    else {
        scrolltopbtn.classList.remove("d-grid");
    }
})