const myRemoveWithoutCopy = require('./parte1_exercicio3');

describe('Exercícios de Testes Unitário 3', () => {
  // Exercício 3.4
  test('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
});