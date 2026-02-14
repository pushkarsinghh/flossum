import { describe, it, expect, vi, afterEach } from 'vitest';
import { dots } from '../lib/loader/dots.js';

vi.mock('../lib/core/utils.js', async () => {
    return {
        sleep: vi.fn(() => Promise.resolve()),
        clearLine: vi.fn(),
    };
});

describe('Dots Animation', () => {
    afterEach(() => {
        vi.clearAllMocks();
    });

    it('should cycle through loading dots', async () => {
        const stdoutSpy = vi.spyOn(process.stdout, 'write').mockImplementation(() => true);
        const cycles = 2;
        const maxDots = 2;
        
        await dots('Loading', { cycles, maxDots, interval: 10 });

        // Outer loop: 2 cycles.
        // Inner loop: 2 maxDots.
        // Total writes inside: 2 * 2 = 4
        // Final write after loop: 1
        // Total: 5

        expect(stdoutSpy).toHaveBeenCalledTimes(5);
        
        // Check frame generation
        expect(stdoutSpy).toHaveBeenNthCalledWith(1, expect.stringContaining('Loading.'));
        expect(stdoutSpy).toHaveBeenNthCalledWith(2, expect.stringContaining('Loading..'));
        expect(stdoutSpy).toHaveBeenNthCalledWith(3, expect.stringContaining('Loading.'));
        expect(stdoutSpy).toHaveBeenNthCalledWith(4, expect.stringContaining('Loading..'));
        expect(stdoutSpy).toHaveBeenLastCalledWith('Loading..\n');
    });
});
