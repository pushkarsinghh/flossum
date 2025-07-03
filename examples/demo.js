import { simple, effects, core } from '../index.js';

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
  await simple.typeOut("🚀 Welcome to the Flossum Demo!", 60);
  await effects.wave("✨ Watch the magic unfold...", { duration: 1800 });
  await simple.colorPulse("🌈 Feel the rainbow energy!");
  await core.playFrames(frames, { delay: 90, repeat: 3 });
  await effects.glitch("⚡ Glitching the matrix...");
  await effects.rainbow("🌈 Taste the rainbow!", { duration: 1500 });
  await simple.reverseType("Bye bye Bloom!", 60);
  await simple.progressBar({ width: 20, duration: 1500 });
  await effects.scramble("🔍 Unraveling mysteries...", { duration: 1200 });
  await simple.spinner("⏳ Please wait while we prepare awesomeness...", 2500);
  await simple.typeOut("🎉 All done! Enjoy coding!", 50);
})();
