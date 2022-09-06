"use strict";

const navBtn = document.getElementById("nav-toggle");

const links = document.getElementById("nav-links");

navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});
