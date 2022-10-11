const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {

  let result = {};
  let arr = [];
  for (let i = 0; i < domains.length; i++) {
    console.log(domains[i]);
    arr.push(domains[i].split('.').reverse());
  }
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    let leng = arr[i].length;
    for (let j = 0; j < leng; j++) {
      let str = "." + arr[i].join('.');
      if (str in result) {
        result[str] += 1;
      } else {
        result[str] = 1;
      }
      arr[i].pop();
    }
  }
  return result;

  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}


module.exports = {
  getDNSStats
};
