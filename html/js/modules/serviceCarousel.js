// import $ from 'jquery';
import Swiper from 'swiper/bundle';

class serviceCarouselSlider {
  constructor($for, $nav) {
    this.for = document.querySelector($for);
    this.nav = document.querySelector($nav);
    this.mySwiper = null;
  }
  init() {
    if (!this.for && !this.nav) return;
    const media = window.matchMedia('(min-width: 760px)');
    let initialized = false;
    const serviceCarouselSwiper = () => {
      if (!media.matches) {
        if (!initialized) {
          const swipeNext = this.for.querySelector('.swiper-button-next');
          const swipePrev = this.for.querySelector('.swiper-button-prev');
          this.mySwiper = new Swiper(this.for, {
            slidesPerView: 1,
            navigation:
              swipeNext && swipePrev
                ? {
                    nextEl: swipeNext,
                    prevEl: swipePrev,
                  }
                : undefined,
            on: {
              slideChange: () => {
                const activeSlide =
                  this.mySwiper.slides[this.mySwiper.activeIndex];
                const $slide = activeSlide.dataset.slideFor;
                $(
                  document.querySelectorAll(
                    'ul.services-carousel-tabs > li > a'
                  )
                ).hide();
                document.querySelector(
                  `ul.services-carousel-tabs > li > a[data-link-nav="${$slide}"]`
                ).style.display = 'block';

                $(document.querySelectorAll('.services-carousel-row')).hide();
                $(
                  document.querySelector(
                    `.services-carousel-row[data-content="${$slide}"]`
                  )
                ).fadeIn('slow');
              },
            },
          });
        }
        initialized = false;
      } else {
        if (!initialized) {
          if (this.mySwiper) {
            this.mySwiper.destroy(true, true);
            this.mySwiper = null;
          }

          const $tabLinks = this.nav.querySelector('ul.services-carousel-tabs');
          $tabLinks.children[0].classList.add('active');
          $tabLinks.addEventListener('click', function (e) {
            e.preventDefault();
            const $target = e.target;
            if ($target.tagName === 'A') {
              $tabLinks
                .querySelectorAll('li')
                .forEach((tab) => tab.classList.remove('active'));
              $target.parentElement.classList.add('active');
              const $textme = $target.dataset.linkNav;
              const $targetParentEle = $target.parentElement.closest(
                '.services-nav-slide'
              );
              // $targetParentEle.classList.toggle('shuffleBg');

              // if (!$targetParentEle.classList.contains('shuffleBg')) {
              //   setTimeout(function () {
              //     $targetParentEle.classList.add('shuffleBg');
              //   }, 100);
              // }
              $(document.querySelectorAll('.services-for-slide')).hide();
              $(
                document.querySelector(
                  `.services-for-slide[data-slide-for="${$textme}"]`
                )
              ).fadeIn('slow');
              $(document.querySelectorAll('.services-carousel-row')).hide();
              $(
                document.querySelector(
                  `.services-carousel-row[data-content="${$textme}"]`
                )
              ).fadeIn('slow');
            }
          });
          initialized = false;
        }
      }
    };
    serviceCarouselSwiper();
    media.addEventListener('change', serviceCarouselSwiper);
  }
}
export const serviceCarousel = new serviceCarouselSlider(
  '.services-carousel-for',
  '.services-carousel-nav'
);
