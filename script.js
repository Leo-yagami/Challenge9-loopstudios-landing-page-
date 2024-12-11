const mobileNavEl = document.querySelector(".mobileNav");
const hamburgerEl = document.querySelector(".buttonSwitcher");
const body = document.body;
const spanEl1 = document.querySelector('.span1')
const spanEl2 = document.querySelector('.span2')
const spanEl3 = document.querySelector('.span3')
// const closeEl = document.querySelector(".close");

hamburgerEl.addEventListener("click", () => {
  console.log("clicked");
  hamburgerEl.classList.toggle("hamburger");
  hamburgerEl.classList.toggle("close");
  // Classes for animation
  spanEl1.classList.toggle("rotate-45");
  spanEl1.classList.toggle("translate-y-2");
  spanEl2.classList.toggle("w-0");
  spanEl2.classList.toggle("w-7");
  spanEl3.classList.toggle("-rotate-45");
  spanEl3.classList.toggle("-translate-y-2");
  ////////


  mobileNavEl.classList.toggle("hidden");
  // locking the scroll to the mobile nav 
  body.classList.toggle('overflow-hidden')
});

// closeEl.addEventListener("click", () => {
//   console.log("close mobile nav");
//   mobileNavEl.classList.toggle("hidden");
//   document.querySelector('.navigation').classList.toggle('overflow-hidden')
  
// });
