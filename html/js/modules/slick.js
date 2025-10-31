import $ from 'jquery';
import 'slick-carousel';

class Slick {
  constructor($for, $nav) {
    this.for = document.querySelector($for);
    this.nav = document.querySelector($nav);
  }
  init() {
    if (!this.for && !this.nav) return;
    const media = window.matchMedia('(min-width: 1024px)');
    let initialized = true;
    const serviceCarouselSlick = () => {
      if (!media.matches) {
        if (!initialized) {
          initialized = true;
        }
      } else {
        if (initialized) {
          //   $(this.for).slick('unslick');
          //   $(this.nav).slick('unslick');
          initialized = false;
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
              $(document.querySelectorAll('.services-for-slide')).hide();
              $(
                document.querySelector(
                  `.services-for-slide[data-slide-for="${$target.dataset.linkNav}"]`
                )
              ).fadeIn('slow');
            }
          });
        }
      }
    };
    serviceCarouselSlick();
    media.addEventListener('change', serviceCarouselSlick);
  }
}
export const slick = new Slick(
  '.services-carousel-for',
  '.services-carousel-nav'
);
