import $ from 'jquery';
class Menu {
  constructor(header, btn, headerRight, menu) {
    this.header = document.querySelector(header);
    this.btn = document.querySelector(btn);
    this.headerRight = document.querySelector(headerRight);
    this.menu = document.querySelector(menu);
  }
  init() {
    // no else exist
    const media = window.matchMedia('(max-width: 1023px)');
    this.btn.addEventListener('click', this.handlerBtn.bind(this));
    function mediaFun(e) {
      if (e.matches) {
        this.menu.addEventListener('click', (e) => {
          this.handlerMenu(e);
        });
      } else {
        this.menu.removeEventListener('click', (e) => {
          this.handlerMenu(e);
        });
      }
    }
    mediaFun.call(this, media);
    media.addEventListener('change', mediaFun.bind(this)); // bind forever
  }
  handlerBtn(e) {
    e.currentTarget.classList.toggle('open');
    this.header.classList.toggle('navOpen');
    this.headerRight.classList.toggle('open');
  }
  handlerMenu(e) {
    let target = e.target.closest('li');

    if (target && target.classList.contains('menu-item-has-children')) {
      e.preventDefault();

      const siblings = target.parentElement.children;
      for (let li of siblings) {
        if (li !== target && li.classList.contains('menu-item-has-children')) {
          li.children[0].classList.remove('open');
          $(li.children[1]).hide();
        }
      }
      target.children[0].classList.toggle('open');
      $(target.children[1]).slideToggle(600);
    }
  }
}
export const menu = new Menu(
  'header',
  '.humburger-btn',
  '.header_right',
  'ul.main_menu'
);
