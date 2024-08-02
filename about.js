const cursor = document.querySelector(".kursor");
const navMenu = document.querySelector(".nav-menu");
const text = document.querySelector(".main-menu-conatiner");
let foto = document.querySelectorAll(".foto-animation img");
const buttonsContainer = document.querySelector(".buttons-container");
const logo = document.querySelector(".logo");

document.addEventListener("mousemove", (e) => {
  cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
});

navMenu.addEventListener("mouseover", () => {
  cursor.classList.add("zoomed");
});

navMenu.addEventListener("mouseout", () => {
  cursor.classList.remove("zoomed");
});

logo.addEventListener("mouseover", () => {
  cursor.classList.add("zoomed");
});

logo.addEventListener("mouseout", () => {
  cursor.classList.remove("zoomed");
});

buttonsContainer.addEventListener("mouseover", () => {
  cursor.classList.add("zoomed");
});

buttonsContainer.addEventListener("mouseout", () => {
  cursor.classList.remove("zoomed");
});

foto.forEach((item) =>
  item.addEventListener("mouseover", () => {
    cursor.classList.add("zoomed");
  })
);
foto.forEach((item) =>
  item.addEventListener("mouseout", () => {
    cursor.classList.remove("zoomed");
  })
);

let header = document.querySelector(".header");

document.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  if (scrollY > 25) {
    header.classList.add("fixed");
  } else if (scrollY > 10) {
    header.classList.remove("fixed");
  }
});

let body = document.querySelector(".body");
let content = document.querySelector(".content"); // Додайте клас до всього контенту, який має бути розмитим

let burger = document.querySelector(".burger-menu");
let navigationMenu = document.querySelector(".nav-menu");
let closeMenu = document.querySelector(".close");

burger.addEventListener("click", (e) => {
  e.stopPropagation(); // Зупиняє спливання події, щоб запобігти закриттю меню при кліку на бургер
  navigationMenu.classList.add("class-transform");
  body.classList.add("scrool-none");
  content.classList.add("blur-effect");
});

closeMenu.addEventListener("click", (e) => {
  e.stopPropagation(); // Зупиняє спливання події, щоб запобігти закриттю меню при кліку на кнопку закриття
  navigationMenu.classList.remove("class-transform");
  body.classList.remove("scrool-none");
  content.classList.remove("blur-effect");
});

body.addEventListener("click", (e) => {
  if (!e.target.closest(".nav-menu") && !e.target.closest(".burger-menu")) {
    navigationMenu.classList.remove("class-transform");
    body.classList.remove("scrool-none");
    content.classList.remove("blur-effect");
  }
});

// Додаємо обробник події кліку на nav-menu для запобігання спливання події
navigationMenu.addEventListener("click", (e) => {
  e.stopPropagation();
});
AOS.init();
