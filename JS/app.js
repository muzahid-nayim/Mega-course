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

// var swiper = new Swiper(".mySwiper", {
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: "auto",
//   coverflowEffect: {
//     rotate: 50,
//     stretch: 0,
//     depth: 100,
//     modifier: 1,
//     slideShadows: true,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
// });

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    reverseDirection: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // 780: {
    //   slidesPerView: 3,
    //   spaceBetween: 40,
    // },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});