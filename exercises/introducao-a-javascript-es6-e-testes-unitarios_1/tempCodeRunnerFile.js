const x = (frase, strReplace) => frase.replace('x', strReplace);

console.log(x('Tryber x aqui!', 'Bebeto'));

const arrayHabilidades = ['Git', 'HTML', 'JavaScript', 'CSS', 'Unix'];

const y = (frase) =>   
  `${frase}
  Minhas cinco habilidades são:
  - ${arrayHabilidades.sort()[0]};
  - ${arrayHabilidades.sort()[1]};
  - ${arrayHabilidades.sort()[2]};
  - ${arrayHabilidades.sort()[3]};
  - ${arrayHabilidades.sort()[4]};
  #goTrybe.
  `

console.log(y(x('Tryber x aqui!', 'Bebeto')));