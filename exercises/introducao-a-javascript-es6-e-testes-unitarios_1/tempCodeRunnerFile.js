const longestWord = (frase) => {let big = ''; 
  frase.split(' ').forEach(word => {   
    if (word.trim().length > big.length) {
      big = word.trim();
    }
  });
  return big;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")) // retorna 'aconteceu'