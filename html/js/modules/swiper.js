import Swiper from 'swiper/bundle';

class Slider {
  constructor(selector) {
    this.element = document.querySelector(selector);
    this.selector = selector;
    this.swiper = null;
  }

  init() {
    if (!this.element) return;
    const swiperNext = this.element.querySelector('.swiper-button-next');
    const swiperPrev = this.element.querySelector('.swiper-button-prev');
    const swiperPagination = this.element.querySelector('.swiper-pagination');

    if (this.selector === '.carousel-slider') {
      this.swiper = new Swiper(this.element, {
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        speed: 800,
        navigation:
          swiperNext && swiperPrev
            ? {
                nextEl: swiperNext,
                prevEl: swiperPrev,
              }
            : undefined,
        pagination: {
          el: swiperPagination,
        },
        breakpoints: {
          760: {
            slidesPerGroup: 2,
          },
          1300: {
            speed: 1000,
            slidesPerGroup: 3,
          },
        },
      });
    }

    if (this.selector === '.work-carousel-slider') {
      this.swiper = new Swiper(this.element, {
        slidesPerView: 'auto',
        speed: 800,
        navigation:
          swiperNext && swiperPrev
            ? {
                nextEl: swiperNext,
                prevEl: swiperPrev,
              }
            : undefined,
        pagination: {
          el: swiperPagination,
        },
        breakpoints: {
          760: {
            speed: 1000,
            slidesPerGroup: 2,
          },
        },
      });
    }

    if (this.selector === '.image-carousel-slider') {
      this.swiper = new Swiper(this.element, {
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        centeredSlides: true,
        spaceBetween: 16,
        speed: 1000,
        loop: true,
        cssMode: true,
        navigation: {
          nextEl: '.image-carousel-slider .swiper-button-next',
          prevEl: '.image-carousel-slider .swiper-button-prev',
        },
        pagination: {
          el: '.image-carousel-slider .swiper-pagination',
        },
        breakpoints: {
          1024: {
            spaceBetween: 24,
          },
          760: {
            spaceBetween: 24,
          },
        },
      });
    }

    if (this.selector === '.events-carousel-slider') {
      this.swiper = new Swiper(this.element, {
        slidesPerView: 'auto',
        spaceBetween: 40,
        speed: 1500,
        loop: false,
        navigation: {
          nextEl: '.events-carousel-slider .swiper-button-next',
          prevEl: '.events-carousel-slider .swiper-button-prev',
        },
        pagination: {
          el: '.events-carousel-slider .swiper-pagination',
        },
      });
    }
  }
}
export const swiper = new Slider('.carousel-slider');
export const workSwiper = new Slider('.work-carousel-slider');
export const imageSwiper = new Slider('.image-carousel-slider');
export const eventSwiper = new Slider('.events-carousel-slider');
