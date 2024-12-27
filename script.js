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
const sec = document.querySelector(".sec");
// const closeEl = document.querySelector(".close");

hamburgerEl.addEventListener("click", (event) => {
  console.log("clicked");
  console.log(event)
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

  // sec.classList.toggle("pt-8")
  // sec.classList.toggle("md:pt-12")
  mobileNavEl.classList.toggle("delay-500")
  mobileNavEl.classList.toggle("h-screen");
  mobileNavEl.classList.toggle("h-0");
  // to sync the slide up with the fading links
  // Links animation
  // opacity + slight vertical slide animation
  // Adjusting the z-index values with a timining specific to the button state to adjust for smoother transitioning
  if(link1.classList.contains("opacity-0")){
    link1.classList.toggle("hidden")
    link2.classList.toggle("hidden")
    link3.classList.toggle("hidden")
    link4.classList.toggle("hidden")
    link5.classList.toggle("hidden")
    setTimeout(() => {
      // links.classList.toggle("hidden")
      // links.classList.toggle("flex")
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
      setTimeout
    },100)
    
  }
  else{
    setTimeout(() => {
      link1.classList.toggle("hidden")
      link2.classList.toggle("hidden")
      link3.classList.toggle("hidden")
      link4.classList.toggle("hidden")
      link5.classList.toggle("hidden")
      // links.classList.toggle("hidden")
      // links.classList.toggle("flex")
    },1000)
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
  }
  // link1.classList.toggle("opacity-0")
  // link2.classList.toggle("opacity-0")
  // link3.classList.toggle("opacity-0")
  // link4.classList.toggle("opacity-0")
  // link5.classList.toggle("opacity-0")
  // link1.classList.toggle("translate-y-3")
  // link2.classList.toggle("translate-y-3")
  // link3.classList.toggle("translate-y-3")
  // link4.classList.toggle("translate-y-3")
  // link5.classList.toggle("translate-y-3")
  // else{
  //     link1.classList.add("opacity-0", "translate-y-3")
  // }
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
// const options = {
//   root: null,
//   threshold: [1],
// };
// const placeholder = document.createElement("div");
// placeholder.style.height = `${stickyNav.offsetHeight}px`;
// placeholder.style.display = "none"; // Initially hidden
// stickyNav.parentNode.insertBefore(placeholder, stickyNav);

// console.log(stickyNav);
// const callback = (entries)=>{
//     entries.forEach(entry =>{
//       if(!entry.isIntersecting){
//         console.log("WE ARE INTERSECTING");// Safari support
//           placeholder.style.display = "block";
//           stickyNav.style.backdropFilter = 'blur(0px)';
//           stickyNav.classList.add("fixed", "top-4", "w-full")
//       }
//       else {
//         // stickyNav.classList.remove("bg-black")
//         // stickyNav.style.backdropFilter = 'blur(0px)';
//         placeholder.style.display = "none";
//         stickyNav.style.backdropFilter = 'blur(10px)';
//         stickyNav.style.webkitBackdropFilter = 'blur(10px)'; 
//         stickyNav.classList.remove("fixed")
//         stickyNav.classList.remove("top-0")
//         stickyNav.classList.remove("w-full")

//         // stickyNav.style.webkitBackdropFilter = 'blur(10px)'; // Safari support
//         // stickyNav.classList.toggle("top-4");
//         console.log("NAHH")
//       }
//     })

// }
const scrollWatcher = document.createElement('div');
scrollWatcher.setAttribute('data-scroll-watcher', '');
stickyNav.before(scrollWatcher);

// Create a placeholder for stickyNav
const placeholder = document.createElement('div');
placeholder.style.height = `${stickyNav.offsetHeight}px`;
placeholder.style.display = 'none'; // Initially hidden
stickyNav.parentNode.insertBefore(placeholder, stickyNav);

const obs = new IntersectionObserver((entries) =>{
  const isIntersecting = entries[0].isIntersecting;

  stickyNav.classList.toggle("fixed", !isIntersecting)
  stickyNav.classList.toggle("top-0", !isIntersecting)

  stickyNav.style.backdropFilter = !isIntersecting? 'blur(40px)' : 'blur(0px)';
  stickyNav.classList.toggle("z-20", !isIntersecting)
  stickyNav.classList.toggle("w-full", !isIntersecting)
  stickyNav.classList.toggle("bg-black", !isIntersecting)
  stickyNav.classList.toggle("bg-opacity-0.5", !isIntersecting)

    // Show/hide the placeholder
    placeholder.style.display = !isIntersecting ? 'block' : 'none';

    // Adjusting the mobile navigation size
    mobileNavEl.style.top = !isIntersecting? '0px' : '-32px';
    // links.style.marginTop = !isIntersecting? 'auto' : '200px';

});
obs.observe(scrollWatcher);

// Reveal animation
function startLoader() {
  let counterElement = document.querySelector(".counter");
  let counterValue = 0;

  function updateCounter(){
      if(counterValue == 100){
          return;
      }

      counterValue += Math.floor(Math.random() * 10) + 1;

      if(counterValue > 100) counterValue = 100;

      counterElement.textContent = counterValue;

      let delay = Math.floor(Math.random() * 200) + 50;
      setTimeout(updateCounter, delay);
  }

  updateCounter();
}
startLoader();

gsap.to(".counter", 0.25, {
  delay: 3.5,
  opacity: 0,
  onComplete: () => {
    document.querySelector(".counter").classList.remove("z-50");
    document.querySelector(".counter").classList.add("-z-50");
  },
})

gsap.to(".first", 1.5, {
  delay: 3.5,
  translateY: -1000,
  stagger: {
      amount: 0.5,
  },
  ease: "power4.inOut",
  onComplete: () => {
    document.querySelector(".overlay").classList.remove("z-[2]");
    document.querySelector(".overlay").classList.add("-z-50");
  },
});
gsap.to(".second", 1.5, {
  delay: 6,
  translateX: -1000,
  stagger: {
      amount: 0.5,
  },
  ease: "power4.inOut",
  // onComplete: () => {
  //   document.querySelector(".second").style.zIndex = "0";
  // },
});

// document.querySelector(".counter").classList.toggle('z-1');

