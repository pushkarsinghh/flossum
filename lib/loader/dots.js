import { clearLine, sleep } from '../core/utils.js';

export async function dots(text = '', options = {}) {
    const {
        cycles = 5,
        interval = 300,
        char = '.',
        maxDots = 3
    } = options;

    for (let cycle = 0; cycle < cycles; cycle++) {
        for (let i = 1; i <= maxDots; i++) {
            clearLine();
            const dots = char.repeat(i);
            process.stdout.write(`${text}${dots}`)
            await sleep(interval);
        }
    }

    clearLine();
    process.stdout.write(`${text}${char.repeat(maxDots)}\n`)
}
