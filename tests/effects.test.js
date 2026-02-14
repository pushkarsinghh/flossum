import { describe, it, expect, vi, afterEach } from 'vitest';
import { wave } from '../lib/effects/wave.js';
import { rainbow } from '../lib/effects/rainbow.js';
import { glitch } from '../lib/effects/glitch.js';
import { scramble } from '../lib/effects/scramble.js';
import { colorPulse } from '../lib/simple/pulse.js';

vi.mock('../lib/core/utils.js', async () => {
    return {
        sleep: vi.fn(() => Promise.resolve()),
        clearLine: vi.fn(),
    };
});

describe('Visual Effects', () => {
    afterEach(() => {
        vi.clearAllMocks();
    });

    describe('Wave', () => {
        it('should execute wave animation loop', async () => {
            const stdoutSpy = vi.spyOn(process.stdout, 'write').mockImplementation(() => true);
            await wave('Wave', { duration: 100 });
            
            // Loop runs for duration/100 frames. 100/100 = 1 frame? 
            // Default frames calculation: duration/frames
            // Wave impl: for (let i = 0; i < frames; i++) { ... }
            // Let's check if it writes something and finishes.
            
            expect(stdoutSpy).toHaveBeenCalled();
            expect(stdoutSpy).toHaveBeenLastCalledWith('\n');
        });
    });

    describe('Rainbow', () => {
        it('should execute rainbow animation loop', async () => {
            const stdoutSpy = vi.spyOn(process.stdout, 'write').mockImplementation(() => true);
            await rainbow('Rainbow', { duration: 100 });
            
            expect(stdoutSpy).toHaveBeenCalled();
            expect(stdoutSpy).toHaveBeenLastCalledWith('\n');
        });
    });
    
describe('Glitch', () => {
        it('should execute glitch animation loop', async () => {
            const stdoutSpy = vi.spyOn(process.stdout, 'write').mockImplementation(() => true);
            const steps = 5;
            await glitch('Glitch', { duration: 100, steps });
            
            // Should call write inside loop + final write
            expect(stdoutSpy).toHaveBeenCalledTimes(steps + 1);
            // Final write should restore original text
            expect(stdoutSpy).toHaveBeenLastCalledWith('\rGlitch\n');
        });
    });

    describe('Scramble', () => {
        it('should execute scramble animation loop', async () => {
            const stdoutSpy = vi.spyOn(process.stdout, 'write').mockImplementation(() => true);
            const duration = 100;
            // Scramble impl: cycles = duration / 50
            // 100 / 50 = 2 cycles.
            
            await scramble('Scramble', { duration });
            
            // Length 8. Loop 0..8 (9 iterations). +1 final newline. = 10 calls.
            expect(stdoutSpy).toHaveBeenCalledTimes(10);
            expect(stdoutSpy).toHaveBeenLastCalledWith('\n');
        });
    });

    describe('ColorPulse', () => {
        it('should execute pulse animation loop', async () => {
            const stdoutSpy = vi.spyOn(process.stdout, 'write').mockImplementation(() => true);
            const duration = 100;
            // Pulse impl: frames = duration / 100
            // 100 / 100 = 1 frame.
            
            await colorPulse('Pulse', duration);
            
            expect(stdoutSpy).toHaveBeenCalled();
            expect(stdoutSpy).toHaveBeenLastCalledWith('\n');
        });
    });
});
