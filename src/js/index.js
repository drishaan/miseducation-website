var slideIndex = 1;
window.onload = function () {
  showSlides(slideIndex);

  document.querySelector(".next").addEventListener("click", (e) => {
    plusSlides(1);
  });

  document.querySelector(".prev").addEventListener("click", (_) => {
    plusSlides(-1);
  });

  document.querySelectorAll(".dot").forEach((el) => {
    el.addEventListener("click", (e) => {
      currentSlide(e.target.dataset.slide);
    });
  });

  console.log(window.innerWidth);
  console.log(window.innerHeight)
};

function plusSlides(n) {
  console.log(slideIndex);
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  console.log(slideIndex);
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
