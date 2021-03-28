module.exports = class DepthCalculator {
  calculateDepth(array, depth = 1) {
    return array.reduce((accumulated, value) => {
      if (!Array.isArray(value)) {
        return accumulated;
      }

      const nextDepth = this.calculateDepth(value, depth + 1);
      
      return nextDepth > accumulated ? nextDepth : accumulated;
    }, depth);
  }
}
