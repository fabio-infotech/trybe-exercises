const sum = require('./parte1_exercicio_1');

describe('Exercícios de Testes Unitário 1-5', () => {
  // Exercício 1
  test('A função sum(a, b) retorna a soma do parâmetro a com o b', () => {
    expect(typeof sum).toBe('function');
  });
  // Exercício 2
  test('Teste se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  // Exercício 3
  test('Teste se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  // Exercício 4
  test('Teste se a função sum lança um erro quando os parametros são 4 e "5" (string 5)', () => {
    expect(() => { sum(4, '5') }).toThrow();
  });
});