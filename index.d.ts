// index.d.ts
export function typeOut(text: string, delay?: number): Promise<void>;
export function wave(text: string): string;
export function colorPulse(text: string): string;
export function playFrames(frames: string[], interval?: number): void;
export function glitch(text: string): string;
export function scramble(text: string): string;