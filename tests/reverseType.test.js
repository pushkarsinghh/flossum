import { describe, it, expect, vi, afterEach } from 'vitest';
import { reverseType } from '../lib/simple/reverseType.js';

vi.mock('../lib/core/utils.js', async () => {
    return {
        sleep: vi.fn(() => Promise.resolve()),
    };
});

describe('Reverse Type Animation', () => {
    afterEach(() => {
        vi.clearAllMocks();
    });

    it('should reveal text from end to start', async () => {
        const stdoutSpy = vi.spyOn(process.stdout, 'write').mockImplementation(() => true);
        const text = 'Hello';
        
        // Loop goes from length(5) down to 0: 6 iterations.
        // inside loop: writes substring
        // after loop: writes newline
        // Total calls: 7
        
        await reverseType(text, 10);

        expect(stdoutSpy).toHaveBeenCalledTimes(7);
        
        // slice(5) -> ""
        // slice(4) -> "o"
        // slice(3) -> "lo"
        // ...
        // slice(0) -> "Hello"
        
        expect(stdoutSpy).toHaveBeenNthCalledWith(1, expect.stringContaining(''));
        expect(stdoutSpy).toHaveBeenNthCalledWith(2, expect.stringContaining('o'));
        expect(stdoutSpy).toHaveBeenNthCalledWith(3, expect.stringContaining('lo'));
        expect(stdoutSpy).toHaveBeenNthCalledWith(4, expect.stringContaining('llo'));
        expect(stdoutSpy).toHaveBeenNthCalledWith(5, expect.stringContaining('ello'));
        expect(stdoutSpy).toHaveBeenNthCalledWith(6, expect.stringContaining('Hello'));
        expect(stdoutSpy).toHaveBeenLastCalledWith('\n');
    });
});
