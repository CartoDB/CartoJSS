var cartojss = require('../../lib/cartojss.js');

describe('cartojss', function () {
  it('should serialize correctly a complete CartoJSS object', function () {
    var actual = cartojss.serialize({
      '@small': 3,
      '@large': 6,
      '#layer': {
        'marker-width': '@small',
        'marker-allow-overlap': true,
        '[zoom = 4]': {
          'marker-width': '@large'
        }
      },
      '#selector': {
        'line-dasharray': [1, 4, 2],
        'marker-width': 'ramp([price], (10, 20, 30), jenks())'
      },
      '#world': {
        'text-name': '"[NAME]"',
        'text-size': 11,
        'text-face-name': ['"Georgia Regular"', '"Arial Italic"']
      }
    });
    var expected = '@small: 3;\n@large: 6;\n#layer {\n  marker-width: @small;\n  marker-allow-overlap: true;\n  [zoom = 4] {\n    marker-width: @large;\n  }\n}\n#selector {\n  line-dasharray: 1, 4, 2;\n  marker-width: ramp([price], (10, 20, 30), jenks());\n}\n#world {\n  text-name: "[NAME]";\n  text-size: 11;\n  text-face-name: "Georgia Regular", "Arial Italic";\n}';
    expect(actual).toEqual(expected);
  });
});
