import { Fancybox } from '@fancyapps/ui';

class Popup {
  constructor(selector) {
    this.eles = document.querySelectorAll(selector);
  }
  init() {
    if (this.eles.length === 0) return;
    this.eles.forEach((ele) => {
      if (ele.dataset.type === 'youtube') {
        Fancybox.bind('.popup-youtube', {
          type: 'inline',
        });
      }
      if (ele.dataset.type === 'vimeo') {
        Fancybox.bind('.popup-vimeo', {
          type: 'inline',
        });
      }
      Fancybox.bind('.popup-video', {
        // Your custom options
      });
    });
  }
}
export const youtube = new Popup('.popup-youtube');
export const vimeo = new Popup('.popup-vimeo');
export const video = new Popup('.popup-video');
