import { wave, typeOut } from '../index.js';

(async () => {
  await wave("Pushkar is coding 🛠️", { duration: 4000 });
  await typeOut("This is a typing animation demo.", 100);
})();
