const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  }
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) continue;
    if (arr[i] == "--discard-prev" && i != 0 && arr[i - 1] && arr[i - 2] !== "--discard-next") {
      newArr.pop();
    } else if (arr[i] == "--discard-next" && i != (arr.length - 1) && arr[i + 1]) {
      i++;
    } else if (arr[i] == "--double-prev" && i != 0 && arr[i - 1] && arr[i - 2] !== "--discard-next") {
      newArr.push(arr[i - 1]);
    } else if (arr[i] == "--double-next" && i != (arr.length - 1) && arr[i + 1]) {
      newArr.push(arr[i + 1]);
    } else if (arr[i] !== "--double-next" && arr[i] !== "--double-prev" && arr[i] !== "--discard-next" && arr[i] !== "--discard-prev") {
      newArr.push(arr[i]);
    }

  }
  return newArr;
  /*
  function doubleNext(i) {
    transformed.splice(i + 1, 0, transformed[i + 1]);
  }
  function doublePrev(i) {
    transformed.splice(i - 1, 0, transformed[i - 1]);
  }
  function discardNext(i) {
    transformed.splice(i + 1, 1);
  }
  function discardPrev(i) {
    transformed.splice(i - 1, 1);
  }
  for (let i = 0; i < transformed.length; i++) {
    if (!transformed[i]) continue;
    if (transformed[i] == "--discard-prev" && transformed[i - 1]) {
      discardPrev(i);
      i--;
    } else if (transformed[i] == "--discard-next" && transformed[i + 1]) {
      discardNext(i);
      i--;
    } else if (transformed[i] == "--double-prev" && transformed[i - 1]) {
      doublePrev(i);
      i++;
    } else if (transformed[i] == "--double-next" && transformed[i + 1]) {
      doubleNext(i);
      i++;
    }
  }

  for (let i = 0; i < transformed.length; i++) {

    if (transformed[i] == "--discard-prev" || transformed[i] == "--discard-next" || transformed[i] == "--double-prev" || transformed[i] == "--double-next") {
      transformed.splice(i, 1);
      i--;
    }
  }
  return transformed;
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here*/
}

module.exports = {
  transform
};
