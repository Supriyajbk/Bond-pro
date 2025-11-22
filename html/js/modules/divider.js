class Divider {
  constructor(selector) {
    this.eles = document.querySelectorAll(selector);
  }

  load() {
    if (this.eles.length === 0) return;

    this.eles.forEach((ele) => {
      const children = Array.from(ele.children);
      const total = children.length;

      // reset all
      children.forEach((child) => {
        child.style.fill = '#F0F0F4';
        child.classList.remove('fuschia');
      });

      let clearId = null;

      const animate = () => {
        clearId = setInterval(() => {
          const count = Math.floor(Math.random() * 3) + 3; // 3–5

          const indices = [...Array(total).keys()]
            .sort(() => Math.random() - 0.5)
            .slice(0, count);

          indices.forEach((i) => {
            children[i].style.fill = '#D0009E';
            children[i].classList.add('fuschia');
          });

          setTimeout(() => {
            indices.forEach((i) => {
              children[i].style.fill = '#F0F0F4';
              children[i].classList.remove('fuschia');
            });
          }, 1000);
        }, 1500);
      };

      animate();

      // Restart animation
      setTimeout(() => {
        clearInterval(clearId);
        requestAnimationFrame(animate);
      }, total * 1000);
    });
  }
}

export const divider = new Divider('.divider');
export const pattern = new Divider('.optional-repeater-pattern svg');
