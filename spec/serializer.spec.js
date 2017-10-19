var serializer = require('../lib/serializer.js');

describe('serializer', function () {
  it('would serialize the example 1', function () {
    var actual = serializer.serialize({
      '#continent_points': {
        'marker-fill-opacity': 0.9,
        'marker-line-color': '#FFF',
        'marker-placement': 'point',
        'marker-allow-overlap': true
      },
      '#continent_points[continent="Africa"]': {
        'marker-fill': '#A6CEE3'
      },
      '#continent_points[continent="Antarctica"]': {
        'marker-fill': '#1F78B4'
      }
    });
    var expected = '#continent_points {\n  marker-fill-opacity: 0.9;\n  marker-line-color: #FFF;\n  marker-placement: point;\n  marker-allow-overlap: true;\n}\n#continent_points[continent="Africa"] {\n  marker-fill: #A6CEE3;\n}\n#continent_points[continent="Antarctica"] {\n  marker-fill: #1F78B4;\n}';

    expect(actual).toEqual(expected);
  });
});
