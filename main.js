let sliderImages = Array.from(document.querySelectorAll(".slider-container img")),
slideNum = document.querySelector(".slide-num"),
nextBtn = document.querySelector(".next"),
prevBtn = document.querySelector(".prev"),
indicators = document.querySelector(".indicators"),
sliderLength = sliderImages.length,
currinteSlider = 0;

// Next Button
setInterval(nextBtn.onclick = () => {
if(currinteSlider < sliderLength -1){
  currinteSlider ++;
}else{
  currinteSlider = 0;
}
sliderControl();
},5000);

// PreviousButton
prevBtn.onclick = () => {
if(currinteSlider > 0){
  currinteSlider --;
}else{
  currinteSlider = sliderLength -1;
}
sliderControl();
};

// Create Pagination Items
for (i = 1; i <= sliderLength; i++) {
let pagination = document.createElement("li");
pagination.setAttribute("data-index", i);
let paginationItem = document.createTextNode(i);
pagination.appendChild(paginationItem);
indicators.appendChild(pagination);
}

let indicatorsItems = Array.from(document.querySelectorAll(".indicators li"));
indicatorsItems.forEach((li)=>{
li.onclick = ()=>{
currinteSlider = li.textContent - 1;
sliderControl();
}
})

function sliderControl() {
sliderImages.forEach((img)=>{
  img.classList.remove("active");
})
indicatorsItems.forEach((li)=>{
  li.classList.remove("active");
})

slideNum.innerHTML = `Slide ${currinteSlider + 1} of ${sliderLength}`;
sliderImages[currinteSlider].classList.add("active");
indicators.children[currinteSlider].classList.add("active");

}
sliderControl();
