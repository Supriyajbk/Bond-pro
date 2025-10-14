import { menu } from './modules/menu';
import { swiper } from './modules/swiper';
import { tabHandler } from './modules/tabSection';

document.addEventListener('DOMContentLoaded', function () {
  menu.init();
  swiper.init();
  tabHandler.init();
});
