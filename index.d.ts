declare module 'capdim' {
    /**
     * Options for rounding behavior.
     */
    type RoundingMode = 'ceil' | 'floor' | 'nearest';

    /**
     * Caps an N-dimensional array to a maximum total volume (product of dimensions).
     * @param dims - Array of dimensions (e.g., `[width, height, depth]`).
     * @param maxVolume - The maximum allowed product of dimensions.
     * @returns The new dimensions, scaled down if needed.
     */
    export function capDim(dims: number[], maxVolume: number): number[];

    /**
     * Caps an N-dimensional array and provides metadata on whether it was adjusted.
     * @param dims - Array of dimensions (e.g., `[width, height, depth]`).
     * @param maxVolume - The maximum allowed product of dimensions.
     * @returns An object containing the new dimensions and a boolean indicating if they changed.
     */
    export function capDimWithInfo(
        dims: number[],
        maxVolume: number,
    ): {
        dims: number[];
        isCapped: boolean;
    };

    /**
     * Caps an N-dimensional array with a specific rounding mode.
     * @param dims - Array of dimensions (e.g., `[width, height, depth]`).
     * @param maxVolume - The maximum allowed product of dimensions.
     * @param rounding - The rounding mode (`"ceil"`, `"floor"`, or `"nearest"`).
     * @returns The new dimensions, scaled down and rounded according to the mode.
     */
    export function capDimRounded(
        dims: number[],
        maxVolume: number,
        rounding: RoundingMode,
    ): number[];

    /**
     * Caps an N-dimensional array with a specific rounding mode and provides metadata.
     * @param dims - Array of dimensions (e.g., `[width, height, depth]`).
     * @param maxVolume - The maximum allowed product of dimensions.
     * @param rounding - The rounding mode (`"ceil"`, `"floor"`, or `"nearest"`).
     * @returns An object containing the new dimensions and a boolean indicating if they changed.
     */
    export function capDimRoundedWithInfo(
        dims: number[],
        maxVolume: number,
        rounding: RoundingMode,
    ): {
        dims: number[];
        isCapped: boolean;
    };

    export default capDim;
}
