import { typeOut } from './lib/simple/type.js';
import { wave } from './lib/effects/wave.js';
import { colorPulse } from './lib/simple/pulse.js';
import { playFrames } from './lib/core/framePlayer.js';
import { glitch } from './lib/effects/glitch.js';
import { scramble } from './lib/effects/scramble.js';
import { spinner } from './lib/simple/spinner.js';
import { asciiArt } from './lib/effects/asciiArt.js';

export const simple = { typeOut, colorPulse, spinner };
export const effects = { wave, glitch, scramble, asciiArt };
export const core = { playFrames };

