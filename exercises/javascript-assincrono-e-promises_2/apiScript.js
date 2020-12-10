// Como o primeiro exercício, vamos usar a função fetch , que vimos na aula ao vivo, para criar um site simples com um gerador de piadas ruins! . Como?
const API_URL = 'https://icanhazdadjoke.com/';

const appendJoke = (jokeId, jokeMessage) => {
  let h1 = document.querySelector('h1');
  let h2 = document.querySelector('h2');
  h1.innerHTML = jokeMessage;
  h2.id = jokeId;
}

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  
  fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => appendJoke(data.id, data.joke));
};

window.onload = () => fetchJoke();