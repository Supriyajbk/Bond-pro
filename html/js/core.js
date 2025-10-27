import { anime } from './modules/animate';
import { counter } from './modules/counter';
import { menu } from './modules/menu';
import { tabHandler } from './modules/tabSection';
import { trustBy } from './modules/trustBySlider';
import { accordion } from './modules/accordion';
import { youtube, vimeo, video } from './modules/popup';
import { swiper, workSwiper, imageSwiper, eventSwiper } from './modules/swiper';
import { divider, pattern } from './modules/divider';

document.addEventListener('DOMContentLoaded', function () {
  counter.init();
  anime.init();
  menu.init();

  tabHandler.init();
  trustBy.slider();
  accordion.init();

  youtube.init();
  vimeo.init();
  video.init();

  swiper.init();
  workSwiper.init();
  imageSwiper.init();
  eventSwiper.init();
  divider.load();
  pattern.load();
});
