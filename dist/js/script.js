// navbar fix
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}



// Humberger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})


//All Mathces
function mathcesAll() {
  const allMat = document.querySelector('#all-matches');
  const pubgMobile = document.querySelector('#macthes-pubgmobile');
  const mobileLegends = document.querySelector('#matches-mobilelegends');

  pubgMobile.classList.remove('block');
  pubgMobile.classList.add('hidden');

  mobileLegends.classList.remove('block');
  mobileLegends.classList.add('hidden');


  allMat.classList.remove('hidden');
  allMat.classList.add('block');

}


//mathches PUBG
function macthesPubg() {
  const pubgMobile = document.querySelector('#macthes-pubgmobile');
  const alMathces = document.querySelector('#all-matches');
  const mobileLegends = document.querySelector('#matches-mobilelegends');
  const freeFire = document.querySelector('#matches-freefire');
  const valoRant = document.querySelector('#matches-valorant');


  freeFire.classList.remove('block');
  freeFire.classList.add('hidden');
  valoRant.classList.add('hidden');
  valoRant.classList.remove('block');
  mobileLegends.classList.remove('block');
  mobileLegends.classList.add('hidden');
  alMathces.classList.add('hidden');
  alMathces.classList.remove('block');
  pubgMobile.classList.remove('hidden');
  pubgMobile.classList.add('block');

}




//matches Mobile legends
function matchesML() {
  const pubgMobile = document.querySelector('#macthes-pubgmobile');
  const alMathces = document.querySelector('#all-matches');
  const mobileLegends = document.querySelector('#matches-mobilelegends');
  const freeFire = document.querySelector('#matches-freefire');
  const valoRant = document.querySelector('#matches-valorant');

  freeFire.classList.remove('block');
  freeFire.classList.add('hidden');
  valoRant.classList.add('hidden');
  valoRant.classList.remove('block');
  alMathces.classList.add('hidden');
  alMathces.classList.remove('block');
  pubgMobile.classList.add('hidden');
  mobileLegends.classList.remove('hidden');
  mobileLegends.classList.add('block');
}




//matches Free fire
function matchesFreeFire() {

  const pubgMobile = document.querySelector('#macthes-pubgmobile');
  const alMathces = document.querySelector('#all-matches');
  const mobileLegends = document.querySelector('#matches-mobilelegends');
  const freeFire = document.querySelector('#matches-freefire');
  const valoRant = document.querySelector('#matches-valorant');

  
  valoRant.classList.remove('block');
  valoRant.classList.add('hidden');
  alMathces.classList.add('hidden');
  alMathces.classList.remove('block');
  pubgMobile.classList.add('hidden');
  mobileLegends.classList.add('hidden');
  freeFire.classList.remove('hidden');
  freeFire.classList.add('block');
}




//matches Free fire
function matchesValorant() {

  const valoRant = document.querySelector('#matches-valorant');
  const freeFire = document.querySelector('#matches-freefire');
  const mobileLegends = document.querySelector('#matches-mobilelegends');
  const allMatches = document.querySelector('#all-matches');
  const pubgMobile = document.querySelector('#macthes-pubgmobile');


  valoRant.classList.remove('hidden');
  freeFire.classList.add('hidden');
  pubgMobile.classList.remove('block');
  pubgMobile.classList.add('hidden');
  allMatches.classList.add('hidden');
  mobileLegends.classList.remove('block');
  mobileLegends.classList.add('hidden');
}


//slide show

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  //let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
  slides[slideIndex-1].style.display = "block";  
  //dots[slideIndex-1].className += " active";
}
