let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorValor = 0;

for(let indice = 0; indice < numbers.length; indice++)
{
    if(numbers[indice] > maiorValor)
    {
        maiorValor = numbers[indice];
    }
}

console.log(`Maior valor: ${maiorValor}`);