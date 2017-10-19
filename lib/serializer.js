var _ = require('lodash');

function serializeInput (input) {
  var output = [];
  _.each(input, function(group, name) {
    output = output.concat(serializeGroup(name, group, 0));
  })
  return output;
}

function serializeGroup (name, group, index) {
  var output = [];
  var indent = indentation(index);
  output.push(indent + name + ' {');
  _.each(group, function(value, key) {
    if (isObject(value)) {
      output = output.concat(serializeGroup(key, value, index + 1));
    }
    else {
      output.push(indent + '  ' + key + ': ' + value + ';');
    }
  });
  output.push(indent + '}');
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
    return serializeInput(input).join('\n');
  }
};
