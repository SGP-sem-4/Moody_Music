//Selectors
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
var header = document.getElementById('navbar');
var main_back = document.querySelector('.background');

// Animate The navigation bar when it scroll down in Y axis
window.addEventListener("scroll",function(){
  header.classList.toggle("sticky",window.scrollY > 30);
  main_back.style.opacity="0.8"
  if(window.scrollY < 100){
    main_back.style.opacity = "1";
  }
});

//function

// animated text testing
anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1500,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1600,
    easing: "easeOutExpo",
    delay: 1000
  });
