// Exercício 1
// Criação do elemento html
let h1 = document.createElement('h1');
// Definindo propriedades do elemento html
h1.innerHTML = 'Exercício 5.2 - JavaScript DOM';
// Inclindo o elemento na página html
document.body.appendChild(h1);

// Exercicio 2
let div = document.createElement('div');
div.className = 'main-content';
document.body.appendChild(div);

// Exercício 3
div = document.createElement('div');
div.className = 'center-content';
document.querySelector('.main-content').appendChild(div);

// Exercício 4
let p = document.createElement('p');
p.innerHTML = 'Inclusão da tag p';
document.querySelector('.center-content').appendChild(p);

// Exercício 5
div = document.createElement('div');
div.className = 'left-content';
document.querySelector('.main-content').appendChild(div);

// Exercício 6
div = document.createElement('div');
div.className = 'right-content';
document.querySelector('.main-content').appendChild(div);

// Exercício 7
let img = document.createElement('img');
img.className = 'small-image';
img.src = "https://picsum.photos/200";
document.querySelector('.left-content').appendChild(img);

// Exercício 8
let ul = document.createElement('ul');
document.querySelector('.right-content').appendChild(ul);

let numbersList = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
let getNumbersList = document.querySelector('ul');

for (let index = 0; index < numbersList.length; index += 1) {
  let number = numbersList[index];
  let numberItem = document.createElement('li');

  numberItem.innerHTML = number;
  getNumbersList.appendChild(numberItem);  
}

// Exercício 9
let h3 = document.createElement('h3');
document.querySelector('.main-content').appendChild(h3);
h3 = document.createElement('h3');
document.querySelector('.main-content').appendChild(h3);
h3 = document.createElement('h3');
document.querySelector('.main-content').appendChild(h3);

// Exercício 1 parte 2
document.querySelector('h1').className = "title";

// Exercício 2 parte 2
document.querySelectorAll('h3')[0].className = "description";
document.querySelectorAll('h3')[1].className = "description";
document.querySelectorAll('h3')[2].className = "description";

// Exercício 3 parte 2
div = document.querySelector('.left-content');
document.querySelector('.main-content').removeChild(div);