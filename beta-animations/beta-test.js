import flossum from '../index.js';
import flossumExtensions from './flossum-beta.js';

Object.assign(flossum, flossumExtensions);

const frames = [
  '[     ]',
  '[=    ]',
  '[==   ]',
  '[===  ]',
  '[==== ]',
  '[=====]',
  '[ ====]',
  '[  ===]',
  '[   ==]',
  '[    =]',
  '[     ]'
];

(async () => {
  console.log(await flossum.asciiArt("Flossum (BETA)", { duration: 2000 }));
  await flossum.dots("Loading", { cycles: 5, interval: 300 });
  await flossum.confetti({ duration: 1200, count: 80 });
  await flossum.slideIn('Entering Game...', { direction: 'left', duration: 450 });
  await flossum.fade('Fading in...', { duration: 600 });
  await flossum.shake('BOOM!', { magnitude: 3 });
  await flossum.flip('CARD', { flipTo: '🙂', duration: 300 });
  await flossum.marquee('New game: SpeedType!', { speed: 50, loop: false });
  await flossum.caret('Type your name: ', { speed: 35, blinkTimes: 6 });
})();
