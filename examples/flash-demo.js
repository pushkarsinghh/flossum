import flash from '../lib/simple/flash.js';
(async () => {
  await flash("⚠️ Warning!", {
    flashes: 6,
    interval: 150
  });
})();
