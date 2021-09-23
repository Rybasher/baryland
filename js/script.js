let burger = document.querySelector(".burger");
let nav = document.querySelector('.nav');

burger.addEventListener('click', function () {
    burger.classList.toggle("active")
    nav.classList.toggle("active")
})