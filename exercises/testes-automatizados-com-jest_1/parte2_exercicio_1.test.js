const { encode, decode } = require('./parte2_exercicio_1');

describe('Testa a função encode e decode', () => {
  // Exercício 1.2
  it('Teste se encode é uma função', () => {
    expect(typeof encode).toEqual('function');
  });
  it('Teste se decode é uma função', () => {
    expect(typeof decode).toEqual('function');
  });
});