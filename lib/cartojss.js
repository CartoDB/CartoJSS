var _ = require('lodash');

function serialize (input, index) {
  var output = [];
  var indent = indentation(index);
  _.each(input, function(value, key) {
    if (isObject(value)) {
      output.push(indent + key + ' {');
      output = output.concat(serialize(value, index + 1));
      output.push(indent + '}');
    }
    else {
      output.push(indent + key + ': ' + value + ';');
    }
  })
  return output;
}

function isObject(value) {
  return !((typeof value == 'string') ||
           (typeof value == 'number') ||
           (typeof value == 'boolean'))
}

function indentation(index) {
  return Array(index + 1).join('  ');
}

module.exports = {
  serialize: function (input) {
    return serialize(input, 0).join('\n');
  }
};
