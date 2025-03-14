/**
 * Caps an N-dimensional array to a max total volume (product of dimensions).
 * Returns floating-point values (no rounding applied).
 *
 * @param dims - Array of dimensions (e.g., [width, height, depth]).
 * @param maxVolume - The maximum allowed product of dimensions.
 * @returns The new dimensions, scaled down if needed.
 */
export function capDim(dims: number[], maxVolume: number): number[];
