#!/usr/bin/env node

import { Command } from "commander";
import flossum from "../index.js";
import pkg from "../package.json" with { type: "json" };

const program = new Command();

program.name("flossum").description("Terminal Animations").version(pkg.version);

program
  .command("typeout <text...>")
  .description("Type out text character by character")
  .option("-s, --speed <ms>", "typing speed in milliseconds", "50")
  .action(async (txt, options) => {
    await flossum.typeOut(txt.join(" "), ensureNumber(options.speed, "speed"));
  });

program
  .command("wave <text...>")
  .description("Animated wave effect with colors")
  .option("-d, --duration <ms>", "animation duration in milliseconds", "2000")
  .action((txt, options) => {
    flossum.wave(txt.join(" "), {
      duration: ensureNumber(options.duration, "duration"),
    });
  });

program
  .command("glitch <text...>")
  .description("Glitchy text animation")
  .option("-d, --duration <ms>", "animation duration in milliseconds", "2000")
  .option("-s, --steps <number>", "number of glich steps", "10")
  .action((txt, options) => {
    flossum.glitch(txt.join(" "), {
      duration: ensureNumber(options.duration, "duration"),
      steps: ensureNumber(options.steps, "steps"),
    });
  });

program
  .command("scramble <text...>")
  .description("Scramble text into place")
  .option("-d, --duration <ms>", "animation duration in milliseconds", "1000")
  .action((txt, options) => {
    flossum.scramble(txt.join(" "), {
      duration: ensureNumber(options.duration, "duration"),
    });
  });

program
  .command("spinner [text...]")
  .description("Show a loading spinner")
  .option("-d, --duration <ms>", "spinner duration in milliseconds", "2000")
  .action(async (txt, options) => {
    await flossum.spinner(
      txt.join(" "),
      ensureNumber(options.duration, "duration"),
    );
  });

program
  .command("pulse <text...>")
  .description("Color pulsing animation")
  .option("-d, --duration <ms>", "animation duration in milliseconds", "2000")
  .action((txt, options) => {
    flossum.colorPulse(
      txt.join(" "),
      ensureNumber(options.duration, "duration"),
    );
  });

program
  .command("rainbow <text...>")
  .description("Rainbow color animation")
  .option("-d, --duration <ms>", "animation duration in milliseconds", "2000")
  .action(async (txt, options) => {
    await flossum.rainbow(txt.join(" "), {
      duration: ensureNumber(options.duration, "duration"),
    });
  });

program
  .command("reverse <text...>")
  .description("Type text in reverse (reveal from end)")
  .option("-s, --speed <ms>", "typing speed in millisecondsl", "50")
  .action(async (txt, options) => {
    await flossum.reverseType(
      txt.join(" "),
      ensureNumber(options.speed, "speed"),
    );
  });

program
  .command("progress")
  .description("Show a progress bar")
  .option("-w, --width <number>", "progress bar width", "30")
  .option("-d, --duration <ms>", "animation duration in seconds", "2000")
  .option("-c, --char <string>", "progress character", "█")
  .action(async (options) => {
    await flossum.progressBar({
      width: ensureNumber(options.width, "width"),
      duration: ensureNumber(options.duration, "duration"),
      char: options.char,
    });
  });

program
  .command("flash <text...>")
  .description("Flash text on and off")
  .option("-f, --flashes <number>", "number of flashes", "6")
  .option(
    "-i, --interval <ms>",
    "interval between flashles in milliseconds",
    150,
  )
  .action(async (txt, options) => {
    await flossum.flash(txt.join(" "), {
      flashes: ensureNumber(options.flashes, "flashes"),
      interval: ensureNumber(options.interval, "interval"),
    });
  });

program
  .command("typeDelete <text...>")
  .description("Type text then delete it")
  .option("-d, --delay <ms>", "typing delay in milliseconds", "100")
  .option("--delete-delay <ms>", "deletion delay in milliseconds", "100")
  .option("-p, --pause <ms>", "pause before deleting in milliseconds", "1000")
  .option("-r, --repeat", "repeat animation indefinitely", false)
  .action(async (txt, options) => {
    await flossum.typeDelete(txt.join(" "), {
      delay: ensureNumber(options.delay, "delay"),
      deleteDelay: ensureNumber(options.deleteDelay, "delete-delay"),
      pause: ensureNumber(options.pause, "pause"),
      repeat: options.repeat,
    });
  });

program
  .command("dots [text...]")
  .description("Loading animation with dots")
  .option("-c, --cycles <number>", "number of cycles", "5")
  .option(
    "-i, --interval <number>",
    "interval between dots in milliseconds",
    "300",
  )
  .option("--char <string>", "dot characher", ".")
  .option("-m, --max-dots <number>", "maximum number of dots", "3")
  .action(async (txt, options) => {
    await flossum.dots(txt.join(" "), {
      cycles: ensureNumber(options.cycles, "cycles"),
      interval: ensureNumber(options.interval, "interval"),
      char: options.char,
      maxDots: ensureNumber(options.maxDots, "max-dots"),
    });
  });

program.parse(process.argv);

function ensureNumber(strVal, placeholder) {
  const val = parseInt(strVal, 10);
  if (isNaN(val)) {
    program.error(`error: ${placeholder} must be a number`);
  }
  return val;
}
