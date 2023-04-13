const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sample string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sample
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sample) {
  if (typeof sample !== "string" || isNaN(parseFloat(sample)) || parseFloat(sample) <= 0 || parseFloat(sample) > MODERN_ACTIVITY) {
    return false;
  }

  const k = 0.693 / HALF_LIFE_PERIOD;
  const t = Math.log(MODERN_ACTIVITY / parseFloat(sample)) / k;

  return Math.ceil(t);
}

// пример использования функции
console.log(dateSample('1')); // 22387
console.log(dateSample('WOOT!')); // false

module.exports = {
  dateSample
};