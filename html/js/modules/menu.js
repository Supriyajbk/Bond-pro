class Menu {
  constructor(selector) {
    this.eles = document.querySelectorAll(selector);
  }
  init() {
    //
    document.querySelectorAll('p').forEach((ele) => {
      ele.innerHTML.replace(/\s|&nbsp;/g, '').length === 0 ? ele.remove() : '';
    });
  }
}
export const menu = new Menu();
