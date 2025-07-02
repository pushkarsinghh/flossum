import { sleep } from '../core/utils.js';

export async function spinner(text = '', duration = 2000) {
  const frames = ['|', '/', '-', '\\'];
  const interval = 100;
  const cycles = Math.ceil(duration / interval);

  for (let i = 0; i < cycles; i++) {
    const frame = frames[i % frames.length];
    process.stdout.write(`\r${frame} ${text}`);
    await sleep(interval);
  }
  process.stdout.write('\n');
}