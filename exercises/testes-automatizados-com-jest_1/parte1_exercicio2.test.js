const myRemove = require('./parte1_exercicio2');

describe('Exercícios de Testes Unitário 2', () => {
  // Exercício 2.1
  test('A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item , caso ele exista no array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  // Exercício 2.2
  test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
});