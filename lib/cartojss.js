/**
 * Recursive serialization of CartoJSS object into CartoCSS list
 * @param  {Object} input CartoJSS object
 * @param  {number} index indentation level
 * @return {string[]} CartoCSS list
 */
function serialize (input, index) {
  var output = [];
  var indent = indentation(index);
  for (var key in input) {
    var value = input[key];
    if (isArray(value)) {
      output.push(indent + key + ': ' + value.join(', ') + ';');
    } else if (isObject(value)) {
      output.push(indent + key + ' {');
      output = output.concat(serialize(value, index + 1));
      output.push(indent + '}');
    } else {
      output.push(indent + key + ': ' + value + ';');
    }
  }
  return output;
}

function isObject (value) {
  return !((typeof value === 'string') ||
           (typeof value === 'number') ||
           (typeof value === 'boolean'));
}

function isArray (value) {
  return Array.isArray(value);
}

function indentation (index) {
  return Array(index + 1).join('  ');
}

module.exports = {
  /**
   * Serialize CartoJSS object into CartoCSS string
   * @param  {Object} input CartoJSS object
   * @return {string} CartoCSS string
   */
  serialize: function (input) {
    return serialize(input, 0).join('\n');
  }
};
