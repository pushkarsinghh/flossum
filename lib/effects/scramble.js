import { sleep } from '../core/utils.js';

const pool = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

function scrambleStep(target, progress) {
  return target
    .split('')
    .map((char, i) => {
      if (i < progress) return char;
      return pool[Math.floor(Math.random() * pool.length)];
    })
    .join('');
}

export async function scramble(text, { duration = 1000 } = {}) {
  const steps = text.length;
  for (let i = 0; i <= steps; i++) {
    const scrambled = scrambleStep(text, i);
    process.stdout.write(`\r${scrambled}`);
    await sleep(duration / steps);
  }
  process.stdout.write('\n');
}