// Carousel

const imageSlide = document.querySelectorAll(".benefits-item");
const btnSlide = document.querySelectorAll(".button-slider");

const changeSlide = function (imageSlide, btnSlide, index) {
  for (let i = 0; i < imageSlide.length; i++) {
    if (imageSlide[i].classList.contains("slide-current")) {
      imageSlide[i].classList.remove("slide-current");
    }
  }
  imageSlide[index].classList.add("slide-current");

  for (let q = 0; q < btnSlide.length; q++) {
    if (btnSlide[q].classList.contains("current-button")) {
      btnSlide[q].classList.remove("current-button");
    }
  }
  btnSlide[index].classList.add("current-button");
};

for (let counter = 0; counter < btnSlide.length; counter++) {
  btnSlide[counter].addEventListener("click", function () {
    changeSlide(imageSlide, btnSlide, counter);
  });
}
