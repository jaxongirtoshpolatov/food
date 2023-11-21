let swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 16,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    loop: true,
  });

//   hot swiper

let hotSwiper = new Swiper(".hotSwiper", {
    slidesPerView: 4,
    spaceBetween: 16,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    loop: true,
  });

  let meatSwiper = new Swiper(".meatSwiper", {
    slidesPerView: 4,
    spaceBetween: 16,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    loop: true,
  });