import chalk from 'chalk';
import { sleep } from '../core/utils.js';

const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{};:,<.>/';

function randomChar() {
  return chars[Math.floor(Math.random() * chars.length)];
}

export async function glitch(text, { duration = 2000, steps = 10 } = {}) {
  for (let i = 0; i < steps; i++) {
    const glitched = text
      .split('')
      .map((char, idx) => (Math.random() < 0.3 ? chalk.redBright(randomChar()) : char))
      .join('');
    process.stdout.write(`\r${glitched}`);
    await sleep(duration / steps);
  }
  process.stdout.write(`\r${text}\n`);
}