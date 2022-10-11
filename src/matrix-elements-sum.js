const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  let i = 0;
  let leng = matrix[i].length;
  for (i; i < leng; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] == 0) {
        if (matrix[j + 1]) {
          matrix[j + 1][i] = 0;
        }
      } else {
        sum += matrix[j][i];
      }
    }
  }
  return sum;
  //throw new NotImplementedError('Not implemented');
}

module.exports = {
  getMatrixElementsSum
};
