class Header {
  constructor(selector) {
    this.header = document.querySelector(selector);
  }
  init() {
    if (!this.header) return;
    window.addEventListener('scroll', this.scroll.bind(this));
    window.addEventListener('load', this.scroll.bind(this));
  }
  scroll() {
    alert('');
    const sc = window.scrollY;
    sc > 0
      ? this.header.classList.add('sticky-header')
      : this.header.classList.remove('sticky-header');
  }
}
export const header = new Header('.site-header');
