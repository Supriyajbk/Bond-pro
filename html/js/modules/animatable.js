// import $ from 'jquery';
import { animate, splitText, stagger, utils, onScroll } from 'animejs';
class Animatables {
  constructor() {}
  init() {
    animate('.accordion-list1', {
      //   x: '15rem',
      //   rotate: '1turn',

      duration: 2000,
      alternate: true,
      ease: 'inOutQuad',
      autoplay: onScroll({
        // enter: 'center top',
        // leave: 'center bottom',
        enter: '80% 20%',
        leave: '50 -25',
        // 50px from the top of the container, 100px from the top of the target
        // debug: true,
      }),
    });
  }
}

export const animatables = new Animatables();
