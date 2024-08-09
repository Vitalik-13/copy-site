let formContainer = document.querySelector(".form-container");
let formClose = document.querySelector(".form-close");
let listMenu = document.querySelectorAll(".list-menu");
let closest = document.querySelector(".button-closest");
let contact = document.querySelector(".blue");
let menu = document.querySelector(".menu");
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
let firstLinkMenu = document.querySelector(".first");
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

const cursor = document.querySelector(".kursor");
const navMenu = document.querySelector(".nav-menu");
const text = document.querySelector(".main-menu-conatiner");
const buttonsContainer = document.querySelector(".buttons-container");
const logo = document.querySelector(".logo");
let buttonLearnMore = document.querySelectorAll(".button-apsolute");

document.addEventListener("mousemove", (e) => {
  cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
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
closest.addEventListener("mouseover", () => {
  cursor.classList.add("zoomed");
});

closest.addEventListener("mouseout", () => {
  cursor.classList.remove("zoomed");
});
buttonsContainer.addEventListener("mouseout", () => {
  cursor.classList.remove("zoomed");
});
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
buttonLearnMore.forEach((item) =>
  item.addEventListener("mouseover", () => {
    cursor.classList.add("zoomed");
  })
);
buttonLearnMore.forEach((item) =>
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

let burger = document.querySelector(".burger-menu");
let navigationMenu = document.querySelector(".nav-menu");
let closeMenu = document.querySelector(".close");

burger.addEventListener("click", (e) => {
  e.stopPropagation(); // Зупиняє спливання події, щоб запобігти закриттю меню при кліку на бургер
  navigationMenu.classList.add("class-transform");
  body.classList.add("scrool-none");
});

closeMenu.addEventListener("click", (e) => {
  e.stopPropagation(); // Зупиняє спливання події, щоб запобігти закриттю меню при кліку на кнопку закриття
  navigationMenu.classList.remove("class-transform");
  body.classList.remove("scrool-none");
});

body.addEventListener("click", (e) => {
  if (!e.target.closest(".nav-menu") && !e.target.closest(".burger-menu")) {
    navigationMenu.classList.remove("class-transform");
    body.classList.remove("scrool-none");
  }
});

// Додаємо обробник події кліку на nav-menu для запобігання спливання події
navigationMenu.addEventListener("click", (e) => {
  e.stopPropagation();
});
// Обробка .title-span-container
let titleSpanContainers = document.querySelectorAll(".title-span-container");

titleSpanContainers.forEach((itemTitle) => {
  let textBlockContainer = itemTitle.querySelector(".text-block-container");
  let buttonSpan = itemTitle.querySelector(".button-span");

  if (textBlockContainer) {
    itemTitle.addEventListener("mouseover", () => {
      textBlockContainer.classList.add("show-opacity");
    });

    itemTitle.addEventListener("mouseout", () => {
      textBlockContainer.classList.remove("show-opacity");
    });
  }
});
