let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorValor = 0;

for(let indice = 0; indice < numbers.length; indice++)
{
    if(indice == 0)
    {
        menorValor = numbers[indice];
    }
    else if(numbers[indice] < menorValor)
    {
        menorValor = numbers[indice];
    }
}

console.log(`Menor valor: ${menorValor}`);