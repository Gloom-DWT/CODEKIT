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

/*Tabs*/   
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

/*Ferme les tabs quand on clique dans le vide*/
window.onclick = function(event) {
    if (!event.target.matches('.tablinks')) {
      var tabs = document.getElementsByClassName("tabcontent");
      for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
      }
      var tablinks = document.getElementsByClassName("tablinks");
      for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
    }
  }
  
  