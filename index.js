// Navbar
const hamburgerMenu = document.querySelector(".hamburger-menu")
const xMenu = document.querySelector(".x-menu")
const menuLists1 = document.querySelector(".lists1")
const overLay = document.querySelector(".overlay1")
// Header
const hoverSpoon = document.querySelector(".noodles-bar-container")
const spoon = document.querySelector(".spoon")
const spoon2 = document.querySelector(".spoon2")
const pho = document.querySelector(".pho")
const bunThitNuong = document.querySelector(".bun-thit-nuong")
const comChien = document.querySelector(".com-chien")
const lime = document.querySelector(".lime")
const peanut = document.querySelector(".peanut")
const star = document.querySelector(".star")
const chilli = document.querySelector(".chilli")
//Menu
const allDishes = document.querySelector(".all-dishes")
const starters = document.querySelector(".starters")
const mainDishes = document.querySelector(".main-dishes")
const drinks = document.querySelector(".drinks")
const dessert = document.querySelector(".dessert")

// Nav Bar
hamburgerMenu.addEventListener("click", () => {
    menuLists1.classList.toggle("menu-active")
    xMenu.classList.add("x-menu-active")
    hamburgerMenu.classList.add("hamburger-menu-active")
    overLay.classList.add("overlay")
})
xMenu.addEventListener("click", () => {
    menuLists1.classList.toggle("menu-active")
    hamburgerMenu.classList.remove("hamburger-menu-active")
    xMenu.classList.remove("x-menu-active")
    overLay.classList.remove("overlay")
})

// spoon Animation
hoverSpoon.addEventListener("mouseover", () => {
    spoon.classList.toggle("spoon-active")
    spoon2.classList.toggle("spoon2-active")
})

// Header Animaton 

setInterval(() => {
    pho.classList.toggle("header-active")
}, 1000)
setInterval(() => {
    bunThitNuong.classList.toggle("header-active")
}, 1300)
setInterval(() => {
    comChien.classList.toggle("header-active")
}, 1600)
setInterval(() => {
    lime.classList.toggle("header2-active")
    peanut.classList.toggle("header2-active")
    star.classList.toggle("header2-active")
    chilli.classList.toggle("header2-active")
}, 1300)

// Menu 
allDishes.addEventListener("click", () => {
    allDishes.classList.add("options-active")
    starters.classList.remove("options-active")
    mainDishes.classList.remove("options-active")
    drinks.classList.remove("options-active")
    dessert.classList.remove("options-active")
})
starters.addEventListener("click",()=>{ 
    starters.classList.add("options-active")
    allDishes.classList.remove("options-active")
    mainDishes.classList.remove("options-active")
    drinks.classList.remove("options-active")
    dessert.classList.remove("options-active")
})
mainDishes.addEventListener("click", () => {
    mainDishes.classList.add("options-active")
    drinks.classList.remove("options-active")
    dessert.classList.remove("options-active")
    starters.classList.remove("options-active")
    allDishes.classList.remove("options-active")
})
drinks.addEventListener("click", () => {
    drinks.classList.add("options-active")
    dessert.classList.remove("options-active")
    starters.classList.remove("options-active")
    allDishes.classList.remove("options-active")
    mainDishes.classList.remove("options-active")
})
dessert.addEventListener("click", ()=> {
    dessert.classList.add("options-active")
    starters.classList.remove("options-active")
    allDishes.classList.remove("options-active")
    mainDishes.classList.remove("options-active")
    drinks.classList.remove("options-active")
})
