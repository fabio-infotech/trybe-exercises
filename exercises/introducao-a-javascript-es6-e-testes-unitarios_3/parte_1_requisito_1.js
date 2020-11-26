const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

assert.strictEqual(sum(4, 5), 9, 'O resultado esperado é 9');// Topico 1
assert.ok(sum(0, 0) === 0, 'O resultado esperado é 0');// Topico 2
assert.throws(() => { sum(4, '5'); });// Topico 3
assert.throws(() => { sum(4, '5'); }, /^Error: parameters must be numbers$/);// Topico 4