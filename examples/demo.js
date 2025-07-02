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
  await simple.typeOut("Hello from Flossum!", 75);
  await effects.wave("Pushkar is coding 🛠️", { duration: 1500 });
  await simple.colorPulse("🎨 Rainbow vibes incoming...");
  await core.playFrames(frames, { delay: 120, repeat: 2 });
  await effects.glitch("This might break your terminal...");
  await effects.scramble("Decoding secrets...", { duration: 1000 });
  await simple.spinner("Loading...", 2000);
})();
