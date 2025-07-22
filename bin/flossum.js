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
    case 'flash':
      await flossum.flash(text);
      break;
    case 'typeDelete':
      await flossum.typeDelete(text);
      break;
    case '--help':
    case '-h':
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
  flossum flash "Flashing text"
  flossum typeDelete "Erasing this..."


Available Animations:
  typeOut (alias: type)
  wave
  glitch
  scramble
  spinner
  pulse (alias: colorPulse)
  rainbow
  reverse (alias: reverseType)
  progress (alias: progressBar)
  flash
  typeDelete

Options:
  --help, -h    Show this help message

GitHub: https://github.com/pushkarsinghh/flossum
`);
  }
})();