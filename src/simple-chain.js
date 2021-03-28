const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === null) {
      value = 'null';
    }
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (this.chain.length < position || position < 1) {
      this.chain = [];
      throw 'THROWN';
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let chainStr = '( ' + this.chain.join(' )~~( ') + ' )';
    this.chain = [];
    return chainStr;
  }
}; 

module.exports = chainMaker;
