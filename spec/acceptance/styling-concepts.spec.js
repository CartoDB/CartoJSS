var cartojss = require('../../lib/cartojss.js');

describe('styling-concepts', function () {
  describe('attachments', function () {
    it('should serialize correctly the attachment #world', function () {
      var actual = cartojss.serialize({
        '#world': {
          'line-color': '#fff',
          'line-width': 3
        }
      }, { pretty: true });
      var expected = '#world {\n  line-color: #fff;\n  line-width: 3;\n}';
      expect(actual).toEqual(expected);
    });

    it('should serialize correctly the attachment #world::outline', function () {
      var actual = cartojss.serialize({
        '#world::outline': {
          'line-color': '#fff',
          'line-width': 3
        }
      }, { pretty: true });
      var expected = '#world::outline {\n  line-color: #fff;\n  line-width: 3;\n}';
      expect(actual).toEqual(expected);
    });
  });

  describe('instances', function () {
    it('should serialize correctly the instance casing', function () {
      var actual = cartojss.serialize({
        '#roads': {
          'casing/line-width': 6,
          'casing/line-color': '#333',
          'line-width': 4,
          'line-color': '#666'
        }
      }, { pretty: true });
      var expected = '#roads {\n  casing/line-width: 6;\n  casing/line-color: #333;\n  line-width: 4;\n  line-color: #666;\n}';
      expect(actual).toEqual(expected);
    });
  });

  describe('variables', function () {
    it('should serialize correctly the variable @mybackground', function () {
      var actual = cartojss.serialize({
        '@mybackground': '#2B4D2D',
        'Map': {
          'background-color': '@mybackground'
        },
        '#world': {
          'polygon-fill': '@mybackground + #222',
          'line-color': 'darken(@mybackground, 10%)'
        }
      }, { pretty: true });
      var expected = '@mybackground: #2B4D2D;\nMap {\n  background-color: @mybackground;\n}\n#world {\n  polygon-fill: @mybackground + #222;\n  line-color: darken(@mybackground, 10%);\n}';
      expect(actual).toEqual(expected);
    });

    it('should serialize correctly the variable @africa and @antarctica', function () {
      var actual = cartojss.serialize({
        '@africa': '#A6CEE3',
        '@antarctica': '#1F78B4',
        '#continent_points': {
          'marker-fill-opacity': 0.9,
          'marker-line-color': '#FFF',
          'marker-placement': 'point',
          'marker-allow-overlap': true,
          '[continent="Africa"]': {
            'marker-fill': '@africa'
          },
          '[continent="Antarctica"]': {
            'marker-fill': '@antarctica'
          }
        }
      }, { pretty: true });
      var expected = '@africa: #A6CEE3;\n@antarctica: #1F78B4;\n#continent_points {\n  marker-fill-opacity: 0.9;\n  marker-line-color: #FFF;\n  marker-placement: point;\n  marker-allow-overlap: true;\n  [continent="Africa"] {\n    marker-fill: @africa;\n  }\n  [continent="Antarctica"] {\n    marker-fill: @antarctica;\n  }\n}';
      expect(actual).toEqual(expected);
    });
  });

  describe('nested', function () {
    it('should serialize correctly the nested #lakes', function () {
      var actual = cartojss.serialize({
        '.land': {
          'line-color': '#ccc',
          'line-width': 0.5,
          'polygon-fill': '#eee',
          '#lakes': {
            'polygon-fill': '#000'
          }
        }
      }, { pretty: true });
      var expected = '.land {\n  line-color: #ccc;\n  line-width: 0.5;\n  polygon-fill: #eee;\n  #lakes {\n    polygon-fill: #000;\n  }\n}';
      expect(actual).toEqual(expected);
    });

    it('should serialize correctly the nested ::halo', function () {
      var actual = cartojss.serialize({
        '#layer': {
          '::halo': {
            'marker-width': 20
          },
          'marker-width': 10
        }
      }, { pretty: true });
      var expected = '#layer {\n  ::halo {\n    marker-width: 20;\n  }\n  marker-width: 10;\n}';
      expect(actual).toEqual(expected);
    });

    it('should serialize correctly the nested filters', function () {
      var actual = cartojss.serialize({
        '#continent_points': {
          'marker-fill-opacity': 0.9,
          'marker-line-color': '#FFF',
          'marker-placement': 'point',
          'marker-allow-overlap': true,
          '[continent="Africa"]': {
            'marker-fill': '#A6CEE3'
          },
          '[continent="Antarctica"]': {
            'marker-fill': '#1F78B4'
          }
        }
      }, { pretty: true });
      var expected = '#continent_points {\n  marker-fill-opacity: 0.9;\n  marker-line-color: #FFF;\n  marker-placement: point;\n  marker-allow-overlap: true;\n  [continent="Africa"] {\n    marker-fill: #A6CEE3;\n  }\n  [continent="Antarctica"] {\n    marker-fill: #1F78B4;\n  }\n}';
      expect(actual).toEqual(expected);
    });
  });

  describe('fontsets', function () {
    it('should serialize correctly the fontsets "Georgia Regular", "Arial Italic" as array', function () {
      var actual = cartojss.serialize({
        '#world': {
          'text-name': '"[NAME]"',
          'text-size': 11,
          'text-face-name': ['"Georgia Regular"', '"Arial Italic"']
        }
      }, { pretty: true });
      var expected = '#world {\n  text-name: "[NAME]";\n  text-size: 11;\n  text-face-name: "Georgia Regular", "Arial Italic";\n}';
      expect(actual).toEqual(expected);
    });

    it('should serialize correctly the fontsets "Georgia Regular", "Arial Italic" as string', function () {
      var actual = cartojss.serialize({
        '#world': {
          'text-name': '"[NAME]"',
          'text-size': 11,
          'text-face-name': '"Georgia Regular", "Arial Italic"'
        }
      }, { pretty: true });
      var expected = '#world {\n  text-name: "[NAME]";\n  text-size: 11;\n  text-face-name: "Georgia Regular", "Arial Italic";\n}';
      expect(actual).toEqual(expected);
    });
  });

  describe('filters', function () {
    it('should serialize correctly the filter #world[population > 100]', function () {
      var actual = cartojss.serialize({
        '#world': {
          'marker-color': 'blue'
        },
        '#world[population > 100]': {
          'marker-color': 'red'
        }
      }, { pretty: true });
      var expected = '#world {\n  marker-color: blue;\n}\n#world[population > 100] {\n  marker-color: red;\n}';
      expect(actual).toEqual(expected);
    });

    it('should serialize correctly the nested filter [population > 100]', function () {
      var actual = cartojss.serialize({
        '#world': {
          'marker-color': 'blue',
          '[population > 100]': {
            'marker-color': 'red'
          }
        }
      }, { pretty: true });
      var expected = '#world {\n  marker-color: blue;\n  [population > 100] {\n    marker-color: red;\n  }\n}';
      expect(actual).toEqual(expected);
    });

    it('should serialize correctly the filter with regular expression', function () {
      var actual = cartojss.serialize({
        '#roads[Type=~".* Highway"]': {
          'line-width': 5
        }
      }, { pretty: true });
      var expected = '#roads[Type=~".* Highway"] {\n  line-width: 5;\n}';
      expect(actual).toEqual(expected);
    });

    it('should serialize correctly multiple filters', function () {
      var actual = cartojss.serialize({
        '#layer[zoom>=4][zoom<=10]': {
          'line-width': 2,
          '[zoom=8]': {
            'line-width': 3
          },
          '[zoom=9]': {
            'line-width': 4
          },
          '[zoom=10]': {
            'line-width': 5
          }
        }
      }, { pretty: true });
      var expected = '#layer[zoom>=4][zoom<=10] {\n  line-width: 2;\n  [zoom=8] {\n    line-width: 3;\n  }\n  [zoom=9] {\n    line-width: 4;\n  }\n  [zoom=10] {\n    line-width: 5;\n  }\n}';
      expect(actual).toEqual(expected);
    });
  });
});
