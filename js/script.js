"use strict";
///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

////////////////////////////////////////////////////////
// Slide photo

const galleryItemEls = document.querySelectorAll(".gallery-item");

const animationImgEls = document.querySelectorAll(".animation-img");

const slidePhoto = function () {
  galleryItemEls.forEach((galleryItemEl) =>
    setTimeout(() => {
      galleryItemEl.classList.remove("hidden");
    }, 0)
  );
  animationImgEls.forEach((animationImgEl) =>
    setTimeout(() => {
      animationImgEl.classList.remove("hidden");
    }, 0)
  );
};
slidePhoto();

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Close mobile navigation

const allLinks = document.querySelectorAll("a.main-nav-link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

$(document).ready(function (link) {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

// // Smooth scrolling animation another code
// const allLinks = document.querySelectorAll("a:link");
// console.log(allLinks);

// allLinks.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const href = link.getAttribute("href");

//     // Scroll back to top
//     if (href === "#")
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });

//     // Scroll to other links on same page
//     if (href !== "#" && href.startsWith("#")) {
//       const sectionEL = document.querySelector(href);
//       // console.log(sectionEL);
//       sectionEL.scrollIntoView({ behavior: "smooth" });
//     }

//     // Go to other pages
//     if (this.getAttribute("href").charAt(0) !== "#") {
//       console.log(href);
//       window.open(href, "_self");
//     }

//     // Close mobile navigation
//     if (link.classList.contains("main-nav-link"))
//       headerEl.classList.toggle("nav-open");
//   });
// });

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    // console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// RANDOM PHOTOS FUNCTION
const randomPhotos = function (
  catygoryOfGallery,
  nameOfGallery,
  numberOfImg,
  numberOfPhotos
) {
  const ImagesEl = [];

  const randomImg = function () {
    for (let i = 1; i <= numberOfPhotos; i++) {
      ImagesEl.push(`img/${catygoryOfGallery}/${nameOfGallery}/${i}.jpg`);
    }
  };
  randomImg();
  const size = ImagesEl.length;
  const x = Math.floor(size * Math.random());

  $(`.${catygoryOfGallery}-img${numberOfImg}`).attr("src", ImagesEl[x]);
};

// RANDOM REALIZATION PHOTOS
randomPhotos("realizacje", "lazienki", 1, 16);
randomPhotos("realizacje", "kuchnie", 2, 6);
randomPhotos("realizacje", "domy", 3, 4);
randomPhotos("realizacje", "ogrody", 4, 11);
randomPhotos("realizacje", "inne", 5, 18);

// // Sprawdź, czy w localStorage jest ustawiona flaga odświeżenia
// const isRefreshed = localStorage.getItem("isRefreshed");

// // Jeśli nie ma flagi lub jest ustawiona na false, wykonaj odświeżenie
// if (!isRefreshed) {
//   // Ustaw flagę w localStorage na true
//   localStorage.setItem("isRefreshed", "true");

//   // Wywołaj odświeżenie strony z pominięciem pamięci podręcznej
//   location.reload(true);
// }

// // Sprawdź, czy w localStorage jest ustawiona flaga odświeżenia
// const isRefreshed = localStorage.getItem("isRefreshed");

// // Usuń flagę z localStorage
// localStorage.removeItem("isRefreshed");

// // Wywołaj odświeżenie strony z pominięciem pamięci podręcznej
// location.reload(true);
