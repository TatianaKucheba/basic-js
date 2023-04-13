const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let digits = n.toString().split('');
  let maxNum = Number.MIN_VALUE;
  for (let i = 0; i < digits.length; i++) {
    let tempArr = digits.slice();
    tempArr.splice(i, 1);
    let num = Number(tempArr.join(''));
    if (num > maxNum) {
      maxNum = num;
    }
  }
  return maxNum;
}

module.exports = {
  deleteDigit
};