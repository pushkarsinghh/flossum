# 🌸 Flossum — Terminal Text Animations Made Beautiful

> 🎬 Bring your terminal to life with smooth text animations, creative effects, and expressive CLI interactions — all powered by a single elegant library.

---

## 🚀 What is Flossum?

**Flossum** is an open-source Node.js library and CLI tool for beautiful and expressive terminal animations. Whether you’re building command-line tools, scripts, or just want to add flair to your output, Flossum lets your terminal bloom. 🌸

---

## ✨ Features

* 📜 Typewriter effect
* 🌊 Wave text animation
* 🌈 Rainbow and color pulse effects
* 🎛️ Frame-based animation player
* 🌀 Glitch and scramble effects
* 🔁 Spinners and progress bars
* 🔄 Reverse type-out effect

---

## 📦 Installation

Install via npm:

```bash
npm install flossum
```

Or install globally for CLI usage:

```bash
npm install -g flossum
```

---

## 🔧 Usage (Programmatic API)

```js
import { flossum } from 'flossum';

await flossum.typeOut("Hello World", 60);
await flossum.wave("Wavy text animation");
await flossum.colorPulse("Color pulse!");
await flossum.playFrames(["[=   ]", "[==  ]", "[=== ]"], { delay: 100 });
await flossum.glitch("System Glitch...");
await flossum.rainbow("🌈 Taste the rainbow!");
await flossum.reverseType("Reversing...");
await flossum.progressBar({ width: 30 });
await flossum.scramble("Decoding...");
await flossum.spinner("Loading...");
```

---

## 💻 CLI Usage

```bash
flossum typeOut "Hello World"
flossum wave "Bloom from the Terminal!"
flossum glitch "⚡ Glitch Mode"
flossum scramble "🔍 Decoding..."
flossum spinner "⏳ Please wait..."
flossum pulse "🎨 Color pulse!"
flossum rainbow "🌈 Taste the rainbow!"
flossum reverse "Backwards magic"
flossum progress

# For help:
flossum --help
```

---

## 📁 Project Structure

```
flossum/
├── lib/
│   ├── core/         # Utilities and frame player
│   ├── simple/       # Basic one-line animations
│   └── effects/      # Advanced effects (glitch, wave, etc.)
├── bin/              # CLI entry point
├── examples/         # Demos and test scripts
├── index.js          # Public API
├── package.json
└── README.md
```

---

## 🧪 Try the Demo

```bash
node examples/demo.js
```

> See all animations in action, beautifully rendered in sequence!

---

## 🧑‍💻 Contributing

We'd love your help growing Flossum! New animations, bug fixes, CLI features, docs — all contributions welcome.

Good first issues:

* Add a `bounce()` effect
* Add `asciiArt()` using figlet
* Create config support for CLI (`.flossumrc`)
* Improve CLI error handling / customization

### Steps to Contribute

1. Fork the repo
2. Create a feature branch
3. Add your animation or improvement
4. Run tests using `node examples/demo.js`
5. Open a PR ✨

---

## 📝 License

## License

This project is licensed under the [MIT License](./LICENSE) © 2025 Pushkar Singh.

---

## 🔗 Links

* 🔸 GitHub: [github.com/pushkarsingh/flossum](https://github.com/pushkarsingh/flossum)
* 🔸 NPM: [npmjs.com/package/flossum](https://www.npmjs.com/package/flossum)
* 🌐 Website: Coming soon!

---

## 🌺 Let your terminal bloom.

```
🌸 flossum — CLI animations that feel alive
```
