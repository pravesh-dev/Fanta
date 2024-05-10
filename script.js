function locomotiveScroll() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

locomotiveScroll();

let mobileNav = document.querySelector("#mobile-nav");
let mobileNavItems = document.querySelectorAll("#mobile-nav a");
let closeNav = document.querySelector("#close-nav");
let openNav = document.querySelector("#open-nav");

mobileNavItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    mobileNavItems.forEach((elm) => {
      elm.classList.remove("active-mobile-nav");
    });
    item.classList.add("active-mobile-nav");
  });
});

closeNav.addEventListener("click", (e) => {
  mobileNav.style.left = "-100%";
});
openNav.addEventListener("click", (e) => {
  mobileNav.style.left = "0%";
});

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#hero-section",
    scroller: "#main",
    start: "15% 16%",
    end: "100% 15%",
    scrub: 4,
  },
});

tl.to(
  "#fanta-img",
  {
    // y: 700,
    // x: -420,
    top: "115%",
    left: "3%",
  },
  "a"
);
tl.to(
  "#orange-cut-img",
  {
    top: "150%",
    left: "26%",
  },
  "a"
);
tl.to(
  "#orange-img",
  {
    top: "165%",
    left: "77%",
    width: "17vw",
  },
  "a"
);
tl.to(
  "#leaf1",
  {
    top: "105%",
    left: "64%",
    rotate: "130deg",
  },
  "a"
);
tl.to(
  "#leaf2",
  {
    top: "105%",
    left: "4%",
    rotate: "130deg",
  },
  "a"
);

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#second-section",
    scroller: "#main",
    start: "10% 16%",
    end: "110% 15%",
    scrub: 4,
  },
});

tl2.to(
  "#fanta-img",
  {
    top: "210%",
    left: "31%",
    width: "38vw",
  },
  "b"
);
tl2.to(
  "#orange-cut-img",
  {
    width: "18vw",
    top: "202%",
    left: "41%",
  },
  "b"
);

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#third-section",
    scroller: "#main",
    start: "10% 86%",
    end: "50% 85%",
    scrub: 4,
  },
});

tl3.from('#coca-image', {
    rotate: '-90deg',
    top: '100%',
    left: '-100%',
}, 'c');
tl3.from('.lemon-img-coca', {
    rotate: '-90deg',
    top: '100%',
    left: '-100%',
}, 'c');
tl3.from('#pepsi-image', {
    rotate: '90deg',
    top: '100%',
    left: '100%',
}, 'c');
tl3.from('.lemon-img-pepsi', {
    rotate: '90deg',
    top: '100%',
    left: '100%',
}, 'c');