class Paragraph {
  constructor(selector) {
    this.eles = document.querySelectorAll(selector);
  }
  remove() {
    if (this.eles.length === 0) return;

    this.eles.forEach((ele) => {
      ele.innerHTML.replace(/\s|&nbsp;/g, '').length === 0 ? ele.remove() : '';
    });
  }
}
export const text = new Paragraph('p');
