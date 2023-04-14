const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const defaultOptions = {
    repeatTimes: 1,
    separator: "+",
    addition: "",
    additionRepeatTimes: 1,
    additionSeparator: "|"
  };

  options = Object.assign(defaultOptions, options);

  let result = "";

  for (let i = 0; i < options.repeatTimes; i++) {
    result += String(str);

    for (let j = 0; j < options.additionRepeatTimes; j++) {
      if (typeof options.addition !== "undefined") {
        result += String(options.addition);
      }

      if (j < options.additionRepeatTimes - 1) {
        result += options.additionSeparator;
      }
    }

    if (i < options.repeatTimes - 1) {
      result += options.separator;
    }
  }

  return result;
}
module.exports = {
  repeater
};
