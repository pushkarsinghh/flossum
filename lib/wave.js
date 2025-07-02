import chalk from 'chalk';

async function wave(text, options = {}) {
  const duration = options.duration || 2000;
  const frames = 10;
  const waveHeight = 3;

  for (let i = 0; i < frames; i++) {
    const frame = text
      .split('')
      .map((char, idx) => {
        const offset = Math.sin((i + idx) / 2) * waveHeight;
        const r = Math.max(0, Math.min(255, Math.round(255 - offset * 20)));
        const g = Math.max(0, Math.min(255, Math.round(100 + offset * 30)));
        const b = 255;
        return chalk.rgb(r, g, b)(char);
      })
      .join('');

    process.stdout.write(`\r${frame}`);
    await new Promise(res => setTimeout(res, duration / frames));
  }
  process.stdout.write('\n');
}

export { wave };
