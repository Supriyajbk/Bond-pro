import { anime } from './modules/animate';
import { counter } from './modules/counter';
import { menu } from './modules/menu';
import { swiper, workSwiper, imageSwiper } from './modules/swiper';
// import { tabHandler } from './modules/tabSection';
import { trustBy } from './modules/trustBySlider';
import { accordion } from './modules/accordion';
import { youtube, vimeo, video } from './modules/popup';

document.addEventListener('DOMContentLoaded', function () {
  counter.init();
  anime.init();
  menu.init();
  swiper.init();
  workSwiper.init();
  // tabHandler.init();
  trustBy.slider();
  accordion.init();
  youtube.init();
  vimeo.init();
  video.init();
  imageSwiper.init();
});
