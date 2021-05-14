const readLine = require('readline-sync');

const inputPeso = readLine.questionFloat('Qual seu peso?');
const inputAltura = readLine.questionFloat('Qual sua altura?');

let imcSituacao;

function calculaIMC(peso, altura) {
  return (peso / (altura ** 2)).toFixed(2);
}

const imc = calculaIMC(inputPeso, inputAltura);

if (imc < 18.5) {
  imcSituacao = 'Abaixo do peso (magreza)';
} else if (imc >= 18.5 && imc <= 24.9) {
  imcSituacao = 'Peso normal';
} else if (imc >= 25.0 && imc <= 29.9) {
  imcSituacao = 'Acima do peso (sobrepeso)';
} else if (imc >= 30.0 && imc <= 34.9) {
  imcSituacao = 'Obesidade grau I';
} else if (imc >= 35.0 && imc <= 39.9) {
  imcSituacao = 'Obesidade grau II';
} else if (imc >= 40) {
  imcSituacao = 'Obesidade graus III e IV';
}

console.log('IMC = %s, Situação: %s', imc, imcSituacao);
