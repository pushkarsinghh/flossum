async function typeOut(text, speed = 50) {
  for (const char of text) {
    process.stdout.write(char);
    await new Promise(res => setTimeout(res, speed));
  }
  process.stdout.write('\n');
}

export { typeOut };
