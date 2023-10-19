const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");
});

// I just had to add this, otherwise the styles applied when the hamburger menu was pressed remain
// after the 800px breakpoint is reached, even though the hamburger menu
// was then invisible and unclickable.
window.addEventListener("resize", () => {
  if (window.innerWidth >= 800) nav.classList.remove("nav--visible");
});
