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
  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    message = message.toUpperCase().split("");
    key = key.toUpperCase().split("");

    let j = 0;
    const result = message.map((char) => {
      if (!this.alphabet.includes(char)) {
        return char;
      }

      const shift = this.alphabet.indexOf(key[j % key.length]);
      const index = (this.alphabet.indexOf(char) + shift) % this.alphabet.length;
      j++;

      return this.alphabet[index];
    });

    return this.direct ? result.join("") : result.reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }

    encryptedMessage = encryptedMessage.toUpperCase().split("");
    key = key.toUpperCase().split("");

    let j = 0;
    const result = encryptedMessage.map((char) => {
      if (!this.alphabet.includes(char)) {
        return char;
      }

      const shift = this.alphabet.indexOf(key[j % key.length]);
      const index = (this.alphabet.indexOf(char) + this.alphabet.length - shift) % this.alphabet.length;
      j++;

      return this.alphabet[index];
    });

    return this.direct ? result.join("") : result.reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};
