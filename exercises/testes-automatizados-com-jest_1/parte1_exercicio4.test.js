const myFizzBuzz = require('./parte1_exercicio4');

describe('Exercícios de Testes Unitário 4', () => {
  // Exercício 4.5
  test('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  // Exercício 4.6
  test('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });
  // Exercício 4.7
  test('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(25)).toBe('buzz');
  });
  // Exercício 4.8
  test('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(17)).toBe(17);
  });
  // Exercício 4.9
  test('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz('this_is_not_a_number')).toBeFalsy();
  });
});