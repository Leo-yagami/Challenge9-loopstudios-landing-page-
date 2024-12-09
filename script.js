const mobileNavEl = document.querySelector(".mobileNav");
const hamburgerEl = document.querySelector(".hamburger");
const closeEl = document.querySelector(".close");

hamburgerEl.addEventListener("click", () => {
  console.log("clicked");
  mobileNavEl.classList.toggle("hidden");
});

closeEl.addEventListener("click", () => {
  console.log("close mobile nav");
  mobileNavEl.classList.toggle("hidden");
});
