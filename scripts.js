"use strict";
const menulistDiscoverycall = document.querySelector(".menulist_discoverycall")
const hamburger = document.querySelector(".hamburger")
hamburger.addEventListener("click", () => {
    menulistDiscoverycall.classList.toggle("menulist_discoverycall")
})