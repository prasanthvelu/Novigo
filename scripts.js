"use strict";
const headerUL = document.querySelector("header ul")
const headerBtn = document.querySelector(".book_discovery_call_2")
const hamburger = document.querySelector(".hamburger")
hamburger.addEventListener("click", ()=>{
    headerUL.classList.toggle("menulist_discoverycall")
    headerBtn.classList.toggle("menulist_discoverycall")
})