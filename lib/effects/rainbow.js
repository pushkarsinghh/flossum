import chalk from 'chalk';
import { sleep } from '../core/utils.js';

const colors = ['red', 'yellow', 'green', 'cyan', 'blue', 'magenta'];

export async function rainbow(text, { duration = 2000 } = {}) {
  const frames = 20;

  for (let i = 0; i < frames; i++) {
    const colored = text
      .split('')
      .map((char, idx) => {
        const color = chalk[colors[(i + idx) % colors.length]];
        return color(char);
      })
      .join('');
    process.stdout.write(`\r${colored}`);
    await sleep(duration / frames);
  }
  process.stdout.write('\n');
}
