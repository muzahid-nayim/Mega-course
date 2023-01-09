window.addEventListener('scroll', function() {
    // if scroll down after 45px (position Y)
    const nav = document.querySelector('nav')
    if(window.scrollY>150){
       nav.style.position='fixed'
       nav.style.top='0'
       nav.style.padding='15px  0px'
       nav.style.background = 'white'
       nav.style.boxShadow = '5px 1px 15px #0000003d'
    }else{
       nav.style.position='relative'
       nav.style.padding='0px'
       nav.style.background = 'transparent'
       nav.style.boxShadow = 'none'

    }
});

// ===          SWIPER            ====
var swiper = new Swiper(".mySwiper", {
   spaceBetween: 30,
   centeredSlides: true,
   autoplay: {
     delay: 2500,
     disableOnInteraction: false,
   },
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
 });
