const testingScope = (escopo) => { 
  if (escopo === true) { 
    let ifScope = `Não devo ser utilizada fora do meu escopo (if) ótimo, fui utilizada no escopo !`;    
    console.log(ifScope);
  } else {
    let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
    console.log(elseScope);
  }
}

console.log(testingScope(true));

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a, b) => a - b);

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);