const removeVowels = (word) => {
  const characters = word.split('');
  let newWord = '';
  let count = 0;

  for (let i = 0; i < characters.length; i += 1) {
    if (
      characters[i] === 'a' ||
      characters[i] === 'o' ||
      characters[i] === 'i' ||
      characters[i] === 'e' ||
      characters[i] === 'u'
    ) {
      count += 1;
      newWord += String(count);
    } else {
      newWord += String(characters[i]);
    }
  }
  return newWord;
};

assert = require('assert');

const parameter = 'Dayane';
const result = 'D1y2n3';
const output = removeVowels(parameter);

// console.log(output);

assert.strictEqual(typeof removeVowels, 'function');
assert.strictEqual(output, result);