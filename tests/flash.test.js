import { describe, it, expect, vi, afterEach } from 'vitest';
import { flash } from '../lib/simple/flash.js';

vi.mock('../lib/core/utils.js', async () => {
    return {
        delay: vi.fn(() => Promise.resolve()),
        clearLine: vi.fn(),
    };
});

describe('Flash Animation', () => {
    afterEach(() => {
        vi.clearAllMocks();
    });

    it('should flash text on and off', async () => {
        const stdoutSpy = vi.spyOn(process.stdout, 'write').mockImplementation(() => true);
        const { clearLine } = await import('../lib/core/utils.js');
        const flashes = 2;
        
        await flash('Flash', { flashes });
        
        // Loop 2 times:
        // write(text)
        // delay
        // clearLine
        // delay
        
        expect(stdoutSpy).toHaveBeenCalledTimes(flashes); // write(text) called 2 times
        expect(clearLine).toHaveBeenCalledTimes(flashes); // clearLine called 2 times
    });
});
