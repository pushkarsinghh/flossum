import { delay, clearLine } from '../core/utils.js';

async function flash(text, options = {}) {
  const {
    flashes = 6,
    interval = 150
  } = options;

  for (let i = 0; i < flashes; i++) {
    process.stdout.write(text);
    await delay(interval);

    clearLine();
    await delay(interval);
  }

  await delay(100);
}

export default flash;
