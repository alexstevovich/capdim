# capdim

**capdim** caps an **N-dimensional** array to a maximum total volume (the product of its dimensions) while preserving proportions. It's minimal, atomic, and high performance.

## Details

- Works with **any number of dimensions** (e.g., 2D, 3D, 4D etc.).
- **Caps total volume** without distorting proportions.
- Provides optional **metadata functions** (`capDimWithInfo`, `capDimRoundedWithInfo`) to check if resizing occurred.
- Supports **precise rounding options** (`nearest`, `ceil`, `floor`).
- **Pure & atomic** function, suitable for composable utility pipelines.

## Install

`npm install capdim`

## Usage

```js
import {
    capDim,
    capDimWithInfo,
    capDimRounded,
    capDimRoundedWithInfo,
} from 'capdim';

const dims = [1920, 1080];

// ✅ No rounding, raw floating-point output
console.log(capDim(dims, 1_000_000));
// [1333.3333333333333, 750]

// ✅ No rounding, with metadata
console.log(capDimWithInfo(dims, 1_000_000));
// { dims: [1333.3333333333333, 750], isCapped: true }

// ✅ Rounded version
console.log(capDimRounded(dims, 1_000_000, 'nearest')); // [1333, 750]
console.log(capDimRounded(dims, 1_000_000, 'ceil')); // [1334, 751]
console.log(capDimRounded(dims, 1_000_000, 'floor')); // [1333, 750]

// ✅ Rounded with metadata
console.log(capDimRoundedWithInfo(dims, 1_000_000, 'nearest'));
// { dims: [1333, 750], isCapped: true }
```

### Optional Meta Helper "WithInfo"

```js
import { capDimWithInfo } from 'capdim';

const { dims, isCapped } = capDimWithInfo([1920, 1080], 1_000_000);
console.log(dims); // [1333, 750]
console.log(isCapped); // true (Resizing occurred)
```

## 🔧 API

### capDim(dims: number[], maxVolume: number): number[]

Caps the input dimensions so that their total product does not exceed `maxVolume`.

- **`dims`** – Array of dimensions (e.g., `[width, height, depth]`).
- **`maxVolume`** – The maximum allowed product of dimensions.
- **Returns:** The new scaled-down dimensions (or the original if already within bounds).

### capDimWithInfo(dims: number[], maxVolume: number): { dims: number[], isCapped: boolean }

Returns both the **new dimensions** and a **boolean flag (`isCapped`)** indicating whether the dimensions were reduced.

### capDimRounded(dims: number[], maxVolume: number, rounding: "nearest" | "ceil" | "floor"): number[]

Same as `capDim`, but applies rounding:

- **`nearest`** – Rounds to the closest integer.
- **`ceil`** – Rounds **up**.
- **`floor`** – Rounds **down**.

### `capDimRoundedWithInfo(dims: number[], maxVolume: number, rounding: "nearest" | "ceil" | "floor"): { dims: number[], isCapped: boolean }`

Same as `capDimRounded`, but returns metadata (`isCapped`).

## Example Use Cases

- **Image Processing** – Prevent excessive pixel count while keeping aspect ratio.
- **3D Modeling** – Ensure objects stay within a total volume constraint.
- **Physics Simulations** – Rescale multi-dimensional datasets.
- **Grid/Matrix Operations** – Adjust data structures without exceeding capacity.

## Related Packages

- [`limitdim`](https://github.com/alexstevovich/limitdim) – Restricts a single dimension while maintaining aspect ratio.
- [`fitdim`](https://github.com/alexstevovich/fitdim) – Ensures dimensions fit within a bounding box.

## Links

### Development Homepage

[https://github.com/alexstevovich/capdim](https://github.com/alexstevovich/capdim)

_This link might become capdim-node in the future if conflicts arise._

## License

Licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).
