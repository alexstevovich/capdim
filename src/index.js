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
 * generated_on: 2025-03-14T00:18:23.541Z
 * certified_version: 1.0.0
 * file_uuid: 82eac8a5-a25a-420d-9ea0-ec08c2c084a7
 * file_size: 2091 bytes
 * file_hash: f69df8f04d0116b3edbbde99a4112c46e0042946e73cc599652c8d08aa8cdfb4
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
    if (maxVolume <= 0) {
        throw new Error('maxVolume must be greater than zero.');
    }

    const totalVolume = dims.reduce((acc, dim) => acc * dim, 1);
    if (totalVolume <= maxVolume) {
        return [...dims]; // Return new array to ensure immutability
    }

    const scaleFactor = Math.pow(maxVolume / totalVolume, 1 / dims.length);

    return dims.map((dim) => dim * scaleFactor);
}

export default capDim;
