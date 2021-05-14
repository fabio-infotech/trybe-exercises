const readLine = require('readline-sync');

const inputPeso = readLine.questionFloat('Qual seu peso?');
const inputAltura = readLine.questionFloat('Qual sua altura?');

function calculaIMC(peso, altura) {
  return (peso / (altura ** 2)).toFixed(2);
}

console.log('IMC = %s', calculaIMC(inputPeso, inputAltura));
