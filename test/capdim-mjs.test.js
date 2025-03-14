import { describe, it, expect } from 'vitest';
import { capDim } from '../src/index.js';

describe('capDim', () => {
    it('returns the same dimensions when already within bounds', () => {
        expect(capDim([10, 10], 200)).toEqual([10, 10]);
        expect(capDim([5, 5, 5], 200)).toEqual([5, 5, 5]);
    });

    it('scales down correctly while maintaining proportions', () => {
        expect(capDim([20, 10], 100)).toEqual([
            14.142135623730951, 7.0710678118654755,
        ]);
    });

    it('scales down large values correctly', () => {
        const result = capDim([1000, 500], 250000);
        expect(result[0]).toBeCloseTo(707.10678, 5);
        expect(result[1]).toBeCloseTo(353.55339, 5);
    });

    it('handles 3D and higher dimensions correctly', () => {
        expect(capDim([10, 10, 10], 500)).toEqual([
            7.937005259840998, 7.937005259840998, 7.937005259840998,
        ]);
    });

    it('returns a new array instance (immutability check)', () => {
        const dims = [50, 50];
        const result = capDim(dims, 2000);
        expect(result).not.toBe(dims);
    });

    it('maintains aspect ratio even in high dimensions', () => {
        const result = capDim([100, 200, 300, 400], 10000000);
        const scaleFactor = result[0] / 100;
        expect(result.map((d) => d / scaleFactor)).toEqual([
            100, 200, 300, 400,
        ]);
    });

    it('does not distort single-dimensional inputs', () => {
        expect(capDim([500], 200)).toEqual([200]);
    });

    it('throws an error when maxVolume is zero or negative', () => {
        expect(() => capDim([10, 10], 0)).toThrow(
            'maxVolume must be greater than zero.',
        );
        expect(() => capDim([10, 10], -100)).toThrow(
            'maxVolume must be greater than zero.',
        );
    });
});
