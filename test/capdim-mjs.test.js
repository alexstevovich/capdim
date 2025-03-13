import { describe, it, expect } from 'vitest';
import {
    capDim,
    capDimWithInfo,
    capDimRounded,
    capDimRoundedWithInfo,
} from '../src/index.js';

describe('capDim', () => {
    it('returns original dimensions if within maxVolume', () => {
        expect(capDim([10, 10], 200)).toEqual([10, 10]);
    });

    it('scales down correctly while maintaining proportions', () => {
        const result = capDim([20, 10], 100);
        expect(result[0]).toBeCloseTo(14.1421356, 6);
        expect(result[1]).toBeCloseTo(7.0710678, 6);
    });

    it('handles 1D case properly', () => {
        expect(capDim([100], 50)).toEqual([50]);
    });

    it('handles large dimensions correctly', () => {
        const result = capDim([1000, 500], 250000);
        expect(result[0]).toBeCloseTo(707.10678, 5);
        expect(result[1]).toBeCloseTo(353.55339, 5);
    });
});

describe('capDimWithInfo', () => {
    it('detects when resizing is needed', () => {
        const result = capDimWithInfo([20, 10], 100);
        expect(result.isCapped).toBe(true);
        expect(result.dims[0]).toBeCloseTo(14.1421356, 6);
        expect(result.dims[1]).toBeCloseTo(7.0710678, 6);
    });

    it('detects when resizing is NOT needed', () => {
        const result = capDimWithInfo([10, 10], 200);
        expect(result.isCapped).toBe(false);
        expect(result.dims).toEqual([10, 10]);
    });
});

describe('capDimRounded', () => {
    it('applies rounding correctly (nearest)', () => {
        expect(capDimRounded([20, 10], 100, 'nearest')).toEqual([14, 7]);
    });

    it('applies rounding correctly (floor)', () => {
        expect(capDimRounded([20, 10], 100, 'floor')).toEqual([14, 7]);
    });

    it('applies rounding correctly (ceil)', () => {
        expect(capDimRounded([20, 10], 100, 'ceil')).toEqual([15, 8]);
    });
});

describe('capDimRoundedWithInfo', () => {
    it('detects when rounding & resizing are applied', () => {
        const result = capDimRoundedWithInfo([20, 10], 100, 'nearest');
        expect(result.isCapped).toBe(true);
        expect(result.dims).toEqual([14, 7]);
    });

    it('detects when no rounding/resizing is needed', () => {
        const result = capDimRoundedWithInfo([10, 10], 200, 'nearest');
        expect(result.isCapped).toBe(false);
        expect(result.dims).toEqual([10, 10]);
    });

    it('handles large values with rounding', () => {
        const result = capDimRoundedWithInfo([1000, 500], 250000, 'ceil');
        expect(result.isCapped).toBe(true);
        expect(result.dims).toEqual([708, 354]);
    });
});
