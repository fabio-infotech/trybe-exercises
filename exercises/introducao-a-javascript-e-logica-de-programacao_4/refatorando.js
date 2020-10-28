let num1 = 10;
let num2 = 20;
let num3 = 30;

//let media = (num1 + num2 + num3) / 3;

//console.log(media);

//--------------------------------------------------
//refatorado
function media (num1, num2, num3)
{
    return (num1 + num2 + num3) / 3;
};

console.log(media(10, 20, 30));

//---------------------------------------------------
let nome = 'Gustavo';
let sobrenome = 'Caetano';
let nomeCompleto = nome + ' ' + sobrenome;

console.log(nomeCompleto);

function fullName (nome, sobrenome)
{
    return nome + ' ' + sobrenome;
};

console.log(fullName('Gustavo', 'Caetano'));

//---------------------------------------------------
//Gerar Array Com 100 Caracteres
function geraArray (caracter)
{
    let array = [];
    for (let index = 0; index < 100; index += 1)
    {
        array.push(caracter);
    }

    return array;
};

console.log(geraArray('$'));

//---------------------------------------------------
//mega-sena <3
// let firstNumber = Math.ceil(Math.random() * 60);
// let secoundNumber = Math.ceil(Math.random() * 60);
// let thirdNumber = Math.ceil(Math.random() * 60);
// let fourthNumber = Math.ceil(Math.random() * 60);
// let fifthNumber = Math.ceil(Math.random() * 60);
// let sixthNumber = Math.ceil(Math.random() * 60);

//Refatorando 1
// let firstNumber = randomNumber(90);
// let secoundNumber = randomNumber(90);
// let thirdNumber = randomNumber(90);
// let fourthNumber = randomNumber(90);
// let fifthNumber = randomNumber(90);
// let sixthNumber = randomNumber(90);

//Refatorando 2
function randomNumber (maxValue)
{
    return Math.ceil(Math.random() * maxValue);
};

function generateNumber (qtdNumeros)
{
    let numbers = [];
    for (let index = 0; index < qtdNumeros; index += 1)
    {
        numbers.push(randomNumber(60));
    }

    return numbers;
};

let megaSenaNumbers = generateNumber(6);

//console.log(firstNumber, secoundNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber);
console.log(megaSenaNumbers);