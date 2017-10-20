# CartoJSS

Write [CartoCSS](https://carto.com/docs/carto-engine/cartocss) and [Turbocarto ramps](https://github.com/CartoDB/turbo-carto) using a JavaScript object

## Usage
```javascript
var cartojss = require('cartojss');

var style = {
  '@small': 3,
  '@large': 6,
  '#layer': {
    'marker-width': '@small',
    '[zoom = 4]': {
      'marker-width': '@large'
    }
  },
  '#selector': {
    'marker-width': 'ramp([price], (10, 20, 30), jenks())'
  }
}

cartojss.serialize(style);
```

```
@small: 3;
@large: 6;
#layer {
  marker-width: @small;
  [zoom = 4] {
    marker-width: @large;
  }
}
#selector {
  marker-width: ramp([price], (10, 20, 30), jenks());
}
```

## Developer

```
npm install
npm test
```
