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
  },
  '#world': {
    'text-name': '"[NAME]"',
    'text-size': 11,
    'text-face-name': '"Georgia Regular", "Arial Italic"'
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
#world {
  text-name: "[NAME]";
  text-size: 11;
  text-face-name: "Georgia Regular", "Arial Italic";
}
```

## Developer

```
npm install
npm test
```
