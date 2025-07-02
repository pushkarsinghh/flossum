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
import { simple, effects, core } from 'flossum';

await simple.typeOut("Hello!");
await effects.wave("Wavy Text");
await effects.glitch("Glitchy Output");
await effects.scramble("Scrambled Message");
await simple.spinner("Loading...");

const frames = ["[=   ]", "[==  ]", "[=== ]", "[====]", "[=== ]", "[==  ]", "[=   ]"];
await core.playFrames(frames, { delay: 100, repeat: 2 });
```

---

## ⚙️ CLI Usage

```bash
flossum typeOut "Hello World"
flossum wave "Bloom from the Terminal!"
flossum glitch "System Hack"
flossum scramble "Decrypting..."
flossum spinner "Loading..."
```

```bash
flossum --help
```

> Lists all available animations and usage instructions.

---

## 🎬 Demo

```bash
node examples/demo.js
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
