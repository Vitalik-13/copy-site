document.addEventListener("mousemove", (e) => {
  cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
});

let navMenu = document.querySelectorAll(".link-main-menu");
const cursor = document.querySelector(".kursor");
let closest = document.querySelector(".closest a");
navMenu.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.classList.add("zoomed");
  });
});
navMenu.forEach((item) => {
  item.addEventListener("mouseout", () => {
    cursor.classList.remove("zoomed");
    closest.classList.remove("zoomed");
  });
});
closest.addEventListener("mouseover", () => {
  cursor.classList.add("zoomed");
});
closest.addEventListener("mouseout", () => {
  cursor.classList.remove("zoomed");
});
