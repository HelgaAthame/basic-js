const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(bool = true) {
    this.bool = bool;
    let alphabet = [];
    for (let i = 65; i < 91; i++) {
      alphabet.push(String.fromCharCode(i));
    }
    this.abc = alphabet;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    let arr = [];
    for (let i = 0; i < message.length; i++) {

      let indexMess = 99, indexKey;

      for (let j = 0; j < this.abc.length; j++) {
        if (message[i].toUpperCase() == this.abc[j]) {
          indexMess = j;
        }
        if (key[i % (key.length)].toUpperCase() == this.abc[j]) {
          indexKey = j;
        }
      }

      if (indexMess == 99) {
        arr.push(message[i]);
        message = message.slice(0, i) + message.slice(i + 1);
        i--;
        continue;
      } else {
        let index = (indexMess + indexKey) % 26;
        arr.push(this.abc[index]);
      }
    }
    if (this.bool) {
      return arr.join('');

    } else {
      return arr.reverse().join('');
    }
    // remove line with error and write your code here
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    let arr = [];
    for (let i = 0; i < encryptedMessage.length; i++) {

      let indexMess = 99, indexKey;
      for (let j = 0; j < this.abc.length; j++) {
        if (encryptedMessage[i].toUpperCase() == this.abc[j]) {
          indexMess = j;
        }
        if (key[i % (key.length)].toUpperCase() == this.abc[j]) {
          indexKey = j;
        }
      }
      if (indexMess == 99) {
        arr.push(encryptedMessage[i]);
        encryptedMessage = encryptedMessage.slice(0, i) + encryptedMessage.slice(i + 1);
        i--;
        continue;
      } else {

        let index = (indexMess - indexKey + 26) % 26;
        arr.push(this.abc[index]);
      }
    }
    if (this.bool) {
      return arr.join('');

    } else {
      return arr.reverse().join('');
    }


    //throw new NotImplementedError('Not implemented');
  }
}

module.exports = {
  VigenereCipheringMachine
};
