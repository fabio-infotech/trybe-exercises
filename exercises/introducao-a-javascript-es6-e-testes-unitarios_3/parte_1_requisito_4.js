const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

// Tópico 1
assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');

// Tópico 2
assert.strictEqual(myFizzBuzz(9), 'fizz');

// Tópico 3
assert.strictEqual(myFizzBuzz(10), 'buzz');

// Tópico 4
assert.strictEqual(myFizzBuzz(4), 4);

// Tópico 5
assert.strictEqual(myFizzBuzz('num'), false);