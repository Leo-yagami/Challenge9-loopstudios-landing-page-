const mobileNavEl = document.querySelector(".mobileNav");
const hamburgerEl = document.querySelector(".buttonSwitcher");
const body = document.body;
const spanEl1 = document.querySelector('.span1')
const spanEl2 = document.querySelector('.span2')
const spanEl3 = document.querySelector('.span3')
const navOpsEl = document.querySelector('.navOps');
const links = document.querySelector('.links')
const link1 = document.querySelector('.link1')
const link2 = document.querySelector('.link2')
const link3 = document.querySelector('.link3')
const link4 = document.querySelector('.link4')
const link5 = document.querySelector('.link5')
const stickyNav = document.querySelector('.navigation');
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

  mobileNavEl.classList.toggle("delay-500")
  mobileNavEl.classList.toggle("h-screen");
  mobileNavEl.classList.toggle("h-0");
  // to sync the slide up with the fading links
  // Links animation
  // opacity + slight vertical slide animation
  link1.classList.toggle("opacity-0")
  link2.classList.toggle("opacity-0")
  link3.classList.toggle("opacity-0")
  link4.classList.toggle("opacity-0")
  link5.classList.toggle("opacity-0")
  link1.classList.toggle("translate-y-3")
  link2.classList.toggle("translate-y-3")
  link3.classList.toggle("translate-y-3")
  link4.classList.toggle("translate-y-3")
  link5.classList.toggle("translate-y-3")
  // delay logic
  link1.classList.toggle("delay-[0.5s]")
  link2.classList.toggle("delay-[0.4s]")
  link3.classList.toggle("delay-[0.3s]")
  link4.classList.toggle("delay-[0.2s]")
  link5.classList.toggle("delay-[0.1s]")
  link1.classList.toggle("delay-[0.1s]")
  link2.classList.toggle("delay-[0.2s]")
  link3.classList.toggle("delay-[0.3s]")
  link4.classList.toggle("delay-[0.4s]")
  link5.classList.toggle("delay-[0.5s]")
  // navOpsEl.classList.toggle("hidden")
  // setTimeout(() =>{
  //   mobileNavEl.classList.toggle("z-10");
  // }, 500);
  // locking the scroll to the mobile nav 
  body.classList.toggle('overflow-hidden')
});

// Implementing intersection observer sticky navigation
const options = {
  root: null,
  threshold: [1],
};

console.log(stickyNav);
const callback = (entries)=>{
    entries.forEach(entry =>{
      if(!entry.isIntersecting){
        console.log("WE ARE INTERSECTING");
          stickyNav.style.backdropFilter = 'blur(10px)';
          stickyNav.style.webkitBackdropFilter = 'blur(10px)'; // Safari support
          stickyNav.classList.toggle("fixed")
      }
      else {
        stickyNav.style.backdropFilter = 'blur(0px)';
        // stickyNav.style.webkitBackdropFilter = 'blur(10px)'; // Safari support
        // stickyNav.classList.toggle("top-4");
        console.log("NAHH")
      }
    })

}
const obs = new IntersectionObserver(callback, options);
obs.observe(stickyNav);
