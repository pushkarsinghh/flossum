# 🌸 Flossum

> 🎬 Beautiful and minimal terminal animations for your CLI projects, scripts, and creative coding. Bring your text to life with expressive effects.

---

## ✨ Features

* ⌨️ Typewriter effect (`typeOut`)
* 🌊 Wavy text animation (`wave`)
* 🌈 Color pulsing effect (`colorPulse`)
* 🔁 Spinner animation (`spinner`)
* 🤯 Glitch text effect (`glitch`)
* 🧩 Scramble decoder effect (`scramble`)
* 🎞 Frame-based ASCII animation player (`playFrames`)
* 🅰️ ASCII art text rendering (`asciiArt`)

---

## 📦 Installation

```bash
npm install flossum
```

Or for CLI usage:

```bash
npm install -g flossum
```

---

## 🧪 Usage (API)

```js
import flossum from 'flossum';

await flossum.typeOut("Hello!");
await flossum.wave("Wavy Text");
await flossum.glitch("Glitchy Output");
await flossum.scramble("Scrambled Message");
await flossum.spinner("Loading...");
await flossum.log(effects.asciiArt("ASCII!", { font: "block", colors: ["cyan", "magenta"] }));

const frames = ["[=   ]", "[==  ]", "[=== ]", "[====]", "[=== ]", "[==  ]", "[=   ]"];
await flossum.playFrames(frames, { delay: 100, repeat: 2 });
```

---

## ⚙️ CLI Usage

```bash
flossum typeOut "Hello World" 60
flossum reverseType "Backwards magic" 60
flossum wave "Wavy Text" --amplitude 3
flossum colorPulse "Pulse!" --colors red,green,blue --duration 1000
flossum glitch "Glitch!" --intensity 4
flossum scramble "Secret..." --delay 50
flossum rainbow "🌈" --duration 2000
flossum spinner "Please wait..."
flossum progressBar --width 40 --total 100
flossum playFrames --frames "[= ]" "[==]" "[===]" --delay 100 --repeat 2
```

```bash
flossum --help
```

> Lists all available animations and usage instructions.

---

## 🎬 Demo

```bash
node examples/demo.js
node examples/asciiArtDemo.js
```

This file runs a showcase of all available animations. Perfect for testing or showing off!

---

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

---

## 🧑‍💻 Contributing

1. Fork the repo
2. Create a new branch: `git checkout -b feature/new-animation`
3. Add your effect in the correct folder (simple/effects/core)
4. Test it in `examples/`
5. Open a PR ❤️

---

## 🧾 License

MIT © Pushkar Singh

---

## 🌐 Links

* GitHub: [github.com/pushkarsingh/flossum](https://github.com/pushkarsingh/flossum)
* NPM: [npmjs.com/package/flossum](https://www.npmjs.com/package/flossum)
* Website: Coming soon ✨
