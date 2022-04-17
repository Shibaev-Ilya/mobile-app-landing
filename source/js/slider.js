const swiper = new Swiper('.swiper', {
  // Optional parameters
  speed: 400,
  spaceBetween: 100,
  loop: true,
  simulateTouch: true,
  grabCursor: true,
  /*breakpoints: {
    499: {
      slidesPerView: 1,
    },
    999: {
      slidesPerView: 2,
    }
  },*/
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

const tariff = new Swiper('.js-tariff-slider', {
  // Optional parameters
  spaceBetween: 2,
  loop: false,
  simulateTouch: true,
  grabCursor: true,
  initialSlide: 1,
  /*breakpoints: {
    499: {
      slidesPerView: 1,
    },
    999: {
      slidesPerView: 2,
    }
  },*/
  // If we need pagination
  pagination: {
    el: '.tariff-pagination',
    clickable: true
  },

});
