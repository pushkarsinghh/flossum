import { describe, it, expect, vi } from 'vitest';
import { asciiArt } from '../lib/effects/asciiArt.js';

// Mock cfonts
vi.mock('cfonts', () => {
    return {
        default: {
            render: vi.fn((text) => ({ string: `[ART: ${text}]` })),
        },
    };
});

describe('AsciiArt', () => {
    it('should return a string containing generated art', async () => {
        const text = 'Flossum';
        const result = await asciiArt(text);
        
        expect(result).toBe(`[ART: ${text}]`);
    });
});
