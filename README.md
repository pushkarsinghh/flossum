# 🌸 Flossum

> Beautiful and minimal terminal animations for your CLI projects, scripts, and creative coding. Bring your text to life with expressive effects.

**🎬 [Watch the Video Demo](https://www.youtube.com/watch?v=18lzkb331Gk)**


## ✨ Available Animations
* ⌨️ Typewriter effect (`typeOut`)
* ⏪ Reverse typewriter effect (`reverseType`)
* 🌊 Wavy text animation (`wave`)
* 🌈 Color pulsing effect (`colorPulse`)
* 🔁 Spinner animation (`spinner`)
* 📊 Progress bar animation (`progressBar`)
* 🤯 Glitch text effect (`glitch`)
* 🧩 Scramble decoder effect (`scramble`)
* 🌈 Rainbow text animation (`rainbow`)
* 🎞 Frame-based ASCII animation player (`playFrames`)
* 🅰️ ASCII art text rendering (`asciiArt`)
* ⚡ Flashing text effect (`flash`)
* ✂️ Type-delete effect (`typeDelete`)

## 📦 Installation

```bash
npm install flossum
```

Or for CLI usage:

```bash
npm install -g flossum
```

## 🧪 Usage (API)

```js
import flossum from 'flossum';

await flossum.typeOut("🚀 Welcome to Flossum!", 60);
await flossum.wave("✨ Watch the magic unfold...", { duration: 1800 });
await flossum.progressBar({ width: 20, duration: 1500 });
await flossum.colorPulse("🌈 Feel the rainbow energy!");
await flossum.playFrames([
  '[     ]', '[=    ]', '[==   ]', '[===  ]', '[==== ]', '[=====]', '[ ====]', '[  ===]', '[   ==]', '[    =]', '[     ]',
], { interval: 3000, delay: 90, repeat: 3});

```


## ⚙️ CLI Usage

```bash
flossum typeOut "Hello World"
flossum reverseType "Backwards magic"
flossum wave "Wavy Text"
flossum colorPulse "Pulse!"
flossum glitch "Glitch!"
flossum scramble "Secret..."
flossum rainbow "🌈"
flossum spinner "Please wait..."
flossum progressBar
flossum flash "⚡ Flashing now!"
flossum typeDelete "Deleting now..."
```

```bash
flossum --help
```

> Lists all available animations and usage instructions.

## 🎬 Demo

```bash
node examples/demo.js
```
or
```bash
npm run demo
```

This will run a showcase of all available animations. Perfect for testing purposes!


## 📁 Project Structure

```
flossum/
├── lib/
│   ├── core/       # Utilities and frame player
│   ├── simple/     # Basic animations
│   └── effects/    # Text effects (wave, glitch, etc.)
├── examples/       # Example usage scripts
├── bin/            # CLI entrypoint
├── index.js        # Export API
├── package.json
└── README.md
```


## 🧑‍💻 Contributing

1. Fork the repo
2. Create a new branch: `git checkout -b feature/new-animation`
3. Add your effect in the correct folder (simple/effects/core)
4. Test it in `examples/`
5. Open a PR ❤️

## 🧾 License

MIT © [Pushkar Singh](https://github.com/pushkarsingh/flossum)

See [LICENSE](./LICENSE) for details.


## 🌐 Links

* GitHub: [github.com/pushkarsingh/flossum](https://github.com/pushkarsingh/flossum)
* NPM: [npmjs.com/package/flossum](https://www.npmjs.com/package/flossum)
* Website: [flossum.vercel.app](https://flossum.vercel.app)


