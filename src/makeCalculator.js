'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add: function (num) {
      return this.result + num;
    },

    subtract: function (num) {
      return this.result - num;
    },

    multiply: function (num) {
      return this.result * num;
    },

    divide: function (num) {
      return this.result / num;
    },

    operate: function (operationFn, num) {
      this.result = operationFn.call(this, num);

      return this;
    },

    reset: function () {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
