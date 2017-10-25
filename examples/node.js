var CartoJSS = require('../dist/cartojss');

var style = {
  '#layer': {
    'marker-with': 10,
    'marker-color': 'red'
  }
};

console.log(CartoJSS.serialize(style));
