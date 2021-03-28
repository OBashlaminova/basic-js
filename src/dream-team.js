const { fake } = require("sinon");
const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
  if (Array.isArray(array) != true) return false;
  let dreamTeam = '';
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== "string") continue;
    let name = array[i].trim();
    dreamTeam += name.charAt(0);
  }
  dreamTeam = dreamTeam.toUpperCase();
  dreamTeam = dreamTeam.split('').sort().join('');
  return dreamTeam; // trim
};
