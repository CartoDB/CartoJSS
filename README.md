# CartoJSS

Write CartoCSS using a Javascript object

## Usage
```javascript
var cartojss = require('cartojss');

var style = {
  '@small': 3,
  '@large': 6,
  '#selector': {
    'marker-width': 'ramp([price], (10, 20, 30), jenks())'
  },
  '#layer': {
    'marker-width': '@small',
    '[zoom = 4]': {
      'marker-width': '@large'
    }
  }
}

cartojss.serialize(style);
```

```
@small: 3;
@large: 6;
#selector {
  marker-width: ramp([price], (10, 20, 30), jenks());
}
#layer {
  marker-width: @small;
  [zoom = 4] {
    marker-width: @large;
  }
}
```

## Developer

```
npm install
npm test
```
