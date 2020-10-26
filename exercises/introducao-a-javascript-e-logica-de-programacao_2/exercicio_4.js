let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0, mediaAritimetica;

for(let indice = 0; indice < numbers.length; indice++)
{
    soma = soma + numbers[indice];
}

mediaAritimetica = soma / numbers.length;

if(mediaAritimetica > 20)
{
    console.log("Valor maior que 20.");   
}
else
{
    console.log("Valor menor que 20.");
}