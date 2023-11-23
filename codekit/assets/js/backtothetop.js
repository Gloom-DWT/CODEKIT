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
  
/*Back to the top*/
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})