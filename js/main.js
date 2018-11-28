$(document).ready(function(){
    $('.slide').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 2000,
    });
  });

let burger = document.querySelector(".burger");
let nav__hidden = document.querySelector(".nav__hidden");
burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    nav__hidden.classList.toggle("active");
});