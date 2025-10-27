class Patterns {
  constructor(selector) {
    this.eles = document.querySelectorAll(selector);
  }
  load() {
    if (this.eles.length === 0) return;
    this.eles.forEach((ele) => {
      Array.from(ele.children).forEach((child) => {
        child.style.fill = '#F0F0F4';
        child.classList.remove('fuschia');
      });

      const total = ele.children.length;
      let clearId = null;
      let activeCount = 0;

      const animate = () => {
        clearId = setInterval(() => {
          const random = Math.floor(Math.random() * total);
          ele.children[random].style.fill = '#D0009E';
          ele.children[random].classList.add('fuschia');

          activeCount = Array.from(ele.children).filter((child) =>
            child.classList.contains('fuschia')
          ).length;

          if (activeCount > 6) {
            Array.from(ele.children).forEach((child) => {
              child.style.fill = '#F0F0F4';
              child.classList.remove('fuschia');
            });
            activeCount = 0;
          }
        }, 1000);
      };

      animate();

      setTimeout(() => {
        clearInterval(clearId);
        requestAnimationFrame(animate);
      }, total * 1000);
    });
  }
}

export const pattern = new Patterns('.optional-repeater-pattern svg');
