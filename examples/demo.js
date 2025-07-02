import { wave, typeOut, colorPulse } from '../index.js';

(async () => {
  await wave("Pushkar is coding 🛠️", { duration: 4000 });
  await typeOut("This is a typing animation demo.", 100);
  await colorPulse("This is a color pulse animation demo.", 2000);
})();
