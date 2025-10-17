import { menu } from './modules/menu';
import { swiper } from './modules/swiper';
import { tabHandler } from './modules/tabSection';
import { trustBy } from './modules/trustBySlider';
import { accordion } from './modules/accordion';

document.addEventListener('DOMContentLoaded', function () {
  menu.init();
  swiper.init();
  // tabHandler.init();
  trustBy.slider();
  accordion.init();
});
