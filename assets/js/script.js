let swipeOption = {
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 2000,
    effect: "fade",
    fadeEffect: {
        crossFade: true
 
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    //  }
    }
  };
new Swiper('.swiper-container', swipeOption);
  
