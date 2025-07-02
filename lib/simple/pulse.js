import chalk from 'chalk';
import { sleep } from '../core/utils.js';

export async function colorPulse(text, duration = 2000) {
  const colors = ['red', 'yellow', 'green', 'cyan', 'blue', 'magenta'];
  const frames = 20;

  for (let i = 0; i < frames; i++) {
    const color = chalk[colors[i % colors.length]];
    process.stdout.write(`\r${color(text)}`);
    await sleep(duration / frames);
  }
  process.stdout.write('\n');
}