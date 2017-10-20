var cartojss = require('../../lib/cartojss.js');

describe('language-elements', function () {
  describe('color', function () {
    it('should serialize correctly the color #ff0', function () {
      var actual = cartojss.serialize({
        '#line': {
          'line-color': '#ff0'
        }
      }, { pretty: true });
      var expected = '#line {\n  line-color: #ff0;\n}';
      expect(actual).toEqual(expected);
    });

    it('should serialize correctly the color #ffff00', function () {
      var actual = cartojss.serialize({
        '#line': {
          'line-color': '#ffff00'
        }
      }, { pretty: true });
      var expected = '#line {\n  line-color: #ffff00;\n}';
      expect(actual).toEqual(expected);
    });

    it('should serialize correctly the color rgb(255, 255, 0)', function () {
      var actual = cartojss.serialize({
        '#line': {
          'line-color': 'rgb(255, 255, 0)'
        }
      }, { pretty: true });
      var expected = '#line {\n  line-color: rgb(255, 255, 0);\n}';
      expect(actual).toEqual(expected);
    });

    it('should serialize correctly the color rgba(255, 255, 0, 1)', function () {
      var actual = cartojss.serialize({
        '#line': {
          'line-color': 'rgba(255, 255, 0, 1)'
        }
      }, { pretty: true });
      var expected = '#line {\n  line-color: rgba(255, 255, 0, 1);\n}';
      expect(actual).toEqual(expected);
    });

    it('should serialize correctly the color hsl(100, 50%, 50%)', function () {
      var actual = cartojss.serialize({
        '#line': {
          'line-color': 'hsl(100, 50%, 50%)'
        }
      }, { pretty: true });
      var expected = '#line {\n  line-color: hsl(100, 50%, 50%);\n}';
      expect(actual).toEqual(expected);
    });

    it('should serialize correctly the color hsla(100, 50%, 50%, 1)', function () {
      var actual = cartojss.serialize({
        '#line': {
          'line-color': 'hsla(100, 50%, 50%, 1)'
        }
      }, { pretty: true });
      var expected = '#line {\n  line-color: hsla(100, 50%, 50%, 1);\n}';
      expect(actual).toEqual(expected);
    });

    it('should serialize correctly the color hsluv(100, 50%, 50%)', function () {
      var actual = cartojss.serialize({
        '#line': {
          'line-color': 'hsluv(100, 50%, 50%)'
        }
      }, { pretty: true });
      var expected = '#line {\n  line-color: hsluv(100, 50%, 50%);\n}';
      expect(actual).toEqual(expected);
    });

    it('should serialize correctly the color hsluva(100, 50%, 50%, 1)', function () {
      var actual = cartojss.serialize({
        '#line': {
          'line-color': 'hsluva(100, 50%, 50%, 1)'
        }
      }, { pretty: true });
      var expected = '#line {\n  line-color: hsluva(100, 50%, 50%, 1);\n}';
      expect(actual).toEqual(expected);
    });

    it('should serialize correctly the color yellow', function () {
      var actual = cartojss.serialize({
        '#line': {
          'line-color': 'yellow'
        }
      }, { pretty: true });
      var expected = '#line {\n  line-color: yellow;\n}';
      expect(actual).toEqual(expected);
    });
  });

  describe('float', function () {
    it('should serialize correctly the float 2', function () {
      var actual = cartojss.serialize({
        '#line': {
          'line-width': 2
        }
      }, { pretty: true });
      var expected = '#line {\n  line-width: 2;\n}';
      expect(actual).toEqual(expected);
    });

    it('should serialize correctly the float 2 as string', function () {
      var actual = cartojss.serialize({
        '#line': {
          'line-width': '2'
        }
      }, { pretty: true });
      var expected = '#line {\n  line-width: 2;\n}';
      expect(actual).toEqual(expected);
    });

    it('should serialize correctly the float 4 / 2', function () {
      var actual = cartojss.serialize({
        '#line': {
          'line-width': '4 / 2'
        }
      }, { pretty: true });
      var expected = '#line {\n  line-width: 4 / 2;\n}';
      expect(actual).toEqual(expected);
    });
  });

  describe('uri', function () {
    it('should serialize correctly the uri url("marker.png")', function () {
      var actual = cartojss.serialize({
        '#markers': {
          'marker-file': 'url("marker.png")'
        }
      }, { pretty: true });
      var expected = '#markers {\n  marker-file: url("marker.png");\n}';
      expect(actual).toEqual(expected);
    });
  });

  describe('string', function () {
    it('should serialize correctly the string "HELLO"', function () {
      var actual = cartojss.serialize({
        '#labels': {
          'text-name': '"HELLO"'
        }
      }, { pretty: true });
      var expected = '#labels {\n  text-name: "HELLO";\n}';
      expect(actual).toEqual(expected);
    });
  });

  describe('boolean', function () {
    it('should serialize correctly the boolean true as bool', function () {
      var actual = cartojss.serialize({
        '#markers': {
          'marker-allow-overlap': true
        }
      }, { pretty: true });
      var expected = '#markers {\n  marker-allow-overlap: true;\n}';
      expect(actual).toEqual(expected);
    });

    it('should serialize correctly the boolean true as string', function () {
      var actual = cartojss.serialize({
        '#markers': {
          'marker-allow-overlap': 'true'
        }
      }, { pretty: true });
      var expected = '#markers {\n  marker-allow-overlap: true;\n}';
      expect(actual).toEqual(expected);
    });
  });

  describe('expressions', function () {
    it('should serialize correctly the expresion [HEIGHT_FIELD] * 10', function () {
      var actual = cartojss.serialize({
        '#markers': {
          'building-height': '[HEIGHT_FIELD] * 10'
        }
      }, { pretty: true });
      var expected = '#markers {\n  building-height: [HEIGHT_FIELD] * 10;\n}';
      expect(actual).toEqual(expected);
    });
  });

  describe('numbers', function () {
    it('should serialize correctly the numbers "1, 4, 2" as array', function () {
      var actual = cartojss.serialize({
        '#disputedboundary': {
          'line-dasharray': [1, 4, 2]
        }
      }, { pretty: true });
      var expected = '#disputedboundary {\n  line-dasharray: 1, 4, 2;\n}';
      expect(actual).toEqual(expected);
    });

    it('should serialize correctly the numbers "1, 4, 2" as string', function () {
      var actual = cartojss.serialize({
        '#disputedboundary': {
          'line-dasharray': '1, 4, 2'
        }
      }, { pretty: true });
      var expected = '#disputedboundary {\n  line-dasharray: 1, 4, 2;\n}';
      expect(actual).toEqual(expected);
    });
  });

  describe('percentages', function () {
    it('should serialize correctly the percentages 50%', function () {
      var actual = cartojss.serialize({
        '#world': {
          'polygon-opacity': '50%'
        }
      }, { pretty: true });
      var expected = '#world {\n  polygon-opacity: 50%;\n}';
      expect(actual).toEqual(expected);
    });
  });

  describe('functions', function () {
    it('should serialize correctly the function scale(2, 2)', function () {
      var actual = cartojss.serialize({
        '#world': {
          'polygon-opacity': 'scale(2, 2)'
        }
      }, { pretty: true });
      var expected = '#world {\n  polygon-opacity: scale(2, 2);\n}';
      expect(actual).toEqual(expected);
    });

    it('should serialize correctly multiple functions as array', function () {
      var actual = cartojss.serialize({
        '#layer': {
          'marker-transform': ['rotate[degrees]', 'transform(-5,5)']
        }
      }, { pretty: true });
      var expected = '#layer {\n  marker-transform: rotate[degrees], transform(-5,5);\n}';
      expect(actual).toEqual(expected);
    });

    it('should serialize correctly multiple functions as string', function () {
      var actual = cartojss.serialize({
        '#layer': {
          'marker-transform': 'rotate[degrees], transform(-5,5)'
        }
      }, { pretty: true });
      var expected = '#layer {\n  marker-transform: rotate[degrees], transform(-5,5);\n}';
      expect(actual).toEqual(expected);
    });
  });
});
