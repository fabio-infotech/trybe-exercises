/*
Reescreva o código do exercício anterior para que utilize async/await .
*/

async function calcularNumeros(a, b, c) {
  try {
    const result = ((a + b) * c);

    if (result <= 50) {
      throw new Error('Valor muito baixo');
    }

    return result;
  } catch (err) {
    console.error('Informe apenas números');
  }
}

const a = Math.floor(Math.random() * 100);
const b = Math.floor(Math.random() * 100);
const c = Math.floor(Math.random() * 100);

console.log(calcularNumeros(a, b, c));
