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
  
/*sticky nav*/
window.onscroll = function() { 
  let navbar = document.getElementById('navbar');
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.style.position = "fixed";
    navbar.style.top = "0";
    navbar.style.width = "100%";
  } else {
    navbar.style.position = "static";
  }
}


  