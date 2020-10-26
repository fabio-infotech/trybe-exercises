let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contadorNumerosImpares = 0;

for(let indice = 0; indice < numbers.length; indice++)
{
    if(numbers[indice] % 2 != 0)
    {
        contadorNumerosImpares ++;
    }
}

if(contadorNumerosImpares == 0)
{
    console.log("Nenhum valor ímpar encontrado!");
}
else
{
    console.log(`Total de números ímpares: ${contadorNumerosImpares}`);
}