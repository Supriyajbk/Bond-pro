import { CountUp } from 'countup.js';
export const counter = {
  $ele: document.querySelectorAll('[data-count-to]'),
  init() {
    const _ = this;
    _.$ele.forEach(($el) => {
      const countToValue = $el.getAttribute('data-count-to');
      const decimalPlaces = countToValue.includes('.')
        ? countToValue.split('.')[1].length
        : 0;

      $el.counter = new CountUp($el, $el.getAttribute('data-count-to'), {
        startVal: Number($($el).html()) > 1 ? Number($($el).html()) : '',
        decimalPlaces: decimalPlaces,
        duration: Number(($el.getAttribute('data-duration') / 1000) * 1),
      });
    });
  },
};
