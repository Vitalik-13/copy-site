// Ініціалізація Swiper
new Swiper(".myswiper1", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    clickable: true,
  },
});

document.addEventListener("DOMContentLoaded", () => {
  тів;
  let sliderWrapper1 = document.querySelector(".swiper-wrapper1");

  function handleAnimation() {
    if (window.innerWidth < 800) {
      // На екранах менше 800px
      sliderWrapper1.classList.add("animation");
      sliderWrapper1.addEventListener("click", () => {
        if (sliderWrapper1.classList.contains("animation")) {
          sliderWrapper1.classList.remove("animation");
        } else {
          sliderWrapper1.classList.add("animation");
        }
      });
    } else {
      sliderWrapper1.classList.add("animation");
      sliderWrapper1.addEventListener("mousemove", () => {
        sliderWrapper1.classList.remove("animation");
      });

      sliderWrapper1.addEventListener("mouseout", () => {
        sliderWrapper1.classList.add("animation");
      });
    }
  }

  handleAnimation();

  window.addEventListener("resize", handleAnimation);
});

new Swiper(".myswiper2", {
  slidesPerView: 3.5,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    clickable: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

window.addEventListener("resize", updateSwiperView);
updateSwiperView();
function updateSwiperView() {
  const swiper = document.querySelector(".myswiper2").swiper;
  if (window.innerWidth <= 960) {
    swiper.params.slidesPerView = 1.5;
    swiper.params.spaceBetween = 20;
  } else if (window.innerWidth <= 1270) {
    swiper.params.slidesPerView = 2.5;
  } else {
    swiper.params.slidesPerView = 3.5;
  }
  swiper.update();
}

window.addEventListener("resize", updateSwiperView);
updateSwiperView();

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

const swiperWrapper = document.querySelector(".slider-wrapper");
const nextButton = document.querySelector(".new-button");
const prevButton = document.querySelector(".new-button-next");

swiperWrapper.addEventListener("mousemove", (e) => {
  const rect = swiperWrapper.getBoundingClientRect();
  const x = e.clientX - rect.left;

  // Show next button when mouse is in the right half of the swiper-wrapper
  if (x > rect.width * 0.5) {
    nextButton.classList.add("opacity");
    prevButton.classList.remove("opacity");
  }
  // Show prev button when mouse is in the left half of the swiper-wrapper
  else if (x < rect.width * 0.5) {
    nextButton.classList.remove("opacity");
    prevButton.classList.add("opacity");
  }
  // Hide both buttons when mouse is in the center area
  else {
    nextButton.classList.remove("opacity");
    prevButton.classList.remove("opacity");
  }
});

swiperWrapper.addEventListener("mouseleave", () => {
  // Hide buttons only if not hovering over the buttons
  if (!nextButton.matches(":hover") && !prevButton.matches(":hover")) {
    nextButton.classList.remove("opacity");
    prevButton.classList.remove("opacity");
  }
});

nextButton.addEventListener("mouseenter", () => {
  nextButton.classList.add("opacity");
  prevButton.classList.remove("opacity");
});

prevButton.addEventListener("mouseenter", () => {
  prevButton.classList.add("opacity");
  nextButton.classList.remove("opacity");
});

nextButton.addEventListener("mouseleave", () => {
  swiperWrapper.dispatchEvent(new Event("mousemove"));
});

prevButton.addEventListener("mouseleave", () => {
  swiperWrapper.dispatchEvent(new Event("mousemove"));
});

let body = document.querySelector(".body");
let content = document.querySelector(".content");

let burger = document.querySelector(".burger-menu");
let navigationMenu = document.querySelector(".nav-menu");
let closeMenu = document.querySelector(".close");

burger.addEventListener("click", (e) => {
  e.stopPropagation();
  navigationMenu.classList.add("class-transform");
  body.classList.add("scrool-none");
  content.classList.add("blur-effect");
});

closeMenu.addEventListener("click", (e) => {
  e.stopPropagation();
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

navigationMenu.addEventListener("click", (e) => {
  e.stopPropagation();
});

AOS.init();
