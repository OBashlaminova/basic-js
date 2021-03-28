const CustomError = require("../extensions/custom-error");

const TYPE_ENCRYPT = 1;
const TYPE_DECRYPT = -1;

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

class VigenereCipheringMachine {
  constructor(reverse) {
    this.reverse = reverse;
  }

  exec(message, key, type = TYPE_ENCRYPT) {
    if (!message || !key) throw 'THROWN';
    
    message = message.toUpperCase();
    key = key.toUpperCase();

    const specialCharacters = [];
    const specialCharactersRegExp = /[^A-Z]/g;
    let match;

    while ((match = specialCharactersRegExp.exec(message)) !== null) {
      specialCharacters.push(match);
    }

    message = message.replace(specialCharactersRegExp, "");

    let result = [];

    for (let i = 0; i < message.length; i++) {
      const messageChar = message[((i >= message.length) ? i % message.length : i)];
      const keyChar = key[((i >= key.length) ? i % key.length : i)];

      let messageCharIndex = alphabet.indexOf(messageChar);
      let keyCharIndex = alphabet.indexOf(keyChar) * type;

      let letter = alphabet[((alphabet.length + (messageCharIndex + keyCharIndex)) % alphabet.length)];	
		  
      result.push(letter);
    }

    specialCharacters.forEach((specialCharacter) => {
      result.splice(specialCharacter.index, 0, specialCharacter[0])
    });

    if (this.reverse === false) {
      result = result.reverse();
    }

    return result.join('');
  }

  encrypt(message, key) {
    return this.exec(message, key)
  }    
  
  decrypt(message, key) {
    return this.exec(message, key, TYPE_DECRYPT);
  }
}

module.exports = VigenereCipheringMachine;

