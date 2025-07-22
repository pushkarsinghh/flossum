import { typeOut } from './lib/simple/type.js';
import { wave } from './lib/effects/wave.js';
import { reverseType } from './lib/simple/reverseType.js';
import { progressBar } from './lib/simple/progressBar.js';
import { colorPulse } from './lib/simple/pulse.js';
import { playFrames } from './lib/core/framePlayer.js';
import { glitch } from './lib/effects/glitch.js';
import { rainbow } from './lib/effects/rainbow.js';
import { scramble } from './lib/effects/scramble.js';
import { spinner } from './lib/simple/spinner.js';
import { asciiArt } from './lib/effects/asciiArt.js';
import {flash} from './lib/simple/flash.js';
import {typeDelete} from "./lib/simple/typeDelete.js";
const flossum = {
  typeOut,
  spinner,
  reverseType,
  progressBar,
  wave,
  glitch,
  scramble,
  rainbow,
  colorPulse,
  playFrames,
  asciiArt,
  flash, 
  typeDelete
};

export { flossum };
export default flossum;
