import { describe, it, expect, vi, afterEach } from 'vitest';
import { typeDelete } from '../lib/simple/typeDelete.js';

vi.mock('../lib/core/utils.js', async () => {
    return {
        sleep: vi.fn(() => Promise.resolve()),
        clearLine: vi.fn(),
    };
});

describe('TypeDelete Animation', () => {
    afterEach(() => {
        vi.clearAllMocks();
    });

    it('should type and then delete text', async () => {
        const stdoutSpy = vi.spyOn(process.stdout, 'write').mockImplementation(() => true);
        const text = 'Hi';
        // length = 2
        
        // Typing: 0, 1, 2 (3 iterations) -> writes "", "H", "Hi"
        // Deleting: 2, 1, 0 (3 iterations) -> writes "Hi", "H", ""
        
        await typeDelete(text, { repeat: false });
        
        const totalWrites = (text.length + 1) * 2;
        expect(stdoutSpy).toHaveBeenCalledTimes(totalWrites);
    });
});
