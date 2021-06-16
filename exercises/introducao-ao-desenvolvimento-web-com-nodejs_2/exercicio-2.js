/*
Escreva um código para consumir a função construída no exercício anterior.
  Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() * 100) .
  Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
  Utilize then e catch para manipular a Promise retornada pela função:
    Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
    Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.
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

const a = Math.floor(Math.random() * 100);
const b = Math.floor(Math.random() * 100);
const c = Math.floor(Math.random() * 100);

calcularNumeros(a, b, c)
  .then((result) => console.log(`sucesso: ${ result }`))
  .catch((err) => console.log(`erro: ${ err.message }`));
  