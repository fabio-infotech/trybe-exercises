// Exercício 1
// Criação do elemento html
let h1 = document.createElement('h1');
// Definindo propriedades do elemento html
h1.innerHTML = 'Exercício 5.2 - JavaScript DOM';
// Inclindo o elemento na página html
document.body.appendChild(h1);

// Exercicio 2
let div = document.createElement('div');
div.className = 'main-container';
document.body.appendChild(div);

// Exercício 3
div = document.createElement('div');
div.className = 'center-content';
document.querySelector('.main-container').appendChild(div);

// Exercício 4
let p = document.createElement('p');
p.innerHTML = 'Inclusão da tag p';
document.querySelector('.center-content').appendChild(p);