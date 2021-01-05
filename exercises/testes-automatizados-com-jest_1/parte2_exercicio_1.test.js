const { encode, decode } = require('./parte2_exercicio_1');

describe('Testa a função encode e decode', () => {
  // Exercício 1.2
  it('Teste se encode é uma função', () => {
    expect(typeof encode).toEqual('function');
  });
  it('Teste se decode é uma função', () => {
    expect(typeof decode).toEqual('function');
  });
  // Exercício 1.3
  it('converte apenas a vogal "a" no número 1', () => {
    expect(encode('ana')).toEqual('1n1');
  });
  it('converte a vogal "e" no número 2', () => {
    expect(encode('ele')).toEqual('2l2');
  });
  it('converte a vogal "i" no número 3', () => {
    expect(encode('xixi')).toEqual('x3x3');
  });
  it('converte a vogal "o" no número 4', () => {
    expect(encode('ovo')).toEqual('4v4');
  });
  it('converte a vogal "u" no número 5', () => {
    expect(encode('nu')).toEqual('n5');
  });
});