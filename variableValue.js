'use strict';

var utilities = require('./utilities');
var compile = require('./compile');

var CSS_FUNCTIONS = ['rgb', 'rgba', 'url'];

function isFunction(value) {
  return value.search(/$\w+\(.|\)/) !== -1;
}

function removeFlags(value) {
  return value.replace(/\!\w+/g, '');
}

function VariableValue(scssString) {
  this._parse(scssString);
}

VariableValue.prototype = {
  _parse: function(scssString) {
    var deflagged = removeFlags(scssString)
    var value = utilities.stripSpaces(deflagged);

    if (isFunction(value)) {
      this.value = compile.fromString(value);
    } else {
      this.value = value;
    }
  }
};

module.exports = VariableValue;
