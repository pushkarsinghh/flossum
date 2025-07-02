import { sleep } from '../core/utils.js';

export async function typeOut(text, speed = 50) {
  for (const char of text) {
    process.stdout.write(char);
    await sleep(speed);
  }
  process.stdout.write('\n');
}