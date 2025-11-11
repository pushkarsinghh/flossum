const ESC = "\u001b[";

function clearLine() {
  process.stdout.write(ESC + '2K' + '\r');
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function colorize(char, colorCode) {
  return `${ESC}38;5;${colorCode}m${char}${ESC}0m`;
}

export async function confetti({ duration = 1200, count = 60, width = process.stdout.columns || 80 } = {}) {
  const frames = Math.max(6, Math.floor(duration / 50));
  const palette = [196, 202, 226, 82, 45, 39, 129, 201];

  const particles = Array.from({ length: count }).map(() => ({
    x: randInt(0, width - 1),
    y: 0,
    char: ['*', '·', '•', '◆', '■'][randInt(0, 4)],
    color: palette[randInt(0, palette.length - 1)],
    vx: randInt(-1, 1)
  }));

  const height = Math.min(20, Math.floor((process.stdout.rows || 24) / 2));

  for (let f = 0; f < frames; f++) {
    // build buffer of lines
    const buffer = Array.from({ length: height }, () => Array(width).fill(' '));
    for (const p of particles) {
      const x = Math.max(0, Math.min(width - 1, Math.round(p.x)));
      const y = Math.max(0, Math.min(height - 1, Math.round(p.y)));
      buffer[y][x] = colorize(p.char, p.color);
      p.x += p.vx + (Math.random() - 0.5) * 0.8;
      p.y += 1 + Math.random() * 0.8;
    }

    // render
    process.stdout.write(ESC + 'H'); // move to top-left
    for (const line of buffer) {
      process.stdout.write(line.join('') + '\n');
    }

    await sleep(duration / frames);
  }

  // clear area
  process.stdout.write(ESC + 'H');
  for (let i = 0; i < height; i++) process.stdout.write('\n');
  clearLine();
  return Promise.resolve();
}

export async function slideIn(text, { direction = 'left', duration = 400, easing = null } = {}) {
  const cols = process.stdout.columns || 80;
  const steps = Math.max(6, Math.floor(duration / 16));
  const padMax = cols - text.length - 2;
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const eased = t; // keep linear for simplicity; user-level easing can be added
    let pad = Math.floor(eased * padMax);
    if (direction === 'left') pad = padMax - pad;
    clearLine();
    process.stdout.write(' '.repeat(pad) + text + '\r');
    await sleep(duration / steps);
  }
  process.stdout.write('\n');
  return Promise.resolve();
}

export async function fade(text, { duration = 600, steps = 12 } = {}) {
  // Simulate fade by printing text with increasing "brightness" using 256-color gray ramp
  const total = Math.max(3, steps);
  const grayStart = 240;
  const grayEnd = 255;
  for (let i = 0; i <= total; i++) {
    const idx = Math.floor(grayStart + ((grayEnd - grayStart) * (i / total)));
    clearLine();
    process.stdout.write(`\u001b[38;5;${idx}m${text}\u001b[0m\r`);
    await sleep(duration / total);
  }
  process.stdout.write('\n');
  return Promise.resolve();
}

export async function shake(text, { magnitude = 2, duration = 300, frequency = 30 } = {}) {
  const steps = Math.max(4, Math.floor(duration / frequency));
  for (let i = 0; i < steps; i++) {
    const offset = Math.round(Math.sin(i * 2.0) * magnitude);
    clearLine();
    process.stdout.write(' '.repeat(Math.abs(offset)) + text + '\r');
    await sleep(frequency);
  }
  clearLine();
  process.stdout.write(text + '\n');
  return Promise.resolve();
}

export async function flip(text, { flipTo = null, axis = 'y', duration = 300, steps = 10 } = {}) {
  // Simple flip animation: shrink horizontally to 0 then expand with new text (if provided)
  const original = text;
  const target = flipTo == null ? text : flipTo;
  const maxLen = Math.max(original.length, target.length);
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    // shrink then expand
    const phase = i <= steps / 2 ? i : steps - i;
    const visible = Math.max(0, Math.round((phase / (steps / 2)) * maxLen));
    const left = Math.floor((maxLen - visible) / 2);
    const right = maxLen - visible - left;
    const showStr = i <= steps / 2 ? original : target;
    clearLine();
    process.stdout.write(' '.repeat(left) + showStr.substr(0, visible) + ' '.repeat(right) + '\r');
    await sleep(duration / steps);
  }
  clearLine();
  process.stdout.write(target + '\n');
  return Promise.resolve();
}

export async function marquee(text, { speed = 60, loop = false, padding = 8 } = {}) {
  // scroll text from right to left
  const cols = process.stdout.columns || 80;
  const padded = ' '.repeat(padding) + text + ' '.repeat(cols);
  let idx = 0;
  do {
    for (idx = 0; idx < padded.length - cols; idx++) {
      clearLine();
      process.stdout.write(padded.substr(idx, cols) + '\r');
      await sleep(speed);
    }
  } while (loop);
  process.stdout.write('\n');
  return Promise.resolve();
}

export async function caret(text, { speed = 40, blinkTimes = 6 } = {}) {
  // type the text with a blinking caret at the end
  for (let i = 0; i <= text.length; i++) {
    clearLine();
    process.stdout.write(text.substr(0, i) + (i < text.length ? '|' : '') + '\r');
    await sleep(speed);
  }
  for (let b = 0; b < blinkTimes; b++) {
    clearLine();
    process.stdout.write(text + ' ' + '\r');
    await sleep(220);
    clearLine();
    process.stdout.write(text + '|' + '\r');
    await sleep(220);
  }
  process.stdout.write('\n');
  return Promise.resolve();
}

export default {
  confetti,
  slideIn,
  fade,
  shake,
  flip,
  marquee,
  caret
};
