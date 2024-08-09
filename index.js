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
  let sliderWrapper1 = document.querySelector(".myswiper1");

  function toggleAnimation() {
    sliderWrapper1.classList.toggle("stop-animation");
  }

  function initializeAnimation() {
    sliderWrapper1.classList.add("animation");

    if (window.innerWidth < 800) {
      sliderWrapper1.addEventListener("click", toggleAnimation);
    } else {
      sliderWrapper1.addEventListener("mousemove", () => {
        sliderWrapper1.classList.add("stop-animation");
      });

      sliderWrapper1.addEventListener("mouseout", () => {
        sliderWrapper1.classList.remove("stop-animation");
      });
    }
  }

  initializeAnimation();

  window.addEventListener("resize", () => {
    sliderWrapper1.removeEventListener("click", toggleAnimation);
    sliderWrapper1.removeEventListener("mousemove", () => {
      sliderWrapper1.classList.add("stop-animation");
    });
    sliderWrapper1.removeEventListener("mouseout", () => {
      sliderWrapper1.classList.remove("stop-animation");
    });

    initializeAnimation();
  });
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
let foto = document.querySelectorAll(".foto");
const buttonsContainer = document.querySelector(".buttons-container");
const logo = document.querySelector(".logo");
let firstLinkMenu = document.querySelector(".first");
let menu = document.querySelector(".menu");
let closest = document.querySelector(".button-closest");
let listMenu = document.querySelectorAll(".list-menu");
let contact = document.querySelector(".blue");
let formContainer = document.querySelector(".form-container");
let formClose = document.querySelector(".form-close");
let inputGroup = document.querySelectorAll(".group");
let send = document.querySelector(".fom-button");

contact.addEventListener("click", () => {
  formContainer.classList.add("display-blosk");
});
formClose.addEventListener("click", () => {
  formContainer.classList.remove("display-blosk");
});
listMenu.forEach((list) => {
  list.addEventListener("click", () => {
    navMenu.classList.remove("class-transform");
    body.classList.remove("blur-effect");
  });
});

firstLinkMenu.addEventListener("click", () => {
  menu.classList.toggle("transform-tranleteY");
  body.classList.toggle("scrool-none");
  firstLinkMenu.classList.toggle("color");
});
closest.addEventListener("click", () => {
  menu.classList.toggle("transform-tranleteY");
  body.classList.toggle("scrool-none");
  firstLinkMenu.classList.toggle("color");
});
document.addEventListener("mousemove", (e) => {
  cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
});
closest.addEventListener("mouseover", () => {
  cursor.classList.add("zoomed");
});

closest.addEventListener("mouseout", () => {
  cursor.classList.remove("zoomed");
});

navMenu.addEventListener("mouseover", () => {
  cursor.classList.add("zoomed");
});

navMenu.addEventListener("mouseout", () => {
  cursor.classList.remove("zoomed");
});
formClose.addEventListener("mouseover", () => {
  cursor.classList.add("zoomed");
});

formClose.addEventListener("mouseout", () => {
  cursor.classList.remove("zoomed");
});
send.addEventListener("mouseover", () => {
  cursor.classList.add("zoomed");
});

send.addEventListener("mouseout", () => {
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
inputGroup.forEach((item) =>
  item.addEventListener("mouseover", () => {
    cursor.classList.add("zoomed");
  })
);
inputGroup.forEach((item) =>
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

  if (x > rect.width * 0.5) {
    nextButton.classList.add("opacity");
    prevButton.classList.remove("opacity");
  } else if (x < rect.width * 0.5) {
    nextButton.classList.remove("opacity");
    prevButton.classList.add("opacity");
  } else {
    nextButton.classList.remove("opacity");
    prevButton.classList.remove("opacity");
  }
});

swiperWrapper.addEventListener("mouseleave", () => {
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
  menu.classList.remove("transform-tranleteY");
});

closeMenu.addEventListener("click", (e) => {
  e.stopPropagation();
  navigationMenu.classList.remove("class-transform");
  body.classList.remove("scrool-none");
});

body.addEventListener("click", (e) => {
  if (!e.target.closest(".nav-menu") && !e.target.closest(".burger-menu")) {
    navigationMenu.classList.remove("class-transform");
    body.classList.remove("scrool-none");
  }
});

navigationMenu.addEventListener("click", (e) => {
  e.stopPropagation();
});

document.addEventListener("DOMContentLoaded", () => {
  // Затримка у 4 секунди (4000 мілісекунд)
  setTimeout(() => {
    // Отримання елементів
    let one = document.querySelector(".btn-text-one");
    let two = document.querySelector(".btn-text-two");

    // Додавання класу, який забезпечить opacity: 1
    if (one) one.classList.add("visible");
    if (two) two.classList.add("visible");
  }, 4000);
});

AOS.init();
