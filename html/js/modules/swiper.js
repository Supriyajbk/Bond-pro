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
      });
    }

    if (this.selector === '.image-carousel-slider') {
      this.swiper = new Swiper(this.element, {
        navigation: {
          nextEl: '.carousel-slider .swiper-button-next',
          prevEl: '.carousel-slider .swiper-button-prev',
        },
        pagination: {
          el: '.carousel-slider .swiper-pagination',
        },
      });
    }
  }
}
export const swiper = new Slider('.carousel-slider');
