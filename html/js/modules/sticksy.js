import 'sticksy';

class Stickmy {
  constructor(selector, header) {
    this.stickeles = document.querySelectorAll(selector);
    this.header = document.querySelector(header);
  }
  init() {
    if (this.stickeles.length === 0) return;
    const height = this.header.getBoundingClientRect().height;
    this.stickeles.forEach((stickele) => {
      if (!stickele) return;
      new Sticksy.initializeAll(
        stickele,
        {
          topSpacing: height,
          listen: true,
        },
        true
      );
    });
  }
}
export const stickme = new Stickmy('[data-sticky]', 'header');
