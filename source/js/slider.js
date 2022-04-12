const swiper = new Swiper('.swiper', {
  // Optional parameters
  speed: 400,
  spaceBetween: 100,
  loop: true,
  simulateTouch: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
