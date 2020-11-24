// Requisito 3
const addCount = document.getElementById('addCount');
const divCount = document.getElementById('div-count');

var count = 0;

addCount.addEventListener('click', function(){
  divCount.innerHTML = count;
  count++;
});

// Requisito 4
const x = (frase, strReplace) => frase.replace('x', strReplace);

console.log(x('Tryber x aqui!', 'Bebeto'));

const arrayHabilidades = ['Git', 'HTML', 'JavaScript', 'CSS', 'Unix'];