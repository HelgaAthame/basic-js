const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (i == (str.length - 1)) {
      if (count == 1) {
        result = result + str[i];
      } else {
        result = result + count + str[i];
      }
    } else {
      if (str[i] == str[i + 1]) {
        count++;
        continue;
      } else {
        if (count == 1) {
          console.log(result, count, str[i]);
          result = result + str[i];
        } else {
          console.log(result, count, str[i]);
          result = result + count + str[i];
        }
        count = 1;
      }
    }
  }
  return result;
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
