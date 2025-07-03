import { sleep } from '../core/utils.js';

export async function reverseType(text, speed = 50) {
  for (let i = text.length; i >= 0; i--) {
    process.stdout.write(`\r${text.slice(i)}`);
    await sleep(speed);
  }
  process.stdout.write('\n');
}
