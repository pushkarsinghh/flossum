export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function clearLine() {
  process.stdout.clearLine(0);
  process.stdout.cursorTo(0);
}

export function cursorTo(x, y = null) {
  if (y === null) {
    process.stdout.cursorTo(x);
  } else {
    process.stdout.cursorTo(x, y);
  }
}

export function repeat(str, times) {
  return new Array(times + 1).join(str);
}