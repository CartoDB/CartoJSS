var cartojss = require('../lib/cartojss.js');

describe('turbocarto', function () {
  it('should serialize correctly a turbocarto ramp', function () {
    var actual = cartojss.serialize({
      '#selector': {
        'marker-width': 'ramp([price], (10, 20, 30), jenks())'
      }
    });
    var expected = '#selector {\n  marker-width: ramp([price], (10, 20, 30), jenks());\n}';
    expect(actual).toEqual(expected);
  });
});
