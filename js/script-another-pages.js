"use strict";
///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const header2El = document.querySelector(".header2");

btnNavEl.addEventListener("click", function () {
  header2El.classList.toggle("nav-open");
});

////////////////////////////////////////////////////////////
// Add HTML code with cars img
let container, photoName;
const addImgCar = function (catygoryOfGallery, nameOfGallery, numberOfPhotos) {
  const arrNr = Array.from({ length: numberOfPhotos }, (_, i) => i + 1);

  arrNr.forEach((nr) => {
    // const timestamp = new Date().getTime(); // Unikalny znacznik czasu
    const html = `
              <figure class="gallery-item">
                <img
                  class="img section-img"
                  tabindex="0"
                  src="img/${catygoryOfGallery}/${nameOfGallery}/${nr}.jpg"
                  border="0"
                  alt="photo of ${photoName} realization"
                />
              </figure>`;
    container.insertAdjacentHTML("beforeend", html);
  });
};

if (
  window.location.pathname.endsWith("/domy.html") ||
  window.location.pathname.endsWith("/domy")
) {
  container = document.querySelector(".house");
  container.innerHTML = "";
  photoName = "house";
  addImgCar("realizacje", "domy", 4);
} else if (
  window.location.pathname.endsWith("/inne.html") ||
  window.location.pathname.endsWith("/inne")
) {
  container = document.querySelector(".another");
  container.innerHTML = "";
  photoName = "another";
  addImgCar("realizacje", "inne", 18);
} else if (
  window.location.pathname.endsWith("/kuchnie.html") ||
  window.location.pathname.endsWith("/kuchnie")
) {
  container = document.querySelector(".kitchen");
  container.innerHTML = "";
  photoName = "kitchen";
  addImgCar("realizacje", "kuchnie", 6);
} else if (
  window.location.pathname.endsWith("/lazienki.html") ||
  window.location.pathname.endsWith("/lazienki")
) {
  container = document.querySelector(".bathroom");
  container.innerHTML = "";
  photoName = "bathroom";
  addImgCar("realizacje", "lazienki", 16);
} else if (
  window.location.pathname.endsWith("/ogrody.html") ||
  window.location.pathname.endsWith("/ogrody")
) {
  container = document.querySelector(".garden");
  container.innerHTML = "";
  photoName = "garden";
  addImgCar("realizacje", "ogrody", 11);
}

///////////////////////////////////////////////////////////
// OPEN GALLERY

const sectionGalleryItemEl = document.querySelectorAll(".gallery-item img");
const PopupEl = document.querySelector(".popup");
const PopupCloseEl = document.querySelector(".popup-close");
const PopupImgEl = document.querySelector(".popup-img");
const arrowLeftEl = document.querySelector(".popup-arrow--left");
const arrowRightEl = document.querySelector(".popup-arrow--right");
const footerEl = document.querySelectorAll(".footer a");
const btnBoxEl = document.querySelectorAll(".btn-box a");
const navEl = document.querySelectorAll(".main-nav-list a");

let currentImgIndex;

const showNextImg = function () {
  if (currentImgIndex === sectionGalleryItemEl.length - 1) {
    currentImgIndex = 0;
  } else {
    currentImgIndex++;
  }
  PopupImgEl.src = sectionGalleryItemEl[currentImgIndex].src;
};

const showPreviousImg = function () {
  if (currentImgIndex === 0) {
    currentImgIndex = sectionGalleryItemEl.length - 1;
  } else {
    currentImgIndex--;
  }
  PopupImgEl.src = sectionGalleryItemEl[currentImgIndex].src;
};

const closePopup = function () {
  PopupEl.classList.add("popup-fade-out");
  const tabIndexOn = function (element) {
    element.setAttribute("tabindex", 0);
  };
  setTimeout(function () {
    PopupEl.classList.add("hidden-popup");
    PopupEl.classList.remove("popup-fade-out");
    navEl.forEach(tabIndexOn);
    sectionGalleryItemEl.forEach(tabIndexOn);
    footerEl.forEach(tabIndexOn);
    btnBoxEl.forEach(tabIndexOn);
  }, 400);
};

sectionGalleryItemEl.forEach(function (sectionGalleryItem, index) {
  const tabIndexOff = function (element) {
    element.setAttribute("tabindex", -1);
  };
  const showPopup = function (event) {
    PopupEl.classList.remove("hidden-popup");
    PopupImgEl.src = event.target.src;
    currentImgIndex = index;
    navEl.forEach(tabIndexOff);
    sectionGalleryItemEl.forEach(tabIndexOff);
    footerEl.forEach(tabIndexOff);
    btnBoxEl.forEach(tabIndexOff);
  };

  sectionGalleryItem.addEventListener("click", showPopup);

  sectionGalleryItem.addEventListener("keydown", function (event) {
    if (event.code === "Enter" || event.keyCode === 13) {
      showPopup(event);
    }
  });
});

PopupCloseEl.addEventListener("click", closePopup);

arrowRightEl.addEventListener("click", showNextImg);

arrowLeftEl.addEventListener("click", showPreviousImg);

document.addEventListener("keydown", function (event) {
  if (!PopupEl.classList.contains("hidden")) {
    if (event.code === "ArrowRight" || event.keyCode === 39) {
      showNextImg();
    }
    if (event.code === "ArrowLeft" || event.keyCode === 37) {
      showPreviousImg();
    }

    if (event.code === "Escape" || event.keyCode === 27) {
      closePopup();
    }
  }
});
PopupEl.addEventListener("click", function (event) {
  if (event.target === PopupEl) {
    closePopup();
  }
});

////////////////////////////////////////////////////////
// Slide photo

const realizationsGalleryEls = document.querySelectorAll(
  ".realizations-gallery"
);

const slidePhoto = function () {
  realizationsGalleryEls.forEach((realizationsGalleryEl) =>
    setTimeout(() => {
      realizationsGalleryEl.classList.remove("hidden");
    }, 0)
  );
};
slidePhoto();

// const isRefreshed = localStorage.getItem("isRefreshed");

// // Usuń flagę z localStorage
// localStorage.removeItem("isRefreshed");

// // Wywołaj odświeżenie strony z pominięciem pamięci podręcznej
// location.reload(true);
