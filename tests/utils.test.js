import { describe, it, expect, vi, afterEach } from 'vitest';
import { sleep, clearLine, cursorTo } from '../lib/core/utils.js';

describe('Utils', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('sleep should delay execution', async () => {
    vi.useFakeTimers();
    const promise = sleep(100);
    vi.advanceTimersByTime(100);
    await expect(promise).resolves.toBeUndefined();
    vi.useRealTimers();
  });

  it('clearLine should call process.stdout.clearLine and cursorTo', () => {
    process.stdout.clearLine = vi.fn();
    process.stdout.cursorTo = vi.fn();

    clearLine();

    expect(process.stdout.clearLine).toHaveBeenCalledWith(0);
    expect(process.stdout.cursorTo).toHaveBeenCalledWith(0);
  });

  it('cursorTo should call process.stdout.cursorTo with x', () => {
    process.stdout.cursorTo = vi.fn();

    cursorTo(5);

    expect(process.stdout.cursorTo).toHaveBeenCalledWith(5);
  });

  it('cursorTo should call process.stdout.cursorTo with x and y', () => {
    process.stdout.cursorTo = vi.fn();

    cursorTo(5, 10);

    expect(process.stdout.cursorTo).toHaveBeenCalledWith(5, 10);
  });
});
