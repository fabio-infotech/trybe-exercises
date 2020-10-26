let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0, mediaAritimetica;

for(let indice = 0; indice < numbers.length; indice++)
{
    soma = soma + numbers[indice];
}

mediaAritimetica = soma / numbers.length;

console.log(`Média aritimética é igual a: ${mediaAritimetica}`);