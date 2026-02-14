import { describe, it, expect, vi, afterEach } from 'vitest';
import { progressBar } from '../lib/simple/progressBar.js';

// Mock sleep to be instant but track calls
vi.mock('../lib/core/utils.js', async () => {
    return {
        sleep: vi.fn(() => Promise.resolve()),
    };
});

describe('ProgressBar Animation', () => {
    afterEach(() => {
        vi.clearAllMocks();
    });

    it('should display progress bar frames', async () => {
        const stdoutSpy = vi.spyOn(process.stdout, 'write').mockImplementation(() => true);
        const width = 10;
        
        await progressBar({ width, duration: 100 });

        // Loop runs from i=0 to i=width (11 iterations)
        // writes inside loop: 11
        // write after loop: 1 ('\n')
        // Total: 12
        expect(stdoutSpy).toHaveBeenCalledTimes(width + 2);

        // Check first frame
        expect(stdoutSpy).toHaveBeenNthCalledWith(1, expect.stringContaining('[----------] 0%'));
        
        // Check last frame (inside loop)
        expect(stdoutSpy).toHaveBeenNthCalledWith(width + 1, expect.stringContaining('[██████████] 100%'));

        // Check final newline
        expect(stdoutSpy).toHaveBeenLastCalledWith('\n');
    });
});
