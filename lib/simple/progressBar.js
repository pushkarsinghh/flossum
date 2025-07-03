import { sleep } from '../core/utils.js';

export async function progressBar({ width = 30, duration = 2000, char = '█' } = {}) {
  const steps = width;
  for (let i = 0; i <= steps; i++) {
    const bar = char.repeat(i) + '-'.repeat(steps - i);
    const percent = Math.floor((i / steps) * 100);
    process.stdout.write(`\r[${bar}] ${percent}%`);
    await sleep(duration / steps);
  }
  process.stdout.write('\n');
}
