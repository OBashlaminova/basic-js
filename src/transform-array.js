module.exports = function transform(array) {
  if (!Array.isArray(array)) throw 'THROWN';

  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === '--discard-prev') {
      if (i === 0) continue;
      if (array[i - 2] === '--discard-next') continue;
      newArray.pop();
    } else if (array[i] === '--double-prev') {
      if (i === 0) continue;
      if (array[i - 2] === '--discard-next') continue;
      newArray.push(array[i-1]);
    } else if (array[i] === '--double-next') {
      if (i === array.length - 1) continue;
      newArray.push(array[i+1]);
    } else if (array[i] === '--discard-next') {
      if (i === array.length - 1) continue;
      i++;
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
};
