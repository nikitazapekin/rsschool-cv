const burgerBtn = document.querySelector(".burger__btn")
const burgerContent = document.querySelector(".burger__content")
let isOpenBurger = false
burgerBtn.addEventListener("click", ()=> {
    console.log(1)
burgerContent.style.transform = "translateX(0%)"
})