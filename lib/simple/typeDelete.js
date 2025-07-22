import { clearLine, sleep } from "../core/utils.js";

export  async function typeDelete(text, options = {}) {
  const {
    delay = 100,
    deleteDelay = 100,
    pause = 1000,
    repeat = false
  } = options;

  do {
    // Typing phase
    for (let i = 0; i <= text.length; i++) {
      clearLine();
      process.stdout.write(text.slice(0, i));
      await sleep(delay);
    }

    await sleep(pause);

    // Deleting phase
    for (let i = text.length; i >= 0; i--) {
      clearLine();
      process.stdout.write(text.slice(0, i));
      await sleep(deleteDelay);
    }

    if (!repeat) break;
  } while (true);
}
