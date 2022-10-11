const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  array: [],
  chain: "( ",
  getLength() {
    return this.array[length];
    //throw new NotImplementedError('Not implemented');
  },
  addLink(value) {
    if (value === null) {
      this.array.push('null');
    } else if (value === 0) {
      this.array.push('0');
    } else if (value == Infinity) {
      this.array.push('Infinity');
    } else if (value == NaN) {
      this.array.push('NaN');
    } else {
      this.array.push(value.toString());
    }

    console.log(this.array)
    return this;
    //}
    //throw new NotImplementedError('Not implemented');
  },
  removeLink(position) {
    if (typeof position === 'string' || position == 0 || position > this.array.length || position < 0) {
      this.array = [];
      this.chain = "( ";
      throw new Error('You can\'t remove incorrect link!');
    }
    this.array.splice(position - 1, 1);
    return this;

    // throw new NotImplementedError('Not implemented');
  },
  reverseChain() {
    this.array.reverse();
    console.log(this.array);
    return this;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    this.chain = '( ' + this.array.join(' )~~( ') + ' )';
    this.array = [];
    return this.chain;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
