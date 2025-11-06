import { animate, onScroll, splitText, stagger } from 'animejs';

class Animatables {
  constructor() {}

  init() {
    const $accordion = document.querySelectorAll('.accordion-main');
    $accordion.forEach(($accordion) => {
      const $list = $accordion.querySelectorAll('.accordion-list');
      $list.forEach(($item, $i) => {
        animate($item, {
          translateY: [
            { from: '40', duration: 500, delay: 0 },
            { to: '0', duration: 1000 * $i * 500, delay: 1000 + $i * 500 },
          ],
          marginTop: [
            { from: '30', duration: 500, delay: 0 },
            { to: '0', duration: 1000 * $i * 500, delay: 1000 + $i * 500 },
          ],
          opacity: [
            { from: '0', duration: 500, delay: 0 },
            { to: '1', duration: 1000 * $i * 500, delay: 1000 + $i * 500 },
          ],
          duration: 2000,
          autoplay: onScroll({
            enter: '100% 0%',
            leave: '50 -25',
          }),
        });
      });
    });

    // h2
    // splitText('h2', {
    //   lines: { wrap: 'clip' },
    // }).addEffect(({ lines }) =>
    //   animate(lines, {
    //     y: [{ to: ['100%', '0%'] }, { to: '0%', delay: 750, ease: 'in(3)' }],
    //     duration: 750,
    //     ease: 'out(3)',
    //     delay: stagger(200),
    //     autoplay: onScroll({
    //       enter: '100% 0%',
    //       leave: '50 -25',
    //     }),
    //   })
    // );
  }
}

export const animatables = new Animatables();

// import { animate, onScroll } from 'animejs';

// class Animatables {
//   constructor() {}

//   init() {
//     const $accordion = document.querySelectorAll('.accordion-main');
//     $accordion.forEach(($accordion) => {
//       const $list = $accordion.querySelectorAll('.accordion-list');
//       $list.forEach(($item, $i) => {
//         const createAnim = (from, to) => [
//           { from, duration: 500, delay: 0 },
//           { to, duration: 1000 * $i * 500, delay: 1000 + $i * 500 },
//         ];

//         animate($item, {
//           translateY: createAnim('40', '0'),
//           marginTop: createAnim('40', '0'),
//           opacity: createAnim('0', '1'),
//           duration: 2000,
//           autoplay: onScroll({
//             enter: '100% 0%',
//             leave: '50 -25',
//           }),
//         });
//       });
//     });
//   }
// }

// export const animatables = new Animatables();
