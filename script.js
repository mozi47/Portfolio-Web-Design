//sticky navbar
const navbar = document.getElementById("home");
const heroSection = document.querySelector(".hero");

document.addEventListener("scroll", () => {
  heroHeight = heroSection.getBoundingClientRect().height;
  navbarHeight = navbar.offsetHeight;

  if (window.pageYOffset >= heroHeight - navbarHeight) {
    navbar.classList.add("bg-light");
    navbar.classList.remove("bg-dark");
  } else {
    navbar.classList.remove("bg-light");
    navbar.classList.add("bg-dark");
  }
});

//Hamburger
const open = document.getElementById("open");
const close = document.getElementById("close");

const mobileNav = document.querySelector(".hamburger .mobile-nav");

open.addEventListener("click", () => {
  mobileNav.classList.add("show");
});

close.addEventListener("click", () => {
  mobileNav.classList.remove("show");
});

//typewriting effect
const wordspan = document.querySelector(".hero-section .content h1 .type-text");
const words = ["Designer", "Developer", "Programmer"];
let currIndex = "";
let text = "";
let index_i = 0;
let index_j = 0;
let isDelete = false;
let typeSpeed = 100;

//IIFE Function
(function typewrite() {
  if (index_i == words.length) {
    index_i = 0;
  }

  if (!isDelete) {
    typeSpeed = 100;
    currIndex = words[index_i];
    text = currIndex.slice(0, ++index_j);

    wordspan.textContent = text;

    if (text.length == currIndex.length) {
      isDelete = true;
      typeSpeed = 2000;
    }
  } else {
    typeSpeed = 100;
    text = currIndex.slice(0, --index_j);
    wordspan.textContent = text;
    if (index_j == 0) {
      index_i++;
      isDelete = false;
      typeSpeed = 500;
    }
  }

  setTimeout(typewrite, typeSpeed);
})();

//slick slideshow
$(document).ready(function () {
  $(".slider").slick({
    arrows: false,
    dots: true,
    appendDots: ".dots",
    dotsClass: ".dots",
  });
});

//smooth scroll effect
var scroll = new SmoothScroll('.navbar a[href*="#"]', {
  speed: 800,
});
