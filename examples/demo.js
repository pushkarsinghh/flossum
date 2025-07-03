import { flossum } from '../index.js';

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
  await flossum.typeOut("🚀 Welcome to the Flossum Demo!", 60);
  await flossum.wave("✨ Watch the magic unfold...", { duration: 1800 });
  await flossum.colorPulse("🌈 Feel the rainbow energy!");
  await flossum.playFrames(frames, { delay: 90, repeat: 3 });
  await flossum.glitch("⚡ Glitching the matrix...");
  await flossum.rainbow("🌈 Taste the rainbow!", { duration: 1500 });
  await flossum.reverseType("Bye bye Bloom!", 60);
  await flossum.progressBar({ width: 20, duration: 1500 });
  await flossum.scramble("🔍 Unraveling mysteries...", { duration: 1200 });
  await flossum.spinner("⏳ Please wait while we prepare awesomeness...", 2500);
  await flossum.typeOut("🎉 All done! Enjoy coding!", 50);
})();
