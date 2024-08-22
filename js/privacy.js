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
