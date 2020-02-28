# NearestNeighborChain

`NearestNeighborChain(values, distance)`

Builds a hierarchy of the clusters.

| argument | description |
| ---: | :--- |
| `values` | An iterable of the values to build the hierarchy of the clusters from. |
| `distance` | A function to calculate the distance between two values. The value pairs with the lowest distance build a cluster. |

Returns the clustered values as a nested array.

## dependencies

- [BronKerbosch](https://github.com/SeregPie/BronKerbosch)

## setup

### npm

```shell
npm install @seregpie/nearest-neighbor-chain
```

### ES module

```javascript
import NearestNeighborChain from '@seregpie/nearest-neighbor-chain';
```

### Node

```javascript
let NearestNeighborChain = require('@seregpie/nearest-neighbor-chain');
```

### browser

```html
<script src="https://unpkg.com/@seregpie/bron-kerbosch"></script>
<script src="https://unpkg.com/@seregpie/nearest-neighbor-chain"></script>
```

The module is globally available as `NearestNeighborChain`.

## usage

```javascript
let array = [4, 90, 12, 61, 29];
let clusters = NearestNeighborChain(array, (a, b) => Math.abs(a - b));
// => [[29, [4, 12]], [90, 61]]
```

---

Overlapping clusters are merged together.

```javascript
let intersection = function(a, b) {
  a = new Set(a);
  b = new Set(b);
  return [...a].filter(v => b.has(v));
};
let array = ['ac', 'ab', 'baab', 'aba', 'bc'];
let clusters = NearestNeighborChain(array, (a, b) => -intersection(a, b).length);
// => ['ac', 'bc', ['ab', 'baab', 'aba']]
```

## see also

- [KMeans](https://github.com/SeregPie/KMeans)
