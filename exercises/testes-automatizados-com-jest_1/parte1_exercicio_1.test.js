const { test, expect } = require('@jest/globals');
const sum = require('./parte1_exercicio_1');

test('A função sum(a, b) retorna a soma do parâmetro a com o b', () => {
  expect(sum(2, 2)).toBe(4);
});