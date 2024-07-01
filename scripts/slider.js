/*

let prevBtn = document.querySelector(".test1")
let nextBtn = document.querySelector(".test2")
let carousel = document.querySelector(".carousel")
//const slides=5
let currentSlide = 1
const totalSlides = document.querySelectorAll(".slider__item").length;
console.log("sl"+currentSlide)

prevBtn.addEventListener("click", () => {
    console.log(2)
    console.log("CURRRENT" +currentSlide)
    if (currentSlide >=1 ) {
        currentSlide--;
        const offset = currentSlide * 100;  
        console.log("sl"+currentSlide, offset)
        carousel.style.transform = `translateX(${Number(offset)}%)`;
     
   } else {
       currentSlide=totalSlides-1
       console.log("CURRRENT" +currentSlide)
       carousel.style.transform = `translateX(${-100*(totalSlides-1)}%)`;
   }
});



nextBtn.addEventListener("click", () => {
    console.log(2)
     const offset = -currentSlide * 100;  
     console.log("sl"+currentSlide, offset)
     if (currentSlide < totalSlides ) {
         currentSlide++;
         carousel.style.transform = `translateX(${Number(offset)}%)`;
      
    } else {
        currentSlide=1
        carousel.style.transform = `translateX(${0}%)`;
    }
});
 */

/*
let prevBtn = document.querySelector(".test1")
let nextBtn = document.querySelector(".test2")
let carousel = document.querySelector(".carousel")
let currentSlide = 0 
const totalSlides = document.querySelectorAll(".slider__item").length;

prevBtn.addEventListener("click", () => {
    console.log(2)
    console.log("CURRENT" + currentSlide)
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = totalSlides - 1;
    }
    const offset = -currentSlide * 100;
    console.log("CURRENT SLIDE: " + currentSlide + ", OFFSET: " + offset)
    carousel.style.transform = `translateX(${offset}%)`;
});

nextBtn.addEventListener("click", () => {
    console.log(2)
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    const offset = -currentSlide * 100;
    console.log("CURRENT SLIDE: " + currentSlide + ", OFFSET: " + offset)
    carousel.style.transform = `translateX(${offset}%)`;
});
*/


let carousel = document.querySelector(".carousel");
let currentSlide = 0;
const totalSlides = document.querySelectorAll(".slider__item").length;
const dots = document.querySelectorAll(".dot");

dots.forEach(dot => {
    dot.addEventListener("click", (event) => {
        currentSlide = parseInt(event.target.getAttribute("data-slide"));
        updateCarousel();
        updateDots();
    });
});

function updateCarousel() {
    const offset = -currentSlide * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

function updateDots() {
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add("dot-active");
        } else {
            dot.classList.remove("dot-active");
        }
    });
}

 
updateCarousel();
updateDots();
