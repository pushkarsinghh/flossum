import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { typeOut } from '../lib/simple/type.js';

vi.mock('../lib/core/utils.js', async () => {
    return {
        sleep: vi.fn(() => Promise.resolve()),
    };
});

describe('Type Animation', () => {
    let stdoutSpy;

    beforeEach(() => {
        stdoutSpy = vi.spyOn(process.stdout, 'write').mockImplementation(() => true);
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('should type text character by character', async () => {
        const text = 'Hello';
        await typeOut(text, 10);

        // 'H', 'e', 'l', 'l', 'o', '\n'
        expect(stdoutSpy).toHaveBeenCalledTimes(text.length + 1);
        expect(stdoutSpy).toHaveBeenNthCalledWith(1, 'H');
        expect(stdoutSpy).toHaveBeenLastCalledWith('\n');
    });

    it('should respect the speed option', async () => {
        const { sleep } = await import('../lib/core/utils.js');
        const text = 'Hi';
        const speed = 50;

        await typeOut(text, speed);

        expect(sleep).toHaveBeenCalledWith(speed);
        expect(sleep).toHaveBeenCalledTimes(text.length); // One sleep per char
    });
});
