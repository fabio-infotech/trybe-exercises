const sum = require('./parte1_exercicio_1');

describe('Exercícios de Testes Unitário 1-5', () => {
  // Exercício 1
  test('A função sum(a, b) retorna a soma do parâmetro a com o b', () => {
    expect(sum(2, 2)).toBe(4);
  });
  // Exercício 2
  test('Teste se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
});