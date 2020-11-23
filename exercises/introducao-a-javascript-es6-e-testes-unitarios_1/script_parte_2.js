const num = 6;

const fatorial = (x) => { if (x <= 1) return 1; else return x * fatorial(x-1) }

console.log(`O fatorial de ${num} é ${fatorial(num)}`);

const longestWord = (frase) => {
  let big = ''; 
  frase.split(' ').forEach(word => {   
    if (word.trim().length > big.length) {
      big = word.trim();
    }
  });
  return big;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")) // retorna 'aconteceu'