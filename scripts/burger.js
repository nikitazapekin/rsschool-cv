let burgerContnent = document.querySelector(".burger__inner")
let burgerBtn = document.querySelector(".burger__btn")
let burgerLine = document.querySelectorAll(".burger__line")
let isChecked = false
burgerBtn.addEventListener("click", () => {
    console.log(1)
    isChecked = !isChecked
    if (isChecked) {
        burgerLine[1].style.display = "none"
        burgerLine[0].style.transform = "rotate(45deg) translateY(10px) translateX(10px)"
        burgerLine[2].style.transform = "rotate(-45deg) translateY(-5px) translateX(5px)"
        burgerContnent.style.transform = "translateX(0%)";
    }
    else {
        burgerContnent.style.transform = "translateX(100%)";
        burgerLine[1].style.display = "block"
        burgerLine[0].style.transform = "rotate(0deg) translateY(0px) translateX(0px)"
        burgerLine[2].style.transform = "rotate(0deg) translateY(0px) translateX(0px)"
    }
})