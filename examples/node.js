var cartojss = require('../dist/cartojss');

var style = {
  '#layer': {
    'marker-with': 10,
    'marker-color': 'red'
  }
};

console.log(cartojss.serialize(style));
