/*
Crie uma função que recebe três parâmetros retorna uma Promise .
  Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
  Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
  Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
  Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.
*/
function calcularNumeros(a, b, c) {
  return new Promise((resolve, reject) => {
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      reject(Error('Informe apenas números'));
    }

    const result = ((a + b) * c);

    if (result <= 50) {
      reject(Error('Valor muito baixo'));
    }

    resolve(result);
  });
}

calcularNumeros(100, 4, 6)
  .then(result => console.log(`sucesso: ${ result }`))
  .catch(err => console.log(`erro: ${ err.message }`));
