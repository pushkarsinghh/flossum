import { typeOut } from './lib/simple/type.js';
import { wave } from './lib/effects/wave.js';
import { colorPulse } from './lib/simple/pulse.js';
import { playFrames } from './lib/core/framePlayer.js';
import { glitch } from './lib/effects/glitch.js';
import { scramble } from './lib/effects/scramble.js';
import { spinner } from './lib/simple/spinner.js';
import { rainbow } from './lib/effects/rainbow.js';
import { reverseType } from './lib/simple/reverseType.js';
import { progressBar } from './lib/simple/progressBar.js';

export const flossum = { typeOut, playFrames, spinner, reverseType, progressBar, 
  colorPulse, wave, glitch, scramble, rainbow };
// export const effects = { wave, glitch, scramble, rainbow };
// export const core = { playFrames };
