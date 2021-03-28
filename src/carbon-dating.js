const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(N) {
  if (typeof N !== 'string') return false;
  if (parseFloat(N) != N) return false;
  if (N > MODERN_ACTIVITY || N <= 0) return false; 

    let time = -5730/0.693 * Math.log(N/15);
    return Math.ceil(time);
};
