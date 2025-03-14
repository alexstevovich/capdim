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
 * generated_on: 2025-03-14T00:19:21.650Z
 * certified_version: 1.0.0
 * file_uuid: 82eac8a5-a25a-420d-9ea0-ec08c2c084a7
 * file_size: 2697 bytes
 * file_hash: 0dd1486855b813b558c37786b32d0bdbd205d3fed2a77015426cdbbacac46de0
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
  default: () => index_default
});
module.exports = __toCommonJS(index_exports);

function capDim(dims, maxVolume) {
  if (maxVolume <= 0) {
    throw new Error("maxVolume must be greater than zero.");
  }
  const totalVolume = dims.reduce((acc, dim) => acc * dim, 1);
  if (totalVolume <= maxVolume) {
    return [...dims];
  }
  const scaleFactor = Math.pow(maxVolume / totalVolume, 1 / dims.length);
  return dims.map((dim) => dim * scaleFactor);
}
var index_default = capDim;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  capDim
});
