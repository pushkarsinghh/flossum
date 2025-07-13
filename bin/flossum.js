#!/usr/bin/env node

import flossum from '../index.js';

const args = process.argv.slice(2);
const command = args[0];
const text = args.slice(1).join(' ');

(async () => {
  switch (command) {
    case 'type':
    case 'typeOut':
      await flossum.typeOut(text);
      break;
    case 'wave':
      await flossum.wave(text);
      break;
    case 'glitch':
      await flossum.glitch(text);
      break;
    case 'scramble':
      await flossum.scramble(text);
      break;
    case 'spinner':
      await flossum.spinner(text);
      break;
    case 'pulse':
    case 'colorPulse':
      await flossum.colorPulse(text);
      break;
    case 'rainbow':
      await flossum.rainbow(text);
      break;
    case 'reverse':
    case 'reverseType':
      await flossum.reverseType(text);
      break;
    case 'progress':
    case 'progressBar':
      await flossum.progressBar();
      break;
    case '--help':
    default:
      console.log(`
🌸 Flossum CLI — Terminal Animations

Usage:
  flossum typeOut "Hello World"
  flossum wave "Wavy text"
  flossum glitch "Glitchy..."
  flossum scramble "Scrambling..."
  flossum spinner "Loading..."
  flossum pulse "Color Pulse"
  flossum rainbow "Taste the rainbow"
  flossum reverse "Goodbye!"
  flossum progress

Options:
  --help        Show this help message
`);
  }
})();
