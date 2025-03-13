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
 * file_name: gen/index.cjs
 * purpose: Core functionality and exports combined.
 *  
 * @system
 *
 * generated_on: 2025-03-13T20:16:21.693Z
 * certified_version: 1.0.0
 * file_uuid: 82eac8a5-a25a-420d-9ea0-ec08c2c084a7
 * file_size: 3463 bytes
 * file_hash: ebf69f84a0ab2942db0eea184ca8d1378553278528d449cad39be09e77c608f8
 * mast_hash: e05b557f1bf89a664c16ad18b0c80427db6b7abcba27df4910f2a9b2232d8b05
 * generated_by: preamble on npm!
 *
 * [Preamble Metadata]
********************************************************/ 
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var index_exports = {};
__export(index_exports, {
  capDim: () => capDim,
  capDimRounded: () => capDimRounded,
  capDimRoundedWithInfo: () => capDimRoundedWithInfo,
  capDimWithInfo: () => capDimWithInfo
});
module.exports = __toCommonJS(index_exports);

function capDim(dims, maxVolume) {
  const totalVolume = dims.reduce((acc, dim) => acc * dim, 1);
  if (totalVolume <= maxVolume) {
    return [...dims];
  }
  const scaleFactor = Math.pow(maxVolume / totalVolume, 1 / dims.length);
  return dims.map((dim) => dim * scaleFactor);
}
function capDimWithInfo(dims, maxVolume) {
  const newDims = capDim(dims, maxVolume);
  const isCapped = !dims.every((dim, i) => dim === newDims[i]);
  return { dims: newDims, isCapped };
}
const RoundingFunctions = {
  nearest: Math.round,
  ceil: Math.ceil,
  floor: Math.floor
};
function capDimRounded(dims, maxVolume, round = "nearest") {
  const newDims = capDim(dims, maxVolume);
  const roundFn = RoundingFunctions[round] ?? RoundingFunctions.nearest;
  return newDims.map(roundFn);
}
function capDimRoundedWithInfo(dims, maxVolume, round = "nearest") {
  const newDims = capDimRounded(dims, maxVolume, round);
  const isCapped = !dims.every((dim, i) => dim === newDims[i]);
  return { dims: newDims, isCapped };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  capDim,
  capDimRounded,
  capDimRoundedWithInfo,
  capDimWithInfo
});
