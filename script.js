"use strict";

const modal = document.querySelector(".modal");
const overaly = document.querySelector(".overlay");
const openAccount = document.querySelectorAll(".btn--show-modal");
const closeModalBtn = document.querySelector(".btn--close-modal");
const header = document.querySelector(".header");
const logo = document.querySelector(".nav__logo");
const scrollDowntoBtn = document.querySelector(".btn--scroll-to");
const section1 = document.getElementById("section--1");
const h1 = document.querySelector("h1");
const docLinks = document.querySelectorAll(".nav__link");
const Links = document.querySelector(".nav__links");
const nav = document.querySelector(".nav");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

//```````````````````````   Page  Navigation

Links.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e.target);
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// ```````                       Modal Operation
// Necessary functions for dry code
const openModal = function (e) {
  modal.classList.remove("hidden");
  overaly.classList.remove("hidden");
};

const closeModal = function (e) {
  modal.classList.add("hidden");
  overaly.classList.add("hidden");
};
openAccount.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    openModal();
  });
});
closeModalBtn.addEventListener("click", function (e) {
  e.preventDefault();
  closeModal();
});
overaly.addEventListener("click", function (e) {
  e.preventDefault();
  closeModal();
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if ((modal.classList.contains = "hidden")) {
      closeModal();
    }
  }
});

//````````````````````````      SELECTING ELEMENTS
// const message = document.createElement("div");
// message.classList.add("cookie-message");
// message.textContent = "We use cookies for improved functionality and analytics";
// message.innerHTML = `We use cookies for improved functionality and analytics. <button class="btn btn--close-cookies">Got it!</button>`;
// header.before(message);
// document
//   .querySelector(".btn--close-cookies")
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     message.remove();
//   });

//``````````````````````````````        Cookies Propmt
const html = ` 
<div class="cookie-message">
    We use cookies for improved functionality and analytics.
    <button class="btn btn--close-cookies">Got it!</button>
</div>`;

header.insertAdjacentHTML("afterbegin", html);
document
  .querySelector(".btn--close-cookies")
  .addEventListener("click", function () {
    document.querySelector(".cookie-message").remove();
  });

const mesage = document.querySelector(".cookie-message");
mesage.style.backgroundColor = "#37383d";
mesage.style.width = "120%";
mesage.style.height =
  Number.parseFloat(getComputedStyle(mesage).height, 10) + 30 + "px";
console.log(logo.getAttribute("designer"));
logo.alt = "Minimalist Bank Logo";
logo.setAttribute("company", "Bankist");
console.log(logo.dataset.versionNumber);

// ```````````````````````````      Implementing Smooth Scroll
scrollDowntoBtn.addEventListener("click", function (e) {
  e.preventDefault();
  //   const s1cords = section1.getBoundingClientRect();
  //   console.log(s1cords);
  //   window.scrollTo({
  //     left: s1cords.left + window.pageXOffset,
  //     top: s1cords.top + window.pageYOffset,
  //     behavior: "smooth",
  //   });
  section1.scrollIntoView({ behavior: "smooth" });
});

// ```````````````````````      event Propagation
const randomNoGen = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const randomColor = function () {
  return `rgb(${randomNoGen(0, 255)}, ${randomNoGen(0, 255)}, ${randomNoGen(
    0,
    255
  )})`;
};

// ````````````````         Dom Traversing
console.log(h1.querySelectorAll(".highlight"));

//``````````````````     Building Tapped Component

tabsContainer.addEventListener("click", function (e) {
  e.preventDefault();
  const clicked = e.target.closest(".operations__tab");
  console.log(clicked);
  if (!clicked) return;
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  clicked.classList.add("operations__tab--active");

  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

// Menu Fade Out Animation
nav.addEventListener("mouseover", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = 0.5;
    });
    logo.style.opacity = 0.5;
  }
});
nav.addEventListener("mouseout", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = 1;
    });
    logo.style.opacity = 1;
  }
});
// Sticky Navigation
// const initialCords = section1.getBoundingClientRect();
// window.addEventListener("scroll", function (e) {
//   console.log(window.scrollY);
//   if (window.scrollY > initialCords.top) {
//     nav.classList.add("sticky");
//   } else {
//     nav.classList.remove("sticky");
//   }
// });
// const observerCallBack = function (entries, observer) {
//   entries.forEach((entry) => {
//     console.log(entry);
//   });
// };
// const observerOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };
// const observer = new IntersectionObserver(observerCallBack, observerOptions);
// observer.observe(section1);
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};
const stickyOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};
const headerObserver = new IntersectionObserver(stickyNav, stickyOptions);
headerObserver.observe(header);

// Reveal Section
const allSections = document.querySelectorAll(".section");
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  else entry.target.classList.remove("section--hidden");

  observer.unobserve(entry.target);
};
const revealOption = {
  root: null,
  threshold: 0.15,
};
const sectionObserver = new IntersectionObserver(revealSection, revealOption);
allSections.forEach((sec) => {
  sectionObserver.observe(sec);
  // sec.classList.add("section--hidden");
});

// ``````````````````` Lazy Loading

const imgTargets = document.querySelectorAll("img[data-src]");
const loadImage = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  else entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });
  observer.unobserve(entry.target);
};
const imgOptions = {
  root: null,
  threshold: 0,
};

const imgObserver = new IntersectionObserver(loadImage, imgOptions);
imgTargets.forEach((img) => {
  imgObserver.observe(img);
});

// ```````````````````````````````    Building A Slider
// Slider
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
