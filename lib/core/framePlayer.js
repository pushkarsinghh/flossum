import { sleep, clearLine } from './utils.js';

export async function playFrames(frames, { delay = 100, repeat = 1 } = {}) {
  const loop = repeat === -1 ? Infinity : repeat;

  for (let r = 0; r < loop; r++) {
    for (const frame of frames) {
      clearLine();
      process.stdout.write(frame);
      await sleep(delay);
    }
  }
  clearLine();
}