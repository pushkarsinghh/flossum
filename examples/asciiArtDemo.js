import flossum from 'flossum';

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
    await flossum.typeOut("🚀 Welcome to the asciiArt Demo!", 60);
    console.log(await flossum.asciiArt("🚀 Welcome to the Flossum Demo!", { duration: 2000}));
    console.log(await flossum.asciiArt("✨ Watch the magic unfold...", { duration: 1800 }));
    console.log(await flossum.asciiArt("🌈 Feel the rainbow energy!", { duration: 1500 }));
    console.log(await flossum.asciiArt(frames.join('\n'), { duration: 900, steps: 10 }));
    console.log(await flossum.asciiArt("⚡ Glitching the matrix...", { duration: 2000 }));
    console.log(await flossum.asciiArt("🔍 Unraveling mysteries...", { duration: 1200 }));
    console.log(await flossum.asciiArt("⏳ Please wait while we prepare awesomeness...", { duration: 2500 }));
    console.log(await flossum.asciiArt("🎉 All done! Enjoy coding!", { duration: 1000 }));
})();
