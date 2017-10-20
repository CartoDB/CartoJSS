# CartoJSS

[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/Flet/semistandard)



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
npm lint
npm lint:fix
```


## Browsers support <sub><sup><sub><sub>made by <a href="https://godban.github.io">godban</a></sub></sub></sup></sub>

| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE / Edge" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- | --------- |
| IE11, Edge| last 3 versions| last 3 versions| last 3 versions
