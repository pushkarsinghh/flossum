import { describe, it, expect, vi, afterEach } from 'vitest';
import { spinner } from '../lib/simple/spinner.js';

vi.mock('../lib/core/utils.js', async () => {
    return {
        sleep: vi.fn(() => Promise.resolve()),
    };
});

describe('Spinner Animation', () => {
    afterEach(() => {
        vi.clearAllMocks();
    });

    it('should cycle through frames', async () => {
        const stdoutSpy = vi.spyOn(process.stdout, 'write').mockImplementation(() => true);
        const duration = 500;
        // Interval is 100ms, so 500/100 = 5 cycles
        
        await spinner('Loading', duration);

        // 5 writes for frames + 1 newline
        expect(stdoutSpy).toHaveBeenCalledTimes(6);
        
        // Check frame rotation: |, /, -, \
        expect(stdoutSpy).toHaveBeenNthCalledWith(1, expect.stringContaining('|'));
        expect(stdoutSpy).toHaveBeenNthCalledWith(2, expect.stringContaining('/'));
        expect(stdoutSpy).toHaveBeenNthCalledWith(3, expect.stringContaining('-'));
        expect(stdoutSpy).toHaveBeenNthCalledWith(4, expect.stringContaining('\\'));
        expect(stdoutSpy).toHaveBeenNthCalledWith(5, expect.stringContaining('|')); // Loop back
        expect(stdoutSpy).toHaveBeenLastCalledWith('\n');
    });
});
