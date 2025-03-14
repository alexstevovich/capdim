# capdim

**capdim** caps an **N-dimensional** array to a maximum total volume (the product of its dimensions) while preserving proportions. It's minimal, atomic, and high performance.

## Details

- Works with **any number of dimensions** (e.g., 2D, 3D, 4D etc.).
- **Caps total volume** without distorting proportions.
- **Pure & atomic** function, suitable for composable utility pipelines.

## Install

`npm install capdim`

## Usage

```js
import capDim from 'capdim';

console.log(capDim([1920, 1080], 1_000_000));
// [1333.3333333333333, 750]
```

## 🔧 API

### capDim(dims: number[], maxVolume: number): number[]

Caps the input dimensions so that their total product does not exceed `maxVolume`.

- **`dims`** – Array of dimensions (e.g., `[width, height, depth]`).
- **`maxVolume`** – The maximum allowed product of dimensions.
- **Returns:** The new scaled-down dimensions (or the original if already within bounds).

## Example Use Cases

- **Image Processing** – Prevent excessive pixel count while keeping aspect ratio.
- **3D Modeling** – Ensure objects stay within a total volume constraint.
- **Physics Simulations** – Rescale multi-dimensional datasets.
- **Grid/Matrix Operations** – Adjust data structures without exceeding capacity.

## Related Packages

- [https://github.com/alexstevovich/fitdim](https://github.com/alexstevovich/fitdim) – Ensures dimensions fit within a bounding box.
- [https://github.com/alexstevovich/normalizedim](https://github.com/alexstevovich/normalizedim) – Normalizes one axis while keeping proportions.
- [https://github.com/alexstevovich/percentdim](https://github.com/alexstevovich/percentdim) – Tells you the percent difference between two N-dimensional areas.

<sub>_These links might be suffixed with "-node" in the future if conflicts arise._</sub>

## Links

### Development Homepage

[https://github.com/alexstevovich/capdim](https://github.com/alexstevovich/capdim)

<sub>_This link might be suffixed with "-node" in the future if conflicts arise._</sub>

## License

Licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).
