const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let arrayAddition = [];
  let stringAddition = '';

  if (options.addition !== undefined) {
    let additionRepeatTimes = options.additionRepeatTimes || 1; // default
    let additionSeparator = options.additionSeparator || "|"; // default
  
    if (additionRepeatTimes > 1) {
      for (let i = 0; i < additionRepeatTimes; i++) {
        if (options.addition === null) options.addition = 'null';
        arrayAddition[i] = options.addition;
      }
      
      stringAddition = arrayAddition.join(additionSeparator);
    } else stringAddition = options.addition; // stringAddition - готовая строка addition
  }

  let repeatTimes = 1; // default
  let separator = '+'; // default

  repeatTimes = options.repeatTimes;
  if (options.separator) {
    separator = options.separator;
  }

  let strWithStringAddition = str + stringAddition;
  let arrayStr = [];
  let resultStr = '';

  if (repeatTimes > 1) {
    for (let i = 0; i < repeatTimes; i++) {
      arrayStr[i] = strWithStringAddition;
    }
    strWithStringAddition = arrayStr.join(separator);
    return strWithStringAddition;
  } else return strWithStringAddition;
};
  