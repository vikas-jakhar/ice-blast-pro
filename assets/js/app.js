AOS.init();

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
    menuicon.classList.remove("avtive-icon");
    menulist.classList.remove("show-heading");
    body.classList.remove("overflow-lg-hidden");
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
    })
})