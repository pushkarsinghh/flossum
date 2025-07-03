#!/usr/bin/env node

import { simple, effects } from '../index.js';

const args = process.argv.slice(2);
const command = args[0];
const text = args.slice(1).join(' ');

(async () => {
  switch (command) {
    case 'type':
    case 'typeOut':
      await simple.typeOut(text);
      break;
    case 'wave':
      await effects.wave(text);
      break;
    case 'glitch':
      await effects.glitch(text);
      break;
    case 'scramble':
      await effects.scramble(text);
      break;
    case 'spinner':
      await simple.spinner(text);
      break;
    case 'pulse':
    case 'colorPulse':
      await simple.colorPulse(text);
      break;
    case 'rainbow':
      await effects.rainbow(text);
      break;
    case 'reverse':
    case 'reverseType':
      await simple.reverseType(text);
      break;
    case 'progress':
    case 'progressBar':
      await simple.progressBar();
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
