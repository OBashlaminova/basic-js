const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  // throw new CustomError('Not implemented');
  // // remove line with error and write your code here
  if (!date) return 'Unable to determine the time of year!';
  if (date.getMonth !== Date.prototype.getMonth) throw new Error("Not a Date");

  let month = date.getMonth();
  switch (month) {
    case 0:
      return 'winter';
    break;
    case 1:
      return 'winter';
    break;
    case 2:
      return 'spring';
    break;
    case 3:
      return 'spring';
    break;
    case 4:
      return 'spring';
    break;
    case 5:
      return 'summer';
    break;
    case 6:
      return 'summer';
    break;
    case 7:
      return 'summer';
    break;
    case 8:
      return 'autumn';
    break;
    case 9:
      return 'autumn';
    break;
    case 10:
      return 'autumn';
    break;
    case 11:
      return 'winter';
    break;
  }

};
