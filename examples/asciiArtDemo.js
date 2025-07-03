import {effects, simple} from '../index.js';

const frames = [
    '[     ]',
    '[=    ]',
    '[==   ]',
    '[===  ]',
    '[==== ]',
    '[=====]',
    '[ ====]',
    '[  ===]',
    '[   ==]',
    '[    =]',
    '[     ]'
];

(async () => {
    await simple.typeOut("🚀 Welcome to the asciiArt Demo!", 60);
    console.log(await effects.asciiArt("🚀 Welcome to the Flossum Demo!", { duration: 2000}));
    console.log(await effects.asciiArt("✨ Watch the magic unfold...", { duration: 1800 }));
    console.log(await effects.asciiArt("🌈 Feel the rainbow energy!", { duration: 1500 }));
    console.log(await effects.asciiArt(frames.join('\n'), { duration: 900, steps: 10 }));
    console.log(await effects.asciiArt("⚡ Glitching the matrix...", { duration: 2000 }));
    console.log(await effects.asciiArt("🔍 Unraveling mysteries...", { duration: 1200 }));
    console.log(await effects.asciiArt("⏳ Please wait while we prepare awesomeness...", { duration: 2500 }));
    console.log(await effects.asciiArt("🎉 All done! Enjoy coding!", { duration: 1000 }));
})();
