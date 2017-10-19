# CartoJSS

Write CartoCSS using a Javascript object

## Usage
```javascript
var serializer = require('serializer');

var style = {
  '@small': 3,
  '@large': 6,
  '#layer': {
    'marker-width': 3,
    '[zoom = 4]': {
      'marker-width': 6
    }
  }
}

serializer.serialize(style);
```

```
/* Output Carto */

@small: 3;
@large: 6;
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
