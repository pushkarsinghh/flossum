# Commands

## `typeout`
Types text character by character

**Options:**
* `-s, --speed <ms>` — typing speed (default: `50`)

**Example:**
```bash
flossum typeout "Hello there" -s 80
```

---

## `reverse`
Reveals text from end to start

**Options:**
* `-s, --speed <ms>` — typing speed (default: `50`)

**Example:**
```bash
flossum reverse "Goodbye" -s 60
```

---

## `wave`
Animated wave effect with colors

**Options:**
* `-d, --duration <ms>` — animation duration (default: `2000`)

**Example:**
```bash
flossum wave "Wavy text" -d 3000
```

---

## `glitch`
Glitchy text animation

**Options:**
* `-d, --duration <ms>` — animation duration (default: `2000`)
* `-s, --steps <number>` — number of glitch steps (default: `10`)

**Example:**
```bash
flossum glitch "Error" -d 1500 -s 15
```

---

## `scramble`
Scrambles characters into place

**Options:**
* `-d, --duration <ms>` — animation duration (default: `1000`)

**Example:**
```bash
flossum scramble "Decrypting..." -d 2000
```

---

## `rainbow`
Cycles through rainbow colors

**Options:**
* `-d, --duration <ms>` — animation duration (default: `2000`)

**Example:**
```bash
flossum rainbow "Colorful text" -d 3000
```

---

## `pulse`
Color pulsing animation

**Options:**
* `-d, --duration <ms>` — animation duration (default: `2000`)

**Example:**
```bash
flossum pulse "Pulsing text" -d 2500
```

---

## `spinner`
Displays a loading spinner

**Options:**
* `-d, --duration <ms>` — spinner duration (default: `2000`)

**Example:**
```bash
flossum spinner "Loading..." -d 5000
```

---

## `dots`
Loading animation with dots

**Options:**
* `-c, --cycles <number>` — number of cycles (default: `5`)
* `-i, --interval <ms>` — interval between dots (default: `300`)
* `--char <string>` — dot character (default: `.`)
* `-m, --max-dots <number>` — maximum dots (default: `3`)

**Example:**
```bash
flossum dots "Processing" -c 10 -i 200 -m 5
```

---

## `progress`
Displays a progress bar

**Options:**
* `-w, --width <number>` — bar width (default: `30`)
* `-d, --duration <ms>` — animation duration (default: `2000`)
* `-c, --char <string>` — progress character (default: `█`)

**Example:**
```bash
flossum progress -w 50 -d 3000 -c "="
```

---

## `flash`
Flashes text on and off

**Options:**
* `-f, --flashes <number>` — number of flashes (default: `6`)
* `-i, --interval <ms>` — interval between flashes (default: `150`)

**Example:**
```bash
flossum flash "Alert" -f 10 -i 100
```

---

## `typeDelete`
Types text then deletes it

**Options:**
* `-d, --delay <ms>` — typing delay (default: `100`)
* `--delete-delay <ms>` — deletion delay (default: `100`)
* `-p, --pause <ms>` — pause before deleting (default: `1000`)
* `-r, --repeat` — repeat infinitely (default: `false`)

**Example:**
```bash
flossum typeDelete "Temporary text" -d 50 -p 2000
flossum typeDelete "Forever" -r
```

---

## Help

Show all commands:
```bash
flossum --help
```

Show help for specific command:
```bash
flossum typeout --help
```
