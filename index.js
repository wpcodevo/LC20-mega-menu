/* =========== Toggle Menu ============ */
const openNav = document.querySelector(".open-btn");
const closeNav = document.querySelector(".close-btn");
const menu = document.querySelector(".nav-list");

openNav.addEventListener("click", () => {
  menu.classList.add("show");
});

closeNav.addEventListener("click", () => {
  menu.classList.remove("show");
});
