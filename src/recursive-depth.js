const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {

    if (Array.isArray(arr)) {
      let max = 1;
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          arr[i] = this.calculateDepth(arr[i]) + 1;
        } else {
          arr[i] = 1;
        }
        if (arr[i] > max) {
          max = arr[i];
        }
      }
      return max;
      //throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
    } else {
      console.log('this is not array ', arr);
      return 1;
    }
  }
}

module.exports = {
  DepthCalculator
};
