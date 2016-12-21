'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (superClass) {
  return {
    with: function _with() {
      var childClasses = [].concat(Array.prototype.slice.call(arguments));
      childClasses.forEach(function (options) {
        if (typeof options == 'function') {
          var funcWithClass = options;
          superClass = funcWithClass(superClass);
        } else {
          var _funcWithClass = options[0];
          var funcWithClassArgs = options.length > 1 ? [superClass].concat(_toConsumableArray(options.slice(1))) : [superClass];
          superClass = _funcWithClass.apply(null, funcWithClassArgs);
        }
      });
      return superClass;
    }
  };
};

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

module.exports = exports['default'];