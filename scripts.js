"use strict";
const menulistDiscoverycall = document.querySelectorAll(".menulist_discoverycall")
const hamburger = document.querySelector(".hamburger")
hamburger.addEventListener("click", () => {
    menulistDiscoverycall.forEach((element) => {
        element.classList.toggle("menulist_discoverycall")
    })
})