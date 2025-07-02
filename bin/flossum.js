#!/usr/bin/env node

import { simple, effects, core } from '../index.js';

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
    case '--help':
    default:
      console.log(`🌸 Flossum CLI — Terminal Animations
Usage:
  flossum typeOut "Text"
  flossum wave "Wavy Text"
  flossum glitch "Glitchy"
  flossum scramble "Decoding..."
  flossum spinner "Loading..."

Example:
  flossum wave "Hello from Flossum"`);
  }
})();
