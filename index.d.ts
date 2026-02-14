// index.d.ts

export function typeOut(text: string, delay?: number): Promise<void>;
export function wave(text: string): string;
export function colorPulse(text: string): string;
export function playFrames(frames: string[], interval?: number): void;
export function glitch(text: string): string;
export function scramble(text: string): string;
export function spinner(text?: string, duration?: number): Promise<void>;
export function reverseType(text: string, speed?: number): Promise<void>;
export function progressBar(options?: { width?: number; duration?: number; char?: string }): Promise<void>;
export function rainbow(text: string, options?: { duration?: number }): Promise<void>;
export function asciiArt(text: string, options?: { font?: string; align?: string; colors?: string[]; background?: string }): Promise<string>;
export function flash(text: string, options?: { flashes?: number; interval?: number }): Promise<void>;
export function typeDelete(text: string, options?: { delay?: number; deleteDelay?: number; pause?: number; repeat?: boolean }): Promise<void>;
export function dots(text?: string, options?: { cycles?: number; interval?: number; char?: string; maxDots?: number }): Promise<void>;
