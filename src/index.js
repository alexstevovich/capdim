/* *******************************************************
 * capdim
 *
 * @license
 *
 * Apache-2.0
 *
 * Copyright 2015-2025 Alex Stevovich
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @meta
 *
 * package_name: capdim
 * file_name: src/index.js
 * purpose: Core functionality and exports combined.
 *
 * @system
 *
 * generated_on: 2025-03-13T20:16:17.881Z
 * certified_version: 1.0.0
 * file_uuid: 82eac8a5-a25a-420d-9ea0-ec08c2c084a7
 * file_size: 4177 bytes
 * file_hash: a03c04b4389d38af8015f2db2a2e87e5b214f2e834da2431caac12d326352aab
 * mast_hash: 705b5834dedcd20f74abc12bb264ae8c7bcc2f04dfeda78166730f5171e778e1
 * generated_by: preamble on npm!
 *
 * [Preamble Metadata]
 ********************************************************/
/**
 * Caps an N-dimensional array to a max total volume (product of dimensions).
 * Returns floating-point values (no rounding applied).
 * @param {number[]} dims - Array of dimensions (e.g., [width, height, depth])
 * @param {number} maxVolume - The maximum allowed product of dimensions.
 * @returns {number[]} - The new dimensions, scaled down if needed.
 */
export function capDim(dims, maxVolume) {
    const totalVolume = dims.reduce((acc, dim) => acc * dim, 1);
    if (totalVolume <= maxVolume) {
        return [...dims]; // Return new array to ensure immutability
    }

    const scaleFactor = Math.pow(maxVolume / totalVolume, 1 / dims.length);

    return dims.map((dim) => dim * scaleFactor); // No rounding
}

/**
 * Caps an N-dimensional array and provides metadata on whether it was adjusted.
 * Returns floating-point values (no rounding applied).
 * @param {number[]} dims - Array of dimensions (e.g., [width, height, depth])
 * @param {number} maxVolume - The maximum allowed product of dimensions.
 * @returns {{ dims: number[], isCapped: boolean }} - New dimensions & whether they changed.
 */
export function capDimWithInfo(dims, maxVolume) {
    const newDims = capDim(dims, maxVolume);
    const isCapped = !dims.every((dim, i) => dim === newDims[i]);

    return { dims: newDims, isCapped };
}

/**
 * Rounding functions for capDimRounded.
 */
const RoundingFunctions = {
    nearest: Math.round,
    ceil: Math.ceil,
    floor: Math.floor,
};

/**
 * Caps an N-dimensional array to a max total volume (product of dimensions),
 * with optional rounding ("nearest", "up", "down").
 * @param {number[]} dims - Array of dimensions (e.g., [width, height, depth])
 * @param {number} maxVolume - The maximum allowed product of dimensions.
 * @param {"nearest" | "ceil" | "floor"} [round="nearest"] - Rounding mode.
 * @returns {number[]} - The new dimensions, scaled down if needed and rounded.
 */
export function capDimRounded(dims, maxVolume, round = 'nearest') {
    const newDims = capDim(dims, maxVolume);

    // Select rounding function (default to "nearest")
    const roundFn = RoundingFunctions[round] ?? RoundingFunctions.nearest;

    return newDims.map(roundFn);
}

/**
 * Caps an N-dimensional array to a max total volume (product of dimensions),
 * with optional rounding and metadata on whether it was capped.
 * @param {number[]} dims - Array of dimensions (e.g., [width, height, depth])
 * @param {number} maxVolume - The maximum allowed product of dimensions.
 * @param {"nearest" | "ceil" | "floor"} [round="nearest"] - Rounding mode.
 * @returns {{ dims: number[], isCapped: boolean }} - New dimensions & whether they changed.
 */
export function capDimRoundedWithInfo(dims, maxVolume, round = 'nearest') {
    const newDims = capDimRounded(dims, maxVolume, round);
    const isCapped = !dims.every((dim, i) => dim === newDims[i]);

    return { dims: newDims, isCapped };
}
