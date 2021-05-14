const readLine = require('readline-sync');

const distancia = readLine.questionInt('Qual a distância?');
const tempo = readLine.questionInt('Qual o tempo?');

function calculaVelocidade(distancia, tempo) {
  return (distancia / tempo).toFixed(2);
}

const velocidade = calculaVelocidade(distancia, tempo);

console.log('Velocidade = %s', velocidade);
