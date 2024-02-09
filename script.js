const burger = document.querySelector(".burger");
const menu = document.getElementById("menu");

let barHeight = 100;
window.addEventListener("scroll", (e) => {
  if (window.scrollY >= barHeight) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-70px";
  }
});

burger.addEventListener("click", () => {
  menu.classList.toggle("visible");
});
