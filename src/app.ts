const fs = require('fs');

export class Anagrams {
  words: Array<string> = [];
  file: string = '';

  constructor(input: string | Array<string>) {
    if (input instanceof Array) {
      this.words = input;
    } else if (typeof input === 'string') {
      this.words = fs.readFileSync(input, 'utf-8').toString().split('\n');
    }
  }
}
