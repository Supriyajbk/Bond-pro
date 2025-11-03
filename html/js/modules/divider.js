// class Divider {
//   constructor(selector) {
//     this.eles = document.querySelectorAll(selector);
//   }
//   load() {
//     if (this.eles.length === 0) return;
//     this.eles.forEach((ele) => {
//       Array.from(ele.children).forEach((child) => {
//         child.style.fill = '#F0F0F4';
//         child.classList.remove('fuschia');
//       });

//       const total = ele.children.length;
//       let clearId = null;
//       let activeCount = 0;

//       const animate = () => {
//         clearId = setInterval(() => {
//           const random = Math.floor(Math.random() * total);
//           ele.children[random].style.fill = '#D0009E';
//           ele.children[random].classList.add('fuschia');

//           activeCount = Array.from(ele.children).filter((child) =>
//             child.classList.contains('fuschia')
//           ).length;

//           if (activeCount > 5) {
//             const indices = Array.from({ length: total }, (_, i) => i);
//             indices.sort(() => Math.random() - 0.5);

//             indices.forEach((index, i) => {
//               setTimeout(() => {
//                 ele.children[index].style.fill = '#F0F0F4';
//                 ele.children[index].classList.remove('fuschia');
//               }, i * 1000);
//             });

//             // for (let i = 1; i < 5; i++) {
//             //   setTimeout(() => {
//             //     Array.from(ele.children).forEach((child) => {
//             //       child.style.fill = '#F0F0F4';
//             //       child.classList.remove('fuschia');
//             //     });
//             //   }, i * 1000);
//             // }
//             // Array.from(ele.children).forEach((child) => {
//             //   child.style.fill = '#F0F0F4';
//             //   child.classList.remove('fuschia');
//             // });
//             activeCount = 0;
//           }
//         }, 500);
//       };

//       animate();

//       setTimeout(() => {
//         clearInterval(clearId);
//         requestAnimationFrame(animate);
//       }, total * 1000);
//     });
//   }
// }
// export const divider = new Divider('.divider');
// export const pattern = new Divider('.optional-repeater-pattern svg');

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
          // 1️⃣ Randomly choose how many (3–5)
          const count = Math.floor(Math.random() * 3) + 3; // 3–5

          // 2️⃣ Pick random unique indices
          const indices = [...Array(total).keys()]
            .sort(() => Math.random() - 0.5)
            .slice(0, count);

          // 3️⃣ Add class and fill to those
          indices.forEach((i) => {
            children[i].style.fill = '#D0009E';
            children[i].classList.add('fuschia');
          });

          // 4️⃣ Remove the same elements after a short delay
          setTimeout(() => {
            indices.forEach((i) => {
              children[i].style.fill = '#F0F0F4';
              children[i].classList.remove('fuschia');
            });
          }, 1000); // remove same after 1 second
        }, 1500); // next batch after 1.5s
      };

      animate();

      // Restart animation periodically (optional)
      setTimeout(() => {
        clearInterval(clearId);
        requestAnimationFrame(animate);
      }, total * 1000);
    });
  }
}

export const divider = new Divider('.divider');
export const pattern = new Divider('.optional-repeater-pattern svg');
