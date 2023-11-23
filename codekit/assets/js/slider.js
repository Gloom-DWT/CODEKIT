"use strict"

/*Animation de la page*/
const ratio = .1
const options = {
    root: null,
    rootMargin: "0px",
    threshold: ratio,
  }

  const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if(entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            console.log('visible')
        }
    })
  }

  const observer = new IntersectionObserver(handleIntersect, options);
  document.querySelectorAll('.reveal').forEach(function(R){
    observer.observe(R)
  })

/*slider*/
var slideIndex = 1;
showSlide(slideIndex);

function plusSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  var i;
  var slides = document.getElementsByClassName("slider")[0].getElementsByTagName("img");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
