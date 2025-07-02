import chalk from 'chalk';

async function colorPulse(text, duration = 2000) {
  const colors = ['red', 'yellow', 'green', 'cyan', 'blue', 'magenta'];
  const frames = 20;

  for (let i = 0; i < frames; i++) {
    const color = chalk[colors[i % colors.length]];
    process.stdout.write(`\r${color(text)}`);
    await new Promise(res => setTimeout(res, duration / frames));
  }
  process.stdout.write('\n');
}

export { colorPulse };