//big main
const week = document.querySelectorAll('.sub_menu li');
const bigMain = document.querySelectorAll('body .big_main');
console.log(bigMain);
let num = 0;
week.forEach(function(day,idx){
  day.onclick = function(){
    bigMain[num].classList.remove('active')
    // bigMain[num].classList.add('active');
    num = idx;
    console.log(num);
  
    if(!bigMain[num].classList.contains('active')){
      bigMain[num].classList.add('active')
    } else {
      bigMain[num].classList.remove('active')
    }
  }
})

//big main slide
var swiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

//footer_ad
const footerAd = document.querySelector('.footer_ad');
const headerDiv = document.querySelector('header div');
    let pos = {
      y:0,
      oldY:0,
      status:true,
    }
    window.addEventListener('scroll',function(){
      pos.y = window.scrollY;
      pos.status = pos.oldY < pos.y;
      pos.oldY = pos.y;
      if(pos.status){
        footerAd.classList.add('scr')
      } else {
        footerAd.classList.remove('scr')
      }
    })