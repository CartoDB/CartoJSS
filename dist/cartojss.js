(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["cartojss"] = factory();
	else
		root["cartojss"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * Recursive serialization of CartoJSS object into CartoCSS list
 * @param  {Object} input CartoJSS object
 * @param  {number} index indentation level
 * @return {string[]} CartoCSS list
 */
function serialize (input, opts, index) {
  var output = [];
  var indent = opts.pretty ? indentation(index) : '';
  for (var key in input) {
    var value = input[key];
    if (isArray(value)) {
      output.push(indent + key + ': ' + value.join(', ') + ';');
    } else if (isObject(value)) {
      output.push(indent + key + ' {');
      output = output.concat(serialize(value, opts, index + 1));
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
  serialize: function (input, opts) {
    opts = opts || {};
    if (typeof opts.pretty === 'undefined') {
      opts.pretty = false;
    }
    var separator = opts.pretty ? '\n' : '';
    return serialize(input, opts, 0).join(separator);
  }
};


/***/ })
/******/ ]);
});