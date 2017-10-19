var _ = require('lodash');

module.exports = {
  serialize: function (cartoJSS) {
    var cartoCSS = [];
    _.each(cartoJSS, function(group, name) {
      cartoCSS.push(name + ' {');
      _.each(group, function(value, key) {
        cartoCSS.push('  ' + key + ': ' + value + ';');
      });
      cartoCSS.push('}');
    })
    return cartoCSS.join('\n');
  }
};
